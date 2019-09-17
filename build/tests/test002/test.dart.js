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
a[c]=function(){a[c]=function(){H.oe(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kJ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ks:function ks(){},
jd:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l6:function(){return new P.hg("No element")},
P:function P(a){this.a=a},
ez:function ez(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b){this.a=null
this.b=a
this.c=b},
ic:function ic(a,b,c){this.a=a
this.b=b
this.$ti=c},
id:function id(a,b){this.a=a
this.b=b},
cj:function cj(){},
hO:function hO(){},
cT:function cT(){},
mE:function(){throw H.c(P.t("Cannot modify unmodifiable Map"))},
dY:function(a){var u,t=H.og(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
o0:function(a){return v.types[a]},
m0:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iv},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
bK:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n1:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
bL:function(a){return H.mT(a)+H.lO(H.c5(a),0,null)},
mT:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibg){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dY(t.length>1&&C.a.H(t,0)===36?C.a.ao(t,1):t)},
mU:function(){if(!!self.location)return self.location.href
return},
lj:function(a){var u,t,s,r,q=J.af(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n2:function(a){var u,t,s,r=H.d([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.av(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aG(s))}return H.lj(r)},
lk:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.n2(a)}return H.lj(a)},
n3:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.av(u,10))>>>0,56320|u&1023)}}throw H.c(P.V(a,0,1114111,null,null))},
bb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n0:function(a){var u=H.bb(a).getFullYear()+0
return u},
mZ:function(a){var u=H.bb(a).getMonth()+1
return u},
mV:function(a){var u=H.bb(a).getDate()+0
return u},
mW:function(a){var u=H.bb(a).getHours()+0
return u},
mY:function(a){var u=H.bb(a).getMinutes()+0
return u},
n_:function(a){var u=H.bb(a).getSeconds()+0
return u},
mX:function(a){var u=H.bb(a).getMilliseconds()+0
return u},
h:function(a){throw H.c(H.aG(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.c(H.bm(a,b))},
bm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.h(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cD(b,s)},
nU:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bc(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bc(a,c,!0,b,"end",u)
return new P.ah(!0,b,"end",null)},
aG:function(a){return new P.ah(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m8})
u.name=""}else u.toString=H.m8
return u},
m8:function(){return J.a2(this.dartException)},
B:function(a){throw H.c(a)},
y:function(a){throw H.c(P.b6(a))},
ap:function(a){var u,t,s,r,q,p
a=H.m6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.p])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lv:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lc:function(a,b){return new H.fN(a,b==null?null:b.method)},
kt:function(a,b){var u=b==null,t=u?null:b.method
return new H.fj(a,t,u?null:b.receiver)},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.av(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kt(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lc(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mb()
q=$.mc()
p=$.md()
o=$.me()
n=$.mh()
m=$.mi()
l=$.mg()
$.mf()
k=$.mk()
j=$.mj()
i=r.a8(u)
if(i!=null)return f.$1(H.kt(u,i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.kt(u,i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lc(u,i))}}return f.$1(new H.hN(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cG()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ah(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cG()
return a},
kM:function(a){var u
if(a==null)return new H.dy(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dy(a)},
nY:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.u(0,a[u],a[t])}return b},
o4:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.z("Unsupported number of arguments for wrapped closure"))},
bl:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o4)
a.$identity=u
return u},
mD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hh().constructor.prototype):Object.create(new H.br(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ai
if(typeof t!=="number")return t.p()
$.ai=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mz(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mz:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.o0,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kZ:H.kk
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mA:function(a,b,c,d){var u=H.kk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mA(t,!r,u,b)
if(t===0){r=$.ai
if(typeof r!=="number")return r.p()
$.ai=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bs
return new Function(r+H.f(q==null?$.bs=H.ec("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ai
if(typeof r!=="number")return r.p()
$.ai=r+1
o+=r
r="return function("+o+"){return this."
q=$.bs
return new Function(r+H.f(q==null?$.bs=H.ec("self"):q)+"."+H.f(u)+"("+o+");}")()},
mB:function(a,b,c,d){var u=H.kk,t=H.kZ
switch(b?-1:a){case 0:throw H.c(H.n7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mC:function(a,b){var u,t,s,r,q,p,o,n=$.bs
if(n==null)n=$.bs=H.ec("self")
u=$.kY
if(u==null)u=$.kY=H.ec("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ai
if(typeof u!=="number")return u.p()
$.ai=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ai
if(typeof u!=="number")return u.p()
$.ai=u+1
return new Function(n+u+"}")()},
kJ:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
kk:function(a){return a.a},
kZ:function(a){return a.c},
ec:function(a){var u,t,s,r=new H.br("self","target","receiver","name"),q=J.kq(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
o9:function(a,b){throw H.c(H.my(a,H.dY(b.substring(2))))},
a_:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.o9(a,b)},
nW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
my:function(a,b){return new H.ed("CastError: "+P.ko(a)+": type '"+H.f(H.nP(a))+"' is not a subtype of type '"+b+"'")},
nP:function(a){var u,t=J.T(a)
if(!!t.$ibt){u=H.nW(t)
if(u!=null)return H.oa(u)
return"Closure"}return H.bL(a)},
oe:function(a){throw H.c(new P.es(a))},
n7:function(a){return new H.h3(a)},
lX:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
c5:function(a){if(a==null)return
return a.$ti},
oP:function(a,b,c){return H.kf(a["$a"+H.f(c)],H.c5(b))},
o_:function(a,b,c,d){var u=H.kf(a["$a"+H.f(c)],H.c5(b))
return u==null?null:u[d]},
lY:function(a,b,c){var u=H.kf(a["$a"+H.f(b)],H.c5(a))
return u==null?null:u[c]},
ja:function(a,b){var u=H.c5(a)
return u==null?null:u[b]},
oa:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dY(a[0].name)+H.lO(a,1,b)
if(typeof a=="function")return H.dY(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.nH(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nH:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.p])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.p(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Y)p+=" extends "+H.aZ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aZ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aZ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aZ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nX(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aZ(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lO:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.h(0)+">"},
kf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
oN:function(a,b,c){return a.apply(b,H.kf(J.T(b)["$a"+H.f(c)],H.c5(b)))},
oO:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o6:function(a){var u,t,s,r,q=$.lZ.$1(a),p=$.j6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jh[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lT.$2(a,q)
if(q!=null){p=$.j6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jh[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kb(u)
$.j6[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jh[q]=u
return u}if(s==="-"){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m4(a,u)
if(s==="*")throw H.c(P.hM(q))
if(v.leafTags[q]===true){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m4(a,u)},
m4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kb:function(a){return J.kO(a,!1,null,!!a.$iv)},
o7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kb(u)
else return J.kO(u,c,null,null)},
o2:function(){if(!0===$.kN)return
$.kN=!0
H.o3()},
o3:function(){var u,t,s,r,q,p,o,n
$.j6=Object.create(null)
$.jh=Object.create(null)
H.o1()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m5.$1(q)
if(p!=null){o=H.o7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o1:function(){var u,t,s,r,q,p,o=C.y()
o=H.bk(C.z,H.bk(C.A,H.bk(C.p,H.bk(C.p,H.bk(C.B,H.bk(C.C,H.bk(C.D(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lZ=new H.je(r)
$.lT=new H.jf(q)
$.m5=new H.jg(p)},
bk:function(a,b){return a(b)||b},
mL:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.N("Illegal RegExp pattern ("+String(p)+")",a,null))},
oc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m7:function(a,b,c){var u=H.od(a,b,c)
return u},
od:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m6(b),'g'),H.nV(c))},
el:function el(){},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hx:function hx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fN:function fN(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
kh:function kh(a){this.a=a},
dy:function dy(a){this.a=a
this.b=null},
bt:function bt(){},
hn:function hn(){},
hh:function hh(){},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a){this.a=a},
h3:function h3(a){this.a=a},
aa:function aa(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fn:function fn(a,b){this.a=a
this.b=b
this.c=null},
fo:function fo(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iW:function(a){return a},
mS:function(a){return new Int8Array(a)},
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bm(b,a))},
nF:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nU(a,b,c))
return b},
bG:function bG(){},
aS:function aS(){},
cw:function cw(){},
bH:function bH(){},
cx:function cx(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
cy:function cy(){},
bI:function bI(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
bV:function bV(){},
nX:function(a){return J.l7(a?Object.keys(a):[],null)},
og:function(a){return v.mangledGlobalNames[a]},
o8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j9:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kN==null){H.o2()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.hM("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kR()]
if(r!=null)return r
r=H.o6(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.u
if(u===Object.prototype)return C.u
if(typeof s=="function"){Object.defineProperty(s,$.kR(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
mK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.V(a,0,4294967295,"length",null))
return J.l7(new Array(a),b)},
l7:function(a,b){return J.kq(H.d(a,[b]))},
kq:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.fh.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.cq.prototype
if(typeof a=="boolean")return J.fg.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.Y)return a
return J.j9(a)},
c4:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.Y)return a
return J.j9(a)},
j8:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.Y)return a
return J.j9(a)},
nZ:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.Y))return J.bg.prototype
return a},
kL:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.Y))return J.bg.prototype
return a},
dV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.Y)return a
return J.j9(a)},
u:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).A(a,b)},
kT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nZ(a).q(a,b)},
kU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c4(a).k(a,b)},
ki:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.j8(a).u(a,b,c)},
ms:function(a,b){return J.kL(a).H(a,b)},
mt:function(a,b,c){return J.dV(a).eQ(a,b,c)},
mu:function(a,b,c,d){return J.dV(a).fi(a,b,c,d)},
mv:function(a,b){return J.kL(a).W(a,b)},
kj:function(a,b){return J.j8(a).J(a,b)},
mw:function(a,b,c,d){return J.dV(a).fC(a,b,c,d)},
kV:function(a,b){return J.j8(a).t(a,b)},
dZ:function(a){return J.dV(a).gbG(a)},
c7:function(a){return J.T(a).gI(a)},
b1:function(a){return J.j8(a).ga_(a)},
af:function(a){return J.c4(a).gj(a)},
mx:function(a,b){return J.dV(a).h6(a,b)},
a2:function(a){return J.T(a).h(a)},
a:function a(){},
fg:function fg(){},
cq:function cq(){},
cr:function cr(){},
fR:function fR(){},
bg:function bg(){},
aQ:function aQ(){},
aO:function aO(a){this.$ti=a},
kr:function kr(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bB:function bB(){},
cp:function cp(){},
fh:function fh(){},
aP:function aP(){}},P={
nj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bl(new P.ig(s),1)).observe(u,{childList:true})
return new P.ie(s,u,t)}else if(self.setImmediate!=null)return P.nR()
return P.nS()},
nk:function(a){self.scheduleImmediate(H.bl(new P.ih(a),0))},
nl:function(a){self.setImmediate(H.bl(new P.ii(a),0))},
nm:function(a){P.kw(C.m,a)},
kw:function(a,b){var u=C.c.aw(a.a,1000)
return P.np(u<0?0:u,b)},
lu:function(a,b){var u=C.c.aw(a.a,1000)
return P.nq(u<0?0:u,b)},
np:function(a,b){var u=new P.dF()
u.dr(a,b)
return u},
nq:function(a,b){var u=new P.dF()
u.ds(a,b)
return u},
nJ:function(){var u,t
for(;u=$.bj,u!=null;){$.c2=null
t=u.b
$.bj=t
if(t==null)$.c1=null
u.a.$0()}},
nO:function(){$.kH=!0
try{P.nJ()}finally{$.c2=null
$.kH=!1
if($.bj!=null)$.kS().$1(P.lU())}},
nM:function(a){var u=new P.d0(a)
if($.bj==null){$.bj=$.c1=u
if(!$.kH)$.kS().$1(P.lU())}else $.c1=$.c1.b=u},
nN:function(a){var u,t,s=$.bj
if(s==null){P.nM(a)
$.c2=$.c1
return}u=new P.d0(a)
t=$.c2
if(t==null){u.b=s
$.bj=$.c2=u}else{u.b=t.b
$.c2=t.b=u
if(u.b==null)$.c1=u}},
lt:function(a,b){var u=$.ag
if(u===C.f)return P.kw(a,b)
return P.kw(a,u.fm(b))},
nb:function(a,b){var u=$.ag
if(u===C.f)return P.lu(a,b)
return P.lu(a,u.cB(b,P.cL))},
lP:function(a,b,c,d,e){var u={}
u.a=d
P.nN(new P.iX(u,e))},
nK:function(a,b,c,d){var u,t=$.ag
if(t===c)return d.$0()
$.ag=c
u=t
try{t=d.$0()
return t}finally{$.ag=u}},
nL:function(a,b,c,d,e){var u,t=$.ag
if(t===c)return d.$1(e)
$.ag=c
u=t
try{t=d.$1(e)
return t}finally{$.ag=u}},
ig:function ig(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
dF:function dF(){this.c=0},
iG:function iG(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a){this.a=a
this.b=null},
cI:function cI(){},
hk:function hk(){},
cL:function cL(){},
iP:function iP(){},
iX:function iX(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function(a,b){return new H.aa([a,b])},
l8:function(a,b){return new H.aa([a,b])},
mO:function(a){return H.nY(a,new H.aa([null,null]))},
mP:function(a){return new P.it([a])},
kC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
no:function(a,b){var u=new P.df(a,b)
u.c=a.e
return u},
mJ:function(a,b,c){var u,t
if(P.kI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.p])
$.a1.push(a)
try{P.nI(a,u)}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=P.lr(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kp:function(a,b,c){var u,t
if(P.kI(a))return b+"..."+c
u=new P.R(b)
$.a1.push(a)
try{t=u
t.a=P.lr(t.a,a,", ")}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kI:function(a){var u,t
for(u=$.a1.length,t=0;t<u;++t)if(a===$.a1[t])return!0
return!1},
nI:function(a,b){var u,t,s,r,q,p,o,n=a.ga_(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.E())return
u=H.f(n.gM(n))
b.push(u)
m+=u.length+2;++l}if(!n.E()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gM(n);++l
if(!n.E()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gM(n);++l
for(;n.E();r=q,q=p){p=n.gM(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
l9:function(a,b,c){var u=P.mN(b,c)
a.t(0,new P.fq(u))
return u},
ku:function(a){var u,t={}
if(P.kI(a))return"{...}"
u=new P.R("")
try{$.a1.push(a)
u.a+="{"
t.a=!0
J.kV(a,new P.fv(t,u))
u.a+="}"}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
it:function it(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iu:function iu(a){this.a=a
this.c=this.b=null},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fq:function fq(a){this.a=a},
fr:function fr(){},
n:function n(){},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
at:function at(){},
iH:function iH(){},
fw:function fw(){},
cU:function cU(a,b){this.a=a
this.$ti=b},
iz:function iz(){},
dg:function dg(){},
dK:function dK(){},
ne:function(a,b,c,d){if(b instanceof Uint8Array)return P.nf(!1,b,c,d)
return},
nf:function(a,b,c,d){var u,t,s=$.ml()
if(s==null)return
u=0===c
if(u&&!0)return P.kz(s,b)
t=b.length
d=P.aV(c,d,t)
if(u&&d===t)return P.kz(s,b)
return P.kz(s,b.subarray(c,d))},
kz:function(a,b){if(P.nh(b))return
return P.ni(a,b)},
ni:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b_(t)}return},
nh:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ng:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b_(t)}return},
lR:function(a,b,c){var u,t,s
for(u=J.c4(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bb()
if((s&127)!==s)return t-b}return c-b},
kX:function(a,b,c,d,e,f){if(C.c.aV(f,4)!==0)throw H.c(P.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.N("Invalid base64 padding, more than two '=' characters",a,b))},
e9:function e9(){},
ea:function ea(){},
ei:function ei(){},
en:function en(){},
eA:function eA(){},
hW:function hW(){},
hY:function hY(){},
iO:function iO(a){this.b=0
this.c=a},
hX:function hX(a){this.a=a},
iN:function iN(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dW:function(a,b,c){var u=H.n1(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.N(a,null,null))},
mH:function(a){if(a instanceof H.bt)return a.h(0)
return"Instance of '"+H.f(H.bL(a))+"'"},
mQ:function(a,b,c){var u,t,s=J.mK(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
la:function(a,b,c){var u,t=H.d([],[c])
for(u=J.b1(a);u.E();)t.push(u.gM(u))
if(b)return t
return J.kq(t)},
bN:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aV(b,c,u)
return H.lk(b>0||c<u?C.b.de(a,b,c):a)}if(!!J.T(a).$ibI)return H.n3(a,b,P.aV(b,c,a.length))
return P.n9(a,b,c)},
n9:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.V(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.V(c,b,J.af(a),q,q))
t=J.b1(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.V(b,0,s,q,q))
r=[]
if(u)for(;t.E();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.V(c,b,s,q,q))
r.push(t.gM(t))}return H.lk(r)},
n5:function(a){return new H.fi(a,H.mL(a,!1,!0,!1,!1,!1))},
lr:function(a,b,c){var u=J.b1(b)
if(!u.E())return a
if(c.length===0){do a+=H.f(u.gM(u))
while(u.E())}else{a+=H.f(u.gM(u))
for(;u.E();)a=a+c+H.f(u.gM(u))}return a},
cV:function(){var u=H.mU()
if(u!=null)return P.nd(u)
throw H.c(P.t("'Uri.base' is not supported"))},
iM:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mq().b
if(typeof b!=="string")H.B(H.aG(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfB().bH(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cC(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
l4:function(a){return new P.aM(1000*a)},
ko:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mH(a)},
e3:function(a){return new P.ah(!1,null,null,a)},
kW:function(a,b,c){return new P.ah(!0,a,b,c)},
cD:function(a,b){return new P.bc(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.bc(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c){if(0>a||a>c)throw H.c(P.V(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.V(b,a,c,"end",null))
return b}return c},
lm:function(a,b){if(typeof a!=="number")return a.T()
if(a<0)throw H.c(P.V(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.eN(u,!0,a,c,"Index out of range")},
t:function(a){return new P.hP(a)},
hM:function(a){return new P.hL(a)},
b6:function(a){return new P.ek(a)},
z:function(a){return new P.d8(a)},
N:function(a,b,c){return new P.eK(a,b,c)},
mR:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kP:function(a){H.o8(a)},
nd:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.lw(e<e?C.a.v(a,0,e):a,5,f).gd8()
else if(u===32)return P.lw(C.a.v(a,5,e),0,f).gd8()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.r])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lQ(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hf()
if(r>=0)if(P.lQ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.T()
if(typeof n!=="number")return H.h(n)
if(m<n)n=m
if(typeof o!=="number")return o.T()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.T()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.T()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a2(a,"..",o)))j=n>o+2&&C.a.a2(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a2(a,"file",0)){if(q<=0){if(!C.a.a2(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aE(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a2(a,"http",0)){if(t&&p+3===o&&C.a.a2(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aE(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a2(a,"https",0)){if(t&&p+4===o&&C.a.a2(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aE(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iA(a,r,q,p,o,n,m,k)}return P.nr(a,0,e,r,q,p,o,n,m,k)},
ly:function(a){var u=P.p
return C.b.fI(H.d(a.split("&"),[u]),P.l8(u,u),new P.hU(C.e))},
nc:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hR(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dW(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.bc()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dW(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.bc()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hS(a),d=new P.hT(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.r])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.W(a,t)
if(p===58){if(t===b){++t
if(C.a.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gal(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nc(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.av(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nr:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nz(a,b,d)
else{if(d===b)P.bi(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nA(a,u,e-1):""
s=P.nw(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.h(g)
q=r<g?P.ny(P.dW(C.a.v(a,r,g),new P.iI(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nx(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.kE(a,h+1,i,n):n
return new P.bh(j,t,s,q,p,o,i<c?P.nv(a,i+1,c):n)},
lI:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bi:function(a,b,c){throw H.c(P.N(c,a,b))},
ny:function(a,b){if(a!=null&&a===P.lI(b))return
return a},
nw:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.B()
u=c-1
if(C.a.W(a,u)!==93)P.bi(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nt(a,t,u)
if(typeof s!=="number")return s.T()
if(s<u){r=s+1
q=P.lN(a,C.a.a2(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lx(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.h(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.b5(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lN(a,C.a.a2(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lx(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.nC(a,b,c)},
nt:function(a,b,c){var u,t=C.a.b5(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.h(c)
u=t<c}else u=!1
return u?t:c},
lN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kF(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bi(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.v(a,t,u)
l.a+=P.kD(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kF(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.i,o)
o=(C.i[o]&1<<(q&15))!==0}else o=!1
if(o)P.bi(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kD(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nz:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lK(C.a.H(a,b)))P.bi(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.k,r)
r=(C.k[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bi(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.ns(t?a.toLowerCase():a)},
ns:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nA:function(a,b,c){return P.c_(a,b,c,C.L,!1)},
nx:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c_(a,b,c,C.t,!0):C.I.hg(d,new P.iJ(),P.p).D(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a6(u,"/"))u="/"+u
return P.nB(u,e,f)},
nB:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a6(a,"/"))return P.nD(a,!u||c)
return P.nE(a)},
kE:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.e3("Both query and queryParameters specified"))
return P.c_(a,b,c,C.j,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.t(0,new P.iK(new P.iL(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nv:function(a,b,c){return P.c_(a,b,c,C.j,!0)},
kF:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.jd(u)
r=H.jd(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.av(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cC(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
kD:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.r])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.r])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.eZ(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.H(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.H(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.bN(t,0,null)},
c_:function(a,b,c,d,e){var u=P.lM(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
lM:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.T()
if(typeof c!=="number")return H.h(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kF(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.i,t)
t=(C.i[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bi(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kD(u)}}if(m==null)m=new P.R("")
m.a+=C.a.v(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.h(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.T()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lL:function(a){if(C.a.a6(a,"."))return!0
return C.a.cO(a,"/.")!==-1},
nE:function(a){var u,t,s,r,q,p,o
if(!P.lL(a))return a
u=H.d([],[P.p])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.u(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.D(u,"/")},
nD:function(a,b){var u,t,s,r,q,p
if(!P.lL(a))return!b?P.lJ(a):a
u=H.d([],[P.p])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gal(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gal(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lJ(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.D(u,"/")},
lJ:function(a){var u,t,s,r=a.length
if(r>=2&&P.lK(J.ms(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ao(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.k,s)
s=(C.k[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nu:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.e3("Invalid URL encoding"))}}return u},
kG:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.P(C.a.v(a,b,c))}else{r=H.d([],[P.r])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.c(P.e3("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.e3("Truncated URI"))
r.push(P.nu(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.hX(!1).bH(r)},
lK:function(a){var u=a|32
return 97<=u&&u<=122},
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.r])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.N(m,a,t))}}if(s<0&&t>b)throw H.c(P.N(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gal(l)
if(r!==44||t!==p+7||!C.a.a2(a,"base64",p+1))throw H.c(P.N("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.x.fP(0,a,o,u)
else{n=P.lM(a,o,u,C.j,!0)
if(n!=null)a=C.a.aE(a,o,u,n)}return new P.hQ(a,l,c)},
nG:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mR(22,new P.iT(),P.be),n=new P.iS(o),m=new P.iU(),l=new P.iV(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lQ:function(a,b,c,d,e){var u,t,s,r,q,p=$.mr()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.H(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
c3:function c3(){},
a4:function a4(a,b){this.a=a
this.b=b},
K:function K(){},
aM:function aM(a){this.a=a},
ex:function ex(){},
ey:function ey(){},
b7:function b7(){},
cA:function cA(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eN:function eN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hP:function hP(a){this.a=a},
hL:function hL(a){this.a=a},
hg:function hg(a){this.a=a},
ek:function ek(a){this.a=a},
fQ:function fQ(){},
cG:function cG(){},
es:function es(a){this.a=a},
d8:function d8(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
l:function l(){},
ff:function ff(){},
m:function m(){},
Q:function Q(){},
aT:function aT(){},
a7:function a7(){},
Y:function Y(){},
p:function p(){},
R:function R(a){this.a=a},
hU:function hU(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(){},
iS:function iS(a){this.a=a},
iU:function iU(){},
iV:function iV(){},
iA:function iA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
im:function im(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aH:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.p,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r]
u.u(0,q,a[q])}return u},
nT:function(a){var u={}
a.t(0,new P.iY(u))
return u},
iC:function iC(){},
iD:function iD(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
eH:function eH(){},
eI:function eI(){},
is:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nn:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iv:function iv(){},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aR:function aR(){},
fl:function fl(){},
aU:function aU(){},
fO:function fO(){},
fU:function fU(){},
hl:function hl(){},
j:function j(){},
aW:function aW(){},
hw:function hw(){},
dd:function dd(){},
de:function de(){},
dp:function dp(){},
dq:function dq(){},
dA:function dA(){},
dB:function dB(){},
dI:function dI(){},
dJ:function dJ(){},
be:function be(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(a){this.a=a},
e8:function e8(){},
b2:function b2(){},
fP:function fP(){},
d1:function d1(){},
hf:function hf(){},
dw:function dw(){},
dx:function dx(){}},W={
l_:function(){var u=document.createElement("canvas")
return u},
kn:function(a){return"wheel"},
l5:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.b_(u)}return s},
ir:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a,b,c,d){var u=W.ir(W.ir(W.ir(W.ir(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
S:function(a,b,c,d){var u=W.lS(new W.ip(c),W.i)
if(u!=null&&!0)J.mu(a,b,u,!1)
return new W.io(a,b,u,!1)},
lS:function(a,b){var u=$.ag
if(u===C.f)return a
return u.cB(a,b)},
k:function k(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
b3:function b3(){},
b4:function b4(){},
aL:function aL(){},
eo:function eo(){},
F:function F(){},
bu:function bu(){},
ep:function ep(){},
a9:function a9(){},
aj:function aj(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
cg:function cg(){},
ch:function ch(){},
ev:function ev(){},
ew:function ew(){},
ik:function ik(a,b){this.a=a
this.b=b},
U:function U(){},
i:function i(){},
e:function e(){},
ak:function ak(){},
bx:function bx(){},
eF:function eF(){},
eJ:function eJ(){},
as:function as(){},
eM:function eM(){},
bz:function bz(){},
bA:function bA(){},
eh:function eh(){},
b9:function b9(){},
fs:function fs(){},
fA:function fA(){},
bE:function bE(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a},
av:function av(){},
fF:function fF(){},
al:function al(){},
ij:function ij(a){this.a=a},
C:function C(){},
cz:function cz(){},
ay:function ay(){},
fS:function fS(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h4:function h4(){},
az:function az(){},
hd:function hd(){},
aA:function aA(){},
he:function he(){},
aB:function aB(){},
hi:function hi(){},
hj:function hj(a){this.a=a},
an:function an(){},
aC:function aC(){},
ao:function ao(){},
ho:function ho(){},
hp:function hp(){},
hr:function hr(){},
aD:function aD(){},
bd:function bd(){},
hu:function hu(){},
hv:function hv(){},
aX:function aX(){},
hV:function hV(){},
ia:function ia(){},
aY:function aY(){},
bR:function bR(){},
il:function il(){},
d3:function d3(){},
iq:function iq(){},
dl:function dl(){},
iB:function iB(){},
iE:function iE(){},
io:function io(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ip:function ip(a){this.a=a},
G:function G(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
d2:function d2(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dm:function dm(){},
dn:function dn(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
bW:function bW(){},
bX:function bX(){},
du:function du(){},
dv:function dv(){},
dz:function dz(){},
dD:function dD(){},
dE:function dE(){},
bY:function bY(){},
bZ:function bZ(){},
dG:function dG(){},
dH:function dH(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){}},T={
W:function(a){var u=new T.h5()
u.dk(a)
return u},
e0:function e0(){},
cl:function cl(){},
cv:function cv(){},
ax:function ax(){this.a=null},
h5:function h5(){this.a=null}},R={cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},cN:function cN(a){this.b=a
this.c=null},hs:function hs(){this.c=this.b=this.a=null},cP:function cP(a){this.b=a
this.a=this.c=null}},O={
l1:function(a){var u=new O.b5([a])
u.c2(a)
return u},
b5:function b5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bD:function bD(){this.b=this.a=null},
cm:function cm(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a},
fc:function fc(a,b){this.a=a
this.b=b},
fb:function fb(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
f8:function f8(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
f_:function f_(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
eQ:function eQ(a){this.a=a},
eP:function eP(a){this.a=a},
cJ:function cJ(){}},E={
n6:function(a,b){var u=new E.fY(a)
u.dj(a,b)
return u},
na:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ib4)return E.ls(a,!0,!0,!0,!1)
u=W.l_()
t=u.style
t.width="100%"
t.height="100%"
s.gbG(a).i(0,u)
return E.ls(u,!0,!0,!0,!1)},
ls:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cK(),p=C.l.dc(a,"webgl2",P.mO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.B(P.z("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.n6(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.cW(a)
t=new X.fk()
t.c=new X.ab(!1,!1,!1)
t.d=P.mP(P.r)
u.b=t
t=new X.fG(u)
t.f=0
t.r=V.am()
t.x=V.am()
t.ch=t.Q=1
u.c=t
t=new X.ft(u)
t.r=0
t.x=V.am()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ht(u)
t.f=V.am()
t.r=V.am()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.cI,P.Y]])
u.z=t
s=document
t.push(W.S(s,"contextmenu",u.geg(),!1))
u.z.push(W.S(a,"focus",u.gem(),!1))
u.z.push(W.S(a,"blur",u.gea(),!1))
u.z.push(W.S(s,"keyup",u.geq(),!1))
u.z.push(W.S(s,"keydown",u.geo(),!1))
u.z.push(W.S(a,"mousedown",u.geu(),!1))
u.z.push(W.S(a,"mouseup",u.gey(),!1))
u.z.push(W.S(a,r,u.gew(),!1))
t=u.z
W.kn(a)
W.kn(a)
t.push(W.S(a,W.kn(a),u.geA(),!1))
u.z.push(W.S(s,r,u.gei(),!1))
u.z.push(W.S(s,"mouseup",u.gek(),!1))
u.z.push(W.S(s,"pointerlockchange",u.geC(),!1))
u.z.push(W.S(a,"touchstart",u.geL(),!1))
u.z.push(W.S(a,"touchend",u.geH(),!1))
u.z.push(W.S(a,"touchmove",u.geJ(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a4(Date.now(),!1)
q.cy=0
q.cn()
return q},
eb:function eb(){},
aN:function aN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fZ:function fZ(a){this.a=a},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
cK:function cK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hq:function hq(a){this.a=a}},Z={
kB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iW(c)),35044)
a.bindBuffer(b,null)
return new Z.d_(b,u)},
ae:function(a){return new Z.bQ(a)},
d_:function d_(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ib:function ib(a){this.a=a},
ca:function ca(a,b){this.a=a
this.b=null
this.c=b},
cb:function cb(){this.a=null},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a},
m3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d="controls",c="modifiers",b=V.n8("Test 002"),a=W.l_()
a.className="pageLargeCanvas"
a.id=f
b.a.appendChild(a)
u=[P.p]
b.cA(H.d(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],u))
b.fh(H.d(["controls","shapes","scalars"],u))
b.cA(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(f)
if(t==null)H.B(P.z("Failed to find an element with the identifier, testCanvas."))
s=E.na(t,!0,!0,!0,!1)
r=new E.aN()
r.a=""
r.b=!0
b=E.aN
q=O.l1(b)
r.y=q
q.be(r.gfQ(),r.gfT())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc_(0,e)
r.saP(e)
q=new U.by()
q.c2(U.a5)
q.be(q.ge8(),q.geF())
q.e=null
q.f=V.fz()
q.r=0
p=s.r
o=new U.cY()
n=U.km()
n.sbZ(0,!0)
n.sbO(6.283185307179586)
n.sbQ(0)
n.sU(0,0)
n.sbP(100)
n.sV(0)
n.sbJ(0.5)
o.b=n
m=o.gat()
n.gC().i(0,m)
n=U.km()
n.sbZ(0,!0)
n.sbO(6.283185307179586)
n.sbQ(0)
n.sU(0,0)
n.sbP(100)
n.sV(0)
n.sbJ(0.5)
o.c=n
n.gC().i(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.ab(!1,!1,!1)
k=o.d
o.d=l
n=new D.q(c,k,l)
n.b=!0
o.P(n)
n=o.f
if(n!==!1){o.f=!1
n=new D.q("invertX",n,!1)
n.b=!0
o.P(n)}n=o.r
if(n!==!0){o.r=!0
n=new D.q("invertY",n,!0)
n.b=!0
o.P(n)}o.aL(p)
q.i(0,o)
p=s.r
o=new U.cX()
n=U.km()
n.sbZ(0,!0)
n.sbO(6.283185307179586)
n.sbQ(0)
n.sU(0,0)
n.sbP(100)
n.sV(0)
n.sbJ(0.2)
o.b=n
n.gC().i(0,o.gat())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.ab(!0,!1,!1)
k=o.c
o.c=l
n=new D.q(c,k,l)
n.b=!0
o.P(n)
o.aL(p)
q.i(0,o)
p=s.r
o=new U.cZ()
o.c=0.01
o.e=o.d=0
l=new X.ab(!1,!1,!1)
o.b=l
n=new D.q(c,e,l)
n.b=!0
o.P(n)
o.aL(p)
q.i(0,o)
r.saP(q)
j=new O.cm()
j.b=V.lF()
j.c=new V.x(0.2,0.3,0.4,1)
j.d=new V.x(0.1,0.2,0.3,1)
j.e=V.cd(0.7)
j.f=V.cd(0.3)
j.r=V.cd(0.5)
j.x=V.cd(0.5)
j.y=new V.x(1,1,1,1)
j.z=V.cd(0.8)
j.r1=j.k4=j.k3=j.k2=j.k1=j.id=j.go=j.fy=j.fx=j.fr=j.dy=j.dx=j.db=j.cy=j.cx=j.ch=j.Q=!1
j.r2=1
j.sa4(0.4)
q=new M.ci()
q.a=!0
b=O.l1(b)
q.e=b
b.be(q.gec(),q.gee())
q.y=q.x=q.r=q.f=null
i=X.mI(e)
h=new X.cB()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saP(e)
b=h.c
if(!(Math.abs(b-1.0471975511965976)<$.A().a)){h.c=1.0471975511965976
b=new D.q("fov",b,1.0471975511965976)
b.b=!0
h.aq(b)}b=h.d
if(!(Math.abs(b-0.1)<$.A().a)){h.d=0.1
b=new D.q("near",b,0.1)
b.b=!0
h.aq(b)}b=h.e
if(!(Math.abs(b-2000)<$.A().a)){h.e=2000
b=new D.q("far",b,2000)
b.b=!0
h.aq(b)}b=q.b
if(b!==h){if(b!=null)b.gC().F(0,q.gac())
k=q.b
q.b=h
h.gC().i(0,q.gac())
b=new D.q("camera",k,q.b)
b.b=!0
q.ah(b)}b=q.c
if(b!==i){if(b!=null)b.gC().F(0,q.gac())
k=q.c
q.c=i
i.gC().i(0,q.gac())
b=new D.q("target",k,q.c)
b.b=!0
q.ah(b)}q.sd5(e)
q.sd5(j)
q.e.i(0,r)
b=q.b
g=V.au(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.ce()
p.a=g
b.saP(p)
b=s.d
if(b!==q){if(b!=null)b.gC().F(0,s.gc3())
s.d=q
q.gC().i(0,s.gc3())
s.c4()}b=new V.ef(d)
u=u.getElementById(d)
b.c=u
if(u==null)H.B("Failed to find controls for CheckGroup")
b.d=H.d([],[W.eh])
b.a0(0,"Filled",new Z.jo(j),!0)
b.a0(0,"Wire Frame",new Z.jp(j),!0)
b.l(0,"Vertices",new Z.jq(j))
b.l(0,"Normals",new Z.jB(j))
b.l(0,"Binormals",new Z.jM(j))
b.l(0,"Tangentals",new Z.jX(j))
b.l(0,"Face Centers",new Z.k5(j))
b.l(0,"Face Normals",new Z.k6(j))
b.l(0,"Face Binormals",new Z.k7(j))
b.l(0,"Face Tangentals",new Z.k8(j))
b.l(0,"Colors",new Z.k9(j))
b.l(0,"Textures2D",new Z.jr(j))
b.l(0,"TexturesCube",new Z.js(j))
b.l(0,"Weight",new Z.jt(j))
b.l(0,"Bend",new Z.ju(j))
b.a0(0,"Axis",new Z.jv(j),!0)
b.l(0,"AABB",new Z.jw(j))
b=new Z.ka(r)
u=V.ll("shapes")
u.a0(0,"Square",new Z.jx(b),!0)
u.l(0,"Cube",new Z.jy(b))
u.l(0,"Cuboid",new Z.jz(b))
u.l(0,"Cuboid+",new Z.jA(b))
u.l(0,"Disk",new Z.jC(b))
u.l(0,"Disk+",new Z.jD(b))
u.l(0,"Cylinder",new Z.jE(b))
u.l(0,"Cylinder+",new Z.jF(b))
u.l(0,"Cone",new Z.jG(b))
u.l(0,"Cylindrical",new Z.jH(b))
u.l(0,"LatLonSphere",new Z.jI(b))
u.l(0,"LatLonSphere+",new Z.jJ(b))
u.l(0,"IsoSphere",new Z.jK(b))
u.l(0,"IsoSphere+",new Z.jL(b))
u.l(0,"Sphere",new Z.jN(b))
u.l(0,"Sphere+",new Z.jO(b))
u.l(0,"Spherical",new Z.jP(b))
u.l(0,"Toroid",new Z.jQ(b))
u.l(0,"Knot",new Z.jR(b))
u.l(0,"Grid",new Z.jS(b))
u.l(0,"Grid+",new Z.jT(b))
b=V.ll("scalars")
b.l(0,"0.01",new Z.jU(j))
b.l(0,"0.02",new Z.jV(j))
b.l(0,"0.04",new Z.jW(j))
b.l(0,"0.06",new Z.jY(j))
b.l(0,"0.08",new Z.jZ(j))
b.l(0,"0.1",new Z.k_(j))
b.l(0,"0.2",new Z.k0(j))
b.a0(0,"0.4",new Z.k1(j),!0)
b.l(0,"0.6",new Z.k2(j))
b.l(0,"0.8",new Z.k3(j))
b.l(0,"1.0",new Z.k4(j))
V.ob(s)},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jB:function jB(a){this.a=a},
jM:function jM(a){this.a=a},
jX:function jX(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
ka:function ka(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jn:function jn(){},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jm:function jm(){},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jl:function jl(){},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jk:function jk(){},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a}},D={
L:function(){var u=new D.bv()
u.d=0
return u},
ee:function ee(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
eC:function eC(a){this.a=a},
eD:function eD(a){this.a=a},
X:function X(){this.b=null},
cn:function cn(){this.b=null},
co:function co(){this.b=null},
q:function q(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={cc:function cc(a,b){this.a=a
this.b=b},cs:function cs(a,b){this.a=a
this.b=b},fk:function fk(){var _=this
_.d=_.c=_.b=_.a=null},cu:function cu(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ft:function ft(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},aw:function aw(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fG:function fG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(){},cO:function cO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ht:function ht(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cW:function cW(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mI:function(a){var u=new X.eL(),t=new V.x(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lo
if(t==null){t=V.ln(0,0,1,1)
$.lo=t}u.r=t
return u},
kl:function kl(){},
eL:function eL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){}},V={
l2:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.b4(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.a3(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a3(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a3(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a3(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a3(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a3(p,o,n)}},
cd:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.x(a,a,a,1)},
l3:function(a){return new V.x(a.a,a.b,a.c,1)},
oh:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aV(a-b,u)
return(a<0?a+u:a)+b},
w:function(a,b,c){if(a==null)return C.a.a9("null",c)
return C.a.a9(C.d.d6(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
j7:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.p])
for(u=0,t=0;t<4;++t){s=V.w(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.b(o,q)
r=C.a.a9(o[q],u)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=r}return o},
fz:function(){var u=$.lb
return u==null?$.lb=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
am:function(){var u=$.le
return u==null?$.le=new V.O(0,0):u},
lg:function(){var u=$.lf
return u==null?$.lf=new V.D(0,0,0):u},
li:function(){var u=$.lh
return u==null?$.lh=new V.a0(0,0,0,0):u},
ln:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cE(a,b,c,d)},
lp:function(a,b,c,d,e,f){return new V.bM(a,b,c,d,e,f)},
I:function(){var u=$.lE
return u==null?$.lE=new V.o(0,0,0):u},
kA:function(){var u=$.lB
return u==null?$.lB=new V.o(1,0,0):u},
lF:function(){var u=$.lA
return u==null?$.lA=new V.o(0,0,-1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
O:function O(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
E:function E(a,b){this.a=a
this.b=b},
o:function o(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ob:function(a){P.nb(C.G,new V.kc(a))},
ll:function(a){var u=new V.fW(a),t=document.getElementById(a)
u.c=t
if(t==null)H.B("Failed to find "+a+" for RadioGroup")
return u},
n8:function(a){var u=new V.h9()
u.dm(a,!0)
return u},
ef:function ef(a){this.a=a
this.d=this.c=null},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a){this.a=a},
fW:function fW(a){this.a=a
this.c=null},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(){this.b=this.a=null},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a}},U={
km:function(){var u=new U.ej()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ej:function ej(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ce:function ce(){this.b=this.a=null},
by:function by(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
cX:function cX(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ci:function ci(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kx:function(a,b,c,d,e){var u=new A.hB(a,c,e)
u.f=d
P.mQ(d,0,P.r)
return u},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a},
eO:function eO(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cF:function cF(){},
cQ:function cQ(){},
hG:function hG(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
cS:function cS(a,b,c){this.a=a
this.c=b
this.d=c},
bO:function bO(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
bf:function bf(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iZ:function(a,b,c,d){var u=F.M()
F.c0(u,b,c,d,a,1,0,0,1)
F.c0(u,b,c,d,a,0,1,0,3)
F.c0(u,b,c,d,a,0,0,1,2)
F.c0(u,b,c,d,a,-1,0,0,0)
F.c0(u,b,c,d,a,0,-1,0,0)
F.c0(u,b,c,d,a,0,0,-1,3)
u.a7()
return u},
iR:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.bc()
return(u>0?t+4:t)*2},
c0:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.o(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.o(u+a3,t+a1,s+a2)
q=new V.o(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.o(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iR(i)
l=F.iR(j.b)
k=F.dX(d,a0,new F.iQ(j,F.iR(j.c),F.iR(j.d),l,m,c),b)
if(k!=null)a.aA(k)},
j4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d==null)d=new F.j5()
if(e<3)return
u=F.M()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aF])
q=u.a
p=new V.o(0,0,t)
p=p.m(0,Math.sqrt(p.w(p)))
r.push(q.fk(new V.a0(a,-1,-1,-1),new V.x(1,1,1,1),new V.D(0,0,c),new V.o(0,0,t),new V.O(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.h(k)
j=new V.o(m,l,t).m(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ad(new V.a0(a,-1,-1,-1),null,new V.x(i,g,h,1),new V.D(m*k,l*k,c),new V.o(0,0,t),new V.O(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.i(0,f)
r.push(f)}u.d.cw(r)
return u},
kK:function(a,b,c,d){return F.lV(!0,a,b,new F.j_(1,d),c)},
lV:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.dX(c,e,new F.j1(d),null)
if(u==null)return
u.a7()
u.b1()
if(b)u.aA(F.j4(3,!1,1,new F.j2(d),e))
u.aA(F.j4(1,!0,-1,new F.j3(d),e))
return u},
m2:function(a,b){var u=F.dX(a,b,new F.jj(),null)
u.d.b8()
u.a7()
u.b1()
return u},
m1:function(a){var u=F.M(),t=Math.sqrt(5)/2+0.5,s=F.Z(u,new V.o(-1,t,0)),r=F.Z(u,new V.o(1,t,0)),q=-t,p=F.Z(u,new V.o(-1,q,0)),o=F.Z(u,new V.o(1,q,0)),n=F.Z(u,new V.o(0,-1,q)),m=F.Z(u,new V.o(0,1,q)),l=F.Z(u,new V.o(0,-1,t)),k=F.Z(u,new V.o(0,1,t)),j=F.Z(u,new V.o(t,0,1)),i=F.Z(u,new V.o(t,0,-1)),h=F.Z(u,new V.o(q,0,1)),g=F.Z(u,new V.o(q,0,-1))
F.J(u,s,g,m,a)
F.J(u,s,m,r,a)
F.J(u,s,r,k,a)
F.J(u,s,k,h,a)
F.J(u,s,h,g,a)
F.J(u,r,m,i,a)
F.J(u,m,g,n,a)
F.J(u,g,h,p,a)
F.J(u,h,k,l,a)
F.J(u,k,r,j,a)
F.J(u,o,i,n,a)
F.J(u,o,n,p,a)
F.J(u,o,p,l,a)
F.J(u,o,l,j,a)
F.J(u,o,j,i,a)
F.J(u,n,i,m,a)
F.J(u,p,n,g,a)
F.J(u,l,p,h,a)
F.J(u,j,l,k,a)
F.J(u,i,j,r,a)
u.cQ(new F.bP(),new F.i2())
return u},
Z:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.m(0,Math.sqrt(b.w(b)))
u=b.a
t=b.b
s=b.c
r=F.ad(j,j,j,new V.D(u,t,s),b,j,j,j,0)
q=a.fD(r,new F.bP())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
if(typeof s!=="number")return s.q()
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sa1(0,new V.x(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sbW(new V.O(l,k<0?-k:k))
a.a.i(0,r)
return r},
J:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.a0(0,b,d,c)
else{u=F.Z(a,b.r.p(0,c.r).q(0,0.5))
t=F.Z(a,c.r.p(0,d.r).q(0,0.5))
s=F.Z(a,d.r.p(0,b.r).q(0,0.5))
r=e-1
F.J(a,b,u,s,r)
F.J(a,u,c,t,r)
F.J(a,t,s,u,r)
F.J(a,s,t,d,r)}},
kQ:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kd()
u=F.iZ(a,null,new F.ke(t,1),c)
u.b1()
return u},
of:function(){return F.lW(15,30,0.5,1,new F.kg())},
o5:function(){return F.lW(12,120,0.3,1,new F.ji(3,2))},
lW:function(a,b,c,d,e){var u=F.dX(a,b,new F.j0(e,d,b,c),null)
if(u==null)return
u.a7()
u.b1()
return u},
m_:function(a,b,c){var u={}
u.a=b
if(b==null)u.a=new F.jb()
return F.dX(c,a,new F.jc(u),null)},
dX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.M()
t=H.d([],[F.aF])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ad(g,g,new V.x(p,0,0,1),g,g,new V.O(r,1),g,g,0)
q.i(0,o)
c.$3(o,r,0)
t.push(o.bI(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ad(g,g,new V.x(j,i,h,1),g,g,new V.O(r,m),g,g,0)
k.i(0,o)
c.$3(o,r,n)
t.push(o.bI(d))}}u.d.fj(a+1,b+1,t)
return u},
bw:function(a,b,c){var u=new F.ar(),t=a.a
if(t==null)H.B(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.z("May not create a face with vertices attached to different shapes."))
u.aJ(a)
u.aK(b)
u.co(c)
u.a.a.d.b.push(u)
u.a.a.R()
return u},
mM:function(a,b){var u,t=new F.ba()
if(a==null)H.B(P.z("May not create a line with a null start vertex."))
if(b==null)H.B(P.z("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.B(P.z("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.B(P.z("May not create a line with vertices attached to different shapes."))
t.aJ(a)
t.aK(b)
t.a.a.c.b.push(t)
t.a.a.R()
return t},
kv:function(a){var u=new F.bJ()
if(a.a==null)H.B(P.z("May not create a point with a vertex which is not attached to a shape."))
u.eT(a)
u.a.a.b.b.push(u)
u.a.a.R()
return u},
M:function(){var u=new F.ac(),t=new F.hZ(u)
t.b=!1
t.c=H.d([],[F.aF])
u.a=t
t=new F.h8(u)
t.b=H.d([],[F.bJ])
u.b=t
t=new F.h7(u)
t.b=H.d([],[F.ba])
u.c=t
t=new F.h6(u)
t.b=H.d([],[F.ar])
u.d=t
u.e=null
return u},
ad:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aF(),r=new F.i7()
r.b=H.d([],[F.bJ])
s.b=r
r=new F.i3()
u=[F.ba]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.i_()
u=[F.ar]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.mm()
s.e=0
r=$.aK()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aJ().a)!==0?e:t
s.x=(u&$.aI().a)!==0?b:t
s.y=(u&$.bo().a)!==0?f:t
s.z=(u&$.bp().a)!==0?g:t
s.Q=(u&$.mn().a)!==0?c:t
s.ch=(u&$.bq().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
iQ:function iQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(){},
j_:function j_(a,b){this.a=a
this.b=b},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
jj:function jj(){},
kd:function kd(){},
ke:function ke(a,b){this.a=a
this.b=b},
kg:function kg(){},
ji:function ji(a,b){this.a=a
this.b=b},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(){},
jc:function jc(a){this.a=a},
ar:function ar(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eE:function eE(){},
hc:function hc(){},
ba:function ba(){this.b=this.a=null},
fm:function fm(){},
hz:function hz(){},
bJ:function bJ(){this.a=null},
ac:function ac(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a){this.a=a
this.b=null},
h7:function h7(a){this.a=a
this.b=null},
h8:function h8(a){this.a=a
this.b=null},
aF:function aF(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
hZ:function hZ(a){this.a=a
this.c=this.b=null},
i_:function i_(){this.d=this.c=this.b=null},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i3:function i3(){this.c=this.b=null},
i4:function i4(){},
bP:function bP(){},
i5:function i5(){},
fV:function fV(){this.b=this.a=null},
i6:function i6(){},
i2:function i2(){},
fM:function fM(){},
i7:function i7(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ks.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gI:function(a){return H.bK(a)},
h:function(a){return"Instance of '"+H.f(H.bL(a))+"'"}}
J.fg.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ic3:1}
J.cq.prototype={
A:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cr.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.fR.prototype={}
J.bg.prototype={}
J.aQ.prototype={
h:function(a){var u=a[$.ma()]
if(u==null)return this.dh(a)
return"JavaScript function for "+H.f(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aO.prototype={
d2:function(a,b){if(!!a.fixed$length)H.B(P.t("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cD(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.B(P.t("remove"))
for(u=0;u<a.length;++u)if(J.u(a[u],b)){a.splice(u,1)
return!0}return!1},
t:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.b6(a))}},
D:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fN:function(a){return this.D(a,"")},
fH:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.b6(a))}return u},
fI:function(a,b,c){return this.fH(a,b,c,null)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
de:function(a,b,c){if(b<0||b>a.length)throw H.c(P.V(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.V(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.ja(a,0)])
return H.d(a.slice(b,c),[H.ja(a,0)])},
gfF:function(a){if(a.length>0)return a[0]
throw H.c(H.l6())},
gal:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l6())},
cF:function(a,b){var u
for(u=0;u<a.length;++u)if(J.u(a[u],b))return!0
return!1},
h:function(a){return P.kp(a,"[","]")},
ga_:function(a){return new J.a8(a,a.length)},
gI:function(a){return H.bK(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.B(P.t("set length"))
if(b<0)throw H.c(P.V(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bm(a,b))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
return a[b]},
$il:1,
$im:1}
J.kr.prototype={}
J.a8.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.y(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bB.prototype={
b4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.t(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
d6:function(a,b){var u,t
if(b>20)throw H.c(P.V(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
aT:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.t("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aV:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cq(a,b)},
aw:function(a,b){return(a|0)===a?a/b|0:this.cq(a,b)},
cq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.t("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.cp(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eZ:function(a,b){if(b<0)throw H.c(H.aG(b))
return this.cp(a,b)},
cp:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia7:1}
J.cp.prototype={$ir:1}
J.fh.prototype={}
J.aP.prototype={
W:function(a,b){if(b<0)throw H.c(H.bm(a,b))
if(b>=a.length)H.B(H.bm(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bm(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.kW(b,null,null))
return a+b},
aE:function(a,b,c,d){var u,t
c=P.aV(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a2:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.a2(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.aG(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.c(P.cD(b,null))
if(b>c)throw H.c(P.cD(b,null))
if(c>a.length)throw H.c(P.cD(c,null))
return a.substring(b,c)},
ao:function(a,b){return this.v(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
fX:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.q(c,u)},
b5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cO:function(a,b){return this.b5(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ip:1}
H.P.prototype={
gj:function(a){return this.a.length},
k:function(a,b){return C.a.W(this.a,b)},
$an:function(){return[P.r]},
$al:function(){return[P.r]},
$am:function(){return[P.r]}}
H.ez.prototype={}
H.ct.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=J.c4(s),q=r.gj(s)
if(t.b!==q)throw H.c(P.b6(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fx.prototype={
ga_:function(a){return new H.fy(J.b1(this.a),this.b)},
gj:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.kj(this.a,b))},
$al:function(a,b){return[b]}}
H.fy.prototype={
E:function(){var u=this,t=u.b
if(t.E()){u.a=u.c.$1(t.gM(t))
return!0}u.a=null
return!1},
gM:function(a){return this.a}}
H.ic.prototype={
ga_:function(a){return new H.id(J.b1(this.a),this.b)}}
H.id.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.cj.prototype={}
H.hO.prototype={
u:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.cT.prototype={}
H.el.prototype={
h:function(a){return P.ku(this)},
u:function(a,b,c){return H.mE()},
$iQ:1}
H.em.prototype={
gj:function(a){return this.a},
b2:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.b2(0,b))return
return this.cg(b)},
cg:function(a){return this.b[a]},
t:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cg(s))}}}
H.hx.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fN.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fj.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hN.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kh.prototype={
$1:function(a){if(!!J.T(a).$ib7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:10}
H.dy.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bt.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghe:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hn.prototype={}
H.hh.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dY(u)+"'"}}
H.br.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.br))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.bK(this.a)
else u=typeof t!=="object"?J.c7(t):H.bK(t)
return(u^H.bK(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bL(u))+"'")}}
H.ed.prototype={
h:function(a){return this.a}}
H.h3.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.aa.prototype={
gj:function(a){return this.a},
gae:function(a){return new H.fo(this,[H.ja(this,0)])},
b2:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cd(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cd(t,b)}else return s.fK(b)},
fK:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bM(u.bl(t,u.bL(a)),a)>=0},
k:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fL(b)},
fL:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bl(r,s.bL(a))
t=s.bM(u,a)
if(t<0)return
return u[t].b},
u:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.c8(u==null?s.b=s.bt():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.c8(t==null?s.c=s.bt():t,b,c)}else s.fM(b,c)},
fM:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bt()
u=r.bL(a)
t=r.bl(q,u)
if(t==null)r.by(q,u,[r.bu(a,b)])
else{s=r.bM(t,a)
if(s>=0)t[s].b=b
else t.push(r.bu(a,b))}},
t:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.b6(u))
t=t.c}},
c8:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.by(a,b,this.bu(b,c))
else u.b=c},
bu:function(a,b){var u=this,t=new H.fn(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bL:function(a){return J.c7(a)&0x3ffffff},
bM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.u(a[t].a,b))return t
return-1},
h:function(a){return P.ku(this)},
aY:function(a,b){return a[b]},
bl:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
dO:function(a,b){delete a[b]},
cd:function(a,b){return this.aY(a,b)!=null},
bt:function(){var u="<non-identifier-key>",t=Object.create(null)
this.by(t,u,t)
this.dO(t,u)
return t}}
H.fn.prototype={}
H.fo.prototype={
gj:function(a){return this.a.a},
ga_:function(a){var u=this.a,t=new H.fp(u,u.r)
t.c=u.e
return t}}
H.fp.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b6(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.je.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.jf.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jg.prototype={
$1:function(a){return this.a(a)}}
H.fi.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in4:1}
H.bG.prototype={$ibG:1}
H.aS.prototype={$iaS:1}
H.cw.prototype={
gj:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bH.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
u:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$an:function(){return[P.K]},
$il:1,
$al:function(){return[P.K]},
$im:1,
$am:function(){return[P.K]}}
H.cx.prototype={
u:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$an:function(){return[P.r]},
$il:1,
$al:function(){return[P.r]},
$im:1,
$am:function(){return[P.r]}}
H.fH.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fI.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fJ.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fK.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fL.prototype={
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.cy.prototype={
gj:function(a){return a.length},
k:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.bI.prototype={
gj:function(a){return a.length},
k:function(a,b){H.aq(b,a,a.length)
return a[b]},
$ibI:1,
$ibe:1}
H.bS.prototype={}
H.bT.prototype={}
H.bU.prototype={}
H.bV.prototype={}
P.ig.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ie.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ih.prototype={
$0:function(){this.a.$0()}}
P.ii.prototype={
$0:function(){this.a.$0()}}
P.dF.prototype={
dr:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bl(new P.iG(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
ds:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bl(new P.iF(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$icL:1}
P.iG.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iF.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.di(u,q)}s.c=r
t.d.$1(s)}}
P.d0.prototype={}
P.cI.prototype={}
P.hk.prototype={}
P.cL.prototype={}
P.iP.prototype={}
P.iX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cA():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.iw.prototype={
h8:function(a){var u,t,s,r=null
try{if(C.f===$.ag){a.$0()
return}P.nK(r,r,this,a)}catch(s){u=H.b_(s)
t=H.kM(s)
P.lP(r,r,this,u,t)}},
h9:function(a,b){var u,t,s,r=null
try{if(C.f===$.ag){a.$1(b)
return}P.nL(r,r,this,a,b)}catch(s){u=H.b_(s)
t=H.kM(s)
P.lP(r,r,this,u,t)}},
ha:function(a,b){return this.h9(a,b,null)},
fm:function(a){return new P.ix(this,a)},
cB:function(a,b){return new P.iy(this,a,b)}}
P.ix.prototype={
$0:function(){return this.a.h8(this.b)}}
P.iy.prototype={
$1:function(a){return this.a.ha(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.it.prototype={
ga_:function(a){var u=new P.df(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
i:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cb(u==null?s.b=P.kC():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cb(t==null?s.c=P.kC():t,b)}else return s.dw(0,b)},
dw:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kC()
u=s.cc(b)
t=r[u]
if(t==null)r[u]=[s.bh(b)]
else{if(s.ci(t,b)>=0)return!1
t.push(s.bh(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eO(this.c,b)
else return this.eN(0,b)},
eN:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dZ(r,b)
t=s.ci(u,b)
if(t<0)return!1
s.cr(u.splice(t,1)[0])
return!0},
cb:function(a,b){if(a[b]!=null)return!1
a[b]=this.bh(b)
return!0},
eO:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cr(u)
delete a[b]
return!0},
cl:function(){this.r=1073741823&this.r+1},
bh:function(a){var u,t=this,s=new P.iu(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cl()
return s},
cr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cl()},
cc:function(a){return J.c7(a)&1073741823},
dZ:function(a,b){return a[this.cc(b)]},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.u(a[t].a,b))return t
return-1}}
P.iu.prototype={}
P.df.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b6(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fq.prototype={
$2:function(a,b){this.a.u(0,a,b)},
$S:4}
P.fr.prototype={$il:1,$im:1}
P.n.prototype={
ga_:function(a){return new H.ct(a,this.gj(a))},
J:function(a,b){return this.k(a,b)},
hb:function(a,b){var u,t,s=this,r=H.d([],[H.o_(s,a,"n",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.k(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
bX:function(a){return this.hb(a,!0)},
fC:function(a,b,c,d){var u
P.aV(b,c,this.gj(a))
for(u=b;u<c;++u)this.u(a,u,d)},
h:function(a){return P.kp(a,"[","]")}}
P.fu.prototype={}
P.fv.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:4}
P.at.prototype={
t:function(a,b){var u,t
for(u=J.b1(this.gae(a));u.E();){t=u.gM(u)
b.$2(t,this.k(a,t))}},
gj:function(a){return J.af(this.gae(a))},
h:function(a){return P.ku(a)},
$iQ:1}
P.iH.prototype={
u:function(a,b,c){throw H.c(P.t("Cannot modify unmodifiable map"))}}
P.fw.prototype={
k:function(a,b){return J.kU(this.a,b)},
u:function(a,b,c){J.ki(this.a,b,c)},
t:function(a,b){J.kV(this.a,b)},
gj:function(a){return J.af(this.a)},
h:function(a){return J.a2(this.a)},
$iQ:1}
P.cU.prototype={}
P.iz.prototype={
h:function(a){return P.kp(this,"{","}")},
J:function(a,b){var u,t,s
P.lm(b,"index")
for(u=P.no(this,this.r),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
$il:1}
P.dg.prototype={}
P.dK.prototype={}
P.e9.prototype={
fP:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aV(a0,a1,b.length)
u=$.mp()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jd(C.a.H(b,n))
j=H.jd(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.cC(m)
s=n
continue}}throw H.c(P.N("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.kX(b,p,a1,q,o,f)
else{e=C.c.aV(f-1,4)+1
if(e===1)throw H.c(P.N(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aE(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kX(b,p,a1,q,o,d)
else{e=C.c.aV(d,4)
if(e===1)throw H.c(P.N(c,b,a1))
if(e>1)b=C.a.aE(b,a1,a1,e===2?"==":"=")}return b}}
P.ea.prototype={}
P.ei.prototype={}
P.en.prototype={}
P.eA.prototype={}
P.hW.prototype={
gfB:function(){return C.F}}
P.hY.prototype={
bH:function(a){var u,t,s=P.aV(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iO(u)
if(t.dY(a,0,s)!==s)t.cv(J.mv(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nF(0,t.b,u.length)))}}
P.iO.prototype={
cv:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
dY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cv(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.hX.prototype={
bH:function(a){var u,t,s,r,q,p,o,n,m=P.ne(!1,a,0,null)
if(m!=null)return m
u=P.aV(0,null,J.af(a))
t=P.lR(a,0,u)
if(t>0){s=P.bN(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.iN(!1,r)
o.c=p
o.fs(a,q,u)
if(o.e>0){H.B(P.N("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cC(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iN.prototype={
fs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.c4(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bb()
if((r&192)!==128){q=P.N(k+C.c.aT(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.q,q)
if(j<=C.q[q]){q=P.N("Overlong encoding of 0x"+C.c.aT(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.N("Character outside valid Unicode range: 0x"+C.c.aT(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.cC(j)
l.c=!1}for(q=s<c;q;){p=P.lR(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bN(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.N("Negative UTF-8 code unit: -0x"+C.c.aT(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.N(k+C.c.aT(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.c3.prototype={}
P.a4.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.av(u,30))&1073741823},
h:function(a){var u=this,t=P.mF(H.n0(u)),s=P.cf(H.mZ(u)),r=P.cf(H.mV(u)),q=P.cf(H.mW(u)),p=P.cf(H.mY(u)),o=P.cf(H.n_(u)),n=P.mG(H.mX(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aM.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.ey(),q=this.a
if(q<0)return"-"+new P.aM(0-q).h(0)
u=r.$1(C.c.aw(q,6e7)%60)
t=r.$1(C.c.aw(q,1e6)%60)
s=new P.ex().$1(q%1e6)
return""+C.c.aw(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.ex.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ey.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b7.prototype={}
P.cA.prototype={
h:function(a){return"Throw of null."}}
P.ah.prototype={
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbj()+o+u
if(!q.a)return t
s=q.gbi()
r=P.ko(q.b)
return t+s+": "+r}}
P.bc.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eN.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var u,t=this.b
if(typeof t!=="number")return t.T()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.hP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hL.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hg.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ek.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ko(u)+"."}}
P.fQ.prototype={
h:function(a){return"Out of Memory"},
$ib7:1}
P.cG.prototype={
h:function(a){return"Stack Overflow"},
$ib7:1}
P.es.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d8.prototype={
h:function(a){return"Exception: "+this.a}}
P.eK.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.W(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.r.prototype={}
P.l.prototype={
gj:function(a){var u,t=this.ga_(this)
for(u=0;t.E();)++u
return u},
J:function(a,b){var u,t,s
P.lm(b,"index")
for(u=this.ga_(this),t=0;u.E();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
h:function(a){return P.mJ(this,"(",")")}}
P.ff.prototype={}
P.m.prototype={$il:1}
P.Q.prototype={}
P.aT.prototype={
gI:function(a){return P.Y.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.a7.prototype={}
P.Y.prototype={constructor:P.Y,$iY:1,
A:function(a,b){return this===b},
gI:function(a){return H.bK(this)},
h:function(a){return"Instance of '"+H.f(H.bL(this))+"'"},
toString:function(){return this.h(this)}}
P.p.prototype={}
P.R.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hU.prototype={
$2:function(a,b){var u,t,s,r=J.kL(b).cO(b,"=")
if(r===-1){if(b!=="")J.ki(a,P.kG(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ao(b,r+1)
s=this.a
J.ki(a,P.kG(u,0,u.length,s,!0),P.kG(t,0,t.length,s,!0))}return a}}
P.hR.prototype={
$2:function(a,b){throw H.c(P.N("Illegal IPv4 address, "+a,this.a,b))}}
P.hS.prototype={
$2:function(a,b){throw H.c(P.N("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hT.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dW(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bh.prototype={
gd9:function(){return this.b},
gbK:function(a){var u=this.c
if(u==null)return""
if(C.a.a6(u,"["))return C.a.v(u,1,u.length-1)
return u},
gb7:function(a){var u=this.d
if(u==null)return P.lI(this.a)
return u},
gbT:function(a){var u=this.f
return u==null?"":u},
gcJ:function(){var u=this.r
return u==null?"":u},
bV:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a6(u,"/"))u="/"+u
s=P.kE(null,0,0,b)
return new P.bh(q,o,m,n,u,s,r.r)},
gaC:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.p
u=this.Q=new P.cU(P.ly(t==null?"":t),[u,u])
t=u}return t},
gcK:function(){return this.c!=null},
gcN:function(){return this.f!=null},
gcL:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.f(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.f(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.f(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$iky)if(s.a==b.gbd())if(s.c!=null===b.gcK())if(s.b==b.gd9())if(s.gbK(s)==b.gbK(b))if(s.gb7(s)==b.gb7(b))if(s.e===b.gcZ(b)){u=s.f
t=u==null
if(!t===b.gcN()){if(t)u=""
if(u===b.gbT(b)){u=s.r
t=u==null
if(!t===b.gcL()){if(t)u=""
u=u===b.gcJ()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$iky:1,
gbd:function(){return this.a},
gcZ:function(a){return this.e}}
P.iI.prototype={
$1:function(a){throw H.c(P.N("Invalid port",this.a,this.b+1))}}
P.iJ.prototype={
$1:function(a){return P.iM(C.N,a,C.e,!1)}}
P.iL.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iM(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iM(C.h,b,C.e,!0))}}}
P.iK.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b1(b),t=this.a;u.E();)t.$2(a,u.gM(u))}}
P.hQ.prototype={
gd8:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b5(u,"?",o)
s=u.length
if(t>=0){r=P.c_(u,t+1,s,C.j,!1)
s=t}else r=p
return q.c=new P.im("data",p,p,p,P.c_(u,o,s,C.t,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iT.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iS.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mw(u,0,96,b)
return u},
$S:15}
P.iU.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.iV.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iA.prototype={
gcK:function(){return this.c>0},
gcM:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.h(t)
t=u+1<t
u=t}else u=!1
return u},
gcN:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
gcL:function(){return this.r<this.a.length},
gcj:function(){return this.b===4&&C.a.a6(this.a,"http")},
gck:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbd:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcj())q=t.x="http"
else if(t.gck()){t.x="https"
q="https"}else if(q===4&&C.a.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a6(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
gd9:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gbK:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gb7:function(a){var u,t=this
if(t.gcM()){u=t.d
if(typeof u!=="number")return u.p()
return P.dW(C.a.v(t.a,u+1,t.e),null,null)}if(t.gcj())return 80
if(t.gck())return 443
return 0},
gcZ:function(a){return C.a.v(this.a,this.e,this.f)},
gbT:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.a.v(this.a,u+1,t):""},
gcJ:function(){var u=this.r,t=this.a
return u<t.length?C.a.ao(t,u+1):""},
gaC:function(){var u=this,t=u.f
if(typeof t!=="number")return t.T()
if(t>=u.r)return C.O
t=P.p
return new P.cU(P.ly(u.gbT(u)),[t,t])},
bV:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbd(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gcM()?p.gb7(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a6(t,"/"))t="/"+t
r=P.kE(o,0,0,b)
s=p.r
q=s<l.length?C.a.ao(l,s+1):o
return new P.bh(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$iky&&this.a===b.h(0)},
h:function(a){return this.a},
$iky:1}
P.im.prototype={}
W.k.prototype={}
W.e_.prototype={
gj:function(a){return a.length}}
W.e1.prototype={
h:function(a){return String(a)}}
W.e2.prototype={
h:function(a){return String(a)}}
W.b3.prototype={$ib3:1}
W.b4.prototype={
dc:function(a,b,c){var u=a.getContext(b,P.nT(c))
return u},
$ib4:1}
W.aL.prototype={
gj:function(a){return a.length}}
W.eo.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bu.prototype={
gj:function(a){return a.length}}
W.ep.prototype={}
W.a9.prototype={}
W.aj.prototype={}
W.eq.prototype={
gj:function(a){return a.length}}
W.er.prototype={
gj:function(a){return a.length}}
W.et.prototype={
gj:function(a){return a.length}}
W.eu.prototype={
h:function(a){return String(a)}}
W.cg.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a6,P.a7]]},
$an:function(){return[[P.a6,P.a7]]},
$il:1,
$al:function(){return[[P.a6,P.a7]]},
$im:1,
$am:function(){return[[P.a6,P.a7]]}}
W.ch.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gan(a))+" x "+H.f(this.gak(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ia6)return!1
return a.left===u.gb6(b)&&a.top===u.gb9(b)&&this.gan(a)===u.gan(b)&&this.gak(a)===u.gak(b)},
gI:function(a){return W.lH(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gan(a)),C.d.gI(this.gak(a)))},
gcC:function(a){return a.bottom},
gak:function(a){return a.height},
gb6:function(a){return a.left},
gd4:function(a){return a.right},
gb9:function(a){return a.top},
gan:function(a){return a.width},
$ia6:1,
$aa6:function(){return[P.a7]}}
W.ev.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.p]},
$an:function(){return[P.p]},
$il:1,
$al:function(){return[P.p]},
$im:1,
$am:function(){return[P.p]}}
W.ew.prototype={
gj:function(a){return a.length}}
W.ik.prototype={
gj:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
u:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
i:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var u=this.bX(this)
return new J.a8(u,u.length)},
$an:function(){return[W.U]},
$al:function(){return[W.U]},
$am:function(){return[W.U]}}
W.U.prototype={
gbG:function(a){return new W.ik(a,a.children)},
gcE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.a6(u,t,s,r,[P.a7])},
h:function(a){return a.localName},
$iU:1}
W.i.prototype={$ii:1}
W.e.prototype={
fi:function(a,b,c,d){if(c!=null)this.dz(a,b,c,!1)},
dz:function(a,b,c,d){return a.addEventListener(b,H.bl(c,1),!1)}}
W.ak.prototype={$iak:1}
W.bx.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ak]},
$an:function(){return[W.ak]},
$il:1,
$al:function(){return[W.ak]},
$im:1,
$am:function(){return[W.ak]},
$ibx:1}
W.eF.prototype={
gj:function(a){return a.length}}
W.eJ.prototype={
gj:function(a){return a.length}}
W.as.prototype={$ias:1}
W.eM.prototype={
gj:function(a){return a.length}}
W.bz.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.C]},
$an:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.bA.prototype={$ibA:1}
W.eh.prototype={$iU:1,$iC:1}
W.b9.prototype={$ib9:1}
W.fs.prototype={
h:function(a){return String(a)}}
W.fA.prototype={
gj:function(a){return a.length}}
W.bE.prototype={$ibE:1}
W.fB.prototype={
k:function(a,b){return P.aH(a.get(b))},
t:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gae:function(a){var u=H.d([],[P.p])
this.t(a,new W.fC(u))
return u},
gj:function(a){return a.size},
u:function(a,b,c){throw H.c(P.t("Not supported"))},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.fC.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fD.prototype={
k:function(a,b){return P.aH(a.get(b))},
t:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gae:function(a){var u=H.d([],[P.p])
this.t(a,new W.fE(u))
return u},
gj:function(a){return a.size},
u:function(a,b,c){throw H.c(P.t("Not supported"))},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.fE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.fF.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.av]},
$an:function(){return[W.av]},
$il:1,
$al:function(){return[W.av]},
$im:1,
$am:function(){return[W.av]}}
W.al.prototype={$ial:1}
W.ij.prototype={
u:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.ck(u,u.length)},
gj:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$an:function(){return[W.C]},
$al:function(){return[W.C]},
$am:function(){return[W.C]}}
W.C.prototype={
h6:function(a,b){var u,t
try{u=a.parentNode
J.mt(u,b,a)}catch(t){H.b_(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dg(a):u},
eQ:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cz.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.C]},
$an:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.ay.prototype={$iay:1,
gj:function(a){return a.length}}
W.fS.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ay]},
$an:function(){return[W.ay]},
$il:1,
$al:function(){return[W.ay]},
$im:1,
$am:function(){return[W.ay]}}
W.h1.prototype={
k:function(a,b){return P.aH(a.get(b))},
t:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gae:function(a){var u=H.d([],[P.p])
this.t(a,new W.h2(u))
return u},
gj:function(a){return a.size},
u:function(a,b,c){throw H.c(P.t("Not supported"))},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.h2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h4.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.hd.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.az]},
$an:function(){return[W.az]},
$il:1,
$al:function(){return[W.az]},
$im:1,
$am:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.he.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aA]},
$an:function(){return[W.aA]},
$il:1,
$al:function(){return[W.aA]},
$im:1,
$am:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.hi.prototype={
k:function(a,b){return a.getItem(b)},
u:function(a,b,c){a.setItem(b,c)},
t:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gae:function(a){var u=H.d([],[P.p])
this.t(a,new W.hj(u))
return u},
gj:function(a){return a.length},
$iQ:1,
$aQ:function(){return[P.p,P.p]}}
W.hj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.aC.prototype={$iaC:1}
W.ao.prototype={$iao:1}
W.ho.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ao]},
$an:function(){return[W.ao]},
$il:1,
$al:function(){return[W.ao]},
$im:1,
$am:function(){return[W.ao]}}
W.hp.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aC]},
$an:function(){return[W.aC]},
$il:1,
$al:function(){return[W.aC]},
$im:1,
$am:function(){return[W.aC]}}
W.hr.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bd.prototype={$ibd:1}
W.hu.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aD]},
$an:function(){return[W.aD]},
$il:1,
$al:function(){return[W.aD]},
$im:1,
$am:function(){return[W.aD]}}
W.hv.prototype={
gj:function(a){return a.length}}
W.aX.prototype={}
W.hV.prototype={
h:function(a){return String(a)}}
W.ia.prototype={
gj:function(a){return a.length}}
W.aY.prototype={
gfw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
gfv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$iaY:1}
W.bR.prototype={
eS:function(a,b){return a.requestAnimationFrame(H.bl(b,1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.il.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.F]},
$an:function(){return[W.F]},
$il:1,
$al:function(){return[W.F]},
$im:1,
$am:function(){return[W.F]}}
W.d3.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ia6)return!1
return a.left===u.gb6(b)&&a.top===u.gb9(b)&&a.width===u.gan(b)&&a.height===u.gak(b)},
gI:function(a){return W.lH(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gak:function(a){return a.height},
gan:function(a){return a.width}}
W.iq.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.as]},
$an:function(){return[W.as]},
$il:1,
$al:function(){return[W.as]},
$im:1,
$am:function(){return[W.as]}}
W.dl.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.C]},
$an:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.iB.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aB]},
$an:function(){return[W.aB]},
$il:1,
$al:function(){return[W.aB]},
$im:1,
$am:function(){return[W.aB]}}
W.iE.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.an]},
$an:function(){return[W.an]},
$il:1,
$al:function(){return[W.an]},
$im:1,
$am:function(){return[W.an]}}
W.io.prototype={}
W.ip.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
ga_:function(a){return new W.ck(a,this.gj(a))}}
W.ck.prototype={
E:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.kU(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gM:function(a){return this.d}}
W.d2.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.bW.prototype={}
W.bX.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dz.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
P.iC.prototype={
cH:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
ba:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$ia4)return new Date(a.a)
if(!!u.$in4)throw H.c(P.hM("structured clone of RegExp"))
if(!!u.$iak)return a
if(!!u.$ib3)return a
if(!!u.$ibx)return a
if(!!u.$ibA)return a
if(!!u.$ibG||!!u.$iaS||!!u.$ibE)return a
if(!!u.$iQ){t=p.cH(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.t(a,new P.iD(o,p))
return o.a}if(!!u.$im){t=p.cH(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.ft(a,t)}throw H.c(P.hM("structured clone of other type"))},
ft:function(a,b){var u,t=J.c4(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.ba(t.k(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iD.prototype={
$2:function(a,b){this.a.a[a]=this.b.ba(b)},
$S:4}
P.iY.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.dC.prototype={}
P.eG.prototype={
gaZ:function(){var u=this.b,t=H.lY(u,"n",0)
return new H.fx(new H.ic(u,new P.eH(),[t]),new P.eI(),[t,W.U])},
u:function(a,b,c){var u=this.gaZ()
J.mx(u.b.$1(J.kj(u.a,b)),c)},
i:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.af(this.gaZ().a)},
k:function(a,b){var u=this.gaZ()
return u.b.$1(J.kj(u.a,b))},
ga_:function(a){var u=P.la(this.gaZ(),!1,W.U)
return new J.a8(u,u.length)},
$an:function(){return[W.U]},
$al:function(){return[W.U]},
$am:function(){return[W.U]}}
P.eH.prototype={
$1:function(a){return!!J.T(a).$iU}}
P.eI.prototype={
$1:function(a){return H.a_(a,"$iU")}}
P.iv.prototype={
gd4:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.h(t)
return u+t},
gcC:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.h(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ia6){t=q.a
if(t==u.gb6(b)){s=q.b
if(s==u.gb9(b)){r=q.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.h(r)
if(t+r===u.gd4(b)){t=q.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.h(t)
u=s+t===u.gcC(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.c7(t),r=u.b,q=J.c7(r),p=u.c
if(typeof t!=="number")return t.p()
if(typeof p!=="number")return H.h(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.p()
if(typeof t!=="number")return H.h(t)
t=C.c.gI(r+t)
return P.nn(P.is(P.is(P.is(P.is(0,s),q),p),t))}}
P.a6.prototype={
gb6:function(a){return this.a},
gb9:function(a){return this.b},
gan:function(a){return this.c},
gak:function(a){return this.d}}
P.aR.prototype={$iaR:1}
P.fl.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$an:function(){return[P.aR]},
$il:1,
$al:function(){return[P.aR]},
$im:1,
$am:function(){return[P.aR]}}
P.aU.prototype={$iaU:1}
P.fO.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$an:function(){return[P.aU]},
$il:1,
$al:function(){return[P.aU]},
$im:1,
$am:function(){return[P.aU]}}
P.fU.prototype={
gj:function(a){return a.length}}
P.hl.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$an:function(){return[P.p]},
$il:1,
$al:function(){return[P.p]},
$im:1,
$am:function(){return[P.p]}}
P.j.prototype={
gbG:function(a){return new P.eG(a,new W.ij(a))}}
P.aW.prototype={$iaW:1}
P.hw.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$an:function(){return[P.aW]},
$il:1,
$al:function(){return[P.aW]},
$im:1,
$am:function(){return[P.aW]}}
P.dd.prototype={}
P.de.prototype={}
P.dp.prototype={}
P.dq.prototype={}
P.dA.prototype={}
P.dB.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.be.prototype={$il:1,
$al:function(){return[P.r]},
$im:1,
$am:function(){return[P.r]}}
P.e5.prototype={
gj:function(a){return a.length}}
P.e6.prototype={
k:function(a,b){return P.aH(a.get(b))},
t:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gae:function(a){var u=H.d([],[P.p])
this.t(a,new P.e7(u))
return u},
gj:function(a){return a.size},
u:function(a,b,c){throw H.c(P.t("Not supported"))},
$iQ:1,
$aQ:function(){return[P.p,null]}}
P.e7.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e8.prototype={
gj:function(a){return a.length}}
P.b2.prototype={}
P.fP.prototype={
gj:function(a){return a.length}}
P.d1.prototype={}
P.hf.prototype={
gj:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aH(a.item(b))},
u:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$an:function(){return[[P.Q,,,]]},
$il:1,
$al:function(){return[[P.Q,,,]]},
$im:1,
$am:function(){return[[P.Q,,,]]}}
P.dw.prototype={}
P.dx.prototype={}
T.e0.prototype={
ay:function(a,b){return!0},
h:function(a){return"all"}}
T.cl.prototype={
ay:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].ay(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cv.prototype={}
T.ax.prototype={
ay:function(a,b){return!this.df(0,b)},
h:function(a){return"!["+this.c1(0)+"]"}}
T.h5.prototype={
dk:function(a){var u,t
if(a.a.length<=0)throw H.c(P.z("May not create a Set with zero characters."))
u=new H.aa([P.r,P.c3])
for(t=new H.ct(a,a.gj(a));t.E();)u.u(0,t.d,!0)
this.a=u},
ay:function(a,b){return this.a.b2(0,b)},
h:function(a){var u=this.a
return P.bN(u.gae(u),0,null)}}
R.cH.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cP(this.a.O(0,b))
r.a=H.d([],[T.cv])
r.c=!1
this.c.push(r)
return r},
fE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.ay(0,a))return r}return},
h:function(a){return this.b}}
R.cM.prototype={
h:function(a){var u=H.m7(this.b,"\n","\\n"),t=H.m7(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cN.prototype={
h:function(a){return this.b}}
R.hs.prototype={
O:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new R.cH(this,b)
u.c=H.d([],[R.cP])
this.a.u(0,b,u)}return u},
aU:function(a){var u,t=this.b.k(0,a)
if(t==null){t=new R.cN(a)
u=P.p
t.c=new H.aa([u,u])
this.b.u(0,a,t)}return t},
hc:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[R.cM]),k=this.c,j=[P.r],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.H(a,s)
q=k.fE(r)
if(q==null){if(t==null){i.push(r)
p=P.bN(i,0,m)
throw H.c(P.z("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bN(i,0,m)
o=k.d
n=o.c.k(0,p)
t=new R.cM(n==null?o.b:n,p,s)}++s}}}}
R.cP.prototype={
h:function(a){return this.b.b+": "+this.c1(0)}}
O.b5.prototype={
c2:function(a){this.a=H.d([],[a])
this.c=this.b=null},
be:function(a,b){this.b=null
this.c=a},
eE:function(a){return!0},
dn:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.a8(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
i:function(a,b){var u,t,s=this,r=[H.lY(s,"b5",0)]
if(s.eE(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.dn(t,H.d([b],r))}},
$il:1}
O.bD.prototype={
gj:function(a){return this.a.length},
gC:function(){var u=this.b
return u==null?this.b=D.L():u},
ap:function(){var u=this.b
if(u!=null)u.K(null)},
gaf:function(a){var u=this.a
if(u.length>0)return C.b.gal(u)
else return V.fz()},
d0:function(a){var u=this.a
if(a==null)u.push(V.fz())
else u.push(a)
this.ap()},
bS:function(){var u=this.a
if(u.length>0){u.pop()
this.ap()}}}
E.eb.prototype={}
E.aN.prototype={
sc_:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gC().F(0,s.gcW())
u=s.c
if(u!=null)u.gC().i(0,s.gcW())
t=new D.q("shape",r,s.c)
t.b=!0
s.am(t)}},
saP:function(a){var u,t,s=this
if(!J.u(s.r,a)){u=s.r
if(u!=null)u.gC().F(0,s.gcU())
if(a!=null)a.gC().i(0,s.gcU())
s.r=a
t=new D.q("mover",u,a)
t.b=!0
s.am(t)}},
aF:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aG(0,b,s):null
if(!J.u(q,s.x)){u=s.x
s.x=q
t=new D.q("matrix",u,q)
t.b=!0
s.am(t)}for(r=s.y.a,r=new J.a8(r,r.length);r.E();)r.d.aF(0,b)},
aD:function(a){var u,t,s,r,q,p,o,n=this,m="Inspection",l="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n",k=2929,j=a.dx,i=n.x
j.toString
if(i==null)j.a.push(j.gaf(j))
else j.a.push(i.q(0,j.gaf(j)))
j.ap()
a.d1(n.f)
j=a.dy
u=(j&&C.b).gal(j)
if(u!=null&&n.d!=null){if(u.a==null){t=a.fr.k(0,m)
if(t==null){j=a.a
t=new A.eO(j,m)
t.dl(j,m)
t.c=l
t.d="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
t.e=t.cf(l,35633)
t.f=t.cf(t.d,35632)
i=j.createProgram()
t.r=i
j.attachShader(i,t.e)
j.attachShader(t.r,t.f)
j.linkProgram(t.r)
if(!j.getProgramParameter(t.r,35714)){s=j.getProgramInfoLog(t.r)
j.deleteProgram(t.r)
H.B(P.z("Failed to link shader: "+H.f(s)))}t.eU()
t.eW()
t.z=t.x.k(0,"posAttr")
t.Q=t.x.k(0,"normAttr")
t.ch=t.x.k(0,"clrAttr")
t.cx=t.x.k(0,"binmAttr")
t.cy=H.a_(t.y.k(0,"lightVec"),"$icS")
t.db=H.a_(t.y.k(0,"ambientClr"),"$ibO")
t.dx=H.a_(t.y.k(0,"diffuseClr"),"$ibO")
t.dy=H.a_(t.y.k(0,"weightScalar"),"$icR")
t.fr=H.a_(t.y.k(0,"viewMat"),"$ibf")
t.fx=H.a_(t.y.k(0,"viewObjMatrix"),"$ibf")
t.fy=H.a_(t.y.k(0,"projViewObjMatrix"),"$ibf")
if(a.fr.b2(0,m))H.B(P.z('Shader cache already contains a shader by the name "Inspection".'))
a.fr.u(0,m,t)}u.a=t}if(n.e==null){n.d.a7()
j=n.d
i=j.e
if(i!=null)++i.d
j.d.bE()
j.a.bE()
j=j.e
if(j!=null)j.ag(0)
j=n.d
i=j.e
if(i!=null)++i.d
j.a.fo()
j=j.e
if(j!=null)j.ag(0)
j=new Z.cb()
j.a=new H.aa([P.p,Z.ca])
n.e=j}j=u.a
i=a.a
i.useProgram(j.r)
j.x.fA()
r=u.r2
q=j.dy
q.a.uniform1f(q.d,r)
r=u.b
q=j.cy
q.toString
p=r.a
o=r.b
r=r.c
q.a.uniform3f(q.d,p,o,r)
r=a.db
r=r.gaf(r)
o=j.fr
o.toString
o.bf(r.bY(0,!0))
r=a.cx
if(r==null){r=a.db
r=r.gaf(r)
q=a.dx
q=a.cx=r.q(0,q.gaf(q))
r=q}q=j.fx
q.toString
q.bf(r.bY(0,!0))
r=a.ch
if(r==null){r=a.z
if(r==null){r=a.cy
r=r.gaf(r)
q=a.db
q=a.z=r.q(0,q.gaf(q))
r=q}q=a.dx
q=a.ch=r.q(0,q.gaf(q))
r=q}j=j.fy
j.toString
j.bf(r.bY(0,!0))
j=n.e
if(j instanceof Z.cb){i.blendFunc(1,1)
if(n.c==null){i.disable(k)
i.enable(3042)
i.blendFunc(1,1)
if(u.k3)u.cm(a,j,n.d,"Axis",u.gc9(),u.z,u.y)
if(u.k4)u.cm(a,j,n.d,"AABB",u.gc7(),u.z,u.y)
i.enable(k)
i.blendFunc(770,771)}else{i.enable(k)
i.enable(3042)
i.blendFunc(770,771)
if(u.Q)u.Z(a,j,n.c,"shapeFill",u.geX(),u.d,u.c)
if(u.id)u.Z(a,j,n.c,"colorFill",u.gdK(),u.x,u.r)
if(u.k1)u.Z(a,j,n.c,"txt2DColor",u.gf7(),u.x,u.r)
if(u.k2)u.Z(a,j,n.c,"weight",u.gfd(),u.x,u.r)
if(u.r1)u.Z(a,j,n.c,"bend1",u.gdE(),u.x,u.r)
i.disable(k)
i.blendFunc(1,1)
if(u.cx)u.Z(a,j,n.c,"vertices",u.gfb(),u.f,u.e)
if(u.fr)u.Z(a,j,n.c,"faceCenters",u.gdS(),u.f,u.e)
if(u.ch)u.Z(a,j,n.c,"wireFrame",u.gff(),u.f,u.e)
if(u.cy)u.Z(a,j,n.c,"normals",u.ge6(),u.f,u.e)
if(u.db)u.Z(a,j,n.c,"binormals",u.gdG(),u.f,u.e)
if(u.dx)u.Z(a,j,n.c,"tangentals",u.gf_(),u.f,u.e)
if(u.dy)u.Z(a,j,n.c,"textureCube",u.gf9(),u.f,u.e)
if(u.fx)u.Z(a,j,n.c,"faceNormals",u.gdU(),u.f,u.e)
if(u.fy)u.Z(a,j,n.c,"faceBinormals",u.gdQ(),u.x,u.r)
if(u.go)u.Z(a,j,n.c,"faceTangentals",u.gdW(),u.x,u.r)
if(u.k3)u.Z(a,j,n.c,"Axis",u.gc9(),u.z,u.y)
if(u.k4)u.Z(a,j,n.c,"AABB",u.gc7(),u.z,u.y)
i.enable(k)
i.blendFunc(770,771)}}else n.e=null
j=u.a
j.toString
i.useProgram(null)
j.x.fz()}for(j=n.y.a,j=new J.a8(j,j.length);j.E();)j.d.aD(a)
a.d_()
a.dx.bS()},
am:function(a){var u=this.z
if(u!=null)u.K(a)},
R:function(){return this.am(null)},
cX:function(a){this.e=null
this.am(a)},
fW:function(){return this.cX(null)},
cV:function(a){this.am(a)},
fV:function(){return this.cV(null)},
cT:function(a){this.am(a)},
fS:function(){return this.cT(null)},
fR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcS(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.R()},
fU:function(a,b){var u,t
for(u=b.ga_(b),t=this.gcS();u.E();)u.gM(u).gC().F(0,t)
this.R()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fY.prototype={
dj:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a4(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
u=new O.bD()
t=[V.bC]
u.a=H.d([],t)
u.gC().i(0,new E.fZ(s))
s.cy=u
u=new O.bD()
u.a=H.d([],t)
u.gC().i(0,new E.h_(s))
s.db=u
u=new O.bD()
u.a=H.d([],t)
u.gC().i(0,new E.h0(s))
s.dx=u
u=H.d([],[O.cJ])
s.dy=u
u.push(null)
s.fr=new H.aa([P.p,A.cF])},
d1:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gal(u):a)},
d_:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fZ.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h_.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.z=null}}
E.h0.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cK.prototype={
c5:function(a){this.d3()},
c4:function(){return this.c5(null)},
gfJ:function(){var u,t=this,s=Date.now(),r=C.c.aw(P.l4(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a4(s,!1)
return u/r},
cn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.h(r)
u=C.d.b4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.b4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lt(C.m,s.gh7())}},
d3:function(){if(!this.ch){this.ch=!0
var u=window
C.w.dP(u)
C.w.eS(u,W.lS(new E.hq(this),P.a7))}},
h5:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a4(r,!1)
s.y=P.l4(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.ap()
r=s.db
C.b.sj(r.a,0)
r.ap()
r=s.dx
C.b.sj(r.a,0)
r.ap()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.aD(p.e)}}catch(q){u=H.b_(q)
t=H.kM(q)
P.kP("Error: "+H.f(u))
P.kP("Stack: "+H.f(t))
throw H.c(u)}}}
E.hq.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.h5()}}}
Z.d_.prototype={}
Z.c9.prototype={
bC:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b_(s)
t=P.z('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.ib.prototype={}
Z.ca.prototype={
b3:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bC:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bC(a)},
hd:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aD:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
cY:function(a){this.bC(a)
this.aD(a)
this.hd(a)},
h:function(a){var u,t,s,r,q=[P.p],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.D(p,", ")+"\nAttrs:   "+C.b.D(r,", ")}}
Z.cb.prototype={}
Z.b8.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bL(this.c))+"'")+"]"}}
Z.bQ.prototype={
gc0:function(a){var u=this.a,t=(u&$.aK().a)!==0?3:0
if((u&$.aJ().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.c6().a)!==0)t+=4
if((u&$.bq().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
fl:function(a){var u,t=$.aK(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.mo()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bQ))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.p]),t=this.a
if((t&$.aK().a)!==0)u.push("Pos")
if((t&$.aJ().a)!==0)u.push("Norm")
if((t&$.aI().a)!==0)u.push("Binm")
if((t&$.bo().a)!==0)u.push("Txt2D")
if((t&$.bp().a)!==0)u.push("TxtCube")
if((t&$.b0().a)!==0)u.push("Clr3")
if((t&$.c6().a)!==0)u.push("Clr4")
if((t&$.bq().a)!==0)u.push("Weight")
if((t&$.bn().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.D(u,"|")}}
D.ee.prototype={}
D.bv.prototype={
i:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
F:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.cF(s,b)
if(s===!0){s=t.a
u=(s&&C.b).F(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.cF(s,b)
if(s===!0){s=t.b
u=(s&&C.b).F(s,b)||u}return u},
K:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.t(P.la(u,!0,{func:1,ret:-1,args:[D.X]}),new D.eC(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.X]}])
C.b.t(u,new D.eD(q))}return!0},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.eC.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eD.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.cn.prototype={}
D.co.prototype={}
D.q.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cc.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cc))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cs.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.fk.prototype={
h1:function(a){this.c=a.b
this.d.i(0,a.a)
return!1},
fY:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}}
X.cu.prototype={}
X.ft.prototype={
aH:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=o.p(0,new V.O(n*m,u*t))
t=q.a.gax()
r=new X.aw(a,V.am(),q.x,t,s)
r.b=!0
q.z=new P.a4(p,!1)
q.x=s
return r},
bR:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dd()
if(typeof u!=="number")return u.bb()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aH(a,b))
return!0},
h2:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gax()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.bF(new V.E(s*r,q*p),u,t)
t.b=!0
n.K(t)
return!0},
es:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cu(c,r.a.gax(),b)
s.b=!0
t.K(s)
r.y=new P.a4(u,!1)
r.x=V.am()}}
X.ab.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ab))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aw.prototype={}
X.fG.prototype={
bk:function(a,b,c){var u=this,t=new P.a4(Date.now(),!1),s=u.a.gax(),r=new X.aw(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bk(a,b,!0))
return!0},
aR:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dd()
if(typeof t!=="number")return t.bb()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bk(a,b,!0))
return!0},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bk(a,b,!1))
return!0},
h3:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gax()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bF(new V.E(t*s,r*q),u,b)
u.b=!0
o.K(u)
return!0},
gcG:function(){var u=this.b
return u==null?this.b=D.L():u},
gd7:function(){var u=this.c
return u==null?this.c=D.L():u},
gcR:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.bF.prototype={}
X.fT.prototype={}
X.cO.prototype={}
X.ht.prototype={
aH:function(a,b){var u=this,t=new P.a4(Date.now(),!1),s=a.length>0?a[0]:V.am(),r=u.a.gax(),q=new X.cO(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h0:function(a){var u=this.b
if(u==null)return!1
u.K(this.aH(a,!0))
return!0},
fZ:function(a){var u=this.c
if(u==null)return!1
u.K(this.aH(a,!0))
return!0},
h_:function(a){var u=this.d
if(u==null)return!1
u.K(this.aH(a,!1))
return!0}}
X.cW.prototype={
gax:function(){var u=this.a,t=C.l.gcE(u).c
t.toString
u=C.l.gcE(u).d
u.toString
return V.ln(0,0,t,u)},
ce:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cs(u,new X.ab(t,a.altKey,a.shiftKey))},
au:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bz:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
aj:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.B()
u=t.top
if(typeof r!=="number")return r.B()
return new V.O(s-q,r-u)},
aI:function(a){return new V.E(a.movementX,a.movementY)},
bv:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.O])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=C.d.ab(r.pageX)
C.d.ab(r.pageY)
p=o.left
C.d.ab(r.pageX)
n.push(new V.O(q-p,C.d.ab(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cc(u,new X.ab(t,a.altKey,a.shiftKey))},
bm:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.B()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.B()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
en:function(a){this.f=!0},
eb:function(a){this.f=!1},
eh:function(a){if(this.f&&this.bm(a))a.preventDefault()},
er:function(a){var u
if(!this.f)return
u=this.ce(a)
this.b.h1(u)},
ep:function(a){var u
if(!this.f)return
u=this.ce(a)
this.b.fY(u)},
ev:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.au(a)
if(r.x){u=r.ai(a)
t=r.aI(a)
if(r.d.bR(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.aj(a)
if(r.c.bR(u,s))a.preventDefault()},
ez:function(a){var u,t,s,r=this
r.au(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aR(u,s))a.preventDefault()},
el:function(a){var u,t,s,r=this
if(!r.bm(a)){r.au(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aR(u,s))a.preventDefault()}},
ex:function(a){var u,t,s,r=this
r.au(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aQ(u,s))a.preventDefault()},
ej:function(a){var u,t,s,r=this
if(!r.bm(a)){r.au(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.aj(a)
if(r.c.aQ(u,s))a.preventDefault()}},
eB:function(a){var u,t,s=this
s.au(a)
u=new V.E((a&&C.v).gfv(a),C.v.gfw(a)).m(0,180)
if(s.x){if(s.d.h2(u))a.preventDefault()
return}if(s.r)return
t=s.aj(a)
if(s.c.h3(u,t))a.preventDefault()},
eD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.aj(s.y)
s.d.es(u,t,r)}},
eM:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bz(a)
u=t.bv(a)
if(t.e.h0(u))a.preventDefault()},
eI:function(a){var u
this.bz(a)
u=this.bv(a)
if(this.e.fZ(u))a.preventDefault()},
eK:function(a){var u
this.bz(a)
u=this.bv(a)
if(this.e.h_(u))a.preventDefault()}}
V.a3.prototype={
p:function(a,b){var u=this.a+b.a,t=this.b+b.b,s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.x.prototype={
bX:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.K])},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.eB.prototype={}
V.bC.prototype={
bY:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
q:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.h(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.h(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.h(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.q()
b=a5.z
if(typeof b!=="number")return b.q()
a=a5.Q
if(typeof a!=="number")return a.q()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.au(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.j7(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.j7(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.j7(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.j7(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.G("")}}
V.O.prototype={
p:function(a,b){return new V.O(this.a+b.a,this.b+b.b)},
B:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
m:function(a,b){if(Math.abs(b-0)<$.A().a)return V.am()
return new V.O(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.D.prototype={
p:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.h(r)
return new V.D(this.a+u,this.b+t,s+r)},
B:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
return new V.D(this.a-b.a,this.b-b.b,u-t)},
q:function(a,b){var u=this.c
if(typeof u!=="number")return u.q()
return new V.D(this.a*b,this.b*b,u*b)},
m:function(a,b){var u
if(Math.abs(b-0)<$.A().a)return V.lg()
u=this.c
if(typeof u!=="number")return u.m()
return new V.D(this.a/b,this.b/b,u/b)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.a0.prototype={
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.cE.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cE))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.bM.prototype={
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.bM))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+", "+V.w(u.e,3,0)+", "+V.w(u.f,3,0)+"]"}}
V.E.prototype={
aO:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.h(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.E(t*b,u*b)},
m:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lz
return u==null?$.lz=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.E(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.o.prototype={
aO:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.h(t)
return this.a*a.a+this.b*a.b+u*t},
bN:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.B()
if(typeof s!=="number")return H.h(s)
return new V.o(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aa:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.h(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.q()
s=a.a
r=this.a
return new V.o(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.h(r)
return new V.o(this.a+u,this.b+t,s+r)},
L:function(a){var u=this.c
if(typeof u!=="number")return u.L()
return new V.o(-this.a,-this.b,-u)},
q:function(a,b){var u=this.c
if(typeof u!=="number")return u.q()
return new V.o(this.a*b,this.b*b,u*b)},
m:function(a,b){var u
if(Math.abs(b-0)<$.A().a)return V.I()
u=this.c
if(typeof u!=="number")return u.m()
return new V.o(this.a/b,this.b/b,u/b)},
cP:function(){var u,t=$.A(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.h(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.o))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.aE.prototype={
aO:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
m:function(a,b){var u,t=this
if(Math.abs(b-0)<$.A().a){u=$.lG
return u==null?$.lG=new V.aE(0,0,0,0):u}return new V.aE(t.a/b,t.b/b,t.c/b,t.d/b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
U.ej.prototype={
bg:function(a){var u=V.oh(a,this.c,this.b)
return u},
gC:function(){var u=this.y
return u==null?this.y=D.L():u},
P:function(a){var u=this.y
if(u!=null)u.K(a)},
sbZ:function(a,b){},
sbO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bg(u)}s=new D.q("maximumLocation",s,t.b)
s.b=!0
t.P(s)}},
sbQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bg(u)}s=new D.q("minimumLocation",s,t.c)
s.b=!0
t.P(s)}},
sU:function(a,b){var u,t=this
b=t.bg(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.q("location",u,b)
u.b=!0
t.P(u)}},
sbP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.q("maximumVelocity",r,a)
r.b=!0
s.P(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.q("velocity",t,a)
t.b=!0
u.P(t)}},
sbJ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.q("dampening",u,a)
u.b=!0
this.P(u)}},
aF:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sU(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.ce.prototype={
gC:function(){var u=this.b
return u==null?this.b=D.L():u},
aG:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return J.u(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.by.prototype={
gC:function(){var u=this.e
return u==null?this.e=D.L():u},
P:function(a){var u=this.e
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
e9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gat(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.gC()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.cn()
u.b=!0
this.P(u)},
eG:function(a,b){var u,t
for(u=b.ga_(b),t=this.gat();u.E();)u.gM(u).gC().F(0,t)
u=new D.co()
u.b=!0
this.P(u)},
aG:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.T()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a8(r,r.length),u=null;r.E();){q=r.d
if(q!=null){t=q.aG(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.fz():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.by))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.u(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$al:function(){return[U.a5]},
$ab5:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.cX.prototype={
gC:function(){var u=this.cy
return u==null?this.cy=D.L():u},
P:function(a){var u=this.cy
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
aL:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcG().i(0,u.gbn())
u.a.c.gcR().i(0,u.gbp())
u.a.c.gd7().i(0,u.gbr())
return!0},
bo:function(a){var u=this
if(!J.u(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bq:function(a){var u,t,s,r,q,p,o,n=this
H.a_(a,"$iaw")
if(!n.y)return
if(n.x){u=a.d.B(0,a.y)
u=new V.E(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.B(0,a.y)
u=new V.E(t.a,t.b).q(0,2).m(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.h(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=new V.E(s.a,s.b).q(0,2).m(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.h(p)
o=n.z
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
n.b.sV(0)
t=t.B(0,a.z)
n.Q=new V.E(t.a,t.b).q(0,2).m(0,u.ga5())}n.a3()},
bs:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.h(s)
u.sV(t*10*s)
r.a3()}},
aG:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.T()
if(q<p){r.ch=p
u=b.y
r.b.aF(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.au(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia5:1}
U.cY.prototype={
gC:function(){var u=this.fx
return u==null?this.fx=D.L():u},
P:function(a){var u=this.fx
if(u!=null)u.K(a)},
a3:function(){return this.P(null)},
aL:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcG().i(0,s.gbn())
s.a.c.gcR().i(0,s.gbp())
s.a.c.gd7().i(0,s.gbr())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.i(0,s.ge_())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.i(0,s.ge1())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.i(0,s.gf5())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.i(0,s.gf3())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.i(0,s.gf1())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.E(u,t)},
bo:function(a){var u=this
H.a_(a,"$iaw")
if(!J.u(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bq:function(a){var u,t,s,r,q,p,o,n=this
H.a_(a,"$iaw")
if(!n.cx)return
if(n.ch){u=a.d.B(0,a.y)
u=new V.E(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.B(0,a.y)
u=n.ad(new V.E(t.a,t.b).q(0,2).m(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).m(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).m(0,u.ga5()))}n.a3()},
bs:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sV(-t*10*u)
r.a3()}},
e0:function(a){var u=this
if(H.a_(a,"$icu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e2:function(a){var u,t,s,r,q,p,o,n=this
H.a_(a,"$iaw")
if(!J.u(n.d,a.x.b))return
u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).m(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).m(0,u.ga5()))
n.a3()},
f6:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f4:function(a){var u,t,s,r,q,p,o,n=this
H.a_(a,"$icO")
if(!n.cx)return
if(n.ch){u=a.d.B(0,a.y)
u=new V.E(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.B(0,a.y)
u=n.ad(new V.E(t.a,t.b).q(0,2).m(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).m(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).m(0,u.ga5()))}n.a3()},
f2:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sV(-t*10*u)
r.a3()}},
aG:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.T()
if(q<p){r.dy=p
u=b.y
r.c.aF(0,u)
r.b.aF(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.au(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.au(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia5:1}
U.cZ.prototype={
gC:function(){var u=this.r
return u==null?this.r=D.L():u},
P:function(a){var u=this.r
if(u!=null)u.K(a)},
aL:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.ge4()
u.i(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).i(0,t)
return!0},
e5:function(a){var u,t,s,r,q=this
if(!J.u(q.b,q.a.b.c))return
H.a_(a,"$ibF")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.q("zoom",u,r)
u.b=!0
q.P(u)}},
aG:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.au(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia5:1}
M.ci.prototype={
ah:function(a){var u=this.y
if(u!=null)u.K(a)},
dq:function(){return this.ah(null)},
ed:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gac(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.cn()
u.b=!0
this.ah(u)},
ef:function(a,b){var u,t
for(u=b.ga_(b),t=this.gac();u.E();)u.gM(u).gC().F(0,t)
u=new D.co()
u.b=!0
this.ah(u)},
sd5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gC().F(0,t.gac())
u=t.d
t.d=a
if(a!=null)a.gC().i(0,t.gac())
s=new D.q("technique",u,t.d)
s.b=!0
t.ah(s)}},
gC:function(){var u=this.y
return u==null?this.y=D.L():u},
aD:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.d1(a1.d)
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
if(typeof s!=="number")return H.h(s)
o=C.d.ab(p*s)
p=q.b
if(typeof r!=="number")return H.h(r)
n=C.d.ab(p*r)
p=C.d.ab(q.c*s)
a2.c=p
q=C.d.ab(q.d*r)
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
i=V.au(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.d0(i)
t=$.ld
if(t==null){t=V.lg()
q=$.lC
if(q==null)q=$.lC=new V.o(0,1,0)
p=V.lF()
h=p.m(0,Math.sqrt(p.w(p)))
q=q.aa(h)
g=q.m(0,Math.sqrt(q.w(q)))
f=h.aa(g)
e=new V.o(t.a,t.b,t.c)
d=g.L(0).w(e)
c=f.L(0).w(e)
b=h.L(0).w(e)
t=V.au(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ld=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a2.db.d0(a)
for(u=a1.e.a,u=new J.a8(u,u.length);u.E();)u.d.aF(0,a2)
for(u=a1.e.a,u=new J.a8(u,u.length);u.E();)u.d.aD(a2)
a1.b.toString
a2.cy.bS()
a2.db.bS()
a1.c.toString
a2.d_()}}
A.c8.prototype={}
A.e4.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eO.prototype={}
A.cF.prototype={
dl:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cf:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.z("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
eU:function(){var u,t,s,r=this,q=H.d([],[A.c8]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c8(p,t.name,s))}r.x=new A.e4(q)},
eW:function(){var u,t,s,r=this,q=H.d([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fu(t.type,t.size,t.name,s))}r.y=new A.hG(q)},
as:function(a,b,c){var u=this.a
if(a===1)return new A.hA(u,b,c)
else return A.kx(u,this.r,b,a,c)},
dM:function(a,b,c){var u=this.a
if(a===1)return new A.hJ(u,b,c)
else return A.kx(u,this.r,b,a,c)},
dN:function(a,b,c){var u=this.a
if(a===1)return new A.hK(u,b,c)
else return A.kx(u,this.r,b,a,c)},
b_:function(a,b){return new P.d8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.as(b,c,d)
case 5121:return u.as(b,c,d)
case 5122:return u.as(b,c,d)
case 5123:return u.as(b,c,d)
case 5124:return u.as(b,c,d)
case 5125:return u.as(b,c,d)
case 5126:return new A.cR(u.a,c,d)
case 35664:return new A.hC(u.a,c,d)
case 35665:return new A.cS(u.a,c,d)
case 35666:return new A.bO(u.a,c,d)
case 35667:return new A.hD(u.a,c,d)
case 35668:return new A.hE(u.a,c,d)
case 35669:return new A.hF(u.a,c,d)
case 35674:return new A.hH(u.a,c,d)
case 35675:return new A.hI(u.a,c,d)
case 35676:return new A.bf(u.a,c,d)
case 35678:return u.dM(b,c,d)
case 35680:return u.dN(b,c,d)
case 35670:throw H.c(u.b_("BOOL",c))
case 35671:throw H.c(u.b_("BOOL_VEC2",c))
case 35672:throw H.c(u.b_("BOOL_VEC3",c))
case 35673:throw H.c(u.b_("BOOL_VEC4",c))
default:throw H.c(P.z("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.cQ.prototype={}
A.hG.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hA.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hB.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.cR.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.cS.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bO.prototype={
aW:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.hI.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bf.prototype={
bf:function(a){var u=new Float32Array(H.iW(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.hJ.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.hK.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iQ.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bN(s.b,b).bN(s.d.bN(s.c,b),c)
a.sU(0,new V.D(r.a,r.b,r.c))
a.saS(r.m(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
a.sbB(new V.a0(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.j5.prototype={
$1:function(a){return 1}}
F.j_.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.j1.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.h(p)
s=-s*p
u=r*p
a.sU(0,new V.D(s,u,q))
u=new V.o(s,u,q)
a.saS(u.m(0,Math.sqrt(u.w(u))))
a.sbB(new V.a0(1-c,2+c,-1,-1))}}
F.j2.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.j3.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jj.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.o(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.m(0,Math.sqrt(r.w(r)))
a.sU(0,new V.D(s.a,s.b,s.c))}}
F.kd.prototype={
$2:function(a,b){return 0}}
F.ke.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.h(s)
u=a.f
t=new V.o(u.a,u.b,u.c)
s=t.m(0,Math.sqrt(t.w(t))).q(0,this.b+s)
a.sU(0,new V.D(s.a,s.b,s.c))}}
F.kg.prototype={
$1:function(a){return new V.D(Math.cos(a),Math.sin(a),0)}}
F.ji.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.D(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.j0.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.kT(m.$1(n),l)
l=J.kT(m.$1(n+3.141592653589793/o.c),l).B(0,k)
l=new V.o(l.a,l.b,l.c)
u=l.m(0,Math.sqrt(l.w(l)))
t=V.kA()
if(!J.u(u,t)){m=$.lD
if(m==null){m=new V.o(0,0,1)
$.lD=m
t=m}else t=m}m=u.aa(t)
s=m.m(0,Math.sqrt(m.w(m)))
m=s.aa(u)
t=m.m(0,Math.sqrt(m.w(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.q(0,m*l)
l=s.q(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.B()
if(typeof p!=="number")return H.h(p)
a.sU(0,k.p(0,new V.D(m.a-l.a,m.b-l.b,q-p)))}}
F.jb.prototype={
$2:function(a,b){return 0}}
F.jc.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sU(0,new V.D(s,r,this.a.a.$2(b,c)))
u=new V.o(s,r,1)
a.saS(u.m(0,Math.sqrt(u.w(u))))
u=1-b
t=1-c
a.sbB(new V.a0(b*c,2+u*c,4+b*t,6+u*t))}}
F.ar.prototype={
aM:function(){var u=this
if(!u.gaN()){C.b.F(u.a.a.d.b,u)
u.a.a.R()}u.bw()
u.bx()
u.eP()},
aJ:function(a){this.a=a
a.d.b.push(this)},
aK:function(a){this.b=a
a.d.c.push(this)},
co:function(a){this.c=a
a.d.d.push(this)},
bw:function(){var u=this.a
if(u!=null){C.b.F(u.d.b,this)
this.a=null}},
bx:function(){var u=this.b
if(u!=null){C.b.F(u.d.c,this)
this.b=null}},
eP:function(){var u=this.c
if(u!=null){C.b.F(u.d.d,this)
this.c=null}},
gaN:function(){return this.a==null||this.b==null||this.c==null},
dB:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.I()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.cP())return
return s.m(0,Math.sqrt(s.w(s)))},
dJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.B(0,q)
r=new V.o(r.a,r.b,r.c)
s=r.m(0,Math.sqrt(r.w(r)))
r=t.B(0,q)
r=new V.o(r.a,r.b,r.c)
r=s.aa(r.m(0,Math.sqrt(r.w(r))))
return r.m(0,Math.sqrt(r.w(r)))},
bF:function(){var u,t=this
if(t.d!=null)return!0
u=t.dB()
if(u==null){u=t.dJ()
if(u==null)return!1}t.d=u
t.a.a.R()
return!0},
dA:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.I()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.cP())return
return s.m(0,Math.sqrt(s.w(s)))},
dI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.B(0,g)
l=new V.o(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.B(0,g).q(0,p).p(0,g).B(0,j)
l=new V.o(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.m(0,Math.sqrt(l.w(l)))
l=o.aa(q)
l=l.m(0,Math.sqrt(l.w(l))).aa(o)
q=l.m(0,Math.sqrt(l.w(l)))}return q},
bD:function(){var u,t=this
if(t.e!=null)return!0
u=t.dA()
if(u==null){u=t.dI()
if(u==null)return!1}t.e=u
t.a.a.R()
return!0},
ar:function(a,b){var u=b.a
if(u==null)throw H.c(P.z("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.z("May not replace a face's vertex with a vertex attached to a different shape."))},
gfq:function(a){var u=this
if(J.u(u.a,u.b))return!0
if(J.u(u.b,u.c))return!0
if(J.u(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t,s=this
if(s.gaN())return a+"disposed"
u=a+C.a.a9(J.a2(s.a.e),0)+", "+C.a.a9(J.a2(s.b.e),0)+", "+C.a.a9(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.eE.prototype={}
F.hc.prototype={
az:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.ba.prototype={
aM:function(){var u=this
if(!u.gaN()){C.b.F(u.a.a.c.b,u)
u.a.a.R()}u.bw()
u.bx()},
aJ:function(a){this.a=a
a.c.b.push(this)},
aK:function(a){this.b=a
a.c.c.push(this)},
bw:function(){var u=this.a
if(u!=null){C.b.F(u.c.b,this)
this.a=null}},
bx:function(){var u=this.b
if(u!=null){C.b.F(u.c.c,this)
this.b=null}},
gaN:function(){return this.a==null||this.b==null},
ar:function(a,b){var u=b.a
if(u==null)throw H.c(P.z("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.z("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){if(this.gaN())return a+"disposed"
return a+C.a.a9(J.a2(this.a.e),0)+", "+C.a.a9(J.a2(this.b.e),0)},
N:function(){return this.G("")}}
F.fm.prototype={}
F.hz.prototype={
az:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
return t==u.e}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
return t==u.e}else return!1}}}
F.bJ.prototype={
eT:function(a){this.a=a
a.b.b.push(this)},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.a9(J.a2(u.e),0)},
N:function(){return this.G("")}}
F.ac.prototype={
gC:function(){var u=this.e
return u==null?this.e=D.L():u},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.n()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){r=g[s]
h.a.i(0,r.X())}h.a.n()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.i(0,n)
F.kv(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.i(0,l)
p.a.i(0,k)
F.mM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.i(0,l)
o.a.i(0,k)
o.a.i(0,i)
F.bw(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
a7:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a7()||!1
if(!t.a.a7())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
fp:function(){var u,t,s,r,q,p,o,n,m=this.cD(),l=new V.o(m.d,m.e,m.f),k=Math.sqrt(l.w(l))
if(k<=0)k=1
l=m.a
u=m.b
t=m.c
s=new F.fV()
s.a=1/k
s.b=new V.D(l,u,t)
for(r=this.a.c.length-1;r>=0;--r){l=this.a.c
if(r>=l.length)return H.b(l,r)
q=l[r]
l=s.b
u=q.f
p=l.a-u.a
o=l.b-u.b
l=l.c
u=u.c
if(typeof l!=="number")return l.B()
if(typeof u!=="number")return H.h(u)
n=l-u
u=Math.sqrt(p*p+o*o+n*n)*s.a
if(q.ch!==u){q.ch=u
l=q.a
if(l!=null){l=l.e
if(l!=null)l.K(null)}}}},
cD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.lq
return i==null?$.lq=V.lp(0,0,0,0,0,0):i}i=i[0].f
u=V.lp(i.a,i.b,i.c,0,0,0)
for(t=h-1,i=this.a;t>=1;--t){s=i.c
if(t>=s.length)return H.b(s,t)
s=s[t].f
r=s.a
q=s.b
s=s.c
p=u.d
o=u.a
if(r<o)p+=o-r
else{if(r>o+p)p=r-o
r=o}n=u.e
m=u.b
if(q<m)n+=m-q
else{if(q>m+n)n=q-m
q=m}l=u.f
k=u.c
if(typeof s!=="number")return s.T()
if(typeof k!=="number")return H.h(k)
if(s<k){l+=k-s
j=s}else{if(s>k+l)l=s-k
j=k}u=new V.bM(r,q,j,p,n,l)}return u},
fD:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
if(b.az(0,a,s))return s}return},
eR:function(a,b){var u,t,s,r,q,p
this.a.i(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.B(P.z("May not replace a face's vertex when the point has been disposed."))
if(J.u(q,s)){r.ar(s,a)
q=r.a
if(q!=null){C.b.F(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.u(r.b,s)){r.ar(s,a)
q=r.b
if(q!=null){C.b.F(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.u(r.c,s)){r.ar(s,a)
q=r.c
if(q!=null){C.b.F(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null)H.B(P.z("May not replace a line's vertex when the point has been disposed."))
if(J.u(q,s)){r.ar(s,a)
q=r.a
if(q!=null){C.b.F(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.u(r.b,s)){r.ar(s,a)
q=r.b
if(q!=null){C.b.F(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.B(P.z("May not replace a point's vertex when the point has been disposed."))
if(J.u(q,s)){if(a.a==null)H.B(P.z("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.F(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.K(null)}}this.a.F(0,s)}},
cQ:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.ja(n,0)])
for(n=[F.aF];u.length!==0;){t=C.b.gfF(u)
C.b.d2(u,0)
if(t!=null){s=H.d([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.az(0,t,q)){s.push(q)
C.b.d2(u,r)}}if(s.length>1){p=b.aA(s)
if(p!=null){o.eR(p,s)
u.push(p)}}}}o.a.n()
o.c.b8()
o.d.b8()
o.b.h4()
o.c.bU(new F.hz())
o.d.bU(new F.hc())
n=o.e
if(n!=null)n.ag(0)},
b1:function(){this.cQ(new F.bP(),new F.fM())},
fn:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962,a0=b.a.c.length,a1=a4.a,a2=(a1&$.aK().a)!==0?1:0
if((a1&$.aJ().a)!==0)++a2
if((a1&$.aI().a)!==0)++a2
if((a1&$.bo().a)!==0)++a2
if((a1&$.bp().a)!==0)++a2
if((a1&$.b0().a)!==0)++a2
if((a1&$.c6().a)!==0)++a2
if((a1&$.bq().a)!==0)++a2
if((a1&$.bn().a)!==0)++a2
u=a4.gc0(a4)
t=u*4
a1=new Array(a0*u)
a1.fixed$length=Array
s=H.d(a1,[P.K])
a1=new Array(a2)
a1.fixed$length=Array
r=H.d(a1,[Z.c9])
for(a1=s.length,q=r.length,p=0,o=0;o<a2;++o){n=a4.fl(o)
m=n.gc0(n)
if(o>=q)return H.b(r,o)
r[o]=new Z.c9(n,m,p*4,t)
for(l=0;l<a0;++l){k=b.a.c
if(l>=k.length)return H.b(k,l)
j=k[l].fO(n)
i=p+l*u
for(k=j.length,h=0;h<k;++h){g=j[h]
if(i<0||i>=a1)return H.b(s,i)
s[i]=g;++i}}p+=m}a1=a3.a
f=a1.createBuffer()
a1.bindBuffer(a,f)
a1.bufferData(a,new Float32Array(H.iW(s)),35044)
a1.bindBuffer(a,null)
e=new Z.ca(new Z.d_(a,f),r)
e.b=H.d([],[Z.b8])
if(b.b.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.b.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)}c=Z.kB(a1,34963,d)
e.b.push(new Z.b8(0,d.length,c))}if(b.c.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.c.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)
q=b.c.b
if(o>=q.length)return H.b(q,o)
q=q[o].b
q.a.a.n()
d.push(q.e)}c=Z.kB(a1,34963,d)
e.b.push(new Z.b8(1,d.length,c))}if(b.d.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.d.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.b(q,o)
q=q[o].b
q.a.a.n()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.b(q,o)
q=q[o].c
q.a.a.n()
d.push(q.e)}c=Z.kB(a1,34963,d)
e.b.push(new Z.b8(4,d.length,c))}return e},
h:function(a){var u=this,t="   ",s=H.d([],[P.p])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.D(s,"\n")},
R:function(){var u=this.e
if(u!=null)u.K(null)}}
F.h6.prototype={
a0:function(a,b,c,d){var u,t=this.a
t.a.i(0,b)
t.a.i(0,c)
t.a.i(0,d)
u=new F.ar()
t=b.a
if(t==null)H.B(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.B(P.z("May not create a face with vertices attached to different shapes."))
u.aJ(b)
u.aK(c)
u.co(d)
u.a.a.d.b.push(u)
u.a.a.R()
return u},
cw:function(a){var u,t,s,r,q,p=H.d([],[F.ar]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.i(0,u)
t.a.i(0,r)
t.a.i(0,q)
p.push(F.bw(u,r,q))}}return p},
fj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.ar])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.i(0,m)
u.a.i(0,l)
u.a.i(0,j)
h.push(F.bw(m,l,j))
u.a.i(0,m)
u.a.i(0,j)
u.a.i(0,i)
h.push(F.bw(m,j,i))}else{n.i(0,l)
u.a.i(0,j)
u.a.i(0,i)
h.push(F.bw(l,j,i))
u.a.i(0,l)
u.a.i(0,i)
u.a.i(0,m)
h.push(F.bw(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
bU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.az(0,p,n)){p.aM()
break}}}}},
b8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfq(s)
if(t)s.aM()}},
a7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bF())s=!1
return s},
bE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bD())s=!1
return s},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(a))
return C.b.D(r,"\n")},
N:function(){return this.G("")}}
F.h7.prototype={
l:function(a,b,c){var u,t=this.a
t.a.i(0,b)
t.a.i(0,c)
t=new F.ba()
if(b==null)H.B(P.z("May not create a line with a null start vertex."))
if(c==null)H.B(P.z("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.B(P.z("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.B(P.z("May not create a line with vertices attached to different shapes."))
t.aJ(b)
t.aK(c)
t.a.a.c.b.push(t)
t.a.a.R()
return t},
gj:function(a){return this.b.length},
bU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.az(0,p,n)){p.aM()
break}}}}},
b8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.u(s.a,s.b)
if(t)s.aM()}},
h:function(a){return this.N()},
G:function(a){var u,t,s=H.d([],[P.p]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.D(s,"\n")},
N:function(){return this.G("")}}
F.h8.prototype={
gj:function(a){return this.b.length},
h4:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.b.F(s.b.b,t)
t.a=null}}}},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(a))
return C.b.D(r,"\n")},
N:function(){return this.G("")}}
F.aF.prototype={
bI:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ad(u.cx,r,o,t,s,q,p,a,n)},
X:function(){return this.bI(null)},
sU:function(a,b){var u
if(!J.u(this.f,b)){this.f=b
u=this.a
if(u!=null)u.R()}},
saB:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.w(a)))
if(!J.u(this.r,a)){this.r=a
u=this.a
if(u!=null)u.R()}},
sS:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.w(a)))
if(!J.u(this.x,a)){this.x=a
u=this.a
if(u!=null)u.R()}},
sbW:function(a){var u
if(!J.u(this.y,a)){this.y=a
u=this.a
if(u!=null)u.R()}},
saS:function(a){var u
if(!J.u(this.z,a)){this.z=a
u=this.a
if(u!=null)u.R()}},
sa1:function(a,b){var u
if(!J.u(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.R()}},
sda:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.R()}},
sbB:function(a){var u
if(!J.u(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.R()}},
fO:function(a){var u,t,s=this
if(a.A(0,$.aK())){u=s.f
t=[P.K]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.aJ())){u=s.r
t=[P.K]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.aI())){u=s.x
t=[P.K]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bo())){u=s.y
t=[P.K]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bp())){u=s.z
t=[P.K]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.b0())){u=s.Q
t=[P.K]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.c6())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.K])
else return u.bX(0)}else if(a.A(0,$.bq()))return H.d([s.ch],[P.K])
else if(a.A(0,$.bn())){u=s.cx
t=[P.K]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.K])},
bF:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.I()
t.d.t(0,new F.i9(s))
s=s.a
t.r=s.m(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.R()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bD:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.I()
t.d.t(0,new F.i8(s))
s=s.a
t.x=s.m(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.R()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
cI:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.n()
t=t.e
a.a.a.n()
if(t==a.e)return s}return},
fG:function(a){var u=this.cI(a)
if(u!=null)return u
return a.cI(this)},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.p])
q.push(C.a.a9(J.a2(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.w(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.D(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.i9.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.i8.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.hZ.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
i:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.z("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.R()
return!0},
cz:function(a,b,c,d,e,f,g){var u=F.ad(a,null,b,c,d,e,f,g,0)
this.i(0,u)
return u},
fk:function(a,b,c,d,e,f){return this.cz(a,b,c,d,e,f,null)},
b0:function(a,b,c,d,e,f){return this.cz(a,b,c,null,d,e,f)},
bA:function(a,b,c){var u=null,t=F.ad(u,u,u,new V.D(a,b,c),u,u,u,u,0)
this.i(0,t)
return t},
gj:function(a){return this.c.length},
F:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.z("May not remove a vertex without first making it empty."))
b.a=null
C.b.F(this.c,b)
u.R()
return this.b=!0},
a7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bF()
return!0},
bE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bD()
return!0},
fo:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.q()
n=q.m(0,Math.sqrt(p*p+o*o+n*n))
if(!J.u(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
h:function(a){return this.N()},
G:function(a){var u,t,s,r
this.n()
u=H.d([],[P.p])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)u.push(t[r].G(a))
return C.b.D(u,"\n")},
N:function(){return this.G("")}}
F.i_.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
t:function(a,b){var u=this
C.b.t(u.b,b)
C.b.t(u.c,new F.i0(u,b))
C.b.t(u.d,new F.i1(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.D(r,"\n")}}
F.i0.prototype={
$1:function(a){if(!J.u(a.a,this.a))this.b.$1(a)}}
F.i1.prototype={
$1:function(a){var u=this.a
if(!J.u(a.a,u)&&!J.u(a.b,u))this.b.$1(a)}}
F.i3.prototype={
gj:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.D(r,"\n")}}
F.i4.prototype={}
F.bP.prototype={
az:function(a,b,c){return J.u(b.f,c.f)}}
F.i5.prototype={}
F.fV.prototype={}
F.i6.prototype={}
F.i2.prototype={
aA:function(a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
for(u=a7.length,t=a6,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a7[h]
f=g.f
if(f!=null){if(o==null)o=f
else{e=o.a
d=f.a
c=o.b
b=f.b
a=o.c
a0=f.c
if(typeof a!=="number")return a.p()
if(typeof a0!=="number")return H.h(a0)
o=new V.D(e+d,c+b,a+a0)}++n}a1=g.r
if(a1!=null)if(p==null)p=a1
else{e=p.a
d=a1.a
c=p.b
b=a1.b
a=p.c
a0=a1.c
if(typeof a!=="number")return a.p()
if(typeof a0!=="number")return H.h(a0)
p=new V.o(e+d,c+b,a+a0)}a2=g.x
if(a2!=null)if(q==null)q=a2
else{e=q.a
d=a2.a
c=q.b
b=a2.b
a=q.c
a0=a2.c
if(typeof a!=="number")return a.p()
if(typeof a0!=="number")return H.h(a0)
q=new V.o(e+d,c+b,a+a0)}a3=g.y
if(a3!=null){s=s==null?a3:new V.O(s.a+a3.a,s.b+a3.b);++l}a4=g.z
if(a4!=null){if(t==null)t=a4
else{e=t.a
d=a4.a
c=t.b
b=a4.b
a=t.c
a0=a4.c
if(typeof a!=="number")return a.p()
if(typeof a0!=="number")return H.h(a0)
t=new V.o(e+d,c+b,a+a0)}++k}e=g.Q
if(e!=null){d=e.a
c=e.b
b=e.c
e=e.d
if(r==null){e=[d,c,b,e]
r=new V.aE(e[0],e[1],e[2],e[3])}else{e=[d,c,b,e]
d=e[0]
c=e[1]
b=e[2]
e=e[3]
r=new V.aE(r.a+d,r.b+c,r.c+b,r.d+e)}++m}e=g.ch
if(typeof e!=="number")return H.h(e)
i+=e;++j}a5=F.ad(a6,a6,a6,a6,a6,a6,a6,a6,0)
if(n<=0||o==null)a5.sU(0,a6)
else a5.sU(0,o.m(0,n))
if(p==null)a5.saB(a6)
else a5.saB(p.m(0,Math.sqrt(p.w(p))))
if(q==null)a5.sS(a6)
else a5.sS(q.m(0,Math.sqrt(q.w(q))))
if(l<=0||s==null)a5.sbW(a6)
else a5.sbW(s.m(0,l))
if(k<=0||t==null)a5.saS(a6)
else a5.saS(t.m(0,k))
if(m<=0||r==null)a5.sa1(0,a6)
else{u=r.m(0,m)
u=[u.a,u.b,u.c,u.d]
e=u[0]
d=u[1]
c=u[2]
u=u[3]
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(c<0)c=0
else if(c>1)c=1
if(u<0)u=0
else if(u>1)u=1
a5.sa1(0,new V.x(e,d,c,u))}if(j<=0)a5.sda(0,0)
else a5.sda(0,i/j)
return a5}}
F.fM.prototype={
aA:function(a){var u,t,s,r,q,p,o,n,m=V.I()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=m.a
q=s.a
p=m.b
o=s.b
n=m.c
s=s.c
if(typeof n!=="number")return n.p()
if(typeof s!=="number")return H.h(s)
m=new V.o(r+q,p+o,n+s)}}m=m.m(0,Math.sqrt(m.w(m)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t)a[t].saB(m)
return}}
F.i7.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.D(r,"\n")}}
O.cm.prototype={
gC:function(){var u=this.rx
return u==null?this.rx=D.L():u},
Y:function(a){var u=this.rx
if(u!=null)u.K(a)},
sa4:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.A().a)){this.r2=a
u=new D.q("vectorScale",u,a)
u.b=!0
this.Y(u)}},
Z:function(a,b,c,d,e,f,g){var u,t=b.a.k(0,d)
if(t==null){t=this.ca(a,e.$1(c))
b.a.u(0,d,t)}u=this.a
u.db.aW(f)
u.dx.aW(g)
t.cY(a)},
cm:function(a,b,c,d,e,f,g){var u,t=b.a.k(0,d)
if(t==null){t=this.ca(a,e.$1(c))
b.a.u(0,d,t)}u=this.a
u.db.aW(f)
u.dx.aW(g)
t.cY(a)},
ca:function(a,b){var u=this,t=$.aK(),s=$.aJ(),r=b.fn(new Z.ib(a.a),new Z.bQ(t.a|s.a|$.aI().a|$.b0().a))
r.b3($.aK()).e=u.a.z.c
r.b3($.aJ()).e=u.a.Q.c
r.b3($.b0()).e=u.a.ch.c
r.b3($.aI()).e=u.a.cx.c
return r},
eY:function(a){var u=F.M()
C.b.t(a.a.c,new O.f1(u,new V.x(1,1,1,1)))
C.b.t(a.d.b,new O.f2(u))
return u},
cu:function(a,b){var u,t={}
t.a=b
u=F.M()
t.a=new V.x(0,0.7,1,1)
C.b.t(a.a.c,new O.fc(t,u))
t=new O.fb(u)
C.b.t(a.c.b,new O.fd(u,t))
C.b.t(a.d.b,new O.fe(u,t))
return u},
fg:function(a){return this.cu(a,null)},
fc:function(a){var u=F.M()
C.b.t(a.a.c,new O.f7(new V.x(1,1,1,1),u))
return u},
e7:function(a){var u=F.M()
C.b.t(a.a.c,new O.f0(new V.x(1,1,0.3,1),u))
return u},
dH:function(a){var u=F.M()
C.b.t(a.a.c,new O.eT(new V.x(1,0.3,0.3,1),u))
return u},
f0:function(a){var u=F.M()
C.b.t(a.a.c,new O.f3(new V.x(1,0.3,1,1),u))
return u},
fa:function(a){var u=F.M()
C.b.t(a.a.c,new O.f6(new V.x(1,0.3,0.3,1),u))
return u},
dT:function(a){var u=F.M()
C.b.t(a.d.b,new O.eX(new V.x(1,1,0.3,1),u))
return u},
dV:function(a){var u=F.M()
C.b.t(a.d.b,new O.eY(new V.x(1,1,0.3,1),u))
return u},
dR:function(a){var u=F.M()
C.b.t(a.d.b,new O.eW(new V.x(1,0.3,0.3,1),u))
return u},
dX:function(a){var u=F.M()
C.b.t(a.d.b,new O.eZ(new V.x(1,0.3,1,1),u))
return u},
dL:function(a){var u=F.M()
C.b.t(a.a.c,new O.eU(u))
C.b.t(a.d.b,new O.eV(u))
return u},
f8:function(a){var u=F.M()
C.b.t(a.a.c,new O.f4(u))
C.b.t(a.d.b,new O.f5(u))
return u},
fe:function(a){var u,t,s={},r=F.M(),q=a.a.c
if(q.length<1)return r
s.a=s.b=q[0].ch
C.b.t(q,new O.f8(s))
q=s.a
u=s.b
if(typeof q!=="number")return q.B()
if(typeof u!=="number")return H.h(u)
t=q-u
s.c=t
if(t<=0)s.c=1
C.b.t(a.a.c,new O.f9(s,r))
C.b.t(a.d.b,new O.fa(r))
return r},
e3:function(a){var u={}
u.a=0
C.b.t(a.a.c,new O.f_(u))
return C.d.b4((u.a+1.5)*0.5)},
aX:function(a,b){var u
if(a<0)return new V.a3(0,0,0)
else{u=Math.floor((a+0.5)*0.5)
return V.l2(u/b,a-u*2,1)}},
dF:function(a){var u=this.e3(a),t=F.M()
C.b.t(a.a.c,new O.eR(this,u,t))
C.b.t(a.d.b,new O.eS(t))
return t},
dC:function(a){return this.dD(a)},
dD:function(a){var u=F.M(),t=new O.eQ(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
du:function(a){return this.dv(a)},
dv:function(a){var u,t,s,r,q=a.cD(),p=F.M(),o=new O.eP(p),n=q.a,m=q.b,l=q.c,k=o.$3(n,m,l),j=n+q.d,i=o.$3(j,m,l),h=m+q.e,g=o.$3(j,h,l),f=o.$3(n,h,l),e=q.f
if(typeof l!=="number")return l.p()
e=l+e
u=o.$3(n,m,e)
t=o.$3(j,m,e)
s=o.$3(j,h,e)
r=o.$3(n,h,e)
p.c.l(0,k,i)
p.c.l(0,i,g)
p.c.l(0,g,f)
p.c.l(0,f,k)
p.c.l(0,u,t)
p.c.l(0,t,s)
p.c.l(0,s,r)
p.c.l(0,r,u)
p.c.l(0,k,u)
p.c.l(0,i,t)
p.c.l(0,g,s)
p.c.l(0,f,r)
return p}}
O.f1.prototype={
$1:function(a){var u=this.a.a,t=a.X()
t.sa1(0,this.b)
t.sS(V.I())
u.i(0,t)}}
O.f2.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a0(0,u,t,s)}}
O.fc.prototype={
$1:function(a){var u=this.b.a,t=a.X()
t.sa1(0,this.a.a)
t.sS(V.I())
u.i(0,t)}}
O.fb.prototype={
$2:function(a,b){if(a.fG(b)==null)this.a.c.l(0,a,b)}}
O.fd.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.n()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.n()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.fe.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.n()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.f7.prototype={
$1:function(a){var u,t=a.X()
t.sa1(0,this.a)
t.sS(V.I())
u=this.b
u.a.i(0,t)
u.b.a.a.i(0,t)
F.kv(t)}}
O.f0.prototype={
$1:function(a){var u,t,s=a.X()
s.sa1(0,this.a)
s.sS(V.I())
u=s.X()
u.sS(s.r)
t=this.b
t.a.i(0,s)
t.a.i(0,u)
t.c.l(0,s,u)}}
O.eT.prototype={
$1:function(a){var u,t,s=a.X()
s.sa1(0,this.a)
s.sS(V.I())
u=s.X()
u.sS(a.x)
t=this.b
t.a.i(0,s)
t.a.i(0,u)
t.c.l(0,s,u)}}
O.f3.prototype={
$1:function(a){var u,t,s=a.X()
s.sa1(0,this.a)
s.sS(V.I())
u=s.X()
u.sS(a.x.aa(a.r).L(0))
t=this.b
t.a.i(0,s)
t.a.i(0,u)
t.c.l(0,s,u)}}
O.f6.prototype={
$1:function(a){var u,t,s=a.X()
s.sa1(0,this.a)
s.sS(V.I())
u=s.X()
u.sS(a.z)
t=this.b
t.a.i(0,s)
t.a.i(0,u)
t.c.l(0,s,u)}}
O.eX.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).m(0,3),s=a.d,r=F.ad(u,V.I(),this.a,t,s,u,u,u,0)
s=this.b
s.a.i(0,r)
s.b.a.a.i(0,r)
F.kv(r)}}
O.eY.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).m(0,3),s=a.d,r=F.ad(u,V.I(),this.a,t,s,u,u,u,0),q=r.X()
q.sS(a.d)
s=this.b
s.a.i(0,r)
s.a.i(0,q)
s.c.l(0,r,q)}}
O.eW.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).m(0,3),s=a.d,r=F.ad(u,V.I(),this.a,t,s,u,u,u,0),q=r.X()
q.sS(a.e)
s=this.b
s.a.i(0,r)
s.a.i(0,q)
s.c.l(0,r,q)}}
O.eZ.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).m(0,3),s=a.d,r=F.ad(u,V.I(),this.a,t,s,u,u,u,0),q=r.X()
q.sS(a.e.aa(a.d).L(0))
s=this.b
s.a.i(0,r)
s.a.i(0,q)
s.c.l(0,r,q)}}
O.eU.prototype={
$1:function(a){var u=this.a.a,t=a.X()
t.sS(V.I())
u.i(0,t)}}
O.eV.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a0(0,u,t,s)}}
O.f4.prototype={
$1:function(a){var u,t,s=a.y,r=this.a.a,q=a.X(),p=s.a,o=s.b
if(p<0)p=0
else if(p>1)p=1
u=o<0
if(u)t=0
else t=o>1?1:o
if(u)o=0
else if(o>1)o=1
q.sa1(0,new V.x(p,t,o,1))
q.sS(V.I())
r.i(0,q)}}
O.f5.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a0(0,u,t,s)}}
O.f8.prototype={
$1:function(a){var u=this.a,t=u.b,s=a.ch
if(typeof t!=="number")return t.bc()
if(typeof s!=="number")return H.h(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.T()
if(t<s)u.a=s}}
O.f9.prototype={
$1:function(a){var u,t=a.ch,s=this.a,r=s.b
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.h(r)
u=V.l2((t-r)/s.c*5/6,1,1)
s=this.b.a
r=a.X()
r.sS(V.I())
r.sa1(0,V.l3(u))
s.i(0,r)}}
O.fa.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a0(0,u,t,s)}}
O.f_.prototype={
$1:function(a){var u,t,s=a.cx
if(s==null)s=V.li()
u=this.a
t=Math.max(u.a,s.a)
u.a=t
t=Math.max(t,s.b)
u.a=t
t=Math.max(t,s.c)
u.a=t
u.a=Math.max(t,s.d)}}
O.eR.prototype={
$1:function(a){var u,t,s,r=a.cx
if(r==null)r=V.li()
u=this.a
t=this.b
s=new V.a3(0,0,0).p(0,u.aX(r.a,t)).p(0,u.aX(r.b,t)).p(0,u.aX(r.c,t)).p(0,u.aX(r.d,t))
t=this.c.a
u=a.X()
u.sS(V.I())
u.sa1(0,V.l3(s))
t.i(0,u)}}
O.eS.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a0(0,u,t,s)}}
O.eQ.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.x(s,r,q,1)
s=this.a
u=s.a.bA(0,0,0)
u.sS(V.I())
u.saB(V.kA())
u.sa1(0,p)
t=s.a.bA(a,b,c)
t.sS(V.I())
t.saB(V.kA())
t.sa1(0,p)
s.c.l(0,u,t)}}
O.eP.prototype={
$3:function(a,b,c){var u=this.a.a.bA(a,b,c)
u.sS(V.I())
u.saB(new V.o(a,b,c))
return u}}
O.cJ.prototype={}
X.kl.prototype={}
X.eL.prototype={
gC:function(){var u=this.x
return u==null?this.x=D.L():u}}
X.cB.prototype={
gC:function(){var u=this.f
return u==null?this.f=D.L():u},
aq:function(a){var u=this.f
if(u!=null)u.K(a)},
dt:function(){return this.aq(null)},
saP:function(a){var u,t,s=this
if(!J.u(s.b,a)){u=s.b
if(u!=null)u.gC().F(0,s.gc6())
t=s.b
s.b=a
if(a!=null)a.gC().i(0,s.gc6())
u=new D.q("mover",t,s.b)
u.b=!0
s.aq(u)}}}
X.hm.prototype={}
V.ef.prototype={
a0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.cV().gaC().k(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.b(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.dZ(l.c).i(0,p)
n=W.l5("checkbox")
n.checked=s
W.S(n,"change",new V.eg(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.dZ(l.c).i(0,q.createElement("br"))
l.d.push(n)
if(r)l.ct(u,s)},
l:function(a,b,c){return this.a0(a,b,c,!1)},
ct:function(a,b){var u,t,s,r,q,p=this.a,o=P.cV().gaC().k(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.fX(o,a-u+1,"0")
t=a>0?C.a.v(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ao(o,u)
s=P.cV()
u=P.p
r=P.l9(s.gaC(),u,u)
r.u(0,p,t)
q=s.bV(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.dC([],[]).ba(""),"",u)}}
V.eg.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.ct(u.d,t.checked)}}
V.kc.prototype={
$1:function(a){var u=C.d.d6(this.a.gfJ(),2)
if(u!=="0.00")P.kP(u+" fps")}}
V.fW.prototype={
a0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.cV().gaC().k(0,H.f(u))
if(t==null)if(d){c.$0()
m.cs(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.dZ(m.c).i(0,q)
o=W.l5("radio")
o.checked=s
o.name=u
W.S(o,"change",new V.fX(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.dZ(m.c).i(0,r.createElement("br"))},
l:function(a,b,c){return this.a0(a,b,c,!1)},
cs:function(a){var u,t,s=P.cV(),r=P.p,q=P.l9(s.gaC(),r,r)
q.u(0,this.a,a)
u=s.bV(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dC([],[]).ba(""),"",t)}}
V.fX.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cs(u.d)}}}
V.h9.prototype={
dm:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.S(q,"scroll",new V.hb(o),!1)},
cA:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hc(C.b.fN(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.oc(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.iM(C.M,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.f(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
fh:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<3;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
eV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hs()
t=P.p
u.a=new H.aa([t,R.cH])
u.b=new H.aa([t,R.cN])
u.c=u.O(0,q)
t=u.O(0,q).D(0,p)
s=T.W(new H.P("*"))
t.a.push(s)
t.c=!0
t=u.O(0,p).D(0,p)
s=new T.ax()
r=[T.cv]
s.a=H.d([],r)
t.a.push(s)
t=T.W(new H.P("*"))
s.a.push(t)
t=u.O(0,p).D(0,"BoldEnd")
s=T.W(new H.P("*"))
t.a.push(s)
t.c=!0
t=u.O(0,q).D(0,o)
s=T.W(new H.P("_"))
t.a.push(s)
t.c=!0
t=u.O(0,o).D(0,o)
s=new T.ax()
s.a=H.d([],r)
t.a.push(s)
t=T.W(new H.P("_"))
s.a.push(t)
t=u.O(0,o).D(0,n)
s=T.W(new H.P("_"))
t.a.push(s)
t.c=!0
t=u.O(0,q).D(0,m)
s=T.W(new H.P("`"))
t.a.push(s)
t.c=!0
t=u.O(0,m).D(0,m)
s=new T.ax()
s.a=H.d([],r)
t.a.push(s)
t=T.W(new H.P("`"))
s.a.push(t)
t=u.O(0,m).D(0,"CodeEnd")
s=T.W(new H.P("`"))
t.a.push(s)
t.c=!0
t=u.O(0,q).D(0,l)
s=T.W(new H.P("["))
t.a.push(s)
t.c=!0
t=u.O(0,l).D(0,k)
s=T.W(new H.P("|"))
t.a.push(s)
s=u.O(0,l).D(0,j)
t=T.W(new H.P("]"))
s.a.push(t)
s.c=!0
s=u.O(0,l).D(0,l)
t=new T.ax()
t.a=H.d([],r)
s.a.push(t)
s=T.W(new H.P("|]"))
t.a.push(s)
s=u.O(0,k).D(0,j)
t=T.W(new H.P("]"))
s.a.push(t)
s.c=!0
s=u.O(0,k).D(0,k)
t=new T.ax()
t.a=H.d([],r)
s.a.push(t)
s=T.W(new H.P("|]"))
t.a.push(s)
u.O(0,q).D(0,i).a.push(new T.e0())
s=u.O(0,i).D(0,i)
t=new T.ax()
t.a=H.d([],r)
s.a.push(t)
s=T.W(new H.P("*_`["))
t.a.push(s)
s=u.O(0,"BoldEnd")
s.d=s.a.aU(p)
s=u.O(0,n)
s.d=s.a.aU(o)
s=u.O(0,"CodeEnd")
s.d=s.a.aU(m)
s=u.O(0,j)
s.d=s.a.aU("Link")
s=u.O(0,i)
s.d=s.a.aU(i)
this.b=u}}
V.hb.prototype={
$1:function(a){P.lt(C.m,new V.ha(this.a))}}
V.ha.prototype={
$0:function(){var u=C.d.ab(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
Z.jo.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.q("showFilled",!a,a)
u.b=!0
t.Y(u)}}}
Z.jp.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.q("showWireFrame",!a,a)
u.b=!0
t.Y(u)}}}
Z.jq.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.q("showVertices",!a,a)
u.b=!0
t.Y(u)}}}
Z.jB.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.q("showNormals",!a,a)
u.b=!0
t.Y(u)}}}
Z.jM.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.q("showBinormals",!a,a)
u.b=!0
t.Y(u)}}}
Z.jX.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.q("showTangentals",!a,a)
u.b=!0
t.Y(u)}}}
Z.k5.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.q("showFaceCenters",!a,a)
u.b=!0
t.Y(u)}}}
Z.k6.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.q("showFaceNormals",!a,a)
u.b=!0
t.Y(u)}}}
Z.k7.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.q("showFaceBinormals",!a,a)
u.b=!0
t.Y(u)}}}
Z.k8.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.q("showFaceTangentals",!a,a)
u.b=!0
t.Y(u)}}}
Z.k9.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.q("showColorFill",!a,a)
u.b=!0
t.Y(u)}}}
Z.jr.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.q("showTxt2DColor",!a,a)
u.b=!0
t.Y(u)}}}
Z.js.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.q("showTxtCube",!a,a)
u.b=!0
t.Y(u)}}}
Z.jt.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.q("showWeight",!a,a)
u.b=!0
t.Y(u)}}}
Z.ju.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.r1!==a){t.r1=a
u=new D.q("showBend",!a,a)
u.b=!0
t.Y(u)}}}
Z.jv.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.q("showAxis",!a,a)
u.b=!0
t.Y(u)}}}
Z.jw.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.q("showAABB",!a,a)
u.b=!0
t.Y(u)}}}
Z.ka.prototype={
$1:function(a){a.fp()
this.a.sc_(0,a)}}
Z.jx.prototype={
$0:function(){var u,t,s,r,q,p=null,o=F.M(),n=o.a,m=new V.o(-1,-1,1)
m=m.m(0,Math.sqrt(m.w(m)))
u=n.b0(new V.a0(1,2,4,6),new V.x(1,0,0,1),new V.D(-1,-1,0),new V.O(0,1),m,p)
n=o.a
m=new V.o(1,-1,1)
m=m.m(0,Math.sqrt(m.w(m)))
t=n.b0(new V.a0(0,3,4,6),new V.x(0,0,1,1),new V.D(1,-1,0),new V.O(1,1),m,p)
n=o.a
m=new V.o(1,1,1)
m=m.m(0,Math.sqrt(m.w(m)))
s=n.b0(new V.a0(0,2,5,6),new V.x(0,1,0,1),new V.D(1,1,0),new V.O(1,0),m,p)
n=o.a
m=V.am()
r=new V.o(-1,1,1)
r=r.m(0,Math.sqrt(r.w(r)))
q=n.b0(new V.a0(0,2,4,7),new V.x(1,1,0,1),new V.D(-1,1,0),m,r,p)
o.d.cw(H.d([u,t,s,q],[F.aF]))
o.a7()
this.a.$1(o)}}
Z.jy.prototype={
$0:function(){this.a.$1(F.iZ(1,null,null,1))}}
Z.jz.prototype={
$0:function(){this.a.$1(F.iZ(8,null,null,8))}}
Z.jA.prototype={
$0:function(){this.a.$1(F.iZ(15,null,new Z.jn(),15))}}
Z.jn.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.o(r.a,r.b,r.c)
u=r.m(0,Math.sqrt(r.w(r)))
r=a.f
s=u.q(0,t*0.1+s*0.1)
a.sU(0,r.p(0,new V.D(s.a,s.b,s.c)))}}
Z.jC.prototype={
$0:function(){this.a.$1(F.j4(-1,!1,0,null,8))}}
Z.jD.prototype={
$0:function(){this.a.$1(F.j4(-1,!1,0,null,30))}}
Z.jE.prototype={
$0:function(){this.a.$1(F.kK(!0,1,8,1))}}
Z.jF.prototype={
$0:function(){this.a.$1(F.kK(!0,8,16,1))}}
Z.jG.prototype={
$0:function(){this.a.$1(F.kK(!1,1,12,0))}}
Z.jH.prototype={
$0:function(){this.a.$1(F.lV(!0,!0,25,new Z.jm(),50))}}
Z.jm.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
Z.jI.prototype={
$0:function(){this.a.$1(F.m2(10,20))}}
Z.jJ.prototype={
$0:function(){this.a.$1(F.m2(20,40))}}
Z.jK.prototype={
$0:function(){this.a.$1(F.m1(2))}}
Z.jL.prototype={
$0:function(){this.a.$1(F.m1(3))}}
Z.jN.prototype={
$0:function(){this.a.$1(F.kQ(6,null,6))}}
Z.jO.prototype={
$0:function(){this.a.$1(F.kQ(10,null,10))}}
Z.jP.prototype={
$0:function(){this.a.$1(F.kQ(10,new Z.jl(),10))}}
Z.jl.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
Z.jQ.prototype={
$0:function(){this.a.$1(F.of())}}
Z.jR.prototype={
$0:function(){this.a.$1(F.o5())}}
Z.jS.prototype={
$0:function(){this.a.$1(F.m_(4,null,4))}}
Z.jT.prototype={
$0:function(){this.a.$1(F.m_(16,new Z.jk(),16))}}
Z.jk.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}}
Z.jU.prototype={
$0:function(){this.a.sa4(0.01)}}
Z.jV.prototype={
$0:function(){this.a.sa4(0.02)}}
Z.jW.prototype={
$0:function(){this.a.sa4(0.04)}}
Z.jY.prototype={
$0:function(){this.a.sa4(0.06)}}
Z.jZ.prototype={
$0:function(){this.a.sa4(0.08)}}
Z.k_.prototype={
$0:function(){this.a.sa4(0.1)}}
Z.k0.prototype={
$0:function(){this.a.sa4(0.2)}}
Z.k1.prototype={
$0:function(){this.a.sa4(0.4)}}
Z.k2.prototype={
$0:function(){this.a.sa4(0.6)}}
Z.k3.prototype={
$0:function(){this.a.sa4(0.8)}}
Z.k4.prototype={
$0:function(){this.a.sa4(1)}};(function aliases(){var u=J.a.prototype
u.dg=u.h
u=J.cr.prototype
u.dh=u.h
u=T.cl.prototype
u.df=u.ay
u.c1=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nQ","nk",9)
u(P,"nR","nl",9)
u(P,"nS","nm",9)
t(P,"lU","nO",11)
var n
s(n=E.aN.prototype,"gcW",0,0,null,["$1","$0"],["cX","fW"],2,0)
s(n,"gcU",0,0,null,["$1","$0"],["cV","fV"],2,0)
s(n,"gcS",0,0,null,["$1","$0"],["cT","fS"],2,0)
r(n,"gfQ","fR",5)
r(n,"gfT","fU",5)
s(n=E.cK.prototype,"gc3",0,0,null,["$1","$0"],["c5","c4"],2,0)
q(n,"gh7","d3",11)
p(n=X.cW.prototype,"gem","en",6)
p(n,"gea","eb",6)
p(n,"geg","eh",3)
p(n,"geq","er",12)
p(n,"geo","ep",12)
p(n,"geu","ev",3)
p(n,"gey","ez",3)
p(n,"gek","el",3)
p(n,"gew","ex",3)
p(n,"gei","ej",3)
p(n,"geA","eB",16)
p(n,"geC","eD",6)
p(n,"geL","eM",7)
p(n,"geH","eI",7)
p(n,"geJ","eK",7)
o(V.E.prototype,"gj","aO",8)
o(V.o.prototype,"gj","aO",8)
o(V.aE.prototype,"gj","aO",8)
s(n=U.by.prototype,"gat",0,0,null,["$1","$0"],["P","a3"],2,0)
r(n,"ge8","e9",13)
r(n,"geF","eG",13)
s(n=U.cX.prototype,"gat",0,0,null,["$1","$0"],["P","a3"],2,0)
p(n,"gbn","bo",1)
p(n,"gbp","bq",1)
p(n,"gbr","bs",1)
s(n=U.cY.prototype,"gat",0,0,null,["$1","$0"],["P","a3"],2,0)
p(n,"gbn","bo",1)
p(n,"gbp","bq",1)
p(n,"gbr","bs",1)
p(n,"ge_","e0",1)
p(n,"ge1","e2",1)
p(n,"gf5","f6",1)
p(n,"gf3","f4",1)
p(n,"gf1","f2",1)
p(U.cZ.prototype,"ge4","e5",1)
s(n=M.ci.prototype,"gac",0,0,null,["$1","$0"],["ah","dq"],2,0)
r(n,"gec","ed",5)
r(n,"gee","ef",5)
p(n=O.cm.prototype,"geX","eY",0)
s(n,"gff",0,1,null,["$2$color","$1"],["cu","fg"],17,0)
p(n,"gfb","fc",0)
p(n,"ge6","e7",0)
p(n,"gdG","dH",0)
p(n,"gf_","f0",0)
p(n,"gf9","fa",0)
p(n,"gdS","dT",0)
p(n,"gdU","dV",0)
p(n,"gdQ","dR",0)
p(n,"gdW","dX",0)
p(n,"gdK","dL",0)
p(n,"gf7","f8",0)
p(n,"gfd","fe",0)
p(n,"gdE","dF",0)
p(n,"gc9","dC",0)
p(n,"gc7","du",0)
s(X.cB.prototype,"gc6",0,0,null,["$1","$0"],["aq","dt"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Y,null)
s(P.Y,[H.ks,J.a,J.a8,P.dg,P.l,H.ct,P.ff,H.cj,H.hO,H.el,H.hx,P.b7,H.bt,H.dy,P.at,H.fn,H.fp,H.fi,P.dF,P.d0,P.cI,P.hk,P.cL,P.iP,P.iz,P.iu,P.df,P.n,P.iH,P.fw,P.ei,P.iO,P.iN,P.c3,P.a4,P.a7,P.aM,P.fQ,P.cG,P.d8,P.eK,P.m,P.Q,P.aT,P.p,P.R,P.bh,P.hQ,P.iA,W.ep,W.eh,W.G,W.ck,P.iC,P.iv,P.be,T.e0,T.cl,T.cv,T.h5,R.cH,R.cM,R.cN,R.hs,O.b5,O.bD,E.eb,E.aN,E.fY,E.cK,Z.d_,Z.ib,Z.ca,Z.cb,Z.b8,Z.bQ,D.ee,D.bv,D.X,X.cc,X.cs,X.fk,X.ft,X.ab,X.fG,X.ht,X.cW,V.a3,V.x,V.eB,V.bC,V.O,V.D,V.a0,V.cE,V.bM,V.E,V.o,V.aE,U.cX,U.cY,U.cZ,M.ci,A.c8,A.e4,A.cQ,A.hG,F.ar,F.eE,F.ba,F.fm,F.bJ,F.ac,F.h6,F.h7,F.h8,F.aF,F.hZ,F.i_,F.i3,F.i4,F.i5,F.i6,F.i7,O.cJ,X.kl,X.hm,X.cB,V.ef,V.fW,V.h9])
s(J.a,[J.fg,J.cq,J.cr,J.aO,J.bB,J.aP,H.bG,H.aS,W.e,W.e_,W.b3,W.aj,W.F,W.d2,W.a9,W.et,W.eu,W.d4,W.ch,W.d6,W.ew,W.i,W.d9,W.as,W.eM,W.db,W.bA,W.fs,W.fA,W.dh,W.di,W.av,W.dj,W.dm,W.ay,W.dr,W.dt,W.aA,W.du,W.aB,W.dz,W.an,W.dD,W.hr,W.aD,W.dG,W.hv,W.hV,W.dL,W.dN,W.dP,W.dR,W.dT,P.aR,P.dd,P.aU,P.dp,P.fU,P.dA,P.aW,P.dI,P.e5,P.d1,P.dw])
s(J.cr,[J.fR,J.bg,J.aQ])
t(J.kr,J.aO)
s(J.bB,[J.cp,J.fh])
t(P.fr,P.dg)
s(P.fr,[H.cT,W.ik,W.ij,P.eG])
t(H.P,H.cT)
s(P.l,[H.ez,H.fx,H.ic])
s(P.ff,[H.fy,H.id])
t(H.em,H.el)
s(P.b7,[H.fN,H.fj,H.hN,H.ed,H.h3,P.cA,P.ah,P.hP,P.hL,P.hg,P.ek,P.es])
s(H.bt,[H.kh,H.hn,H.je,H.jf,H.jg,P.ig,P.ie,P.ih,P.ii,P.iG,P.iF,P.iX,P.ix,P.iy,P.fq,P.fv,P.ex,P.ey,P.hU,P.hR,P.hS,P.hT,P.iI,P.iJ,P.iL,P.iK,P.iT,P.iS,P.iU,P.iV,W.fC,W.fE,W.h2,W.hj,W.ip,P.iD,P.iY,P.eH,P.eI,P.e7,E.fZ,E.h_,E.h0,E.hq,D.eC,D.eD,F.iQ,F.j5,F.j_,F.j1,F.j2,F.j3,F.jj,F.kd,F.ke,F.kg,F.ji,F.j0,F.jb,F.jc,F.i9,F.i8,F.i0,F.i1,O.f1,O.f2,O.fc,O.fb,O.fd,O.fe,O.f7,O.f0,O.eT,O.f3,O.f6,O.eX,O.eY,O.eW,O.eZ,O.eU,O.eV,O.f4,O.f5,O.f8,O.f9,O.fa,O.f_,O.eR,O.eS,O.eQ,O.eP,V.eg,V.kc,V.fX,V.hb,V.ha,Z.jo,Z.jp,Z.jq,Z.jB,Z.jM,Z.jX,Z.k5,Z.k6,Z.k7,Z.k8,Z.k9,Z.jr,Z.js,Z.jt,Z.ju,Z.jv,Z.jw,Z.ka,Z.jx,Z.jy,Z.jz,Z.jA,Z.jn,Z.jC,Z.jD,Z.jE,Z.jF,Z.jG,Z.jH,Z.jm,Z.jI,Z.jJ,Z.jK,Z.jL,Z.jN,Z.jO,Z.jP,Z.jl,Z.jQ,Z.jR,Z.jS,Z.jT,Z.jk,Z.jU,Z.jV,Z.jW,Z.jY,Z.jZ,Z.k_,Z.k0,Z.k1,Z.k2,Z.k3,Z.k4])
s(H.hn,[H.hh,H.br])
t(P.fu,P.at)
t(H.aa,P.fu)
t(H.fo,H.ez)
t(H.cw,H.aS)
s(H.cw,[H.bS,H.bU])
t(H.bT,H.bS)
t(H.bH,H.bT)
t(H.bV,H.bU)
t(H.cx,H.bV)
s(H.cx,[H.fH,H.fI,H.fJ,H.fK,H.fL,H.cy,H.bI])
t(P.iw,P.iP)
t(P.it,P.iz)
t(P.dK,P.fw)
t(P.cU,P.dK)
s(P.ei,[P.e9,P.eA])
t(P.en,P.hk)
s(P.en,[P.ea,P.hY,P.hX])
t(P.hW,P.eA)
s(P.a7,[P.K,P.r])
s(P.ah,[P.bc,P.eN])
t(P.im,P.bh)
s(W.e,[W.C,W.eF,W.bE,W.az,W.bW,W.aC,W.ao,W.bY,W.ia,W.bR,P.e8,P.b2])
s(W.C,[W.U,W.aL])
s(W.U,[W.k,P.j])
s(W.k,[W.e1,W.e2,W.b4,W.eJ,W.h4])
t(W.eo,W.aj)
t(W.bu,W.d2)
s(W.a9,[W.eq,W.er])
t(W.d5,W.d4)
t(W.cg,W.d5)
t(W.d7,W.d6)
t(W.ev,W.d7)
t(W.ak,W.b3)
t(W.da,W.d9)
t(W.bx,W.da)
t(W.dc,W.db)
t(W.bz,W.dc)
t(W.aX,W.i)
s(W.aX,[W.b9,W.al,W.bd])
t(W.fB,W.dh)
t(W.fD,W.di)
t(W.dk,W.dj)
t(W.fF,W.dk)
t(W.dn,W.dm)
t(W.cz,W.dn)
t(W.ds,W.dr)
t(W.fS,W.ds)
t(W.h1,W.dt)
t(W.bX,W.bW)
t(W.hd,W.bX)
t(W.dv,W.du)
t(W.he,W.dv)
t(W.hi,W.dz)
t(W.dE,W.dD)
t(W.ho,W.dE)
t(W.bZ,W.bY)
t(W.hp,W.bZ)
t(W.dH,W.dG)
t(W.hu,W.dH)
t(W.aY,W.al)
t(W.dM,W.dL)
t(W.il,W.dM)
t(W.d3,W.ch)
t(W.dO,W.dN)
t(W.iq,W.dO)
t(W.dQ,W.dP)
t(W.dl,W.dQ)
t(W.dS,W.dR)
t(W.iB,W.dS)
t(W.dU,W.dT)
t(W.iE,W.dU)
t(W.io,P.cI)
t(P.dC,P.iC)
t(P.a6,P.iv)
t(P.de,P.dd)
t(P.fl,P.de)
t(P.dq,P.dp)
t(P.fO,P.dq)
t(P.dB,P.dA)
t(P.hl,P.dB)
t(P.dJ,P.dI)
t(P.hw,P.dJ)
t(P.e6,P.d1)
t(P.fP,P.b2)
t(P.dx,P.dw)
t(P.hf,P.dx)
s(T.cl,[T.ax,R.cP])
s(E.eb,[Z.c9,A.cF])
s(D.X,[D.cn,D.co,D.q,X.fT])
s(X.fT,[X.cu,X.aw,X.bF,X.cO])
s(D.ee,[U.ej,U.a5])
t(U.ce,U.a5)
t(U.by,O.b5)
t(A.eO,A.cF)
s(A.cQ,[A.hA,A.hD,A.hE,A.hF,A.hB,A.cR,A.hC,A.cS,A.bO,A.hH,A.hI,A.bf,A.hJ,A.hK])
t(F.hc,F.eE)
t(F.hz,F.fm)
t(F.bP,F.i4)
t(F.fV,F.i5)
s(F.i6,[F.i2,F.fM])
t(O.cm,O.cJ)
t(X.eL,X.hm)
u(H.cT,H.hO)
u(H.bS,P.n)
u(H.bT,H.cj)
u(H.bU,P.n)
u(H.bV,H.cj)
u(P.dg,P.n)
u(P.dK,P.iH)
u(W.d2,W.ep)
u(W.d4,P.n)
u(W.d5,W.G)
u(W.d6,P.n)
u(W.d7,W.G)
u(W.d9,P.n)
u(W.da,W.G)
u(W.db,P.n)
u(W.dc,W.G)
u(W.dh,P.at)
u(W.di,P.at)
u(W.dj,P.n)
u(W.dk,W.G)
u(W.dm,P.n)
u(W.dn,W.G)
u(W.dr,P.n)
u(W.ds,W.G)
u(W.dt,P.at)
u(W.bW,P.n)
u(W.bX,W.G)
u(W.du,P.n)
u(W.dv,W.G)
u(W.dz,P.at)
u(W.dD,P.n)
u(W.dE,W.G)
u(W.bY,P.n)
u(W.bZ,W.G)
u(W.dG,P.n)
u(W.dH,W.G)
u(W.dL,P.n)
u(W.dM,W.G)
u(W.dN,P.n)
u(W.dO,W.G)
u(W.dP,P.n)
u(W.dQ,W.G)
u(W.dR,P.n)
u(W.dS,W.G)
u(W.dT,P.n)
u(W.dU,W.G)
u(P.dd,P.n)
u(P.de,W.G)
u(P.dp,P.n)
u(P.dq,W.G)
u(P.dA,P.n)
u(P.dB,W.G)
u(P.dI,P.n)
u(P.dJ,W.G)
u(P.d1,P.at)
u(P.dw,P.n)
u(P.dx,W.G)})()
var v={mangledGlobalNames:{r:"int",K:"double",a7:"num",p:"String",c3:"bool",aT:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:F.ac,args:[F.ac]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[W.al]},{func:1,ret:P.aT,args:[,,]},{func:1,ret:-1,args:[P.r,[P.l,E.aN]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b9]},{func:1,ret:-1,args:[P.r,[P.l,U.a5]]},{func:1,ret:P.aT,args:[,]},{func:1,ret:P.be,args:[,,]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:F.ac,args:[F.ac],named:{color:V.x}}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.b4.prototype
C.H=J.a.prototype
C.b=J.aO.prototype
C.c=J.cp.prototype
C.I=J.cq.prototype
C.d=J.bB.prototype
C.a=J.aP.prototype
C.J=J.aQ.prototype
C.u=J.fR.prototype
C.n=J.bg.prototype
C.v=W.aY.prototype
C.w=W.bR.prototype
C.P=new P.ea()
C.x=new P.e9()
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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

C.E=new P.fQ()
C.e=new P.hW()
C.F=new P.hY()
C.f=new P.iw()
C.m=new P.aM(0)
C.G=new P.aM(5e6)
C.q=H.d(u([127,2047,65535,1114111]),[P.r])
C.i=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.r])
C.j=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.r])
C.k=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.r])
C.L=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.r])
C.M=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.r])
C.r=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.r])
C.N=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.r])
C.t=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.r])
C.K=H.d(u([]),[P.p])
C.O=new H.em(0,{},C.K,[P.p,P.p])})();(function staticFields(){$.ai=0
$.bs=null
$.kY=null
$.lZ=null
$.lT=null
$.m5=null
$.j6=null
$.jh=null
$.kN=null
$.bj=null
$.c1=null
$.c2=null
$.kH=!1
$.ag=C.f
$.a1=[]
$.lb=null
$.le=null
$.lf=null
$.lh=null
$.lo=null
$.lq=null
$.lz=null
$.lE=null
$.lB=null
$.lC=null
$.lD=null
$.lA=null
$.lG=null
$.ld=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ok","ma",function(){return H.lX("_$dart_dartClosure")})
u($,"ol","kR",function(){return H.lX("_$dart_js")})
u($,"om","mb",function(){return H.ap(H.hy({
toString:function(){return"$receiver$"}}))})
u($,"on","mc",function(){return H.ap(H.hy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oo","md",function(){return H.ap(H.hy(null))})
u($,"op","me",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"os","mh",function(){return H.ap(H.hy(void 0))})
u($,"ot","mi",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"or","mg",function(){return H.ap(H.lv(null))})
u($,"oq","mf",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ov","mk",function(){return H.ap(H.lv(void 0))})
u($,"ou","mj",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oJ","kS",function(){return P.nj()})
u($,"ow","ml",function(){return P.ng()})
u($,"oK","mp",function(){return H.mS(H.iW(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.r])))})
u($,"oL","mq",function(){return P.n5("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oM","mr",function(){return P.nG()})
u($,"oD","mo",function(){return Z.ae(0)})
u($,"ox","mm",function(){return Z.ae(511)})
u($,"oF","aK",function(){return Z.ae(1)})
u($,"oE","aJ",function(){return Z.ae(2)})
u($,"oz","aI",function(){return Z.ae(4)})
u($,"oG","bo",function(){return Z.ae(8)})
u($,"oH","bp",function(){return Z.ae(16)})
u($,"oA","b0",function(){return Z.ae(32)})
u($,"oB","c6",function(){return Z.ae(64)})
u($,"oC","mn",function(){return Z.ae(96)})
u($,"oI","bq",function(){return Z.ae(128)})
u($,"oy","bn",function(){return Z.ae(256)})
u($,"oj","m9",function(){return new V.eB(1e-9)})
u($,"oi","A",function(){return $.m9()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bG,DataView:H.aS,ArrayBufferView:H.aS,Float32Array:H.bH,Float64Array:H.bH,Int16Array:H.fH,Int32Array:H.fI,Int8Array:H.fJ,Uint16Array:H.fK,Uint32Array:H.fL,Uint8ClampedArray:H.cy,CanvasPixelArray:H.cy,Uint8Array:H.bI,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e_,HTMLAnchorElement:W.e1,HTMLAreaElement:W.e2,Blob:W.b3,HTMLCanvasElement:W.b4,CDATASection:W.aL,CharacterData:W.aL,Comment:W.aL,ProcessingInstruction:W.aL,Text:W.aL,CSSPerspective:W.eo,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bu,MSStyleCSSProperties:W.bu,CSS2Properties:W.bu,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.eq,CSSUnparsedValue:W.er,DataTransferItemList:W.et,DOMException:W.eu,ClientRectList:W.cg,DOMRectList:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.ev,DOMTokenList:W.ew,Element:W.U,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ak,FileList:W.bx,FileWriter:W.eF,HTMLFormElement:W.eJ,Gamepad:W.as,History:W.eM,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.bA,KeyboardEvent:W.b9,Location:W.fs,MediaList:W.fA,MessagePort:W.bE,MIDIInputMap:W.fB,MIDIOutputMap:W.fD,MimeType:W.av,MimeTypeArray:W.fF,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cz,RadioNodeList:W.cz,Plugin:W.ay,PluginArray:W.fS,RTCStatsReport:W.h1,HTMLSelectElement:W.h4,SourceBuffer:W.az,SourceBufferList:W.hd,SpeechGrammar:W.aA,SpeechGrammarList:W.he,SpeechRecognitionResult:W.aB,Storage:W.hi,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.aC,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ho,TextTrackList:W.hp,TimeRanges:W.hr,Touch:W.aD,TouchEvent:W.bd,TouchList:W.hu,TrackDefaultList:W.hv,CompositionEvent:W.aX,FocusEvent:W.aX,TextEvent:W.aX,UIEvent:W.aX,URL:W.hV,VideoTrackList:W.ia,WheelEvent:W.aY,Window:W.bR,DOMWindow:W.bR,CSSRuleList:W.il,ClientRect:W.d3,DOMRect:W.d3,GamepadList:W.iq,NamedNodeMap:W.dl,MozNamedAttrMap:W.dl,SpeechRecognitionResultList:W.iB,StyleSheetList:W.iE,SVGLength:P.aR,SVGLengthList:P.fl,SVGNumber:P.aU,SVGNumberList:P.fO,SVGPointList:P.fU,SVGStringList:P.hl,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.aW,SVGTransformList:P.hw,AudioBuffer:P.e5,AudioParamMap:P.e6,AudioTrackList:P.e8,AudioContext:P.b2,webkitAudioContext:P.b2,BaseAudioContext:P.b2,OfflineAudioContext:P.fP,SQLResultSetRowList:P.hf})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.m3,[])
else Z.m3([])})})()
//# sourceMappingURL=test.dart.js.map
