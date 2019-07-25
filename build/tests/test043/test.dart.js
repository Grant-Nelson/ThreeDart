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
a[c]=function(){a[c]=function(){H.nL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ky(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
mP:function(a,b,c,d){P.hT(b,"start")
return new H.il(a,b,c,[d])},
kT:function(){return new P.c5("No element")},
mr:function(){return new P.c5("Too many elements")},
mq:function(){return new P.c5("Too few elements")},
a3:function a3(a){this.a=a},
fV:function fV(){},
c_:function c_(){},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(){},
c7:function c7(){},
en:function en(){},
ck:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
np:function(a){return v.types[H.af(a)]},
nw:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.f(H.cd(a))
return u},
cJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c2:function(a){return H.mA(a)+H.kv(H.bQ(a),0,null)},
mA:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$id4){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ck(t.length>1&&C.j.bg(t,0)===36?C.j.d1(t,1):t)},
l9:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mJ:function(a){var u,t,s,r=H.d([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.cd(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.bk(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.cd(s))}return H.l9(r)},
la:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.cd(s))
if(s<0)throw H.f(H.cd(s))
if(s>65535)return H.mJ(a)}return H.l9(a)},
mI:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bk(u,10))>>>0,56320|u&1023)}throw H.f(P.aB(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mH:function(a){var u=H.c1(a).getFullYear()+0
return u},
mF:function(a){var u=H.c1(a).getMonth()+1
return u},
mB:function(a){var u=H.c1(a).getDate()+0
return u},
mC:function(a){var u=H.c1(a).getHours()+0
return u},
mE:function(a){var u=H.c1(a).getMinutes()+0
return u},
mG:function(a){var u=H.c1(a).getSeconds()+0
return u},
mD:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
F:function(a){throw H.f(H.cd(a))},
k:function(a,b){if(a==null)J.aU(a)
throw H.f(H.cf(a,b))},
cf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,s,null)
u=H.af(J.aU(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.hS(b,s)},
nj:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aH(!0,b,"end",null)},
cd:function(a){return new P.aH(!0,a,null,null)},
nh:function(a){if(typeof a!=="number")throw H.f(H.cd(a))
return a},
f:function(a){var u
if(a==null)a=new P.dZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lO})
u.name=""}else u.toString=H.lO
return u},
lO:function(){return J.au(this.dartException)},
t:function(a){throw H.f(a)},
E:function(a){throw H.f(P.bx(a))},
b8:function(a){var u,t,s,r,q,p
a=H.lM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
li:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l3:function(a,b){return new H.hK(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.hd(a,t,u?null:b.receiver)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bk(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l3(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lR()
q=$.lS()
p=$.lT()
o=$.lU()
n=$.lX()
m=$.lY()
l=$.lW()
$.lV()
k=$.m_()
j=$.lZ()
i=r.al(u)
if(i!=null)return f.$1(H.kh(H.J(u),i))
else{i=q.al(u)
if(i!=null){i.method="call"
return f.$1(H.kh(H.J(u),i))}else{i=p.al(u)
if(i==null){i=o.al(u)
if(i==null){i=n.al(u)
if(i==null){i=m.al(u)
if(i==null){i=l.al(u)
if(i==null){i=o.al(u)
if(i==null){i=k.al(u)
if(i==null){i=j.al(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l3(H.J(u),i))}}return f.$1(new H.iN(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eb()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aH(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eb()
return a},
ci:function(a){var u
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
nn:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.p(0,a[u],a[t])}return b},
nv:function(a,b,c,d,e,f){H.e(a,"$ibC")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nv)
a.$identity=u
return u},
mi:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cn(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aV
if(typeof t!=="number")return t.I()
$.aV=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kL(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.np,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kK:H.k8
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kL(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mf:function(a,b,c,d){var u=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mf(t,!r,u,b)
if(t===0){r=$.aV
if(typeof r!=="number")return r.I()
$.aV=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
return new Function(r+H.m(q==null?$.co=H.fB("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aV
if(typeof r!=="number")return r.I()
$.aV=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
return new Function(r+H.m(q==null?$.co=H.fB("self"):q)+"."+H.m(u)+"("+o+");}")()},
mg:function(a,b,c,d){var u=H.k8,t=H.kK
switch(b?-1:a){case 0:throw H.f(H.mM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mh:function(a,b){var u,t,s,r,q,p,o,n=$.co
if(n==null)n=$.co=H.fB("self")
u=$.kJ
if(u==null)u=$.kJ=H.fB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mg(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.aV
if(typeof u!=="number")return u.I()
$.aV=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.aV
if(typeof u!=="number")return u.I()
$.aV=u+1
return new Function(n+u+"}")()},
ky:function(a,b,c,d,e,f,g){return H.mi(a,b,H.af(c),d,!!e,!!f,g)},
k8:function(a){return a.a},
kK:function(a){return a.c},
fB:function(a){var u,t,s,r=new H.cn("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.nd("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aT(a,"String"))},
nk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aT(a,"double"))},
nB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aT(a,"num"))},
kw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aT(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aT(a,"int"))},
lK:function(a,b){throw H.f(H.aT(a,H.ck(H.J(b).substring(2))))},
nD:function(a,b){throw H.f(H.me(a,H.ck(H.J(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.lK(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.nD(a,b)},
kB:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.f(H.aT(a,"List<dynamic>"))},
nx:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.lK(a,b)},
lE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
fo:function(a,b){var u
if(typeof a=="function")return!0
u=H.lE(J.U(a))
if(u==null)return!1
return H.lt(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ks)return a
$.ks=!0
try{if(H.fo(a,b))return a
u=H.k3(b)
t=H.aT(a,u)
throw H.f(t)}finally{$.ks=!1}},
kz:function(a,b){if(a!=null&&!H.kx(a,b))H.t(H.aT(a,H.k3(b)))
return a},
aT:function(a,b){return new H.iF("TypeError: "+P.dF(a)+": type '"+H.lx(a)+"' is not a subtype of type '"+b+"'")},
me:function(a,b){return new H.fF("CastError: "+P.dF(a)+": type '"+H.lx(a)+"' is not a subtype of type '"+b+"'")},
lx:function(a){var u,t=J.U(a)
if(!!t.$icp){u=H.lE(t)
if(u!=null)return H.k3(u)
return"Closure"}return H.c2(a)},
nd:function(a){throw H.f(new H.j3(a))},
nL:function(a){throw H.f(new P.fO(H.J(a)))},
mM:function(a){return new H.i_(a)},
lF:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
oq:function(a,b,c){return H.cj(a["$a"+H.m(c)],H.bQ(b))},
bd:function(a,b,c,d){var u
H.J(c)
H.af(d)
u=H.cj(a["$a"+H.m(c)],H.bQ(b))
return u==null?null:u[d]},
ae:function(a,b,c){var u
H.J(b)
H.af(c)
u=H.cj(a["$a"+H.m(b)],H.bQ(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.af(b)
u=H.bQ(a)
return u==null?null:u[b]},
k3:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.i(b,"$ib",[P.l],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.kv(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.m(b[t])}if('func' in a)return H.n6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.l]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.k(a0,n)
p=C.j.I(p,a0[n])
m=u[q]
if(m!=null&&m!==P.V)p+=" extends "+H.bP(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bP(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bP(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nm(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bP(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kv:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.l],"$ab")
if(a==null)return""
u=new P.bL("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jR:function(a,b,c,d){var u,t
H.J(b)
H.kB(c)
H.J(d)
if(a==null)return!1
u=H.bQ(a)
t=J.U(a)
if(t[b]==null)return!1
return H.lA(H.cj(t[d],u),null,c,null)},
i:function(a,b,c,d){H.J(b)
H.kB(c)
H.J(d)
if(a==null)return a
if(H.jR(a,b,c,d))return a
throw H.f(H.aT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.kv(c,0,null),v.mangledGlobalNames)))},
lA:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aG(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aG(a[t],b,c[t],d))return!1
return!0},
oo:function(a,b,c){return a.apply(b,H.cj(J.U(b)["$a"+H.m(c)],H.bQ(b)))},
lH:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="P"||a===-1||a===-2||H.lH(u)}return!1},
kx:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="P"||b===-1||b===-2||H.lH(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fo(a,b)}u=J.U(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aG(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.kx(a,b))throw H.f(H.aT(a,H.k3(b)))
return a},
aG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.lt(a,b,c,d)
if('func' in a)return c.name==="bC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aG("type" in a?a.type:l,b,s,d)
else if(H.aG(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.cj(r,u?a.slice(1):l)
return H.aG(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lA(H.cj(m,u),b,p,d)},
lt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aG(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aG(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aG(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aG(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nA(h,b,g,d)},
nA:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aG(c[s],d,a[s],b))return!1}return!0},
op:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
ny:function(a){var u,t,s,r,q=H.J($.lG.$1(a)),p=$.jT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.lz.$2(a,q))
if(q!=null){p=$.jT[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k2(u)
$.jT[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jZ[q]=u
return u}if(s==="-"){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lJ(a,u)
if(s==="*")throw H.f(P.ko(q))
if(v.leafTags[q]===true){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lJ(a,u)},
lJ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k2:function(a){return J.kC(a,!1,null,!!a.$iK)},
nz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k2(u)
else return J.kC(u,c,null,null)},
nt:function(){if(!0===$.kA)return
$.kA=!0
H.nu()},
nu:function(){var u,t,s,r,q,p,o,n
$.jT=Object.create(null)
$.jZ=Object.create(null)
H.ns()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lL.$1(q)
if(p!=null){o=H.nz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ns:function(){var u,t,s,r,q,p,o=C.F()
o=H.cc(C.G,H.cc(C.H,H.cc(C.w,H.cc(C.w,H.cc(C.I,H.cc(C.J,H.cc(C.K(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lG=new H.jW(r)
$.lz=new H.jX(q)
$.lL=new H.jY(p)},
cc:function(a,b){return a(b)||b},
mt:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.h6("Illegal RegExp pattern ("+String(r)+")",a))},
nG:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nl:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lN:function(a,b,c){var u=H.nH(a,b,c)
return u},
nH:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lM(b),'g'),H.nl(c))},
nI:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.nJ(a,u,u+b.length,c)},
nJ:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hK:function hK(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
k5:function k5(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cp:function cp(){},
ip:function ip(){},
ic:function ic(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a){this.a=a},
fF:function fF(a){this.a=a},
i_:function i_(a){this.a=a},
j3:function j3(a){this.a=a},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cf(b,a))},
n5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nj(a,b,c))
return b},
cF:function cF(){},
dX:function dX(){},
c0:function c0(){},
cE:function cE(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
cG:function cG(){},
hH:function hH(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
nm:function(a){return J.kU(a?Object.keys(a):[],null)},
nC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jV:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kA==null){H.nt()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.ko("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kE()]
if(r!=null)return r
r=H.ny(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kE(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ms:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.k7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aB(a,0,4294967295,"length",null))
return J.kU(new Array(a),b)},
kU:function(a,b){return J.ke(H.d(a,[b]))},
ke:function(a){H.kB(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.jV(a)},
fp:function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.jV(a)},
jU:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.jV(a)},
no:function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.d4.prototype
return a},
ch:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.jV(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).n(a,b)},
m5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fp(a).j(a,b)},
m6:function(a,b,c){return J.ch(a).i4(a,b,c)},
m7:function(a,b,c,d){return J.ch(a).j6(a,b,c,d)},
dn:function(a,b){return J.jU(a).D(a,b)},
m8:function(a,b){return J.jU(a).O(a,b)},
m9:function(a){return J.ch(a).gjb(a)},
kG:function(a){return J.ch(a).gck(a)},
ma:function(a){return J.ch(a).gco(a)},
bR:function(a){return J.U(a).gJ(a)},
bS:function(a){return J.jU(a).gS(a)},
aU:function(a){return J.fp(a).gk(a)},
kH:function(a){return J.jU(a).jM(a)},
mb:function(a,b){return J.ch(a).jO(a,b)},
mc:function(a){return J.no(a).jX(a)},
au:function(a){return J.U(a).i(a)},
a:function a(){},
hb:function hb(){},
dK:function dK(){},
dM:function dM(){},
hO:function hO(){},
d4:function d4(){},
bH:function bH(){},
aZ:function aZ(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dL:function dL(){},
dJ:function dJ(){},
dI:function dI(){},
bZ:function bZ(){}},P={
mV:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ce(new P.j5(s),1)).observe(u,{childList:true})
return new P.j4(s,u,t)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
mW:function(a){self.scheduleImmediate(H.ce(new P.j6(H.n(a,{func:1,ret:-1})),0))},
mX:function(a){self.setImmediate(H.ce(new P.j7(H.n(a,{func:1,ret:-1})),0))},
mY:function(a){P.km(C.n,H.n(a,{func:1,ret:-1}))},
km:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a2(a.a,1000)
return P.n2(u<0?0:u,b)},
lh:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b6]})
u=C.f.a2(a.a,1000)
return P.n3(u<0?0:u,b)},
n2:function(a,b){var u=new P.f7()
u.fc(a,b)
return u},
n3:function(a,b){var u=new P.f7()
u.fd(a,b)
return u},
mZ:function(a,b){var u,t,s
b.a=1
try{a.ey(new P.jg(b),new P.jh(b),null)}catch(s){u=H.at(s)
t=H.ci(s)
P.nE(new P.ji(b,u,t))}},
lo:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaF")
if(u>=4){t=b.c8()
b.a=a.a
b.c=a.c
P.d8(b,t)}else{t=H.e(b.c,"$ibb")
b.a=2
b.c=a
a.dE(t)}},
d8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$ial")
g=g.b
r=s.a
q=s.b
g.toString
P.jO(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d8(h.a,b)}g=h.a
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
if(m){H.e(o,"$ial")
g=g.b
r=o.a
q=o.b
g.toString
P.jO(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jm(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jl(u,b,o).$0()}else if((g&2)!==0)new P.jk(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.U(g).$icx){if(g.a>=4){k=H.e(q.c,"$ibb")
q.c=null
b=q.bj(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lo(g,q)
return}}j=b.b
k=H.e(j.c,"$ibb")
j.c=null
b=j.bj(k)
g=u.a
r=u.b
if(!g){H.D(r,H.w(j,0))
j.a=4
j.c=r}else{H.e(r,"$ial")
j.a=8
j.c=r}h.a=j
g=j}},
n9:function(a,b){if(H.fo(a,{func:1,args:[P.V,P.ar]}))return H.n(a,{func:1,ret:null,args:[P.V,P.ar]})
if(H.fo(a,{func:1,args:[P.V]}))return H.n(a,{func:1,ret:null,args:[P.V]})
throw H.f(P.k7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n8:function(){var u,t
for(;u=$.cb,u!=null;){$.dj=null
t=u.b
$.cb=t
if(t==null)$.di=null
u.a.$0()}},
nc:function(){$.kt=!0
try{P.n8()}finally{$.dj=null
$.kt=!1
if($.cb!=null)$.kF().$1(P.lB())}},
lw:function(a){var u=new P.eu(H.n(a,{func:1,ret:-1}))
if($.cb==null){$.cb=$.di=u
if(!$.kt)$.kF().$1(P.lB())}else $.di=$.di.b=u},
nb:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cb
if(u==null){P.lw(a)
$.dj=$.di
return}t=new P.eu(a)
s=$.dj
if(s==null){t.b=u
$.cb=$.dj=t}else{t.b=s.b
$.dj=s.b=t
if(t.b==null)$.di=t}},
nE:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.k===u){P.jQ(t,t,C.k,a)
return}u.toString
P.jQ(t,t,u,H.n(u.cf(a),s))},
lg:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.k){u.toString
return P.km(a,b)}return P.km(a,H.n(u.cf(b),t))},
mT:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b6]}
H.n(b,s)
u=$.a1
if(u===C.k){u.toString
return P.lh(a,b)}t=u.dO(b,P.b6)
$.a1.toString
return P.lh(a,H.n(t,s))},
jO:function(a,b,c,d,e){var u={}
u.a=d
P.nb(new P.jP(u,e))},
lu:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
lv:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
na:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
jQ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cf(d):c.jc(d,-1)
P.lw(d)},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
f7:function f7(){this.c=0},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aF:function aF(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jf:function jf(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a
this.b=null},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
cP:function cP(){},
ih:function ih(){},
b6:function b6(){},
al:function al(a,b){this.a=a
this.b=b},
jL:function jL(){},
jP:function jP(a,b){this.a=a
this.b=b},
ju:function ju(){},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function(a,b){return new H.b_([a,b])},
mv:function(a){return H.nn(a,new H.b_([null,null]))},
dQ:function(a){return new P.jr([a])},
kr:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lr:function(a,b,c){var u=new P.js(a,b,[c])
u.c=a.e
return u},
mp:function(a,b,c){var u,t
if(P.ku(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.l])
C.a.h($.as,a)
try{P.n7(a,u)}finally{if(0>=$.as.length)return H.k($.as,-1)
$.as.pop()}t=P.lc(b,H.nx(u,"$ic"),", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.ku(a))return b+"..."+c
u=new P.bL(b)
C.a.h($.as,a)
try{t=u
t.a=P.lc(t.a,a,", ")}finally{if(0>=$.as.length)return H.k($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ku:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
n7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.l],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.m(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.u();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kW:function(a,b){var u,t,s=P.dQ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t)s.h(0,H.D(a[t],b))
return s},
kY:function(a){var u,t={}
if(P.ku(a))return"{...}"
u=new P.bL("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.m8(a,new P.hl(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.k($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jr:function jr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
js:function js(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(){},
u:function u(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
ag:function ag(){},
jz:function jz(){},
eK:function eK(){},
cq:function cq(){},
dy:function dy(){},
fX:function fX(){},
iQ:function iQ(){},
iR:function iR(){},
jJ:function jJ(a){this.b=0
this.c=a},
mo:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c2(a)+"'"},
mw:function(a,b,c){var u,t
H.D(b,c)
u=J.ms(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.p(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
kX:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bS(a);u.u();)C.a.h(s,H.D(u.gH(u),c))
if(b)return s
return H.i(J.ke(s),"$ib",t,"$ab")},
kl:function(a){var u,t,s=P.A
H.i(a,"$ic",[s],"$ac")
if(a.constructor===Array){H.i(a,"$iaZ",[s],"$aaZ")
u=a.length
t=P.ki(0,null,u)
return H.la(t<u?C.a.eH(a,0,t):a)}return P.mO(a,0,null)},
mO:function(a,b,c){var u,t,s
H.i(a,"$ic",[P.A],"$ac")
u=J.bS(a)
for(t=0;t<b;++t)if(!u.u())throw H.f(P.aB(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gH(u))
return H.la(s)},
mK:function(a){return new H.hc(a,H.mt(a,!1,!0,!1))},
lc:function(a,b,c){var u=J.bS(b)
if(!u.u())return a
if(c.length===0){do a+=H.m(u.gH(u))
while(u.u())}else{a+=H.m(u.gH(u))
for(;u.u();)a=a+c+H.m(u.gH(u))}return a},
n4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.A],"$ab")
if(c===C.x){u=$.m4().b
u=u.test(b)}else u=!1
if(u)return b
t=C.M.je(H.D(b,H.ae(c,"cq",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.mI(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mk:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ml:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
kO:function(a,b){return new P.bz(1e6*b+1000*a)},
dF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mo(a)},
md:function(a){return new P.aH(!1,null,null,a)},
k7:function(a,b,c){return new P.aH(!0,a,b,c)},
hS:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c){if(0>a||a>c)throw H.f(P.aB(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aB(b,a,c,"end",null))
return b}return c},
hT:function(a,b){if(typeof a!=="number")return a.aM()
if(a<0)throw H.f(P.aB(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.af(e==null?J.aU(b):e)
return new P.ha(u,!0,a,c,"Index out of range")},
I:function(a){return new P.iO(a)},
ko:function(a){return new P.iM(a)},
kk:function(a){return new P.c5(a)},
bx:function(a){return new P.fJ(a)},
q:function(a){return new P.eC(a)},
kD:function(a){H.nC(a)},
T:function T(){},
az:function az(a,b){this.a=a
this.b=b},
y:function y(){},
bz:function bz(a){this.a=a},
fT:function fT(){},
fU:function fU(){},
bA:function bA(){},
ft:function ft(){},
dZ:function dZ(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iO:function iO(a){this.a=a},
iM:function iM(a){this.a=a},
c5:function c5(a){this.a=a},
fJ:function fJ(a){this.a=a},
hN:function hN(){},
eb:function eb(){},
fO:function fO(a){this.a=a},
eC:function eC(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
bC:function bC(){},
A:function A(){},
c:function c(){},
aY:function aY(){},
b:function b(){},
Q:function Q(){},
P:function P(){},
aa:function aa(){},
V:function V(){},
ar:function ar(){},
l:function l(){},
bL:function bL(a){this.a=a},
lD:function(a){var u,t=J.U(a)
if(!!t.$ibD){u=t.gco(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fc(a.data,a.height,a.width)},
lC:function(a){if(a instanceof P.fc)return{data:a.a,height:a.b,width:a.c}
return a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.kV(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.J(t[r])
u.p(0,q,a[q])}return u},
ni:function(a){var u={}
a.O(0,new P.jS(u))
return u},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(){},
jq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jt:function jt(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b1:function b1(){},
hf:function hf(){},
b5:function b5(){},
hL:function hL(){},
hR:function hR(){},
cM:function cM(){},
ik:function ik(){},
p:function p(){},
b7:function b7(){},
iC:function iC(){},
eI:function eI(){},
eJ:function eJ(){},
eS:function eS(){},
eT:function eT(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
bT:function bT(){},
hM:function hM(){},
ev:function ev(){},
ds:function ds(){},
dH:function dH(){},
e1:function e1(){},
e4:function e4(){},
c4:function c4(){},
e5:function e5(){},
ed:function ed(){},
em:function em(){},
ib:function ib(){},
f_:function f_(){},
f0:function f0(){}},W={
kI:function(){var u=document.createElement("a")
return u},
fE:function(){var u=document.createElement("canvas")
return u},
mm:function(a,b,c){var u=document.body,t=(u&&C.u).aj(u,a,b,c)
t.toString
u=W.C
u=new H.d5(new W.ao(t),H.n(new W.fW(),{func:1,ret:P.T,args:[u]}),[u])
return H.e(u.gaO(u),"$iO")},
mn:function(a){H.e(a,"$ij")
return"wheel"},
cu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ch(a)
t=u.gew(a)
if(typeof t==="string")r=u.gew(a)}catch(s){H.at(s)}return r},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lq:function(a,b,c,d){var u=W.jp(W.jp(W.jp(W.jp(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.ly(new W.je(c),W.o)
if(u!=null&&!0)J.m7(a,b,u,!1)
return new W.jd(a,b,u,!1,[e])},
lp:function(a){var u=W.kI(),t=window.location
u=new W.bO(new W.jy(u,t))
u.eU(a)
return u},
n_:function(a,b,c,d){H.e(a,"$iO")
H.J(b)
H.J(c)
H.e(d,"$ibO")
return!0},
n0:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.J(b)
H.J(c)
u=H.e(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ls:function(){var u=P.l,t=P.kW(C.q,u),s=H.w(C.q,0),r=H.n(new W.jG(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.jF(t,P.dQ(u),P.dQ(u),P.dQ(u),null)
t.fa(null,new H.ho(C.q,r,[s,u]),q,null)
return t},
ly:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.k)return a
return u.dO(a,b)},
v:function v(){},
fq:function fq(){},
dp:function dp(){},
fs:function fs(){},
cm:function cm(){},
dr:function dr(){},
br:function br(){},
bt:function bt(){},
bV:function bV(){},
bu:function bu(){},
bv:function bv(){},
cs:function cs(){},
fK:function fK(){},
W:function W(){},
ct:function ct(){},
fL:function fL(){},
aW:function aW(){},
aX:function aX(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
dB:function dB(){},
fQ:function fQ(){},
dC:function dC(){},
dD:function dD(){},
fR:function fR(){},
fS:function fS(){},
j9:function j9(a,b){this.a=a
this.b=b},
O:function O(){},
fW:function fW(){},
o:function o(){},
j:function j(){},
aI:function aI(){},
h0:function h0(){},
h1:function h1(){},
h5:function h5(){},
aJ:function aJ(){},
h8:function h8(){},
bY:function bY(){},
bD:function bD(){},
cz:function cz(){},
b0:function b0(){},
dR:function dR(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
hz:function hz(a){this.a=a},
aK:function aK(){},
hA:function hA(){},
a7:function a7(){},
ao:function ao(a){this.a=a},
C:function C(){},
cH:function cH(){},
aL:function aL(){},
hP:function hP(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i0:function i0(){},
aM:function aM(){},
i9:function i9(){},
aN:function aN(){},
ia:function ia(){},
aO:function aO(){},
id:function id(){},
ie:function ie(a){this.a=a},
aC:function aC(){},
bk:function bk(){},
ec:function ec(){},
im:function im(){},
io:function io(){},
cR:function cR(){},
aP:function aP(){},
aD:function aD(){},
iq:function iq(){},
ir:function ir(){},
ix:function ix(){},
aR:function aR(){},
aS:function aS(){},
iA:function iA(){},
iB:function iB(){},
bN:function bN(){},
iP:function iP(){},
j1:function j1(){},
ba:function ba(){},
d6:function d6(){},
d7:function d7(){},
ja:function ja(){},
ex:function ex(){},
jo:function jo(){},
eP:function eP(){},
jC:function jC(){},
jD:function jD(){},
j8:function j8(){},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
je:function je(a){this.a=a},
bO:function bO(a){this.a=a},
B:function B(){},
dY:function dY(a){this.a=a},
hJ:function hJ(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(){},
jA:function jA(){},
jB:function jB(){},
jF:function jF(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jG:function jG(){},
jE:function jE(){},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
av:function av(){},
jy:function jy(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a},
jK:function jK(a){this.a=a},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
dd:function dd(){},
de:function de(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
df:function df(){},
dg:function dg(){},
f8:function f8(){},
f9:function f9(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){}},O={
fH:function(a){var u=new O.Y([a])
u.bd(a)
return u},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cC:function cC(){this.b=this.a=null},
dU:function dU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cB:function cB(){},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b2:function b2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){this.c=this.b=this.a=null},
bM:function bM(){},
ee:function ee(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aQ:function aQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
cv:function(a){var u=new E.am()
u.a=""
u.b=!0
u.seT(0,O.fH(E.am))
u.y.aN(u.gjv(),u.gjy())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scZ(0,a)
u.saL(null)
u.scK(null)
return u},
mL:function(a,b){var u=new E.hU(a)
u.eP(a,b)
return u},
mS:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibV)return E.lf(a,!0,!0,!0,!1)
u=W.fE()
t=u.style
t.width="100%"
t.height="100%"
s.gck(a).h(0,u)
return E.lf(u,!0,!0,!0,!1)},
lf:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.e(C.l.cU(a,"webgl2",P.mv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mL(j,a)
u=new T.it(j)
H.af(j.getParameter(3379))
u.c=H.af(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eo(a)
t=new X.he()
t.c=new X.aq(!1,!1,!1)
t.si0(P.dQ(P.A))
u.b=t
t=new X.hB(u)
t.f=0
t.r=V.bi()
t.x=V.bi()
t.ch=t.Q=1
u.c=t
t=new X.hj(u)
t.r=0
t.x=V.bi()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iz(u)
t.f=V.bi()
t.r=V.bi()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfF(H.d([],[[P.cP,P.V]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.n(u.ghi(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.n(u.ghs(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.n(u.ghc(),o),!1,p))
t=u.z
n=W.b0
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.n(u.ghw(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.n(u.ghu(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.n(u.ghA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.n(u.ghE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.n(u.ghC(),q),!1,r))
n=u.z
m=W.ba;(n&&C.a).h(n,W.a9(a,H.J(W.mn(a)),H.n(u.ghG(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.n(u.ghk(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.n(u.ghm(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.n(u.ghI(),o),!1,p))
p=u.z
o=W.aS
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.n(u.ghY(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.n(u.ghU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.n(u.ghW(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dG()
return k},
fA:function fA(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iw:function iw(a){this.a=a}},Z={
kp:function(a,b,c){var u
H.i(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ca(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,u)},
aE:function(a){return new Z.b9(a)},
et:function et(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c8:function c8(a){this.a=a},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a){this.a=a}},D={
H:function(){var u=new D.bB()
u.sa9(null)
u.saT(null)
u.c=null
u.d=0
return u},
fG:function fG(){},
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
r:function r(){this.b=null},
bF:function bF(a){this.b=null
this.$ti=a},
bG:function bG(a){this.b=null
this.$ti=a},
x:function x(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kN:function(a,b){var u,t,s=new D.by()
s.c=new V.X(1,1,1)
s.a=V.mU()
u=s.b
s.b=b
b.gl().h(0,s.geV())
t=new D.x("mover",u,s.b,[U.ab])
t.b=!0
s.aC(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.x("color",u,a,[V.X])
t.b=!0
s.aC(t)}return s},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dO:function dO(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e0:function e0(){},
ea:function ea(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},X={du:function du(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},he:function he(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hj:function hj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},aA:function aA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hB:function hB(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cD:function cD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hQ:function hQ(){},cV:function cV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iz:function iz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eo:function eo(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kc:function(a,b){var u=new X.h7(),t=new V.a4(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.e3()
u.r=t
return u},
l5:function(a){var u,t,s=new X.e_()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gfe())
t=new D.x("mover",u,s.b,[U.ab])
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.G().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976,[P.y])
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.G().a)){s.d=0.1
t=new D.x("near",t,0.1,[P.y])
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.G().a)){s.e=2000
t=new D.x("far",t,2000,[P.y])
t.b=!0
s.a1(t)}return s},
fz:function fz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bU:function bU(){},
h7:function h7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(){this.b=this.a=null},
e_:function e_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){}},V={
mj:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.i.aY(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.X(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.X(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.X(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.X(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.X(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.X(p,o,n)}},
k6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.bN(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.j.am("null",c)
return C.j.am(C.i.ez(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.y],"$ab")
u=H.d([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.p(u,p,C.j.am(u[p],s))}return u},
dk:function(a){return C.i.jV(Math.pow(2,C.o.aY(Math.log(H.nh(a))/Math.log(2))))},
bI:function(){var u=$.hu
return u==null?$.hu=V.b3(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b3:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mz:function(a,b,c){return V.b3(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
my:function(a,b,c){return V.b3(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
l_:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l0:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l1:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b3(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
l2:function(a,b,c,d){d=V.ln()
return V.kZ(V.l8(),d,new V.S(a,b,c))},
kZ:function(a,b,c){var u=c.w(0,Math.sqrt(c.B(c))),t=b.b5(u),s=t.w(0,Math.sqrt(t.B(t))),r=u.b5(s),q=new V.S(a.a,a.b,a.c),p=s.P(0).B(q),o=r.P(0).B(q),n=u.P(0).B(q)
return V.b3(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bi:function(){var u=$.l7
return u==null?$.l7=new V.a8(0,0):u},
l8:function(){var u=$.cI
return u==null?$.cI=new V.an(0,0,0):u},
e3:function(){var u=$.cK
return u==null?$.cK=V.e2(0,0,1,1):u},
e2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bK(a,b,c,d)},
es:function(){var u=$.lm
return u==null?$.lm=new V.S(0,0,0):u},
ln:function(){var u=$.ll
return u==null?$.ll=new V.S(0,1,0):u},
mU:function(){var u=$.iS
return u==null?$.iS=new V.S(0,0,1):u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a){this.a=a},
dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a8:function a8(a,b){this.a=a
this.b=b},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.i1()
u.eQ(a)
return u},
fr:function fr(){},
bg:function bg(){},
dT:function dT(){},
bh:function bh(){this.a=null},
i1:function i1(){this.a=null},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a){this.b=a
this.c=null},
iy:function iy(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
nF:function(a){P.mT(C.P,new V.k4(a))},
mN:function(a){var u=new V.i5()
u.eR(a,!0)
return u},
fC:function fC(a){this.a=a
this.c=this.b=null},
fD:function fD(a){this.a=a},
k4:function k4(a){this.a=a},
i5:function i5(){this.b=this.a=null},
i7:function i7(a){this.a=a},
i6:function i6(a){this.a=a}},U={
k9:function(){var u=new U.fI()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ka:function(a){var u=new U.cr()
u.sU(0,a)
return u},
kS:function(){var u=new U.cy()
u.bd(U.ab)
u.aN(u.geX(),u.ghM())
u.e=null
u.f=V.bI()
u.r=0
return u},
fI:function fI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){this.b=this.a=null},
cy:function cy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
cL:function cL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kM:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dz()
k.a=!0
u=E.cv(l)
t=F.kj()
s=t.a
r=new V.S(-1,-1,1)
r=r.w(0,Math.sqrt(r.B(r)))
q=s.bm(new V.bj(1,2,4,6),new V.a4(1,0,0,1),new V.an(-1,-1,0),new V.a8(0,1),r,l)
s=t.a
r=new V.S(1,-1,1)
r=r.w(0,Math.sqrt(r.B(r)))
p=s.bm(new V.bj(0,3,4,6),new V.a4(0,0,1,1),new V.an(1,-1,0),new V.a8(1,1),r,l)
s=t.a
r=new V.S(1,1,1)
r=r.w(0,Math.sqrt(r.B(r)))
o=s.bm(new V.bj(0,2,5,6),new V.a4(0,1,0,1),new V.an(1,1,0),new V.a8(1,0),r,l)
s=t.a
r=V.bi()
n=new V.S(-1,1,1)
n=n.w(0,Math.sqrt(n.B(n)))
m=s.bm(new V.bj(0,2,4,7),new V.a4(1,1,0,1),new V.an(-1,1,0),r,n,l)
t.d.j7(H.d([q,p,o,m],[F.ay]))
t.aI()
u.scZ(0,t)
k.e=u
k.saW(l)
k.saK(0,l)
k.saL(l)
return k},
kR:function(){var u,t=new M.dE()
t.a=!0
t.sfp(0,O.fH(E.am))
t.e.aN(t.ghe(),t.ghg())
t.y=t.x=t.r=t.f=null
u=X.kc(!0,null)
t.saW(null)
t.saK(0,u)
return t},
dx:function dx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dz:function dz(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aw:function aw(){},
lI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="testCanvas",c0=null,c1="modifiers",c2=V.mN("Test 043"),c3=W.fE()
c3.className="pageLargeCanvas"
c3.id=b9
c2.a.appendChild(c3)
u=[P.l]
c2.dM(H.d(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],u))
c2.j5(H.d(["buttons"],u))
c2.dM(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b9)
if(t==null)H.t(P.q("Failed to find an element with the identifier, testCanvas."))
s=E.mS(t,!0,!0,!0,!1)
r=U.kS()
c2=s.r
q=new U.eq()
p=U.k9()
p.scS(0,!0)
p.scH(6.283185307179586)
p.scJ(0)
p.saf(0,0)
p.scI(100)
p.sV(0)
p.scn(0.5)
q.b=p
o=q.gaS()
p.gl().h(0,o)
p=U.k9()
p.scS(0,!0)
p.scH(6.283185307179586)
p.scJ(0)
p.saf(0,0)
p.scI(100)
p.sV(0)
p.scn(0.5)
q.c=p
p.gl().h(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.aq(!1,!1,!1)
m=q.d
q.d=n
p=[X.aq]
o=new D.x(c1,m,n,p)
o.b=!0
q.F(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.x("invertX",o,!1,[P.T])
o.b=!0
q.F(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.x("invertY",o,!1,[P.T])
o.b=!0
q.F(o)}q.aH(c2)
r.h(0,q)
c2=s.r
q=new U.ep()
o=U.k9()
o.scS(0,!0)
o.scH(6.283185307179586)
o.scJ(0)
o.saf(0,0)
o.scI(100)
o.sV(0)
o.scn(0.2)
q.b=o
o.gl().h(0,q.gaS())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.aq(!0,!1,!1)
m=q.c
q.c=n
o=new D.x(c1,m,n,p)
o.b=!0
q.F(o)
q.aH(c2)
r.h(0,q)
c2=s.r
q=new U.er()
q.c=0.01
q.e=q.d=0
n=new X.aq(!1,!1,!1)
q.b=n
o=new D.x(c1,c0,n,p)
o.b=!0
q.F(o)
q.aH(c2)
r.h(0,q)
r.h(0,U.ka(V.mz(0,0,5)))
l=X.l5(r)
k=s.f.ef("../resources/diceColor")
j=new O.dU()
c2=V.a6
j.sfl(O.fH(c2))
j.e.aN(j.gh8(),j.gha())
q=new O.b2(j,"emission")
q.c=C.c
q.f=new V.X(0,0,0)
j.f=q
q=new O.b2(j,"ambient")
q.c=C.c
q.f=new V.X(0,0,0)
j.r=q
q=new O.b2(j,"diffuse")
q.c=C.c
q.f=new V.X(0,0,0)
j.x=q
q=new O.b2(j,"invDiffuse")
q.c=C.c
q.f=new V.X(0,0,0)
j.y=q
q=new O.ht(j,"specular")
q.c=C.c
q.f=new V.X(0,0,0)
q.ch=100
j.z=q
q=new O.hq(j,"bump")
q.c=C.c
j.Q=q
j.ch=null
q=new O.b2(j,"reflect")
q.c=C.c
q.f=new V.X(0,0,0)
j.cx=q
q=new O.hs(j,"refract")
q.c=C.c
q.f=new V.X(0,0,0)
q.ch=1
j.cy=q
q=new O.hp(j,"alpha")
q.c=C.c
q.f=1
j.db=q
q=new D.dO()
q.bd(D.a2)
q.sfB(H.d([],[D.by]))
q.si_(H.d([],[D.e0]))
q.sio(H.d([],[D.ea]))
q.siD(H.d([],[D.eg]))
q.siE(H.d([],[D.eh]))
q.siF(H.d([],[D.ei]))
q.ch=q.Q=null
q.cX(q.gh6(),q.ghK(),q.ghO())
j.dx=q
o=q.Q
q=o==null?q.Q=D.H():o
q.h(0,j.gi6())
q=j.dx
o=q.ch
q=o==null?q.ch=D.H():o
q.h(0,j.ga8())
j.dy=null
q=j.dx
o=U.ka(V.l2(-1,-1,-1,c0))
q.h(0,D.kN(new V.X(1,0.9,0.9),o))
q=j.dx
o=U.ka(V.l2(1,1,2,c0))
q.h(0,D.kN(new V.X(0.2,0.2,0.35),o))
q=j.r
q.sax(0,new V.X(0.2,0.2,0.2))
j.r.sb9(k)
q=j.x
q.sax(0,new V.X(0.8,0.8,0.8))
j.x.sb9(k)
q=j.z
q.sax(0,new V.X(0.7,0.7,0.7))
q=j.z
if(q.c===C.c){q.c=C.h
q.bP()
q.c9(100)
o=q.a
o.a=null
o.A(c0)}q.c9(10)
j.Q.sb9(s.f.ef("../resources/diceBumpMap"))
i=H.d([],[U.cL])
q=V.a4
h=H.d([],[q])
g=F.kj()
F.dh(g,c0,c0,1,1,1,0,0,1)
F.dh(g,c0,c0,1,1,0,1,0,3)
F.dh(g,c0,c0,1,1,0,0,1,2)
F.dh(g,c0,c0,1,1,-1,0,0,0)
F.dh(g,c0,c0,1,1,0,-1,0,0)
F.dh(g,c0,c0,1,1,0,0,-1,3)
g.aI()
f=E.cv(g)
e=E.cv(c0)
d=E.cv(c0)
for(o=[P.y],q=[q],c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.a6(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).t(0,new V.a6(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.cL()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seB(0)
r.seq(0,0)
r.seu(0)
a1=r.d
if(!(Math.abs(a1-0)<$.G().a)){r.d=0
a1=new D.x("deltaYaw",a1,0,o)
a1.b=!0
a2=r.y
if(a2!=null)a2.v(a1)}r.scp(0)
r.scq(0)
C.a.h(i,r)
a3=U.kS()
a1=H.ae(a3,"Y",0)
H.D(r,a1)
a2=[a1]
if(H.z(a3.av(H.d([r],a2)))){a4=a3.a
a5=a4.length
C.a.h(a4,r)
a4=H.i(H.d([r],a2),"$ic",[a1],"$ac")
a6=a3.c
if(a6!=null)a6.$2(a5,a4)}a4=new U.cr()
a4.sU(0,a0)
H.D(a4,a1)
if(H.z(a3.av(H.d([a4],a2)))){a6=a3.a
a5=a6.length
C.a.h(a6,a4)
a1=H.i(H.d([a4],a2),"$ic",[a1],"$ac")
a2=a3.c
if(a2!=null)a2.$2(a5,a1)}a7=E.cv(c0)
a7.saL(j)
a7.scK(a3)
a1=a7.y
a2=H.w(a1,0)
H.D(f,a2)
a4=[a2]
if(H.z(a1.av(H.d([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.i(H.d([f],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=e.y
a2=H.w(a1,0)
H.D(a7,a2)
a4=[a2]
if(H.z(a1.av(H.d([a7],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a7)
a2=H.i(H.d([a7],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=V.mj(h.length/125,1,1)
k=new V.a4(Math.floor(a1.a*255)/255,Math.floor(a1.b*255)/255,Math.floor(a1.c*255)/255,Math.floor(255)/255)
C.a.h(h,k)
a8=E.cv(c0)
a1=new O.i8()
a1.b=k
a8.saL(a1)
a8.scK(a3)
a1=a8.y
a2=H.w(a1,0)
H.D(f,a2)
a4=[a2]
if(H.z(a1.av(H.d([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.i(H.d([f],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=d.y
a2=H.w(a1,0)
H.D(a8,a2)
a4=[a2]
if(H.z(a1.av(H.d([a8],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a8)
a2=H.i(H.d([a8],a4),"$ic",[a2],"$ac")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}}a9=new X.fz()
a9.d=a9.c=a9.b=a9.a=512
a9.e=!0
a9.f=!1
a9.x=a9.r=1
a9.ch=T.ld(c0)
a9.cx=new V.a4(0,0,0,1)
a9.cy=!0
a9.db=2000
a9.dx=!0
a9.dy=V.e3()
a9.san(0,512)
a9.sak(0,512)
k=new V.a4(0,0,0,1)
if(!a9.cx.n(0,k)){m=a9.cx
a9.cx=k
a1=new D.x("color",m,k,q)
a1.b=!0
a9.a1(a1)}a1=a9.db
if(!(Math.abs(a1-2000)<$.G().a)){a9.db=2000
a1=new D.x("depth",a1,2000,o)
a1.b=!0
a9.a1(a1)}if(!a9.f){a9.f=!0
a1=new D.x("autoResize",!1,!0,[P.T])
a1.b=!0
a9.a1(a1)}a1=a9.r
if(!(Math.abs(a1-0.5)<$.G().a)){a9.r=0.5
a1=new D.x("autoResizeScalarX",a1,0.5,o)
a1.b=!0
a9.a1(a1)}a1=a9.x
if(!(Math.abs(a1-0.5)<$.G().a)){a9.x=0.5
o=new D.x("autoResizeScalarY",a1,0.5,o)
o.b=!0
a9.a1(o)}b0=V.e3()
if(!J.a_(a9.dy,b0)){m=a9.dy
a9.dy=b0
o=new D.x("region",m,b0,[V.bK])
o.b=!0
a9.a1(o)}b1=M.kR()
b1.e.h(0,d)
b1.saK(0,a9)
b1.saW(l)
b2=X.kc(!1,c0)
b3=M.kR()
b3.e.h(0,e)
b3.saK(0,b2)
b3.saW(l)
o=s.f.eg("../resources/maskonaive",".jpg")
b4=M.kM()
a1=new O.e7()
a1.b=1.0471975511965976
a1.d=new V.X(1,1,1)
m=a1.c
a1.c=o
o.gl().h(0,a1.ga8())
o=new D.x("boxTexture",m,a1.c,[T.cT])
o.b=!0
a1.A(o)
b4.saL(a1)
b4.saK(0,b2)
b4.saW(l)
b5=new O.ee()
b5.a=new V.a4(0,0,0,0)
b5.sfE(O.fH(O.aQ))
b5.c.aN(b5.gho(),b5.ghq())
b5.d=0
b5.e=null
b5.r=b5.f=C.m
b6=new V.a4(0,0,0,0)
if(!b5.a.n(0,b6)){m=b5.a
b5.a=b6
q=new D.x("backColor",m,b6,q)
q.b=!0
b5.A(q)}q=b5.f
if(q!==C.m){b5.f=C.m
q=new D.x("blend",q,C.m,[A.bw])
q.b=!0
b5.A(q)}q=b5.c
o=new O.aQ()
o.saA(c0)
a0=V.bI()
if(!J.a_(o.b,a0)){m=o.b
o.b=a0
c2=new D.x("colorMatrix",m,a0,[c2])
c2.b=!0
o.A(c2)}b7=V.e3()
if(!J.a_(o.c,b7)){m=o.c
o.c=b7
c2=new D.x("source",m,b7,[V.bK])
c2.b=!0
o.A(c2)}o.sdS(0,c0)
if(o.e!==!1){o.e=!1
c2=new D.x("flip",!0,!1,[P.T])
c2.b=!0
o.A(c2)}o.f=null
o.sdS(0,V.e2(0,0.75,0.25,0.25))
o.saA(a9.ch)
q.h(0,o)
b8=M.kM()
b8.saL(b5)
b8.saK(0,b2)
c2=s.y
if(c2==null)c2=s.y=D.H()
c2.h(0,new M.k_(i))
c2=s.f
q=s.r
o=a9.ch
a1=new T.dv()
a1.a=c2
a1.z=4
a1.ch=a1.Q=!1
n=new X.aq(!1,!1,!1)
a1.c=n
c2=new D.x(c1,c0,n,p)
c2.b=!0
a1.bf(c2)
c2=a1.d
if(c2!==o){if(c2!=null)c2.gl().N(0,a1.gd9())
m=a1.d
a1.d=o
o.gl().h(0,a1.gd9())
c2=new D.x("texture",m,a1.d,[T.cS])
c2.b=!0
a1.bf(c2)}a1.aH(q)
c2=a1.x
if(c2==null)c2=a1.x=D.H()
c2.h(0,new M.k0(h,i))
c2=M.aw
q=H.d([b1,b4,b3,b8],[c2])
p=new M.dx()
p.bd(c2)
p.e=!0
p.f=!1
p.r=null
p.aN(p.ghQ(),p.ghS())
p.ab(0,q)
c2=s.d
if(c2!==p){if(c2!=null)c2.gl().N(0,s.gd6())
s.d=p
p.gl().h(0,s.gd6())
s.d7()}c2=new V.fC("buttons")
u=u.getElementById("buttons")
c2.b=u
if(u==null)H.t("Failed to find buttons for ButtonGroup")
c2.sfm(H.d([],[W.bt]))
c2.j4(0,"Back target snapshot",new M.k1(s,a9))
V.nF(s)},
k_:function k_(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b}},A={
mx:function(a,b){var u=a.ap,t=new A.dV(b,u)
t.be(b,u)
t.eO(a,b)
return t},
mR:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.O
t=(s||b===C.z?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.N)t+="      clrAccum += color;\n"
else if(b===C.m)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.z
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mQ:function(a,b,c){var u="TextureLayout_"+a+"_"+C.f.i(b.a),t=new A.ef(c,u)
t.be(c,u)
t.eS(a,b,c)
return t},
kn:function(a,b,c,d,e){var u=new A.iG(a,c,e)
u.f=d
u.siH(P.mw(d,0,P.A))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
dV:function dV(a,b){var _=this
_.br=_.dU=_.bq=_.ap=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e9=_.cu=_.e8=_.bE=_.e7=_.e6=_.bD=_.bC=_.e5=_.e4=_.bB=_.bA=_.bz=_.e3=_.e2=_.by=_.e1=_.e0=_.bx=_.e_=_.dZ=_.bw=_.bv=_.dY=_.dX=_.bu=_.bt=_.dW=_.dV=_.bs=null
_.cB=_.ed=_.cA=_.ec=_.cz=_.eb=_.cw=_.ea=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ay=b3
_.ap=b4
_.bq=b5},
cY:function cY(a,b){this.b=a
this.c=b},
d1:function d1(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d_:function d_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d2:function d2(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d0:function d0(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d3:function d3(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m},
cN:function cN(){},
bW:function bW(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.b=b},
e8:function e8(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e9:function e9(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ef:function ef(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
el:function el(){},
iK:function iK(a){this.a=a},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
aj:function aj(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jN:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dh:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.S(h,g+a1,f+a2)
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
j.d=i}m=F.jN(i)
l=F.jN(j.b)
k=F.nK(d,a0,new F.jM(j,F.jN(j.c),F.jN(j.d),l,m,c),b)
if(k!=null)a.ju(k)},
nK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ay,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.kj()
t=H.d([],[F.ay])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iT(g,g,new V.a4(p,0,0,1),g,g,new V.a8(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cm(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iT(g,g,new V.a4(j,i,h,1),g,g,new V.a8(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cm(d))}}u.d.j8(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.a5(),t=a.a
if(t==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
mu:function(a,b){var u=new F.bf(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
kj:function(){var u=new F.e6(),t=new F.iU(u)
t.b=!1
t.siI(H.d([],[F.ay]))
u.a=t
t=new F.i4(u)
t.sc6(H.d([],[F.bJ]))
u.b=t
t=new F.i3(u)
t.sfQ(H.d([],[F.bf]))
u.c=t
t=new F.i2(u)
t.sfG(H.d([],[F.a5]))
u.d=t
u.e=null
return u},
iT:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ay(),r=new F.iZ()
r.sc6(H.d([],[F.bJ]))
s.b=r
r=new F.iY()
u=[F.bf]
r.sfR(H.d([],u))
r.sfS(H.d([],u))
s.c=r
r=new F.iV()
u=[F.a5]
r.sfH(H.d([],u))
r.sfI(H.d([],u))
r.sfJ(H.d([],u))
s.d=r
h=$.m0()
s.e=0
r=$.ap()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bo().a)!==0?e:t
s.x=(u&$.bn().a)!==0?b:t
s.y=(u&$.bp().a)!==0?f:t
s.z=(u&$.bq().a)!==0?g:t
s.Q=(u&$.m1().a)!==0?c:t
s.ch=(u&$.cl().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bf:function bf(){this.b=this.a=null},
bJ:function bJ(){this.a=null},
e6:function e6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
i4:function i4(a){this.a=a
this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
iU:function iU(a){this.a=a
this.c=this.b=null},
iV:function iV(){this.d=this.c=this.b=null},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){this.c=this.b=null},
iZ:function iZ(){this.b=null}},T={
ld:function(a){var u=new T.is()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
le:function(a,b,c,d,e,f,g){var u,t,s
if(f==null)f=0
if(g==null)g=0
if(e==null)e=b.r
if(d==null)d=b.x
u=b.x
a.bindFramebuffer(36160,a.createFramebuffer())
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
t=new Uint8Array(e*d*4)
a.readPixels(f,u-d-g,e,d,6408,5121,t)
a.bindFramebuffer(36160,null)
s=new T.iv(t,e,d)
s.fL()
return s},
dv:function dv(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(a,b){this.c=a
this.d=b
this.b=null},
c6:function c6(){},
cS:function cS(){},
is:function is(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iu:function iu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gJ:function(a){return H.cJ(a)},
i:function(a){return"Instance of '"+H.c2(a)+"'"}}
J.hb.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iT:1}
J.dK.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dM.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hO.prototype={}
J.d4.prototype={}
J.bH.prototype={
i:function(a){var u=a[$.lQ()]
if(u==null)return this.eK(a)
return"JavaScript function for "+H.m(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.aZ.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.I("add"))
a.push(b)},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
H.i(b,"$ic",[H.w(a,0)],"$ac")
if(!!a.fixed$length)H.t(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bx(a))}},
C:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.p(t,u,H.m(a[u]))
return t.join(b)},
jr:function(a){return this.C(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eH:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aB(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.w(a,0)])
return H.d(a.slice(b,c),[H.w(a,0)])},
gcE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.kT())},
dN:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.z(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bx(a))}return!1},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gS:function(a){return new J.ak(a,a.length,[H.w(a,0)])},
gJ:function(a){return H.cJ(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.I("set length"))
if(b<0)throw H.f(P.aB(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.cf(a,b))
return a[b]},
p:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.I("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cf(a,b))
a[b]=c},
$ic:1,
$ib:1}
J.kf.prototype={}
J.ak.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.E(s))
u=t.c
if(u>=r){t.sds(null)
return!1}t.sds(s[u]);++t.c
return!0},
sds:function(a){this.d=H.D(a,H.w(this,0))},
$iaY:1}
J.dL.prototype={
jV:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.I(""+a+".toInt()"))},
aY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.I(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.I(""+a+".round()"))},
ez:function(a,b){var u,t
if(b>20)throw H.f(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bN:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
bk:function(a,b){var u
if(a>0)u=this.im(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
im:function(a,b){return b>31?0:a>>>b},
$iy:1,
$iaa:1}
J.dJ.prototype={$iA:1}
J.dI.prototype={}
J.bZ.prototype={
cl:function(a,b){if(b<0)throw H.f(H.cf(a,b))
if(b>=a.length)H.t(H.cf(a,b))
return a.charCodeAt(b)},
bg:function(a,b){if(b>=a.length)throw H.f(H.cf(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.f(P.k7(b,null,null))
return a+b},
eG:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
d2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.hS(b,null))
if(b>c)throw H.f(P.hS(b,null))
if(c>a.length)throw H.f(P.hS(c,null))
return a.substring(b,c)},
d1:function(a,b){return this.d2(a,b,null)},
jX:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$il4:1,
$il:1}
H.a3.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.cl(this.a,b)},
$ac7:function(){return[P.A]},
$au:function(){return[P.A]},
$ac:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.fV.prototype={}
H.c_.prototype={
gS:function(a){var u=this
return new H.cA(u,u.gk(u),[H.ae(u,"c_",0)])},
bM:function(a,b){return this.eJ(0,H.n(b,{func:1,ret:P.T,args:[H.ae(this,"c_",0)]}))}}
H.il.prototype={
gfC:function(){var u=J.aU(this.a)
return u},
gir:function(){var u=J.aU(this.a),t=this.b
if(t>u)return u
return t},
gk:function(a){var u=J.aU(this.a),t=this.b
if(t>=u)return 0
return u-t},
D:function(a,b){var u,t=this,s=t.gir()+b
if(b>=0){u=t.gfC()
if(typeof u!=="number")return H.F(u)
u=s>=u}else u=!0
if(u)throw H.f(P.Z(b,t,"index",null,null))
return J.dn(t.a,s)},
cP:function(a,b){var u,t,s,r=this,q=r.b,p=r.a,o=J.fp(p),n=o.gk(p),m=n-q
if(m<0)m=0
u=new Array(m)
u.fixed$length=Array
t=H.d(u,r.$ti)
for(s=0;s<m;++s){C.a.p(t,s,o.D(p,q+s))
if(o.gk(p)<n)throw H.f(P.bx(r))}return t}}
H.cA.prototype={
gH:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.fp(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bx(s))
u=t.c
if(u>=q){t.sb1(null)
return!1}t.sb1(r.D(s,u));++t.c
return!0},
sb1:function(a){this.d=H.D(a,H.w(this,0))},
$iaY:1}
H.hm.prototype={
gS:function(a){return new H.hn(J.bS(this.a),this.b,this.$ti)},
gk:function(a){return J.aU(this.a)},
D:function(a,b){return this.b.$1(J.dn(this.a,b))},
$ac:function(a,b){return[b]}}
H.hn.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.sb1(u.c.$1(t.gH(t)))
return!0}u.sb1(null)
return!1},
gH:function(a){return this.a},
sb1:function(a){this.a=H.D(a,H.w(this,1))},
$aaY:function(a,b){return[b]}}
H.ho.prototype={
gk:function(a){return J.aU(this.a)},
D:function(a,b){return this.b.$1(J.dn(this.a,b))},
$ac_:function(a,b){return[b]},
$ac:function(a,b){return[b]}}
H.d5.prototype={
gS:function(a){return new H.j2(J.bS(this.a),this.b,this.$ti)}}
H.j2.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.z(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bX.prototype={}
H.c7.prototype={
p:function(a,b,c){H.D(c,H.ae(this,"c7",0))
throw H.f(P.I("Cannot modify an unmodifiable list"))},
a_:function(a,b,c,d,e){H.i(d,"$ic",[H.ae(this,"c7",0)],"$ac")
throw H.f(P.I("Cannot modify an unmodifiable list"))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)}}
H.en.prototype={}
H.iD.prototype={
al:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hK.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hd.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.iN.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k5.prototype={
$1:function(a){if(!!J.U(a).$ibA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.f1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iar:1}
H.cp.prototype={
i:function(a){return"Closure '"+H.c2(this).trim()+"'"},
$ibC:1,
gk0:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ic.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cn))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cJ(this.a)
else u=typeof t!=="object"?J.bR(t):H.cJ(t)
return(u^H.cJ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c2(u)+"'")}}
H.iF.prototype={
i:function(a){return this.a}}
H.fF.prototype={
i:function(a){return this.a}}
H.i_.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.j3.prototype={
i:function(a){return"Assertion failed: "+P.dF(this.a)}}
H.b_.prototype={
gk:function(a){return this.a},
gac:function(a){return new H.dP(this,[H.w(this,0)])},
dR:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dn(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dn(t,b)}else return s.jp(b)},
jp:function(a){var u=this.d
if(u==null)return!1
return this.cC(this.c1(u,J.bR(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.jq(b)},
jq:function(a){var u,t,s=this.d
if(s==null)return
u=this.c1(s,J.bR(a)&0x3ffffff)
t=this.cC(u,a)
if(t<0)return
return u[t].b},
p:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.w(o,0))
H.D(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.dc(u==null?o.b=o.c4():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.dc(t==null?o.c=o.c4():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c4()
r=J.bR(b)&0x3ffffff
q=o.c1(s,r)
if(q==null)o.ca(s,r,[o.c5(b,c)])
else{p=o.cC(q,b)
if(p>=0)q[p].b=c
else q.push(o.c5(b,c))}}},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bx(s))
u=u.c}},
dc:function(a,b,c){var u,t=this
H.D(b,H.w(t,0))
H.D(c,H.w(t,1))
u=t.bh(a,b)
if(u==null)t.ca(a,b,t.c5(b,c))
else u.b=c},
fY:function(){this.r=this.r+1&67108863},
c5:function(a,b){var u,t=this,s=new H.hg(H.D(a,H.w(t,0)),H.D(b,H.w(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fY()
return s},
cC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.kY(this)},
bh:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
dn:function(a,b){return this.bh(a,b)!=null},
c4:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ca(t,u,t)
this.fw(t,u)
return t}}
H.hg.prototype={}
H.dP.prototype={
gk:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hh.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bx(t))
else{t=u.c
if(t==null){u.sda(null)
return!1}else{u.sda(t.a)
u.c=u.c.c
return!0}}},
sda:function(a){this.d=H.D(a,H.w(this,0))},
$iaY:1}
H.jW.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jY.prototype={
$1:function(a){return this.a(H.J(a))},
$S:35}
H.hc.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$il4:1}
H.cF.prototype={
fO:function(a,b,c,d){var u=P.aB(b,0,c,d,null)
throw H.f(u)},
df:function(a,b,c,d){if(b>>>0!==b||b>c)this.fO(a,b,c,d)},
$io4:1}
H.dX.prototype={
gk:function(a){return a.length},
dI:function(a,b,c,d,e){var u,t,s=a.length
this.df(a,b,s,"start")
this.df(a,c,s,"end")
if(b>c)throw H.f(P.aB(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.f(P.kk("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$iK:1,
$aK:function(){}}
H.c0.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
p:function(a,b,c){H.nk(c)
H.bc(b,a,a.length)
a[b]=c},
a_:function(a,b,c,d,e){H.i(d,"$ic",[P.y],"$ac")
if(!!J.U(d).$ic0){this.dI(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
$abX:function(){return[P.y]},
$au:function(){return[P.y]},
$ic:1,
$ac:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.cE.prototype={
p:function(a,b,c){H.af(c)
H.bc(b,a,a.length)
a[b]=c},
a_:function(a,b,c,d,e){H.i(d,"$ic",[P.A],"$ac")
if(!!J.U(d).$icE){this.dI(a,b,c,d,e)
return}this.d3(a,b,c,d,e)},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
$abX:function(){return[P.A]},
$au:function(){return[P.A]},
$ic:1,
$ac:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.hC.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hD.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hE.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hF.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.hG.prototype={
j:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.cG.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
$io5:1}
H.hH.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bc(b,a,a.length)
return a[b]},
$io6:1}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
P.j5.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.j4.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j7.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f7.prototype={
fc:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.jI(this,b),0),a)
else throw H.f(P.I("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.jH(this,a,Date.now(),b),0),a)
else throw H.f(P.I("Periodic timer."))},
$ib6:1}
P.jI.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jH.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.eN(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bb.prototype={
jt:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.n(this.d,{func:1,ret:P.T,args:[P.V]}),a.a,P.T,P.V)},
jo:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.fo(u,{func:1,args:[P.V,P.ar]}))return H.kz(r.jQ(u,a.a,a.b,null,t,P.ar),s)
else return H.kz(r.cO(H.n(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aF.prototype={
ey:function(a,b,c){var u,t,s,r=H.w(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n9(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aF($.a1,[c])
s=b==null?1:3
this.dd(new P.bb(t,s,a,b,[r,c]))
return t},
jU:function(a,b){return this.ey(a,null,b)},
dd:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibb")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaF")
s=u.a
if(s<4){u.dd(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jQ(null,null,s,H.n(new P.jf(t,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibb")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaF")
u=q.a
if(u<4){q.dE(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
u=p.b
u.toString
P.jQ(null,null,u,H.n(new P.jj(o,p),{func:1,ret:-1}))}},
c8:function(){var u=H.e(this.c,"$ibb")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dj:function(a){var u,t,s=this,r=H.w(s,0)
H.kz(a,{futureOr:1,type:r})
u=s.$ti
if(H.jR(a,"$icx",u,"$acx"))if(H.jR(a,"$iaF",u,null))P.lo(a,s)
else P.mZ(a,s)
else{t=s.c8()
H.D(a,r)
s.a=4
s.c=a
P.d8(s,t)}},
dk:function(a,b){var u,t=this
H.e(b,"$iar")
u=t.c8()
t.a=8
t.c=new P.al(a,b)
P.d8(t,u)},
$icx:1}
P.jf.prototype={
$0:function(){P.d8(this.a,this.b)},
$S:2}
P.jj.prototype={
$0:function(){P.d8(this.b,this.a.a)},
$S:2}
P.jg.prototype={
$1:function(a){var u=this.a
u.a=0
u.dj(a)},
$S:12}
P.jh.prototype={
$2:function(a,b){H.e(b,"$iar")
this.a.dk(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.ji.prototype={
$0:function(){this.a.dk(this.b,this.c)},
$S:2}
P.jm.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ev(H.n(s.d,{func:1}),null)}catch(r){u=H.at(r)
t=H.ci(r)
if(o.d){s=H.e(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.U(n).$icx){if(n instanceof P.aF&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jU(new P.jn(p),null)
s.a=!1}},
$S:3}
P.jn.prototype={
$1:function(a){return this.a},
$S:31}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.D(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cO(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.at(o)
t=H.ci(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$ial")
r=m.c
if(H.z(r.jt(u))&&r.e!=null){q=m.b
q.b=r.jo(u)
q.a=!1}}catch(p){t=H.at(p)
s=H.ci(p)
r=H.e(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.eu.prototype={}
P.ig.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aF($.a1,[P.A])
r.a=0
u=H.w(s,0)
t=H.n(new P.ii(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.ij(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.ii.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.w(this.b,0)]}}}
P.ij.prototype={
$0:function(){this.b.dj(this.a.a)},
$S:2}
P.cP.prototype={}
P.ih.prototype={}
P.b6.prototype={}
P.al.prototype={
i:function(a){return H.m(this.a)},
$ibA:1}
P.jL.prototype={$iok:1}
P.jP.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dZ():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.ju.prototype={
jR:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a1){a.$0()
return}P.lu(r,r,this,a,-1)}catch(s){u=H.at(s)
t=H.ci(s)
P.jO(r,r,this,u,H.e(t,"$iar"))}},
jS:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.a1){a.$1(b)
return}P.lv(r,r,this,a,b,-1,c)}catch(s){u=H.at(s)
t=H.ci(s)
P.jO(r,r,this,u,H.e(t,"$iar"))}},
jc:function(a,b){return new P.jw(this,H.n(a,{func:1,ret:b}),b)},
cf:function(a){return new P.jv(this,H.n(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.jx(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.k)return a.$0()
return P.lu(null,null,this,a,b)},
cO:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a1===C.k)return a.$1(b)
return P.lv(null,null,this,a,b,c,d)},
jQ:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a1===C.k)return a.$2(b,c)
return P.na(null,null,this,a,b,c,d,e,f)}}
P.jw.prototype={
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jv.prototype={
$0:function(){return this.a.jR(this.b)},
$S:3}
P.jx.prototype={
$1:function(a){var u=this.c
return this.a.jS(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jr.prototype={
gS:function(a){return P.lr(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ic9")!=null}else{t=this.fs(b)
return t}},
fs:function(a){var u=this.d
if(u==null)return!1
return this.c_(this.dt(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.D(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dg(u==null?s.b=P.kr():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dg(t==null?s.c=P.kr():t,b)}else return s.fg(0,b)},
fg:function(a,b){var u,t,s,r=this
H.D(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.kr()
t=r.dl(b)
s=u[t]
if(s==null)u[t]=[r.bX(b)]
else{if(r.c_(s,b)>=0)return!1
s.push(r.bX(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i2(this.c,b)
else return this.i1(0,b)},
i1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dt(r,b)
t=s.c_(u,b)
if(t<0)return!1
s.dK(u.splice(t,1)[0])
return!0},
dg:function(a,b){H.D(b,H.w(this,0))
if(H.e(a[b],"$ic9")!=null)return!1
a[b]=this.bX(b)
return!0},
i2:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ic9")
if(u==null)return!1
this.dK(u)
delete a[b]
return!0},
di:function(){this.r=1073741823&this.r+1},
bX:function(a){var u,t=this,s=new P.c9(H.D(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.di()
return s},
dK:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.di()},
dl:function(a){return J.bR(a)&1073741823},
dt:function(a,b){return a[this.dl(b)]},
c_:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.js.prototype={
gH:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bx(t))
else{t=u.c
if(t==null){u.sdh(null)
return!1}else{u.sdh(H.D(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
sdh:function(a){this.d=H.D(a,H.w(this,0))},
$iaY:1}
P.hi.prototype={$ic:1,$ib:1}
P.u.prototype={
gS:function(a){return new H.cA(a,this.gk(a),[H.bd(this,a,"u",0)])},
D:function(a,b){return this.j(a,b)},
cP:function(a,b){var u,t=this,s=H.d([],[H.bd(t,a,"u",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.p(s,u,t.j(a,u))
return s},
jW:function(a){return this.cP(a,!0)},
a_:function(a,b,c,d,e){var u,t,s,r,q=this,p=H.bd(q,a,"u",0)
H.i(d,"$ic",[p],"$ac")
P.ki(b,c,q.gk(a))
u=c-b
if(u===0)return
P.hT(e,"skipCount")
if(H.jR(d,"$ib",[p],"$ab")){t=e
s=d}else{s=H.mP(d,e,null,H.bd(J.U(d),d,"u",0)).cP(0,!1)
t=0}p=J.fp(s)
if(t+u>p.gk(s))throw H.f(H.mq())
if(t<b)for(r=u-1;r>=0;--r)q.p(a,b+r,p.j(s,t+r))
else for(r=0;r<u;++r)q.p(a,b+r,p.j(s,t+r))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
eE:function(a,b,c){H.i(c,"$ic",[H.bd(this,a,"u",0)],"$ac")
this.as(a,b,b+c.length,c)},
i:function(a){return P.kd(a,"[","]")}}
P.hk.prototype={}
P.hl.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:13}
P.ag.prototype={
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bd(s,a,"ag",0),H.bd(s,a,"ag",1)]})
for(u=J.bS(s.gac(a));u.u();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aU(this.gac(a))},
i:function(a){return P.kY(a)},
$iQ:1}
P.jz.prototype={
ab:function(a,b){var u
for(u=J.bS(H.i(b,"$ic",this.$ti,"$ac"));u.u();)this.h(0,u.gH(u))},
i:function(a){return P.kd(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.hT(b,"index")
for(u=P.lr(r,r.r,H.w(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.Z(b,r,"index",null,t))},
$ic:1,
$ilb:1}
P.eK.prototype={}
P.cq.prototype={}
P.dy.prototype={}
P.fX.prototype={
$acq:function(){return[P.l,[P.b,P.A]]}}
P.iQ.prototype={}
P.iR.prototype={
je:function(a){var u,t,s=P.ki(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jJ(u)
if(t.fK(a,0,s)!==s)t.dL(C.j.cl(a,s-1),0)
return new Uint8Array(u.subarray(0,H.n5(0,t.b,u.length)))},
$ady:function(){return[P.l,[P.b,P.A]]}}
P.jJ.prototype={
dL:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.cl(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.bg(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dL(r,C.j.bg(a,p)))s=p}else if(r<=2047){q=n.b
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
P.T.prototype={}
P.az.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.bk(u,30))&1073741823},
i:function(a){var u=this,t=P.mk(H.mH(u)),s=P.dA(H.mF(u)),r=P.dA(H.mB(u)),q=P.dA(H.mC(u)),p=P.dA(H.mE(u)),o=P.dA(H.mG(u)),n=P.ml(H.mD(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.bz.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bz&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fU(),q=this.a
if(q<0)return"-"+new P.bz(0-q).i(0)
u=r.$1(C.f.a2(q,6e7)%60)
t=r.$1(C.f.a2(q,1e6)%60)
s=new P.fT().$1(q%1e6)
return""+C.f.a2(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bA.prototype={}
P.ft.prototype={
i:function(a){return"Assertion failed"}}
P.dZ.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.m(p)
t=q.gbZ()+o+u
if(!q.a)return t
s=q.gbY()
r=P.dF(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.ha.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var u,t=H.af(this.b)
if(typeof t!=="number")return t.aM()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.iO.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iM.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dF(u)+"."}}
P.hN.prototype={
i:function(a){return"Out of Memory"},
$ibA:1}
P.eb.prototype={
i:function(a){return"Stack Overflow"},
$ibA:1}
P.fO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eC.prototype={
i:function(a){return"Exception: "+this.a}}
P.h6.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.d2(s,0,75)+"...":s
return t+"\n"+r}}
P.bC.prototype={}
P.A.prototype={}
P.c.prototype={
bM:function(a,b){var u=H.ae(this,"c",0)
return new H.d5(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gk:function(a){var u,t=this.gS(this)
for(u=0;t.u();)++u
return u},
gaO:function(a){var u,t=this.gS(this)
if(!t.u())throw H.f(H.kT())
u=t.gH(t)
if(t.u())throw H.f(H.mr())
return u},
D:function(a,b){var u,t,s
P.hT(b,"index")
for(u=this.gS(this),t=0;u.u();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.Z(b,this,"index",null,t))},
i:function(a){return P.mp(this,"(",")")}}
P.aY.prototype={}
P.b.prototype={$ic:1}
P.Q.prototype={}
P.P.prototype={
gJ:function(a){return P.V.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
n:function(a,b){return this===b},
gJ:function(a){return H.cJ(this)},
i:function(a){return"Instance of '"+H.c2(this)+"'"},
toString:function(){return this.i(this)}}
P.ar.prototype={}
P.l.prototype={$il4:1}
P.bL.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.v.prototype={}
W.fq.prototype={
gk:function(a){return a.length}}
W.dp.prototype={
i:function(a){return String(a)},
$idp:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.dr.prototype={}
W.br.prototype={$ibr:1}
W.bt.prototype={$ibt:1}
W.bV.prototype={
cU:function(a,b,c){if(c!=null)return a.getContext(b,P.ni(c))
return a.getContext(b)},
cT:function(a,b){return this.cU(a,b,null)},
$ibV:1}
W.bu.prototype={
jh:function(a,b,c){var u=P.lD(a.createImageData(b,c))
return u},
jL:function(a,b,c,d){a.putImageData(P.lC(b),c,d)
return},
$ibu:1}
W.bv.prototype={
gk:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.W.prototype={$iW:1}
W.ct.prototype={
gk:function(a){return a.length}}
W.fL.prototype={}
W.aW.prototype={}
W.aX.prototype={}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
gk:function(a){return a.length}}
W.fP.prototype={
gk:function(a){return a.length}}
W.dB.prototype={$idB:1}
W.fQ.prototype={
i:function(a){return String(a)}}
W.dC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.i(c,"$iah",[P.aa],"$aah")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ah,P.aa]]},
$au:function(){return[[P.ah,P.aa]]},
$ic:1,
$ac:function(){return[[P.ah,P.aa]]},
$ib:1,
$ab:function(){return[[P.ah,P.aa]]},
$aB:function(){return[[P.ah,P.aa]]}}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gan(a))+" x "+H.m(this.gak(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iah)return!1
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&this.gan(a)===u.gan(b)&&this.gak(a)===u.gak(b)},
gJ:function(a){return W.lq(C.i.gJ(a.left),C.i.gJ(a.top),C.i.gJ(this.gan(a)),C.i.gJ(this.gak(a)))},
gdP:function(a){return a.bottom},
gak:function(a){return a.height},
gbG:function(a){return a.left},
gbJ:function(a){return a.right},
gbK:function(a){return a.top},
gan:function(a){return a.width},
$iah:1,
$aah:function(){return[P.aa]}}
W.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.J(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.l]},
$au:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aB:function(){return[P.l]}}
W.fS.prototype={
gk:function(a){return a.length}}
W.j9.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.e(u[b],"$iO")},
p:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.k(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.jW(this)
return new J.ak(u,u.length,[H.w(u,0)])},
a_:function(a,b,c,d,e){H.i(d,"$ic",[W.O],"$ac")
throw H.f(P.ko(null))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
$au:function(){return[W.O]},
$ac:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gjb:function(a){return new W.jb(a)},
gck:function(a){return new W.j9(a,a.children)},
gdQ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aM()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aM()
if(r<0)r=-r*0
return new P.ah(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
aj:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kQ
if(u==null){u=H.d([],[W.av])
t=new W.dY(u)
C.a.h(u,W.lp(null))
C.a.h(u,W.ls())
$.kQ=t
d=t}else d=u
u=$.kP
if(u==null){u=new W.fd(d)
$.kP=u
c=u}else{u.a=d
c=u}}if($.be==null){u=document
t=u.implementation.createHTMLDocument("")
$.be=t
$.kb=t.createRange()
t=$.be.createElement("base")
H.e(t,"$icm")
t.href=u.baseURI
$.be.head.appendChild(t)}u=$.be
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibr")}u=$.be
if(!!this.$ibr)s=u.body
else{s=u.createElement(a.tagName)
$.be.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.T,a.tagName)){$.kb.selectNodeContents(s)
r=$.kb.createContextualFragment(b)}else{s.innerHTML=b
r=$.be.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.be.body
if(s==null?u!=null:s!==u)J.kH(s)
c.cV(r)
document.adoptNode(r)
return r},
jg:function(a,b,c){return this.aj(a,b,c,null)},
eF:function(a,b){a.textContent=null
a.appendChild(this.aj(a,b,null,null))},
$iO:1,
gew:function(a){return a.tagName}}
W.fW.prototype={
$1:function(a){return!!J.U(H.e(a,"$iC")).$iO},
$S:15}
W.o.prototype={$io:1}
W.j.prototype={
j6:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fh(a,b,c,!1)},
fh:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aI.prototype={$iaI:1}
W.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaI")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ic:1,
$ac:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aB:function(){return[W.aI]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.h5.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.h8.prototype={
gk:function(a){return a.length}}
W.bY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iC")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.C]},
$au:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibY:1,
$aB:function(){return[W.C]}}
W.bD.prototype={$ibD:1,
gco:function(a){return a.data}}
W.cz.prototype={$icz:1}
W.b0.prototype={$ib0:1}
W.dR.prototype={
i:function(a){return String(a)},
$idR:1}
W.hv.prototype={
gk:function(a){return a.length}}
W.hw.prototype={
j:function(a,b){return P.bl(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gac:function(a){var u=H.d([],[P.l])
this.O(a,new W.hx(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.hx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hy.prototype={
j:function(a,b){return P.bl(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gac:function(a){var u=H.d([],[P.l])
this.O(a,new W.hz(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aK.prototype={$iaK:1}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaK")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$au:function(){return[W.aK]},
$ic:1,
$ac:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.a7.prototype={$ia7:1}
W.ao.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kk("No elements"))
if(t>1)throw H.f(P.kk("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s,r
H.i(b,"$ic",[W.C],"$ac")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
p:function(a,b,c){var u,t
H.e(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.k(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dG(u,u.length,[H.bd(C.X,u,"B",0)])},
a_:function(a,b,c,d,e){H.i(d,"$ic",[W.C],"$ac")
throw H.f(P.I("Cannot setRange on Node list"))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$au:function(){return[W.C]},
$ac:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jM:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jO:function(a,b){var u,t
try{u=a.parentNode
J.m6(u,b,a)}catch(t){H.at(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eI(a):u},
i4:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iC")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.C]},
$au:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.aL.prototype={$iaL:1,
gk:function(a){return a.length}}
W.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaL")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ic:1,
$ac:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.hY.prototype={
j:function(a,b){return P.bl(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gac:function(a){var u=H.d([],[P.l])
this.O(a,new W.hZ(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.i0.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.i9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaM")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ic:1,
$ac:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.ia.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaN")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ic:1,
$ac:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.id.prototype={
j:function(a,b){return a.getItem(H.J(b))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gac:function(a){var u=H.d([],[P.l])
this.O(a,new W.ie(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.l,P.l]},
$iQ:1,
$aQ:function(){return[P.l,P.l]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aC.prototype={$iaC:1}
W.bk.prototype={$ibk:1}
W.ec.prototype={
aj:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=W.mm("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ao(t).ab(0,new W.ao(u))
return t}}
W.im.prototype={
aj:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.ao(u)
s=u.gaO(u)
s.toString
u=new W.ao(s)
r=u.gaO(u)
t.toString
r.toString
new W.ao(t).ab(0,new W.ao(r))
return t}}
W.io.prototype={
aj:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.aj(u.createElement("table"),b,c,d)
u.toString
u=new W.ao(u)
s=u.gaO(u)
t.toString
s.toString
new W.ao(t).ab(0,new W.ao(s))
return t}}
W.cR.prototype={$icR:1}
W.aP.prototype={$iaP:1}
W.aD.prototype={$iaD:1}
W.iq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaD")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ic:1,
$ac:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.ir.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaP")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$au:function(){return[W.aP]},
$ic:1,
$ac:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.ix.prototype={
gk:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.aS.prototype={$iaS:1}
W.iA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaR")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$au:function(){return[W.aR]},
$ic:1,
$ac:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aB:function(){return[W.aR]}}
W.iB.prototype={
gk:function(a){return a.length}}
W.bN.prototype={}
W.iP.prototype={
i:function(a){return String(a)}}
W.j1.prototype={
gk:function(a){return a.length}}
W.ba.prototype={
gjk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.I("deltaY is not supported"))},
gjj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.I("deltaX is not supported"))},
$iba:1}
W.d6.prototype={
i5:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
fD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d7.prototype={$id7:1}
W.ja.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iW")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.W]},
$au:function(){return[W.W]},
$ic:1,
$ac:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aB:function(){return[W.W]}}
W.ex.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iah)return!1
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&a.width===u.gan(b)&&a.height===u.gak(b)},
gJ:function(a){return W.lq(C.i.gJ(a.left),C.i.gJ(a.top),C.i.gJ(a.width),C.i.gJ(a.height))},
gak:function(a){return a.height},
gan:function(a){return a.width}}
W.jo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaJ")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ic:1,
$ac:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.eP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iC")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.C]},
$au:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.jC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaO")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ic:1,
$ac:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.jD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$iaC")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ic:1,
$ac:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aB:function(){return[W.aC]}}
W.j8.prototype={
O:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gac(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gac:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.l])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.k(r,t)
s=H.e(r[t],"$id7")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.l,P.l]},
$aQ:function(){return[P.l,P.l]}}
W.jb.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
gk:function(a){return this.gac(this).length}}
W.jc.prototype={}
W.kq.prototype={}
W.jd.prototype={}
W.je.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:29}
W.bO.prototype={
eU:function(a){var u
if($.eF.a===0){for(u=0;u<262;++u)$.eF.p(0,C.S[u],W.nq())
for(u=0;u<12;++u)$.eF.p(0,C.r[u],W.nr())}},
aV:function(a){return $.m3().T(0,W.cu(a))},
aw:function(a,b,c){var u=$.eF.j(0,H.m(W.cu(a))+"::"+b)
if(u==null)u=$.eF.j(0,"*::"+b)
if(u==null)return!1
return H.kw(u.$4(a,b,c,this))},
$iav:1}
W.B.prototype={
gS:function(a){return new W.dG(a,this.gk(a),[H.bd(this,a,"B",0)])},
a_:function(a,b,c,d,e){H.i(d,"$ic",[H.bd(this,a,"B",0)],"$ac")
throw H.f(P.I("Cannot setRange on immutable List."))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)}}
W.dY.prototype={
aV:function(a){return C.a.dN(this.a,new W.hJ(a))},
aw:function(a,b,c){return C.a.dN(this.a,new W.hI(a,b,c))},
$iav:1}
W.hJ.prototype={
$1:function(a){return H.e(a,"$iav").aV(this.a)},
$S:17}
W.hI.prototype={
$1:function(a){return H.e(a,"$iav").aw(this.a,this.b,this.c)},
$S:17}
W.eX.prototype={
fa:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bM(0,new W.jA())
t=b.bM(0,new W.jB())
this.b.ab(0,u)
s=this.c
s.ab(0,C.U)
s.ab(0,t)},
aV:function(a){return this.a.T(0,W.cu(a))},
aw:function(a,b,c){var u=this,t=W.cu(a),s=u.c
if(s.T(0,H.m(t)+"::"+b))return u.d.j9(c)
else if(s.T(0,"*::"+b))return u.d.j9(c)
else{s=u.b
if(s.T(0,H.m(t)+"::"+b))return!0
else if(s.T(0,"*::"+b))return!0
else if(s.T(0,H.m(t)+"::*"))return!0
else if(s.T(0,"*::*"))return!0}return!1},
$iav:1}
W.jA.prototype={
$1:function(a){return!C.a.T(C.r,H.J(a))},
$S:18}
W.jB.prototype={
$1:function(a){return C.a.T(C.r,H.J(a))},
$S:18}
W.jF.prototype={
aw:function(a,b,c){if(this.eM(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.T(0,b)
return!1}}
W.jG.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.J(a))},
$S:39}
W.jE.prototype={
aV:function(a){var u=J.U(a)
if(!!u.$icM)return!1
u=!!u.$ip
if(u&&W.cu(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.j.eG(b,"on"))return!1
return this.aV(a)},
$iav:1}
W.dG.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdu(J.m5(u.a,t))
u.c=t
return!0}u.sdu(null)
u.c=s
return!1},
gH:function(a){return this.d},
sdu:function(a){this.d=H.D(a,H.w(this,0))},
$iaY:1}
W.av.prototype={}
W.jy.prototype={$io7:1}
W.fd.prototype={
cV:function(a){new W.jK(this).$2(a,null)},
b4:function(a,b){if(b==null)J.kH(a)
else b.removeChild(a)},
ia:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.m9(a)
n=o.a.getAttribute("is")
H.e(a,"$iO")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.z(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.at(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.at(r)}try{s=W.cu(a)
this.i9(H.e(a,"$iO"),b,p,t,s,H.e(o,"$iQ"),H.J(n))}catch(r){if(H.at(r) instanceof P.aH)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.m(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aV(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aw(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gac(f)
t=H.d(u.slice(0),[H.w(u,0)])
for(s=f.gac(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.k(t,s)
r=t[s]
q=o.a
p=J.mc(r)
H.J(r)
if(!q.aw(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.m(e)+" "+r+'="'+H.m(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$icR)o.cV(a.content)},
$inS:1}
W.jK.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ia(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.at(s)
r=H.e(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iC")}},
$S:40}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
P.fc.prototype={$ibD:1,
gco:function(a){return this.a}}
P.jS.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.h2.prototype={
gbi:function(){var u=this.b,t=H.ae(u,"u",0),s=W.O
return new H.hm(new H.d5(u,H.n(new P.h3(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h4(),{func:1,ret:s,args:[t]}),[t,s])},
p:function(a,b,c){var u
H.e(c,"$iO")
u=this.gbi()
J.mb(u.b.$1(J.dn(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
a_:function(a,b,c,d,e){H.i(d,"$ic",[W.O],"$ac")
throw H.f(P.I("Cannot setRange on filtered list"))},
as:function(a,b,c,d){return this.a_(a,b,c,d,0)},
gk:function(a){return J.aU(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.dn(u.a,b))},
gS:function(a){var u=P.kX(this.gbi(),!1,W.O)
return new J.ak(u,u.length,[H.w(u,0)])},
$au:function(){return[W.O]},
$ac:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.h3.prototype={
$1:function(a){return!!J.U(H.e(a,"$iC")).$iO},
$S:15}
P.h4.prototype={
$1:function(a){return H.h(H.e(a,"$iC"),"$iO")},
$S:42}
P.jt.prototype={
gbJ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.w(this,0))},
gdP:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.F(t)
return H.D(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iah){t=p.a
if(t==u.gbG(b)){s=p.b
if(s==u.gbK(b)){r=p.c
if(typeof t!=="number")return t.I()
if(typeof r!=="number")return H.F(r)
q=H.w(p,0)
if(H.D(t+r,q)===u.gbJ(b)){t=p.d
if(typeof s!=="number")return s.I()
if(typeof t!=="number")return H.F(t)
u=H.D(s+t,q)===u.gdP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.bR(s),q=t.b,p=J.bR(q),o=t.c
if(typeof s!=="number")return s.I()
if(typeof o!=="number")return H.F(o)
u=H.w(t,0)
o=C.f.gJ(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.I()
if(typeof s!=="number")return H.F(s)
u=C.f.gJ(H.D(q+s,u))
return P.n1(P.jq(P.jq(P.jq(P.jq(0,r),p),o),u))}}
P.ah.prototype={
gbG:function(a){return this.a},
gbK:function(a){return this.b},
gan:function(a){return this.c},
gak:function(a){return this.d}}
P.b1.prototype={$ib1:1}
P.hf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.e(c,"$ib1")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){return this.j(a,b)},
$au:function(){return[P.b1]},
$ic:1,
$ac:function(){return[P.b1]},
$ib:1,
$ab:function(){return[P.b1]},
$aB:function(){return[P.b1]}}
P.b5.prototype={$ib5:1}
P.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.e(c,"$ib5")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){return this.j(a,b)},
$au:function(){return[P.b5]},
$ic:1,
$ac:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aB:function(){return[P.b5]}}
P.hR.prototype={
gk:function(a){return a.length}}
P.cM.prototype={$icM:1}
P.ik.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.J(c)
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){return this.j(a,b)},
$au:function(){return[P.l]},
$ic:1,
$ac:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aB:function(){return[P.l]}}
P.p.prototype={
gck:function(a){return new P.h2(a,new W.ao(a))},
aj:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.av])
C.a.h(p,W.lp(null))
C.a.h(p,W.ls())
C.a.h(p,new W.jE())
c=new W.fd(new W.dY(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.u).jg(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ao(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.b7.prototype={$ib7:1}
P.iC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.e(c,"$ib7")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){return this.j(a,b)},
$au:function(){return[P.b7]},
$ic:1,
$ac:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aB:function(){return[P.b7]}}
P.eI.prototype={}
P.eJ.prototype={}
P.eS.prototype={}
P.eT.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fv.prototype={
gk:function(a){return a.length}}
P.fw.prototype={
j:function(a,b){return P.bl(a.get(H.J(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gac:function(a){var u=H.d([],[P.l])
this.O(a,new P.fx(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
P.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fy.prototype={
gk:function(a){return a.length}}
P.bT.prototype={}
P.hM.prototype={
gk:function(a){return a.length}}
P.ev.prototype={}
P.ds.prototype={$ids:1}
P.dH.prototype={$idH:1}
P.e1.prototype={$ie1:1}
P.e4.prototype={$ie4:1}
P.c4.prototype={
ex:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$ibD&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.lC(g))
return}if(!!u.$icz&&h==null&&t&&!0){this.iu(a,b,c,d,e,f,g)
return}throw H.f(P.md("Incorrect number or type of arguments"))},
jT:function(a,b,c,d,e,f,g){return this.ex(a,b,c,d,e,f,g,null,null,null)},
iu:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
K:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
bL:function(a,b,c,d){return a.uniform2f(b,c,d)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
k_:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.e5.prototype={$ie5:1}
P.ed.prototype={$ied:1}
P.em.prototype={$iem:1}
P.ib.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Z(b,a,null,null,null))
return P.bl(a.item(b))},
p:function(a,b,c){H.e(c,"$iQ")
throw H.f(P.I("Cannot assign element of immutable List."))},
D:function(a,b){return this.j(a,b)},
$au:function(){return[[P.Q,,,]]},
$ic:1,
$ac:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aB:function(){return[[P.Q,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
O.Y.prototype={
bd:function(a){var u=this
u.sfT(H.d([],[a]))
u.sdB(null)
u.sdw(null)
u.sdC(null)},
cX:function(a,b,c){var u=this,t=H.ae(u,"Y",0)
H.n(b,{func:1,ret:P.T,args:[[P.c,t]]})
t={func:1,ret:-1,args:[P.A,[P.c,t]]}
H.n(a,t)
H.n(c,t)
u.sdB(b)
u.sdw(a)
u.sdC(c)},
aN:function(a,b){return this.cX(a,null,b)},
av:function(a){var u
H.i(a,"$ic",[H.ae(this,"Y",0)],"$ac")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dv:function(a,b){var u
H.i(b,"$ic",[H.ae(this,"Y",0)],"$ac")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ak(u,u.length,[H.w(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ae(s,"Y",0)
H.D(b,r)
r=[r]
if(H.z(s.av(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dv(t,H.d([b],r))}},
ab:function(a,b){var u,t,s=this
H.i(b,"$ic",[H.ae(s,"Y",0)],"$ac")
if(H.z(s.av(b))){u=s.a
t=u.length
C.a.ab(u,b)
s.dv(t,b)}},
sfT:function(a){this.a=H.i(a,"$ib",[H.ae(this,"Y",0)],"$ab")},
sdB:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.c,H.ae(this,"Y",0)]]})},
sdw:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.A,[P.c,H.ae(this,"Y",0)]]})},
sdC:function(a){H.n(a,{func:1,ret:-1,args:[P.A,[P.c,H.ae(this,"Y",0)]]})},
$ic:1}
O.cC.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
aP:function(){var u=this.b
if(u!=null)u.v(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gcE(u)
else return V.bI()},
bH:function(a){var u=this.a
if(a==null)C.a.h(u,V.bI())
else C.a.h(u,a)
this.aP()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sc2:function(a){this.a=H.i(a,"$ib",[V.a6],"$ab")}}
E.fA.prototype={}
E.am.prototype={
de:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ak(u,u.length,[H.w(u,0)]);u.u();){t=u.d
if(t.f==null)t.de()}},
scZ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().N(0,s.gem())
u=s.c
if(u!=null)u.gl().h(0,s.gem())
t=new D.x("shape",r,s.c,[F.e6])
t.b=!0
s.ar(t)}},
saL:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().N(0,s.geo())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.geo())
s.de()
t=new D.x("technique",u,s.f,[O.bM])
t.b=!0
s.ar(t)}},
scK:function(a){var u,t,s=this
if(!J.a_(s.r,a)){u=s.r
if(u!=null)u.gl().N(0,s.gek())
if(a!=null)a.gl().h(0,s.gek())
s.r=a
t=new D.x("mover",u,a,[U.ab])
t.b=!0
s.ar(t)}},
a7:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.a_(q,s.x)){u=s.x
s.x=q
t=new D.x("matrix",u,q,[V.a6])
t.b=!0
s.ar(t)}r=s.f
if(r!=null)r.a7(0,b)
for(r=s.y.a,r=new J.ak(r,r.length,[H.w(r,0)]);r.u();)r.d.a7(0,b)},
a5:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gU(s))
else C.a.h(s.a,r.t(0,s.gU(s)))
s.aP()
a.cN(t.f)
s=a.dy
u=(s&&C.a).gcE(s)
if(u!=null&&t.d!=null)u.bI(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.w(s,0)]);s.u();)s.d.a5(a)
a.cM()
a.dx.aJ()},
gl:function(){var u=this.z
return u==null?this.z=D.H():u},
ar:function(a){var u=this.z
if(u!=null)u.v(a)},
a4:function(){return this.ar(null)},
en:function(a){H.e(a,"$ir")
this.e=null
this.ar(a)},
jB:function(){return this.en(null)},
ep:function(a){this.ar(H.e(a,"$ir"))},
jC:function(){return this.ep(null)},
el:function(a){this.ar(H.e(a,"$ir"))},
jA:function(){return this.el(null)},
ej:function(a){this.ar(H.e(a,"$ir"))},
jx:function(){return this.ej(null)},
jw:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ic",[E.am],"$ac")
for(u=b.length,t=this.gei(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bB()
o.sa9(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jz:function(a,b){var u,t
H.i(b,"$ic",[E.am],"$ac")
for(u=b.gS(b),t=this.gei();u.u();)u.gH(u).gl().N(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seT:function(a,b){this.y=H.i(b,"$iY",[E.am],"$aY")},
$ib4:1}
E.hU.prototype={
eP:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cC()
t=[V.a6]
u.sc2(H.d([],t))
u.b=null
u.gl().h(0,new E.hV(s))
s.cy=u
u=new O.cC()
u.sc2(H.d([],t))
u.b=null
u.gl().h(0,new E.hW(s))
s.db=u
u=new O.cC()
u.sc2(H.d([],t))
u.b=null
u.gl().h(0,new E.hX(s))
s.dx=u
s.sit(H.d([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.sil(new H.b_([P.l,A.cN]))},
gjK:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.t(0,u.gU(u))
s=u}return s},
ger:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjK()
u=t.dx
u=t.ch=s.t(0,u.gU(u))
s=u}return s},
cN:function(a){var u=this.dy,t=a==null?(u&&C.a).gcE(u):a;(u&&C.a).h(u,t)},
cM:function(){var u=this.dy
if(u.length>1)u.pop()},
bn:function(a){var u=a.b
if(u.length===0)throw H.f(P.q("May not cache a shader with no name."))
if(this.fr.dR(0,u))throw H.f(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.p(0,u,a)},
sit:function(a){this.dy=H.i(a,"$ib",[O.bM],"$ab")},
sil:function(a){this.fr=H.i(a,"$iQ",[P.l,A.cN],"$aQ")}}
E.hV.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.ch=u.z=null},
$S:5}
E.hW.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.hX.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.cx=u.ch=null},
$S:5}
E.ej.prototype={
d8:function(a){H.e(a,"$ir")
this.es()},
d7:function(){return this.d8(null)},
gjn:function(){var u,t=this,s=Date.now(),r=C.f.a2(P.kO(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.F(r)
u=C.i.aY(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.i.aY(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lg(C.n,s.gjP())}},
es:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iw(this),{func:1,ret:-1,args:[P.aa]})
C.D.fD(u)
C.D.i5(u,W.ly(t,P.aa))}},
jN:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dG()
s=p.y
if(s!=null)s.v(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.kO(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aP()
r=s.db
C.a.sk(r.a,0)
r.aP()
r=s.dx
C.a.sk(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a5(p.e)}}catch(q){u=H.at(q)
t=H.ci(q)
P.kD("Error: "+H.m(u))
P.kD("Stack: "+H.m(t))
throw H.f(u)}}}
E.iw.prototype={
$1:function(a){var u
H.nB(a)
u=this.a
if(u.ch){u.ch=!1
u.jN()}},
$S:34}
Z.et.prototype={$inM:1}
Z.dt.prototype={
R:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.at(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.c8.prototype={$inN:1}
Z.bs.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
R:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].R(a)},
ad:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.k(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(p,", ")+"\nAttrs:   "+C.a.C(r,", ")},
sfN:function(a){this.b=H.i(a,"$ib",[Z.bE],"$ab")},
$inU:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c2(this.c)+"'")+"]"}}
Z.b9.prototype={
gd_:function(a){var u=this.a,t=(u&$.ap().a)!==0?3:0
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=2
if((u&$.bq().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
ja:function(a){var u,t=$.ap(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.m2()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b9))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.l]),t=this.a
if((t&$.ap().a)!==0)C.a.h(u,"Pos")
if((t&$.bo().a)!==0)C.a.h(u,"Norm")
if((t&$.bn().a)!==0)C.a.h(u,"Binm")
if((t&$.bp().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bq().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dl().a)!==0)C.a.h(u,"Clr3")
if((t&$.dm().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.fG.prototype={}
D.bB.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.r]}
H.n(b,u)
if(this.a==null)this.sa9(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.r]})
u=s.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.r()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.O(P.kX(u,!0,{func:1,ret:-1,args:[D.r]}),new D.fZ(q))
u=r.b
if(u!=null){r.saT(H.d([],[{func:1,ret:-1,args:[D.r]}]))
C.a.O(u,new D.h_(q))}return!0},
ct:function(){return this.v(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sa9:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")},
saT:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")}}
D.fZ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.h_.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.r.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.du.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dN.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.he.prototype={
jH:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jD:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
si0:function(a){this.d=H.i(a,"$ilb",[P.A],"$alb")}}
X.dS.prototype={}
X.hj.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a8(o.a+n*m,o.b+u*t)
t=q.a.gaX()
r=new X.aA(a,V.bi(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cL:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eD()
if(typeof u!=="number")return u.eC()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.b2(a,b))
return!0},
jI:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cD(new V.R(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
hz:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dS(c,r.a.gaX(),b)
s.b=!0
t.v(s)
r.y=new P.az(u,!1)
r.x=V.bi()}}
X.aq.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aq))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.aA.prototype={}
X.hB.prototype={
c0:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaX(),r=new X.aA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cL:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.c0(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eD()
if(typeof t!=="number")return t.eC()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.c0(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.c0(a,b,!1))
return!0},
jJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cD(new V.R(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gcs:function(){var u=this.b
return u==null?this.b=D.H():u},
gbc:function(){var u=this.c
return u==null?this.c=D.H():u},
gb_:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.cD.prototype={}
X.hQ.prototype={}
X.cV.prototype={}
X.iz.prototype={
b2:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a8],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bi()
s=q.a.gaX()
r=new X.cV(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jG:function(a){var u
H.i(a,"$ib",[V.a8],"$ab")
u=this.b
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
jE:function(a){var u
H.i(a,"$ib",[V.a8],"$ab")
u=this.c
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
jF:function(a){var u
H.i(a,"$ib",[V.a8],"$ab")
u=this.d
if(u==null)return!1
u.v(this.b2(a,!1))
return!0},
gd0:function(a){var u=this.b
return u==null?this.b=D.H():u},
gdT:function(a){var u=this.c
return u==null?this.c=D.H():u},
gb_:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.eo.prototype={
gaX:function(){var u=this.a,t=C.l.gdQ(u).c
t.toString
u=C.l.gdQ(u).d
u.toString
return V.e2(0,0,t,u)},
dq:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.dN(u,new X.aq(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.aq(t,a.altKey,a.shiftKey)},
cb:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.aq(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.a8(s-q,r-u)},
b3:function(a){return new V.R(a.movementX,a.movementY)},
c7:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a8])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
q=C.i.Z(r.pageX)
C.i.Z(r.pageY)
p=o.left
C.i.Z(r.pageX)
C.a.h(n,new V.a8(q-p,C.i.Z(r.pageY)-o.top))}return n},
aD:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.du(u,new X.aq(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ht:function(a){this.f=!0},
hd:function(a){this.f=!1},
hj:function(a){H.e(a,"$ia7")
if(H.z(this.f)&&this.c3(a))a.preventDefault()},
hx:function(a){var u
H.e(a,"$ib0")
if(!H.z(this.f))return
u=this.dq(a)
this.b.jH(u)},
hv:function(a){var u
H.e(a,"$ib0")
if(!H.z(this.f))return
u=this.dq(a)
this.b.jD(u)},
hB:function(a){var u,t,s,r,q=this
H.e(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.z(q.x)){t=q.aD(a)
s=q.b3(a)
if(q.d.cL(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aD(a)
r=q.aG(a)
if(q.c.cL(t,r))a.preventDefault()},
hF:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aU(a)
u=r.aD(a)
if(H.z(r.x)){t=r.b3(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aG(a)
if(r.c.b7(u,s))a.preventDefault()},
hn:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c3(a)){r.aU(a)
u=r.aD(a)
if(H.z(r.x)){t=r.b3(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aG(a)
if(r.c.b7(u,s))a.preventDefault()}},
hD:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aU(a)
u=r.aD(a)
if(H.z(r.x)){t=r.b3(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aG(a)
if(r.c.b6(u,s))a.preventDefault()},
hl:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c3(a)){r.aU(a)
u=r.aD(a)
if(H.z(r.x)){t=r.b3(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.aG(a)
if(r.c.b6(u,s))a.preventDefault()}},
hH:function(a){var u,t,s=this
H.e(a,"$iba")
s.aU(a)
u=new V.R((a&&C.C).gjj(a),C.C.gjk(a)).w(0,180)
if(H.z(s.x)){if(s.d.jI(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.aG(a)
if(s.c.jJ(u,t))a.preventDefault()},
hJ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aD(s.y)
t=s.aG(s.y)
s.d.hz(u,t,r)}},
hZ:function(a){var u,t=this
H.e(a,"$iaS")
t.a.focus()
t.f=!0
t.cb(a)
u=t.c7(a)
if(t.e.jG(u))a.preventDefault()},
hV:function(a){var u
H.e(a,"$iaS")
this.cb(a)
u=this.c7(a)
if(this.e.jE(u))a.preventDefault()},
hX:function(a){var u
H.e(a,"$iaS")
this.cb(a)
u=this.c7(a)
if(this.e.jF(u))a.preventDefault()},
sfF:function(a){this.z=H.i(a,"$ib",[[P.cP,P.V]],"$ab")}}
D.by.prototype={
gl:function(){var u=this.d
return u==null?this.d=D.H():u},
aC:function(a){var u
H.e(a,"$ir")
u=this.d
if(u!=null)u.v(a)},
eW:function(){return this.aC(null)},
$ia2:1,
$ib4:1}
D.a2.prototype={$ib4:1}
D.dO.prototype={
gl:function(){var u=this.Q
return u==null?this.Q=D.H():u},
aC:function(a){var u=this.Q
if(u!=null)u.v(a)},
dA:function(a){var u
H.e(a,"$ir")
u=this.ch
if(u!=null)u.v(a)},
hy:function(){return this.dA(null)},
hL:function(a){var u,t,s
H.i(a,"$ic",[D.a2],"$ac")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.ft(s))return!1}return!0},
h7:function(a,b){var u,t,s,r,q,p,o,n=D.a2
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gdz(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=H.e(b[q],"$ia2")
if(p instanceof D.by)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bB()
o.sa9(null)
o.saT(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bF([n])
n.b=!0
this.aC(n)},
hP:function(a,b){var u,t,s,r=D.a2
H.i(b,"$ic",[r],"$ac")
for(u=b.gS(b),t=this.gdz();u.u();){s=u.gH(u)
C.a.N(this.e,s)
s.gl().N(0,t)}r=new D.bG([r])
r.b=!0
this.aC(r)},
ft:function(a){var u=C.a.T(this.e,a)
return u},
sfB:function(a){this.e=H.i(a,"$ib",[D.by],"$ab")},
si_:function(a){this.f=H.i(a,"$ib",[D.e0],"$ab")},
sio:function(a){this.r=H.i(a,"$ib",[D.ea],"$ab")},
siD:function(a){this.x=H.i(a,"$ib",[D.eg],"$ab")},
siE:function(a){this.y=H.i(a,"$ib",[D.eh],"$ab")},
siF:function(a){this.z=H.i(a,"$ib",[D.ei],"$ab")},
$ac:function(){return[D.a2]},
$aY:function(){return[D.a2]}}
D.e0.prototype={$ia2:1,$ib4:1}
D.ea.prototype={$ia2:1,$ib4:1}
D.eg.prototype={$ia2:1,$ib4:1}
D.eh.prototype={$ia2:1,$ib4:1}
D.ei.prototype={$ia2:1,$ib4:1}
V.X.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.a4.prototype={
jZ:function(){var u=this
return new V.a4(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fY.prototype={}
V.dW.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dW))return!1
u=b.a
t=$.G().a
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
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.cg(H.d([q.a,q.d,q.r],p),3,0),n=V.cg(H.d([q.b,q.e,q.x],p),3,0),m=V.cg(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.k(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.k(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.k(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.k(o,1)
r=" "+o[1]+", "
if(1>=t)return H.k(n,1)
r=r+n[1]+", "
if(1>=s)return H.k(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.k(o,2)
p=" "+o[2]+", "
if(2>=t)return H.k(n,2)
p=p+n[2]+", "
if(2>=s)return H.k(m,2)
return r+(p+m[2]+"]")}}
V.a6.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
cD:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.G().a)return V.bI()
u=1/b1
t=-n
s=-a0
return V.b3((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b3(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.S(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.an(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.G().a
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
i:function(a){return this.L()},
E:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.cg(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cg(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cg(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cg(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.E("")}}
V.a8.prototype={
G:function(a,b){return new V.a8(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.an.prototype={
G:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bj.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.bK.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.R.prototype={
cF:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.R(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.lj
return u==null?$.lj=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.R(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.S.prototype={
cF:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cG:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b5:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.S(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.G().a)return V.es()
return new V.S(this.a/b,this.b/b,this.c/b)},
ee:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.fI.prototype={
bW:function(a){var u=V.k6(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
F:function(a){var u=this.y
if(u!=null)u.v(a)},
scS:function(a,b){},
scH:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.G().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bW(u)}s=new D.x("maximumLocation",s,t.b,[P.y])
s.b=!0
t.F(s)}},
scJ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.G().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bW(u)}s=new D.x("minimumLocation",s,t.c,[P.y])
s.b=!0
t.F(s)}},
saf:function(a,b){var u,t=this
b=t.bW(b)
u=t.d
if(!(Math.abs(u-b)<$.G().a)){t.d=b
u=new D.x("location",u,b,[P.y])
u.b=!0
t.F(u)}},
scI:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.G().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a,[P.y])
r.b=!0
s.F(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.G().a)){u.f=a
t=new D.x("velocity",t,a,[P.y])
t.b=!0
u.F(t)}},
scn:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.x("dampening",u,a,[P.y])
u.b=!0
this.F(u)}},
a7:function(a,b){var u,t,s,r=this,q=r.f,p=$.G().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saf(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.G().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.cr.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
sU:function(a,b){var u,t,s,r=this
if(!J.a_(r.a,b)){u=r.a
r.a=b
t=new D.x("matrix",u,b,[V.a6])
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
aB:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cy.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
F:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
aa:function(){return this.F(null)},
eY:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.F(n)},
hN:function(a,b){var u,t,s=U.ab
H.i(b,"$ic",[s],"$ac")
for(u=b.gS(b),t=this.gaS();u.u();)u.gH(u).gl().N(0,t)
s=new D.bG([s])
s.b=!0
this.F(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aM()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.w(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bI():u
r=s.e
if(r!=null)r.az(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ac:function(){return[U.ab]},
$aY:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.cL.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
F:function(a){var u=this.y
if(u!=null)u.v(a)},
seB:function(a){var u
a=V.k6(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.x("yaw",u,a,[P.y])
u.b=!0
this.F(u)}},
seq:function(a,b){var u
b=V.k6(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.G().a)){this.b=b
u=new D.x("pitch",u,b,[P.y])
u.b=!0
this.F(u)}},
seu:function(a){var u
a=V.k6(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.x("roll",u,a,[P.y])
u.b=!0
this.F(u)}},
scp:function(a){var u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
u=new D.x("deltaPitch",u,a,[P.y])
u.b=!0
this.F(u)}},
scq:function(a){var u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.x("deltaRoll",u,a,[P.y])
u.b=!0
this.F(u)}},
aB:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seB(u.a+u.d*b.y)
u.seq(0,u.b+u.e*b.y)
u.seu(u.c+u.f*b.y)
u.x=V.l1(u.c).t(0,V.l0(u.b)).t(0,V.l_(u.a))
t=u.y
if(t!=null)t.az(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cL))return!1
u=r.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.ep.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.H():u},
F:function(a){var u
H.e(a,"$ir")
u=this.cy
if(u!=null)u.v(a)},
aa:function(){return this.F(null)},
aH:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcs().h(0,u.gbQ())
u.a.c.gb_().h(0,u.gbS())
u.a.c.gbc().h(0,u.gbU())
return!0},
bR:function(a){var u=this
H.e(a,"$ir")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.e(a,"$ir"),"$iaA")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.G(0,a.y)
u=new V.R(t.a,t.b).t(0,2).w(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.R(s.a,s.b).t(0,2).w(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
n.b.sV(0)
t=t.G(0,a.z)
n.Q=new V.R(t.a,t.b).t(0,2).w(0,u.gag())}n.aa()},
bV:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sV(t*10*s)
r.aa()}},
aB:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.aM()
if(s<r){t.ch=r
u=b.y
t.b.a7(0,u)
t.cx=V.l1(t.b.d)}return t.cx},
$iab:1}
U.eq.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.H():u},
F:function(a){var u
H.e(a,"$ir")
u=this.fx
if(u!=null)u.v(a)},
aa:function(){return this.F(null)},
aH:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcs().h(0,s.gbQ())
s.a.c.gb_().h(0,s.gbS())
s.a.c.gbc().h(0,s.gbU())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.h(0,s.gfU())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.gfW())
u=s.a.e
u.gd0(u).h(0,s.gf2())
s.a.e.gb_().h(0,s.gf0())
u=s.a.e
u.gdT(u).h(0,s.geZ())
return!0},
at:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.R(u,t)},
bR:function(a){var u=this
a=H.h(H.e(a,"$ir"),"$iaA")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.e(a,"$ir"),"$iaA")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.at(new V.R(t.a,t.b).t(0,2).w(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).t(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).t(0,2).w(0,u.gag()))}n.aa()},
bV:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sV(-t*10*u)
r.aa()}},
fV:function(a){var u=this
if(H.h(H.e(a,"$ir"),"$idS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fX:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.e(a,"$ir"),"$iaA")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).t(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).t(0,2).w(0,u.gag()))
n.aa()},
f3:function(a){var u=this
H.e(a,"$ir")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f1:function(a){var u,t,s,r,q,p,o,n=this
a=H.h(H.e(a,"$ir"),"$icV")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.G(0,a.y)
u=n.at(new V.R(t.a,t.b).t(0,2).w(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.at(new V.R(s.a,s.b).t(0,2).w(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.saf(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.saf(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.G(0,a.z)
n.dx=n.at(new V.R(t.a,t.b).t(0,2).w(0,u.gag()))}n.aa()},
f_:function(a){var u,t,s,r=this
H.e(a,"$ir")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sV(-t*10*u)
r.aa()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.aM()
if(s<r){t.dy=r
u=b.y
t.c.a7(0,u)
t.b.a7(0,u)
t.fr=V.l_(t.b.d).t(0,V.l0(t.c.d))}return t.fr},
$iab:1}
U.er.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
F:function(a){var u=this.r
if(u!=null)u.v(a)},
aH:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.gh4()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).h(0,t)
return!0},
h5:function(a){var u,t,s,r,q=this
H.e(a,"$ir")
if(!J.a_(q.b,q.a.b.c))return
H.h(a,"$icD")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r,[P.y])
u.b=!0
q.F(u)}},
aB:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.my(u,u,u)}return t.f},
$iab:1}
M.dx.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
Y:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.Y(null)},
hR:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.Y(n)},
hT:function(a,b){var u,t,s=M.aw
H.i(b,"$ic",[s],"$ac")
for(u=b.gS(b),t=this.ga0();u.u();)u.gH(u).gl().N(0,t)
s=new D.bG([s])
s.b=!0
this.Y(s)},
a5:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ak(u,u.length,[H.w(u,0)]);u.u();){t=u.d
if(t!=null)t.a5(a)}s.f=!1},
$ac:function(){return[M.aw]},
$aY:function(){return[M.aw]},
$iaw:1}
M.dz.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
Y:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.Y(null)},
saW:function(a){var u,t,s=this
if(a==null)a=new X.h9()
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.ga0())
t=s.b
s.b=a
a.gl().h(0,s.ga0())
u=new D.x("camera",t,s.b,[X.bU])
u.b=!0
s.Y(u)}},
saK:function(a,b){var u,t,s=this
if(b==null)b=X.kc(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().N(0,s.ga0())
t=s.c
s.c=b
b.gl().h(0,s.ga0())
u=new D.x("target",t,s.c,[X.cQ])
u.b=!0
s.Y(u)}},
saL:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.ga0())
s=new D.x("technique",u,t.d,[O.bM])
s.b=!0
t.Y(s)}},
a5:function(a){var u,t=this
a.cN(t.d)
t.c.R(a)
t.b.R(a)
u=t.d
if(u!=null)u.a7(0,a)
t.e.a7(0,a)
t.e.a5(a)
t.b.ad(a)
t.c.toString
a.cM()},
$iaw:1}
M.dE.prototype={
Y:function(a){var u
H.e(a,"$ir")
u=this.y
if(u!=null)u.v(a)},
b0:function(){return this.Y(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.i(b,"$ic",[n],"$ac")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bB()
o.sa9(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.Y(n)},
hh:function(a,b){var u,t,s=E.am
H.i(b,"$ic",[s],"$ac")
for(u=b.gS(b),t=this.ga0();u.u();)u.gH(u).gl().N(0,t)
s=new D.bG([s])
s.b=!0
this.Y(s)},
saW:function(a){var u,t,s=this
if(a==null)a=X.l5(null)
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.ga0())
t=s.b
s.b=a
a.gl().h(0,s.ga0())
u=new D.x("camera",t,s.b,[X.bU])
u.b=!0
s.Y(u)}},
saK:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().N(0,t.ga0())
u=t.c
t.c=b
b.gl().h(0,t.ga0())
s=new D.x("target",u,t.c,[X.cQ])
s.b=!0
t.Y(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
a5:function(a){var u,t=this
a.cN(t.d)
t.c.R(a)
t.b.R(a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.w(u,0)]);u.u();)u.d.a7(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.w(u,0)]);u.u();)u.d.a5(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.ad(a)
a.cM()},
sfp:function(a,b){this.e=H.i(b,"$iY",[E.am],"$aY")},
$iaw:1}
M.aw.prototype={}
A.dq.prototype={}
A.fu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jl:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dV.prototype={
eO:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bL("")
t=d1.fx
if(t){u.a=c6
s=c6}else s=""
r=d1.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d1.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d1.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d1.iK(u)
d1.iR(u)
d1.iL(u)
d1.iZ(u)
d1.j_(u)
d1.iT(u)
d1.j3(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d1.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(d1.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d1.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d1.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d1.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
q=a6.z
u=new P.bL("")
u.a="precision mediump float;\n"
u.a=c9
p=q.r1
if(p){u.a=d0
o=d0}else o=c9
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}o=u.a=(q.k4?u.a=o+"varying vec3 viewPos;\n":o)+"\n"
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}u.a=(q.fr?u.a=o+"uniform mat4 invViewMat;\n":o)+"\n"
q.iO(u)
q.iJ(u)
q.iM(u)
q.iP(u)
q.iX(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iV(u)
q.iW(u)}q.iS(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.h){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.h:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.d([],[P.l])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iN(u)
q.iU(u)
q.iY(u)
q.j0(u)
q.j1(u)
q.j2(u)
q.iQ(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.l])
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
i="vec4("+C.a.C(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.bF(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.h(a6.y.m(0,"invViewMat"),"$iac")
if(t)a6.dy=H.h(a6.y.m(0,"objMat"),"$iac")
if(r)a6.fr=H.h(a6.y.m(0,"viewObjMat"),"$iac")
a6.fy=H.h(a6.y.m(0,"projViewObjMat"),"$iac")
if(d1.x2)a6.k1=H.h(a6.y.m(0,"txt2DMat"),"$icZ")
if(d1.y1)a6.k2=H.h(a6.y.m(0,"txtCubeMat"),"$iac")
if(d1.y2)a6.k3=H.h(a6.y.m(0,"colorMat"),"$iac")
a6.sfk(H.d([],[A.ac]))
t=d1.ay
if(t>0){a6.k4=H.e(a6.y.m(0,"bendMatCount"),"$iL")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.q(a7+q+a8));(s&&C.a).h(s,H.h(g,"$iac"))}}t=d1.a
if(t!==C.c){a6.r2=H.h(a6.y.m(0,"emissionClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.rx=H.h(a6.y.m(0,a9),"$iad")
a6.x1=H.h(a6.y.m(0,b0),"$iL")
break
case C.d:a6.ry=H.h(a6.y.m(0,a9),"$iaj")
a6.x1=H.h(a6.y.m(0,b0),"$iL")
break}}t=d1.b
if(t!==C.c){a6.x2=H.h(a6.y.m(0,"ambientClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.y1=H.h(a6.y.m(0,b1),"$iad")
a6.ay=H.h(a6.y.m(0,b2),"$iL")
break
case C.d:a6.y2=H.h(a6.y.m(0,b1),"$iaj")
a6.ay=H.h(a6.y.m(0,b2),"$iL")
break}}t=d1.c
if(t!==C.c){a6.ap=H.h(a6.y.m(0,"diffuseClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.bq=H.h(a6.y.m(0,b3),"$iad")
a6.br=H.h(a6.y.m(0,b4),"$iL")
break
case C.d:a6.dU=H.h(a6.y.m(0,b3),"$iaj")
a6.br=H.h(a6.y.m(0,b4),"$iL")
break}}t=d1.d
if(t!==C.c){a6.bs=H.h(a6.y.m(0,"invDiffuseClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dV=H.h(a6.y.m(0,b5),"$iad")
a6.bt=H.h(a6.y.m(0,b6),"$iL")
break
case C.d:a6.dW=H.h(a6.y.m(0,b5),"$iaj")
a6.bt=H.h(a6.y.m(0,b6),"$iL")
break}}t=d1.e
if(t!==C.c){a6.bw=H.h(a6.y.m(0,"shininess"),"$ia0")
a6.bu=H.h(a6.y.m(0,"specularClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dX=H.h(a6.y.m(0,b7),"$iad")
a6.bv=H.h(a6.y.m(0,b8),"$iL")
break
case C.d:a6.dY=H.h(a6.y.m(0,b7),"$iaj")
a6.bv=H.h(a6.y.m(0,b8),"$iL")
break}}switch(d1.f){case C.c:break
case C.h:break
case C.e:a6.dZ=H.h(a6.y.m(0,"bumpTxt"),"$iad")
a6.bx=H.h(a6.y.m(0,b9),"$iL")
break
case C.d:a6.e_=H.h(a6.y.m(0,"bumpTxt"),"$iaj")
a6.bx=H.h(a6.y.m(0,b9),"$iL")
break}if(d1.dy){a6.e0=H.h(a6.y.m(0,"envSampler"),"$iaj")
a6.e1=H.h(a6.y.m(0,"nullEnvTxt"),"$iL")
t=d1.r
if(t!==C.c){a6.by=H.h(a6.y.m(0,"reflectClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e2=H.h(a6.y.m(0,c0),"$iad")
a6.bz=H.h(a6.y.m(0,c1),"$iL")
break
case C.d:a6.e3=H.h(a6.y.m(0,c0),"$iaj")
a6.bz=H.h(a6.y.m(0,c1),"$iL")
break}}t=d1.x
if(t!==C.c){a6.bA=H.h(a6.y.m(0,"refraction"),"$ia0")
a6.bB=H.h(a6.y.m(0,"refractClr"),"$iM")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e4=H.h(a6.y.m(0,c2),"$iad")
a6.bC=H.h(a6.y.m(0,c3),"$iL")
break
case C.d:a6.e5=H.h(a6.y.m(0,c2),"$iaj")
a6.bC=H.h(a6.y.m(0,c3),"$iL")
break}}}t=d1.y
if(t!==C.c){a6.bD=H.h(a6.y.m(0,"alpha"),"$ia0")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e6=H.h(a6.y.m(0,c4),"$iad")
a6.bE=H.h(a6.y.m(0,c5),"$iL")
break
case C.d:a6.e7=H.h(a6.y.m(0,c4),"$iaj")
a6.bE=H.h(a6.y.m(0,c5),"$iL")
break}}a6.sf4(H.d([],[A.cY]))
a6.sf5(H.d([],[A.d_]))
a6.sf6(H.d([],[A.d0]))
a6.sf7(H.d([],[A.d1]))
a6.sf8(H.d([],[A.d2]))
a6.sf9(H.d([],[A.d3]))
if(d1.k2){t=d1.z
if(t>0){a6.e8=H.e(a6.y.m(0,"dirLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.cu;(s&&C.a).h(s,new A.cY(g,f))}}t=d1.Q
if(t>0){a6.e9=H.e(a6.y.m(0,"pntLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.h(e,"$iM")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.h(d,"$ia0")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.h(c,"$ia0")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.h(b,"$ia0")
s=a6.cv;(s&&C.a).h(s,new A.d_(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.ea=H.e(a6.y.m(0,"spotLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.h(e,"$iM")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.h(d,"$iM")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.h(c,"$ia0")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.h(b,"$ia0")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.h(a,"$ia0")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.h(a0,"$ia0")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.h(a1,"$ia0")
s=a6.cw;(s&&C.a).h(s,new A.d0(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eb=H.e(a6.y.m(0,"txtDirLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.h(e,"$iM")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.h(d,"$iM")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.h(c,"$iM")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.h(b,"$iL")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.h(a,"$iad")
s=a6.cz;(s&&C.a).h(s,new A.d1(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ec=H.e(a6.y.m(0,"txtPntLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.h(e,"$icZ")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.h(d,"$iM")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.h(c,"$iL")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.h(b,"$ia0")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.h(a,"$ia0")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.h(a0,"$ia0")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.h(a1,"$iaj")
s=a6.cA;(s&&C.a).h(s,new A.d2(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ed=H.e(a6.y.m(0,"txtSpotLightCount"),"$iL")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.h(g,"$iM")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.h(f,"$iM")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.h(e,"$iM")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.h(d,"$iM")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.h(c,"$iM")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.h(b,"$iL")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.h(a,"$iM")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.h(a0,"$ia0")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.h(a1,"$ia0")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.q(a7+r+a8))
H.h(a2,"$ia0")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.q(a7+r+a8))
H.h(a3,"$ia0")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.q(a7+r+a8))
H.h(a4,"$ia0")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.q(a7+r+a8))
H.h(a5,"$iad")
s=a6.cB;(s&&C.a).h(s,new A.d3(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ao:function(a,b,c){C.b.X(b.a,b.d,1)},
ai:function(a,b,c){if(c==null||c.d<6)C.b.X(b.a,b.d,1)
else{a.cY(c)
C.b.X(b.a,b.d,0)}},
sfk:function(a){this.r1=H.i(a,"$ib",[A.ac],"$ab")},
sf4:function(a){this.cu=H.i(a,"$ib",[A.cY],"$ab")},
sf5:function(a){this.cv=H.i(a,"$ib",[A.d_],"$ab")},
sf6:function(a){this.cw=H.i(a,"$ib",[A.d0],"$ab")},
sf7:function(a){this.cz=H.i(a,"$ib",[A.d1],"$ab")},
sf8:function(a){this.cA=H.i(a,"$ib",[A.d2],"$ab")},
sf9:function(a){this.cB=H.i(a,"$ib",[A.d3],"$ab")}}
A.hr.prototype={
iK:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ay+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u=a.a=u+"vec3 bendPos;\n"
t=r.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=r.r2
u=(s?a.a=u+"vec3 bendBinm;\n":u)+"\n"
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
u=a.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}u=(s?a.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
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
u=a.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
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
u=a.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}u=(s?a.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u=a.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
a.a=u
a.a=u+"\n"},
iR:function(a){var u
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
iL:function(a){var u
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
iZ:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":a.a=t+"   return vec3(txt2DAttr, 1.0).xy;\n")+"}\n"
a.a=t
a.a=t+"\n"},
j_:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":a.a=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n")+"}\n"
a.a=t
a.a=t+"\n"},
iT:function(a){var u
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
j3:function(a){var u
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
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.k(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.d1(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iO:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aE(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iJ:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aE(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iM:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aE(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = dot(norm, -litVec);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return diffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iP:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aE(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return invDiffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iX:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aE(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iS:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.h:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.h:u=a.a=u+r
break
case C.e:u+=q
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break
case C.d:u+=q
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break}u+="}\n"
a.a=u
a.a=u+"\n"},
iV:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aE(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iW:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aE(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iN:function(a){var u,t=this.z
if(t<=0)return
u=a.a+="// === Directional Light ===\n"
u+="\n"
a.a=u
u+="struct DirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int dirLightCount;\n"
u=a.a+="uniform DirLight dirLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 allDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= dirLightCount) break;\n"
a.a=t
t+="      DirLight lit = dirLights[i];\n"
a.a=t
t+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
iU:function(a){var u,t=this.Q
if(t<=0)return
u=a.a+="// === Point Light ===\n"
u+="\n"
a.a=u
u+="struct PointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int pntLightCount;\n"
u=a.a+="uniform PointLight pntLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= pntLightCount) break;\n"
a.a=t
t+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
iY:function(a){var u,t=this.ch
if(t<=0)return
u=a.a+="// === Spot Light ===\n"
u+="\n"
a.a=u
u+="struct SpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float cutoff;\n"
a.a=u
u+="   float coneAngle;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int spotLightCount;\n"
u=a.a+="uniform SpotLight spotLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=u
u+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   if(scale > 1.0) scale = 1.0;\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= spotLightCount) break;\n"
a.a=t
t+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
j0:function(a){var u,t,s=this.cx
if(s<=0)return
u=a.a+="// === Texture Directional Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedDirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtDirLightCount;\n"
u=a.a+="uniform TexturedDirLight txtDirLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtDirLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=u
u+="      float tu = dot(offset, lit.objUp);\n"
a.a=u
u+="      float tv = dot(offset, lit.objRight);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtDirLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+t+"], txtDirLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
j1:function(a){var u,t,s=this.cy
if(s<=0)return
u=a.a+="// === Texture Point Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedPointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   mat3 invViewRotMat;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtPntLightCount;\n"
u=a.a+="uniform TexturedPointLight txtPntLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform samplerCube txtPntLightsTxtCube"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=u
u+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtPntLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+t+"], txtPntLightsTxtCube"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
j2:function(a){var u,t,s=this.db
if(s<=0)return
u=a.a+="// === Texture Spot Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedSpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float tuScalar;\n"
a.a=u
u+="   float tvScalar;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtSpotLightCount;\n"
u=a.a+="uniform TexturedSpotLight txtSpotLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtSpotLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(dir);\n"
a.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=u
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   normDir = normDir/zScale;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=u
u+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=u
u+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtSpotLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+t+"], txtSpotLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iQ:function(a){var u
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
i:function(a){return this.ap}}
A.cY.prototype={}
A.d1.prototype={}
A.d_.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.cN.prototype={
be:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bF:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dr(b,35633)
r.f=r.dr(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kw(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.m(s)))}r.ii()
r.ik()},
R:function(a){a.a.useProgram(this.r)
this.x.jl()},
dr:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kw(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.q("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
ii:function(){var u,t,s,r=this,q=H.d([],[A.dq]),p=r.a,o=H.af(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dq(p,t.name,s))}r.x=new A.fu(q)},
ik:function(){var u,t,s,r=this,q=H.d([],[A.el]),p=r.a,o=H.af(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ji(t.type,t.size,t.name,s))}r.y=new A.iK(q)},
aQ:function(a,b,c){var u=this.a
if(a===1)return new A.L(u,b,c)
else return A.kn(u,this.r,b,a,c)},
fu:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.kn(u,this.r,b,a,c)},
fv:function(a,b,c){var u=this.a
if(a===1)return new A.aj(u,b,c)
else return A.kn(u,this.r,b,a,c)},
bl:function(a,b){return new P.eC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
ji:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aQ(b,c,d)
case 5121:return u.aQ(b,c,d)
case 5122:return u.aQ(b,c,d)
case 5123:return u.aQ(b,c,d)
case 5124:return u.aQ(b,c,d)
case 5125:return u.aQ(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.ax(u.a,c,d)
case 35665:return new A.M(u.a,c,d)
case 35666:return new A.cX(u.a,c,d)
case 35667:return new A.iH(u.a,c,d)
case 35668:return new A.iI(u.a,c,d)
case 35669:return new A.iJ(u.a,c,d)
case 35674:return new A.iL(u.a,c,d)
case 35675:return new A.cZ(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.fu(b,c,d)
case 35680:return u.fv(b,c,d)
case 35670:throw H.f(u.bl("BOOL",c))
case 35671:throw H.f(u.bl("BOOL_VEC2",c))
case 35672:throw H.f(u.bl("BOOL_VEC3",c))
case 35673:throw H.f(u.bl("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bW.prototype={
i:function(a){return this.b}}
A.bw.prototype={
i:function(a){return this.b}}
A.e8.prototype={}
A.e9.prototype={}
A.ef.prototype={
eS:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bF(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mR(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.h(p.y.m(0,"txtCount"),"$iL")
p.ch=H.h(p.y.m(0,"backClr"),"$icX")
p.siG(H.d([],[A.ad]))
p.sfq(H.d([],[A.ac]))
u=[A.ax]
p.sip(H.d([],u))
p.siq(H.d([],u))
p.sfz(H.d([],u))
p.sfA(H.d([],u))
p.sfM(H.d([],[A.L]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iad"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iac"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iax"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iax"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iax"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iax"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.t(P.q(o+r+n));(u&&C.a).h(u,H.h(q,"$iL"))}},
siG:function(a){this.cx=H.i(a,"$ib",[A.ad],"$ab")},
sfq:function(a){this.cy=H.i(a,"$ib",[A.ac],"$ab")},
sip:function(a){this.db=H.i(a,"$ib",[A.ax],"$ab")},
siq:function(a){this.dx=H.i(a,"$ib",[A.ax],"$ab")},
sfz:function(a){this.dy=H.i(a,"$ib",[A.ax],"$ab")},
sfA:function(a){this.fr=H.i(a,"$ib",[A.ax],"$ab")},
sfM:function(a){this.fx=H.i(a,"$ib",[A.L],"$ab")}}
A.el.prototype={}
A.iK.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siH:function(a){H.i(a,"$ib",[P.A],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ax.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.cX.prototype={
cW:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.k_(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cZ.prototype={
ah:function(a){var u=new Float32Array(H.ca(H.i(a,"$ib",[P.y],"$ab")))
C.b.eA(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ac.prototype={
ah:function(a){var u=new Float32Array(H.ca(H.i(a,"$ib",[P.y],"$ab")))
C.b.cR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ad.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.aj.prototype={
cY:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jM.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cG(s.b,b).cG(s.d.cG(s.c,b),c)
s=new V.an(r.a,r.b,r.c)
if(!J.a_(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a4()}a.sb9(r.w(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.bj(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a_(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a4()}},
$S:36}
F.a5.prototype={
fj:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.es()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.B(s)))},
fo:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.B(r)))
r=t.G(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.b5(r.w(0,Math.sqrt(r.B(r))))
return r.w(0,Math.sqrt(r.B(r)))},
cj:function(){var u,t=this
if(t.d!=null)return!0
u=t.fj()
if(u==null){u=t.fo()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
fi:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.es()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.B(s)))},
fn:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.G().a){l=d.G(0,g)
l=new V.S(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.an(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.S(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.B(l)))
l=o.b5(q)
l=l.w(0,Math.sqrt(l.B(l))).b5(o)
q=l.w(0,Math.sqrt(l.B(l)))}return q},
cg:function(){var u,t=this
if(t.e!=null)return!0
u=t.fi()
if(u==null){u=t.fn()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.am(J.au(s.e),0)+", "+C.j.am(J.au(t.b.e),0)+", "+C.j.am(J.au(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.E("")}}
F.bf.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.am(J.au(u.e),0)+", "+C.j.am(J.au(this.b.e),0)},
L:function(){return this.E("")}}
F.bJ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.am(J.au(u.e),0)},
L:function(){return this.E("")}}
F.e6.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
ju:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a3()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){r=g[s]
h.a.h(0,r.jf())}h.a.a3()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.k(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.k(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a3()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.k(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mu(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.k(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a3()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.k(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a3()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.k(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cw(l,k,i)}g=h.e
if(g!=null)g.az(0)},
aI:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aI()||!1
if(!t.a.aI())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
bo:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ap()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bo().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.cl().a)!==0)++s
if((t&$.bm().a)!==0)++s
r=a3.gd_(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dt])
for(n=0,m=0;m<s;++m){l=a3.ja(m)
k=l.gd_(l)
C.a.p(o,m,new Z.dt(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.k(u,j)
i=u[j].js(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.p(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ca(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bs(new Z.et(a0,f),o,a3)
e.sfN(H.d([],[Z.bE]))
if(a.b.b.length!==0){t=P.A
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a3()
C.a.h(d,c.e)}b=Z.kp(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.A
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a3()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.k(c,m)
c=c[m].b
c.a.a.a3()
C.a.h(d,c.e)}b=Z.kp(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.A
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a3()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].b
c.a.a.a3()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.k(c,m)
c=c[m].c
c.a.a.a3()
C.a.h(d,c.e)}b=Z.kp(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.C(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.v(null)},
$inT:1}
F.i2.prototype={
j7:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ay],"$ab")
u=H.d([],[F.a5])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cw(t,q,p))}return u},
j8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.ay],"$ab")
u=H.d([],[F.a5])
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
C.a.h(u,F.cw(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cw(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cw(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cj())s=!1
return s},
ci:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cg())s=!1
return s},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
L:function(){return this.E("")},
sfG:function(a){this.b=H.i(a,"$ib",[F.a5],"$ab")}}
F.i3.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var u,t,s=H.d([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.k(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.C(s,"\n")},
L:function(){return this.E("")},
sfQ:function(a){this.b=H.i(a,"$ib",[F.bf],"$ab")}}
F.i4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(a))
return C.a.C(r,"\n")},
L:function(){return this.E("")},
sc6:function(a){this.b=H.i(a,"$ib",[F.bJ],"$ab")}}
F.ay.prototype={
cm:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iT(u.cx,r,o,t,s,q,p,a,n)},
jf:function(){return this.cm(null)},
sb9:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
js:function(a){var u,t,s=this
if(a.n(0,$.ap())){u=s.f
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bo())){u=s.r
t=[P.y]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bn())){u=s.x
t=[P.y]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.bp())){u=s.y
t=[P.y]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.bq())){u=s.z
t=[P.y]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.dl())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.dm())){u=s.Q
t=[P.y]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cl()))return H.d([s.ch],[P.y])
else if(a.n(0,$.bm())){u=s.cx
t=[P.y]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.y])},
cj:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.es()
t.d.O(0,new F.j0(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.az(0)}return!0},
cg:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.es()
t.d.O(0,new F.j_(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.az(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.l])
C.a.h(q,C.j.am(J.au(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.C(q,", ")
return a+"{"+t+"}"},
L:function(){return this.E("")}}
F.j0.prototype={
$1:function(a){var u,t
H.e(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:8}
F.j_.prototype={
$1:function(a){var u,t
H.e(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:8}
F.iU.prototype={
a3:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a4()
return!0},
bm:function(a,b,c,d,e,f){var u=F.iT(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cj()
return!0},
ci:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cg()
return!0},
jd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r
this.a3()
u=H.d([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.C(u,"\n")},
L:function(){return this.E("")},
siI:function(a){this.c=H.i(a,"$ib",[F.ay],"$ab")}}
F.iV.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
O:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a5]})
C.a.O(u.b,b)
C.a.O(u.c,new F.iW(u,b))
C.a.O(u.d,new F.iX(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfH:function(a){this.b=H.i(a,"$ib",[F.a5],"$ab")},
sfI:function(a){this.c=H.i(a,"$ib",[F.a5],"$ab")},
sfJ:function(a){this.d=H.i(a,"$ib",[F.a5],"$ab")}}
F.iW.prototype={
$1:function(a){H.e(a,"$ia5")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:8}
F.iX.prototype={
$1:function(a){var u
H.e(a,"$ia5")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:8}
F.iY.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sfR:function(a){this.b=H.i(a,"$ib",[F.bf],"$ab")},
sfS:function(a){this.c=H.i(a,"$ib",[F.bf],"$ab")}}
F.iZ.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].E(""))
return C.a.C(r,"\n")},
sc6:function(a){this.b=H.i(a,"$ib",[F.bJ],"$ab")}}
O.dU.prototype={
gl:function(){var u=this.dy
return u==null?this.dy=D.H():u},
A:function(a){var u
H.e(a,"$ir")
u=this.dy
if(u!=null)u.v(a)},
ae:function(){return this.A(null)},
dF:function(a){H.e(a,"$ir")
this.a=null
this.A(a)},
i7:function(){return this.dF(null)},
h9:function(a,b){var u=V.a6
H.i(b,"$ic",[u],"$ac")
u=new D.bF([u])
u.b=!0
this.A(u)},
hb:function(a,b){var u=V.a6
H.i(b,"$ic",[u],"$ac")
u=new D.bG([u])
u.b=!0
this.A(u)},
dm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a2(a1.e.length+3,4)*4,a3=C.f.a2(a1.f.length+3,4)*4,a4=C.f.a2(a1.r.length+3,4)*4,a5=C.f.a2(a1.x.length+3,4)*4,a6=C.f.a2(a1.y.length+3,4)*4,a7=C.f.a2(a1.z.length+3,4)*4,a8=C.f.a2(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.f.i(a1.a)+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.c||o!==C.c
k=u!==C.c||t!==C.c||s!==C.c||r!==C.c
j=r===C.c
i=!j||a3+a6>0||l
h=t!==C.c||s!==C.c||!j||q!==C.c||l
j=q===C.c
g=!j
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.ap()
if(h){j=$.bo()
a=new Z.b9(a.a|j.a)}if(g){j=$.bn()
a=new Z.b9(a.a|j.a)}if(f){j=$.bp()
a=new Z.b9(a.a|j.a)}if(e){j=$.bq()
a=new Z.b9(a.a|j.a)}if(c){j=$.bm()
a=new Z.b9(a.a|j.a)}return new A.hr(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
W:function(a,b){H.i(a,"$ib",[T.c6],"$ab")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,[H.w(u,0)]);u.u();){t=u.d
t.toString
s=$.iS
if(s==null)s=$.iS=new V.S(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
bI:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dm()
u=H.e(a3.fr.j(0,a2.ap),"$idV")
if(u==null){u=A.mx(a2,a3.a)
a3.bn(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bq
a2=a4.e
if(!(a2 instanceof Z.bs))a2=a4.e=null
if(a2==null||!a2.d.n(0,s)){a2=t.r1
if(a2)a4.d.aI()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.ci()
q.a.ci()
q=q.e
if(q!=null)q.az(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.jd()
p=p.e
if(p!=null)p.az(0)}n=a4.d.bo(new Z.c8(a3.a),s)
n.aq($.ap()).e=a1.a.Q.c
if(a2)n.aq($.bo()).e=a1.a.cx.c
if(r)n.aq($.bn()).e=a1.a.ch.c
if(t.rx)n.aq($.bp()).e=a1.a.cy.c
if(q)n.aq($.bq()).e=a1.a.db.c
if(t.x1)n.aq($.bm()).e=a1.a.dx.c
a4.e=n}a2=T.c6
m=H.d([],[a2])
a1.a.R(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gU(q)
r=r.dy
r.toString
r.ah(q.a6(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gU(q)
p=a3.dx
p=a3.cx=q.t(0,p.gU(p))
q=p}r=r.fr
r.toString
r.ah(q.a6(0,!0))}r=a1.a
q=a3.ger()
r=r.fy
r.toString
r.ah(q.a6(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ah(C.p.a6(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ah(C.p.a6(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ah(C.p.a6(q,!0))}if(t.ay>0){l=a1.e.a.length
r=a1.a.k4
C.b.X(r.a,r.d,l)
for(r=[P.y],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.k(p,k)
p=p[k]
q.toString
H.e(p,"$ia6")
q=q.r1
if(k>=q.length)return H.k(q,k)
q=q[k]
j=new Float32Array(H.ca(H.i(p.a6(0,!0),"$ib",r,"$ab")))
C.b.cR(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.h:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.W(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ao(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.W(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ai(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.h:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.W(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ao(r.y1,r.ay,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.W(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ai(r.y2,r.ay,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.h:r=a1.a
q=a1.x.f
r=r.ap
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.W(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ao(r.bq,r.br,q)
q=a1.a
r=a1.x.f
q=q.ap
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.W(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ai(r.dU,r.br,q)
q=a1.a
r=a1.x.f
q=q.ap
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.h:r=a1.a
q=a1.y.f
r=r.bs
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
break
case C.e:a1.W(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ao(r.dV,r.bt,q)
q=a1.a
r=a1.y.f
q=q.bs
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break
case C.d:a1.W(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ai(r.dW,r.bt,q)
q=a1.a
r=a1.y.f
q=q.bs
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.h:r=a1.a
q=a1.z.f
r=r.bu
r.toString
p=q.a
o=q.b
q=q.c
C.b.q(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bw
C.b.K(q.a,q.d,o)
break
case C.e:a1.W(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ao(r.dX,r.bv,q)
q=a1.a
r=a1.z.f
q=q.bu
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bw
C.b.K(r.a,r.d,o)
break
case C.d:a1.W(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ai(r.dY,r.bv,q)
q=a1.a
r=a1.z.f
q=q.bu
q.toString
p=r.a
o=r.b
r=r.c
C.b.q(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bw
C.b.K(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.e8
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cu
if(h>=p.length)return H.k(p,h)
e=p[h]
p=i.cQ(f.a)
o=p.a
d=p.b
c=p.c
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.q(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.q(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.e9
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cv
if(h>=p.length)return H.k(p,h)
e=p[h]
p=f.gb8(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.bb(f.gb8(f))
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gax(f)
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcc()
o=e.e
C.b.K(o.a,o.d,p)
p=f.gcd()
o=e.f
C.b.K(o.a,o.d,p)
p=f.gce()
o=e.r
C.b.K(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.ea
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cw
if(h>=p.length)return H.k(p,h)
e=p[h]
p=f.gb8(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcr(f).k7()
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.bb(f.gb8(f))
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gax(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gk6()
o=e.f
C.b.K(o.a,o.d,p)
p=f.gk5()
o=e.r
C.b.K(o.a,o.d,p)
p=f.gcc()
o=e.x
C.b.K(o.a,o.d,p)
p=f.gcd()
o=e.y
C.b.K(o.a,o.d,p)
p=f.gce()
o=e.z
C.b.K(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eb
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
o=a1.a.cz
if(h>=o.length)return H.k(o,h)
e=o[h]
o=f.gaA()
H.i(m,"$ib",p,"$ab")
if(!C.a.T(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcr(f)
d=e.d
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbc()
d=e.b
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=f.gbJ(f)
d=e.c
C.b.q(d.a,d.d,o.a,o.b,o.c)
o=i.cQ(f.gcr(f))
d=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,d,o,b)
b=f.gax(f)
o=e.f
C.b.q(o.a,o.d,b.a,b.b,b.c)
b=f.gaA()
o=b.geh(b)
if(!o){o=e.x
C.b.X(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.X(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.ec
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.y,q=r.length,p=[P.y],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
d=a1.a.cA
if(h>=d.length)return H.k(d,h)
e=d[h]
d=f.gaA()
H.i(m,"$ib",o,"$ab")
if(!C.a.T(m,d)){d.a=m.length
C.a.h(m,d)}a=i.t(0,f.gU(f))
d=f.gU(f)
c=$.cI
d=d.bb(c==null?$.cI=new V.an(0,0,0):c)
c=e.b
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=$.cI
d=a.bb(d==null?$.cI=new V.an(0,0,0):d)
c=e.c
C.b.q(c.a,c.d,d.a,d.b,d.c)
d=a.cD(0)
c=e.d
j=new Float32Array(H.ca(H.i(new V.dW(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a6(0,!0),"$ib",p,"$ab")))
C.b.eA(c.a,c.d,!1,j)
c=f.gax(f)
d=e.e
C.b.q(d.a,d.d,c.a,c.b,c.c)
c=f.gaA()
d=c.geh(c)
if(!d){d=e.r
C.b.X(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.X(d.a,d.d,0)}d=f.gcc()
c=e.x
C.b.K(c.a,c.d,d)
d=f.gcd()
c=e.y
C.b.K(c.a,c.d,d)
d=f.gce()
c=e.z
C.b.K(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.ed
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gU(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cB
if(h>=p.length)return H.k(p,h)
e=p[h]
p=f.gaA()
H.i(m,"$ib",a2,"$ab")
if(!C.a.T(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gb8(f)
o=e.b
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gcr(f)
o=e.c
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbc()
o=e.d
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gbJ(f)
o=e.e
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=i.bb(f.gb8(f))
o=e.f
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gaA()
o=p.geh(p)
if(!o){p=e.x
C.b.X(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.X(p.a,p.d,0)}p=f.gax(f)
o=e.y
C.b.q(o.a,o.d,p.a,p.b,p.c)
p=f.gk8()
o=e.z
C.b.K(o.a,o.d,p)
p=f.gk9()
o=e.Q
C.b.K(o.a,o.d,p)
p=f.gcc()
o=e.ch
C.b.K(o.a,o.d,p)
p=f.gcd()
o=e.cx
C.b.K(o.a,o.d,p)
p=f.gce()
o=e.cy
C.b.K(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.h:break
case C.e:a1.W(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ao(a2.dZ,a2.bx,r)
break
case C.d:a1.W(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ai(a2.e_,a2.bx,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gU(r).cD(0)}a2=a2.id
a2.toString
a2.ah(r.a6(0,!0))}if(t.dy){a1.W(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ai(a2.e0,a2.e1,r)
switch(t.r){case C.c:break
case C.h:a2=a1.a
r=a1.cx.f
a2=a2.by
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
break
case C.e:a1.W(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ao(a2.e2,a2.bz,r)
r=a1.a
a2=a1.cx.f
r=r.by
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break
case C.d:a1.W(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ai(a2.e3,a2.bz,r)
r=a1.a
a2=a1.cx.f
r=r.by
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.h:a2=a1.a
r=a1.cy.f
a2=a2.bB
a2.toString
q=r.a
p=r.b
r=r.c
C.b.q(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bA
C.b.K(r.a,r.d,p)
break
case C.e:a1.W(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ao(a2.e4,a2.bC,r)
r=a1.a
a2=a1.cy.f
r=r.bB
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bA
C.b.K(a2.a,a2.d,p)
break
case C.d:a1.W(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ai(a2.e5,a2.bC,r)
r=a1.a
a2=a1.cy.f
r=r.bB
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.q(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bA
C.b.K(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.h:a2=a1.a
q=a1.db.f
a2=a2.bD
C.b.K(a2.a,a2.d,q)
break
case C.e:a1.W(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ao(a2.e6,a2.bE,q)
q=a1.a
a2=a1.db.f
q=q.bD
C.b.K(q.a,q.d,a2)
break
case C.d:a1.W(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ai(a2.e7,a2.bE,q)
q=a1.a
a2=a1.db.f
q=q.bD
C.b.K(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].R(a3)
a2=a4.e
a2.R(a3)
a2.a5(a3)
a2.ad(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.bp()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dm().ap},
sfl:function(a){this.e=H.i(a,"$iY",[V.a6],"$aY")}}
O.hp.prototype={
ic:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.G().a)){u.f=a
t=new D.x(u.b,t,a,[P.y])
t.b=!0
u.a.A(t)}},
au:function(){this.d5()
this.ic(1)}}
O.cB.prototype={
A:function(a){this.a.A(H.e(a,"$ir"))},
ae:function(){return this.A(null)},
au:function(){},
ig:function(a){},
ih:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().N(0,t.ga8())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga8())
s=new D.x(t.b+".textureCube",u,t.e,[T.cT])
s.b=!0
t.a.A(s)}},
sb9:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.au()
u.c=C.d
u.ig(null)
t=u.a
t.a=null
t.A(null)}u.ih(a)}}
O.hq.prototype={}
O.b2.prototype={
dH:function(a){var u,t,s=this
if(!J.a_(s.f,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a,[V.X])
t.b=!0
s.a.A(t)}},
au:function(){this.d5()
this.dH(new V.X(1,1,1))},
sax:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.h
t.au()
u=t.a
u.a=null
u.A(null)}t.dH(b)}}
O.hs.prototype={
ie:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.G().a)){u.ch=a
t=new D.x(u.b+".refraction",t,a,[P.y])
t.b=!0
u.a.A(t)}},
au:function(){this.bP()
this.ie(1)}}
O.ht.prototype={
c9:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.G().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.A(t)}},
au:function(){this.bP()
this.c9(100)}}
O.e7.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
A:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
ae:function(){return this.A(null)},
a7:function(a,b){},
bI:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ie8")
if(u==null){t=a.a
u=new A.e8(t,n)
u.be(t,n)
u.bF(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"fov"),"$ia0")
u.ch=H.h(u.y.j(0,"ratio"),"$ia0")
u.cx=H.h(u.y.j(0,"boxClr"),"$iM")
u.cy=H.h(u.y.j(0,"boxTxt"),"$iaj")
u.db=H.h(u.y.j(0,"viewMat"),"$iac")
a.bn(u)}o.a=u}if(b.e==null){t=b.d.bo(new Z.c8(a.a),$.ap())
t.aq($.ap()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.R(a)}t=a.d
s=a.c
r=o.a
r.R(a)
q=o.b
p=r.Q
C.b.K(p.a,p.d,q)
q=r.ch
C.b.K(q.a,q.d,t/s)
s=o.c
r.cy.cY(s)
s=o.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gU(s).cD(0)
r=r.db
r.toString
r.ah(s.a6(0,!0))
t=b.e
if(t instanceof Z.bs){t.R(a)
t.a5(a)
t.ad(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bp()
t=o.c
if(t!=null)t.ad(a)}}
O.i8.prototype={
gl:function(){var u=this.c
return u==null?this.c=D.H():u},
a7:function(a,b){},
bI:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=H.e(a.fr.j(0,q),"$ie9")
if(u==null){p=a.a
u=new A.e9(p,q)
u.be(p,q)
u.bF(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"color"),"$icX")
u.ch=H.h(u.y.j(0,"projViewObjMat"),"$iac")
a.bn(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bs)?b.e=null:t)==null){p=b.d.bo(new Z.c8(a.a),$.ap())
t=p.aq($.ap())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.R(a)
t=r.b
p.Q.cW(t)
t=a.ger()
p=p.ch
p.toString
p.ah(t.a6(0,!0))
t=b.e
t.R(a)
t.a5(a)
t.ad(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bp()}}
O.bM.prototype={}
O.ee.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
A:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.v(a)},
ae:function(){return this.A(null)},
hp:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ic",[O.aQ],"$ac")
for(u=b.length,t=this.ga8(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bB()
o.sa9(null)
o.saT(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sa9(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ae()},
hr:function(a,b){var u,t
H.i(b,"$ic",[O.aQ],"$ac")
for(u=b.gS(b),t=this.ga8();u.u();)u.gH(u).gl().N(0,t)
this.ae()},
a7:function(a,b){},
fP:function(a){a=C.f.a2(a+3,4)*4
if(a<=0)return 4
return a},
bI:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fP(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.f.i(u.a)
s=H.e(a.fr.j(0,t),"$ief")
if(s==null){s=A.mQ(g,u,a.a)
a.bn(s)}h.b=s
u=s}if(b.e==null){u=b.d.bo(new Z.c8(a.a),$.ap())
t=u.aq($.ap())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.R(a)
u=T.c6
q=H.d([],[u])
for(t=[P.y],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.T(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.k(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.k(r,p)
r=r[p]
if(m==null){m=$.hu
if(m==null){m=new V.a6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hu=m}}j=new Float32Array(H.ca(H.i(m.a6(0,!0),"$ib",t,"$ab")))
C.b.cR(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cK
if(m==null){m=V.e2(0,0,1,1)
$.cK=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.k(m,p)
m=m[p]
C.b.bL(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.k(r,p)
r=r[p]
C.b.bL(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cK
if(m==null){m=V.e2(0,0,1,1)
$.cK=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.k(m,p)
m=m[p]
C.b.bL(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.k(r,p)
r=r[p]
C.b.bL(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.k(r,p)
r=r[p]
m=H.z(m)?1:0
C.b.X(r.a,r.d,m);++p}}u=h.b.Q
C.b.X(u.a,u.d,p)
u=h.b
t=h.a
u.ch.cW(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.bs){t.R(a)
t.a5(a)
t.ad(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.bp()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
sfE:function(a){this.c=H.i(a,"$iY",[O.aQ],"$aY")}}
O.aQ.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
A:function(a){var u
H.e(a,"$ir")
u=this.f
if(u!=null)u.v(a)},
ae:function(){return this.A(null)},
saA:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gl().N(0,t.ga8())
u=t.a
t.a=a
if(a!=null)a.gl().h(0,t.ga8())
s=new D.x("texture",u,t.a,[T.cS])
s.b=!0
t.A(s)}},
sdS:function(a,b){var u,t,s=this
if(b==null)b=V.e3()
if(!J.a_(s.d,b)){u=s.d
s.d=b
t=new D.x("destination",u,b,[V.bK])
t.b=!0
s.A(t)}}}
T.dv.prototype={
bf:function(a){H.e(a,"$ir")},
fb:function(){return this.bf(null)},
aH:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gcs().h(0,t.gfZ())
t.b.c.gb_().h(0,t.gh0())
t.b.c.gbc().h(0,t.gh2())
u=t.b.e
u.gd0(u).h(0,t.giA())
t.b.e.gb_().h(0,t.giy())
u=t.b.e
u.gdT(u).h(0,t.giw())
return!0},
h_:function(a){if(!H.h(H.e(a,"$ir"),"$iaA").x.b.n(0,this.c))return
this.ch=this.Q=!0},
h1:function(a){var u,t=this
H.e(a,"$ir")
if(!t.Q)return
if(t.ch){H.h(a,"$iaA")
u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
if(u.B(u)<t.z)return
t.ch=!1}},
h3:function(a){var u=this
H.e(a,"$ir")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dD(a)},
iB:function(a){H.e(a,"$ir")
this.ch=this.Q=!0},
iz:function(a){var u,t=this
H.e(a,"$ir")
if(!t.Q)return
if(t.ch){H.h(a,"$icV")
u=a.d.G(0,a.y)
u=new V.R(u.a,u.b)
if(u.B(u)<t.z)return
t.ch=!1}},
ix:function(a){var u=this
H.e(a,"$ir")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dD(a)},
dD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.h(a,"$iaA")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=T.le(s.a,u,!0,1,1,C.o.aY(r*(u.r-1)),C.o.aY(q*(u.x-1)))
u=p.b
o=C.f.bN(0,u)
n=C.f.bN(0,p.c)
m=(o+n*u)*4
u=p.a
t=u.length
if(m<0||m>=t)return H.k(u,m)
s=u[m]/255
l=m+1
if(l>=t)return H.k(u,l)
l=u[l]/255
k=m+2
if(k>=t)return H.k(u,k)
k=u[k]/255
j=m+3
if(j>=t)return H.k(u,j)
j=u[j]/255
if(s<0)u=0
else u=s>1?1:s
if(l<0)t=0
else t=l>1?1:l
if(k<0)s=0
else s=k>1?1:k
if(j<0)l=0
else l=j>1?1:j
l=new T.dw(new V.R(r,q),new V.a4(u,t,s,l))
l.b=!0
s=this.x
if(s!=null)s.v(l)}}
T.dw.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.c6.prototype={}
T.cS.prototype={}
T.is.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.H():u}}
T.cT.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
R:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ad:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.it.prototype={
eg:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cT()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aR(u,k,r,34069,!1,!1)
t.aR(u,k,o,34070,!1,!1)
t.aR(u,k,q,34071,!1,!1)
t.aR(u,k,n,34072,!1,!1)
t.aR(u,k,p,34073,!1,!1)
t.aR(u,k,m,34074,!1,!1)
return u},
ef:function(a){return this.eg(a,".png")},
aR:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.a9(t,"load",H.n(new T.iu(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
i8:function(a,b,c){var u,t,s,r
b=V.dk(b)
u=V.dk(a.width)
t=V.dk(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.fE()
s.width=u
s.height=t
r=H.e(C.l.cT(s,"2d"),"$ibu")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lD(r.getImageData(0,0,s.width,s.height))}}}
T.iu.prototype={
$1:function(a){var u=this,t=u.a,s=t.i8(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.jT(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ct()}++t.e},
$S:28}
T.iv.prototype={
fL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.f.a2(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.k(r,h)
f=r[h]
if(g<0||g>=q)return H.k(r,g)
r[h]=r[g]
r[g]=f}}}}}
V.fr.prototype={
aZ:function(a,b){return!0},
i:function(a){return"all"},
$ibg:1}
V.bg.prototype={}
V.dT.prototype={
aZ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aZ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saF:function(a){this.a=H.i(a,"$ib",[V.bg],"$ab")},
$ibg:1}
V.bh.prototype={
aZ:function(a,b){return!this.eL(0,b)},
i:function(a){return"!["+this.d4(0)+"]"}}
V.i1.prototype={
eQ:function(a){var u,t
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
u=new H.b_([P.A,P.T])
for(t=new H.cA(a,a.gk(a),[H.ae(a,"u",0)]);t.u();)u.p(0,t.d,!0)
this.sib(u)},
aZ:function(a,b){return this.a.dR(0,b)},
i:function(a){var u=this.a
return P.kl(new H.dP(u,[H.w(u,0)]))},
sib:function(a){this.a=H.i(a,"$iQ",[P.A,P.T],"$aQ")},
$ibg:1}
V.cO.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.M(0,b))
r.saF(H.d([],[V.bg]))
r.c=!1
C.a.h(this.c,r)
return r},
jm:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aZ(0,a))return r}return},
i:function(a){return this.b},
siC:function(a){this.c=H.i(a,"$ib",[V.cW],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.lN(this.b,"\n","\\n"),t=H.lN(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cU.prototype={
i:function(a){return this.b},
si3:function(a){var u=P.l
this.c=H.i(a,"$iQ",[u,u],"$aQ")}}
V.iy.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cO(this,b)
u.siC(H.d([],[V.cW]))
u.d=null
this.a.p(0,b,u)}return u},
ba:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cU(a)
u=P.l
t.si3(new H.b_([u,u]))
this.b.p(0,a,t)}return t},
jY:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.ek]),l=this.c,k=[P.A],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.bg(a,s)
q=l.jm(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kl(j)
throw H.f(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kl(j)
o=l.d
n=o.c.j(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
sis:function(a){this.a=H.i(a,"$iQ",[P.l,V.cO],"$aQ")},
siv:function(a){this.b=H.i(a,"$iQ",[P.l,V.cU],"$aQ")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.d4(0)}}
X.fz.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.H():u},
a1:function(a){var u=this.fr
if(u!=null)u.v(a)},
san:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.x("width",u,b,[P.A])
u.b=!0
t.a1(u)}},
sak:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.x("height",u,b,[P.A])
u.b=!0
t.a1(u)}},
R:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.t()
i.san(0,C.i.Z(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.t()
i.sak(0,C.i.Z(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.af(u.getParameter(3379))
p=V.dk(s)
o=V.dk(r)
q=V.dk(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.ex(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.ld(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.ct()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ct()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.i.Z(s*i.a)
r=t.d
a.d=C.i.Z(r*i.b)
l=t.a
k=i.c
j=C.i.Z(l*k)
t=t.b
l=i.d
u.viewport(j,C.i.Z(t*l),C.i.Z(s*k),C.i.Z(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ad:function(a){a.a.bindFramebuffer(36160,null)}}
X.bU.prototype={$ib4:1}
X.h7.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
R:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.i.Z(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.i.Z(r*t)
r=C.i.Z(s.c*u)
a.c=r
s=C.i.Z(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ad:function(a){}}
X.h9.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
R:function(a){var u
a.cy.bH(V.bI())
u=V.bI()
a.db.bH(u)},
ad:function(a){a.cy.aJ()
a.db.aJ()},
$ib4:1,
$ibU:1}
X.e_.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
a1:function(a){var u
H.e(a,"$ir")
u=this.f
if(u!=null)u.v(a)},
ff:function(){return this.a1(null)},
R:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b3(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bH(k)
r=$.l6
if(r==null){r=V.l8()
q=V.ln()
p=$.lk
r=V.kZ(r,q,p==null?$.lk=new V.S(0,0,-1):p)
$.l6=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aB(0,a,s)
if(t!=null)u=t.t(0,u)}a.db.bH(u)},
ad:function(a){a.cy.aJ()
a.db.aJ()},
$ib4:1,
$ibU:1}
X.cQ.prototype={}
V.fC.prototype={
j4:function(a,b,c){var u,t,s,r=this
H.n(c,{func:1,ret:-1})
if(r.b==null)return
u=document
t=u.createElement("button")
s=t.style
s.whiteSpace="nowrap"
C.E.eF(t,b)
s=W.a7
W.a9(t,"click",H.n(new V.fD(c),{func:1,ret:-1,args:[s]}),!1,s)
J.kG(r.b).h(0,t)
J.kG(r.b).h(0,u.createElement("br"))
C.a.h(r.c,t)},
sfm:function(a){this.c=H.i(a,"$ib",[W.bt],"$ab")}}
V.fD.prototype={
$1:function(a){H.e(a,"$ia7")
return this.a.$0()},
$S:4}
V.k4.prototype={
$1:function(a){var u
H.e(a,"$ib6")
u=C.i.ez(this.a.gjn(),2)
if(u!=="0.00")P.kD(u+" fps")},
$S:41}
V.i5.prototype={
eR:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.a9(q,"scroll",H.n(new V.i7(o),{func:1,ret:-1,args:[r]}),!1,r)},
dM:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.l],"$ab")
this.ij()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jY(C.a.jr(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.nG(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.n4(C.V,n,C.x,!1)
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
j5:function(a){var u,t,s,r,q,p,o,n="auto"
H.i(a,"$ib",[P.l],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.e(r.insertCell(-1),"$ibk").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(r.insertCell(-1),"$ibk")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ij:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iy()
t=P.l
u.sis(new H.b_([t,V.cO]))
u.siv(new H.b_([t,V.cU]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).C(0,p)
s=V.ai(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).C(0,p)
s=new V.bh()
r=[V.bg]
s.saF(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("*"))
C.a.h(s.a,t)
t=u.M(0,p).C(0,"BoldEnd")
s=V.ai(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).C(0,o)
s=V.ai(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).C(0,o)
s=new V.bh()
s.saF(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("_"))
C.a.h(s.a,t)
t=u.M(0,o).C(0,n)
s=V.ai(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).C(0,m)
s=V.ai(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).C(0,m)
s=new V.bh()
s.saF(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a3("`"))
C.a.h(s.a,t)
t=u.M(0,m).C(0,"CodeEnd")
s=V.ai(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).C(0,l)
s=V.ai(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).C(0,k)
s=V.ai(new H.a3("|"))
C.a.h(t.a,s)
s=u.M(0,l).C(0,j)
t=V.ai(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).C(0,l)
t=new V.bh()
t.saF(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("|]"))
C.a.h(t.a,s)
s=u.M(0,k).C(0,j)
t=V.ai(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).C(0,k)
t=new V.bh()
t.saF(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).C(0,i).a,new V.fr())
s=u.M(0,i).C(0,i)
t=new V.bh()
t.saF(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.ba(p)
s=u.M(0,n)
s.d=s.a.ba(o)
s=u.M(0,"CodeEnd")
s.d=s.a.ba(m)
s=u.M(0,j)
s.d=s.a.ba("Link")
s=u.M(0,i)
s.d=s.a.ba(i)
this.b=u}}
V.i7.prototype={
$1:function(a){P.lg(C.n,new V.i6(this.a))},
$S:28}
V.i6.prototype={
$0:function(){var u=C.i.Z(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
M.k_.prototype={
$1:function(a){var u,t,s
H.e(a,"$ir")
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.scp(0.99*s.e)
s.scq(0.99*s.f)}},
$S:5}
M.k0.prototype={
$1:function(a){var u,t,s,r=H.h(H.e(a,"$ir"),"$idw").d.jZ()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.k(u,t)
s=u[t]
s.scp(1.21)
s.scq(1.31)
break}},
$S:5}
M.k1.prototype={
$0:function(){var u,t,s,r,q,p=null,o="image/png",n=T.le(this.a.f.a,this.b.ch,!0,p,p,p,p),m=W.fE(),l=n.b
m.width=l
u=n.c
m.height=u
t=H.e(C.l.cT(m,"2d"),"$ibu")
s=(t&&C.y).jh(t,l,u)
C.W.eE(J.ma(s),0,n.a)
C.y.jL(t,s,0,0)
n=m.toDataURL(o,100)
n.length
r=H.nI(n,o,"image/octet-stream",0)
q=W.kI()
q.setAttribute("download","backBuffer.png")
q.setAttribute("href",r)
q.click()},
$S:2};(function aliases(){var u=J.a.prototype
u.eI=u.i
u=J.dM.prototype
u.eK=u.i
u=P.u.prototype
u.d3=u.a_
u=P.c.prototype
u.eJ=u.bM
u=W.O.prototype
u.bO=u.aj
u=W.eX.prototype
u.eM=u.aw
u=O.cB.prototype
u.d5=u.au
u=O.b2.prototype
u.bP=u.au
u=V.dT.prototype
u.eL=u.aZ
u.d4=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ne","mW",9)
u(P,"nf","mX",9)
u(P,"ng","mY",9)
t(P,"lB","nc",3)
s(W,"nq",4,null,["$4"],["n_"],21,0)
s(W,"nr",4,null,["$4"],["n0"],21,0)
var m
r(m=E.am.prototype,"gem",0,0,null,["$1","$0"],["en","jB"],0,0)
r(m,"geo",0,0,null,["$1","$0"],["ep","jC"],0,0)
r(m,"gek",0,0,null,["$1","$0"],["el","jA"],0,0)
r(m,"gei",0,0,null,["$1","$0"],["ej","jx"],0,0)
q(m,"gjv","jw",6)
q(m,"gjy","jz",6)
r(m=E.ej.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],0,0)
p(m,"gjP","es",3)
o(m=X.eo.prototype,"ghs","ht",10)
o(m,"ghc","hd",10)
o(m,"ghi","hj",4)
o(m,"ghw","hx",20)
o(m,"ghu","hv",20)
o(m,"ghA","hB",4)
o(m,"ghE","hF",4)
o(m,"ghm","hn",4)
o(m,"ghC","hD",4)
o(m,"ghk","hl",4)
o(m,"ghG","hH",43)
o(m,"ghI","hJ",10)
o(m,"ghY","hZ",11)
o(m,"ghU","hV",11)
o(m,"ghW","hX",11)
r(D.by.prototype,"geV",0,0,null,["$1","$0"],["aC","eW"],0,0)
r(m=D.dO.prototype,"gdz",0,0,null,["$1","$0"],["dA","hy"],0,0)
o(m,"ghK","hL",30)
q(m,"gh6","h7",22)
q(m,"ghO","hP",22)
n(V.R.prototype,"gk","cF",23)
n(V.S.prototype,"gk","cF",23)
r(m=U.cy.prototype,"gaS",0,0,null,["$1","$0"],["F","aa"],0,0)
q(m,"geX","eY",24)
q(m,"ghM","hN",24)
r(m=U.ep.prototype,"gaS",0,0,null,["$1","$0"],["F","aa"],0,0)
o(m,"gbQ","bR",1)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
r(m=U.eq.prototype,"gaS",0,0,null,["$1","$0"],["F","aa"],0,0)
o(m,"gbQ","bR",1)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
o(m,"gfU","fV",1)
o(m,"gfW","fX",1)
o(m,"gf2","f3",1)
o(m,"gf0","f1",1)
o(m,"geZ","f_",1)
o(U.er.prototype,"gh4","h5",1)
r(m=M.dx.prototype,"ga0",0,0,null,["$1","$0"],["Y","b0"],0,0)
q(m,"ghQ","hR",25)
q(m,"ghS","hT",25)
r(M.dz.prototype,"ga0",0,0,null,["$1","$0"],["Y","b0"],0,0)
r(m=M.dE.prototype,"ga0",0,0,null,["$1","$0"],["Y","b0"],0,0)
q(m,"ghe","hf",6)
q(m,"ghg","hh",6)
r(m=O.dU.prototype,"ga8",0,0,null,["$1","$0"],["A","ae"],0,0)
r(m,"gi6",0,0,null,["$1","$0"],["dF","i7"],0,0)
q(m,"gh8","h9",26)
q(m,"gha","hb",26)
r(O.cB.prototype,"ga8",0,0,null,["$1","$0"],["A","ae"],0,0)
r(O.e7.prototype,"ga8",0,0,null,["$1","$0"],["A","ae"],0,0)
r(m=O.ee.prototype,"ga8",0,0,null,["$1","$0"],["A","ae"],0,0)
q(m,"gho","hp",27)
q(m,"ghq","hr",27)
r(O.aQ.prototype,"ga8",0,0,null,["$1","$0"],["A","ae"],0,0)
r(m=T.dv.prototype,"gd9",0,0,null,["$1","$0"],["bf","fb"],0,0)
o(m,"gfZ","h_",1)
o(m,"gh0","h1",1)
o(m,"gh2","h3",1)
o(m,"giA","iB",1)
o(m,"giy","iz",1)
o(m,"giw","ix",1)
r(X.e_.prototype,"gfe",0,0,null,["$1","$0"],["a1","ff"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.kg,J.a,J.ak,P.eK,P.c,H.cA,P.aY,H.bX,H.c7,H.iD,P.bA,H.cp,H.f1,P.ag,H.hg,H.hh,H.hc,P.f7,P.bb,P.aF,P.eu,P.ig,P.cP,P.ih,P.b6,P.al,P.jL,P.jz,P.c9,P.js,P.u,P.cq,P.jJ,P.T,P.az,P.aa,P.bz,P.hN,P.eb,P.eC,P.h6,P.bC,P.b,P.Q,P.P,P.ar,P.l,P.bL,W.fL,W.bO,W.B,W.dY,W.eX,W.jE,W.dG,W.av,W.jy,W.fd,P.fc,P.jt,O.Y,O.cC,E.fA,E.am,E.hU,E.ej,Z.et,Z.c8,Z.bs,Z.bE,Z.b9,D.fG,D.bB,D.r,X.du,X.dN,X.he,X.hj,X.aq,X.hB,X.iz,X.eo,D.by,D.a2,D.e0,D.ea,D.eg,D.eh,D.ei,V.X,V.a4,V.fY,V.dW,V.a6,V.a8,V.an,V.bj,V.bK,V.R,V.S,U.ep,U.eq,U.er,M.dz,M.dE,M.aw,A.dq,A.fu,A.hr,A.cY,A.d1,A.d_,A.d2,A.d0,A.d3,A.bW,A.bw,A.el,A.iK,F.a5,F.bf,F.bJ,F.e6,F.i2,F.i3,F.i4,F.ay,F.iU,F.iV,F.iY,F.iZ,O.bM,O.cB,O.aQ,T.dv,T.it,T.iv,V.fr,V.bg,V.dT,V.i1,V.cO,V.ek,V.cU,V.iy,X.cQ,X.bU,X.h9,X.e_,V.fC,V.i5])
s(J.a,[J.hb,J.dK,J.dM,J.aZ,J.dL,J.bZ,H.cF,W.j,W.fq,W.dr,W.bu,W.aW,W.aX,W.W,W.ew,W.fP,W.fQ,W.ey,W.dD,W.eA,W.fS,W.o,W.eD,W.aJ,W.h8,W.eG,W.bD,W.dR,W.hv,W.eL,W.eM,W.aK,W.eN,W.eQ,W.aL,W.eU,W.eW,W.aN,W.eY,W.aO,W.f2,W.aC,W.f5,W.ix,W.aR,W.f8,W.iB,W.iP,W.fe,W.fg,W.fi,W.fk,W.fm,P.b1,P.eI,P.b5,P.eS,P.hR,P.f3,P.b7,P.fa,P.fv,P.ev,P.ds,P.dH,P.e1,P.e4,P.c4,P.e5,P.ed,P.em,P.f_])
s(J.dM,[J.hO,J.d4,J.bH])
t(J.kf,J.aZ)
s(J.dL,[J.dJ,J.dI])
t(P.hi,P.eK)
s(P.hi,[H.en,W.j9,W.ao,P.h2])
t(H.a3,H.en)
s(P.c,[H.fV,H.hm,H.d5])
s(H.fV,[H.c_,H.dP])
s(H.c_,[H.il,H.ho])
s(P.aY,[H.hn,H.j2])
s(P.bA,[H.hK,H.hd,H.iN,H.iF,H.fF,H.i_,P.ft,P.dZ,P.aH,P.iO,P.iM,P.c5,P.fJ,P.fO])
s(H.cp,[H.k5,H.ip,H.jW,H.jX,H.jY,P.j5,P.j4,P.j6,P.j7,P.jI,P.jH,P.jf,P.jj,P.jg,P.jh,P.ji,P.jm,P.jn,P.jl,P.jk,P.ii,P.ij,P.jP,P.jw,P.jv,P.jx,P.hl,P.fT,P.fU,W.fW,W.hx,W.hz,W.hZ,W.ie,W.je,W.hJ,W.hI,W.jA,W.jB,W.jG,W.jK,P.jS,P.h3,P.h4,P.fx,E.hV,E.hW,E.hX,E.iw,D.fZ,D.h_,F.jM,F.j0,F.j_,F.iW,F.iX,T.iu,V.fD,V.k4,V.i7,V.i6,M.k_,M.k0,M.k1])
s(H.ip,[H.ic,H.cn])
t(H.j3,P.ft)
t(P.hk,P.ag)
s(P.hk,[H.b_,W.j8])
t(H.dX,H.cF)
s(H.dX,[H.d9,H.db])
t(H.da,H.d9)
t(H.c0,H.da)
t(H.dc,H.db)
t(H.cE,H.dc)
s(H.cE,[H.hC,H.hD,H.hE,H.hF,H.hG,H.cG,H.hH])
t(P.ju,P.jL)
t(P.jr,P.jz)
t(P.dy,P.ih)
t(P.fX,P.cq)
t(P.iQ,P.fX)
t(P.iR,P.dy)
s(P.aa,[P.y,P.A])
s(P.aH,[P.c3,P.ha])
s(W.j,[W.C,W.h1,W.aM,W.dd,W.aP,W.aD,W.df,W.j1,W.d6,P.fy,P.bT])
s(W.C,[W.O,W.bv,W.d7])
s(W.O,[W.v,P.p])
s(W.v,[W.dp,W.fs,W.cm,W.br,W.bt,W.bV,W.dB,W.h5,W.cz,W.i0,W.bk,W.ec,W.im,W.io,W.cR])
s(W.aW,[W.cs,W.fM,W.fN])
t(W.fK,W.aX)
t(W.ct,W.ew)
t(W.ez,W.ey)
t(W.dC,W.ez)
t(W.eB,W.eA)
t(W.fR,W.eB)
t(W.aI,W.dr)
t(W.eE,W.eD)
t(W.h0,W.eE)
t(W.eH,W.eG)
t(W.bY,W.eH)
t(W.bN,W.o)
s(W.bN,[W.b0,W.a7,W.aS])
t(W.hw,W.eL)
t(W.hy,W.eM)
t(W.eO,W.eN)
t(W.hA,W.eO)
t(W.eR,W.eQ)
t(W.cH,W.eR)
t(W.eV,W.eU)
t(W.hP,W.eV)
t(W.hY,W.eW)
t(W.de,W.dd)
t(W.i9,W.de)
t(W.eZ,W.eY)
t(W.ia,W.eZ)
t(W.id,W.f2)
t(W.f6,W.f5)
t(W.iq,W.f6)
t(W.dg,W.df)
t(W.ir,W.dg)
t(W.f9,W.f8)
t(W.iA,W.f9)
t(W.ba,W.a7)
t(W.ff,W.fe)
t(W.ja,W.ff)
t(W.ex,W.dD)
t(W.fh,W.fg)
t(W.jo,W.fh)
t(W.fj,W.fi)
t(W.eP,W.fj)
t(W.fl,W.fk)
t(W.jC,W.fl)
t(W.fn,W.fm)
t(W.jD,W.fn)
t(W.jb,W.j8)
t(W.jc,P.ig)
t(W.kq,W.jc)
t(W.jd,P.cP)
t(W.jF,W.eX)
t(P.ah,P.jt)
t(P.eJ,P.eI)
t(P.hf,P.eJ)
t(P.eT,P.eS)
t(P.hL,P.eT)
t(P.cM,P.p)
t(P.f4,P.f3)
t(P.ik,P.f4)
t(P.fb,P.fa)
t(P.iC,P.fb)
t(P.fw,P.ev)
t(P.hM,P.bT)
t(P.f0,P.f_)
t(P.ib,P.f0)
s(E.fA,[Z.dt,A.cN,T.c6])
s(D.r,[D.bF,D.bG,D.x,X.hQ,T.dw])
s(X.hQ,[X.dS,X.aA,X.cD,X.cV])
s(O.Y,[D.dO,U.cy,M.dx])
s(D.fG,[U.fI,U.ab])
s(U.ab,[U.cr,U.cL])
s(A.cN,[A.dV,A.e8,A.e9,A.ef])
s(A.el,[A.L,A.iH,A.iI,A.iJ,A.iG,A.a0,A.ax,A.M,A.cX,A.iL,A.cZ,A.ac,A.ad,A.aj])
s(O.bM,[O.dU,O.e7,O.i8,O.ee])
s(O.cB,[O.hp,O.hq,O.b2])
s(O.b2,[O.hs,O.ht])
s(T.c6,[T.cS,T.cT])
t(T.is,T.cS)
s(V.dT,[V.bh,V.cW])
s(X.cQ,[X.fz,X.h7])
u(H.en,H.c7)
u(H.d9,P.u)
u(H.da,H.bX)
u(H.db,P.u)
u(H.dc,H.bX)
u(P.eK,P.u)
u(W.ew,W.fL)
u(W.ey,P.u)
u(W.ez,W.B)
u(W.eA,P.u)
u(W.eB,W.B)
u(W.eD,P.u)
u(W.eE,W.B)
u(W.eG,P.u)
u(W.eH,W.B)
u(W.eL,P.ag)
u(W.eM,P.ag)
u(W.eN,P.u)
u(W.eO,W.B)
u(W.eQ,P.u)
u(W.eR,W.B)
u(W.eU,P.u)
u(W.eV,W.B)
u(W.eW,P.ag)
u(W.dd,P.u)
u(W.de,W.B)
u(W.eY,P.u)
u(W.eZ,W.B)
u(W.f2,P.ag)
u(W.f5,P.u)
u(W.f6,W.B)
u(W.df,P.u)
u(W.dg,W.B)
u(W.f8,P.u)
u(W.f9,W.B)
u(W.fe,P.u)
u(W.ff,W.B)
u(W.fg,P.u)
u(W.fh,W.B)
u(W.fi,P.u)
u(W.fj,W.B)
u(W.fk,P.u)
u(W.fl,W.B)
u(W.fm,P.u)
u(W.fn,W.B)
u(P.eI,P.u)
u(P.eJ,W.B)
u(P.eS,P.u)
u(P.eT,W.B)
u(P.f3,P.u)
u(P.f4,W.B)
u(P.fa,P.u)
u(P.fb,W.B)
u(P.ev,P.ag)
u(P.f_,P.u)
u(P.f0,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.u=W.br.prototype
C.E=W.bt.prototype
C.l=W.bV.prototype
C.y=W.bu.prototype
C.Q=J.a.prototype
C.a=J.aZ.prototype
C.o=J.dI.prototype
C.f=J.dJ.prototype
C.p=J.dK.prototype
C.i=J.dL.prototype
C.j=J.bZ.prototype
C.R=J.bH.prototype
C.W=H.cG.prototype
C.X=W.cH.prototype
C.A=J.hO.prototype
C.b=P.c4.prototype
C.B=W.ec.prototype
C.t=J.d4.prototype
C.C=W.ba.prototype
C.D=W.d6.prototype
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.L=new P.hN()
C.x=new P.iQ()
C.M=new P.iR()
C.k=new P.ju()
C.z=new A.bw(0,"ColorBlendType.Overwrite")
C.N=new A.bw(1,"ColorBlendType.Additive")
C.O=new A.bw(2,"ColorBlendType.Average")
C.m=new A.bw(3,"ColorBlendType.AlphaBlend")
C.c=new A.bW(0,"ColorSourceType.None")
C.h=new A.bW(1,"ColorSourceType.Solid")
C.e=new A.bW(2,"ColorSourceType.Texture2D")
C.d=new A.bW(3,"ColorSourceType.TextureCube")
C.n=new P.bz(0)
C.P=new P.bz(5e6)
C.S=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.T=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.U=H.d(u([]),[P.l])
C.V=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=H.d(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.r=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])})()
var v={mangledGlobalNames:{A:"int",y:"double",aa:"num",l:"String",T:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.r]},{func:1,ret:-1,args:[D.r]},{func:1,ret:P.P},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.P,args:[D.r]},{func:1,ret:-1,args:[P.A,[P.c,E.am]]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:P.P,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.l,args:[P.A]},{func:1,ret:P.T,args:[W.C]},{func:1,args:[,]},{func:1,ret:P.T,args:[W.av]},{func:1,ret:P.T,args:[P.l]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.T,args:[W.O,P.l,P.l,W.bO]},{func:1,ret:-1,args:[P.A,[P.c,D.a2]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.A,[P.c,U.ab]]},{func:1,ret:-1,args:[P.A,[P.c,M.aw]]},{func:1,ret:-1,args:[P.A,[P.c,V.a6]]},{func:1,ret:-1,args:[P.A,[P.c,O.aQ]]},{func:1,ret:P.P,args:[W.o]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[[P.c,D.a2]]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.ar]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.P,args:[P.aa]},{func:1,args:[P.l]},{func:1,ret:P.P,args:[F.ay,P.y,P.y]},{func:1,args:[,P.l]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.P,args:[P.b6]},{func:1,ret:W.O,args:[W.C]},{func:1,ret:-1,args:[W.ba]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aV=0
$.co=null
$.kJ=null
$.ks=!1
$.lG=null
$.lz=null
$.lL=null
$.jT=null
$.jZ=null
$.kA=null
$.cb=null
$.di=null
$.dj=null
$.kt=!1
$.a1=C.k
$.as=[]
$.be=null
$.kb=null
$.kQ=null
$.kP=null
$.eF=P.kV(P.l,P.bC)
$.hu=null
$.l7=null
$.cI=null
$.cK=null
$.lj=null
$.lm=null
$.ll=null
$.iS=null
$.lk=null
$.l6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nQ","lQ",function(){return H.lF("_$dart_dartClosure")})
u($,"nR","kE",function(){return H.lF("_$dart_js")})
u($,"nV","lR",function(){return H.b8(H.iE({
toString:function(){return"$receiver$"}}))})
u($,"nW","lS",function(){return H.b8(H.iE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nX","lT",function(){return H.b8(H.iE(null))})
u($,"nY","lU",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o0","lX",function(){return H.b8(H.iE(void 0))})
u($,"o1","lY",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o_","lW",function(){return H.b8(H.li(null))})
u($,"nZ","lV",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o3","m_",function(){return H.b8(H.li(void 0))})
u($,"o2","lZ",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ol","kF",function(){return P.mV()})
u($,"on","m4",function(){return P.mK("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"om","m3",function(){return P.kW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"oe","m2",function(){return Z.aE(0)})
u($,"o8","m0",function(){return Z.aE(511)})
u($,"og","ap",function(){return Z.aE(1)})
u($,"of","bo",function(){return Z.aE(2)})
u($,"oa","bn",function(){return Z.aE(4)})
u($,"oh","bp",function(){return Z.aE(8)})
u($,"oi","bq",function(){return Z.aE(16)})
u($,"ob","dl",function(){return Z.aE(32)})
u($,"oc","dm",function(){return Z.aE(64)})
u($,"od","m1",function(){return Z.aE(96)})
u($,"oj","cl",function(){return Z.aE(128)})
u($,"o9","bm",function(){return Z.aE(256)})
u($,"nP","lP",function(){return new V.fY(1e-9)})
u($,"nO","G",function(){return $.lP()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cF,ArrayBufferView:H.cF,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.hC,Int32Array:H.hD,Int8Array:H.hE,Uint16Array:H.hF,Uint32Array:H.hG,Uint8ClampedArray:H.cG,CanvasPixelArray:H.cG,Uint8Array:H.hH,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLInputElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fq,HTMLAnchorElement:W.dp,HTMLAreaElement:W.fs,HTMLBaseElement:W.cm,Blob:W.dr,HTMLBodyElement:W.br,HTMLButtonElement:W.bt,HTMLCanvasElement:W.bV,CanvasRenderingContext2D:W.bu,CDATASection:W.bv,CharacterData:W.bv,Comment:W.bv,ProcessingInstruction:W.bv,Text:W.bv,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fK,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.aW,CSSKeywordValue:W.aW,CSSPositionValue:W.aW,CSSResourceValue:W.aW,CSSURLImageValue:W.aW,CSSStyleValue:W.aW,CSSMatrixComponent:W.aX,CSSRotation:W.aX,CSSScale:W.aX,CSSSkew:W.aX,CSSTranslation:W.aX,CSSTransformComponent:W.aX,CSSTransformValue:W.fM,CSSUnparsedValue:W.fN,DataTransferItemList:W.fP,HTMLDivElement:W.dB,DOMException:W.fQ,ClientRectList:W.dC,DOMRectList:W.dC,DOMRectReadOnly:W.dD,DOMStringList:W.fR,DOMTokenList:W.fS,Element:W.O,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aI,FileList:W.h0,FileWriter:W.h1,HTMLFormElement:W.h5,Gamepad:W.aJ,History:W.h8,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.bD,HTMLImageElement:W.cz,KeyboardEvent:W.b0,Location:W.dR,MediaList:W.hv,MIDIInputMap:W.hw,MIDIOutputMap:W.hy,MimeType:W.aK,MimeTypeArray:W.hA,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cH,RadioNodeList:W.cH,Plugin:W.aL,PluginArray:W.hP,RTCStatsReport:W.hY,HTMLSelectElement:W.i0,SourceBuffer:W.aM,SourceBufferList:W.i9,SpeechGrammar:W.aN,SpeechGrammarList:W.ia,SpeechRecognitionResult:W.aO,Storage:W.id,CSSStyleSheet:W.aC,StyleSheet:W.aC,HTMLTableCellElement:W.bk,HTMLTableDataCellElement:W.bk,HTMLTableHeaderCellElement:W.bk,HTMLTableElement:W.ec,HTMLTableRowElement:W.im,HTMLTableSectionElement:W.io,HTMLTemplateElement:W.cR,TextTrack:W.aP,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.iq,TextTrackList:W.ir,TimeRanges:W.ix,Touch:W.aR,TouchEvent:W.aS,TouchList:W.iA,TrackDefaultList:W.iB,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.iP,VideoTrackList:W.j1,WheelEvent:W.ba,Window:W.d6,DOMWindow:W.d6,Attr:W.d7,CSSRuleList:W.ja,ClientRect:W.ex,DOMRect:W.ex,GamepadList:W.jo,NamedNodeMap:W.eP,MozNamedAttrMap:W.eP,SpeechRecognitionResultList:W.jC,StyleSheetList:W.jD,SVGLength:P.b1,SVGLengthList:P.hf,SVGNumber:P.b5,SVGNumberList:P.hL,SVGPointList:P.hR,SVGScriptElement:P.cM,SVGStringList:P.ik,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.b7,SVGTransformList:P.iC,AudioBuffer:P.fv,AudioParamMap:P.fw,AudioTrackList:P.fy,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hM,WebGLBuffer:P.ds,WebGLFramebuffer:P.dH,WebGLProgram:P.e1,WebGLRenderbuffer:P.e4,WebGL2RenderingContext:P.c4,WebGLShader:P.e5,WebGLTexture:P.ed,WebGLUniformLocation:P.em,SQLResultSetRowList:P.ib})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lI,[])
else M.lI([])})})()
//# sourceMappingURL=test.dart.js.map
