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
a[c]=function(){a[c]=function(){H.pb(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kX:function kX(){},
kz:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nD:function(){return new P.iz("No element")},
a8:function a8(a){this.a=a},
h6:function h6(){},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jz:function jz(a,b,c){this.a=a
this.b=b
this.$ti=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(){},
dc:function dc(){},
en:function en(){},
nw:function(){throw H.e(P.H("Cannot modify unmodifiable Map"))},
cA:function(a){var u,t=H.N(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oV:function(a){return v.types[H.ah(a)]},
p_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b3(a)
if(typeof u!=="string")throw H.e(H.aK(a))
return u},
cW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lZ:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.f(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ak(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.H(s,q)|32)>t)return}return parseInt(a,b)},
ck:function(a){return H.nO(a)+H.lh(H.bZ(a),0,null)},
nO:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.T||!!n.$icn){r=C.w(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cA(t.length>1&&C.b.H(t,0)===36?C.b.b3(t,1):t)},
nP:function(){if(!!self.location)return self.location.href
return},
lY:function(a){var u,t,s,r,q
H.fp(a)
u=J.aL(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nX:function(a){var u,t,s,r=H.c([],[P.n])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aK(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.be(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aK(s))}return H.lY(r)},
m_:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aK(s))
if(s<0)throw H.e(H.aK(s))
if(s>65535)return H.nX(a)}return H.lY(a)},
nY:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.be(u,10))>>>0,56320|u&1023)}}throw H.e(P.ak(a,0,1114111,null,null))},
cj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nW:function(a){var u=H.cj(a).getFullYear()+0
return u},
nU:function(a){var u=H.cj(a).getMonth()+1
return u},
nQ:function(a){var u=H.cj(a).getDate()+0
return u},
nR:function(a){var u=H.cj(a).getHours()+0
return u},
nT:function(a){var u=H.cj(a).getMinutes()+0
return u},
nV:function(a){var u=H.cj(a).getSeconds()+0
return u},
nS:function(a){var u=H.cj(a).getMilliseconds()+0
return u},
d:function(a){throw H.e(H.aK(a))},
f:function(a,b){if(a==null)J.aL(a)
throw H.e(H.by(a,b))},
by:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b4(!0,b,s,null)
u=H.ah(J.aL(a))
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.i8(b,s)},
oR:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.b4(!0,b,"end",null)},
aK:function(a){return new P.b4(!0,a,null,null)},
ct:function(a){if(typeof a!=="number")throw H.e(H.aK(a))
return a},
e:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mV})
u.name=""}else u.toString=H.mV
return u},
mV:function(){return J.b3(this.dartException)},
w:function(a){throw H.e(a)},
J:function(a){throw H.e(P.c7(a))},
bk:function(a){var u,t,s,r,q,p
a=H.mT(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lU:function(a,b){return new H.hV(a,b==null?null:b.method)},
kY:function(a,b){var u=b==null,t=u?null:b.method
return new H.hp(a,t,u?null:b.receiver)},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.be(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kY(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lU(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n1()
q=$.n2()
p=$.n3()
o=$.n4()
n=$.n7()
m=$.n8()
l=$.n6()
$.n5()
k=$.na()
j=$.n9()
i=r.ar(u)
if(i!=null)return f.$1(H.kY(H.N(u),i))
else{i=q.ar(u)
if(i!=null){i.method="call"
return f.$1(H.kY(H.N(u),i))}else{i=p.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=n.ar(u)
if(i==null){i=m.ar(u)
if(i==null){i=l.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=k.ar(u)
if(i==null){i=j.ar(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lU(H.N(u),i))}}return f.$1(new H.jd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ec()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b4(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ec()
return a},
cx:function(a){var u
if(a==null)return new H.f0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f0(a)},
mJ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oZ:function(a,b,c,d,e,f){H.i(a,"$ikT")
switch(H.ah(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.y("Unsupported number of arguments for wrapped closure"))},
cu:function(a,b){var u
H.ah(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oZ)
a.$identity=u
return u},
nv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iB().constructor.prototype):Object.create(new H.cC(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b5
if(typeof t!=="number")return t.l()
$.b5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lH(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oV,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lG:H.kQ
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lH(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ns:function(a,b,c,d){var u=H.kQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nu(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ns(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.l()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cD
return new Function(r+H.m(q==null?$.cD=H.fN("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.l()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cD
return new Function(r+H.m(q==null?$.cD=H.fN("self"):q)+"."+H.m(u)+"("+o+");}")()},
nt:function(a,b,c,d){var u=H.kQ,t=H.lG
switch(b?-1:a){case 0:throw H.e(H.o2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nu:function(a,b){var u,t,s,r,q,p,o,n=$.cD
if(n==null)n=$.cD=H.fN("self")
u=$.lF
if(u==null)u=$.lF=H.fN("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b5
if(typeof u!=="number")return u.l()
$.b5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b5
if(typeof u!=="number")return u.l()
$.b5=u+1
return new Function(n+u+"}")()},
lk:function(a,b,c,d,e,f,g){return H.nv(a,b,H.ah(c),d,!!e,!!f,g)},
kQ:function(a){return a.a},
lG:function(a){return a.c},
fN:function(a){var u,t,s,r=new H.cC("self","target","receiver","name"),q=J.kV(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.oK("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aY(a,"String"))},
oS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"double"))},
p4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"num"))},
mH:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aY(a,"bool"))},
ah:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aY(a,"int"))},
mR:function(a,b){throw H.e(H.aY(a,H.cA(H.N(b).substring(2))))},
p6:function(a,b){throw H.e(H.nq(a,H.cA(H.N(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.mR(a,b)},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.p6(a,b)},
fp:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.e(H.aY(a,"List<dynamic>"))},
mO:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.mR(a,b)},
mI:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ah(u)]
else return a.$S()}return},
fo:function(a,b){var u
if(typeof a=="function")return!0
u=H.mI(J.T(a))
if(u==null)return!1
return H.mw(u,null,b,null)},
p:function(a,b){var u,t
if(a==null)return a
if($.le)return a
$.le=!0
try{if(H.fo(a,b))return a
u=H.kF(b)
t=H.aY(a,u)
throw H.e(t)}finally{$.le=!1}},
ll:function(a,b){if(a!=null&&!H.lj(a,b))H.w(H.aY(a,H.kF(b)))
return a},
aY:function(a,b){return new H.j2("TypeError: "+P.dI(a)+": type '"+H.mC(a)+"' is not a subtype of type '"+b+"'")},
nq:function(a,b){return new H.fO("CastError: "+P.dI(a)+": type '"+H.mC(a)+"' is not a subtype of type '"+b+"'")},
mC:function(a){var u,t=J.T(a)
if(!!t.$icG){u=H.mI(t)
if(u!=null)return H.kF(u)
return"Closure"}return H.ck(a)},
oK:function(a){throw H.e(new H.jB(a))},
pb:function(a){throw H.e(new P.h_(H.N(a)))},
o2:function(a){return new H.ih(a)},
mL:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bZ:function(a){if(a==null)return
return a.$ti},
qj:function(a,b,c){return H.cz(a["$a"+H.m(c)],H.bZ(b))},
cw:function(a,b,c,d){var u
H.N(c)
H.ah(d)
u=H.cz(a["$a"+H.m(c)],H.bZ(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u
H.N(b)
H.ah(c)
u=H.cz(a["$a"+H.m(b)],H.bZ(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ah(b)
u=H.bZ(a)
return u==null?null:u[b]},
kF:function(a){return H.bY(a,null)},
bY:function(a,b){var u,t
H.h(b,"$ib",[P.k],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cA(a[0].name)+H.lh(a,1,b)
if(typeof a=="function")return H.cA(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ah(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.m(b[t])}if('func' in a)return H.oC(a,b)
if('futureOr' in a)return"FutureOr<"+H.bY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oC:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.k]
H.h(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.b.l(p,a0[n])
m=u[q]
if(m!=null&&m!==P.U)p+=" extends "+H.bY(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bY(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bY(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bY(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oU(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.N(b[h])
j=j+i+H.bY(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lh:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ib",[P.k],"$ab")
if(a==null)return""
u=new P.ap("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bY(p,c)}return"<"+u.i(0)+">"},
cz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
li:function(a,b,c,d){var u,t
H.N(b)
H.fp(c)
H.N(d)
if(a==null)return!1
u=H.bZ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mF(H.cz(t[d],u),null,c,null)},
h:function(a,b,c,d){H.N(b)
H.fp(c)
H.N(d)
if(a==null)return a
if(H.li(a,b,c,d))return a
throw H.e(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cA(b.substring(2))+H.lh(c,0,null),v.mangledGlobalNames)))},
mF:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qh:function(a,b,c){return a.apply(b,H.cz(J.T(b)["$a"+H.m(c)],H.bZ(b)))},
mN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="P"||a===-1||a===-2||H.mN(u)}return!1},
lj:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="P"||b===-1||b===-2||H.mN(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fo(a,b)}u=J.T(a).constructor
t=H.bZ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lj(a,b))throw H.e(H.aY(a,H.kF(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.mw(a,b,c,d)
if('func' in a)return c.name==="kT"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aJ("type" in a?a.type:l,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cK" in t.prototype))return!1
r=t.prototype["$a"+"cK"]
q=H.cz(r,u?a.slice(1):l)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mF(H.cz(m,u),b,p,d)},
mw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aJ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aJ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aJ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aJ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p3(h,b,g,d)},
p3:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aJ(c[s],d,a[s],b))return!1}return!0},
qi:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
p0:function(a){var u,t,s,r,q=H.N($.mM.$1(a)),p=$.kv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mE.$2(a,q))
if(q!=null){p=$.kv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kE(u)
$.kv[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kD[q]=u
return u}if(s==="-"){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mQ(a,u)
if(s==="*")throw H.e(P.jc(q))
if(v.leafTags[q]===true){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mQ(a,u)},
mQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lo(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kE:function(a){return J.lo(a,!1,null,!!a.$iM)},
p2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kE(u)
else return J.lo(u,c,null,null)},
oX:function(){if(!0===$.ln)return
$.ln=!0
H.oY()},
oY:function(){var u,t,s,r,q,p,o,n
$.kv=Object.create(null)
$.kD=Object.create(null)
H.oW()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mS.$1(q)
if(p!=null){o=H.p2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oW:function(){var u,t,s,r,q,p,o=C.G()
o=H.cs(C.H,H.cs(C.I,H.cs(C.x,H.cs(C.x,H.cs(C.J,H.cs(C.K,H.cs(C.L(C.w),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mM=new H.kA(r)
$.mE=new H.kB(q)
$.mS=new H.kC(p)},
cs:function(a,b){return a(b)||b},
nF:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
p9:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mU:function(a,b,c){var u=H.pa(a,b,c)
return u},
pa:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mT(b),'g'),H.oT(c))},
fU:function fU(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hV:function hV(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
kH:function kH(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cG:function cG(){},
iJ:function iJ(){},
iB:function iB(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
fO:function fO(a){this.a=a},
ih:function ih(a){this.a=a},
jB:function jB(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hs:function hs(a,b){this.a=a
this.b=b
this.c=null},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function(a){return a},
nL:function(a){return new Int8Array(a)},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.by(b,a))},
oA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.oR(a,b,c))
return b},
cS:function cS(){},
bQ:function bQ(){},
dW:function dW(){},
cT:function cT(){},
dX:function dX(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
dY:function dY(){},
ch:function ch(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
oU:function(a){return J.lK(a?Object.keys(a):[],null)},
p5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lo:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ky:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ln==null){H.oX()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.jc("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lz()]
if(r!=null)return r
r=H.p0(a)
if(r!=null)return r
if(typeof a=="function")return C.U
u=Object.getPrototypeOf(a)
if(u==null)return C.C
if(u===Object.prototype)return C.C
if(typeof s=="function"){Object.defineProperty(s,$.lz(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
nE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ak(a,0,4294967295,"length",null))
return J.lK(new Array(a),b)},
lK:function(a,b){return J.kV(H.c(a,[b]))},
kV:function(a){H.fp(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.ce.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.hn.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.U)return a
return J.ky(a)},
bz:function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.U)return a
return J.ky(a)},
kw:function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.U)return a
return J.ky(a)},
mK:function(a){if(typeof a=="number")return J.cO.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.cn.prototype
return a},
lm:function(a){if(typeof a=="string")return J.ce.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.cn.prototype
return a},
kx:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.U)return a
return J.ky(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bz(a).k(a,b)},
kL:function(a,b,c){return J.kw(a).m(a,b,c)},
nh:function(a,b){return J.lm(a).H(a,b)},
ni:function(a,b,c){return J.kx(a).ja(a,b,c)},
nj:function(a,b,c,d){return J.kx(a).kg(a,b,c,d)},
nk:function(a,b){return J.lm(a).a0(a,b)},
kM:function(a,b){return J.kw(a).L(a,b)},
nl:function(a,b,c,d){return J.kx(a).eL(a,b,c,d)},
kN:function(a){return J.mK(a).c7(a)},
lC:function(a,b){return J.kw(a).P(a,b)},
c_:function(a){return J.T(a).gI(a)},
c0:function(a){return J.kw(a).ga1(a)},
aL:function(a){return J.bz(a).gn(a)},
nm:function(a,b){return J.kx(a).l2(a,b)},
kO:function(a){return J.mK(a).az(a)},
b3:function(a){return J.T(a).i(a)},
a:function a(){},
hn:function hn(){},
dM:function dM(){},
dN:function dN(){},
i_:function i_(){},
cn:function cn(){},
bO:function bO(){},
ba:function ba(a){this.$ti=a},
kW:function kW(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cO:function cO(){},
dL:function dL(){},
dK:function dK(){},
ce:function ce(){}},P={
of:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oL()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cu(new P.jD(s),1)).observe(u,{childList:true})
return new P.jC(s,u,t)}else if(self.setImmediate!=null)return P.oM()
return P.oN()},
og:function(a){self.scheduleImmediate(H.cu(new P.jE(H.p(a,{func:1,ret:-1})),0))},
oh:function(a){self.setImmediate(H.cu(new P.jF(H.p(a,{func:1,ret:-1})),0))},
oi:function(a){P.l4(C.o,H.p(a,{func:1,ret:-1}))},
l4:function(a,b){var u
H.p(b,{func:1,ret:-1})
u=C.e.a8(a.a,1000)
return P.ol(u<0?0:u,b)},
m6:function(a,b){var u
H.p(b,{func:1,ret:-1,args:[P.bi]})
u=C.e.a8(a.a,1000)
return P.om(u<0?0:u,b)},
ol:function(a,b){var u=new P.f6()
u.fZ(a,b)
return u},
om:function(a,b){var u=new P.f6()
u.h_(a,b)
return u},
oj:function(a,b){var u,t,s
b.a=1
try{a.ff(new P.jO(b),new P.jP(b),null)}catch(s){u=H.b_(s)
t=H.cx(s)
P.p7(new P.jQ(b,u,t))}},
mm:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iaI")
if(u>=4){t=b.cE()
b.a=a.a
b.c=a.c
P.df(b,t)}else{t=H.i(b.c,"$ibn")
b.a=2
b.c=a
a.e4(t)}},
df:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.i(g.c,"$iar")
g=g.b
r=s.a
q=s.b
g.toString
P.kr(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.df(h.a,b)}g=h.a
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
if(m){H.i(o,"$iar")
g=g.b
r=o.a
q=o.b
g.toString
P.kr(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.jU(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jT(u,b,o).$0()}else if((g&2)!==0)new P.jS(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.T(g).$icK){if(g.a>=4){k=H.i(q.c,"$ibn")
q.c=null
b=q.bM(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mm(g,q)
return}}j=b.b
k=H.i(j.c,"$ibn")
j.c=null
b=j.bM(k)
g=u.a
r=u.b
if(!g){H.C(r,H.v(j,0))
j.a=4
j.c=r}else{H.i(r,"$iar")
j.a=8
j.c=r}h.a=j
g=j}},
oG:function(a,b){if(H.fo(a,{func:1,args:[P.U,P.aw]}))return H.p(a,{func:1,ret:null,args:[P.U,P.aw]})
if(H.fo(a,{func:1,args:[P.U]}))return H.p(a,{func:1,ret:null,args:[P.U]})
throw H.e(P.kP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oF:function(){var u,t
for(;u=$.cr,u!=null;){$.dt=null
t=u.b
$.cr=t
if(t==null)$.ds=null
u.a.$0()}},
oJ:function(){$.lf=!0
try{P.oF()}finally{$.dt=null
$.lf=!1
if($.cr!=null)$.lA().$1(P.mG())}},
mB:function(a){var u=new P.ev(H.p(a,{func:1,ret:-1}))
if($.cr==null){$.cr=$.ds=u
if(!$.lf)$.lA().$1(P.mG())}else $.ds=$.ds.b=u},
oI:function(a){var u,t,s
H.p(a,{func:1,ret:-1})
u=$.cr
if(u==null){P.mB(a)
$.dt=$.ds
return}t=new P.ev(a)
s=$.dt
if(s==null){t.b=u
$.cr=$.dt=t}else{t.b=s.b
$.dt=s.b=t
if(t.b==null)$.ds=t}},
p7:function(a){var u,t=null,s={func:1,ret:-1}
H.p(a,s)
u=$.Y
if(C.k===u){P.kt(t,t,C.k,a)
return}u.toString
P.kt(t,t,u,H.p(u.cQ(a),s))},
l3:function(a,b){var u,t={func:1,ret:-1}
H.p(b,t)
u=$.Y
if(u===C.k){u.toString
return P.l4(a,b)}return P.l4(a,H.p(u.cQ(b),t))},
iV:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bi]}
H.p(b,s)
u=$.Y
if(u===C.k){u.toString
return P.m6(a,b)}t=u.eh(b,P.bi)
$.Y.toString
return P.m6(a,H.p(t,s))},
kr:function(a,b,c,d,e){var u={}
u.a=d
P.oI(new P.ks(u,e))},
mx:function(a,b,c,d,e){var u,t
H.p(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
my:function(a,b,c,d,e,f,g){var u,t
H.p(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
oH:function(a,b,c,d,e,f,g,h,i){var u,t
H.p(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
kt:function(a,b,c,d){var u
H.p(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cQ(d):c.kl(d,-1)
P.mB(d)},
jD:function jD(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
f6:function f6(){this.c=0},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aI:function aI(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jN:function jN(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jV:function jV(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a
this.b=null},
iE:function iE(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
d0:function d0(){},
iF:function iF(){},
bi:function bi(){},
ar:function ar(a,b){this.a=a
this.b=b},
km:function km(){},
ks:function ks(a,b){this.a=a
this.b=b},
k2:function k2(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function(a,b,c){H.fp(a)
return H.h(H.mJ(a,new H.aB([b,c])),"$ilL",[b,c],"$alL")},
lM:function(a,b){return new H.aB([a,b])},
nH:function(a){return H.mJ(a,new H.aB([null,null]))},
nI:function(a){return new P.k_([a])},
lb:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mo:function(a,b,c){var u=new P.k0(a,b,[c])
u.c=a.e
return u},
nC:function(a,b,c){var u,t
if(P.lg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
C.a.h($.ax,a)
try{P.oE(a,u)}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=P.m4(b,H.mO(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kU:function(a,b,c){var u,t
if(P.lg(a))return b+"..."+c
u=new P.ap(b)
C.a.h($.ax,a)
try{t=u
t.a=P.m4(t.a,a,", ")}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lg:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oE:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ib",[P.k],"$ab")
u=a.ga1(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.m(u.gO(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gO(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gO(u);++s
for(;u.C();o=n,n=m){m=u.gO(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
l_:function(a){var u,t={}
if(P.lg(a))return"{...}"
u=new P.ap("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hy(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k_:function k_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dg:function dg(a){this.a=a
this.c=this.b=null},
k0:function k0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hu:function hu(){},
z:function z(){},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
am:function am(){},
kf:function kf(){},
hz:function hz(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
k6:function k6(){},
eK:function eK(){},
fc:function fc(){},
o9:function(a,b,c,d){H.h(b,"$ib",[P.n],"$ab")
if(b instanceof Uint8Array)return P.oa(!1,b,c,d)
return},
oa:function(a,b,c,d){var u,t,s=$.nb()
if(s==null)return
u=0===c
if(u&&!0)return P.l7(s,b)
t=b.length
d=P.bU(c,d,t)
if(u&&d===t)return P.l7(s,b)
return P.l7(s,b.subarray(c,d))},
l7:function(a,b){if(P.oc(b))return
return P.od(a,b)},
od:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b_(t)}return},
oc:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ob:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b_(t)}return},
mA:function(a,b,c){var u,t,s
H.h(a,"$ib",[P.n],"$ab")
for(u=J.bz(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bE()
if((s&127)!==s)return t-b}return c-b},
lD:function(a,b,c,d,e,f){if(C.e.b2(f,4)!==0)throw H.e(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fK:function fK(){},
fL:function fL(){},
c5:function c5(){},
c8:function c8(){},
h7:function h7(){},
jl:function jl(){},
jn:function jn(){},
kl:function kl(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
kk:function kk(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cy:function(a,b,c){var u
H.p(b,{func:1,ret:P.n,args:[P.k]})
u=H.lZ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a7(a,null,null))},
nA:function(a){if(a instanceof H.cG)return a.i(0)
return"Instance of '"+H.ck(a)+"'"},
nJ:function(a,b,c){var u,t
H.C(b,c)
u=J.nE(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.h(u,"$ib",[c],"$ab")},
kZ:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c0(a);u.C();)C.a.h(s,H.C(u.gO(u),c))
if(b)return s
return H.h(J.kV(s),"$ib",t,"$ab")},
d1:function(a,b,c){var u,t=P.n
H.h(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iba",[t],"$aba")
u=a.length
c=P.bU(b,c,u)
return H.m_(b>0||c<u?C.a.fu(a,b,c):a)}if(!!J.T(a).$ich)return H.nY(a,b,P.bU(b,c,a.length))
return P.o4(a,b,c)},
o4:function(a,b,c){var u,t,s,r,q=null
H.h(a,"$ij",[P.n],"$aj")
if(b<0)throw H.e(P.ak(b,0,J.aL(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ak(c,b,J.aL(a),q,q))
t=J.c0(a)
for(s=0;s<b;++s)if(!t.C())throw H.e(P.ak(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gO(t))
else for(s=b;s<c;++s){if(!t.C())throw H.e(P.ak(c,b,s,q,q))
r.push(t.gO(t))}return H.m_(r)},
o0:function(a){return new H.ho(a,H.nF(a,!1,!0,!1))},
m4:function(a,b,c){var u=J.c0(b)
if(!u.C())return a
if(c.length===0){do a+=H.m(u.gO(u))
while(u.C())}else{a+=H.m(u.gO(u))
for(;u.C();)a=a+c+H.m(u.gO(u))}return a},
m9:function(){var u=H.nP()
if(u!=null)return P.o8(u)
throw H.e(P.H("'Uri.base' is not supported"))},
fd:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.h(a,"$ib",[P.n],"$ab")
if(c===C.l){u=$.nf().b
if(typeof b!=="string")H.w(H.aK(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aD(c,"c5",0))
t=c.gky().cV(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e4(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nx:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ny:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dD:function(a){if(a>=10)return""+a
return"0"+a},
lI:function(a,b){return new P.aM(1e6*b+1000*a)},
dI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nA(a)},
dw:function(a){return new P.b4(!1,null,null,a)},
kP:function(a,b,c){return new P.b4(!0,a,b,c)},
nZ:function(a){var u=null
return new P.bT(u,u,!1,u,u,a)},
i8:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
bU:function(a,b,c){if(0>a||a>c)throw H.e(P.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ak(b,a,c,"end",null))
return b}return c},
m0:function(a,b){if(typeof a!=="number")return a.J()
if(a<0)throw H.e(P.ak(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ah(e==null?J.aL(b):e)
return new P.hl(u,!0,a,c,"Index out of range")},
H:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
c7:function(a){return new P.fT(a)},
y:function(a){return new P.eD(a)},
a7:function(a,b,c){return new P.hh(a,b,c)},
dS:function(a,b,c){var u,t
H.p(b,{func:1,ret:c,args:[P.n]})
u=H.c([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
lq:function(a){H.p5(a)},
o8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.H(a,4)^58)*3|C.b.H(a,0)^100|C.b.H(a,1)^97|C.b.H(a,2)^116|C.b.H(a,3)^97)>>>0
if(u===0)return P.m8(e<e?C.b.A(a,0,e):a,5,f).gfj()
else if(u===32)return P.m8(C.b.A(a,5,e),0,f).gfj()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.n])
C.a.m(s,0,0)
C.a.m(s,1,-1)
C.a.m(s,2,-1)
C.a.m(s,7,-1)
C.a.m(s,3,0)
C.a.m(s,4,0)
C.a.m(s,5,e)
C.a.m(s,6,e)
if(P.mz(a,0,e,0,s)>=14)C.a.m(s,7,e)
r=s[1]
if(typeof r!=="number")return r.lk()
if(r>=0)if(P.mz(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.l()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.J()
if(typeof n!=="number")return H.d(n)
if(m<n)n=m
if(typeof o!=="number")return o.J()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.J()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.J()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.al(a,"..",o)))j=n>o+2&&C.b.al(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.al(a,"file",0)){if(q<=0){if(!C.b.al(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.bk(a,o,n,"/");++e
n=h}k="file"}else if(C.b.al(a,"http",0)){if(t&&p+3===o&&C.b.al(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.bk(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.al(a,"https",0)){if(t&&p+4===o&&C.b.al(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.bk(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k7(a,r,q,p,o,n,m,k)}return P.on(a,0,e,r,q,p,o,n,m,k)},
mb:function(a){var u=P.k
return C.a.kA(H.c(a.split("&"),[u]),P.lM(u,u),new P.jj(C.l),[P.D,P.k,P.k])},
o7:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jg(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cy(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.bl()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.f(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cy(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.bl()
if(p>255)k.$2(l,s)
if(r>=u)return H.f(j,r)
j[r]=p
return j},
ma:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.n])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gb_(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o7(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.e.be(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
on:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ou(a,b,d)
else{if(d===b)P.dq(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ov(a,u,e-1):""
s=P.or(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.d(g)
q=r<g?P.ot(P.cy(C.b.A(a,r,g),new P.kg(a,f),n),j):n}else{q=n
s=q
t=""}p=P.os(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.J()
o=h<i?P.lc(a,h+1,i,n):n
return new P.cp(j,t,s,q,p,o,i<c?P.oq(a,i+1,c):n)},
mp:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dq:function(a,b,c){throw H.e(P.a7(c,a,b))},
ot:function(a,b){if(a!=null&&a===P.mp(b))return
return a},
or:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.a0(a,u)!==93)P.dq(a,b,"Missing end `]` to match `[` in host")
P.ma(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.d(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.ma(a,b,c)
return"["+a+"]"}return P.ox(a,b,c)},
ox:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.mv(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ap("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ap("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.q,o)
o=(C.q[o]&1<<(q&15))!==0}else o=!1
if(o)P.dq(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ap("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mq(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ou:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.ms(C.b.H(a,b)))P.dq(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.t,r)
r=(C.t[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dq(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.oo(t?a.toLowerCase():a)},
oo:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ov:function(a,b,c){return P.dr(a,b,c,C.W,!1)},
os:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dr(a,b,c,C.B,!0):C.p.ln(d,new P.kh(),P.k).B(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ak(u,"/"))u="/"+u
return P.ow(u,e,f)},
ow:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ak(a,"/"))return P.oy(a,!u||c)
return P.oz(a)},
lc:function(a,b,c,d){var u,t={}
H.h(d,"$iD",[P.k,null],"$aD")
if(a!=null){if(d!=null)throw H.e(P.dw("Both query and queryParameters specified"))
return P.dr(a,b,c,C.r,!0)}if(d==null)return
u=new P.ap("")
t.a=""
d.P(0,new P.ki(new P.kj(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oq:function(a,b,c){return P.dr(a,b,c,C.r,!0)},
mv:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.kz(u)
r=H.kz(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.be(q,4)
if(p>=8)return H.f(C.u,p)
p=(C.u[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e4(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
mq:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.n])
C.a.m(t,0,37)
C.a.m(t,1,C.b.H(o,a>>>4))
C.a.m(t,2,C.b.H(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.n])
for(q=0;--r,r>=0;s=128){p=C.e.jo(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.b.H(o,p>>>4))
C.a.m(t,q+2,C.b.H(o,p&15))
q+=3}}return P.d1(t,0,null)},
dr:function(a,b,c,d,e){var u=P.mu(a,b,c,H.h(d,"$ib",[P.n],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
mu:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ib",[P.n],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.J()
if(typeof c!=="number")return H.d(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mv(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dq(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mq(q)}}if(r==null)r=new P.ap("")
r.a+=C.b.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.d(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.J()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mt:function(a){if(C.b.ak(a,"."))return!0
return C.b.eS(a,"/.")!==-1},
oz:function(a){var u,t,s,r,q,p,o
if(!P.mt(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a_(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.B(u,"/")},
oy:function(a,b){var u,t,s,r,q,p
if(!P.mt(a))return!b?P.mr(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gb_(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gb_(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.m(u,0,P.mr(u[0]))}return C.a.B(u,"/")},
mr:function(a){var u,t,s,r=a.length
if(r>=2&&P.ms(J.nh(a,0)))for(u=1;u<r;++u){t=C.b.H(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.b3(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.f(C.t,s)
s=(C.t[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
op:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.dw("Invalid URL encoding"))}}return u},
ld:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a8(C.b.A(a,b,c))}else{r=H.c([],[P.n])
for(s=a.length,q=b;q<c;++q){t=C.b.H(a,q)
if(t>127)throw H.e(P.dw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.dw("Truncated URI"))
C.a.h(r,P.op(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.h(r,"$ib",[P.n],"$ab")
return new P.jm(!1).cV(r)},
ms:function(a){var u=a|32
return 97<=u&&u<=122},
m8:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.n])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a7(m,a,t))}}if(s<0&&t>b)throw H.e(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gb_(l)
if(r!==44||t!==p+7||!C.b.al(a,"base64",p+1))throw H.e(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.kJ(0,a,o,u)
else{n=P.mu(a,o,u,C.r,!0)
if(n!=null)a=C.b.bk(a,o,u,n)}return new P.jf(a,l,c)},
oB:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.dS(22,new P.ko(),P.S),n=new P.kn(o),m=new P.kp(),l=new P.kq(),k=H.i(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.i(n.$2(8,8),"$iS"),"]",5)
k=H.i(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.i(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.i(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.i(n.$2(20,245),"$iS"),"az",21)
k=H.i(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mz:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ib",[P.n],"$ab")
u=$.ng()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
a4:function a4(){},
az:function az(a,b){this.a=a
this.b=b},
A:function A(){},
aM:function aM(a){this.a=a},
h4:function h4(){},
h5:function h5(){},
bL:function bL(){},
fE:function fE(){},
e_:function e_(){},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hl:function hl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
iz:function iz(a){this.a=a},
fT:function fT(a){this.a=a},
hZ:function hZ(){},
ec:function ec(){},
h_:function h_(a){this.a=a},
eD:function eD(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
j:function j(){},
b9:function b9(){},
b:function b(){},
D:function D(){},
P:function P(){},
ad:function ad(){},
U:function U(){},
aw:function aw(){},
k:function k(){},
ap:function ap(a){this.a=a},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(){},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(){},
kn:function kn(a){this.a=a},
kp:function kp(){},
kq:function kq(){},
k7:function k7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jJ:function jJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oQ:function(a){var u,t=J.T(a)
if(!!t.$ibp){u=t.gen(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
oP:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
bx:function(a){var u,t,s,r,q
if(a==null)return
u=P.lM(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r){q=H.N(t[r])
u.m(0,q,a[q])}return u},
oO:function(a){var u={}
a.P(0,new P.ku(u))
return u},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ok:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jX:function jX(){},
k1:function k1(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
hr:function hr(){},
bg:function bg(){},
hW:function hW(){},
i3:function i3(){},
iI:function iI(){},
r:function r(){},
bj:function bj(){},
j_:function j_(){},
eI:function eI(){},
eJ:function eJ(){},
eS:function eS(){},
eT:function eT(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
S:function S(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fJ:function fJ(){},
c1:function c1(){},
hX:function hX(){},
ew:function ew(){},
dy:function dy(){},
e5:function e5(){},
cl:function cl(){},
e9:function e9(){},
ee:function ee(){},
em:function em(){},
iy:function iy(){},
eZ:function eZ(){},
f_:function f_(){}},W={
nn:function(){var u=document.createElement("a")
return u},
kR:function(){var u=document.createElement("canvas")
return u},
nz:function(a){H.i(a,"$il")
return"wheel"},
jY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mn:function(a,b,c,d){var u=W.jY(W.jY(W.jY(W.jY(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ag:function(a,b,c,d,e){var u=W.mD(new W.jM(c),W.q)
if(u!=null&&!0)J.nj(a,b,u,!1)
return new W.jL(a,b,u,!1,[e])},
mD:function(a,b){var u
H.p(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.eh(a,b)},
t:function t(){},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
c2:function c2(){},
c3:function c3(){},
cF:function cF(){},
bI:function bI(){},
cH:function cH(){},
fW:function fW(){},
V:function V(){},
cI:function cI(){},
fX:function fX(){},
b7:function b7(){},
b8:function b8(){},
fY:function fY(){},
fZ:function fZ(){},
h0:function h0(){},
dE:function dE(){},
h1:function h1(){},
dF:function dF(){},
dG:function dG(){},
h2:function h2(){},
h3:function h3(){},
jH:function jH(a,b){this.a=a
this.b=b},
a6:function a6(){},
q:function q(){},
l:function l(){},
aE:function aE(){},
cJ:function cJ(){},
hc:function hc(){},
hg:function hg(){},
aN:function aN(){},
hk:function hk(){},
cc:function cc(){},
bp:function bp(){},
cM:function cM(){},
bc:function bc(){},
hv:function hv(){},
hJ:function hJ(){},
cR:function cR(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
aP:function aP(){},
hO:function hO(){},
aj:function aj(){},
jG:function jG(a){this.a=a},
K:function K(){},
cU:function cU(){},
aQ:function aQ(){},
i1:function i1(){},
ie:function ie(){},
ig:function ig(a){this.a=a},
ii:function ii(){},
aS:function aS(){},
iw:function iw(){},
aT:function aT(){},
ix:function ix(){},
aU:function aU(){},
iC:function iC(){},
iD:function iD(a){this.a=a},
aG:function aG(){},
aV:function aV(){},
aH:function aH(){},
iN:function iN(){},
iO:function iO(){},
iU:function iU(){},
aW:function aW(){},
aX:function aX(){},
iY:function iY(){},
iZ:function iZ(){},
bX:function bX(){},
jk:function jk(){},
jx:function jx(){},
bm:function bm(){},
de:function de(){},
jI:function jI(){},
ey:function ey(){},
jW:function jW(){},
eP:function eP(){},
k8:function k8(){},
kc:function kc(){},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
la:function la(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jL:function jL(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jM:function jM(a){this.a=a},
E:function E(){},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
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
dl:function dl(){},
dm:function dm(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
dn:function dn(){},
dp:function dp(){},
f7:function f7(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){}},L={
nM:function(a){var u,t,s,r,q,p,o,n=null,m=new Array(256)
m.fixed$length=Array
u=[P.n]
t=H.c(m,u)
m=new Array(256)
m.fixed$length=Array
s=H.c(m,u)
for(r=0;r<256;++r)C.a.m(s,r,r)
q=P.cy("6364136223846793005",n,n)
p=P.cy("1442695040888963407",n,n)
if(typeof q!=="number")return H.d(q)
if(typeof p!=="number")return H.d(p)
a=C.e.df(C.e.df(C.e.df(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){m=a*q+p
a=((m&-1)>>>0)-(m&0)
o=C.e.b2(a+31,r+1)
if(o>=256)return H.f(s,o)
C.a.m(t,r,s[o])
s[o]=s[r]}return new L.hY(t)},
hY:function hY(a){this.a=a}},B={
bh:function(a,b){return new B.aR(a,b)},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aR:function aR(a,b){this.a=a
this.b=b},
np:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
no:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
nr:function(a){var u=new B.c4(a)
u.fB(a)
return u},
mP:function(){var u,t=V.o3("3Dart Craft"),s=[P.k]
t.a2(H.c(["This example is in development and may still have a few issues and glitches."],s))
u=W.kR()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.cL(1,"About")
t.a2(H.c(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],s))
t.a2(H.c(["\xab[Back to Examples List|../../]"],s))
t.cL(1,"Controls")
t.a2(H.c(["\u2022 _Currently there are no controls for mobile browsers_"],s))
t.a2(H.c(["\u2022 *Esc* to release the mouse capture"],s))
t.a2(H.c(["\u2022 *W* or *Up arrow* to move forward"],s))
t.a2(H.c(["\u2022 *S* or *Down arrow* to move backward"],s))
t.a2(H.c(["\u2022 *A* or *Left arrow* to strife left"],s))
t.a2(H.c(["\u2022 *D* or *Right arror* to strife right"],s))
t.a2(H.c(["\u2022 *Space bar* to jump"],s))
t.a2(H.c(["\u2022 *Tab* cycles the block selected which can be placed"],s))
t.a2(H.c(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],s))
t.a2(H.c(["\u2022 *Left click* or *Q* removes the currently highlighted block"],s))
t.a2(H.c(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],s))
t.a2(H.c(["\u2022 *O* to return the starting location"],s))
t.cL(1,"Help wanted")
t.a2(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],s))
t.a2(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.l3(C.o,B.p1())},
p8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=document.getElementById("targetCanvas")
if(c6==null)H.w(P.y("Failed to find an element with the identifier, targetCanvas."))
u=E.o5(c6,!0,!0,!0,!1)
t=new B.hI(u)
s=P.n
t.sht(new H.aB([s,B.Z]))
t.shR(new H.aB([s,[P.b,P.n]]))
t.shS(H.c([],[O.cf]))
r=new V.aa(1,1,1)
q=V.e3()
p=V.l9()
o=new V.u(0.5,-1,0.2).p(0,q)
o=U.bJ(V.lQ(q,p,new V.I(o.a,o.b,o.c)))
p=new D.bK()
p.c=new V.aa(1,1,1)
p.a=V.l9()
n=p.b
p.b=o
o.gu().h(0,p.gib())
q=new D.L("mover",n,p.b,[U.ab])
q.b=!0
p.aQ(q)
if(!p.c.t(0,r)){n=p.c
p.c=r
q=new D.L("color",n,r,[V.aa])
q.b=!0
p.aQ(q)}t.e=p
m=t.K(t.G("boundary"),!1)
l=t.K(t.G("brick"),!1)
k=t.K(t.G("dirt"),!1)
j=t.K(t.G("dryLeavesSide"),!1)
i=t.K(t.G("dryLeavesTop"),!1)
h=t.K(t.G("leaves"),!1)
g=t.K(t.G("rock"),!1)
f=t.K(t.G("sand"),!1)
e=t.K(t.G("trunkEnd"),!1)
d=t.K(t.G("trunkSide"),!1)
c=t.K(t.G("trunkTilted"),!1)
b=t.K(t.G("turfSide"),!1)
a=t.K(t.G("turfTop"),!1)
a0=t.K(t.G("woodEnd"),!1)
a1=t.K(t.G("woodSide"),!1)
a2=t.K(t.G("woodTilted"),!1)
a3=t.K(t.G("blackShine"),!0)
a4=t.K(t.G("redShine"),!0)
a5=t.K(t.G("yellowShine"),!0)
a6=t.K(t.G("whiteShine"),!0)
a7=t.K(t.G("mushroomBottom"),!1)
a8=t.K(t.G("mushroomSide"),!1)
a9=t.K(t.G("mushroomTop"),!1)
b0=t.K(t.G("grass"),!1)
b1=t.K(t.G("fern"),!1)
b2=t.K(t.G("blueFlowers"),!1)
b3=t.K(t.G("redFlowers"),!1)
b4=t.K(t.G("whiteFlowers"),!1)
q=T.bW
p=P.kZ([t.G("water1"),t.G("water2"),t.G("water3")],!0,q)
o=new T.iP()
b5=o.b=o.a=0
o.sjv(H.h(p,"$ib",[q],"$ab"))
o.f=null
t.x=o
b6=t.K(o,!0)
t.b.m(0,100,new B.Z(m,m,m,m,m,m))
t.b.m(0,101,new B.Z(k,k,k,k,k,k))
t.b.m(0,102,new B.Z(a,k,b,b,b,b))
t.b.m(0,103,new B.Z(g,g,g,g,g,g))
t.b.m(0,104,new B.Z(f,f,f,f,f,f))
t.b.m(0,105,new B.Z(i,k,j,j,j,j))
t.b.m(0,106,new B.Z(e,e,d,d,d,d))
t.b.m(0,107,new B.Z(d,d,c,c,e,e))
t.b.m(0,108,new B.Z(c,c,e,e,c,c))
t.b.m(0,109,new B.Z(l,l,l,l,l,l))
t.b.m(0,110,new B.Z(a4,a4,a4,a4,a4,a4))
t.b.m(0,111,new B.Z(a6,a6,a6,a6,a6,a6))
t.b.m(0,112,new B.Z(a5,a5,a5,a5,a5,a5))
t.b.m(0,113,new B.Z(a3,a3,a3,a3,a3,a3))
t.b.m(0,114,new B.Z(h,h,h,h,h,h))
t.b.m(0,115,new B.Z(a0,a0,a1,a1,a1,a1))
t.b.m(0,116,new B.Z(a1,a1,a2,a2,a0,a0))
t.b.m(0,117,new B.Z(a2,a2,a0,a0,a2,a2))
t.b.m(0,1,new B.Z(b6,b6,b6,b6,b6,b6))
s=[s]
q=H.h(H.c([b0],s),"$ib",s,"$ab")
t.c.m(0,200,q)
q=H.h(H.c([b1],s),"$ib",s,"$ab")
t.c.m(0,201,q)
q=H.h(H.c([b4],s),"$ib",s,"$ab")
t.c.m(0,202,q)
q=H.h(H.c([b2],s),"$ib",s,"$ab")
t.c.m(0,203,q)
q=H.h(H.c([b3],s),"$ib",s,"$ab")
t.c.m(0,204,q)
s=H.h(H.c([a9,a7,a8],s),"$ib",s,"$ab")
t.c.m(0,205,s)
t.f=t.dA("selection")
t.r=t.dA("crosshair")
b7=B.oe(t,B.oD())
b8=B.nN(u.r,b7)
b9=new M.dH()
b9.shn(0,O.kS(E.a1))
b9.d.bF(b9.gie(),b9.gih())
b9.x=b9.r=b9.f=b9.e=null
c0=X.nB(new V.b6(0.576,0.784,0.929,1))
c1=new X.e0()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.seV(null)
s=c1.c
if(!(Math.abs(s-1.0471975511965976)<$.B().a)){c1.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,[P.A])
s.b=!0
c1.b7(s)}s=c1.d
if(!(Math.abs(s-0.1)<$.B().a)){c1.d=0.1
s=new D.L("near",s,0.1,[P.A])
s.b=!0
c1.b7(s)}s=c1.e
if(!(Math.abs(s-2000)<$.B().a)){c1.e=2000
s=new D.L("far",s,2000,[P.A])
s.b=!0
c1.b7(s)}s=b9.a
if(s!==c1){if(s!=null)s.gu().W(0,b9.gb5())
n=b9.a
b9.a=c1
c1.gu().h(0,b9.gb5())
s=new D.L("camera",n,b9.a,[X.dA])
s.b=!0
b9.b6(s)}s=b9.b
if(s!==c0){if(s!=null)s.gu().W(0,b9.gb5())
n=b9.b
b9.b=c0
c0.gu().h(0,b9.gb5())
s=new D.L("target",n,b9.b,[X.ed])
s.b=!0
b9.b6(s)}s=b9.e
if(s==null)s=b9.e=D.O()
s.h(0,b7.gle(b7))
b9.a.seV(b8.x)
for(s=b7.e,q=s.length;b5<s.length;s.length===q||(0,H.J)(s),++b5){c2=s[b5]
p=b9.d
o=H.v(p,0)
H.C(c2,o)
c3=[o]
if(H.F(p.bo(H.c([c2],c3)))){c4=p.a
c5=c4.length
C.a.h(c4,c2)
o=H.h(H.c([c2],c3),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(c5,o)}}b9.d.h(0,b8.db)
b7.f=b8
s=u.d
if(s!==b9){if(s!=null)s.gu().W(0,u.gdq())
u.d=b9
b9.gu().h(0,u.gdq())
u.dr()}b8.dk()
P.iV(C.S,b7.glh())
P.iV(C.R,b7.gfm())
P.iV(C.P,b7.gkj())
P.iV(C.Q,new B.kG(u,b7))},
oD:function(){var u,t,s,r,q=null,p=P.m9().gfa().k(0,"seed")
if(p!=null){if(p==="test")return new B.iK()
if(p==="checkers"){u=new B.fQ()
u.a=!0
u.b=10
return u}t=H.lZ(p,q)
if(t==null)t=-1}else t=-1
if(t<=0){t=C.O.kI(4294967296)
s=P.m9().fb(0,P.nG(["seed",""+t],P.k,q))
u=window.history
r=s.i(0)
u.toString
u.pushState(new P.ka([],[]).dh(q),q,r)}u=new B.i4()
u.a=L.nM(t)
u.b=new Uint8Array(484)
return u},
nN:function(a,b){var u=new B.e1(b)
u.fD(a,b)
return u},
l2:function(a,b){var u,t,s=new B.io(a,b)
if(b==null){u=$.ae()
t=$.ai()
s.b=new Z.ac(u.a|t.a|$.aq().a)}u=a==null?null:a.d
u=u==null?null:u.length
if(u==null)u=1
u=new Array(u)
u.fixed$length=Array
s.se8(H.c(u,[F.cX]))
return s},
oe:function(a,b){var u=new B.eu(a,b)
u.fI(a,b)
return u},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fQ:function fQ(){this.b=this.a=null},
c4:function c4(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fR:function fR(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kG:function kG(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
i0:function i0(a){this.a=a},
i4:function i4(){this.c=this.b=this.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b
this.c=null},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
iK:function iK(){this.a=null},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},O={
kS:function(a){var u=new O.a0([a])
u.bG(a)
return u},
a0:function a0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cQ:function cQ(){this.b=this.a=null},
lN:function(){var u,t,s=new O.cf()
s.shh(O.kS(V.as))
s.e.bF(s.gi1(),s.gi3())
u=new O.be(s,"emission")
u.c=C.d
u.f=new V.aa(0,0,0)
s.f=u
u=new O.be(s,"ambient")
u.c=C.d
u.f=new V.aa(0,0,0)
s.r=u
u=new O.be(s,"diffuse")
u.c=C.d
u.f=new V.aa(0,0,0)
s.x=u
u=new O.be(s,"invDiffuse")
u.c=C.d
u.f=new V.aa(0,0,0)
s.y=u
u=new O.hH(s,"specular")
u.c=C.d
u.f=new V.aa(0,0,0)
u.ch=100
s.z=u
u=new O.hE(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.be(s,"reflect")
u.c=C.d
u.f=new V.aa(0,0,0)
s.cx=u
u=new O.hG(s,"refract")
u.c=C.d
u.f=new V.aa(0,0,0)
u.ch=1
s.cy=u
u=new O.hD(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dP()
u.bG(D.a9)
u.sfQ(H.c([],[D.bK]))
u.sfR(H.c([],[D.e2]))
u.sfS(H.c([],[D.eb]))
u.sfT(H.c([],[D.ef]))
u.sfU(H.c([],[D.eg]))
u.sfV(H.c([],[D.eh]))
u.ch=u.Q=null
u.cf(u.gi_(),u.giK(),u.giO())
s.dx=u
t=u.Q
u=t==null?u.Q=D.O():t
u.h(0,s.gjc())
u=s.dx
t=u.ch
u=t==null?u.ch=D.O():t
u.h(0,s.gbH())
s.dy=null
return s},
cf:function cf(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cP:function cP(){},
hE:function hE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
be:function be(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hG:function hG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cm:function cm(){}},E={
c9:function(a,b,c,d){var u,t,s,r,q,p=new E.a1()
p.a=""
p.b=!0
p.sfJ(0,O.kS(E.a1))
p.y.bF(p.gkK(),p.gkN())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
u=p.c
if(u!=c){p.d=p.c=c
p.e=null
if(u!=null)u.gu().W(0,p.gc9())
t=p.c
if(t!=null)t.gu().h(0,p.gc9())
s=new D.L("shape",u,p.c,[F.ea])
s.b=!0
p.as(s)}u=p.f
if(u!=d){if(u!=null)u.gu().W(0,p.gf2())
r=p.f
p.f=d
if(d!=null)d.gu().h(0,p.gf2())
p.dF()
s=new D.L("technique",r,p.f,[O.cm])
s.b=!0
p.as(s)}if(!J.a_(p.r,b)){q=p.r
if(q!=null)q.gu().W(0,p.gf_())
if(b!=null)b.gu().h(0,p.gf_())
p.r=b
s=new D.L("mover",q,b,[U.ab])
s.b=!0
p.as(s)}if(a!=null)p.y.aS(0,a)
return p},
o1:function(a,b){var u=new E.ia(a)
u.fE(a,b)
return u},
o5:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic3)return E.m5(a,!0,!0,!0,!1)
u=W.kR()
t=u.style
t.width="100%"
t.height="100%"
s.gek(a).h(0,u)
return E.m5(u,!0,!0,!0,!1)},
m5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.i(C.n.dj(a,"webgl2",P.nH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icl")
if(j==null)H.w(P.y("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o1(j,a)
u=new T.iR(j)
u.b=H.ah(j.getParameter(3379))
H.ah(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.hq()
t.sj3(P.nI(P.n))
u.b=t
t=new X.hP(u)
t.f=0
t.r=V.bw()
t.x=V.bw()
t.ch=t.Q=1
u.c=t
t=new X.hw(u)
t.r=0
t.x=V.bw()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iX(u)
t.f=V.bw()
t.r=V.bw()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.shy(H.c([],[[P.d0,P.U]]))
t=u.z
s=document
r=W.aj
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ag(s,"contextmenu",H.p(u.gil(),q),!1,r))
t=u.z
p=W.q
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ag(a,"focus",H.p(u.gis(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ag(a,"blur",H.p(u.gi9(),o),!1,p))
t=u.z
n=W.bc
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ag(s,"keyup",H.p(u.gcA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ag(s,"keydown",H.p(u.gci(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ag(a,"mousedown",H.p(u.giA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ag(a,"mouseup",H.p(u.giE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ag(a,l,H.p(u.giC(),q),!1,r))
n=u.z
m=W.bm;(n&&C.a).h(n,W.ag(a,H.N(W.nz(a)),H.p(u.giG(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ag(s,l,H.p(u.gio(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ag(s,"mouseup",H.p(u.giq(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ag(s,"pointerlockchange",H.p(u.giI(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ag(a,"touchstart",H.p(u.giW(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ag(a,"touchend",H.p(u.giS(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ag(a,"touchmove",H.p(u.giU(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.e6()
return k},
fM:function fM(){},
a1:function a1(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
iA:function iA(){this.b=null},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iT:function iT(a){this.a=a}},Z={
ml:function(a,b,c){var u
H.h(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Float32Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
et:function(a,b,c){var u
H.h(c,"$ib",[P.n],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
aZ:function(a){return new Z.ac(a)},
es:function es(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jy:function jy(a){this.a=a},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a){this.a=a}},D={
O:function(){var u=new D.ca()
u.sau(null)
u.sbp(null)
u.c=null
u.d=0
return u},
fP:function fP(){},
ca:function ca(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
x:function x(){this.b=null},
bM:function bM(a){this.b=null
this.$ti=a},
bN:function bN(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bK:function bK(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dP:function dP(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e2:function e2(){},
eb:function eb(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},X={
bb:function(){var u=new X.dO()
u.bG(X.al)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.cf(u.gfK(),u.gfM(),u.gfO())
return u},
dz:function dz(a,b){this.a=a
this.b=b},
al:function al(a,b){this.a=a
this.b=b},
bq:function bq(a){this.c=a
this.b=null},
dO:function dO(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hq:function hq(){this.d=this.b=this.a=null},
dT:function dT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hw:function hw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i2:function i2(){},
ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
iX:function iX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nB:function(a){var u,t=new X.hi()
if(a==null)u=new V.b6(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=$.m2
if(u==null){u=V.l1(0,0,1,1)
$.m2=u}t.r=u
return t},
dA:function dA(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){}},V={
aA:function(a){return new V.a5(a)},
kI:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b2(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.b.b0("null",c)
return C.b.b0(C.j.fg(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
cv:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ib",[P.A],"$ab")
u=H.c([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.J)(a),++r){q=V.G(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.m(u,p,C.b.b0(u[p],s))}return u},
lp:function(a){return C.j.az(Math.pow(2,C.m.c7(Math.log(H.ct(a))/Math.log(2))))},
lO:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.aF(u,0,-t,0,1,0,t,0,u)},
cg:function(){var u=$.lT
return u==null?$.lT=V.bf(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bf:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dV:function(a,b,c){return V.bf(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l0:function(a,b,c,d){return V.bf(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lR:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bf(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lS:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bf(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lQ:function(a,b,c){var u=c.w(0,Math.sqrt(c.E(c))),t=b.bu(u),s=t.w(0,Math.sqrt(t.E(t))),r=u.bu(s),q=new V.I(a.a,a.b,a.c),p=s.N(0).E(q),o=r.N(0).E(q),n=u.N(0).E(q)
return V.bf(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bw:function(){var u=$.lX
return u==null?$.lX=new V.W(0,0):u},
e3:function(){var u=$.cV
return u==null?$.cV=new V.u(0,0,0):u},
bR:function(a,b,c){return new V.u(a,b,c)},
m1:function(a,b){return new V.e6(a.a,a.b,a.c,b.a,b.b,b.c)},
l1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)},
i9:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.l()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.l()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.l()
c+=f
f=-f}return new V.bV(a,b,c,d,e,f)},
dd:function(){var u=$.mi
return u==null?$.mi=new V.I(0,0,0):u},
mk:function(){var u=$.mh
return u==null?$.mh=new V.I(0,1,0):u},
l9:function(){var u=$.jo
return u==null?$.jo=new V.I(0,0,1):u},
mj:function(){var u=$.mf
return u==null?$.mf=new V.I(0,0,-1):u},
l8:function(a,b,c){return new V.I(a,b,c)},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
a5:function a5(a){this.a=a},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function(a){var u=new V.ij()
u.fF(a)
return u},
fB:function fB(){},
br:function br(){},
dU:function dU(){},
bv:function bv(){this.a=null},
ij:function ij(){this.a=null},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a){this.b=a
this.c=null},
iW:function iW(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null},
o3:function(a){var u=new V.it()
u.fH(a,!0)
return u},
it:function it(){this.b=this.a=null},
iv:function iv(a){this.a=a},
iu:function iu(a){this.a=a}},U={
dB:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bJ:function(a){var u=new U.dC()
u.a=a
return u},
hj:function(a){var u=new U.cL()
u.bG(U.ab)
u.bF(u.gfW(),u.giM())
u.aS(0,a)
u.e=null
u.f=V.cg()
u.r=0
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cL:function cL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=null},
ab:function ab(){},
e8:function e8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dH:function dH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nK:function(a,b){var u=a.ax,t=new A.hC(b,u)
t.fG(b,u)
t.fC(a,b)
return t},
l5:function(a,b,c,d,e){var u=new A.j3(a,c,e)
u.f=d
u.sjQ(P.nJ(d,0,P.n))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
hC:function hC(a,b){var _=this
_.bT=_.ep=_.bS=_.ax=_.aH=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eG=_.cX=_.eF=_.c5=_.eE=_.eD=_.c4=_.c3=_.eC=_.eB=_.c2=_.c1=_.c0=_.eA=_.ez=_.c_=_.ey=_.ex=_.bZ=_.ew=_.ev=_.bY=_.bX=_.eu=_.es=_.bW=_.bV=_.er=_.eq=_.bU=null
_.d1=_.eK=_.d0=_.eJ=_.d_=_.eI=_.cZ=_.eH=_.cY=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hF:function hF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aH=b3
_.ax=b4
_.bS=b5},
d5:function d5(a,b){this.b=a
this.c=b},
d9:function d9(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d7:function d7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
da:function da(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d8:function d8(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
db:function db(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cY:function cY(){},
c6:function c6(a,b){this.a=a
this.b=b},
el:function el(){},
j9:function j9(a){this.a=a},
R:function R(a,b,c){this.a=a
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
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
au:function au(a,b,c){this.a=a
this.c=b
this.d=c}},F={
co:function(a,b,c,d,e,f,g,h,i){var u,t,s=null,r=new F.bl()
new F.ju().sbq(H.c([],[F.ci]))
u=new F.jt()
t=[F.bP]
u.shK(H.c([],t))
u.shL(H.c([],t))
r.c=u
u=new F.jq()
t=[F.af]
u.shz(H.c([],t))
u.shA(H.c([],t))
u.shB(H.c([],t))
r.d=u
r.e=0
u=h.a
r.f=(u&$.ae().a)!==0?d:s
r.r=(u&$.aq().a)!==0?e:s
r.x=(u&$.bF().a)!==0?b:s
r.y=(u&$.ai().a)!==0?f:s
r.z=(u&$.bG().a)!==0?g:s
r.Q=(u&$.nc().a)!==0?c:s
r.ch=(u&$.cB().a)!==0?i:0
r.cx=(u&$.bE().a)!==0?a:s
return r},
af:function af(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){},
ci:function ci(){},
cX:function cX(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ea:function ea(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
im:function im(){this.b=null},
bl:function bl(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
jw:function jw(a){this.a=a},
jv:function jv(a){this.a=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
jq:function jq(){this.d=this.c=this.b=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){this.c=this.b=null},
ju:function ju(){this.b=null}},T={d2:function d2(){},bW:function bW(){},iP:function iP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},iQ:function iQ(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iR:function iR(a){var _=this
_.a=a
_.e=_.d=_.b=null},iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kX.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.ck(a)+"'"}}
J.hn.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia4:1}
J.dM.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dN.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.cn.prototype={}
J.bO.prototype={
i:function(a){var u=a[$.mX()]
if(u==null)return this.fw(a)
return"JavaScript function for "+H.m(J.b3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikT:1}
J.ba.prototype={
h:function(a,b){H.C(b,H.v(a,0))
if(!!a.fixed$length)H.w(P.H("add"))
a.push(b)},
W:function(a,b){var u
if(!!a.fixed$length)H.w(P.H("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
aS:function(a,b){var u,t
H.h(b,"$ij",[H.v(a,0)],"$aj")
if(!!a.fixed$length)H.w(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.J)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.c7(a))}},
B:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.m(a[u]))
return t.join(b)},
kF:function(a){return this.B(a,"")},
kA:function(a,b,c,d){var u,t,s
H.C(b,d)
H.p(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.c7(a))}return t},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fu:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ak(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gb_:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.nD())},
ap:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.kU(a,"[","]")},
ga1:function(a){return new J.av(a,a.length,[H.v(a,0)])},
gI:function(a){return H.cW(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.w(P.H("set length"))
if(b<0)throw H.e(P.ak(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.by(a,b))
if(b>=a.length||b<0)throw H.e(H.by(a,b))
return a[b]},
m:function(a,b,c){H.C(c,H.v(a,0))
if(!!a.immutable$list)H.w(P.H("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.by(a,b))
if(b>=a.length||b<0)throw H.e(H.by(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.kW.prototype={}
J.av.prototype={
gO:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.J(s))
u=t.c
if(u>=r){t.sdR(null)
return!1}t.sdR(s[u]);++t.c
return!0},
sdR:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
J.cO.prototype={
cU:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.e.gc8(b)
if(this.gc8(a)===u)return 0
if(this.gc8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc8:function(a){return a===0?1/a<0:a<0},
az:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.H(""+a+".toInt()"))},
c7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.H(""+a+".floor()"))},
ay:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.H(""+a+".round()"))},
kn:function(a,b,c){if(C.e.cU(b,c)>0)throw H.e(H.aK(b))
if(this.cU(a,b)<0)return b
if(this.cU(a,c)>0)return c
return a},
fg:function(a,b){var u
if(b>20)throw H.e(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gc8(a))return"-"+u
return u},
bB:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ak(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.w(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.j("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b2:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fA:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ea(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.ea(a,b)},
ea:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.H("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
ft:function(a,b){if(b<0)throw H.e(H.aK(b))
return b>31?0:a<<b>>>0},
be:function(a,b){var u
if(a>0)u=this.e9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jo:function(a,b){if(b<0)throw H.e(H.aK(b))
return this.e9(a,b)},
e9:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iad:1}
J.dL.prototype={
df:function(a,b){var u=this.ft(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$in:1}
J.dK.prototype={}
J.ce.prototype={
a0:function(a,b){if(b<0)throw H.e(H.by(a,b))
if(b>=a.length)H.w(H.by(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.e(H.by(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.e(P.kP(b,null,null))
return a+b},
bk:function(a,b,c,d){var u,t
c=P.bU(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ak(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.al(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.w(H.aK(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.J()
if(b<0)throw H.e(P.i8(b,null))
if(b>c)throw H.e(P.i8(b,null))
if(c>a.length)throw H.e(P.i8(c,null))
return a.substring(b,c)},
b3:function(a,b){return this.A(a,b,null)},
j:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
b0:function(a,b){var u=b-a.length
if(u<=0)return a
return this.j(" ",u)+a},
eT:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ak(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eS:function(a,b){return this.eT(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ilV:1,
$ik:1}
H.a8.prototype={
gn:function(a){return this.a.length},
k:function(a,b){return C.b.a0(this.a,b)},
$adc:function(){return[P.n]},
$az:function(){return[P.n]},
$aj:function(){return[P.n]},
$ab:function(){return[P.n]}}
H.h6.prototype={}
H.dR.prototype={
gO:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.bz(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.c7(s))
u=t.c
if(u>=q){t.sbn(null)
return!1}t.sbn(r.L(s,u));++t.c
return!0},
sbn:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.hA.prototype={
ga1:function(a){return new H.hB(J.c0(this.a),this.b,this.$ti)},
gn:function(a){return J.aL(this.a)},
L:function(a,b){return this.b.$1(J.kM(this.a,b))},
$aj:function(a,b){return[b]}}
H.hB.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.sbn(u.c.$1(t.gO(t)))
return!0}u.sbn(null)
return!1},
gO:function(a){return this.a},
sbn:function(a){this.a=H.C(a,H.v(this,1))},
$ab9:function(a,b){return[b]}}
H.jz.prototype={
ga1:function(a){return new H.jA(J.c0(this.a),this.b,this.$ti)}}
H.jA.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.F(t.$1(u.gO(u))))return!0
return!1},
gO:function(a){var u=this.a
return u.gO(u)}}
H.cb.prototype={}
H.dc.prototype={
m:function(a,b,c){H.C(c,H.aD(this,"dc",0))
throw H.e(P.H("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fU.prototype={
i:function(a){return P.l_(this)},
m:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
return H.nw()},
$iD:1}
H.fV.prototype={
gn:function(a){return this.a},
bR:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bR(0,b))return
return this.dS(b)},
dS:function(a){return this.b[H.N(a)]},
P:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.p(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.dS(r),p))}}}
H.j0.prototype={
ar:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hV.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hp.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kH.prototype={
$1:function(a){if(!!J.T(a).$ibL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.f0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cG.prototype={
i:function(a){return"Closure '"+H.ck(this).trim()+"'"},
$ikT:1,
glj:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iB.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cA(u)+"'"}}
H.cC.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cC))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cW(this.a)
else u=typeof t!=="object"?J.c_(t):H.cW(t)
return(u^H.cW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.ck(u)+"'")}}
H.j2.prototype={
i:function(a){return this.a}}
H.fO.prototype={
i:function(a){return this.a}}
H.ih.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jB.prototype={
i:function(a){return"Assertion failed: "+P.dI(this.a)}}
H.aB.prototype={
gn:function(a){return this.a},
gaZ:function(a){return new H.dQ(this,[H.v(this,0)])},
bR:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dO(t,b)}else return s.kD(b)},
kD:function(a){var u=this.d
if(u==null)return!1
return this.d5(this.cs(u,J.c_(a)&0x3ffffff),a)>=0},
k:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bJ(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bJ(r,b)
s=t==null?null:t.b
return s}else return q.kE(b)},
kE:function(a){var u,t,s=this.d
if(s==null)return
u=this.cs(s,J.c_(a)&0x3ffffff)
t=this.d5(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.C(b,H.v(o,0))
H.C(c,H.v(o,1))
if(typeof b==="string"){u=o.b
o.dB(u==null?o.b=o.cw():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.dB(t==null?o.c=o.cw():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.cw()
r=J.c_(b)&0x3ffffff
q=o.cs(s,r)
if(q==null)o.cG(s,r,[o.cz(b,c)])
else{p=o.d5(q,b)
if(p>=0)q[p].b=c
else q.push(o.cz(b,c))}}},
P:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.c7(s))
u=u.c}},
dB:function(a,b,c){var u,t=this
H.C(b,H.v(t,0))
H.C(c,H.v(t,1))
u=t.bJ(a,b)
if(u==null)t.cG(a,b,t.cz(b,c))
else u.b=c},
cz:function(a,b){var u=this,t=new H.hs(H.C(a,H.v(u,0)),H.C(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.l_(this)},
bJ:function(a,b){return a[b]},
cs:function(a,b){return a[b]},
cG:function(a,b,c){a[b]=c},
hv:function(a,b){delete a[b]},
dO:function(a,b){return this.bJ(a,b)!=null},
cw:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cG(t,u,t)
this.hv(t,u)
return t},
$ilL:1}
H.hs.prototype={}
H.dQ.prototype={
gn:function(a){return this.a.a},
ga1:function(a){var u=this.a,t=new H.ht(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ht.prototype={
gO:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.c7(t))
else{t=u.c
if(t==null){u.sdv(null)
return!1}else{u.sdv(t.a)
u.c=u.c.c
return!0}}},
sdv:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.kC.prototype={
$1:function(a){return this.a(H.N(a))},
$S:34}
H.ho.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilV:1,
$io_:1}
H.cS.prototype={$icS:1}
H.bQ.prototype={$ibQ:1,$io6:1}
H.dW.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cT.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
m:function(a,b,c){H.oS(c)
H.bo(b,a,a.length)
a[b]=c},
$acb:function(){return[P.A]},
$az:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dX.prototype={
m:function(a,b,c){H.ah(c)
H.bo(b,a,a.length)
a[b]=c},
$acb:function(){return[P.n]},
$az:function(){return[P.n]},
$ij:1,
$aj:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
H.hQ.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hR.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hS.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hT.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hU.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.dY.prototype={
gn:function(a){return a.length},
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
$iq_:1}
H.ch.prototype={
gn:function(a){return a.length},
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
$ich:1,
$iS:1}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
P.jD.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jC.prototype={
$1:function(a){var u,t
this.a.a=H.p(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.jE.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f6.prototype={
fZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cu(new P.ke(this,b),0),a)
else throw H.e(P.H("`setTimeout()` not found."))},
h_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cu(new P.kd(this,a,Date.now(),b),0),a)
else throw H.e(P.H("Periodic timer."))},
$ibi:1}
P.ke.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kd.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.fA(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bn.prototype={
kH:function(a){if(this.c!==6)return!0
return this.b.b.de(H.p(this.d,{func:1,ret:P.a4,args:[P.U]}),a.a,P.a4,P.U)},
kC:function(a){var u=this.e,t=P.U,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fo(u,{func:1,args:[P.U,P.aw]}))return H.ll(r.l4(u,a.a,a.b,null,t,P.aw),s)
else return H.ll(r.de(H.p(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aI.prototype={
ff:function(a,b,c){var u,t,s,r=H.v(this,0)
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.k){u.toString
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oG(b,u)}H.p(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aI($.Y,[c])
s=b==null?1:3
this.dC(new P.bn(t,s,a,b,[r,c]))
return t},
l8:function(a,b){return this.ff(a,null,b)},
dC:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.i(t.c,"$ibn")
t.c=a}else{if(s===2){u=H.i(t.c,"$iaI")
s=u.a
if(s<4){u.dC(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kt(null,null,s,H.p(new P.jN(t,a),{func:1,ret:-1}))}},
e4:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.i(p.c,"$ibn")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.i(p.c,"$iaI")
u=q.a
if(u<4){q.e4(a)
return}p.a=u
p.c=q.c}o.a=p.bM(a)
u=p.b
u.toString
P.kt(null,null,u,H.p(new P.jR(o,p),{func:1,ret:-1}))}},
cE:function(){var u=H.i(this.c,"$ibn")
this.c=null
return this.bM(u)},
bM:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dK:function(a){var u,t,s=this,r=H.v(s,0)
H.ll(a,{futureOr:1,type:r})
u=s.$ti
if(H.li(a,"$icK",u,"$acK"))if(H.li(a,"$iaI",u,null))P.mm(a,s)
else P.oj(a,s)
else{t=s.cE()
H.C(a,r)
s.a=4
s.c=a
P.df(s,t)}},
dL:function(a,b){var u,t=this
H.i(b,"$iaw")
u=t.cE()
t.a=8
t.c=new P.ar(a,b)
P.df(t,u)},
$icK:1}
P.jN.prototype={
$0:function(){P.df(this.a,this.b)},
$S:2}
P.jR.prototype={
$0:function(){P.df(this.b,this.a.a)},
$S:2}
P.jO.prototype={
$1:function(a){var u=this.a
u.a=0
u.dK(a)},
$S:18}
P.jP.prototype={
$2:function(a,b){H.i(b,"$iaw")
this.a.dL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.jQ.prototype={
$0:function(){this.a.dL(this.b,this.c)},
$S:2}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.fe(H.p(s.d,{func:1}),null)}catch(r){u=H.b_(r)
t=H.cx(r)
if(o.d){s=H.i(o.a.a.c,"$iar").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.i(o.a.a.c,"$iar")
else q.b=new P.ar(u,t)
q.a=!0
return}if(!!J.T(n).$icK){if(n instanceof P.aI&&n.a>=4){if(n.a===8){s=o.b
s.b=H.i(n.c,"$iar")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.l8(new P.jV(p),null)
s.a=!1}},
$S:3}
P.jV.prototype={
$1:function(a){return this.a},
$S:49}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.C(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.de(H.p(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.b_(o)
t=H.cx(o)
s=n.a
s.b=new P.ar(u,t)
s.a=!0}},
$S:3}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.i(m.a.a.c,"$iar")
r=m.c
if(H.F(r.kH(u))&&r.e!=null){q=m.b
q.b=r.kC(u)
q.a=!1}}catch(p){t=H.b_(p)
s=H.cx(p)
r=H.i(m.a.a.c,"$iar")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ar(t,s)
n.a=!0}},
$S:3}
P.ev.prototype={}
P.iE.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aI($.Y,[P.n])
r.a=0
u=H.v(s,0)
t=H.p(new P.iG(r,s),{func:1,ret:-1,args:[u]})
H.p(new P.iH(r,q),{func:1,ret:-1})
W.ag(s.a,s.b,t,!1,u)
return q}}
P.iG.prototype={
$1:function(a){H.C(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.v(this.b,0)]}}}
P.iH.prototype={
$0:function(){this.b.dK(this.a.a)},
$S:2}
P.d0.prototype={}
P.iF.prototype={}
P.bi.prototype={}
P.ar.prototype={
i:function(a){return H.m(this.a)},
$ibL:1}
P.km.prototype={$iqc:1}
P.ks.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e_():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:2}
P.k2.prototype={
l5:function(a){var u,t,s,r=null
H.p(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.mx(r,r,this,a,-1)}catch(s){u=H.b_(s)
t=H.cx(s)
P.kr(r,r,this,u,H.i(t,"$iaw"))}},
l6:function(a,b,c){var u,t,s,r=null
H.p(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.my(r,r,this,a,b,-1,c)}catch(s){u=H.b_(s)
t=H.cx(s)
P.kr(r,r,this,u,H.i(t,"$iaw"))}},
kl:function(a,b){return new P.k4(this,H.p(a,{func:1,ret:b}),b)},
cQ:function(a){return new P.k3(this,H.p(a,{func:1,ret:-1}))},
eh:function(a,b){return new P.k5(this,H.p(a,{func:1,ret:-1,args:[b]}),b)},
fe:function(a,b){H.p(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.mx(null,null,this,a,b)},
de:function(a,b,c,d){H.p(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.Y===C.k)return a.$1(b)
return P.my(null,null,this,a,b,c,d)},
l4:function(a,b,c,d,e,f){H.p(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.oH(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.fe(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.l5(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.l6(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k_.prototype={
ga1:function(a){return P.mo(this,this.r,H.v(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.C(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dH(u==null?s.b=P.lb():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dH(t==null?s.c=P.lb():t,b)}else return s.h1(0,b)},
h1:function(a,b){var u,t,s,r=this
H.C(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.lb()
t=r.dM(b)
s=u[t]
if(s==null)u[t]=[r.cm(b)]
else{if(r.dT(s,b)>=0)return!1
s.push(r.cm(b))}return!0},
W:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.j8(this.c,b)
else return this.j7(0,b)},
j7:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.hE(r,b)
t=s.dT(u,b)
if(t<0)return!1
s.eb(u.splice(t,1)[0])
return!0},
dH:function(a,b){H.C(b,H.v(this,0))
if(H.i(a[b],"$idg")!=null)return!1
a[b]=this.cm(b)
return!0},
j8:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$idg")
if(u==null)return!1
this.eb(u)
delete a[b]
return!0},
dY:function(){this.r=1073741823&this.r+1},
cm:function(a){var u,t=this,s=new P.dg(H.C(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dY()
return s},
eb:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dY()},
dM:function(a){return J.c_(a)&1073741823},
hE:function(a,b){return a[this.dM(b)]},
dT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.dg.prototype={}
P.k0.prototype={
gO:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.c7(t))
else{t=u.c
if(t==null){u.sdI(null)
return!1}else{u.sdI(H.C(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sdI:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
P.hu.prototype={$ij:1,$ib:1}
P.z.prototype={
ga1:function(a){return new H.dR(a,this.gn(a),[H.cw(this,a,"z",0)])},
L:function(a,b){return this.k(a,b)},
la:function(a,b){var u,t=this,s=H.c([],[H.cw(t,a,"z",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.m(s,u,t.k(a,u))
return s},
l9:function(a){return this.la(a,!0)},
eL:function(a,b,c,d){var u
H.C(d,H.cw(this,a,"z",0))
P.bU(b,c,this.gn(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kU(a,"[","]")}}
P.hx.prototype={}
P.hy.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:11}
P.am.prototype={
P:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[H.cw(s,a,"am",0),H.cw(s,a,"am",1)]})
for(u=J.c0(s.gaZ(a));u.C();){t=u.gO(u)
b.$2(t,s.k(a,t))}},
gn:function(a){return J.aL(this.gaZ(a))},
i:function(a){return P.l_(a)},
$iD:1}
P.kf.prototype={
m:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
throw H.e(P.H("Cannot modify unmodifiable map"))}}
P.hz.prototype={
k:function(a,b){return J.lB(this.a,b)},
m:function(a,b,c){J.kL(this.a,H.C(b,H.v(this,0)),H.C(c,H.v(this,1)))},
P:function(a,b){J.lC(this.a,H.p(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gn:function(a){return J.aL(this.a)},
i:function(a){return J.b3(this.a)},
$iD:1}
P.eo.prototype={}
P.k6.prototype={
i:function(a){return P.kU(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.m0(b,"index")
for(u=P.mo(r,r.r,H.v(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.e(P.X(b,r,"index",null,t))},
$ij:1,
$im3:1}
P.eK.prototype={}
P.fc.prototype={}
P.fK.prototype={
kJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bU(a0,a1,b.length)
u=$.ne()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kz(C.b.H(b,n))
j=H.kz(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ap("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.e4(m)
s=n
continue}}throw H.e(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.lD(b,p,a1,q,o,f)
else{e=C.e.b2(f-1,4)+1
if(e===1)throw H.e(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.bk(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lD(b,p,a1,q,o,d)
else{e=C.e.b2(d,4)
if(e===1)throw H.e(P.a7(c,b,a1))
if(e>1)b=C.b.bk(b,a1,a1,e===2?"==":"=")}return b},
$ac5:function(){return[[P.b,P.n],P.k]}}
P.fL.prototype={
$ac8:function(){return[[P.b,P.n],P.k]}}
P.c5.prototype={}
P.c8.prototype={}
P.h7.prototype={
$ac5:function(){return[P.k,[P.b,P.n]]}}
P.jl.prototype={
gky:function(){return C.N}}
P.jn.prototype={
cV:function(a){var u,t,s=P.bU(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kl(u)
if(t.hC(a,0,s)!==s)t.ed(J.nk(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oA(0,t.b,u.length)))},
$ac8:function(){return[P.k,[P.b,P.n]]}}
P.kl.prototype={
ed:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
hC:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ed(r,C.b.H(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.jm.prototype={
cV:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ib",[P.n],"$ab")
u=P.o9(!1,a,0,null)
if(u!=null)return u
t=P.bU(0,null,J.aL(a))
s=P.mA(a,0,t)
if(s>0){r=P.d1(a,0,s)
if(s===t)return r
q=new P.ap(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ap("")
n=new P.kk(!1,q)
n.c=o
n.kq(a,p,t)
if(n.e>0){H.w(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e4(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac8:function(){return[[P.b,P.n],P.k]}}
P.kk.prototype={
kq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.h(a,"$ib",[P.n],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.bz(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.k(a,p)
if(typeof o!=="number")return o.bE()
if((o&192)!==128){n=P.a7(h+C.e.bB(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.f(C.y,n)
if(u<=C.y[n]){n=P.a7("Overlong encoding of 0x"+C.e.bB(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bB(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.e4(u)
i.c=!1}for(n=p<c;n;){m=P.mA(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d1(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.k(a,l)
if(typeof o!=="number")return o.J()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bB(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bB(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a4.prototype={}
P.az.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.be(u,30))&1073741823},
i:function(a){var u=this,t=P.nx(H.nW(u)),s=P.dD(H.nU(u)),r=P.dD(H.nQ(u)),q=P.dD(H.nR(u)),p=P.dD(H.nT(u)),o=P.dD(H.nV(u)),n=P.ny(H.nS(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.aM.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r=new P.h5(),q=this.a
if(q<0)return"-"+new P.aM(0-q).i(0)
u=r.$1(C.e.a8(q,6e7)%60)
t=r.$1(C.e.a8(q,1e6)%60)
s=new P.h4().$1(q%1e6)
return""+C.e.a8(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.h4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.h5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bL.prototype={}
P.fE.prototype={
i:function(a){return"Assertion failed"}}
P.e_.prototype={
i:function(a){return"Throw of null."}}
P.b4.prototype={
gcp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gco:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gcp()+o+u
if(!q.a)return t
s=q.gco()
r=P.dI(q.b)
return t+s+": "+r}}
P.bT.prototype={
gcp:function(){return"RangeError"},
gco:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.hl.prototype={
gcp:function(){return"RangeError"},
gco:function(){var u,t=H.ah(this.b)
if(typeof t!=="number")return t.J()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gn:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.iz.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dI(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibL:1}
P.ec.prototype={
i:function(a){return"Stack Overflow"},
$ibL:1}
P.h_.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eD.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a0(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.j(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.n.prototype={}
P.j.prototype={
gn:function(a){var u,t=this.ga1(this)
for(u=0;t.C();)++u
return u},
L:function(a,b){var u,t,s
P.m0(b,"index")
for(u=this.ga1(this),t=0;u.C();){s=u.gO(u)
if(b===t)return s;++t}throw H.e(P.X(b,this,"index",null,t))},
i:function(a){return P.nC(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.P.prototype={
gI:function(a){return P.U.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
t:function(a,b){return this===b},
gI:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.ck(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.k.prototype={$ilV:1}
P.ap.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipO:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.k
H.h(a,"$iD",[r,r],"$aD")
H.N(b)
u=J.lm(b).eS(b,"=")
if(u===-1){if(b!=="")J.kL(a,P.ld(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.b3(b,u+1)
r=this.a
J.kL(a,P.ld(t,0,t.length,r,!0),P.ld(s,0,s.length,r,!0))}return a},
$S:39}
P.jg.prototype={
$2:function(a,b){throw H.e(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jh.prototype={
$2:function(a,b){throw H.e(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:44}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cy(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.J()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:47}
P.cp.prototype={
gfk:function(){return this.b},
gd4:function(a){var u=this.c
if(u==null)return""
if(C.b.ak(u,"["))return C.b.A(u,1,u.length-1)
return u},
gca:function(a){var u=this.d
if(u==null)return P.mp(this.a)
return u},
gdd:function(a){var u=this.f
return u==null?"":u},
geN:function(){var u=this.r
return u==null?"":u},
fb:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.h(b,"$iD",[P.k,null],"$aD")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ak(p,"/"))p="/"+p
n=P.lc(null,0,0,b)
return new P.cp(u,s,q,r,p,n,m.r)},
gfa:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.k
s.sj5(new P.eo(P.mb(u==null?"":u),[t,t]))}return s.Q},
geO:function(){return this.c!=null},
geR:function(){return this.f!=null},
geP:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$il6)if(s.a==b.gce())if(s.c!=null===b.geO())if(s.b==b.gfk())if(s.gd4(s)==b.gd4(b))if(s.gca(s)==b.gca(b))if(s.e===b.gf4(b)){u=s.f
t=u==null
if(!t===b.geR()){if(t)u=""
if(u===b.gdd(b)){u=s.r
t=u==null
if(!t===b.geP()){if(t)u=""
u=u===b.geN()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
sj5:function(a){var u=P.k
this.Q=H.h(a,"$iD",[u,u],"$aD")},
$il6:1,
gce:function(){return this.a},
gf4:function(a){return this.e}}
P.kg.prototype={
$1:function(a){throw H.e(P.a7("Invalid port",this.a,this.b+1))},
$S:48}
P.kh.prototype={
$1:function(a){return P.fd(C.X,a,C.l,!1)},
$S:43}
P.kj.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fd(C.u,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fd(C.u,b,C.l,!0))}},
$S:17}
P.ki.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.c0(H.mO(b,"$ij")),t=this.a;u.C();)t.$2(a,H.N(u.gO(u)))},
$S:27}
P.jf.prototype={
gfj:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.f(o,0)
u=q.a
o=o[0]+1
t=C.b.eT(u,"?",o)
s=u.length
if(t>=0){r=P.dr(u,t+1,s,C.r,!1)
s=t}else r=p
return q.c=new P.jJ("data",p,p,p,P.dr(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.f(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ko.prototype={
$1:function(a){return new Uint8Array(96)},
$S:28}
P.kn.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.nl(u,0,96,b)
return u},
$S:29}
P.kp.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.H(b,s)^96
if(r>=t)return H.f(a,r)
a[r]=c}}}
P.kq.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.H(b,0),t=C.b.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.f(a,r)
a[r]=c}}}
P.k7.prototype={
geO:function(){return this.c>0},
geQ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.d(t)
t=u+1<t
u=t}else u=!1
return u},
geR:function(){var u=this.f
if(typeof u!=="number")return u.J()
return u<this.r},
geP:function(){return this.r<this.a.length},
gdW:function(){return this.b===4&&C.b.ak(this.a,"http")},
gdX:function(){return this.b===5&&C.b.ak(this.a,"https")},
gce:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdW())q=t.x="http"
else if(t.gdX()){t.x="https"
q="https"}else if(q===4&&C.b.ak(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ak(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
gfk:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gd4:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gca:function(a){var u,t=this
if(t.geQ()){u=t.d
if(typeof u!=="number")return u.l()
return P.cy(C.b.A(t.a,u+1,t.e),null,null)}if(t.gdW())return 80
if(t.gdX())return 443
return 0},
gf4:function(a){return C.b.A(this.a,this.e,this.f)},
gdd:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.J()
return u<t?C.b.A(this.a,u+1,t):""},
geN:function(){var u=this.r,t=this.a
return u<t.length?C.b.b3(t,u+1):""},
gfa:function(){var u=this,t=u.f
if(typeof t!=="number")return t.J()
if(t>=u.r)return C.Y
t=P.k
return new P.eo(P.mb(u.gdd(u)),[t,t])},
fb:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.h(b,"$iD",[P.k,null],"$aD")
u=k.gce()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.geQ()?k.gca(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ak(o,"/"))o="/"+o
m=P.lc(j,0,0,b)
n=k.r
l=n<s.length?C.b.b3(s,n+1):j
return new P.cp(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$il6&&this.a===b.i(0)},
i:function(a){return this.a},
$il6:1}
P.jJ.prototype={}
W.t.prototype={}
W.fA.prototype={
gn:function(a){return a.length}}
W.fC.prototype={
i:function(a){return String(a)}}
W.fD.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.c3.prototype={
dj:function(a,b,c){if(c!=null)return a.getContext(b,P.oO(c))
return a.getContext(b)},
fo:function(a,b){return this.dj(a,b,null)},
$ic3:1}
W.cF.prototype={$icF:1}
W.bI.prototype={
gn:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.fW.prototype={
gn:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cI.prototype={
gn:function(a){return a.length}}
W.fX.prototype={}
W.b7.prototype={}
W.b8.prototype={}
W.fY.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h0.prototype={
gn:function(a){return a.length}}
W.dE.prototype={$idE:1}
W.h1.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.h(c,"$ian",[P.ad],"$aan")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.an,P.ad]]},
$az:function(){return[[P.an,P.ad]]},
$ij:1,
$aj:function(){return[[P.an,P.ad]]},
$ib:1,
$ab:function(){return[[P.an,P.ad]]},
$aE:function(){return[[P.an,P.ad]]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gb1(a))+" x "+H.m(this.gaY(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gae(b)&&a.top===u.gcb(b)&&this.gb1(a)===u.gb1(b)&&this.gaY(a)===u.gaY(b)},
gI:function(a){return W.mn(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(this.gb1(a)),C.j.gI(this.gaY(a)))},
gei:function(a){return a.bottom},
gaY:function(a){return a.height},
gae:function(a){return a.left},
gab:function(a){return a.right},
gcb:function(a){return a.top},
gb1:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ad]}}
W.h2.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.N(c)
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.k]},
$az:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aE:function(){return[P.k]}}
W.h3.prototype={
gn:function(a){return a.length}}
W.jH.prototype={
gn:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.i(u[b],"$ia6")},
m:function(a,b,c){var u
H.i(c,"$ia6")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var u=this.l9(this)
return new J.av(u,u.length,[H.v(u,0)])},
$az:function(){return[W.a6]},
$aj:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
gek:function(a){return new W.jH(a,a.children)},
gel:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.J()
if(s<0)s=-s*0
if(typeof r!=="number")return r.J()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
$ia6:1}
W.q.prototype={$iq:1}
W.l.prototype={
kg:function(a,b,c,d){H.p(c,{func:1,args:[W.q]})
if(c!=null)this.h3(a,b,c,!1)},
h3:function(a,b,c,d){return a.addEventListener(b,H.cu(H.p(c,{func:1,args:[W.q]}),1),!1)},
$il:1}
W.aE.prototype={$iaE:1}
W.cJ.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaE")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aE]},
$az:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icJ:1,
$aE:function(){return[W.aE]}}
W.hc.prototype={
gn:function(a){return a.length}}
W.hg.prototype={
gn:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.hk.prototype={
gn:function(a){return a.length}}
W.cc.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iK")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$az:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$icc:1,
$aE:function(){return[W.K]}}
W.bp.prototype={$ibp:1,
gen:function(a){return a.data}}
W.cM.prototype={$icM:1}
W.bc.prototype={$ibc:1}
W.hv.prototype={
i:function(a){return String(a)}}
W.hJ.prototype={
gn:function(a){return a.length}}
W.cR.prototype={$icR:1}
W.hK.prototype={
k:function(a,b){return P.bx(a.get(H.N(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaZ:function(a){var u=H.c([],[P.k])
this.P(a,new W.hL(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hM.prototype={
k:function(a,b){return P.bx(a.get(H.N(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaZ:function(a){var u=H.c([],[P.k])
this.P(a,new W.hN(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aP.prototype={$iaP:1}
W.hO.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaP")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$az:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.aj.prototype={$iaj:1}
W.jG.prototype={
m:function(a,b,c){var u,t
H.i(c,"$iK")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
ga1:function(a){var u=this.a.childNodes
return new W.dJ(u,u.length,[H.cw(C.a_,u,"E",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$az:function(){return[W.K]},
$aj:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
l2:function(a,b){var u,t
try{u=a.parentNode
J.ni(u,b,a)}catch(t){H.b_(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fv(a):u},
ja:function(a,b,c){return a.replaceChild(b,c)},
$iK:1}
W.cU.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iK")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$az:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aE:function(){return[W.K]}}
W.aQ.prototype={$iaQ:1,
gn:function(a){return a.length}}
W.i1.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaQ")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.ie.prototype={
k:function(a,b){return P.bx(a.get(H.N(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaZ:function(a){var u=H.c([],[P.k])
this.P(a,new W.ig(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.ig.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.ii.prototype={
gn:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.iw.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaS")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.ix.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaT")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.iC.prototype={
k:function(a,b){return a.getItem(H.N(b))},
m:function(a,b,c){a.setItem(b,c)},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaZ:function(a){var u=H.c([],[P.k])
this.P(a,new W.iD(u))
return u},
gn:function(a){return a.length},
$aam:function(){return[P.k,P.k]},
$iD:1,
$aD:function(){return[P.k,P.k]}}
W.iD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:17}
W.aG.prototype={$iaG:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.iN.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaH")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aE:function(){return[W.aH]}}
W.iO.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaV")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.iU.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iY.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaW")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.bX.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jx.prototype={
gn:function(a){return a.length}}
W.bm.prototype={
gku:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.H("deltaY is not supported"))},
gkt:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.H("deltaX is not supported"))},
$ibm:1}
W.de.prototype={
jb:function(a,b){return a.requestAnimationFrame(H.cu(H.p(b,{func:1,ret:-1,args:[P.ad]}),1))},
hx:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jI.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iV")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.V]},
$az:function(){return[W.V]},
$ij:1,
$aj:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aE:function(){return[W.V]}}
W.ey.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$ian)return!1
return a.left===u.gae(b)&&a.top===u.gcb(b)&&a.width===u.gb1(b)&&a.height===u.gaY(b)},
gI:function(a){return W.mn(C.j.gI(a.left),C.j.gI(a.top),C.j.gI(a.width),C.j.gI(a.height))},
gaY:function(a){return a.height},
gb1:function(a){return a.width}}
W.jW.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaN")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.eP.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iK")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.K]},
$az:function(){return[W.K]},
$ij:1,
$aj:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aE:function(){return[W.K]}}
W.k8.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaU")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.kc.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaG")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$az:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aE:function(){return[W.aG]}}
W.jK.prototype={}
W.la.prototype={}
W.jL.prototype={}
W.jM.prototype={
$1:function(a){return this.a.$1(H.i(a,"$iq"))},
$S:31}
W.E.prototype={
ga1:function(a){return new W.dJ(a,this.gn(a),[H.cw(this,a,"E",0)])}}
W.dJ.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdU(J.lB(u.a,t))
u.c=t
return!0}u.sdU(null)
u.c=s
return!1},
gO:function(a){return this.d},
sdU:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eE.prototype={}
W.eF.prototype={}
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
W.dl.prototype={}
W.dm.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.f7.prototype={}
W.f8.prototype={}
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
P.k9.prototype={
eM:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
dh:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$io_)throw H.e(P.jc("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ic2)return a
if(!!u.$icJ)return a
if(!!u.$ibp)return a
if(!!u.$icS||!!u.$ibQ||!!u.$icR)return a
if(!!u.$iD){t=q.eM(a)
s=q.b
if(t>=s.length)return H.f(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.m(s,t,r)
u.P(a,new P.kb(p,q))
return p.a}if(!!u.$ib){t=q.eM(a)
p=q.b
if(t>=p.length)return H.f(p,t)
r=p[t]
if(r!=null)return r
return q.kr(a,t)}throw H.e(P.jc("structured clone of other type"))},
kr:function(a,b){var u,t=J.bz(a),s=t.gn(a),r=new Array(s)
C.a.m(this.b,b,r)
for(u=0;u<s;++u)C.a.m(r,u,this.dh(t.k(a,u)))
return r}}
P.kb.prototype={
$2:function(a,b){this.a.a[a]=this.b.dh(b)},
$S:11}
P.fb.prototype={$ibp:1,
gen:function(a){return this.a}}
P.ku.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.ka.prototype={}
P.hd.prototype={
gbK:function(){var u=this.b,t=H.aD(u,"z",0),s=W.a6
return new H.hA(new H.jz(u,H.p(new P.he(),{func:1,ret:P.a4,args:[t]}),[t]),H.p(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.i(c,"$ia6")
u=this.gbK()
J.nm(u.b.$1(J.kM(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aL(this.gbK().a)},
k:function(a,b){var u=this.gbK()
return u.b.$1(J.kM(u.a,b))},
ga1:function(a){var u=P.kZ(this.gbK(),!1,W.a6)
return new J.av(u,u.length,[H.v(u,0)])},
$az:function(){return[W.a6]},
$aj:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.he.prototype={
$1:function(a){return!!J.T(H.i(a,"$iK")).$ia6},
$S:32}
P.hf.prototype={
$1:function(a){return H.o(H.i(a,"$iK"),"$ia6")},
$S:33}
P.jX.prototype={
kI:function(a){if(a<=0||a>4294967296)throw H.e(P.nZ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.k1.prototype={
gab:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
return H.C(u+t,H.v(this,0))},
gei:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
return H.C(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ian){t=p.a
if(t==u.gae(b)){s=p.b
if(s==u.gcb(b)){r=p.c
if(typeof t!=="number")return t.l()
if(typeof r!=="number")return H.d(r)
q=H.v(p,0)
if(H.C(t+r,q)===u.gab(b)){t=p.d
if(typeof s!=="number")return s.l()
if(typeof t!=="number")return H.d(t)
u=H.C(s+t,q)===u.gei(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.c_(s),q=t.b,p=J.c_(q),o=t.c
if(typeof s!=="number")return s.l()
if(typeof o!=="number")return H.d(o)
u=H.v(t,0)
o=C.e.gI(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.l()
if(typeof s!=="number")return H.d(s)
u=C.e.gI(H.C(q+s,u))
return P.ok(P.jZ(P.jZ(P.jZ(P.jZ(0,r),p),o),u))}}
P.an.prototype={
gae:function(a){return this.a},
gcb:function(a){return this.b},
gb1:function(a){return this.c},
gaY:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.hr.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.i(c,"$ibd")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$az:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aE:function(){return[P.bd]}}
P.bg.prototype={$ibg:1}
P.hW.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.i(c,"$ibg")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$az:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aE:function(){return[P.bg]}}
P.i3.prototype={
gn:function(a){return a.length}}
P.iI.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.N(c)
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$az:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aE:function(){return[P.k]}}
P.r.prototype={
gek:function(a){return new P.hd(a,new W.jG(a))}}
P.bj.prototype={$ibj:1}
P.j_.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.i(c,"$ibj")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$az:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aE:function(){return[P.bj]}}
P.eI.prototype={}
P.eJ.prototype={}
P.eS.prototype={}
P.eT.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$io6:1}
P.fG.prototype={
gn:function(a){return a.length}}
P.fH.prototype={
k:function(a,b){return P.bx(a.get(H.N(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bx(t.value[1]))}},
gaZ:function(a){var u=H.c([],[P.k])
this.P(a,new P.fI(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.H("Not supported"))},
$aam:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
P.fI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.fJ.prototype={
gn:function(a){return a.length}}
P.c1.prototype={}
P.hX.prototype={
gn:function(a){return a.length}}
P.ew.prototype={}
P.dy.prototype={$idy:1}
P.e5.prototype={$ie5:1}
P.cl.prototype={
l7:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibp)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oP(g))
return}if(!!t.$icM)t=!0
else t=!1
if(t){this.ju(a,b,c,d,e,f,g)
return}throw H.e(P.dw("Incorrect number or type of arguments"))},
ju:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
R:function(a,b,c){return a.uniform1f(b,c)},
a6:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fh:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fi:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icl:1}
P.e9.prototype={$ie9:1}
P.ee.prototype={$iee:1}
P.em.prototype={$iem:1}
P.iy.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return P.bx(a.item(b))},
m:function(a,b,c){H.i(c,"$iD")
throw H.e(P.H("Cannot assign element of immutable List."))},
L:function(a,b){return this.k(a,b)},
$az:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aE:function(){return[[P.D,,,]]}}
P.eZ.prototype={}
P.f_.prototype={}
L.hY.prototype={}
B.h9.prototype={
am:function(a,b){var u,t,s,r,q,p,o,n=this,m=new B.aR(a,b),l=n.c.p(0,m).p(0,$.lv().j(0,a+b)),k=l.a,j=l.b,i=2-k*k-j*j
if(i>0){u=i*i
t=n.e
s=n.b.l(0,m)
r=n.a
q=r[C.j.az(s.a)&255]
s=C.j.az(s.b)
if(typeof q!=="number")return q.l()
s=r[q+s&255]
if(typeof s!=="number")return s.bE()
p=(s&14)>>>1
s=$.mY()
if(p>=8)return H.f(s,p)
o=s[p]
n.e=t+u*u*(o.a*k+o.b*j)}}}
B.aR.prototype={
l:function(a,b){return new B.aR(this.a+b.a,this.b+b.b)},
p:function(a,b){return new B.aR(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.aR(this.a*b,this.b*b)},
i:function(a){return H.m(this.a)+", "+H.m(this.b)}}
O.a0.prototype={
bG:function(a){var u=this
u.shM(H.c([],[a]))
u.se2(null)
u.se_(null)
u.se3(null)},
cf:function(a,b,c){var u=this,t=H.aD(u,"a0",0)
H.p(b,{func:1,ret:P.a4,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.n,[P.j,t]]}
H.p(a,t)
H.p(c,t)
u.se2(b)
u.se_(a)
u.se3(c)},
bF:function(a,b){return this.cf(a,null,b)},
bo:function(a){var u
H.h(a,"$ij",[H.aD(this,"a0",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dZ:function(a,b){var u
H.h(b,"$ij",[H.aD(this,"a0",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
ga1:function(a){var u=this.a
return new J.av(u,u.length,[H.v(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aD(s,"a0",0)
H.C(b,r)
r=[r]
if(H.F(s.bo(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dZ(t,H.c([b],r))}},
aS:function(a,b){var u,t,s=this
H.h(b,"$ij",[H.aD(s,"a0",0)],"$aj")
if(H.F(s.bo(b))){u=s.a
t=u.length
C.a.aS(u,b)
s.dZ(t,b)}},
shM:function(a){this.a=H.h(a,"$ib",[H.aD(this,"a0",0)],"$ab")},
se2:function(a){this.b=H.p(a,{func:1,ret:P.a4,args:[[P.j,H.aD(this,"a0",0)]]})},
se_:function(a){this.c=H.p(a,{func:1,ret:-1,args:[P.n,[P.j,H.aD(this,"a0",0)]]})},
se3:function(a){H.p(a,{func:1,ret:-1,args:[P.n,[P.j,H.aD(this,"a0",0)]]})},
$ij:1}
O.cQ.prototype={
gn:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.O():u},
b4:function(){var u=this.b
if(u!=null)u.F(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.a.gb_(u)
else return V.cg()},
f8:function(a){var u=this.a
if(a==null)C.a.h(u,V.cg())
else C.a.h(u,a)
this.b4()},
dc:function(){var u=this.a
if(u.length>0){u.pop()
this.b4()}},
scu:function(a){this.a=H.h(a,"$ib",[V.as],"$ab")}}
E.fM.prototype={}
E.a1.prototype={
dF:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.C();){t=u.d
if(t.f==null)t.dF()}},
sdl:function(a){var u,t,s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gu().W(0,s.gc9())
u=s.d
if(u!=null)u.gu().h(0,s.gc9())
t=new D.L("shapeBuilder",r,s.d,[F.cZ])
t.b=!0
s.as(t)}},
ag:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.a_(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.as])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.ag(0,b)
for(r=s.y.a,r=new J.av(r,r.length,[H.v(r,0)]);r.C();)r.d.ag(0,b)},
bj:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga3(u))
else C.a.h(u.a,t.j(0,u.ga3(u)))
u.b4()
a.f9(r.f)
u=a.dy
s=(u&&C.a).gb_(u)
if(s!=null&&r.d!=null)s.l1(a,r)
for(u=r.y.a,u=new J.av(u,u.length,[H.v(u,0)]);u.C();)u.d.bj(a)
a.f6()
a.dx.dc()},
gu:function(){var u=this.z
return u==null?this.z=D.O():u},
as:function(a){var u=this.z
if(u!=null)u.F(a)},
af:function(){return this.as(null)},
f1:function(a){H.i(a,"$ix")
this.e=null
this.as(a)},
kQ:function(){return this.f1(null)},
f3:function(a){this.as(H.i(a,"$ix"))},
kR:function(){return this.f3(null)},
f0:function(a){this.as(H.i(a,"$ix"))},
kP:function(){return this.f0(null)},
eZ:function(a){this.as(H.i(a,"$ix"))},
kM:function(){return this.eZ(null)},
kL:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ij",[E.a1],"$aj")
for(u=b.length,t=this.geY(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ca()
o.sau(null)
o.sbp(null)
o.c=null
o.d=0
p.z=o}H.p(t,s)
if(o.a==null)o.sau(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.af()},
kO:function(a,b){var u,t
H.h(b,"$ij",[E.a1],"$aj")
for(u=b.ga1(b),t=this.geY();u.C();)u.gO(u).gu().W(0,t)
this.af()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfJ:function(a,b){this.y=H.h(b,"$ia0",[E.a1],"$aa0")},
$ibu:1}
E.ia.prototype={
fE:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cQ()
t=[V.as]
u.scu(H.c([],t))
u.b=null
u.gu().h(0,new E.ib(s))
s.cy=u
u=new O.cQ()
u.scu(H.c([],t))
u.b=null
u.gu().h(0,new E.ic(s))
s.db=u
u=new O.cQ()
u.scu(H.c([],t))
u.b=null
u.gu().h(0,new E.id(s))
s.dx=u
s.sjt(H.c([],[O.cm]))
u=s.dy;(u&&C.a).h(u,null)
s.sjn(new H.aB([P.k,A.cY]))},
gkZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.j(0,u.ga3(u))
s=u}return s},
f9:function(a){var u=this.dy,t=a==null?(u&&C.a).gb_(u):a;(u&&C.a).h(u,t)},
f6:function(){var u=this.dy
if(u.length>1)u.pop()},
sjt:function(a){this.dy=H.h(a,"$ib",[O.cm],"$ab")},
sjn:function(a){this.fr=H.h(a,"$iD",[P.k,A.cY],"$aD")}}
E.ib.prototype={
$1:function(a){var u
H.i(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.ic.prototype={
$1:function(a){var u
H.i(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.id.prototype={
$1:function(a){var u
H.i(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.iA.prototype={}
E.ei.prototype={
ds:function(a){H.i(a,"$ix")
this.fc()},
dr:function(){return this.ds(null)},
gkB:function(){var u,t=this,s=Date.now(),r=C.e.a8(P.lI(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
e6:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.j()
if(typeof r!=="number")return H.d(r)
u=C.j.c7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.j()
t=C.j.c7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l3(C.o,s.gl3())}},
fc:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.p(new E.iT(this),{func:1,ret:-1,args:[P.ad]})
C.E.hx(u)
C.E.jb(u,W.mD(t,P.ad))}},
l0:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.e6()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lI(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.b4()
r=s.db
C.a.sn(r.a,0)
r.b4()
r=s.dx
C.a.sn(r.a,0)
r.b4()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.bj(p.e)}}catch(q){u=H.b_(q)
t=H.cx(q)
P.lq("Error: "+H.m(u))
P.lq("Stack: "+H.m(t))
throw H.e(u)}}}
E.iT.prototype={
$1:function(a){var u
H.p4(a)
u=this.a
if(u.ch){u.ch=!1
u.l0()}},
$S:36}
Z.es.prototype={$ipc:1}
Z.bH.prototype={
aU:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b_(s)
t=P.y('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.jy.prototype={$ipd:1}
Z.cE.prototype={
bh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aU:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aU(a)},
bD:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
bj:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.b3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(p,", ")+"\nAttrs:   "+C.a.B(r,", ")},
sdV:function(a){this.b=H.h(a,"$ib",[Z.aO],"$ab")},
$ipP:1}
Z.aO.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ck(this.c)+"'")+"]"}}
Z.ac.prototype={
gem:function(a){var u=this.a,t=(u&$.ae().a)!==0?1:0
if((u&$.aq().a)!==0)++t
if((u&$.bF().a)!==0)++t
if((u&$.ai().a)!==0)++t
if((u&$.bG().a)!==0)++t
if((u&$.du().a)!==0)++t
if((u&$.dv().a)!==0)++t
if((u&$.cB().a)!==0)++t
return(u&$.bE().a)!==0?t+1:t},
gbm:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.aq().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=3
if((u&$.ai().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.du().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=4
if((u&$.cB().a)!==0)++t
return(u&$.bE().a)!==0?t+4:t},
cM:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ai()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0)if(u===a)return t
return $.nd()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ac))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.ae().a)!==0)C.a.h(u,"Pos")
if((t&$.aq().a)!==0)C.a.h(u,"Norm")
if((t&$.bF().a)!==0)C.a.h(u,"Binm")
if((t&$.ai().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.du().a)!==0)C.a.h(u,"Clr3")
if((t&$.dv().a)!==0)C.a.h(u,"Clr4")
if((t&$.cB().a)!==0)C.a.h(u,"Weight")
if((t&$.bE().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
D.fP.prototype={}
D.ca.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.p(b,u)
if(this.a==null)this.sau(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
W:function(a,b){var u,t,s=this
H.p(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.ap(u,b)
if(u===!0){u=s.a
t=(u&&C.a).W(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ap(u,b)
if(u===!0){u=s.b
t=(u&&C.a).W(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.P(P.kZ(u,!0,{func:1,ret:-1,args:[D.x]}),new D.ha(q))
u=r.b
if(u!=null){r.sbp(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.P(u,new D.hb(q))}return!0},
eo:function(){return this.F(null)},
aL:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sau:function(a){this.a=H.h(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
sbp:function(a){this.b=H.h(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.ha.prototype={
$1:function(a){var u
H.p(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.hb.prototype={
$1:function(a){var u
H.p(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.x.prototype={}
D.bM.prototype={}
D.bN.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dz.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.al.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.al))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.bq.prototype={}
X.dO.prototype={
gaq:function(){var u=this.y
return u==null?this.y=D.O():u},
ef:function(a,b){this.h(0,new X.al(a,new X.bs(!1,!1,b)))},
a9:function(a){return this.ef(a,!1)},
dt:function(a){},
fN:function(a){var u,t,s
H.h(a,"$ij",[X.al],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(C.a.ap(this.a,s))return!1}return!0},
fL:function(a,b){var u=X.al
H.h(b,"$ij",[u],"$aj")
u=new D.bM([u])
u.b=!0
this.dt(u)},
fP:function(a,b){var u=X.al
H.h(b,"$ij",[u],"$aj")
u=new D.bN([u])
u.b=!0
this.dt(u)},
cj:function(a){var u,t=this
H.i(a,"$ix")
if(!t.r&&a instanceof X.bq){u=a.c
if(C.a.ap(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.F(a)}}},
cB:function(a){var u
H.i(a,"$ix")
if(this.r&&a instanceof X.bq){u=a.c
if(C.a.ap(this.a,u))this.r=!1}},
ad:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.O()
t.h(0,s.gci())
t=u.a
u=t==null?u.a=D.O():t
u.h(0,s.gcA())
return!0},
$aj:function(){return[X.al]},
$aa0:function(){return[X.al]}}
X.hq.prototype={
kW:function(a){var u,t
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bq(a)
t.b=!0
return u.F(t)},
kS:function(a){var u,t
this.d.W(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bq(a)
t.b=!0
return u.F(t)},
sj3:function(a){this.d=H.h(a,"$im3",[P.n],"$am3")}}
X.dT.prototype={}
X.hw.prototype={
bb:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.j()
u=b.b
t=p.ch
if(typeof u!=="number")return u.j()
s=n.a
if(typeof s!=="number")return s.l()
n=n.b
if(typeof n!=="number")return n.l()
r=new V.W(s+m*l,n+u*t)
t=p.a.gbQ()
q=new X.bt(a,V.bw(),p.x,t,r)
q.b=!0
p.z=new P.az(o,!1)
p.x=r
return q},
da:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.F(this.bb(a,b))
return!0},
bx:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fq()
if(typeof u!=="number")return u.bE()
this.r=(u&~t)>>>0
return!1},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bb(a,b))
return!0},
kX:function(a){return!1},
iz:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dT(c,r.a.gbQ(),b)
s.b=!0
t.F(s)
r.y=new P.az(u,!1)
r.x=V.bw()}}
X.bs.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bs))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bt.prototype={}
X.hP.prototype={
cr:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gbQ(),r=new X.bt(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
da:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.cr(a,b,!0))
return!0},
bx:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fq()
if(typeof t!=="number")return t.bE()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.cr(a,b,!0))
return!0},
bw:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.cr(a,b,!1))
return!0},
kY:function(a,b){return!1}}
X.i2.prototype={}
X.ek.prototype={}
X.iX.prototype={
bb:function(a,b){var u,t,s,r,q=this
H.h(a,"$ib",[V.W],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bw()
s=q.a.gbQ()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
kV:function(a){var u
H.h(a,"$ib",[V.W],"$ab")
u=this.b
if(u==null)return!1
u.F(this.bb(a,!0))
return!0},
kT:function(a){var u
H.h(a,"$ib",[V.W],"$ab")
u=this.c
if(u==null)return!1
u.F(this.bb(a,!0))
return!0},
kU:function(a){var u
H.h(a,"$ib",[V.W],"$ab")
u=this.d
if(u==null)return!1
u.F(this.bb(a,!1))
return!0}}
X.ep.prototype={
gbQ:function(){var u=this.a,t=C.n.gel(u).c
t.toString
u=C.n.gel(u).d
u.toString
return V.l1(0,0,t,u)},
dP:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.al(u,new X.bs(t,a.altKey,a.shiftKey))},
bd:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
cH:function(a){if(!H.F(a.ctrlKey))H.F(a.metaKey)
a.shiftKey},
aR:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.W(s-q,r-u)},
br:function(a){return new V.a3(a.movementX,a.movementY)},
cD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.W])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
q=C.j.ay(r.pageX)
C.j.ay(r.pageY)
p=o.left
C.j.ay(r.pageX)
C.a.h(n,new V.W(q-p,C.j.ay(r.pageY)-o.top))}return n},
aM:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dz(u,new X.bs(t,a.altKey,a.shiftKey))},
cv:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
it:function(a){this.f=!0},
ia:function(a){this.f=!1},
im:function(a){H.i(a,"$iaj")
if(H.F(this.f)&&this.cv(a))a.preventDefault()},
cB:function(a){var u
H.i(a,"$ibc")
if(!H.F(this.f))return
u=this.dP(a)
if(this.b.kW(u))a.preventDefault()},
cj:function(a){var u
H.i(a,"$ibc")
if(!H.F(this.f))return
u=this.dP(a)
if(this.b.kS(u))a.preventDefault()},
iB:function(a){var u,t,s,r,q=this
H.i(a,"$iaj")
u=q.a
u.focus()
q.f=!0
q.bd(a)
if(H.F(q.x)){t=q.aM(a)
s=q.br(a)
if(q.d.da(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aM(a)
r=q.aR(a)
if(q.c.da(t,r))a.preventDefault()},
iF:function(a){var u,t,s,r=this
H.i(a,"$iaj")
r.bd(a)
u=r.aM(a)
if(H.F(r.x)){t=r.br(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aR(a)
if(r.c.bx(u,s))a.preventDefault()},
ir:function(a){var u,t,s,r=this
H.i(a,"$iaj")
if(!r.cv(a)){r.bd(a)
u=r.aM(a)
if(H.F(r.x)){t=r.br(a)
if(r.d.bx(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aR(a)
if(r.c.bx(u,s))a.preventDefault()}},
iD:function(a){var u,t,s,r=this
H.i(a,"$iaj")
r.bd(a)
u=r.aM(a)
if(H.F(r.x)){t=r.br(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aR(a)
if(r.c.bw(u,s))a.preventDefault()},
ip:function(a){var u,t,s,r=this
H.i(a,"$iaj")
if(!r.cv(a)){r.bd(a)
u=r.aM(a)
if(H.F(r.x)){t=r.br(a)
if(r.d.bw(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aR(a)
if(r.c.bw(u,s))a.preventDefault()}},
iH:function(a){var u,t,s=this
H.i(a,"$ibm")
s.bd(a)
u=new V.a3((a&&C.D).gkt(a),C.D.gku(a)).w(0,180)
if(H.F(s.x)){if(s.d.kX(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aR(a)
if(s.c.kY(u,t))a.preventDefault()},
iJ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aM(s.y)
t=s.aR(s.y)
s.d.iz(u,t,r)}},
iX:function(a){var u,t=this
H.i(a,"$iaX")
t.a.focus()
t.f=!0
t.cH(a)
u=t.cD(a)
if(t.e.kV(u))a.preventDefault()},
iT:function(a){var u
H.i(a,"$iaX")
this.cH(a)
u=this.cD(a)
if(this.e.kT(u))a.preventDefault()},
iV:function(a){var u
H.i(a,"$iaX")
this.cH(a)
u=this.cD(a)
if(this.e.kU(u))a.preventDefault()},
shy:function(a){this.z=H.h(a,"$ib",[[P.d0,P.U]],"$ab")}}
D.bK.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.O():u},
aQ:function(a){var u
H.i(a,"$ix")
u=this.d
if(u!=null)u.F(a)},
ic:function(){return this.aQ(null)},
$ia9:1,
$ibu:1}
D.a9.prototype={$ibu:1}
D.dP.prototype={
gu:function(){var u=this.Q
return u==null?this.Q=D.O():u},
aQ:function(a){var u=this.Q
if(u!=null)u.F(a)},
e1:function(a){var u
H.i(a,"$ix")
u=this.ch
if(u!=null)u.F(a)},
iy:function(){return this.e1(null)},
iL:function(a){var u,t,s
H.h(a,"$ij",[D.a9],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.J)(a),++t){s=a[t]
if(s==null||this.hq(s))return!1}return!0},
i0:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.h(b,"$ij",[n],"$aj")
for(u=b.length,t=this.ge0(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=H.i(b[q],"$ia9")
if(p instanceof D.bK)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.ca()
o.sau(null)
o.sbp(null)
o.c=null
o.d=0
p.d=o}H.p(t,s)
if(o.a==null)o.sau(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bM([n])
n.b=!0
this.aQ(n)},
iP:function(a,b){var u,t,s,r=D.a9
H.h(b,"$ij",[r],"$aj")
for(u=b.ga1(b),t=this.ge0();u.C();){s=u.gO(u)
C.a.W(this.e,s)
s.gu().W(0,t)}r=new D.bN([r])
r.b=!0
this.aQ(r)},
hq:function(a){var u=C.a.ap(this.e,a)
return u},
sfQ:function(a){this.e=H.h(a,"$ib",[D.bK],"$ab")},
sfR:function(a){this.f=H.h(a,"$ib",[D.e2],"$ab")},
sfS:function(a){this.r=H.h(a,"$ib",[D.eb],"$ab")},
sfT:function(a){this.x=H.h(a,"$ib",[D.ef],"$ab")},
sfU:function(a){this.y=H.h(a,"$ib",[D.eg],"$ab")},
sfV:function(a){this.z=H.h(a,"$ib",[D.eh],"$ab")},
$aj:function(){return[D.a9]},
$aa0:function(){return[D.a9]}}
D.e2.prototype={$ia9:1,$ibu:1}
D.eb.prototype={$ia9:1,$ibu:1}
D.ef.prototype={$ia9:1,$ibu:1}
D.eg.prototype={$ia9:1,$ibu:1}
D.eh.prototype={$ia9:1,$ibu:1}
V.aa.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.b6.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.h8.prototype={}
V.a5.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.a5))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.lw()
$.kK()
u=H.c([],[P.k])
t=this.a
s=$.b1().a
if((t&s)>>>0===s)C.a.h(u,"XPos")
s=$.lx().a
if((t&s)>>>0===s)C.a.h(u,"XCenter")
s=$.b0().a
if((t&s)>>>0===s)C.a.h(u,"XNeg")
s=$.b2().a
if((t&s)>>>0===s)C.a.h(u,"YPos")
s=$.ly().a
if((t&s)>>>0===s)C.a.h(u,"YCenter")
s=$.bB().a
if((t&s)>>>0===s)C.a.h(u,"YNeg")
s=$.bD().a
if((t&s)>>>0===s)C.a.h(u,"ZPos")
s=$.n0().a
if((t&s)>>>0===s)C.a.h(u,"ZCenter")
s=$.bC().a
if((t&s)>>>0===s)C.a.h(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
V.cd.prototype={
i:function(a){var u=this
return u.a.i(0)+" <"+u.b.i(0)+"> "+H.m(u.c)+" "+H.m(u.d)}}
V.hm.prototype={
i:function(a){return H.m(this.a)+" "+H.m(this.b)}}
V.aF.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
bv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof g!=="number")return g.j()
if(typeof f!=="number")return H.d(f)
u=g*f
t=i.f
s=i.x
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.d(s)
if(typeof h!=="number")return h.j()
r=i.d
q=i.b
if(typeof q!=="number")return q.j()
p=q*f
o=i.c
if(typeof o!=="number")return H.d(o)
n=s*o
if(typeof r!=="number")return r.j()
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.j()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.B().a){h=$.lP
return h==null?$.lP=new V.aF(1,0,0,0,1,0,0,0,1):h}j=1/k
return new V.aF((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.j()
p=k.e
if(typeof p!=="number")return p.j()
o=k.f
if(typeof o!=="number")return o.j()
n=k.r
if(typeof n!=="number")return n.j()
m=k.x
if(typeof m!=="number")return m.j()
l=k.y
if(typeof l!=="number")return l.j()
return new V.I(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
U:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=k.d
if(typeof q!=="number")return q.j()
p=k.e
if(typeof p!=="number")return p.j()
o=k.f
if(typeof o!=="number")return o.j()
n=k.r
if(typeof n!=="number")return n.j()
m=k.x
if(typeof m!=="number")return m.j()
l=k.y
if(typeof l!=="number")return l.j()
return new V.u(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cv(H.c([q.a,q.d,q.r],p),3,0),n=V.cv(H.c([q.b,q.e,q.x],p),3,0),m=V.cv(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.as.prototype={
at:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
bv:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.j()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.j()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.j()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.j()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.j()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.B().a)return V.cg()
a6=1/a5
a7=-t
a8=-f
return V.bf((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
j:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.j()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.d(o)
n=b3.f
if(typeof n!=="number")return H.d(n)
m=b3.z
if(typeof m!=="number")return H.d(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.d(k)
j=b3.r
if(typeof j!=="number")return H.d(j)
i=b3.Q
if(typeof i!=="number")return H.d(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.j()
b=a9.f
if(typeof b!=="number")return b.j()
a=a9.r
if(typeof a!=="number")return a.j()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.j()
a2=a9.z
if(typeof a2!=="number")return a2.j()
a3=a9.Q
if(typeof a3!=="number")return a3.j()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bf(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.j()
p=k.f
if(typeof p!=="number")return p.j()
o=k.r
if(typeof o!=="number")return o.j()
n=k.y
if(typeof n!=="number")return n.j()
m=k.z
if(typeof m!=="number")return m.j()
l=k.Q
if(typeof l!=="number")return l.j()
return new V.I(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
U:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.j()
p=k.f
if(typeof p!=="number")return p.j()
o=k.r
if(typeof o!=="number")return o.j()
n=k.y
if(typeof n!=="number")return n.j()
m=k.z
if(typeof m!=="number")return m.j()
l=k.Q
if(typeof l!=="number")return l.j()
return new V.u(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.V()},
M:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cv(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cv(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cv(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cv(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
V:function(){return this.M("")}}
V.W.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
return new V.W(s-r,u-t)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.u.prototype={
l:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
return new V.u(q+p,u+t,s+r)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
return new V.u(q-p,u-t,s-r)},
j:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.j()
u=this.b
if(typeof u!=="number")return u.j()
t=this.c
if(typeof t!=="number")return t.j()
return new V.u(s*b,u*b,t*b)},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.bS.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bS))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.e6.prototype={
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+", "+V.G(u.e,3,0)+", "+V.G(u.f,3,0)+"]"}}
V.e7.prototype={
gaK:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
eW:function(a){var u,t,s,r,q=this,p=$.bA(),o=a.a,n=q.a
if(typeof o!=="number")return o.J()
if(o<n){u=$.b0()
p=new V.a5((p.a|u.a)>>>0)}else if(o>=n+q.c){u=$.b1()
p=new V.a5((p.a|u.a)>>>0)}else{u=$.lx()
p=new V.a5((p.a|u.a)>>>0)}u=a.b
t=q.b
if(typeof u!=="number")return u.J()
if(u<t)p=new V.a5((p.a|$.bB().a)>>>0)
else{s=p.a
p=u>=t+q.d?new V.a5((s|$.b2().a)>>>0):new V.a5((s|$.ly().a)>>>0)}s=p.a
r=$.b0().a
if(!((s&r)>>>0===r)){r=$.b1().a
if((s&r)>>>0===r){o=n+q.c
n=o}else n=o}o=$.bB().a
if(!((s&o)>>>0===o)){o=$.b2().a
if((s&o)>>>0===o){o=t+q.d
t=o}else t=u}return new V.W(n,t)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e7))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.bV.prototype={
l_:function(a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.a
if(typeof a7!=="number")return a7.l()
u=a7+a5.d
t=a5.b
if(typeof t!=="number")return t.l()
s=t+a5.e
r=a5.c
if(typeof r!=="number")return r.l()
q=r+a5.f
p=a8.a
if(typeof p!=="number")return p.J()
if(p<a7){o=a7-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o>n)return
o/=n
m=$.b0()
l=a7
k=!1
j=-1}else if(p>u){o=u-p
n=a8.d
if(typeof n!=="number")return H.d(n)
if(o<n)return
o/=n
m=$.b1()
l=u
k=!1
j=1}else{m=a6
l=m
j=l
k=!0
o=-1}n=a8.b
if(typeof n!=="number")return n.J()
if(n<t){i=t-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i>h)return
i/=h
g=$.bB()
f=t
k=!1
e=-1}else if(n>s){i=s-n
h=a8.e
if(typeof h!=="number")return H.d(h)
if(i<h)return
i/=h
g=$.b2()
f=s
k=!1
e=1}else{g=a6
f=g
e=f
i=-1}h=a8.c
if(typeof h!=="number")return h.J()
if(h<r){d=r-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d>c)return
d/=c
b=$.bC()
a=r
k=!1
a0=-1}else if(h>q){d=q-h
c=a8.f
if(typeof c!=="number")return H.d(c)
if(d<c)return
d/=c
b=$.bD()
a=q
k=!1
a0=1}else{b=a6
a=b
a0=a
d=-1}if(k){a7=new V.I(a8.d,a8.e,a8.f)
return new V.cd(new V.u(p,n,h),a7.w(0,Math.sqrt(a7.E(a7))).N(0),0,$.kK())}if(i>o)a1=d>i?2:1
else a1=d>o?2:0
switch(a1){case 0:a7=a8.e
if(typeof a7!=="number")return a7.j()
a2=n+a7*o
a7=$.B()
p=a7.a
if(t-p<a2){a7.toString
t=a2<s}else t=!1
if(!t)return
t=a8.f
if(typeof t!=="number")return t.j()
a3=h+t*o
if(r-p<a3){a7.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.cd(new V.u(l,a2,a3),new V.I(j,0,0),o,m)
case 1:t=a8.d
if(typeof t!=="number")return t.j()
a4=p+t*i
t=$.B()
p=t.a
if(a7-p<a4){t.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.f
if(typeof a7!=="number")return a7.j()
a3=h+a7*i
if(r-p<a3){t.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.cd(new V.u(a4,f,a3),new V.I(0,e,0),i,g)
default:r=a8.d
if(typeof r!=="number")return r.j()
a4=p+r*d
r=$.B()
p=r.a
if(a7-p<a4){r.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.e
if(typeof a7!=="number")return a7.j()
a2=n+a7*d
if(t-p<a2){r.toString
a7=a2<s}else a7=!1
if(!a7)return
return new V.cd(new V.u(a4,a2,a),new V.I(0,0,a0),d,b)}},
kp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=$.bA(),d=b.a
if(d!==0){if(typeof d!=="number")return d.bl()
if(d>0){u=$.b0()
t=u.a
if((c.a&t)>>>0===t){t=a.a
s=g.a
if(typeof s!=="number")return s.l()
r=$.B()
r.toString
if(typeof t!=="number")return t.p()
s=t-(s+g.d)
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}else{u=$.b1()
t=u.a
if((c.a&t)>>>0===t){t=a.a
if(typeof t!=="number")return t.l()
s=g.a
r=$.B()
r.toString
if(typeof s!=="number")return H.d(s)
s=t+a.d-s
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}if(p){if(typeof q!=="number")return q.J()
t=q<100&&q>=0&&q<=1}else t=!1
if(t){t=g.b
s=b.b
if(typeof s!=="number")return s.j()
if(typeof q!=="number")return H.d(q)
if(typeof t!=="number")return t.l()
o=t+s*q
t=a.b
if(typeof t!=="number")return t.l()
s=$.B().a
if(o-s<t+a.e&&t-s<o+g.e){t=g.c
r=b.c
if(typeof r!=="number")return r.j()
if(typeof t!=="number")return t.l()
n=t+r*q
t=a.c
if(typeof t!=="number")return t.l()
if(n-s<t+a.f&&t-s<n+g.f){m=u
l=q}else{m=e
l=100}}else{m=e
l=100}}else{m=e
l=100}}else{u=f
m=e
q=u
l=100}t=b.b
if(t!==0){if(typeof t!=="number")return t.bl()
if(t>0){k=$.bB()
s=k.a
if((c.a&s)>>>0===s){s=a.b
r=g.b
if(typeof r!=="number")return r.l()
j=$.B()
j.toString
if(typeof s!=="number")return s.p()
r=s-(r+g.e)
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}else{k=$.b2()
s=k.a
if((c.a&s)>>>0===s){s=a.b
if(typeof s!=="number")return s.l()
r=g.b
j=$.B()
j.toString
if(typeof r!=="number")return H.d(r)
r=s+a.e-r
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.J()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.j()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.l()
i=s+d*q
s=a.a
if(typeof s!=="number")return s.l()
r=$.B().a
if(i-r<s+a.d&&s-r<i+g.d){s=g.c
j=b.c
if(typeof j!=="number")return j.j()
if(typeof s!=="number")return s.l()
n=s+j*q
s=a.c
if(typeof s!=="number")return s.l()
if(n-r<s+a.f&&s-r<n+g.f){m=u
l=q}}}}s=b.c
if(s!==0){if(typeof s!=="number")return s.bl()
if(s>0){k=$.bC()
r=k.a
if((c.a&r)>>>0===r){r=a.c
j=g.c
if(typeof j!=="number")return j.l()
h=$.B()
h.toString
if(typeof r!=="number")return r.p()
j=r-(j+g.f)
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}else{k=$.bD()
r=k.a
if((c.a&r)>>>0===r){r=a.c
if(typeof r!=="number")return r.l()
j=g.c
h=$.B()
h.toString
if(typeof j!=="number")return H.d(j)
j=r+a.f-j
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.J()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.j()
if(typeof q!=="number")return H.d(q)
if(typeof s!=="number")return s.l()
i=s+d*q
d=a.a
if(typeof d!=="number")return d.l()
s=$.B().a
if(i-s<d+a.d&&d-s<i+g.d){d=g.b
if(typeof t!=="number")return t.j()
if(typeof d!=="number")return d.l()
o=d+t*q
d=a.b
if(typeof d!=="number")return d.l()
if(o-s<d+a.e&&d-s<o+g.e){m=u
l=q}}}}if(J.a_(m,e))return
return new V.hm(l,m)},
cc:function(a,b){var u,t,s,r,q=this,p=q.a,o=b.a
if(typeof p!=="number")return p.l()
if(typeof o!=="number")return H.d(o)
u=q.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=q.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
return V.i9(p+o,u+t,s+r,q.d,q.e,q.f)},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bV))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+", "+V.G(u.e,3,0)+", "+V.G(u.f,3,0)+"]"}}
V.a3.prototype={
d7:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
j:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.j()
u=this.b
if(typeof u!=="number")return u.j()
return new V.a3(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.mc
return u==null?$.mc=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a3(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.I.prototype={
d7:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bu:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.j()
return new V.I(q*p-u*t,u*s-r*p,r*t-q*s)},
l:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
return new V.I(q+p,u+t,s+r)},
N:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.N()
u=this.b
if(typeof u!=="number")return u.N()
t=this.c
if(typeof t!=="number")return t.N()
return new V.I(-s,-u,-t)},
j:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.j()
u=this.b
if(typeof u!=="number")return u.j()
t=this.c
if(typeof t!=="number")return t.j()
return new V.I(s*b,u*b,t*b)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.B().a)return V.dd()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.I(u/b,t/b,s/b)},
d6:function(){var u=this.a,t=$.B()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.fS.prototype={
cl:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.kI(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gu:function(){var u=this.y
return u==null?this.y=D.O():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sdi:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.L("wrap",u,b,[P.a4])
u.b=!0
this.D(u)}},
sd8:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.cl(u)}s=new D.L("maximumLocation",s,t.b,[P.A])
s.b=!0
t.D(s)}},
sd9:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.cl(u)}s=new D.L("minimumLocation",s,t.c,[P.A])
s.b=!0
t.D(s)}},
sZ:function(a,b){var u,t=this
b=t.cl(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.L("location",u,b,[P.A])
u.b=!0
t.D(u)}},
saJ:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.A])
r.b=!0
s.D(r)}},
sS:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.L("velocity",t,a,[P.A])
t.b=!0
u.D(t)}},
saW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.L("dampening",u,a,[P.A])
u.b=!0
this.D(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.dC.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.O():u},
aB:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.M("          ")}}
U.cL.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.O():u},
D:function(a){var u
H.i(a,"$ix")
u=this.e
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
fX:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.h(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaD(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.p(t,s)
if(o.a==null)o.sau(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bM([n])
n.b=!0
this.D(n)},
iN:function(a,b){var u,t,s=U.ab
H.h(b,"$ij",[s],"$aj")
for(u=b.ga1(b),t=this.gaD();u.C();)u.gO(u).gu().W(0,t)
s=new D.bN([s])
s.b=!0
this.D(s)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.J()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.v(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.j(0,u)}}s.f=u==null?V.cg():u
r=s.e
if(r!=null)r.aL(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ab]},
$aa0:function(){return[U.ab]},
$iab:1}
U.cN.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.O():u},
D:function(a){var u
H.i(a,"$ix")
u=this.b
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
aB:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aB(0,b,c)
u=s==null?null:s.bv(0)
t.c=u==null?V.cg():u
s=t.b
if(s!=null)s.aL(0)}return t.c},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$iab:1}
U.ab.prototype={}
U.e8.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.O():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sfl:function(a){var u
a=V.kI(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.L("yaw",u,a,[P.A])
u.b=!0
this.D(u)}},
sf5:function(a,b){var u
b=V.kI(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.L("pitch",u,b,[P.A])
u.b=!0
this.D(u)}},
sfd:function(a){var u
a=V.kI(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.L("roll",u,a,[P.A])
u.b=!0
this.D(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sfl(s.a+s.d*b.y)
s.sf5(0,s.b+s.e*b.y)
s.sfd(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.bf(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).j(0,V.lS(s.b)).j(0,V.lR(s.a))
r=s.y
if(r!=null)r.aL(0)}return s.x},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e8))return!1
u=r.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+"], ["+V.G(u.d,3,0)+", "+V.G(u.e,3,0)+", "+V.G(u.f,3,0)+"]"}}
U.eq.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.O():u},
D:function(a){var u
H.i(a,"$ix")
u=this.fx
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
ad:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.ghT())
u=s.a.c
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghV())
u=s.a.c
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.ghX())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.ghN())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghP())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.gjB())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gjz())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.gjx())
return!0},
aE:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.a3(u,t)},
hU:function(a){var u=this
a=H.o(H.i(a,"$ix"),"$ibt")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hW:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.i(a,"$ix"),"$ibt")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a3(t.a,t.b).j(0,2).w(0,u.gaK()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).j(0,2).w(0,u.gaK()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).j(0,2).w(0,u.gaK()))}n.ac()},
hY:function(a){var u,t,s,r=this
H.i(a,"$ix")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sS(-t*10*u)
r.ac()}},
hO:function(a){var u=this
if(H.o(H.i(a,"$ix"),"$idT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.i(a,"$ix"),"$ibt")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).j(0,2).w(0,u.gaK()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).j(0,2).w(0,u.gaK()))
n.ac()},
jC:function(a){var u=this
H.i(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
jA:function(a){var u,t,s,r,q,p,o,n=this
a=H.o(H.i(a,"$ix"),"$iek")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aE(new V.a3(t.a,t.b).j(0,2).w(0,u.gaK()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aE(new V.a3(s.a,s.b).j(0,2).w(0,u.gaK()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.p(0,a.z)
n.dx=n.aE(new V.a3(t.a,t.b).j(0,2).w(0,u.gaK()))}n.ac()},
jy:function(a){var u,t,s,r=this
H.i(a,"$ix")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sS(-t*10*u)
r.ac()}},
aB:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.J()
if(s<r){t.dy=r
u=b.y
t.c.ag(0,u)
t.b.ag(0,u)
t.fr=V.lR(t.b.d).j(0,V.lS(t.c.d))}return t.fr},
$iab:1}
U.er.prototype={
gu:function(){var u=this.dx
return u==null?this.dx=D.O():u},
D:function(a){var u
H.i(a,"$ix")
u=this.dx
if(u!=null)u.F(a)},
ac:function(){return this.D(null)},
sS:function(a){this.r.sS(a.a)
this.x.sS(a.b)
this.y.sS(a.c)},
gZ:function(a){return new V.u(this.r.d,this.x.d,this.y.d)},
sZ:function(a,b){this.r.sZ(0,b.a)
this.x.sZ(0,b.b)
this.y.sZ(0,b.c)},
ix:function(a){this.D(H.i(a,"$ix"))},
cJ:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.l()
e+=d}else if(b.r){if(typeof e!=="number")return e.p()
e-=d}else{if(typeof e!=="number")return e.bl()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q,p=this,o=p.cy,n=b.e
if(typeof o!=="number")return o.J()
if(o<n){p.cy=n
u=p.gZ(p)
t=b.y
if(t>0.1)t=0.1
o=p.ch
if(typeof o!=="number")return o.j()
s=o*t
o=p.cx
if(typeof o!=="number")return o.j()
r=o*t
q=new V.I(p.r.f,p.x.f,p.y.f)
o=p.Q
if(o!=null)q=o.aA(q)
q=new V.I(p.cJ(p.a,p.b,s,r,q.a),p.cJ(p.c,p.d,s,r,q.b),p.cJ(p.e,p.f,s,r,q.c))
o=p.z
p.sS(o!=null?o.aA(q):q)
p.r.ag(0,t)
p.x.ag(0,t)
p.y.ag(0,t)
if(p.dy!=null){o=p.gZ(p)
p.sZ(0,p.dy.$2(u,o))}p.db=V.dV(p.r.d,-p.x.d,p.y.d)}return p.db},
sdJ:function(a){this.dy=H.p(a,{func:1,ret:V.u,args:[V.u,V.u]})},
$iab:1}
M.dH.prototype={
b6:function(a){var u
H.i(a,"$ix")
u=this.x
if(u!=null)u.F(a)},
fY:function(){return this.b6(null)},
ig:function(a,b){var u,t,s,r,q,p,o,n=E.a1
H.h(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gb5(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.J)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ca()
o.sau(null)
o.sbp(null)
o.c=null
o.d=0
p.z=o}H.p(t,s)
if(o.a==null)o.sau(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bM([n])
n.b=!0
this.b6(n)},
ii:function(a,b){var u,t,s=E.a1
H.h(b,"$ij",[s],"$aj")
for(u=b.ga1(b),t=this.gb5();u.C();)u.gO(u).gu().W(0,t)
s=new D.bN([s])
s.b=!0
this.b6(s)},
gu:function(){var u=this.x
return u==null?this.x=D.O():u},
bj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.iA()
e.b=!0
u=f.e
if(u!=null)u.F(e)
a.f9(f.c)
u=f.b
u.toString
t=a.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.d(s)
o=C.j.ay(p*s)
p=q.b
if(typeof r!=="number")return H.d(r)
n=C.j.ay(p*r)
p=C.j.ay(q.c*s)
a.c=p
q=C.j.ay(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bf(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.f8(i)
t=$.lW
if(t==null){t=V.lQ(V.e3(),V.mk(),V.mj())
$.lW=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aB(0,a,u)
if(g!=null)h=g.j(0,h)}a.db.f8(h)
for(u=f.d.a,u=new J.av(u,u.length,[H.v(u,0)]);u.C();)u.d.ag(0,a)
for(u=f.d.a,u=new J.av(u,u.length,[H.v(u,0)]);u.C();)u.d.bj(a)
f.a.toString
a.cy.dc()
a.db.dc()
f.b.toString
a.f6()},
shn:function(a,b){this.d=H.h(b,"$ia0",[E.a1],"$aa0")},
$ipN:1}
A.dx.prototype={}
A.fF.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kx:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
kv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hC.prototype={
fC:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ap("")
t=d2.fx
if(t){u.a=c7
s=c7}else s=""
r=d2.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d2.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d2.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d2.jS(u)
d2.jZ(u)
d2.jT(u)
d2.ka(u)
d2.kb(u)
d2.k0(u)
d2.kf(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d2.x1
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
u.a=s}if(d2.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d2.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d2.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d2.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
s=a7.z
u=new P.ap("")
u.a="precision mediump float;\n"
u.a=d0
q=s.r1
if(q){u.a=d1
p=d1}else p=d0
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}p=u.a=(s.k4?u.a=p+"varying vec3 viewPos;\n":p)+"\n"
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}u.a=(s.fr?u.a=p+"uniform mat4 invViewMat;\n":p)+"\n"
s.jW(u)
s.jR(u)
s.jU(u)
s.jX(u)
s.k8(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.k6(u)
s.k7(u)}s.k_(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.i:m=u.a=m+"   return alpha;\n"
break
case C.f:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.h:m+=c8
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.c([],[P.k])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.B(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.jV(u)
s.k5(u)
s.k9(u)
s.kc(u)
s.kd(u)
s.ke(u)
s.jY(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.k])
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
i="vec4("+C.a.B(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.dQ(n,35633)
a7.f=a7.dQ(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.F(H.mH(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.w(P.y("Failed to link shader: "+H.m(h)))}a7.jk()
a7.jm()
a7.Q=a7.x.k(0,"posAttr")
a7.cx=a7.x.k(0,"normAttr")
a7.ch=a7.x.k(0,"binmAttr")
a7.cy=a7.x.k(0,"txt2DAttr")
a7.db=a7.x.k(0,"txtCubeAttr")
a7.dx=a7.x.k(0,"bendAttr")
if(d2.fr)a7.id=H.o(a7.y.q(0,"invViewMat"),"$iaC")
if(t)a7.dy=H.o(a7.y.q(0,"objMat"),"$iaC")
if(r)a7.fr=H.o(a7.y.q(0,"viewObjMat"),"$iaC")
a7.fy=H.o(a7.y.q(0,"projViewObjMat"),"$iaC")
if(d2.x2)a7.k1=H.o(a7.y.q(0,"txt2DMat"),"$id6")
if(d2.y1)a7.k2=H.o(a7.y.q(0,"txtCubeMat"),"$iaC")
if(d2.y2)a7.k3=H.o(a7.y.q(0,"colorMat"),"$iaC")
a7.shg(H.c([],[A.aC]))
t=d2.aH
if(t>0){a7.k4=H.i(a7.y.q(0,"bendMatCount"),"$iR")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.w(P.y(a8+q+a9));(s&&C.a).h(s,H.o(f,"$iaC"))}}t=d2.a
if(t!==C.d){a7.r2=H.o(a7.y.q(0,"emissionClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.rx=H.o(a7.y.q(0,b0),"$iat")
a7.x1=H.o(a7.y.q(0,b1),"$iR")
break
case C.h:a7.ry=H.o(a7.y.q(0,b0),"$iau")
a7.x1=H.o(a7.y.q(0,b1),"$iR")
break}}t=d2.b
if(t!==C.d){a7.x2=H.o(a7.y.q(0,"ambientClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.y1=H.o(a7.y.q(0,b2),"$iat")
a7.aH=H.o(a7.y.q(0,b3),"$iR")
break
case C.h:a7.y2=H.o(a7.y.q(0,b2),"$iau")
a7.aH=H.o(a7.y.q(0,b3),"$iR")
break}}t=d2.c
if(t!==C.d){a7.ax=H.o(a7.y.q(0,"diffuseClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.bS=H.o(a7.y.q(0,b4),"$iat")
a7.bT=H.o(a7.y.q(0,b5),"$iR")
break
case C.h:a7.ep=H.o(a7.y.q(0,b4),"$iau")
a7.bT=H.o(a7.y.q(0,b5),"$iR")
break}}t=d2.d
if(t!==C.d){a7.bU=H.o(a7.y.q(0,"invDiffuseClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.eq=H.o(a7.y.q(0,b6),"$iat")
a7.bV=H.o(a7.y.q(0,b7),"$iR")
break
case C.h:a7.er=H.o(a7.y.q(0,b6),"$iau")
a7.bV=H.o(a7.y.q(0,b7),"$iR")
break}}t=d2.e
if(t!==C.d){a7.bY=H.o(a7.y.q(0,"shininess"),"$ia2")
a7.bW=H.o(a7.y.q(0,"specularClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.es=H.o(a7.y.q(0,b8),"$iat")
a7.bX=H.o(a7.y.q(0,b9),"$iR")
break
case C.h:a7.eu=H.o(a7.y.q(0,b8),"$iau")
a7.bX=H.o(a7.y.q(0,b9),"$iR")
break}}switch(d2.f){case C.d:break
case C.i:break
case C.f:a7.ev=H.o(a7.y.q(0,"bumpTxt"),"$iat")
a7.bZ=H.o(a7.y.q(0,c0),"$iR")
break
case C.h:a7.ew=H.o(a7.y.q(0,"bumpTxt"),"$iau")
a7.bZ=H.o(a7.y.q(0,c0),"$iR")
break}if(d2.dy){a7.ex=H.o(a7.y.q(0,"envSampler"),"$iau")
a7.ey=H.o(a7.y.q(0,"nullEnvTxt"),"$iR")
t=d2.r
if(t!==C.d){a7.c_=H.o(a7.y.q(0,"reflectClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.ez=H.o(a7.y.q(0,c1),"$iat")
a7.c0=H.o(a7.y.q(0,c2),"$iR")
break
case C.h:a7.eA=H.o(a7.y.q(0,c1),"$iau")
a7.c0=H.o(a7.y.q(0,c2),"$iR")
break}}t=d2.x
if(t!==C.d){a7.c1=H.o(a7.y.q(0,"refraction"),"$ia2")
a7.c2=H.o(a7.y.q(0,"refractClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:a7.eB=H.o(a7.y.q(0,c3),"$iat")
a7.c3=H.o(a7.y.q(0,c4),"$iR")
break
case C.h:a7.eC=H.o(a7.y.q(0,c3),"$iau")
a7.c3=H.o(a7.y.q(0,c4),"$iR")
break}}}t=d2.y
if(t!==C.d){a7.c4=H.o(a7.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.i:break
case C.f:a7.eD=H.o(a7.y.q(0,c5),"$iat")
a7.c5=H.o(a7.y.q(0,c6),"$iR")
break
case C.h:a7.eE=H.o(a7.y.q(0,c5),"$iau")
a7.c5=H.o(a7.y.q(0,c6),"$iR")
break}}a7.shw(H.c([],[A.d5]))
a7.sj0(H.c([],[A.d7]))
a7.sjr(H.c([],[A.d8]))
a7.sjJ(H.c([],[A.d9]))
a7.sjK(H.c([],[A.da]))
a7.sjL(H.c([],[A.db]))
if(d2.k2){t=d2.z
if(t>0){a7.eF=H.i(a7.y.q(0,"dirLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.cX;(s&&C.a).h(s,new A.d5(f,e))}}t=d2.Q
if(t>0){a7.eG=H.i(a7.y.q(0,"pntLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.w(P.y(a8+r+a9))
H.o(d,"$iQ")
s=a7.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.w(P.y(a8+r+a9))
H.o(c,"$ia2")
s=a7.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.w(P.y(a8+r+a9))
H.o(b,"$ia2")
s=a7.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.w(P.y(a8+r+a9))
H.o(a,"$ia2")
s=a7.cY;(s&&C.a).h(s,new A.d7(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.eH=H.i(a7.y.q(0,"spotLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.w(P.y(a8+r+a9))
H.o(d,"$iQ")
s=a7.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.w(P.y(a8+r+a9))
H.o(c,"$iQ")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.w(P.y(a8+r+a9))
H.o(b,"$ia2")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.w(P.y(a8+r+a9))
H.o(a,"$ia2")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.w(P.y(a8+r+a9))
H.o(a0,"$ia2")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.w(P.y(a8+r+a9))
H.o(a1,"$ia2")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.w(P.y(a8+r+a9))
H.o(a2,"$ia2")
s=a7.cZ;(s&&C.a).h(s,new A.d8(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.eI=H.i(a7.y.q(0,"txtDirLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.w(P.y(a8+r+a9))
H.o(d,"$iQ")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.w(P.y(a8+r+a9))
H.o(c,"$iQ")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.w(P.y(a8+r+a9))
H.o(b,"$iQ")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.w(P.y(a8+r+a9))
H.o(a,"$iR")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.w(P.y(a8+r+a9))
H.o(a0,"$iat")
s=a7.d_;(s&&C.a).h(s,new A.d9(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.eJ=H.i(a7.y.q(0,"txtPntLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.w(P.y(a8+r+a9))
H.o(d,"$id6")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.w(P.y(a8+r+a9))
H.o(c,"$iQ")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.w(P.y(a8+r+a9))
H.o(b,"$iR")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.w(P.y(a8+r+a9))
H.o(a,"$ia2")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.w(P.y(a8+r+a9))
H.o(a0,"$ia2")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.w(P.y(a8+r+a9))
H.o(a1,"$ia2")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.w(P.y(a8+r+a9))
H.o(a2,"$iau")
s=a7.d0;(s&&C.a).h(s,new A.da(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.eK=H.i(a7.y.q(0,"txtSpotLightCount"),"$iR")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.w(P.y(a8+r+a9))
H.o(f,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.w(P.y(a8+r+a9))
H.o(e,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.w(P.y(a8+r+a9))
H.o(d,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.w(P.y(a8+r+a9))
H.o(c,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.w(P.y(a8+r+a9))
H.o(b,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.w(P.y(a8+r+a9))
H.o(a,"$iR")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.w(P.y(a8+r+a9))
H.o(a0,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.w(P.y(a8+r+a9))
H.o(a1,"$ia2")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.w(P.y(a8+r+a9))
H.o(a2,"$ia2")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.w(P.y(a8+r+a9))
H.o(a3,"$ia2")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.w(P.y(a8+r+a9))
H.o(a4,"$ia2")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.w(P.y(a8+r+a9))
H.o(a5,"$ia2")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.w(P.y(a8+r+a9))
H.o(a6,"$iat")
s=a7.d1;(s&&C.a).h(s,new A.db(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
aw:function(a,b,c){if(c==null||!c.gaj(c))C.c.a6(b.a,b.d,1)
else{a.fs(c)
C.c.a6(b.a,b.d,0)}},
ao:function(a,b,c){C.c.a6(b.a,b.d,1)},
shg:function(a){this.r1=H.h(a,"$ib",[A.aC],"$ab")},
shw:function(a){this.cX=H.h(a,"$ib",[A.d5],"$ab")},
sj0:function(a){this.cY=H.h(a,"$ib",[A.d7],"$ab")},
sjr:function(a){this.cZ=H.h(a,"$ib",[A.d8],"$ab")},
sjJ:function(a){this.d_=H.h(a,"$ib",[A.d9],"$ab")},
sjK:function(a){this.d0=H.h(a,"$ib",[A.da],"$ab")},
sjL:function(a){this.d1=H.h(a,"$ib",[A.db],"$ab")}}
A.hF.prototype={
jS:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aH+"];\n"
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
jZ:function(a){var u
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
jT:function(a){var u
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
ka:function(a){var u,t
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
kb:function(a){var u,t
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
k0:function(a){var u
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
kf:function(a){var u
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
aO:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.b3(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jW:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aO(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
jR:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aO(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
jU:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aO(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
jX:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aO(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
k8:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aO(a,s,"specular")
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
case C.i:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
k_:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
break
case C.i:u=a.a=u+r
break
case C.f:u+=q
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
case C.h:u+=q
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
k6:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aO(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
k7:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aO(a,s,"refract")
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
case C.i:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.h:s=u+t
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
jV:function(a){var u,t=this.z
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
k5:function(a){var u,t=this.Q
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
k9:function(a){var u,t=this.ch
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
kc:function(a){var u,t,s=this.cx
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
kd:function(a){var u,t,s=this.cy
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
ke:function(a){var u,t,s=this.db
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
jY:function(a){var u
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
i:function(a){return this.ax}}
A.d5.prototype={}
A.d9.prototype={}
A.d7.prototype={}
A.da.prototype={}
A.d8.prototype={}
A.db.prototype={}
A.cY.prototype={
fG:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.mH(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.y("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
jk:function(){var u,t,s,r=this,q=H.c([],[A.dx]),p=r.a,o=H.ah(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dx(p,t.name,s))}r.x=new A.fF(q)},
jm:function(){var u,t,s,r=this,q=H.c([],[A.el]),p=r.a,o=H.ah(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ks(t.type,t.size,t.name,s))}r.y=new A.j9(q)},
ba:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.l5(u,this.r,b,a,c)},
hr:function(a,b,c){var u=this.a
if(a===1)return new A.at(u,b,c)
else return A.l5(u,this.r,b,a,c)},
hs:function(a,b,c){var u=this.a
if(a===1)return new A.au(u,b,c)
else return A.l5(u,this.r,b,a,c)},
bN:function(a,b){return new P.eD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
ks:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ba(b,c,d)
case 5121:return u.ba(b,c,d)
case 5122:return u.ba(b,c,d)
case 5123:return u.ba(b,c,d)
case 5124:return u.ba(b,c,d)
case 5125:return u.ba(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.j4(u.a,c,d)
case 35665:return new A.Q(u.a,c,d)
case 35666:return new A.j7(u.a,c,d)
case 35667:return new A.j5(u.a,c,d)
case 35668:return new A.j6(u.a,c,d)
case 35669:return new A.j8(u.a,c,d)
case 35674:return new A.ja(u.a,c,d)
case 35675:return new A.d6(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.hr(b,c,d)
case 35680:return u.hs(b,c,d)
case 35670:throw H.e(u.bN("BOOL",c))
case 35671:throw H.e(u.bN("BOOL_VEC2",c))
case 35672:throw H.e(u.bN("BOOL_VEC3",c))
case 35673:throw H.e(u.bN("BOOL_VEC4",c))
default:throw H.e(P.y("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c6.prototype={
i:function(a){return this.b}}
A.el.prototype={}
A.j9.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.k(0,b)
if(u==null)throw H.e(P.y("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.V()},
V:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.R.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjQ:function(a){H.h(a,"$ib",[P.n],"$ab")}}
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
A.d6.prototype={
aC:function(a){var u=new Float32Array(H.cq(H.h(a,"$ib",[P.A],"$ab")))
C.c.fh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aC.prototype={
aC:function(a){var u=new Float32Array(H.cq(H.h(a,"$ib",[P.A],"$ab")))
C.c.fi(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.at.prototype={
fs:function(a){var u=a.gaj(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.gai(a))},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.au.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.af.prototype={
hf:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dd()
if(q!=null)s=s.l(0,q)
if(u!=null)s=s.l(0,u)
if(t!=null)s=s.l(0,t)
if(s.d6())return
return s.w(0,Math.sqrt(s.E(s)))},
hm:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.E(r)))
r=t.p(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.bu(r.w(0,Math.sqrt(r.E(r))))
return r.w(0,Math.sqrt(r.E(r)))},
cT:function(){var u,t=this
if(t.d!=null)return!0
u=t.hf()
if(u==null){u=t.hm()
if(u==null)return!1}t.d=u
t.a.a.af()
return!0},
he:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dd()
if(q!=null)s=s.l(0,q)
if(u!=null)s=s.l(0,u)
if(t!=null)s=s.l(0,t)
if(s.d6())return
return s.w(0,Math.sqrt(s.E(s)))},
hl:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.d(k)
r=l-k
if(Math.abs(r-0)<$.B().a){l=d.p(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.N(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.p(0,g).j(0,p).l(0,g).p(0,j)
k=new V.I(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.E(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.N(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.E(l)))
l=o.bu(q)
l=l.w(0,Math.sqrt(l.E(l))).bu(o)
q=l.w(0,Math.sqrt(l.E(l)))}return q},
cS:function(){var u,t=this
if(t.e!=null)return!0
u=t.he()
if(u==null){u=t.hl()
if(u==null)return!1}t.e=u
t.a.a.af()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
M:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.b0(J.b3(s.e),0)+", "+C.b.b0(J.b3(t.b.e),0)+", "+C.b.b0(J.b3(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
V:function(){return this.M("")}}
F.bP.prototype={}
F.ci.prototype={}
F.cX.prototype={
gu:function(){var u=this.Q
return u==null?this.Q=D.O():u},
bt:function(a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
H.h(a0,"$ib",[F.bl],"$ab")
u=a0.length
t=new Array(u*a.c)
t.fixed$length=Array
s=H.c(t,[P.A])
for(t=a.a,r=0,q=0;q<a.b;++q){p=t.cM(q)
for(o=0;o<u;++o){if(o>=a0.length)return H.f(a0,o)
n=a0[o].eU(p)
m=r+o*a.c
for(l=0;l<n.length;++l){C.a.m(s,m,n[l]);++m}}r+=p.gbm(p)}k=$.ae()
if((t.a&k.a)!==0){t=a.z
if(t==null){if(0>=a0.length)return H.f(a0,0)
t=a0[0].f
t=V.i9(t.a,t.b,t.c,0,0,0)
a.z=t}for(q=u-1;q>=0;--q){if(q>=a0.length)return H.f(a0,q)
k=a0[q].f
j=k.a
i=k.b
k=k.c
h=t.d
g=t.a
if(typeof j!=="number")return j.J()
if(typeof g!=="number")return H.d(g)
if(j<g){h+=g-j
f=j}else{if(j>g+h)h=j-g
f=g}e=t.e
j=t.b
if(typeof i!=="number")return i.J()
if(typeof j!=="number")return H.d(j)
if(i<j){e+=j-i
d=i}else{if(i>j+e)e=i-j
d=j}c=t.f
t=t.c
if(typeof k!=="number")return k.J()
if(typeof t!=="number")return H.d(t)
if(k<t){c+=t-k
b=k}else{if(k>t+c)c=k-t
b=t}t=new V.bV(f,d,b,h,e,c)
a.z=t}}m=a.d
a.d=m+u
C.a.aS(a.f,s)
a.af()
return m},
bs:function(a){var u,t,s,r,q,p,o=P.n
H.h(a,"$ib",[o],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[o])
if(0>=a.length)return H.f(a,0)
r=a[0]
for(q=2,p=0;q<u;++q,p+=3){C.a.m(s,p,r)
o=q-1
if(o>=a.length)return H.f(a,o)
C.a.m(s,p+1,a[o])
if(q>=a.length)return H.f(a,q)
C.a.m(s,p+2,a[q])}C.a.aS(this.y,s)
this.af()}},
ki:function(a){var u,t,s,r,q,p,o,n,m,l=P.n
H.h(a,"$ib",[l],"$ab")
u=a.length
if(u>=3){t=new Array((u-2)*3)
t.fixed$length=Array
s=H.c(t,[l])
for(r=!1,q=2,p=0;q<u;++q,p+=3){l=q-2
t=p+1
o=q-1
n=p+2
m=a.length
if(r){if(l>=m)return H.f(a,l)
C.a.m(s,p,a[l])
if(o>=a.length)return H.f(a,o)
C.a.m(s,t,a[o])
if(q>=a.length)return H.f(a,q)
C.a.m(s,n,a[q])
r=!1}else{if(o>=m)return H.f(a,o)
C.a.m(s,p,a[o])
if(l>=a.length)return H.f(a,l)
C.a.m(s,t,a[l])
if(q>=a.length)return H.f(a,q)
C.a.m(s,n,a[q])
r=!0}}C.a.aS(this.y,s)
this.af()}},
af:function(){var u=this.Q
if(u!=null)u.F(null)},
aV:function(){return!1},
bg:function(){return!1},
bP:function(){return!1},
ej:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.a
if(!J.a_(b,l))throw H.e(P.y("Shape was reduced to "+H.m(l)+" so can not build for "+H.m(b)+"."))
if(m.e==null){u=m.c*4
t=new Array(m.b)
t.fixed$length=Array
m.shd(H.c(t,[Z.bH]))
for(s=0,r=0;r<m.b;++r){q=l.cM(r)
p=q.gbm(q)
t=m.e;(t&&C.a).m(t,r,new Z.bH(q,p,s*4,u))
s+=p}}t=a.a
o=new Z.cE(Z.ml(t,34962,H.h(m.f,"$ib",[P.A],"$ab")),m.e,l)
o.sdV(H.c([],[Z.aO]))
l=m.r
if(l.length!==0){n=Z.et(t,34963,H.h(l,"$ib",[P.n],"$ab"))
C.a.h(o.b,new Z.aO(0,m.r.length,n))}l=m.x
if(l.length!==0){n=Z.et(t,34963,H.h(l,"$ib",[P.n],"$ab"))
C.a.h(o.b,new Z.aO(1,m.x.length,n))}l=m.y
if(l.length!==0){n=Z.et(t,34963,H.h(l,"$ib",[P.n],"$ab"))
C.a.h(o.b,new Z.aO(4,m.y.length,n))}return o},
shd:function(a){this.e=H.h(a,"$ib",[Z.bH],"$ab")},
scK:function(a){this.f=H.h(a,"$ib",[P.A],"$ab")},
sbq:function(a){this.r=H.h(a,"$ib",[P.n],"$ab")},
sct:function(a){this.x=H.h(a,"$ib",[P.n],"$ab")},
scq:function(a){this.y=H.h(a,"$ib",[P.n],"$ab")},
$icZ:1}
F.ea.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.O():u},
aV:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aV()||!1
if(!t.a.aV())u=!1
s=t.e
if(s!=null)s.aL(0)
return u},
bg:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.bg()||!1
if(!t.a.bg())u=!1
s=t.e
if(s!=null)s.aL(0)
return u},
bP:function(){var u=this.e
if(u!=null)++u.d
this.a.bP()
u=this.e
if(u!=null)u.aL(0)
return!0},
ej:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a.c.length,d=a1.gem(a1),c=a1.gbm(a1),b=c*4,a=new Array(e*c)
a.fixed$length=Array
u=P.A
t=H.c(a,[u])
a=new Array(d)
a.fixed$length=Array
s=H.c(a,[Z.bH])
for(r=0,q=0;q<d;++q){p=a1.cM(q)
o=p.gbm(p)
C.a.m(s,q,new Z.bH(p,o,r*4,b))
for(n=0;n<e;++n){a=f.a.c
if(n>=a.length)return H.f(a,n)
m=a[n].eU(p)
l=r+n*c
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}a=a0.a
j=new Z.cE(Z.ml(a,34962,H.h(t,"$ib",[u],"$ab")),s,a1)
j.sdV(H.c([],[Z.aO]))
f.b.b
if(f.c.b.length!==0){u=P.n
i=H.c([],[u])
for(q=0;h=f.c.b,q<h.length;++q){h=h[q].a
h.a.a.bf()
C.a.h(i,h.e)
h=f.c.b
if(q>=h.length)return H.f(h,q)
h=h[q].b
h.a.a.bf()
C.a.h(i,h.e)}g=Z.et(a,34963,H.h(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aO(1,i.length,g))}if(f.d.b.length!==0){u=P.n
i=H.c([],[u])
for(q=0;h=f.d.b,q<h.length;++q){h=h[q].a
h.a.a.bf()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.f(h,q)
h=h[q].b
h.a.a.bf()
C.a.h(i,h.e)
h=f.d.b
if(q>=h.length)return H.f(h,q)
h=h[q].c
h.a.a.bf()
C.a.h(i,h.e)}g=Z.et(a,34963,H.h(i,"$ib",[u],"$ab"))
C.a.h(j.b,new Z.aO(4,i.length,g))}return j},
i:function(a){var u=this,t=H.c([],[P.k])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.M("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.M("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.M("   "))}return C.a.B(t,"\n")},
af:function(){var u=this.e
if(u!=null)u.F(null)},
$icZ:1}
F.cZ.prototype={}
F.ik.prototype={
kh:function(a){var u,t,s,r,q,p,o,n
H.h(a,"$ib",[F.bl],"$ab")
u=H.c([],[F.af])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
o=new F.af()
n=t.a
if(n==null)H.w(P.y("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.w(P.y("May not create a face with vertices attached to different shapes."))
o.a=t
C.a.h(t.d.b,o)
o.b=q
C.a.h(q.d.c,o)
o.c=p
C.a.h(p.d.d,o)
C.a.h(o.a.a.d.b,o)
q=o.a.a.e
if(q!=null)q.F(null)
C.a.h(u,o)}return u},
gn:function(a){return this.b.length},
aV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.J)(u),++r)if(!u[r].cT())s=!1
return s},
bg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.J)(u),++r)if(!u[r].cS())s=!1
return s},
i:function(a){return this.V()},
M:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(a))
return C.a.B(r,"\n")},
V:function(){return this.M("")},
scq:function(a){this.b=H.h(a,"$ib",[F.af],"$ab")}}
F.il.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.V()},
M:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].M(a+(""+u+". ")))}return C.a.B(s,"\n")},
V:function(){return this.M("")},
sct:function(a){this.b=H.h(a,"$ib",[F.bP],"$ab")}}
F.im.prototype={
gn:function(a){return 0},
i:function(a){return this.V()},
M:function(a){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
C.a.h(s,u[t].M(a))}return C.a.B(s,"\n")},
V:function(){return this.M("")},
sbq:function(a){this.b=H.h(a,"$ib",[F.ci],"$ab")}}
F.bl.prototype={
eU:function(a){var u,t=this,s=J.T(a)
if(s.t(a,$.ae())){s=t.f
u=[P.A]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.t(a,$.aq())){s=t.r
u=[P.A]
if(s==null)return H.c([0,1,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.t(a,$.bF())){s=t.x
u=[P.A]
if(s==null)return H.c([0,0,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.t(a,$.ai())){s=t.y
u=[P.A]
if(s==null)return H.c([0,0],u)
else return H.c([s.a,s.b],u)}else if(s.t(a,$.bG())){s=t.z
u=[P.A]
if(s==null)return H.c([0,0,0],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.t(a,$.du())){s=t.Q
u=[P.A]
if(s==null)return H.c([1,1,1],u)
else return H.c([s.a,s.b,s.c],u)}else if(s.t(a,$.dv())){s=t.Q
u=[P.A]
if(s==null)return H.c([1,1,1,1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else if(s.t(a,$.cB()))return H.c([t.ch],[P.A])
else if(s.t(a,$.bE())){s=t.cx
u=[P.A]
if(s==null)return H.c([-1,-1,-1,-1],u)
else return H.c([s.a,s.b,s.c,s.d],u)}else return H.c([],[P.A])},
cT:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dd()
t.d.P(0,new F.jw(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.aL(0)}return!0},
cS:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dd()
t.d.P(0,new F.jv(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.af()
s=t.a.e
if(s!=null)s.aL(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
M:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
C.a.h(q,C.b.b0(J.b3(s.e),0))
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
C.a.h(q,V.G(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.B(q,", ")
return a+"{"+t+"}"},
V:function(){return this.M("")}}
F.jw.prototype={
$1:function(a){var u,t
H.i(a,"$iaf")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:8}
F.jv.prototype={
$1:function(a){var u,t
H.i(a,"$iaf")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:8}
F.jp.prototype={
bf:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.y("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.af()
return!0},
bO:function(a,b,c,d,e,f){var u=F.co(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)u[s].cT()
return!0},
bg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)u[s].cS()
return!0},
bP:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.j()
o=q.b
if(typeof o!=="number")return o.j()
n=q.c
if(typeof n!=="number")return n.j()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.V()},
M:function(a){var u,t,s,r
this.bf()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.J)(t),++r)C.a.h(u,t[r].M(a))
return C.a.B(u,"\n")},
V:function(){return this.M("")},
scK:function(a){this.c=H.h(a,"$ib",[F.bl],"$ab")}}
F.jq.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){var u=this
H.p(b,{func:1,ret:-1,args:[F.af]})
C.a.P(u.b,b)
C.a.P(u.c,new F.jr(u,b))
C.a.P(u.d,new F.js(u,b))},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
return C.a.B(r,"\n")},
shz:function(a){this.b=H.h(a,"$ib",[F.af],"$ab")},
shA:function(a){this.c=H.h(a,"$ib",[F.af],"$ab")},
shB:function(a){this.d=H.h(a,"$ib",[F.af],"$ab")}}
F.jr.prototype={
$1:function(a){H.i(a,"$iaf")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:8}
F.js.prototype={
$1:function(a){var u
H.i(a,"$iaf")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:8}
F.jt.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)C.a.h(r,u[s].M(""))
return C.a.B(r,"\n")},
shK:function(a){this.b=H.h(a,"$ib",[F.bP],"$ab")},
shL:function(a){this.c=H.h(a,"$ib",[F.bP],"$ab")}}
F.ju.prototype={
gn:function(a){return 0},
i:function(a){return this.V()},
V:function(){var u,t,s=H.c([],[P.k])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
C.a.h(s,u[t].M(""))}return C.a.B(s,"\n")},
sbq:function(a){this.b=H.h(a,"$ib",[F.ci],"$ab")}}
O.cf.prototype={
gu:function(){var u=this.dy
return u==null?this.dy=D.O():u},
a_:function(a){var u
H.i(a,"$ix")
u=this.dy
if(u!=null)u.F(a)},
ck:function(){return this.a_(null)},
e5:function(a){H.i(a,"$ix")
this.a=null
this.a_(a)},
jd:function(){return this.e5(null)},
i2:function(a,b){var u=V.as
H.h(b,"$ij",[u],"$aj")
u=new D.bM([u])
u.b=!0
this.a_(u)},
i4:function(a,b){var u=V.as
H.h(b,"$ij",[u],"$aj")
u=new D.bN([u])
u.b=!0
this.a_(u)},
dN:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.a8(a1.e.length+3,4)*4,a3=C.e.a8(a1.f.length+3,4)*4,a4=C.e.a8(a1.r.length+3,4)*4,a5=C.e.a8(a1.x.length+3,4)*4,a6=C.e.a8(a1.y.length+3,4)*4,a7=C.e.a8(a1.z.length+3,4)*4,a8=C.e.a8(a0.e.a.length+3,4)*4
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
f=a1===C.f||u===C.f||t===C.f||s===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.ae()
if(h){j=$.aq()
a=new Z.ac(a.a|j.a)}if(g){j=$.bF()
a=new Z.ac(a.a|j.a)}if(f){j=$.ai()
a=new Z.ac(a.a|j.a)}if(e){j=$.bG()
a=new Z.ac(a.a|j.a)}if(c){j=$.bE()
a=new Z.ac(a.a|j.a)}return new A.hF(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
Y:function(a,b){H.h(a,"$ib",[T.d2],"$ab")
if(b!=null)if(!C.a.ap(a,b)){b.sai(0,a.length)
C.a.h(a,b)}},
ag:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.av(u,u.length,[H.v(u,0)]);u.C();){t=u.d
t.toString
s=$.jo
if(s==null)s=$.jo=new V.I(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aA(s)}}},
l1:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.dN()
u=a5.fr.k(0,a4.ax)
if(u==null){u=A.nK(a4,a5.a)
t=u.b
if(t.length===0)H.w(P.y("May not cache a shader with no name."))
if(a5.fr.bR(0,t))H.w(P.y('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.m(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bS
a4=a6.e
if(!(a4 instanceof Z.cE))a4=a6.e=null
if(a4==null||!J.a_(a4.d,r)){a4=s.r1
if(a4)a6.d.aV()
q=s.r2
if(q)a6.d.bg()
p=s.ry
if(p)a6.d.bP()
o=a6.d.ej(new Z.jy(a5.a),r)
o.bh($.ae()).e=a3.a.Q.c
if(a4)o.bh($.aq()).e=a3.a.cx.c
if(q)o.bh($.bF()).e=a3.a.ch.c
if(s.rx)o.bh($.ai()).e=a3.a.cy.c
if(p)o.bh($.bG()).e=a3.a.db.c
if(s.x1)o.bh($.bE()).e=a3.a.dx.c
a6.e=o}a4=T.d2
n=H.c([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.kx()
if(s.fx){q=a3.a
m=a5.dx
m=m.ga3(m)
q=q.dy
q.toString
q.aC(m.at(0,!0))}if(s.fy){q=a3.a
m=a5.cx
if(m==null){m=a5.db
m=m.ga3(m)
l=a5.dx
l=a5.cx=m.j(0,l.ga3(l))
m=l}q=q.fr
q.toString
q.aC(m.at(0,!0))}q=a3.a
m=a5.ch
if(m==null){m=a5.gkZ()
l=a5.dx
l=a5.ch=m.j(0,l.ga3(l))
m=l}q=q.fy
q.toString
q.aC(m.at(0,!0))
if(s.x2){q=a3.a
m=a3.b
q=q.k1
q.toString
q.aC(C.p.at(m,!0))}if(s.y1){q=a3.a
m=a3.c
q=q.k2
q.toString
q.aC(C.p.at(m,!0))}if(s.y2){q=a3.a
m=a3.d
q=q.k3
q.toString
q.aC(C.p.at(m,!0))}if(s.aH>0){k=a3.e.a.length
q=a3.a.k4
C.c.a6(q.a,q.d,k)
for(q=[P.A],j=0;j<k;++j){m=a3.a
l=a3.e.a
if(j>=l.length)return H.f(l,j)
l=l[j]
m.toString
H.i(l,"$ias")
m=m.r1
if(j>=m.length)return H.f(m,j)
m=m[j]
i=new Float32Array(H.cq(H.h(l.at(0,!0),"$ib",q,"$ab")))
C.c.fi(m.a,m.d,!1,i)}}switch(s.a){case C.d:break
case C.i:q=a3.a
m=a3.f.f
q=q.r2
q.toString
l=m.a
h=m.b
m=m.c
C.c.v(q.a,q.d,l,h,m)
break
case C.f:a3.Y(n,a3.f.d)
q=a3.a
m=a3.f.d
q.aw(q.rx,q.x1,m)
m=a3.a
q=a3.f.f
m=m.r2
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break
case C.h:a3.Y(n,a3.f.e)
q=a3.a
m=a3.f.e
q.ao(q.ry,q.x1,m)
m=a3.a
q=a3.f.f
m=m.r2
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=a3.a
m=a3.r.f
q=q.x2
q.toString
l=m.a
h=m.b
m=m.c
C.c.v(q.a,q.d,l,h,m)
break
case C.f:a3.Y(n,a3.r.d)
q=a3.a
m=a3.r.d
q.aw(q.y1,q.aH,m)
m=a3.a
q=a3.r.f
m=m.x2
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break
case C.h:a3.Y(n,a3.r.e)
q=a3.a
m=a3.r.e
q.ao(q.y2,q.aH,m)
m=a3.a
q=a3.r.f
m=m.x2
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break}switch(s.c){case C.d:break
case C.i:q=a3.a
m=a3.x.f
q=q.ax
q.toString
l=m.a
h=m.b
m=m.c
C.c.v(q.a,q.d,l,h,m)
break
case C.f:a3.Y(n,a3.x.d)
q=a3.a
m=a3.x.d
q.aw(q.bS,q.bT,m)
m=a3.a
q=a3.x.f
m=m.ax
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break
case C.h:a3.Y(n,a3.x.e)
q=a3.a
m=a3.x.e
q.ao(q.ep,q.bT,m)
m=a3.a
q=a3.x.f
m=m.ax
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break}switch(s.d){case C.d:break
case C.i:q=a3.a
m=a3.y.f
q=q.bU
q.toString
l=m.a
h=m.b
m=m.c
C.c.v(q.a,q.d,l,h,m)
break
case C.f:a3.Y(n,a3.y.d)
q=a3.a
m=a3.y.d
q.aw(q.eq,q.bV,m)
m=a3.a
q=a3.y.f
m=m.bU
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break
case C.h:a3.Y(n,a3.y.e)
q=a3.a
m=a3.y.e
q.ao(q.er,q.bV,m)
m=a3.a
q=a3.y.f
m=m.bU
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
break}switch(s.e){case C.d:break
case C.i:q=a3.a
m=a3.z.f
q=q.bW
q.toString
l=m.a
h=m.b
m=m.c
C.c.v(q.a,q.d,l,h,m)
m=a3.a
h=a3.z.ch
m=m.bY
C.c.R(m.a,m.d,h)
break
case C.f:a3.Y(n,a3.z.d)
q=a3.a
m=a3.z.d
q.aw(q.es,q.bX,m)
m=a3.a
q=a3.z.f
m=m.bW
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
q=a3.a
h=a3.z.ch
q=q.bY
C.c.R(q.a,q.d,h)
break
case C.h:a3.Y(n,a3.z.e)
q=a3.a
m=a3.z.e
q.ao(q.eu,q.bX,m)
m=a3.a
q=a3.z.f
m=m.bW
m.toString
l=q.a
h=q.b
q=q.c
C.c.v(m.a,m.d,l,h,q)
q=a3.a
h=a3.z.ch
q=q.bY
C.c.R(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.eF
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.e,m=q.length,f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
l=a3.a.cX
if(f>=l.length)return H.f(l,f)
c=l[f]
l=g.aA(d.a)
h=l.a
if(typeof h!=="number")return h.j()
b=l.b
if(typeof b!=="number")return b.j()
a=l.c
if(typeof a!=="number")return a.j()
a=l.w(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
l=a.b
a=a.c
C.c.v(b.a,b.d,h,l,a)
a=d.c
l=c.c
C.c.v(l.a,l.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.eG
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.f,m=q.length,f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
l=a3.a.cY
if(f>=l.length)return H.f(l,f)
c=l[f]
l=d.gby(d)
h=c.b
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=g.U(d.gby(d))
h=c.c
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gaG(d)
h=c.d
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gcN()
h=c.e
C.c.R(h.a,h.d,l)
l=d.gcO()
h=c.f
C.c.R(h.a,h.d,l)
l=d.gcP()
h=c.r
C.c.R(h.a,h.d,l);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.eH
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.r,m=q.length,f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
l=a3.a.cZ
if(f>=l.length)return H.f(l,f)
c=l[f]
l=d.gby(d)
h=c.b
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gcW(d).lo()
h=c.c
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=g.U(d.gby(d))
h=c.d
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gaG(d)
h=c.e
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.glm()
h=c.f
C.c.R(h.a,h.d,l)
l=d.gll()
h=c.r
C.c.R(h.a,h.d,l)
l=d.gcN()
h=c.x
C.c.R(h.a,h.d,l)
l=d.gcO()
h=c.y
C.c.R(h.a,h.d,l)
l=d.gcP()
h=c.z
C.c.R(h.a,h.d,l);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.eI
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.x,m=q.length,l=[a4],f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
h=a3.a.d_
if(f>=h.length)return H.f(h,f)
c=h[f]
h=d.gbz()
H.h(n,"$ib",l,"$ab")
if(!C.a.ap(n,h)){h.sai(0,n.length)
C.a.h(n,h)}h=d.gcW(d)
b=c.d
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gld()
b=c.b
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gab(d)
b=c.c
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=g.aA(d.gcW(d))
b=h.a
if(typeof b!=="number")return b.j()
a=h.b
if(typeof a!=="number")return a.j()
a0=h.c
if(typeof a0!=="number")return a0.j()
a0=h.w(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.v(a.a,a.d,b,h,a0)
a0=d.gaG(d)
h=c.f
C.c.v(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gbz()
h=a0.gaj(a0)
if(!h){h=c.x
C.c.a6(h.a,h.d,1)}else{h=c.r
b=a0.gaj(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gai(a0))
h=c.x
C.c.a6(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.eJ
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.y,m=q.length,l=[P.A],h=[a4],f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
b=a3.a.d0
if(f>=b.length)return H.f(b,f)
c=b[f]
b=d.gbz()
H.h(n,"$ib",h,"$ab")
if(!C.a.ap(n,b)){b.sai(0,n.length)
C.a.h(n,b)}a1=g.j(0,d.ga3(d))
b=d.ga3(d)
a=$.cV
b=b.U(a==null?$.cV=new V.u(0,0,0):a)
a=c.b
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=$.cV
b=a1.U(b==null?$.cV=new V.u(0,0,0):b)
a=c.c
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=a1.bv(0)
a=c.d
i=new Float32Array(H.cq(H.h(new V.aF(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).at(0,!0),"$ib",l,"$ab")))
C.c.fh(a.a,a.d,!1,i)
a=d.gaG(d)
b=c.e
C.c.v(b.a,b.d,a.a,a.b,a.c)
a=d.gbz()
b=a.gaj(a)
if(!b){b=c.r
C.c.a6(b.a,b.d,1)}else{b=c.f
a0=a.gaj(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gai(a))
b=c.r
C.c.a6(b.a,b.d,0)}b=d.gcN()
a=c.x
C.c.R(a.a,a.d,b)
b=d.gcO()
a=c.y
C.c.R(a.a,a.d,b)
b=d.gcP()
a=c.z
C.c.R(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.eK
C.c.a6(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.z,m=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===m||(0,H.J)(q),++e){d=q[e]
l=a3.a.d1
if(f>=l.length)return H.f(l,f)
c=l[f]
l=d.gbz()
H.h(n,"$ib",a4,"$ab")
if(!C.a.ap(n,l)){l.sai(0,n.length)
C.a.h(n,l)}l=d.gby(d)
h=c.b
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gcW(d)
h=c.c
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gld()
h=c.d
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gab(d)
h=c.e
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=g.U(d.gby(d))
h=c.f
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.gbz()
h=l.gaj(l)
if(!h){l=c.x
C.c.a6(l.a,l.d,1)}else{h=c.r
b=l.gaj(l)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,l.gai(l))
l=c.x
C.c.a6(l.a,l.d,0)}l=d.gaG(d)
h=c.y
C.c.v(h.a,h.d,l.a,l.b,l.c)
l=d.glp()
h=c.z
C.c.R(h.a,h.d,l)
l=d.glq()
h=c.Q
C.c.R(h.a,h.d,l)
l=d.gcN()
h=c.ch
C.c.R(h.a,h.d,l)
l=d.gcO()
h=c.cx
C.c.R(h.a,h.d,l)
l=d.gcP()
h=c.cy
C.c.R(h.a,h.d,l);++f}}}switch(s.f){case C.d:break
case C.i:break
case C.f:a3.Y(n,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.aw(a4.ev,a4.bZ,q)
break
case C.h:a3.Y(n,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ao(a4.ew,a4.bZ,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga3(q).bv(0)}a4=a4.id
a4.toString
a4.aC(q.at(0,!0))}if(s.dy){a3.Y(n,a3.ch)
a4=a3.a
q=a3.ch
a4.ao(a4.ex,a4.ey,q)
switch(s.r){case C.d:break
case C.i:a4=a3.a
q=a3.cx.f
a4=a4.c_
a4.toString
m=q.a
l=q.b
q=q.c
C.c.v(a4.a,a4.d,m,l,q)
break
case C.f:a3.Y(n,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.aw(a4.ez,a4.c0,q)
q=a3.a
a4=a3.cx.f
q=q.c_
q.toString
m=a4.a
l=a4.b
a4=a4.c
C.c.v(q.a,q.d,m,l,a4)
break
case C.h:a3.Y(n,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ao(a4.eA,a4.c0,q)
q=a3.a
a4=a3.cx.f
q=q.c_
q.toString
m=a4.a
l=a4.b
a4=a4.c
C.c.v(q.a,q.d,m,l,a4)
break}switch(s.x){case C.d:break
case C.i:a4=a3.a
q=a3.cy.f
a4=a4.c2
a4.toString
m=q.a
l=q.b
q=q.c
C.c.v(a4.a,a4.d,m,l,q)
q=a3.a
l=a3.cy.ch
q=q.c1
C.c.R(q.a,q.d,l)
break
case C.f:a3.Y(n,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.aw(a4.eB,a4.c3,q)
q=a3.a
a4=a3.cy.f
q=q.c2
q.toString
m=a4.a
l=a4.b
a4=a4.c
C.c.v(q.a,q.d,m,l,a4)
a4=a3.a
l=a3.cy.ch
a4=a4.c1
C.c.R(a4.a,a4.d,l)
break
case C.h:a3.Y(n,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ao(a4.eC,a4.c3,q)
q=a3.a
a4=a3.cy.f
q=q.c2
q.toString
m=a4.a
l=a4.b
a4=a4.c
C.c.v(q.a,q.d,m,l,a4)
a4=a3.a
l=a3.cy.ch
a4=a4.c1
C.c.R(a4.a,a4.d,l)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.i:a4=a3.a
m=a3.db.f
a4=a4.c4
C.c.R(a4.a,a4.d,m)
break
case C.f:a3.Y(n,a3.db.d)
a4=a3.a
m=a3.db.d
a4.aw(a4.eD,a4.c5,m)
m=a3.a
a4=a3.db.f
m=m.c4
C.c.R(m.a,m.d,a4)
break
case C.h:a3.Y(n,a3.db.e)
a4=a3.a
m=a3.db.e
a4.ao(a4.eE,a4.c5,m)
m=a3.a
a4=a3.db.f
m=m.c4
C.c.R(m.a,m.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<n.length;++j)n[j].aU(a5)
a4=a6.e
a4.aU(a5)
a4.bj(a5)
a4.bD(a5)
if(q)p.disable(3042)
for(j=0;j<n.length;++j)n[j].bD(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.kv()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dN().ax},
shh:function(a){this.e=H.h(a,"$ia0",[V.as],"$aa0")}}
O.hD.prototype={
jg:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.L(u.b,t,a,[P.A])
t.b=!0
u.a.a_(t)}},
aF:function(){this.dn()
this.jg(1)}}
O.cP.prototype={
a_:function(a){this.a.a_(H.i(a,"$ix"))},
ck:function(){return this.a_(null)},
aF:function(){},
ji:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().W(0,t.gbH())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.gbH())
s=new D.L(t.b+".texture2D",u,t.d,[T.bW])
s.b=!0
t.a.a_(s)}},
jj:function(a){},
sbA:function(a){var u,t=this
if(a==null){if(t.c===C.f){t.c=C.i
u=t.a
u.a=null
u.a_(null)}}else{u=t.c
if(u!==C.f){if(u===C.d)t.aF()
t.c=C.f
t.jj(null)
u=t.a
u.a=null
u.a_(null)}}t.ji(a)}}
O.hE.prototype={}
O.be.prototype={
e7:function(a){var u,t,s=this
if(!J.a_(s.f,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.aa])
t.b=!0
s.a.a_(t)}},
aF:function(){this.dn()
this.e7(new V.aa(1,1,1))},
saG:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.i
t.aF()
u=t.a
u.a=null
u.a_(null)}t.e7(b)}}
O.hG.prototype={
jh:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.L(u.b+".refraction",t,a,[P.A])
t.b=!0
u.a.a_(t)}},
aF:function(){this.cg()
this.jh(1)}}
O.hH.prototype={
cF:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.a_(t)}},
aF:function(){this.cg()
this.cF(100)}}
O.cm.prototype={}
T.d2.prototype={}
T.bW.prototype={}
T.iP.prototype={
gai:function(a){return this.a},
sai:function(a,b){this.a=b},
gaj:function(a){var u=this.d
u=u==null?null:u.gaj(u)
if(u==null){u=this.c
u=u==null?null:u.gaj(u)}return u===!0},
gu:function(){var u=this.f
return u==null?this.f=D.O():u},
aU:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aU(a)}},
bD:function(a){var u=this.d
if(u!=null){u.bD(a)
this.d=null}},
sjv:function(a){this.e=H.h(a,"$ib",[T.bW],"$ab")}}
T.iQ.prototype={
gai:function(a){return this.a},
sai:function(a,b){this.a=b},
gaj:function(a){return this.d},
gu:function(){var u=this.y
return u==null?this.y=D.O():u},
aU:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
bD:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.iR.prototype={
kG:function(a,b,c,d){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iQ()
t.a=0
t.b=q
t.d=t.c=!1
r=W.q
W.ag(u,"load",H.p(new T.iS(this,t,u,!1,q,!1,!0),{func:1,ret:-1,args:[r]}),!1,r)
return t},
je:function(a,b,c){var u,t,s,r
b=V.lp(b)
u=V.lp(a.width)
t=V.lp(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kR()
s.width=u
s.height=t
r=H.i(C.n.fo(s,"2d"),"$icF")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oQ(r.getImageData(0,0,s.width,s.height))}}}
T.iS.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.je(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.l7(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.eo()}++s.e},
$S:26}
V.fB.prototype={
bi:function(a,b){return!0},
i:function(a){return"all"},
$ibr:1}
V.br.prototype={}
V.dU.prototype={
bi:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s)if(u[s].bi(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.J)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saP:function(a){this.a=H.h(a,"$ib",[V.br],"$ab")},
$ibr:1}
V.bv.prototype={
bi:function(a,b){return!this.fz(0,b)},
i:function(a){return"!["+this.dm(0)+"]"}}
V.ij.prototype={
fF:function(a){var u,t
if(a.a.length<=0)throw H.e(P.y("May not create a SetMatcher with zero characters."))
u=new H.aB([P.n,P.a4])
for(t=new H.dR(a,a.gn(a),[H.aD(a,"z",0)]);t.C();)u.m(0,t.d,!0)
this.sjf(u)},
bi:function(a,b){return this.a.bR(0,b)},
i:function(a){var u=this.a
return P.d1(new H.dQ(u,[H.v(u,0)]),0,null)},
sjf:function(a){this.a=H.h(a,"$iD",[P.n,P.a4],"$aD")},
$ibr:1}
V.d_.prototype={
B:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d4(this.a.T(0,b))
r.saP(H.c([],[V.br]))
r.c=!1
C.a.h(this.c,r)
return r},
kz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
if(r.bi(0,a))return r}return},
i:function(a){return this.b},
sjE:function(a){this.c=H.h(a,"$ib",[V.d4],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.mU(this.b,"\n","\\n"),t=H.mU(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d3.prototype={
i:function(a){return this.b},
sj9:function(a){var u=P.k
this.c=H.h(a,"$iD",[u,u],"$aD")}}
V.iW.prototype={
T:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.d_(this,b)
u.sjE(H.c([],[V.d4]))
u.d=null
this.a.m(0,b,u)}return u},
bC:function(a){var u,t=this.b.k(0,a)
if(t==null){t=new V.d3(a)
u=P.k
t.sj9(new H.aB([u,u]))
this.b.m(0,a,t)}return t},
lb:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.ej]),k=this.c,j=[P.n],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.H(a,s)
q=k.kz(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d1(i,0,m)
throw H.e(P.y("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d1(i,0,m)
o=k.d
n=o.c.k(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
sjs:function(a){this.a=H.h(a,"$iD",[P.k,V.d_],"$aD")},
sjw:function(a){this.b=H.h(a,"$iD",[P.k,V.d3],"$aD")}}
V.d4.prototype={
i:function(a){return this.b.b+": "+this.dm(0)}}
X.dA.prototype={$ibu:1}
X.hi.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.O():u}}
X.e0.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.O():u},
b7:function(a){var u
H.i(a,"$ix")
u=this.f
if(u!=null)u.F(a)},
h0:function(){return this.b7(null)},
seV:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gu().W(0,s.gdu())
t=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gdu())
u=new D.L("mover",t,s.b,[U.ab])
u.b=!0
s.b7(u)}},
$ibu:1,
$idA:1}
X.ed.prototype={}
V.it.prototype={
fH:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.q
W.ag(q,"scroll",H.p(new V.iv(o),{func:1,ret:-1,args:[r]}),!1,r)},
cL:function(a,b){var u,t,s,r,q
a=H.ah(C.e.kn(a,0,4))
u=P.fd(C.z,b,C.l,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nn()
q.href="#"+H.m(u)
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
a2:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ib",[P.k],"$ab")
this.jl()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.lb(C.a.kF(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.J)(s),++q){p=s[q]
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
if(H.p9(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.fd(C.z,n,C.l,!1)
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
jl:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iW()
t=P.k
u.sjs(new H.aB([t,V.d_]))
u.sjw(new H.aB([t,V.d3]))
u.c=null
u.c=u.T(0,q)
t=u.T(0,q).B(0,p)
s=V.ao(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,p).B(0,p)
s=new V.bv()
r=[V.br]
s.saP(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.a8("*"))
C.a.h(s.a,t)
t=u.T(0,p).B(0,"BoldEnd")
s=V.ao(new H.a8("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,q).B(0,o)
s=V.ao(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,o).B(0,o)
s=new V.bv()
s.saP(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.a8("_"))
C.a.h(s.a,t)
t=u.T(0,o).B(0,n)
s=V.ao(new H.a8("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,q).B(0,m)
s=V.ao(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,m).B(0,m)
s=new V.bv()
s.saP(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.a8("`"))
C.a.h(s.a,t)
t=u.T(0,m).B(0,"CodeEnd")
s=V.ao(new H.a8("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,q).B(0,l)
s=V.ao(new H.a8("["))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,l).B(0,k)
s=V.ao(new H.a8("|"))
C.a.h(t.a,s)
s=u.T(0,l).B(0,j)
t=V.ao(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,l).B(0,l)
t=new V.bv()
t.saP(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.a8("|]"))
C.a.h(t.a,s)
s=u.T(0,k).B(0,j)
t=V.ao(new H.a8("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,k).B(0,k)
t=new V.bv()
t.saP(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.a8("|]"))
C.a.h(t.a,s)
C.a.h(u.T(0,q).B(0,i).a,new V.fB())
s=u.T(0,i).B(0,i)
t=new V.bv()
t.saP(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.a8("*_`["))
C.a.h(t.a,s)
s=u.T(0,"BoldEnd")
s.d=s.a.bC(p)
s=u.T(0,n)
s.d=s.a.bC(o)
s=u.T(0,"CodeEnd")
s.d=s.a.bC(m)
s=u.T(0,j)
s.d=s.a.bC("Link")
s=u.T(0,i)
s.d=s.a.bC(i)
this.b=u}}
V.iv.prototype={
$1:function(a){P.l3(C.o,new V.iu(this.a))},
$S:26}
V.iu.prototype={
$0:function(){var u=C.j.ay(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
B.ay.prototype={
gee:function(){var u=this
return new B.ay(u.a,u.b+1,u.c,u.d,u.e,u.f)},
geg:function(){var u=this
return new B.ay(u.a,u.b-1,u.c,u.d,u.e,u.f)},
gab:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gab(r)
t=0}return new B.ay(t,u.b,u.c,s,u.e,r)},
gae:function(a){var u=this,t=u.a-1,s=u.d,r=u.f
if(t<0){s-=16
r=r==null?null:r.gae(r)
t=15}return new B.ay(t,u.b,u.c,s,u.e,r)},
gaI:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaI()
t=0}return new B.ay(u.a,u.b,t,u.d,s,r)},
gaT:function(a){var u=this,t=u.c-1,s=u.e,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaT(r)
t=15}return new B.ay(u.a,u.b,t,u.d,s,r)},
eX:function(a){var u=this,t=J.T(a)
if(t.t(a,$.b0()))return u.gae(u)
else if(t.t(a,$.b1()))return u.gab(u)
else if(t.t(a,$.bB()))return u.geg()
else if(t.t(a,$.b2()))return u.gee()
else if(t.t(a,$.bC()))return u.gaT(u)
else if(t.t(a,$.bD()))return u.gaI()
else return},
gcR:function(){var u=this
return V.i9(u.a+u.d,u.b,u.c+u.e,1,1,1)},
i:function(a){var u=this
return H.m(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.np(u.ga4(u))+")"},
ga4:function(a){var u=this,t=u.f
t=t==null?null:t.ah(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t},
sa4:function(a,b){var u=this,t=u.f
if(t!=null)t.X(u.a,u.b,u.c,b)}}
B.fQ.prototype={
c6:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.X(u,s,t,this.hF(u,s,t))
a.d3()},
hF:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.e.b2(a+b+c,2)===0?113:111},
$ilJ:1}
B.c4.prototype={
fB:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.d=new Uint8Array(12288)
k.scn(H.c([],[E.a1]))
for(u=k.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.J)(u),++s){r=u[s]
q=E.c9(j,j,j,j)
p=r.y
o=H.v(p,0)
H.C(q,o)
n=[o]
if(H.F(p.bo(H.c([q],n)))){m=p.a
l=m.length
C.a.h(m,q)
o=H.h(H.c([q],n),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(l,o)}p=k.e;(p&&C.a).h(p,q)}k.b=k.a=0
k.f=!1
k.x=k.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
d3:function(){var u,t=this
t.x=!1
t.f=!0
t.saN(!1)
u=t.gae(t)
if(u!=null)u.f=!0
u=t.gab(t)
if(u!=null)u.f=!0
u=t.gaI()
if(u!=null)u.f=!0
u=t.gaT(t)
if(u!=null)u.f=!0},
ah:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
return u[t]},
bL:function(a,b,c,d){var u=a==null?null:a.cd(b,c,d)
return u==null?0:u},
cd:function(a,b,c){var u,t,s=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return s.bL(s.gae(s),a+16,b,c)
if(a>=16)return s.bL(s.gab(s),a-16,b,c)
if(c<0)return s.bL(s.gaT(s),a,b,c+16)
if(c>=16)return s.bL(s.gaI(),a,b,c-16)
u=s.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
return u[t]},
X:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
u[t]=d
return!0},
gae:function(a){return this.c.aX(this.a-16,this.b)},
gaI:function(){return this.c.aX(this.a,this.b+16)},
gab:function(a){return this.c.aX(this.a+16,this.b)},
gaT:function(a){return this.c.aX(this.a,this.b-16)},
dg:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.ah(a,u,b)
if(t>=100&&t<=117)return u}return c},
lc:function(a,b){return this.dg(a,b,48)},
lf:function(){var u,t=this
if(t.x||!t.r)return
t.f=t.r=!1
u=B.l2(t.c.a,null)
u.km(t)
u.d2(0,t.e)},
saN:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
lg:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.x||i.r){i.saN(!1)
return}u=V.l1(i.a,i.b,16,16)
t=u.eW(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.p()
if(typeof p!=="number")return H.d(p)
o=s-p
if(q*q+o*o<100){i.saN(!0)
return}n=u.eW(b)
s=b.a
if(typeof s!=="number")return s.p()
m=b.b
if(typeof m!=="number")return m.p()
m=new V.a3(s-r,m-p)
l=m.w(0,Math.sqrt(m.E(m)))
m=n.a
if(typeof m!=="number")return m.p()
s=n.b
if(typeof s!=="number")return s.p()
k=new V.a3(m-r,s-p)
j=k.E(k)
if(j>6400){i.saN(!1)
return}i.saN(l.E(k.w(0,j))>0)},
scn:function(a){this.e=H.h(a,"$ib",[E.a1],"$ab")}}
B.fR.prototype={
ko:function(a,b,c){var u,t,s=this
s.b=b
s.c=a
s.d=c
s.e=$.bA()
s.hp()
for(;s.jp(););u=s.b
t=s.d
s.b=u.l(0,new V.u(t.a,t.b,t.c))
return!0},
hp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.c,a2=a0.b,a3=a1.cc(0,new V.I(a2.a,a2.b,a2.c))
a2=a3.cc(0,a0.d)
a1=a3.a
u=a2.a
t=Math.min(H.ct(a1),H.ct(u))
if(typeof a1!=="number")return a1.l()
if(typeof u!=="number")return u.l()
s=Math.max(a1+a3.d,u+a2.d)
u=a3.b
a1=a2.b
r=Math.min(H.ct(u),H.ct(a1))
if(typeof u!=="number")return u.l()
if(typeof a1!=="number")return a1.l()
q=Math.max(u+a3.e,a1+a2.e)
a1=a3.c
u=a2.c
p=Math.min(H.ct(a1),H.ct(u))
if(typeof a1!=="number")return a1.l()
if(typeof u!=="number")return u.l()
o=Math.max(a1+a3.f,u+a2.f)
a2=a0.a
n=a2.ah(t,r,p)
m=a2.ah(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.a.sn(a0.f,0)
C.a.sn(a0.r,0)
C.a.sn(a0.x,0)
a1=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a1))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a2=h.ga4(h)
if(a2>=100&&a2<=117){g=$.bA()
f=h.gae(h)
a2=f.ga4(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b0()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gab(h)
a2=f.ga4(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b1()
g=new V.a5((g.a|a2.a)>>>0)}a2=h.a
u=h.b
e=h.c
d=h.d
c=h.e
b=h.f
f=new B.ay(a2,u-1,e,d,c,b)
a=f.ga4(f)
a=a>=100&&a<=117
if(a){a=$.bB()
g=new V.a5((g.a|a.a)>>>0)}f=new B.ay(a2,u+1,e,d,c,b)
a2=f.ga4(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.b2()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gaT(h)
a2=f.ga4(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bC()
g=new V.a5((g.a|a2.a)>>>0)}f=h.gaI()
a2=f.ga4(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bD()
g=new V.a5((g.a|a2.a)>>>0)}a2=$.n_()
if(!J.a_(g,a2)){C.a.h(a0.f,h.gcR())
u=a0.r
g.toString
e=$.lw().a
d=g.a
C.a.h(u,new V.a5((a2.a&e&~d)>>>0))
C.a.h(a0.x,!1)}}h=h.gaI()}i=new B.ay(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gab(j)}},
jp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.d6())return!1
u=e.c
t=e.b
s=u.cc(0,new V.I(t.a,t.b,t.c))
r=$.bA()
for(q=0,p=-1,o=0;u=e.f,o<u.length;++o){t=e.x
if(o>=t.length)return H.f(t,o)
if(!t[o]){n=u[o]
u=e.r
if(o>=u.length)return H.f(u,o)
m=u[o]
l=s.kp(n,e.d,m)
if(l!=null)if(J.a_(r,$.bA())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.T(r)
if(u.t(r,$.bA()))return!1
C.a.m(e.x,p,!0)
k=e.d.j(0,q)
j=e.d.j(0,1-q)
if(u.t(r,$.b1())||u.t(r,$.b0())){u=e.b
t=u.a
i=k.a
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(t+i,h+g,u+f)
e.d=new V.I(0,j.b,j.c)}else if(u.t(r,$.b2())||u.t(r,$.bB())){u=e.b
t=u.b
i=k.b
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,t+i,u+f)
e.d=new V.I(j.a,0,j.c)}else if(u.t(r,$.bD())||u.t(r,$.bC())){u=e.b
t=u.c
i=k.c
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
e.b=new V.u(h+g,u+f,t+i)
e.d=new V.I(j.a,j.b,0)}e.e=new V.a5((e.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.m(this.b)+", "+H.m(this.e)+")"},
shk:function(a){this.f=H.h(a,"$ib",[V.bV],"$ab")},
shj:function(a){this.r=H.h(a,"$ib",[V.a5],"$ab")},
shJ:function(a){this.x=H.h(a,"$ib",[P.a4],"$ab")}}
B.kG.prototype={
$1:function(a){var u
H.i(a,"$ibi")
u=this.b
P.lq(C.j.fg(this.a.gkB(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.m(u.gcC())))},
$S:45}
B.Z.prototype={}
B.hI.prototype={
G:function(a){var u="./textures/"+a+".png"
return this.a.f.kG(u,!0,!1,!1)},
K:function(a,b){var u,t,s=O.lN()
s.dx.h(0,this.e)
u=s.r
u.saG(0,new V.aa(0.8,0.8,0.8))
u=s.x
u.saG(0,new V.aa(0.4,0.4,0.4))
s.r.sbA(a)
s.x.sbA(a)
s.db.sbA(a)
if(b){u=s.z
u.saG(0,new V.aa(0.5,0.5,0.5))
if(u.c===C.d){u.c=C.i
u.cg()
u.cF(100)
t=u.a
t.a=null
t.a_(null)}u.cF(3)}C.a.h(this.d,s)
return this.d.length-1},
dA:function(a){var u=this.G(a),t=O.lN()
t.f.sbA(u)
t.db.sbA(u)
return t},
sht:function(a){this.b=H.h(a,"$iD",[P.n,B.Z],"$aD")},
shR:function(a){this.c=H.h(a,"$iD",[P.n,[P.b,P.n]],"$aD")},
shS:function(a){this.d=H.h(a,"$ib",[O.cf],"$ab")}}
B.dZ.prototype={
i:function(a){var u=this
return"NeighborBlockInfo("+u.a.i(0)+", "+H.m(u.b)+", "+u.c.i(0)+", "+u.d+")"}}
B.e1.prototype={
fD:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
a0.r=!0
u=a0.d
u.ch=u.Q=0.4
u=X.bb()
u.a9(32)
u.ad(a0)
u.gaq().h(0,b.giu())
b.d=!0
u=X.bb()
u.a9(9)
u.ef(9,!0)
u.ad(a0)
u.gaq().h(0,b.gi7())
u=X.bb()
u.a9(69)
u.a9(81)
u.ad(a0)
u.gaq().h(0,b.gi5())
u=a0.d
t=u.b
u=t==null?u.b=D.O():t
u.h(0,b.gij())
u=X.bb()
u.a9(79)
u.ad(a0)
u.gaq().h(0,b.giQ())
u=new U.er()
t=X.bb()
t.a9(39)
t.a9(68)
s=u.giw()
t.gaq().h(0,s)
u.a=t
t=X.bb()
t.a9(37)
t.a9(65)
t.gaq().h(0,s)
u.b=t
t=X.bb()
t.a9(81)
t.gaq().h(0,s)
u.c=t
t=X.bb()
t.a9(69)
t.gaq().h(0,s)
u.d=t
t=X.bb()
t.a9(40)
t.a9(83)
t.gaq().h(0,s)
u.e=t
t=X.bb()
t.a9(38)
t.a9(87)
t.gaq().h(0,s)
u.f=t
t=U.dB()
t.saJ(30)
t.saW(0)
s=u.gaD()
t.gu().h(0,s)
u.r=t
t=U.dB()
t.saJ(30)
t.saW(0)
t.gu().h(0,s)
u.x=t
t=U.dB()
t.saJ(30)
t.saW(0)
t.gu().h(0,s)
u.y=t
u.Q=u.z=null
u.ch=60
u.cx=15
u.cy=0
u.dx=u.db=null
u.sdJ(a)
u.a.ad(a0)
u.b.ad(a0)
u.c.ad(a0)
u.d.ad(a0)
u.e.ad(a0)
u.f.ad(a0)
u.r.saJ(6)
u.x.saJ(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.B().a)){t.r=-100
s=new D.L("acceleration",s,-100,[P.A])
s.b=!0
t.D(s)}u.y.saJ(6)
u.sdJ(H.p(b.ghH(),{func:1,ret:V.u,args:[V.u,V.u]}))
b.a=u
u=new U.eq()
t=U.dB()
t.sdi(0,!0)
t.sd8(6.283185307179586)
t.sd9(0)
t.sZ(0,0)
t.saJ(100)
t.sS(0)
t.saW(0.5)
u.b=t
s=u.gaD()
t.gu().h(0,s)
t=U.dB()
t.sdi(0,!0)
t.sd8(6.283185307179586)
t.sd9(0)
t.sZ(0,0)
t.saJ(100)
t.sS(0)
t.saW(0.5)
u.c=t
t.gu().h(0,s)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
r=new X.bs(!1,!1,!1)
q=u.d
u.d=r
t=new D.L("modifiers",q,r,[X.bs])
t.b=!0
u.D(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.L("invertX",t,!1,[P.a4])
t.b=!0
u.D(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.L("invertY",t,!1,[P.a4])
t.b=!0
u.D(t)}u.ad(a0)
u.b.sd8(1.5707963267948966)
u.b.sd9(-1.5707963267948966)
u.b.saW(1)
u.c.saW(1)
u.b.sdi(0,!1)
b.b=u
u.gu().h(0,new B.i0(b))
u=U.ab
t=[u]
s=U.hj(H.c([b.a,b.b],t))
s.gu().h(0,b.gjM())
b.x=s
s=b.b
p=new U.cN()
p.c=V.cg()
p.d=0
if(null!=s){p.a=s
s.gu().h(0,p.gaD())
u=new D.L("mover",a,p.a,[u])
u.b=!0
p.D(u)}b.y=U.hj(H.c([p,b.a,U.bJ(V.l0(1,-1,1,1))],t))
u=U.bJ(V.dV(-0.5,-0.5,-0.5))
s=new U.e8()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sfl(-0.1)
s.sf5(0,0)
s.sfd(0)
p=s.d
if(!(Math.abs(p-0)<$.B().a)){s.d=0
p=new D.L("deltaYaw",p,0,[P.A])
p.b=!0
s.D(p)}p=s.e
if(!(Math.abs(p-0.1)<$.B().a)){s.e=0.1
p=new D.L("deltaPitch",p,0.1,[P.A])
p.b=!0
s.D(p)}p=s.f
if(!(Math.abs(p-0)<$.B().a)){s.f=0
p=new D.L("deltaRoll",p,0,[P.A])
p.b=!0
s.D(p)}b.z=U.hj(H.c([u,s,U.bJ(V.dV(0.5,0.5,0.5)),U.bJ(V.l0(0.04,-0.04,0.04,1)),U.bJ(V.dV(-0.15,0.06,-0.2)),b.y],t))
u=U.hj(H.c([U.bJ(V.l0(0.005,-0.005,0.005,1)),U.bJ(V.dV(0,0,-0.2)),b.y],t))
b.Q=u
t=$.ae()
s=$.ai()
s=new Z.ac(t.a|s.a)
o=new F.ea()
t=new F.jp(o)
t.b=!1
p=F.bl
t.scK(H.c([],[p]))
o.a=t
t=new F.im()
t.sbq(H.c([],[F.ci]))
o.b=t
t=new F.il(o)
t.sct(H.c([],[F.bP]))
o.c=t
t=new F.ik(o)
t.scq(H.c([],[F.af]))
o.d=t
o.e=null
t=o.a
n=new V.I(-1,-1,1)
n=n.w(0,Math.sqrt(n.E(n)))
m=t.bO(new V.bS(1,2,4,6),new V.b6(1,0,0,1),new V.u(-1,-1,0),new V.W(0,1),n,s)
t=o.a
n=new V.I(1,-1,1)
n=n.w(0,Math.sqrt(n.E(n)))
l=t.bO(new V.bS(0,3,4,6),new V.b6(0,0,1,1),new V.u(1,-1,0),new V.W(1,1),n,s)
t=o.a
n=new V.I(1,1,1)
n=n.w(0,Math.sqrt(n.E(n)))
k=t.bO(new V.bS(0,2,5,6),new V.b6(0,1,0,1),new V.u(1,1,0),new V.W(1,0),n,s)
t=o.a
n=V.bw()
j=new V.I(-1,1,1)
j=j.w(0,Math.sqrt(j.E(j)))
i=t.bO(new V.bS(0,2,4,7),new V.b6(1,1,0,1),new V.u(-1,1,0),n,j,s)
o.d.kh(H.c([m,l,k,i],[p]))
o.aV()
t=b.c
s=t.a
b.ch=E.c9(a,u,o,s.r)
b.cx=E.c9(a,b.z,a,a)
u=E.a1
b.shi(H.c([],[u]))
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.J)(p),++h){g=E.c9(a,a,a,p[h])
j=b.cx.y
f=H.v(j,0)
H.C(g,f)
e=[f]
if(H.F(j.bo(H.c([g],e)))){d=j.a
c=d.length
C.a.h(d,g)
f=H.h(H.c([g],e),"$ij",[f],"$aj")
j=j.c
if(j!=null)j.$2(c,f)}j=b.dx;(j&&C.a).h(j,g)}b.e=0
t=new B.fR(t)
t.e=$.bA()
t.shk(H.c([],[V.bV]))
t.shj(H.c([],[V.a5]))
t.shJ(H.c([],[P.a4]))
b.r=t
s=E.c9(a,a,a,s.f)
b.cy=s
b.f=null
b.db=E.c9(H.c([b.ch,b.cx,s],[u]),a,a,a)
b.ec()},
dk:function(){var u=this.c.aX(C.m.az(0.5),C.m.az(0.5)),t=u==null?null:u.lc(C.m.az(0.5),C.m.az(0.5))
if(t==null)t=0
this.a.sZ(0,new V.u(0.5,t+10,0.5))
this.a.sS(V.dd())},
iR:function(a){H.i(a,"$ix")
this.dk()},
iv:function(a){H.i(a,"$ix")
if(H.F(this.d))this.a.x.sS(30)},
i8:function(a){var u=this,t=H.F(H.o(H.i(a,"$ix"),"$ibq").c.b.c),s=u.e
if(t){if(typeof s!=="number")return s.p()
t=s-1
u.e=t
if(t<0)u.e=19}else{if(typeof s!=="number")return s.l()
t=s+1
u.e=t
if(t>=20)u.e=0}u.ec()},
i6:function(a){this.dG(H.o(H.i(a,"$ix"),"$ibq").c.a===69)},
ik:function(a){this.dG(H.o(H.i(a,"$ix"),"$ibt").x.a===2)},
dG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.f
if((i==null?null:i.a)==null)return
u=i.a
if(a){t=C.a.k($.lE,j.e)
i=j.f.a
s=i.ga4(i)
r=j.f.b
i=$.b2()
q=r.a
if((q&i.a)>>>0!==0)if(s>=200&&s<=205)return
if(t>=200&&t<=205){i=u.geg()
i=i.ga4(i)
if(!(i>=100&&i<=117))return}if(t===106){i=$.b1()
p=$.b0()
if((q&(i.a|p.a))>>>0!==0)t=108
else{i=$.bD()
p=$.bC()
if((q&(i.a|p.a))>>>0!==0)t=107}}else if(t===115){i=$.b1()
p=$.b0()
if((q&(i.a|p.a))>>>0!==0)t=117
else{i=$.bD()
p=$.bC()
if((q&(i.a|p.a))>>>0!==0)t=116}}i=5&q
o=i!==0?(0|5-i)>>>0:0
i=40&q
if(i!==0)o=(o|40-i)>>>0
i=320&q
u=u.eX(new V.a5(i!==0?(o|320-i)>>>0:o))
i=j.a
i=i.gZ(i)
n=$.lt().cc(0,new V.I(i.a,i.b,i.c))
i=u.gcR()
q=n.a
if(typeof q!=="number")return q.l()
p=i.a
if(typeof p!=="number")return p.l()
m=$.B().a
if(p-m<q+n.d&&q-m<p+i.d){q=n.b
if(typeof q!=="number")return q.l()
p=i.b
if(typeof p!=="number")return p.l()
if(p-m<q+n.e&&q-m<p+i.e){q=n.c
if(typeof q!=="number")return q.l()
p=i.c
if(typeof p!=="number")return p.l()
i=p-m<q+n.f&&q-m<p+i.f}else i=!1}else i=!1
if(i)return}else t=0
l=u.f
if(l!=null){u.sa4(0,t)
if(t===0){k=u.gee()
i=k.ga4(k)
if(i>=200&&i<=205)k.sa4(0,0)}l.r=!0
i=u.a
if(i<=0){q=l.gae(l)
if(q!=null)q.r=!0}q=u.c
if(q<=0){p=l.gaT(l)
if(p!=null)p.r=!0}if(i>=15){i=l.gab(l)
if(i!=null)i.r=!0}if(q>=15){i=l.gaI()
if(i!=null)i.r=!0}}},
hI:function(a,b){var u,t=this,s=b.p(0,a),r=new V.I(s.a,s.b,s.c)
if(r.E(r)<100){t.r.ko($.lt(),a,r)
s=t.r.e
u=$.b2()
s=s.a
u=u.a
u=(s&u)>>>0===u
t.d=u
if(u)t.a.x.sS(0)}s=t.r.b
return s==null?b:s},
jO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a==null
if((h?i:a.a)!=null){u=a.a
u=u.ga4(u)===0}else u=!1
if(u)return!1
t=h?i:a.a
if(t!=null){a.d
h=t.ga4(t)===0||t.ga4(t)===100}else h=!1
if(h)a=i
j.f=a
if(a==null)j.cy.b=!1
else{h=$.ae()
u=$.ai()
s=B.l2(i,new Z.ac(h.a|u.a))
r=new V.u(t.d+t.a+0.5,t.b+0.5,t.e+t.c+0.5)
q=s.a5(0)
u=$.fs()
h=$.fx()
p=$.fy()
o=$.ft()
s.aa(q,r,u,h,p,o,$.fz(),!0,1.1)
n=$.fv()
m=$.fq()
l=$.fr()
k=$.fw()
s.aa(q,r,n,m,l,k,$.fu(),!0,1.1)
s.aa(q,r,u,m,n,h,$.ls(),!0,1.1)
s.aa(q,r,p,k,l,o,$.lu(),!0,1.1)
s.aa(q,r,h,n,k,p,$.kJ(),!0,1.1)
s.aa(q,r,o,l,m,u,$.lr(),!0,1.1)
s.d2(0,H.c([j.cy],[E.a1]))
j.cy.b=!0}return!0},
jN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ix")
u=this.y.f
t=V.m1(u.U(V.e3()),u.aA(new V.I(0,0,-6)))
s=t.a
r=t.d
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=t.b
p=t.e
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
o=t.c
n=t.f
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.d(n)
m=V.m1(new V.u(s+r,q+p,o+n),new V.I(r,p,n).N(0))
n=this.c
l=new B.dZ(n.ah(s,q,o),$.kK(),t,0)
for(k=0;!this.jO(l);){l=n.fp(l.a,t,m,k);++k}},
ec:function(){var u=B.l2(this.c.a,null)
u.dw(null,0,0,0,C.a.k($.lE,this.e),!1,1)
u.d2(0,this.dx)},
shi:function(a){this.dx=H.h(a,"$ib",[E.a1],"$ab")}}
B.i0.prototype={
$1:function(a){var u,t,s
H.i(a,"$ix")
u=this.a
t=u.a
u=V.lO(-u.b.c.d)
if(!J.a_(t.z,u)){s=t.z
t.z=u
t.Q=u.bv(0)
u=new D.L("velocityRotation",s,t.z,[V.aF])
u.b=!0
t.D(u)}},
$S:7}
B.i4.prototype={
c6:function(a){var u=this
u.c=a
u.j2()
C.Z.eL(u.c.d,0,12288,0)
u.jH()
u.hb()
u.h9()
u.jF()
u.h5()
u.iZ()
u.h2()
u.jD()
a.d3()},
an:function(a,b,c){var u,t,s,r,q,p,o,n=this.a,m=this.c,l=(a+m.a)*c
m=(b+m.b)*c
u=new B.aR(l,m)
t=u.l(0,$.mZ().j(0,l+m))
m=Math.floor(t.a)
l=Math.floor(t.b)
s=new B.aR(m,l)
r=s.l(0,$.lv().j(0,m+l))
q=t.p(0,s)
u=new B.h9(n.a,s,u.p(0,r),q)
u.e=0
u.am(1,0)
u.am(0,1)
n=q.a
l=q.b
p=n+l
if(p<=1){o=1-p
if(o>n||o>l)if(n>l)u.am(1,-1)
else u.am(-1,1)
else u.am(1,1)
u.am(0,0)}else{o=2-p
if(o<n||o<l)if(n>l)u.am(2,0)
else u.am(0,2)
else u.am(0,0)
u.am(1,1)}return u.e/47*0.5+0.5},
cI:function(a,b){var u=this.b,t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.f(u,t)
return u[t]},
j2:function(){var u,t,s,r,q,p=this
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.j.az(Math.pow(0.6*p.an(t,s,0.001)+0.3*p.an(t,s,0.01)+0.1*p.an(t,s,0.1),2)*48)
if(r>=48)r=47
q=p.b
if(u<0||u>=484)return H.f(q,u)
q[u]=r;++u}},
jH:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.jI(u,t)},
jI:function(a,b){var u,t,s,r,q=this.cI(a,b)
for(u=q-2,t=q<8,s=0;s<=q;++s){if(t)r=u<=s?104:103
else if(q===s)r=102
else r=u<=s?101:103
this.c.X(a,s,b,r)}},
hb:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.hc(u,t)},
hc:function(a,b){var u,t=this.c.dg(a,b,0)
if(t<8)for(u=8;u>t;--u)this.c.X(a,u,b,1)},
h9:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.ha(u,t)},
ha:function(a,b){var u,t,s,r,q,p
if(this.cI(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.ah(s,u,q)
if(p===102||p===105)this.c.X(s,u,q,104)}},
jF:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.an(u,t,1.5)<0.1)this.h6(u,t)},
h6:function(a,b){var u,t,s=this,r=s.c,q=a+r.a
if(q>=-30)if(q<30){r=b+r.b
r=r>=-30&&r<30}else r=!1
else r=!1
if(r)return
u=s.cI(a,b)
if(u<10)return
for(t=1;t<8;++t)s.c.X(a,u+t,b,106)
s.h7(a,b)
s.h8(a,u+8,b)},
h7:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.ah(s,p,q)===102){this.c.X(s,p,q,105)
break}},
h8:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.ah(s,p,n)===0)this.c.X(s,p,n,114)}},
iZ:function(){var u,t,s,r,q,p=this
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(p.an(u,r,12.5)<0.1)p.b9(u,r,204)
else if(p.an(s,r,12.5)<0.1)p.b9(u,r,203)
else{q=r+400
if(p.an(u,q,12.5)<0.1)p.b9(u,r,202)
else if(p.an(s,q,12.5)<0.15)p.b9(u,r,200)
else if(p.an(t,r,12.5)<0.1)p.b9(u,r,201)
else if(p.an(u,r-400,12.5)<0.08)p.b9(u,r,205)}},
b9:function(a,b,c){var u=this.c.dg(a,b,0),t=this.c.ah(a,u,b)
if(t!==102&&t!==105)return
this.c.X(a,u+1,b,c)},
h5:function(){var u,t,s,r,q,p,o,n,m,l,k=this.c,j=k.a
if(j+16>=-30)if(j<=30){k=k.b
k=k+16<-30||k>30}else k=!0
else k=!0
if(k)return
u=new B.i6(this)
for(t=30;t>=0;t-=2){s=30-t+3
for(r=-s,k=t-1,q=r;q<=s;++q)for(p=r;p<=s;++p){u.$4(q,t,p,111)
u.$4(q,k,p,111)}for(j=r-1,o=r-2,n=s+1,m=s+2,l=-2;l<=2;++l){u.$4(j,t,l,109)
u.$4(j,k,l,109)
u.$4(o,k,l,109)
u.$4(n,t,l,109)
u.$4(n,k,l,109)
u.$4(m,k,l,109)
u.$4(l,t,j,109)
u.$4(l,k,j,109)
u.$4(l,k,o,109)
u.$4(l,t,n,109)
u.$4(l,k,n,109)
u.$4(l,k,m,109)}k=t+1
u.$4(j,k,2,109)
u.$4(o,t,2,109)
u.$4(j,k,-2,109)
u.$4(o,t,-2,109)
u.$4(n,k,2,109)
u.$4(m,t,2,109)
u.$4(n,k,-2,109)
u.$4(m,t,-2,109)
u.$4(2,k,j,109)
u.$4(2,t,o,109)
u.$4(-2,k,j,109)
u.$4(-2,t,o,109)
u.$4(2,k,n,109)
u.$4(2,t,m,109)
u.$4(-2,k,n,109)
u.$4(-2,t,m,109)}},
h2:function(){var u,t=this.c,s=t.a
if(s+16>=-36)if(s<=12){t=t.b
t=t+16<-28||t>-22}else t=!0
else t=!0
if(t)return
u=new B.i5(this,-12,40,-25)
t=[P.n]
u.$5(110,0,0,H.c([0,1,2,3,4,4,3,2,4,4,3,2,1,0],t),H.c([1,0,0,0,1,2,3,3,4,5,6,6,6,5],t))
u.$5(110,6,0,H.c([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],t),H.c([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],t))
u.$5(113,12,0,H.c([0,0,0,0,0,1,2,1,2,3,3,3,3,3],t),H.c([2,3,4,5,6,1,1,4,4,2,3,4,5,6],t))
u.$5(113,17,0,H.c([0,0,0,0,0,0,1,2,1,2,3,3,3,3],t),H.c([1,2,3,4,5,6,1,1,4,4,2,3,5,6],t))
u.$5(113,22,0,H.c([0,2,1,1,1,1,1,1],t),H.c([1,1,1,2,3,4,5,6],t))},
jD:function(){var u,t,s,r,q=this.c,p=q.a
if(p+16>=-3)if(p<=3){q=q.b
q=q+16<-3||q>3}else q=!0
else q=!0
if(q)return
u=new B.i7(this)
for(t=-3;t<=3;++t)for(s=0;s<=7;++s)for(q=2+s,r=-3;r<=3;++r)u.$4(t,q,r,0)
u.$4(0,2,0,113)
u.$4(0,3,0,112)
u.$4(0,4,0,112)
u.$4(0,5,0,112)
u.$4(0,6,0,112)},
$ilJ:1}
B.i6.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.i5.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m=this,l=[P.n]
H.h(d,"$ib",l,"$ab")
H.h(e,"$ib",l,"$ab")
for(u=d.length-1,l=m.a,t=m.b+b,s=m.c+c,r=m.d;u>=0;--u){q=l.c
if(u>=d.length)return H.f(d,u)
p=d[u]
if(typeof p!=="number")return H.d(p)
o=q.a
if(u>=e.length)return H.f(e,u)
n=e[u]
if(typeof n!=="number")return H.d(n)
q.X(t+p-o,s-n,r-q.b,a)}}}
B.i7.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.io.prototype={
km:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.dw(a,u,t,s,a.cd(u,t,s),!1,1)},
d2:function(a,b){var u,t,s,r
H.h(b,"$ib",[E.a1],"$ab")
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.f(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.f(s,u)
r=s[u]
if(r!=null){t.sdl(r)
t.b=r.f.length!==0}else{t.sdl(null)
t.b=!1}}this.se8(null)},
a5:function(a){var u=this.c,t=(u&&C.a).k(u,a)
if(t==null){u=this.b
t=new F.cX(u)
t.b=u.gem(u)
t.c=u.gbm(u)
t.d=0
t.scK(H.c([],[P.A]))
u=[P.n]
t.sbq(H.c([],u))
t.sct(H.c([],u))
t.scq(H.c([],u))
t.Q=t.z=null
u=this.c;(u&&C.a).m(u,a,t)}return t},
dw:function(a,b,c,d,e,f,g){var u,t,s,r=this,q=new V.u(b,c,d)
if(a!=null){b+=a.a
d+=a.b}u=new V.u(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.dz(a,u,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201){t=r.a.c.k(0,201)
s=J.bz(t)
r.bI(r.a5(s.k(t,0)),u,0.3141592653589793)
r.bI(r.a5(s.k(t,0)),u,1.7278759594743864)
r.bI(r.a5(s.k(t,0)),u,3.6128315516282616)
r.bI(r.a5(s.k(t,0)),u,5.026548245743669)}else if(e===205)r.h4(u)
else{t=r.a.c.k(0,e)
s=J.bz(t)
r.dD(r.a5(s.k(t,0)),u,0.39269908169872414,!0)
r.dD(r.a5(s.k(t,0)),u,1.9634954084936207,!0)}else if(e>=100&&e<=117)r.dz(a,u,q,e,!1,g)},
bc:function(a,b,c,d){var u=null,t=$.ae(),s=$.ai()
return F.co(u,u,u,a,b,new V.W(c,d),u,new Z.ac(t.a|s.a|$.aq().a),0)},
aa:function(a,b,c,d,e,f,g,h,i){var u=this,t=a.bt(H.c([u.bc(b.l(0,c.j(0,i)),g,0,0),u.bc(b.l(0,d.j(0,i)),g,0,1),u.bc(b.l(0,e.j(0,i)),g,1,1),u.bc(b.l(0,f.j(0,i)),g,1,0)],[F.bl])),s=t+1,r=t+2,q=t+3,p=[P.n]
a.bs(H.c([t,s,r,q],p))
if(h)a.bs(H.c([r,s,t,q],p))},
dz:function(a,b,c,d,e,f){var u=this,t=u.a.b.k(0,d)
if(u.b8(a,d,c,0,1,0))u.aa(u.a5(t.a),b,$.fs(),$.fx(),$.fy(),$.ft(),$.fz(),!1,f)
if(u.b8(a,d,c,0,-1,0))u.aa(u.a5(t.b),b,$.fv(),$.fq(),$.fr(),$.fw(),$.fu(),!1,f)
if(u.b8(a,d,c,-1,0,0))u.aa(u.a5(t.c),b,$.fs(),$.fq(),$.fv(),$.fx(),$.ls(),!1,f)
if(u.b8(a,d,c,1,0,0))u.aa(u.a5(t.d),b,$.fy(),$.fw(),$.fr(),$.ft(),$.lu(),!1,f)
if(u.b8(a,d,c,0,0,1))u.aa(u.a5(t.e),b,$.fx(),$.fv(),$.fw(),$.fy(),$.kJ(),!1,f)
if(u.b8(a,d,c,0,0,-1))u.aa(u.a5(t.f),b,$.ft(),$.fr(),$.fq(),$.fs(),$.lr(),!1,f)},
b8:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.kO(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.no(b,a.cd(d+J.kO(c.a),e,f+J.kO(c.c)))},
dD:function(a,b,c,d){var u=Math.cos(c)*0.5,t=Math.sin(c)*0.5,s=-t,r=-u
this.aa(a,b,new V.u(u,0,s),new V.u(u,-0.5,s),new V.u(r,-0.5,t),new V.u(r,0,t),new V.I(t,0,u),!0,1)},
bI:function(a,b,c){var u=V.lO(c)
this.aa(a,b,u.U(new V.u(0.4,-0.1,-0.4)),u.U(new V.u(0,-0.5,0)),u.U(new V.u(0.4,-0.1,0.4)),u.U(new V.u(0.8,0,0)),$.fz(),!0,1)},
h4:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a.c.k(0,205),b0=J.bz(a9),b1=a7.a5(b0.k(a9,0)),b2=a7.a5(b0.k(a9,1)),b3=a7.a5(b0.k(a9,2))
a9=[F.bl]
u=H.c([],a9)
t=H.c([],a9)
for(b0=b4.a,s=b4.b,r=b4.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.aF(o,0,-n,0,1,0,n,0,o)
p=m.U(new V.u(0.07,-0.1,0))
l=p.a
if(typeof b0!=="number")return b0.l()
if(typeof l!=="number")return H.d(l)
k=p.b
if(typeof s!=="number")return s.l()
if(typeof k!=="number")return H.d(k)
p=p.c
if(typeof r!=="number")return r.l()
if(typeof p!=="number")return H.d(p)
j=$.kJ()
i=m.aA(j)
h=Math.abs(q-1)
g=$.ae()
f=$.ai()
C.a.h(u,F.co(a8,a8,a8,new V.u(b0+l,s+k,r+p),i,new V.W(h,0),a8,new Z.ac(g.a|f.a|$.aq().a),0))
f=m.U(new V.u(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.d(g)
i=f.b
if(typeof i!=="number")return H.d(i)
f=f.c
if(typeof f!=="number")return H.d(f)
j=m.aA(j)
p=$.ae()
k=$.ai()
C.a.h(u,F.co(a8,a8,a8,new V.u(b0+g,s+i,r+f),j,new V.W(h,1),a8,new Z.ac(p.a|k.a|$.aq().a),0))
e=m.U(new V.u(0.1,-0.5,0))
d=m.U(new V.u(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.d(k)
p=e.b
if(typeof p!=="number")return H.d(p)
h=e.c
if(typeof h!=="number")return H.d(h)
j=$.fu()
f=d.a
if(typeof f!=="number")return f.l()
i=d.c
if(typeof i!=="number")return i.l()
g=$.ae()
l=$.ai()
C.a.h(t,F.co(a8,a8,a8,new V.u(b0+k,s+p,r+h),j,new V.W(f+0.5,i+0.5),a8,new Z.ac(g.a|l.a|$.aq().a),0))}c=b3.bt(u)
b=b2.bt(t)
p=P.n
b3.ki(P.dS(u.length,new B.ip(c),p))
b2.bs(P.dS(t.length,new B.iq(b),p))
a=H.c([],a9)
a0=H.c([],a9)
C.a.h(a,a7.bc(b4.l(0,new V.u(0,0.05,0)),$.fz(),0.5,0.5))
C.a.h(a0,a7.bc(b4.l(0,new V.u(0,-0.1,0)),$.fu(),0.5,0.5))
for(q=0;q<=1;q+=0.1){a9=-6.283185307179586*q
o=Math.cos(a9)
n=Math.sin(a9)
a1=new V.aF(o,0,-n,0,1,0,n,0,o)
e=a1.U(new V.u(0.4,-0.15,0))
d=a1.U(new V.u(0.5,0,0))
a9=e.a
if(typeof b0!=="number")return b0.l()
if(typeof a9!=="number")return H.d(a9)
l=e.b
if(typeof s!=="number")return s.l()
if(typeof l!=="number")return H.d(l)
k=e.c
if(typeof r!=="number")return r.l()
if(typeof k!=="number")return H.d(k)
j=d.a
if(typeof j!=="number")return j.l()
i=d.c
if(typeof i!=="number")return i.l()
h=$.ae()
g=$.ai()
C.a.h(a,F.co(a8,a8,a8,new V.u(b0+a9,s+l,r+k),a8,new V.W(j+0.5,i+0.5),a8,new Z.ac(h.a|g.a|$.aq().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.aF(o,0,-n,0,1,0,n,0,o)
a3=a2.U(new V.u(0.4,-0.15,0))
a4=a2.U(new V.u(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.d(g)
h=a3.b
if(typeof h!=="number")return H.d(h)
i=a3.c
if(typeof i!=="number")return H.d(i)
j=a4.a
if(typeof j!=="number")return j.l()
k=a4.c
if(typeof k!=="number")return k.l()
l=$.ae()
a9=$.ai()
C.a.h(a0,F.co(a8,a8,a8,new V.u(b0+g,s+h,r+i),a8,new V.W(j+0.5,k+0.5),a8,new Z.ac(l.a|a9.a|$.aq().a),0))}a5=b1.bt(a)
a6=b2.bt(a0)
b1.bs(P.dS(a.length,new B.ir(a5),p))
b2.bs(P.dS(a0.length,new B.is(a6),p))},
se8:function(a){this.c=H.h(a,"$ib",[F.cX],"$ab")}}
B.ip.prototype={
$1:function(a){return this.a+a},
$S:9}
B.iq.prototype={
$1:function(a){return this.a+a},
$S:9}
B.ir.prototype={
$1:function(a){return this.a+a},
$S:9}
B.is.prototype={
$1:function(a){return this.a+a},
$S:9}
B.iK.prototype={
c6:function(a){var u=this
u.a=a
u.hu()
if(u.av(-2,1))u.jq()
if(u.av(-1,1)){u.a7(5,9,3,7,2,11)
u.dE(6,10,4,5,1,9,1)}if(u.av(0,1)){u.a7(2,10,6,12,10,1)
u.a7(6,10,2,1,10,12)
u.a7(2,10,10,12,10,1)
u.a7(10,10,2,1,10,12)}if(u.av(1,1))u.j_()
if(u.av(1,0))u.j1()
if(u.av(1,-1))u.iY()
if(u.av(-2,0))u.jG()
if(u.av(-2,-1))u.hZ()
if(u.av(-2,-2))u.j4()
a.d3()},
hu:function(){var u,t,s,r,q,p,o,n=this
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)n.a.X(u,q,r,103)
for(q=8;q<9;++q)n.a.X(u,q,r,101)
if(!s||r===0)n.a.X(u,9,r,113)
else{p=t&&r===1
o=n.a
if(p)o.X(u,9,r,110)
else o.X(u,9,r,102)}}},
jq:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.X(s,p,8+o,104)},
j_:function(){var u=new B.iL(this,2,4,10)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
j1:function(){var u=new B.iM(this,2,4,10)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
iY:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a7(t,10,2+s,1,8,1)},
j4:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a7(t,10+u,t,s,1,s)}},
jG:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a7(3,10,t,12,s,1)
this.a7(3,10+u+1,t+1,12,1,2)
this.a7(3,10,t+3,12,s,1)}},
hZ:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a7(3,10,t,12,s,1)
this.a7(3,10+u+1,t+1,12,1,1)
this.a7(3,10,t+2,12,s,1)}},
av:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
dE:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.X(t,r,c+q,g)},
a7:function(a,b,c,d,e,f){return this.dE(a,b,c,d,e,f,109)},
$ilJ:1}
B.iL.prototype={
$3:function(a,b,c){var u=this,t=u.b,s=u.c
return u.a.a7(t+s*a,u.d+c,t+s*b,s,1,s)}}
B.iM.prototype={
$3:function(a,b,c){var u=this,t=u.b,s=u.c
return u.a.a7(t+s*a,u.d,t+s*b,1,c,1)}}
B.eu.prototype={
fI:function(a,b){var u,t,s,r,q,p,o=this,n=[B.c4]
o.shG(H.c([],n))
o.sho(H.c([],n))
o.scn(H.c([],[E.a1]))
o.r=null
n=o.a
if(n!=null)for(n=n.d,u=n.length,t=0;t<n.length;n.length===u||(0,H.J)(n),++t){s=n[t]
C.a.h(o.e,E.c9(null,null,null,s))}for(r=0;r<140;++r){n=o.c;(n&&C.a).h(n,B.nr(o))}for(n=o.b,q=-32;q<32;q+=16)for(p=-32;p<32;p+=16)n.c6(o.f7(q,p))},
aX:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ah:function(a,b,c){var u,t,s,r=J.kN(a),q=J.kN(b),p=J.kN(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.e.a8(o,16)*16
n=C.e.a8(n,16)*16
u=this.aX(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.ay(t,q,s<0?s+16:s,o,n,u)},
gcC:function(){var u=this.f.y.f.U(V.e3())
return u},
li:function(a){this.jP(this.gcC())},
fn:function(a){var u=this.gcC()
this.hD(u)
this.j6(u)},
kk:function(a){var u=this.a.x,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.i(s[t],"$ibW")
u=u.f
if(u!=null)u.eo()}},
f7:function(a,b){var u,t=this.c
if(0>=t.length)return H.f(t,-1)
u=t.pop()
u.a=a
u.b=b
u.x=u.f=!0
u.saN(!1)
C.a.h(this.d,u)
return u},
kw:function(a){var u=C.a.W(this.d,a)
if(u){a.f=!1
a.saN(!1)
a.x=!0
a.r=!1
u=this.c;(u&&C.a).h(u,a)
return!0}return!1},
jP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ah(a.a,a.b,a.c),e=f.f
if(g.r!=e){g.r=e
e=f.d
u=e-128
t=e+128
s=f.e
r=s-128
q=s+128
for(p=g.d.length-1;p>=0;--p){o=g.d
if(p>=o.length)return H.f(o,p)
n=o[p]
o=n.a
if(u<=o)if(t>o){o=n.b
o=r>o||q<=o}else o=!0
else o=!0
if(o)g.kw(n)}m=e-64
l=e+64
k=s-64
j=s+64
for(i=m;i<l;i+=16)for(h=k;h<j;h+=16)if(g.aX(i,h)==null)g.f7(i,h)}},
hD:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null)this.b.c6(r)},
j6:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.p()
u=k-8
k=a.c
if(typeof k!=="number")return k.p()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.f&&!o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null){r.f=!1
r.r=!0}},
fp:function(a,b,c,d){var u,t=a.gcR().l_(c)
if(t==null)return
else{u=t.d
a=a.eX(u)}if(a==null)return
return new B.dZ(a,u,b,d)},
ag:function(a,b){var u,t,s,r,q,p,o,n,m
H.i(b,"$ix")
u=this.f.y.f
t=u.U(V.e3())
s=u.U(new V.u(0,0,-16))
r=new V.W(t.a,t.c)
q=new V.W(s.a,s.c)
for(p=this.d,o=p.length,n=0;n<p.length;p.length===o||(0,H.J)(p),++n){m=p[n]
m.lf()
m.lg(r,q)}},
shG:function(a){this.c=H.h(a,"$ib",[B.c4],"$ab")},
sho:function(a){this.d=H.h(a,"$ib",[B.c4],"$ab")},
scn:function(a){this.e=H.h(a,"$ib",[E.a1],"$ab")}};(function aliases(){var u=J.a.prototype
u.fv=u.i
u=J.dN.prototype
u.fw=u.i
u=O.cP.prototype
u.dn=u.aF
u=O.be.prototype
u.cg=u.aF
u=V.dU.prototype
u.fz=u.bi
u.dm=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i,n=hunkHelpers._instance_1i
u(P,"oL","og",12)
u(P,"oM","oh",12)
u(P,"oN","oi",12)
t(P,"mG","oJ",3)
var m
s(m=E.a1.prototype,"gc9",0,0,null,["$1","$0"],["f1","kQ"],1,0)
s(m,"gf2",0,0,null,["$1","$0"],["f3","kR"],1,0)
s(m,"gf_",0,0,null,["$1","$0"],["f0","kP"],1,0)
s(m,"geY",0,0,null,["$1","$0"],["eZ","kM"],1,0)
r(m,"gkK","kL",6)
r(m,"gkN","kO",6)
s(m=E.ei.prototype,"gdq",0,0,null,["$1","$0"],["ds","dr"],1,0)
q(m,"gl3","fc",3)
p(m=X.dO.prototype,"gfM","fN",37)
r(m,"gfK","fL",20)
r(m,"gfO","fP",20)
p(m,"gci","cj",0)
p(m,"gcA","cB",0)
p(m=X.ep.prototype,"gis","it",13)
p(m,"gi9","ia",13)
p(m,"gil","im",4)
p(m,"gcA","cB",22)
p(m,"gci","cj",22)
p(m,"giA","iB",4)
p(m,"giE","iF",4)
p(m,"giq","ir",4)
p(m,"giC","iD",4)
p(m,"gio","ip",4)
p(m,"giG","iH",40)
p(m,"giI","iJ",13)
p(m,"giW","iX",14)
p(m,"giS","iT",14)
p(m,"giU","iV",14)
s(D.bK.prototype,"gib",0,0,null,["$1","$0"],["aQ","ic"],1,0)
s(m=D.dP.prototype,"ge0",0,0,null,["$1","$0"],["e1","iy"],1,0)
p(m,"giK","iL",42)
r(m,"gi_","i0",23)
r(m,"giO","iP",23)
o(V.a3.prototype,"gn","d7",24)
o(V.I.prototype,"gn","d7",24)
s(m=U.cL.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
r(m,"gfW","fX",15)
r(m,"giM","iN",15)
s(U.cN.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
s(m=U.eq.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
p(m,"ghT","hU",0)
p(m,"ghV","hW",0)
p(m,"ghX","hY",0)
p(m,"ghN","hO",0)
p(m,"ghP","hQ",0)
p(m,"gjB","jC",0)
p(m,"gjz","jA",0)
p(m,"gjx","jy",0)
s(m=U.er.prototype,"gaD",0,0,null,["$1","$0"],["D","ac"],1,0)
p(m,"giw","ix",0)
s(m=M.dH.prototype,"gb5",0,0,null,["$1","$0"],["b6","fY"],1,0)
r(m,"gie","ig",6)
r(m,"gih","ii",6)
s(m=O.cf.prototype,"gbH",0,0,null,["$1","$0"],["a_","ck"],1,0)
s(m,"gjc",0,0,null,["$1","$0"],["e5","jd"],1,0)
r(m,"gi1","i2",25)
r(m,"gi3","i4",25)
s(O.cP.prototype,"gbH",0,0,null,["$1","$0"],["a_","ck"],1,0)
s(X.e0.prototype,"gdu",0,0,null,["$1","$0"],["b7","h0"],1,0)
t(B,"p1","p8",3)
p(m=B.e1.prototype,"giQ","iR",0)
p(m,"giu","iv",0)
p(m,"gi7","i8",0)
p(m,"gi5","i6",0)
p(m,"gij","ik",0)
r(m,"ghH","hI",46)
p(m,"gjM","jN",0)
p(m=B.eu.prototype,"glh","li",10)
p(m,"gfm","fn",10)
p(m,"gkj","kk",10)
n(m,"gle","ag",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.kX,J.a,J.av,P.eK,P.j,H.dR,P.b9,H.cb,H.dc,H.fU,H.j0,P.bL,H.cG,H.f0,P.am,H.hs,H.ht,H.ho,P.f6,P.bn,P.aI,P.ev,P.iE,P.d0,P.iF,P.bi,P.ar,P.km,P.k6,P.dg,P.k0,P.z,P.kf,P.hz,P.c5,P.kl,P.kk,P.a4,P.az,P.ad,P.aM,P.hZ,P.ec,P.eD,P.hh,P.b,P.D,P.P,P.aw,P.k,P.ap,P.cp,P.jf,P.k7,W.fX,W.E,W.dJ,P.k9,P.fb,P.jX,P.k1,P.S,L.hY,B.h9,B.aR,O.a0,O.cQ,E.fM,E.a1,E.ia,D.x,E.ei,Z.es,Z.jy,Z.cE,Z.aO,Z.ac,D.fP,D.ca,X.dz,X.al,X.hq,X.hw,X.bs,X.hP,X.iX,X.ep,D.bK,D.a9,D.e2,D.eb,D.ef,D.eg,D.eh,V.aa,V.b6,V.h8,V.a5,V.cd,V.hm,V.aF,V.as,V.W,V.u,V.bS,V.e6,V.e7,V.bV,V.a3,V.I,U.cN,U.eq,U.er,M.dH,A.dx,A.fF,A.hF,A.d5,A.d9,A.d7,A.da,A.d8,A.db,A.c6,A.el,A.j9,F.af,F.bP,F.ci,F.cX,F.ea,F.ik,F.il,F.im,F.bl,F.jp,F.jq,F.jt,F.ju,O.cm,O.cP,T.iR,V.fB,V.br,V.dU,V.ij,V.d_,V.ej,V.d3,V.iW,X.dA,X.ed,X.e0,V.it,B.ay,B.fQ,B.c4,B.fR,B.Z,B.hI,B.dZ,B.e1,B.i4,B.io,B.iK,B.eu])
s(J.a,[J.hn,J.dM,J.dN,J.ba,J.cO,J.ce,H.cS,H.bQ,W.l,W.fA,W.c2,W.cF,W.b7,W.b8,W.V,W.ex,W.h0,W.h1,W.ez,W.dG,W.eB,W.h3,W.q,W.eE,W.aN,W.hk,W.eG,W.bp,W.hv,W.hJ,W.eL,W.eM,W.aP,W.eN,W.eQ,W.aQ,W.eU,W.eW,W.aT,W.eX,W.aU,W.f1,W.aG,W.f4,W.iU,W.aW,W.f7,W.iZ,W.jk,W.fe,W.fg,W.fi,W.fk,W.fm,P.bd,P.eI,P.bg,P.eS,P.i3,P.f2,P.bj,P.f9,P.fG,P.ew,P.dy,P.e5,P.cl,P.e9,P.ee,P.em,P.eZ])
s(J.dN,[J.i_,J.cn,J.bO])
t(J.kW,J.ba)
s(J.cO,[J.dL,J.dK])
t(P.hu,P.eK)
s(P.hu,[H.en,W.jH,W.jG,P.hd])
t(H.a8,H.en)
s(P.j,[H.h6,H.hA,H.jz])
s(P.b9,[H.hB,H.jA])
t(H.fV,H.fU)
s(P.bL,[H.hV,H.hp,H.jd,H.j2,H.fO,H.ih,P.fE,P.e_,P.b4,P.je,P.jb,P.iz,P.fT,P.h_])
s(H.cG,[H.kH,H.iJ,H.kA,H.kB,H.kC,P.jD,P.jC,P.jE,P.jF,P.ke,P.kd,P.jN,P.jR,P.jO,P.jP,P.jQ,P.jU,P.jV,P.jT,P.jS,P.iG,P.iH,P.ks,P.k4,P.k3,P.k5,P.hy,P.h4,P.h5,P.jj,P.jg,P.jh,P.ji,P.kg,P.kh,P.kj,P.ki,P.ko,P.kn,P.kp,P.kq,W.hL,W.hN,W.ig,W.iD,W.jM,P.kb,P.ku,P.he,P.hf,P.fI,E.ib,E.ic,E.id,E.iT,D.ha,D.hb,F.jw,F.jv,F.jr,F.js,T.iS,V.iv,V.iu,B.kG,B.i0,B.i6,B.i5,B.i7,B.ip,B.iq,B.ir,B.is,B.iL,B.iM])
s(H.iJ,[H.iB,H.cC])
t(H.jB,P.fE)
t(P.hx,P.am)
t(H.aB,P.hx)
t(H.dQ,H.h6)
t(H.dW,H.bQ)
s(H.dW,[H.dh,H.dj])
t(H.di,H.dh)
t(H.cT,H.di)
t(H.dk,H.dj)
t(H.dX,H.dk)
s(H.dX,[H.hQ,H.hR,H.hS,H.hT,H.hU,H.dY,H.ch])
t(P.k2,P.km)
t(P.k_,P.k6)
t(P.fc,P.hz)
t(P.eo,P.fc)
s(P.c5,[P.fK,P.h7])
t(P.c8,P.iF)
s(P.c8,[P.fL,P.jn,P.jm])
t(P.jl,P.h7)
s(P.ad,[P.A,P.n])
s(P.b4,[P.bT,P.hl])
t(P.jJ,P.cp)
s(W.l,[W.K,W.hc,W.cR,W.aS,W.dl,W.aV,W.aH,W.dn,W.jx,W.de,P.fJ,P.c1])
s(W.K,[W.a6,W.bI])
s(W.a6,[W.t,P.r])
s(W.t,[W.fC,W.fD,W.c3,W.dE,W.hg,W.cM,W.ii])
s(W.b7,[W.cH,W.fY,W.fZ])
t(W.fW,W.b8)
t(W.cI,W.ex)
t(W.eA,W.ez)
t(W.dF,W.eA)
t(W.eC,W.eB)
t(W.h2,W.eC)
t(W.aE,W.c2)
t(W.eF,W.eE)
t(W.cJ,W.eF)
t(W.eH,W.eG)
t(W.cc,W.eH)
t(W.bX,W.q)
s(W.bX,[W.bc,W.aj,W.aX])
t(W.hK,W.eL)
t(W.hM,W.eM)
t(W.eO,W.eN)
t(W.hO,W.eO)
t(W.eR,W.eQ)
t(W.cU,W.eR)
t(W.eV,W.eU)
t(W.i1,W.eV)
t(W.ie,W.eW)
t(W.dm,W.dl)
t(W.iw,W.dm)
t(W.eY,W.eX)
t(W.ix,W.eY)
t(W.iC,W.f1)
t(W.f5,W.f4)
t(W.iN,W.f5)
t(W.dp,W.dn)
t(W.iO,W.dp)
t(W.f8,W.f7)
t(W.iY,W.f8)
t(W.bm,W.aj)
t(W.ff,W.fe)
t(W.jI,W.ff)
t(W.ey,W.dG)
t(W.fh,W.fg)
t(W.jW,W.fh)
t(W.fj,W.fi)
t(W.eP,W.fj)
t(W.fl,W.fk)
t(W.k8,W.fl)
t(W.fn,W.fm)
t(W.kc,W.fn)
t(W.jK,P.iE)
t(W.la,W.jK)
t(W.jL,P.d0)
t(P.ka,P.k9)
t(P.an,P.k1)
t(P.eJ,P.eI)
t(P.hr,P.eJ)
t(P.eT,P.eS)
t(P.hW,P.eT)
t(P.f3,P.f2)
t(P.iI,P.f3)
t(P.fa,P.f9)
t(P.j_,P.fa)
t(P.fH,P.ew)
t(P.hX,P.c1)
t(P.f_,P.eZ)
t(P.iy,P.f_)
s(D.x,[E.iA,D.bM,D.bN,D.L,X.bq,X.i2])
s(E.fM,[Z.bH,A.cY,T.d2])
s(O.a0,[X.dO,D.dP,U.cL])
s(X.i2,[X.dT,X.bt,X.ek])
s(D.fP,[U.fS,U.ab,F.cZ])
s(U.ab,[U.dC,U.e8])
t(A.hC,A.cY)
s(A.el,[A.R,A.j5,A.j6,A.j8,A.j3,A.a2,A.j4,A.Q,A.j7,A.ja,A.d6,A.aC,A.at,A.au])
t(O.cf,O.cm)
s(O.cP,[O.hD,O.hE,O.be])
s(O.be,[O.hG,O.hH])
t(T.bW,T.d2)
s(T.bW,[T.iP,T.iQ])
s(V.dU,[V.bv,V.d4])
t(X.hi,X.ed)
u(H.en,H.dc)
u(H.dh,P.z)
u(H.di,H.cb)
u(H.dj,P.z)
u(H.dk,H.cb)
u(P.eK,P.z)
u(P.fc,P.kf)
u(W.ex,W.fX)
u(W.ez,P.z)
u(W.eA,W.E)
u(W.eB,P.z)
u(W.eC,W.E)
u(W.eE,P.z)
u(W.eF,W.E)
u(W.eG,P.z)
u(W.eH,W.E)
u(W.eL,P.am)
u(W.eM,P.am)
u(W.eN,P.z)
u(W.eO,W.E)
u(W.eQ,P.z)
u(W.eR,W.E)
u(W.eU,P.z)
u(W.eV,W.E)
u(W.eW,P.am)
u(W.dl,P.z)
u(W.dm,W.E)
u(W.eX,P.z)
u(W.eY,W.E)
u(W.f1,P.am)
u(W.f4,P.z)
u(W.f5,W.E)
u(W.dn,P.z)
u(W.dp,W.E)
u(W.f7,P.z)
u(W.f8,W.E)
u(W.fe,P.z)
u(W.ff,W.E)
u(W.fg,P.z)
u(W.fh,W.E)
u(W.fi,P.z)
u(W.fj,W.E)
u(W.fk,P.z)
u(W.fl,W.E)
u(W.fm,P.z)
u(W.fn,W.E)
u(P.eI,P.z)
u(P.eJ,W.E)
u(P.eS,P.z)
u(P.eT,W.E)
u(P.f2,P.z)
u(P.f3,W.E)
u(P.f9,P.z)
u(P.fa,W.E)
u(P.ew,P.am)
u(P.eZ,P.z)
u(P.f_,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.c3.prototype
C.T=J.a.prototype
C.a=J.ba.prototype
C.m=J.dK.prototype
C.e=J.dL.prototype
C.p=J.dM.prototype
C.j=J.cO.prototype
C.b=J.ce.prototype
C.U=J.bO.prototype
C.Z=H.ch.prototype
C.a_=W.cU.prototype
C.C=J.i_.prototype
C.c=P.cl.prototype
C.v=J.cn.prototype
C.D=W.bm.prototype
C.E=W.de.prototype
C.a0=new P.fL()
C.F=new P.fK()
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.M=new P.hZ()
C.l=new P.jl()
C.N=new P.jn()
C.O=new P.jX()
C.k=new P.k2()
C.d=new A.c6(0,"ColorSourceType.None")
C.i=new A.c6(1,"ColorSourceType.Solid")
C.f=new A.c6(2,"ColorSourceType.Texture2D")
C.h=new A.c6(3,"ColorSourceType.TextureCube")
C.o=new P.aM(0)
C.P=new P.aM(25e4)
C.Q=new P.aM(5e6)
C.R=new P.aM(7e4)
C.S=new P.aM(75e4)
C.y=H.c(u([127,2047,65535,1114111]),[P.n])
C.q=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.n])
C.r=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.t=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.z=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.u=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.A=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.B=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.V=H.c(u([]),[P.k])
C.Y=new H.fV(0,{},C.V,[P.k,P.k])})()
var v={mangledGlobalNames:{n:"int",A:"double",ad:"num",k:"String",a4:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.x]},{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.P},{func:1,ret:-1},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.n,[P.j,E.a1]]},{func:1,ret:P.P,args:[D.x]},{func:1,ret:P.P,args:[F.af]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[,]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.q]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.n,[P.j,U.ab]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[P.n,[P.j,X.al]]},{func:1,ret:P.k,args:[P.n]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[P.n,[P.j,D.a9]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.n,[P.j,V.as]]},{func:1,ret:P.P,args:[W.q]},{func:1,ret:P.P,args:[P.k,,]},{func:1,ret:P.S,args:[P.n]},{func:1,ret:P.S,args:[,,]},{func:1,args:[,P.k]},{func:1,args:[W.q]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:W.a6,args:[W.K]},{func:1,args:[P.k]},{func:1,ret:P.P,args:[,],opt:[P.aw]},{func:1,ret:P.P,args:[P.ad]},{func:1,ret:P.a4,args:[[P.j,X.al]]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:[P.D,P.k,P.k],args:[[P.D,P.k,P.k],P.k]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[P.k,P.n]},{func:1,ret:P.a4,args:[[P.j,D.a9]]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:P.P,args:[P.bi]},{func:1,ret:V.u,args:[V.u,V.u]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:P.P,args:[P.k]},{func:1,ret:[P.aI,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b5=0
$.cD=null
$.lF=null
$.le=!1
$.mM=null
$.mE=null
$.mS=null
$.kv=null
$.kD=null
$.ln=null
$.cr=null
$.ds=null
$.dt=null
$.lf=!1
$.Y=C.k
$.ax=[]
$.lP=null
$.lT=null
$.lX=null
$.cV=null
$.m2=null
$.mc=null
$.mi=null
$.mg=null
$.md=null
$.mh=null
$.me=null
$.jo=null
$.mf=null
$.lW=null
$.lE=H.c([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.n])})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pv","mX",function(){return H.mL("_$dart_dartClosure")})
u($,"pM","lz",function(){return H.mL("_$dart_js")})
u($,"pQ","n1",function(){return H.bk(H.j1({
toString:function(){return"$receiver$"}}))})
u($,"pR","n2",function(){return H.bk(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pS","n3",function(){return H.bk(H.j1(null))})
u($,"pT","n4",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pW","n7",function(){return H.bk(H.j1(void 0))})
u($,"pX","n8",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pV","n6",function(){return H.bk(H.m7(null))})
u($,"pU","n5",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pZ","na",function(){return H.bk(H.m7(void 0))})
u($,"pY","n9",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qd","lA",function(){return P.of()})
u($,"q0","nb",function(){return P.ob()})
u($,"qe","ne",function(){return H.nL(H.cq(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))})
u($,"qf","nf",function(){return P.o0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qg","ng",function(){return P.oB()})
u($,"pw","mY",function(){return H.c([B.bh(5,2),B.bh(2,5),B.bh(-5,2),B.bh(-2,5),B.bh(5,-2),B.bh(2,-5),B.bh(-5,-2),B.bh(-2,-5)],[B.aR])})
u($,"py","mZ",function(){return B.bh(-0.211324865405187,-0.211324865405187)})
u($,"px","lv",function(){return B.bh(0.366025403784439,0.366025403784439)})
u($,"q6","nd",function(){return Z.aZ(0)})
u($,"q8","ae",function(){return Z.aZ(1)})
u($,"q7","aq",function(){return Z.aZ(2)})
u($,"q2","bF",function(){return Z.aZ(4)})
u($,"q9","ai",function(){return Z.aZ(8)})
u($,"qa","bG",function(){return Z.aZ(16)})
u($,"q3","du",function(){return Z.aZ(32)})
u($,"q4","dv",function(){return Z.aZ(64)})
u($,"q5","nc",function(){return Z.aZ(96)})
u($,"qb","cB",function(){return Z.aZ(128)})
u($,"q1","bE",function(){return Z.aZ(256)})
u($,"pf","mW",function(){return new V.h8(1e-9)})
u($,"pe","B",function(){return $.mW()})
u($,"pC","bA",function(){return V.aA(0)})
u($,"pz","lw",function(){return V.aA(511)})
u($,"pF","b1",function(){return V.aA(1)})
u($,"pD","lx",function(){return V.aA(2)})
u($,"pE","b0",function(){return V.aA(4)})
u($,"pI","b2",function(){return V.aA(8)})
u($,"pG","ly",function(){return V.aA(16)})
u($,"pH","bB",function(){return V.aA(32)})
u($,"pL","bD",function(){return V.aA(64)})
u($,"pJ","n0",function(){return V.aA(128)})
u($,"pK","bC",function(){return V.aA(256)})
u($,"pB","kK",function(){return V.aA(146)})
u($,"pA","n_",function(){return V.aA(365)})
u($,"ps","lt",function(){return V.i9(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"pu","fz",function(){return V.mk()})
u($,"pl","fu",function(){var t=$.me
return t==null?$.me=V.l8(0,-1,0):t})
u($,"pr","ls",function(){var t=$.mg
return t==null?$.mg=V.l8(1,0,0):t})
u($,"pt","lu",function(){var t=$.md
return t==null?$.md=V.l8(-1,0,0):t})
u($,"po","kJ",function(){return V.l9()})
u($,"pi","lr",function(){return V.mj()})
u($,"pp","fx",function(){return V.bR(-0.5,0.5,0.5)})
u($,"pq","fy",function(){return V.bR(0.5,0.5,0.5)})
u($,"pm","fv",function(){return V.bR(-0.5,-0.5,0.5)})
u($,"pn","fw",function(){return V.bR(0.5,-0.5,0.5)})
u($,"pj","fs",function(){return V.bR(-0.5,0.5,-0.5)})
u($,"pk","ft",function(){return V.bR(0.5,0.5,-0.5)})
u($,"pg","fq",function(){return V.bR(-0.5,-0.5,-0.5)})
u($,"ph","fr",function(){return V.bR(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.cT,Float64Array:H.cT,Int16Array:H.hQ,Int32Array:H.hR,Int8Array:H.hS,Uint16Array:H.hT,Uint32Array:H.hU,Uint8ClampedArray:H.dY,CanvasPixelArray:H.dY,Uint8Array:H.ch,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.fA,HTMLAnchorElement:W.fC,HTMLAreaElement:W.fD,Blob:W.c2,HTMLCanvasElement:W.c3,CanvasRenderingContext2D:W.cF,CDATASection:W.bI,CharacterData:W.bI,Comment:W.bI,ProcessingInstruction:W.bI,Text:W.bI,CSSNumericValue:W.cH,CSSUnitValue:W.cH,CSSPerspective:W.fW,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cI,MSStyleCSSProperties:W.cI,CSS2Properties:W.cI,CSSImageValue:W.b7,CSSKeywordValue:W.b7,CSSPositionValue:W.b7,CSSResourceValue:W.b7,CSSURLImageValue:W.b7,CSSStyleValue:W.b7,CSSMatrixComponent:W.b8,CSSRotation:W.b8,CSSScale:W.b8,CSSSkew:W.b8,CSSTranslation:W.b8,CSSTransformComponent:W.b8,CSSTransformValue:W.fY,CSSUnparsedValue:W.fZ,DataTransferItemList:W.h0,HTMLDivElement:W.dE,DOMException:W.h1,ClientRectList:W.dF,DOMRectList:W.dF,DOMRectReadOnly:W.dG,DOMStringList:W.h2,DOMTokenList:W.h3,Element:W.a6,AbortPaymentEvent:W.q,AnimationEvent:W.q,AnimationPlaybackEvent:W.q,ApplicationCacheErrorEvent:W.q,BackgroundFetchClickEvent:W.q,BackgroundFetchEvent:W.q,BackgroundFetchFailEvent:W.q,BackgroundFetchedEvent:W.q,BeforeInstallPromptEvent:W.q,BeforeUnloadEvent:W.q,BlobEvent:W.q,CanMakePaymentEvent:W.q,ClipboardEvent:W.q,CloseEvent:W.q,CustomEvent:W.q,DeviceMotionEvent:W.q,DeviceOrientationEvent:W.q,ErrorEvent:W.q,ExtendableEvent:W.q,ExtendableMessageEvent:W.q,FetchEvent:W.q,FontFaceSetLoadEvent:W.q,ForeignFetchEvent:W.q,GamepadEvent:W.q,HashChangeEvent:W.q,InstallEvent:W.q,MediaEncryptedEvent:W.q,MediaKeyMessageEvent:W.q,MediaQueryListEvent:W.q,MediaStreamEvent:W.q,MediaStreamTrackEvent:W.q,MessageEvent:W.q,MIDIConnectionEvent:W.q,MIDIMessageEvent:W.q,MutationEvent:W.q,NotificationEvent:W.q,PageTransitionEvent:W.q,PaymentRequestEvent:W.q,PaymentRequestUpdateEvent:W.q,PopStateEvent:W.q,PresentationConnectionAvailableEvent:W.q,PresentationConnectionCloseEvent:W.q,ProgressEvent:W.q,PromiseRejectionEvent:W.q,PushEvent:W.q,RTCDataChannelEvent:W.q,RTCDTMFToneChangeEvent:W.q,RTCPeerConnectionIceEvent:W.q,RTCTrackEvent:W.q,SecurityPolicyViolationEvent:W.q,SensorErrorEvent:W.q,SpeechRecognitionError:W.q,SpeechRecognitionEvent:W.q,SpeechSynthesisEvent:W.q,StorageEvent:W.q,SyncEvent:W.q,TrackEvent:W.q,TransitionEvent:W.q,WebKitTransitionEvent:W.q,VRDeviceEvent:W.q,VRDisplayEvent:W.q,VRSessionEvent:W.q,MojoInterfaceRequestEvent:W.q,ResourceProgressEvent:W.q,USBConnectionEvent:W.q,IDBVersionChangeEvent:W.q,AudioProcessingEvent:W.q,OfflineAudioCompletionEvent:W.q,WebGLContextEvent:W.q,Event:W.q,InputEvent:W.q,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,XMLHttpRequest:W.l,XMLHttpRequestEventTarget:W.l,XMLHttpRequestUpload:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aE,FileList:W.cJ,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aN,History:W.hk,HTMLCollection:W.cc,HTMLFormControlsCollection:W.cc,HTMLOptionsCollection:W.cc,ImageData:W.bp,HTMLImageElement:W.cM,KeyboardEvent:W.bc,Location:W.hv,MediaList:W.hJ,MessagePort:W.cR,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.aP,MimeTypeArray:W.hO,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aQ,PluginArray:W.i1,RTCStatsReport:W.ie,HTMLSelectElement:W.ii,SourceBuffer:W.aS,SourceBufferList:W.iw,SpeechGrammar:W.aT,SpeechGrammarList:W.ix,SpeechRecognitionResult:W.aU,Storage:W.iC,CSSStyleSheet:W.aG,StyleSheet:W.aG,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iN,TextTrackList:W.iO,TimeRanges:W.iU,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iY,TrackDefaultList:W.iZ,CompositionEvent:W.bX,FocusEvent:W.bX,TextEvent:W.bX,UIEvent:W.bX,URL:W.jk,VideoTrackList:W.jx,WheelEvent:W.bm,Window:W.de,DOMWindow:W.de,CSSRuleList:W.jI,ClientRect:W.ey,DOMRect:W.ey,GamepadList:W.jW,NamedNodeMap:W.eP,MozNamedAttrMap:W.eP,SpeechRecognitionResultList:W.k8,StyleSheetList:W.kc,SVGLength:P.bd,SVGLengthList:P.hr,SVGNumber:P.bg,SVGNumberList:P.hW,SVGPointList:P.i3,SVGStringList:P.iI,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bj,SVGTransformList:P.j_,AudioBuffer:P.fG,AudioParamMap:P.fH,AudioTrackList:P.fJ,AudioContext:P.c1,webkitAudioContext:P.c1,BaseAudioContext:P.c1,OfflineAudioContext:P.hX,WebGLBuffer:P.dy,WebGLProgram:P.e5,WebGL2RenderingContext:P.cl,WebGLShader:P.e9,WebGLTexture:P.ee,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iy})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dX.$nativeSuperclassTag="ArrayBufferView"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mP,[])
else B.mP([])})})()
//# sourceMappingURL=main.dart.js.map
