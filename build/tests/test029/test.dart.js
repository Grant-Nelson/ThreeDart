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
a[c]=function(){a[c]=function(){H.pi(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lp(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l2:function l2(){},
kF:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hp:function(){return new P.cf("No element")},
nB:function(){return new P.cf("Too many elements")},
nA:function(){return new P.cf("Too few elements")},
t:function t(a){this.a=a},
h4:function h4(){},
c8:function c8(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
jC:function jC(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
d5:function d5(){},
er:function er(){},
nt:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p_:function(a){return v.types[H.ae(a)]},
p6:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aO(a)
if(typeof u!=="string")throw H.c(H.aE(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nU:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
cb:function(a){return H.nL(a)+H.ll(H.bW(a),0,null)},
nL:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibT){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.b.G(t,0)===36?C.b.ax(t,1):t)},
nM:function(){if(!!self.location)return self.location.href
return},
m_:function(a){var u,t,s,r,q
H.kK(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nV:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aE(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aW(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aE(s))}return H.m_(r)},
m0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aE(s))
if(s<0)throw H.c(H.aE(s))
if(s>65535)return H.nV(a)}return H.m_(a)},
nW:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nT:function(a){var u=H.ca(a).getFullYear()+0
return u},
nR:function(a){var u=H.ca(a).getMonth()+1
return u},
nN:function(a){var u=H.ca(a).getDate()+0
return u},
nO:function(a){var u=H.ca(a).getHours()+0
return u},
nQ:function(a){var u=H.ca(a).getMinutes()+0
return u},
nS:function(a){var u=H.ca(a).getSeconds()+0
return u},
nP:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.aE(a))},
h:function(a,b){if(a==null)J.aG(a)
throw H.c(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.ae(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.e8(b,s)},
oS:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
aE:function(a){return new P.aP(!0,a,null,null)},
oN:function(a){if(typeof a!=="number")throw H.c(H.aE(a))
return a},
c:function(a){var u
if(a==null)a=new P.e4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mT})
u.name=""}else u.toString=H.mT
return u},
mT:function(){return J.aO(this.dartException)},
u:function(a){throw H.c(a)},
J:function(a){throw H.c(P.b4(a))},
bj:function(a){var u,t,s,r,q,p
a=H.mS(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ma:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lU:function(a,b){return new H.i1(a,b==null?null:b.method)},
l3:function(a,b){var u=b==null,t=u?null:b.method
return new H.hs(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kR(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l3(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lU(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mW()
q=$.mX()
p=$.mY()
o=$.mZ()
n=$.n1()
m=$.n2()
l=$.n0()
$.n_()
k=$.n4()
j=$.n3()
i=r.as(u)
if(i!=null)return f.$1(H.l3(H.I(u),i))
else{i=q.as(u)
if(i!=null){i.method="call"
return f.$1(H.l3(H.I(u),i))}else{i=p.as(u)
if(i==null){i=o.as(u)
if(i==null){i=n.as(u)
if(i==null){i=m.as(u)
if(i==null){i=l.as(u)
if(i==null){i=o.as(u)
if(i==null){i=k.as(u)
if(i==null){i=j.as(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lU(H.I(u),i))}}return f.$1(new H.jd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ef()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ef()
return a},
cq:function(a){var u
if(a==null)return new H.f5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f5(a)},
oW:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
p5:function(a,b,c,d,e,f){H.e(a,"$ibI")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p5)
a.$identity=u
return u},
ns:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ix().constructor.prototype):Object.create(new H.cv(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.q()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lF(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p_,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lE:H.kU
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lF(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
np:function(a,b,c,d){var u=H.kU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.np(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.q()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
return new Function(r+H.m(q==null?$.cw=H.fL("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.q()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
return new Function(r+H.m(q==null?$.cw=H.fL("self"):q)+"."+H.m(u)+"("+o+");}")()},
nq:function(a,b,c,d){var u=H.kU,t=H.lE
switch(b?-1:a){case 0:throw H.c(H.o_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nr:function(a,b){var u,t,s,r,q,p,o,n=$.cw
if(n==null)n=$.cw=H.fL("self")
u=$.lD
if(u==null)u=$.lD=H.fL("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nq(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b3
if(typeof u!=="number")return u.q()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.q()
$.b3=u+1
return new Function(n+u+"}")()},
lp:function(a,b,c,d,e,f,g){return H.ns(a,b,H.ae(c),d,!!e,!!f,g)},
kU:function(a){return a.a},
lE:function(a){return a.c},
fL:function(a){var u,t,s,r=new H.cv("self","target","receiver","name"),q=J.l0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.oJ("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
oT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pa:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
mQ:function(a,b){throw H.c(H.b0(a,H.cs(H.I(b).substring(2))))},
pc:function(a,b){throw H.c(H.no(a,H.cs(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mQ(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pc(a,b)},
kK:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
mN:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mQ(a,b)},
mJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(typeof a=="function")return!0
u=H.mJ(J.U(a))
if(u==null)return!1
return H.my(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.li)return a
$.li=!0
try{if(H.fu(a,b))return a
u=H.kO(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.li=!1}},
lq:function(a,b){if(a!=null&&!H.lo(a,b))H.u(H.b0(a,H.kO(b)))
return a},
b0:function(a,b){return new H.j1("TypeError: "+P.dK(a)+": type '"+H.mE(a)+"' is not a subtype of type '"+b+"'")},
no:function(a,b){return new H.fM("CastError: "+P.dK(a)+": type '"+H.mE(a)+"' is not a subtype of type '"+b+"'")},
mE:function(a){var u,t=J.U(a)
if(!!t.$icy){u=H.mJ(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.cb(a)},
oJ:function(a){throw H.c(new H.jD(a))},
pi:function(a){throw H.c(new P.fW(H.I(a)))},
o_:function(a){return new H.ii(a)},
mK:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
q1:function(a,b,c){return H.cr(a["$a"+H.m(c)],H.bW(b))},
bw:function(a,b,c,d){var u
H.I(c)
H.ae(d)
u=H.cr(a["$a"+H.m(c)],H.bW(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.I(b)
H.ae(c)
u=H.cr(a["$a"+H.m(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ae(b)
u=H.bW(a)
return u==null?null:u[b]},
kO:function(a){return H.bV(a,null)},
bV:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.ll(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oC(a,b)
if('futureOr' in a)return"FutureOr<"+H.bV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oC:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.T)p+=" extends "+H.bV(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bV(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bV(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bV(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oV(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bV(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ll:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bV(p,c)}return"<"+u.i(0)+">"},
cr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ln:function(a,b,c,d){var u,t
H.I(b)
H.kK(c)
H.I(d)
if(a==null)return!1
u=H.bW(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mH(H.cr(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kK(c)
H.I(d)
if(a==null)return a
if(H.ln(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cs(b.substring(2))+H.ll(c,0,null),v.mangledGlobalNames)))},
mH:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
q_:function(a,b,c){return a.apply(b,H.cr(J.U(b)["$a"+H.m(c)],H.bW(b)))},
mM:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="L"||a===-1||a===-2||H.mM(u)}return!1},
lo:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="L"||b===-1||b===-2||H.mM(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lo(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.U(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lo(a,b))throw H.c(H.b0(a,H.kO(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.my(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aN("type" in a?a.type:l,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.cr(r,u?a.slice(1):l)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mH(H.cr(m,u),b,p,d)},
my:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p9(h,b,g,d)},
p9:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aN(c[s],d,a[s],b))return!1}return!0},
q0:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
p7:function(a){var u,t,s,r,q=H.I($.mL.$1(a)),p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mG.$2(a,q))
if(q!=null){p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kN(u)
$.kE[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kJ[q]=u
return u}if(s==="-"){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mP(a,u)
if(s==="*")throw H.c(P.jc(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mP(a,u)},
mP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ls(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.ls(a,!1,null,!!a.$iM)},
p8:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.ls(u,c,null,null)},
p3:function(){if(!0===$.lr)return
$.lr=!0
H.p4()},
p4:function(){var u,t,s,r,q,p,o,n
$.kE=Object.create(null)
$.kJ=Object.create(null)
H.p2()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mR.$1(q)
if(p!=null){o=H.p8(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p2:function(){var u,t,s,r,q,p,o=C.K()
o=H.ck(C.L,H.ck(C.M,H.ck(C.z,H.ck(C.z,H.ck(C.N,H.ck(C.O,H.ck(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mL=new H.kG(r)
$.mG=new H.kH(q)
$.mR=new H.kI(p)},
ck:function(a,b){return a(b)||b},
nD:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
pf:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oU:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lu:function(a,b,c){var u=H.pg(a,b,c)
return u},
pg:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mS(b),'g'),H.oU(c))},
fQ:function fQ(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
kR:function kR(a){this.a=a},
f5:function f5(a){this.a=a
this.b=null},
cy:function cy(){},
iH:function iH(){},
ix:function ix(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a){this.a=a},
fM:function fM(a){this.a=a},
ii:function ii(a){this.a=a},
jD:function jD(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hx:function hx(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
nK:function(a){return new Int8Array(a)},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cm(b,a))},
oA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oS(a,b,c))
return b},
cK:function cK(){},
bO:function bO(){},
e0:function e0(){},
cL:function cL(){},
e1:function e1(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
e2:function e2(){},
cM:function cM(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
oV:function(a){return J.lN(a?Object.keys(a):[],null)},
pb:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ls:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fw:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lr==null){H.p3()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jc("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lv()]
if(r!=null)return r
r=H.p7(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lv(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kT(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lN(new Array(a),b)},
lN:function(a,b){return J.l0(H.d(a,[b]))},
l0:function(a){H.kK(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.T)return a
return J.fw(a)},
oX:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.T)return a
return J.fw(a)},
co:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.T)return a
return J.fw(a)},
fv:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.T)return a
return J.fw(a)},
oY:function(a){if(typeof a=="number")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
oZ:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
dq:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bT.prototype
return a},
cp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.br.prototype
return a}if(a instanceof P.T)return a
return J.fw(a)},
nd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oX(a).q(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).A(a,b)},
lx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oZ(a).v(a,b)},
ne:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oY(a).u(a,b)},
ly:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p6(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.co(a).j(a,b)},
kS:function(a,b,c){return J.fv(a).n(a,b,c)},
nf:function(a,b){return J.dq(a).G(a,b)},
ng:function(a,b,c){return J.cp(a).ia(a,b,c)},
nh:function(a,b,c,d){return J.cp(a).j6(a,b,c,d)},
ni:function(a,b){return J.dq(a).a2(a,b)},
fx:function(a,b){return J.fv(a).L(a,b)},
nj:function(a,b,c,d){return J.cp(a).jr(a,b,c,d)},
lz:function(a,b){return J.fv(a).I(a,b)},
nk:function(a){return J.cp(a).gjd(a)},
fy:function(a){return J.cp(a).gcz(a)},
dv:function(a){return J.U(a).gJ(a)},
bB:function(a){return J.fv(a).gV(a)},
aG:function(a){return J.co(a).gk(a)},
lA:function(a){return J.fv(a).jX(a)},
nl:function(a,b){return J.cp(a).k_(a,b)},
nm:function(a,b,c){return J.dq(a).C(a,b,c)},
nn:function(a){return J.dq(a).kc(a)},
aO:function(a){return J.U(a).i(a)},
a:function a(){},
hq:function hq(){},
dQ:function dQ(){},
dR:function dR(){},
i5:function i5(){},
bT:function bT(){},
br:function br(){},
aR:function aR(a){this.$ti=a},
l1:function l1(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bL:function bL(){},
dP:function dP(){},
dO:function dO(){},
bq:function bq(){}},P={
oc:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oK()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jF(s),1)).observe(u,{childList:true})
return new P.jE(s,u,t)}else if(self.setImmediate!=null)return P.oL()
return P.oM()},
od:function(a){self.scheduleImmediate(H.cl(new P.jG(H.n(a,{func:1,ret:-1})),0))},
oe:function(a){self.setImmediate(H.cl(new P.jH(H.n(a,{func:1,ret:-1})),0))},
of:function(a){P.la(C.t,H.n(a,{func:1,ret:-1}))},
la:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ab(a.a,1000)
return P.ol(u<0?0:u,b)},
m9:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bh]})
u=C.e.ab(a.a,1000)
return P.om(u<0?0:u,b)},
ol:function(a,b){var u=new P.fb()
u.fw(a,b)
return u},
om:function(a,b){var u=new P.fb()
u.fz(a,b)
return u},
og:function(a,b){var u,t,s
b.a=1
try{a.eV(new P.jR(b),new P.jS(b),null)}catch(s){u=H.ap(s)
t=H.cq(s)
P.pd(new P.jT(b,u,t))}},
mn:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaM")
if(u>=4){t=b.cj()
b.a=a.a
b.c=a.c
P.db(b,t)}else{t=H.e(b.c,"$ibl")
b.a=2
b.c=a
a.dL(t)}},
db:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iaq")
g=g.b
r=s.a
q=s.b
g.toString
P.kz(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.db(h.a,b)}g=h.a
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
if(m){H.e(o,"$iaq")
g=g.b
r=o.a
q=o.b
g.toString
P.kz(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.jX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jW(u,b,o).$0()}else if((g&2)!==0)new P.jV(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.U(g).$icD){if(g.a>=4){k=H.e(q.c,"$ibl")
q.c=null
b=q.bo(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mn(g,q)
return}}j=b.b
k=H.e(j.c,"$ibl")
j.c=null
b=j.bo(k)
g=u.a
r=u.b
if(!g){H.A(r,H.r(j,0))
j.a=4
j.c=r}else{H.e(r,"$iaq")
j.a=8
j.c=r}h.a=j
g=j}},
oF:function(a,b){if(H.fu(a,{func:1,args:[P.T,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.T,P.ax]})
if(H.fu(a,{func:1,args:[P.T]}))return H.n(a,{func:1,ret:null,args:[P.T]})
throw H.c(P.kT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oE:function(){var u,t
for(;u=$.cj,u!=null;){$.dp=null
t=u.b
$.cj=t
if(t==null)$.dn=null
u.a.$0()}},
oI:function(){$.lj=!0
try{P.oE()}finally{$.dp=null
$.lj=!1
if($.cj!=null)$.lw().$1(P.mI())}},
mD:function(a){var u=new P.ey(H.n(a,{func:1,ret:-1}))
if($.cj==null){$.cj=$.dn=u
if(!$.lj)$.lw().$1(P.mI())}else $.dn=$.dn.b=u},
oH:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cj
if(u==null){P.mD(a)
$.dp=$.dn
return}t=new P.ey(a)
s=$.dp
if(s==null){t.b=u
$.cj=$.dp=t}else{t.b=s.b
$.dp=s.b=t
if(t.b==null)$.dn=t}},
pd:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a3
if(C.k===u){P.kB(t,t,C.k,a)
return}u.toString
P.kB(t,t,u,H.n(u.cr(a),s))},
m8:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a3
if(u===C.k){u.toString
return P.la(a,b)}return P.la(a,H.n(u.cr(b),t))},
o3:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bh]}
H.n(b,s)
u=$.a3
if(u===C.k){u.toString
return P.m9(a,b)}t=u.e_(b,P.bh)
$.a3.toString
return P.m9(a,H.n(t,s))},
kz:function(a,b,c,d,e){var u={}
u.a=d
P.oH(new P.kA(u,e))},
mz:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
mA:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
oG:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kB:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cr(d):c.je(d,-1)
P.mD(d)},
jF:function jF(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
fb:function fb(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aM:function aM(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY:function jY(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a
this.b=null},
iA:function iA(){},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
cU:function cU(){},
iB:function iB(){},
bh:function bh(){},
aq:function aq(a,b){this.a=a
this.b=b},
ku:function ku(){},
kA:function kA(a,b){this.a=a
this.b=b},
k3:function k3(){},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function(a,b){return new H.aS([a,b])},
l4:function(a,b){return new H.aS([a,b])},
nG:function(a){return H.oW(a,new H.aS([null,null]))},
dU:function(a){return new P.k1([a])},
lf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ok:function(a,b,c){var u=new P.eN(a,b,[c])
u.c=a.e
return u},
nz:function(a,b,c){var u,t
if(P.lk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.ay,a)
try{P.oD(a,u)}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}t=P.m6(b,H.mN(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t
if(P.lk(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.ay,a)
try{t=u
t.a=P.m6(t.a,a,", ")}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lk:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
oD:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.m(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.D();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nF:function(a,b,c){var u=P.nE(b,c)
a.I(0,new P.hz(u,b,c))
return u},
lO:function(a,b){var u,t,s=P.dU(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t)s.h(0,H.A(a[t],b))
return s},
l6:function(a){var u,t={}
if(P.lk(a))return"{...}"
u=new P.ah("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.lz(a,new P.hD(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k1:function k1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a
this.c=this.b=null},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
x:function x(){},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
af:function af(){},
km:function km(){},
hE:function hE(){},
es:function es(a,b){this.a=a
this.$ti=b},
k8:function k8(){},
eO:function eO(){},
fh:function fh(){},
o7:function(a,b,c,d){H.l(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.o8(!1,b,c,d)
return},
o8:function(a,b,c,d){var u,t,s=$.n5()
if(s==null)return
u=0===c
if(u&&!0)return P.ld(s,b)
t=b.length
d=P.bu(c,d,t)
if(u&&d===t)return P.ld(s,b)
return P.ld(s,b.subarray(c,d))},
ld:function(a,b){if(P.oa(b))return
return P.ob(a,b)},
ob:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ap(t)}return},
oa:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o9:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ap(t)}return},
mC:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.p],"$ab")
for(u=J.co(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bR()
if((s&127)!==s)return t-b}return c-b},
lC:function(a,b,c,d,e,f){if(C.e.bj(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fI:function fI(){},
fJ:function fJ(){},
c1:function c1(){},
bF:function bF(){},
h6:function h6(){},
hm:function hm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hl:function hl(a){this.a=a},
jl:function jl(){},
jn:function jn(){},
ks:function ks(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
kr:function kr(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dr:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.f]})
u=H.nU(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
ny:function(a){if(a instanceof H.cy)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
nH:function(a,b,c){var u,t
H.A(b,c)
u=J.nC(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
l5:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bB(a);u.D();)C.a.h(s,H.A(u.gK(u),c))
if(b)return s
return H.l(J.l0(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u,t=P.p
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bu(b,c,u)
return H.m0(b>0||c<u?C.a.f7(a,b,c):a)}if(!!J.U(a).$icM)return H.nW(a,b,P.bu(b,c,a.length))
return P.o1(a,b,c)},
o1:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.ag(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aG(a),q,q))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gK(t))}return H.m0(r)},
nY:function(a){return new H.hr(a,H.nD(a,!1,!0,!1))},
m6:function(a,b,c){var u=J.bB(b)
if(!u.D())return a
if(c.length===0){do a+=H.m(u.gK(u))
while(u.D())}else{a+=H.m(u.gK(u))
for(;u.D();)a=a+c+H.m(u.gK(u))}return a},
mc:function(){var u=H.nM()
if(u!=null)return P.o6(u)
throw H.c(P.H("'Uri.base' is not supported"))},
fi:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nb().b
if(typeof b!=="string")H.u(H.aE(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.ao(c,"c1",0))
t=c.gjq().cA(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nu:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
lI:function(a,b){return new P.b7(1e6*b+1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aO(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ny(a)},
dx:function(a){return new P.aP(!1,null,null,a)},
kT:function(a,b,c){return new P.aP(!0,a,b,c)},
e8:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
l7:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ae(e==null?J.aG(b):e)
return new P.ho(u,!0,a,c,"Index out of range")},
H:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
m5:function(a){return new P.cf(a)},
b4:function(a){return new P.fP(a)},
v:function(a){return new P.eG(a)},
a6:function(a,b,c){return new P.hg(a,b,c)},
nI:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lt:function(a){H.pb(a)},
o6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.mb(e<e?C.b.C(a,0,e):a,5,f).gf_()
else if(u===32)return P.mb(C.b.C(a,5,e),0,f).gf_()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.p])
C.a.n(s,0,0)
C.a.n(s,1,-1)
C.a.n(s,2,-1)
C.a.n(s,7,-1)
C.a.n(s,3,0)
C.a.n(s,4,0)
C.a.n(s,5,e)
C.a.n(s,6,e)
if(P.mB(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ki()
if(r>=0)if(P.mB(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Z()
if(typeof n!=="number")return H.C(n)
if(m<n)n=m
if(typeof o!=="number")return o.Z()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.Z()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.Z()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.an(a,"..",o)))j=n>o+2&&C.b.an(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.an(a,"file",0)){if(q<=0){if(!C.b.an(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.C(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.an(a,"http",0)){if(t&&p+3===o&&C.b.an(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.an(a,"https",0)){if(t&&p+4===o&&C.b.an(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kb(a,r,q,p,o,n,m,k)}return P.on(a,0,e,r,q,p,o,n,m,k)},
me:function(a){var u=P.f
return C.a.jv(H.d(a.split("&"),[u]),P.l4(u,u),new P.jj(C.l),[P.G,P.f,P.f])},
o5:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jg(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a2(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dr(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.d8()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dr(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.d8()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a2(a,r)
if(n===58){if(r===b){++r
if(C.b.a2(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o5(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.e.aW(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
on:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ou(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ov(a,u,e-1):""
s=P.or(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.ot(P.dr(C.b.C(a,r,g),new P.kn(a,f),n),j):n}else{q=n
s=q
t=""}p=P.os(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lg(a,h+1,i,n):n
return new P.ch(j,t,s,q,p,o,i<c?P.oq(a,i+1,c):n)},
mr:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a6(c,a,b))},
ot:function(a,b){if(a!=null&&a===P.mr(b))return
return a},
or:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a2(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a2(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.md(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.b.a2(a,t)===58){P.md(a,b,c)
return"["+a+"]"}return P.ox(a,b,c)},
ox:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a2(a,u)
if(q===37){p=P.mx(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
n=C.b.C(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.C(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a2(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ms(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ou:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mu(C.b.G(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.oo(t?a.toLowerCase():a)},
oo:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ov:function(a,b,c){return P.dm(a,b,c,C.a_,!1)},
os:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.E,!0):C.n.kl(d,new P.ko(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.aa(u,"/"))u="/"+u
return P.ow(u,e,f)},
ow:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.aa(a,"/"))return P.oy(a,!u||c)
return P.oz(a)},
lg:function(a,b,c,d){var u,t={}
H.l(d,"$iG",[P.f,null],"$aG")
if(a!=null){if(d!=null)throw H.c(P.dx("Both query and queryParameters specified"))
return P.dm(a,b,c,C.p,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.I(0,new P.kp(new P.kq(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oq:function(a,b,c){return P.dm(a,b,c,C.p,!0)},
mx:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a2(a,b+1)
t=C.b.a2(a,p)
s=H.kF(u)
r=H.kF(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aW(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
ms:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.G(o,a>>>4))
C.a.n(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.e.is(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.G(o,p>>>4))
C.a.n(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cV(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mw(a,b,c,H.l(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
mw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.b.a2(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mx(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a2(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.ms(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.C(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mv:function(a){if(C.b.aa(a,"."))return!0
return C.b.eC(a,"/.")!==-1},
oz:function(a){var u,t,s,r,q,p,o
if(!P.mv(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Y(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oy:function(a,b){var u,t,s,r,q,p
if(!P.mv(a))return!b?P.mt(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaC(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaC(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mt(u[0]))}return C.a.m(u,"/")},
mt:function(a){var u,t,s,r=a.length
if(r>=2&&P.mu(J.nf(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.ax(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
op:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dx("Invalid URL encoding"))}}return u},
lh:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.C(a,b,c)
else r=new H.t(C.b.C(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.dx("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dx("Truncated URI"))
C.a.h(r,P.op(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.p],"$ab")
return new P.jm(!1).cA(r)},
mu:function(a){var u=a|32
return 97<=u&&u<=122},
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a6(m,a,t))}}if(s<0&&t>b)throw H.c(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaC(l)
if(r!==44||t!==p+7||!C.b.an(a,"base64",p+1))throw H.c(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jI(0,a,o,u)
else{n=P.mw(a,o,u,C.p,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.jf(a,l,c)},
oB:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nI(22,new P.kw(),P.V),n=new P.kv(o),m=new P.kx(),l=new P.ky(),k=H.e(n.$2(0,225),"$iV")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iV")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iV")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iV")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iV")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iV")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iV")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iV")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iV")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iV")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iV"),"]",5)
k=H.e(n.$2(9,235),"$iV")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iV")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iV")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iV")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iV")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iV")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iV")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iV")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iV")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iV"),"az",21)
k=H.e(n.$2(21,245),"$iV")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mB:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.p],"$ab")
u=$.nc()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
R:function R(){},
az:function az(a,b){this.a=a
this.b=b},
B:function B(){},
b7:function b7(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bH:function bH(){},
fB:function fB(){},
e4:function e4(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ho:function ho(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
cf:function cf(a){this.a=a},
fP:function fP(a){this.a=a},
i4:function i4(){},
ef:function ef(){},
fW:function fW(a){this.a=a},
eG:function eG(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
p:function p(){},
i:function i(){},
b8:function b8(){},
b:function b(){},
G:function G(){},
L:function L(){},
ad:function ad(){},
T:function T(){},
ax:function ax(){},
f:function f(){},
ah:function ah(a){this.a=a},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(){},
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(){},
kv:function kv(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
kb:function kb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jL:function jL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oQ:function(a){var u,t=J.U(a)
if(!!t.$ibp){u=t.ge6(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
oP:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.l4(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oO:function(a){var u={}
a.I(0,new P.kC(u))
return u},
kd:function kd(){},
kf:function kf(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k2:function k2(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
hu:function hu(){},
be:function be(){},
i2:function i2(){},
i9:function i9(){},
cR:function cR(){},
iE:function iE(){},
q:function q(){},
bi:function bi(){},
iZ:function iZ(){},
eL:function eL(){},
eM:function eM(){},
eW:function eW(){},
eX:function eX(){},
f7:function f7(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
V:function V(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(){},
bX:function bX(){},
i3:function i3(){},
ez:function ez(){},
dz:function dz(){},
dN:function dN(){},
e7:function e7(){},
e9:function e9(){},
ce:function ce(){},
ea:function ea(){},
eh:function eh(){},
eq:function eq(){},
iw:function iw(){},
f3:function f3(){},
f4:function f4(){}},W={
lB:function(){var u=document.createElement("a")
return u},
kV:function(){var u=document.createElement("canvas")
return u},
nw:function(a,b,c){var u=document.body,t=(u&&C.x).aq(u,a,b,c)
t.toString
u=W.E
u=new H.d8(new W.at(t),H.n(new W.h5(),{func:1,ret:P.R,args:[u]}),[u])
return H.e(u.gaO(u),"$iO")},
nx:function(a){H.e(a,"$ik")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cp(a)
t=u.geS(a)
if(typeof t==="string")r=u.geS(a)}catch(s){H.ap(s)}return r},
kZ:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mp:function(a,b,c,d){var u=W.k_(W.k_(W.k_(W.k_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mF(new W.jP(c),W.o)
if(u!=null&&!0)J.nh(a,b,u,!1)
return new W.jO(a,b,u,!1,[e])},
mo:function(a){var u=W.lB(),t=window.location
u=new W.bU(new W.k7(u,t))
u.fk(a)
return u},
oh:function(a,b,c,d){H.e(a,"$iO")
H.I(b)
H.I(c)
H.e(d,"$ibU")
return!0},
oi:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.I(b)
H.I(c)
u=H.e(d,"$ibU").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mq:function(){var u=P.f,t=P.lO(C.u,u),s=H.r(C.u,0),r=H.n(new W.kj(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ki(t,P.dU(u),P.dU(u),P.dU(u),null)
t.fv(null,new H.hH(C.u,r,[s,u]),q,null)
return t},
mF:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.k)return a
return u.e_(a,b)},
w:function w(){},
fz:function fz(){},
dw:function dw(){},
fA:function fA(){},
cu:function cu(){},
bY:function bY(){},
bC:function bC(){},
c0:function c0(){},
cx:function cx(){},
bD:function bD(){},
cz:function cz(){},
fS:function fS(){},
Z:function Z(){},
cA:function cA(){},
fT:function fT(){},
b5:function b5(){},
b6:function b6(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
aH:function aH(){},
h_:function h_(){},
dH:function dH(){},
dI:function dI(){},
h0:function h0(){},
h1:function h1(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
O:function O(){},
h5:function h5(){},
o:function o(){},
k:function k(){},
aI:function aI(){},
cC:function cC(){},
hb:function hb(){},
hf:function hf(){},
aQ:function aQ(){},
hk:function hk(){},
c5:function c5(){},
bp:function bp(){},
c6:function c6(){},
b9:function b9(){},
dV:function dV(){},
hN:function hN(){},
cI:function cI(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aT:function aT(){},
hS:function hS(){},
a7:function a7(){},
at:function at(a){this.a=a},
E:function E(){},
cN:function cN(){},
aU:function aU(){},
i7:function i7(){},
ig:function ig(){},
ih:function ih(a){this.a=a},
ij:function ij(){},
aV:function aV(){},
iu:function iu(){},
aW:function aW(){},
iv:function iv(){},
aX:function aX(){},
iy:function iy(){},
iz:function iz(a){this.a=a},
aJ:function aJ(){},
bg:function bg(){},
eg:function eg(){},
iF:function iF(){},
iG:function iG(){},
cX:function cX(){},
aY:function aY(){},
aK:function aK(){},
iI:function iI(){},
iJ:function iJ(){},
iT:function iT(){},
aZ:function aZ(){},
b_:function b_(){},
iX:function iX(){},
iY:function iY(){},
bR:function bR(){},
jk:function jk(){},
jB:function jB(){},
bk:function bk(){},
d9:function d9(){},
da:function da(){},
jK:function jK(){},
eB:function eB(){},
jZ:function jZ(){},
eT:function eT(){},
kc:function kc(){},
kg:function kg(){},
jI:function jI(){},
jM:function jM(a){this.a=a},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jO:function jO(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jP:function jP(a){this.a=a},
bU:function bU(a){this.a=a},
F:function F(){},
e3:function e3(a){this.a=a},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(){},
k9:function k9(){},
ka:function ka(){},
ki:function ki(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kj:function kj(){},
kh:function kh(){},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aC:function aC(){},
k7:function k7(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
kt:function kt(a){this.a=a},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
dh:function dh(){},
di:function di(){},
f1:function f1(){},
f2:function f2(){},
f6:function f6(){},
f9:function f9(){},
fa:function fa(){},
dj:function dj(){},
dk:function dk(){},
fc:function fc(){},
fd:function fd(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},O={
kW:function(a){var u=new O.a4([a])
u.bm(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
fZ:function fZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e_:function e_(){},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bb:function bb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
lL:function(){var u=new E.ar()
u.a=""
u.b=!0
u.sfj(0,O.kW(E.ar))
u.y.b1(u.gjJ(),u.gjM())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbU(0,null)
return u},
nZ:function(a,b){var u=new E.ib(a)
u.fg(a,b)
return u},
o2:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ic0)return E.m7(a,!0,!0,!0,!1)
u=W.kV()
t=u.style
t.width="100%"
t.height="100%"
s.gcz(a).h(0,u)
return E.m7(u,!0,!0,!0,!1)},
m7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.em(),j=H.e(C.m.d7(a,"webgl2",P.nG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.u(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nZ(j,a)
u=new T.iP(j)
u.b=H.ae(j.getParameter(3379))
u.c=H.ae(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.et(a)
t=new X.ht()
t.c=new X.aB(!1,!1,!1)
t.si2(P.dU(P.p))
u.b=t
t=new X.hT(u)
t.f=0
t.r=V.bt()
t.x=V.bt()
t.ch=t.Q=1
u.c=t
t=new X.hB(u)
t.r=0
t.x=V.bt()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iW(u)
t.f=V.bt()
t.r=V.bt()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfT(H.d([],[[P.cU,P.T]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gho(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghu(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.ghi(),o),!1,p))
t=u.z
n=W.b9
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghy(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghw(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghC(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghG(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghE(),q),!1,r))
n=u.z
m=W.bk;(n&&C.a).h(n,W.ab(a,H.I(W.nx(a)),H.n(u.ghI(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.ghq(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghs(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghK(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.gi_(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghW(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghY(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dN()
return k},
fK:function fK(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
em:function em(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iS:function iS(a){this.a=a}},Z={
mm:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.ex(b,u)},
aL:function(a){return new Z.b1(a)},
ex:function ex(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d7:function d7(a){this.a=a},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
N:function(){var u=new D.c3()
u.sao(null)
u.saU(null)
u.c=null
u.d=0
return u},
fN:function fN(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
z:function z(){this.b=null},
bJ:function bJ(a){this.b=null
this.$ti=a},
bK:function bK(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dT:function dT(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e6:function e6(){},
ee:function ee(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dS:function dS(a,b){this.a=a
this.b=b},ht:function ht(){var _=this
_.d=_.c=_.b=_.a=null},dW:function dW(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hB:function hB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hT:function hT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i8:function i8(){},eo:function eo(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iW:function iW(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},et:function et(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lM:function(a){var u=new X.hh(),t=new V.aj(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.l8()
u.r=t
return u},
lW:function(a){var u,t,s=new X.e5()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gfA())
t=new D.K("mover",u,s.b,[U.ak])
t.b=!0
s.a6(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.S().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.B])
t.b=!0
s.a6(t)}t=s.d
if(!(Math.abs(t-0.1)<$.S().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.B])
t.b=!0
s.a6(t)}t=s.e
if(!(Math.abs(t-2000)<$.S().a)){s.e=2000
t=new D.K("far",t,2000,[P.B])
t.b=!0
s.a6(t)}return s},
fH:function fH(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){},
hh:function hh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){this.b=this.a=null},
e5:function e5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){},
mO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="modifiers",a9=34067,b0=V.o0("Test 029"),b1=W.kV()
b1.className="pageLargeCanvas"
b1.id=a5
b0.a.appendChild(b1)
u=[P.f]
b0.dY(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],u))
b0.j5(H.d(["bumpMaps"],u))
b0.dY(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.u(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.o2(t,!0,!0,!0,!1)
r=new U.cE()
q=U.ak
r.bm(q)
r.b1(r.gha(),r.ghO())
r.e=null
r.f=V.bN()
r.r=0
p=s.r
o=new U.ev()
n=U.kX()
n.sd6(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.saj(0,0)
n.scT(100)
n.sX(0)
n.scB(0.5)
o.b=n
m=o.gaS()
n.gt().h(0,m)
n=U.kX()
n.sd6(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.saj(0,0)
n.scT(100)
n.sX(0)
n.scB(0.5)
o.c=n
n.gt().h(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.aB(!1,!1,!1)
k=o.d
o.d=l
n=[X.aB]
m=new D.K(a8,k,l,n)
m.b=!0
o.R(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.K("invertX",m,!1,[P.R])
m.b=!0
o.R(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.K("invertY",m,!1,[P.R])
m.b=!0
o.R(m)}o.b8(p)
r.h(0,o)
p=s.r
o=new U.eu()
m=U.kX()
m.sd6(0,!0)
m.scS(6.283185307179586)
m.scU(0)
m.saj(0,0)
m.scT(100)
m.sX(0)
m.scB(0.2)
o.b=m
m.gt().h(0,o.gaS())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.aB(!0,!1,!1)
k=o.c
o.c=l
m=new D.K(a8,k,l,n)
m.b=!0
o.R(m)
o.b8(p)
r.h(0,o)
p=s.r
o=new U.ew()
o.c=0.01
o.e=o.d=0
l=new X.aB(!1,!1,!1)
o.b=l
n=new D.K(a8,a6,l,n)
n.b=!0
o.R(n)
o.b8(p)
r.h(0,o)
r.h(0,U.lG(V.bc(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.lW(r)
i=new X.fH()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.l9(a6)
i.cx=new V.aj(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.l8()
i.sat(0,512)
i.sar(0,512)
h=new V.aj(0,0,0,1)
if(!i.cx.A(0,h)){k=i.cx
i.cx=h
p=new D.K("color",k,h,[V.aj])
p.b=!0
i.a6(p)}if(i.cy){i.cy=!1
p=new D.K("clearColor",!0,!1,[P.R])
p.b=!0
i.a6(p)}p=i.db
if(!(Math.abs(p-2000)<$.S().a)){i.db=2000
p=new D.K("depth",p,2000,[P.B])
p.b=!0
i.a6(p)}if(!i.f){i.f=!0
p=new D.K("autoResize",!1,!0,[P.R])
p.b=!0
i.a6(p)}p=i.r
if(!(Math.abs(p-1)<$.S().a)){i.r=1
p=new D.K("autoResizeScalarX",p,1,[P.B])
p.b=!0
i.a6(p)}p=i.x
if(!(Math.abs(p-1)<$.S().a)){i.x=1
p=new D.K("autoResizeScalarY",p,1,[P.B])
p.b=!0
i.a6(p)}g=V.l8()
if(!J.Y(i.dy,g)){k=i.dy
i.dy=g
p=new D.K("region",k,g,[V.cQ])
p.b=!0
i.a6(p)}f=E.lL()
f.sbU(0,F.pj())
e=new O.dY()
e.sfH(O.kW(V.av))
e.e.b1(e.ghe(),e.ghg())
p=new O.bb(e,"emission")
p.c=C.d
p.f=new V.a5(0,0,0)
e.f=p
p=new O.bb(e,"ambient")
p.c=C.d
p.f=new V.a5(0,0,0)
e.r=p
p=new O.bb(e,"diffuse")
p.c=C.d
p.f=new V.a5(0,0,0)
e.x=p
p=new O.bb(e,"invDiffuse")
p.c=C.d
p.f=new V.a5(0,0,0)
e.y=p
p=new O.hM(e,"specular")
p.c=C.d
p.f=new V.a5(0,0,0)
p.ch=100
e.z=p
p=new O.hJ(e,"bump")
p.c=C.d
e.Q=p
e.ch=null
p=new O.bb(e,"reflect")
p.c=C.d
p.f=new V.a5(0,0,0)
e.cx=p
p=new O.hL(e,"refract")
p.c=C.d
p.f=new V.a5(0,0,0)
p.ch=1
e.cy=p
p=new O.hI(e,"alpha")
p.c=C.d
p.f=1
e.db=p
p=new D.dT()
p.bm(D.a9)
p.sfQ(H.d([],[D.bG]))
p.si1(H.d([],[D.e6]))
p.sit(H.d([],[D.ee]))
p.siF(H.d([],[D.ej]))
p.siG(H.d([],[D.ek]))
p.siH(H.d([],[D.el]))
p.ch=p.Q=null
p.da(p.ghc(),p.ghM(),p.ghQ())
e.dx=p
o=p.Q
p=o==null?p.Q=D.N():o
p.h(0,e.gic())
p=e.dx
o=p.ch
p=o==null?p.ch=D.N():o
p.h(0,e.gbY())
e.dy=null
p=e.dx
d=V.mk()
o=U.lG(V.lR(V.lZ(),d,new V.W(0,-1,-1)))
h=new V.a5(1,1,1)
n=new D.bG()
n.c=new V.a5(1,1,1)
n.a=V.ml()
k=n.b
n.b=o
o.gt().h(0,n.gfm())
q=new D.K("mover",k,n.b,[q])
q.b=!0
n.aD(q)
if(!n.c.A(0,h)){k=n.c
n.c=h
q=new D.K("color",k,h,[V.a5])
q.b=!0
n.aD(q)}p.h(0,n)
q=e.r
q.saA(0,new V.a5(0,0,1))
q=e.x
q.saA(0,new V.a5(0,1,0))
q=e.z
q.saA(0,new V.a5(1,0,0))
q=e.z
if(q.c===C.d){q.c=C.j
q.bW()
q.ck(100)
p=q.a
p.a=null
p.a8(a6)}q.ck(10)
q=s.f
p=q.a
c=p.createTexture()
p.bindTexture(a9,c)
p.texParameteri(a9,10242,10497)
p.texParameteri(a9,10243,10497)
p.texParameteri(a9,10241,9729)
p.texParameteri(a9,10240,9729)
p.bindTexture(a9,a6)
b=new T.ei()
b.a=0
b.b=c
b.c=!1
b.d=0
q.aR(b,c,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aR(b,c,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aR(b,c,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aR(b,c,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aR(b,c,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aR(b,c,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=M.lH()
q=new O.ec()
q.b=1.0471975511965976
q.d=new V.a5(1,1,1)
k=q.c
q.c=b
b.gt().h(0,q.gbY())
p=new D.K("boxTexture",k,q.c,[T.ei])
p.b=!0
q.a8(p)
a.sb_(q)
a.sbf(0,i)
a.sb9(j)
a0=new M.dJ()
a0.a=!0
a0.sfK(0,O.kW(E.ar))
a0.e.b1(a0.ghk(),a0.ghm())
a0.y=a0.x=a0.r=a0.f=null
a1=X.lM(a6)
a0.sb9(a6)
a0.sbf(0,a1)
a0.sb_(a6)
a0.sb9(j)
a0.sb_(e)
a0.sbf(0,i)
a0.e.h(0,f)
a2=new O.fZ()
a2.se4(a6)
a2.se2(a6)
a3=V.lQ()
if(!J.Y(a2.d,a3)){a2.d=a3
a2.au()}a3=V.lQ()
if(!J.Y(a2.e,a3)){a2.e=a3
a2.au()}a2.se1(a6)
a2.se4(i.ch)
a2.se1(V.lS(0.05,0.05,0.05))
a4=M.lH()
a4.sb_(a2)
q=M.aD
p=H.d([a,a0,a4],[q])
o=new M.dC()
o.bm(q)
o.e=!0
o.f=!1
o.r=null
o.b1(o.ghS(),o.ghU())
o.ag(0,p)
q=s.d
if(q!==o){if(q!=null)q.gt().S(0,s.gdf())
s.d=o
o.gt().h(0,s.gdf())
s.dg()}q=new V.iL(a7,new X.kL(a2,s))
u=u.getElementById(a7)
q.c=u
if(u==null)H.u("Failed to find bumpMaps for Texture2DGroup")
q.dW(0,"../resources/BumpMap1.png",!0)
q.h(0,"../resources/BumpMap2.png")
q.h(0,"../resources/BumpMap3.png")
q.h(0,"../resources/BumpMap4.png")
q.h(0,"../resources/BumpMap5.png")
q.h(0,"../resources/ScrewBumpMap.png")
q.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.N()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new X.kM(b0,a2),q)
if(u.b==null)u.saU(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pe(s)},
kL:function kL(a,b){this.a=a
this.b=b},
kM:function kM(a,b){this.a=a
this.b=b}},V={
pk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.bj(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.b.aK("null",c)
return C.b.aK(C.f.eW(Math.abs(a-0)<$.S().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.B],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.aK(u[p],s))}return u},
ds:function(a){return C.f.k9(Math.pow(2,C.W.cL(Math.log(H.oN(a))/Math.log(2))))},
lQ:function(){var u=$.lP
return u==null?$.lP=new V.cG(1,0,0,0,1,0,0,0,1):u},
bN:function(){var u=$.lT
return u==null?$.lT=V.bc(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lS:function(a,b,c){return V.bc(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
lR:function(a,b,c){var u=c.B(0,Math.sqrt(c.E(c))),t=b.aI(u),s=t.B(0,Math.sqrt(t.E(t))),r=u.aI(s),q=new V.W(a.a,a.b,a.c),p=s.T(0).E(q),o=r.T(0).E(q),n=u.T(0).E(q)
return V.bc(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.lY
return u==null?$.lY=new V.aa(0,0):u},
lZ:function(){var u=$.cO
return u==null?$.cO=new V.a8(0,0,0):u},
l8:function(){var u=$.m2
return u==null?$.m2=V.m1(0,0,1,1):u},
m1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cQ(a,b,c,d)},
d6:function(){var u=$.mj
return u==null?$.mj=new V.W(0,0,0):u},
mk:function(){var u=$.mi
return u==null?$.mi=new V.W(0,1,0):u},
ml:function(){var u=$.jo
return u==null?$.jo=new V.W(0,0,1):u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.G(a,0)
t=C.b.G(b,0)
s=new V.ia()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
y:function(a){var u=new V.ik()
u.fh(a)
return u},
iV:function(){var u=new V.iU(),t=P.f
u.siu(new H.aS([t,V.cT]))
u.six(new H.aS([t,V.cY]))
u.c=null
return u},
bn:function bn(){},
aA:function aA(){},
dX:function dX(){},
aw:function aw(){this.a=null},
ia:function ia(){this.b=this.a=null},
ik:function ik(){this.a=null},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
iU:function iU(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
pe:function(a){P.o3(C.T,new V.kP(a))},
o0:function(a){var u=new V.ip()
u.fi(a,!0)
return u},
bE:function bE(){},
kP:function kP(a){this.a=a},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ip:function ip(){this.b=this.a=null},
ir:function ir(a){this.a=a},
iq:function iq(a){this.a=a},
is:function is(a){this.a=a},
iL:function iL(a,b){this.a=a
this.c=null
this.d=b},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(){}},U={
kX:function(){var u=new U.fO()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lG:function(a){var u=new U.dD()
u.a=a
return u},
fO:function fO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cE:function cE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
eu:function eu(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lH:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dE()
k.a=!0
u=E.lL()
t=F.m4()
s=t.a
r=new V.W(-1,-1,1)
r=r.B(0,Math.sqrt(r.E(r)))
q=s.bq(new V.bf(1,2,4,6),new V.aj(1,0,0,1),new V.a8(-1,-1,0),new V.aa(0,1),r,l)
s=t.a
r=new V.W(1,-1,1)
r=r.B(0,Math.sqrt(r.E(r)))
p=s.bq(new V.bf(0,3,4,6),new V.aj(0,0,1,1),new V.a8(1,-1,0),new V.aa(1,1),r,l)
s=t.a
r=new V.W(1,1,1)
r=r.B(0,Math.sqrt(r.E(r)))
o=s.bq(new V.bf(0,2,5,6),new V.aj(0,1,0,1),new V.a8(1,1,0),new V.aa(1,0),r,l)
s=t.a
r=V.bt()
n=new V.W(-1,1,1)
n=n.B(0,Math.sqrt(n.E(n)))
m=s.bq(new V.bf(0,2,4,7),new V.aj(1,1,0,1),new V.a8(-1,1,0),r,n,l)
t.d.j7(H.d([q,p,o,m],[F.as]))
t.aH()
u.sbU(0,t)
k.e=u
k.sb9(l)
k.sbf(0,l)
k.sb_(l)
return k},
dC:function dC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dE:function dE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aD:function aD(){}},A={
nJ:function(a,b){var u=a.av,t=new A.dZ(b,u)
t.bX(b,u)
t.ff(a,b)
return t},
lb:function(a,b,c,d,e){var u=new A.j3(a,c,e)
u.f=d
u.siI(P.nH(d,0,P.p))
return u},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
dG:function dG(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dZ:function dZ(a,b){var _=this
_.bu=_.e9=_.bt=_.av=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ep=_.cF=_.eo=_.bH=_.en=_.em=_.bG=_.bF=_.el=_.ek=_.bE=_.bD=_.bC=_.ej=_.ei=_.bB=_.eh=_.eg=_.bA=_.ef=_.ee=_.bz=_.by=_.ed=_.ec=_.bx=_.bw=_.eb=_.ea=_.bv=null
_.cK=_.eu=_.cJ=_.es=_.cI=_.er=_.cH=_.eq=_.cG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hK:function hK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aB=b3
_.av=b4
_.bt=b5},
d_:function d_(a,b){this.b=a
this.c=b},
d2:function d2(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d0:function d0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d4:function d4(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cS:function cS(){},
c2:function c2(a,b){this.a=a
this.b=b},
ed:function ed(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ep:function ep(){},
j9:function j9(a){this.a=a},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pj:function(){return F.oR(15,30,0.5,1,new F.kQ())},
oR:function(a,b,c,d,e){var u=F.ph(a,b,new F.kD(H.n(e,{func:1,ret:V.a8,args:[P.B]}),d,b,c))
if(u==null)return
u.aH()
u.jH(new F.jv(),new F.i0())
return u},
ph:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.as,P.B,P.B]})
if(a<1)return
if(b<1)return
u=F.m4()
t=H.d([],[F.as])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jp(g,g,new V.aj(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.e5(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jp(g,g,new V.aj(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.e5(g))}}u.d.j8(a+1,b+1,t)
return u},
dL:function(a,b,c){var u=new F.ac(),t=a.a
if(t==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.v("May not create a face with vertices attached to different shapes."))
u.ik(a)
u.il(b)
u.im(c)
C.a.h(u.a.a.d.b,u)
u.a.a.al()
return u},
m4:function(){var u=new F.eb(),t=new F.jq(u)
t.b=!1
t.siJ(H.d([],[F.as]))
u.a=t
t=new F.io()
t.scg(H.d([],[F.c9]))
u.b=t
t=new F.im(u)
t.sh_(H.d([],[F.bM]))
u.c=t
t=new F.il(u)
t.sfU(H.d([],[F.ac]))
u.d=t
u.e=null
return u},
jp:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.as(),r=new F.jy()
r.scg(H.d([],[F.c9]))
s.b=r
r=new F.ju()
u=[F.bM]
r.sh0(H.d([],u))
r.sh1(H.d([],u))
s.c=r
r=new F.jr()
u=[F.ac]
r.sfV(H.d([],u))
r.sfW(H.d([],u))
r.sfX(H.d([],u))
s.d=r
h=$.n6()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bz().a)!==0?e:t
s.x=(u&$.by().a)!==0?b:t
s.y=(u&$.b2().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.n7().a)!==0?c:t
s.ch=(u&$.ct().a)!==0?i:0
s.cx=(u&$.bx().a)!==0?a:t
return s},
kQ:function kQ(){},
kD:function kD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(){},
it:function it(){},
bM:function bM(){},
hv:function hv(){},
j2:function j2(){},
c9:function c9(){},
eb:function eb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
il:function il(a){this.a=a
this.b=null},
im:function im(a){this.a=a
this.b=null},
io:function io(){this.b=null},
as:function as(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jA:function jA(a){this.a=a},
jz:function jz(a){this.a=a},
jq:function jq(a){this.a=a
this.c=this.b=null},
jr:function jr(){this.d=this.c=this.b=null},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(){this.c=this.b=null},
jw:function jw(){},
jv:function jv(){},
jx:function jx(){},
i0:function i0(){},
jy:function jy(){this.b=null}},T={
l9:function(a){var u=new T.iO()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bQ:function bQ(){},
iK:function iK(){},
iO:function iO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iP:function iP(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iR:function iR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iQ:function iQ(a,b,c,d,e,f,g){var _=this
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
H.l2.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gJ:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.hq.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iR:1}
J.dQ.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dR.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i5.prototype={}
J.bT.prototype={}
J.br.prototype={
i:function(a){var u=a[$.mV()]
if(u==null)return this.fa(a)
return"JavaScript function for "+H.m(J.aO(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.A(b,H.r(a,0))
if(!!a.fixed$length)H.u(P.H("add"))
a.push(b)},
eO:function(a,b){if(!!a.fixed$length)H.u(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e8(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.u(P.H("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.l(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.u(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.J)(b),++t)a.push(b[t])},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b4(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.m(a[u]))
return t.join(b)},
jC:function(a){return this.m(a,"")},
jv:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b4(a))}return t},
ju:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b4(a))}throw H.c(H.hp())},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f7:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gjt:function(a){if(a.length>0)return a[0]
throw H.c(H.hp())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hp())},
bk:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.H("setRange"))
P.bu(b,c,a.length)
u=c-b
if(u===0)return
P.l7(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.co(d)
if(u>s.gk(d))throw H.c(H.nA())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dZ:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b4(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gV:function(a){return new J.au(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cP(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.u(P.H("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cm(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.r(a,0))
if(!!a.immutable$list)H.u(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cm(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.q(a.length,b.gk(b))
t=H.d([],t)
this.sk(t,u)
this.bk(t,0,a.length,a)
this.bk(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.l1.prototype={}
J.au.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.J(s))
u=t.c
if(u>=r){t.sdz(null)
return!1}t.sdz(s[u]);++t.c
return!0},
sdz:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
J.bL.prototype={
k9:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
cL:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
eW:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a2(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.v("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.aE(b))
return a*b},
bj:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fe:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
is:function(a,b){if(b<0)throw H.c(H.aE(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
$iB:1,
$iad:1}
J.dP.prototype={$ip:1}
J.dO.prototype={}
J.bq.prototype={
a2:function(a,b){if(b<0)throw H.c(H.cm(a,b))
if(b>=a.length)H.u(H.cm(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.cm(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kT(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bu(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
an:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.an(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aE(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e8(b,null))
if(b>c)throw H.c(P.e8(b,null))
if(c>a.length)throw H.c(P.e8(c,null))
return a.substring(b,c)},
ax:function(a,b){return this.C(a,b,null)},
kc:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aK:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
eD:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eC:function(a,b){return this.eD(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilV:1,
$if:1}
H.t.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.a2(this.a,b)},
$ad5:function(){return[P.p]},
$ax:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h4.prototype={}
H.c8.prototype={
gV:function(a){var u=this
return new H.cF(u,u.gk(u),[H.ao(u,"c8",0)])},
bQ:function(a,b){return this.f9(0,H.n(b,{func:1,ret:P.R,args:[H.ao(this,"c8",0)]}))}}
H.cF.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.co(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.b4(s))
u=t.c
if(u>=q){t.sb3(null)
return!1}t.sb3(r.L(s,u));++t.c
return!0},
sb3:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
H.hF.prototype={
gV:function(a){return new H.hG(J.bB(this.a),this.b,this.$ti)},
gk:function(a){return J.aG(this.a)},
L:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ai:function(a,b){return[b]}}
H.hG.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb3(u.c.$1(t.gK(t)))
return!0}u.sb3(null)
return!1},
gK:function(a){return this.a},
sb3:function(a){this.a=H.A(a,H.r(this,1))},
$ab8:function(a,b){return[b]}}
H.hH.prototype={
gk:function(a){return J.aG(this.a)},
L:function(a,b){return this.b.$1(J.fx(this.a,b))},
$ac8:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d8.prototype={
gV:function(a){return new H.jC(J.bB(this.a),this.b,this.$ti)}}
H.jC.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.D(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c4.prototype={}
H.d5.prototype={
n:function(a,b,c){H.A(c,H.ao(this,"d5",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.er.prototype={}
H.fQ.prototype={
i:function(a){return P.l6(this)},
n:function(a,b,c){H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
return H.nt()},
$iG:1}
H.fR.prototype={
gk:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.dA(b)},
dA:function(a){return this.b[H.I(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.dA(r),p))}}}
H.j_.prototype={
as:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hs.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kR.prototype={
$1:function(a){if(!!J.U(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.f5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cy.prototype={
i:function(a){return"Closure '"+H.cb(this).trim()+"'"},
$ibI:1,
gkh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iH.prototype={}
H.ix.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.cv.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.dv(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.cb(u)+"'")}}
H.j1.prototype={
i:function(a){return this.a}}
H.fM.prototype={
i:function(a){return this.a}}
H.ii.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jD.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.aS.prototype={
gk:function(a){return this.a},
gjB:function(a){return this.a===0},
gac:function(a){return new H.hx(this,[H.r(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.du(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.du(t,b)}else return s.jy(b)},
jy:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cP(u.c4(t,u.cO(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.jz(b)},
jz:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c4(r,s.cO(a))
t=s.cP(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.r(s,0))
H.A(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.dj(u==null?s.b=s.ce():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dj(t==null?s.c=s.ce():t,b,c)}else s.jA(b,c)},
jA:function(a,b){var u,t,s,r,q=this
H.A(a,H.r(q,0))
H.A(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.ce()
t=q.cO(a)
s=q.c4(u,t)
if(s==null)q.cl(u,t,[q.cf(a,b)])
else{r=q.cP(s,a)
if(r>=0)s[r].b=b
else s.push(q.cf(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b4(s))
u=u.c}},
dj:function(a,b,c){var u,t=this
H.A(b,H.r(t,0))
H.A(c,H.r(t,1))
u=t.bn(a,b)
if(u==null)t.cl(a,b,t.cf(b,c))
else u.b=c},
h7:function(){this.r=this.r+1&67108863},
cf:function(a,b){var u,t=this,s=new H.hw(H.A(a,H.r(t,0)),H.A(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.h7()
return s},
cO:function(a){return J.dv(a)&0x3ffffff},
cP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.l6(this)},
bn:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
fP:function(a,b){delete a[b]},
du:function(a,b){return this.bn(a,b)!=null},
ce:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cl(t,u,t)
this.fP(t,u)
return t}}
H.hw.prototype={}
H.hx.prototype={
gk:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hy.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b4(t))
else{t=u.c
if(t==null){u.sdi(null)
return!1}else{u.sdi(t.a)
u.c=u.c.c
return!0}}},
sdi:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:47}
H.kI.prototype={
$1:function(a){return this.a(H.I(a))},
$S:36}
H.hr.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilV:1,
$inX:1}
H.cK.prototype={$icK:1}
H.bO.prototype={$ibO:1,$io4:1}
H.e0.prototype={
gk:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cL.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oT(c)
H.bm(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.B]},
$ax:function(){return[P.B]},
$ii:1,
$ai:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.e1.prototype={
n:function(a,b,c){H.ae(c)
H.bm(b,a,a.length)
a[b]=c},
$ac4:function(){return[P.p]},
$ax:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hU.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.e2.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$ipF:1}
H.cM.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$icM:1,
$iV:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jF.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.jE.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jH.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fb.prototype={
fw:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.kl(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
fz:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.kk(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibh:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kk.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.fe(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bl.prototype={
jF:function(a){if(this.c!==6)return!0
return this.b.b.d3(H.n(this.d,{func:1,ret:P.R,args:[P.T]}),a.a,P.R,P.T)},
jx:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fu(u,{func:1,args:[P.T,P.ax]}))return H.lq(r.k5(u,a.a,a.b,null,t,P.ax),s)
else return H.lq(r.d3(H.n(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aM.prototype={
eV:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oF(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aM($.a3,[c])
s=b==null?1:3
this.dk(new P.bl(t,s,a,b,[r,c]))
return t},
k8:function(a,b){return this.eV(a,null,b)},
dk:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibl")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaM")
s=u.a
if(s<4){u.dk(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kB(null,null,s,H.n(new P.jQ(t,a),{func:1,ret:-1}))}},
dL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibl")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaM")
u=q.a
if(u<4){q.dL(a)
return}p.a=u
p.c=q.c}o.a=p.bo(a)
u=p.b
u.toString
P.kB(null,null,u,H.n(new P.jU(o,p),{func:1,ret:-1}))}},
cj:function(){var u=H.e(this.c,"$ibl")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dq:function(a){var u,t,s=this,r=H.r(s,0)
H.lq(a,{futureOr:1,type:r})
u=s.$ti
if(H.ln(a,"$icD",u,"$acD"))if(H.ln(a,"$iaM",u,null))P.mn(a,s)
else P.og(a,s)
else{t=s.cj()
H.A(a,r)
s.a=4
s.c=a
P.db(s,t)}},
dr:function(a,b){var u,t=this
H.e(b,"$iax")
u=t.cj()
t.a=8
t.c=new P.aq(a,b)
P.db(t,u)},
$icD:1}
P.jQ.prototype={
$0:function(){P.db(this.a,this.b)},
$S:2}
P.jU.prototype={
$0:function(){P.db(this.b,this.a.a)},
$S:2}
P.jR.prototype={
$1:function(a){var u=this.a
u.a=0
u.dq(a)},
$S:14}
P.jS.prototype={
$2:function(a,b){H.e(b,"$iax")
this.a.dr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jT.prototype={
$0:function(){this.a.dr(this.b,this.c)},
$S:2}
P.jX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eR(H.n(s.d,{func:1}),null)}catch(r){u=H.ap(r)
t=H.cq(r)
if(o.d){s=H.e(o.a.a.c,"$iaq").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iaq")
else q.b=new P.aq(u,t)
q.a=!0
return}if(!!J.U(n).$icD){if(n instanceof P.aM&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iaq")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.k8(new P.jY(p),null)
s.a=!1}},
$S:3}
P.jY.prototype={
$1:function(a){return this.a},
$S:32}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.A(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.d3(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.cq(o)
s=n.a
s.b=new P.aq(u,t)
s.a=!0}},
$S:3}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iaq")
r=m.c
if(H.D(r.jF(u))&&r.e!=null){q=m.b
q.b=r.jx(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.cq(p)
r=H.e(m.a.a.c,"$iaq")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aq(t,s)
n.a=!0}},
$S:3}
P.ey.prototype={}
P.iA.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aM($.a3,[P.p])
r.a=0
u=H.r(s,0)
t=H.n(new P.iC(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iD(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iC.prototype={
$1:function(a){H.A(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.r(this.b,0)]}}}
P.iD.prototype={
$0:function(){this.b.dq(this.a.a)},
$S:2}
P.cU.prototype={}
P.iB.prototype={}
P.bh.prototype={}
P.aq.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.ku.prototype={$ipU:1}
P.kA.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e4():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.k3.prototype={
k6:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a3){a.$0()
return}P.mz(r,r,this,a,-1)}catch(s){u=H.ap(s)
t=H.cq(s)
P.kz(r,r,this,u,H.e(t,"$iax"))}},
k7:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a3){a.$1(b)
return}P.mA(r,r,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.cq(s)
P.kz(r,r,this,u,H.e(t,"$iax"))}},
je:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:b}),b)},
cr:function(a){return new P.k4(this,H.n(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.k6(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eR:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.k)return a.$0()
return P.mz(null,null,this,a,b)},
d3:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a3===C.k)return a.$1(b)
return P.mA(null,null,this,a,b,c,d)},
k5:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a3===C.k)return a.$2(b,c)
return P.oG(null,null,this,a,b,c,d,e,f)}}
P.k5.prototype={
$0:function(){return this.a.eR(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k4.prototype={
$0:function(){return this.a.k6(this.b)},
$S:3}
P.k6.prototype={
$1:function(a){var u=this.c
return this.a.k7(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k1.prototype={
gV:function(a){var u=this,t=new P.eN(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icg")!=null}else{t=this.fL(b)
return t}},
fL:function(a){var u=this.d
if(u==null)return!1
return this.c2(this.dB(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dl(u==null?s.b=P.lf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dl(t==null?s.c=P.lf():t,b)}else return s.fC(0,b)},
fC:function(a,b){var u,t,s,r=this
H.A(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lf()
t=r.ds(b)
s=u[t]
if(s==null)u[t]=[r.c_(b)]
else{if(r.c2(s,b)>=0)return!1
s.push(r.c_(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i5(this.c,b)
else return this.i4(0,b)},
i4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dB(r,b)
t=s.c2(u,b)
if(t<0)return!1
s.dT(u.splice(t,1)[0])
return!0},
dl:function(a,b){H.A(b,H.r(this,0))
if(H.e(a[b],"$icg")!=null)return!1
a[b]=this.c_(b)
return!0},
i5:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icg")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dn:function(){this.r=1073741823&this.r+1},
c_:function(a){var u,t=this,s=new P.cg(H.A(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dn()
return s},
dT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dn()},
ds:function(a){return J.dv(a)&1073741823},
dB:function(a,b){return a[this.ds(b)]},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.cg.prototype={}
P.eN.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b4(t))
else{t=u.c
if(t==null){u.sdm(null)
return!1}else{u.sdm(H.A(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sdm:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
P.hz.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:5}
P.hA.prototype={$ii:1,$ib:1}
P.x.prototype={
gV:function(a){return new H.cF(a,this.gk(a),[H.bw(this,a,"x",0)])},
L:function(a,b){return this.j(a,b)},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bw(s,a,"x",0)]})
u=s.gk(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gk(a))throw H.c(P.b4(a))}},
kb:function(a,b){var u,t=this,s=H.d([],[H.bw(t,a,"x",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.n(s,u,t.j(a,u))
return s},
ka:function(a){return this.kb(a,!0)},
q:function(a,b){var u,t=this,s=[H.bw(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sk(u,C.e.q(t.gk(a),b.gk(b)))
C.a.bk(u,0,t.gk(a),a)
C.a.bk(u,t.gk(a),u.length,b)
return u},
jr:function(a,b,c,d){var u
H.A(d,H.bw(this,a,"x",0))
P.bu(b,c,this.gk(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.hC.prototype={}
P.hD.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:5}
P.af.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bw(s,a,"af",0),H.bw(s,a,"af",1)]})
for(u=J.bB(s.gac(a));u.D();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aG(this.gac(a))},
i:function(a){return P.l6(a)},
$iG:1}
P.km.prototype={
n:function(a,b,c){H.A(b,H.r(this,0))
H.A(c,H.r(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hE.prototype={
j:function(a,b){return J.ly(this.a,b)},
n:function(a,b,c){J.kS(this.a,H.A(b,H.r(this,0)),H.A(c,H.r(this,1)))},
I:function(a,b){J.lz(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gk:function(a){return J.aG(this.a)},
i:function(a){return J.aO(this.a)},
$iG:1}
P.es.prototype={}
P.k8.prototype={
ag:function(a,b){var u
for(u=J.bB(H.l(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gK(u))},
i:function(a){return P.l_(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.l7(b,"index")
for(u=P.ok(r,r.r,H.r(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$im3:1}
P.eO.prototype={}
P.fh.prototype={}
P.fI.prototype={
jI:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bu(a0,a1,b.length)
u=$.n9()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kF(C.b.G(b,n))
j=H.kF(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.lC(b,p,a1,q,o,f)
else{e=C.e.bj(f-1,4)+1
if(e===1)throw H.c(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lC(b,p,a1,q,o,d)
else{e=C.e.bj(d,4)
if(e===1)throw H.c(P.a6(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$ac1:function(){return[[P.b,P.p],P.f]}}
P.fJ.prototype={
$abF:function(){return[[P.b,P.p],P.f]}}
P.c1.prototype={}
P.bF.prototype={}
P.h6.prototype={
$ac1:function(){return[P.f,[P.b,P.p]]}}
P.hm.prototype={
i:function(a){return this.a}}
P.hl.prototype={
fM:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.h(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.ah("")
if(r>b)q.a+=C.b.C(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nm(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.f,P.f]}}
P.jl.prototype={
gjq:function(){return C.R}}
P.jn.prototype={
cA:function(a){var u,t,s=P.bu(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ks(u)
if(t.fY(a,0,s)!==s)t.dV(J.ni(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oA(0,t.b,u.length)))},
$abF:function(){return[P.f,[P.b,P.p]]}}
P.ks.prototype={
dV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
fY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dV(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.jm.prototype={
cA:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.p],"$ab")
u=P.o7(!1,a,0,null)
if(u!=null)return u
t=P.bu(0,null,J.aG(a))
s=P.mC(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.kr(!1,q)
n.c=o
n.jh(a,p,t)
if(n.e>0){H.u(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abF:function(){return[[P.b,P.p],P.f]}}
P.kr.prototype={
jh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.co(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bR()
if((o&192)!==128){n=P.a6(h+C.e.bh(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a6("Overlong encoding of 0x"+C.e.bh(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.e.bh(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.mC(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Z()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.e.bh(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.e.bh(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.az.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.nu(H.nT(u)),s=P.dF(H.nR(u)),r=P.dF(H.nN(u)),q=P.dF(H.nO(u)),p=P.dF(H.nQ(u)),o=P.dF(H.nS(u)),n=P.nv(H.nP(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.b7.prototype={
q:function(a,b){return new P.b7(C.e.q(this.a,b.gfR()))},
u:function(a,b){return new P.b7(C.e.u(this.a,b.gfR()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h3(),q=this.a
if(q<0)return"-"+new P.b7(0-q).i(0)
u=r.$1(C.e.ab(q,6e7)%60)
t=r.$1(C.e.ab(q,1e6)%60)
s=new P.h2().$1(q%1e6)
return""+C.e.ab(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bH.prototype={}
P.fB.prototype={
i:function(a){return"Assertion failed"}}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc1()+o+u
if(!q.a)return t
s=q.gc0()
r=P.dK(q.b)
return t+s+": "+r}}
P.cd.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.ho.prototype={
gc1:function(){return"RangeError"},
gc0:function(){var u,t=H.ae(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cf.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fP.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i4.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ef.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.fW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eG.prototype={
i:function(a){return"Exception: "+this.a}}
P.hg.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.C(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a2(f,q)
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
k=""}j=C.b.C(f,m,n)
return h+l+j+k+"\n"+C.b.v(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.bI.prototype={}
P.p.prototype={}
P.i.prototype={
bQ:function(a,b){var u=H.ao(this,"i",0)
return new H.d8(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gk:function(a){var u,t=this.gV(this)
for(u=0;t.D();)++u
return u},
gaO:function(a){var u,t=this.gV(this)
if(!t.D())throw H.c(H.hp())
u=t.gK(t)
if(t.D())throw H.c(H.nB())
return u},
L:function(a,b){var u,t,s
P.l7(b,"index")
for(u=this.gV(this),t=0;u.D();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nz(this,"(",")")}}
P.b8.prototype={}
P.b.prototype={$ii:1}
P.G.prototype={}
P.L.prototype={
gJ:function(a){return P.T.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
A:function(a,b){return this===b},
gJ:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.f.prototype={$ilV:1}
P.ah.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipt:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iG",[r,r],"$aG")
H.I(b)
u=J.dq(b).eC(b,"=")
if(u===-1){if(b!=="")J.kS(a,P.lh(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.ax(b,u+1)
r=this.a
J.kS(a,P.lh(t,0,t.length,r,!0),P.lh(s,0,s.length,r,!0))}return a},
$S:37}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.jh.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dr(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.ch.prototype={
gf0:function(){return this.b},
gcM:function(a){var u=this.c
if(u==null)return""
if(C.b.aa(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbK:function(a){var u=this.d
if(u==null)return P.mr(this.a)
return u},
gcY:function(a){var u=this.f
return u==null?"":u},
gew:function(){var u=this.r
return u==null?"":u},
eP:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iG",[P.f,null],"$aG")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.aa(p,"/"))p="/"+p
n=P.lg(null,0,0,b)
return new P.ch(u,s,q,r,p,n,m.r)},
gcZ:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.si3(new P.es(P.me(u==null?"":u),[t,t]))}return s.Q},
gex:function(){return this.c!=null},
geA:function(){return this.f!=null},
gey:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.m(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.m(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.m(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilc)if(s.a==b.gbT())if(s.c!=null===b.gex())if(s.b==b.gf0())if(s.gcM(s)==b.gcM(b))if(s.gbK(s)==b.gbK(b))if(s.e===b.geM(b)){u=s.f
t=u==null
if(!t===b.geA()){if(t)u=""
if(u===b.gcY(b)){u=s.r
t=u==null
if(!t===b.gey()){if(t)u=""
u=u===b.gew()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
si3:function(a){var u=P.f
this.Q=H.l(a,"$iG",[u,u],"$aG")},
$ilc:1,
gbT:function(){return this.a},
geM:function(a){return this.e}}
P.kn.prototype={
$1:function(a){throw H.c(P.a6("Invalid port",this.a,this.b+1))},
$S:16}
P.ko.prototype={
$1:function(a){return P.fi(C.a0,a,C.l,!1)},
$S:17}
P.kq.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fi(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fi(C.r,b,C.l,!0))}},
$S:18}
P.kp.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bB(H.mN(b,"$ii")),t=this.a;u.D();)t.$2(a,H.I(u.gK(u)))},
$S:31}
P.jf.prototype={
gf_:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.eD(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jL("data",p,p,p,P.dm(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kw.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.kv.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nj(u,0,96,b)
return u},
$S:35}
P.kx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.kb.prototype={
gex:function(){return this.c>0},
gez:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
geA:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gey:function(){return this.r<this.a.length},
gdD:function(){return this.b===4&&C.b.aa(this.a,"http")},
gdE:function(){return this.b===5&&C.b.aa(this.a,"https")},
gbT:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdD())q=t.x="http"
else if(t.gdE()){t.x="https"
q="https"}else if(q===4&&C.b.aa(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.aa(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
gf0:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gcM:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbK:function(a){var u,t=this
if(t.gez()){u=t.d
if(typeof u!=="number")return u.q()
return P.dr(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdD())return 80
if(t.gdE())return 443
return 0},
geM:function(a){return C.b.C(this.a,this.e,this.f)},
gcY:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.C(this.a,u+1,t):""},
gew:function(){var u=this.r,t=this.a
return u<t.length?C.b.ax(t,u+1):""},
gcZ:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Z()
if(t>=u.r)return C.a1
t=P.f
return new P.es(P.me(u.gcY(u)),[t,t])},
eP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iG",[P.f,null],"$aG")
u=k.gbT()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.gez()?k.gbK(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.aa(o,"/"))o="/"+o
m=P.lg(j,0,0,b)
n=k.r
l=n<s.length?C.b.ax(s,n+1):j
return new P.ch(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilc&&this.a===b.i(0)},
i:function(a){return this.a},
$ilc:1}
P.jL.prototype={}
W.w.prototype={}
W.fz.prototype={
gk:function(a){return a.length}}
W.dw.prototype={
i:function(a){return String(a)},
$idw:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.cu.prototype={$icu:1}
W.bY.prototype={$ibY:1}
W.bC.prototype={$ibC:1}
W.c0.prototype={
d7:function(a,b,c){if(c!=null)return a.getContext(b,P.oO(c))
return a.getContext(b)},
f2:function(a,b){return this.d7(a,b,null)},
$ic0:1}
W.cx.prototype={$icx:1}
W.bD.prototype={
gk:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.fS.prototype={
gk:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cA.prototype={
gk:function(a){return a.length}}
W.fT.prototype={}
W.b5.prototype={}
W.b6.prototype={}
W.fU.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
gk:function(a){return a.length}}
W.fY.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.h_.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.l(c,"$ial",[P.ad],"$aal")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.ad]]},
$ax:function(){return[[P.al,P.ad]]},
$ii:1,
$ai:function(){return[[P.al,P.ad]]},
$ib:1,
$ab:function(){return[[P.al,P.ad]]},
$aF:function(){return[[P.al,P.ad]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gat(a))+" x "+H.m(this.gar(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbI(b)&&a.top===u.gbO(b)&&this.gat(a)===u.gat(b)&&this.gar(a)===u.gar(b)},
gJ:function(a){return W.mp(C.f.gJ(a.left),C.f.gJ(a.top),C.f.gJ(this.gat(a)),C.f.gJ(this.gar(a)))},
ge0:function(a){return a.bottom},
gar:function(a){return a.height},
gbI:function(a){return a.left},
gbN:function(a){return a.right},
gbO:function(a){return a.top},
gat:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ad]}}
W.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.jJ.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iO")},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.ka(this)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gjd:function(a){return new W.jM(a)},
gcz:function(a){return new W.jJ(a,a.children)},
ge3:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
aq:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lK
if(u==null){u=H.d([],[W.aC])
t=new W.e3(u)
C.a.h(u,W.mo(null))
C.a.h(u,W.mq())
$.lK=t
d=t}else d=u
u=$.lJ
if(u==null){u=new W.fj(d)
$.lJ=u
c=u}else{u.a=d
c=u}}if($.bo==null){u=document
t=u.implementation.createHTMLDocument("")
$.bo=t
$.kY=t.createRange()
t=$.bo.createElement("base")
H.e(t,"$icu")
t.href=u.baseURI
$.bo.head.appendChild(t)}u=$.bo
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibC")}u=$.bo
if(!!this.$ibC)s=u.body
else{s=u.createElement(a.tagName)
$.bo.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.Z,a.tagName)){$.kY.selectNodeContents(s)
r=$.kY.createContextualFragment(b)}else{s.innerHTML=b
r=$.bo.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bo.body
if(s==null?u!=null:s!==u)J.lA(s)
c.d9(r)
document.adoptNode(r)
return r},
jj:function(a,b,c){return this.aq(a,b,c,null)},
f4:function(a,b){a.textContent=null
a.appendChild(this.aq(a,b,null,null))},
$iO:1,
geS:function(a){return a.tagName}}
W.h5.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iO},
$S:20}
W.o.prototype={$io:1}
W.k.prototype={
j6:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fD(a,b,c,!1)},
fD:function(a,b,c,d){return a.addEventListener(b,H.cl(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icC:1,
$aF:function(){return[W.aI]}}
W.hb.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hk.prototype={
gk:function(a){return a.length}}
W.c5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic5:1,
$aF:function(){return[W.E]}}
W.bp.prototype={$ibp:1,
ge6:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.b9.prototype={$ib9:1}
W.dV.prototype={
i:function(a){return String(a)},
$idV:1}
W.hN.prototype={
gk:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hO.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.I(a,new W.hP(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hQ.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.I(a,new W.hR(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aT.prototype={$iaT:1}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.a7.prototype={$ia7:1}
W.at.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m5("No elements"))
if(t>1)throw H.c(P.m5("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r
H.l(b,"$ii",[W.E],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dM(u,u.length,[H.bw(C.a2,u,"F",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ax:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
jX:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k_:function(a,b){var u,t
try{u=a.parentNode
J.ng(u,b,a)}catch(t){H.ap(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f8(a):u},
jb:function(a,b){return a.appendChild(H.e(b,"$iE"))},
ia:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.aU.prototype={$iaU:1,
gk:function(a){return a.length}}
W.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.ig.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.I(a,new W.ih(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.ih.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ij.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.iy.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gac:function(a){var u=H.d([],[P.f])
this.I(a,new W.iz(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.f,P.f]},
$iG:1,
$aG:function(){return[P.f,P.f]}}
W.iz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.aJ.prototype={$iaJ:1}
W.bg.prototype={$ibg:1}
W.eg.prototype={
aq:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=W.nw("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ag(0,new W.at(u))
return t}}
W.iF.prototype={
aq:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.aq(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaO(u)
s.toString
u=new W.at(s)
r=u.gaO(u)
t.toString
r.toString
new W.at(t).ag(0,new W.at(r))
return t}}
W.iG.prototype={
aq:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.aq(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaO(u)
t.toString
s.toString
new W.at(t).ag(0,new W.at(s))
return t}}
W.cX.prototype={$icX:1}
W.aY.prototype={$iaY:1}
W.aK.prototype={$iaK:1}
W.iI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aF:function(){return[W.aK]}}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aF:function(){return[W.aY]}}
W.iT.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aF:function(){return[W.aZ]}}
W.iY.prototype={
gk:function(a){return a.length}}
W.bR.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jB.prototype={
gk:function(a){return a.length}}
W.bk.prototype={
gjm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gjl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibk:1}
W.d9.prototype={
ib:function(a,b){return a.requestAnimationFrame(H.cl(H.n(b,{func:1,ret:-1,args:[P.ad]}),1))},
fS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.da.prototype={$ida:1}
W.jK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iZ")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Z]},
$ax:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aF:function(){return[W.Z]}}
W.eB.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ial)return!1
return a.left===u.gbI(b)&&a.top===u.gbO(b)&&a.width===u.gat(b)&&a.height===u.gar(b)},
gJ:function(a){return W.mp(C.f.gJ(a.left),C.f.gJ(a.top),C.f.gJ(a.width),C.f.gJ(a.height))},
gar:function(a){return a.height},
gat:function(a){return a.width}}
W.jZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aF:function(){return[W.aQ]}}
W.eT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.kc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.kg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aF:function(){return[W.aJ]}}
W.jI.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gac(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.J)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gac:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$ida")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.f,P.f]},
$aG:function(){return[P.f,P.f]}}
W.jM.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gk:function(a){return this.gac(this).length}}
W.jN.prototype={}
W.le.prototype={}
W.jO.prototype={}
W.jP.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:39}
W.bU.prototype={
fk:function(a){var u
if($.dc.gjB($.dc)){for(u=0;u<262;++u)$.dc.n(0,C.Y[u],W.p0())
for(u=0;u<12;++u)$.dc.n(0,C.v[u],W.p1())}},
aX:function(a){return $.na().Y(0,W.cB(a))},
az:function(a,b,c){var u=$.dc.j(0,H.m(W.cB(a))+"::"+b)
if(u==null)u=$.dc.j(0,"*::"+b)
if(u==null)return!1
return H.lm(u.$4(a,b,c,this))},
$iaC:1}
W.F.prototype={
gV:function(a){return new W.dM(a,this.gk(a),[H.bw(this,a,"F",0)])}}
W.e3.prototype={
aX:function(a){return C.a.dZ(this.a,new W.i_(a))},
az:function(a,b,c){return C.a.dZ(this.a,new W.hZ(a,b,c))},
$iaC:1}
W.i_.prototype={
$1:function(a){return H.e(a,"$iaC").aX(this.a)},
$S:21}
W.hZ.prototype={
$1:function(a){return H.e(a,"$iaC").az(this.a,this.b,this.c)},
$S:21}
W.f0.prototype={
fv:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bQ(0,new W.k9())
t=b.bQ(0,new W.ka())
this.b.ag(0,u)
s=this.c
s.ag(0,C.B)
s.ag(0,t)},
aX:function(a){return this.a.Y(0,W.cB(a))},
az:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.Y(0,H.m(t)+"::"+b))return u.d.j9(c)
else if(s.Y(0,"*::"+b))return u.d.j9(c)
else{s=u.b
if(s.Y(0,H.m(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.m(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
$iaC:1}
W.k9.prototype={
$1:function(a){return!C.a.Y(C.v,H.I(a))},
$S:22}
W.ka.prototype={
$1:function(a){return C.a.Y(C.v,H.I(a))},
$S:22}
W.ki.prototype={
az:function(a,b,c){if(this.fd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.kj.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.I(a))},
$S:17}
W.kh.prototype={
aX:function(a){var u=J.U(a)
if(!!u.$icR)return!1
u=!!u.$iq
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.b.aa(b,"on"))return!1
return this.aX(a)},
$iaC:1}
W.dM.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdC(J.ly(u.a,t))
u.c=t
return!0}u.sdC(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdC:function(a){this.d=H.A(a,H.r(this,0))},
$ib8:1}
W.aC.prototype={}
W.k7.prototype={$ipG:1}
W.fj.prototype={
d9:function(a){new W.kt(this).$2(a,null)},
b7:function(a,b){if(b==null)J.lA(a)
else b.removeChild(a)},
ih:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nk(a)
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
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.aO(a)}catch(r){H.ap(r)}try{s=W.cB(a)
this.ig(H.e(a,"$iO"),b,p,t,s,H.e(o,"$iG"),H.I(n))}catch(r){if(H.ap(r) instanceof P.aP)throw r
else{this.b7(a,b)
window
q="Removing corrupted element "+H.m(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ig:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b7(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aX(a)){o.b7(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.az(a,"is",g)){o.b7(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gac(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.gac(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nn(r)
H.I(r)
if(!q.az(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.m(e)+" "+r+'="'+H.m(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$icX)o.d9(a.content)},
$ipr:1}
W.kt.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ih(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b7(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=H.e(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iE")}},
$S:42}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f6.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.kd.prototype={
ev:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d5:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$inX)throw H.c(P.jc("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ibY)return a
if(!!u.$icC)return a
if(!!u.$ibp)return a
if(!!u.$icK||!!u.$ibO||!!u.$icI)return a
if(!!u.$iG){t=q.ev(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.I(a,new P.kf(p,q))
return p.a}if(!!u.$ib){t=q.ev(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.ji(a,t)}throw H.c(P.jc("structured clone of other type"))},
ji:function(a,b){var u,t=J.co(a),s=t.gk(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.d5(t.j(a,u)))
return r}}
P.kf.prototype={
$2:function(a,b){this.a.a[a]=this.b.d5(b)},
$S:5}
P.fg.prototype={$ibp:1,
ge6:function(a){return this.a}}
P.kC.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.ke.prototype={}
P.hc.prototype={
gb5:function(){var u=this.b,t=H.ao(u,"x",0),s=W.O
return new H.hF(new H.d8(u,H.n(new P.hd(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.he(),{func:1,ret:s,args:[t]}),[t,s])},
I:function(a,b){H.n(b,{func:1,ret:-1,args:[W.O]})
C.a.I(P.l5(this.gb5(),!1,W.O),b)},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.gb5()
J.nl(u.b.$1(J.fx(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aG(this.gb5().a)},
j:function(a,b){var u=this.gb5()
return u.b.$1(J.fx(u.a,b))},
gV:function(a){var u=P.l5(this.gb5(),!1,W.O)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.hd.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iO},
$S:20}
P.he.prototype={
$1:function(a){return H.j(H.e(a,"$iE"),"$iO")},
$S:43}
P.k2.prototype={
gbN:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.A(u+t,H.r(this,0))},
ge0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.A(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
A:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ial){t=p.a
if(t==u.gbI(b)){s=p.b
if(s==u.gbO(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.C(r)
q=H.r(p,0)
if(H.A(t+r,q)===u.gbN(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.C(t)
u=H.A(s+t,q)===u.ge0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dv(s),q=t.b,p=J.dv(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.C(o)
u=H.r(t,0)
o=C.e.gJ(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.C(s)
u=C.e.gJ(H.A(q+s,u))
return P.oj(P.k0(P.k0(P.k0(P.k0(0,r),p),o),u))}}
P.al.prototype={
gbI:function(a){return this.a},
gbO:function(a){return this.b},
gat:function(a){return this.c},
gar:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.hu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ax:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aF:function(){return[P.ba]}}
P.be.prototype={$ibe:1}
P.i2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibe")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ax:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aF:function(){return[P.be]}}
P.i9.prototype={
gk:function(a){return a.length}}
P.cR.prototype={$icR:1}
P.iE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
P.q.prototype={
gcz:function(a){return new P.hc(a,new W.at(a))},
aq:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aC])
C.a.h(p,W.mo(null))
C.a.h(p,W.mq())
C.a.h(p,new W.kh())
c=new W.fj(new W.e3(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jj(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bi.prototype={$ibi:1}
P.iZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibi")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bi]},
$ii:1,
$ai:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aF:function(){return[P.bi]}}
P.eL.prototype={}
P.eM.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.V.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$io4:1}
P.fD.prototype={
gk:function(a){return a.length}}
P.fE.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.I(a,new P.fF(u))
return u},
gk:function(a){return a.size},
n:function(a,b,c){throw H.c(P.H("Not supported"))},
$aaf:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
P.fF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fG.prototype={
gk:function(a){return a.length}}
P.bX.prototype={}
P.i3.prototype={
gk:function(a){return a.length}}
P.ez.prototype={}
P.dz.prototype={$idz:1}
P.dN.prototype={$idN:1}
P.e7.prototype={$ie7:1}
P.e9.prototype={$ie9:1}
P.ce.prototype={
eU:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$ibp&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oP(g))
return}if(!!u.$ic6&&h==null&&t&&!0){this.iw(a,b,c,d,e,f,g)
return}throw H.c(P.dx("Incorrect number or type of arguments"))},
eT:function(a,b,c,d,e,f,g){return this.eU(a,b,c,d,e,f,g,null,null,null)},
iw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
N:function(a,b,c){return a.uniform1f(b,c)},
a5:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.ea.prototype={$iea:1}
P.eh.prototype={$ieh:1}
P.eq.prototype={$ieq:1}
P.iw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bv(a.item(b))},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.G,,,]]},
$ii:1,
$ai:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aF:function(){return[[P.G,,,]]}}
P.f3.prototype={}
P.f4.prototype={}
O.a4.prototype={
bm:function(a){var u=this
u.sh2(H.d([],[a]))
u.sdJ(null)
u.sdF(null)
u.sdK(null)},
da:function(a,b,c){var u=this,t=H.ao(u,"a4",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdJ(b)
u.sdF(a)
u.sdK(c)},
b1:function(a,b){return this.da(a,null,b)},
dI:function(a){var u
H.l(a,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
de:function(a,b){var u
H.l(b,"$ii",[H.ao(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.au(u,u.length,[H.r(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a4",0)
H.A(b,r)
r=[r]
if(H.D(s.dI(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.de(t,H.d([b],r))}},
ag:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.ao(s,"a4",0)],"$ai")
if(H.D(s.dI(b))){u=s.a
t=u.length
C.a.ag(u,b)
s.de(t,b)}},
sh2:function(a){this.a=H.l(a,"$ib",[H.ao(this,"a4",0)],"$ab")},
sdJ:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.ao(this,"a4",0)]]})},
sdF:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.ao(this,"a4",0)]]})},
sdK:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.ao(this,"a4",0)]]})},
$ii:1}
O.cH.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.N():u},
aP:function(){var u=this.b
if(u!=null)u.F(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.bN()},
bM:function(a){var u=this.a
if(a==null)C.a.h(u,V.bN())
else C.a.h(u,a)
this.aP()},
aL:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sc6:function(a){this.a=H.l(a,"$ib",[V.av],"$ab")}}
E.fK.prototype={}
E.ar.prototype={
sbU:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().S(0,s.geJ())
u=s.c
if(u!=null)u.gt().h(0,s.geJ())
t=new D.K("shape",r,s.c,[F.eb])
t.b=!0
s.bJ(t)}},
ai:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.ai(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga3(s))
s.aP()
a.cX(t.f)
s=a.dy
u=(s&&C.a).gaC(s)
if(u!=null&&t.d!=null)u.d2(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.r(s,0)]);s.D();)s.d.ah(a)
a.cW()
a.dx.aL()},
gt:function(){var u=this.z
return u==null?this.z=D.N():u},
bJ:function(a){var u=this.z
if(u!=null)u.F(a)},
al:function(){return this.bJ(null)},
eK:function(a){H.e(a,"$iz")
this.e=null
this.bJ(a)},
jO:function(){return this.eK(null)},
eI:function(a){this.bJ(H.e(a,"$iz"))},
jL:function(){return this.eI(null)},
jK:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.geH(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sao(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sao(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.al()},
jN:function(a,b){var u,t
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.gV(b),t=this.geH();u.D();)u.gK(u).gt().S(0,t)
this.al()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfj:function(a,b){this.y=H.l(b,"$ia4",[E.ar],"$aa4")},
$ibd:1}
E.ib.prototype={
fg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.av]
u.sc6(H.d([],t))
u.b=null
u.gt().h(0,new E.ic(s))
s.cy=u
u=new O.cH()
u.sc6(H.d([],t))
u.b=null
u.gt().h(0,new E.id(s))
s.db=u
u=new O.cH()
u.sc6(H.d([],t))
u.b=null
u.gt().h(0,new E.ie(s))
s.dx=u
s.siv(H.d([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.sir(new H.aS([P.f,A.cS]))},
gjW:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.v(0,u.ga3(u))
s=u}return s},
geN:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjW()
u=t.dx
u=t.ch=s.v(0,u.ga3(u))
s=u}return s},
cX:function(a){var u=this.dy,t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
cW:function(){var u=this.dy
if(u.length>1)u.pop()},
cn:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.br(0,u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
siv:function(a){this.dy=H.l(a,"$ib",[O.bP],"$ab")},
sir:function(a){this.fr=H.l(a,"$iG",[P.f,A.cS],"$aG")}}
E.ic.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.id.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ie.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.em.prototype={
dh:function(a){H.e(a,"$iz")
this.eQ()},
dg:function(){return this.dh(null)},
gjw:function(){var u,t=this,s=Date.now(),r=C.e.ab(P.lI(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.C(r)
u=C.f.cL(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.f.cL(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m8(C.t,s.gk0())}},
eQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iS(this),{func:1,ret:-1,args:[P.ad]})
C.I.fS(u)
C.I.ib(u,W.mF(t,P.ad))}},
jZ:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dN()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lI(r-s.r.a,0).a*0.000001
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
o.ah(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ap(q)
t=H.cq(q)
P.lt("Error: "+H.m(u))
P.lt("Stack: "+H.m(t))
throw H.c(u)}}}
E.iS.prototype={
$1:function(a){var u
H.pa(a)
u=this.a
if(u.ch){u.ch=!1
u.jZ()}},
$S:53}
Z.ex.prototype={$ipl:1}
Z.dA.prototype={
a1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.d7.prototype={$ipm:1}
Z.bZ.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a1(a)},
am:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aO(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfZ:function(a){this.b=H.l(a,"$ib",[Z.c7],"$ab")},
$ipu:1}
Z.c7.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cb(this.c)+"'")+"]"}}
Z.b1.prototype={
gdc:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=3
if((u&$.du().a)!==0)t+=4
if((u&$.ct().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
jc:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0)if(u===a)return t
return $.n8()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.aF().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.b2().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dt().a)!==0)C.a.h(u,"Clr3")
if((t&$.du().a)!==0)C.a.h(u,"Clr4")
if((t&$.ct().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fN.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sao(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.l5(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h8(q))
u=r.b
if(u!=null){r.saU(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.I(u,new D.h9(q))}return!0},
cE:function(){return this.F(null)},
aN:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sao:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saU:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h8.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.z.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dB.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dS.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.ht.prototype={
jT:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jP:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
si2:function(a){this.d=H.l(a,"$im3",[P.p],"$am3")}}
X.dW.prototype={}
X.hB.prototype={
b4:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaY()
r=new X.bs(a,V.bt(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cV:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f3()
if(typeof u!=="number")return u.bR()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b4(a,b))
return!0},
jU:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaY()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cJ(new V.X(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
hB:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dW(c,r.a.gaY(),b)
s.b=!0
t.F(s)
r.y=new P.az(u,!1)
r.x=V.bt()}}
X.aB.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bs.prototype={}
X.hT.prototype={
c3:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaY(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.c3(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f3()
if(typeof t!=="number")return t.bR()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.c3(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.c3(a,b,!1))
return!0},
jV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaY()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cJ(new V.X(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
ge8:function(){var u=this.b
return u==null?this.b=D.N():u},
gbP:function(){var u=this.c
return u==null?this.c=D.N():u},
geG:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.cJ.prototype={}
X.i8.prototype={}
X.eo.prototype={}
X.iW.prototype={
b4:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.aa],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=q.a.gaY()
r=new X.eo(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jS:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b4(a,!0))
return!0},
jQ:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b4(a,!0))
return!0},
jR:function(a){var u
H.l(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b4(a,!1))
return!0}}
X.et.prototype={
gaY:function(){var u=this.a,t=C.m.ge3(u).c
t.toString
u=C.m.ge3(u).d
u.toString
return V.m1(0,0,t,u)},
dv:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dS(u,new X.aB(t,a.altKey,a.shiftKey))},
aV:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
cm:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.aa(s-q,r-u)},
b6:function(a){return new V.X(a.movementX,a.movementY)},
ci:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
q=C.f.a4(r.pageX)
C.f.a4(r.pageY)
p=o.left
C.f.a4(r.pageX)
C.a.h(n,new V.aa(q-p,C.f.a4(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dB(u,new X.aB(t,a.altKey,a.shiftKey))},
c7:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hv:function(a){this.f=!0},
hj:function(a){this.f=!1},
hp:function(a){H.e(a,"$ia7")
if(H.D(this.f)&&this.c7(a))a.preventDefault()},
hz:function(a){var u
H.e(a,"$ib9")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jT(u)},
hx:function(a){var u
H.e(a,"$ib9")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jP(u)},
hD:function(a){var u,t,s,r,q=this
H.e(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aV(a)
if(H.D(q.x)){t=q.aE(a)
s=q.b6(a)
if(q.d.cV(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aG(a)
if(q.c.cV(t,r))a.preventDefault()},
hH:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aV(a)
u=r.aE(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bd(u,s))a.preventDefault()},
ht:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c7(a)){r.aV(a)
u=r.aE(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bd(u,s))a.preventDefault()}},
hF:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aV(a)
u=r.aE(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bc(u,s))a.preventDefault()},
hr:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c7(a)){r.aV(a)
u=r.aE(a)
if(H.D(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bc(u,s))a.preventDefault()}},
hJ:function(a){var u,t,s=this
H.e(a,"$ibk")
s.aV(a)
u=new V.X((a&&C.H).gjl(a),C.H.gjm(a)).B(0,180)
if(H.D(s.x)){if(s.d.jU(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aG(a)
if(s.c.jV(u,t))a.preventDefault()},
hL:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aG(s.y)
s.d.hB(u,t,r)}},
i0:function(a){var u,t=this
H.e(a,"$ib_")
t.a.focus()
t.f=!0
t.cm(a)
u=t.ci(a)
if(t.e.jS(u))a.preventDefault()},
hX:function(a){var u
H.e(a,"$ib_")
this.cm(a)
u=this.ci(a)
if(this.e.jQ(u))a.preventDefault()},
hZ:function(a){var u
H.e(a,"$ib_")
this.cm(a)
u=this.ci(a)
if(this.e.jR(u))a.preventDefault()},
sfT:function(a){this.z=H.l(a,"$ib",[[P.cU,P.T]],"$ab")}}
D.bG.prototype={
gt:function(){var u=this.d
return u==null?this.d=D.N():u},
aD:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.F(a)},
fn:function(){return this.aD(null)},
$ia9:1,
$ibd:1}
D.a9.prototype={$ibd:1}
D.dT.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.N():u},
aD:function(a){var u=this.Q
if(u!=null)u.F(a)},
dH:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.F(a)},
hA:function(){return this.dH(null)},
hN:function(a){var u,t,s
H.l(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(s==null||this.fl(s))return!1}return!0},
hd:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=H.e(b[q],"$ia9")
if(p instanceof D.bG)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.c3()
o.sao(null)
o.saU(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sao(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bJ([n])
n.b=!0
this.aD(n)},
hR:function(a,b){var u,t,s,r=D.a9
H.l(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdG();u.D();){s=u.gK(u)
C.a.S(this.e,s)
s.gt().S(0,t)}r=new D.bK([r])
r.b=!0
this.aD(r)},
fl:function(a){var u=C.a.Y(this.e,a)
return u},
sfQ:function(a){this.e=H.l(a,"$ib",[D.bG],"$ab")},
si1:function(a){this.f=H.l(a,"$ib",[D.e6],"$ab")},
sit:function(a){this.r=H.l(a,"$ib",[D.ee],"$ab")},
siF:function(a){this.x=H.l(a,"$ib",[D.ej],"$ab")},
siG:function(a){this.y=H.l(a,"$ib",[D.ek],"$ab")},
siH:function(a){this.z=H.l(a,"$ib",[D.el],"$ab")},
$ai:function(){return[D.a9]},
$aa4:function(){return[D.a9]}}
D.e6.prototype={$ia9:1,$ibd:1}
D.ee.prototype={$ia9:1,$ibd:1}
D.ej.prototype={$ia9:1,$ibd:1}
D.ek.prototype={$ia9:1,$ibd:1}
D.el.prototype={$ia9:1,$ibd:1}
V.a5.prototype={
q:function(a,b){var u=C.f.q(this.a,b.gd_()),t=C.f.q(this.b,b.gbS()),s=C.f.q(this.c,b.gcs())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
u:function(a,b){var u=C.f.u(this.a,b.gd_()),t=C.f.u(this.b,b.gbS()),s=C.f.u(this.c,b.gcs())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.aj.prototype={
q:function(a,b){var u=this,t=C.f.q(u.a,b.gd_()),s=C.f.q(u.b,b.gbS()),r=C.f.q(u.c,b.gcs()),q=C.f.q(u.d,b.gja(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aj(t,s,r,q)},
u:function(a,b){var u=this,t=C.f.u(u.a,b.gd_()),s=C.f.u(u.b,b.gbS()),r=C.f.u(u.c,b.gcs()),q=C.f.u(u.d,b.gja(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aj(t,s,r,q)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.h7.prototype={}
V.cG.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cG))return!1
u=b.a
t=$.S().a
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.cn(H.d([q.a,q.d,q.r],p),3,0),n=V.cn(H.d([q.b,q.e,q.x],p),3,0),m=V.cn(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.h(o,1)
r=" "+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.h(o,2)
p=" "+o[2]+", "
if(2>=t)return H.h(n,2)
p=p+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(p+m[2]+"]")}}
V.av.prototype={
a7:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
cQ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.S().a)return V.bN()
u=1/b1
t=-n
s=-a0
return V.bc((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bc(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
d4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bi:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a8(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.S().a
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
i:function(a){return this.W()},
M:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.cn(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
W:function(){return this.M("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.a8.prototype={
q:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a8(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.bf.prototype={
q:function(a,b){var u=this
return new V.bf(C.e.q(u.a,b.gke(b)),C.e.q(u.b,b.gkf(b)),C.e.q(u.c,b.gkg(b)),C.e.q(u.d,b.gkd(b)))},
u:function(a,b){var u=this
return new V.bf(C.e.u(u.a,b.gke(b)),C.e.u(u.b,b.gkf(b)),C.e.u(u.c,b.gkg(b)),C.e.u(u.d,b.gkd(b)))},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.cQ.prototype={
gak:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cQ))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.X.prototype={
cR:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gjn(b)
if(typeof t!=="number")return t.q()
s=C.f.q(t,s)
t=this.b
u=b.gjo(b)
if(typeof t!=="number")return t.q()
return new V.X(s,C.f.q(t,u))},
u:function(a,b){var u,t=this.a,s=b.gjn(b)
if(typeof t!=="number")return t.u()
s=C.f.u(t,s)
t=this.b
u=b.gjo(b)
if(typeof t!=="number")return t.u()
return new V.X(s,C.f.u(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.X(t*b,u*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.S().a){u=$.mf
return u==null?$.mf=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.X(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.S()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.W.prototype={
cR:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aI:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.W(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.W(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.W(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.W(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.S().a)return V.d6()
return new V.W(this.a/b,this.b/b,this.c/b)},
eE:function(){var u=$.S().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.S().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.fO.prototype={
bZ:function(a){var u=V.pk(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.N():u},
R:function(a){var u=this.y
if(u!=null)u.F(a)},
sd6:function(a,b){},
scS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.S().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bZ(u)}s=new D.K("maximumLocation",s,t.b,[P.B])
s.b=!0
t.R(s)}},
scU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.S().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bZ(u)}s=new D.K("minimumLocation",s,t.c,[P.B])
s.b=!0
t.R(s)}},
saj:function(a,b){var u,t=this
b=t.bZ(b)
u=t.d
if(!(Math.abs(u-b)<$.S().a)){t.d=b
u=new D.K("location",u,b,[P.B])
u.b=!0
t.R(u)}},
scT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.S().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.B])
r.b=!0
s.R(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.S().a)){u.f=a
t=new D.K("velocity",t,a,[P.B])
t.b=!0
u.R(t)}},
scB:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.S().a)){this.x=a
u=new D.K("dampening",u,a,[P.B])
u.b=!0
this.R(u)}},
ai:function(a,b){var u,t,s,r=this,q=r.f,p=$.S().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saj(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.S().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dD.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.N():u},
b0:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.M("          ")}}
U.cE.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.N():u},
R:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.F(a)},
ae:function(){return this.R(null)},
hb:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sao(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.R(n)},
hP:function(a,b){var u,t,s=U.ak
H.l(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaS();u.D();)u.gK(u).gt().S(0,t)
s=new D.bK([s])
s.b=!0
this.R(s)},
b0:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.r(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.b0(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bN():u
r=s.e
if(r!=null)r.aN(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ak]},
$aa4:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.eu.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.N():u},
R:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.F(a)},
ae:function(){return this.R(null)},
b8:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge8().h(0,u.gc8())
u.a.c.geG().h(0,u.gca())
u.a.c.gbP().h(0,u.gcc())
return!0},
c9:function(a){var u=this
H.e(a,"$iz")
if(!J.Y(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cb:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibs")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.u(0,a.y)
u=new V.X(t.a,t.b).v(0,2).B(0,u.gak())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.X(s.a,s.b).v(0,2).B(0,u.gak())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.saj(0,-q*p+o)
n.b.sX(0)
t=t.u(0,a.z)
n.Q=new V.X(t.a,t.b).v(0,2).B(0,u.gak())}n.ae()},
cd:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sX(t*10*s)
r.ae()}},
b0:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.ai(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bc(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iak:1}
U.ev.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.N():u},
R:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.F(a)},
ae:function(){return this.R(null)},
b8:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge8().h(0,s.gc8())
s.a.c.geG().h(0,s.gca())
s.a.c.gbP().h(0,s.gcc())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.h(0,s.gh3())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.gh5())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.h(0,s.giC())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.giA())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.h(0,s.giy())
return!0},
ay:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
c9:function(a){var u=this
a=H.j(H.e(a,"$iz"),"$ibs")
if(!J.Y(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cb:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibs")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.ay(new V.X(t.a,t.b).v(0,2).B(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ay(new V.X(s.a,s.b).v(0,2).B(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.u(0,a.z)
n.dx=n.ay(new V.X(t.a,t.b).v(0,2).B(0,u.gak()))}n.ae()},
cd:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
r.ae()}},
h4:function(a){var u=this
if(H.j(H.e(a,"$iz"),"$idW").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h6:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibs")
if(!J.Y(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ay(new V.X(s.a,s.b).v(0,2).B(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.u(0,a.z)
n.dx=n.ay(new V.X(t.a,t.b).v(0,2).B(0,u.gak()))
n.ae()},
iD:function(a){var u=this
H.e(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iB:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ieo")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.X(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.ay(new V.X(t.a,t.b).v(0,2).B(0,u.gak()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ay(new V.X(s.a,s.b).v(0,2).B(0,u.gak()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.saj(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.saj(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.u(0,a.z)
n.dx=n.ay(new V.X(t.a,t.b).v(0,2).B(0,u.gak()))}n.ae()},
iz:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
r.ae()}},
b0:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.ai(0,u)
r.b.ai(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bc(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.bc(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
U.ew.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.N():u},
R:function(a){var u=this.r
if(u!=null)u.F(a)},
b8:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.N():t
t=r.gh8()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.N():s).h(0,t)
return!0},
h9:function(a){var u,t,s,r,q=this
H.e(a,"$iz")
if(!J.Y(q.b,q.a.b.c))return
H.j(a,"$icJ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.B])
u.b=!0
q.R(u)}},
b0:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lS(u,u,u)}return t.f},
$iak:1}
M.dC.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.N():u},
a0:function(a){var u
H.e(a,"$iz")
u=this.r
if(u!=null)u.F(a)},
b2:function(){return this.a0(null)},
hT:function(a,b){var u,t,s,r,q,p,o,n=M.aD
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sao(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a0(n)},
hV:function(a,b){var u,t,s=M.aD
H.l(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga_();u.D();)u.gK(u).gt().S(0,t)
s=new D.bK([s])
s.b=!0
this.a0(s)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.aD]},
$aa4:function(){return[M.aD]},
$iaD:1}
M.dE.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.N():u},
a0:function(a){var u
H.e(a,"$iz")
u=this.r
if(u!=null)u.F(a)},
b2:function(){return this.a0(null)},
sb9:function(a){var u,t,s=this
if(a==null)a=new X.hn()
u=s.b
if(u!==a){if(u!=null)u.gt().S(0,s.ga_())
t=s.b
s.b=a
a.gt().h(0,s.ga_())
u=new D.K("camera",t,s.b,[X.c_])
u.b=!0
s.a0(u)}},
sbf:function(a,b){var u,t,s=this
if(b==null)b=X.lM(null)
u=s.c
if(u!==b){if(u!=null)u.gt().S(0,s.ga_())
t=s.c
s.c=b
b.gt().h(0,s.ga_())
u=new D.K("target",t,s.c,[X.cW])
u.b=!0
s.a0(u)}},
sb_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().S(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.ga_())
s=new D.K("technique",u,t.d,[O.bP])
s.b=!0
t.a0(s)}},
ah:function(a){var u,t=this
a.cX(t.d)
t.c.a1(a)
t.b.a1(a)
u=t.d
if(u!=null)u.ai(0,a)
t.e.ai(0,a)
t.e.ah(a)
t.b.am(a)
t.c.am(a)
a.cW()},
$iaD:1}
M.dJ.prototype={
a0:function(a){var u
H.e(a,"$iz")
u=this.y
if(u!=null)u.F(a)},
b2:function(){return this.a0(null)},
hl:function(a,b){var u,t,s,r,q,p,o,n=E.ar
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sao(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sao(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.a0(n)},
hn:function(a,b){var u,t,s=E.ar
H.l(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga_();u.D();)u.gK(u).gt().S(0,t)
s=new D.bK([s])
s.b=!0
this.a0(s)},
sb9:function(a){var u,t,s=this
if(a==null)a=X.lW(null)
u=s.b
if(u!==a){if(u!=null)u.gt().S(0,s.ga_())
t=s.b
s.b=a
a.gt().h(0,s.ga_())
u=new D.K("camera",t,s.b,[X.c_])
u.b=!0
s.a0(u)}},
sbf:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().S(0,t.ga_())
u=t.c
t.c=b
b.gt().h(0,t.ga_())
s=new D.K("target",u,t.c,[X.cW])
s.b=!0
t.a0(s)}},
sb_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().S(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.ga_())
s=new D.K("technique",u,t.d,[O.bP])
s.b=!0
t.a0(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.N():u},
ah:function(a){var u,t=this
a.cX(t.d)
t.c.a1(a)
t.b.a1(a)
u=t.d
if(u!=null)u.ai(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.ai(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();)u.d.ah(a)
t.b.toString
a.cy.aL()
a.db.aL()
t.c.am(a)
a.cW()},
sfK:function(a,b){this.e=H.l(b,"$ia4",[E.ar],"$aa4")},
$iaD:1}
M.aD.prototype={}
A.dy.prototype={}
A.fC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dG.prototype={
af:function(a,b,c){if(c==null||!c.d)C.c.a5(b.a,b.d,1)
else{a.f5(c)
C.c.a5(b.a,b.d,0)}}}
A.dZ.prototype={
ff:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.ah("")
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
d1.iL(u)
d1.iS(u)
d1.iM(u)
d1.j_(u)
d1.j0(u)
d1.iU(u)
d1.j4(u)
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
u=new P.ah("")
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
q.iP(u)
q.iK(u)
q.iN(u)
q.iQ(u)
q.iY(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iW(u)
q.iX(u)}q.iT(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.h:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c7
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iO(u)
q.iV(u)
q.iZ(u)
q.j1(u)
q.j2(u)
q.j3(u)
q.iR(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.cN(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.j(a6.y.p(0,"invViewMat"),"$iam")
if(t)a6.dy=H.j(a6.y.p(0,"objMat"),"$iam")
if(r)a6.fr=H.j(a6.y.p(0,"viewObjMat"),"$iam")
a6.fy=H.j(a6.y.p(0,"projViewObjMat"),"$iam")
if(d1.x2)a6.k1=H.j(a6.y.p(0,"txt2DMat"),"$ibS")
if(d1.y1)a6.k2=H.j(a6.y.p(0,"txtCubeMat"),"$iam")
if(d1.y2)a6.k3=H.j(a6.y.p(0,"colorMat"),"$iam")
a6.sfG(H.d([],[A.am]))
t=d1.aB
if(t>0){a6.k4=H.e(a6.y.p(0,"bendMatCount"),"$iP")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.v(a7+q+a8));(s&&C.a).h(s,H.j(g,"$iam"))}}t=d1.a
if(t!==C.d){a6.r2=H.j(a6.y.p(0,"emissionClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.rx=H.j(a6.y.p(0,a9),"$iai")
a6.x1=H.j(a6.y.p(0,b0),"$iP")
break
case C.i:a6.ry=H.j(a6.y.p(0,a9),"$ian")
a6.x1=H.j(a6.y.p(0,b0),"$iP")
break}}t=d1.b
if(t!==C.d){a6.x2=H.j(a6.y.p(0,"ambientClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.y1=H.j(a6.y.p(0,b1),"$iai")
a6.aB=H.j(a6.y.p(0,b2),"$iP")
break
case C.i:a6.y2=H.j(a6.y.p(0,b1),"$ian")
a6.aB=H.j(a6.y.p(0,b2),"$iP")
break}}t=d1.c
if(t!==C.d){a6.av=H.j(a6.y.p(0,"diffuseClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.bt=H.j(a6.y.p(0,b3),"$iai")
a6.bu=H.j(a6.y.p(0,b4),"$iP")
break
case C.i:a6.e9=H.j(a6.y.p(0,b3),"$ian")
a6.bu=H.j(a6.y.p(0,b4),"$iP")
break}}t=d1.d
if(t!==C.d){a6.bv=H.j(a6.y.p(0,"invDiffuseClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ea=H.j(a6.y.p(0,b5),"$iai")
a6.bw=H.j(a6.y.p(0,b6),"$iP")
break
case C.i:a6.eb=H.j(a6.y.p(0,b5),"$ian")
a6.bw=H.j(a6.y.p(0,b6),"$iP")
break}}t=d1.e
if(t!==C.d){a6.bz=H.j(a6.y.p(0,"shininess"),"$ia2")
a6.bx=H.j(a6.y.p(0,"specularClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ec=H.j(a6.y.p(0,b7),"$iai")
a6.by=H.j(a6.y.p(0,b8),"$iP")
break
case C.i:a6.ed=H.j(a6.y.p(0,b7),"$ian")
a6.by=H.j(a6.y.p(0,b8),"$iP")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.h:a6.ee=H.j(a6.y.p(0,"bumpTxt"),"$iai")
a6.bA=H.j(a6.y.p(0,b9),"$iP")
break
case C.i:a6.ef=H.j(a6.y.p(0,"bumpTxt"),"$ian")
a6.bA=H.j(a6.y.p(0,b9),"$iP")
break}if(d1.dy){a6.eg=H.j(a6.y.p(0,"envSampler"),"$ian")
a6.eh=H.j(a6.y.p(0,"nullEnvTxt"),"$iP")
t=d1.r
if(t!==C.d){a6.bB=H.j(a6.y.p(0,"reflectClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ei=H.j(a6.y.p(0,c0),"$iai")
a6.bC=H.j(a6.y.p(0,c1),"$iP")
break
case C.i:a6.ej=H.j(a6.y.p(0,c0),"$ian")
a6.bC=H.j(a6.y.p(0,c1),"$iP")
break}}t=d1.x
if(t!==C.d){a6.bD=H.j(a6.y.p(0,"refraction"),"$ia2")
a6.bE=H.j(a6.y.p(0,"refractClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ek=H.j(a6.y.p(0,c2),"$iai")
a6.bF=H.j(a6.y.p(0,c3),"$iP")
break
case C.i:a6.el=H.j(a6.y.p(0,c2),"$ian")
a6.bF=H.j(a6.y.p(0,c3),"$iP")
break}}}t=d1.y
if(t!==C.d){a6.bG=H.j(a6.y.p(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.j:break
case C.h:a6.em=H.j(a6.y.p(0,c4),"$iai")
a6.bH=H.j(a6.y.p(0,c5),"$iP")
break
case C.i:a6.en=H.j(a6.y.p(0,c4),"$ian")
a6.bH=H.j(a6.y.p(0,c5),"$iP")
break}}a6.sfo(H.d([],[A.d_]))
a6.sfp(H.d([],[A.d0]))
a6.sfq(H.d([],[A.d1]))
a6.sfs(H.d([],[A.d2]))
a6.sft(H.d([],[A.d3]))
a6.sfu(H.d([],[A.d4]))
if(d1.k2){t=d1.z
if(t>0){a6.eo=H.e(a6.y.p(0,"dirLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.cF;(s&&C.a).h(s,new A.d_(g,f))}}t=d1.Q
if(t>0){a6.ep=H.e(a6.y.p(0,"pntLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iQ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$ia2")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$ia2")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia2")
s=a6.cG;(s&&C.a).h(s,new A.d0(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eq=H.e(a6.y.p(0,"spotLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iQ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iQ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$ia2")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia2")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$ia2")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ia2")
s=a6.cH;(s&&C.a).h(s,new A.d1(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.er=H.e(a6.y.p(0,"txtDirLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iQ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iQ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iQ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$iP")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$iai")
s=a6.cI;(s&&C.a).h(s,new A.d2(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.es=H.e(a6.y.p(0,"txtPntLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$ibS")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iQ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iP")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ian")
s=a6.cJ;(s&&C.a).h(s,new A.d3(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eu=H.e(a6.y.p(0,"txtSpotLightCount"),"$iP")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$iP")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.v(a7+r+a8))
H.j(a2,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.v(a7+r+a8))
H.j(a3,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.v(a7+r+a8))
H.j(a4,"$ia2")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.v(a7+r+a8))
H.j(a5,"$iai")
s=a6.cK;(s&&C.a).h(s,new A.d4(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
af:function(a,b,c){C.c.a5(b.a,b.d,1)},
ap:function(a,b,c){C.c.a5(b.a,b.d,1)},
sfG:function(a){this.r1=H.l(a,"$ib",[A.am],"$ab")},
sfo:function(a){this.cF=H.l(a,"$ib",[A.d_],"$ab")},
sfp:function(a){this.cG=H.l(a,"$ib",[A.d0],"$ab")},
sfq:function(a){this.cH=H.l(a,"$ib",[A.d1],"$ab")},
sfs:function(a){this.cI=H.l(a,"$ib",[A.d2],"$ab")},
sft:function(a){this.cJ=H.l(a,"$ib",[A.d3],"$ab")},
sfu:function(a){this.cK=H.l(a,"$ib",[A.d4],"$ab")}}
A.hK.prototype={
iL:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aB+"];\n"
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
iS:function(a){var u
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
iM:function(a){var u
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
j_:function(a){var u,t
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
j0:function(a){var u,t
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
iU:function(a){var u
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
j4:function(a){var u
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ax(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iP:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aF(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iK:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aF(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
iN:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aF(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iQ:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aF(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iY:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aF(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iT:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
break
case C.j:u=a.a=u+r
break
case C.h:u+=q
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
case C.i:u+=q
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
iW:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aF(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iX:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aF(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
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
iO:function(a){var u,t=this.z
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
iV:function(a){var u,t=this.Q
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
iZ:function(a){var u,t=this.ch
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
j1:function(a){var u,t,s=this.cx
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
j2:function(a){var u,t,s=this.cy
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
j3:function(a){var u,t,s=this.db
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
iR:function(a){var u
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
i:function(a){return this.av}}
A.d_.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.cS.prototype={
bX:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cN:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dw(b,35633)
r.f=r.dw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.lm(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.v("Failed to link shader: "+H.m(s)))}r.io()
r.iq()},
a1:function(a){a.a.useProgram(this.r)
this.x.jp()},
dw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lm(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
io:function(){var u,t,s,r=this,q=H.d([],[A.dy]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dy(p,t.name,s))}r.x=new A.fC(q)},
iq:function(){var u,t,s,r=this,q=H.d([],[A.ep]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jk(t.type,t.size,t.name,s))}r.y=new A.j9(q)},
aQ:function(a,b,c){var u=this.a
if(a===1)return new A.P(u,b,c)
else return A.lb(u,this.r,b,a,c)},
fN:function(a,b,c){var u=this.a
if(a===1)return new A.ai(u,b,c)
else return A.lb(u,this.r,b,a,c)},
fO:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lb(u,this.r,b,a,c)},
bp:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jk:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aQ(b,c,d)
case 5121:return u.aQ(b,c,d)
case 5122:return u.aQ(b,c,d)
case 5123:return u.aQ(b,c,d)
case 5124:return u.aQ(b,c,d)
case 5125:return u.aQ(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.j4(u.a,c,d)
case 35665:return new A.Q(u.a,c,d)
case 35666:return new A.j7(u.a,c,d)
case 35667:return new A.j5(u.a,c,d)
case 35668:return new A.j6(u.a,c,d)
case 35669:return new A.j8(u.a,c,d)
case 35674:return new A.ja(u.a,c,d)
case 35675:return new A.bS(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.fN(b,c,d)
case 35680:return u.fO(b,c,d)
case 35670:throw H.c(u.bp("BOOL",c))
case 35671:throw H.c(u.bp("BOOL_VEC2",c))
case 35672:throw H.c(u.bp("BOOL_VEC3",c))
case 35673:throw H.c(u.bp("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c2.prototype={
i:function(a){return this.b}}
A.ed.prototype={}
A.ep.prototype={}
A.j9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.W()},
W:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siI:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.bS.prototype={
a9:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.B],"$ab")))
C.c.eY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.am.prototype={
a9:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.B],"$ab")))
C.c.eZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ai.prototype={
f5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.an.prototype={
f6:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kQ.prototype={
$1:function(a){return new V.a8(Math.cos(a),Math.sin(a),0)},
$S:44}
F.kD.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lx(n.$1(o),m)
m=J.ne(J.lx(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.W(m.a,m.b,m.c)
u=m.B(0,Math.sqrt(m.E(m)))
n=$.mh
if(n==null){n=new V.W(1,0,0)
$.mh=n
t=n}else t=n
n=u.aI(!J.Y(u,t)?V.ml():t)
s=n.B(0,Math.sqrt(n.E(n)))
n=s.aI(u)
t=n.B(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
m=J.nd(l,new V.a8(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.Y(a.f,m)){a.f=H.e(m,"$ia8")
n=a.a
if(n!=null)n.al()}},
$S:45}
F.ac.prototype={
ba:function(){var u=this
if(!u.ge7()){C.a.S(u.a.a.d.b,u)
u.a.a.al()}u.i6()
u.i7()
u.i8()},
ik:function(a){this.a=a
C.a.h(a.d.b,this)},
il:function(a){this.b=a
C.a.h(a.d.c,this)},
im:function(a){this.c=a
C.a.h(a.d.d,this)},
i6:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
i7:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
i8:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
ge7:function(){return this.a==null||this.b==null||this.c==null},
fF:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d6()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.eE())return
return s.B(0,Math.sqrt(s.E(s)))},
fJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.W(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.E(r)))
r=t.u(0,q)
r=new V.W(r.a,r.b,r.c)
r=s.aI(r.B(0,Math.sqrt(r.E(r))))
return r.B(0,Math.sqrt(r.E(r)))},
cw:function(){var u,t=this
if(t.d!=null)return!0
u=t.fF()
if(u==null){u=t.fJ()
if(u==null)return!1}t.d=u
t.a.a.al()
return!0},
fE:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d6()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.eE())return
return s.B(0,Math.sqrt(s.E(s)))},
fI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.S().a){l=d.u(0,g)
l=new V.W(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.u(0,g).v(0,p).q(0,g).u(0,j)
l=new V.W(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.E(l)))
l=o.aI(q)
l=l.B(0,Math.sqrt(l.E(l))).aI(o)
q=l.B(0,Math.sqrt(l.E(l)))}return q},
cu:function(){var u,t=this
if(t.e!=null)return!0
u=t.fE()
if(u==null){u=t.fI()
if(u==null)return!1}t.e=u
t.a.a.al()
return!0},
gjg:function(a){var u=this
if(J.Y(u.a,u.b))return!0
if(J.Y(u.b,u.c))return!0
if(J.Y(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.W()},
M:function(a){var u,t,s=this
if(s.ge7())return a+"disposed"
u=a+C.b.aK(J.aO(s.a.e),0)+", "+C.b.aK(J.aO(s.b.e),0)+", "+C.b.aK(J.aO(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
W:function(){return this.M("")}}
F.ha.prototype={}
F.it.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bM.prototype={}
F.hv.prototype={}
F.j2.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
return t==u.e}else{t=b.a
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
return t==u.e}else return!1}}}
F.c9.prototype={}
F.eb.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.N():u},
aH:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aH()||!1
if(!t.a.aH())u=!1
s=t.e
if(s!=null)s.aN(0)
return u},
jH:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.as];u.length!==0;){t=C.a.gjt(u)
C.a.eO(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.bb(0,t,q)){C.a.h(s,q)
C.a.eO(u,r)}}if(s.length>1)b.jG(s)}}p.a.H()
p.c.d0()
p.d.d0()
p.b.jY()
p.c.d1(new F.j2())
p.d.d1(new F.it())
o=p.e
if(o!=null)o.aN(0)},
ct:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aF()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.b2().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bx().a)!==0)++s
r=a3.gdc(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dA])
for(n=0,m=0;m<s;++m){l=a3.jc(m)
k=l.gdc(l)
C.a.n(o,m,new Z.dA(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jD(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bZ(new Z.ex(a0,f),o,a3)
e.sfZ(H.d([],[Z.c7]))
a.b.b
if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)}b=Z.mm(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c7(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.H()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.H()
C.a.h(d,c.e)}b=Z.mm(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.c7(4,d.length,b))}return e},
i:function(a){var u=this,t=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.M("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.M("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.M("   "))}return C.a.m(t,"\n")},
al:function(){var u=this.e
if(u!=null)u.F(null)},
$ips:1}
F.il.prototype={
j7:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.as],"$ab")
u=H.d([],[F.ac])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dL(t,q,p))}return u},
j8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.as],"$ab")
u=H.d([],[F.ac])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dL(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dL(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dL(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dL(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bb(0,p,n)){p.ba()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjg(s)
if(t)s.ba()}},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.J)(u),++r)if(!u[r].cw())s=!1
return s},
cv:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.J)(u),++r)if(!u[r].cu())s=!1
return s},
i:function(a){return this.W()},
M:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(a))
return C.a.m(r,"\n")},
W:function(){return this.M("")},
sfU:function(a){this.b=H.l(a,"$ib",[F.ac],"$ab")}}
F.im.prototype={
gk:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bb(0,p,n)){p.ba()
break}}}}},
d0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.Y(s.a,s.b)
if(t)s.ba()}},
i:function(a){return this.W()},
M:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].M(a+(""+u+". ")))}return C.a.m(s,"\n")},
W:function(){return this.M("")},
sh_:function(a){this.b=H.l(a,"$ib",[F.bM],"$ab")}}
F.io.prototype={
gk:function(a){return 0},
jY:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
t=t[u].gkq()
t=t.gkn(t)
if(t.gk(t).d8(0,1)){t=this.b
return H.h(t,u)
t[u].ba()}}},
i:function(a){return this.W()},
M:function(a){var u,t,s=H.d([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.h(s,u[t].M(a))}return C.a.m(s,"\n")},
W:function(){return this.M("")},
scg:function(a){this.b=H.l(a,"$ib",[F.c9],"$ab")}}
F.as.prototype={
e5:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jp(u.cx,r,o,t,s,q,p,a,n)},
jD:function(a){var u,t,s=this
if(a.A(0,$.aF())){u=s.f
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bz())){u=s.r
t=[P.B]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.by())){u=s.x
t=[P.B]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.b2())){u=s.y
t=[P.B]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bA())){u=s.z
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dt())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.du())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.ct()))return H.d([s.ch],[P.B])
else if(a.A(0,$.bx())){u=s.cx
t=[P.B]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.B])},
cw:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.I(0,new F.jA(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.al()
s=t.a.e
if(s!=null)s.aN(0)}return!0},
cu:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.I(0,new F.jz(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.al()
s=t.a.e
if(s!=null)s.aN(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.W()},
M:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.aK(J.aO(s.e),0))
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
C.a.h(q,V.a_(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
W:function(){return this.M("")}}
F.jA.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:9}
F.jz.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:9}
F.jq.prototype={
H:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.al()
return!0},
bq:function(a,b,c,d,e,f){var u=F.jp(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)u[s].cw()
return!0},
cv:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)u[s].cu()
return!0},
jf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.W()},
M:function(a){var u,t,s,r
this.H()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r)C.a.h(u,t[r].M(a))
return C.a.m(u,"\n")},
W:function(){return this.M("")},
siJ:function(a){this.c=H.l(a,"$ib",[F.as],"$ab")}}
F.jr.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.h(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.h(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.h(t,b)
return t[b]},
I:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.ac]})
C.a.I(u.b,b)
C.a.I(u.c,new F.js(u,b))
C.a.I(u.d,new F.jt(u,b))},
i:function(a){return this.W()},
W:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
return C.a.m(r,"\n")},
sfV:function(a){this.b=H.l(a,"$ib",[F.ac],"$ab")},
sfW:function(a){this.c=H.l(a,"$ib",[F.ac],"$ab")},
sfX:function(a){this.d=H.l(a,"$ib",[F.ac],"$ab")}}
F.js.prototype={
$1:function(a){H.e(a,"$iac")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:9}
F.jt.prototype={
$1:function(a){var u
H.e(a,"$iac")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:9}
F.ju.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.W()},
W:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
return C.a.m(r,"\n")},
sh0:function(a){this.b=H.l(a,"$ib",[F.bM],"$ab")},
sh1:function(a){this.c=H.l(a,"$ib",[F.bM],"$ab")}}
F.jw.prototype={}
F.jv.prototype={
bb:function(a,b,c){return J.Y(b.f,c.f)}}
F.jx.prototype={}
F.i0.prototype={
jG:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.as],"$ab")
u=V.d6()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.W(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.J)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.B(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Y(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.jy.prototype={
gk:function(a){return 0},
i:function(a){return this.W()},
W:function(){var u,t,s=H.d([],[P.f])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.h(s,u[t].M(""))}return C.a.m(s,"\n")},
scg:function(a){this.b=H.l(a,"$ib",[F.c9],"$ab")}}
O.fZ.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.N():u},
au:function(){var u=this.r
if(u!=null)u.F(null)},
se4:function(a){if(this.b!=a){this.b=a
this.au()}},
se2:function(a){if(this.c!=a){this.c=a
this.au()}},
se1:function(a){var u=a==null?V.bN():a
this.f=u
if(!J.Y(u,a)){this.f=a
this.au()}},
ai:function(a,b){},
U:function(a,b){H.l(a,"$ib",[T.bQ],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
d2:function(a,b){var u,t,s,r,q,p,o,n=this,m="Distort"
if(n.a==null){u=H.e(a.fr.j(0,m),"$idG")
if(u==null){t=a.a
u=new A.dG(t,m)
u.bX(t,m)
u.cN(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.j(u.y.p(0,"projViewObjMat"),"$iam")
u.cx=H.j(u.y.p(0,"colorTxt2DMat"),"$ibS")
u.cy=H.j(u.y.p(0,"bumpTxt2DMat"),"$ibS")
u.db=H.j(u.y.p(0,"colorTxt"),"$iai")
u.dx=H.j(u.y.p(0,"bumpTxt"),"$iai")
u.dy=H.j(u.y.p(0,"nullColorTxt"),"$iP")
u.fr=H.j(u.y.p(0,"nullBumpTxt"),"$iP")
u.fx=H.j(u.y.p(0,"bumpMat"),"$iam")
a.cn(u)}n.a=u}if(b.e==null){t=b.d
s=$.aF()
r=$.b2()
r=t.ct(new Z.d7(a.a),new Z.b1(s.a|r.a))
r.aw($.aF()).e=n.a.z.c
r.aw($.b2()).e=n.a.Q.c
b.e=r}q=H.d([],[T.bQ])
n.U(q,n.b)
n.U(q,n.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
t.activeTexture(33984+s.a)
t.bindTexture(3553,s.b)}}s=n.a
s.a1(a)
r=n.b
s.af(s.db,s.dy,r)
r=n.c
s.af(s.dx,s.fr,r)
r=a.geN()
o=s.ch
o.toString
o.a9(r.a7(0,!0))
r=n.d
o=s.cx
o.toString
o.a9(r.a7(0,!0))
r=n.e
o=s.cy
o.toString
o.a9(r.a7(0,!0))
r=n.f
s=s.fx
s.toString
s.a9(r.a7(0,!0))
s=b.e
if(s instanceof Z.bZ){s.a1(a)
s.ah(a)
s.am(a)}else b.e=null
s=n.a
s.toString
t.useProgram(null)
s.x.cD()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
t.activeTexture(33984+s.a)
t.bindTexture(3553,null)}}}}
O.dY.prototype={
gt:function(){var u=this.dy
return u==null?this.dy=D.N():u},
a8:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.F(a)},
au:function(){return this.a8(null)},
dM:function(a){H.e(a,"$iz")
this.a=null
this.a8(a)},
ie:function(){return this.dM(null)},
hf:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bJ([u])
u.b=!0
this.a8(u)},
hh:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.a8(u)},
dt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.ab(a1.e.length+3,4)*4,a3=C.e.ab(a1.f.length+3,4)*4,a4=C.e.ab(a1.r.length+3,4)*4,a5=C.e.ab(a1.x.length+3,4)*4,a6=C.e.ab(a1.y.length+3,4)*4,a7=C.e.ab(a1.z.length+3,4)*4,a8=C.e.ab(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.e.i(a1.a)+C.e.i(u.a)+C.e.i(t.a)+C.e.i(s.a)+C.e.i(r.a)+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.d||o!==C.d
k=u!==C.d||t!==C.d||s!==C.d||r!==C.d
j=r===C.d
i=!j||a3+a6>0||l
h=t!==C.d||s!==C.d||!j||q!==C.d||l
j=q===C.d
g=!j
f=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aF()
if(h){j=$.bz()
a=new Z.b1(a.a|j.a)}if(g){j=$.by()
a=new Z.b1(a.a|j.a)}if(f){j=$.b2()
a=new Z.b1(a.a|j.a)}if(e){j=$.bA()
a=new Z.b1(a.a|j.a)}if(c){j=$.bx()
a=new Z.b1(a.a|j.a)}return new A.hK(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.l(a,"$ib",[T.bQ],"$ab")},
ai:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.au(u,u.length,[H.r(u,0)]);u.D();){t=u.d
t.toString
s=$.jo
if(s==null)s=$.jo=new V.W(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d4(s)}}},
d2:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dt()
u=H.e(a3.fr.j(0,a2.av),"$idZ")
if(u==null){u=A.nJ(a2,a3.a)
a3.cn(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bt
a2=a4.e
if(!(a2 instanceof Z.bZ))a2=a4.e=null
if(a2==null||!a2.d.A(0,s)){a2=t.r1
if(a2)a4.d.aH()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cv()
q.a.cv()
q=q.e
if(q!=null)q.aN(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.jf()
p=p.e
if(p!=null)p.aN(0)}n=a4.d.ct(new Z.d7(a3.a),s)
n.aw($.aF()).e=a1.a.Q.c
if(a2)n.aw($.bz()).e=a1.a.cx.c
if(r)n.aw($.by()).e=a1.a.ch.c
if(t.rx)n.aw($.b2()).e=a1.a.cy.c
if(q)n.aw($.bA()).e=a1.a.db.c
if(t.x1)n.aw($.bx()).e=a1.a.dx.c
a4.e=n}a2=T.bQ
m=H.d([],[a2])
a1.a.a1(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga3(q)
r=r.dy
r.toString
r.a9(q.a7(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga3(q)
p=a3.dx
p=a3.cx=q.v(0,p.ga3(p))
q=p}r=r.fr
r.toString
r.a9(q.a7(0,!0))}r=a1.a
q=a3.geN()
r=r.fy
r.toString
r.a9(q.a7(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.a9(C.n.a7(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.a9(C.n.a7(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.a9(C.n.a7(q,!0))}if(t.aB>0){l=a1.e.a.length
r=a1.a.k4
C.c.a5(r.a,r.d,l)
for(r=[P.B],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iav")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.ci(H.l(p.a7(0,!0),"$ib",r,"$ab")))
C.c.eZ(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.w(r.a,r.d,p,o,q)
break
case C.h:a1.U(m,a1.f.d)
r=a1.a
q=a1.f.d
r.af(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ap(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.j:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.w(r.a,r.d,p,o,q)
break
case C.h:a1.U(m,a1.r.d)
r=a1.a
q=a1.r.d
r.af(r.y1,r.aB,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ap(r.y2,r.aB,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.j:r=a1.a
q=a1.x.f
r=r.av
r.toString
p=q.a
o=q.b
q=q.c
C.c.w(r.a,r.d,p,o,q)
break
case C.h:a1.U(m,a1.x.d)
r=a1.a
q=a1.x.d
r.af(r.bt,r.bu,q)
q=a1.a
r=a1.x.f
q=q.av
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ap(r.e9,r.bu,q)
q=a1.a
r=a1.x.f
q=q.av
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bv
r.toString
p=q.a
o=q.b
q=q.c
C.c.w(r.a,r.d,p,o,q)
break
case C.h:a1.U(m,a1.y.d)
r=a1.a
q=a1.y.d
r.af(r.ea,r.bw,q)
q=a1.a
r=a1.y.f
q=q.bv
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break
case C.i:a1.U(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ap(r.eb,r.bw,q)
q=a1.a
r=a1.y.f
q=q.bv
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bx
r.toString
p=q.a
o=q.b
q=q.c
C.c.w(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bz
C.c.N(q.a,q.d,o)
break
case C.h:a1.U(m,a1.z.d)
r=a1.a
q=a1.z.d
r.af(r.ec,r.by,q)
q=a1.a
r=a1.z.f
q=q.bx
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bz
C.c.N(r.a,r.d,o)
break
case C.i:a1.U(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ap(r.ed,r.by,q)
q=a1.a
r=a1.z.f
q=q.bx
q.toString
p=r.a
o=r.b
r=r.c
C.c.w(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bz
C.c.N(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.eo
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
p=a1.a.cF
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.d4(f.a)
o=p.a
d=p.b
c=p.c
c=p.B(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.w(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.c.w(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.ep
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
p=a1.a.cG
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbe(f)
o=e.b
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=i.bi(f.gbe(f))
o=e.c
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gaA(f)
o=e.d
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gco()
o=e.e
C.c.N(o.a,o.d,p)
p=f.gcp()
o=e.f
C.c.N(o.a,o.d,p)
p=f.gcq()
o=e.r
C.c.N(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eq
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
p=a1.a.cH
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbe(f)
o=e.b
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gcC(f).km()
o=e.c
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=i.bi(f.gbe(f))
o=e.d
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gaA(f)
o=e.e
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gkk()
o=e.f
C.c.N(o.a,o.d,p)
p=f.gkj()
o=e.r
C.c.N(o.a,o.d,p)
p=f.gco()
o=e.x
C.c.N(o.a,o.d,p)
p=f.gcp()
o=e.y
C.c.N(o.a,o.d,p)
p=f.gcq()
o=e.z
C.c.N(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.er
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
o=a1.a.cI
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbg()
H.l(m,"$ib",p,"$ab")
if(!C.a.Y(m,o)){o.seB(0,m.length)
C.a.h(m,o)}o=f.gcC(f)
d=e.d
C.c.w(d.a,d.d,o.a,o.b,o.c)
o=f.gbP()
d=e.b
C.c.w(d.a,d.d,o.a,o.b,o.c)
o=f.gbN(f)
d=e.c
C.c.w(d.a,d.d,o.a,o.b,o.c)
o=i.d4(f.gcC(f))
d=o.a
c=o.b
b=o.c
b=o.B(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.w(c.a,c.d,d,o,b)
b=f.gaA(f)
o=e.f
C.c.w(o.a,o.d,b.a,b.b,b.c)
b=f.gbg()
o=b.geF(b)
if(!o){o=e.x
C.c.a5(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.a5(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.es
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.y,q=r.length,p=[P.B],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
d=a1.a.cJ
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbg()
H.l(m,"$ib",o,"$ab")
if(!C.a.Y(m,d)){d.seB(0,m.length)
C.a.h(m,d)}a=i.v(0,f.ga3(f))
d=f.ga3(f)
c=$.cO
d=d.bi(c==null?$.cO=new V.a8(0,0,0):c)
c=e.b
C.c.w(c.a,c.d,d.a,d.b,d.c)
d=$.cO
d=a.bi(d==null?$.cO=new V.a8(0,0,0):d)
c=e.c
C.c.w(c.a,c.d,d.a,d.b,d.c)
d=a.cQ(0)
c=e.d
j=new Float32Array(H.ci(H.l(new V.cG(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a7(0,!0),"$ib",p,"$ab")))
C.c.eY(c.a,c.d,!1,j)
c=f.gaA(f)
d=e.e
C.c.w(d.a,d.d,c.a,c.b,c.c)
c=f.gbg()
d=c.geF(c)
if(!d){d=e.r
C.c.a5(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a5(d.a,d.d,0)}d=f.gco()
c=e.x
C.c.N(c.a,c.d,d)
d=f.gcp()
c=e.y
C.c.N(c.a,c.d,d)
d=f.gcq()
c=e.z
C.c.N(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.eu
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga3(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.J)(r),++g){f=r[g]
p=a1.a.cK
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbg()
H.l(m,"$ib",a2,"$ab")
if(!C.a.Y(m,p)){p.seB(0,m.length)
C.a.h(m,p)}p=f.gbe(f)
o=e.b
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gcC(f)
o=e.c
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gbP()
o=e.d
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gbN(f)
o=e.e
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=i.bi(f.gbe(f))
o=e.f
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gbg()
o=p.geF(p)
if(!o){p=e.x
C.c.a5(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.a5(p.a,p.d,0)}p=f.gaA(f)
o=e.y
C.c.w(o.a,o.d,p.a,p.b,p.c)
p=f.gko()
o=e.z
C.c.N(o.a,o.d,p)
p=f.gkp()
o=e.Q
C.c.N(o.a,o.d,p)
p=f.gco()
o=e.ch
C.c.N(o.a,o.d,p)
p=f.gcp()
o=e.cx
C.c.N(o.a,o.d,p)
p=f.gcq()
o=e.cy
C.c.N(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.h:a1.U(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.af(a2.ee,a2.bA,r)
break
case C.i:a1.U(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ap(a2.ef,a2.bA,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga3(r).cQ(0)}a2=a2.id
a2.toString
a2.a9(r.a7(0,!0))}if(t.dy){a1.U(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ap(a2.eg,a2.eh,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bB
a2.toString
q=r.a
p=r.b
r=r.c
C.c.w(a2.a,a2.d,q,p,r)
break
case C.h:a1.U(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.af(a2.ei,a2.bC,r)
r=a1.a
a2=a1.cx.f
r=r.bB
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,p,a2)
break
case C.i:a1.U(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ap(a2.ej,a2.bC,r)
r=a1.a
a2=a1.cx.f
r=r.bB
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bE
a2.toString
q=r.a
p=r.b
r=r.c
C.c.w(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bD
C.c.N(r.a,r.d,p)
break
case C.h:a1.U(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.af(a2.ek,a2.bF,r)
r=a1.a
a2=a1.cy.f
r=r.bE
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bD
C.c.N(a2.a,a2.d,p)
break
case C.i:a1.U(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ap(a2.el,a2.bF,r)
r=a1.a
a2=a1.cy.f
r=r.bE
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.w(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bD
C.c.N(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bG
C.c.N(a2.a,a2.d,q)
break
case C.h:a1.U(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.af(a2.em,a2.bH,q)
q=a1.a
a2=a1.db.f
q=q.bG
C.c.N(q.a,q.d,a2)
break
case C.i:a1.U(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ap(a2.en,a2.bH,q)
q=a1.a
a2=a1.db.f
q=q.bG
C.c.N(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a1(a3)
a2=a4.e
a2.a1(a3)
a2.ah(a3)
a2.am(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].am(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.cD()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().av},
sfH:function(a){this.e=H.l(a,"$ia4",[V.av],"$aa4")}}
O.hI.prototype={}
O.e_.prototype={
aT:function(){}}
O.hJ.prototype={}
O.bb.prototype={
dP:function(a){var u,t,s=this
if(!J.Y(s.f,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a5])
t.b=!0
s.a.a8(t)}},
aT:function(){this.fc()
this.dP(new V.a5(1,1,1))},
saA:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aT()
u=t.a
u.a=null
u.a8(null)}t.dP(b)}}
O.hL.prototype={
ij:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.K(u.b+".refraction",t,a,[P.B])
t.b=!0
u.a.a8(t)}},
aT:function(){this.bW()
this.ij(1)}}
O.hM.prototype={
ck:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.S().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.a8(t)}},
aT:function(){this.bW()
this.ck(100)}}
O.ec.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.N():u},
a8:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.F(a)},
au:function(){return this.a8(null)},
ai:function(a,b){},
d2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ied")
if(u==null){t=a.a
u=new A.ed(t,n)
u.bX(t,n)
u.cN(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"fov"),"$ia2")
u.ch=H.j(u.y.j(0,"ratio"),"$ia2")
u.cx=H.j(u.y.j(0,"boxClr"),"$iQ")
u.cy=H.j(u.y.j(0,"boxTxt"),"$ian")
u.db=H.j(u.y.j(0,"viewMat"),"$iam")
a.cn(u)}o.a=u}if(b.e==null){t=b.d.ct(new Z.d7(a.a),$.aF())
t.aw($.aF()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a1(a)
q=o.b
p=r.Q
C.c.N(p.a,p.d,q)
q=r.ch
C.c.N(q.a,q.d,t/s)
s=o.c
r.cy.f6(s)
s=o.d
t=r.cx
C.c.w(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga3(s).cQ(0)
r=r.db
r.toString
r.a9(s.a7(0,!0))
t=b.e
if(t instanceof Z.bZ){t.a1(a)
t.ah(a)
t.am(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cD()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bP.prototype={}
T.bQ.prototype={}
T.iK.prototype={}
T.iO.prototype={
dQ:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cE()}},
gt:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.ei.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.N():u}}
T.iP.prototype={
jE:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kZ(a)
t=T.l9(q)
r=W.o
W.ab(u,"load",H.n(new T.iR(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aR:function(a,b,c,d,e,f){var u,t=W.kZ(c);++this.d
u=W.o
W.ab(t,"load",H.n(new T.iQ(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dO:function(a,b,c){var u,t,s,r
b=V.ds(b)
u=V.ds(a.width)
t=V.ds(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kV()
s.width=u
s.height=t
r=H.e(C.m.f2(s,"2d"),"$icx")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oQ(r.getImageData(0,0,s.width,s.height))}}}
T.iR.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.dO(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.eT(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dQ();++u.e},
$S:13}
T.iQ.prototype={
$1:function(a){var u=this,t=u.a,s=t.dO(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.eT(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cE()}++t.e},
$S:13}
V.bn.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dX.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.l(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.aw.prototype={
aJ:function(a,b){return!this.fb(0,b)},
i:function(a){return"!["+this.dd(0)+"]"}}
V.ia.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaA:1}
V.ik.prototype={
fh:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.aS([P.p,P.R])
for(t=new H.cF(a,a.gk(a),[H.ao(a,"x",0)]);t.D();)u.n(0,t.d,!0)
this.sii(u)},
aJ:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.cV(u.gac(u),0,null)},
sii:function(a){this.a=H.l(a,"$iG",[P.p,P.R],"$aG")},
$iaA:1}
V.cT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.l(0,b))
r.sad(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
js:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
siE:function(a){this.c=H.l(a,"$ib",[V.cZ],"$ab")}}
V.en.prototype={
i:function(a){var u=H.lu(this.b,"\n","\\n"),t=H.lu(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
aM:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.J)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si9:function(a){var u=P.f
this.c=H.l(a,"$iG",[u,u],"$aG")}}
V.iU.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cT(this,b)
u.siE(H.d([],[V.cZ]))
u.d=null
this.a.n(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cY(a)
u=P.f
t.si9(new H.aS([u,u]))
this.b.n(0,a,t)}return t},
eX:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.en]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.js(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.c(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.en(n==null?o.b:n,p,s)}++s}}},
siu:function(a){this.a=H.l(a,"$iG",[P.f,V.cT],"$aG")},
six:function(a){this.b=H.l(a,"$iG",[P.f,V.cY],"$aG")}}
V.cZ.prototype={
i:function(a){return this.b.b+": "+this.dd(0)}}
X.fH.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a6:function(a){var u=this.fr
if(u!=null)u.F(a)},
sat:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.K("width",u,b,[P.p])
u.b=!0
t.a6(u)}},
sar:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.K("height",u,b,[P.p])
u.b=!0
t.a6(u)}},
a1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.v()
h.sat(0,C.e.a4(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.v()
h.sar(0,C.e.a4(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ae(u.getParameter(3379))
p=V.ds(s)
o=V.ds(r)
q=V.ds(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.eU(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.l9(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dQ()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cE()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.f.a4(s*h.a)
r=t.d
a.d=C.f.a4(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.C(k)
j=C.f.a4(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.C(l)
u.viewport(j,C.f.a4(t*l),C.f.a4(s*k),C.f.a4(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
am:function(a){a.a.bindFramebuffer(36160,null)}}
X.c_.prototype={$ibd:1}
X.hh.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.N():u},
a1:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.f.a4(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.f.a4(r*t)
r=C.f.a4(s.c*u)
a.c=r
s=C.f.a4(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
am:function(a){}}
X.hn.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.N():u},
a1:function(a){var u
a.cy.bM(V.bN())
u=V.bN()
a.db.bM(u)},
am:function(a){a.cy.aL()
a.db.aL()},
$ibd:1,
$ic_:1}
X.e5.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.N():u},
a6:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.F(a)},
fB:function(){return this.a6(null)},
a1:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bc(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bM(k)
r=$.lX
if(r==null){r=V.lZ()
q=V.mk()
p=$.mg
r=V.lR(r,q,p==null?$.mg=new V.W(0,0,-1):p)
$.lX=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b0(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bM(u)},
am:function(a){a.cy.aL()
a.db.aL()},
$ibd:1,
$ic_:1}
X.cW.prototype={}
V.bE.prototype={
bl:function(a){this.b=new P.hl(C.U)
this.c=null
this.sc5(H.d([],[[P.b,W.aH]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fM(q,0,q.length)
n=o==null?q:o
C.S.f4(p,H.lu(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaC(m.d),p)}},
eL:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sc5(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bs():t).eX(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r)q.bL(t[r])},
sc5:function(a){this.d=H.l(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.kP.prototype={
$1:function(a){var u
H.e(a,"$ibh")
u=C.f.eW(this.a.gjw(),2)
if(u!=="0.00")P.lt(u+" fps")},
$S:49}
V.fX.prototype={
bL:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iV()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.y(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.y(new H.t("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.y(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.y(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.y(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.y(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.y(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.y(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.y(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bn())
t=a1.l(0,r).m(0,h)
u=V.y(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.y(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.y(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.y(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bn())
t=a1.l(0,r).m(0,e)
u=V.y(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.y(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.y(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.aw()
s=[V.aA]
t.sad(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.y(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.y(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.aw()
t.sad(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.y(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.y(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.y(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.P("Num")
t=a1.l(0,n)
t.d=t.a.P("Num")
t=a1.l(0,m)
t.d=t.a.P("Symbol")
t=a1.l(0,j)
t.d=t.a.P("String")
t=a1.l(0,g)
t.d=t.a.P("String")
t=a1.l(0,c)
t.d=t.a.P(d)
t=a1.l(0,a0)
t.d=t.a.P(a0)
t=a1.l(0,q)
t=t.d=t.a.P(q)
u=[P.f]
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hi.prototype={
bL:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iV()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.y(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.y(new H.t("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.y(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.y(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.y(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.y(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.y(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bn())
t=e.l(0,j).m(0,i)
u=V.y(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aA]
t.sad(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.y(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sad(H.d([],s))
C.a.h(t.a,u)
t=V.y(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.y(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.y(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.y(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.P("Num")
u=e.l(0,n)
u.d=u.a.P("Num")
u=e.l(0,m)
u.d=u.a.P("Symbol")
u=e.l(0,i)
u.d=u.a.P(j)
u=e.l(0,g)
u.d=u.a.P(h)
u=e.l(0,f)
u.d=u.a.P(f)
u=e.l(0,q)
u=u.d=u.a.P(q)
t=[P.f]
u.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hj.prototype={
bL:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bs:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iV()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.y(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.y(new H.t("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.y(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.y(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.y(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.y(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.y(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.y(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.y(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bn())
C.a.h(l.l(0,s).m(0,m).a,new V.bn())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sad(H.d([],[V.aA]))
C.a.h(u.a,t)
u=V.y(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aM(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.i6.prototype={
eL:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sc5(H.d([],[[P.b,W.aH]]))
this.O(C.a.m(b,"\n"),"#111")},
bL:function(a){},
bs:function(){return}}
V.ip.prototype={
fi:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ir(o),{func:1,ret:-1,args:[r]}),!1,r)},
dY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.ip()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eX(C.a.jC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
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
if(H.pf(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.fi(C.C,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
f1:function(a){var u,t,s,r=new V.fX("dart")
r.bl("dart")
u=new V.hi("glsl")
u.bl("glsl")
t=new V.hj("html")
t.bl("html")
s=C.a.ju(H.d([r,u,t],[V.bE]),new V.is(a))
if(s!=null)return s
r=new V.i6("plain")
r.bl("plain")
return r},
dX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dq(r).aa(r,"+")){C.a.n(b0,s,C.b.ax(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aa(r,"-")){C.a.n(b0,s,C.b.ax(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f1(a8)
q.eL(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fi(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lB()
i.href="#"+H.m(m)
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
if(s>=u.length)return H.h(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.J)(r),++a0)C.a3.jb(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.J)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.D();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
j5:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.f],"$ab")
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
s=H.e(r.insertCell(-1),"$ibg").style
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
o=H.e(r.insertCell(-1),"$ibg")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ip:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iV()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.y(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aA]
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.y(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.y(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.aw()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.y(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.y(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.aw()
s.sad(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.y(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.y(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.y(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.y(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.aw()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.y(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bn())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.P(p)
s=u.l(0,n)
s.d=s.a.P(o)
s=u.l(0,"CodeEnd")
s.d=s.a.P(m)
s=u.l(0,j)
s.d=s.a.P("Link")
s=u.l(0,i)
s.d=s.a.P(i)
this.b=u}}
V.ir.prototype={
$1:function(a){P.m8(C.t,new V.iq(this.a))},
$S:13}
V.iq.prototype={
$0:function(){var u=C.f.a4(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.is.prototype={
$1:function(a){return H.e(a,"$ibE").a===this.a},
$S:50}
V.iL.prototype={
dW:function(a,b,c){var u,t,s,r,q=this,p=W.kZ(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.fy(q.c)
t=u.gk(u)
u=W.a7
W.ab(p,"click",H.n(new V.iN(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.fy(q.c).h(0,p)
J.fy(q.c).h(0,document.createElement("br"))
s=P.mc().gcZ().j(0,H.m(q.a))
if(s==null){q.dU(t)
r=c}else r=P.dr(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.dW(a,b,!1)},
dU:function(a){var u,t,s=P.mc(),r=P.f,q=P.nF(s.gcZ(),r,r)
q.n(0,this.a,""+a)
u=s.eP(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ke([],[]).d5(""),"",t)}}
V.iN.prototype={
$1:function(a){var u,t,s=this
H.e(a,"$ia7")
u=s.a
t=J.fy(u.c)
t.I(t,new V.iM())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.dU(s.d)},
$S:51}
V.iM.prototype={
$1:function(a){var u
H.e(a,"$iO")
if(!!J.U(a).$ic6){u=a.style
u.border="solid 2px white"}},
$S:52}
X.kL.prototype={
$1:function(a){this.a.se2(this.b.f.jE(a))},
$S:16}
X.kM.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dX("Vertex Shader for distort","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dX("Fragment Shader for distort","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.f8=u.i
u=J.dR.prototype
u.fa=u.i
u=P.i.prototype
u.f9=u.bQ
u=W.O.prototype
u.bV=u.aq
u=W.f0.prototype
u.fd=u.az
u=O.e_.prototype
u.fc=u.aT
u=O.bb.prototype
u.bW=u.aT
u=V.dX.prototype
u.fb=u.aJ
u.dd=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oK","od",10)
u(P,"oL","oe",10)
u(P,"oM","of",10)
t(P,"mI","oI",3)
s(W,"p0",4,null,["$4"],["oh"],25,0)
s(W,"p1",4,null,["$4"],["oi"],25,0)
var m
r(m=E.ar.prototype,"geJ",0,0,null,["$1","$0"],["eK","jO"],0,0)
r(m,"geH",0,0,null,["$1","$0"],["eI","jL"],0,0)
q(m,"gjJ","jK",7)
q(m,"gjM","jN",7)
r(m=E.em.prototype,"gdf",0,0,null,["$1","$0"],["dh","dg"],0,0)
p(m,"gk0","eQ",3)
o(m=X.et.prototype,"ghu","hv",11)
o(m,"ghi","hj",11)
o(m,"gho","hp",4)
o(m,"ghy","hz",24)
o(m,"ghw","hx",24)
o(m,"ghC","hD",4)
o(m,"ghG","hH",4)
o(m,"ghs","ht",4)
o(m,"ghE","hF",4)
o(m,"ghq","hr",4)
o(m,"ghI","hJ",54)
o(m,"ghK","hL",11)
o(m,"gi_","i0",12)
o(m,"ghW","hX",12)
o(m,"ghY","hZ",12)
r(D.bG.prototype,"gfm",0,0,null,["$1","$0"],["aD","fn"],0,0)
r(m=D.dT.prototype,"gdG",0,0,null,["$1","$0"],["dH","hA"],0,0)
o(m,"ghM","hN",38)
q(m,"ghc","hd",26)
q(m,"ghQ","hR",26)
n(V.X.prototype,"gk","cR",27)
n(V.W.prototype,"gk","cR",27)
r(m=U.cE.prototype,"gaS",0,0,null,["$1","$0"],["R","ae"],0,0)
q(m,"gha","hb",28)
q(m,"ghO","hP",28)
r(m=U.eu.prototype,"gaS",0,0,null,["$1","$0"],["R","ae"],0,0)
o(m,"gc8","c9",1)
o(m,"gca","cb",1)
o(m,"gcc","cd",1)
r(m=U.ev.prototype,"gaS",0,0,null,["$1","$0"],["R","ae"],0,0)
o(m,"gc8","c9",1)
o(m,"gca","cb",1)
o(m,"gcc","cd",1)
o(m,"gh3","h4",1)
o(m,"gh5","h6",1)
o(m,"giC","iD",1)
o(m,"giA","iB",1)
o(m,"giy","iz",1)
o(U.ew.prototype,"gh8","h9",1)
r(m=M.dC.prototype,"ga_",0,0,null,["$1","$0"],["a0","b2"],0,0)
q(m,"ghS","hT",29)
q(m,"ghU","hV",29)
r(M.dE.prototype,"ga_",0,0,null,["$1","$0"],["a0","b2"],0,0)
r(m=M.dJ.prototype,"ga_",0,0,null,["$1","$0"],["a0","b2"],0,0)
q(m,"ghk","hl",7)
q(m,"ghm","hn",7)
r(m=O.dY.prototype,"gbY",0,0,null,["$1","$0"],["a8","au"],0,0)
r(m,"gic",0,0,null,["$1","$0"],["dM","ie"],0,0)
q(m,"ghe","hf",30)
q(m,"ghg","hh",30)
r(O.ec.prototype,"gbY",0,0,null,["$1","$0"],["a8","au"],0,0)
r(X.e5.prototype,"gfA",0,0,null,["$1","$0"],["a6","fB"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.l2,J.a,J.au,P.eO,P.i,H.cF,P.b8,H.c4,H.d5,H.fQ,H.j_,P.bH,H.cy,H.f5,P.af,H.hw,H.hy,H.hr,P.fb,P.bl,P.aM,P.ey,P.iA,P.cU,P.iB,P.bh,P.aq,P.ku,P.k8,P.cg,P.eN,P.x,P.km,P.hE,P.c1,P.hm,P.ks,P.kr,P.R,P.az,P.ad,P.b7,P.i4,P.ef,P.eG,P.hg,P.bI,P.b,P.G,P.L,P.ax,P.f,P.ah,P.ch,P.jf,P.kb,W.fT,W.bU,W.F,W.e3,W.f0,W.kh,W.dM,W.aC,W.k7,W.fj,P.kd,P.fg,P.k2,P.V,O.a4,O.cH,E.fK,E.ar,E.ib,E.em,Z.ex,Z.d7,Z.bZ,Z.c7,Z.b1,D.fN,D.c3,D.z,X.dB,X.dS,X.ht,X.hB,X.aB,X.hT,X.iW,X.et,D.bG,D.a9,D.e6,D.ee,D.ej,D.ek,D.el,V.a5,V.aj,V.h7,V.cG,V.av,V.aa,V.a8,V.bf,V.cQ,V.X,V.W,U.eu,U.ev,U.ew,M.dE,M.dJ,M.aD,A.dy,A.fC,A.hK,A.d_,A.d2,A.d0,A.d3,A.d1,A.d4,A.c2,A.ep,A.j9,F.ac,F.ha,F.bM,F.hv,F.c9,F.eb,F.il,F.im,F.io,F.as,F.jq,F.jr,F.ju,F.jw,F.jx,F.jy,O.bP,O.e_,T.iP,V.bn,V.aA,V.dX,V.ia,V.ik,V.cT,V.en,V.cY,V.iU,X.cW,X.c_,X.hn,X.e5,V.bE,V.ip,V.iL])
s(J.a,[J.hq,J.dQ,J.dR,J.aR,J.bL,J.bq,H.cK,H.bO,W.k,W.fz,W.bY,W.cx,W.b5,W.b6,W.Z,W.eA,W.fY,W.h_,W.eC,W.dI,W.eE,W.h1,W.o,W.eH,W.aQ,W.hk,W.eJ,W.bp,W.dV,W.hN,W.eP,W.eQ,W.aT,W.eR,W.eU,W.aU,W.eY,W.f_,W.aW,W.f1,W.aX,W.f6,W.aJ,W.f9,W.iT,W.aZ,W.fc,W.iY,W.jk,W.fk,W.fm,W.fo,W.fq,W.fs,P.ba,P.eL,P.be,P.eW,P.i9,P.f7,P.bi,P.fe,P.fD,P.ez,P.dz,P.dN,P.e7,P.e9,P.ce,P.ea,P.eh,P.eq,P.f3])
s(J.dR,[J.i5,J.bT,J.br])
t(J.l1,J.aR)
s(J.bL,[J.dP,J.dO])
t(P.hA,P.eO)
s(P.hA,[H.er,W.jJ,W.at,P.hc])
t(H.t,H.er)
s(P.i,[H.h4,H.hF,H.d8])
s(H.h4,[H.c8,H.hx])
s(P.b8,[H.hG,H.jC])
t(H.hH,H.c8)
t(H.fR,H.fQ)
s(P.bH,[H.i1,H.hs,H.jd,H.j1,H.fM,H.ii,P.fB,P.e4,P.aP,P.je,P.jb,P.cf,P.fP,P.fW])
s(H.cy,[H.kR,H.iH,H.kG,H.kH,H.kI,P.jF,P.jE,P.jG,P.jH,P.kl,P.kk,P.jQ,P.jU,P.jR,P.jS,P.jT,P.jX,P.jY,P.jW,P.jV,P.iC,P.iD,P.kA,P.k5,P.k4,P.k6,P.hz,P.hD,P.h2,P.h3,P.jj,P.jg,P.jh,P.ji,P.kn,P.ko,P.kq,P.kp,P.kw,P.kv,P.kx,P.ky,W.h5,W.hP,W.hR,W.ih,W.iz,W.jP,W.i_,W.hZ,W.k9,W.ka,W.kj,W.kt,P.kf,P.kC,P.hd,P.he,P.fF,E.ic,E.id,E.ie,E.iS,D.h8,D.h9,F.kQ,F.kD,F.jA,F.jz,F.js,F.jt,T.iR,T.iQ,V.kP,V.ir,V.iq,V.is,V.iN,V.iM,X.kL,X.kM])
s(H.iH,[H.ix,H.cv])
t(H.jD,P.fB)
t(P.hC,P.af)
s(P.hC,[H.aS,W.jI])
t(H.e0,H.bO)
s(H.e0,[H.dd,H.df])
t(H.de,H.dd)
t(H.cL,H.de)
t(H.dg,H.df)
t(H.e1,H.dg)
s(H.e1,[H.hU,H.hV,H.hW,H.hX,H.hY,H.e2,H.cM])
t(P.k3,P.ku)
t(P.k1,P.k8)
t(P.fh,P.hE)
t(P.es,P.fh)
s(P.c1,[P.fI,P.h6])
t(P.bF,P.iB)
s(P.bF,[P.fJ,P.hl,P.jn,P.jm])
t(P.jl,P.h6)
s(P.ad,[P.B,P.p])
s(P.aP,[P.cd,P.ho])
t(P.jL,P.ch)
s(W.k,[W.E,W.hb,W.cI,W.aV,W.dh,W.aY,W.aK,W.dj,W.jB,W.d9,P.fG,P.bX])
s(W.E,[W.O,W.bD,W.da])
s(W.O,[W.w,P.q])
s(W.w,[W.dw,W.fA,W.cu,W.bC,W.c0,W.aH,W.hf,W.c6,W.ij,W.bg,W.eg,W.iF,W.iG,W.cX])
s(W.b5,[W.cz,W.fU,W.fV])
t(W.fS,W.b6)
t(W.cA,W.eA)
t(W.eD,W.eC)
t(W.dH,W.eD)
t(W.eF,W.eE)
t(W.h0,W.eF)
t(W.aI,W.bY)
t(W.eI,W.eH)
t(W.cC,W.eI)
t(W.eK,W.eJ)
t(W.c5,W.eK)
t(W.bR,W.o)
s(W.bR,[W.b9,W.a7,W.b_])
t(W.hO,W.eP)
t(W.hQ,W.eQ)
t(W.eS,W.eR)
t(W.hS,W.eS)
t(W.eV,W.eU)
t(W.cN,W.eV)
t(W.eZ,W.eY)
t(W.i7,W.eZ)
t(W.ig,W.f_)
t(W.di,W.dh)
t(W.iu,W.di)
t(W.f2,W.f1)
t(W.iv,W.f2)
t(W.iy,W.f6)
t(W.fa,W.f9)
t(W.iI,W.fa)
t(W.dk,W.dj)
t(W.iJ,W.dk)
t(W.fd,W.fc)
t(W.iX,W.fd)
t(W.bk,W.a7)
t(W.fl,W.fk)
t(W.jK,W.fl)
t(W.eB,W.dI)
t(W.fn,W.fm)
t(W.jZ,W.fn)
t(W.fp,W.fo)
t(W.eT,W.fp)
t(W.fr,W.fq)
t(W.kc,W.fr)
t(W.ft,W.fs)
t(W.kg,W.ft)
t(W.jM,W.jI)
t(W.jN,P.iA)
t(W.le,W.jN)
t(W.jO,P.cU)
t(W.ki,W.f0)
t(P.ke,P.kd)
t(P.al,P.k2)
t(P.eM,P.eL)
t(P.hu,P.eM)
t(P.eX,P.eW)
t(P.i2,P.eX)
t(P.cR,P.q)
t(P.f8,P.f7)
t(P.iE,P.f8)
t(P.ff,P.fe)
t(P.iZ,P.ff)
t(P.fE,P.ez)
t(P.i3,P.bX)
t(P.f4,P.f3)
t(P.iw,P.f4)
s(E.fK,[Z.dA,A.cS,T.bQ])
s(D.z,[D.bJ,D.bK,D.K,X.i8])
s(X.i8,[X.dW,X.bs,X.cJ,X.eo])
s(O.a4,[D.dT,U.cE,M.dC])
s(D.fN,[U.fO,U.ak])
t(U.dD,U.ak)
s(A.cS,[A.dG,A.dZ,A.ed])
s(A.ep,[A.P,A.j5,A.j6,A.j8,A.j3,A.a2,A.j4,A.Q,A.j7,A.ja,A.bS,A.am,A.ai,A.an])
t(F.it,F.ha)
t(F.j2,F.hv)
t(F.jv,F.jw)
t(F.i0,F.jx)
s(O.bP,[O.fZ,O.dY,O.ec])
s(O.e_,[O.hI,O.hJ,O.bb])
s(O.bb,[O.hL,O.hM])
s(T.bQ,[T.iK,T.ei])
t(T.iO,T.iK)
s(V.dX,[V.aw,V.cZ])
s(X.cW,[X.fH,X.hh])
s(V.bE,[V.fX,V.hi,V.hj,V.i6])
u(H.er,H.d5)
u(H.dd,P.x)
u(H.de,H.c4)
u(H.df,P.x)
u(H.dg,H.c4)
u(P.eO,P.x)
u(P.fh,P.km)
u(W.eA,W.fT)
u(W.eC,P.x)
u(W.eD,W.F)
u(W.eE,P.x)
u(W.eF,W.F)
u(W.eH,P.x)
u(W.eI,W.F)
u(W.eJ,P.x)
u(W.eK,W.F)
u(W.eP,P.af)
u(W.eQ,P.af)
u(W.eR,P.x)
u(W.eS,W.F)
u(W.eU,P.x)
u(W.eV,W.F)
u(W.eY,P.x)
u(W.eZ,W.F)
u(W.f_,P.af)
u(W.dh,P.x)
u(W.di,W.F)
u(W.f1,P.x)
u(W.f2,W.F)
u(W.f6,P.af)
u(W.f9,P.x)
u(W.fa,W.F)
u(W.dj,P.x)
u(W.dk,W.F)
u(W.fc,P.x)
u(W.fd,W.F)
u(W.fk,P.x)
u(W.fl,W.F)
u(W.fm,P.x)
u(W.fn,W.F)
u(W.fo,P.x)
u(W.fp,W.F)
u(W.fq,P.x)
u(W.fr,W.F)
u(W.fs,P.x)
u(W.ft,W.F)
u(P.eL,P.x)
u(P.eM,W.F)
u(P.eW,P.x)
u(P.eX,W.F)
u(P.f7,P.x)
u(P.f8,W.F)
u(P.fe,P.x)
u(P.ff,W.F)
u(P.ez,P.af)
u(P.f3,P.x)
u(P.f4,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bC.prototype
C.m=W.c0.prototype
C.S=W.aH.prototype
C.V=J.a.prototype
C.a=J.aR.prototype
C.W=J.dO.prototype
C.e=J.dP.prototype
C.n=J.dQ.prototype
C.f=J.bL.prototype
C.b=J.bq.prototype
C.X=J.br.prototype
C.a2=W.cN.prototype
C.F=J.i5.prototype
C.c=P.ce.prototype
C.a3=W.bg.prototype
C.G=W.eg.prototype
C.w=J.bT.prototype
C.H=W.bk.prototype
C.I=W.d9.prototype
C.a4=new P.fJ()
C.J=new P.fI()
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.Q=new P.i4()
C.l=new P.jl()
C.R=new P.jn()
C.k=new P.k3()
C.d=new A.c2(0,"ColorSourceType.None")
C.j=new A.c2(1,"ColorSourceType.Solid")
C.h=new A.c2(2,"ColorSourceType.Texture2D")
C.i=new A.c2(3,"ColorSourceType.TextureCube")
C.t=new P.b7(0)
C.T=new P.b7(5e6)
C.U=new P.hm("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.B=H.d(u([]),[P.f])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.fR(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",B:"double",ad:"num",f:"String",R:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ar]]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:P.L,args:[F.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.L,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:P.R,args:[W.E]},{func:1,ret:P.R,args:[W.aC]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.R,args:[W.O,P.f,P.f,W.bU]},{func:1,ret:-1,args:[P.p,[P.i,D.a9]]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.p,[P.i,U.ak]]},{func:1,ret:-1,args:[P.p,[P.i,M.aD]]},{func:1,ret:-1,args:[P.p,[P.i,V.av]]},{func:1,ret:P.L,args:[P.f,,]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.V,args:[P.p]},{func:1,ret:P.V,args:[,,]},{func:1,args:[P.f]},{func:1,ret:[P.G,P.f,P.f],args:[[P.G,P.f,P.f],P.f]},{func:1,ret:P.R,args:[[P.i,D.a9]]},{func:1,args:[W.o]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.O,args:[W.E]},{func:1,ret:V.a8,args:[P.B]},{func:1,ret:P.L,args:[F.as,P.B,P.B]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,args:[,P.f]},{func:1,ret:P.L,args:[,],opt:[P.ax]},{func:1,ret:P.L,args:[P.bh]},{func:1,ret:P.R,args:[V.bE]},{func:1,ret:P.L,args:[W.a7]},{func:1,ret:P.L,args:[W.O]},{func:1,ret:P.L,args:[P.ad]},{func:1,ret:-1,args:[W.bk]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b3=0
$.cw=null
$.lD=null
$.li=!1
$.mL=null
$.mG=null
$.mR=null
$.kE=null
$.kJ=null
$.lr=null
$.cj=null
$.dn=null
$.dp=null
$.lj=!1
$.a3=C.k
$.ay=[]
$.bo=null
$.kY=null
$.lK=null
$.lJ=null
$.dc=P.l4(P.f,P.bI)
$.lP=null
$.lT=null
$.lY=null
$.cO=null
$.m2=null
$.mf=null
$.mj=null
$.mh=null
$.mi=null
$.jo=null
$.mg=null
$.lX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pp","mV",function(){return H.mK("_$dart_dartClosure")})
u($,"pq","lv",function(){return H.mK("_$dart_js")})
u($,"pv","mW",function(){return H.bj(H.j0({
toString:function(){return"$receiver$"}}))})
u($,"pw","mX",function(){return H.bj(H.j0({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"px","mY",function(){return H.bj(H.j0(null))})
u($,"py","mZ",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pB","n1",function(){return H.bj(H.j0(void 0))})
u($,"pC","n2",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pA","n0",function(){return H.bj(H.ma(null))})
u($,"pz","n_",function(){return H.bj(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pE","n4",function(){return H.bj(H.ma(void 0))})
u($,"pD","n3",function(){return H.bj(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pV","lw",function(){return P.oc()})
u($,"pH","n5",function(){return P.o9()})
u($,"pW","n9",function(){return H.nK(H.ci(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pY","nb",function(){return P.nY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pZ","nc",function(){return P.oB()})
u($,"pX","na",function(){return P.lO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pO","n8",function(){return Z.aL(0)})
u($,"pI","n6",function(){return Z.aL(511)})
u($,"pQ","aF",function(){return Z.aL(1)})
u($,"pP","bz",function(){return Z.aL(2)})
u($,"pK","by",function(){return Z.aL(4)})
u($,"pR","b2",function(){return Z.aL(8)})
u($,"pS","bA",function(){return Z.aL(16)})
u($,"pL","dt",function(){return Z.aL(32)})
u($,"pM","du",function(){return Z.aL(64)})
u($,"pN","n7",function(){return Z.aL(96)})
u($,"pT","ct",function(){return Z.aL(128)})
u($,"pJ","bx",function(){return Z.aL(256)})
u($,"po","mU",function(){return new V.h7(1e-9)})
u($,"pn","S",function(){return $.mU()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bO,ArrayBufferView:H.bO,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hU,Int32Array:H.hV,Int8Array:H.hW,Uint16Array:H.hX,Uint32Array:H.hY,Uint8ClampedArray:H.e2,CanvasPixelArray:H.e2,Uint8Array:H.cM,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fz,HTMLAnchorElement:W.dw,HTMLAreaElement:W.fA,HTMLBaseElement:W.cu,Blob:W.bY,HTMLBodyElement:W.bC,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.cx,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cz,CSSUnitValue:W.cz,CSSPerspective:W.fS,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.b5,CSSKeywordValue:W.b5,CSSPositionValue:W.b5,CSSResourceValue:W.b5,CSSURLImageValue:W.b5,CSSStyleValue:W.b5,CSSMatrixComponent:W.b6,CSSRotation:W.b6,CSSScale:W.b6,CSSSkew:W.b6,CSSTranslation:W.b6,CSSTransformComponent:W.b6,CSSTransformValue:W.fU,CSSUnparsedValue:W.fV,DataTransferItemList:W.fY,HTMLDivElement:W.aH,DOMException:W.h_,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.O,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cC,FileWriter:W.hb,HTMLFormElement:W.hf,Gamepad:W.aQ,History:W.hk,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.bp,HTMLImageElement:W.c6,KeyboardEvent:W.b9,Location:W.dV,MediaList:W.hN,MessagePort:W.cI,MIDIInputMap:W.hO,MIDIOutputMap:W.hQ,MimeType:W.aT,MimeTypeArray:W.hS,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.i7,RTCStatsReport:W.ig,HTMLSelectElement:W.ij,SourceBuffer:W.aV,SourceBufferList:W.iu,SpeechGrammar:W.aW,SpeechGrammarList:W.iv,SpeechRecognitionResult:W.aX,Storage:W.iy,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,HTMLTableElement:W.eg,HTMLTableRowElement:W.iF,HTMLTableSectionElement:W.iG,HTMLTemplateElement:W.cX,TextTrack:W.aY,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iI,TextTrackList:W.iJ,TimeRanges:W.iT,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iX,TrackDefaultList:W.iY,CompositionEvent:W.bR,FocusEvent:W.bR,TextEvent:W.bR,UIEvent:W.bR,URL:W.jk,VideoTrackList:W.jB,WheelEvent:W.bk,Window:W.d9,DOMWindow:W.d9,Attr:W.da,CSSRuleList:W.jK,ClientRect:W.eB,DOMRect:W.eB,GamepadList:W.jZ,NamedNodeMap:W.eT,MozNamedAttrMap:W.eT,SpeechRecognitionResultList:W.kc,StyleSheetList:W.kg,SVGLength:P.ba,SVGLengthList:P.hu,SVGNumber:P.be,SVGNumberList:P.i2,SVGPointList:P.i9,SVGScriptElement:P.cR,SVGStringList:P.iE,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bi,SVGTransformList:P.iZ,AudioBuffer:P.fD,AudioParamMap:P.fE,AudioTrackList:P.fG,AudioContext:P.bX,webkitAudioContext:P.bX,BaseAudioContext:P.bX,OfflineAudioContext:P.i3,WebGLBuffer:P.dz,WebGLFramebuffer:P.dN,WebGLProgram:P.e7,WebGLRenderbuffer:P.e9,WebGL2RenderingContext:P.ce,WebGLShader:P.ea,WebGLTexture:P.eh,WebGLUniformLocation:P.eq,SQLResultSetRowList:P.iw})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.mO,[])
else X.mO([])})})()
//# sourceMappingURL=test.dart.js.map
