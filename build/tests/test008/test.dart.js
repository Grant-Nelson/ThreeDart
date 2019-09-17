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
a[c]=function(){a[c]=function(){H.nn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jT(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jD:function jD(){},
j6:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
jA:function(){return new P.bM("No element")},
lN:function(){return new P.bM("Too many elements")},
l:function l(a){this.a=a},
eK:function eK(){},
cB:function cB(){},
bB:function bB(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fk:function fk(a,b,c){this.a=a
this.b=b
this.$ti=c},
fl:function fl(a,b){this.a=null
this.b=a
this.c=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
ib:function ib(a,b){this.a=a
this.b=b},
cp:function cp(){},
hQ:function hQ(){},
d2:function d2(){},
lF:function(){throw H.b(P.t("Cannot modify unmodifiable Map"))},
eb:function(a){var u,t=H.no(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
n6:function(a){return v.types[a]},
l0:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$iu},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.X(a)
if(typeof u!=="string")throw H.b(H.am(a))
return u},
bJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
m3:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.P(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.A(s,q)|32)>t)return}return parseInt(a,b)},
bK:function(a){return H.lV(a)+H.kS(H.c8(a),0,null)},
lV:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.P||!!n.$ibP){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eb(t.length>1&&C.a.A(t,0)===36?C.a.ad(t,1):t)},
lW:function(){if(!!self.location)return self.location.href
return},
kp:function(a){var u,t,s,r,q=J.a4(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m4:function(a){var u,t,s,r=H.c([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.am(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.as(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.b(H.am(s))}return H.kp(r)},
kq:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.am(s))
if(s<0)throw H.b(H.am(s))
if(s>65535)return H.m4(a)}return H.kp(a)},
m5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.as(u,10))>>>0,56320|u&1023)}}throw H.b(P.P(a,0,1114111,null,null))},
bb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m2:function(a){var u=H.bb(a).getFullYear()+0
return u},
m0:function(a){var u=H.bb(a).getMonth()+1
return u},
lX:function(a){var u=H.bb(a).getDate()+0
return u},
lY:function(a){var u=H.bb(a).getHours()+0
return u},
m_:function(a){var u=H.bb(a).getMinutes()+0
return u},
m1:function(a){var u=H.bb(a).getSeconds()+0
return u},
lZ:function(a){var u=H.bb(a).getMilliseconds()+0
return u},
n:function(a){throw H.b(H.am(a))},
d:function(a,b){if(a==null)J.a4(a)
throw H.b(H.c5(a,b))},
c5:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a9(!0,b,s,null)
u=J.a4(a)
if(!(b<0)){if(typeof u!=="number")return H.n(u)
t=b>=u}else t=!0
if(t)return P.C(b,a,s,null,u)
return P.fO(b,s)},
n0:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bd(a,c,!0,b,"end",u)
return new P.a9(!0,b,"end",null)},
am:function(a){return new P.a9(!0,a,null,null)},
mX:function(a){if(typeof a!=="number")throw H.b(H.am(a))
return a},
b:function(a){var u
if(a==null)a=new P.cI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l5})
u.name=""}else u.toString=H.l5
return u},
l5:function(){return J.X(this.dartException)},
Q:function(a){throw H.b(a)},
v:function(a){throw H.b(P.ae(a))},
ak:function(a){var u,t,s,r,q,p
a=H.l4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kz:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kl:function(a,b){return new H.fC(a,b==null?null:b.method)},
jE:function(a,b){var u=b==null,t=u?null:b.method
return new H.f7(a,t,u?null:b.receiver)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.as(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jE(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kl(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l8()
q=$.l9()
p=$.la()
o=$.lb()
n=$.le()
m=$.lf()
l=$.ld()
$.lc()
k=$.lh()
j=$.lg()
i=r.a5(u)
if(i!=null)return f.$1(H.jE(u,i))
else{i=q.a5(u)
if(i!=null){i.method="call"
return f.$1(H.jE(u,i))}else{i=p.a5(u)
if(i==null){i=o.a5(u)
if(i==null){i=n.a5(u)
if(i==null){i=m.a5(u)
if(i==null){i=l.a5(u)
if(i==null){i=o.a5(u)
if(i==null){i=k.a5(u)
if(i==null){i=j.a5(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kl(u,i))}}return f.$1(new H.hP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cP()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a9(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cP()
return a},
jV:function(a){var u
if(a==null)return new H.dK(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dK(a)},
n4:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nd:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.S("Unsupported number of arguments for wrapped closure"))},
bl:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nd)
a.$identity=u
return u},
lE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h8().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.J()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ka(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lA(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ka(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lA:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n6,a)
if(typeof a=="function")if(b)return a
else{u=c?H.k9:H.js
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
lB:function(a,b,c,d){var u=H.js
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ka:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lB(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.J()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.f(q==null?$.br=H.eo("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.J()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.f(q==null?$.br=H.eo("self"):q)+"."+H.f(u)+"("+o+");}")()},
lC:function(a,b,c,d){var u=H.js,t=H.k9
switch(b?-1:a){case 0:throw H.b(H.m9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lD:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.eo("self")
u=$.k8
if(u==null)u=$.k8=H.eo("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ad
if(typeof u!=="number")return u.J()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.J()
$.ad=u+1
return new Function(n+u+"}")()},
jT:function(a,b,c,d,e,f,g){return H.lE(a,b,c,d,!!e,!!f,g)},
js:function(a){return a.a},
k9:function(a){return a.c},
eo:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.jB(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nh:function(a,b){throw H.b(H.lz(a,H.eb(b.substring(2))))},
a1:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.nh(a,b)},
n2:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lz:function(a,b){return new H.eq("CastError: "+P.jy(a)+": type '"+H.f(H.mT(a))+"' is not a subtype of type '"+b+"'")},
mT:function(a){var u,t=J.G(a)
if(!!t.$ibs){u=H.n2(t)
if(u!=null)return H.ni(u)
return"Closure"}return H.bK(a)},
nn:function(a){throw H.b(new P.eC(a))},
m9:function(a){return new H.fV(a)},
kZ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c8:function(a){if(a==null)return
return a.$ti},
nY:function(a,b,c){return H.jp(a["$a"+H.f(c)],H.c8(b))},
n5:function(a,b,c,d){var u=H.jp(a["$a"+H.f(c)],H.c8(b))
return u==null?null:u[d]},
jU:function(a,b,c){var u=H.jp(a["$a"+H.f(b)],H.c8(a))
return u==null?null:u[c]},
ea:function(a,b){var u=H.c8(a)
return u==null?null:u[b]},
ni:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eb(a[0].name)+H.kS(a,1,b)
if(typeof a=="function")return H.eb(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mL(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.J(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.aZ(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aZ(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aZ(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aZ(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.n3(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aZ(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kS:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.M("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.h(0)+">"},
jp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nW:function(a,b,c){return a.apply(b,H.jp(J.G(b)["$a"+H.f(c)],H.c8(b)))},
nX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ne:function(a){var u,t,s,r,q=$.l_.$1(a),p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ja[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kX.$2(a,q)
if(q!=null){p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ja[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jn(u)
$.j1[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ja[q]=u
return u}if(s==="-"){r=H.jn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l2(a,u)
if(s==="*")throw H.b(P.hO(q))
if(v.leafTags[q]===true){r=H.jn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l2(a,u)},
l2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jX(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jn:function(a){return J.jX(a,!1,null,!!a.$iu)},
nf:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jn(u)
else return J.jX(u,c,null,null)},
nb:function(){if(!0===$.jW)return
$.jW=!0
H.nc()},
nc:function(){var u,t,s,r,q,p,o,n
$.j1=Object.create(null)
$.ja=Object.create(null)
H.na()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l3.$1(q)
if(p!=null){o=H.nf(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
na:function(){var u,t,s,r,q,p,o=C.E()
o=H.bk(C.F,H.bk(C.G,H.bk(C.t,H.bk(C.t,H.bk(C.H,H.bk(C.I,H.bk(C.J(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l_=new H.j7(r)
$.kX=new H.j8(q)
$.l3=new H.j9(p)},
bk:function(a,b){return a(b)||b},
lP:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.J("Illegal RegExp pattern ("+String(p)+")",a,null))},
nk:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k_:function(a,b,c){var u=H.nl(a,b,c)
return u},
nl:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l4(b),'g'),H.n1(c))},
ev:function ev(){},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a){this.a=a},
jq:function jq(a){this.a=a},
dK:function dK(a){this.a=a
this.b=null},
bs:function bs(){},
hg:function hg(){},
h8:function h8(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a){this.a=a},
fV:function fV(a){this.a=a},
ab:function ab(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fb:function fb(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iZ:function(a){return a},
lU:function(a){return new Int8Array(a)},
al:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.c5(b,a))},
mJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.n0(a,b,c))
return b},
bG:function bG(){},
aQ:function aQ(){},
cD:function cD(){},
bH:function bH(){},
cE:function cE(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
cF:function cF(){},
bI:function bI(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
n3:function(a){return J.kh(a?Object.keys(a):[],null)},
no:function(a){return v.mangledGlobalNames[a]},
ng:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j3:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jW==null){H.nb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.hO("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k0()]
if(r!=null)return r
r=H.ne(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.z
if(u===Object.prototype)return C.z
if(typeof s=="function"){Object.defineProperty(s,$.k0(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.k6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.P(a,0,4294967295,"length",null))
return J.kh(new Array(a),b)},
kh:function(a,b){return J.jB(H.c(a,[b]))},
jB:function(a){a.fixed$length=Array
return a},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cv.prototype
return J.cu.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cw.prototype
if(typeof a=="boolean")return J.f5.prototype
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.V)return a
return J.j3(a)},
c6:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.V)return a
return J.j3(a)},
e9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aM.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.V)return a
return J.j3(a)},
c7:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.bP.prototype
return a},
bm:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aN.prototype
return a}if(a instanceof P.V)return a
return J.j3(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).t(a,b)},
k2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c6(a).l(a,b)},
jr:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.l0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.e9(a).n(a,b,c)},
lq:function(a,b){return J.c7(a).A(a,b)},
lr:function(a,b,c){return J.bm(a).en(a,b,c)},
ls:function(a,b,c,d){return J.bm(a).eF(a,b,c,d)},
lt:function(a,b){return J.c7(a).S(a,b)},
ec:function(a,b){return J.e9(a).E(a,b)},
lu:function(a,b,c,d){return J.bm(a).eY(a,b,c,d)},
k3:function(a,b){return J.e9(a).B(a,b)},
lv:function(a){return J.bm(a).geJ(a)},
bp:function(a){return J.bm(a).gbw(a)},
cc:function(a){return J.G(a).gD(a)},
aJ:function(a){return J.e9(a).gT(a)},
a4:function(a){return J.c6(a).gj(a)},
k4:function(a){return J.e9(a).fq(a)},
lw:function(a,b){return J.bm(a).fu(a,b)},
lx:function(a,b,c){return J.c7(a).p(a,b,c)},
ly:function(a){return J.c7(a).fF(a)},
X:function(a){return J.G(a).h(a)},
a:function a(){},
f5:function f5(){},
cw:function cw(){},
cy:function cy(){},
fG:function fG(){},
bP:function bP(){},
aN:function aN(){},
aM:function aM(a){this.$ti=a},
jC:function jC(a){this.$ti=a},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cx:function cx(){},
cv:function cv(){},
cu:function cu(){},
b9:function b9(){}},P={
ml:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mU()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bl(new P.id(s),1)).observe(u,{childList:true})
return new P.ic(s,u,t)}else if(self.setImmediate!=null)return P.mV()
return P.mW()},
mm:function(a){self.scheduleImmediate(H.bl(new P.ie(a),0))},
mn:function(a){self.setImmediate(H.bl(new P.ig(a),0))},
mo:function(a){P.jI(C.m,a)},
jI:function(a,b){var u=C.c.at(a.a,1000)
return P.mt(u<0?0:u,b)},
ky:function(a,b){var u=C.c.at(a.a,1000)
return P.mu(u<0?0:u,b)},
mt:function(a,b){var u=new P.dR()
u.dh(a,b)
return u},
mu:function(a,b){var u=new P.dR()
u.di(a,b)
return u},
mN:function(){var u,t
for(;u=$.bj,u!=null;){$.c4=null
t=u.b
$.bj=t
if(t==null)$.c3=null
u.a.$0()}},
mS:function(){$.jR=!0
try{P.mN()}finally{$.c4=null
$.jR=!1
if($.bj!=null)$.k1().$1(P.kY())}},
mQ:function(a){var u=new P.db(a)
if($.bj==null){$.bj=$.c3=u
if(!$.jR)$.k1().$1(P.kY())}else $.c3=$.c3.b=u},
mR:function(a){var u,t,s=$.bj
if(s==null){P.mQ(a)
$.c4=$.c3
return}u=new P.db(a)
t=$.c4
if(t==null){u.b=s
$.bj=$.c4=u}else{u.b=t.b
$.c4=t.b=u
if(u.b==null)$.c3=u}},
kx:function(a,b){var u=$.ac
if(u===C.f)return P.jI(a,b)
return P.jI(a,u.eK(b))},
md:function(a,b){var u=$.ac
if(u===C.f)return P.ky(a,b)
return P.ky(a,u.cl(b,P.cV))},
kT:function(a,b,c,d,e){var u={}
u.a=d
P.mR(new P.j_(u,e))},
mO:function(a,b,c,d){var u,t=$.ac
if(t===c)return d.$0()
$.ac=c
u=t
try{t=d.$0()
return t}finally{$.ac=u}},
mP:function(a,b,c,d,e){var u,t=$.ac
if(t===c)return d.$1(e)
$.ac=c
u=t
try{t=d.$1(e)
return t}finally{$.ac=u}},
id:function id(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
dR:function dR(){this.c=0},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a){this.a=a
this.b=null},
cR:function cR(){},
hb:function hb(){},
cV:function cV(){},
iU:function iU(){},
j_:function j_(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function(a,b){return new H.ab([a,b])},
jF:function(a,b){return new H.ab([a,b])},
lR:function(a){return H.n4(a,new H.ab([null,null]))},
cA:function(a){return new P.is([a])},
jM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ms:function(a,b){var u=new P.dr(a,b)
u.c=a.e
return u},
lM:function(a,b,c){var u,t
if(P.jS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.W.push(a)
try{P.mM(a,u)}finally{if(0>=$.W.length)return H.d($.W,-1)
$.W.pop()}t=P.kv(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jz:function(a,b,c){var u,t
if(P.jS(a))return b+"..."+c
u=new P.M(b)
$.W.push(a)
try{t=u
t.a=P.kv(t.a,a,", ")}finally{if(0>=$.W.length)return H.d($.W,-1)
$.W.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jS:function(a){var u,t
for(u=$.W.length,t=0;t<u;++t)if(a===$.W[t])return!0
return!1},
mM:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.f(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.v()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.v();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
ki:function(a,b,c){var u=P.lQ(b,c)
a.B(0,new P.fd(u))
return u},
kj:function(a,b){var u,t,s=P.cA(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.m(0,a[t])
return s},
jH:function(a){var u,t={}
if(P.jS(a))return"{...}"
u=new P.M("")
try{$.W.push(a)
u.a+="{"
t.a=!0
J.k3(a,new P.fi(t,u))
u.a+="}"}finally{if(0>=$.W.length)return H.d($.W,-1)
$.W.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
is:function is(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
it:function it(a){this.a=a
this.c=this.b=null},
dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fd:function fd(a){this.a=a},
fe:function fe(){},
q:function q(){},
fh:function fh(){},
fi:function fi(a,b){this.a=a
this.b=b},
as:function as(){},
iM:function iM(){},
fj:function fj(){},
d3:function d3(a,b){this.a=a
this.$ti=b},
iz:function iz(){},
ds:function ds(){},
dX:function dX(){},
mg:function(a,b,c,d){if(b instanceof Uint8Array)return P.mh(!1,b,c,d)
return},
mh:function(a,b,c,d){var u,t,s=$.li()
if(s==null)return
u=0===c
if(u&&!0)return P.jL(s,b)
t=b.length
d=P.aV(c,d,t)
if(u&&d===t)return P.jL(s,b)
return P.jL(s,b.subarray(c,d))},
jL:function(a,b){if(P.mj(b))return
return P.mk(a,b)},
mk:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.a3(t)}return},
mj:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mi:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.a3(t)}return},
kV:function(a,b,c){var u,t,s
for(u=J.c6(a),t=b;t<c;++t){s=u.l(a,t)
if(typeof s!=="number")return s.b3()
if((s&127)!==s)return t-b}return c-b},
k7:function(a,b,c,d,e,f){if(C.c.aQ(f,4)!==0)throw H.b(P.J("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.J("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.J("Invalid base64 padding, more than two '=' characters",a,b))},
el:function el(){},
em:function em(){},
es:function es(){},
ex:function ex(){},
eM:function eM(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f1:function f1(a){this.a=a},
hZ:function hZ(){},
i0:function i0(){},
iS:function iS(a){this.b=0
this.c=a},
i_:function i_(a){this.a=a},
iR:function iR(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
c9:function(a,b,c){var u=H.m3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.J(a,null,null))},
lJ:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.f(H.bK(a))+"'"},
lS:function(a,b,c){var u,t,s=J.lO(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jG:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aJ(a);u.v();)t.push(u.gG(u))
if(b)return t
return J.jB(t)},
bN:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aV(b,c,u)
return H.kq(b>0||c<u?C.b.d1(a,b,c):a)}if(!!J.G(a).$ibI)return H.m5(a,b,P.aV(b,c,a.length))
return P.mb(a,b,c)},
mb:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.b(P.P(b,0,J.a4(a),q,q))
u=c==null
if(!u&&c<b)throw H.b(P.P(c,b,J.a4(a),q,q))
t=J.aJ(a)
for(s=0;s<b;++s)if(!t.v())throw H.b(P.P(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gG(t))
else for(s=b;s<c;++s){if(!t.v())throw H.b(P.P(c,b,s,q,q))
r.push(t.gG(t))}return H.kq(r)},
m7:function(a){return new H.f6(a,H.lP(a,!1,!0,!1,!1,!1))},
kv:function(a,b,c){var u=J.aJ(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gG(u))
while(u.v())}else{a+=H.f(u.gG(u))
for(;u.v();)a=a+c+H.f(u.gG(u))}return a},
hU:function(){var u=H.lW()
if(u!=null)return P.mf(u)
throw H.b(P.t("'Uri.base' is not supported"))},
dY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lo().b
if(typeof b!=="string")H.Q(H.am(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.geX().bx(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lG:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cl:function(a){if(a>=10)return""+a
return"0"+a},
kc:function(a){return new P.aL(1000*a)},
jy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.X(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lJ(a)},
cd:function(a){return new P.a9(!1,null,null,a)},
k6:function(a,b,c){return new P.a9(!0,a,b,c)},
fO:function(a,b){return new P.bd(null,null,!0,a,b,"Value not in range")},
P:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c){if(0>a||a>c)throw H.b(P.P(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.P(b,a,c,"end",null))
return b}return c},
kr:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.b(P.P(a,0,null,b,null))},
C:function(a,b,c,d,e){var u=e==null?J.a4(b):e
return new P.f3(u,!0,a,c,"Index out of range")},
t:function(a){return new P.hR(a)},
hO:function(a){return new P.hN(a)},
ku:function(a){return new P.bM(a)},
ae:function(a){return new P.eu(a)},
S:function(a){return new P.dj(a)},
J:function(a,b,c){return new P.eW(a,b,c)},
lT:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
jZ:function(a){H.ng(a)},
mf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.A(a,4)^58)*3|C.a.A(a,0)^100|C.a.A(a,1)^97|C.a.A(a,2)^116|C.a.A(a,3)^97)>>>0
if(u===0)return P.kA(e<e?C.a.p(a,0,e):a,5,f).gcV()
else if(u===32)return P.kA(C.a.p(a,5,e),0,f).gcV()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.r])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kU(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.fI()
if(r>=0)if(P.kU(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.J()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.n(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.Y(a,"..",o)))j=n>o+2&&C.a.Y(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.Y(a,"file",0)){if(q<=0){if(!C.a.Y(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.ay(a,o,n,"/");++e
n=h}k="file"}else if(C.a.Y(a,"http",0)){if(t&&p+3===o&&C.a.Y(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.ay(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.Y(a,"https",0)){if(t&&p+4===o&&C.a.Y(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.ay(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iC(a,r,q,p,o,n,m,k)}return P.mv(a,0,e,r,q,p,o,n,m,k)},
kC:function(a){var u=P.k
return C.b.f1(H.c(a.split("&"),[u]),P.jF(u,u),new P.hX(C.e))},
me:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.c9(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.cZ()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.c9(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.cZ()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
kB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hV(a),d=new P.hW(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.r])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.S(a,t)
if(p===58){if(t===b){++t
if(C.a.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gac(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.me(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.as(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
mv:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mD(a,b,d)
else{if(d===b)P.bi(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mE(a,u,e-1):""
s=P.mA(a,e,f,!1)
if(typeof f!=="number")return f.J()
r=f+1
if(typeof g!=="number")return H.n(g)
q=r<g?P.mC(P.c9(C.a.p(a,r,g),new P.iN(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mB(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.jO(a,h+1,i,n):n
return new P.bh(j,t,s,q,p,o,i<c?P.mz(a,i+1,c):n)},
kM:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bi:function(a,b,c){throw H.b(P.J(c,a,b))},
mC:function(a,b){if(a!=null&&a===P.kM(b))return
return a},
mA:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.a.S(a,u)!==93)P.bi(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mx(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.kR(a,C.a.Y(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kB(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.n(c)
p=b
for(;p<c;++p)if(C.a.S(a,p)===58){s=C.a.aX(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kR(a,C.a.Y(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kB(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.mG(a,b,c)},
mx:function(a,b,c){var u,t=C.a.aX(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.n(c)
u=t<c}else u=!1
return u?t:c},
kR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.M(d):null
if(typeof c!=="number")return H.n(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.S(a,u)
if(r===37){q=P.jP(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.M("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bi(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.M("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.M("")
l.a+=C.a.p(a,t,u)
l.a+=P.jN(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.n(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.S(a,u)
if(q===37){p=P.jP(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.M("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.x,o)
o=(C.x[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.M("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bi(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.M("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jN(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kO(C.a.A(a,b)))P.bi(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.A(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bi(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.mw(t?a.toLowerCase():a)},
mw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mE:function(a,b,c){return P.c2(a,b,c,C.V,!1)},
mB:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c2(a,b,c,C.y,!0):C.R.fJ(d,new P.iO(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.W(u,"/"))u="/"+u
return P.mF(u,e,f)},
mF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.W(a,"/"))return P.mH(a,!u||c)
return P.mI(a)},
jO:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.b(P.cd("Both query and queryParameters specified"))
return P.c2(a,b,c,C.k,!0)}if(d==null)return
u=new P.M("")
t.a=""
d.B(0,new P.iP(new P.iQ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mz:function(a,b,c){return P.c2(a,b,c,C.k,!0)},
jP:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.S(a,b+1)
t=C.a.S(a,p)
s=H.j6(u)
r=H.j6(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.as(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
jN:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.r])
t[0]=37
t[1]=C.a.A(m,a>>>4)
t[2]=C.a.A(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.r])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.ew(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.A(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.A(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.bN(t,0,null)},
c2:function(a,b,c,d,e){var u=P.kQ(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
kQ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.n(c)
if(!(o<c))break
c$0:{u=C.a.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jP(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bi(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jN(u)}}if(m==null)m=new P.M("")
m.a+=C.a.p(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.n(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kP:function(a){if(C.a.W(a,"."))return!0
return C.a.cw(a,"/.")!==-1},
mI:function(a){var u,t,s,r,q,p,o
if(!P.kP(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
mH:function(a,b){var u,t,s,r,q,p
if(!P.kP(a))return!b?P.kN(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gac(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gac(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.kN(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.k(u,"/")},
kN:function(a){var u,t,s,r=a.length
if(r>=2&&P.kO(J.lq(a,0)))for(u=1;u<r;++u){t=C.a.A(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
my:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.A(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.cd("Invalid URL encoding"))}}return u},
jQ:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.A(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.l(C.a.p(a,b,c))}else{r=H.c([],[P.r])
for(s=a.length,q=b;q<c;++q){t=C.a.A(a,q)
if(t>127)throw H.b(P.cd("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.b(P.cd("Truncated URI"))
r.push(P.my(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i_(!1).bx(r)},
kO:function(a){var u=a|32
return 97<=u&&u<=122},
kA:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.r])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.A(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.b(P.J(m,a,t))}}if(s<0&&t>b)throw H.b(P.J(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.A(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gac(l)
if(r!==44||t!==p+7||!C.a.Y(a,"base64",p+1))throw H.b(P.J("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.D.fa(0,a,o,u)
else{n=P.kQ(a,o,u,C.k,!0)
if(n!=null)a=C.a.ay(a,o,u,n)}return new P.hS(a,l,c)},
mK:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lT(22,new P.iW(),P.bf),n=new P.iV(o),m=new P.iX(),l=new P.iY(),k=n.$2(0,225)
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
kU:function(a,b,c,d,e){var u,t,s,r,q,p=$.lp()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.A(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
b_:function b_(){},
Z:function Z(a,b){this.a=a
this.b=b},
H:function H(){},
aL:function aL(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
b6:function b6(){},
cI:function cI(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f3:function f3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hR:function hR(a){this.a=a},
hN:function hN(a){this.a=a},
bM:function bM(a){this.a=a},
eu:function eu(a){this.a=a},
fF:function fF(){},
cP:function cP(){},
eC:function eC(a){this.a=a},
dj:function dj(a){this.a=a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(){},
r:function r(){},
j:function j(){},
f4:function f4(){},
o:function o(){},
K:function K(){},
aR:function aR(){},
a2:function a2(){},
V:function V(){},
k:function k(){},
M:function M(a){this.a=a},
hX:function hX(a){this.a=a},
hT:function hT(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a,b){this.a=a
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
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(){},
iV:function iV(a){this.a=a},
iX:function iX(){},
iY:function iY(){},
iC:function iC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ik:function ik(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
n_:function(a){var u,t=J.G(a)
if(!!t.$iar){u=t.gco(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dW(a.data,a.height,a.width)},
mZ:function(a){if(a instanceof P.dW)return{data:a.a,height:a.b,width:a.c}
return a},
aD:function(a){var u,t,s,r,q
if(a==null)return
u=P.jF(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
mY:function(a){var u={}
a.B(0,new P.j0(u))
return u},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
dO:function dO(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
eT:function eT(){},
eU:function eU(){},
ir:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iu:function iu(){},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
f9:function f9(){},
aS:function aS(){},
fD:function fD(){},
fK:function fK(){},
bL:function bL(){},
hc:function hc(){},
i:function i(){},
aW:function aW(){},
hy:function hy(){},
dp:function dp(){},
dq:function dq(){},
dA:function dA(){},
dB:function dB(){},
dM:function dM(){},
dN:function dN(){},
dU:function dU(){},
dV:function dV(){},
bf:function bf(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(a){this.a=a},
ek:function ek(){},
b0:function b0(){},
fE:function fE(){},
dc:function dc(){},
cN:function cN(){},
h7:function h7(){},
dI:function dI(){},
dJ:function dJ(){}},W={
k5:function(){var u=document.createElement("a")
return u},
ju:function(){var u=document.createElement("canvas")
return u},
lI:function(a,b,c){var u=document.body,t=(u&&C.q).a4(u,a,b,c)
t.toString
u=new H.bR(new W.T(t),new W.eL(),[W.w])
return u.gak(u)},
jw:function(a){return"wheel"},
bu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bm(a)
t=u.gcQ(a)
if(typeof t==="string")r=u.gcQ(a)}catch(s){H.a3(s)}return r},
kg:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
lL:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.a3(u)}return s},
iq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kK:function(a,b,c,d){var u=W.iq(W.iq(W.iq(W.iq(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
N:function(a,b,c,d){var u=W.kW(new W.io(c),W.h)
if(u!=null&&!0)J.ls(a,b,u,!1)
return new W.im(a,b,u,!1)},
kJ:function(a){var u=W.k5(),t=window.location
u=new W.bT(new W.iy(u,t))
u.de(a)
return u},
mp:function(a,b,c,d){return!0},
mq:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kL:function(){var u=P.k,t=P.kj(C.n,u),s=H.c(["TEMPLATE"],[u])
t=new W.iI(t,P.cA(u),P.cA(u),P.cA(u),null)
t.dg(null,new H.fm(C.n,new W.iJ(),[H.ea(C.n,0),u]),s,null)
return t},
kW:function(a,b){var u=$.ac
if(u===C.f)return a
return u.cl(a,b)},
m:function m(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
b1:function b1(){},
b2:function b2(){},
b3:function b3(){},
aK:function aK(){},
ey:function ey(){},
z:function z(){},
bt:function bt(){},
ez:function ez(){},
a5:function a5(){},
af:function af(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
aa:function aa(){},
eF:function eF(){},
cm:function cm(){},
cn:function cn(){},
eG:function eG(){},
eH:function eH(){},
ii:function ii(a,b){this.a=a
this.b=b},
I:function I(){},
eL:function eL(){},
h:function h(){},
e:function e(){},
ag:function ag(){},
bw:function bw(){},
eR:function eR(){},
eV:function eV(){},
aq:function aq(){},
f0:function f0(){},
by:function by(){},
ar:function ar(){},
b8:function b8(){},
ba:function ba(){},
ff:function ff(){},
fo:function fo(){},
bE:function bE(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
fs:function fs(a){this.a=a},
au:function au(){},
ft:function ft(){},
ah:function ah(){},
T:function T(a){this.a=a},
w:function w(){},
cG:function cG(){},
ax:function ax(){},
fI:function fI(){},
fT:function fT(){},
fU:function fU(a){this.a=a},
fW:function fW(){},
ay:function ay(){},
h5:function h5(){},
az:function az(){},
h6:function h6(){},
aA:function aA(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
ai:function ai(){},
cS:function cS(){},
hd:function hd(){},
he:function he(){},
bO:function bO(){},
aB:function aB(){},
aj:function aj(){},
hh:function hh(){},
hi:function hi(){},
hs:function hs(){},
aC:function aC(){},
be:function be(){},
hw:function hw(){},
hx:function hx(){},
aX:function aX(){},
hY:function hY(){},
i9:function i9(){},
aY:function aY(){},
bS:function bS(){},
ij:function ij(){},
de:function de(){},
ip:function ip(){},
dx:function dx(){},
iD:function iD(){},
iG:function iG(){},
ih:function ih(){},
il:function il(a){this.a=a},
im:function im(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
bT:function bT(a){this.a=a},
B:function B(){},
cH:function cH(a){this.a=a},
fB:function fB(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(){},
iA:function iA(){},
iB:function iB(){},
iI:function iI(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iJ:function iJ(){},
iH:function iH(){},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aw:function aw(){},
iy:function iy(a,b){this.a=a
this.b=b},
dZ:function dZ(a){this.a=a},
iT:function iT(a){this.a=a},
dd:function dd(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
bZ:function bZ(){},
c_:function c_(){},
dG:function dG(){},
dH:function dH(){},
dL:function dL(){},
dP:function dP(){},
dQ:function dQ(){},
c0:function c0(){},
c1:function c1(){},
dS:function dS(){},
dT:function dT(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){}},T={
D:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.b(P.S("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.A(a,0)
t=C.a.A(b,0)
s=new T.fN()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.fX()
u.d9(a)
return u},
an:function an(){},
cr:function cr(){},
aP:function aP(){},
U:function U(){this.a=null},
fN:function fN(){this.b=this.a=null},
fX:function fX(){this.a=null},
hj:function hj(){},
hk:function hk(){},
ho:function ho(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
hp:function hp(a){var _=this
_.a=a
_.e=_.d=_.b=null},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="bumpMaps",a2="modifiers",a3=V.ma("Test 008"),a4=W.ju()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4)
u=[P.k]
a3.cj(H.c(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],u))
a3.eE(H.c(["bumpMaps","scalars"],u))
a3.cj(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a)
if(t==null)H.Q(P.S("Failed to find an element with the identifier, testCanvas."))
s=E.mc(t,!0,!0,!0,!1)
r=F.n7(50,50)
q=r.e
if(q!=null)++q.d
r.d.bv()
r.a.bv()
q=r.e
if(q!=null)q.aO(0)
q=r.e
if(q!=null)++q.d
r.d.bt()
r.a.bt()
q=r.e
if(q!=null)q.aO(0)
r.d.fs()
for(p=r.a.c.length-1;p>=0;--p){q=r.a.c
if(p>=q.length)return H.d(q,p)
o=q[p]
if(o.ch!==0){o.ch=0
q=o.a
if(q!=null){q=q.e
if(q!=null)q.H(a0)}}n=o.eN()
if(n.ch!==1){n.ch=1
q=n.a
if(q!=null){q=q.e
if(q!=null)q.H(a0)}}r.a.m(0,n)
q=r.c.a
q.a.m(0,o)
q.a.m(0,n)
q=new F.bA()
m=o.a
if(m==null)H.Q(P.S("May not create a line with a start vertex which is not attached to a shape."))
if(m!=n.a)H.Q(P.S("May not create a line with vertices attached to different shapes."))
q.a=o
o.c.b.push(q)
q.b=n
n.c.c.push(q)
q.a.a.c.b.push(q)
q=q.a.a.e
if(q!=null)q.H(a0)}l=new T.ch()
l.c=1
l.sa3(0.5)
k=E.kf()
k.sbQ(0,r)
k.scR(l)
j=E.kf()
j.y.m(0,k)
q=new U.bx()
q.bT(U.a_)
q.b5(q.gdI(),q.ged())
q.e=null
q.f=V.fn()
q.r=0
m=s.r
i=new U.d6()
h=U.jv()
h.sbN(0,!0)
h.sbF(6.283185307179586)
h.sbH(0)
h.sa1(0,0)
h.sbG(100)
h.sP(0)
h.sbz(0.5)
i.b=h
g=i.gaq()
h.gu().m(0,g)
h=U.jv()
h.sbN(0,!0)
h.sbF(6.283185307179586)
h.sbH(0)
h.sa1(0,0)
h.sbG(100)
h.sP(0)
h.sbz(0.5)
i.c=h
h.gu().m(0,g)
i.d=null
i.r=i.f=i.e=!1
i.y=i.x=2.5
i.Q=4
i.ch=i.cx=!1
i.db=i.cy=0
i.dx=null
i.dy=0
i.fx=i.fr=null
f=new X.a6(!1,!1,!1)
e=i.d
i.d=f
h=new D.x(a2,e,f)
h.b=!0
i.M(h)
h=i.f
if(h!==!1){i.f=!1
h=new D.x("invertX",h,!1)
h.b=!0
i.M(h)}h=i.r
if(h!==!0){i.r=!0
h=new D.x("invertY",h,!0)
h.b=!0
i.M(h)}i.aG(m)
q.m(0,i)
m=s.r
i=new U.d5()
h=U.jv()
h.sbN(0,!0)
h.sbF(6.283185307179586)
h.sbH(0)
h.sa1(0,0)
h.sbG(100)
h.sP(0)
h.sbz(0.2)
i.b=h
h.gu().m(0,i.gaq())
i.c=null
i.d=!1
i.e=2.5
i.r=4
i.x=i.y=!1
i.z=0
i.Q=null
i.ch=0
i.cy=i.cx=null
f=new X.a6(!0,!1,!1)
e=i.c
i.c=f
h=new D.x(a2,e,f)
h.b=!0
i.M(h)
i.aG(m)
q.m(0,i)
m=s.r
i=new U.d7()
i.c=0.01
i.e=i.d=0
f=new X.a6(!1,!1,!1)
i.b=f
h=new D.x(a2,a0,f)
h.b=!0
i.M(h)
i.aG(m)
q.m(0,i)
j.saK(q)
q=new M.co()
q.a=!0
m=O.kb(E.ap)
q.e=m
m.b5(q.gdM(),q.gdO())
q.y=q.x=q.r=q.f=null
d=X.lK(a0)
c=new X.cJ()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saK(a0)
m=c.c
if(!(Math.abs(m-1.0471975511965976)<$.A().a)){c.c=1.0471975511965976
m=new D.x("fov",m,1.0471975511965976)
m.b=!0
c.ao(m)}m=c.d
if(!(Math.abs(m-0.1)<$.A().a)){c.d=0.1
m=new D.x("near",m,0.1)
m.b=!0
c.ao(m)}m=c.e
if(!(Math.abs(m-2000)<$.A().a)){c.e=2000
m=new D.x("far",m,2000)
m.b=!0
c.ao(m)}m=q.b
if(m!==c){if(m!=null)m.gu().U(0,q.gam())
e=q.b
q.b=c
c.gu().m(0,q.gam())
m=new D.x("camera",e,q.b)
m.b=!0
q.an(m)}m=q.c
if(m!==d){if(m!=null)m.gu().U(0,q.gam())
e=q.c
q.c=d
d.gu().m(0,q.gam())
m=new D.x("target",e,q.c)
m.b=!0
q.an(m)}q.e.m(0,j)
m=q.b
b=V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
i=new U.ck()
i.a=b
m.saK(i)
m=s.d
if(m!==q){if(m!=null)m.gu().U(0,s.gbU())
s.d=q
q.gu().m(0,s.gbU())
s.bV()}q=new V.hl(a1,new T.jb(l,s))
m=u.getElementById(a1)
q.c=m
if(m==null)H.Q("Failed to find bumpMaps for Texture2DGroup")
q.a_(0,"../resources/BumpMap1.png",!0)
q.m(0,"../resources/BumpMap2.png")
q.m(0,"../resources/BumpMap3.png")
q.m(0,"../resources/BumpMap4.png")
q.m(0,"../resources/BumpMap5.png")
q.m(0,"../resources/ScrewBumpMap.png")
q.m(0,"../resources/CtrlPnlBumpMap.png")
q=new V.fL("scalars")
u=u.getElementById("scalars")
q.c=u
if(u==null)H.Q("Failed to find scalars for RadioGroup")
q.a_(0,"0.1",new T.jc(l))
q.a_(0,"0.2",new T.jd(l))
q.a_(0,"0.3",new T.jf(l))
q.a_(0,"0.4",new T.jg(l))
q.cf(0,"0.5",new T.jh(l),!0)
q.a_(0,"0.6",new T.ji(l))
q.a_(0,"0.7",new T.jj(l))
q.a_(0,"0.8",new T.jk(l))
q.a_(0,"0.9",new T.jl(l))
q.a_(0,"1.0",new T.jm(l))
u=s.z
if(u==null)u=s.z=D.E()
q=u.b
u=q==null?u.b=H.c([],[{func:1,ret:-1,args:[D.R]}]):q
u.push(new T.je(a3,l))
V.nj(s)},
ep:function ep(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ch:function ch(){var _=this
_.d=_.c=_.b=_.a=null},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
je:function je(a,b){this.a=a
this.b=b}},R={
hu:function(){var u=new R.ht(),t=P.k
u.a=new H.ab([t,R.cQ])
u.b=new H.ab([t,R.cX])
return u},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.b=a
this.c=null},
ht:function ht(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null}},O={
kb:function(a){var u=new O.b4([a])
u.bT(a)
return u},
b4:function b4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bD:function bD(){this.b=this.a=null},
cT:function cT(){}},E={
kf:function(){var u,t=new E.ap()
t.a=""
t.b=!0
u=O.kb(E.ap)
t.y=u
u.b5(t.gfb(),t.gfe())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbQ(0,null)
t.scR(null)
t.saK(null)
return t},
m8:function(a,b){var u=new E.fP(a)
u.d8(a,b)
return u},
mc:function(a,b,c,d,e){var u,t,s=J.G(a)
if(!!s.$ib3)return E.kw(a,!0,!0,!0,!1)
u=W.ju()
t=u.style
t.width="100%"
t.height="100%"
s.gbw(a).m(0,u)
return E.kw(u,!0,!0,!0,!1)},
kw:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cU(),p=C.i.bO(a,"webgl2",P.lR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.Q(P.S("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.m8(p,a)
u=new T.hp(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d4(a)
t=new X.f8()
t.c=new X.a6(!1,!1,!1)
t.d=P.cA(P.r)
u.b=t
t=new X.fu(u)
t.f=0
t.r=V.aT()
t.x=V.aT()
t.ch=t.Q=1
u.c=t
t=new X.fg(u)
t.r=0
t.x=V.aT()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hv(u)
t.f=V.aT()
t.r=V.aT()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cR,P.V]])
u.z=t
s=document
t.push(W.N(s,"contextmenu",u.gdQ(),!1))
u.z.push(W.N(a,"focus",u.gdW(),!1))
u.z.push(W.N(a,"blur",u.gdK(),!1))
u.z.push(W.N(s,"keyup",u.ge_(),!1))
u.z.push(W.N(s,"keydown",u.gdY(),!1))
u.z.push(W.N(a,"mousedown",u.ge2(),!1))
u.z.push(W.N(a,"mouseup",u.ge6(),!1))
u.z.push(W.N(a,r,u.ge4(),!1))
t=u.z
W.jw(a)
W.jw(a)
t.push(W.N(a,W.jw(a),u.ge8(),!1))
u.z.push(W.N(s,r,u.gdS(),!1))
u.z.push(W.N(s,"mouseup",u.gdU(),!1))
u.z.push(W.N(s,"pointerlockchange",u.gea(),!1))
u.z.push(W.N(a,"touchstart",u.gej(),!1))
u.z.push(W.N(a,"touchend",u.gef(),!1))
u.z.push(W.N(a,"touchmove",u.geh(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.Z(Date.now(),!1)
q.cy=0
q.c9()
return q},
en:function en(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fP:function fP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
cU:function cU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hr:function hr(a){this.a=a}},Z={
kI:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iZ(c)),35044)
a.bindBuffer(b,null)
return new Z.da(b,u)},
a8:function(a){return new Z.bQ(a)},
da:function da(a,b){this.a=a
this.b=b},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ia:function ia(a){this.a=a},
cg:function cg(a,b){this.a=a
this.b=null
this.c=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a){this.a=a}},D={
E:function(){var u=new D.bv()
u.d=0
return u},
er:function er(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
R:function R(){this.b=null},
cs:function cs(){this.b=null},
ct:function ct(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={ci:function ci(a,b){this.a=a
this.b=b},cz:function cz(a,b){this.a=a
this.b=b},f8:function f8(){var _=this
_.d=_.c=_.b=_.a=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fg:function fg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},av:function av(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fu:function fu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fJ:function fJ(){},cY:function cY(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hv:function hv(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d4:function d4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lK:function(a){var u=new X.eX(),t=new V.b5(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kt
if(t==null){t=V.ks(0,0,1,1)
$.kt=t}u.r=t
return u},
jt:function jt(){},
eX:function eX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){}},V={
np:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aQ(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.a7("null",c)
return C.a.a7(C.d.cS(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
j2:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=0,t=0;t<4;++t){s=V.F(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.d(o,q)
r=C.a.a7(o[q],u)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=r}return o},
jY:function(a){return C.d.fC(Math.pow(2,C.Q.bA(Math.log(H.mX(a))/Math.log(2))))},
fn:function(){var u=$.kk
return u==null?$.kk=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aT:function(){var u=$.kn
return u==null?$.kn=new V.a7(0,0):u},
ks:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cM(a,b,c,d)},
d8:function(){var u=$.kG
return u==null?$.kG=new V.O(0,0,0):u},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
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
a7:function a7(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y:function y(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function(a){P.md(C.N,new V.jo(a))},
ma:function(a){var u=new V.h1()
u.dc(a,!0)
return u},
cj:function cj(){},
jo:function jo(a){this.a=a},
eD:function eD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fL:function fL(a){this.a=a
this.c=null},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a},
h4:function h4(a){this.a=a},
hl:function hl(a,b){this.a=a
this.c=null
this.d=b},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(){}},U={
jv:function(){var u=new U.et()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
et:function et(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){this.b=this.a=null},
bx:function bx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a_:function a_(){},
d5:function d5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={co:function co(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jJ:function(a,b,c,d,e){var u=new A.hC(a,c,e)
u.f=d
P.lS(d,0,P.r)
return u},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a},
cO:function cO(){},
d_:function d_(){},
hJ:function hJ(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c}},F={
n7:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.j4()
return F.nm(b,a,new F.j5(t))},
nm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fY()
t=new F.i1(u)
t.b=!1
s=[F.d9]
t.c=H.c([],s)
u.a=t
t=new F.h0()
t.b=H.c([],[F.cK])
u.b=t
t=new F.h_(u)
t.b=H.c([],[F.bA])
u.c=t
t=new F.fZ(u)
t.b=H.c([],[F.b7])
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.ci(new V.b5(s,0,0,1),new V.a7(p,1))
c.$3(o,p,0)
r.push(o.by(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.ci(new V.b5(j,i,h,1),new V.a7(p,m))
c.$3(o,p,n)
r.push(o.by(null))}}u.d.eG(a+1,b+1,r)
return u},
eQ:function(a,b,c){var u=new F.b7(),t=a.a
if(t==null)H.Q(P.S("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.Q(P.S("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
kH:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.d9(),r=new F.i6()
r.b=H.c([],[F.cK])
s.b=r
r=new F.i5()
u=[F.bA]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.i2()
u=[F.b7]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.lj()
s.e=0
r=$.aG()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aF().a)!==0?e:t
s.x=(u&$.aE().a)!==0?b:t
s.y=(u&$.aH().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.lk().a)!==0?c:t
s.ch=(u&$.aI().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
j4:function j4(){},
j5:function j5(a){this.a=a},
b7:function b7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){this.b=this.a=null},
cK:function cK(){},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(){this.b=null},
d9:function d9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a){this.a=a},
i7:function i7(a){this.a=a},
i1:function i1(a){this.a=a
this.c=this.b=null},
i2:function i2(){this.d=this.c=this.b=null},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(){this.c=this.b=null},
i6:function i6(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jD.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gD:function(a){return H.bJ(a)},
h:function(a){return"Instance of '"+H.f(H.bK(a))+"'"}}
J.f5.prototype={
h:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$ib_:1}
J.cw.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gD:function(a){return 0}}
J.cy.prototype={
gD:function(a){return 0},
h:function(a){return String(a)}}
J.fG.prototype={}
J.bP.prototype={}
J.aN.prototype={
h:function(a){var u=a[$.l7()]
if(u==null)return this.d5(a)
return"JavaScript function for "+H.f(J.X(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aM.prototype={
U:function(a,b){var u
if(!!a.fixed$length)H.Q(P.t("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.b(P.ae(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
f7:function(a){return this.k(a,"")},
f0:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.b(P.ae(a))}return u},
f1:function(a,b,c){return this.f0(a,b,c,null)},
f_:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.b(P.ae(a))}throw H.b(H.jA())},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
d1:function(a,b,c){if(b<0||b>a.length)throw H.b(P.P(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.b(P.P(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ea(a,0)])
return H.c(a.slice(b,c),[H.ea(a,0)])},
gac:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.jA())},
ck:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.b(P.ae(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
h:function(a){return P.jz(a,"[","]")},
gT:function(a){return new J.Y(a,a.length)},
gD:function(a){return H.bJ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Q(P.t("set length"))
if(b<0)throw H.b(P.P(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.b(H.c5(a,b))
return a[b]},
$ij:1,
$io:1}
J.jC.prototype={}
J.Y.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.v(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.cx.prototype={
fC:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.b(P.t(""+a+".toInt()"))},
bA:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.t(""+a+".floor()"))},
a8:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.t(""+a+".round()"))},
cS:function(a,b){var u,t
if(b>20)throw H.b(P.P(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
aP:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.P(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.Q(P.t("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aQ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cb(a,b)},
at:function(a,b){return(a|0)===a?a/b|0:this.cb(a,b)},
cb:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.t("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
as:function(a,b){var u
if(a>0)u=this.ca(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ew:function(a,b){if(b<0)throw H.b(H.am(b))
return this.ca(a,b)},
ca:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia2:1}
J.cv.prototype={$ir:1}
J.cu.prototype={}
J.b9.prototype={
S:function(a,b){if(b<0)throw H.b(H.c5(a,b))
if(b>=a.length)H.Q(H.c5(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(b>=a.length)throw H.b(H.c5(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(typeof b!=="string")throw H.b(P.k6(b,null,null))
return a+b},
ay:function(a,b,c,d){var u,t
c=P.aV(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
Y:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.P(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
W:function(a,b){return this.Y(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.Q(H.am(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.b(P.fO(b,null))
if(b>c)throw H.b(P.fO(b,null))
if(c>a.length)throw H.b(P.fO(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.p(a,b,null)},
fF:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
aX:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.P(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cw:function(a,b){return this.aX(a,b,0)},
h:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ik:1}
H.l.prototype={
gj:function(a){return this.a.length},
l:function(a,b){return C.a.S(this.a,b)},
$aq:function(){return[P.r]},
$aj:function(){return[P.r]},
$ao:function(){return[P.r]}}
H.eK.prototype={}
H.cB.prototype={
gT:function(a){return new H.bB(this,this.gj(this))},
b2:function(a,b){return this.d4(0,b)}}
H.bB.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.c6(s),q=r.gj(s)
if(t.b!==q)throw H.b(P.ae(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.fk.prototype={
gT:function(a){return new H.fl(J.aJ(this.a),this.b)},
gj:function(a){return J.a4(this.a)},
E:function(a,b){return this.b.$1(J.ec(this.a,b))},
$aj:function(a,b){return[b]}}
H.fl.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.fm.prototype={
gj:function(a){return J.a4(this.a)},
E:function(a,b){return this.b.$1(J.ec(this.a,b))},
$acB:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bR.prototype={
gT:function(a){return new H.ib(J.aJ(this.a),this.b)}}
H.ib.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cp.prototype={}
H.hQ.prototype={
n:function(a,b,c){throw H.b(P.t("Cannot modify an unmodifiable list"))}}
H.d2.prototype={}
H.ev.prototype={
h:function(a){return P.jH(this)},
n:function(a,b,c){return H.lF()},
$iK:1}
H.ew.prototype={
gj:function(a){return this.a},
aV:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
l:function(a,b){if(!this.aV(0,b))return
return this.c5(b)},
c5:function(a){return this.b[a]},
B:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.c5(s))}}}
H.hz.prototype={
a5:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f7.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hP.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jq.prototype={
$1:function(a){if(!!J.G(a).$ib6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dK.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bs.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gfH:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hg.prototype={}
H.h8.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eb(u)+"'"}}
H.bq.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gD:function(a){var u,t=this.c
if(t==null)u=H.bJ(this.a)
else u=typeof t!=="object"?J.cc(t):H.bJ(t)
return(u^H.bJ(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bK(u))+"'")}}
H.eq.prototype={
h:function(a){return this.a}}
H.fV.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.ab.prototype={
gj:function(a){return this.a},
gf6:function(a){return this.a===0},
gX:function(a){return new H.fb(this,[H.ea(this,0)])},
aV:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.c2(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.c2(t,b)}else return s.f3(b)},
f3:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bD(u.be(t,u.bC(a)),a)>=0},
l:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aS(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aS(r,b)
s=t==null?null:t.b
return s}else return q.f4(b)},
f4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.be(r,s.bC(a))
t=s.bD(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.bY(u==null?s.b=s.bm():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.bY(t==null?s.c=s.bm():t,b,c)}else s.f5(b,c)},
f5:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bm()
u=r.bC(a)
t=r.be(q,u)
if(t==null)r.bp(q,u,[r.bn(a,b)])
else{s=r.bD(t,a)
if(s>=0)t[s].b=b
else t.push(r.bn(a,b))}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.b(P.ae(u))
t=t.c}},
bY:function(a,b,c){var u=this.aS(a,b)
if(u==null)this.bp(a,b,this.bn(b,c))
else u.b=c},
dF:function(){this.r=this.r+1&67108863},
bn:function(a,b){var u,t=this,s=new H.fa(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dF()
return s},
bC:function(a){return J.cc(a)&0x3ffffff},
bD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
h:function(a){return P.jH(this)},
aS:function(a,b){return a[b]},
be:function(a,b){return a[b]},
bp:function(a,b,c){a[b]=c},
dw:function(a,b){delete a[b]},
c2:function(a,b){return this.aS(a,b)!=null},
bm:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bp(t,u,t)
this.dw(t,u)
return t}}
H.fa.prototype={}
H.fb.prototype={
gj:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fc(u,u.r)
t.c=u.e
return t}}
H.fc.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.ae(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j7.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.j8.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j9.prototype={
$1:function(a){return this.a(a)}}
H.f6.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im6:1}
H.bG.prototype={$ibG:1}
H.aQ.prototype={$iaQ:1}
H.cD.prototype={
gj:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bH.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]},
n:function(a,b,c){H.al(b,a,a.length)
a[b]=c},
$aq:function(){return[P.H]},
$ij:1,
$aj:function(){return[P.H]},
$io:1,
$ao:function(){return[P.H]}}
H.cE.prototype={
n:function(a,b,c){H.al(b,a,a.length)
a[b]=c},
$aq:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]},
$io:1,
$ao:function(){return[P.r]}}
H.fv.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.fw.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.fx.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.fy.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.fz.prototype={
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.cF.prototype={
gj:function(a){return a.length},
l:function(a,b){H.al(b,a,a.length)
return a[b]}}
H.bI.prototype={
gj:function(a){return a.length},
l:function(a,b){H.al(b,a,a.length)
return a[b]},
$ibI:1,
$ibf:1}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
H.bY.prototype={}
P.id.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ic.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ie.prototype={
$0:function(){this.a.$0()}}
P.ig.prototype={
$0:function(){this.a.$0()}}
P.dR.prototype={
dh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bl(new P.iL(this,b),0),a)
else throw H.b(P.t("`setTimeout()` not found."))},
di:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bl(new P.iK(this,a,Date.now(),b),0),a)
else throw H.b(P.t("Periodic timer."))},
$icV:1}
P.iL.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iK.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.d7(u,q)}s.c=r
t.d.$1(s)}}
P.db.prototype={}
P.cR.prototype={}
P.hb.prototype={}
P.cV.prototype={}
P.iU.prototype={}
P.j_.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cI():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.h(0)
throw u}}
P.iv.prototype={
fw:function(a){var u,t,s,r=null
try{if(C.f===$.ac){a.$0()
return}P.mO(r,r,this,a)}catch(s){u=H.a3(s)
t=H.jV(s)
P.kT(r,r,this,u,t)}},
fz:function(a,b){var u,t,s,r=null
try{if(C.f===$.ac){a.$1(b)
return}P.mP(r,r,this,a,b)}catch(s){u=H.a3(s)
t=H.jV(s)
P.kT(r,r,this,u,t)}},
fA:function(a,b){return this.fz(a,b,null)},
eK:function(a){return new P.iw(this,a)},
cl:function(a,b){return new P.ix(this,a,b)}}
P.iw.prototype={
$0:function(){return this.a.fw(this.b)}}
P.ix.prototype={
$1:function(a){return this.a.fA(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.is.prototype={
gT:function(a){var u=new P.dr(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ds(b)
return t}},
ds:function(a){var u=this.d
if(u==null)return!1
return this.bc(this.c6(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c_(u==null?s.b=P.jM():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c_(t==null?s.c=P.jM():t,b)}else return s.dk(0,b)},
dk:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jM()
u=s.c1(b)
t=r[u]
if(t==null)r[u]=[s.b9(b)]
else{if(s.bc(t,b)>=0)return!1
t.push(s.b9(b))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.em(this.c,b)
else return this.el(0,b)},
el:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c6(r,b)
t=s.bc(u,b)
if(t<0)return!1
s.cd(u.splice(t,1)[0])
return!0},
c_:function(a,b){if(a[b]!=null)return!1
a[b]=this.b9(b)
return!0},
em:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cd(u)
delete a[b]
return!0},
c0:function(){this.r=1073741823&this.r+1},
b9:function(a){var u,t=this,s=new P.it(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c0()
return s},
cd:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c0()},
c1:function(a){return J.cc(a)&1073741823},
c6:function(a,b){return a[this.c1(b)]},
bc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.it.prototype={}
P.dr.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.ae(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fd.prototype={
$2:function(a,b){this.a.n(0,a,b)},
$S:3}
P.fe.prototype={$ij:1,$io:1}
P.q.prototype={
gT:function(a){return new H.bB(a,this.gj(a))},
E:function(a,b){return this.l(a,b)},
B:function(a,b){var u,t=this.gj(a)
for(u=0;u<t;++u){b.$1(this.l(a,u))
if(t!==this.gj(a))throw H.b(P.ae(a))}},
fE:function(a,b){var u,t,s=this,r=H.c([],[H.n5(s,a,"q",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.l(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t}return r},
fD:function(a){return this.fE(a,!0)},
eY:function(a,b,c,d){var u
P.aV(b,c,this.gj(a))
for(u=b;u<c;++u)this.n(a,u,d)},
h:function(a){return P.jz(a,"[","]")}}
P.fh.prototype={}
P.fi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:3}
P.as.prototype={
B:function(a,b){var u,t
for(u=J.aJ(this.gX(a));u.v();){t=u.gG(u)
b.$2(t,this.l(a,t))}},
gj:function(a){return J.a4(this.gX(a))},
h:function(a){return P.jH(a)},
$iK:1}
P.iM.prototype={
n:function(a,b,c){throw H.b(P.t("Cannot modify unmodifiable map"))}}
P.fj.prototype={
l:function(a,b){return J.k2(this.a,b)},
n:function(a,b,c){J.jr(this.a,b,c)},
B:function(a,b){J.k3(this.a,b)},
gj:function(a){return J.a4(this.a)},
h:function(a){return J.X(this.a)},
$iK:1}
P.d3.prototype={}
P.iz.prototype={
aa:function(a,b){var u
for(u=J.aJ(b);u.v();)this.m(0,u.gG(u))},
h:function(a){return P.jz(this,"{","}")},
E:function(a,b){var u,t,s
P.kr(b,"index")
for(u=P.ms(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.b(P.C(b,this,"index",null,t))},
$ij:1}
P.ds.prototype={}
P.dX.prototype={}
P.el.prototype={
fa:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aV(a0,a1,b.length)
u=$.lm()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.A(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.j6(C.a.A(b,n))
j=H.j6(C.a.A(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.M("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.bc(m)
s=n
continue}}throw H.b(P.J("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.k7(b,p,a1,q,o,f)
else{e=C.c.aQ(f-1,4)+1
if(e===1)throw H.b(P.J(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.ay(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.k7(b,p,a1,q,o,d)
else{e=C.c.aQ(d,4)
if(e===1)throw H.b(P.J(c,b,a1))
if(e>1)b=C.a.ay(b,a1,a1,e===2?"==":"=")}return b}}
P.em.prototype={}
P.es.prototype={}
P.ex.prototype={}
P.eM.prototype={}
P.f2.prototype={
h:function(a){return this.a}}
P.f1.prototype={
dt:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.M("")
if(r>b)q.a+=C.a.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lx(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hZ.prototype={
geX:function(){return C.L}}
P.i0.prototype={
bx:function(a){var u,t,s=P.aV(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iS(u)
if(t.dA(a,0,s)!==s)t.ce(J.lt(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mJ(0,t.b,u.length)))}}
P.iS.prototype={
ce:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
dA:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.A(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ce(r,C.a.A(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.i_.prototype={
bx:function(a){var u,t,s,r,q,p,o,n,m=P.mg(!1,a,0,null)
if(m!=null)return m
u=P.aV(0,null,J.a4(a))
t=P.kV(a,0,u)
if(t>0){s=P.bN(a,0,t)
if(t===u)return s
r=new P.M(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.M("")
o=new P.iR(!1,r)
o.c=p
o.eM(a,q,u)
if(o.e>0){H.Q(P.J("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bc(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iR.prototype={
eM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.c6(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.b3()
if((r&192)!==128){q=P.J(k+C.c.aP(r,16),a,s)
throw H.b(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.u,q)
if(j<=C.u[q]){q=P.J("Overlong encoding of 0x"+C.c.aP(j,16),a,s-h-1)
throw H.b(q)}if(j>1114111){q=P.J("Character outside valid Unicode range: 0x"+C.c.aP(j,16),a,s-h-1)
throw H.b(q)}if(!l.c||j!==65279)t.a+=H.bc(j)
l.c=!1}for(q=s<c;q;){p=P.kV(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bN(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.J("Negative UTF-8 code unit: -0x"+C.c.aP(-r,16),a,n-1)
throw H.b(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.J(k+C.c.aP(r,16),a,n-1)
throw H.b(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.b_.prototype={}
P.Z.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.c.as(u,30))&1073741823},
h:function(a){var u=this,t=P.lG(H.m2(u)),s=P.cl(H.m0(u)),r=P.cl(H.lX(u)),q=P.cl(H.lY(u)),p=P.cl(H.m_(u)),o=P.cl(H.m1(u)),n=P.lH(H.lZ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.H.prototype={}
P.aL.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a},
gD:function(a){return C.c.gD(this.a)},
h:function(a){var u,t,s,r=new P.eJ(),q=this.a
if(q<0)return"-"+new P.aL(0-q).h(0)
u=r.$1(C.c.at(q,6e7)%60)
t=r.$1(C.c.at(q,1e6)%60)
s=new P.eI().$1(q%1e6)
return""+C.c.at(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b6.prototype={}
P.cI.prototype={
h:function(a){return"Throw of null."}}
P.a9.prototype={
gbb:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gba:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbb()+o+u
if(!q.a)return t
s=q.gba()
r=P.jy(q.b)
return t+s+": "+r}}
P.bd.prototype={
gbb:function(){return"RangeError"},
gba:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.f3.prototype={
gbb:function(){return"RangeError"},
gba:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.hR.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bM.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jy(u)+"."}}
P.fF.prototype={
h:function(a){return"Out of Memory"},
$ib6:1}
P.cP.prototype={
h:function(a){return"Stack Overflow"},
$ib6:1}
P.eC.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dj.prototype={
h:function(a){return"Exception: "+this.a}}
P.eW.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.A(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.S(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.eY.prototype={}
P.r.prototype={}
P.j.prototype={
b2:function(a,b){return new H.bR(this,b,[H.jU(this,"j",0)])},
gj:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gak:function(a){var u,t=this.gT(this)
if(!t.v())throw H.b(H.jA())
u=t.gG(t)
if(t.v())throw H.b(H.lN())
return u},
E:function(a,b){var u,t,s
P.kr(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gG(u)
if(b===t)return s;++t}throw H.b(P.C(b,this,"index",null,t))},
h:function(a){return P.lM(this,"(",")")}}
P.f4.prototype={}
P.o.prototype={$ij:1}
P.K.prototype={}
P.aR.prototype={
gD:function(a){return P.V.prototype.gD.call(this,this)},
h:function(a){return"null"}}
P.a2.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
t:function(a,b){return this===b},
gD:function(a){return H.bJ(this)},
h:function(a){return"Instance of '"+H.f(H.bK(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.M.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hX.prototype={
$2:function(a,b){var u,t,s,r=J.c7(b).cw(b,"=")
if(r===-1){if(b!=="")J.jr(a,P.jQ(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.jr(a,P.jQ(u,0,u.length,s,!0),P.jQ(t,0,t.length,s,!0))}return a}}
P.hT.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv4 address, "+a,this.a,b))}}
P.hV.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hW.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.c9(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bh.prototype={
gcW:function(){return this.b},
gbB:function(a){var u=this.c
if(u==null)return""
if(C.a.W(u,"["))return C.a.p(u,1,u.length-1)
return u},
gaZ:function(a){var u=this.d
if(u==null)return P.kM(this.a)
return u},
gbK:function(a){var u=this.f
return u==null?"":u},
gcr:function(){var u=this.r
return u==null?"":u},
bL:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.W(u,"/"))u="/"+u
s=P.jO(null,0,0,b)
return new P.bh(q,o,m,n,u,s,r.r)},
gaN:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.d3(P.kC(t==null?"":t),[u,u])
t=u}return t},
gcs:function(){return this.c!=null},
gcv:function(){return this.f!=null},
gct:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.G(b).$ijK)if(s.a==b.gb4())if(s.c!=null===b.gcs())if(s.b==b.gcW())if(s.gbB(s)==b.gbB(b))if(s.gaZ(s)==b.gaZ(b))if(s.e===b.gcK(b)){u=s.f
t=u==null
if(!t===b.gcv()){if(t)u=""
if(u===b.gbK(b)){u=s.r
t=u==null
if(!t===b.gct()){if(t)u=""
u=u===b.gcr()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gD:function(a){var u=this.z
return u==null?this.z=C.a.gD(this.h(0)):u},
$ijK:1,
gb4:function(){return this.a},
gcK:function(a){return this.e}}
P.iN.prototype={
$1:function(a){throw H.b(P.J("Invalid port",this.a,this.b+1))}}
P.iO.prototype={
$1:function(a){return P.dY(C.W,a,C.e,!1)}}
P.iQ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.dY(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.dY(C.h,b,C.e,!0))}}}
P.iP.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aJ(b),t=this.a;u.v();)t.$2(a,u.gG(u))}}
P.hS.prototype={
gcV:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.aX(u,"?",o)
s=u.length
if(t>=0){r=P.c2(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.ik("data",p,p,p,P.c2(u,o,s,C.y,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iW.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iV.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lu(u,0,96,b)
return u},
$S:15}
P.iX.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.A(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.iY.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.A(b,0),t=C.a.A(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.iC.prototype={
gcs:function(){return this.c>0},
gcu:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.J()
t=this.e
if(typeof t!=="number")return H.n(t)
t=u+1<t
u=t}else u=!1
return u},
gcv:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gct:function(){return this.r<this.a.length},
gc7:function(){return this.b===4&&C.a.W(this.a,"http")},
gc8:function(){return this.b===5&&C.a.W(this.a,"https")},
gb4:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gc7())q=t.x="http"
else if(t.gc8()){t.x="https"
q="https"}else if(q===4&&C.a.W(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.W(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
gcW:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gbB:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gaZ:function(a){var u,t=this
if(t.gcu()){u=t.d
if(typeof u!=="number")return u.J()
return P.c9(C.a.p(t.a,u+1,t.e),null,null)}if(t.gc7())return 80
if(t.gc8())return 443
return 0},
gcK:function(a){return C.a.p(this.a,this.e,this.f)},
gbK:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.p(this.a,u+1,t):""},
gcr:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gaN:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.k
return new P.d3(P.kC(u.gbK(u)),[t,t])},
bL:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gb4(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gcu()?p.gaZ(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.W(t,"/"))t="/"+t
r=P.jO(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bh(n,k,u,j,t,r,q)},
gD:function(a){var u=this.y
return u==null?this.y=C.a.gD(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.G(b).$ijK&&this.a===b.h(0)},
h:function(a){return this.a},
$ijK:1}
P.ik.prototype={}
W.m.prototype={}
W.ed.prototype={
gj:function(a){return a.length}}
W.ee.prototype={
h:function(a){return String(a)}}
W.ef.prototype={
h:function(a){return String(a)}}
W.b1.prototype={$ib1:1}
W.b2.prototype={$ib2:1}
W.b3.prototype={
bO:function(a,b,c){if(c!=null)return a.getContext(b,P.mY(c))
return a.getContext(b)},
cY:function(a,b){return this.bO(a,b,null)},
$ib3:1}
W.aK.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gj:function(a){return a.length}}
W.z.prototype={$iz:1}
W.bt.prototype={
gj:function(a){return a.length}}
W.ez.prototype={}
W.a5.prototype={}
W.af.prototype={}
W.eA.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gj:function(a){return a.length}}
W.aa.prototype={$iaa:1}
W.eF.prototype={
h:function(a){return String(a)}}
W.cm.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.a0,P.a2]]},
$aq:function(){return[[P.a0,P.a2]]},
$ij:1,
$aj:function(){return[[P.a0,P.a2]]},
$io:1,
$ao:function(){return[[P.a0,P.a2]]}}
W.cn.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaj(a))+" x "+H.f(this.gag(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia0)return!1
return a.left===u.gaY(b)&&a.top===u.gb0(b)&&this.gaj(a)===u.gaj(b)&&this.gag(a)===u.gag(b)},
gD:function(a){return W.kK(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(this.gaj(a)),C.d.gD(this.gag(a)))},
gcm:function(a){return a.bottom},
gag:function(a){return a.height},
gaY:function(a){return a.left},
gcP:function(a){return a.right},
gb0:function(a){return a.top},
gaj:function(a){return a.width},
$ia0:1,
$aa0:function(){return[P.a2]}}
W.eG.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.k]},
$aq:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
W.eH.prototype={
gj:function(a){return a.length}}
W.ii.prototype={
gj:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.fD(this)
return new J.Y(u,u.length)},
$aq:function(){return[W.I]},
$aj:function(){return[W.I]},
$ao:function(){return[W.I]}}
W.I.prototype={
geJ:function(a){return new W.il(a)},
gbw:function(a){return new W.ii(a,a.children)},
gcn:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a0(u,t,s,r,[P.a2])},
h:function(a){return a.localName},
a4:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ke
if(u==null){u=H.c([],[W.aw])
t=new W.cH(u)
u.push(W.kJ(null))
u.push(W.kL())
$.ke=t
d=t}else d=u
u=$.kd
if(u==null){u=new W.dZ(d)
$.kd=u
c=u}else{u.a=d
c=u}}if($.ao==null){u=document
t=u.implementation.createHTMLDocument("")
$.ao=t
$.jx=t.createRange()
s=$.ao.createElement("base")
s.href=u.baseURI
$.ao.head.appendChild(s)}u=$.ao
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ao
if(!!this.$ib2)r=u.body
else{r=u.createElement(a.tagName)
$.ao.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.V(C.U,a.tagName)){$.jx.selectNodeContents(r)
q=$.jx.createContextualFragment(b)}else{r.innerHTML=b
q=$.ao.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ao.body
if(r==null?u!=null:r!==u)J.k4(r)
c.bP(q)
document.adoptNode(q)
return q},
eP:function(a,b,c){return this.a4(a,b,c,null)},
d0:function(a,b){a.textContent=null
a.appendChild(this.a4(a,b,null,null))},
$iI:1,
gcQ:function(a){return a.tagName}}
W.eL.prototype={
$1:function(a){return!!J.G(a).$iI}}
W.h.prototype={$ih:1}
W.e.prototype={
eF:function(a,b,c,d){if(c!=null)this.dl(a,b,c,!1)},
dl:function(a,b,c,d){return a.addEventListener(b,H.bl(c,1),!1)}}
W.ag.prototype={$iag:1}
W.bw.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ag]},
$aq:function(){return[W.ag]},
$ij:1,
$aj:function(){return[W.ag]},
$io:1,
$ao:function(){return[W.ag]},
$ibw:1}
W.eR.prototype={
gj:function(a){return a.length}}
W.eV.prototype={
gj:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.f0.prototype={
gj:function(a){return a.length}}
W.by.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.w]},
$aq:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]},
$io:1,
$ao:function(){return[W.w]}}
W.ar.prototype={$iar:1,
gco:function(a){return a.data}}
W.b8.prototype={$ib8:1}
W.ba.prototype={$iba:1}
W.ff.prototype={
h:function(a){return String(a)}}
W.fo.prototype={
gj:function(a){return a.length}}
W.bE.prototype={$ibE:1}
W.fp.prototype={
l:function(a,b){return P.aD(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gX:function(a){var u=H.c([],[P.k])
this.B(a,new W.fq(u))
return u},
gj:function(a){return a.size},
n:function(a,b,c){throw H.b(P.t("Not supported"))},
$iK:1,
$aK:function(){return[P.k,null]}}
W.fq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fr.prototype={
l:function(a,b){return P.aD(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gX:function(a){var u=H.c([],[P.k])
this.B(a,new W.fs(u))
return u},
gj:function(a){return a.size},
n:function(a,b,c){throw H.b(P.t("Not supported"))},
$iK:1,
$aK:function(){return[P.k,null]}}
W.fs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.ft.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.au]},
$aq:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.ah.prototype={$iah:1}
W.T.prototype={
gak:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.b(P.ku("No elements"))
if(t>1)throw H.b(P.ku("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
n:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.cq(u,u.length)},
gj:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.w]},
$aj:function(){return[W.w]},
$ao:function(){return[W.w]}}
W.w.prototype={
fq:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fu:function(a,b){var u,t
try{u=a.parentNode
J.lr(u,b,a)}catch(t){H.a3(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.d3(a):u},
en:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cG.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.w]},
$aq:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]},
$io:1,
$ao:function(){return[W.w]}}
W.ax.prototype={$iax:1,
gj:function(a){return a.length}}
W.fI.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ax]},
$aq:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.fT.prototype={
l:function(a,b){return P.aD(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gX:function(a){var u=H.c([],[P.k])
this.B(a,new W.fU(u))
return u},
gj:function(a){return a.size},
n:function(a,b,c){throw H.b(P.t("Not supported"))},
$iK:1,
$aK:function(){return[P.k,null]}}
W.fU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fW.prototype={
gj:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.h5.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ay]},
$aq:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.az.prototype={$iaz:1}
W.h6.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.az]},
$aq:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.aA.prototype={$iaA:1,
gj:function(a){return a.length}}
W.h9.prototype={
l:function(a,b){return a.getItem(b)},
n:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gX:function(a){var u=H.c([],[P.k])
this.B(a,new W.ha(u))
return u},
gj:function(a){return a.length},
$iK:1,
$aK:function(){return[P.k,P.k]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ai.prototype={$iai:1}
W.cS.prototype={
a4:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=W.lI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.T(t).aa(0,new W.T(u))
return t}}
W.hd.prototype={
a4:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.A.a4(u.createElement("table"),b,c,d)
u.toString
u=new W.T(u)
s=u.gak(u)
s.toString
u=new W.T(s)
r=u.gak(u)
t.toString
r.toString
new W.T(t).aa(0,new W.T(r))
return t}}
W.he.prototype={
a4:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.A.a4(u.createElement("table"),b,c,d)
u.toString
u=new W.T(u)
s=u.gak(u)
t.toString
s.toString
new W.T(t).aa(0,new W.T(s))
return t}}
W.bO.prototype={$ibO:1}
W.aB.prototype={$iaB:1}
W.aj.prototype={$iaj:1}
W.hh.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aj]},
$aq:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]},
$io:1,
$ao:function(){return[W.aj]}}
W.hi.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.hs.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.be.prototype={$ibe:1}
W.hw.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.hx.prototype={
gj:function(a){return a.length}}
W.aX.prototype={}
W.hY.prototype={
h:function(a){return String(a)}}
W.i9.prototype={
gj:function(a){return a.length}}
W.aY.prototype={
geS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.t("deltaY is not supported"))},
geR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.t("deltaX is not supported"))},
$iaY:1}
W.bS.prototype={
eo:function(a,b){return a.requestAnimationFrame(H.bl(b,1))},
dz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ij.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.z]},
$aq:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$io:1,
$ao:function(){return[W.z]}}
W.de.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia0)return!1
return a.left===u.gaY(b)&&a.top===u.gb0(b)&&a.width===u.gaj(b)&&a.height===u.gag(b)},
gD:function(a){return W.kK(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(a.width),C.d.gD(a.height))},
gag:function(a){return a.height},
gaj:function(a){return a.width}}
W.ip.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aq]},
$aq:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$io:1,
$ao:function(){return[W.aq]}}
W.dx.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.w]},
$aq:function(){return[W.w]},
$ij:1,
$aj:function(){return[W.w]},
$io:1,
$ao:function(){return[W.w]}}
W.iD.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aA]},
$aq:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.iG.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a[b]},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ai]},
$aq:function(){return[W.ai]},
$ij:1,
$aj:function(){return[W.ai]},
$io:1,
$ao:function(){return[W.ai]}}
W.ih.prototype={
B:function(a,b){var u,t,s,r,q
for(u=this.gX(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gX:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aK:function(){return[P.k,P.k]}}
W.il.prototype={
l:function(a,b){return this.a.getAttribute(b)},
n:function(a,b,c){this.a.setAttribute(b,c)},
gj:function(a){return this.gX(this).length}}
W.im.prototype={}
W.io.prototype={
$1:function(a){return this.a.$1(a)}}
W.bT.prototype={
de:function(a){var u
if($.bU.gf6($.bU)){for(u=0;u<262;++u)$.bU.n(0,C.T[u],W.n8())
for(u=0;u<12;++u)$.bU.n(0,C.o[u],W.n9())}},
av:function(a){return $.ln().V(0,W.bu(a))},
ab:function(a,b,c){var u=$.bU.l(0,H.f(W.bu(a))+"::"+b)
if(u==null)u=$.bU.l(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaw:1}
W.B.prototype={
gT:function(a){return new W.cq(a,this.gj(a))}}
W.cH.prototype={
av:function(a){return C.b.ck(this.a,new W.fB(a))},
ab:function(a,b,c){return C.b.ck(this.a,new W.fA(a,b,c))},
$iaw:1}
W.fB.prototype={
$1:function(a){return a.av(this.a)}}
W.fA.prototype={
$1:function(a){return a.ab(this.a,this.b,this.c)}}
W.dF.prototype={
dg:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.b2(0,new W.iA())
t=b.b2(0,new W.iB())
this.b.aa(0,u)
s=this.c
s.aa(0,C.v)
s.aa(0,t)},
av:function(a){return this.a.V(0,W.bu(a))},
ab:function(a,b,c){var u=this,t=W.bu(a),s=u.c
if(s.V(0,H.f(t)+"::"+b))return u.d.eH(c)
else if(s.V(0,"*::"+b))return u.d.eH(c)
else{s=u.b
if(s.V(0,H.f(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.f(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaw:1}
W.iA.prototype={
$1:function(a){return!C.b.V(C.o,a)}}
W.iB.prototype={
$1:function(a){return C.b.V(C.o,a)}}
W.iI.prototype={
ab:function(a,b,c){if(this.d6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.iJ.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.iH.prototype={
av:function(a){var u=J.G(a)
if(!!u.$ibL)return!1
u=!!u.$ii
if(u&&W.bu(a)==="foreignObject")return!1
if(u)return!0
return!1},
ab:function(a,b,c){if(b==="is"||C.a.W(b,"on"))return!1
return this.av(a)},
$iaw:1}
W.cq.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.k2(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.aw.prototype={}
W.iy.prototype={}
W.dZ.prototype={
bP:function(a){new W.iT(this).$2(a,null)},
aE:function(a,b){if(b==null)J.k4(a)
else b.removeChild(a)},
er:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lv(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.a3(r)}t="element unprintable"
try{t=J.X(a)}catch(r){H.a3(r)}try{s=W.bu(a)
this.eq(a,b,p,t,s,o,n)}catch(r){if(H.a3(r) instanceof P.a9)throw r
else{this.aE(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eq:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aE(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.av(a)){p.aE(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ab(a,"is",g)){p.aE(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gX(f)
t=H.c(u.slice(0),[H.ea(u,0)])
for(s=f.gX(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ab(a,J.ly(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.G(a).$ibO)p.bP(a.content)}}
W.iT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.er(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aE(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.a3(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dd.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.bZ.prototype={}
W.c_.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dL.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.c0.prototype={}
W.c1.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
P.iE.prototype={
cq:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
b1:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.G(a)
if(!!u.$iZ)return new Date(a.a)
if(!!u.$im6)throw H.b(P.hO("structured clone of RegExp"))
if(!!u.$iag)return a
if(!!u.$ib1)return a
if(!!u.$ibw)return a
if(!!u.$iar)return a
if(!!u.$ibG||!!u.$iaQ||!!u.$ibE)return a
if(!!u.$iK){t=p.cq(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.B(a,new P.iF(o,p))
return o.a}if(!!u.$io){t=p.cq(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.eO(a,t)}throw H.b(P.hO("structured clone of other type"))},
eO:function(a,b){var u,t=J.c6(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.b1(t.l(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.iF.prototype={
$2:function(a,b){this.a.a[a]=this.b.b1(b)},
$S:3}
P.dW.prototype={$iar:1,
gco:function(a){return this.a}}
P.j0.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.dO.prototype={}
P.eS.prototype={
gaC:function(){var u=this.b,t=H.jU(u,"q",0)
return new H.fk(new H.bR(u,new P.eT(),[t]),new P.eU(),[t,W.I])},
B:function(a,b){C.b.B(P.jG(this.gaC(),!1,W.I),b)},
n:function(a,b,c){var u=this.gaC()
J.lw(u.b.$1(J.ec(u.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.a4(this.gaC().a)},
l:function(a,b){var u=this.gaC()
return u.b.$1(J.ec(u.a,b))},
gT:function(a){var u=P.jG(this.gaC(),!1,W.I)
return new J.Y(u,u.length)},
$aq:function(){return[W.I]},
$aj:function(){return[W.I]},
$ao:function(){return[W.I]}}
P.eT.prototype={
$1:function(a){return!!J.G(a).$iI}}
P.eU.prototype={
$1:function(a){return H.a1(a,"$iI")}}
P.iu.prototype={
gcP:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.n(t)
return u+t},
gcm:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.n(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.G(b)
if(!!u.$ia0){t=q.a
if(t==u.gaY(b)){s=q.b
if(s==u.gb0(b)){r=q.c
if(typeof t!=="number")return t.J()
if(typeof r!=="number")return H.n(r)
if(t+r===u.gcP(b)){t=q.d
if(typeof s!=="number")return s.J()
if(typeof t!=="number")return H.n(t)
u=s+t===u.gcm(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gD:function(a){var u=this,t=u.a,s=J.cc(t),r=u.b,q=J.cc(r),p=u.c
if(typeof t!=="number")return t.J()
if(typeof p!=="number")return H.n(p)
p=C.c.gD(t+p)
t=u.d
if(typeof r!=="number")return r.J()
if(typeof t!=="number")return H.n(t)
t=C.c.gD(r+t)
return P.mr(P.ir(P.ir(P.ir(P.ir(0,s),q),p),t))}}
P.a0.prototype={
gaY:function(a){return this.a},
gb0:function(a){return this.b},
gaj:function(a){return this.c},
gag:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.f9.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){return this.l(a,b)},
$aq:function(){return[P.aO]},
$ij:1,
$aj:function(){return[P.aO]},
$io:1,
$ao:function(){return[P.aO]}}
P.aS.prototype={$iaS:1}
P.fD.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){return this.l(a,b)},
$aq:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$io:1,
$ao:function(){return[P.aS]}}
P.fK.prototype={
gj:function(a){return a.length}}
P.bL.prototype={$ibL:1}
P.hc.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){return this.l(a,b)},
$aq:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
P.i.prototype={
gbw:function(a){return new P.eS(a,new W.T(a))},
a4:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aw])
p.push(W.kJ(null))
p.push(W.kL())
p.push(new W.iH())
c=new W.dZ(new W.cH(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.q).eP(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.T(s)
q=p.gak(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aW.prototype={$iaW:1}
P.hy.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){return this.l(a,b)},
$aq:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]},
$io:1,
$ao:function(){return[P.aW]}}
P.dp.prototype={}
P.dq.prototype={}
P.dA.prototype={}
P.dB.prototype={}
P.dM.prototype={}
P.dN.prototype={}
P.dU.prototype={}
P.dV.prototype={}
P.bf.prototype={$ij:1,
$aj:function(){return[P.r]},
$io:1,
$ao:function(){return[P.r]}}
P.eh.prototype={
gj:function(a){return a.length}}
P.ei.prototype={
l:function(a,b){return P.aD(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aD(u.value[1]))}},
gX:function(a){var u=H.c([],[P.k])
this.B(a,new P.ej(u))
return u},
gj:function(a){return a.size},
n:function(a,b,c){throw H.b(P.t("Not supported"))},
$iK:1,
$aK:function(){return[P.k,null]}}
P.ej.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ek.prototype={
gj:function(a){return a.length}}
P.b0.prototype={}
P.fE.prototype={
gj:function(a){return a.length}}
P.dc.prototype={}
P.cN.prototype={
fB:function(a,b,c,d,e,f,g){var u,t=J.G(g)
if(!!t.$iar)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mZ(g))
return}if(!!t.$ib8)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.cd("Incorrect number or type of arguments"))}}
P.h7.prototype={
gj:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.C(b,a,null,null,null))
return P.aD(a.item(b))},
n:function(a,b,c){throw H.b(P.t("Cannot assign element of immutable List."))},
E:function(a,b){return this.l(a,b)},
$aq:function(){return[[P.K,,,]]},
$ij:1,
$aj:function(){return[[P.K,,,]]},
$io:1,
$ao:function(){return[[P.K,,,]]}}
P.dI.prototype={}
P.dJ.prototype={}
T.an.prototype={
ah:function(a,b){return!0},
h:function(a){return"all"}}
T.cr.prototype={
ah:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].ah(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aP.prototype={}
T.U.prototype={
ah:function(a,b){return!this.d2(0,b)},
h:function(a){return"!["+this.bS(0)+"]"}}
T.fN.prototype={
ah:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bc(this.a),t=H.bc(this.b)
return u+".."+t}}
T.fX.prototype={
d9:function(a){var u,t
if(a.a.length<=0)throw H.b(P.S("May not create a Set with zero characters."))
u=new H.ab([P.r,P.b_])
for(t=new H.bB(a,a.gj(a));t.v();)u.n(0,t.d,!0)
this.a=u},
ah:function(a,b){return this.a.aV(0,b)},
h:function(a){var u=this.a
return P.bN(u.gX(u),0,null)}}
R.cQ.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cZ(this.a.i(0,b))
r.a=H.c([],[T.aP])
r.c=!1
this.c.push(r)
return r},
eZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.ah(0,a))return r}return},
h:function(a){return this.b}}
R.cW.prototype={
h:function(a){var u=H.k_(this.b,"\n","\\n"),t=H.k_(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.cX.prototype={
ai:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.n(0,s,b)}},
h:function(a){return this.b}}
R.ht.prototype={
i:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new R.cQ(this,b)
u.c=H.c([],[R.cZ])
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.l(0,a)
if(t==null){t=new R.cX(a)
u=P.k
t.c=new H.ab([u,u])
this.b.n(0,a,t)}return t},
cT:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.cW]),k=this.c,j=[P.r],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.A(a,s)
q=k.eZ(r)
if(q==null){if(t==null){i.push(r)
p=P.bN(i,0,m)
throw H.b(P.S("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bN(i,0,m)
o=k.d
n=o.c.l(0,p)
t=new R.cW(n==null?o.b:n,p,s)}++s}}}}
R.cZ.prototype={
h:function(a){return this.b.b+": "+this.bS(0)}}
O.b4.prototype={
bT:function(a){this.a=H.c([],[a])
this.c=this.b=null},
b5:function(a,b){this.b=null
this.c=a},
ec:function(a){return!0},
dd:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.Y(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.jU(s,"b4",0)]
if(s.ec(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.dd(t,H.c([b],r))}},
$ij:1}
O.bD.prototype={
gj:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.E():u},
al:function(){var u=this.b
if(u!=null)u.H(null)},
gaJ:function(a){var u=this.a
if(u.length>0)return C.b.gac(u)
else return V.fn()},
cM:function(a){var u=this.a
if(a==null)u.push(V.fn())
else u.push(a)
this.al()},
bJ:function(){var u=this.a
if(u.length>0){u.pop()
this.al()}}}
E.en.prototype={}
E.ap.prototype={
bZ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.Y(u,u.length);u.v();){t=u.d
if(t.f==null)t.bZ()}},
sbQ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().U(0,s.gcF())
u=s.c
if(u!=null)u.gu().m(0,s.gcF())
t=new D.x("shape",r,s.c)
t.b=!0
s.a6(t)}},
scR:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().U(0,s.gcH())
u=s.f
s.f=a
if(a!=null)a.gu().m(0,s.gcH())
s.bZ()
t=new D.x("technique",u,s.f)
t.b=!0
s.a6(t)}},
saK:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gu().U(0,s.gcD())
if(a!=null)a.gu().m(0,s.gcD())
s.r=a
t=new D.x("mover",u,a)
t.b=!0
s.a6(t)}},
az:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aA(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.x("matrix",u,q)
t.b=!0
s.a6(t)}for(r=s.y.a,r=new J.Y(r,r.length);r.v();)r.d.az(0,b)},
ax:function(a){var u,t,s,r,q,p,o=this,n="Bumpy Debugging Shader",m="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n",l=a.dx,k=o.x
l.toString
if(k==null)l.a.push(l.gaJ(l))
else l.a.push(k.q(0,l.gaJ(l)))
l.al()
a.cN(o.f)
l=a.dy
u=(l&&C.b).gac(l)
if(u!=null&&o.d!=null){l=u.a
if(l==null){t=a.fr.l(0,n)
if(t==null){l=a.a
t=new T.ep(l,n)
t.da(l,n)
t.c=m
t.d="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
t.e=t.c4(m,35633)
t.f=t.c4(t.d,35632)
k=l.createProgram()
t.r=k
l.attachShader(k,t.e)
l.attachShader(t.r,t.f)
l.linkProgram(t.r)
if(!l.getProgramParameter(t.r,35714)){s=l.getProgramInfoLog(t.r)
l.deleteProgram(t.r)
H.Q(P.S("Failed to link shader: "+H.f(s)))}t.es()
t.ev()
t.z=t.x.l(0,"posAttr")
t.Q=t.x.l(0,"normAttr")
t.ch=t.x.l(0,"binmAttr")
t.cx=t.x.l(0,"txtAttr")
t.cy=t.x.l(0,"weightAttr")
t.db=H.a1(t.y.l(0,"bumpTxt"),"$id1")
t.dx=H.a1(t.y.l(0,"objMat"),"$ibg")
t.dy=H.a1(t.y.l(0,"viewMat"),"$ibg")
t.fr=H.a1(t.y.l(0,"projMat"),"$ibg")
t.fx=H.a1(t.y.l(0,"offsetScalar"),"$id0")
if(a.fr.aV(0,n))H.Q(P.S('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.n(0,n,t)}u.a=t
l=t}if(o.e==null){l=o.c
k=$.aG()
r=$.aF()
r=l.eL(new Z.ia(a.a),new Z.bQ(k.a|r.a|$.aE().a|$.aH().a|$.aI().a))
r.aI($.aG()).e=u.a.z.c
r.aI($.aF()).e=u.a.Q.c
r.aI($.aE()).e=u.a.ch.c
r.aI($.aH()).e=u.a.cx.c
k=r.aI($.aI())
l=u.a
k.e=l.cy.c
o.e=r}k=u.b
if(k!=null){k.a=0
k=a.a
k.useProgram(l.r)
l.x.eW()
r=u.b
if(r!=null){q=l.db
q.toString
p=r.d
if(!p)q.a.uniform1i(q.d,0)
else{r=r.a
q.a.uniform1i(q.d,r)}}r=a.cy
r=r.gaJ(r)
q=l.fr
q.toString
q.b6(r.bM(0,!0))
r=a.db
r=r.gaJ(r)
q=l.dy
q.toString
q.b6(r.bM(0,!0))
r=a.dx
r=r.gaJ(r)
q=l.dx
q.toString
q.b6(r.bM(0,!0))
r=u.c
l=l.fx
l.a.uniform1f(l.d,r)
r=u.b
if(!r.c&&r.d){r.c=!0
k.activeTexture(33984+r.a)
k.bindTexture(3553,r.b)}l=o.e
if(l instanceof Z.cg){l.br(a)
l.ax(a)
l.fG(a)}else o.e=null
l=u.a
l.toString
k.useProgram(null)
l.x.eT()
l=u.b
if(l.c){l.c=!1
k.activeTexture(33984+l.a)
k.bindTexture(3553,null)}}}for(l=o.y.a,l=new J.Y(l,l.length);l.v();)l.d.ax(a)
a.cL()
a.dx.bJ()},
a6:function(a){var u=this.z
if(u!=null)u.H(a)},
a0:function(){return this.a6(null)},
cG:function(a){this.e=null
this.a6(a)},
fh:function(){return this.cG(null)},
cI:function(a){this.a6(a)},
fi:function(){return this.cI(null)},
cE:function(a){this.a6(a)},
fg:function(){return this.cE(null)},
cC:function(a){this.a6(a)},
fd:function(){return this.cC(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcB(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.v)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a0()},
ff:function(a,b){var u,t
for(u=b.gT(b),t=this.gcB();u.v();)u.gG(u).gu().U(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fP.prototype={
d8:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.Z(Date.now(),!1)
s.y=0
u=new O.bD()
t=[V.bC]
u.a=H.c([],t)
u.gu().m(0,new E.fQ(s))
s.cy=u
u=new O.bD()
u.a=H.c([],t)
u.gu().m(0,new E.fR(s))
s.db=u
u=new O.bD()
u.a=H.c([],t)
u.gu().m(0,new E.fS(s))
s.dx=u
u=H.c([],[O.cT])
s.dy=u
u.push(null)
s.fr=new H.ab([P.k,A.cO])},
cN:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gac(u):a)},
cL:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fQ.prototype={
$1:function(a){}}
E.fR.prototype={
$1:function(a){}}
E.fS.prototype={
$1:function(a){}}
E.cU.prototype={
bW:function(a){this.cO()},
bV:function(){return this.bW(null)},
gf2:function(){var u,t=this,s=Date.now(),r=C.c.at(P.kc(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.Z(s,!1)
return u/r},
c9:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.n(r)
u=C.d.bA(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.bA(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kx(C.m,s.gfv())}},
cO:function(){if(!this.ch){this.ch=!0
var u=window
C.C.dz(u)
C.C.eo(u,W.kW(new E.hr(this),P.a2))}},
ft:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.c9()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.Z(r,!1)
s.y=P.kc(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.al()
r=s.db
C.b.sj(r.a,0)
r.al()
r=s.dx
C.b.sj(r.a,0)
r.al()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.ax(p.e)}s=p.z
if(s!=null)s.H(null)}catch(q){u=H.a3(q)
t=H.jV(q)
P.jZ("Error: "+H.f(u))
P.jZ("Stack: "+H.f(t))
throw H.b(u)}}}
E.hr.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.ft()}}}
Z.da.prototype={}
Z.cf.prototype={
br:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.a3(s)
t=P.S('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.b(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.ia.prototype={}
Z.cg.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
br:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].br(a)},
fG:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ax:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.X(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bz.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bK(this.c))+"'")+"]"}}
Z.bQ.prototype={
gbR:function(a){var u=this.a,t=(u&$.aG().a)!==0?3:0
if((u&$.aF().a)!==0)t+=3
if((u&$.aE().a)!==0)t+=3
if((u&$.aH().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.ca().a)!==0)t+=3
if((u&$.cb().a)!==0)t+=4
if((u&$.aI().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
eI:function(a){var u,t=$.aG(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ca()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.ll()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bQ))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aG().a)!==0)u.push("Pos")
if((t&$.aF().a)!==0)u.push("Norm")
if((t&$.aE().a)!==0)u.push("Binm")
if((t&$.aH().a)!==0)u.push("Txt2D")
if((t&$.bo().a)!==0)u.push("TxtCube")
if((t&$.ca().a)!==0)u.push("Clr3")
if((t&$.cb().a)!==0)u.push("Clr4")
if((t&$.aI().a)!==0)u.push("Weight")
if((t&$.bn().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.er.prototype={}
D.bv.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
U:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.a
u=(s&&C.b).U(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.V(s,b)
if(s===!0){s=t.b
u=(s&&C.b).U(s,b)||u}return u},
H:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.B(P.jG(u,!0,{func:1,ret:-1,args:[D.R]}),new D.eO(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.R]}])
C.b.B(u,new D.eP(q))}return!0},
eV:function(){return this.H(null)},
aO:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eP.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.cs.prototype={}
D.ct.prototype={}
D.x.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.ci.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ci))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cz.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.f8.prototype={
fn:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
fj:function(a){this.c=a.b
this.d.U(0,a.a)
return!1}}
X.cC.prototype={}
X.fg.prototype={
aB:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaw()
r=new X.av(a,V.aT(),q.x,t,s)
r.b=!0
q.z=new P.Z(p,!1)
q.x=s
return r},
bI:function(a,b){this.r=a.a
return!1},
aM:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d_()
if(typeof u!=="number")return u.b3()
this.r=(u&~t)>>>0
return!1},
aL:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aB(a,b))
return!0},
fo:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaw()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.bF(new V.y(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
e1:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cC(c,r.a.gaw(),b)
s.b=!0
t.H(s)
r.y=new P.Z(u,!1)
r.x=V.aT()}}
X.a6.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a6))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.av.prototype={}
X.fu.prototype={
bd:function(a,b,c){var u=this,t=new P.Z(Date.now(),!1),s=u.a.gaw(),r=new X.av(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bI:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bd(a,b,!0))
return!0},
aM:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.d_()
if(typeof t!=="number")return t.b3()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.bd(a,b,!0))
return!0},
aL:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bd(a,b,!1))
return!0},
fp:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaw()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bF(new V.y(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gcp:function(){var u=this.b
return u==null?this.b=D.E():u},
gcU:function(){var u=this.c
return u==null?this.c=D.E():u},
gcA:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.bF.prototype={}
X.fJ.prototype={}
X.cY.prototype={}
X.hv.prototype={
aB:function(a,b){var u=this,t=new P.Z(Date.now(),!1),s=a.length>0?a[0]:V.aT(),r=u.a.gaw(),q=new X.cY(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fm:function(a){var u=this.b
if(u==null)return!1
u.H(this.aB(a,!0))
return!0},
fk:function(a){var u=this.c
if(u==null)return!1
u.H(this.aB(a,!0))
return!0},
fl:function(a){var u=this.d
if(u==null)return!1
u.H(this.aB(a,!1))
return!0}}
X.d4.prototype={
gaw:function(){var u=this.a,t=C.i.gcn(u).c
t.toString
u=C.i.gcn(u).d
u.toString
return V.ks(0,0,t,u)},
c3:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.a6(t,a.altKey,a.shiftKey))},
ar:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
bq:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a6(t,a.altKey,a.shiftKey)},
af:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.a7(s-q,r-u)},
aD:function(a){return new V.y(a.movementX,a.movementY)},
bo:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.d.a8(r.pageX)
C.d.a8(r.pageY)
p=o.left
C.d.a8(r.pageX)
n.push(new V.a7(q-p,C.d.a8(r.pageY)-o.top))}return n},
ae:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.ci(u,new X.a6(t,a.altKey,a.shiftKey))},
bf:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dX:function(a){this.f=!0},
dL:function(a){this.f=!1},
dR:function(a){if(this.f&&this.bf(a))a.preventDefault()},
e0:function(a){var u
if(!this.f)return
u=this.c3(a)
this.b.fn(u)},
dZ:function(a){var u
if(!this.f)return
u=this.c3(a)
this.b.fj(u)},
e3:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ar(a)
if(r.x){u=r.ae(a)
t=r.aD(a)
if(r.d.bI(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ae(a)
s=r.af(a)
if(r.c.bI(u,s))a.preventDefault()},
e7:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aD(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aM(u,s))a.preventDefault()},
dV:function(a){var u,t,s,r=this
if(!r.bf(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aD(a)
if(r.d.aM(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aM(u,s))a.preventDefault()}},
e5:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aD(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aL(u,s))a.preventDefault()},
dT:function(a){var u,t,s,r=this
if(!r.bf(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aD(a)
if(r.d.aL(u,t))a.preventDefault()
return}if(r.r)return
s=r.af(a)
if(r.c.aL(u,s))a.preventDefault()}},
e9:function(a){var u,t,s=this
s.ar(a)
u=new V.y((a&&C.B).geR(a),C.B.geS(a)).C(0,180)
if(s.x){if(s.d.fo(u))a.preventDefault()
return}if(s.r)return
t=s.af(a)
if(s.c.fp(u,t))a.preventDefault()},
eb:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ae(s.y)
t=s.af(s.y)
s.d.e1(u,t,r)}},
ek:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bq(a)
u=t.bo(a)
if(t.e.fm(u))a.preventDefault()},
eg:function(a){var u
this.bq(a)
u=this.bo(a)
if(this.e.fk(u))a.preventDefault()},
ei:function(a){var u
this.bq(a)
u=this.bo(a)
if(this.e.fl(u))a.preventDefault()}}
V.b5.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b5))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.eN.prototype={}
V.bC.prototype={
bM:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.H])
return t},
q:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.n(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.n(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.n(m)
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
return V.at(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
t:function(a,b){var u,t,s,r,q=this
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
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.n(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.n(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.n(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.O()},
F:function(a){var u,t,s,r,q,p=this,o=[P.H],n=V.j2(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.j2(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.j2(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.j2(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
O:function(){return this.F("")}}
V.a7.prototype={
w:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.aU.prototype={
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.n(t)
return new V.aU(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.n(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.cL.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cL))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.cM.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cM))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.y.prototype={
bE:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.n(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.n(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.y(t*b,u*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.kD
return u==null?$.kD=new V.y(0,0):u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.y(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.n(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.n(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.O.prototype={
bE:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.n(t)
return this.a*a.a+this.b*a.b+u*t},
aH:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.n(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.q()
s=a.a
r=this.a
return new V.O(q*p-u*t,u*s-r*p,r*t-q*s)},
J:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.n(t)
return new V.O(this.a+b.a,this.b+b.b,u+t)},
N:function(a){var u=this.c
if(typeof u!=="number")return u.N()
return new V.O(-this.a,-this.b,-u)},
C:function(a,b){var u
if(Math.abs(b-0)<$.A().a)return V.d8()
u=this.c
if(typeof u!=="number")return u.C()
return new V.O(this.a/b,this.b/b,u/b)},
cz:function(){var u,t=$.A(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.n(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.n(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.et.prototype={
b8:function(a){var u=V.np(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.E():u},
M:function(a){var u=this.y
if(u!=null)u.H(a)},
sbN:function(a,b){},
sbF:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.b8(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sbH:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.b8(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa1:function(a,b){var u,t=this
b=t.b8(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.M(u)}},
sbG:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.M(t)}},
sbz:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.M(u)}},
az:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.ck.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.E():u},
aA:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return J.L(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bx.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.E():u},
M:function(a){var u=this.e
if(u!=null)u.H(a)},
Z:function(){return this.M(null)},
dJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaq(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.v)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.cs()
u.b=!0
this.M(u)},
ee:function(a,b){var u,t
for(u=b.gT(b),t=this.gaq();u.v();)u.gG(u).gu().U(0,t)
u=new D.ct()
u.b=!0
this.M(u)},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Y(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aA(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.fn():u
r=s.e
if(r!=null)r.aO(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.L(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a_]},
$ab4:function(){return[U.a_]},
$ia_:1}
U.a_.prototype={}
U.d5.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.E():u},
M:function(a){var u=this.cy
if(u!=null)u.H(a)},
Z:function(){return this.M(null)},
aG:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcp().m(0,u.gbg())
u.a.c.gcA().m(0,u.gbi())
u.a.c.gcU().m(0,u.gbk())
return!0},
bh:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bj:function(a){var u,t,s,r,q,p,o,n=this
H.a1(a,"$iav")
if(!n.y)return
if(n.x){u=a.d.w(0,a.y)
u=new V.y(u.a,u.b)
u=u.I(u)
t=n.r
if(typeof t!=="number")return H.n(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.w(0,a.y)
u=new V.y(t.a,t.b).q(0,2).C(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.n(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.y(s.a,s.b).q(0,2).C(0,u.ga2())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.n(p)
o=n.z
if(typeof o!=="number")return H.n(o)
s.sa1(0,-q*p+o)
n.b.sP(0)
t=t.w(0,a.z)
n.Q=new V.y(t.a,t.b).q(0,2).C(0,u.ga2())}n.Z()},
bl:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.I(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.n(s)
u.sP(t*10*s)
r.Z()}},
aA:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.az(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.at(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia_:1}
U.d6.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.E():u},
M:function(a){var u=this.fx
if(u!=null)u.H(a)},
Z:function(){return this.M(null)},
aG:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcp().m(0,s.gbg())
s.a.c.gcA().m(0,s.gbi())
s.a.c.gcU().m(0,s.gbk())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.m(0,s.gdB())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.m(0,s.gdD())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.m(0,s.geC())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.m(0,s.geA())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.m(0,s.gey())
return!0},
a9:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.y(u,t)},
bh:function(a){var u=this
H.a1(a,"$iav")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bj:function(a){var u,t,s,r,q,p,o,n=this
H.a1(a,"$iav")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.y(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.n(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.a9(new V.y(t.a,t.b).q(0,2).C(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.n(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.n(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.a9(new V.y(s.a,s.b).q(0,2).C(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.n(p)
o=n.cy
if(typeof o!=="number")return H.n(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.n(q)
s=n.db
if(typeof s!=="number")return H.n(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.w(0,a.z)
n.dx=n.a9(new V.y(t.a,t.b).q(0,2).C(0,u.ga2()))}n.Z()},
bl:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.n(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.n(u)
s.sP(-t*10*u)
r.Z()}},
dC:function(a){var u=this
if(H.a1(a,"$icC").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dE:function(a){var u,t,s,r,q,p,o,n=this
H.a1(a,"$iav")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.a9(new V.y(s.a,s.b).q(0,2).C(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.n(p)
o=n.cy
if(typeof o!=="number")return H.n(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.n(q)
s=n.db
if(typeof s!=="number")return H.n(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.w(0,a.z)
n.dx=n.a9(new V.y(t.a,t.b).q(0,2).C(0,u.ga2()))
n.Z()},
eD:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eB:function(a){var u,t,s,r,q,p,o,n=this
H.a1(a,"$icY")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.y(u.a,u.b)
u=u.I(u)
t=n.Q
if(typeof t!=="number")return H.n(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.a9(new V.y(t.a,t.b).q(0,2).C(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.n(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.n(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.a9(new V.y(s.a,s.b).q(0,2).C(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.n(p)
o=n.cy
if(typeof o!=="number")return H.n(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.n(q)
s=n.db
if(typeof s!=="number")return H.n(s)
o.sa1(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.w(0,a.z)
n.dx=n.a9(new V.y(t.a,t.b).q(0,2).C(0,u.ga2()))}n.Z()},
ez:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.I(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.n(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.n(u)
s.sP(-t*10*u)
r.Z()}},
aA:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.az(0,u)
r.b.az(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.at(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.at(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia_:1}
U.d7.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.E():u},
M:function(a){var u=this.r
if(u!=null)u.H(a)},
aG:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.E():t
t=r.gdG()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.E():s).m(0,t)
return!0},
dH:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.a1(a,"$ibF")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.M(u)}},
aA:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.at(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia_:1}
M.co.prototype={
an:function(a){var u=this.y
if(u!=null)u.H(a)},
df:function(){return this.an(null)},
dN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gam(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.v)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.cs()
u.b=!0
this.an(u)},
dP:function(a,b){var u,t
for(u=b.gT(b),t=this.gam();u.v();)u.gG(u).gu().U(0,t)
u=new D.ct()
u.b=!0
this.an(u)},
gu:function(){var u=this.y
return u==null?this.y=D.E():u},
ax:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.cN(a1.d)
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
if(typeof s!=="number")return H.n(s)
o=C.d.a8(p*s)
p=q.b
if(typeof r!=="number")return H.n(r)
n=C.d.a8(p*r)
p=C.d.a8(q.c*s)
a2.c=p
q=C.d.a8(q.d*r)
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
i=V.at(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.cM(i)
t=$.km
if(t==null){t=$.ko
if(t==null)t=$.ko=new V.aU(0,0,0)
q=$.kF
if(q==null)q=$.kF=new V.O(0,1,0)
p=$.kE
if(p==null)p=$.kE=new V.O(0,0,-1)
h=p.C(0,Math.sqrt(p.I(p)))
q=q.aH(h)
g=q.C(0,Math.sqrt(q.I(q)))
f=h.aH(g)
e=new V.O(t.a,t.b,t.c)
d=g.N(0).I(e)
c=f.N(0).I(e)
b=h.N(0).I(e)
t=V.at(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.km=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a2.db.cM(a)
for(u=a1.e.a,u=new J.Y(u,u.length);u.v();)u.d.az(0,a2)
for(u=a1.e.a,u=new J.Y(u,u.length);u.v();)u.d.ax(a2)
a1.b.toString
a2.cy.bJ()
a2.db.bJ()
a1.c.toString
a2.cL()}}
A.ce.prototype={}
A.eg.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
eW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.cO.prototype={
da:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c4:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.b(P.S("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
es:function(){var u,t,s,r=this,q=H.c([],[A.ce]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.n(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ce(p,t.name,s))}r.x=new A.eg(q)},
ev:function(){var u,t,s,r=this,q=H.c([],[A.d_]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.n(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eQ(t.type,t.size,t.name,s))}r.y=new A.hJ(q)},
ap:function(a,b,c){var u=this.a
if(a===1)return new A.hB(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
du:function(a,b,c){var u=this.a
if(a===1)return new A.d1(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
dv:function(a,b,c){var u=this.a
if(a===1)return new A.hM(u,b,c)
else return A.jJ(u,this.r,b,a,c)},
aU:function(a,b){return new P.dj(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
eQ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ap(b,c,d)
case 5121:return u.ap(b,c,d)
case 5122:return u.ap(b,c,d)
case 5123:return u.ap(b,c,d)
case 5124:return u.ap(b,c,d)
case 5125:return u.ap(b,c,d)
case 5126:return new A.d0(u.a,c,d)
case 35664:return new A.hD(u.a,c,d)
case 35665:return new A.hF(u.a,c,d)
case 35666:return new A.hH(u.a,c,d)
case 35667:return new A.hE(u.a,c,d)
case 35668:return new A.hG(u.a,c,d)
case 35669:return new A.hI(u.a,c,d)
case 35674:return new A.hK(u.a,c,d)
case 35675:return new A.hL(u.a,c,d)
case 35676:return new A.bg(u.a,c,d)
case 35678:return u.du(b,c,d)
case 35680:return u.dv(b,c,d)
case 35670:throw H.b(u.aU("BOOL",c))
case 35671:throw H.b(u.aU("BOOL_VEC2",c))
case 35672:throw H.b(u.aU("BOOL_VEC3",c))
case 35673:throw H.b(u.aU("BOOL_VEC4",c))
default:throw H.b(P.S("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.d_.prototype={}
A.hJ.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hB.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.d0.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hK.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.hL.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bg.prototype={
b6:function(a){var u=new Float32Array(H.iZ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.d1.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.hM.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.j4.prototype={
$2:function(a,b){return 0}}
F.j5.prototype={
$3:function(a,b,c){var u,t=b*2-1,s=c*2-1,r=new V.aU(t,s,this.a.a.$2(b,c))
if(!J.L(a.f,r)){a.f=r
r=a.a
if(r!=null)r.a0()}r=new V.O(t,s,1)
r=r.C(0,Math.sqrt(r.I(r)))
if(!J.L(a.z,r)){a.z=r
r=a.a
if(r!=null)r.a0()}r=1-b
u=1-c
u=new V.cL(b*c,2+r*c,4+b*u,6+r*u)
if(!J.L(a.cx,u)){a.cx=u
r=a.a
if(r!=null)r.a0()}}}
F.b7.prototype={
geU:function(){return this.a==null||this.b==null||this.c==null},
dn:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d8()
if(q!=null)s=s.J(0,q)
if(u!=null)s=s.J(0,u)
if(t!=null)s=s.J(0,t)
if(s.cz())return
return s.C(0,Math.sqrt(s.I(s)))},
dr:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.O(r.a,r.b,r.c)
s=r.C(0,Math.sqrt(r.I(r)))
r=t.w(0,q)
r=new V.O(r.a,r.b,r.c)
r=s.aH(r.C(0,Math.sqrt(r.I(r))))
return r.C(0,Math.sqrt(r.I(r)))},
bu:function(){var u,t=this
if(t.d!=null)return!0
u=t.dn()
if(u==null){u=t.dr()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
dm:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d8()
if(q!=null)s=s.J(0,q)
if(u!=null)s=s.J(0,u)
if(t!=null)s=s.J(0,t)
if(s.cz())return
return s.C(0,Math.sqrt(s.I(s)))},
dq:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.w(0,g)
l=new V.O(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.I(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.w(0,g)
k=l.c
if(typeof k!=="number")return k.q()
i=g.a
h=g.b
f=g.c
if(typeof f!=="number")return H.n(f)
f=new V.aU(l.a*p+i,l.b*p+h,k*p+f).w(0,j)
f=new V.O(f.a,f.b,f.c)
q=f.C(0,Math.sqrt(f.I(f)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.C(0,Math.sqrt(l.I(l)))
l=o.aH(q)
l=l.C(0,Math.sqrt(l.I(l))).aH(o)
q=l.C(0,Math.sqrt(l.I(l)))}return q},
bs:function(){var u,t=this
if(t.e!=null)return!0
u=t.dm()
if(u==null){u=t.dq()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u,t,s=this
if(s.geU())return a+"disposed"
u=a+C.a.a7(J.X(s.a.e),0)+", "+C.a.a7(J.X(s.b.e),0)+", "+C.a.a7(J.X(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.bA.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.a7(J.X(u.e),0)+", "+C.a.a7(J.X(this.b.e),0)},
O:function(){return this.F("")}}
F.cK.prototype={}
F.fY.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.E():u},
eL:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962,a0=b.a.c.length,a1=a4.a,a2=(a1&$.aG().a)!==0?1:0
if((a1&$.aF().a)!==0)++a2
if((a1&$.aE().a)!==0)++a2
if((a1&$.aH().a)!==0)++a2
if((a1&$.bo().a)!==0)++a2
if((a1&$.ca().a)!==0)++a2
if((a1&$.cb().a)!==0)++a2
if((a1&$.aI().a)!==0)++a2
if((a1&$.bn().a)!==0)++a2
u=a4.gbR(a4)
t=u*4
a1=new Array(a0*u)
a1.fixed$length=Array
s=H.c(a1,[P.H])
a1=new Array(a2)
a1.fixed$length=Array
r=H.c(a1,[Z.cf])
for(a1=s.length,q=r.length,p=0,o=0;o<a2;++o){n=a4.eI(o)
m=n.gbR(n)
if(o>=q)return H.d(r,o)
r[o]=new Z.cf(n,m,p*4,t)
for(l=0;l<a0;++l){k=b.a.c
if(l>=k.length)return H.d(k,l)
j=k[l].f8(n)
i=p+l*u
for(k=j.length,h=0;h<k;++h){g=j[h]
if(i<0||i>=a1)return H.d(s,i)
s[i]=g;++i}}p+=m}a1=a3.a
f=a1.createBuffer()
a1.bindBuffer(a,f)
a1.bufferData(a,new Float32Array(H.iZ(s)),35044)
a1.bindBuffer(a,null)
e=new Z.cg(new Z.da(a,f),r)
e.b=H.c([],[Z.bz])
b.b.b
if(b.c.b.length!==0){d=H.c([],[P.r])
for(o=0;q=b.c.b,o<q.length;++o){q=q[o].a
q.a.a.au()
d.push(q.e)
q=b.c.b
if(o>=q.length)return H.d(q,o)
q=q[o].b
q.a.a.au()
d.push(q.e)}c=Z.kI(a1,34963,d)
e.b.push(new Z.bz(1,d.length,c))}if(b.d.b.length!==0){d=H.c([],[P.r])
for(o=0;q=b.d.b,o<q.length;++o){q=q[o].a
q.a.a.au()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.d(q,o)
q=q[o].b
q.a.a.au()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.d(q,o)
q=q[o].c
q.a.a.au()
d.push(q.e)}c=Z.kI(a1,34963,d)
e.b.push(new Z.bz(4,d.length,c))}return e},
h:function(a){var u=this,t=H.c([],[P.k])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.F("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.F("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.F("   "))}return C.b.k(t,"\n")},
a0:function(){var u=this.e
if(u!=null)u.H(null)}}
F.fZ.prototype={
eG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b7])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.d(c,s)
m=c[s];++s
if(s>=n)return H.d(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.d(c,k)
j=c[k]
if(t<0||t>=n)return H.d(c,t)
i=c[t]
n=u.a
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.eQ(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eQ(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.eQ(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.eQ(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
fs:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.a
if(!(t==null||s.b==null||s.c==null)){C.b.U(t.a.d.b,s)
t=s.a.a.e
if(t!=null)t.H(null)}t=s.a
if(t!=null){C.b.U(t.d.b,s)
s.a=null}t=s.b
if(t!=null){C.b.U(t.d.c,s)
s.b=null}t=s.c
if(t!=null){C.b.U(t.d.d,s)
s.c=null}}C.b.sj(this.b,0)},
bv:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bu())s=!1
return s},
bt:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bs())s=!1
return s},
h:function(a){return this.O()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
O:function(){return this.F("")}}
F.h_.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.O()},
F:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
O:function(){return this.F("")}}
F.h0.prototype={
gj:function(a){return 0},
h:function(a){return this.O()},
F:function(a){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(a))}return C.b.k(s,"\n")},
O:function(){return this.F("")}}
F.d9.prototype={
by:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kH(u.cx,r,o,t,s,q,p,a,n)},
eN:function(){return this.by(null)},
f8:function(a){var u,t,s=this
if(a.t(0,$.aG())){u=s.f
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aF())){u=s.r
t=[P.H]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aE())){u=s.x
t=[P.H]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aH())){u=s.y
t=[P.H]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bo())){u=s.z
t=[P.H]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.ca())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cb())){u=s.Q
t=[P.H]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.aI()))return H.c([s.ch],[P.H])
else if(a.t(0,$.bn())){u=s.cx
t=[P.H]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.H])},
bu:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.B(0,new F.i8(s))
s=s.a
t.r=s.C(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aO(0)}return!0},
bs:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.B(0,new F.i7(s))
s=s.a
t.x=s.C(0,Math.sqrt(s.I(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aO(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.a7(J.X(s.e),0))
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
O:function(){return this.F("")}}
F.i8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.J(0,t)}}}
F.i7.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.J(0,t)}}}
F.i1.prototype={
au:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.b(P.S("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
ci:function(a,b){var u=null,t=F.kH(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gj:function(a){return this.c.length},
bv:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bu()
return!0},
bt:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bs()
return!0},
h:function(a){return this.O()},
F:function(a){var u,t,s,r
this.au()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
O:function(){return this.F("")}}
F.i2.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){var u=this
C.b.B(u.b,b)
C.b.B(u.c,new F.i3(u,b))
C.b.B(u.d,new F.i4(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.i3.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.i4.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.i5.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.i6.prototype={
gj:function(a){return 0},
h:function(a){return this.O()},
O:function(){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(""))}return C.b.k(s,"\n")}}
O.cT.prototype={}
T.hj.prototype={}
T.hk.prototype={}
T.ho.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.E():u}}
T.hp.prototype={
f9:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kg(a)
t=new T.ho()
t.a=0
t.b=q
t.d=t.c=!1
W.N(u,"load",new T.hq(this,t,u,!1,q,!1,!1),!1)
return t},
ep:function(a,b,c){var u,t,s,r
b=V.jY(b)
u=V.jY(a.width)
t=V.jY(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ju()
s.width=u
s.height=t
r=C.i.cY(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.n_(r.getImageData(0,0,s.width,s.height))}}}
T.hq.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ep(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.fB(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.eV()}++s.e}}
X.jt.prototype={}
X.eX.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.E():u}}
X.cJ.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.E():u},
ao:function(a){var u=this.f
if(u!=null)u.H(a)},
dj:function(){return this.ao(null)},
saK:function(a){var u,t,s=this
if(!J.L(s.b,a)){u=s.b
if(u!=null)u.gu().U(0,s.gbX())
t=s.b
s.b=a
if(a!=null)a.gu().m(0,s.gbX())
u=new D.x("mover",t,s.b)
u.b=!0
s.ao(u)}}}
X.hf.prototype={}
V.cj.prototype={
aR:function(a){this.b=new P.f1(C.O)
this.c=null
this.d=H.c([],[[P.o,W.aa]])},
K:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.aa]))
u=a.split("\n")
for(l=u.length,t=[W.aa],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dt(q,0,q.length)
n=o==null?q:o
C.M.d0(p,H.k_(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gac(m.d).push(p)}},
cJ:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.aa]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.aW():t).cT(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.b_(t[r])}}
V.jo.prototype={
$1:function(a){var u=C.d.cS(this.a.gf2(),2)
if(u!=="0.00")P.jZ(u+" fps")}}
V.eD.prototype={
b_:function(a){var u=this
switch(a.a){case"Class":u.K(a.b,"#551")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break
case"Type":u.K(a.b,"#B11")
break
case"Whitespace":u.K(a.b,"#111")
break}},
aW:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hu()
a1.c=a1.i(0,r)
u=a1.i(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=a1.i(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=a1.i(0,r).k(0,p)
t=T.D("0","9")
u.a.push(t)
t=a1.i(0,p).k(0,p)
u=T.D("0","9")
t.a.push(u)
u=a1.i(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=a1.i(0,o).k(0,n)
u=T.D("0","9")
t.a.push(u)
u=a1.i(0,n).k(0,n)
t=T.D("0","9")
u.a.push(t)
t=a1.i(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=a1.i(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=a1.i(0,r).k(0,k)
u=T.p(new H.l('"'))
t.a.push(u)
u=a1.i(0,k).k(0,j)
t=T.p(new H.l('"'))
u.a.push(t)
t=a1.i(0,k).k(0,i)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.i(0,i).k(0,k)
t=T.p(new H.l('"'))
u.a.push(t)
a1.i(0,k).k(0,k).a.push(new T.an())
t=a1.i(0,r).k(0,h)
u=T.p(new H.l("'"))
t.a.push(u)
u=a1.i(0,h).k(0,g)
t=T.p(new H.l("'"))
u.a.push(t)
t=a1.i(0,h).k(0,f)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.i(0,f).k(0,h)
t=T.p(new H.l("'"))
u.a.push(t)
a1.i(0,h).k(0,h).a.push(new T.an())
t=a1.i(0,r).k(0,e)
u=T.p(new H.l("/"))
t.a.push(u)
u=a1.i(0,e).k(0,d)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.i(0,d).k(0,c)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.i(0,d).k(0,d)
t=new T.U()
s=[T.aP]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.i(0,e).k(0,b)
t=T.p(new H.l("*"))
u.a.push(t)
t=a1.i(0,b).k(0,a)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).k(0,b)
t=new T.U()
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).k(0,c)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.i(0,r).k(0,a0)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).k(0,a0)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.L("Num")
t=a1.i(0,n)
t.d=t.a.L("Num")
t=a1.i(0,m)
t.d=t.a.L("Symbol")
t=a1.i(0,j)
t.d=t.a.L("String")
t=a1.i(0,g)
t.d=t.a.L("String")
t=a1.i(0,c)
t.d=t.a.L(d)
t=a1.i(0,a0)
t.d=t.a.L(a0)
t=a1.i(0,q)
t=t.d=t.a.L(q)
u=[P.k]
t.ai(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ai(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ai(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eZ.prototype={
b_:function(a){var u=this
switch(a.a){case"Builtin":u.K(a.b,"#411")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Preprocess":u.K(a.b,"#737")
break
case"Reserved":u.K(a.b,"#119")
break
case"Symbol":u.K(a.b,"#611")
break
case"Type":u.K(a.b,"#171")
break
case"Whitespace":u.K(a.b,"#111")
break}},
aW:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hu()
e.c=e.i(0,r)
u=e.i(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=e.i(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=e.i(0,r).k(0,p)
t=T.D("0","9")
u.a.push(t)
t=e.i(0,p).k(0,p)
u=T.D("0","9")
t.a.push(u)
u=e.i(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=e.i(0,o).k(0,n)
u=T.D("0","9")
t.a.push(u)
u=e.i(0,n).k(0,n)
t=T.D("0","9")
u.a.push(t)
t=e.i(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=e.i(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=e.i(0,r).k(0,k)
u=T.p(new H.l("/"))
t.a.push(u)
u=e.i(0,k).k(0,j)
t=T.p(new H.l("/"))
u.a.push(t)
e.i(0,k).k(0,m).a.push(new T.an())
t=e.i(0,j).k(0,i)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.i(0,j).k(0,j)
t=new T.U()
s=[T.aP]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).k(0,h)
t=T.p(new H.l("#"))
u.a.push(t)
t=e.i(0,h).k(0,h)
u=new T.U()
u.a=H.c([],s)
t.a.push(u)
t=T.p(new H.l("\n"))
u.a.push(t)
t=e.i(0,h).k(0,g)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).k(0,f)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=e.i(0,f).k(0,f)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.L("Num")
u=e.i(0,n)
u.d=u.a.L("Num")
u=e.i(0,m)
u.d=u.a.L("Symbol")
u=e.i(0,i)
u.d=u.a.L(j)
u=e.i(0,g)
u.d=u.a.L(h)
u=e.i(0,f)
u.d=u.a.L(f)
u=e.i(0,q)
u=u.d=u.a.L(q)
t=[P.k]
u.ai(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ai(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ai(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.f_.prototype={
b_:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.K(a.b,"#911")
u.K("=",t)
break
case"Id":u.K(a.b,t)
break
case"Other":u.K(a.b,t)
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break}},
aW:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hu()
l.c=l.i(0,s)
u=l.i(0,s).k(0,r)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.D("a","z")
u.a.push(t)
t=T.D("A","Z")
u.a.push(t)
t=l.i(0,r).k(0,r)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.D("0","9")
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=l.i(0,r).k(0,q)
t=T.p(new H.l("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).k(0,p)
t=T.p(new H.l("</\\-!>="))
u.a.push(t)
t=l.i(0,p).k(0,p)
u=T.p(new H.l("</\\-!>="))
t.a.push(u)
u=l.i(0,s).k(0,o)
t=T.p(new H.l('"'))
u.a.push(t)
t=l.i(0,o).k(0,n)
u=T.p(new H.l('"'))
t.a.push(u)
u=l.i(0,o).k(0,"EscStr")
t=T.p(new H.l("\\"))
u.a.push(t)
t=l.i(0,"EscStr").k(0,o)
u=T.p(new H.l('"'))
t.a.push(u)
l.i(0,o).k(0,o).a.push(new T.an())
l.i(0,s).k(0,m).a.push(new T.an())
u=l.i(0,m).k(0,m)
t=new T.U()
t.a=H.c([],[T.aP])
u.a.push(t)
u=T.p(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.D("a","z")
t.a.push(u)
u=T.D("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.L("Symbol")
u=l.i(0,n)
u.d=u.a.L("String")
u=l.i(0,r)
t=u.a.L(r)
u.d=t
t.ai(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.i(0,q)
t.d=t.a.L(q)
t=l.i(0,m)
t.d=t.a.L(m)
return l}}
V.fH.prototype={
cJ:function(a,b){this.d=H.c([],[[P.o,W.aa]])
this.K(C.b.k(b,"\n"),"#111")},
b_:function(a){},
aW:function(){return}}
V.fL.prototype={
cf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.hU().gaN().l(0,H.f(u))
if(t==null)if(d){c.$0()
m.aF(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bp(m.c).m(0,q)
o=W.lL("radio")
o.checked=s
o.name=u
W.N(o,"change",new V.fM(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bp(m.c).m(0,r.createElement("br"))},
a_:function(a,b,c){return this.cf(a,b,c,!1)},
aF:function(a){var u,t,s=P.hU(),r=P.k,q=P.ki(s.gaN(),r,r)
q.n(0,this.a,a)
u=s.bL(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dO([],[]).b1(""),"",t)}}
V.fM.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.aF(u.d)}}}
V.h1.prototype={
dc:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.N(q,"scroll",new V.h3(o),!1)},
cj:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.eu()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cT(C.b.f7(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.nk(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.dY(C.w,n,C.e,!1)
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
cX:function(a){var u,t,s,r=new V.eD("dart")
r.aR("dart")
u=new V.eZ("glsl")
u.aR("glsl")
t=new V.f_("html")
t.aR("html")
s=C.b.f_(H.c([r,u,t],[V.cj]),new V.h4(a))
if(s!=null)return s
r=new V.fH("plain")
r.aR("plain")
return r},
cg:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.r])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.c7(s).W(s,"+")){b0[t]=C.a.ad(s,1)
a6.push(1)
u=!0}else if(C.a.W(s,"-")){b0[t]=C.a.ad(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cX(a8)
r.cJ(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.dY(C.w,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.k5()
j.href="#"+H.f(n)
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.d(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.v)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.v)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gT(s);a2.v();)d.appendChild(a2.gG(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
eE:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<2;++s){r=o.createElement("div")
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
eu:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hu()
u.c=u.i(0,q)
t=u.i(0,q).k(0,p)
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).k(0,p)
s=new T.U()
r=[T.aP]
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("*"))
s.a.push(t)
t=u.i(0,p).k(0,"BoldEnd")
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,o)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).k(0,o)
s=new T.U()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("_"))
s.a.push(t)
t=u.i(0,o).k(0,n)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,m)
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).k(0,m)
s=new T.U()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("`"))
s.a.push(t)
t=u.i(0,m).k(0,"CodeEnd")
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,l)
s=T.p(new H.l("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).k(0,k)
s=T.p(new H.l("|"))
t.a.push(s)
s=u.i(0,l).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).k(0,l)
t=new T.U()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
s=u.i(0,k).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).k(0,k)
t=new T.U()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
u.i(0,q).k(0,i).a.push(new T.an())
s=u.i(0,i).k(0,i)
t=new T.U()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.L(p)
s=u.i(0,n)
s.d=s.a.L(o)
s=u.i(0,"CodeEnd")
s.d=s.a.L(m)
s=u.i(0,j)
s.d=s.a.L("Link")
s=u.i(0,i)
s.d=s.a.L(i)
this.b=u}}
V.h3.prototype={
$1:function(a){P.kx(C.m,new V.h2(this.a))}}
V.h2.prototype={
$0:function(){var u=C.d.a8(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
V.h4.prototype={
$1:function(a){return a.a===this.a}}
V.hl.prototype={
a_:function(a,b,c){var u,t,s,r,q=this,p=W.kg(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bp(q.c)
t=u.gj(u)
W.N(p,"click",new V.hn(q,p,b,t),!1)
J.bp(q.c).m(0,p)
J.bp(q.c).m(0,document.createElement("br"))
s=P.hU().gaN().l(0,H.f(q.a))
if(s==null){q.aF(t)
r=c}else r=P.c9(s,null,null)===t
if(r)p.click()},
m:function(a,b){return this.a_(a,b,!1)},
aF:function(a){var u,t,s=P.hU(),r=P.k,q=P.ki(s.gaN(),r,r)
q.n(0,this.a,""+a)
u=s.bL(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dO([],[]).b1(""),"",t)}}
V.hn.prototype={
$1:function(a){var u=this,t=u.a,s=J.bp(t.c)
s.B(s,new V.hm())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.aF(u.d)}}
V.hm.prototype={
$1:function(a){var u
if(!!J.G(a).$ib8){u=a.style
u.border="solid 2px white"}}}
T.ep.prototype={}
T.ch.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.E():u},
aT:function(a){var u=this.d
if(u!=null)u.H(a)},
ex:function(){return this.aT(null)},
sa3:function(a){var u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.x("offsetScalar",u,a)
u.b=!0
this.aT(u)}}}
T.jb.prototype={
$1:function(a){var u,t=this.a,s=this.b.f.f9(a),r=t.b
if(r!==s){if(r!=null)r.gu().U(0,t.gcc())
u=t.b
t.b=s
s.gu().m(0,t.gcc())
s=new D.x("bumpyTexture",u,t.b)
s.b=!0
t.aT(s)}}}
T.jc.prototype={
$0:function(){this.a.sa3(0.1)}}
T.jd.prototype={
$0:function(){this.a.sa3(0.2)}}
T.jf.prototype={
$0:function(){this.a.sa3(0.3)}}
T.jg.prototype={
$0:function(){this.a.sa3(0.4)}}
T.jh.prototype={
$0:function(){this.a.sa3(0.5)}}
T.ji.prototype={
$0:function(){this.a.sa3(0.6)}}
T.jj.prototype={
$0:function(){this.a.sa3(0.7)}}
T.jk.prototype={
$0:function(){this.a.sa3(0.8)}}
T.jl.prototype={
$0:function(){this.a.sa3(0.9)}}
T.jm.prototype={
$0:function(){this.a.sa3(1)}}
T.je.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cg("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cg("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.d3=u.h
u=J.cy.prototype
u.d5=u.h
u=P.j.prototype
u.d4=u.b2
u=W.I.prototype
u.b7=u.a4
u=W.dF.prototype
u.d6=u.ab
u=T.cr.prototype
u.d2=u.ah
u.bS=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mU","mm",7)
u(P,"mV","mn",7)
u(P,"mW","mo",7)
t(P,"kY","mS",9)
s(W,"n8",4,null,["$4"],["mp"],13,0)
s(W,"n9",4,null,["$4"],["mq"],13,0)
var m
r(m=E.ap.prototype,"gcF",0,0,null,["$1","$0"],["cG","fh"],1,0)
r(m,"gcH",0,0,null,["$1","$0"],["cI","fi"],1,0)
r(m,"gcD",0,0,null,["$1","$0"],["cE","fg"],1,0)
r(m,"gcB",0,0,null,["$1","$0"],["cC","fd"],1,0)
q(m,"gfb","fc",4)
q(m,"gfe","ff",4)
r(m=E.cU.prototype,"gbU",0,0,null,["$1","$0"],["bW","bV"],1,0)
p(m,"gfv","cO",9)
o(m=X.d4.prototype,"gdW","dX",5)
o(m,"gdK","dL",5)
o(m,"gdQ","dR",2)
o(m,"ge_","e0",10)
o(m,"gdY","dZ",10)
o(m,"ge2","e3",2)
o(m,"ge6","e7",2)
o(m,"gdU","dV",2)
o(m,"ge4","e5",2)
o(m,"gdS","dT",2)
o(m,"ge8","e9",16)
o(m,"gea","eb",5)
o(m,"gej","ek",6)
o(m,"gef","eg",6)
o(m,"geh","ei",6)
n(V.y.prototype,"gj","bE",11)
n(V.O.prototype,"gj","bE",11)
r(m=U.bx.prototype,"gaq",0,0,null,["$1","$0"],["M","Z"],1,0)
q(m,"gdI","dJ",12)
q(m,"ged","ee",12)
r(m=U.d5.prototype,"gaq",0,0,null,["$1","$0"],["M","Z"],1,0)
o(m,"gbg","bh",0)
o(m,"gbi","bj",0)
o(m,"gbk","bl",0)
r(m=U.d6.prototype,"gaq",0,0,null,["$1","$0"],["M","Z"],1,0)
o(m,"gbg","bh",0)
o(m,"gbi","bj",0)
o(m,"gbk","bl",0)
o(m,"gdB","dC",0)
o(m,"gdD","dE",0)
o(m,"geC","eD",0)
o(m,"geA","eB",0)
o(m,"gey","ez",0)
o(U.d7.prototype,"gdG","dH",0)
r(m=M.co.prototype,"gam",0,0,null,["$1","$0"],["an","df"],1,0)
q(m,"gdM","dN",4)
q(m,"gdO","dP",4)
r(X.cJ.prototype,"gbX",0,0,null,["$1","$0"],["ao","dj"],1,0)
r(T.ch.prototype,"gcc",0,0,null,["$1","$0"],["aT","ex"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.jD,J.a,J.Y,P.ds,P.j,H.bB,P.f4,H.cp,H.hQ,H.ev,H.hz,P.b6,H.bs,H.dK,P.as,H.fa,H.fc,H.f6,P.dR,P.db,P.cR,P.hb,P.cV,P.iU,P.iz,P.it,P.dr,P.q,P.iM,P.fj,P.es,P.f2,P.iS,P.iR,P.b_,P.Z,P.a2,P.aL,P.fF,P.cP,P.dj,P.eW,P.eY,P.o,P.K,P.aR,P.k,P.M,P.bh,P.hS,P.iC,W.ez,W.bT,W.B,W.cH,W.dF,W.iH,W.cq,W.aw,W.iy,W.dZ,P.iE,P.dW,P.iu,P.bf,T.an,T.cr,T.aP,T.fN,T.fX,R.cQ,R.cW,R.cX,R.ht,O.b4,O.bD,E.en,E.ap,E.fP,E.cU,Z.da,Z.ia,Z.cg,Z.bz,Z.bQ,D.er,D.bv,D.R,X.ci,X.cz,X.f8,X.fg,X.a6,X.fu,X.hv,X.d4,V.b5,V.eN,V.bC,V.a7,V.aU,V.cL,V.cM,V.y,V.O,U.d5,U.d6,U.d7,M.co,A.ce,A.eg,A.d_,A.hJ,F.b7,F.bA,F.cK,F.fY,F.fZ,F.h_,F.h0,F.d9,F.i1,F.i2,F.i5,F.i6,O.cT,T.hp,X.jt,X.hf,X.cJ,V.cj,V.fL,V.h1,V.hl])
s(J.a,[J.f5,J.cw,J.cy,J.aM,J.cx,J.b9,H.bG,H.aQ,W.e,W.ed,W.b1,W.af,W.z,W.dd,W.a5,W.eE,W.eF,W.df,W.cn,W.dh,W.eH,W.h,W.dk,W.aq,W.f0,W.dm,W.ar,W.ff,W.fo,W.dt,W.du,W.au,W.dv,W.dy,W.ax,W.dC,W.dE,W.az,W.dG,W.aA,W.dL,W.ai,W.dP,W.hs,W.aC,W.dS,W.hx,W.hY,W.e_,W.e1,W.e3,W.e5,W.e7,P.aO,P.dp,P.aS,P.dA,P.fK,P.dM,P.aW,P.dU,P.eh,P.dc,P.cN,P.dI])
s(J.cy,[J.fG,J.bP,J.aN])
t(J.jC,J.aM)
s(J.cx,[J.cv,J.cu])
t(P.fe,P.ds)
s(P.fe,[H.d2,W.ii,W.T,P.eS])
t(H.l,H.d2)
s(P.j,[H.eK,H.fk,H.bR])
s(H.eK,[H.cB,H.fb])
s(P.f4,[H.fl,H.ib])
t(H.fm,H.cB)
t(H.ew,H.ev)
s(P.b6,[H.fC,H.f7,H.hP,H.eq,H.fV,P.cI,P.a9,P.hR,P.hN,P.bM,P.eu,P.eC])
s(H.bs,[H.jq,H.hg,H.j7,H.j8,H.j9,P.id,P.ic,P.ie,P.ig,P.iL,P.iK,P.j_,P.iw,P.ix,P.fd,P.fi,P.eI,P.eJ,P.hX,P.hT,P.hV,P.hW,P.iN,P.iO,P.iQ,P.iP,P.iW,P.iV,P.iX,P.iY,W.eL,W.fq,W.fs,W.fU,W.ha,W.io,W.fB,W.fA,W.iA,W.iB,W.iJ,W.iT,P.iF,P.j0,P.eT,P.eU,P.ej,E.fQ,E.fR,E.fS,E.hr,D.eO,D.eP,F.j4,F.j5,F.i8,F.i7,F.i3,F.i4,T.hq,V.jo,V.fM,V.h3,V.h2,V.h4,V.hn,V.hm,T.jb,T.jc,T.jd,T.jf,T.jg,T.jh,T.ji,T.jj,T.jk,T.jl,T.jm,T.je])
s(H.hg,[H.h8,H.bq])
t(P.fh,P.as)
s(P.fh,[H.ab,W.ih])
t(H.cD,H.aQ)
s(H.cD,[H.bV,H.bX])
t(H.bW,H.bV)
t(H.bH,H.bW)
t(H.bY,H.bX)
t(H.cE,H.bY)
s(H.cE,[H.fv,H.fw,H.fx,H.fy,H.fz,H.cF,H.bI])
t(P.iv,P.iU)
t(P.is,P.iz)
t(P.dX,P.fj)
t(P.d3,P.dX)
s(P.es,[P.el,P.eM])
t(P.ex,P.hb)
s(P.ex,[P.em,P.f1,P.i0,P.i_])
t(P.hZ,P.eM)
s(P.a2,[P.H,P.r])
s(P.a9,[P.bd,P.f3])
t(P.ik,P.bh)
s(W.e,[W.w,W.eR,W.bE,W.ay,W.bZ,W.aB,W.aj,W.c0,W.i9,W.bS,P.ek,P.b0])
s(W.w,[W.I,W.aK])
s(W.I,[W.m,P.i])
s(W.m,[W.ee,W.ef,W.b2,W.b3,W.aa,W.eV,W.b8,W.fW,W.cS,W.hd,W.he,W.bO])
t(W.ey,W.af)
t(W.bt,W.dd)
s(W.a5,[W.eA,W.eB])
t(W.dg,W.df)
t(W.cm,W.dg)
t(W.di,W.dh)
t(W.eG,W.di)
t(W.ag,W.b1)
t(W.dl,W.dk)
t(W.bw,W.dl)
t(W.dn,W.dm)
t(W.by,W.dn)
t(W.aX,W.h)
s(W.aX,[W.ba,W.ah,W.be])
t(W.fp,W.dt)
t(W.fr,W.du)
t(W.dw,W.dv)
t(W.ft,W.dw)
t(W.dz,W.dy)
t(W.cG,W.dz)
t(W.dD,W.dC)
t(W.fI,W.dD)
t(W.fT,W.dE)
t(W.c_,W.bZ)
t(W.h5,W.c_)
t(W.dH,W.dG)
t(W.h6,W.dH)
t(W.h9,W.dL)
t(W.dQ,W.dP)
t(W.hh,W.dQ)
t(W.c1,W.c0)
t(W.hi,W.c1)
t(W.dT,W.dS)
t(W.hw,W.dT)
t(W.aY,W.ah)
t(W.e0,W.e_)
t(W.ij,W.e0)
t(W.de,W.cn)
t(W.e2,W.e1)
t(W.ip,W.e2)
t(W.e4,W.e3)
t(W.dx,W.e4)
t(W.e6,W.e5)
t(W.iD,W.e6)
t(W.e8,W.e7)
t(W.iG,W.e8)
t(W.il,W.ih)
t(W.im,P.cR)
t(W.iI,W.dF)
t(P.dO,P.iE)
t(P.a0,P.iu)
t(P.dq,P.dp)
t(P.f9,P.dq)
t(P.dB,P.dA)
t(P.fD,P.dB)
t(P.bL,P.i)
t(P.dN,P.dM)
t(P.hc,P.dN)
t(P.dV,P.dU)
t(P.hy,P.dV)
t(P.ei,P.dc)
t(P.fE,P.b0)
t(P.dJ,P.dI)
t(P.h7,P.dJ)
s(T.cr,[T.U,R.cZ])
s(E.en,[Z.cf,A.cO,T.hj])
s(D.R,[D.cs,D.ct,D.x,X.fJ])
s(X.fJ,[X.cC,X.av,X.bF,X.cY])
s(D.er,[U.et,U.a_])
t(U.ck,U.a_)
t(U.bx,O.b4)
s(A.d_,[A.hB,A.hE,A.hG,A.hI,A.hC,A.d0,A.hD,A.hF,A.hH,A.hK,A.hL,A.bg,A.d1,A.hM])
t(T.hk,T.hj)
t(T.ho,T.hk)
t(X.eX,X.hf)
s(V.cj,[V.eD,V.eZ,V.f_,V.fH])
t(T.ep,A.cO)
t(T.ch,O.cT)
u(H.d2,H.hQ)
u(H.bV,P.q)
u(H.bW,H.cp)
u(H.bX,P.q)
u(H.bY,H.cp)
u(P.ds,P.q)
u(P.dX,P.iM)
u(W.dd,W.ez)
u(W.df,P.q)
u(W.dg,W.B)
u(W.dh,P.q)
u(W.di,W.B)
u(W.dk,P.q)
u(W.dl,W.B)
u(W.dm,P.q)
u(W.dn,W.B)
u(W.dt,P.as)
u(W.du,P.as)
u(W.dv,P.q)
u(W.dw,W.B)
u(W.dy,P.q)
u(W.dz,W.B)
u(W.dC,P.q)
u(W.dD,W.B)
u(W.dE,P.as)
u(W.bZ,P.q)
u(W.c_,W.B)
u(W.dG,P.q)
u(W.dH,W.B)
u(W.dL,P.as)
u(W.dP,P.q)
u(W.dQ,W.B)
u(W.c0,P.q)
u(W.c1,W.B)
u(W.dS,P.q)
u(W.dT,W.B)
u(W.e_,P.q)
u(W.e0,W.B)
u(W.e1,P.q)
u(W.e2,W.B)
u(W.e3,P.q)
u(W.e4,W.B)
u(W.e5,P.q)
u(W.e6,W.B)
u(W.e7,P.q)
u(W.e8,W.B)
u(P.dp,P.q)
u(P.dq,W.B)
u(P.dA,P.q)
u(P.dB,W.B)
u(P.dM,P.q)
u(P.dN,W.B)
u(P.dU,P.q)
u(P.dV,W.B)
u(P.dc,P.as)
u(P.dI,P.q)
u(P.dJ,W.B)})()
var v={mangledGlobalNames:{r:"int",H:"double",a2:"num",k:"String",b_:"bool",aR:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.R]},{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.aR,args:[,,]},{func:1,ret:-1,args:[P.r,[P.j,E.ap]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.H},{func:1,ret:-1,args:[P.r,[P.j,U.a_]]},{func:1,ret:P.b_,args:[W.I,P.k,P.k,W.bT]},{func:1,ret:P.aR,args:[,]},{func:1,ret:P.bf,args:[,,]},{func:1,ret:-1,args:[W.aY]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.q=W.b2.prototype
C.i=W.b3.prototype
C.M=W.aa.prototype
C.P=J.a.prototype
C.b=J.aM.prototype
C.Q=J.cu.prototype
C.c=J.cv.prototype
C.R=J.cw.prototype
C.d=J.cx.prototype
C.a=J.b9.prototype
C.S=J.aN.prototype
C.z=J.fG.prototype
C.Y=P.cN.prototype
C.A=W.cS.prototype
C.p=J.bP.prototype
C.B=W.aY.prototype
C.C=W.bS.prototype
C.Z=new P.em()
C.D=new P.el()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.K=new P.fF()
C.e=new P.hZ()
C.L=new P.i0()
C.f=new P.iv()
C.m=new P.aL(0)
C.N=new P.aL(5e6)
C.O=new P.f2("element",!1,!1,!1)
C.u=H.c(u([127,2047,65535,1114111]),[P.r])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.r])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.r])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.r])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.v=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.r])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.r])
C.x=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.r])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.r])
C.y=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.r])
C.n=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.o=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.ew(0,{},C.v,[P.k,P.k])})();(function staticFields(){$.ad=0
$.br=null
$.k8=null
$.l_=null
$.kX=null
$.l3=null
$.j1=null
$.ja=null
$.jW=null
$.bj=null
$.c3=null
$.c4=null
$.jR=!1
$.ac=C.f
$.W=[]
$.ao=null
$.jx=null
$.ke=null
$.kd=null
$.bU=P.jF(P.k,P.eY)
$.kk=null
$.kn=null
$.ko=null
$.kt=null
$.kD=null
$.kG=null
$.kF=null
$.kE=null
$.km=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ns","l7",function(){return H.kZ("_$dart_dartClosure")})
u($,"nt","k0",function(){return H.kZ("_$dart_js")})
u($,"nu","l8",function(){return H.ak(H.hA({
toString:function(){return"$receiver$"}}))})
u($,"nv","l9",function(){return H.ak(H.hA({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nw","la",function(){return H.ak(H.hA(null))})
u($,"nx","lb",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nA","le",function(){return H.ak(H.hA(void 0))})
u($,"nB","lf",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nz","ld",function(){return H.ak(H.kz(null))})
u($,"ny","lc",function(){return H.ak(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nD","lh",function(){return H.ak(H.kz(void 0))})
u($,"nC","lg",function(){return H.ak(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nR","k1",function(){return P.ml()})
u($,"nE","li",function(){return P.mi()})
u($,"nS","lm",function(){return H.lU(H.iZ(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.r])))})
u($,"nU","lo",function(){return P.m7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nV","lp",function(){return P.mK()})
u($,"nT","ln",function(){return P.kj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"nL","ll",function(){return Z.a8(0)})
u($,"nF","lj",function(){return Z.a8(511)})
u($,"nN","aG",function(){return Z.a8(1)})
u($,"nM","aF",function(){return Z.a8(2)})
u($,"nH","aE",function(){return Z.a8(4)})
u($,"nO","aH",function(){return Z.a8(8)})
u($,"nP","bo",function(){return Z.a8(16)})
u($,"nI","ca",function(){return Z.a8(32)})
u($,"nJ","cb",function(){return Z.a8(64)})
u($,"nK","lk",function(){return Z.a8(96)})
u($,"nQ","aI",function(){return Z.a8(128)})
u($,"nG","bn",function(){return Z.a8(256)})
u($,"nr","l6",function(){return new V.eN(1e-9)})
u($,"nq","A",function(){return $.l6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bG,DataView:H.aQ,ArrayBufferView:H.aQ,Float32Array:H.bH,Float64Array:H.bH,Int16Array:H.fv,Int32Array:H.fw,Int8Array:H.fx,Uint16Array:H.fy,Uint32Array:H.fz,Uint8ClampedArray:H.cF,CanvasPixelArray:H.cF,Uint8Array:H.bI,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.ed,HTMLAnchorElement:W.ee,HTMLAreaElement:W.ef,Blob:W.b1,HTMLBodyElement:W.b2,HTMLCanvasElement:W.b3,CDATASection:W.aK,CharacterData:W.aK,Comment:W.aK,ProcessingInstruction:W.aK,Text:W.aK,CSSPerspective:W.ey,CSSCharsetRule:W.z,CSSConditionRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bt,MSStyleCSSProperties:W.bt,CSS2Properties:W.bt,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.eA,CSSUnparsedValue:W.eB,DataTransferItemList:W.eE,HTMLDivElement:W.aa,DOMException:W.eF,ClientRectList:W.cm,DOMRectList:W.cm,DOMRectReadOnly:W.cn,DOMStringList:W.eG,DOMTokenList:W.eH,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ag,FileList:W.bw,FileWriter:W.eR,HTMLFormElement:W.eV,Gamepad:W.aq,History:W.f0,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.ar,HTMLImageElement:W.b8,KeyboardEvent:W.ba,Location:W.ff,MediaList:W.fo,MessagePort:W.bE,MIDIInputMap:W.fp,MIDIOutputMap:W.fr,MimeType:W.au,MimeTypeArray:W.ft,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.ax,PluginArray:W.fI,RTCStatsReport:W.fT,HTMLSelectElement:W.fW,SourceBuffer:W.ay,SourceBufferList:W.h5,SpeechGrammar:W.az,SpeechGrammarList:W.h6,SpeechRecognitionResult:W.aA,Storage:W.h9,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableElement:W.cS,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.bO,TextTrack:W.aB,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.hh,TextTrackList:W.hi,TimeRanges:W.hs,Touch:W.aC,TouchEvent:W.be,TouchList:W.hw,TrackDefaultList:W.hx,CompositionEvent:W.aX,FocusEvent:W.aX,TextEvent:W.aX,UIEvent:W.aX,URL:W.hY,VideoTrackList:W.i9,WheelEvent:W.aY,Window:W.bS,DOMWindow:W.bS,CSSRuleList:W.ij,ClientRect:W.de,DOMRect:W.de,GamepadList:W.ip,NamedNodeMap:W.dx,MozNamedAttrMap:W.dx,SpeechRecognitionResultList:W.iD,StyleSheetList:W.iG,SVGLength:P.aO,SVGLengthList:P.f9,SVGNumber:P.aS,SVGNumberList:P.fD,SVGPointList:P.fK,SVGScriptElement:P.bL,SVGStringList:P.hc,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aW,SVGTransformList:P.hy,AudioBuffer:P.eh,AudioParamMap:P.ei,AudioTrackList:P.ek,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.fE,WebGL2RenderingContext:P.cN,SQLResultSetRowList:P.h7})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"
W.c1.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.l1,[])
else T.l1([])})})()
//# sourceMappingURL=test.dart.js.map
