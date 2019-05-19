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
a[c]=function(){a[c]=function(){H.ps(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={la:function la(){},
kB:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hh:function(){return new P.cb("No element")},
nJ:function(){return new P.cb("Too many elements")},
nI:function(){return new P.cb("Too few elements")},
w:function w(a){this.a=a},
fY:function fY(){},
c5:function c5(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
d5:function d5(){},
em:function em(){},
nz:function(){throw H.c(P.K("Cannot modify unmodifiable Map"))},
cq:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p8:function(a){return v.types[H.ak(a)]},
pf:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iM},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o2:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.H(s,q)|32)>t)return}return parseInt(a,b)},
c7:function(a){return H.nU(a)+H.ls(H.bU(a),0,null)},
nU:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibQ){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cq(t.length>1&&C.b.H(t,0)===36?C.b.ap(t,1):t)},
nV:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q
H.kI(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o3:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aV(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aG(s))}return H.m2(r)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.o3(a)}return H.m2(a)},
o4:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.ai(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o1:function(a){var u=H.c6(a).getFullYear()+0
return u},
o_:function(a){var u=H.c6(a).getMonth()+1
return u},
nW:function(a){var u=H.c6(a).getDate()+0
return u},
nX:function(a){var u=H.c6(a).getHours()+0
return u},
nZ:function(a){var u=H.c6(a).getMinutes()+0
return u},
o0:function(a){var u=H.c6(a).getSeconds()+0
return u},
nY:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.aG(a))},
h:function(a,b){if(a==null)J.aH(a)
throw H.c(H.ck(a,b))},
ck:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.ak(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.e4(b,s)},
p0:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
aG:function(a){return new P.aP(!0,a,null,null)},
oW:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.e0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mZ})
u.name=""}else u.toString=H.mZ
return u},
mZ:function(){return J.au(this.dartException)},
t:function(a){throw H.c(a)},
G:function(a){throw H.c(P.bm(a))},
bg:function(a){var u,t,s,r,q,p
a=H.mX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lZ:function(a,b){return new H.hV(a,b==null?null:b.method)},
lb:function(a,b){var u=b==null,t=u?null:b.method
return new H.hk(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aV(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lb(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lZ(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n1()
q=$.n2()
p=$.n3()
o=$.n4()
n=$.n7()
m=$.n8()
l=$.n6()
$.n5()
k=$.na()
j=$.n9()
i=r.ag(u)
if(i!=null)return f.$1(H.lb(H.J(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.lb(H.J(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lZ(H.J(u),i))}}return f.$1(new H.j3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e9()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e9()
return a},
co:function(a){var u
if(a==null)return new H.f0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f0(a)},
p4:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pe:function(a,b,c,d,e,f){H.f(a,"$ibK")
switch(H.ak(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var u
H.ak(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pe)
a.$identity=u
return u},
ny:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.it().constructor.prototype):Object.create(new H.ct(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lP(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p8,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lO:H.l2
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lP(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nv:function(a,b,c,d){var u=H.l2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nv(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cu
return new Function(r+H.l(q==null?$.cu=H.fF("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cu
return new Function(r+H.l(q==null?$.cu=H.fF("self"):q)+"."+H.l(u)+"("+o+");}")()},
nw:function(a,b,c,d){var u=H.l2,t=H.lO
switch(b?-1:a){case 0:throw H.c(H.o8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nx:function(a,b){var u,t,s,r,q,p,o,n=$.cu
if(n==null)n=$.cu=H.fF("self")
u=$.lN
if(u==null)u=$.lN=H.fF("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()},
lw:function(a,b,c,d,e,f,g){return H.ny(a,b,H.ak(c),d,!!e,!!f,g)},
l2:function(a){return a.a},
lO:function(a){return a.c},
fF:function(a){var u,t,s,r=new H.ct("self","target","receiver","name"),q=J.l8(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.oS("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
p1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lt:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
ak:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
mV:function(a,b){throw H.c(H.b0(a,H.cq(H.J(b).substring(2))))},
pn:function(a,b){throw H.c(H.nu(a,H.cq(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.mV(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.pn(a,b)},
kI:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
mS:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.mV(a,b)},
mO:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ak(u)]
else return a.$S()}return},
fp:function(a,b){var u
if(typeof a=="function")return!0
u=H.mO(J.W(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lp)return a
$.lp=!0
try{if(H.fp(a,b))return a
u=H.kU(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lp=!1}},
ly:function(a,b){if(a!=null&&!H.lv(a,b))H.t(H.b0(a,H.kU(b)))
return a},
b0:function(a,b){return new H.iS("TypeError: "+P.dI(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
nu:function(a,b){return new H.fG("CastError: "+P.dI(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t=J.W(a)
if(!!t.$icw){u=H.mO(t)
if(u!=null)return H.kU(u)
return"Closure"}return H.c7(a)},
oS:function(a){throw H.c(new H.jt(a))},
ps:function(a){throw H.c(new P.fQ(H.J(a)))},
o8:function(a){return new H.ic(a)},
mP:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bU:function(a){if(a==null)return
return a.$ti},
qc:function(a,b,c){return H.cp(a["$a"+H.l(c)],H.bU(b))},
bT:function(a,b,c,d){var u
H.J(c)
H.ak(d)
u=H.cp(a["$a"+H.l(c)],H.bU(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.J(b)
H.ak(c)
u=H.cp(a["$a"+H.l(b)],H.bU(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ak(b)
u=H.bU(a)
return u==null?null:u[b]},
kU:function(a){return H.bS(a,null)},
bS:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cq(a[0].name)+H.ls(a,1,b)
if(typeof a=="function")return H.cq(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ak(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oL:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bS(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bS(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bS(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bS(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.p3(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bS(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ls:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bS(p,c)}return"<"+u.i(0)+">"},
cp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lu:function(a,b,c,d){var u,t
H.J(b)
H.kI(c)
H.J(d)
if(a==null)return!1
u=H.bU(a)
t=J.W(a)
if(t[b]==null)return!1
return H.mJ(H.cp(t[d],u),null,c,null)},
k:function(a,b,c,d){H.J(b)
H.kI(c)
H.J(d)
if(a==null)return a
if(H.lu(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cq(b.substring(2))+H.ls(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qa:function(a,b,c){return a.apply(b,H.cp(J.W(b)["$a"+H.l(c)],H.bU(b)))},
mR:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="N"||a===-1||a===-2||H.mR(u)}return!1},
lv:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="N"||b===-1||b===-2||H.mR(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fp(a,b)}u=J.W(a).constructor
t=H.bU(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lv(a,b))throw H.c(H.b0(a,H.kU(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bK"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cp(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mJ(H.cp(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pk(h,b,g,d)},
pk:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qb:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pi:function(a){var u,t,s,r,q=H.J($.mQ.$1(a)),p=$.kA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mI.$2(a,q))
if(q!=null){p=$.kA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kT(u)
$.kA[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kF[q]=u
return u}if(s==="-"){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mU(a,u)
if(s==="*")throw H.c(P.j2(q))
if(v.leafTags[q]===true){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mU(a,u)},
mU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kT:function(a){return J.lA(a,!1,null,!!a.$iM)},
pj:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kT(u)
else return J.lA(u,c,null,null)},
pc:function(){if(!0===$.lz)return
$.lz=!0
H.pd()},
pd:function(){var u,t,s,r,q,p,o,n
$.kA=Object.create(null)
$.kF=Object.create(null)
H.pb()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mW.$1(q)
if(p!=null){o=H.pj(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pb:function(){var u,t,s,r,q,p,o=C.K()
o=H.ci(C.L,H.ci(C.M,H.ci(C.z,H.ci(C.z,H.ci(C.N,H.ci(C.O,H.ci(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mQ=new H.kC(r)
$.mI=new H.kD(q)
$.mW=new H.kE(p)},
ci:function(a,b){return a(b)||b},
nL:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pq:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p2:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lD:function(a,b,c){var u=H.pr(a,b,c)
return u},
pr:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mX(b),'g'),H.p2(c))},
fK:function fK(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hV:function hV(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
l_:function l_(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cw:function cw(){},
iD:function iD(){},
it:function it(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a){this.a=a},
fG:function fG(a){this.a=a},
ic:function ic(a){this.a=a},
jt:function jt(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hp:function hp(a,b){this.a=a
this.$ti=b},
hq:function hq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
nT:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ck(b,a))},
oJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p0(a,b,c))
return b},
cK:function cK(){},
bN:function bN(){},
dX:function dX(){},
cL:function cL(){},
dY:function dY(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
dZ:function dZ(){},
cM:function cM(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
p3:function(a){return J.lU(a?Object.keys(a):[],null)},
pm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fr:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lz==null){H.pc()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j2("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lE()]
if(r!=null)return r
r=H.pi(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lE(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ai(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.l8(H.d(a,[b]))},
l8:function(a){H.kI(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.hi.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fr(a)},
p5:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fr(a)},
cm:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fr(a)},
fq:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fr(a)},
p6:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
p7:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
cn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fr(a)},
nj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p5(a).p(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).w(a,b)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p7(a).v(a,b)},
nk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p6(a).t(a,b)},
lH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cm(a).j(a,b)},
l0:function(a,b,c){return J.fq(a).n(a,b,c)},
nl:function(a,b){return J.dr(a).H(a,b)},
nm:function(a,b,c){return J.cn(a).i7(a,b,c)},
nn:function(a,b,c,d){return J.cn(a).j6(a,b,c,d)},
no:function(a,b){return J.dr(a).a1(a,b)},
ft:function(a,b){return J.fq(a).L(a,b)},
np:function(a,b,c,d){return J.cn(a).ju(a,b,c,d)},
lI:function(a,b){return J.fq(a).N(a,b)},
nq:function(a){return J.cn(a).gje(a)},
lJ:function(a){return J.cn(a).gcD(a)},
du:function(a){return J.W(a).gK(a)},
bD:function(a){return J.fq(a).gV(a)},
aH:function(a){return J.cm(a).gl(a)},
lK:function(a){return J.fq(a).k_(a)},
nr:function(a,b){return J.cn(a).k7(a,b)},
ns:function(a,b,c){return J.dr(a).D(a,b,c)},
nt:function(a){return J.dr(a).kg(a)},
au:function(a){return J.W(a).i(a)},
a:function a(){},
hi:function hi(){},
dM:function dM(){},
dN:function dN(){},
hZ:function hZ(){},
bQ:function bQ(){},
bq:function bq(){},
aR:function aR(a){this.$ti=a},
l9:function l9(a){this.$ti=a},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bM:function bM(){},
dL:function dL(){},
dK:function dK(){},
bp:function bp(){}},P={
ol:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oT()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cj(new P.jv(s),1)).observe(u,{childList:true})
return new P.ju(s,u,t)}else if(self.setImmediate!=null)return P.oU()
return P.oV()},
om:function(a){self.scheduleImmediate(H.cj(new P.jw(H.n(a,{func:1,ret:-1})),0))},
on:function(a){self.setImmediate(H.cj(new P.jx(H.n(a,{func:1,ret:-1})),0))},
oo:function(a){P.lg(C.t,H.n(a,{func:1,ret:-1}))},
lg:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.ou(u<0?0:u,b)},
mb:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.f.a6(a.a,1000)
return P.ov(u<0?0:u,b)},
ou:function(a,b){var u=new P.f6()
u.fB(a,b)
return u},
ov:function(a,b){var u=new P.f6()
u.fC(a,b)
return u},
op:function(a,b){var u,t,s
b.a=1
try{a.eV(new P.jH(b),new P.jI(b),null)}catch(s){u=H.al(s)
t=H.co(s)
P.po(new P.jJ(b,u,t))}},
mp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaN")
if(u>=4){t=b.ck()
b.a=a.a
b.c=a.c
P.db(b,t)}else{t=H.f(b.c,"$ibj")
b.a=2
b.c=a
a.dL(t)}},
db:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.kr(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.f(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.kr(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.jN(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jM(u,b,o).$0()}else if((g&2)!==0)new P.jL(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.W(g).$icB){if(g.a>=4){k=H.f(q.c,"$ibj")
q.c=null
b=q.bp(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mp(g,q)
return}}j=b.b
k=H.f(j.c,"$ibj")
j.c=null
b=j.bp(k)
g=u.a
r=u.b
if(!g){H.B(r,H.v(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
oO:function(a,b){if(H.fp(a,{func:1,args:[P.R,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ax]})
if(H.fp(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.l1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oN:function(){var u,t
for(;u=$.ch,u!=null;){$.dq=null
t=u.b
$.ch=t
if(t==null)$.dp=null
u.a.$0()}},
oR:function(){$.lq=!0
try{P.oN()}finally{$.dq=null
$.lq=!1
if($.ch!=null)$.lF().$1(P.mK())}},
mF:function(a){var u=new P.et(H.n(a,{func:1,ret:-1}))
if($.ch==null){$.ch=$.dp=u
if(!$.lq)$.lF().$1(P.mK())}else $.dp=$.dp.b=u},
oQ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ch
if(u==null){P.mF(a)
$.dq=$.dp
return}t=new P.et(a)
s=$.dq
if(s==null){t.b=u
$.ch=$.dq=t}else{t.b=s.b
$.dq=s.b=t
if(t.b==null)$.dp=t}},
po:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a3
if(C.k===u){P.kt(t,t,C.k,a)
return}u.toString
P.kt(t,t,u,H.n(u.cw(a),s))},
ma:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a3
if(u===C.k){u.toString
return P.lg(a,b)}return P.lg(a,H.n(u.cw(b),t))},
oc:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a3
if(u===C.k){u.toString
return P.mb(a,b)}t=u.dY(b,P.be)
$.a3.toString
return P.mb(a,H.n(t,s))},
kr:function(a,b,c,d,e){var u={}
u.a=d
P.oQ(new P.ks(u,e))},
mB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
mC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
oP:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kt:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cw(d):c.jf(d,-1)
P.mF(d)},
jv:function jv(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
f6:function f6(){this.c=0},
kb:function kb(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aN:function aN(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jG:function jG(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
cT:function cT(){},
ix:function ix(){},
be:function be(){},
an:function an(a,b){this.a=a
this.b=b},
kk:function kk(){},
ks:function ks(a,b){this.a=a
this.b=b},
jU:function jU(){},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function(a,b){return new H.aS([a,b])},
lc:function(a,b){return new H.aS([a,b])},
nP:function(a){return H.p4(a,new H.aS([null,null]))},
dQ:function(a){return new P.jS([a])},
lm:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ot:function(a,b,c){var u=new P.eI(a,b,[c])
u.c=a.e
return u},
nH:function(a,b,c){var u,t
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.ay,a)
try{P.oM(a,u)}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}t=P.m8(b,H.mS(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l7:function(a,b,c){var u,t
if(P.lr(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.ay,a)
try{t=u
t.a=P.m8(t.a,a,", ")}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lr:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
oM:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.l(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.F();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nO:function(a,b,c){var u=P.nN(b,c)
a.N(0,new P.hr(u,b,c))
return u},
lV:function(a,b){var u,t,s=P.dQ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t)s.h(0,H.B(a[t],b))
return s},
ld:function(a){var u,t={}
if(P.lr(a))return"{...}"
u=new P.aj("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.lI(a,new P.hv(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.h($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jS:function jS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eI:function eI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(){},
z:function z(){},
hu:function hu(){},
hv:function hv(a,b){this.a=a
this.b=b},
af:function af(){},
kc:function kc(){},
hw:function hw(){},
en:function en(a,b){this.a=a
this.$ti=b},
jZ:function jZ(){},
eJ:function eJ(){},
fc:function fc(){},
og:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oh(!1,b,c,d)
return},
oh:function(a,b,c,d){var u,t,s=$.nb()
if(s==null)return
u=0===c
if(u&&!0)return P.lj(s,b)
t=b.length
d=P.bv(c,d,t)
if(u&&d===t)return P.lj(s,b)
return P.lj(s,b.subarray(c,d))},
lj:function(a,b){if(P.oj(b))return
return P.ok(a,b)},
ok:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
oj:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oi:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
mE:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.cm(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bT()
if((s&127)!==s)return t-b}return c-b},
lM:function(a,b,c,d,e,f){if(C.f.bi(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fC:function fC(){},
fD:function fD(){},
bY:function bY(){},
bH:function bH(){},
h_:function h_(){},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(a){this.a=a},
jb:function jb(){},
jd:function jd(){},
ki:function ki(a){this.b=0
this.c=a},
jc:function jc(a){this.a=a},
kh:function kh(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fs:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.o2(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
nE:function(a){if(a instanceof H.cw)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
nQ:function(a,b,c){var u,t
H.B(b,c)
u=J.nK(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lW:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bD(a);u.F();)C.a.h(s,H.B(u.gM(u),c))
if(b)return s
return H.k(J.l8(s),"$ib",t,"$ab")},
cU:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bv(b,c,u)
return H.m3(b>0||c<u?C.a.f8(a,b,c):a)}if(!!J.W(a).$icM)return H.o4(a,b,P.bv(b,c,a.length))
return P.oa(a,b,c)},
oa:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.ai(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ai(c,b,J.aH(a),q,q))
t=J.bD(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ai(b,0,s,q,q))
r=[]
if(u)for(;t.F();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ai(c,b,s,q,q))
r.push(t.gM(t))}return H.m3(r)},
o6:function(a){return new H.hj(a,H.nL(a,!1,!0,!1))},
m8:function(a,b,c){var u=J.bD(b)
if(!u.F())return a
if(c.length===0){do a+=H.l(u.gM(u))
while(u.F())}else{a+=H.l(u.gM(u))
for(;u.F();)a=a+c+H.l(u.gM(u))}return a},
me:function(){var u=H.nV()
if(u!=null)return P.of(u)
throw H.c(P.K("'Uri.base' is not supported"))},
fd:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nh().b
if(typeof b!=="string")H.t(H.aG(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.at(c,"bY",0))
t=c.gjt().cE(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nA:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a,b){return new P.b5(1e6*b+1000*a)},
dI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nE(a)},
dw:function(a){return new P.aP(!1,null,null,a)},
l1:function(a,b,c){return new P.aP(!0,a,b,c)},
e4:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bv:function(a,b,c){if(0>a||a>c)throw H.c(P.ai(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ai(b,a,c,"end",null))
return b}return c},
lf:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.ai(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.ak(e==null?J.aH(b):e)
return new P.hg(u,!0,a,c,"Index out of range")},
K:function(a){return new P.j4(a)},
j2:function(a){return new P.j1(a)},
m7:function(a){return new P.cb(a)},
bm:function(a){return new P.fJ(a)},
r:function(a){return new P.eB(a)},
a8:function(a,b,c){return new P.h9(a,b,c)},
nR:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lC:function(a){H.pm(a)},
of:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.H(a,4)^58)*3|C.b.H(a,0)^100|C.b.H(a,1)^97|C.b.H(a,2)^116|C.b.H(a,3)^97)>>>0
if(u===0)return P.md(e<e?C.b.D(a,0,e):a,5,f).gf_()
else if(u===32)return P.md(C.b.D(a,5,e),0,f).gf_()}t=new Array(8)
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
if(P.mD(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.kn()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ad(a,"..",o)))j=n>o+2&&C.b.ad(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ad(a,"file",0)){if(q<=0){if(!C.b.ad(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.D(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ad(a,"http",0)){if(t&&p+3===o&&C.b.ad(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ad(a,"https",0)){if(t&&p+4===o&&C.b.ad(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.D(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k1(a,r,q,p,o,n,m,k)}return P.ow(a,0,e,r,q,p,o,n,m,k)},
mg:function(a){var u=P.e
return C.a.jz(H.d(a.split("&"),[u]),P.lc(u,u),new P.j9(C.l),[P.I,P.e,P.e])},
oe:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j6(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a1(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fs(C.b.D(a,s,t),n,n)
if(typeof p!=="number")return p.f4()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fs(C.b.D(a,s,c),n,n)
if(typeof p!=="number")return p.f4()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j7(a)
t=new P.j8(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a1(a,r)
if(n===58){if(r===b){++r
if(C.b.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oe(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aV(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ow:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oD(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oE(a,u,e-1):""
s=P.oA(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.oC(P.fs(C.b.D(a,r,g),new P.kd(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oB(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.ln(a,h+1,i,n):n
return new P.cf(j,t,s,q,p,o,i<c?P.oz(a,i+1,c):n)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a8(c,a,b))},
oC:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
oA:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a1(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.mf(a,b+1,u)
return C.b.D(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.b.a1(a,t)===58){P.mf(a,b,c)
return"["+a+"]"}return P.oG(a,b,c)},
oG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a1(a,u)
if(q===37){p=P.mz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.b.D(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.D(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.D(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.D(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mu(q)
u+=l
t=u}}}}if(s==null)return C.b.D(a,b,c)
if(t<c){n=C.b.D(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.H(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.D(a,b,c)
return P.ox(t?a.toLowerCase():a)},
ox:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oE:function(a,b,c){return P.dm(a,b,c,C.a_,!1)},
oB:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.E,!0):C.n.ks(d,new P.ke(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.oF(u,e,f)},
oF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oH(a,!u||c)
return P.oI(a)},
ln:function(a,b,c,d){var u,t={}
H.k(d,"$iI",[P.e,null],"$aI")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dm(a,b,c,C.p,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.N(0,new P.kf(new P.kg(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oz:function(a,b,c){return P.dm(a,b,c,C.p,!0)},
mz:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a1(a,b+1)
t=C.b.a1(a,p)
s=H.kB(u)
r=H.kB(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aV(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c8(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.D(a,b,b+3).toUpperCase()
return},
mu:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.H(o,a>>>4))
C.a.n(t,2,C.b.H(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.is(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.H(o,p>>>4))
C.a.n(t,q+2,C.b.H(o,p&15))
q+=3}}return P.cU(t,0,null)},
dm:function(a,b,c,d,e){var u=P.my(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.D(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.b.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mz(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mu(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.D(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.D(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mx:function(a){if(C.b.a5(a,"."))return!0
return C.b.ex(a,"/.")!==-1},
oI:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oH:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r=a.length
if(r>=2&&P.mw(J.nl(a,0)))for(u=1;u<r;++u){t=C.b.H(a,u)
if(t===58)return C.b.D(a,0,u)+"%3A"+C.b.ap(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oy:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lo:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.D(a,b,c)
else r=new H.w(C.b.D(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.H(a,q)
if(t>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dw("Truncated URI"))
C.a.h(r,P.oy(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.jc(!1).cE(r)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a8(m,a,t))}}if(s<0&&t>b)throw H.c(P.a8(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.ad(a,"base64",p+1))throw H.c(P.a8("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jK(0,a,o,u)
else{n=P.my(a,o,u,C.p,!0)
if(n!=null)a=C.b.b1(a,o,u,n)}return new P.j5(a,l,c)},
oK:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nR(22,new P.ko(),P.T),n=new P.kn(o),m=new P.kp(),l=new P.kq(),k=H.f(n.$2(0,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iT")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iT")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iT")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iT")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iT")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iT"),"]",5)
k=H.f(n.$2(9,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iT")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iT")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iT"),"az",21)
k=H.f(n.$2(21,245),"$iT")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mD:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.ni()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
U:function U(){},
aB:function aB(a,b){this.a=a
this.b=b},
u:function u(){},
b5:function b5(a){this.a=a},
fW:function fW(){},
fX:function fX(){},
bJ:function bJ(){},
fw:function fw(){},
e0:function e0(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hg:function hg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j4:function j4(a){this.a=a},
j1:function j1(a){this.a=a},
cb:function cb(a){this.a=a},
fJ:function fJ(a){this.a=a},
hY:function hY(){},
e9:function e9(){},
fQ:function fQ(a){this.a=a},
eB:function eB(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(){},
p:function p(){},
i:function i(){},
b6:function b6(){},
b:function b(){},
I:function I(){},
N:function N(){},
ae:function ae(){},
R:function R(){},
ax:function ax(){},
e:function e(){},
aj:function aj(a){this.a=a},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b){this.a=a
this.b=b},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(){},
kn:function kn(a){this.a=a},
kp:function kp(){},
kq:function kq(){},
k1:function k1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jB:function jB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oZ:function(a){var u,t=J.W(a)
if(!!t.$ibo){u=t.ge1(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fb(a.data,a.height,a.width)},
oY:function(a){if(a instanceof P.fb)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var u,t,s,r,q
if(a==null)return
u=P.lc(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.J(t[r])
u.n(0,q,a[q])}return u},
oX:function(a){var u={}
a.N(0,new P.ku(u))
return u},
k3:function k3(){},
k5:function k5(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
jR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
os:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jT:function jT(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hm:function hm(){},
bb:function bb(){},
hW:function hW(){},
i2:function i2(){},
cQ:function cQ(){},
iA:function iA(){},
q:function q(){},
bf:function bf(){},
iP:function iP(){},
eG:function eG(){},
eH:function eH(){},
eR:function eR(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
f9:function f9(){},
fa:function fa(){},
T:function T(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(a){this.a=a},
fB:function fB(){},
bV:function bV(){},
hX:function hX(){},
eu:function eu(){},
dy:function dy(){},
e3:function e3(){},
ca:function ca(){},
e6:function e6(){},
ec:function ec(){},
el:function el(){},
is:function is(){},
eZ:function eZ(){},
f_:function f_(){}},W={
lL:function(){var u=document.createElement("a")
return u},
l3:function(){var u=document.createElement("canvas")
return u},
nC:function(a,b,c){var u=document.body,t=(u&&C.x).af(u,a,b,c)
t.toString
u=W.F
u=new H.d8(new W.ar(t),H.n(new W.fZ(),{func:1,ret:P.U,args:[u]}),[u])
return H.f(u.gaM(u),"$iX")},
nD:function(a){H.f(a,"$ij")
return"wheel"},
cz:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cn(a)
t=u.geT(a)
if(typeof t==="string")r=u.geT(a)}catch(s){H.al(s)}return r},
nG:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icE")
try{s.type=a}catch(u){H.al(u)}return s},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a,b,c,d){var u=W.jQ(W.jQ(W.jQ(W.jQ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.mH(new W.jF(c),W.o)
if(u!=null&&!0)J.nn(a,b,u,!1)
return new W.jE(a,b,u,!1,[e])},
mq:function(a){var u=W.lL(),t=window.location
u=new W.bR(new W.jY(u,t))
u.fl(a)
return u},
oq:function(a,b,c,d){H.f(a,"$iX")
H.J(b)
H.J(c)
H.f(d,"$ibR")
return!0},
or:function(a,b,c,d){var u,t,s
H.f(a,"$iX")
H.J(b)
H.J(c)
u=H.f(d,"$ibR").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ms:function(){var u=P.e,t=P.lV(C.u,u),s=H.v(C.u,0),r=H.n(new W.k9(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k8(t,P.dQ(u),P.dQ(u),P.dQ(u),null)
t.fA(null,new H.hz(C.u,r,[s,u]),q,null)
return t},
mH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.k)return a
return u.dY(a,b)},
y:function y(){},
fu:function fu(){},
dv:function dv(){},
fv:function fv(){},
cs:function cs(){},
bW:function bW(){},
bE:function bE(){},
bX:function bX(){},
cv:function cv(){},
bF:function bF(){},
cx:function cx(){},
fM:function fM(){},
a_:function a_(){},
cy:function cy(){},
fN:function fN(){},
b3:function b3(){},
b4:function b4(){},
fO:function fO(){},
fP:function fP(){},
fS:function fS(){},
aI:function aI(){},
fT:function fT(){},
dF:function dF(){},
dG:function dG(){},
fU:function fU(){},
fV:function fV(){},
jz:function jz(a,b){this.a=a
this.b=b},
X:function X(){},
fZ:function fZ(){},
o:function o(){},
j:function j(){},
aJ:function aJ(){},
cA:function cA(){},
h4:function h4(){},
h8:function h8(){},
aQ:function aQ(){},
hd:function hd(){},
c2:function c2(){},
bo:function bo(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dR:function dR(){},
hG:function hG(){},
cI:function cI(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aT:function aT(){},
hL:function hL(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cN:function cN(){},
aU:function aU(){},
i0:function i0(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
id:function id(){},
aV:function aV(){},
iq:function iq(){},
aW:function aW(){},
ir:function ir(){},
aX:function aX(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
ea:function ea(){},
iB:function iB(){},
iC:function iC(){},
cV:function cV(){},
aY:function aY(){},
aL:function aL(){},
iE:function iE(){},
iF:function iF(){},
iJ:function iJ(){},
aZ:function aZ(){},
b_:function b_(){},
iN:function iN(){},
iO:function iO(){},
bP:function bP(){},
ja:function ja(){},
jq:function jq(){},
bi:function bi(){},
d9:function d9(){},
da:function da(){},
jA:function jA(){},
ew:function ew(){},
jP:function jP(){},
eO:function eO(){},
k2:function k2(){},
k6:function k6(){},
jy:function jy(){},
jC:function jC(a){this.a=a},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jE:function jE(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jF:function jF(a){this.a=a},
bR:function bR(a){this.a=a},
H:function H(){},
e_:function e_(a){this.a=a},
hT:function hT(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){},
k_:function k_(){},
k0:function k0(){},
k8:function k8(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k9:function k9(){},
k7:function k7(){},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
jY:function jY(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a},
kj:function kj(a){this.a=a},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
dh:function dh(){},
di:function di(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
dj:function dj(){},
dk:function dk(){},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},O={
l4:function(a){var u=new O.a7([a])
u.bY(a)
return u},
a7:function a7(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
dU:function dU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(){},
hC:function hC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){}},E={
o7:function(a,b){var u=new E.i6(a)
u.fg(a,b)
return u},
ob:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibX)return E.m9(a,!0,!0,!0,!1)
u=W.l3()
t=u.style
t.width="100%"
t.height="100%"
s.gcD(a).h(0,u)
return E.m9(u,!0,!0,!0,!1)},
m9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eh(),j=H.f(C.m.d8(a,"webgl2",P.nP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o7(j,a)
u=new T.iG(j)
H.ak(j.getParameter(3379))
u.c=H.ak(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eo(a)
t=new X.hl()
t.c=new X.aD(!1,!1,!1)
t.si1(P.dQ(P.p))
u.b=t
t=new X.hM(u)
t.f=0
t.r=V.bu()
t.x=V.bu()
t.ch=t.Q=1
u.c=t
t=new X.ht(u)
t.r=0
t.x=V.bu()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iM(u)
t.f=V.bu()
t.r=V.bu()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfW(H.d([],[[P.cT,P.R]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.n(u.ghq(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.n(u.ghw(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.n(u.ghk(),o),!1,p))
t=u.z
n=W.b7
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.n(u.ghA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.n(u.ghy(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.n(u.ghE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.n(u.ghI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.n(u.ghG(),q),!1,r))
n=u.z
m=W.bi;(n&&C.a).h(n,W.ad(a,H.J(W.nD(a)),H.n(u.ghK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.n(u.ghs(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.n(u.ghu(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.n(u.ghM(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.n(u.ghZ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.n(u.ghV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.n(u.ghX(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aB(Date.now(),!1)
k.cy=0
k.dN()
return k},
fE:function fE(){},
av:function av(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
eh:function eh(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iI:function iI(a){this.a=a}},Z={
lk:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
aM:function(a){return new Z.bh(a)},
es:function es(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jr:function jr(a){this.a=a},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
Y:function(){var u=new D.c_()
u.saj(null)
u.saT(null)
u.c=null
u.d=0
return u},
fH:function fH(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
A:function A(){this.b=null},
c3:function c3(a){this.b=null
this.$ti=a},
c4:function c4(a){this.b=null
this.$ti=a},
S:function S(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bI:function bI(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
dP:function dP(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e2:function e2(){},
e8:function e8(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},hl:function hl(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hM:function hM(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i1:function i1(){},ej:function ej(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iM:function iM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eo:function eo(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nF:function(a){var u=new X.ha(),t=new V.aA(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m5
if(t==null){t=V.m4(0,0,1,1)
$.m5=t}u.r=t
return u},
dC:function dC(){},
ha:function ha(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eb:function eb(){}},V={
pu:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bi(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.e.eW(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cl:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.u],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ah(u[p],s))}return u},
lB:function(a){return C.e.ke(Math.pow(2,C.W.cO(Math.log(H.oW(a))/Math.log(2))))},
dW:function(){var u=$.lY
return u==null?$.lY=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lX:function(a,b,c){var u=c.u(0,Math.sqrt(c.E(c))),t=b.aG(u),s=t.u(0,Math.sqrt(t.E(t))),r=u.aG(s),q=new V.D(a.a,a.b,a.c),p=s.U(0).E(q),o=r.U(0).E(q),n=u.U(0).E(q)
return V.ba(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bu:function(){var u=$.m1
return u==null?$.m1=new V.a6(0,0):u},
le:function(){var u=$.cO
return u==null?$.cO=new V.a0(0,0,0):u},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e5(a,b,c,d)},
d6:function(){var u=$.ml
return u==null?$.ml=new V.D(0,0,0):u},
mm:function(){var u=$.mk
return u==null?$.mk=new V.D(0,1,0):u},
mn:function(){var u=$.je
return u==null?$.je=new V.D(0,0,1):u},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a){this.a=a},
dV:function dV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.H(a,0)
t=C.b.H(b,0)
s=new V.i5()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ie()
u.fh(a)
return u},
iL:function(){var u=new V.iK(),t=P.e
u.siu(new H.aS([t,V.cS]))
u.six(new H.aS([t,V.cX]))
u.c=null
return u},
bl:function bl(){},
aC:function aC(){},
dT:function dT(){},
aw:function aw(){this.a=null},
i5:function i5(){this.b=this.a=null},
ie:function ie(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.b=a
this.c=null},
iK:function iK(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
pp:function(a){P.oc(C.T,new V.kV(a))},
o9:function(a){var u=new V.ik()
u.fj(a,!0)
return u},
bG:function bG(){},
kV:function kV(a){this.a=a},
fR:function fR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i3:function i3(a){this.a=a
this.c=null},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(){this.b=this.a=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
io:function io(a){this.a=a}},U={
l5:function(){var u=new U.fI()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lQ:function(a){var u=new U.dD()
u.a=a
return u},
fI:function fI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dH:function dH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nS:function(a,b){var u=a.am,t=new A.hA(b,u)
t.fi(b,u)
t.ff(a,b)
return t},
lh:function(a,b,c,d,e){var u=new A.iU(a,c,e)
u.f=d
u.siI(P.nQ(d,0,P.p))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a){this.a=a},
hA:function hA(a,b){var _=this
_.bw=_.e5=_.bv=_.am=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.el=_.cI=_.ek=_.bJ=_.ej=_.ei=_.bI=_.bH=_.eh=_.eg=_.bG=_.bF=_.bE=_.ef=_.ee=_.bD=_.ed=_.ec=_.bC=_.eb=_.ea=_.bB=_.bA=_.e9=_.e8=_.bz=_.by=_.e7=_.e6=_.bx=null
_.cN=_.ep=_.cM=_.eo=_.cL=_.en=_.cK=_.em=_.cJ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aw=b3
_.am=b4
_.bv=b5},
cZ:function cZ(a,b){this.b=a
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
cR:function cR(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
ek:function ek(){},
j_:function j_(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a5:function a5(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
aF:function aF(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lx:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
u=F.ig()
F.dn(u,b,c,d,a,1,0,0,1)
F.dn(u,b,c,d,a,0,1,0,3)
F.dn(u,b,c,d,a,0,0,1,2)
F.dn(u,b,c,d,a,-1,0,0,0)
F.dn(u,b,c,d,a,0,-1,0,0)
F.dn(u,b,c,d,a,0,0,-1,3)
u.al()
return u},
km:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.D(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.D(p+a3,o+a1,n+a2)
l=new V.D(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.D(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.km(u)
g=F.km(e.b)
f=F.kY(d,a0,new F.kl(e,F.km(e.c),F.km(e.d),g,h,c),b)
if(f!=null)a.b_(f)},
mN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.u,args:[P.u]})
if(e<3)return
u=F.ig()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ac])
q=u.a
p=new V.D(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.j9(new V.bc(a,-1,-1,-1),new V.aA(1,1,1,1),new V.a0(0,0,c),new V.D(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.C(k)
j=new V.D(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.cd(new V.bc(a,-1,-1,-1),null,new V.aA(i,g,h,1),new V.a0(m*k,l*k,c),new V.D(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.j7(r)
return u},
mL:function(a,b,c){return F.p_(!0,a,1,new F.kv(1,c),b)},
p_:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
u=F.kY(c,e,new F.kx(d),null)
if(u==null)return
u.al()
u.bs()
if(b)u.b_(F.mN(3,!1,1,new F.ky(d),e))
u.b_(F.mN(1,!0,-1,new F.kz(d),e))
return u},
ph:function(a,b){var u=F.kY(a,b,new F.kH(),null)
u.d.bO()
u.al()
u.bs()
return u},
as:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.u(0,Math.sqrt(b.E(b)))
u=b.a
t=b.b
s=b.c
r=F.cd(j,j,j,new V.a0(u,t,s),b,j,j,j,0)
q=a.jv(r,new F.d7())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sab(0,new V.aA(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sd3(new V.a6(l,k<0?-k:k))
a.a.h(0,r)
return r},
a4:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.br(0,b,d,c)
else{u=F.as(a,b.r.p(0,c.r).v(0,0.5))
t=F.as(a,c.r.p(0,d.r).v(0,0.5))
s=F.as(a,d.r.p(0,b.r).v(0,0.5))
r=e-1
F.a4(a,b,u,s,r)
F.a4(a,u,c,t,r)
F.a4(a,t,s,u,r)
F.a4(a,s,t,d,r)}},
mY:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kW()
t=F.lx(a,null,new F.kX(s,1),b)
t.bs()
return t},
pt:function(){return F.mM(15,30,0.5,1,new F.kZ())},
pg:function(){return F.mM(12,120,0.3,1,new F.kG(3,2))},
mM:function(a,b,c,d,e){var u=F.kY(a,b,new F.kw(H.n(e,{func:1,ret:V.a0,args:[P.u]}),d,b,c),null)
if(u==null)return
u.al()
u.bs()
return u},
kY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ac,P.u,P.u]})
if(a<1)return
if(b<1)return
u=F.ig()
t=H.d([],[F.ac])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.cd(g,g,new V.aA(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cF(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.cd(g,g,new V.aA(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cF(d))}}u.d.j8(a+1,b+1,t)
return u},
c0:function(a,b,c){var u=new F.ab(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.cq(a)
u.cr(b)
u.im(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
nM:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.cq(a)
u.cr(b)
C.a.h(u.a.a.c.b,u)
u.a.a.W()
return u},
ig:function(){var u=new F.e7(),t=new F.jf(u)
t.b=!1
t.siJ(H.d([],[F.ac]))
u.a=t
t=new F.ij(u)
t.sci(H.d([],[F.bO]))
u.b=t
t=new F.ii(u)
t.sh2(H.d([],[F.br]))
u.c=t
t=new F.ih(u)
t.sfX(H.d([],[F.ab]))
u.d=t
u.e=null
return u},
cd:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ac(),r=new F.jn()
r.sci(H.d([],[F.bO]))
s.b=r
r=new F.jk()
u=[F.br]
r.sh3(H.d([],u))
r.sh4(H.d([],u))
s.c=r
r=new F.jg()
u=[F.ab]
r.sfY(H.d([],u))
r.sfZ(H.d([],u))
r.sh_(H.d([],u))
s.d=r
h=$.nc()
s.e=0
r=$.bA()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bz().a)!==0?e:t
s.x=(u&$.by().a)!==0?b:t
s.y=(u&$.bB().a)!==0?f:t
s.z=(u&$.bC().a)!==0?g:t
s.Q=(u&$.nd().a)!==0?c:t
s.ch=(u&$.cr().a)!==0?i:0
s.cx=(u&$.bx().a)!==0?a:t
return s},
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kv:function kv(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kH:function kH(){},
kW:function kW(){},
kX:function kX(a,b){this.a=a
this.b=b},
kZ:function kZ(){},
kG:function kG(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(){},
ip:function ip(){},
br:function br(){this.b=this.a=null},
hn:function hn(){},
iT:function iT(){},
bO:function bO(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ac:function ac(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jp:function jp(a){this.a=a},
jo:function jo(a){this.a=a},
jf:function jf(a){this.a=a
this.c=this.b=null},
jg:function jg(){this.d=this.c=this.b=null},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
jk:function jk(){this.c=this.b=null},
jl:function jl(){},
d7:function d7(){},
jm:function jm(){},
jj:function jj(){},
hU:function hU(){},
jn:function jn(){this.b=null}},T={cW:function cW(){},ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iG:function iG(a){var _=this
_.a=a
_.e=_.d=_.c=null},iH:function iH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
mT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.o9("Test 011"),a2=W.l3()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.e]
a1.dV(H.d(["A test of the Material Lighting shader with cube textures and ","a directional light. The cube textures are for ambient, diffuse, ","and specular."],u))
a1.j5(H.d(["shapes"],u))
a1.dV(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.ob(t,!0,!0,!0,!1)
r=new E.av()
r.a=""
r.b=!0
q=E.av
r.sfN(0,O.l4(q))
r.y.bj(r.gjL(),r.gjO())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.saa(0,a)
r.sbb(a)
r.saa(0,F.mY(8,8))
p=new U.cC()
o=U.ah
p.bY(o)
p.bj(p.ghc(),p.ghR())
p.e=null
p.f=V.dW()
p.r=0
n=s.r
m=new U.eq()
l=U.l5()
l.sd7(0,!0)
l.scT(6.283185307179586)
l.scV(0)
l.sa0(0,0)
l.scU(100)
l.sX(0)
l.scG(0.5)
m.b=l
k=m.gaS()
l.gB().h(0,k)
l=U.l5()
l.sd7(0,!0)
l.scT(6.283185307179586)
l.scV(0)
l.sa0(0,0)
l.scU(100)
l.sX(0)
l.scG(0.5)
m.c=l
l.gB().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.aD(!1,!1,!1)
i=m.d
m.d=j
l=[X.aD]
k=new D.S(a0,i,j,l)
k.b=!0
m.T(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.S("invertX",k,!1,[P.U])
k.b=!0
m.T(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.S("invertY",k,!0,[P.U])
k.b=!0
m.T(k)}m.b7(n)
p.h(0,m)
n=s.r
m=new U.ep()
k=U.l5()
k.sd7(0,!0)
k.scT(6.283185307179586)
k.scV(0)
k.sa0(0,0)
k.scU(100)
k.sX(0)
k.scG(0.2)
m.b=k
k.gB().h(0,m.gaS())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.aD(!0,!1,!1)
i=m.c
m.c=j
k=new D.S(a0,i,j,l)
k.b=!0
m.T(k)
m.b7(n)
p.h(0,m)
n=s.r
m=new U.er()
m.c=0.01
m.e=m.d=0
j=new X.aD(!1,!1,!1)
m.b=j
l=new D.S(a0,a,j,l)
l.b=!0
m.T(l)
m.b7(n)
p.h(0,m)
r.sbb(p)
h=s.f.eB("../resources/earthColor")
g=new O.dU()
g.sfK(O.l4(V.ao))
g.e.bj(g.ghg(),g.ghi())
p=new O.b9(g,"emission")
p.c=C.d
p.f=new V.a9(0,0,0)
g.f=p
p=new O.b9(g,"ambient")
p.c=C.d
p.f=new V.a9(0,0,0)
g.r=p
p=new O.b9(g,"diffuse")
p.c=C.d
p.f=new V.a9(0,0,0)
g.x=p
p=new O.b9(g,"invDiffuse")
p.c=C.d
p.f=new V.a9(0,0,0)
g.y=p
p=new O.hF(g,"specular")
p.c=C.d
p.f=new V.a9(0,0,0)
p.ch=100
g.z=p
p=new O.hC(g,"bump")
p.c=C.d
g.Q=p
g.ch=null
p=new O.b9(g,"reflect")
p.c=C.d
p.f=new V.a9(0,0,0)
g.cx=p
p=new O.hE(g,"refract")
p.c=C.d
p.f=new V.a9(0,0,0)
p.ch=1
g.cy=p
p=new O.hB(g,"alpha")
p.c=C.d
p.f=1
g.db=p
p=new D.dP()
p.bY(D.aa)
p.sfT(H.d([],[D.bI]))
p.si0(H.d([],[D.e2]))
p.sit(H.d([],[D.e8]))
p.siF(H.d([],[D.ee]))
p.siG(H.d([],[D.ef]))
p.siH(H.d([],[D.eg]))
p.ch=p.Q=null
p.da(p.ghe(),p.ghP(),p.ghT())
g.dx=p
n=p.Q
p=n==null?p.Q=D.Y():n
p.h(0,g.gia())
p=g.dx
n=p.ch
p=n==null?p.ch=D.Y():n
p.h(0,g.gbm())
g.dy=null
p=g.dx
f=V.mm()
n=U.lQ(V.lX(V.le(),f,new V.D(-1,-1,-1)))
e=new V.a9(1,1,1)
m=new D.bI()
m.c=new V.a9(1,1,1)
m.a=V.mn()
i=m.b
m.b=n
n.gB().h(0,m.gfn())
o=new D.S("mover",i,m.b,[o])
o.b=!0
m.aB(o)
if(!m.c.w(0,e)){i=m.c
m.c=e
o=new D.S("color",i,e,[V.a9])
o.b=!0
m.aB(o)}p.h(0,m)
p=g.r
p.sab(0,new V.a9(0.2,0.2,0.2))
p=g.x
p.sab(0,new V.a9(0.8,0.8,0.8))
g.r.saz(h)
g.x.saz(h)
g.z.saz(s.f.eB("../resources/earthSpecular"))
p=g.z
if(p.c===C.d){p.c=C.j
p.bX()
p.cn(100)
o=p.a
o.a=null
o.a2(a)}p.cn(10)
p=new M.dH()
p.sfp(0,O.l4(q))
p.d.bj(p.ghm(),p.gho())
p.x=p.r=p.f=p.e=null
d=X.nF(a)
c=new X.e1()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sbb(a)
q=c.c
if(!(Math.abs(q-1.0471975511965976)<$.O().a)){c.c=1.0471975511965976
q=new D.S("fov",q,1.0471975511965976,[P.u])
q.b=!0
c.aO(q)}q=c.d
if(!(Math.abs(q-0.1)<$.O().a)){c.d=0.1
q=new D.S("near",q,0.1,[P.u])
q.b=!0
c.aO(q)}q=c.e
if(!(Math.abs(q-2000)<$.O().a)){c.e=2000
q=new D.S("far",q,2000,[P.u])
q.b=!0
c.aO(q)}q=p.a
if(q!==c){if(q!=null)q.gB().G(0,p.gaq())
i=p.a
p.a=c
c.gB().h(0,p.gaq())
q=new D.S("camera",i,p.a,[X.dC])
q.b=!0
p.aC(q)}q=p.b
if(q!==d){if(q!=null)q.gB().G(0,p.gaq())
i=p.b
p.b=d
d.gB().h(0,p.gaq())
q=new D.S("target",i,p.b,[X.eb])
q.b=!0
p.aC(q)}p.seU(a)
p.seU(g)
p.d.h(0,r)
p.a.sbb(U.lQ(V.ba(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gB().G(0,s.gdf())
s.d=p
p.gB().h(0,s.gdf())
s.dg()}q=new V.i3("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
q.at(0,"Cube",new R.kJ(r))
q.at(0,"Cuboid",new R.kK(r))
q.at(0,"Cylinder",new R.kL(r))
q.at(0,"Cone",new R.kM(r))
q.at(0,"LatLonSphere",new R.kN(r))
q.at(0,"IsoSphere",new R.kO(r))
q.br(0,"Sphere",new R.kP(r),!0)
q.at(0,"Toroid",new R.kQ(r))
q.at(0,"Knot",new R.kR(r))
u=s.z
if(u==null)u=s.z=D.Y()
q={func:1,ret:-1,args:[D.A]}
p=H.n(new R.kS(a1,g),q)
if(u.b==null)u.saT(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pp(s)},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.la.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gK:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.hi.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iU:1}
J.dM.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dN.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hZ.prototype={}
J.bQ.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.n0()]
if(u==null)return this.fb(a)
return"JavaScript function for "+H.l(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibK:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.v(a,0))
if(!!a.fixed$length)H.t(P.K("add"))
a.push(b)},
eP:function(a,b){if(!!a.fixed$length)H.t(P.K("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e4(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.t(P.K("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jH:function(a){return this.m(a,"")},
jz:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
jy:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.E(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hh())},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f8:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ai(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gjx:function(a){if(a.length>0)return a[0]
throw H.c(H.hh())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hh())},
bk:function(a,b,c,d){var u,t,s=H.v(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.t(P.K("setRange"))
P.bv(b,c,a.length)
u=c-b
if(u===0)return
P.lf(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cm(d)
if(u>s.gl(d))throw H.c(H.nI())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dW:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.l7(a,"[","]")},
gV:function(a){return new J.az(a,a.length,[H.v(a,0)])},
gK:function(a){return H.cP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.K("set length"))
if(b<0)throw H.c(P.ai(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ck(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.v(a,0))
if(!!a.immutable$list)H.t(P.K("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ck(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.v(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.p(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bk(t,0,a.length,a)
this.bk(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.l9.prototype={}
J.az.prototype={
gM:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.G(s))
u=t.c
if(u>=r){t.sdz(null)
return!1}t.sdz(s[u]);++t.c
return!0},
sdz:function(a){this.d=H.B(a,H.v(this,0))},
$ib6:1}
J.bM.prototype={
ke:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.K(""+a+".toInt()"))},
cO:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.K(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.K(""+a+".round()"))},
eW:function(a,b){var u,t
if(b>20)throw H.c(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bg:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ai(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.K("Unexpected toString result: "+u))
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
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a*b},
bi:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fe:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.K("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dP(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
is:function(a,b){if(b<0)throw H.c(H.aG(b))
return this.dP(a,b)},
dP:function(a,b){return b>31?0:a>>>b},
$iu:1,
$iae:1}
J.dL.prototype={$ip:1}
J.dK.prototype={}
J.bp.prototype={
a1:function(a,b){if(b<0)throw H.c(H.ck(a,b))
if(b>=a.length)H.t(H.ck(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.ck(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l1(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.bv(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ad:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ad(a,b,0)},
D:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aG(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e4(b,null))
if(b>c)throw H.c(P.e4(b,null))
if(c>a.length)throw H.c(P.e4(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.D(a,b,null)},
kg:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
ey:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ai(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ex:function(a,b){return this.ey(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im_:1,
$ie:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a1(this.a,b)},
$ad5:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fY.prototype={}
H.c5.prototype={
gV:function(a){var u=this
return new H.cF(u,u.gl(u),[H.at(u,"c5",0)])},
bS:function(a,b){return this.fa(0,H.n(b,{func:1,ret:P.U,args:[H.at(this,"c5",0)]}))}}
H.cF.prototype={
gM:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=J.cm(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bm(s))
u=t.c
if(u>=q){t.sb3(null)
return!1}t.sb3(r.L(s,u));++t.c
return!0},
sb3:function(a){this.d=H.B(a,H.v(this,0))},
$ib6:1}
H.hx.prototype={
gV:function(a){return new H.hy(J.bD(this.a),this.b,this.$ti)},
gl:function(a){return J.aH(this.a)},
L:function(a,b){return this.b.$1(J.ft(this.a,b))},
$ai:function(a,b){return[b]}}
H.hy.prototype={
F:function(){var u=this,t=u.b
if(t.F()){u.sb3(u.c.$1(t.gM(t)))
return!0}u.sb3(null)
return!1},
gM:function(a){return this.a},
sb3:function(a){this.a=H.B(a,H.v(this,1))},
$ab6:function(a,b){return[b]}}
H.hz.prototype={
gl:function(a){return J.aH(this.a)},
L:function(a,b){return this.b.$1(J.ft(this.a,b))},
$ac5:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d8.prototype={
gV:function(a){return new H.js(J.bD(this.a),this.b,this.$ti)}}
H.js.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(H.E(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c1.prototype={}
H.d5.prototype={
n:function(a,b,c){H.B(c,H.at(this,"d5",0))
throw H.c(P.K("Cannot modify an unmodifiable list"))}}
H.em.prototype={}
H.fK.prototype={
i:function(a){return P.ld(this)},
n:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
return H.nz()},
$iI:1}
H.fL.prototype={
gl:function(a){return this.a},
bt:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bt(0,b))return
return this.dA(b)},
dA:function(a){return this.b[H.J(a)]},
N:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.n(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dA(r),p))}}}
H.iQ.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l_.prototype={
$1:function(a){if(!!J.W(a).$ibJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.f0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cw.prototype={
i:function(a){return"Closure '"+H.c7(this).trim()+"'"},
$ibK:1,
gkm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.it.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cq(u)+"'"}}
H.ct.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ct))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.du(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.iS.prototype={
i:function(a){return this.a}}
H.fG.prototype={
i:function(a){return this.a}}
H.ic.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jt.prototype={
i:function(a){return"Assertion failed: "+P.dI(this.a)}}
H.aS.prototype={
gl:function(a){return this.a},
gjG:function(a){return this.a===0},
ga7:function(a){return new H.hp(this,[H.v(this,0)])},
bt:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.du(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.du(t,b)}else return s.jD(b)},
jD:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cR(u.c5(t,u.cQ(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.jE(b)},
jE:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c5(r,s.cQ(a))
t=s.cR(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.B(b,H.v(s,0))
H.B(c,H.v(s,1))
if(typeof b==="string"){u=s.b
s.dj(u==null?s.b=s.cf():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dj(t==null?s.c=s.cf():t,b,c)}else s.jF(b,c)},
jF:function(a,b){var u,t,s,r,q=this
H.B(a,H.v(q,0))
H.B(b,H.v(q,1))
u=q.d
if(u==null)u=q.d=q.cf()
t=q.cQ(a)
s=q.c5(u,t)
if(s==null)q.co(u,t,[q.c_(a,b)])
else{r=q.cR(s,a)
if(r>=0)s[r].b=b
else s.push(q.c_(a,b))}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bm(s))
u=u.c}},
dj:function(a,b,c){var u,t=this
H.B(b,H.v(t,0))
H.B(c,H.v(t,1))
u=t.bn(a,b)
if(u==null)t.co(a,b,t.c_(b,c))
else u.b=c},
fE:function(){this.r=this.r+1&67108863},
c_:function(a,b){var u,t=this,s=new H.ho(H.B(a,H.v(t,0)),H.B(b,H.v(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fE()
return s},
cQ:function(a){return J.du(a)&0x3ffffff},
cR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.ld(this)},
bn:function(a,b){return a[b]},
c5:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
fS:function(a,b){delete a[b]},
du:function(a,b){return this.bn(a,b)!=null},
cf:function(){var u="<non-identifier-key>",t=Object.create(null)
this.co(t,u,t)
this.fS(t,u)
return t}}
H.ho.prototype={}
H.hp.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hq(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hq.prototype={
gM:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdk(null)
return!1}else{u.sdk(t.a)
u.c=u.c.c
return!0}}},
sdk:function(a){this.d=H.B(a,H.v(this,0))},
$ib6:1}
H.kC.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kE.prototype={
$1:function(a){return this.a(H.J(a))},
$S:49}
H.hj.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im_:1,
$io5:1}
H.cK.prototype={$icK:1}
H.bN.prototype={$ibN:1,$iod:1}
H.dX.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cL.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p1(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.u]},
$az:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$ib:1,
$ab:function(){return[P.u]}}
H.dY.prototype={
n:function(a,b,c){H.ak(c)
H.bk(b,a,a.length)
a[b]=c},
$ac1:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hN.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.dZ.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$ipQ:1}
H.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icM:1,
$iT:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jv.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:23}
P.ju.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.jw.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jx.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f6.prototype={
fB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cj(new P.kb(this,b),0),a)
else throw H.c(P.K("`setTimeout()` not found."))},
fC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cj(new P.ka(this,a,Date.now(),b),0),a)
else throw H.c(P.K("Periodic timer."))},
$ibe:1}
P.kb.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ka.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.fe(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
jJ:function(a){if(this.c!==6)return!0
return this.b.b.d2(H.n(this.d,{func:1,ret:P.U,args:[P.R]}),a.a,P.U,P.R)},
jB:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fp(u,{func:1,args:[P.R,P.ax]}))return H.ly(r.k9(u,a.a,a.b,null,t,P.ax),s)
else return H.ly(r.d2(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aN.prototype={
eV:function(a,b,c){var u,t,s,r=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oO(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a3,[c])
s=b==null?1:3
this.dm(new P.bj(t,s,a,b,[r,c]))
return t},
kd:function(a,b){return this.eV(a,null,b)},
dm:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaN")
s=u.a
if(s<4){u.dm(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kt(null,null,s,H.n(new P.jG(t,a),{func:1,ret:-1}))}},
dL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaN")
u=q.a
if(u<4){q.dL(a)
return}p.a=u
p.c=q.c}o.a=p.bp(a)
u=p.b
u.toString
P.kt(null,null,u,H.n(new P.jK(o,p),{func:1,ret:-1}))}},
ck:function(){var u=H.f(this.c,"$ibj")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dq:function(a){var u,t,s=this,r=H.v(s,0)
H.ly(a,{futureOr:1,type:r})
u=s.$ti
if(H.lu(a,"$icB",u,"$acB"))if(H.lu(a,"$iaN",u,null))P.mp(a,s)
else P.op(a,s)
else{t=s.ck()
H.B(a,r)
s.a=4
s.c=a
P.db(s,t)}},
dr:function(a,b){var u,t=this
H.f(b,"$iax")
u=t.ck()
t.a=8
t.c=new P.an(a,b)
P.db(t,u)},
$icB:1}
P.jG.prototype={
$0:function(){P.db(this.a,this.b)},
$S:0}
P.jK.prototype={
$0:function(){P.db(this.b,this.a.a)},
$S:0}
P.jH.prototype={
$1:function(a){var u=this.a
u.a=0
u.dq(a)},
$S:23}
P.jI.prototype={
$2:function(a,b){H.f(b,"$iax")
this.a.dr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jJ.prototype={
$0:function(){this.a.dr(this.b,this.c)},
$S:0}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eS(H.n(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.co(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.W(n).$icB){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.kd(new P.jO(p),null)
s.a=!1}},
$S:3}
P.jO.prototype={
$1:function(a){return this.a},
$S:46}
P.jM.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.B(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.d2(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.co(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.E(r.jJ(u))&&r.e!=null){q=m.b
q.b=r.jB(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.co(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.et.prototype={}
P.iw.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aN($.a3,[P.p])
r.a=0
u=H.v(s,0)
t=H.n(new P.iy(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iz(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.iy.prototype={
$1:function(a){H.B(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.v(this.b,0)]}}}
P.iz.prototype={
$0:function(){this.b.dq(this.a.a)},
$S:0}
P.cT.prototype={}
P.ix.prototype={}
P.be.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibJ:1}
P.kk.prototype={$iq4:1}
P.ks.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e0():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jU.prototype={
ka:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a3){a.$0()
return}P.mB(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.co(s)
P.kr(r,r,this,u,H.f(t,"$iax"))}},
kb:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a3){a.$1(b)
return}P.mC(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.co(s)
P.kr(r,r,this,u,H.f(t,"$iax"))}},
jf:function(a,b){return new P.jW(this,H.n(a,{func:1,ret:b}),b)},
cw:function(a){return new P.jV(this,H.n(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.jX(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eS:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.k)return a.$0()
return P.mB(null,null,this,a,b)},
d2:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a3===C.k)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
k9:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a3===C.k)return a.$2(b,c)
return P.oP(null,null,this,a,b,c,d,e,f)}}
P.jW.prototype={
$0:function(){return this.a.eS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jV.prototype={
$0:function(){return this.a.ka(this.b)},
$S:3}
P.jX.prototype={
$1:function(a){var u=this.c
return this.a.kb(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jS.prototype={
gV:function(a){var u=this,t=new P.eI(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ice")!=null}else{t=this.fO(b)
return t}},
fO:function(a){var u=this.d
if(u==null)return!1
return this.c3(this.dB(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dl(u==null?s.b=P.lm():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dl(t==null?s.c=P.lm():t,b)}else return s.fF(0,b)},
fF:function(a,b){var u,t,s,r=this
H.B(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.lm()
t=r.ds(b)
s=u[t]
if(s==null)u[t]=[r.cg(b)]
else{if(r.c3(s,b)>=0)return!1
s.push(r.cg(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i4(this.c,b)
else return this.i3(0,b)},
i3:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dB(r,b)
t=s.c3(u,b)
if(t<0)return!1
s.dR(u.splice(t,1)[0])
return!0},
dl:function(a,b){H.B(b,H.v(this,0))
if(H.f(a[b],"$ice")!=null)return!1
a[b]=this.cg(b)
return!0},
i4:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ice")
if(u==null)return!1
this.dR(u)
delete a[b]
return!0},
dF:function(){this.r=1073741823&this.r+1},
cg:function(a){var u,t=this,s=new P.ce(H.B(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dF()
return s},
dR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dF()},
ds:function(a){return J.du(a)&1073741823},
dB:function(a,b){return a[this.ds(b)]},
c3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eI.prototype={
gM:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdn(null)
return!1}else{u.sdn(H.B(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sdn:function(a){this.d=H.B(a,H.v(this,0))},
$ib6:1}
P.hr.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:8}
P.hs.prototype={$ii:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.cF(a,this.gl(a),[H.bT(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
kf:function(a,b){var u,t=this,s=H.d([],[H.bT(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
d4:function(a){return this.kf(a,!0)},
p:function(a,b){var u,t=this,s=[H.bT(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.p(t.gl(a),b.gl(b)))
C.a.bk(u,0,t.gl(a),a)
C.a.bk(u,t.gl(a),u.length,b)
return u},
ju:function(a,b,c,d){var u
H.B(d,H.bT(this,a,"z",0))
P.bv(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l7(a,"[","]")}}
P.hu.prototype={}
P.hv.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:8}
P.af.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bT(s,a,"af",0),H.bT(s,a,"af",1)]})
for(u=J.bD(s.ga7(a));u.F();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aH(this.ga7(a))},
i:function(a){return P.ld(a)},
$iI:1}
P.kc.prototype={
n:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
throw H.c(P.K("Cannot modify unmodifiable map"))}}
P.hw.prototype={
j:function(a,b){return J.lH(this.a,b)},
n:function(a,b,c){J.l0(this.a,H.B(b,H.v(this,0)),H.B(c,H.v(this,1)))},
N:function(a,b){J.lI(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aH(this.a)},
i:function(a){return J.au(this.a)},
$iI:1}
P.en.prototype={}
P.jZ.prototype={
au:function(a,b){var u
for(u=J.bD(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gM(u))},
i:function(a){return P.l7(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lf(b,"index")
for(u=P.ot(r,r.r,H.v(r,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$ii:1,
$im6:1}
P.eJ.prototype={}
P.fc.prototype={}
P.fC.prototype={
jK:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bv(a0,a1,b.length)
u=$.nf()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kB(C.b.H(b,n))
j=H.kB(C.b.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.D(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.D(b,s,a1)
f=g.length
if(q>=0)P.lM(b,p,a1,q,o,f)
else{e=C.f.bi(f-1,4)+1
if(e===1)throw H.c(P.a8(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lM(b,p,a1,q,o,d)
else{e=C.f.bi(d,4)
if(e===1)throw H.c(P.a8(c,b,a1))
if(e>1)b=C.b.b1(b,a1,a1,e===2?"==":"=")}return b},
$abY:function(){return[[P.b,P.p],P.e]}}
P.fD.prototype={
$abH:function(){return[[P.b,P.p],P.e]}}
P.bY.prototype={}
P.bH.prototype={}
P.h_.prototype={
$abY:function(){return[P.e,[P.b,P.p]]}}
P.hf.prototype={
i:function(a){return this.a}}
P.he.prototype={
fP:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aj("")
if(r>b)q.a+=C.b.D(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ns(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abH:function(){return[P.e,P.e]}}
P.jb.prototype={
gjt:function(){return C.R}}
P.jd.prototype={
cE:function(a){var u,t,s=P.bv(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ki(u)
if(t.h0(a,0,s)!==s)t.dT(J.no(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oJ(0,t.b,u.length)))},
$abH:function(){return[P.e,[P.b,P.p]]}}
P.ki.prototype={
dT:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h0:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dT(r,C.b.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jc.prototype={
cE:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.og(!1,a,0,null)
if(u!=null)return u
t=P.bv(0,null,J.aH(a))
s=P.mE(a,0,t)
if(s>0){r=P.cU(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.kh(!1,q)
n.c=o
n.jj(a,p,t)
if(n.e>0){H.t(P.a8("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c8(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abH:function(){return[[P.b,P.p],P.e]}}
P.kh.prototype={
jj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cm(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bT()
if((o&192)!==128){n=P.a8(h+C.f.bg(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a8("Overlong encoding of 0x"+C.f.bg(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a8("Character outside valid Unicode range: 0x"+C.f.bg(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c8(u)
i.c=!1}for(n=p<c;n;){m=P.mE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cU(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Z()
if(o<0){j=P.a8("Negative UTF-8 code unit: -0x"+C.f.bg(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a8(h+C.f.bg(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.U.prototype={}
P.aB.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.aV(u,30))&1073741823},
i:function(a){var u=this,t=P.nA(H.o1(u)),s=P.dE(H.o_(u)),r=P.dE(H.nW(u)),q=P.dE(H.nX(u)),p=P.dE(H.nZ(u)),o=P.dE(H.o0(u)),n=P.nB(H.nY(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.u.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.f.p(this.a,b.gfU()))},
t:function(a,b){return new P.b5(C.f.t(this.a,b.gfU()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.fX(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.f.a6(q,6e7)%60)
t=r.$1(C.f.a6(q,1e6)%60)
s=new P.fW().$1(q%1e6)
return""+C.f.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bJ.prototype={}
P.fw.prototype={
i:function(a){return"Assertion failed"}}
P.e0.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gc2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc1:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc2()+o+u
if(!q.a)return t
s=q.gc1()
r=P.dI(q.b)
return t+s+": "+r}}
P.c9.prototype={
gc2:function(){return"RangeError"},
gc1:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hg.prototype={
gc2:function(){return"RangeError"},
gc1:function(){var u,t=H.ak(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.j4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j1.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dI(u)+"."}}
P.hY.prototype={
i:function(a){return"Out of Memory"},
$ibJ:1}
P.e9.prototype={
i:function(a){return"Stack Overflow"},
$ibJ:1}
P.fQ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eB.prototype={
i:function(a){return"Exception: "+this.a}}
P.h9.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.D(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a1(f,q)
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
k=""}j=C.b.D(f,m,n)
return h+l+j+k+"\n"+C.b.v(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bK.prototype={}
P.p.prototype={}
P.i.prototype={
bS:function(a,b){var u=H.at(this,"i",0)
return new H.d8(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.F();)++u
return u},
gaM:function(a){var u,t=this.gV(this)
if(!t.F())throw H.c(H.hh())
u=t.gM(t)
if(t.F())throw H.c(H.nJ())
return u},
L:function(a,b){var u,t,s
P.lf(b,"index")
for(u=this.gV(this),t=0;u.F();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
i:function(a){return P.nH(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ii:1}
P.I.prototype={}
P.N.prototype={
gK:function(a){return P.R.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
w:function(a,b){return this===b},
gK:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.e.prototype={$im_:1}
P.aj.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipE:1}
P.j9.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iI",[r,r],"$aI")
H.J(b)
u=J.dr(b).ex(b,"=")
if(u===-1){if(b!=="")J.l0(a,P.lo(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.D(b,0,u)
s=C.b.ap(b,u+1)
r=this.a
J.l0(a,P.lo(t,0,t.length,r,!0),P.lo(s,0,s.length,r,!0))}return a},
$S:45}
P.j6.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j7.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j8.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fs(C.b.D(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cf.prototype={
gf0:function(){return this.b},
gcP:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.D(u,1,u.length-1)
return u},
gbM:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcZ:function(a){var u=this.f
return u==null?"":u},
ger:function(){var u=this.r
return u==null?"":u},
eQ:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iI",[P.e,null],"$aI")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a5(p,"/"))p="/"+p
n=P.ln(null,0,0,b)
return new P.cf(u,s,q,r,p,n,m.r)},
gd_:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.si2(new P.en(P.mg(u==null?"":u),[t,t]))}return s.Q},
ges:function(){return this.c!=null},
gew:function(){return this.f!=null},
geu:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.l(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.l(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.l(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.W(b).$ili)if(s.a==b.gbV())if(s.c!=null===b.ges())if(s.b==b.gf0())if(s.gcP(s)==b.gcP(b))if(s.gbM(s)==b.gbM(b))if(s.e===b.geL(b)){u=s.f
t=u==null
if(!t===b.gew()){if(t)u=""
if(u===b.gcZ(b)){u=s.r
t=u==null
if(!t===b.geu()){if(t)u=""
u=u===b.ger()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
si2:function(a){var u=P.e
this.Q=H.k(a,"$iI",[u,u],"$aI")},
$ili:1,
gbV:function(){return this.a},
geL:function(a){return this.e}}
P.kd.prototype={
$1:function(a){throw H.c(P.a8("Invalid port",this.a,this.b+1))},
$S:40}
P.ke.prototype={
$1:function(a){return P.fd(C.a0,a,C.l,!1)},
$S:30}
P.kg.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fd(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fd(C.r,b,C.l,!0))}},
$S:16}
P.kf.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bD(H.mS(b,"$ii")),t=this.a;u.F();)t.$2(a,H.J(u.gM(u)))},
$S:39}
P.j5.prototype={
gf_:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.ey(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jB("data",p,p,p,P.dm(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ko.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kn.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.np(u,0,96,b)
return u},
$S:35}
P.kp.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.H(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kq.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.H(b,0),t=C.b.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k1.prototype={
ges:function(){return this.c>0},
gev:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
gew:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geu:function(){return this.r<this.a.length},
gdD:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdE:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbV:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdD())q=t.x="http"
else if(t.gdE()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.D(t.a,0,q)
t.x=q}return q},
gf0:function(){var u=this.c,t=this.b+3
return u>t?C.b.D(this.a,t,u-1):""},
gcP:function(a){var u=this.c
return u>0?C.b.D(this.a,u,this.d):""},
gbM:function(a){var u,t=this
if(t.gev()){u=t.d
if(typeof u!=="number")return u.p()
return P.fs(C.b.D(t.a,u+1,t.e),null,null)}if(t.gdD())return 80
if(t.gdE())return 443
return 0},
geL:function(a){return C.b.D(this.a,this.e,this.f)},
gcZ:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.D(this.a,u+1,t):""},
ger:function(){var u=this.r,t=this.a
return u<t.length?C.b.ap(t,u+1):""},
gd_:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Z()
if(t>=u.r)return C.a1
t=P.e
return new P.en(P.mg(u.gcZ(u)),[t,t])},
eQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iI",[P.e,null],"$aI")
u=k.gbV()
t=u==="file"
s=k.c
r=s>0?C.b.D(k.a,k.b+3,s):""
q=k.gev()?k.gbM(k):j
s=k.c
if(s>0)p=C.b.D(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.D(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.ln(j,0,0,b)
n=k.r
l=n<s.length?C.b.ap(s,n+1):j
return new P.cf(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$ili&&this.a===b.i(0)},
i:function(a){return this.a},
$ili:1}
P.jB.prototype={}
W.y.prototype={}
W.fu.prototype={
gl:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fv.prototype={
i:function(a){return String(a)}}
W.cs.prototype={$ics:1}
W.bW.prototype={$ibW:1}
W.bE.prototype={$ibE:1}
W.bX.prototype={
d8:function(a,b,c){if(c!=null)return a.getContext(b,P.oX(c))
return a.getContext(b)},
f3:function(a,b){return this.d8(a,b,null)},
$ibX:1}
W.cv.prototype={$icv:1}
W.bF.prototype={
gl:function(a){return a.length}}
W.cx.prototype={$icx:1}
W.fM.prototype={
gl:function(a){return a.length}}
W.a_.prototype={$ia_:1}
W.cy.prototype={
gl:function(a){return a.length}}
W.fN.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fO.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iam",[P.ae],"$aam")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.am,P.ae]]},
$az:function(){return[[P.am,P.ae]]},
$ii:1,
$ai:function(){return[[P.am,P.ae]]},
$ib:1,
$ab:function(){return[[P.am,P.ae]]},
$aH:function(){return[[P.am,P.ae]]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaH(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbK(b)&&a.top===u.gbQ(b)&&this.gaL(a)===u.gaL(b)&&this.gaH(a)===u.gaH(b)},
gK:function(a){return W.mr(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gaL(a)),C.e.gK(this.gaH(a)))},
ge_:function(a){return a.bottom},
gaH:function(a){return a.height},
gbK:function(a){return a.left},
gbP:function(a){return a.right},
gbQ:function(a){return a.top},
gaL:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ae]}}
W.fU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aH:function(){return[P.e]}}
W.fV.prototype={
gl:function(a){return a.length}}
W.jz.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iX")},
n:function(a,b,c){var u
H.f(c,"$iX")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.d4(this)
return new J.az(u,u.length,[H.v(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gje:function(a){return new W.jC(a)},
gcD:function(a){return new W.jz(a,a.children)},
ge0:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lT
if(u==null){u=H.d([],[W.aE])
t=new W.e_(u)
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
$.lT=t
d=t}else d=u
u=$.lS
if(u==null){u=new W.fe(d)
$.lS=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.l6=t.createRange()
t=$.bn.createElement("base")
H.f(t,"$ics")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibE")}u=$.bn
if(!!this.$ibE)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.Z,a.tagName)){$.l6.selectNodeContents(s)
r=$.l6.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lK(s)
c.d9(r)
document.adoptNode(r)
return r},
jm:function(a,b,c){return this.af(a,b,c,null)},
f6:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iX:1,
geT:function(a){return a.tagName}}
W.fZ.prototype={
$1:function(a){return!!J.W(H.f(a,"$iF")).$iX},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
j6:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fG(a,b,c,!1)},
fG:function(a,b,c,d){return a.addEventListener(b,H.cj(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icA:1,
$aH:function(){return[W.aJ]}}
W.h4.prototype={
gl:function(a){return a.length}}
W.h8.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hd.prototype={
gl:function(a){return a.length}}
W.c2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic2:1,
$aH:function(){return[W.F]}}
W.bo.prototype={$ibo:1,
ge1:function(a){return a.data}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dR.prototype={
i:function(a){return String(a)},
$idR:1}
W.hG.prototype={
gl:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hH.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.hI(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.e,null]},
$iI:1,
$aI:function(){return[P.e,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hJ.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.hK(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.e,null]},
$iI:1,
$aI:function(){return[P.e,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aT.prototype={$iaT:1}
W.hL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.ag.prototype={$iag:1}
W.ar.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m7("No elements"))
if(t>1)throw H.c(P.m7("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dJ(u,u.length,[H.bT(C.a2,u,"H",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
k_:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k7:function(a,b){var u,t
try{u=a.parentNode
J.nm(u,b,a)}catch(t){H.al(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f9(a):u},
jc:function(a,b){return a.appendChild(H.f(b,"$iF"))},
i7:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aH:function(){return[W.F]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.i0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.ia.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.ib(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.e,null]},
$iI:1,
$aI:function(){return[P.e,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.id.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.iu.prototype={
j:function(a,b){return a.getItem(H.J(b))},
n:function(a,b,c){a.setItem(b,c)},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new W.iv(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.e,P.e]},
$iI:1,
$aI:function(){return[P.e,P.e]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:16}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.ea.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=W.nC("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t}}
W.iB.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
s.toString
u=new W.ar(s)
r=u.gaM(u)
t.toString
r.toString
new W.ar(t).au(0,new W.ar(r))
return t}}
W.iC.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
t.toString
s.toString
new W.ar(t).au(0,new W.ar(s))
return t}}
W.cV.prototype={$icV:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iJ.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iO.prototype={
gl:function(a){return a.length}}
W.bP.prototype={}
W.ja.prototype={
i:function(a){return String(a)}}
W.jq.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gjp:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.K("deltaY is not supported"))},
gjo:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.K("deltaX is not supported"))},
$ibi:1}
W.d9.prototype={
i9:function(a,b){return a.requestAnimationFrame(H.cj(H.n(b,{func:1,ret:-1,args:[P.ae]}),1))},
fV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.da.prototype={$ida:1}
W.jA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$ia_")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.a_]},
$az:function(){return[W.a_]},
$ii:1,
$ai:function(){return[W.a_]},
$ib:1,
$ab:function(){return[W.a_]},
$aH:function(){return[W.a_]}}
W.ew.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbK(b)&&a.top===u.gbQ(b)&&a.width===u.gaL(b)&&a.height===u.gaH(b)},
gK:function(a){return W.mr(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gaH:function(a){return a.height},
gaL:function(a){return a.width}}
W.jP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.eO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aH:function(){return[W.F]}}
W.k2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.k6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.jy.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.f(r[t],"$ida")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.e,P.e]},
$aI:function(){return[P.e,P.e]}}
W.jC.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.jD.prototype={}
W.ll.prototype={}
W.jE.prototype={}
W.jF.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:34}
W.bR.prototype={
fl:function(a){var u
if($.dc.gjG($.dc)){for(u=0;u<262;++u)$.dc.n(0,C.Y[u],W.p9())
for(u=0;u<12;++u)$.dc.n(0,C.v[u],W.pa())}},
aW:function(a){return $.ng().Y(0,W.cz(a))},
av:function(a,b,c){var u=$.dc.j(0,H.l(W.cz(a))+"::"+b)
if(u==null)u=$.dc.j(0,"*::"+b)
if(u==null)return!1
return H.lt(u.$4(a,b,c,this))},
$iaE:1}
W.H.prototype={
gV:function(a){return new W.dJ(a,this.gl(a),[H.bT(this,a,"H",0)])}}
W.e_.prototype={
aW:function(a){return C.a.dW(this.a,new W.hT(a))},
av:function(a,b,c){return C.a.dW(this.a,new W.hS(a,b,c))},
$iaE:1}
W.hT.prototype={
$1:function(a){return H.f(a,"$iaE").aW(this.a)},
$S:24}
W.hS.prototype={
$1:function(a){return H.f(a,"$iaE").av(this.a,this.b,this.c)},
$S:24}
W.eW.prototype={
fA:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bS(0,new W.k_())
t=b.bS(0,new W.k0())
this.b.au(0,u)
s=this.c
s.au(0,C.B)
s.au(0,t)},
aW:function(a){return this.a.Y(0,W.cz(a))},
av:function(a,b,c){var u=this,t=W.cz(a),s=u.c
if(s.Y(0,H.l(t)+"::"+b))return u.d.ja(c)
else if(s.Y(0,"*::"+b))return u.d.ja(c)
else{s=u.b
if(s.Y(0,H.l(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.l(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
$iaE:1}
W.k_.prototype={
$1:function(a){return!C.a.Y(C.v,H.J(a))},
$S:25}
W.k0.prototype={
$1:function(a){return C.a.Y(C.v,H.J(a))},
$S:25}
W.k8.prototype={
av:function(a,b,c){if(this.fd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.k9.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.J(a))},
$S:30}
W.k7.prototype={
aW:function(a){var u=J.W(a)
if(!!u.$icQ)return!1
u=!!u.$iq
if(u&&W.cz(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aW(a)},
$iaE:1}
W.dJ.prototype={
F:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdC(J.lH(u.a,t))
u.c=t
return!0}u.sdC(null)
u.c=s
return!1},
gM:function(a){return this.d},
sdC:function(a){this.d=H.B(a,H.v(this,0))},
$ib6:1}
W.aE.prototype={}
W.jY.prototype={$ipR:1}
W.fe.prototype={
d9:function(a){new W.kj(this).$2(a,null)},
b6:function(a,b){if(b==null)J.lK(a)
else b.removeChild(a)},
ig:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nq(a)
n=o.a.getAttribute("is")
H.f(a,"$iX")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.al(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.al(r)}try{s=W.cz(a)
this.ie(H.f(a,"$iX"),b,p,t,s,H.f(o,"$iI"),H.J(n))}catch(r){if(H.al(r) instanceof P.aP)throw r
else{this.b6(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ie:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b6(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aW(a)){o.b6(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.av(a,"is",g)){o.b6(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nt(r)
H.J(r)
if(!q.av(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icV)o.d9(a.content)},
$ipB:1}
W.kj.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ig(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b6(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.al(s)
r=H.f(u,"$iF")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iF")}},
$S:44}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
P.k3.prototype={
eq:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d6:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.W(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$io5)throw H.c(P.j2("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ibW)return a
if(!!u.$icA)return a
if(!!u.$ibo)return a
if(!!u.$icK||!!u.$ibN||!!u.$icI)return a
if(!!u.$iI){t=q.eq(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.N(a,new P.k5(p,q))
return p.a}if(!!u.$ib){t=q.eq(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jl(a,t)}throw H.c(P.j2("structured clone of other type"))},
jl:function(a,b){var u,t=J.cm(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.d6(t.j(a,u)))
return r}}
P.k5.prototype={
$2:function(a,b){this.a.a[a]=this.b.d6(b)},
$S:8}
P.fb.prototype={$ibo:1,
ge1:function(a){return this.a}}
P.ku.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.k4.prototype={}
P.h5.prototype={
gbo:function(){var u=this.b,t=H.at(u,"z",0),s=W.X
return new H.hx(new H.d8(u,H.n(new P.h6(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.h7(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iX")
u=this.gbo()
J.nr(u.b.$1(J.ft(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aH(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.ft(u.a,b))},
gV:function(a){var u=P.lW(this.gbo(),!1,W.X)
return new J.az(u,u.length,[H.v(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.h6.prototype={
$1:function(a){return!!J.W(H.f(a,"$iF")).$iX},
$S:21}
P.h7.prototype={
$1:function(a){return H.m(H.f(a,"$iF"),"$iX")},
$S:33}
P.jT.prototype={
gbP:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.v(this,0))},
ge_:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
w:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iam){t=p.a
if(t==u.gbK(b)){s=p.b
if(s==u.gbQ(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.C(r)
q=H.v(p,0)
if(H.B(t+r,q)===u.gbP(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.C(t)
u=H.B(s+t,q)===u.ge_(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.du(s),q=t.b,p=J.du(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.C(o)
u=H.v(t,0)
o=C.f.gK(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.C(s)
u=C.f.gK(H.B(q+s,u))
return P.os(P.jR(P.jR(P.jR(P.jR(0,r),p),o),u))}}
P.am.prototype={
gbK:function(a){return this.a},
gbQ:function(a){return this.b},
gaL:function(a){return this.c},
gaH:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aH:function(){return[P.b8]}}
P.bb.prototype={$ibb:1}
P.hW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.i2.prototype={
gl:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.J(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aH:function(){return[P.e]}}
P.q.prototype={
gcD:function(a){return new P.h5(a,new W.ar(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.mq(null))
C.a.h(p,W.ms())
C.a.h(p,new W.k7())
c=new W.fe(new W.e_(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jm(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bf.prototype={$ibf:1}
P.iP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.eG.prototype={}
P.eH.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$iod:1}
P.fy.prototype={
gl:function(a){return a.length}}
P.fz.prototype={
j:function(a,b){return P.bw(a.get(H.J(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.N(a,new P.fA(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.e,null]},
$iI:1,
$aI:function(){return[P.e,null]}}
P.fA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fB.prototype={
gl:function(a){return a.length}}
P.bV.prototype={}
P.hX.prototype={
gl:function(a){return a.length}}
P.eu.prototype={}
P.dy.prototype={$idy:1}
P.e3.prototype={$ie3:1}
P.ca.prototype={
kc:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibo)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oY(g))
return}if(!!t.$icD)t=!0
else t=!1
if(t){this.iw(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
iw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
S:function(a,b,c){return a.uniform1f(b,c)},
a4:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.e6.prototype={$ie6:1}
P.ec.prototype={$iec:1}
P.el.prototype={$iel:1}
P.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bw(a.item(b))},
n:function(a,b,c){H.f(c,"$iI")
throw H.c(P.K("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.I,,,]]},
$ii:1,
$ai:function(){return[[P.I,,,]]},
$ib:1,
$ab:function(){return[[P.I,,,]]},
$aH:function(){return[[P.I,,,]]}}
P.eZ.prototype={}
P.f_.prototype={}
O.a7.prototype={
bY:function(a){var u=this
u.sh5(H.d([],[a]))
u.sdJ(null)
u.sdG(null)
u.sdK(null)},
da:function(a,b,c){var u=this,t=H.at(u,"a7",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdJ(b)
u.sdG(a)
u.sdK(c)},
bj:function(a,b){return this.da(a,null,b)},
hO:function(a){var u
H.k(a,"$ii",[H.at(this,"a7",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fk:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a7",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.az(u,u.length,[H.v(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.at(s,"a7",0)
H.B(b,r)
r=[r]
if(H.E(s.hO(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fk(t,H.d([b],r))}},
sh5:function(a){this.a=H.k(a,"$ib",[H.at(this,"a7",0)],"$ab")},
sdJ:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.at(this,"a7",0)]]})},
sdG:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.at(this,"a7",0)]]})},
sdK:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.at(this,"a7",0)]]})},
$ii:1}
O.cH.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.Y():u},
aN:function(){var u=this.b
if(u!=null)u.I(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.dW()},
eN:function(a){var u=this.a
if(a==null)C.a.h(u,V.dW())
else C.a.h(u,a)
this.aN()},
cY:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc7:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fE.prototype={}
E.av.prototype={
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().G(0,s.geI())
u=s.c
if(u!=null)u.gB().h(0,s.geI())
t=new D.S("shape",r,s.c,[F.e7])
t.b=!0
s.aJ(t)}},
sbb:function(a){var u,t,s=this
if(!J.L(s.r,a)){u=s.r
if(u!=null)u.gB().G(0,s.geG())
if(a!=null)a.gB().h(0,s.geG())
s.r=a
t=new D.S("mover",u,a,[U.ah])
t.b=!0
s.aJ(t)}},
aA:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b2(0,b,s):null
if(!J.L(q,s.x)){u=s.x
s.x=q
t=new D.S("matrix",u,q,[V.ao])
t.b=!0
s.aJ(t)}for(r=s.y.a,r=new J.az(r,r.length,[H.v(r,0)]);r.F();)r.d.aA(0,b)},
b0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga3(s))
else C.a.h(s.a,r.v(0,s.ga3(s)))
s.aN()
a.eO(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.k6(a,t)
for(s=t.y.a,s=new J.az(s,s.length,[H.v(s,0)]);s.F();)s.d.b0(a)
a.eM()
a.dx.cY()},
gB:function(){var u=this.z
return u==null?this.z=D.Y():u},
aJ:function(a){var u=this.z
if(u!=null)u.I(a)},
W:function(){return this.aJ(null)},
eJ:function(a){H.f(a,"$iA")
this.e=null
this.aJ(a)},
jR:function(){return this.eJ(null)},
eH:function(a){this.aJ(H.f(a,"$iA"))},
jQ:function(){return this.eH(null)},
eF:function(a){this.aJ(H.f(a,"$iA"))},
jN:function(){return this.eF(null)},
jM:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.av],"$ai")
for(u=b.length,t=this.geE(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.saj(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
jP:function(a,b){var u,t
H.k(b,"$ii",[E.av],"$ai")
for(u=b.gV(b),t=this.geE();u.F();)u.gM(u).gB().G(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfN:function(a,b){this.y=H.k(b,"$ia7",[E.av],"$aa7")},
$ibt:1}
E.i6.prototype={
fg:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.ao]
u.sc7(H.d([],t))
u.b=null
u.gB().h(0,new E.i7(s))
s.cy=u
u=new O.cH()
u.sc7(H.d([],t))
u.b=null
u.gB().h(0,new E.i8(s))
s.db=u
u=new O.cH()
u.sc7(H.d([],t))
u.b=null
u.gB().h(0,new E.i9(s))
s.dx=u
s.siv(H.d([],[O.cc]))
u=s.dy;(u&&C.a).h(u,null)
s.sir(new H.aS([P.e,A.cR]))},
gjZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.v(0,u.ga3(u))
s=u}return s},
eO:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
eM:function(){var u=this.dy
if(u.length>1)u.pop()},
siv:function(a){this.dy=H.k(a,"$ib",[O.cc],"$ab")},
sir:function(a){this.fr=H.k(a,"$iI",[P.e,A.cR],"$aI")}}
E.i7.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:6}
E.i8.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.i9.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:6}
E.eh.prototype={
dh:function(a){H.f(a,"$iA")
this.eR()},
dg:function(){return this.dh(null)},
gjA:function(){var u,t=this,s=Date.now(),r=C.f.a6(P.lR(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.C(r)
u=C.e.cO(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.e.cO(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ma(C.t,s.gk8())}},
eR:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iI(this),{func:1,ret:-1,args:[P.ae]})
C.I.fV(u)
C.I.i9(u,W.mH(t,P.ae))}},
k5:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dN()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.lR(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aN()
r=s.db
C.a.sl(r.a,0)
r.aN()
r=s.dx
C.a.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.b0(p.e)}s=p.z
if(s!=null)s.I(null)}catch(q){u=H.al(q)
t=H.co(q)
P.lC("Error: "+H.l(u))
P.lC("Stack: "+H.l(t))
throw H.c(u)}}}
E.iI.prototype={
$1:function(a){var u
H.pl(a)
u=this.a
if(u.ch){u.ch=!1
u.k5()}},
$S:53}
Z.es.prototype={$ipv:1}
Z.dz.prototype={
cv:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jr.prototype={$ipw:1}
Z.dA.prototype={
aY:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cv:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cv(a)},
kh:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
b0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sh1:function(a){this.b=H.k(a,"$ib",[Z.bL],"$ab")},
$ipF:1}
Z.bL.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bh.prototype={
gdc:function(a){var u=this.a,t=(u&$.bA().a)!==0?3:0
if((u&$.bz().a)!==0)t+=3
if((u&$.by().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=2
if((u&$.bC().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=4
if((u&$.cr().a)!==0)++t
return(u&$.bx().a)!==0?t+4:t},
jd:function(a){var u,t=$.bA(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0)if(u===a)return t
return $.ne()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bA().a)!==0)C.a.h(u,"Pos")
if((t&$.bz().a)!==0)C.a.h(u,"Norm")
if((t&$.by().a)!==0)C.a.h(u,"Binm")
if((t&$.bB().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bC().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ds().a)!==0)C.a.h(u,"Clr3")
if((t&$.dt().a)!==0)C.a.h(u,"Clr4")
if((t&$.cr().a)!==0)C.a.h(u,"Weight")
if((t&$.bx().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fH.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.b
t=(u&&C.a).G(u,b)||t}return t},
I:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.N(P.lW(u,!0,{func:1,ret:-1,args:[D.A]}),new D.h1(q))
u=r.b
if(u!=null){r.saT(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.N(u,new D.h2(q))}return!0},
jr:function(){return this.I(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.I(u)}}},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saT:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h1.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h2.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.A.prototype={}
D.c3.prototype={}
D.c4.prototype={}
D.S.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dB.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dO.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hl.prototype={
jW:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jS:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
si1:function(a){this.d=H.k(a,"$im6",[P.p],"$am6")}}
X.dS.prototype={}
X.ht.prototype={
b4:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=o.p(0,new V.a6(n*m,u*t))
t=q.a.gaX()
r=new X.bs(a,V.bu(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
cX:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f5()
if(typeof u!=="number")return u.bT()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.b4(a,b))
return!0},
jX:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cJ(new V.Z(s*r,q*p),u,t)
t.b=!0
n.I(t)
return!0},
hD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dS(c,r.a.gaX(),b)
s.b=!0
t.I(s)
r.y=new P.aB(u,!1)
r.x=V.bu()}}
X.aD.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bs.prototype={}
X.hM.prototype={
c4:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gaX(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cX:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.c4(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f5()
if(typeof t!=="number")return t.bT()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.I(u.c4(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.c4(a,b,!1))
return!0},
jY:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cJ(new V.Z(t*s,r*q),u,b)
u.b=!0
o.I(u)
return!0},
ge2:function(){var u=this.b
return u==null?this.b=D.Y():u},
gbR:function(){var u=this.c
return u==null?this.c=D.Y():u},
geD:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cJ.prototype={}
X.i1.prototype={}
X.ej.prototype={}
X.iM.prototype={
b4:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a6],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bu()
s=q.a.gaX()
r=new X.ej(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jV:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.I(this.b4(a,!0))
return!0},
jT:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.I(this.b4(a,!0))
return!0},
jU:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.I(this.b4(a,!1))
return!0}}
X.eo.prototype={
gaX:function(){var u=this.a,t=C.m.ge0(u).c
t.toString
u=C.m.ge0(u).d
u.toString
return V.m4(0,0,t,u)},
dv:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dO(u,new X.aD(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
cp:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a6(s-q,r-u)},
b5:function(a){return new V.Z(a.movementX,a.movementY)},
cj:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
q=C.e.an(r.pageX)
C.e.an(r.pageY)
p=o.left
C.e.an(r.pageX)
C.a.h(n,new V.a6(q-p,C.e.an(r.pageY)-o.top))}return n},
aD:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dB(u,new X.aD(t,a.altKey,a.shiftKey))},
c8:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hx:function(a){this.f=!0},
hl:function(a){this.f=!1},
hr:function(a){H.f(a,"$iag")
if(H.E(this.f)&&this.c8(a))a.preventDefault()},
hB:function(a){var u
H.f(a,"$ib7")
if(!H.E(this.f))return
u=this.dv(a)
this.b.jW(u)},
hz:function(a){var u
H.f(a,"$ib7")
if(!H.E(this.f))return
u=this.dv(a)
this.b.jS(u)},
hF:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.E(q.x)){t=q.aD(a)
s=q.b5(a)
if(q.d.cX(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aD(a)
r=q.aF(a)
if(q.c.cX(t,r))a.preventDefault()},
hJ:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aU(a)
u=r.aD(a)
if(H.E(r.x)){t=r.b5(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aF(a)
if(r.c.bd(u,s))a.preventDefault()},
hv:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.c8(a)){r.aU(a)
u=r.aD(a)
if(H.E(r.x)){t=r.b5(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aF(a)
if(r.c.bd(u,s))a.preventDefault()}},
hH:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aU(a)
u=r.aD(a)
if(H.E(r.x)){t=r.b5(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aF(a)
if(r.c.bc(u,s))a.preventDefault()},
ht:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.c8(a)){r.aU(a)
u=r.aD(a)
if(H.E(r.x)){t=r.b5(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aF(a)
if(r.c.bc(u,s))a.preventDefault()}},
hL:function(a){var u,t,s=this
H.f(a,"$ibi")
s.aU(a)
u=new V.Z((a&&C.H).gjo(a),C.H.gjp(a)).u(0,180)
if(H.E(s.x)){if(s.d.jX(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aF(a)
if(s.c.jY(u,t))a.preventDefault()},
hN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aD(s.y)
t=s.aF(s.y)
s.d.hD(u,t,r)}},
i_:function(a){var u,t=this
H.f(a,"$ib_")
t.a.focus()
t.f=!0
t.cp(a)
u=t.cj(a)
if(t.e.jV(u))a.preventDefault()},
hW:function(a){var u
H.f(a,"$ib_")
this.cp(a)
u=this.cj(a)
if(this.e.jT(u))a.preventDefault()},
hY:function(a){var u
H.f(a,"$ib_")
this.cp(a)
u=this.cj(a)
if(this.e.jU(u))a.preventDefault()},
sfW:function(a){this.z=H.k(a,"$ib",[[P.cT,P.R]],"$ab")}}
D.bI.prototype={
gB:function(){var u=this.d
return u==null?this.d=D.Y():u},
aB:function(a){var u
H.f(a,"$iA")
u=this.d
if(u!=null)u.I(a)},
fo:function(){return this.aB(null)},
$iaa:1,
$ibt:1}
D.aa.prototype={$ibt:1}
D.dP.prototype={
gB:function(){var u=this.Q
return u==null?this.Q=D.Y():u},
aB:function(a){var u=this.Q
if(u!=null)u.I(a)},
dI:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.I(a)},
hC:function(){return this.dI(null)},
hQ:function(a){var u,t,s
H.k(a,"$ii",[D.aa],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.fm(s))return!1}return!0},
hf:function(a,b){var u,t,s,r,q,p,o,n=D.aa
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdH(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=H.f(b[q],"$iaa")
if(p instanceof D.bI)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.c_()
o.saj(null)
o.saT(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c3([n])
n.b=!0
this.aB(n)},
hU:function(a,b){var u,t,s,r=D.aa
H.k(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdH();u.F();){s=u.gM(u)
C.a.G(this.e,s)
s.gB().G(0,t)}r=new D.c4([r])
r.b=!0
this.aB(r)},
fm:function(a){var u=C.a.Y(this.e,a)
return u},
sfT:function(a){this.e=H.k(a,"$ib",[D.bI],"$ab")},
si0:function(a){this.f=H.k(a,"$ib",[D.e2],"$ab")},
sit:function(a){this.r=H.k(a,"$ib",[D.e8],"$ab")},
siF:function(a){this.x=H.k(a,"$ib",[D.ee],"$ab")},
siG:function(a){this.y=H.k(a,"$ib",[D.ef],"$ab")},
siH:function(a){this.z=H.k(a,"$ib",[D.eg],"$ab")},
$ai:function(){return[D.aa]},
$aa7:function(){return[D.aa]}}
D.e2.prototype={$iaa:1,$ibt:1}
D.e8.prototype={$iaa:1,$ibt:1}
D.ee.prototype={$iaa:1,$ibt:1}
D.ef.prototype={$iaa:1,$ibt:1}
D.eg.prototype={$iaa:1,$ibt:1}
V.a9.prototype={
p:function(a,b){var u=C.e.p(this.a,b.gd0()),t=C.e.p(this.b,b.gbU()),s=C.e.p(this.c,b.gcz())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a9(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gd0()),t=C.e.t(this.b,b.gbU()),s=C.e.t(this.c,b.gcz())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a9(u,t,s)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.aA.prototype={
d4:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.u])},
p:function(a,b){var u=this,t=C.e.p(u.a,b.gd0()),s=C.e.p(u.b,b.gbU()),r=C.e.p(u.c,b.gcz()),q=C.e.p(u.d,b.gjb(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aA(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gd0()),s=C.e.t(u.b,b.gbU()),r=C.e.t(u.c,b.gcz()),q=C.e.t(u.d,b.gjb(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aA(t,s,r,q)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.h0.prototype={}
V.dV.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.u])
return t},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dV))return!1
u=b.a
t=$.O().a
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
i:function(a){var u,t,s,r,q=this,p=[P.u],o=V.cl(H.d([q.a,q.d,q.r],p),3,0),n=V.cl(H.d([q.b,q.e,q.x],p),3,0),m=V.cl(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.u])
return t},
ez:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.dW()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
d5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bh:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.P()},
J:function(a){var u,t,s,r,q,p=this,o=[P.u],n=V.cl(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cl(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cl(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cl(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.J("")}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
u:function(a,b){if(Math.abs(b-0)<$.O().a)return V.bu()
return new V.a6(this.a/b,this.b/b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a0.prototype={
p:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a0(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.O().a)return V.le()
return new V.a0(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.bc.prototype={
p:function(a,b){var u=this
return new V.bc(C.e.p(u.a,b.gkj(b)),C.e.p(u.b,b.gkk(b)),C.e.p(u.c,b.gkl(b)),C.e.p(u.d,b.gki(b)))},
t:function(a,b){var u=this
return new V.bc(C.e.t(u.a,b.gkj(b)),C.e.t(u.b,b.gkk(b)),C.e.t(u.c,b.gkl(b)),C.e.t(u.d,b.gki(b)))},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.e5.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.Z.prototype={
ba:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.ge3(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.ge4(b)
if(typeof t!=="number")return t.p()
return new V.Z(s,C.e.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.ge3(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.ge4(b)
if(typeof t!=="number")return t.t()
return new V.Z(s,C.e.t(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.Z(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mh
return u==null?$.mh=new V.Z(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.Z(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.D.prototype={
ba:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cS:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aG:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.D(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.O().a)return V.d6()
return new V.D(this.a/b,this.b/b,this.c/b)},
eA:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.b1.prototype={
ba:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.b1(u.a+b.a,u.b+b.b,u.c+b.c,u.d+b.d)},
t:function(a,b){var u=this
return new V.b1(C.e.t(u.a,b.ge3(b)),C.e.t(u.b,b.ge4(b)),C.e.t(u.c,b.gkr()),C.e.t(u.d,b.gkq()))},
u:function(a,b){var u,t=this
if(Math.abs(b-0)<$.O().a){u=$.mo
return u==null?$.mo=new V.b1(0,0,0,0):u}return new V.b1(t.a/b,t.b/b,t.c/b,t.d/b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
U.fI.prototype={
c0:function(a){var u=V.pu(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.Y():u},
T:function(a){var u=this.y
if(u!=null)u.I(a)},
sd7:function(a,b){},
scT:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c0(u)}s=new D.S("maximumLocation",s,t.b,[P.u])
s.b=!0
t.T(s)}},
scV:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c0(u)}s=new D.S("minimumLocation",s,t.c,[P.u])
s.b=!0
t.T(s)}},
sa0:function(a,b){var u,t=this
b=t.c0(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.S("location",u,b,[P.u])
u.b=!0
t.T(u)}},
scU:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.S("maximumVelocity",r,a,[P.u])
r.b=!0
s.T(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.S("velocity",t,a,[P.u])
t.b=!0
u.T(t)}},
scG:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.S("dampening",u,a,[P.u])
u.b=!0
this.T(u)}},
aA:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dD.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.Y():u},
b2:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cC.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Y():u},
T:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.I(a)},
a9:function(){return this.T(null)},
hd:function(a,b){var u,t,s,r,q,p,o,n=U.ah
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.T(n)},
hS:function(a,b){var u,t,s=U.ah
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaS();u.F();)u.gM(u).gB().G(0,t)
s=new D.c4([s])
s.b=!0
this.T(s)},
b2:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.az(r,r.length,[H.v(r,0)]),u=null;r.F();){q=r.d
if(q!=null){t=q.b2(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.dW():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aa7:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.ep.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
T:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.I(a)},
a9:function(){return this.T(null)},
b7:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge2().h(0,u.gc9())
u.a.c.geD().h(0,u.gcb())
u.a.c.gbR().h(0,u.gcd())
return!0},
ca:function(a){var u=this
H.f(a,"$iA")
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cc:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibs")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.t(0,a.y)
u=new V.Z(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.Z(t.a,t.b).v(0,2).u(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.Z(s.a,s.b).v(0,2).u(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
n.b.sX(0)
t=t.t(0,a.z)
n.Q=new V.Z(t.a,t.b).v(0,2).u(0,u.gac())}n.a9()},
ce:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sX(t*10*s)
r.a9()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.aA(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ba(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.eq.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
T:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.I(a)},
a9:function(){return this.T(null)},
b7:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge2().h(0,s.gc9())
s.a.c.geD().h(0,s.gcb())
s.a.c.gbR().h(0,s.gcd())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gh6())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gh8())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.giC())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.giA())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.giy())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.Z(u,t)},
ca:function(a){var u=this
a=H.m(H.f(a,"$iA"),"$ibs")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cc:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibs")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.t(0,a.y)
u=new V.Z(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.Z(t.a,t.b).v(0,2).u(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Z(s.a,s.b).v(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Z(t.a,t.b).v(0,2).u(0,u.gac()))}n.a9()},
ce:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
r.a9()}},
h7:function(a){var u=this
if(H.m(H.f(a,"$iA"),"$idS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h9:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibs")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Z(s.a,s.b).v(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Z(t.a,t.b).v(0,2).u(0,u.gac()))
n.a9()},
iD:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iB:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$iej")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.t(0,a.y)
u=new V.Z(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.Z(t.a,t.b).v(0,2).u(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.Z(s.a,s.b).v(0,2).u(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.Z(t.a,t.b).v(0,2).u(0,u.gac()))}n.a9()},
iz:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sX(-t*10*u)
r.a9()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.aA(0,u)
r.b.aA(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ba(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.ba(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.er.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.Y():u},
T:function(a){var u=this.r
if(u!=null)u.I(a)},
b7:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.gha()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
hb:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.L(q.b,q.a.b.c))return
H.m(a,"$icJ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.S("zoom",u,r,[P.u])
u.b=!0
q.T(u)}},
b2:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ba(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.dH.prototype={
aC:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.I(a)},
fq:function(){return this.aC(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n=E.av
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaq(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.saj(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c3([n])
n.b=!0
this.aC(n)},
hp:function(a,b){var u,t,s=E.av
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaq();u.F();)u.gM(u).gB().G(0,t)
s=new D.c4([s])
s.b=!0
this.aC(s)},
seU:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gB().G(0,t.gaq())
u=t.c
t.c=a
if(a!=null)a.gB().h(0,t.gaq())
s=new D.S("technique",u,t.c,[O.cc])
s.b=!0
t.aC(s)}},
gB:function(){var u=this.x
return u==null?this.x=D.Y():u},
b0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.eO(f.c)
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
if(typeof s!=="number")return H.C(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a.c=p
q=C.e.an(q.d*r)
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
i=V.ba(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eN(i)
t=$.m0
if(t==null){t=V.le()
q=V.mm()
p=$.mi
t=V.lX(t,q,p==null?$.mi=new V.D(0,0,-1):p)
$.m0=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.v(0,h)}a.db.eN(h)
u=f.c
if(u!=null)u.aA(0,a)
for(u=f.d.a,u=new J.az(u,u.length,[H.v(u,0)]);u.F();)u.d.aA(0,a)
for(u=f.d.a,u=new J.az(u,u.length,[H.v(u,0)]);u.F();)u.d.b0(a)
f.a.toString
a.cy.cY()
a.db.cY()
f.b.toString
a.eM()},
sfp:function(a,b){this.d=H.k(b,"$ia7",[E.av],"$aa7")},
$ipC:1}
A.dx.prototype={}
A.fx.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
js:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hA.prototype={
ff:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.aj("")
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
d2.iL(u)
d2.iS(u)
d2.iM(u)
d2.j_(u)
d2.j0(u)
d2.iU(u)
d2.j4(u)
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
u=new P.aj("")
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
s.iP(u)
s.iK(u)
s.iN(u)
s.iQ(u)
s.iY(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iW(u)
s.iX(u)}s.iT(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.i){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.i:m+=c8
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
k=H.d([],[P.e])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iO(u)
s.iV(u)
s.iZ(u)
s.j1(u)
s.j2(u)
s.j3(u)
s.iR(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.e])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.dw(n,35633)
a7.f=a7.dw(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.E(H.lt(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.r("Failed to link shader: "+H.l(h)))}a7.io()
a7.iq()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.m(a7.y.q(0,"invViewMat"),"$iaF")
if(t)a7.dy=H.m(a7.y.q(0,"objMat"),"$iaF")
if(r)a7.fr=H.m(a7.y.q(0,"viewObjMat"),"$iaF")
a7.fy=H.m(a7.y.q(0,"projViewObjMat"),"$iaF")
if(d2.x2)a7.k1=H.m(a7.y.q(0,"txt2DMat"),"$id_")
if(d2.y1)a7.k2=H.m(a7.y.q(0,"txtCubeMat"),"$iaF")
if(d2.y2)a7.k3=H.m(a7.y.q(0,"colorMat"),"$iaF")
a7.sfJ(H.d([],[A.aF]))
t=d2.aw
if(t>0){a7.k4=H.f(a7.y.q(0,"bendMatCount"),"$iQ")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.r(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaF"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.q(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.rx=H.m(a7.y.q(0,b0),"$iap")
a7.x1=H.m(a7.y.q(0,b1),"$iQ")
break
case C.h:a7.ry=H.m(a7.y.q(0,b0),"$iaq")
a7.x1=H.m(a7.y.q(0,b1),"$iQ")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.q(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.y1=H.m(a7.y.q(0,b2),"$iap")
a7.aw=H.m(a7.y.q(0,b3),"$iQ")
break
case C.h:a7.y2=H.m(a7.y.q(0,b2),"$iaq")
a7.aw=H.m(a7.y.q(0,b3),"$iQ")
break}}t=d2.c
if(t!==C.d){a7.am=H.m(a7.y.q(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.bv=H.m(a7.y.q(0,b4),"$iap")
a7.bw=H.m(a7.y.q(0,b5),"$iQ")
break
case C.h:a7.e5=H.m(a7.y.q(0,b4),"$iaq")
a7.bw=H.m(a7.y.q(0,b5),"$iQ")
break}}t=d2.d
if(t!==C.d){a7.bx=H.m(a7.y.q(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.e6=H.m(a7.y.q(0,b6),"$iap")
a7.by=H.m(a7.y.q(0,b7),"$iQ")
break
case C.h:a7.e7=H.m(a7.y.q(0,b6),"$iaq")
a7.by=H.m(a7.y.q(0,b7),"$iQ")
break}}t=d2.e
if(t!==C.d){a7.bB=H.m(a7.y.q(0,"shininess"),"$ia5")
a7.bz=H.m(a7.y.q(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.e8=H.m(a7.y.q(0,b8),"$iap")
a7.bA=H.m(a7.y.q(0,b9),"$iQ")
break
case C.h:a7.e9=H.m(a7.y.q(0,b8),"$iaq")
a7.bA=H.m(a7.y.q(0,b9),"$iQ")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.i:a7.ea=H.m(a7.y.q(0,"bumpTxt"),"$iap")
a7.bC=H.m(a7.y.q(0,c0),"$iQ")
break
case C.h:a7.eb=H.m(a7.y.q(0,"bumpTxt"),"$iaq")
a7.bC=H.m(a7.y.q(0,c0),"$iQ")
break}if(d2.dy){a7.ec=H.m(a7.y.q(0,"envSampler"),"$iaq")
a7.ed=H.m(a7.y.q(0,"nullEnvTxt"),"$iQ")
t=d2.r
if(t!==C.d){a7.bD=H.m(a7.y.q(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.ee=H.m(a7.y.q(0,c1),"$iap")
a7.bE=H.m(a7.y.q(0,c2),"$iQ")
break
case C.h:a7.ef=H.m(a7.y.q(0,c1),"$iaq")
a7.bE=H.m(a7.y.q(0,c2),"$iQ")
break}}t=d2.x
if(t!==C.d){a7.bF=H.m(a7.y.q(0,"refraction"),"$ia5")
a7.bG=H.m(a7.y.q(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.eg=H.m(a7.y.q(0,c3),"$iap")
a7.bH=H.m(a7.y.q(0,c4),"$iQ")
break
case C.h:a7.eh=H.m(a7.y.q(0,c3),"$iaq")
a7.bH=H.m(a7.y.q(0,c4),"$iQ")
break}}}t=d2.y
if(t!==C.d){a7.bI=H.m(a7.y.q(0,"alpha"),"$ia5")
switch(t){case C.d:break
case C.j:break
case C.i:a7.ei=H.m(a7.y.q(0,c5),"$iap")
a7.bJ=H.m(a7.y.q(0,c6),"$iQ")
break
case C.h:a7.ej=H.m(a7.y.q(0,c5),"$iaq")
a7.bJ=H.m(a7.y.q(0,c6),"$iQ")
break}}a7.sfs(H.d([],[A.cZ]))
a7.sft(H.d([],[A.d0]))
a7.sfu(H.d([],[A.d1]))
a7.sfv(H.d([],[A.d2]))
a7.sfw(H.d([],[A.d3]))
a7.sfz(H.d([],[A.d4]))
if(d2.k2){t=d2.z
if(t>0){a7.ek=H.f(a7.y.q(0,"dirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.cI;(s&&C.a).h(s,new A.cZ(f,e))}}t=d2.Q
if(t>0){a7.el=H.f(a7.y.q(0,"pntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.m(c,"$ia5")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.m(b,"$ia5")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.m(a,"$ia5")
s=a7.cJ;(s&&C.a).h(s,new A.d0(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.em=H.f(a7.y.q(0,"spotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.m(b,"$ia5")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.m(a,"$ia5")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.m(a0,"$ia5")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.m(a1,"$ia5")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.m(a2,"$ia5")
s=a7.cK;(s&&C.a).h(s,new A.d1(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.en=H.f(a7.y.q(0,"txtDirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.m(a0,"$iap")
s=a7.cL;(s&&C.a).h(s,new A.d2(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.eo=H.f(a7.y.q(0,"txtPntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.m(d,"$id_")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.m(b,"$iQ")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.m(a,"$ia5")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.m(a0,"$ia5")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.m(a1,"$ia5")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cM;(s&&C.a).h(s,new A.d3(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.ep=H.f(a7.y.q(0,"txtSpotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.r(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.r(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.r(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.r(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a8+r+a9))
H.m(a0,"$iP")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a8+r+a9))
H.m(a1,"$ia5")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a8+r+a9))
H.m(a2,"$ia5")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a8+r+a9))
H.m(a3,"$ia5")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a8+r+a9))
H.m(a4,"$ia5")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.r(a8+r+a9))
H.m(a5,"$ia5")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.r(a8+r+a9))
H.m(a6,"$iap")
s=a7.cN;(s&&C.a).h(s,new A.d4(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){C.c.a4(b.a,b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)C.c.a4(b.a,b.d,1)
else{a.f7(c)
C.c.a4(b.a,b.d,0)}},
sfJ:function(a){this.r1=H.k(a,"$ib",[A.aF],"$ab")},
sfs:function(a){this.cI=H.k(a,"$ib",[A.cZ],"$ab")},
sft:function(a){this.cJ=H.k(a,"$ib",[A.d0],"$ab")},
sfu:function(a){this.cK=H.k(a,"$ib",[A.d1],"$ab")},
sfv:function(a){this.cL=H.k(a,"$ib",[A.d2],"$ab")},
sfw:function(a){this.cM=H.k(a,"$ib",[A.d3],"$ab")},
sfz:function(a){this.cN=H.k(a,"$ib",[A.d4],"$ab")}}
A.hD.prototype={
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
u=a.a+="uniform BendingValue bendValues["+r.aw+"];\n"
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
aE:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n")
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iP:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aE(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.i:s=u+t
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
iK:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aE(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.i:s=u+t
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
iN:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aE(a,s,"diffuse")
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
case C.i:s=u+t
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
iQ:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aE(a,s,"invDiffuse")
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
case C.i:s=u+t
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
iY:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
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
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.i:s=u+t
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
iT:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.i:u+="uniform sampler2D bumpTxt;\n"
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
case C.j:u=a.a=u+r
break
case C.i:u+=q
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
iW:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aE(a,s,"reflect")
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
case C.i:s=u+t
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
iX:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
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
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.i:s=u+t
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
i:function(a){return this.am}}
A.cZ.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.cR.prototype={
fi:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.lt(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
io:function(){var u,t,s,r=this,q=H.d([],[A.dx]),p=r.a,o=H.ak(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dx(p,t.name,s))}r.x=new A.fx(q)},
iq:function(){var u,t,s,r=this,q=H.d([],[A.ek]),p=r.a,o=H.ak(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jn(t.type,t.size,t.name,s))}r.y=new A.j_(q)},
aQ:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.lh(u,this.r,b,a,c)},
fQ:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.lh(u,this.r,b,a,c)},
fR:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.lh(u,this.r,b,a,c)},
bq:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aQ(b,c,d)
case 5121:return u.aQ(b,c,d)
case 5122:return u.aQ(b,c,d)
case 5123:return u.aQ(b,c,d)
case 5124:return u.aQ(b,c,d)
case 5125:return u.aQ(b,c,d)
case 5126:return new A.a5(u.a,c,d)
case 35664:return new A.iV(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.iY(u.a,c,d)
case 35667:return new A.iW(u.a,c,d)
case 35668:return new A.iX(u.a,c,d)
case 35669:return new A.iZ(u.a,c,d)
case 35674:return new A.j0(u.a,c,d)
case 35675:return new A.d_(u.a,c,d)
case 35676:return new A.aF(u.a,c,d)
case 35678:return u.fQ(b,c,d)
case 35680:return u.fR(b,c,d)
case 35670:throw H.c(u.bq("BOOL",c))
case 35671:throw H.c(u.bq("BOOL_VEC2",c))
case 35672:throw H.c(u.bq("BOOL_VEC3",c))
case 35673:throw H.c(u.bq("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bZ.prototype={
i:function(a){return this.b}}
A.ek.prototype={}
A.j_.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siI:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a5.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.d_.prototype={
ao:function(a){var u=new Float32Array(H.cg(H.k(a,"$ib",[P.u],"$ab")))
C.c.eY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aF.prototype={
ao:function(a){var u=new Float32Array(H.cg(H.k(a,"$ib",[P.u],"$ab")))
C.c.eZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
f7:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cS(s.b,b).cS(s.d.cS(s.c,b),c)
a.sa0(0,new V.a0(r.a,r.b,r.c))
a.saz(r.u(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdX(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kv.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:32}
F.kx.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.C(p)
s=-s*p
u=r*p
a.sa0(0,new V.a0(s,u,q))
u=new V.D(s,u,q)
a.saz(u.u(0,Math.sqrt(u.E(u))))
a.sdX(new V.bc(1-c,2+c,-1,-1))},
$S:5}
F.ky.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:22}
F.kz.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:22}
F.kH.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.D(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.u(0,Math.sqrt(r.E(r)))
a.sa0(0,new V.a0(s.a,s.b,s.c))},
$S:5}
F.kW.prototype={
$2:function(a,b){return 0},
$S:32}
F.kX.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.C(s)
u=a.f
t=new V.D(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.E(t))).v(0,this.b+s)
a.sa0(0,new V.a0(s.a,s.b,s.c))},
$S:5}
F.kZ.prototype={
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)},
$S:27}
F.kG.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a0(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:27}
F.kw.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lG(n.$1(o),m)
m=J.nk(J.lG(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.D(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.E(m)))
n=$.mj
if(n==null){n=new V.D(1,0,0)
$.mj=n
t=n}else t=n
n=u.aG(!J.L(u,t)?V.mn():t)
s=n.u(0,Math.sqrt(n.E(n)))
n=s.aG(u)
t=n.u(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
a.sa0(0,J.nj(l,new V.a0(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.ab.prototype={
b8:function(){var u=this
if(!u.gb9()){C.a.G(u.a.a.d.b,u)
u.a.a.W()}u.cl()
u.cm()
u.i5()},
cq:function(a){this.a=a
C.a.h(a.d.b,this)},
cr:function(a){this.b=a
C.a.h(a.d.c,this)},
im:function(a){this.c=a
C.a.h(a.d.d,this)},
cl:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
cm:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
i5:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
fI:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d6()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eA())return
return s.u(0,Math.sqrt(s.E(s)))},
fM:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.E(r)))
r=t.t(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.aG(r.u(0,Math.sqrt(r.E(r))))
return r.u(0,Math.sqrt(r.E(r)))},
cC:function(){var u,t=this
if(t.d!=null)return!0
u=t.fI()
if(u==null){u=t.fM()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
fH:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d6()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eA())return
return s.u(0,Math.sqrt(s.E(s)))},
fL:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.t(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.t(0,g).v(0,p).p(0,g).t(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.E(l)))
l=o.aG(q)
l=l.u(0,Math.sqrt(l.E(l))).aG(o)
q=l.u(0,Math.sqrt(l.E(l)))}return q},
cA:function(){var u,t=this
if(t.e!=null)return!0
u=t.fH()
if(u==null){u=t.fL()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
aP:function(a,b){var u=b.a
if(u==null)throw H.c(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gji:function(a){var u=this
if(J.L(u.a,u.b))return!0
if(J.L(u.b,u.c))return!0
if(J.L(u.c,u.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t,s=this
if(s.gb9())return a+"disposed"
u=a+C.b.ah(J.au(s.a.e),0)+", "+C.b.ah(J.au(s.b.e),0)+", "+C.b.ah(J.au(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.J("")}}
F.h3.prototype={}
F.ip.prototype={
aZ:function(a,b,c){var u,t=b.a
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
F.br.prototype={
b8:function(){var u=this
if(!u.gb9()){C.a.G(u.a.a.c.b,u)
u.a.a.W()}u.cl()
u.cm()},
cq:function(a){this.a=a
C.a.h(a.c.b,this)},
cr:function(a){this.b=a
C.a.h(a.c.c,this)},
cl:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
cm:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
aP:function(a,b){var u=b.a
if(u==null)throw H.c(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){if(this.gb9())return a+"disposed"
return a+C.b.ah(J.au(this.a.e),0)+", "+C.b.ah(J.au(this.b.e),0)},
P:function(){return this.J("")}}
F.hn.prototype={}
F.iT.prototype={
aZ:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
return t==u.e}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
return t==u.e}else return!1}}}
F.bO.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ah(J.au(u.e),0)},
P:function(){return this.J("")}}
F.e7.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Y():u},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.C()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){r=g[s]
h.a.h(0,r.jk())}h.a.C()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bO()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.I(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.c0(l,k,i)}g=h.e
if(g!=null)g.ay(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
jv:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.h(t,u)
s=t[u]
if(b.aZ(0,a,s))return s}return},
i8:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.ac],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.G)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.t(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.L(q,s)){r.aP(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aP(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.L(r.c,s)){r.aP(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.t(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.L(q,s)){r.aP(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aP(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.t(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.L(q,s)){if(a.a==null)H.t(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.I(null)}}this.a.G(0,s)}},
eC:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.v(n,0)])
for(n=[F.ac];u.length!==0;){t=C.a.gjx(u)
C.a.eP(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.aZ(0,t,q)){C.a.h(s,q)
C.a.eP(u,r)}}if(s.length>1){p=b.b_(s)
if(p!=null){o.i8(p,s)
C.a.h(u,p)}}}}o.a.C()
o.c.bO()
o.d.bO()
o.b.k0()
o.c.d1(new F.iT())
o.d.d1(new F.ip())
n=o.e
if(n!=null)n.ay(0)},
bs:function(){this.eC(new F.d7(),new F.hU())},
jg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bA()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.bx().a)!==0)++s
r=a3.gdc(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.u
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dz])
for(n=0,m=0;m<s;++m){l=a3.jd(m)
k=l.gdc(l)
C.a.n(o,m,new Z.dz(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jI(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cg(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dA(new Z.es(a0,f),o,a3)
e.sh1(H.d([],[Z.bL]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.C()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.J(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.J(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.J(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.J(t))}return C.a.m(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.I(null)},
$ipD:1}
F.ih.prototype={
br:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c0(b,c,d)},
j7:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ac],"$ab")
u=H.d([],[F.ab])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.h(a,p)
p=a[p]
if(q>=o)return H.h(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.c0(s,p,o))}}return u},
j8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ac],"$ab")
u=H.d([],[F.ab])
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
C.a.h(u,F.c0(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c0(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c0(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c0(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aZ(0,p,n)){p.b8()
break}}}}},
bO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gji(s)
if(t)s.b8()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cC())s=!1
return s},
cB:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].cA())s=!1
return s},
i:function(a){return this.P()},
J:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
P:function(){return this.J("")},
sfX:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")}}
F.ii.prototype={
gl:function(a){return this.b.length},
d1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aZ(0,p,n)){p.b8()
break}}}}},
bO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.b8()}},
i:function(a){return this.P()},
J:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].J(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.J("")},
sh2:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.ij.prototype={
gl:function(a){return this.b.length},
k0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.I(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
J:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
P:function(){return this.J("")},
sci:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
F.ac.prototype={
cF:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cd(u.cx,r,o,t,s,q,p,a,n)},
jk:function(){return this.cF(null)},
sa0:function(a,b){var u
if(!J.L(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scW:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.L(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
sdZ:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.L(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
sd3:function(a){var u
if(!J.L(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
saz:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sab:function(a,b){var u
if(!J.L(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
sf1:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.W()}},
sdX:function(a){var u
if(!J.L(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
jI:function(a){var u,t,s=this
if(a.w(0,$.bA())){u=s.f
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bz())){u=s.r
t=[P.u]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.by())){u=s.x
t=[P.u]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bB())){u=s.y
t=[P.u]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bC())){u=s.z
t=[P.u]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.ds())){u=s.Q
t=[P.u]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dt())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.u])
else return u.d4(0)}else if(a.w(0,$.cr()))return H.d([s.ch],[P.u])
else if(a.w(0,$.bx())){u=s.cx
t=[P.u]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.u])},
cC:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.N(0,new F.jp(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
cA:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.N(0,new F.jo(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t,s=this,r="-",q=H.d([],[P.e])
C.a.h(q,C.b.ah(J.au(s.e),0))
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
C.a.h(q,V.V(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.J("")}}
F.jp.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jo.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jf.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.W()
return!0},
j9:function(a,b,c,d,e,f){var u=F.cd(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
G:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.r("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
u.W()
return this.b=!0},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cC()
return!0},
cB:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].cA()
return!0},
jh:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
this.C()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
P:function(){return this.J("")},
siJ:function(a){this.c=H.k(a,"$ib",[F.ac],"$ab")}}
F.jg.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.ab]})
C.a.N(u.b,b)
C.a.N(u.c,new F.jh(u,b))
C.a.N(u.d,new F.ji(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sfY:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")},
sfZ:function(a){this.c=H.k(a,"$ib",[F.ab],"$ab")},
sh_:function(a){this.d=H.k(a,"$ib",[F.ab],"$ab")}}
F.jh.prototype={
$1:function(a){H.f(a,"$iab")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:7}
F.ji.prototype={
$1:function(a){var u
H.f(a,"$iab")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:7}
F.jk.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sh3:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
sh4:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jl.prototype={}
F.d7.prototype={
aZ:function(a,b,c){return J.L(b.f,c.f)}}
F.jm.prototype={}
F.jj.prototype={
b_:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.k(a5,"$ib",[F.ac],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.a0(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.D(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.D(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a6(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.D(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b1(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b1(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.C(a)
i+=a;++j}a3=F.cd(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa0(0,a4)
else a3.sa0(0,o.u(0,n))
if(p==null)a3.scW(a4)
else a3.scW(p.u(0,Math.sqrt(p.E(p))))
if(q==null)a3.sdZ(a4)
else a3.sdZ(q.u(0,Math.sqrt(q.E(q))))
if(l<=0||s==null)a3.sd3(a4)
else a3.sd3(s.u(0,l))
if(k<=0||t==null)a3.saz(a4)
else a3.saz(t.u(0,k))
if(m<=0||r==null)a3.sab(0,a4)
else{u=r.u(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sab(0,new V.aA(a,a0,a1,u))}if(j<=0)a3.sf1(0,0)
else a3.sf1(0,i/j)
return a3}}
F.hU.prototype={
b_:function(a){var u,t,s,r
H.k(a,"$ib",[F.ac],"$ab")
u=V.d6()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.D(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s)a[s].scW(u)
return}}
F.jn.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sci:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
O.dU.prototype={
gB:function(){var u=this.dy
return u==null?this.dy=D.Y():u},
a2:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.I(a)},
bZ:function(){return this.a2(null)},
dM:function(a){H.f(a,"$iA")
this.a=null
this.a2(a)},
ib:function(){return this.dM(null)},
hh:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c3([u])
u.b=!0
this.a2(u)},
hj:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c4([u])
u.b=!0
this.a2(u)},
dt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a6(a1.e.length+3,4)*4,a3=C.f.a6(a1.f.length+3,4)*4,a4=C.f.a6(a1.r.length+3,4)*4,a5=C.f.a6(a1.x.length+3,4)*4,a6=C.f.a6(a1.y.length+3,4)*4,a7=C.f.a6(a1.z.length+3,4)*4,a8=C.f.a6(a0.e.a.length+3,4)*4
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
l=p!==C.d||o!==C.d
k=u!==C.d||t!==C.d||s!==C.d||r!==C.d
j=r===C.d
i=!j||a3+a6>0||l
h=t!==C.d||s!==C.d||!j||q!==C.d||l
j=q===C.d
g=!j
f=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.bA()
if(h){j=$.bz()
a=new Z.bh(a.a|j.a)}if(g){j=$.by()
a=new Z.bh(a.a|j.a)}if(f){j=$.bB()
a=new Z.bh(a.a|j.a)}if(e){j=$.bC()
a=new Z.bh(a.a|j.a)}if(c){j=$.bx()
a=new Z.bh(a.a|j.a)}return new A.hD(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
a_:function(a,b){H.k(a,"$ib",[T.cW],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
aA:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.az(u,u.length,[H.v(u,0)]);u.F();){t=u.d
t.toString
s=$.je
if(s==null)s=$.je=new V.D(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d5(s)}}},
k6:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.dt()
u=a5.fr.j(0,a4.am)
if(u==null){u=A.nS(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(a5.fr.bt(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bv
a4=a6.e
if(!(a4 instanceof Z.dA))a4=a6.e=null
if(a4==null||!a4.d.w(0,r)){a4=s.r1
if(a4)a6.d.al()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cB()
p.a.cB()
p=p.e
if(p!=null)p.ay(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.jh()
o=o.e
if(o!=null)o.ay(0)}m=a6.d.jg(new Z.jr(a5.a),r)
m.aY($.bA()).e=a3.a.Q.c
if(a4)m.aY($.bz()).e=a3.a.cx.c
if(q)m.aY($.by()).e=a3.a.ch.c
if(s.rx)m.aY($.bB()).e=a3.a.cy.c
if(p)m.aY($.bC()).e=a3.a.db.c
if(s.x1)m.aY($.bx()).e=a3.a.dx.c
a6.e=m}a4=T.cW
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.js()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga3(o)
q=q.dy
q.toString
q.ao(o.ai(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga3(o)
n=a5.dx
n=a5.cx=o.v(0,n.ga3(n))
o=n}q=q.fr
q.toString
q.ao(o.ai(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjZ()
n=a5.dx
n=a5.ch=o.v(0,n.ga3(n))
o=n}q=q.fy
q.toString
q.ao(o.ai(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ao(C.n.ai(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ao(C.n.ai(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ao(C.n.ai(o,!0))}if(s.aw>0){k=a3.e.a.length
q=a3.a.k4
C.c.a4(q.a,q.d,k)
for(q=[P.u],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.h(n,j)
n=n[j]
o.toString
H.f(n,"$iao")
o=o.r1
if(j>=o.length)return H.h(o,j)
o=o[j]
i=new Float32Array(H.cg(H.k(n.ai(0,!0),"$ib",q,"$ab")))
C.c.eZ(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.a_(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ak(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.a_(l,a3.f.e)
q=a3.a
o=a3.f.e
q.ae(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.a_(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ak(q.y1,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.a_(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ae(q.y2,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.am
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.a_(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ak(q.bv,q.bw,o)
o=a3.a
q=a3.x.f
o=o.am
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.a_(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ae(q.e5,q.bw,o)
o=a3.a
q=a3.x.f
o=o.am
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bx
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.a_(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ak(q.e6,q.by,o)
o=a3.a
q=a3.y.f
o=o.bx
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.a_(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ae(q.e7,q.by,o)
o=a3.a
q=a3.y.f
o=o.bx
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bz
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bB
C.c.S(o.a,o.d,h)
break
case C.i:a3.a_(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ak(q.e8,q.bA,o)
o=a3.a
q=a3.z.f
o=o.bz
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bB
C.c.S(q.a,q.d,h)
break
case C.h:a3.a_(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ae(q.e9,q.bA,o)
o=a3.a
q=a3.z.f
o=o.bz
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bB
C.c.S(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.ek
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cI
if(f>=n.length)return H.h(n,f)
c=n[f]
n=g.d5(d.a)
h=n.a
b=n.b
a=n.c
a=n.u(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.A(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.A(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.el
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cJ
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbe(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.bh(d.gbe(d))
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gab(d)
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gcs()
h=c.e
C.c.S(h.a,h.d,n)
n=d.gct()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gcu()
h=c.r
C.c.S(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.em
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cK
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbe(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gcH(d).kt()
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.bh(d.gbe(d))
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gab(d)
h=c.e
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gkp()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gko()
h=c.r
C.c.S(h.a,h.d,n)
n=d.gcs()
h=c.x
C.c.S(h.a,h.d,n)
n=d.gct()
h=c.y
C.c.S(h.a,h.d,n)
n=d.gcu()
h=c.z
C.c.S(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.en
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
h=a3.a.cL
if(f>=h.length)return H.h(h,f)
c=h[f]
h=d.gbf()
H.k(l,"$ib",n,"$ab")
if(!C.a.Y(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcH(d)
b=c.d
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=d.gbR()
b=c.b
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=d.gbP(d)
b=c.c
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=g.d5(d.gcH(d))
b=h.a
a=h.b
a0=h.c
a0=h.u(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.A(a.a,a.d,b,h,a0)
a0=d.gab(d)
h=c.f
C.c.A(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gbf()
h=a0.gbL(a0)
if(!h){h=c.x
C.c.a4(h.a,h.d,1)}else{h=c.r
b=a0.gbL(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gjC(a0))
h=c.x
C.c.a4(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.eo
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.y,o=q.length,n=[P.u],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
b=a3.a.cM
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.gbf()
H.k(l,"$ib",h,"$ab")
if(!C.a.Y(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.v(0,d.ga3(d))
b=d.ga3(d)
a=$.cO
b=b.bh(a==null?$.cO=new V.a0(0,0,0):a)
a=c.b
C.c.A(a.a,a.d,b.a,b.b,b.c)
b=$.cO
b=a1.bh(b==null?$.cO=new V.a0(0,0,0):b)
a=c.c
C.c.A(a.a,a.d,b.a,b.b,b.c)
b=a1.ez(0)
a=c.d
i=new Float32Array(H.cg(H.k(new V.dV(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ai(0,!0),"$ib",n,"$ab")))
C.c.eY(a.a,a.d,!1,i)
a=d.gab(d)
b=c.e
C.c.A(b.a,b.d,a.a,a.b,a.c)
a=d.gbf()
b=a.gbL(a)
if(!b){b=c.r
C.c.a4(b.a,b.d,1)}else{b=c.f
a0=a.d
a2=b.a
b=b.d
if(a0<6)a2.uniform1i(b,0)
else a2.uniform1i(b,a.a)
b=c.r
C.c.a4(b.a,b.d,0)}b=d.gcs()
a=c.x
C.c.S(a.a,a.d,b)
b=d.gct()
a=c.y
C.c.S(a.a,a.d,b)
b=d.gcu()
a=c.z
C.c.S(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.ep
C.c.a4(q.a,q.d,k)
q=a5.db
g=q.ga3(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cN
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbf()
H.k(l,"$ib",a4,"$ab")
if(!C.a.Y(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gbe(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gcH(d)
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbR()
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbP(d)
h=c.e
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.bh(d.gbe(d))
h=c.f
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbf()
h=n.gbL(n)
if(!h){n=c.x
C.c.a4(n.a,n.d,1)}else{h=c.r
b=n.gbL(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gjC(n))
n=c.x
C.c.a4(n.a,n.d,0)}n=d.gab(d)
h=c.y
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gku()
h=c.z
C.c.S(h.a,h.d,n)
n=d.gkv()
h=c.Q
C.c.S(h.a,h.d,n)
n=d.gcs()
h=c.ch
C.c.S(h.a,h.d,n)
n=d.gct()
h=c.cx
C.c.S(h.a,h.d,n)
n=d.gcu()
h=c.cy
C.c.S(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.i:a3.a_(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ak(a4.ea,a4.bC,q)
break
case C.h:a3.a_(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ae(a4.eb,a4.bC,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga3(q).ez(0)}a4=a4.id
a4.toString
a4.ao(q.ai(0,!0))}if(s.dy){a3.a_(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ae(a4.ec,a4.ed,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bD
a4.toString
o=q.a
n=q.b
q=q.c
C.c.A(a4.a,a4.d,o,n,q)
break
case C.i:a3.a_(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ak(a4.ee,a4.bE,q)
q=a3.a
a4=a3.cx.f
q=q.bD
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
break
case C.h:a3.a_(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ae(a4.ef,a4.bE,q)
q=a3.a
a4=a3.cx.f
q=q.bD
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bG
a4.toString
o=q.a
n=q.b
q=q.c
C.c.A(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bF
C.c.S(q.a,q.d,n)
break
case C.i:a3.a_(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ak(a4.eg,a4.bH,q)
q=a3.a
a4=a3.cy.f
q=q.bG
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bF
C.c.S(a4.a,a4.d,n)
break
case C.h:a3.a_(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ae(a4.eh,a4.bH,q)
q=a3.a
a4=a3.cy.f
q=q.bG
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bF
C.c.S(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bI
C.c.S(a4.a,a4.d,o)
break
case C.i:a3.a_(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ak(a4.ei,a4.bJ,o)
o=a3.a
a4=a3.db.f
o=o.bI
C.c.S(o.a,o.d,a4)
break
case C.h:a3.a_(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ae(a4.ej,a4.bJ,o)
o=a3.a
a4=a3.db.f
o=o.bI
C.c.S(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d>=6){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(34067,a4.b)}}a4=a6.e
a4.cv(a5)
a4.b0(a5)
a4.kh(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(34067,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.jq()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().am},
sfK:function(a){this.e=H.k(a,"$ia7",[V.ao],"$aa7")}}
O.hB.prototype={
ii:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.S(u.b,t,a,[P.u])
t.b=!0
u.a.a2(t)}},
as:function(){this.de()
this.ii(1)}}
O.cG.prototype={
a2:function(a){this.a.a2(H.f(a,"$iA"))},
bZ:function(){return this.a2(null)},
as:function(){},
ik:function(a){},
il:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gB().G(0,t.gbm())
u=t.e
t.e=a
if(a!=null)a.gB().h(0,t.gbm())
s=new D.S(t.b+".textureCube",u,t.e,[T.ed])
s.b=!0
t.a.a2(s)}},
saz:function(a){var u=this,t=u.c
if(t!==C.h){if(t===C.d)u.as()
u.c=C.h
u.ik(null)
t=u.a
t.a=null
t.a2(null)}u.il(a)}}
O.hC.prototype={}
O.b9.prototype={
dO:function(a){var u,t,s=this
if(!J.L(s.f,a)){u=s.f
s.f=a
t=new D.S(s.b+".color",u,a,[V.a9])
t.b=!0
s.a.a2(t)}},
as:function(){this.de()
this.dO(new V.a9(1,1,1))},
sab:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.as()
u=t.a
u.a=null
u.a2(null)}t.dO(b)}}
O.hE.prototype={
ij:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.S(u.b+".refraction",t,a,[P.u])
t.b=!0
u.a.a2(t)}},
as:function(){this.bX()
this.ij(1)}}
O.hF.prototype={
cn:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.S(u.b+".shininess",t,a,[P.u])
t.b=!0
u.a.a2(t)}},
as:function(){this.bX()
this.cn(100)}}
O.cc.prototype={}
T.cW.prototype={}
T.ed.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.Y():u}}
T.iG.prototype={
eB:function(a){var u,t=this,s=34067,r=a+"/posx.png",q=a+"/posy.png",p=a+"/posz.png",o=a+"/negx.png",n=a+"/negy.png",m=a+"/negz.png",l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.ed()
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
aR:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ad(t,"load",H.n(new T.iH(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
ic:function(a,b,c){var u,t,s,r
b=V.lB(b)
u=V.lB(a.width)
t=V.lB(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l3()
s.width=u
s.height=t
r=H.f(C.m.f3(s,"2d"),"$icv")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oZ(r.getImageData(0,0,s.width,s.height))}}}
T.iH.prototype={
$1:function(a){var u=this,t=u.a,s=t.ic(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.kc(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.jr()}++t.e},
$S:12}
V.bl.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dT.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.aw.prototype={
aI:function(a,b){return!this.fc(0,b)},
i:function(a){return"!["+this.dd(0)+"]"}}
V.i5.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c8(this.a),t=H.c8(this.b)
return u+".."+t},
$iaC:1}
V.ie.prototype={
fh:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.p,P.U])
for(t=new H.cF(a,a.gl(a),[H.at(a,"z",0)]);t.F();)u.n(0,t.d,!0)
this.sih(u)},
aI:function(a,b){return this.a.bt(0,b)},
i:function(a){var u=this.a
return P.cU(u.ga7(u),0,null)},
sih:function(a){this.a=H.k(a,"$iI",[P.p,P.U],"$aI")},
$iaC:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.k(0,b))
r.sa8(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
jw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
siE:function(a){this.c=H.k(a,"$ib",[V.cY],"$ab")}}
V.ei.prototype={
i:function(a){var u=H.lD(this.b,"\n","\\n"),t=H.lD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aK:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.G)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si6:function(a){var u=P.e
this.c=H.k(a,"$iI",[u,u],"$aI")}}
V.iK.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.siE(H.d([],[V.cY]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cX(a)
u=P.e
t.si6(new H.aS([u,u]))
this.b.n(0,a,t)}return t},
eX:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ei]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.H(a,s)
q=k.jw(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cU(i,0,m)
throw H.c(P.r("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cU(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ei(n==null?o.b:n,p,s)}++s}}},
siu:function(a){this.a=H.k(a,"$iI",[P.e,V.cS],"$aI")},
six:function(a){this.b=H.k(a,"$iI",[P.e,V.cX],"$aI")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.dd(0)}}
X.dC.prototype={$ibt:1}
X.ha.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.e1.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.Y():u},
aO:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.I(a)},
fD:function(){return this.aO(null)},
sbb:function(a){var u,t,s=this
if(!J.L(s.b,a)){u=s.b
if(u!=null)u.gB().G(0,s.gdi())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gdi())
u=new D.S("mover",t,s.b,[U.ah])
u.b=!0
s.aO(u)}},
$ibt:1,
$idC:1}
X.eb.prototype={}
V.bG.prototype={
bl:function(a){this.b=new P.he(C.U)
this.c=null
this.sc6(H.d([],[[P.b,W.aI]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.fP(q,0,q.length)
n=o==null?q:o
C.S.f6(p,H.lD(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gax(m.d),p)}},
eK:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sc6(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bu():t).eX(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.bN(t[r])},
sc6:function(a){this.d=H.k(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.kV.prototype={
$1:function(a){H.f(a,"$ibe")
P.lC(C.e.eW(this.a.gjA(),2)+" fps")},
$S:50}
V.fR.prototype={
bN:function(a){var u=this
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
bu:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iL()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.x(new H.w("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.x(new H.w(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.x(new H.w(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.x(new H.w('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.x(new H.w('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.x(new H.w("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.x(new H.w('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bl())
t=a1.k(0,r).m(0,h)
u=V.x(new H.w("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.x(new H.w("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.x(new H.w("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.x(new H.w("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bl())
t=a1.k(0,r).m(0,e)
u=V.x(new H.w("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.x(new H.w("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.aw()
s=[V.aC]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.x(new H.w("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.x(new H.w("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.aw()
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.w("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.x(new H.w("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.x(new H.w(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.x(new H.w(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.R("Num")
t=a1.k(0,n)
t.d=t.a.R("Num")
t=a1.k(0,m)
t.d=t.a.R("Symbol")
t=a1.k(0,j)
t.d=t.a.R("String")
t=a1.k(0,g)
t.d=t.a.R("String")
t=a1.k(0,c)
t.d=t.a.R(d)
t=a1.k(0,a0)
t.d=t.a.R(a0)
t=a1.k(0,q)
t=t.d=t.a.R(q)
u=[P.e]
t.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hb.prototype={
bN:function(a){var u=this
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
bu:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iL()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.x(new H.w("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.x(new H.w(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.x(new H.w(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.x(new H.w("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.x(new H.w("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bl())
t=e.k(0,j).m(0,i)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.aw()
s=[V.aC]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.w("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.aw()
u.sa8(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.w("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.x(new H.w(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.x(new H.w(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.R("Num")
u=e.k(0,n)
u.d=u.a.R("Num")
u=e.k(0,m)
u.d=u.a.R("Symbol")
u=e.k(0,i)
u.d=u.a.R(j)
u=e.k(0,g)
u.d=u.a.R(h)
u=e.k(0,f)
u.d=u.a.R(f)
u=e.k(0,q)
u=u.d=u.a.R(q)
t=[P.e]
u.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hc.prototype={
bN:function(a){var u=this,t="#111"
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
bu:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iL()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.x(new H.w("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.x(new H.w("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.x(new H.w("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.x(new H.w('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.x(new H.w('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.x(new H.w("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.x(new H.w('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bl())
C.a.h(l.k(0,s).m(0,m).a,new V.bl())
u=l.k(0,m).m(0,m)
t=new V.aw()
t.sa8(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.x(new H.w('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.i_.prototype={
eK:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc6(H.d([],[[P.b,W.aI]]))
this.O(C.a.m(b,"\n"),"#111")},
bN:function(a){},
bu:function(){return}}
V.i3.prototype={
br:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.me().gd_().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dS(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lJ(m.c).h(0,q)
o=W.nG("radio")
o.checked=s
o.name=u
u=W.o
W.ad(o,"change",H.n(new V.i4(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lJ(m.c).h(0,r.createElement("br"))},
at:function(a,b,c){return this.br(a,b,c,!1)},
dS:function(a){var u,t,s=P.me(),r=P.e,q=P.nO(s.gd_(),r,r)
q.n(0,this.a,a)
u=s.eQ(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k4([],[]).d6(""),"",t)}}
V.i4.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.dS(u.d)}},
$S:12}
V.ik.prototype={
fj:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ad(q,"scroll",H.n(new V.im(o),{func:1,ret:-1,args:[r]}),!1,r)},
dV:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.ip()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eX(C.a.jH(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
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
if(H.pq(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fd(C.C,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
f2:function(a){var u,t,s,r=new V.fR("dart")
r.bl("dart")
u=new V.hb("glsl")
u.bl("glsl")
t=new V.hc("html")
t.bl("html")
s=C.a.jy(H.d([r,u,t],[V.bG]),new V.io(a))
if(s!=null)return s
r=new V.i_("plain")
r.bl("plain")
return r},
dU:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dr(r).a5(r,"+")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f2(a8)
q.eK(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fd(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lL()
i.href="#"+H.l(m)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.G)(r),++a0)C.a3.jc(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.G)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.F();)c.appendChild(a3.gM(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
j5:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.e],"$ab")
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
s=H.f(r.insertCell(-1),"$ibd").style
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
o=H.f(r.insertCell(-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ip:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iL()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.aw()
r=[V.aC]
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.aw()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.x(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.aw()
s.sa8(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.w("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.x(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.x(new H.w("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.x(new H.w("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.aw()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.aw()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bl())
s=u.k(0,i).m(0,i)
t=new V.aw()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.R(p)
s=u.k(0,n)
s.d=s.a.R(o)
s=u.k(0,"CodeEnd")
s.d=s.a.R(m)
s=u.k(0,j)
s.d=s.a.R("Link")
s=u.k(0,i)
s.d=s.a.R(i)
this.b=u}}
V.im.prototype={
$1:function(a){P.ma(C.t,new V.il(this.a))},
$S:12}
V.il.prototype={
$0:function(){var u=C.e.an(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.io.prototype={
$1:function(a){return H.f(a,"$ibG").a===this.a},
$S:51}
R.kJ.prototype={
$0:function(){this.a.saa(0,F.lx(1,null,null,1))},
$S:0}
R.kK.prototype={
$0:function(){this.a.saa(0,F.lx(8,null,null,8))},
$S:0}
R.kL.prototype={
$0:function(){this.a.saa(0,F.mL(!0,40,1))},
$S:0}
R.kM.prototype={
$0:function(){this.a.saa(0,F.mL(!1,40,0))},
$S:0}
R.kN.prototype={
$0:function(){this.a.saa(0,F.ph(10,20))},
$S:0}
R.kO.prototype={
$0:function(){var u=F.ig(),t=Math.sqrt(5)/2+0.5,s=F.as(u,new V.D(-1,t,0)),r=F.as(u,new V.D(1,t,0)),q=-t,p=F.as(u,new V.D(-1,q,0)),o=F.as(u,new V.D(1,q,0)),n=F.as(u,new V.D(0,-1,q)),m=F.as(u,new V.D(0,1,q)),l=F.as(u,new V.D(0,-1,t)),k=F.as(u,new V.D(0,1,t)),j=F.as(u,new V.D(t,0,1)),i=F.as(u,new V.D(t,0,-1)),h=F.as(u,new V.D(q,0,1)),g=F.as(u,new V.D(q,0,-1))
F.a4(u,s,g,m,2)
F.a4(u,s,m,r,2)
F.a4(u,s,r,k,2)
F.a4(u,s,k,h,2)
F.a4(u,s,h,g,2)
F.a4(u,r,m,i,2)
F.a4(u,m,g,n,2)
F.a4(u,g,h,p,2)
F.a4(u,h,k,l,2)
F.a4(u,k,r,j,2)
F.a4(u,o,i,n,2)
F.a4(u,o,n,p,2)
F.a4(u,o,p,l,2)
F.a4(u,o,l,j,2)
F.a4(u,o,j,i,2)
F.a4(u,n,i,m,2)
F.a4(u,p,n,g,2)
F.a4(u,l,p,h,2)
F.a4(u,j,l,k,2)
F.a4(u,i,j,r,2)
u.eC(new F.d7(),new F.jj())
this.a.saa(0,u)},
$S:0}
R.kP.prototype={
$0:function(){this.a.saa(0,F.mY(6,6))},
$S:0}
R.kQ.prototype={
$0:function(){this.a.saa(0,F.pt())},
$S:0}
R.kR.prototype={
$0:function(){this.a.saa(0,F.pg())},
$S:0}
R.kS.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dU("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dU("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.f9=u.i
u=J.dN.prototype
u.fb=u.i
u=P.i.prototype
u.fa=u.bS
u=W.X.prototype
u.bW=u.af
u=W.eW.prototype
u.fd=u.av
u=O.cG.prototype
u.de=u.as
u=O.b9.prototype
u.bX=u.as
u=V.dT.prototype
u.fc=u.aI
u.dd=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oT","om",11)
u(P,"oU","on",11)
u(P,"oV","oo",11)
t(P,"mK","oR",3)
s(W,"p9",4,null,["$4"],["oq"],20,0)
s(W,"pa",4,null,["$4"],["or"],20,0)
var m
r(m=E.av.prototype,"geI",0,0,null,["$1","$0"],["eJ","jR"],1,0)
r(m,"geG",0,0,null,["$1","$0"],["eH","jQ"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","jN"],1,0)
q(m,"gjL","jM",10)
q(m,"gjO","jP",10)
r(m=E.eh.prototype,"gdf",0,0,null,["$1","$0"],["dh","dg"],1,0)
p(m,"gk8","eR",3)
o(m=X.eo.prototype,"ghw","hx",15)
o(m,"ghk","hl",15)
o(m,"ghq","hr",4)
o(m,"ghA","hB",26)
o(m,"ghy","hz",26)
o(m,"ghE","hF",4)
o(m,"ghI","hJ",4)
o(m,"ghu","hv",4)
o(m,"ghG","hH",4)
o(m,"ghs","ht",4)
o(m,"ghK","hL",36)
o(m,"ghM","hN",15)
o(m,"ghZ","i_",14)
o(m,"ghV","hW",14)
o(m,"ghX","hY",14)
r(D.bI.prototype,"gfn",0,0,null,["$1","$0"],["aB","fo"],1,0)
r(m=D.dP.prototype,"gdH",0,0,null,["$1","$0"],["dI","hC"],1,0)
o(m,"ghP","hQ",38)
q(m,"ghe","hf",18)
q(m,"ghT","hU",18)
n(V.Z.prototype,"gl","ba",13)
n(V.D.prototype,"gl","ba",13)
n(V.b1.prototype,"gl","ba",13)
r(m=U.cC.prototype,"gaS",0,0,null,["$1","$0"],["T","a9"],1,0)
q(m,"ghc","hd",28)
q(m,"ghR","hS",28)
r(m=U.ep.prototype,"gaS",0,0,null,["$1","$0"],["T","a9"],1,0)
o(m,"gc9","ca",2)
o(m,"gcb","cc",2)
o(m,"gcd","ce",2)
r(m=U.eq.prototype,"gaS",0,0,null,["$1","$0"],["T","a9"],1,0)
o(m,"gc9","ca",2)
o(m,"gcb","cc",2)
o(m,"gcd","ce",2)
o(m,"gh6","h7",2)
o(m,"gh8","h9",2)
o(m,"giC","iD",2)
o(m,"giA","iB",2)
o(m,"giy","iz",2)
o(U.er.prototype,"gha","hb",2)
r(m=M.dH.prototype,"gaq",0,0,null,["$1","$0"],["aC","fq"],1,0)
q(m,"ghm","hn",10)
q(m,"gho","hp",10)
r(m=O.dU.prototype,"gbm",0,0,null,["$1","$0"],["a2","bZ"],1,0)
r(m,"gia",0,0,null,["$1","$0"],["dM","ib"],1,0)
q(m,"ghg","hh",29)
q(m,"ghi","hj",29)
r(O.cG.prototype,"gbm",0,0,null,["$1","$0"],["a2","bZ"],1,0)
r(X.e1.prototype,"gdi",0,0,null,["$1","$0"],["aO","fD"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.la,J.a,J.az,P.eJ,P.i,H.cF,P.b6,H.c1,H.d5,H.fK,H.iQ,P.bJ,H.cw,H.f0,P.af,H.ho,H.hq,H.hj,P.f6,P.bj,P.aN,P.et,P.iw,P.cT,P.ix,P.be,P.an,P.kk,P.jZ,P.ce,P.eI,P.z,P.kc,P.hw,P.bY,P.hf,P.ki,P.kh,P.U,P.aB,P.ae,P.b5,P.hY,P.e9,P.eB,P.h9,P.bK,P.b,P.I,P.N,P.ax,P.e,P.aj,P.cf,P.j5,P.k1,W.fN,W.bR,W.H,W.e_,W.eW,W.k7,W.dJ,W.aE,W.jY,W.fe,P.k3,P.fb,P.jT,P.T,O.a7,O.cH,E.fE,E.av,E.i6,E.eh,Z.es,Z.jr,Z.dA,Z.bL,Z.bh,D.fH,D.c_,D.A,X.dB,X.dO,X.hl,X.ht,X.aD,X.hM,X.iM,X.eo,D.bI,D.aa,D.e2,D.e8,D.ee,D.ef,D.eg,V.a9,V.aA,V.h0,V.dV,V.ao,V.a6,V.a0,V.bc,V.e5,V.Z,V.D,V.b1,U.ep,U.eq,U.er,M.dH,A.dx,A.fx,A.hD,A.cZ,A.d2,A.d0,A.d3,A.d1,A.d4,A.bZ,A.ek,A.j_,F.ab,F.h3,F.br,F.hn,F.bO,F.e7,F.ih,F.ii,F.ij,F.ac,F.jf,F.jg,F.jk,F.jl,F.jm,F.jn,O.cc,O.cG,T.iG,V.bl,V.aC,V.dT,V.i5,V.ie,V.cS,V.ei,V.cX,V.iK,X.dC,X.eb,X.e1,V.bG,V.i3,V.ik])
s(J.a,[J.hi,J.dM,J.dN,J.aR,J.bM,J.bp,H.cK,H.bN,W.j,W.fu,W.bW,W.cv,W.b3,W.b4,W.a_,W.ev,W.fS,W.fT,W.ex,W.dG,W.ez,W.fV,W.o,W.eC,W.aQ,W.hd,W.eE,W.bo,W.dR,W.hG,W.eK,W.eL,W.aT,W.eM,W.eP,W.aU,W.eT,W.eV,W.aW,W.eX,W.aX,W.f1,W.aK,W.f4,W.iJ,W.aZ,W.f7,W.iO,W.ja,W.ff,W.fh,W.fj,W.fl,W.fn,P.b8,P.eG,P.bb,P.eR,P.i2,P.f2,P.bf,P.f9,P.fy,P.eu,P.dy,P.e3,P.ca,P.e6,P.ec,P.el,P.eZ])
s(J.dN,[J.hZ,J.bQ,J.bq])
t(J.l9,J.aR)
s(J.bM,[J.dL,J.dK])
t(P.hs,P.eJ)
s(P.hs,[H.em,W.jz,W.ar,P.h5])
t(H.w,H.em)
s(P.i,[H.fY,H.hx,H.d8])
s(H.fY,[H.c5,H.hp])
s(P.b6,[H.hy,H.js])
t(H.hz,H.c5)
t(H.fL,H.fK)
s(P.bJ,[H.hV,H.hk,H.j3,H.iS,H.fG,H.ic,P.fw,P.e0,P.aP,P.j4,P.j1,P.cb,P.fJ,P.fQ])
s(H.cw,[H.l_,H.iD,H.kC,H.kD,H.kE,P.jv,P.ju,P.jw,P.jx,P.kb,P.ka,P.jG,P.jK,P.jH,P.jI,P.jJ,P.jN,P.jO,P.jM,P.jL,P.iy,P.iz,P.ks,P.jW,P.jV,P.jX,P.hr,P.hv,P.fW,P.fX,P.j9,P.j6,P.j7,P.j8,P.kd,P.ke,P.kg,P.kf,P.ko,P.kn,P.kp,P.kq,W.fZ,W.hI,W.hK,W.ib,W.iv,W.jF,W.hT,W.hS,W.k_,W.k0,W.k9,W.kj,P.k5,P.ku,P.h6,P.h7,P.fA,E.i7,E.i8,E.i9,E.iI,D.h1,D.h2,F.kl,F.kv,F.kx,F.ky,F.kz,F.kH,F.kW,F.kX,F.kZ,F.kG,F.kw,F.jp,F.jo,F.jh,F.ji,T.iH,V.kV,V.i4,V.im,V.il,V.io,R.kJ,R.kK,R.kL,R.kM,R.kN,R.kO,R.kP,R.kQ,R.kR,R.kS])
s(H.iD,[H.it,H.ct])
t(H.jt,P.fw)
t(P.hu,P.af)
s(P.hu,[H.aS,W.jy])
t(H.dX,H.bN)
s(H.dX,[H.dd,H.df])
t(H.de,H.dd)
t(H.cL,H.de)
t(H.dg,H.df)
t(H.dY,H.dg)
s(H.dY,[H.hN,H.hO,H.hP,H.hQ,H.hR,H.dZ,H.cM])
t(P.jU,P.kk)
t(P.jS,P.jZ)
t(P.fc,P.hw)
t(P.en,P.fc)
s(P.bY,[P.fC,P.h_])
t(P.bH,P.ix)
s(P.bH,[P.fD,P.he,P.jd,P.jc])
t(P.jb,P.h_)
s(P.ae,[P.u,P.p])
s(P.aP,[P.c9,P.hg])
t(P.jB,P.cf)
s(W.j,[W.F,W.h4,W.cI,W.aV,W.dh,W.aY,W.aL,W.dj,W.jq,W.d9,P.fB,P.bV])
s(W.F,[W.X,W.bF,W.da])
s(W.X,[W.y,P.q])
s(W.y,[W.dv,W.fv,W.cs,W.bE,W.bX,W.aI,W.h8,W.cD,W.cE,W.id,W.bd,W.ea,W.iB,W.iC,W.cV])
s(W.b3,[W.cx,W.fO,W.fP])
t(W.fM,W.b4)
t(W.cy,W.ev)
t(W.ey,W.ex)
t(W.dF,W.ey)
t(W.eA,W.ez)
t(W.fU,W.eA)
t(W.aJ,W.bW)
t(W.eD,W.eC)
t(W.cA,W.eD)
t(W.eF,W.eE)
t(W.c2,W.eF)
t(W.bP,W.o)
s(W.bP,[W.b7,W.ag,W.b_])
t(W.hH,W.eK)
t(W.hJ,W.eL)
t(W.eN,W.eM)
t(W.hL,W.eN)
t(W.eQ,W.eP)
t(W.cN,W.eQ)
t(W.eU,W.eT)
t(W.i0,W.eU)
t(W.ia,W.eV)
t(W.di,W.dh)
t(W.iq,W.di)
t(W.eY,W.eX)
t(W.ir,W.eY)
t(W.iu,W.f1)
t(W.f5,W.f4)
t(W.iE,W.f5)
t(W.dk,W.dj)
t(W.iF,W.dk)
t(W.f8,W.f7)
t(W.iN,W.f8)
t(W.bi,W.ag)
t(W.fg,W.ff)
t(W.jA,W.fg)
t(W.ew,W.dG)
t(W.fi,W.fh)
t(W.jP,W.fi)
t(W.fk,W.fj)
t(W.eO,W.fk)
t(W.fm,W.fl)
t(W.k2,W.fm)
t(W.fo,W.fn)
t(W.k6,W.fo)
t(W.jC,W.jy)
t(W.jD,P.iw)
t(W.ll,W.jD)
t(W.jE,P.cT)
t(W.k8,W.eW)
t(P.k4,P.k3)
t(P.am,P.jT)
t(P.eH,P.eG)
t(P.hm,P.eH)
t(P.eS,P.eR)
t(P.hW,P.eS)
t(P.cQ,P.q)
t(P.f3,P.f2)
t(P.iA,P.f3)
t(P.fa,P.f9)
t(P.iP,P.fa)
t(P.fz,P.eu)
t(P.hX,P.bV)
t(P.f_,P.eZ)
t(P.is,P.f_)
s(E.fE,[Z.dz,A.cR,T.cW])
s(D.A,[D.c3,D.c4,D.S,X.i1])
s(X.i1,[X.dS,X.bs,X.cJ,X.ej])
s(O.a7,[D.dP,U.cC])
s(D.fH,[U.fI,U.ah])
t(U.dD,U.ah)
t(A.hA,A.cR)
s(A.ek,[A.Q,A.iW,A.iX,A.iZ,A.iU,A.a5,A.iV,A.P,A.iY,A.j0,A.d_,A.aF,A.ap,A.aq])
t(F.ip,F.h3)
t(F.iT,F.hn)
t(F.d7,F.jl)
s(F.jm,[F.jj,F.hU])
t(O.dU,O.cc)
s(O.cG,[O.hB,O.hC,O.b9])
s(O.b9,[O.hE,O.hF])
t(T.ed,T.cW)
s(V.dT,[V.aw,V.cY])
t(X.ha,X.eb)
s(V.bG,[V.fR,V.hb,V.hc,V.i_])
u(H.em,H.d5)
u(H.dd,P.z)
u(H.de,H.c1)
u(H.df,P.z)
u(H.dg,H.c1)
u(P.eJ,P.z)
u(P.fc,P.kc)
u(W.ev,W.fN)
u(W.ex,P.z)
u(W.ey,W.H)
u(W.ez,P.z)
u(W.eA,W.H)
u(W.eC,P.z)
u(W.eD,W.H)
u(W.eE,P.z)
u(W.eF,W.H)
u(W.eK,P.af)
u(W.eL,P.af)
u(W.eM,P.z)
u(W.eN,W.H)
u(W.eP,P.z)
u(W.eQ,W.H)
u(W.eT,P.z)
u(W.eU,W.H)
u(W.eV,P.af)
u(W.dh,P.z)
u(W.di,W.H)
u(W.eX,P.z)
u(W.eY,W.H)
u(W.f1,P.af)
u(W.f4,P.z)
u(W.f5,W.H)
u(W.dj,P.z)
u(W.dk,W.H)
u(W.f7,P.z)
u(W.f8,W.H)
u(W.ff,P.z)
u(W.fg,W.H)
u(W.fh,P.z)
u(W.fi,W.H)
u(W.fj,P.z)
u(W.fk,W.H)
u(W.fl,P.z)
u(W.fm,W.H)
u(W.fn,P.z)
u(W.fo,W.H)
u(P.eG,P.z)
u(P.eH,W.H)
u(P.eR,P.z)
u(P.eS,W.H)
u(P.f2,P.z)
u(P.f3,W.H)
u(P.f9,P.z)
u(P.fa,W.H)
u(P.eu,P.af)
u(P.eZ,P.z)
u(P.f_,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bE.prototype
C.m=W.bX.prototype
C.S=W.aI.prototype
C.V=J.a.prototype
C.a=J.aR.prototype
C.W=J.dK.prototype
C.f=J.dL.prototype
C.n=J.dM.prototype
C.e=J.bM.prototype
C.b=J.bp.prototype
C.X=J.bq.prototype
C.a2=W.cN.prototype
C.F=J.hZ.prototype
C.c=P.ca.prototype
C.a3=W.bd.prototype
C.G=W.ea.prototype
C.w=J.bQ.prototype
C.H=W.bi.prototype
C.I=W.d9.prototype
C.a4=new P.fD()
C.J=new P.fC()
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

C.Q=new P.hY()
C.l=new P.jb()
C.R=new P.jd()
C.k=new P.jU()
C.d=new A.bZ(0,"ColorSourceType.None")
C.j=new A.bZ(1,"ColorSourceType.Solid")
C.i=new A.bZ(2,"ColorSourceType.Texture2D")
C.h=new A.bZ(3,"ColorSourceType.TextureCube")
C.t=new P.b5(0)
C.T=new P.b5(5e6)
C.U=new P.hf("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.B=H.d(u([]),[P.e])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a1=new H.fL(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",u:"double",ae:"num",e:"String",U:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.N,args:[F.ac,P.u,P.u]},{func:1,ret:P.N,args:[D.A]},{func:1,ret:P.N,args:[F.ab]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.av]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.u},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.aa]]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.U,args:[W.X,P.e,P.e,W.bR]},{func:1,ret:P.U,args:[W.F]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.U,args:[W.aE]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:V.a0,args:[P.u]},{func:1,ret:-1,args:[P.p,[P.i,U.ah]]},{func:1,ret:-1,args:[P.p,[P.i,V.ao]]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:W.X,args:[W.F]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.T,args:[P.p]},{func:1,ret:P.U,args:[[P.i,D.aa]]},{func:1,ret:P.N,args:[P.e,,]},{func:1,ret:P.N,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:[P.I,P.e,P.e],args:[[P.I,P.e,P.e],P.e]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.ax]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.N,args:[P.be]},{func:1,ret:P.U,args:[V.bG]},{func:1,args:[,P.e]},{func:1,ret:P.N,args:[P.ae]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cu=null
$.lN=null
$.lp=!1
$.mQ=null
$.mI=null
$.mW=null
$.kA=null
$.kF=null
$.lz=null
$.ch=null
$.dp=null
$.dq=null
$.lq=!1
$.a3=C.k
$.ay=[]
$.bn=null
$.l6=null
$.lT=null
$.lS=null
$.dc=P.lc(P.e,P.bK)
$.lY=null
$.m1=null
$.cO=null
$.m5=null
$.mh=null
$.ml=null
$.mj=null
$.mk=null
$.je=null
$.mi=null
$.mo=null
$.m0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pz","n0",function(){return H.mP("_$dart_dartClosure")})
u($,"pA","lE",function(){return H.mP("_$dart_js")})
u($,"pG","n1",function(){return H.bg(H.iR({
toString:function(){return"$receiver$"}}))})
u($,"pH","n2",function(){return H.bg(H.iR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pI","n3",function(){return H.bg(H.iR(null))})
u($,"pJ","n4",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pM","n7",function(){return H.bg(H.iR(void 0))})
u($,"pN","n8",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pL","n6",function(){return H.bg(H.mc(null))})
u($,"pK","n5",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pP","na",function(){return H.bg(H.mc(void 0))})
u($,"pO","n9",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q5","lF",function(){return P.ol()})
u($,"pS","nb",function(){return P.oi()})
u($,"q6","nf",function(){return H.nT(H.cg(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"q8","nh",function(){return P.o6("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q9","ni",function(){return P.oK()})
u($,"q7","ng",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pZ","ne",function(){return Z.aM(0)})
u($,"pT","nc",function(){return Z.aM(511)})
u($,"q0","bA",function(){return Z.aM(1)})
u($,"q_","bz",function(){return Z.aM(2)})
u($,"pV","by",function(){return Z.aM(4)})
u($,"q1","bB",function(){return Z.aM(8)})
u($,"q2","bC",function(){return Z.aM(16)})
u($,"pW","ds",function(){return Z.aM(32)})
u($,"pX","dt",function(){return Z.aM(64)})
u($,"pY","nd",function(){return Z.aM(96)})
u($,"q3","cr",function(){return Z.aM(128)})
u($,"pU","bx",function(){return Z.aM(256)})
u($,"py","n_",function(){return new V.h0(1e-9)})
u($,"px","O",function(){return $.n_()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hN,Int32Array:H.hO,Int8Array:H.hP,Uint16Array:H.hQ,Uint32Array:H.hR,Uint8ClampedArray:H.dZ,CanvasPixelArray:H.dZ,Uint8Array:H.cM,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fu,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fv,HTMLBaseElement:W.cs,Blob:W.bW,HTMLBodyElement:W.bE,HTMLCanvasElement:W.bX,CanvasRenderingContext2D:W.cv,CDATASection:W.bF,CharacterData:W.bF,Comment:W.bF,ProcessingInstruction:W.bF,Text:W.bF,CSSNumericValue:W.cx,CSSUnitValue:W.cx,CSSPerspective:W.fM,CSSCharsetRule:W.a_,CSSConditionRule:W.a_,CSSFontFaceRule:W.a_,CSSGroupingRule:W.a_,CSSImportRule:W.a_,CSSKeyframeRule:W.a_,MozCSSKeyframeRule:W.a_,WebKitCSSKeyframeRule:W.a_,CSSKeyframesRule:W.a_,MozCSSKeyframesRule:W.a_,WebKitCSSKeyframesRule:W.a_,CSSMediaRule:W.a_,CSSNamespaceRule:W.a_,CSSPageRule:W.a_,CSSRule:W.a_,CSSStyleRule:W.a_,CSSSupportsRule:W.a_,CSSViewportRule:W.a_,CSSStyleDeclaration:W.cy,MSStyleCSSProperties:W.cy,CSS2Properties:W.cy,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fO,CSSUnparsedValue:W.fP,DataTransferItemList:W.fS,HTMLDivElement:W.aI,DOMException:W.fT,ClientRectList:W.dF,DOMRectList:W.dF,DOMRectReadOnly:W.dG,DOMStringList:W.fU,DOMTokenList:W.fV,Element:W.X,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cA,FileWriter:W.h4,HTMLFormElement:W.h8,Gamepad:W.aQ,History:W.hd,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.bo,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,Location:W.dR,MediaList:W.hG,MessagePort:W.cI,MIDIInputMap:W.hH,MIDIOutputMap:W.hJ,MimeType:W.aT,MimeTypeArray:W.hL,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.i0,RTCStatsReport:W.ia,HTMLSelectElement:W.id,SourceBuffer:W.aV,SourceBufferList:W.iq,SpeechGrammar:W.aW,SpeechGrammarList:W.ir,SpeechRecognitionResult:W.aX,Storage:W.iu,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ea,HTMLTableRowElement:W.iB,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cV,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iJ,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iN,TrackDefaultList:W.iO,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.ja,VideoTrackList:W.jq,WheelEvent:W.bi,Window:W.d9,DOMWindow:W.d9,Attr:W.da,CSSRuleList:W.jA,ClientRect:W.ew,DOMRect:W.ew,GamepadList:W.jP,NamedNodeMap:W.eO,MozNamedAttrMap:W.eO,SpeechRecognitionResultList:W.k2,StyleSheetList:W.k6,SVGLength:P.b8,SVGLengthList:P.hm,SVGNumber:P.bb,SVGNumberList:P.hW,SVGPointList:P.i2,SVGScriptElement:P.cQ,SVGStringList:P.iA,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iP,AudioBuffer:P.fy,AudioParamMap:P.fz,AudioTrackList:P.fB,AudioContext:P.bV,webkitAudioContext:P.bV,BaseAudioContext:P.bV,OfflineAudioContext:P.hX,WebGLBuffer:P.dy,WebGLProgram:P.e3,WebGL2RenderingContext:P.ca,WebGLShader:P.e6,WebGLTexture:P.ec,WebGLUniformLocation:P.el,SQLResultSetRowList:P.is})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(R.mT,[])
else R.mT([])})})()
//# sourceMappingURL=test.dart.js.map
