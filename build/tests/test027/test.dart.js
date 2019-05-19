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
a[c]=function(){a[c]=function(){H.pN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lo:function lo(){},
kL:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hr:function(){return new P.cb("No element")},
o5:function(){return new P.cb("Too many elements")},
o4:function(){return new P.cb("Too few elements")},
v:function v(a){this.a=a},
h6:function h6(){},
c4:function c4(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(){},
d7:function d7(){},
es:function es(){},
nX:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
co:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pu:function(a){return v.types[H.af(a)]},
pB:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iN},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
op:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.H(s,q)|32)>t)return}return parseInt(a,b)},
c7:function(a){return H.og(a)+H.lH(H.bV(a),0,null)},
og:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibR){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.H(t,0)===36?C.b.az(t,1):t)},
oh:function(){if(!!self.location)return self.location.href
return},
mo:function(a){var u,t,s,r,q
H.kR(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oq:function(a){var u,t,s,r=H.d([],[P.o])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aZ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aG(s))}return H.mo(r)},
mp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.oq(a)}return H.mo(a)},
or:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.aj(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oo:function(a){var u=H.c6(a).getFullYear()+0
return u},
om:function(a){var u=H.c6(a).getMonth()+1
return u},
oi:function(a){var u=H.c6(a).getDate()+0
return u},
oj:function(a){var u=H.c6(a).getHours()+0
return u},
ol:function(a){var u=H.c6(a).getMinutes()+0
return u},
on:function(a){var u=H.c6(a).getSeconds()+0
return u},
ok:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.aG(a))},
h:function(a,b){if(a==null)J.aH(a)
throw H.c(H.ci(a,b))},
ci:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.af(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.e7(b,s)},
pm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
aG:function(a){return new P.aP(!0,a,null,null)},
pi:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.e3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nl})
u.name=""}else u.toString=H.nl
return u},
nl:function(){return J.at(this.dartException)},
u:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bm(a))},
bg:function(a){var u,t,s,r,q,p
a=H.nj(a.replace(String({}),'$receiver$'))
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
mz:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mj:function(a,b){return new H.i3(a,b==null?null:b.method)},
lp:function(a,b){var u=b==null,t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.la(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aZ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lp(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mj(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.np()
q=$.nq()
p=$.nr()
o=$.ns()
n=$.nv()
m=$.nw()
l=$.nu()
$.nt()
k=$.ny()
j=$.nx()
i=r.ao(u)
if(i!=null)return f.$1(H.lp(H.K(u),i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.lp(H.K(u),i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mj(H.K(u),i))}}return f.$1(new H.jd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ef()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ef()
return a},
cm:function(a){var u
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
pq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pA:function(a,b,c,d,e,f){H.e(a,"$ibI")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pA)
a.$identity=u
return u},
nW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iC().constructor.prototype):Object.create(new H.cr(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m2(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pu,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m1:H.le
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m2(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nT:function(a,b,c,d){var u=H.le
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m2:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nT(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
return new Function(r+H.m(q==null?$.cs=H.fO("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
return new Function(r+H.m(q==null?$.cs=H.fO("self"):q)+"."+H.m(u)+"("+o+");}")()},
nU:function(a,b,c,d){var u=H.le,t=H.m1
switch(b?-1:a){case 0:throw H.c(H.ov("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nV:function(a,b){var u,t,s,r,q,p,o,n=$.cs
if(n==null)n=$.cs=H.fO("self")
u=$.m0
if(u==null)u=$.m0=H.fO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nU(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()},
lL:function(a,b,c,d,e,f,g){return H.nW(a,b,H.af(c),d,!!e,!!f,g)},
le:function(a){return a.a},
m1:function(a){return a.c},
fO:function(a){var u,t,s,r=new H.cr("self","target","receiver","name"),q=J.lm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.pe("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
nh:function(a,b){throw H.c(H.b0(a,H.co(H.K(b).substring(2))))},
pI:function(a,b){throw H.c(H.nS(a,H.co(H.K(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.nh(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.pI(a,b)},
kR:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
ne:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.nh(a,b)},
na:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
fx:function(a,b){var u
if(typeof a=="function")return!0
u=H.na(J.W(a))
if(u==null)return!1
return H.mW(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lE)return a
$.lE=!0
try{if(H.fx(a,b))return a
u=H.l5(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lE=!1}},
lM:function(a,b){if(a!=null&&!H.lK(a,b))H.u(H.b0(a,H.l5(b)))
return a},
b0:function(a,b){return new H.j1("TypeError: "+P.dK(a)+": type '"+H.n1(a)+"' is not a subtype of type '"+b+"'")},
nS:function(a,b){return new H.fP("CastError: "+P.dK(a)+": type '"+H.n1(a)+"' is not a subtype of type '"+b+"'")},
n1:function(a){var u,t=J.W(a)
if(!!t.$icv){u=H.na(t)
if(u!=null)return H.l5(u)
return"Closure"}return H.c7(a)},
pe:function(a){throw H.c(new H.jC(a))},
pN:function(a){throw H.c(new P.fZ(H.K(a)))},
ov:function(a){return new H.im(a)},
nb:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
qu:function(a,b,c){return H.cn(a["$a"+H.m(c)],H.bV(b))},
bU:function(a,b,c,d){var u
H.K(c)
H.af(d)
u=H.cn(a["$a"+H.m(c)],H.bV(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.K(b)
H.af(c)
u=H.cn(a["$a"+H.m(b)],H.bV(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.af(b)
u=H.bV(a)
return u==null?null:u[b]},
l5:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lH(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.p7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p7:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.T)p+=" extends "+H.bT(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bT(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bT(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pp(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bT(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lH:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lJ:function(a,b,c,d){var u,t
H.K(b)
H.kR(c)
H.K(d)
if(a==null)return!1
u=H.bV(a)
t=J.W(a)
if(t[b]==null)return!1
return H.n4(H.cn(t[d],u),null,c,null)},
k:function(a,b,c,d){H.K(b)
H.kR(c)
H.K(d)
if(a==null)return a
if(H.lJ(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lH(c,0,null),v.mangledGlobalNames)))},
n4:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qs:function(a,b,c){return a.apply(b,H.cn(J.W(b)["$a"+H.m(c)],H.bV(b)))},
nd:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="P"||a===-1||a===-2||H.nd(u)}return!1},
lK:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="P"||b===-1||b===-2||H.nd(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fx(a,b)}u=J.W(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lK(a,b))throw H.c(H.b0(a,H.l5(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.mW(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cn(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n4(H.cn(m,u),b,p,d)},
mW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pF(h,b,g,d)},
pF:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qt:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
pD:function(a){var u,t,s,r,q=H.K($.nc.$1(a)),p=$.kK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.n3.$2(a,q))
if(q!=null){p=$.kK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l4(u)
$.kK[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kP[q]=u
return u}if(s==="-"){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ng(a,u)
if(s==="*")throw H.c(P.jc(q))
if(v.leafTags[q]===true){r=H.l4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ng(a,u)},
ng:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l4:function(a){return J.lO(a,!1,null,!!a.$iN)},
pE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l4(u)
else return J.lO(u,c,null,null)},
py:function(){if(!0===$.lN)return
$.lN=!0
H.pz()},
pz:function(){var u,t,s,r,q,p,o,n
$.kK=Object.create(null)
$.kP=Object.create(null)
H.px()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ni.$1(q)
if(p!=null){o=H.pE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
px:function(){var u,t,s,r,q,p,o=C.K()
o=H.cg(C.L,H.cg(C.M,H.cg(C.z,H.cg(C.z,H.cg(C.N,H.cg(C.O,H.cg(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nc=new H.kM(r)
$.n3=new H.kN(q)
$.ni=new H.kO(p)},
cg:function(a,b){return a(b)||b},
o7:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pL:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
po:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lQ:function(a,b,c){var u=H.pM(a,b,c)
return u},
pM:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nj(b),'g'),H.po(c))},
fT:function fT(){},
fU:function fU(a,b,c,d){var _=this
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
i3:function i3(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
la:function la(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cv:function cv(){},
iM:function iM(){},
iC:function iC(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a){this.a=a},
fP:function fP(a){this.a=a},
im:function im(a){this.a=a},
jC:function jC(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hz:function hz(a,b){this.a=a
this.$ti=b},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
of:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ci(b,a))},
p5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pm(a,b,c))
return b},
cK:function cK(){},
bN:function bN(){},
e_:function e_(){},
cL:function cL(){},
e0:function e0(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
e1:function e1(){},
cM:function cM(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
pp:function(a){return J.m9(a?Object.keys(a):[],null)},
pH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lN==null){H.py()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jc("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lS()]
if(r!=null)return r
r=H.pD(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lS(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
o6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ld(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.m9(new Array(a),b)},
m9:function(a,b){return J.lm(H.d(a,[b]))},
lm:function(a){H.kR(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
pr:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
ck:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
fy:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
ps:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bR.prototype
return a},
pt:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bR.prototype
return a},
ds:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bR.prototype
return a},
cl:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
nH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pr(a).p(a,b)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).A(a,b)},
lU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pt(a).v(a,b)},
nI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ps(a).u(a,b)},
lV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pB(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ck(a).j(a,b)},
lc:function(a,b,c){return J.fy(a).n(a,b,c)},
nJ:function(a,b){return J.ds(a).H(a,b)},
nK:function(a,b,c){return J.cl(a).ih(a,b,c)},
nL:function(a,b,c,d){return J.cl(a).jc(a,b,c,d)},
nM:function(a,b){return J.ds(a).a2(a,b)},
fB:function(a,b){return J.fy(a).M(a,b)},
nN:function(a,b,c,d){return J.cl(a).jy(a,b,c,d)},
lW:function(a,b){return J.fy(a).O(a,b)},
nO:function(a){return J.cl(a).gjj(a)},
lX:function(a){return J.cl(a).gcE(a)},
dw:function(a){return J.W(a).gK(a)},
bB:function(a){return J.fy(a).gV(a)},
aH:function(a){return J.ck(a).gl(a)},
lY:function(a){return J.fy(a).k5(a)},
nP:function(a,b){return J.cl(a).k8(a,b)},
nQ:function(a,b,c){return J.ds(a).D(a,b,c)},
nR:function(a){return J.ds(a).ki(a)},
at:function(a){return J.W(a).i(a)},
a:function a(){},
hs:function hs(){},
dP:function dP(){},
dQ:function dQ(){},
i7:function i7(){},
bR:function bR(){},
bq:function bq(){},
aR:function aR(a){this.$ti=a},
ln:function ln(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bM:function bM(){},
dO:function dO(){},
dN:function dN(){},
bp:function bp(){}},P={
oI:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pf()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ch(new P.jE(s),1)).observe(u,{childList:true})
return new P.jD(s,u,t)}else if(self.setImmediate!=null)return P.pg()
return P.ph()},
oJ:function(a){self.scheduleImmediate(H.ch(new P.jF(H.n(a,{func:1,ret:-1})),0))},
oK:function(a){self.setImmediate(H.ch(new P.jG(H.n(a,{func:1,ret:-1})),0))},
oL:function(a){P.lv(C.t,H.n(a,{func:1,ret:-1}))},
lv:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.ac(a.a,1000)
return P.oR(u<0?0:u,b)},
my:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.f.ac(a.a,1000)
return P.oS(u<0?0:u,b)},
oR:function(a,b){var u=new P.fe()
u.fH(a,b)
return u},
oS:function(a,b){var u=new P.fe()
u.fI(a,b)
return u},
oM:function(a,b){var u,t,s
b.a=1
try{a.f_(new P.jQ(b),new P.jR(b),null)}catch(s){u=H.al(s)
t=H.cm(s)
P.pJ(new P.jS(b,u,t))}},
mL:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaN")
if(u>=4){t=b.cl()
b.a=a.a
b.c=a.c
P.dc(b,t)}else{t=H.e(b.c,"$ibj")
b.a=2
b.c=a
a.dP(t)}},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iap")
g=g.b
r=s.a
q=s.b
g.toString
P.kA(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dc(h.a,b)}g=h.a
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
if(m){H.e(o,"$iap")
g=g.b
r=o.a
q=o.b
g.toString
P.kA(i,i,g,r,q)
return}l=$.a4
if(l!=n)$.a4=n
else l=i
g=b.c
if(g===8)new P.jW(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jV(u,b,o).$0()}else if((g&2)!==0)new P.jU(h,u,b).$0()
if(l!=null)$.a4=l
g=u.b
if(!!J.W(g).$icB){if(g.a>=4){k=H.e(q.c,"$ibj")
q.c=null
b=q.bt(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mL(g,q)
return}}j=b.b
k=H.e(j.c,"$ibj")
j.c=null
b=j.bt(k)
g=u.a
r=u.b
if(!g){H.B(r,H.t(j,0))
j.a=4
j.c=r}else{H.e(r,"$iap")
j.a=8
j.c=r}h.a=j
g=j}},
pa:function(a,b){if(H.fx(a,{func:1,args:[P.T,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.T,P.ay]})
if(H.fx(a,{func:1,args:[P.T]}))return H.n(a,{func:1,ret:null,args:[P.T]})
throw H.c(P.ld(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p9:function(){var u,t
for(;u=$.cf,u!=null;){$.dr=null
t=u.b
$.cf=t
if(t==null)$.dq=null
u.a.$0()}},
pd:function(){$.lF=!0
try{P.p9()}finally{$.dr=null
$.lF=!1
if($.cf!=null)$.lT().$1(P.n5())}},
n0:function(a){var u=new P.eB(H.n(a,{func:1,ret:-1}))
if($.cf==null){$.cf=$.dq=u
if(!$.lF)$.lT().$1(P.n5())}else $.dq=$.dq.b=u},
pc:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cf
if(u==null){P.n0(a)
$.dr=$.dq
return}t=new P.eB(a)
s=$.dr
if(s==null){t.b=u
$.cf=$.dr=t}else{t.b=s.b
$.dr=s.b=t
if(t.b==null)$.dq=t}},
pJ:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a4
if(C.k===u){P.kC(t,t,C.k,a)
return}u.toString
P.kC(t,t,u,H.n(u.cz(a),s))},
mx:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a4
if(u===C.k){u.toString
return P.lv(a,b)}return P.lv(a,H.n(u.cz(b),t))},
oz:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a4
if(u===C.k){u.toString
return P.my(a,b)}t=u.e5(b,P.be)
$.a4.toString
return P.my(a,H.n(t,s))},
kA:function(a,b,c,d,e){var u={}
u.a=d
P.pc(new P.kB(u,e))},
mX:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a4
if(t===c)return d.$0()
$.a4=c
u=t
try{t=d.$0()
return t}finally{$.a4=u}},
mY:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a4
if(t===c)return d.$1(e)
$.a4=c
u=t
try{t=d.$1(e)
return t}finally{$.a4=u}},
pb:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a4
if(t===c)return d.$2(e,f)
$.a4=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a4=u}},
kC:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cz(d):c.jk(d,-1)
P.n0(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fe:function fe(){this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
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
jP:function jP(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX:function jX(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iF:function iF(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
cU:function cU(){},
iG:function iG(){},
be:function be(){},
ap:function ap(a,b){this.a=a
this.b=b},
kt:function kt(){},
kB:function kB(a,b){this.a=a
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
o9:function(a,b){return new H.aS([a,b])},
lq:function(a,b){return new H.aS([a,b])},
ob:function(a){return H.pq(a,new H.aS([null,null]))},
dT:function(a){return new P.k0([a])},
lB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oQ:function(a,b,c){var u=new P.eQ(a,b,[c])
u.c=a.e
return u},
o3:function(a,b,c){var u,t
if(P.lG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aA,a)
try{P.p8(a,u)}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=P.mu(b,H.ne(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
ll:function(a,b,c){var u,t
if(P.lG(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.aA,a)
try{t=u
t.a=P.mu(t.a,a,", ")}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lG:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
p8:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.m(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.E();o=n,n=m){m=u.gL(u);++s
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
oa:function(a,b,c){var u=P.o9(b,c)
a.O(0,new P.hB(u,b,c))
return u},
ma:function(a,b){var u,t,s=P.dT(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t)s.h(0,H.B(a[t],b))
return s},
lr:function(a){var u,t={}
if(P.lG(a))return"{...}"
u=new P.ak("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.lW(a,new P.hF(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k0:function k0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cc:function cc(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(){},
z:function z(){},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
ag:function ag(){},
kl:function kl(){},
hG:function hG(){},
et:function et(a,b){this.a=a
this.$ti=b},
k7:function k7(){},
eR:function eR(){},
fk:function fk(){},
oD:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oE(!1,b,c,d)
return},
oE:function(a,b,c,d){var u,t,s=$.nz()
if(s==null)return
u=0===c
if(u&&!0)return P.ly(s,b)
t=b.length
d=P.bu(c,d,t)
if(u&&d===t)return P.ly(s,b)
return P.ly(s,b.subarray(c,d))},
ly:function(a,b){if(P.oG(b))return
return P.oH(a,b)},
oH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
oG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
n_:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.ck(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bW()
if((s&127)!==s)return t-b}return c-b},
m_:function(a,b,c,d,e,f){if(C.f.bn(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fL:function fL(){},
fM:function fM(){},
c_:function c_(){},
bF:function bF(){},
h8:function h8(){},
ho:function ho(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(a){this.a=a},
jl:function jl(){},
jn:function jn(){},
kr:function kr(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
kq:function kq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fA:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.f]})
u=H.op(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
o1:function(a){if(a instanceof H.cv)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
oc:function(a,b,c){var u,t
H.B(b,c)
u=J.o6(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
mb:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bB(a);u.E();)C.a.h(s,H.B(u.gL(u),c))
if(b)return s
return H.k(J.lm(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u,t=P.o
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bu(b,c,u)
return H.mp(b>0||c<u?C.a.fe(a,b,c):a)}if(!!J.W(a).$icM)return H.or(a,b,P.bu(b,c,a.length))
return P.ox(a,b,c)},
ox:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.aj(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.aj(c,b,J.aH(a),q,q))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.E();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.aj(c,b,s,q,q))
r.push(t.gL(t))}return H.mp(r)},
ot:function(a){return new H.ht(a,H.o7(a,!1,!0,!1))},
mu:function(a,b,c){var u=J.bB(b)
if(!u.E())return a
if(c.length===0){do a+=H.m(u.gL(u))
while(u.E())}else{a+=H.m(u.gL(u))
for(;u.E();)a=a+c+H.m(u.gL(u))}return a},
mB:function(){var u=H.oh()
if(u!=null)return P.oC(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fl:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.o],"$ab")
if(c===C.l){u=$.nF().b
if(typeof b!=="string")H.u(H.aG(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ao(c,"c_",0))
t=c.gjx().cF(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG:function(a){if(a>=10)return""+a
return"0"+a},
m3:function(a,b){return new P.b5(1e6*b+1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o1(a)},
dy:function(a){return new P.aP(!1,null,null,a)},
ld:function(a,b,c){return new P.aP(!0,a,b,c)},
e7:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c){if(0>a||a>c)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
lt:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.af(e==null?J.aH(b):e)
return new P.hq(u,!0,a,c,"Index out of range")},
J:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
mt:function(a){return new P.cb(a)},
bm:function(a){return new P.fS(a)},
w:function(a){return new P.eJ(a)},
a8:function(a,b,c){return new P.hi(a,b,c)},
od:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.o]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lP:function(a){H.pH(a)},
oC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.H(a,4)^58)*3|C.b.H(a,0)^100|C.b.H(a,1)^97|C.b.H(a,2)^116|C.b.H(a,3)^97)>>>0
if(u===0)return P.mA(e<e?C.b.D(a,0,e):a,5,f).gf4()
else if(u===32)return P.mA(C.b.D(a,5,e),0,f).gf4()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.o])
C.a.n(s,0,0)
C.a.n(s,1,-1)
C.a.n(s,2,-1)
C.a.n(s,7,-1)
C.a.n(s,3,0)
C.a.n(s,4,0)
C.a.n(s,5,e)
C.a.n(s,6,e)
if(P.mZ(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ko()
if(r>=0)if(P.mZ(a,0,r,20,s)===20)s[7]=r
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ak(a,"..",o)))j=n>o+2&&C.b.ak(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ak(a,"file",0)){if(q<=0){if(!C.b.ak(a,"/",o)){i="file:///"
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
a=C.b.b2(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ak(a,"http",0)){if(t&&p+3===o&&C.b.ak(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b2(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ak(a,"https",0)){if(t&&p+4===o&&C.b.ak(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b2(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.D(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ka(a,r,q,p,o,n,m,k)}return P.oT(a,0,e,r,q,p,o,n,m,k)},
mD:function(a){var u=P.f
return C.a.jC(H.d(a.split("&"),[u]),P.lq(u,u),new P.jj(C.l),[P.H,P.f,P.f])},
oB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jg(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a2(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fA(C.b.D(a,s,t),n,n)
if(typeof p!=="number")return p.f9()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fA(C.b.D(a,s,c),n,n)
if(typeof p!=="number")return p.f9()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a2(a,r)
if(n===58){if(r===b){++r
if(C.b.a2(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaF(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oB(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aZ(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oT:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p_(a,b,d)
else{if(d===b)P.dm(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p0(a,u,e-1):""
s=P.oX(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.oZ(P.fA(C.b.D(a,r,g),new P.km(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oY(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lC(a,h+1,i,n):n
return new P.cd(j,t,s,q,p,o,i<c?P.oW(a,i+1,c):n)},
mP:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dm:function(a,b,c){throw H.c(P.a8(c,a,b))},
oZ:function(a,b){if(a!=null&&a===P.mP(b))return
return a},
oX:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a2(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a2(a,u)!==93)P.dm(a,b,"Missing end `]` to match `[` in host")
P.mC(a,b+1,u)
return C.b.D(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.b.a2(a,t)===58){P.mC(a,b,c)
return"["+a+"]"}return P.p2(a,b,c)},
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a2(a,u)
if(q===37){p=P.mV(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.D(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dm(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a2(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.D(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mQ(q)
u+=l
t=u}}}}if(s==null)return C.b.D(a,b,c)
if(t<c){n=C.b.D(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p_:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mS(C.b.H(a,b)))P.dm(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dm(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.D(a,b,c)
return P.oU(t?a.toLowerCase():a)},
oU:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p0:function(a,b,c){return P.dn(a,b,c,C.a_,!1)},
oY:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dn(a,b,c,C.E,!0):C.n.kr(d,new P.kn(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ab(u,"/"))u="/"+u
return P.p1(u,e,f)},
p1:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ab(a,"/"))return P.p3(a,!u||c)
return P.p4(a)},
lC:function(a,b,c,d){var u,t={}
H.k(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.dy("Both query and queryParameters specified"))
return P.dn(a,b,c,C.p,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.O(0,new P.ko(new P.kp(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oW:function(a,b,c){return P.dn(a,b,c,C.p,!0)},
mV:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a2(a,b+1)
t=C.b.a2(a,p)
s=H.kL(u)
r=H.kL(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aZ(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c8(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.D(a,b,b+3).toUpperCase()
return},
mQ:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.b.H(o,a>>>4))
C.a.n(t,2,C.b.H(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iy(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.H(o,p>>>4))
C.a.n(t,q+2,C.b.H(o,p&15))
q+=3}}return P.cV(t,0,null)},
dn:function(a,b,c,d,e){var u=P.mU(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.D(a,b,c):u},
mU:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
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
else{if(q===37){o=P.mV(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dm(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a2(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mQ(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.D(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.D(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mT:function(a){if(C.b.ab(a,"."))return!0
return C.b.eE(a,"/.")!==-1},
p4:function(a){var u,t,s,r,q,p,o
if(!P.mT(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a_(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p3:function(a,b){var u,t,s,r,q,p
if(!P.mT(a))return!b?P.mR(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaF(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaF(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mR(u[0]))}return C.a.m(u,"/")},
mR:function(a){var u,t,s,r=a.length
if(r>=2&&P.mS(J.nJ(a,0)))for(u=1;u<r;++u){t=C.b.H(a,u)
if(t===58)return C.b.D(a,0,u)+"%3A"+C.b.az(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oV:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dy("Invalid URL encoding"))}}return u},
lD:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.D(a,b,c)
else r=new H.v(C.b.D(a,b,c))}else{r=H.d([],[P.o])
for(s=a.length,q=b;q<c;++q){t=C.b.H(a,q)
if(t>127)throw H.c(P.dy("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dy("Truncated URI"))
C.a.h(r,P.oV(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.o],"$ab")
return new P.jm(!1).cF(r)},
mS:function(a){var u=a|32
return 97<=u&&u<=122},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.o])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a8(m,a,t))}}if(s<0&&t>b)throw H.c(P.a8(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaF(l)
if(r!==44||t!==p+7||!C.b.ak(a,"base64",p+1))throw H.c(P.a8("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jN(0,a,o,u)
else{n=P.mU(a,o,u,C.p,!0)
if(n!=null)a=C.b.b2(a,o,u,n)}return new P.jf(a,l,c)},
p6:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.od(22,new P.kx(),P.V),n=new P.kw(o),m=new P.ky(),l=new P.kz(),k=H.e(n.$2(0,225),"$iV")
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
mZ:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nG()
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
q:function q(){},
b5:function b5(a){this.a=a},
h4:function h4(){},
h5:function h5(){},
bH:function bH(){},
fE:function fE(){},
e3:function e3(){},
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
hq:function hq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
cb:function cb(a){this.a=a},
fS:function fS(a){this.a=a},
i6:function i6(){},
ef:function ef(){},
fZ:function fZ(a){this.a=a},
eJ:function eJ(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
o:function o(){},
i:function i(){},
b6:function b6(){},
b:function b(){},
H:function H(){},
P:function P(){},
ac:function ac(){},
T:function T(){},
ay:function ay(){},
f:function f(){},
ak:function ak(a){this.a=a},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jK:function jK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pl:function(a){var u,t=J.W(a)
if(!!t.$ibo){u=t.ge9(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
pk:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.lq(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.K(t[r])
u.n(0,q,a[q])}return u},
pj:function(a){var u={}
a.O(0,new P.kD(u))
return u},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k1:function k1(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hw:function hw(){},
bc:function bc(){},
i4:function i4(){},
ib:function ib(){},
cR:function cR(){},
iJ:function iJ(){},
r:function r(){},
bf:function bf(){},
iZ:function iZ(){},
eO:function eO(){},
eP:function eP(){},
eZ:function eZ(){},
f_:function f_(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
V:function V(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(a){this.a=a},
fJ:function fJ(){},
bW:function bW(){},
i5:function i5(){},
eC:function eC(){},
dA:function dA(){},
dM:function dM(){},
e6:function e6(){},
e8:function e8(){},
ca:function ca(){},
ea:function ea(){},
eh:function eh(){},
er:function er(){},
iB:function iB(){},
f6:function f6(){},
f7:function f7(){}},W={
lZ:function(){var u=document.createElement("a")
return u},
lf:function(){var u=document.createElement("canvas")
return u},
o_:function(a,b,c){var u=document.body,t=(u&&C.x).an(u,a,b,c)
t.toString
u=W.F
u=new H.d9(new W.as(t),H.n(new W.h7(),{func:1,ret:P.U,args:[u]}),[u])
return H.e(u.gaR(u),"$iX")},
o0:function(a){H.e(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cl(a)
t=u.geX(a)
if(typeof t==="string")r=u.geX(a)}catch(s){H.al(s)}return r},
o2:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icE")
try{s.type=a}catch(u){H.al(u)}return s},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mN:function(a,b,c,d){var u=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.n2(new W.jO(c),W.p)
if(u!=null&&!0)J.nL(a,b,u,!1)
return new W.jN(a,b,u,!1,[e])},
mM:function(a){var u=W.lZ(),t=window.location
u=new W.bS(new W.k6(u,t))
u.fs(a)
return u},
oN:function(a,b,c,d){H.e(a,"$iX")
H.K(b)
H.K(c)
H.e(d,"$ibS")
return!0},
oO:function(a,b,c,d){var u,t,s
H.e(a,"$iX")
H.K(b)
H.K(c)
u=H.e(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mO:function(){var u=P.f,t=P.ma(C.u,u),s=H.t(C.u,0),r=H.n(new W.ki(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kh(t,P.dT(u),P.dT(u),P.dT(u),null)
t.fG(null,new H.hJ(C.u,r,[s,u]),q,null)
return t},
n2:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a4
if(u===C.k)return a
return u.e5(a,b)},
y:function y(){},
fC:function fC(){},
dx:function dx(){},
fD:function fD(){},
cq:function cq(){},
bX:function bX(){},
bC:function bC(){},
bZ:function bZ(){},
cu:function cu(){},
bD:function bD(){},
cw:function cw(){},
fV:function fV(){},
Z:function Z(){},
cx:function cx(){},
fW:function fW(){},
b3:function b3(){},
b4:function b4(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
aI:function aI(){},
h1:function h1(){},
dH:function dH(){},
dI:function dI(){},
h2:function h2(){},
h3:function h3(){},
jI:function jI(a,b){this.a=a
this.b=b},
X:function X(){},
h7:function h7(){},
p:function p(){},
j:function j(){},
aJ:function aJ(){},
cA:function cA(){},
hd:function hd(){},
hh:function hh(){},
aQ:function aQ(){},
hm:function hm(){},
c3:function c3(){},
bo:function bo(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dU:function dU(){},
hP:function hP(){},
cI:function cI(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
hS:function hS(){},
hT:function hT(a){this.a=a},
aT:function aT(){},
hU:function hU(){},
ah:function ah(){},
as:function as(a){this.a=a},
F:function F(){},
cN:function cN(){},
aU:function aU(){},
i9:function i9(){},
ik:function ik(){},
il:function il(a){this.a=a},
io:function io(){},
aV:function aV(){},
iz:function iz(){},
aW:function aW(){},
iA:function iA(){},
aX:function aX(){},
iD:function iD(){},
iE:function iE(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
eg:function eg(){},
iK:function iK(){},
iL:function iL(){},
cX:function cX(){},
aY:function aY(){},
aL:function aL(){},
iN:function iN(){},
iO:function iO(){},
iT:function iT(){},
aZ:function aZ(){},
b_:function b_(){},
iX:function iX(){},
iY:function iY(){},
bQ:function bQ(){},
jk:function jk(){},
jA:function jA(){},
bi:function bi(){},
da:function da(){},
db:function db(){},
jJ:function jJ(){},
eE:function eE(){},
jY:function jY(){},
eW:function eW(){},
kb:function kb(){},
kf:function kf(){},
jH:function jH(){},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lA:function lA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jO:function jO(a){this.a=a},
bS:function bS(a){this.a=a},
G:function G(){},
e2:function e2(a){this.a=a},
i1:function i1(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(){},
k8:function k8(){},
k9:function k9(){},
kh:function kh(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ki:function ki(){},
kg:function kg(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
k6:function k6(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
ks:function ks(a){this.a=a},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
di:function di(){},
dj:function dj(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
dk:function dk(){},
dl:function dl(){},
ff:function ff(){},
fg:function fg(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){}},O={
lg:function(a){var u=new O.a5([a])
u.bq(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
mc:function(){var u,t,s=new O.dY()
s.sfQ(O.lg(V.av))
s.e.b4(s.ghl(),s.ghn())
u=new O.b9(s,"emission")
u.c=C.d
u.f=new V.a6(0,0,0)
s.f=u
u=new O.b9(s,"ambient")
u.c=C.d
u.f=new V.a6(0,0,0)
s.r=u
u=new O.b9(s,"diffuse")
u.c=C.d
u.f=new V.a6(0,0,0)
s.x=u
u=new O.b9(s,"invDiffuse")
u.c=C.d
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hO(s,"specular")
u.c=C.d
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hL(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.b9(s,"reflect")
u.c=C.d
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hN(s,"refract")
u.c=C.d
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hK(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dS()
u.bq(D.a9)
u.sfu(H.d([],[D.bG]))
u.sfz(H.d([],[D.e5]))
u.sfA(H.d([],[D.ee]))
u.sfB(H.d([],[D.ek]))
u.sfC(H.d([],[D.el]))
u.sfD(H.d([],[D.em]))
u.ch=u.Q=null
u.de(u.ghj(),u.ghT(),u.ghX())
s.dx=u
t=u.Q
u=t==null?u.Q=D.O():t
u.h(0,s.gij())
u=s.dx
t=u.ch
u=t==null?u.ch=D.O():t
u.h(0,s.gaT())
s.dy=null
return s},
dY:function dY(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ec:function ec(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
lk:function(){var u=new E.aq()
u.a=""
u.b=!0
u.sfq(0,O.lg(E.aq))
u.y.b4(u.gjO(),u.gjR())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saa(0,null)
return u},
ou:function(a,b){var u=new E.ig(a)
u.fn(a,b)
return u},
oy:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibZ)return E.mw(a,!0,!0,!0,!1)
u=W.lf()
t=u.style
t.width="100%"
t.height="100%"
s.gcE(a).h(0,u)
return E.mw(u,!0,!0,!0,!1)},
mw:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.en(),j=H.e(C.m.dc(a,"webgl2",P.ob(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.u(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ou(j,a)
u=new T.iQ(j)
H.af(j.getParameter(3379))
u.c=H.af(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eu(a)
t=new X.hv()
t.c=new X.aD(!1,!1,!1)
t.si9(P.dT(P.o))
u.b=t
t=new X.hV(u)
t.f=0
t.r=V.bt()
t.x=V.bt()
t.ch=t.Q=1
u.c=t
t=new X.hD(u)
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
u.sh1(H.d([],[[P.cU,P.T]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghv(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghB(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.ghp(),o),!1,p))
t=u.z
n=W.b7
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghF(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghD(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghJ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghN(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghL(),q),!1,r))
n=u.z
m=W.bi;(n&&C.a).h(n,W.ab(a,H.K(W.o0(a)),H.n(u.ghP(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.ghx(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghz(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghR(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.gi6(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.gi2(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.gi4(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aB(Date.now(),!1)
k.cy=0
k.dR()
return k},
fN:function fN(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iS:function iS(a){this.a=a}},Z={
lz:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.ez(b,u)},
aM:function(a){return new Z.bh(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eA:function eA(a){this.a=a},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
O:function(){var u=new D.c1()
u.sal(null)
u.saX(null)
u.c=null
u.d=0
return u},
fQ:function fQ(){},
c1:function c1(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
A:function A(){this.b=null},
bK:function bK(a){this.b=null
this.$ti=a},
bL:function bL(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dS:function dS(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ee:function ee(){},
ek:function ek(){},
el:function el(){},
em:function em(){}},X={dC:function dC(a,b){this.a=a
this.b=b},dR:function dR(a,b){this.a=a
this.b=b},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},dV:function dV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hD:function hD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hV:function hV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ia:function ia(){},ep:function ep(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iW:function iW(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eu:function eu(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m7:function(a){var u=new X.hj(),t=new V.ad(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lu()
u.r=t
return u},
ls:function(a){var u,t,s=new X.e4()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gt().h(0,s.gfJ())
t=new D.I("mover",u,s.b,[U.ai])
t.b=!0
s.a6(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.M().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.q])
t.b=!0
s.a6(t)}t=s.d
if(!(Math.abs(t-0.1)<$.M().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.q])
t.b=!0
s.a6(t)}t=s.e
if(!(Math.abs(t-2000)<$.M().a)){s.e=2000
t=new D.I("far",t,2000,[P.q])
t.b=!0
s.a6(t)}return s},
fK:function fK(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){},
hj:function hj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){this.b=this.a=null},
e4:function e4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){}},V={
lb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bn(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ap("null",c)
return C.b.ap(C.e.f0(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
cj:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.S(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ap(u[p],s))}return u},
dt:function(a){return C.e.kf(Math.pow(2,C.W.cQ(Math.log(H.pi(a))/Math.log(2))))},
c5:function(){var u=$.mi
return u==null?$.mi=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mh:function(a,b,c){return V.ba(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
me:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
mf:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
mg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
md:function(a,b,c){var u=c.w(0,Math.sqrt(c.F(c))),t=b.aL(u),s=t.w(0,Math.sqrt(t.F(t))),r=u.aL(s),q=new V.L(a.a,a.b,a.c),p=s.U(0).F(q),o=r.U(0).F(q),n=u.U(0).F(q)
return V.ba(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.mm
return u==null?$.mm=new V.a7(0,0):u},
mn:function(){var u=$.cO
return u==null?$.cO=new V.a0(0,0,0):u},
lu:function(){var u=$.mr
return u==null?$.mr=V.mq(0,0,1,1):u},
mq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cQ(a,b,c,d)},
d8:function(){var u=$.mI
return u==null?$.mI=new V.L(0,0,0):u},
mJ:function(){var u=$.mH
return u==null?$.mH=new V.L(0,1,0):u},
mK:function(){var u=$.jo
return u==null?$.jo=new V.L(0,0,1):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.H(a,0)
t=C.b.H(b,0)
s=new V.ie()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ip()
u.fo(a)
return u},
iV:function(){var u=new V.iU(),t=P.f
u.siA(new H.aS([t,V.cT]))
u.siD(new H.aS([t,V.cZ]))
u.c=null
return u},
bl:function bl(){},
aC:function aC(){},
dW:function dW(){},
aw:function aw(){this.a=null},
ie:function ie(){this.b=this.a=null},
ip:function ip(){this.a=null},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.b=a
this.c=null},
iU:function iU(){this.c=this.b=this.a=null},
d_:function d_(a){this.b=a
this.a=this.c=null},
pK:function(a){P.oz(C.T,new V.l6(a))},
ow:function(a){var u=new V.iu()
u.fp(a,!0)
return u},
bE:function bE(){},
l6:function l6(a){this.a=a},
h_:function h_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i8:function i8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ic:function ic(a){this.a=a
this.c=null},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a},
nf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2=34067,b3="modifiers",b4=V.ow("Test 027"),b5=W.lf()
b5.className="pageLargeCanvas"
b5.id=b0
b4.a.appendChild(b5)
u=[P.f]
b4.e1(H.d(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],u))
b4.jb(H.d(["shapes"],u))
b4.e1(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.u(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.oy(t,!0,!0,!0,!1)
r=U.m8()
q=new U.e9()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.sf6(0)
q.seQ(0,0)
q.seV(0)
p=q.d
if(!(Math.abs(p-0.1)<$.M().a)){q.d=0.1
p=new D.I("deltaYaw",p,0.1,[P.q])
p.b=!0
q.J(p)}p=q.e
if(!(Math.abs(p-0.21)<$.M().a)){q.e=0.21
p=new D.I("deltaPitch",p,0.21,[P.q])
p.b=!0
q.J(p)}p=q.f
if(!(Math.abs(p-0.32)<$.M().a)){q.f=0.32
p=new D.I("deltaRoll",p,0.32,[P.q])
p.b=!0
q.J(p)}r.h(0,q)
r.h(0,U.li(V.mh(0,0,5)))
o=X.ls(r)
n=new X.fK()
n.d=n.c=n.b=n.a=512
n.e=!0
n.f=!1
n.x=n.r=1
n.ch=T.mv(b1)
n.cx=new V.ad(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.lu()
n.say(0,512)
n.sau(0,512)
m=new V.ad(0,0,0,1)
if(!n.cx.A(0,m)){l=n.cx
n.cx=m
q=new D.I("color",l,m,[V.ad])
q.b=!0
n.a6(q)}if(n.cy){n.cy=!1
q=new D.I("clearColor",!0,!1,[P.U])
q.b=!0
n.a6(q)}q=n.db
if(!(Math.abs(q-2000)<$.M().a)){n.db=2000
q=new D.I("depth",q,2000,[P.q])
q.b=!0
n.a6(q)}q=n.r
if(!(Math.abs(q-1)<$.M().a)){n.r=1
q=new D.I("autoResizeScalarX",q,1,[P.q])
q.b=!0
n.a6(q)}q=n.x
if(!(Math.abs(q-1)<$.M().a)){n.x=1
q=new D.I("autoResizeScalarY",q,1,[P.q])
q.b=!0
n.a6(q)}k=V.lu()
if(!J.a_(n.dy,k)){l=n.dy
n.dy=k
q=new D.I("region",l,k,[V.cQ])
q.b=!0
n.a6(q)}q=s.f
p=q.a
j=p.createTexture()
p.bindTexture(b2,j)
p.texParameteri(b2,10242,10497)
p.texParameteri(b2,10243,10497)
p.texParameteri(b2,10241,9729)
p.texParameteri(b2,10240,9729)
p.bindTexture(b2,b1)
i=new T.ej()
i.a=0
i.b=j
i.c=!1
i.d=0
q.aV(i,j,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aV(i,j,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aV(i,j,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aV(i,j,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aV(i,j,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aV(i,j,"../resources/maskonaive/negz.jpg",34074,!1,!1)
h=new M.dF()
h.sb0(b1)
h.sbj(0,b1)
h.sb3(b1)
q=E.lk()
g=F.iq()
p=g.a
f=new V.L(-1,-1,1)
f=f.w(0,Math.sqrt(f.F(f)))
e=p.bv(new V.ax(1,2,4,6),new V.ad(1,0,0,1),new V.a0(-1,-1,0),new V.a7(0,1),f,b1)
p=g.a
f=new V.L(1,-1,1)
f=f.w(0,Math.sqrt(f.F(f)))
d=p.bv(new V.ax(0,3,4,6),new V.ad(0,0,1,1),new V.a0(1,-1,0),new V.a7(1,1),f,b1)
p=g.a
f=new V.L(1,1,1)
f=f.w(0,Math.sqrt(f.F(f)))
c=p.bv(new V.ax(0,2,5,6),new V.ad(0,1,0,1),new V.a0(1,1,0),new V.a7(1,0),f,b1)
p=g.a
f=V.bt()
b=new V.L(-1,1,1)
b=b.w(0,Math.sqrt(b.F(b)))
a=p.bv(new V.ax(0,2,4,7),new V.ad(1,1,0,1),new V.a0(-1,1,0),f,b,b1)
g.d.e_(H.d([e,d,c,a],[F.ae]))
g.as()
q.saa(0,g)
h.d=q
h.e=null
q=new O.ec()
q.b=1.0471975511965976
q.d=new V.a6(1,1,1)
l=q.c
q.c=i
i.gt().h(0,q.gaT())
p=new D.I("boxTexture",l,q.c,[T.ej])
p.b=!0
q.X(p)
h.sb3(q)
h.sbj(0,n)
h.sb0(o)
a0=E.lk()
a0.saa(0,F.nm())
a1=O.mc()
q=a1.dx
a2=V.mJ()
p=U.li(V.md(V.mn(),a2,new V.L(0,-1,-1)))
m=new V.a6(1,1,1)
f=new D.bG()
f.c=new V.a6(1,1,1)
f.a=V.mK()
l=f.b
f.b=p
p.gt().h(0,f.gfv())
p=new D.I("mover",l,f.b,[U.ai])
p.b=!0
f.aG(p)
if(!f.c.A(0,m)){l=f.c
f.c=m
p=new D.I("color",l,m,[V.a6])
p.b=!0
f.aG(p)}q.h(0,f)
q=a1.r
q.saD(0,new V.a6(0,0,1))
q=a1.x
q.saD(0,new V.a6(0,1,0))
q=a1.z
q.saD(0,new V.a6(1,0,0))
q=a1.z
if(q.c===C.d){q.c=C.j
q.c_()
q.co(100)
p=q.a
p.a=null
p.X(b1)}q.co(10)
a3=M.m6()
a3.sb0(o)
a3.sb3(a1)
a3.sbj(0,n)
a3.d.h(0,a0)
a4=U.m8()
q=s.r
p=new U.ew()
f=U.lh()
f.sda(0,!0)
f.scX(6.283185307179586)
f.scZ(0)
f.sa3(0,0)
f.scY(100)
f.sW(0)
f.scH(0.5)
p.b=f
b=p.gaW()
f.gt().h(0,b)
f=U.lh()
f.sda(0,!0)
f.scX(6.283185307179586)
f.scZ(0)
f.sa3(0,0)
f.scY(100)
f.sW(0)
f.scH(0.5)
p.c=f
f.gt().h(0,b)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
a5=new X.aD(!1,!1,!1)
l=p.d
p.d=a5
f=[X.aD]
b=new D.I(b3,l,a5,f)
b.b=!0
p.J(b)
b=p.f
if(b!==!1){p.f=!1
b=new D.I("invertX",b,!1,[P.U])
b.b=!0
p.J(b)}b=p.r
if(b!==!1){p.r=!1
b=new D.I("invertY",b,!1,[P.U])
b.b=!0
p.J(b)}p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ev()
b=U.lh()
b.sda(0,!0)
b.scX(6.283185307179586)
b.scZ(0)
b.sa3(0,0)
b.scY(100)
b.sW(0)
b.scH(0.2)
p.b=b
b.gt().h(0,p.gaW())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
a5=new X.aD(!0,!1,!1)
l=p.c
p.c=a5
b=new D.I(b3,l,a5,f)
b.b=!0
p.J(b)
p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ex()
p.c=0.01
p.e=p.d=0
a5=new X.aD(!1,!1,!1)
p.b=a5
f=new D.I(b3,b1,a5,f)
f.b=!0
p.J(f)
p.bb(q)
a4.h(0,p)
a4.h(0,U.li(V.mh(0,0,5)))
a6=X.ls(a4)
a7=E.lk()
a7.saa(0,F.kE(1,b1,b1,1))
a8=O.mc()
q=a8.f
p=n.ch
f=q.c
if(f!==C.h){if(f===C.d)q.aJ()
q.c=C.h
q.is(b1)
f=q.a
f.a=null
f.X(b1)}q.ir(p)
a9=M.m6()
a9.sb0(a6)
a9.sb3(a8)
a9.d.h(0,a7)
q=M.aF
p=H.d([h,a3,a9],[q])
f=new M.dD()
f.bq(q)
f.e=!1
f.f=null
f.b4(f.ghZ(),f.gi0())
f.ag(0,p)
q=s.d
if(q!==f){if(q!=null)q.gt().N(0,s.gdi())
s.d=f
f.gt().h(0,s.gdi())
s.dj()}q=new V.ic("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
q.dY(0,"Cube",new V.kV(a7),!0)
q.aB(0,"Cuboid",new V.kW(a7))
q.aB(0,"Cylinder",new V.kX(a7))
q.aB(0,"Cone",new V.kY(a7))
q.aB(0,"Cylindrical",new V.kZ(a7))
q.aB(0,"Sphere",new V.l_(a7))
q.aB(0,"Spherical",new V.l0(a7))
q.aB(0,"Toroid",new V.l1(a7))
q.aB(0,"Knot",new V.l2(a7))
u=s.z
if(u==null)u=s.z=D.O()
q={func:1,ret:-1,args:[D.A]}
p=H.n(new V.l3(b4,a8),q)
if(u.b==null)u.saX(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pK(s)},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kU:function kU(){},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
kT:function kT(){},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
kS:function kS(){},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b}},U={
lh:function(){var u=new U.fR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
li:function(a){var u=new U.dE()
u.a=a
return u},
m8:function(){var u=new U.cC()
u.bq(U.ai)
u.b4(u.gfE(),u.ghV())
u.e=null
u.f=V.c5()
u.r=0
return u},
fR:function fR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
e9:function e9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
m6:function(){var u,t=new M.dJ()
t.sfT(0,O.lg(E.aq))
t.d.b4(t.ghr(),t.ght())
t.x=t.r=t.f=t.e=null
u=X.m7(null)
t.sb0(null)
t.sbj(0,u)
t.sb3(null)
return t},
dD:function dD(){var _=this
_.c=_.b=_.a=_.f=_.e=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aF:function aF(){}},A={
oe:function(a,b){var u=a.at,t=new A.dX(b,u)
t.dh(b,u)
t.fm(a,b)
return t},
lw:function(a,b,c,d,e){var u=new A.j3(a,c,e)
u.f=d
u.siO(P.oc(d,0,P.o))
return u},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
dX:function dX(a,b){var _=this
_.bz=_.ec=_.by=_.at=_.aE=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.es=_.cK=_.er=_.bM=_.eq=_.ep=_.bL=_.bK=_.eo=_.en=_.bJ=_.bI=_.bH=_.em=_.el=_.bG=_.ek=_.ej=_.bF=_.ei=_.eh=_.bE=_.bD=_.eg=_.ef=_.bC=_.bB=_.ee=_.ed=_.bA=null
_.cP=_.ex=_.cO=_.ew=_.cN=_.ev=_.cM=_.eu=_.cL=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hM:function hM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aE=b3
_.at=b4
_.by=b5},
d0:function d0(a,b){this.b=a
this.c=b},
d4:function d4(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d2:function d2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d5:function d5(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
d6:function d6(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
c0:function c0(a,b){this.a=a
this.b=b},
ed:function ed(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eq:function eq(){},
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
a3:function a3(a,b,c){this.a=a
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
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kE:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
u=F.iq()
F.dp(u,b,c,d,a,1,0,0,1)
F.dp(u,b,c,d,a,0,1,0,3)
F.dp(u,b,c,d,a,0,0,1,2)
F.dp(u,b,c,d,a,-1,0,0,0)
F.dp(u,b,c,d,a,0,-1,0,0)
F.dp(u,b,c,d,a,0,0,-1,3)
u.as()
return u},
kv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dp:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.L(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.L(p+a3,o+a1,n+a2)
l=new V.L(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.L(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kv(u)
g=F.kv(e.b)
f=F.lR(d,a0,new F.ku(e,F.kv(e.c),F.kv(e.d),g,h,c),b)
if(f!=null)a.bf(f)},
n9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.iq()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ae])
q=u.a
p=new V.L(0,0,t)
p=p.w(0,Math.sqrt(p.F(p)))
C.a.h(r,q.je(new V.ax(a,-1,-1,-1),new V.ad(1,1,1,1),new V.a0(0,0,c),new V.L(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.C(k)
j=new V.L(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ey(new V.ax(a,-1,-1,-1),null,new V.ad(i,g,h,1),new V.a0(m*k,l*k,c),new V.L(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.e_(r)
return u},
n6:function(a,b,c){return F.n7(!0,a,1,new F.kF(1,c),b)},
n7:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.lR(c,e,new F.kH(d),null)
if(u==null)return
u.as()
u.ct()
if(b)u.bf(F.n9(3,!1,1,new F.kI(d),e))
u.bf(F.n9(1,!0,-1,new F.kJ(d),e))
return u},
nk:function(a,b,c){var u,t={}
t.a=b
if(H.n(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)t.a=new F.l7()
u=F.kE(a,null,new F.l8(t,1),c)
u.ct()
return u},
nm:function(){return F.n8(15,30,0.5,1,new F.l9())},
pC:function(){return F.n8(12,120,0.3,1,new F.kQ(3,2))},
n8:function(a,b,c,d,e){var u=F.lR(a,b,new F.kG(H.n(e,{func:1,ret:V.a0,args:[P.q]}),d,b,c),null)
if(u==null)return
u.as()
u.ct()
return u},
lR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.iq()
t=H.d([],[F.ae])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ey(g,g,new V.ad(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cG(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ey(g,g,new V.ad(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cG(d))}}u.d.jd(a+1,b+1,t)
return u},
cz:function(a,b,c){var u=new F.aa(),t=a.a
if(t==null)H.u(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.w("May not create a face with vertices attached to different shapes."))
u.cr(a)
u.cs(b)
u.it(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a8()
return u},
o8:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.u(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.w("May not create a line with vertices attached to different shapes."))
u.cr(a)
u.cs(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a8()
return u},
iq:function(){var u=new F.eb(),t=new F.jp(u)
t.b=!1
t.siP(H.d([],[F.ae]))
u.a=t
t=new F.it(u)
t.scj(H.d([],[F.bO]))
u.b=t
t=new F.is(u)
t.sh8(H.d([],[F.br]))
u.c=t
t=new F.ir(u)
t.sh2(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
ey:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ae(),r=new F.jx()
r.scj(H.d([],[F.bO]))
s.b=r
r=new F.jt()
u=[F.br]
r.sh9(H.d([],u))
r.sha(H.d([],u))
s.c=r
r=new F.jq()
u=[F.aa]
r.sh3(H.d([],u))
r.sh4(H.d([],u))
r.sh5(H.d([],u))
s.d=r
h=$.nA()
s.e=0
r=$.b1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.by().a)!==0?e:t
s.x=(u&$.bx().a)!==0?b:t
s.y=(u&$.bz().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.nB().a)!==0?c:t
s.ch=(u&$.cp().a)!==0?i:0
s.cx=(u&$.bw().a)!==0?a:t
return s},
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kF:function kF(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
l7:function l7(){},
l8:function l8(a,b){this.a=a
this.b=b},
l9:function l9(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(){},
iy:function iy(){},
br:function br(){this.b=this.a=null},
hx:function hx(){},
j2:function j2(){},
bO:function bO(){this.a=null},
eb:function eb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
ae:function ae(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
jq:function jq(){this.d=this.c=this.b=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){this.c=this.b=null},
jv:function jv(){},
ju:function ju(){},
jw:function jw(){},
i2:function i2(){},
jx:function jx(){this.b=null}},T={
mv:function(a){var u=new T.iP()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
cY:function cY(){},
ei:function ei(){},
iP:function iP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iQ:function iQ(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iR:function iR(a,b,c,d,e,f,g){var _=this
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
H.lo.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gK:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iU:1}
J.dP.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dQ.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.i7.prototype={}
J.bR.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.no()]
if(u==null)return this.fh(a)
return"JavaScript function for "+H.m(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.t(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
eR:function(a,b){if(!!a.fixed$length)H.u(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e7(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.u(P.J("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.k(b,"$ii",[H.t(a,0)],"$ai")
if(!!a.fixed$length)H.u(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.m(a[u]))
return t.join(b)},
jJ:function(a){return this.m(a,"")},
jC:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
jB:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hr())},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fe:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gjA:function(a){if(a.length>0)return a[0]
throw H.c(H.hr())},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hr())},
bo:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.J("setRange"))
P.bu(b,c,a.length)
u=c-b
if(u===0)return
P.lt(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ck(d)
if(u>s.gl(d))throw H.c(H.o4())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
e3:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.ll(a,"[","]")},
gV:function(a){return new J.au(a,a.length,[H.t(a,0)])},
gK:function(a){return H.cP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(b<0)throw H.c(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ci(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.t(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ci(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.t(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.p(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bo(t,0,a.length,a)
this.bo(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.ln.prototype={}
J.au.prototype={
gL:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.E(s))
u=t.c
if(u>=r){t.sdC(null)
return!1}t.sdC(s[u]);++t.c
return!0},
sdC:function(a){this.d=H.B(a,H.t(this,0))},
$ib6:1}
J.bM.prototype={
kf:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cQ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
f0:function(a,b){var u,t
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a2(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.J("Unexpected toString result: "+u))
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
u:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a*b},
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fl:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dU(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.dU(a,b)},
dU:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.dT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iy:function(a,b){if(b<0)throw H.c(H.aG(b))
return this.dT(a,b)},
dT:function(a,b){return b>31?0:a>>>b},
$iq:1,
$iac:1}
J.dO.prototype={$io:1}
J.dN.prototype={}
J.bp.prototype={
a2:function(a,b){if(b<0)throw H.c(H.ci(a,b))
if(b>=a.length)H.u(H.ci(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.ci(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.ld(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
c=P.bu(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ab:function(a,b){return this.ak(a,b,0)},
D:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aG(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e7(b,null))
if(b>c)throw H.c(P.e7(b,null))
if(c>a.length)throw H.c(P.e7(c,null))
return a.substring(b,c)},
az:function(a,b){return this.D(a,b,null)},
ki:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
eF:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eE:function(a,b){return this.eF(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imk:1,
$if:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a2(this.a,b)},
$ad7:function(){return[P.o]},
$az:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h6.prototype={}
H.c4.prototype={
gV:function(a){var u=this
return new H.cF(u,u.gl(u),[H.ao(u,"c4",0)])},
bV:function(a,b){return this.fg(0,H.n(b,{func:1,ret:P.U,args:[H.ao(this,"c4",0)]}))}}
H.cF.prototype={
gL:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=J.ck(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bm(s))
u=t.c
if(u>=q){t.sb7(null)
return!1}t.sb7(r.M(s,u));++t.c
return!0},
sb7:function(a){this.d=H.B(a,H.t(this,0))},
$ib6:1}
H.hH.prototype={
gV:function(a){return new H.hI(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.aH(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ai:function(a,b){return[b]}}
H.hI.prototype={
E:function(){var u=this,t=u.b
if(t.E()){u.sb7(u.c.$1(t.gL(t)))
return!0}u.sb7(null)
return!1},
gL:function(a){return this.a},
sb7:function(a){this.a=H.B(a,H.t(this,1))},
$ab6:function(a,b){return[b]}}
H.hJ.prototype={
gl:function(a){return J.aH(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ac4:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d9.prototype={
gV:function(a){return new H.jB(J.bB(this.a),this.b,this.$ti)}}
H.jB.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(H.D(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c2.prototype={}
H.d7.prototype={
n:function(a,b,c){H.B(c,H.ao(this,"d7",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.es.prototype={}
H.fT.prototype={
i:function(a){return P.lr(this)},
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
return H.nX()},
$iH:1}
H.fU.prototype={
gl:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bw(0,b))return
return this.dD(b)},
dD:function(a){return this.b[H.K(a)]},
O:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dD(r),p))}}}
H.j_.prototype={
ao:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i3.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.la.prototype={
$1:function(a){if(!!J.W(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.f8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.cv.prototype={
i:function(a){return"Closure '"+H.c7(this).trim()+"'"},
$ibI:1,
gkn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iM.prototype={}
H.iC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cr))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.dw(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.j1.prototype={
i:function(a){return this.a}}
H.fP.prototype={
i:function(a){return this.a}}
H.im.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jC.prototype={
i:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.aS.prototype={
gl:function(a){return this.a},
gjI:function(a){return this.a===0},
gad:function(a){return new H.hz(this,[H.t(this,0)])},
bw:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dz(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dz(t,b)}else return s.jF(b)},
jF:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cT(u.c6(t,u.cS(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.br(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.br(r,b)
s=t==null?null:t.b
return s}else return q.jG(b)},
jG:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c6(r,s.cS(a))
t=s.cT(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.B(b,H.t(s,0))
H.B(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.dm(u==null?s.b=s.cg():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dm(t==null?s.c=s.cg():t,b,c)}else s.jH(b,c)},
jH:function(a,b){var u,t,s,r,q=this
H.B(a,H.t(q,0))
H.B(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.cg()
t=q.cS(a)
s=q.c6(u,t)
if(s==null)q.cp(u,t,[q.ci(a,b)])
else{r=q.cT(s,a)
if(r>=0)s[r].b=b
else s.push(q.ci(a,b))}},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bm(s))
u=u.c}},
dm:function(a,b,c){var u,t=this
H.B(b,H.t(t,0))
H.B(c,H.t(t,1))
u=t.br(a,b)
if(u==null)t.cp(a,b,t.ci(b,c))
else u.b=c},
hg:function(){this.r=this.r+1&67108863},
ci:function(a,b){var u,t=this,s=new H.hy(H.B(a,H.t(t,0)),H.B(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.hg()
return s},
cS:function(a){return J.dw(a)&0x3ffffff},
cT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.lr(this)},
br:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
fY:function(a,b){delete a[b]},
dz:function(a,b){return this.br(a,b)!=null},
cg:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cp(t,u,t)
this.fY(t,u)
return t}}
H.hy.prototype={}
H.hz.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hA.prototype={
gL:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdl(null)
return!1}else{u.sdl(t.a)
u.c=u.c.c
return!0}}},
sdl:function(a){this.d=H.B(a,H.t(this,0))},
$ib6:1}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kO.prototype={
$1:function(a){return this.a(H.K(a))},
$S:44}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imk:1,
$ios:1}
H.cK.prototype={$icK:1}
H.bN.prototype={$ibN:1,$ioA:1}
H.e_.prototype={
gl:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cL.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pn(c)
H.bk(b,a,a.length)
a[b]=c},
$ac2:function(){return[P.q]},
$az:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.e0.prototype={
n:function(a,b,c){H.af(c)
H.bk(b,a,a.length)
a[b]=c},
$ac2:function(){return[P.o]},
$az:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hW.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e1.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iq7:1}
H.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icM:1,
$iV:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
P.jE.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jD.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fe.prototype={
fH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.kk(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.kj(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibe:1}
P.kk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kj.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.fl(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
jL:function(a){if(this.c!==6)return!0
return this.b.b.d7(H.n(this.d,{func:1,ret:P.U,args:[P.T]}),a.a,P.U,P.T)},
jE:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fx(u,{func:1,args:[P.T,P.ay]}))return H.lM(r.ka(u,a.a,a.b,null,t,P.ay),s)
else return H.lM(r.d7(H.n(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aN.prototype={
f_:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a4
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pa(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a4,[c])
s=b==null?1:3
this.dn(new P.bj(t,s,a,b,[r,c]))
return t},
ke:function(a,b){return this.f_(a,null,b)},
dn:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaN")
s=u.a
if(s<4){u.dn(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kC(null,null,s,H.n(new P.jP(t,a),{func:1,ret:-1}))}},
dP:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaN")
u=q.a
if(u<4){q.dP(a)
return}p.a=u
p.c=q.c}o.a=p.bt(a)
u=p.b
u.toString
P.kC(null,null,u,H.n(new P.jT(o,p),{func:1,ret:-1}))}},
cl:function(){var u=H.e(this.c,"$ibj")
this.c=null
return this.bt(u)},
bt:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dt:function(a){var u,t,s=this,r=H.t(s,0)
H.lM(a,{futureOr:1,type:r})
u=s.$ti
if(H.lJ(a,"$icB",u,"$acB"))if(H.lJ(a,"$iaN",u,null))P.mL(a,s)
else P.oM(a,s)
else{t=s.cl()
H.B(a,r)
s.a=4
s.c=a
P.dc(s,t)}},
du:function(a,b){var u,t=this
H.e(b,"$iay")
u=t.cl()
t.a=8
t.c=new P.ap(a,b)
P.dc(t,u)},
$icB:1}
P.jP.prototype={
$0:function(){P.dc(this.a,this.b)},
$S:0}
P.jT.prototype={
$0:function(){P.dc(this.b,this.a.a)},
$S:0}
P.jQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.dt(a)},
$S:30}
P.jR.prototype={
$2:function(a,b){H.e(b,"$iay")
this.a.du(a,b)},
$1:function(a){return this.$2(a,null)},
$S:53}
P.jS.prototype={
$0:function(){this.a.du(this.b,this.c)},
$S:0}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eW(H.n(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.cm(r)
if(o.d){s=H.e(o.a.a.c,"$iap").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iap")
else q.b=new P.ap(u,t)
q.a=!0
return}if(!!J.W(n).$icB){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iap")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ke(new P.jX(p),null)
s.a=!1}},
$S:3}
P.jX.prototype={
$1:function(a){return this.a},
$S:50}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.B(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.d7(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.cm(o)
s=n.a
s.b=new P.ap(u,t)
s.a=!0}},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iap")
r=m.c
if(H.D(r.jL(u))&&r.e!=null){q=m.b
q.b=r.jE(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.cm(p)
r=H.e(m.a.a.c,"$iap")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ap(t,s)
n.a=!0}},
$S:3}
P.eB.prototype={}
P.iF.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aN($.a4,[P.o])
r.a=0
u=H.t(s,0)
t=H.n(new P.iH(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iI(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iH.prototype={
$1:function(a){H.B(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.t(this.b,0)]}}}
P.iI.prototype={
$0:function(){this.b.dt(this.a.a)},
$S:0}
P.cU.prototype={}
P.iG.prototype={}
P.be.prototype={}
P.ap.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.kt.prototype={$iqm:1}
P.kB.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e3():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k2.prototype={
kb:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a4){a.$0()
return}P.mX(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.cm(s)
P.kA(r,r,this,u,H.e(t,"$iay"))}},
kc:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a4){a.$1(b)
return}P.mY(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.cm(s)
P.kA(r,r,this,u,H.e(t,"$iay"))}},
jk:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:b}),b)},
cz:function(a){return new P.k3(this,H.n(a,{func:1,ret:-1}))},
e5:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eW:function(a,b){H.n(a,{func:1,ret:b})
if($.a4===C.k)return a.$0()
return P.mX(null,null,this,a,b)},
d7:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a4===C.k)return a.$1(b)
return P.mY(null,null,this,a,b,c,d)},
ka:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a4===C.k)return a.$2(b,c)
return P.pb(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.eW(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.kb(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.kc(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k0.prototype={
gV:function(a){var u=this,t=new P.eQ(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icc")!=null}else{t=this.fU(b)
return t}},
fU:function(a){var u=this.d
if(u==null)return!1
return this.c4(this.dE(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dq(u==null?s.b=P.lB():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dq(t==null?s.c=P.lB():t,b)}else return s.fL(0,b)},
fL:function(a,b){var u,t,s,r=this
H.B(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.lB()
t=r.dv(b)
s=u[t]
if(s==null)u[t]=[r.c1(b)]
else{if(r.c4(s,b)>=0)return!1
s.push(r.c1(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ic(this.c,b)
else return this.ib(0,b)},
ib:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dE(r,b)
t=s.c4(u,b)
if(t<0)return!1
s.dV(u.splice(t,1)[0])
return!0},
dq:function(a,b){H.B(b,H.t(this,0))
if(H.e(a[b],"$icc")!=null)return!1
a[b]=this.c1(b)
return!0},
ic:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icc")
if(u==null)return!1
this.dV(u)
delete a[b]
return!0},
ds:function(){this.r=1073741823&this.r+1},
c1:function(a){var u,t=this,s=new P.cc(H.B(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ds()
return s},
dV:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ds()},
dv:function(a){return J.dw(a)&1073741823},
dE:function(a,b){return a[this.dv(b)]},
c4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.cc.prototype={}
P.eQ.prototype={
gL:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdr(null)
return!1}else{u.sdr(H.B(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sdr:function(a){this.d=H.B(a,H.t(this,0))},
$ib6:1}
P.hB.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.hC.prototype={$ii:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.cF(a,this.gl(a),[H.bU(this,a,"z",0)])},
M:function(a,b){return this.j(a,b)},
kh:function(a,b){var u,t=this,s=H.d([],[H.bU(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
kg:function(a){return this.kh(a,!0)},
p:function(a,b){var u,t=this,s=[H.bU(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.p(t.gl(a),b.gl(b)))
C.a.bo(u,0,t.gl(a),a)
C.a.bo(u,t.gl(a),u.length,b)
return u},
jy:function(a,b,c,d){var u
H.B(d,H.bU(this,a,"z",0))
P.bu(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.ll(a,"[","]")}}
P.hE.prototype={}
P.hF.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:7}
P.ag.prototype={
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bU(s,a,"ag",0),H.bU(s,a,"ag",1)]})
for(u=J.bB(s.gad(a));u.E();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aH(this.gad(a))},
i:function(a){return P.lr(a)},
$iH:1}
P.kl.prototype={
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hG.prototype={
j:function(a,b){return J.lV(this.a,b)},
n:function(a,b,c){J.lc(this.a,H.B(b,H.t(this,0)),H.B(c,H.t(this,1)))},
O:function(a,b){J.lW(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aH(this.a)},
i:function(a){return J.at(this.a)},
$iH:1}
P.et.prototype={}
P.k7.prototype={
ag:function(a,b){var u
for(u=J.bB(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gL(u))},
i:function(a){return P.ll(this,"{","}")},
M:function(a,b){var u,t,s,r=this
P.lt(b,"index")
for(u=P.oQ(r,r.r,H.t(r,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$ii:1,
$ims:1}
P.eR.prototype={}
P.fk.prototype={}
P.fL.prototype={
jN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bu(a0,a1,b.length)
u=$.nD()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kL(C.b.H(b,n))
j=H.kL(C.b.H(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.D(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.D(b,s,a1)
f=g.length
if(q>=0)P.m_(b,p,a1,q,o,f)
else{e=C.f.bn(f-1,4)+1
if(e===1)throw H.c(P.a8(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b2(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m_(b,p,a1,q,o,d)
else{e=C.f.bn(d,4)
if(e===1)throw H.c(P.a8(c,b,a1))
if(e>1)b=C.b.b2(b,a1,a1,e===2?"==":"=")}return b},
$ac_:function(){return[[P.b,P.o],P.f]}}
P.fM.prototype={
$abF:function(){return[[P.b,P.o],P.f]}}
P.c_.prototype={}
P.bF.prototype={}
P.h8.prototype={
$ac_:function(){return[P.f,[P.b,P.o]]}}
P.ho.prototype={
i:function(a){return this.a}}
P.hn.prototype={
fV:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.b.D(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nQ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.f,P.f]}}
P.jl.prototype={
gjx:function(){return C.R}}
P.jn.prototype={
cF:function(a){var u,t,s=P.bu(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kr(u)
if(t.h6(a,0,s)!==s)t.dX(J.nM(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p5(0,t.b,u.length)))},
$abF:function(){return[P.f,[P.b,P.o]]}}
P.kr.prototype={
dX:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h6:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dX(r,C.b.H(a,p)))s=p}else if(r<=2047){q=n.b
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
cF:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.o],"$ab")
u=P.oD(!1,a,0,null)
if(u!=null)return u
t=P.bu(0,null,J.aH(a))
s=P.n_(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.kq(!1,q)
n.c=o
n.jn(a,p,t)
if(n.e>0){H.u(P.a8("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c8(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abF:function(){return[[P.b,P.o],P.f]}}
P.kq.prototype={
jn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.o],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ck(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bW()
if((o&192)!==128){n=P.a8(h+C.f.bl(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a8("Overlong encoding of 0x"+C.f.bl(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a8("Character outside valid Unicode range: 0x"+C.f.bl(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c8(u)
i.c=!1}for(n=p<c;n;){m=P.n_(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Z()
if(o<0){j=P.a8("Negative UTF-8 code unit: -0x"+C.f.bl(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a8(h+C.f.bl(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.U.prototype={}
P.aB.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.aZ(u,30))&1073741823},
i:function(a){var u=this,t=P.nY(H.oo(u)),s=P.dG(H.om(u)),r=P.dG(H.oi(u)),q=P.dG(H.oj(u)),p=P.dG(H.ol(u)),o=P.dG(H.on(u)),n=P.nZ(H.ok(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.f.p(this.a,b.gh_()))},
u:function(a,b){return new P.b5(C.f.u(this.a,b.gh_()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.h5(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.f.ac(q,6e7)%60)
t=r.$1(C.f.ac(q,1e6)%60)
s=new P.h4().$1(q%1e6)
return""+C.f.ac(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.h4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:31}
P.h5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:31}
P.bH.prototype={}
P.fE.prototype={
i:function(a){return"Assertion failed"}}
P.e3.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc3()+o+u
if(!q.a)return t
s=q.gc2()
r=P.dK(q.b)
return t+s+": "+r}}
P.c9.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.hq.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t=H.af(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gl:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.i6.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ef.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.fZ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hi.prototype={
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
k=""}j=C.b.D(f,m,n)
return h+l+j+k+"\n"+C.b.v(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.bI.prototype={}
P.o.prototype={}
P.i.prototype={
bV:function(a,b){var u=H.ao(this,"i",0)
return new H.d9(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.E();)++u
return u},
gaR:function(a){var u,t=this.gV(this)
if(!t.E())throw H.c(H.hr())
u=t.gL(t)
if(t.E())throw H.c(H.o5())
return u},
M:function(a,b){var u,t,s
P.lt(b,"index")
for(u=this.gV(this),t=0;u.E();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
i:function(a){return P.o3(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.P.prototype={
gK:function(a){return P.T.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
A:function(a,b){return this===b},
gK:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.f.prototype={$imk:1}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipW:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.k(a,"$iH",[r,r],"$aH")
H.K(b)
u=J.ds(b).eE(b,"=")
if(u===-1){if(b!=="")J.lc(a,P.lD(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.D(b,0,u)
s=C.b.az(b,u+1)
r=this.a
J.lc(a,P.lD(t,0,t.length,r,!0),P.lD(s,0,s.length,r,!0))}return a},
$S:49}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jh.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fA(C.b.D(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cd.prototype={
gf5:function(){return this.b},
gcR:function(a){var u=this.c
if(u==null)return""
if(C.b.ab(u,"["))return C.b.D(u,1,u.length-1)
return u},
gbP:function(a){var u=this.d
if(u==null)return P.mP(this.a)
return u},
gd2:function(a){var u=this.f
return u==null?"":u},
gez:function(){var u=this.r
return u==null?"":u},
eT:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iH",[P.f,null],"$aH")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ab(p,"/"))p="/"+p
n=P.lC(null,0,0,b)
return new P.cd(u,s,q,r,p,n,m.r)},
gd3:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.sia(new P.et(P.mD(u==null?"":u),[t,t]))}return s.Q},
geA:function(){return this.c!=null},
geD:function(){return this.f!=null},
geB:function(){return this.r!=null},
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
if(!!J.W(b).$ilx)if(s.a==b.gbY())if(s.c!=null===b.geA())if(s.b==b.gf5())if(s.gcR(s)==b.gcR(b))if(s.gbP(s)==b.gbP(b))if(s.e===b.geP(b)){u=s.f
t=u==null
if(!t===b.geD()){if(t)u=""
if(u===b.gd2(b)){u=s.r
t=u==null
if(!t===b.geB()){if(t)u=""
u=u===b.gez()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
sia:function(a){var u=P.f
this.Q=H.k(a,"$iH",[u,u],"$aH")},
$ilx:1,
gbY:function(){return this.a},
geP:function(a){return this.e}}
P.km.prototype={
$1:function(a){throw H.c(P.a8("Invalid port",this.a,this.b+1))},
$S:43}
P.kn.prototype={
$1:function(a){return P.fl(C.a0,a,C.l,!1)},
$S:20}
P.kp.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fl(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fl(C.r,b,C.l,!0))}},
$S:21}
P.ko.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bB(H.ne(b,"$ii")),t=this.a;u.E();)t.$2(a,H.K(u.gL(u)))},
$S:36}
P.jf.prototype={
gf4:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.eF(u,"?",o)
s=u.length
if(t>=0){r=P.dn(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jK("data",p,p,p,P.dn(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nN(u,0,96,b)
return u},
$S:40}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.H(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.H(b,0),t=C.b.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.ka.prototype={
geA:function(){return this.c>0},
geC:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
geD:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geB:function(){return this.r<this.a.length},
gdG:function(){return this.b===4&&C.b.ab(this.a,"http")},
gdH:function(){return this.b===5&&C.b.ab(this.a,"https")},
gbY:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdG())q=t.x="http"
else if(t.gdH()){t.x="https"
q="https"}else if(q===4&&C.b.ab(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ab(t.a,r)){t.x=r
q=r}else{q=C.b.D(t.a,0,q)
t.x=q}return q},
gf5:function(){var u=this.c,t=this.b+3
return u>t?C.b.D(this.a,t,u-1):""},
gcR:function(a){var u=this.c
return u>0?C.b.D(this.a,u,this.d):""},
gbP:function(a){var u,t=this
if(t.geC()){u=t.d
if(typeof u!=="number")return u.p()
return P.fA(C.b.D(t.a,u+1,t.e),null,null)}if(t.gdG())return 80
if(t.gdH())return 443
return 0},
geP:function(a){return C.b.D(this.a,this.e,this.f)},
gd2:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.D(this.a,u+1,t):""},
gez:function(){var u=this.r,t=this.a
return u<t.length?C.b.az(t,u+1):""},
gd3:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Z()
if(t>=u.r)return C.a1
t=P.f
return new P.et(P.mD(u.gd2(u)),[t,t])},
eT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iH",[P.f,null],"$aH")
u=k.gbY()
t=u==="file"
s=k.c
r=s>0?C.b.D(k.a,k.b+3,s):""
q=k.geC()?k.gbP(k):j
s=k.c
if(s>0)p=C.b.D(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.D(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ab(o,"/"))o="/"+o
m=P.lC(j,0,0,b)
n=k.r
l=n<s.length?C.b.az(s,n+1):j
return new P.cd(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$ilx&&this.a===b.i(0)},
i:function(a){return this.a},
$ilx:1}
P.jK.prototype={}
W.y.prototype={}
W.fC.prototype={
gl:function(a){return a.length}}
W.dx.prototype={
i:function(a){return String(a)},
$idx:1}
W.fD.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bX.prototype={$ibX:1}
W.bC.prototype={$ibC:1}
W.bZ.prototype={
dc:function(a,b,c){if(c!=null)return a.getContext(b,P.pj(c))
return a.getContext(b)},
f8:function(a,b){return this.dc(a,b,null)},
$ibZ:1}
W.cu.prototype={$icu:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.cw.prototype={$icw:1}
W.fV.prototype={
gl:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cx.prototype={
gl:function(a){return a.length}}
W.fW.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fX.prototype={
gl:function(a){return a.length}}
W.fY.prototype={
gl:function(a){return a.length}}
W.h0.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.h1.prototype={
i:function(a){return String(a)}}
W.dH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iam",[P.ac],"$aam")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.am,P.ac]]},
$az:function(){return[[P.am,P.ac]]},
$ii:1,
$ai:function(){return[[P.am,P.ac]]},
$ib:1,
$ab:function(){return[[P.am,P.ac]]},
$aG:function(){return[[P.am,P.ac]]}}
W.dI.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gay(a))+" x "+H.m(this.gau(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbN(b)&&a.top===u.gbT(b)&&this.gay(a)===u.gay(b)&&this.gau(a)===u.gau(b)},
gK:function(a){return W.mN(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gay(a)),C.e.gK(this.gau(a)))},
ge6:function(a){return a.bottom},
gau:function(a){return a.height},
gbN:function(a){return a.left},
gbS:function(a){return a.right},
gbT:function(a){return a.top},
gay:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ac]}}
W.h2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.f]},
$az:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.h3.prototype={
gl:function(a){return a.length}}
W.jI.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iX")},
n:function(a,b,c){var u
H.e(c,"$iX")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.kg(this)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gjj:function(a){return new W.jL(a)},
gcE:function(a){return new W.jI(a,a.children)},
ge8:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m5
if(u==null){u=H.d([],[W.aE])
t=new W.e2(u)
C.a.h(u,W.mM(null))
C.a.h(u,W.mO())
$.m5=t
d=t}else d=u
u=$.m4
if(u==null){u=new W.fm(d)
$.m4=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.lj=t.createRange()
t=$.bn.createElement("base")
H.e(t,"$icq")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibC")}u=$.bn
if(!!this.$ibC)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.Z,a.tagName)){$.lj.selectNodeContents(s)
r=$.lj.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lY(s)
c.dd(r)
document.adoptNode(r)
return r},
jq:function(a,b,c){return this.an(a,b,c,null)},
fb:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iX:1,
geX:function(a){return a.tagName}}
W.h7.prototype={
$1:function(a){return!!J.W(H.e(a,"$iF")).$iX},
$S:25}
W.p.prototype={$ip:1}
W.j.prototype={
jc:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fM(a,b,c,!1)},
fM:function(a,b,c,d){return a.addEventListener(b,H.ch(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icA:1,
$aG:function(){return[W.aJ]}}
W.hd.prototype={
gl:function(a){return a.length}}
W.hh.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hm.prototype={
gl:function(a){return a.length}}
W.c3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic3:1,
$aG:function(){return[W.F]}}
W.bo.prototype={$ibo:1,
ge9:function(a){return a.data}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dU.prototype={
i:function(a){return String(a)},
$idU:1}
W.hP.prototype={
gl:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hQ.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.O(a,new W.hR(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hS.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.O(a,new W.hT(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aT.prototype={$iaT:1}
W.hU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaR:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mt("No elements"))
if(t>1)throw H.c(P.mt("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.bU(C.a2,u,"G",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
k5:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k8:function(a,b){var u,t
try{u=a.parentNode
J.nK(u,b,a)}catch(t){H.al(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ff(a):u},
jh:function(a,b){return a.appendChild(H.e(b,"$iF"))},
ih:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aG:function(){return[W.F]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.i9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.ik.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.O(a,new W.il(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.io.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.iD.prototype={
j:function(a,b){return a.getItem(H.K(b))},
n:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gad:function(a){var u=H.d([],[P.f])
this.O(a,new W.iE(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.f,P.f]},
$iH:1,
$aH:function(){return[P.f,P.f]}}
W.iE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.eg.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=W.o_("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ag(0,new W.as(u))
return t}}
W.iK.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaR(u)
s.toString
u=new W.as(s)
r=u.gaR(u)
t.toString
r.toString
new W.as(t).ag(0,new W.as(r))
return t}}
W.iL.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaR(u)
t.toString
s.toString
new W.as(t).ag(0,new W.as(s))
return t}}
W.cX.prototype={$icX:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aG:function(){return[W.aL]}}
W.iO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aG:function(){return[W.aY]}}
W.iT.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aG:function(){return[W.aZ]}}
W.iY.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jA.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gjt:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibi:1}
W.da.prototype={
ii:function(a,b){return a.requestAnimationFrame(H.ch(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
h0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.db.prototype={$idb:1}
W.jJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.Z]},
$az:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aG:function(){return[W.Z]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbN(b)&&a.top===u.gbT(b)&&a.width===u.gay(b)&&a.height===u.gau(b)},
gK:function(a){return W.mN(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gau:function(a){return a.height},
gay:function(a){return a.width}}
W.jY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aG:function(){return[W.aQ]}}
W.eW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.F]},
$az:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aG:function(){return[W.F]}}
W.kb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aG:function(){return[W.aX]}}
W.kf.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aG:function(){return[W.aK]}}
W.jH.prototype={
O:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gad(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gad:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$idb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.jL.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gad(this).length}}
W.jM.prototype={}
W.lA.prototype={}
W.jN.prototype={}
W.jO.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:39}
W.bS.prototype={
fs:function(a){var u
if($.dd.gjI($.dd)){for(u=0;u<262;++u)$.dd.n(0,C.Y[u],W.pv())
for(u=0;u<12;++u)$.dd.n(0,C.v[u],W.pw())}},
b_:function(a){return $.nE().Y(0,W.cy(a))},
aC:function(a,b,c){var u=$.dd.j(0,H.m(W.cy(a))+"::"+b)
if(u==null)u=$.dd.j(0,"*::"+b)
if(u==null)return!1
return H.lI(u.$4(a,b,c,this))},
$iaE:1}
W.G.prototype={
gV:function(a){return new W.dL(a,this.gl(a),[H.bU(this,a,"G",0)])}}
W.e2.prototype={
b_:function(a){return C.a.e3(this.a,new W.i1(a))},
aC:function(a,b,c){return C.a.e3(this.a,new W.i0(a,b,c))},
$iaE:1}
W.i1.prototype={
$1:function(a){return H.e(a,"$iaE").b_(this.a)},
$S:27}
W.i0.prototype={
$1:function(a){return H.e(a,"$iaE").aC(this.a,this.b,this.c)},
$S:27}
W.f3.prototype={
fG:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bV(0,new W.k8())
t=b.bV(0,new W.k9())
this.b.ag(0,u)
s=this.c
s.ag(0,C.B)
s.ag(0,t)},
b_:function(a){return this.a.Y(0,W.cy(a))},
aC:function(a,b,c){var u=this,t=W.cy(a),s=u.c
if(s.Y(0,H.m(t)+"::"+b))return u.d.jf(c)
else if(s.Y(0,"*::"+b))return u.d.jf(c)
else{s=u.b
if(s.Y(0,H.m(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.m(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
$iaE:1}
W.k8.prototype={
$1:function(a){return!C.a.Y(C.v,H.K(a))},
$S:28}
W.k9.prototype={
$1:function(a){return C.a.Y(C.v,H.K(a))},
$S:28}
W.kh.prototype={
aC:function(a,b,c){if(this.fk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.K(a))},
$S:20}
W.kg.prototype={
b_:function(a){var u=J.W(a)
if(!!u.$icR)return!1
u=!!u.$ir
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.ab(b,"on"))return!1
return this.b_(a)},
$iaE:1}
W.dL.prototype={
E:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdF(J.lV(u.a,t))
u.c=t
return!0}u.sdF(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdF:function(a){this.d=H.B(a,H.t(this,0))},
$ib6:1}
W.aE.prototype={}
W.k6.prototype={$iq8:1}
W.fm.prototype={
dd:function(a){new W.ks(this).$2(a,null)},
ba:function(a,b){if(b==null)J.lY(a)
else b.removeChild(a)},
io:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nO(a)
n=o.a.getAttribute("is")
H.e(a,"$iX")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.al(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.al(r)}try{s=W.cy(a)
this.im(H.e(a,"$iX"),b,p,t,s,H.e(o,"$iH"),H.K(n))}catch(r){if(H.al(r) instanceof P.aP)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.m(t)
if(typeof console!="undefined")window.console.warn(q)}}},
im:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.b_(a)){o.ba(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aC(a,"is",g)){o.ba(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gad(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.gad(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nR(r)
H.K(r)
if(!q.aC(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.m(e)+" "+r+'="'+H.m(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icX)o.dd(a.content)},
$ipU:1}
W.ks.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.io(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.al(s)
r=H.e(u,"$iF")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iF")}},
$S:37}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
P.kc.prototype={
ey:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d9:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.W(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$ios)throw H.c(P.jc("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ibX)return a
if(!!u.$icA)return a
if(!!u.$ibo)return a
if(!!u.$icK||!!u.$ibN||!!u.$icI)return a
if(!!u.$iH){t=q.ey(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.O(a,new P.ke(p,q))
return p.a}if(!!u.$ib){t=q.ey(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jp(a,t)}throw H.c(P.jc("structured clone of other type"))},
jp:function(a,b){var u,t=J.ck(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.d9(t.j(a,u)))
return r}}
P.ke.prototype={
$2:function(a,b){this.a.a[a]=this.b.d9(b)},
$S:7}
P.fj.prototype={$ibo:1,
ge9:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kd.prototype={}
P.he.prototype={
gbs:function(){var u=this.b,t=H.ao(u,"z",0),s=W.X
return new H.hH(new H.d9(u,H.n(new P.hf(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.hg(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iX")
u=this.gbs()
J.nP(u.b.$1(J.fB(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aH(this.gbs().a)},
j:function(a,b){var u=this.gbs()
return u.b.$1(J.fB(u.a,b))},
gV:function(a){var u=P.mb(this.gbs(),!1,W.X)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.hf.prototype={
$1:function(a){return!!J.W(H.e(a,"$iF")).$iX},
$S:25}
P.hg.prototype={
$1:function(a){return H.l(H.e(a,"$iF"),"$iX")},
$S:54}
P.k1.prototype={
gbS:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
ge6:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
A:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iam){t=p.a
if(t==u.gbN(b)){s=p.b
if(s==u.gbT(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.C(r)
q=H.t(p,0)
if(H.B(t+r,q)===u.gbS(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.C(t)
u=H.B(s+t,q)===u.ge6(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.dw(s),q=t.b,p=J.dw(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.C(o)
u=H.t(t,0)
o=C.f.gK(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.C(s)
u=C.f.gK(H.B(q+s,u))
return P.oP(P.k_(P.k_(P.k_(P.k_(0,r),p),o),u))}}
P.am.prototype={
gbN:function(a){return this.a},
gbT:function(a){return this.b},
gay:function(a){return this.c},
gau:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ib8")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aG:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.i4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aG:function(){return[P.bc]}}
P.ib.prototype={
gl:function(a){return a.length}}
P.cR.prototype={$icR:1}
P.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.r.prototype={
gcE:function(a){return new P.he(a,new W.as(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.mM(null))
C.a.h(p,W.mO())
C.a.h(p,new W.kg())
c=new W.fm(new W.e2(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jq(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaR(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ir:1}
P.bf.prototype={$ibf:1}
P.iZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aG:function(){return[P.bf]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.V.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ioA:1}
P.fG.prototype={
gl:function(a){return a.length}}
P.fH.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.f])
this.O(a,new P.fI(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
P.fI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fJ.prototype={
gl:function(a){return a.length}}
P.bW.prototype={}
P.i5.prototype={
gl:function(a){return a.length}}
P.eC.prototype={}
P.dA.prototype={$idA:1}
P.dM.prototype={$idM:1}
P.e6.prototype={$ie6:1}
P.e8.prototype={$ie8:1}
P.ca.prototype={
eY:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ibo&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pk(g))
return}if(!!u.$icD&&h==null&&t&&!0){this.iC(a,b,c,d,e,f,g)
return}throw H.c(P.dy("Incorrect number or type of arguments"))},
kd:function(a,b,c,d,e,f,g){return this.eY(a,b,c,d,e,f,g,null,null,null)},
iC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
P:function(a,b,c){return a.uniform1f(b,c)},
a5:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.ea.prototype={$iea:1}
P.eh.prototype={$ieh:1}
P.er.prototype={$ier:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bv(a.item(b))},
n:function(a,b,c){H.e(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aG:function(){return[[P.H,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a5.prototype={
bq:function(a){var u=this
u.shb(H.d([],[a]))
u.sdN(null)
u.sdJ(null)
u.sdO(null)},
de:function(a,b,c){var u=this,t=H.ao(u,"a5",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.o,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdN(b)
u.sdJ(a)
u.sdO(c)},
b4:function(a,b){return this.de(a,null,b)},
dM:function(a){var u
H.k(a,"$ii",[H.ao(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dI:function(a,b){var u
H.k(b,"$ii",[H.ao(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.au(u,u.length,[H.t(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a5",0)
H.B(b,r)
r=[r]
if(H.D(s.dM(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dI(t,H.d([b],r))}},
ag:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.ao(s,"a5",0)],"$ai")
if(H.D(s.dM(b))){u=s.a
t=u.length
C.a.ag(u,b)
s.dI(t,b)}},
shb:function(a){this.a=H.k(a,"$ib",[H.ao(this,"a5",0)],"$ab")},
sdN:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.ao(this,"a5",0)]]})},
sdJ:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ao(this,"a5",0)]]})},
sdO:function(a){H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ao(this,"a5",0)]]})},
$ii:1}
O.cH.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
aS:function(){var u=this.b
if(u!=null)u.G(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaF(u)
else return V.c5()},
bR:function(a){var u=this.a
if(a==null)C.a.h(u,V.c5())
else C.a.h(u,a)
this.aS()},
aO:function(){var u=this.a
if(u.length>0){u.pop()
this.aS()}},
sc8:function(a){this.a=H.k(a,"$ib",[V.av],"$ab")}}
E.fN.prototype={}
E.aq.prototype={
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().N(0,s.geM())
u=s.c
if(u!=null)u.gt().h(0,s.geM())
t=new D.I("shape",r,s.c,[F.eb])
t.b=!0
s.bO(t)}},
ax:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();)u.d.ax(0,b)},
ai:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga4(s))
s.aS()
a.d1(t.f)
s=a.dy
u=(s&&C.a).gaF(s)
if(u!=null&&t.d!=null)u.eS(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.t(s,0)]);s.E();)s.d.ai(a)
a.d0()
a.dx.aO()},
gt:function(){var u=this.z
return u==null?this.z=D.O():u},
bO:function(a){var u=this.z
if(u!=null)u.G(a)},
a8:function(){return this.bO(null)},
eN:function(a){H.e(a,"$iA")
this.e=null
this.bO(a)},
jT:function(){return this.eN(null)},
eL:function(a){this.bO(H.e(a,"$iA"))},
jQ:function(){return this.eL(null)},
jP:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.aq],"$ai")
for(u=b.length,t=this.geK(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c1()
o.sal(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
jS:function(a,b){var u,t
H.k(b,"$ii",[E.aq],"$ai")
for(u=b.gV(b),t=this.geK();u.E();)u.gL(u).gt().N(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfq:function(a,b){this.y=H.k(b,"$ia5",[E.aq],"$aa5")},
$ibb:1}
E.ig.prototype={
fn:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.av]
u.sc8(H.d([],t))
u.b=null
u.gt().h(0,new E.ih(s))
s.cy=u
u=new O.cH()
u.sc8(H.d([],t))
u.b=null
u.gt().h(0,new E.ii(s))
s.db=u
u=new O.cH()
u.sc8(H.d([],t))
u.b=null
u.gt().h(0,new E.ij(s))
s.dx=u
s.siB(H.d([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.six(new H.aS([P.f,A.cS]))},
gk0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.v(0,u.ga4(u))
s=u}return s},
d1:function(a){var u=this.dy,t=a==null?(u&&C.a).gaF(u):a;(u&&C.a).h(u,t)},
d0:function(){var u=this.dy
if(u.length>1)u.pop()},
e2:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.bw(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
siB:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
six:function(a){this.fr=H.k(a,"$iH",[P.f,A.cS],"$aH")}}
E.ih.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:10}
E.ii.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ij.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:10}
E.en.prototype={
dk:function(a){H.e(a,"$iA")
this.eU()},
dj:function(){return this.dk(null)},
gjD:function(){var u,t=this,s=Date.now(),r=C.f.ac(P.m3(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dR:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.C(r)
u=C.e.cQ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.e.cQ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mx(C.t,s.gk9())}},
eU:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iS(this),{func:1,ret:-1,args:[P.ac]})
C.I.h0(u)
C.I.ii(u,W.n2(t,P.ac))}},
k7:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dR()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.m3(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aS()
r=s.db
C.a.sl(r.a,0)
r.aS()
r=s.dx
C.a.sl(r.a,0)
r.aS()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.ai(p.e)}s=p.z
if(s!=null)s.G(null)}catch(q){u=H.al(q)
t=H.cm(q)
P.lP("Error: "+H.m(u))
P.lP("Stack: "+H.m(t))
throw H.c(u)}}}
E.iS.prototype={
$1:function(a){var u
H.pG(a)
u=this.a
if(u.ch){u.ch=!1
u.k7()}},
$S:35}
Z.ez.prototype={$ipO:1}
Z.dB.prototype={
a7:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.eA.prototype={$ipP:1}
Z.ct.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a7:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a7(a)},
aw:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ai:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sh7:function(a){this.b=H.k(a,"$ib",[Z.bJ],"$ab")},
$ipX:1}
Z.bJ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bh.prototype={
gdf:function(a){var u=this.a,t=(u&$.b1().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.bz().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.du().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
ji:function(a){var u,t=$.b1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.du()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0)if(u===a)return t
return $.nC()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.bz().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.du().a)!==0)C.a.h(u,"Clr3")
if((t&$.dv().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fQ.prototype={}
D.c1.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sal(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
G:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.O(P.mb(u,!0,{func:1,ret:-1,args:[D.A]}),new D.ha(q))
u=r.b
if(u!=null){r.saX(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.O(u,new D.hb(q))}return!0},
cJ:function(){return this.G(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}},
sal:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saX:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.hb.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.A.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dC.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dR.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hv.prototype={
jY:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jU:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
si9:function(a){this.d=H.k(a,"$ims",[P.o],"$ams")}}
X.dV.prototype={}
X.hD.prototype={
b8:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gb1()
r=new X.bs(a,V.bt(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
d_:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fa()
if(typeof u!=="number")return u.bW()
this.r=(u&~t)>>>0
return!1},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.b8(a,b))
return!0},
jZ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb1()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cJ(new V.Y(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
hI:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dV(c,r.a.gb1(),b)
s.b=!0
t.G(s)
r.y=new P.aB(u,!1)
r.x=V.bt()}}
X.aD.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bs.prototype={}
X.hV.prototype={
c5:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gb1(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
d_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.c5(a,b,!0))
return!0},
bh:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fa()
if(typeof t!=="number")return t.bW()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.c5(a,b,!0))
return!0},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.c5(a,b,!1))
return!0},
k_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb1()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cJ(new V.Y(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
geb:function(){var u=this.b
return u==null?this.b=D.O():u},
gbU:function(){var u=this.c
return u==null?this.c=D.O():u},
geJ:function(){var u=this.d
return u==null?this.d=D.O():u}}
X.cJ.prototype={}
X.ia.prototype={}
X.ep.prototype={}
X.iW.prototype={
b8:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a7],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=q.a.gb1()
r=new X.ep(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jX:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.G(this.b8(a,!0))
return!0},
jV:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.G(this.b8(a,!0))
return!0},
jW:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.G(this.b8(a,!1))
return!0}}
X.eu.prototype={
gb1:function(){var u=this.a,t=C.m.ge8(u).c
t.toString
u=C.m.ge8(u).d
u.toString
return V.mq(0,0,t,u)},
dA:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dR(u,new X.aD(t,a.altKey,a.shiftKey))},
aY:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
cq:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.a7(s-q,r-u)},
b9:function(a){return new V.Y(a.movementX,a.movementY)},
ck:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
q=C.e.a9(r.pageX)
C.e.a9(r.pageY)
p=o.left
C.e.a9(r.pageX)
C.a.h(n,new V.a7(q-p,C.e.a9(r.pageY)-o.top))}return n},
aH:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dC(u,new X.aD(t,a.altKey,a.shiftKey))},
c9:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hC:function(a){this.f=!0},
hq:function(a){this.f=!1},
hw:function(a){H.e(a,"$iah")
if(H.D(this.f)&&this.c9(a))a.preventDefault()},
hG:function(a){var u
H.e(a,"$ib7")
if(!H.D(this.f))return
u=this.dA(a)
this.b.jY(u)},
hE:function(a){var u
H.e(a,"$ib7")
if(!H.D(this.f))return
u=this.dA(a)
this.b.jU(u)},
hK:function(a){var u,t,s,r,q=this
H.e(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aY(a)
if(H.D(q.x)){t=q.aH(a)
s=q.b9(a)
if(q.d.d_(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aH(a)
r=q.aK(a)
if(q.c.d_(t,r))a.preventDefault()},
hO:function(a){var u,t,s,r=this
H.e(a,"$iah")
r.aY(a)
u=r.aH(a)
if(H.D(r.x)){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aK(a)
if(r.c.bh(u,s))a.preventDefault()},
hA:function(a){var u,t,s,r=this
H.e(a,"$iah")
if(!r.c9(a)){r.aY(a)
u=r.aH(a)
if(H.D(r.x)){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aK(a)
if(r.c.bh(u,s))a.preventDefault()}},
hM:function(a){var u,t,s,r=this
H.e(a,"$iah")
r.aY(a)
u=r.aH(a)
if(H.D(r.x)){t=r.b9(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aK(a)
if(r.c.bg(u,s))a.preventDefault()},
hy:function(a){var u,t,s,r=this
H.e(a,"$iah")
if(!r.c9(a)){r.aY(a)
u=r.aH(a)
if(H.D(r.x)){t=r.b9(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aK(a)
if(r.c.bg(u,s))a.preventDefault()}},
hQ:function(a){var u,t,s=this
H.e(a,"$ibi")
s.aY(a)
u=new V.Y((a&&C.H).gjs(a),C.H.gjt(a)).w(0,180)
if(H.D(s.x)){if(s.d.jZ(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aK(a)
if(s.c.k_(u,t))a.preventDefault()},
hS:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aH(s.y)
t=s.aK(s.y)
s.d.hI(u,t,r)}},
i7:function(a){var u,t=this
H.e(a,"$ib_")
t.a.focus()
t.f=!0
t.cq(a)
u=t.ck(a)
if(t.e.jX(u))a.preventDefault()},
i3:function(a){var u
H.e(a,"$ib_")
this.cq(a)
u=this.ck(a)
if(this.e.jV(u))a.preventDefault()},
i5:function(a){var u
H.e(a,"$ib_")
this.cq(a)
u=this.ck(a)
if(this.e.jW(u))a.preventDefault()},
sh1:function(a){this.z=H.k(a,"$ib",[[P.cU,P.T]],"$ab")}}
D.bG.prototype={
gt:function(){var u=this.d
return u==null?this.d=D.O():u},
aG:function(a){var u
H.e(a,"$iA")
u=this.d
if(u!=null)u.G(a)},
fw:function(){return this.aG(null)},
$ia9:1,
$ibb:1}
D.a9.prototype={$ibb:1}
D.dS.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.O():u},
aG:function(a){var u=this.Q
if(u!=null)u.G(a)},
dL:function(a){var u
H.e(a,"$iA")
u=this.ch
if(u!=null)u.G(a)},
hH:function(){return this.dL(null)},
hU:function(a){var u,t,s
H.k(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.ft(s))return!1}return!0},
hk:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdK(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=H.e(b[q],"$ia9")
if(p instanceof D.bG)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.c1()
o.sal(null)
o.saX(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bK([n])
n.b=!0
this.aG(n)},
hY:function(a,b){var u,t,s,r=D.a9
H.k(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdK();u.E();){s=u.gL(u)
C.a.N(this.e,s)
s.gt().N(0,t)}r=new D.bL([r])
r.b=!0
this.aG(r)},
ft:function(a){var u=C.a.Y(this.e,a)
return u},
sfu:function(a){this.e=H.k(a,"$ib",[D.bG],"$ab")},
sfz:function(a){this.f=H.k(a,"$ib",[D.e5],"$ab")},
sfA:function(a){this.r=H.k(a,"$ib",[D.ee],"$ab")},
sfB:function(a){this.x=H.k(a,"$ib",[D.ek],"$ab")},
sfC:function(a){this.y=H.k(a,"$ib",[D.el],"$ab")},
sfD:function(a){this.z=H.k(a,"$ib",[D.em],"$ab")},
$ai:function(){return[D.a9]},
$aa5:function(){return[D.a9]}}
D.e5.prototype={$ia9:1,$ibb:1}
D.ee.prototype={$ia9:1,$ibb:1}
D.ek.prototype={$ia9:1,$ibb:1}
D.el.prototype={$ia9:1,$ibb:1}
D.em.prototype={$ia9:1,$ibb:1}
V.a6.prototype={
p:function(a,b){var u=C.e.p(this.a,b.gd4()),t=C.e.p(this.b,b.gbX()),s=C.e.p(this.c,b.gcA())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u=C.e.u(this.a,b.gd4()),t=C.e.u(this.b,b.gbX()),s=C.e.u(this.c,b.gcA())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.ad.prototype={
p:function(a,b){var u=this,t=C.e.p(u.a,b.gd4()),s=C.e.p(u.b,b.gbX()),r=C.e.p(u.c,b.gcA()),q=C.e.p(u.d,b.gjg(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ad(t,s,r,q)},
u:function(a,b){var u=this,t=C.e.u(u.a,b.gd4()),s=C.e.u(u.b,b.gbX()),r=C.e.u(u.c,b.gcA()),q=C.e.u(u.d,b.gjg(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ad(t,s,r,q)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.h9.prototype={}
V.dZ.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dZ))return!1
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
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cj(H.d([q.a,q.d,q.r],p),3,0),n=V.cj(H.d([q.b,q.e,q.x],p),3,0),m=V.cj(H.d([q.c,q.f,q.y],p),3,0)
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
aj:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
cU:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.c5()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
d8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
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
i:function(a){return this.S()},
I:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cj(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cj(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cj(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cj(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
S:function(){return this.I("")}}
V.a7.prototype={
p:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a0.prototype={
p:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a0(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.ax.prototype={
p:function(a,b){var u=this
return new V.ax(C.e.p(u.a,b.gkk(b)),C.e.p(u.b,b.gkl(b)),C.e.p(u.c,b.gkm(b)),C.e.p(u.d,b.gkj(b)))},
u:function(a,b){var u=this
return new V.ax(C.e.u(u.a,b.gkk(b)),C.e.u(u.b,b.gkl(b)),C.e.u(u.c,b.gkm(b)),C.e.u(u.d,b.gkj(b)))},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.cQ.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cQ))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.Y.prototype={
cV:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gju(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.gjv(b)
if(typeof t!=="number")return t.p()
return new V.Y(s,C.e.p(t,u))},
u:function(a,b){var u,t=this.a,s=b.gju(b)
if(typeof t!=="number")return t.u()
s=C.e.u(t,s)
t=this.b
u=b.gjv(b)
if(typeof t!=="number")return t.u()
return new V.Y(s,C.e.u(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.Y(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mE
return u==null?$.mE=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Y(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.L.prototype={
cV:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cW:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aL:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.L(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.M().a)return V.d8()
return new V.L(this.a/b,this.b/b,this.c/b)},
eH:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
U.fR.prototype={
c0:function(a){var u=V.lb(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
J:function(a){var u=this.y
if(u!=null)u.G(a)},
sda:function(a,b){},
scX:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c0(u)}s=new D.I("maximumLocation",s,t.b,[P.q])
s.b=!0
t.J(s)}},
scZ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c0(u)}s=new D.I("minimumLocation",s,t.c,[P.q])
s.b=!0
t.J(s)}},
sa3:function(a,b){var u,t=this
b=t.c0(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.I("location",u,b,[P.q])
u.b=!0
t.J(u)}},
scY:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.q])
r.b=!0
s.J(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.I("velocity",t,a,[P.q])
t.b=!0
u.J(t)}},
scH:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.I("dampening",u,a,[P.q])
u.b=!0
this.J(u)}},
ax:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dE.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
aQ:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cC.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
J:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.G(a)},
af:function(){return this.J(null)},
fF:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaW(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bK([n])
n.b=!0
this.J(n)},
hW:function(a,b){var u,t,s=U.ai
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaW();u.E();)u.gL(u).gt().N(0,t)
s=new D.bL([s])
s.b=!0
this.J(s)},
aQ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.t(r,0)]),u=null;r.E();){q=r.d
if(q!=null){t=q.aQ(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.c5():u
r=s.e
if(r!=null)r.av(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aa5:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.e9.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.O():u},
J:function(a){var u=this.y
if(u!=null)u.G(a)},
sf6:function(a){var u
a=V.lb(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.I("yaw",u,a,[P.q])
u.b=!0
this.J(u)}},
seQ:function(a,b){var u
b=V.lb(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.I("pitch",u,b,[P.q])
u.b=!0
this.J(u)}},
seV:function(a){var u
a=V.lb(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.I("roll",u,a,[P.q])
u.b=!0
this.J(u)}},
aQ:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sf6(u.a+u.d*b.y)
u.seQ(0,u.b+u.e*b.y)
u.seV(u.c+u.f*b.y)
u.x=V.mg(u.c).v(0,V.mf(u.b)).v(0,V.me(u.a))
t=u.y
if(t!=null)t.av(0)}return u.x},
A:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e9))return!1
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
return"Rotater: ["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+"], ["+V.S(u.d,3,0)+", "+V.S(u.e,3,0)+", "+V.S(u.f,3,0)+"]"}}
U.ev.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.O():u},
J:function(a){var u
H.e(a,"$iA")
u=this.cy
if(u!=null)u.G(a)},
af:function(){return this.J(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.geb().h(0,u.gca())
u.a.c.geJ().h(0,u.gcc())
u.a.c.gbU().h(0,u.gce())
return!0},
cb:function(a){var u=this
H.e(a,"$iA")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cd:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibs")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.u(0,a.y)
u=new V.Y(t.a,t.b).v(0,2).w(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.Y(s.a,s.b).v(0,2).w(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
n.b.sW(0)
t=t.u(0,a.z)
n.Q=new V.Y(t.a,t.b).v(0,2).w(0,u.gah())}n.af()},
cf:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sW(t*10*s)
r.af()}},
aQ:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.Z()
if(s<r){t.ch=r
u=b.y
t.b.ax(0,u)
t.cx=V.mg(t.b.d)}return t.cx},
$iai:1}
U.ew.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.O():u},
J:function(a){var u
H.e(a,"$iA")
u=this.fx
if(u!=null)u.G(a)},
af:function(){return this.J(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.geb().h(0,s.gca())
s.a.c.geJ().h(0,s.gcc())
s.a.c.gbU().h(0,s.gce())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.ghc())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghe())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.giI())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.giG())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.giE())
return!0},
aA:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.Y(u,t)},
cb:function(a){var u=this
a=H.l(H.e(a,"$iA"),"$ibs")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cd:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibs")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.aA(new V.Y(t.a,t.b).v(0,2).w(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aA(new V.Y(s.a,s.b).v(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).v(0,2).w(0,u.gah()))}n.af()},
cf:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sW(-t*10*u)
r.af()}},
hd:function(a){var u=this
if(H.l(H.e(a,"$iA"),"$idV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hf:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibs")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aA(new V.Y(s.a,s.b).v(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).v(0,2).w(0,u.gah()))
n.af()},
iJ:function(a){var u=this
H.e(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iH:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$iep")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.Y(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.aA(new V.Y(t.a,t.b).v(0,2).w(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.aA(new V.Y(s.a,s.b).v(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa3(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.aA(new V.Y(t.a,t.b).v(0,2).w(0,u.gah()))}n.af()},
iF:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sW(-t*10*u)
r.af()}},
aQ:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.Z()
if(s<r){t.dy=r
u=b.y
t.c.ax(0,u)
t.b.ax(0,u)
t.fr=V.me(t.b.d).v(0,V.mf(t.c.d))}return t.fr},
$iai:1}
U.ex.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.O():u},
J:function(a){var u=this.r
if(u!=null)u.G(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.O():t
t=r.ghh()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.O():s).h(0,t)
return!0},
hi:function(a){var u,t,s,r,q=this
H.e(a,"$iA")
if(!J.a_(q.b,q.a.b.c))return
H.l(a,"$icJ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.I("zoom",u,r,[P.q])
u.b=!0
q.J(u)}},
aQ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ba(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dD.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
a1:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.G(a)},
b5:function(){return this.a1(null)},
i_:function(a,b){var u,t,s,r,q,p,o,n=M.aF
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gt()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bK([n])
n.b=!0
this.a1(n)},
i1:function(a,b){var u,t,s=M.aF
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga0();u.E();)u.gL(u).gt().N(0,t)
s=new D.bL([s])
s.b=!0
this.a1(s)},
ai:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();){t=u.d
if(t!=null)t.ai(a)}s.e=!1},
$ai:function(){return[M.aF]},
$aa5:function(){return[M.aF]},
$iaF:1}
M.dF.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
a1:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.G(a)},
b5:function(){return this.a1(null)},
sb0:function(a){var u,t,s=this
if(a==null)a=new X.hp()
u=s.a
if(u!==a){if(u!=null)u.gt().N(0,s.ga0())
t=s.a
s.a=a
a.gt().h(0,s.ga0())
u=new D.I("camera",t,s.a,[X.bY])
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t,s=this
if(b==null)b=X.m7(null)
u=s.b
if(u!==b){if(u!=null)u.gt().N(0,s.ga0())
t=s.b
s.b=b
b.gt().h(0,s.ga0())
u=new D.I("target",t,s.b,[X.cW])
u.b=!0
s.a1(u)}},
sb3:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gt().N(0,t.ga0())
u=t.c
t.c=a
if(a!=null)a.gt().h(0,t.ga0())
s=new D.I("technique",u,t.c,[O.bP])
s.b=!0
t.a1(s)}},
ai:function(a){var u=this
a.d1(u.c)
u.b.a7(a)
u.a.a7(a)
u.d.ax(0,a)
u.d.ai(a)
u.a.aw(a)
u.b.aw(a)
a.d0()},
$iaF:1}
M.dJ.prototype={
a1:function(a){var u
H.e(a,"$iA")
u=this.x
if(u!=null)u.G(a)},
b5:function(){return this.a1(null)},
hs:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c1()
o.sal(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bK([n])
n.b=!0
this.a1(n)},
hu:function(a,b){var u,t,s=E.aq
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga0();u.E();)u.gL(u).gt().N(0,t)
s=new D.bL([s])
s.b=!0
this.a1(s)},
sb0:function(a){var u,t,s=this
if(a==null)a=X.ls(null)
u=s.a
if(u!==a){if(u!=null)u.gt().N(0,s.ga0())
t=s.a
s.a=a
a.gt().h(0,s.ga0())
u=new D.I("camera",t,s.a,[X.bY])
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gt().N(0,t.ga0())
u=t.b
t.b=b
b.gt().h(0,t.ga0())
s=new D.I("target",u,t.b,[X.cW])
s.b=!0
t.a1(s)}},
sb3:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gt().N(0,t.ga0())
u=t.c
t.c=a
if(a!=null)a.gt().h(0,t.ga0())
s=new D.I("technique",u,t.c,[O.bP])
s.b=!0
t.a1(s)}},
gt:function(){var u=this.x
return u==null?this.x=D.O():u},
ai:function(a){var u,t=this
a.d1(t.c)
t.b.a7(a)
t.a.a7(a)
u=t.c
if(u!=null)u.ax(0,a)
for(u=t.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();)u.d.ax(0,a)
for(u=t.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();)u.d.ai(a)
t.a.toString
a.cy.aO()
a.db.aO()
t.b.aw(a)
a.d0()},
sfT:function(a,b){this.d=H.k(b,"$ia5",[E.aq],"$aa5")},
$iaF:1}
M.aF.prototype={}
A.dz.prototype={}
A.fF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ea:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dX.prototype={
fm:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.ak("")
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
d1.iR(u)
d1.iY(u)
d1.iS(u)
d1.j5(u)
d1.j6(u)
d1.j_(u)
d1.ja(u)
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
u=new P.ak("")
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
q.iV(u)
q.iQ(u)
q.iT(u)
q.iW(u)
q.j3(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.j1(u)
q.j2(u)}q.iZ(u)
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
q.iU(u)
q.j0(u)
q.j4(u)
q.j7(u)
q.j8(u)
q.j9(u)
q.iX(u)}m=u.a+="// === Main ===\n"
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
a6.eG(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.l(a6.y.q(0,"invViewMat"),"$iaz")
if(t)a6.dy=H.l(a6.y.q(0,"objMat"),"$iaz")
if(r)a6.fr=H.l(a6.y.q(0,"viewObjMat"),"$iaz")
a6.fy=H.l(a6.y.q(0,"projViewObjMat"),"$iaz")
if(d1.x2)a6.k1=H.l(a6.y.q(0,"txt2DMat"),"$id1")
if(d1.y1)a6.k2=H.l(a6.y.q(0,"txtCubeMat"),"$iaz")
if(d1.y2)a6.k3=H.l(a6.y.q(0,"colorMat"),"$iaz")
a6.sfP(H.d([],[A.az]))
t=d1.aE
if(t>0){a6.k4=H.e(a6.y.q(0,"bendMatCount"),"$iR")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.w(a7+q+a8));(s&&C.a).h(s,H.l(g,"$iaz"))}}t=d1.a
if(t!==C.d){a6.r2=H.l(a6.y.q(0,"emissionClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.rx=H.l(a6.y.q(0,a9),"$iar")
a6.x1=H.l(a6.y.q(0,b0),"$iR")
break
case C.i:a6.ry=H.l(a6.y.q(0,a9),"$ian")
a6.x1=H.l(a6.y.q(0,b0),"$iR")
break}}t=d1.b
if(t!==C.d){a6.x2=H.l(a6.y.q(0,"ambientClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.y1=H.l(a6.y.q(0,b1),"$iar")
a6.aE=H.l(a6.y.q(0,b2),"$iR")
break
case C.i:a6.y2=H.l(a6.y.q(0,b1),"$ian")
a6.aE=H.l(a6.y.q(0,b2),"$iR")
break}}t=d1.c
if(t!==C.d){a6.at=H.l(a6.y.q(0,"diffuseClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.by=H.l(a6.y.q(0,b3),"$iar")
a6.bz=H.l(a6.y.q(0,b4),"$iR")
break
case C.i:a6.ec=H.l(a6.y.q(0,b3),"$ian")
a6.bz=H.l(a6.y.q(0,b4),"$iR")
break}}t=d1.d
if(t!==C.d){a6.bA=H.l(a6.y.q(0,"invDiffuseClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ed=H.l(a6.y.q(0,b5),"$iar")
a6.bB=H.l(a6.y.q(0,b6),"$iR")
break
case C.i:a6.ee=H.l(a6.y.q(0,b5),"$ian")
a6.bB=H.l(a6.y.q(0,b6),"$iR")
break}}t=d1.e
if(t!==C.d){a6.bE=H.l(a6.y.q(0,"shininess"),"$ia3")
a6.bC=H.l(a6.y.q(0,"specularClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ef=H.l(a6.y.q(0,b7),"$iar")
a6.bD=H.l(a6.y.q(0,b8),"$iR")
break
case C.i:a6.eg=H.l(a6.y.q(0,b7),"$ian")
a6.bD=H.l(a6.y.q(0,b8),"$iR")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.h:a6.eh=H.l(a6.y.q(0,"bumpTxt"),"$iar")
a6.bF=H.l(a6.y.q(0,b9),"$iR")
break
case C.i:a6.ei=H.l(a6.y.q(0,"bumpTxt"),"$ian")
a6.bF=H.l(a6.y.q(0,b9),"$iR")
break}if(d1.dy){a6.ej=H.l(a6.y.q(0,"envSampler"),"$ian")
a6.ek=H.l(a6.y.q(0,"nullEnvTxt"),"$iR")
t=d1.r
if(t!==C.d){a6.bG=H.l(a6.y.q(0,"reflectClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.el=H.l(a6.y.q(0,c0),"$iar")
a6.bH=H.l(a6.y.q(0,c1),"$iR")
break
case C.i:a6.em=H.l(a6.y.q(0,c0),"$ian")
a6.bH=H.l(a6.y.q(0,c1),"$iR")
break}}t=d1.x
if(t!==C.d){a6.bI=H.l(a6.y.q(0,"refraction"),"$ia3")
a6.bJ=H.l(a6.y.q(0,"refractClr"),"$iQ")
switch(t){case C.d:break
case C.j:break
case C.h:a6.en=H.l(a6.y.q(0,c2),"$iar")
a6.bK=H.l(a6.y.q(0,c3),"$iR")
break
case C.i:a6.eo=H.l(a6.y.q(0,c2),"$ian")
a6.bK=H.l(a6.y.q(0,c3),"$iR")
break}}}t=d1.y
if(t!==C.d){a6.bL=H.l(a6.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ep=H.l(a6.y.q(0,c4),"$iar")
a6.bM=H.l(a6.y.q(0,c5),"$iR")
break
case C.i:a6.eq=H.l(a6.y.q(0,c4),"$ian")
a6.bM=H.l(a6.y.q(0,c5),"$iR")
break}}a6.sfZ(H.d([],[A.d0]))
a6.si8(H.d([],[A.d2]))
a6.siz(H.d([],[A.d3]))
a6.siL(H.d([],[A.d4]))
a6.siM(H.d([],[A.d5]))
a6.siN(H.d([],[A.d6]))
if(d1.k2){t=d1.z
if(t>0){a6.er=H.e(a6.y.q(0,"dirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.cK;(s&&C.a).h(s,new A.d0(g,f))}}t=d1.Q
if(t>0){a6.es=H.e(a6.y.q(0,"pntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.w(a7+r+a8))
H.l(e,"$iQ")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.w(a7+r+a8))
H.l(d,"$ia3")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.w(a7+r+a8))
H.l(c,"$ia3")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.w(a7+r+a8))
H.l(b,"$ia3")
s=a6.cL;(s&&C.a).h(s,new A.d2(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eu=H.e(a6.y.q(0,"spotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a7+r+a8))
H.l(e,"$iQ")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.w(a7+r+a8))
H.l(d,"$iQ")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.w(a7+r+a8))
H.l(c,"$ia3")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.w(a7+r+a8))
H.l(b,"$ia3")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.w(a7+r+a8))
H.l(a,"$ia3")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a7+r+a8))
H.l(a0,"$ia3")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a7+r+a8))
H.l(a1,"$ia3")
s=a6.cM;(s&&C.a).h(s,new A.d3(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.ev=H.e(a6.y.q(0,"txtDirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a7+r+a8))
H.l(e,"$iQ")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.w(a7+r+a8))
H.l(d,"$iQ")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a7+r+a8))
H.l(c,"$iQ")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.w(a7+r+a8))
H.l(b,"$iR")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.w(a7+r+a8))
H.l(a,"$iar")
s=a6.cN;(s&&C.a).h(s,new A.d4(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ew=H.e(a6.y.q(0,"txtPntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.w(a7+r+a8))
H.l(e,"$id1")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.w(a7+r+a8))
H.l(d,"$iQ")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.w(a7+r+a8))
H.l(c,"$iR")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.w(a7+r+a8))
H.l(b,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.w(a7+r+a8))
H.l(a,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a7+r+a8))
H.l(a0,"$ia3")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.w(a7+r+a8))
H.l(a1,"$ian")
s=a6.cO;(s&&C.a).h(s,new A.d5(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ex=H.e(a6.y.q(0,"txtSpotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.w(a7+r+a8))
H.l(g,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.w(a7+r+a8))
H.l(f,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.w(a7+r+a8))
H.l(e,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.w(a7+r+a8))
H.l(d,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.w(a7+r+a8))
H.l(c,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.w(a7+r+a8))
H.l(b,"$iR")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.w(a7+r+a8))
H.l(a,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a7+r+a8))
H.l(a0,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a7+r+a8))
H.l(a1,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a7+r+a8))
H.l(a2,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.w(a7+r+a8))
H.l(a3,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.w(a7+r+a8))
H.l(a4,"$ia3")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.w(a7+r+a8))
H.l(a5,"$iar")
s=a6.cP;(s&&C.a).h(s,new A.d6(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){if(c==null||!c.d)C.c.a5(b.a,b.d,1)
else{a.fc(c)
C.c.a5(b.a,b.d,0)}},
am:function(a,b,c){C.c.a5(b.a,b.d,1)},
sfP:function(a){this.r1=H.k(a,"$ib",[A.az],"$ab")},
sfZ:function(a){this.cK=H.k(a,"$ib",[A.d0],"$ab")},
si8:function(a){this.cL=H.k(a,"$ib",[A.d2],"$ab")},
siz:function(a){this.cM=H.k(a,"$ib",[A.d3],"$ab")},
siL:function(a){this.cN=H.k(a,"$ib",[A.d4],"$ab")},
siM:function(a){this.cO=H.k(a,"$ib",[A.d5],"$ab")},
siN:function(a){this.cP=H.k(a,"$ib",[A.d6],"$ab")}}
A.hM.prototype={
iR:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aE+"];\n"
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
iY:function(a){var u
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
iS:function(a){var u
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
j5:function(a){var u,t
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
j6:function(a){var u,t
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
j_:function(a){var u
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
ja:function(a){var u
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
aI:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iV:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aI(a,s,"emission")
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
iQ:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aI(a,s,"ambient")
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
iT:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aI(a,s,"diffuse")
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
iW:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aI(a,s,"invDiffuse")
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
j3:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aI(a,s,"specular")
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
iZ:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
j1:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aI(a,s,"reflect")
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
j2:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aI(a,s,"refract")
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
iU:function(a){var u,t=this.z
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
j0:function(a){var u,t=this.Q
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
j4:function(a){var u,t=this.ch
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
j7:function(a){var u,t,s=this.cx
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
j8:function(a){var u,t,s=this.cy
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
j9:function(a){var u,t,s=this.db
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
iX:function(a){var u
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
i:function(a){return this.at}}
A.d0.prototype={}
A.d4.prototype={}
A.d2.prototype={}
A.d5.prototype={}
A.d3.prototype={}
A.d6.prototype={}
A.cS.prototype={
dh:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eG:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dB(b,35633)
r.f=r.dB(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.lI(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.w("Failed to link shader: "+H.m(s)))}r.iu()
r.iw()},
a7:function(a){a.a.useProgram(this.r)
this.x.jw()},
dB:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lI(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
iu:function(){var u,t,s,r=this,q=H.d([],[A.dz]),p=r.a,o=H.af(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dz(p,t.name,s))}r.x=new A.fF(q)},
iw:function(){var u,t,s,r=this,q=H.d([],[A.eq]),p=r.a,o=H.af(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jr(t.type,t.size,t.name,s))}r.y=new A.j9(q)},
aU:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.lw(u,this.r,b,a,c)},
fW:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.lw(u,this.r,b,a,c)},
fX:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lw(u,this.r,b,a,c)},
bu:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jr:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aU(b,c,d)
case 5121:return u.aU(b,c,d)
case 5122:return u.aU(b,c,d)
case 5123:return u.aU(b,c,d)
case 5124:return u.aU(b,c,d)
case 5125:return u.aU(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.j4(u.a,c,d)
case 35665:return new A.Q(u.a,c,d)
case 35666:return new A.j7(u.a,c,d)
case 35667:return new A.j5(u.a,c,d)
case 35668:return new A.j6(u.a,c,d)
case 35669:return new A.j8(u.a,c,d)
case 35674:return new A.ja(u.a,c,d)
case 35675:return new A.d1(u.a,c,d)
case 35676:return new A.az(u.a,c,d)
case 35678:return u.fW(b,c,d)
case 35680:return u.fX(b,c,d)
case 35670:throw H.c(u.bu("BOOL",c))
case 35671:throw H.c(u.bu("BOOL_VEC2",c))
case 35672:throw H.c(u.bu("BOOL_VEC3",c))
case 35673:throw H.c(u.bu("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c0.prototype={
i:function(a){return this.b}}
A.ed.prototype={}
A.eq.prototype={}
A.j9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
S:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+"\n"
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
siO:function(a){H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d1.prototype={
aq:function(a){var u=new Float32Array(H.ce(H.k(a,"$ib",[P.q],"$ab")))
C.c.f2(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.az.prototype={
aq:function(a){var u=new Float32Array(H.ce(H.k(a,"$ib",[P.q],"$ab")))
C.c.f3(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ar.prototype={
fc:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.an.prototype={
fd:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.ku.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cW(s.b,b).cW(s.d.cW(s.c,b),c)
a.sa3(0,new V.a0(r.a,r.b,r.c))
a.seZ(r.w(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
a.se4(new V.ax(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kF.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.kH.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.C(p)
s=-s*p
u=r*p
a.sa3(0,new V.a0(s,u,q))
u=new V.L(s,u,q)
a.seZ(u.w(0,Math.sqrt(u.F(u))))
a.se4(new V.ax(1-c,2+c,-1,-1))},
$S:5}
F.kI.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.kJ.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.l7.prototype={
$2:function(a,b){return 0},
$S:6}
F.l8.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.C(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.F(t))).v(0,this.b+s)
a.sa3(0,new V.a0(s.a,s.b,s.c))},
$S:5}
F.l9.prototype={
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kQ.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a0(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kG.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lU(n.$1(o),m)
m=J.nI(J.lU(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.L(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.F(m)))
n=$.mG
if(n==null){n=new V.L(1,0,0)
$.mG=n
t=n}else t=n
n=u.aL(!J.a_(u,t)?V.mK():t)
s=n.w(0,Math.sqrt(n.F(n)))
n=s.aL(u)
t=n.w(0,Math.sqrt(n.F(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
a.sa3(0,J.nH(l,new V.a0(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.aa.prototype={
bc:function(){var u=this
if(!u.gbd()){C.a.N(u.a.a.d.b,u)
u.a.a.a8()}u.cm()
u.cn()
u.ie()},
cr:function(a){this.a=a
C.a.h(a.d.b,this)},
cs:function(a){this.b=a
C.a.h(a.d.c,this)},
it:function(a){this.c=a
C.a.h(a.d.d,this)},
cm:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cn:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
ie:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gbd:function(){return this.a==null||this.b==null||this.c==null},
fO:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eH())return
return s.w(0,Math.sqrt(s.F(s)))},
fS:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.F(r)))
r=t.u(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aL(r.w(0,Math.sqrt(r.F(r))))
return r.w(0,Math.sqrt(r.F(r)))},
cD:function(){var u,t=this
if(t.d!=null)return!0
u=t.fO()
if(u==null){u=t.fS()
if(u==null)return!1}t.d=u
t.a.a.a8()
return!0},
fN:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eH())return
return s.w(0,Math.sqrt(s.F(s)))},
fR:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.u(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.u(0,g).v(0,p).p(0,g).u(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.F(l)))
l=o.aL(q)
l=l.w(0,Math.sqrt(l.F(l))).aL(o)
q=l.w(0,Math.sqrt(l.F(l)))}return q},
cB:function(){var u,t=this
if(t.e!=null)return!0
u=t.fN()
if(u==null){u=t.fR()
if(u==null)return!1}t.e=u
t.a.a.a8()
return!0},
gjm:function(a){var u=this
if(J.a_(u.a,u.b))return!0
if(J.a_(u.b,u.c))return!0
if(J.a_(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
I:function(a){var u,t,s=this
if(s.gbd())return a+"disposed"
u=a+C.b.ap(J.at(s.a.e),0)+", "+C.b.ap(J.at(s.b.e),0)+", "+C.b.ap(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.I("")}}
F.hc.prototype={}
F.iy.prototype={
be:function(a,b,c){var u,t=b.a
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
bc:function(){var u=this
if(!u.gbd()){C.a.N(u.a.a.c.b,u)
u.a.a.a8()}u.cm()
u.cn()},
cr:function(a){this.a=a
C.a.h(a.c.b,this)},
cs:function(a){this.b=a
C.a.h(a.c.c,this)},
cm:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cn:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gbd:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
I:function(a){if(this.gbd())return a+"disposed"
return a+C.b.ap(J.at(this.a.e),0)+", "+C.b.ap(J.at(this.b.e),0)},
S:function(){return this.I("")}}
F.hx.prototype={}
F.j2.prototype={
be:function(a,b,c){var u,t=b.a
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
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ap(J.at(u.e),0)},
S:function(){return this.I("")}}
F.eb.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
bf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.C()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){r=g[s]
h.a.h(0,r.jo())}h.a.C()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){q=g[s]
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
if(n.a==null)H.u(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){m=g[s]
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
F.o8(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.E)(g),++s){j=g[s]
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
F.cz(l,k,i)}g=h.e
if(g!=null)g.av(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
jM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ae];u.length!==0;){t=C.a.gjA(u)
C.a.eR(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.be(0,t,q)){C.a.h(s,q)
C.a.eR(u,r)}}if(s.length>1)b.bf(s)}}p.a.C()
p.c.d5()
p.d.d5()
p.b.k6()
p.c.d6(new F.j2())
p.d.d6(new F.iy())
o=p.e
if(o!=null)o.av(0)},
ct:function(){this.jM(new F.ju(),new F.i2())},
e7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b1()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.by().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.du().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.bw().a)!==0)++s
r=a3.gdf(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dB])
for(n=0,m=0;m<s;++m){l=a3.ji(m)
k=l.gdf(l)
C.a.n(o,m,new Z.dB(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jK(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ce(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ct(new Z.ez(a0,f),o,a3)
e.sh7(H.d([],[Z.bJ]))
if(a.b.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(0,d.length,b))}if(a.c.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)}b=Z.lz(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(1,d.length,b))}if(a.d.b.length!==0){t=P.o
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
C.a.h(d,c.e)}b=Z.lz(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.I(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.I(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.I(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.I(t))}return C.a.m(s,"\n")},
a8:function(){var u=this.e
if(u!=null)u.G(null)},
$ipV:1}
F.ir.prototype={
e_:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ae],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cz(s,p,o))}}return u},
jd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ae],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
d6:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.be(0,p,n)){p.bc()
break}}}}},
d5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjm(s)
if(t)s.bc()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cD())s=!1
return s},
cC:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cB())s=!1
return s},
i:function(a){return this.S()},
I:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
S:function(){return this.I("")},
sh2:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")}}
F.is.prototype={
gl:function(a){return this.b.length},
d6:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.be(0,p,n)){p.bc()
break}}}}},
d5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.a_(s.a,s.b)
if(t)s.bc()}},
i:function(a){return this.S()},
I:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.m(s,"\n")},
S:function(){return this.I("")},
sh8:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.it.prototype={
gl:function(a){return this.b.length},
k6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
I:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
S:function(){return this.I("")},
scj:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
F.ae.prototype={
cG:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ey(u.cx,r,o,t,s,q,p,a,n)},
jo:function(){return this.cG(null)},
sa3:function(a,b){var u
if(!J.a_(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a8()}},
seZ:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a8()}},
se4:function(a){var u
if(!J.a_(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a8()}},
jK:function(a){var u,t,s=this
if(a.A(0,$.b1())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.by())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bx())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bz())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bA())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.du())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dv())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.cp()))return H.d([s.ch],[P.q])
else if(a.A(0,$.bw())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cD:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.O(0,new F.jz(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.av(0)}return!0},
cB:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.O(0,new F.jy(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.av(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
I:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ap(J.at(s.e),0))
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
C.a.h(q,V.S(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
S:function(){return this.I("")}}
F.jz.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:11}
F.jy.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:11}
F.jp.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a8()
return!0},
e0:function(a,b,c,d,e,f,g){var u=F.ey(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bv:function(a,b,c,d,e,f){return this.e0(a,b,c,null,d,e,f)},
je:function(a,b,c,d,e,f){return this.e0(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cD()
return!0},
cC:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cB()
return!0},
jl:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.S()},
I:function(a){var u,t,s,r
this.C()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
S:function(){return this.I("")},
siP:function(a){this.c=H.k(a,"$ib",[F.ae],"$ab")}}
F.jq.prototype={
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
O:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.O(u.b,b)
C.a.O(u.c,new F.jr(u,b))
C.a.O(u.d,new F.js(u,b))},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sh3:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")},
sh4:function(a){this.c=H.k(a,"$ib",[F.aa],"$ab")},
sh5:function(a){this.d=H.k(a,"$ib",[F.aa],"$ab")}}
F.jr.prototype={
$1:function(a){H.e(a,"$iaa")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:11}
F.js.prototype={
$1:function(a){var u
H.e(a,"$iaa")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:11}
F.jt.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sh9:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
sha:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jv.prototype={}
F.ju.prototype={
be:function(a,b,c){return J.a_(b.f,c.f)}}
F.jw.prototype={}
F.i2.prototype={
bf:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[F.ae],"$ab")
u=V.d8()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a_(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}return}}
F.jx.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
scj:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
O.dY.prototype={
gt:function(){var u=this.dy
return u==null?this.dy=D.O():u},
X:function(a){var u
H.e(a,"$iA")
u=this.dy
if(u!=null)u.G(a)},
b6:function(){return this.X(null)},
dQ:function(a){H.e(a,"$iA")
this.a=null
this.X(a)},
ik:function(){return this.dQ(null)},
hm:function(a,b){var u=V.av
H.k(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.X(u)},
ho:function(a,b){var u=V.av
H.k(b,"$ii",[u],"$ai")
u=new D.bL([u])
u.b=!0
this.X(u)},
dw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.ac(a1.e.length+3,4)*4,a3=C.f.ac(a1.f.length+3,4)*4,a4=C.f.ac(a1.r.length+3,4)*4,a5=C.f.ac(a1.x.length+3,4)*4,a6=C.f.ac(a1.y.length+3,4)*4,a7=C.f.ac(a1.z.length+3,4)*4,a8=C.f.ac(a0.e.a.length+3,4)*4
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
f=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.b1()
if(h){j=$.by()
a=new Z.bh(a.a|j.a)}if(g){j=$.bx()
a=new Z.bh(a.a|j.a)}if(f){j=$.bz()
a=new Z.bh(a.a|j.a)}if(e){j=$.bA()
a=new Z.bh(a.a|j.a)}if(c){j=$.bw()
a=new Z.bh(a.a|j.a)}return new A.hM(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
a_:function(a,b){H.k(a,"$ib",[T.cY],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
ax:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();){t=u.d
t.toString
s=$.jo
if(s==null)s=$.jo=new V.L(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d8(s)}}},
eS:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dw()
u=H.e(a3.fr.j(0,a2.at),"$idX")
if(u==null){u=A.oe(a2,a3.a)
a3.e2(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.by
a2=a4.e
if(!(a2 instanceof Z.ct))a2=a4.e=null
if(a2==null||!a2.d.A(0,s)){a2=t.r1
if(a2)a4.d.as()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cC()
q.a.cC()
q=q.e
if(q!=null)q.av(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.jl()
p=p.e
if(p!=null)p.av(0)}n=a4.d.e7(new Z.eA(a3.a),s)
n.aM($.b1()).e=a1.a.Q.c
if(a2)n.aM($.by()).e=a1.a.cx.c
if(r)n.aM($.bx()).e=a1.a.ch.c
if(t.rx)n.aM($.bz()).e=a1.a.cy.c
if(q)n.aM($.bA()).e=a1.a.db.c
if(t.x1)n.aM($.bw()).e=a1.a.dx.c
a4.e=n}a2=T.cY
m=H.d([],[a2])
a1.a.a7(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga4(q)
r=r.dy
r.toString
r.aq(q.aj(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga4(q)
p=a3.dx
p=a3.cx=q.v(0,p.ga4(p))
q=p}r=r.fr
r.toString
r.aq(q.aj(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gk0()
p=a3.dx
p=a3.ch=q.v(0,p.ga4(p))
q=p}r=r.fy
r.toString
r.aq(q.aj(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.aq(C.n.aj(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.aq(C.n.aj(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.aq(C.n.aj(q,!0))}if(t.aE>0){l=a1.e.a.length
r=a1.a.k4
C.c.a5(r.a,r.d,l)
for(r=[P.q],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iav")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.ce(H.k(p.aj(0,!0),"$ib",r,"$ab")))
C.c.f3(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.h:a1.a_(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ar(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.i:a1.a_(m,a1.f.e)
r=a1.a
q=a1.f.e
r.am(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.j:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.h:a1.a_(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ar(r.y1,r.aE,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.i:a1.a_(m,a1.r.e)
r=a1.a
q=a1.r.e
r.am(r.y2,r.aE,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.j:r=a1.a
q=a1.x.f
r=r.at
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.h:a1.a_(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ar(r.by,r.bz,q)
q=a1.a
r=a1.x.f
q=q.at
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.i:a1.a_(m,a1.x.e)
r=a1.a
q=a1.x.e
r.am(r.ec,r.bz,q)
q=a1.a
r=a1.x.f
q=q.at
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bA
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.h:a1.a_(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ar(r.ed,r.bB,q)
q=a1.a
r=a1.y.f
q=q.bA
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.i:a1.a_(m,a1.y.e)
r=a1.a
q=a1.y.e
r.am(r.ee,r.bB,q)
q=a1.a
r=a1.y.f
q=q.bA
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bC
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bE
C.c.P(q.a,q.d,o)
break
case C.h:a1.a_(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ar(r.ef,r.bD,q)
q=a1.a
r=a1.z.f
q=q.bC
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bE
C.c.P(r.a,r.d,o)
break
case C.i:a1.a_(m,a1.z.e)
r=a1.a
q=a1.z.e
r.am(r.eg,r.bD,q)
q=a1.a
r=a1.z.f
q=q.bC
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bE
C.c.P(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.er
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cK
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.d8(f.a)
o=p.a
d=p.b
c=p.c
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.B(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.c.B(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.es
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cL
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbi(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbi(f))
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gaD(f)
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcu()
o=e.e
C.c.P(o.a,o.d,p)
p=f.gcv()
o=e.f
C.c.P(o.a,o.d,p)
p=f.gcw()
o=e.r
C.c.P(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eu
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cM
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbi(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcI(f).ks()
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbi(f))
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gaD(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkq()
o=e.f
C.c.P(o.a,o.d,p)
p=f.gkp()
o=e.r
C.c.P(o.a,o.d,p)
p=f.gcu()
o=e.x
C.c.P(o.a,o.d,p)
p=f.gcv()
o=e.y
C.c.P(o.a,o.d,p)
p=f.gcw()
o=e.z
C.c.P(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.ev
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
o=a1.a.cN
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbk()
H.k(m,"$ib",p,"$ab")
if(!C.a.Y(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcI(f)
d=e.d
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gbU()
d=e.b
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gbS(f)
d=e.c
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=i.d8(f.gcI(f))
d=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.B(c.a,c.d,d,o,b)
b=f.gaD(f)
o=e.f
C.c.B(o.a,o.d,b.a,b.b,b.c)
b=f.gbk()
o=b.geI(b)
if(!o){o=e.x
C.c.a5(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.a5(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.ew
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.y,q=r.length,p=[P.q],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
d=a1.a.cO
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbk()
H.k(m,"$ib",o,"$ab")
if(!C.a.Y(m,d)){d.a=m.length
C.a.h(m,d)}a=i.v(0,f.ga4(f))
d=f.ga4(f)
c=$.cO
d=d.bm(c==null?$.cO=new V.a0(0,0,0):c)
c=e.b
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=$.cO
d=a.bm(d==null?$.cO=new V.a0(0,0,0):d)
c=e.c
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=a.cU(0)
c=e.d
j=new Float32Array(H.ce(H.k(new V.dZ(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).aj(0,!0),"$ib",p,"$ab")))
C.c.f2(c.a,c.d,!1,j)
c=f.gaD(f)
d=e.e
C.c.B(d.a,d.d,c.a,c.b,c.c)
c=f.gbk()
d=c.geI(c)
if(!d){d=e.r
C.c.a5(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a5(d.a,d.d,0)}d=f.gcu()
c=e.x
C.c.P(c.a,c.d,d)
d=f.gcv()
c=e.y
C.c.P(c.a,c.d,d)
d=f.gcw()
c=e.z
C.c.P(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.ex
C.c.a5(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cP
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbk()
H.k(m,"$ib",a2,"$ab")
if(!C.a.Y(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gbi(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcI(f)
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbU()
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbS(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbi(f))
o=e.f
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbk()
o=p.geI(p)
if(!o){p=e.x
C.c.a5(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.a5(p.a,p.d,0)}p=f.gaD(f)
o=e.y
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkt()
o=e.z
C.c.P(o.a,o.d,p)
p=f.gku()
o=e.Q
C.c.P(o.a,o.d,p)
p=f.gcu()
o=e.ch
C.c.P(o.a,o.d,p)
p=f.gcv()
o=e.cx
C.c.P(o.a,o.d,p)
p=f.gcw()
o=e.cy
C.c.P(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.h:a1.a_(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ar(a2.eh,a2.bF,r)
break
case C.i:a1.a_(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.am(a2.ei,a2.bF,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga4(r).cU(0)}a2=a2.id
a2.toString
a2.aq(r.aj(0,!0))}if(t.dy){a1.a_(m,a1.ch)
a2=a1.a
r=a1.ch
a2.am(a2.ej,a2.ek,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bG
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
break
case C.h:a1.a_(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ar(a2.el,a2.bH,r)
r=a1.a
a2=a1.cx.f
r=r.bG
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break
case C.i:a1.a_(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.am(a2.em,a2.bH,r)
r=a1.a
a2=a1.cx.f
r=r.bG
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bJ
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bI
C.c.P(r.a,r.d,p)
break
case C.h:a1.a_(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ar(a2.en,a2.bK,r)
r=a1.a
a2=a1.cy.f
r=r.bJ
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bI
C.c.P(a2.a,a2.d,p)
break
case C.i:a1.a_(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.am(a2.eo,a2.bK,r)
r=a1.a
a2=a1.cy.f
r=r.bJ
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bI
C.c.P(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bL
C.c.P(a2.a,a2.d,q)
break
case C.h:a1.a_(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ar(a2.ep,a2.bM,q)
q=a1.a
a2=a1.db.f
q=q.bL
C.c.P(q.a,q.d,a2)
break
case C.i:a1.a_(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.am(a2.eq,a2.bM,q)
q=a1.a
a2=a1.db.f
q=q.bL
C.c.P(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(3553,q.b)}}q=a4.e
q.a7(a3)
q.ai(a3)
q.aw(a3)
if(r)a2.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.ea()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dw().at},
sfQ:function(a){this.e=H.k(a,"$ia5",[V.av],"$aa5")}}
O.hK.prototype={}
O.cG.prototype={
X:function(a){this.a.X(H.e(a,"$iA"))},
b6:function(){return this.X(null)},
aJ:function(){},
ir:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().N(0,t.gaT())
u=t.d
t.d=a
if(a!=null)a.gt().h(0,t.gaT())
s=new D.I(t.b+".texture2D",u,t.d,[T.ei])
s.b=!0
t.a.X(s)}},
is:function(a){}}
O.hL.prototype={}
O.b9.prototype={
dS:function(a){var u,t,s=this
if(!J.a_(s.f,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.X(t)}},
aJ:function(){this.fj()
this.dS(new V.a6(1,1,1))},
saD:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aJ()
u=t.a
u.a=null
u.X(null)}t.dS(b)}}
O.hN.prototype={
iq:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.I(u.b+".refraction",t,a,[P.q])
t.b=!0
u.a.X(t)}},
aJ:function(){this.c_()
this.iq(1)}}
O.hO.prototype={
co:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.X(t)}},
aJ:function(){this.c_()
this.co(100)}}
O.ec.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u},
X:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.G(a)},
b6:function(){return this.X(null)},
eS:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ied")
if(u==null){t=a.a
u=new A.ed(t,n)
u.dh(t,n)
u.eG(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia3")
u.ch=H.l(u.y.j(0,"ratio"),"$ia3")
u.cx=H.l(u.y.j(0,"boxClr"),"$iQ")
u.cy=H.l(u.y.j(0,"boxTxt"),"$ian")
u.db=H.l(u.y.j(0,"viewMat"),"$iaz")
a.e2(u)}o.a=u}if(b.e==null){t=b.d.e7(new Z.eA(a.a),$.b1())
t.aM($.b1()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a7(a)
q=o.b
p=r.Q
C.c.P(p.a,p.d,q)
q=r.ch
C.c.P(q.a,q.d,t/s)
s=o.c
r.cy.fd(s)
s=o.d
t=r.cx
C.c.B(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).cU(0)
r=r.db
r.toString
r.aq(s.aj(0,!0))
t=b.e
if(t instanceof Z.ct){t.a7(a)
t.ai(a)
t.aw(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.ea()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bP.prototype={}
T.cY.prototype={}
T.ei.prototype={}
T.iP.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.O():u}}
T.ej.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.O():u}}
T.iQ.prototype={
aV:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.p
W.ab(t,"load",H.n(new T.iR(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
il:function(a,b,c){var u,t,s,r
b=V.dt(b)
u=V.dt(a.width)
t=V.dt(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lf()
s.width=u
s.height=t
r=H.e(C.m.f8(s,"2d"),"$icu")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pl(r.getImageData(0,0,s.width,s.height))}}}
T.iR.prototype={
$1:function(a){var u=this,t=u.a,s=t.il(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.kd(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cJ()}++t.e},
$S:12}
V.bl.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dW.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.k(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.aw.prototype={
aN:function(a,b){return!this.fi(0,b)},
i:function(a){return"!["+this.dg(0)+"]"}}
V.ie.prototype={
aN:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c8(this.a),t=H.c8(this.b)
return u+".."+t},
$iaC:1}
V.ip.prototype={
fo:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aS([P.o,P.U])
for(t=new H.cF(a,a.gl(a),[H.ao(a,"z",0)]);t.E();)u.n(0,t.d,!0)
this.sip(u)},
aN:function(a,b){return this.a.bw(0,b)},
i:function(a){var u=this.a
return P.cV(u.gad(u),0,null)},
sip:function(a){this.a=H.k(a,"$iH",[P.o,P.U],"$aH")},
$iaC:1}
V.cT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d_(this.a.k(0,b))
r.sae(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
jz:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
siK:function(a){this.c=H.k(a,"$ib",[V.d_],"$ab")}}
V.eo.prototype={
i:function(a){var u=H.lQ(this.b,"\n","\\n"),t=H.lQ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cZ.prototype={
aP:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.E)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sig:function(a){var u=P.f
this.c=H.k(a,"$iH",[u,u],"$aH")}}
V.iU.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cT(this,b)
u.siK(H.d([],[V.d_]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cZ(a)
u=P.f
t.sig(new H.aS([u,u]))
this.b.n(0,a,t)}return t},
f1:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.eo]),k=this.c,j=[P.o],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.H(a,s)
q=k.jz(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eo(n==null?o.b:n,p,s)}++s}}},
siA:function(a){this.a=H.k(a,"$iH",[P.f,V.cT],"$aH")},
siD:function(a){this.b=H.k(a,"$iH",[P.f,V.cZ],"$aH")}}
V.d_.prototype={
i:function(a){return this.b.b+": "+this.dg(0)}}
X.fK.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a6:function(a){var u=this.fr
if(u!=null)u.G(a)},
say:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.o])
u.b=!0
t.a6(u)}},
sau:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.o])
u.b=!0
t.a6(u)}},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.af(u.getParameter(3379))
p=V.dt(s)
o=V.dt(r)
q=V.dt(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.eY(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.mv(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cJ()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cJ()
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
a.c=C.e.a9(s*h.a)
r=t.d
a.d=C.e.a9(r*h.b)
l=t.a
k=h.c
j=C.e.a9(l*k)
t=t.b
l=h.d
u.viewport(j,C.e.a9(t*l),C.e.a9(s*k),C.e.a9(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aw:function(a){a.a.bindFramebuffer(36160,null)}}
X.bY.prototype={$ibb:1}
X.hj.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.O():u},
a7:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.e.a9(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.e.a9(r*t)
r=C.e.a9(s.c*u)
a.c=r
s=C.e.a9(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aw:function(a){}}
X.hp.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.O():u},
a7:function(a){var u
a.cy.bR(V.c5())
u=V.c5()
a.db.bR(u)},
aw:function(a){a.cy.aO()
a.db.aO()},
$ibb:1,
$ibY:1}
X.e4.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.O():u},
a6:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.G(a)},
fK:function(){return this.a6(null)},
a7:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ba(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bR(k)
r=$.ml
if(r==null){r=V.mn()
q=V.mJ()
p=$.mF
r=V.md(r,q,p==null?$.mF=new V.L(0,0,-1):p)
$.ml=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aQ(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bR(u)},
aw:function(a){a.cy.aO()
a.db.aO()},
$ibb:1,
$ibY:1}
X.cW.prototype={}
V.bE.prototype={
bp:function(a){this.b=new P.hn(C.U)
this.c=null
this.sc7(H.d([],[[P.b,W.aI]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fV(q,0,q.length)
n=o==null?q:o
C.S.fb(p,H.lQ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaF(m.d),p)}},
eO:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.f],"$ab")
q.sc7(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bx():t).f1(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)q.bQ(t[r])},
sc7:function(a){this.d=H.k(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.l6.prototype={
$1:function(a){H.e(a,"$ibe")
P.lP(C.e.f0(this.a.gjD(),2)+" fps")},
$S:51}
V.h_.prototype={
bQ:function(a){var u=this
switch(a.a){case"Class":u.R(a.b,"#551")
break
case"Comment":u.R(a.b,"#777")
break
case"Id":u.R(a.b,"#111")
break
case"Num":u.R(a.b,"#191")
break
case"Reserved":u.R(a.b,"#119")
break
case"String":u.R(a.b,"#171")
break
case"Symbol":u.R(a.b,"#616")
break
case"Type":u.R(a.b,"#B11")
break
case"Whitespace":u.R(a.b,"#111")
break}},
bx:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iV()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.v("_"))
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
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.x(new H.v(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.x(new H.v(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.x(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bl())
t=a1.k(0,r).m(0,h)
u=V.x(new H.v("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.x(new H.v("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.x(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.x(new H.v("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bl())
t=a1.k(0,r).m(0,e)
u=V.x(new H.v("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.aw()
s=[V.aC]
t.sae(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.x(new H.v("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.x(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.aw()
t.sae(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.x(new H.v(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.x(new H.v(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.T("Num")
t=a1.k(0,n)
t.d=t.a.T("Num")
t=a1.k(0,m)
t.d=t.a.T("Symbol")
t=a1.k(0,j)
t.d=t.a.T("String")
t=a1.k(0,g)
t.d=t.a.T("String")
t=a1.k(0,c)
t.d=t.a.T(d)
t=a1.k(0,a0)
t.d=t.a.T(a0)
t=a1.k(0,q)
t=t.d=t.a.T(q)
u=[P.f]
t.aP(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aP(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aP(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hk.prototype={
bQ:function(a){var u=this
switch(a.a){case"Builtin":u.R(a.b,"#411")
break
case"Comment":u.R(a.b,"#777")
break
case"Id":u.R(a.b,"#111")
break
case"Num":u.R(a.b,"#191")
break
case"Preprocess":u.R(a.b,"#737")
break
case"Reserved":u.R(a.b,"#119")
break
case"Symbol":u.R(a.b,"#611")
break
case"Type":u.R(a.b,"#171")
break
case"Whitespace":u.R(a.b,"#111")
break}},
bx:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iV()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.v("_"))
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
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a2("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a2("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.x(new H.v(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.x(new H.v(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.x(new H.v("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.x(new H.v("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bl())
t=e.k(0,j).m(0,i)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.aw()
s=[V.aC]
t.sae(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.aw()
u.sae(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.v("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.x(new H.v(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.x(new H.v(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.T("Num")
u=e.k(0,n)
u.d=u.a.T("Num")
u=e.k(0,m)
u.d=u.a.T("Symbol")
u=e.k(0,i)
u.d=u.a.T(j)
u=e.k(0,g)
u.d=u.a.T(h)
u=e.k(0,f)
u.d=u.a.T(f)
u=e.k(0,q)
u=u.d=u.a.T(q)
t=[P.f]
u.aP(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aP(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aP(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hl.prototype={
bQ:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.R(a.b,"#911")
u.R("=",t)
break
case"Id":u.R(a.b,t)
break
case"Other":u.R(a.b,t)
break
case"Reserved":u.R(a.b,"#119")
break
case"String":u.R(a.b,"#171")
break
case"Symbol":u.R(a.b,"#616")
break}},
bx:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iV()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a2("a","z")
C.a.h(u.a,t)
t=V.a2("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a2("0","9")
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.x(new H.v("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.x(new H.v("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.x(new H.v("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.x(new H.v('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.x(new H.v("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.x(new H.v('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bl())
C.a.h(l.k(0,s).m(0,m).a,new V.bl())
u=l.k(0,m).m(0,m)
t=new V.aw()
t.sae(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.x(new H.v('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a2("a","z")
C.a.h(t.a,u)
u=V.a2("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aP(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.i8.prototype={
eO:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.sc7(H.d([],[[P.b,W.aI]]))
this.R(C.a.m(b,"\n"),"#111")},
bQ:function(a){},
bx:function(){return}}
V.ic.prototype={
dY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mB().gd3().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.dW(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lX(m.c).h(0,q)
o=W.o2("radio")
o.checked=s
o.name=u
u=W.p
W.ab(o,"change",H.n(new V.id(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lX(m.c).h(0,r.createElement("br"))},
aB:function(a,b,c){return this.dY(a,b,c,!1)},
dW:function(a){var u,t,s=P.mB(),r=P.f,q=P.oa(s.gd3(),r,r)
q.n(0,this.a,a)
u=s.eT(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kd([],[]).d9(""),"",t)}}
V.id.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.dW(u.d)}},
$S:12}
V.iu.prototype={
fp:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.p
W.ab(q,"scroll",H.n(new V.iw(o),{func:1,ret:-1,args:[r]}),!1,r)},
e1:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.iv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f1(C.a.jJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.pL(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fl(C.C,n,C.l,!1)
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
f7:function(a){var u,t,s,r=new V.h_("dart")
r.bp("dart")
u=new V.hk("glsl")
u.bp("glsl")
t=new V.hl("html")
t.bp("html")
s=C.a.jB(H.d([r,u,t],[V.bE]),new V.ix(a))
if(s!=null)return s
r=new V.i8("plain")
r.bp("plain")
return r},
dZ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ds(r).ab(r,"+")){C.a.n(b0,s,C.b.az(r,1))
C.a.h(u,1)
t=!0}else if(C.b.ab(r,"-")){C.a.n(b0,s,C.b.az(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f7(a8)
q.eO(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fl(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lZ()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.E)(r),++a0)C.a3.jh(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.E)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.E();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
jb:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.f],"$ab")
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
s=H.e(r.insertCell(-1),"$ibd").style
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
o=H.e(r.insertCell(-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
iv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iV()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.aw()
r=[V.aC]
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.aw()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.x(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.aw()
s.sae(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.x(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.x(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.x(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.aw()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.aw()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bl())
s=u.k(0,i).m(0,i)
t=new V.aw()
t.sae(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.T(p)
s=u.k(0,n)
s.d=s.a.T(o)
s=u.k(0,"CodeEnd")
s.d=s.a.T(m)
s=u.k(0,j)
s.d=s.a.T("Link")
s=u.k(0,i)
s.d=s.a.T(i)
this.b=u}}
V.iw.prototype={
$1:function(a){P.mx(C.t,new V.iv(this.a))},
$S:12}
V.iv.prototype={
$0:function(){var u=C.e.a9(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.ix.prototype={
$1:function(a){return H.e(a,"$ibE").a===this.a},
$S:52}
V.kV.prototype={
$0:function(){this.a.saa(0,F.kE(1,null,null,1))},
$S:0}
V.kW.prototype={
$0:function(){this.a.saa(0,F.kE(15,null,new V.kU(),15))},
$S:0}
V.kU.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.L(r.a,r.b,r.c)
u=r.w(0,Math.sqrt(r.F(r)))
r=a.f
s=u.v(0,t*0.1+s*0.1)
a.sa3(0,r.p(0,new V.a0(s.a,s.b,s.c)))},
$S:5}
V.kX.prototype={
$0:function(){this.a.saa(0,F.n6(!0,30,1))},
$S:0}
V.kY.prototype={
$0:function(){this.a.saa(0,F.n6(!1,30,0))},
$S:0}
V.kZ.prototype={
$0:function(){this.a.saa(0,F.n7(!0,!0,25,new V.kT(),50))},
$S:0}
V.kT.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
V.l_.prototype={
$0:function(){this.a.saa(0,F.nk(6,null,6))},
$S:0}
V.l0.prototype={
$0:function(){this.a.saa(0,F.nk(10,new V.kS(),10))},
$S:0}
V.kS.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
V.l1.prototype={
$0:function(){this.a.saa(0,F.nm())},
$S:0}
V.l2.prototype={
$0:function(){this.a.saa(0,F.pC())},
$S:0}
V.l3.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dZ("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dZ("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.ff=u.i
u=J.dQ.prototype
u.fh=u.i
u=P.i.prototype
u.fg=u.bV
u=W.X.prototype
u.bZ=u.an
u=W.f3.prototype
u.fk=u.aC
u=O.cG.prototype
u.fj=u.aJ
u=O.b9.prototype
u.c_=u.aJ
u=V.dW.prototype
u.fi=u.aN
u.dg=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pf","oJ",14)
u(P,"pg","oK",14)
u(P,"ph","oL",14)
t(P,"n5","pd",3)
s(W,"pv",4,null,["$4"],["oN"],29,0)
s(W,"pw",4,null,["$4"],["oO"],29,0)
var m
r(m=E.aq.prototype,"geM",0,0,null,["$1","$0"],["eN","jT"],1,0)
r(m,"geK",0,0,null,["$1","$0"],["eL","jQ"],1,0)
q(m,"gjO","jP",9)
q(m,"gjR","jS",9)
r(m=E.en.prototype,"gdi",0,0,null,["$1","$0"],["dk","dj"],1,0)
p(m,"gk9","eU",3)
o(m=X.eu.prototype,"ghB","hC",15)
o(m,"ghp","hq",15)
o(m,"ghv","hw",4)
o(m,"ghF","hG",32)
o(m,"ghD","hE",32)
o(m,"ghJ","hK",4)
o(m,"ghN","hO",4)
o(m,"ghz","hA",4)
o(m,"ghL","hM",4)
o(m,"ghx","hy",4)
o(m,"ghP","hQ",45)
o(m,"ghR","hS",15)
o(m,"gi6","i7",13)
o(m,"gi2","i3",13)
o(m,"gi4","i5",13)
r(D.bG.prototype,"gfv",0,0,null,["$1","$0"],["aG","fw"],1,0)
r(m=D.dS.prototype,"gdK",0,0,null,["$1","$0"],["dL","hH"],1,0)
o(m,"ghT","hU",38)
q(m,"ghj","hk",26)
q(m,"ghX","hY",26)
n(V.Y.prototype,"gl","cV",24)
n(V.L.prototype,"gl","cV",24)
r(m=U.cC.prototype,"gaW",0,0,null,["$1","$0"],["J","af"],1,0)
q(m,"gfE","fF",23)
q(m,"ghV","hW",23)
r(m=U.ev.prototype,"gaW",0,0,null,["$1","$0"],["J","af"],1,0)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
r(m=U.ew.prototype,"gaW",0,0,null,["$1","$0"],["J","af"],1,0)
o(m,"gca","cb",2)
o(m,"gcc","cd",2)
o(m,"gce","cf",2)
o(m,"ghc","hd",2)
o(m,"ghe","hf",2)
o(m,"giI","iJ",2)
o(m,"giG","iH",2)
o(m,"giE","iF",2)
o(U.ex.prototype,"ghh","hi",2)
r(m=M.dD.prototype,"ga0",0,0,null,["$1","$0"],["a1","b5"],1,0)
q(m,"ghZ","i_",19)
q(m,"gi0","i1",19)
r(M.dF.prototype,"ga0",0,0,null,["$1","$0"],["a1","b5"],1,0)
r(m=M.dJ.prototype,"ga0",0,0,null,["$1","$0"],["a1","b5"],1,0)
q(m,"ghr","hs",9)
q(m,"ght","hu",9)
r(m=O.dY.prototype,"gaT",0,0,null,["$1","$0"],["X","b6"],1,0)
r(m,"gij",0,0,null,["$1","$0"],["dQ","ik"],1,0)
q(m,"ghl","hm",16)
q(m,"ghn","ho",16)
r(O.cG.prototype,"gaT",0,0,null,["$1","$0"],["X","b6"],1,0)
r(O.ec.prototype,"gaT",0,0,null,["$1","$0"],["X","b6"],1,0)
r(X.e4.prototype,"gfJ",0,0,null,["$1","$0"],["a6","fK"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.lo,J.a,J.au,P.eR,P.i,H.cF,P.b6,H.c2,H.d7,H.fT,H.j_,P.bH,H.cv,H.f8,P.ag,H.hy,H.hA,H.ht,P.fe,P.bj,P.aN,P.eB,P.iF,P.cU,P.iG,P.be,P.ap,P.kt,P.k7,P.cc,P.eQ,P.z,P.kl,P.hG,P.c_,P.ho,P.kr,P.kq,P.U,P.aB,P.ac,P.b5,P.i6,P.ef,P.eJ,P.hi,P.bI,P.b,P.H,P.P,P.ay,P.f,P.ak,P.cd,P.jf,P.ka,W.fW,W.bS,W.G,W.e2,W.f3,W.kg,W.dL,W.aE,W.k6,W.fm,P.kc,P.fj,P.k1,P.V,O.a5,O.cH,E.fN,E.aq,E.ig,E.en,Z.ez,Z.eA,Z.ct,Z.bJ,Z.bh,D.fQ,D.c1,D.A,X.dC,X.dR,X.hv,X.hD,X.aD,X.hV,X.iW,X.eu,D.bG,D.a9,D.e5,D.ee,D.ek,D.el,D.em,V.a6,V.ad,V.h9,V.dZ,V.av,V.a7,V.a0,V.ax,V.cQ,V.Y,V.L,U.ev,U.ew,U.ex,M.dF,M.dJ,M.aF,A.dz,A.fF,A.hM,A.d0,A.d4,A.d2,A.d5,A.d3,A.d6,A.c0,A.eq,A.j9,F.aa,F.hc,F.br,F.hx,F.bO,F.eb,F.ir,F.is,F.it,F.ae,F.jp,F.jq,F.jt,F.jv,F.jw,F.jx,O.bP,O.cG,T.iQ,V.bl,V.aC,V.dW,V.ie,V.ip,V.cT,V.eo,V.cZ,V.iU,X.cW,X.bY,X.hp,X.e4,V.bE,V.ic,V.iu])
s(J.a,[J.hs,J.dP,J.dQ,J.aR,J.bM,J.bp,H.cK,H.bN,W.j,W.fC,W.bX,W.cu,W.b3,W.b4,W.Z,W.eD,W.h0,W.h1,W.eF,W.dI,W.eH,W.h3,W.p,W.eK,W.aQ,W.hm,W.eM,W.bo,W.dU,W.hP,W.eS,W.eT,W.aT,W.eU,W.eX,W.aU,W.f0,W.f2,W.aW,W.f4,W.aX,W.f9,W.aK,W.fc,W.iT,W.aZ,W.ff,W.iY,W.jk,W.fn,W.fp,W.fr,W.ft,W.fv,P.b8,P.eO,P.bc,P.eZ,P.ib,P.fa,P.bf,P.fh,P.fG,P.eC,P.dA,P.dM,P.e6,P.e8,P.ca,P.ea,P.eh,P.er,P.f6])
s(J.dQ,[J.i7,J.bR,J.bq])
t(J.ln,J.aR)
s(J.bM,[J.dO,J.dN])
t(P.hC,P.eR)
s(P.hC,[H.es,W.jI,W.as,P.he])
t(H.v,H.es)
s(P.i,[H.h6,H.hH,H.d9])
s(H.h6,[H.c4,H.hz])
s(P.b6,[H.hI,H.jB])
t(H.hJ,H.c4)
t(H.fU,H.fT)
s(P.bH,[H.i3,H.hu,H.jd,H.j1,H.fP,H.im,P.fE,P.e3,P.aP,P.je,P.jb,P.cb,P.fS,P.fZ])
s(H.cv,[H.la,H.iM,H.kM,H.kN,H.kO,P.jE,P.jD,P.jF,P.jG,P.kk,P.kj,P.jP,P.jT,P.jQ,P.jR,P.jS,P.jW,P.jX,P.jV,P.jU,P.iH,P.iI,P.kB,P.k4,P.k3,P.k5,P.hB,P.hF,P.h4,P.h5,P.jj,P.jg,P.jh,P.ji,P.km,P.kn,P.kp,P.ko,P.kx,P.kw,P.ky,P.kz,W.h7,W.hR,W.hT,W.il,W.iE,W.jO,W.i1,W.i0,W.k8,W.k9,W.ki,W.ks,P.ke,P.kD,P.hf,P.hg,P.fI,E.ih,E.ii,E.ij,E.iS,D.ha,D.hb,F.ku,F.kF,F.kH,F.kI,F.kJ,F.l7,F.l8,F.l9,F.kQ,F.kG,F.jz,F.jy,F.jr,F.js,T.iR,V.l6,V.id,V.iw,V.iv,V.ix,V.kV,V.kW,V.kU,V.kX,V.kY,V.kZ,V.kT,V.l_,V.l0,V.kS,V.l1,V.l2,V.l3])
s(H.iM,[H.iC,H.cr])
t(H.jC,P.fE)
t(P.hE,P.ag)
s(P.hE,[H.aS,W.jH])
t(H.e_,H.bN)
s(H.e_,[H.de,H.dg])
t(H.df,H.de)
t(H.cL,H.df)
t(H.dh,H.dg)
t(H.e0,H.dh)
s(H.e0,[H.hW,H.hX,H.hY,H.hZ,H.i_,H.e1,H.cM])
t(P.k2,P.kt)
t(P.k0,P.k7)
t(P.fk,P.hG)
t(P.et,P.fk)
s(P.c_,[P.fL,P.h8])
t(P.bF,P.iG)
s(P.bF,[P.fM,P.hn,P.jn,P.jm])
t(P.jl,P.h8)
s(P.ac,[P.q,P.o])
s(P.aP,[P.c9,P.hq])
t(P.jK,P.cd)
s(W.j,[W.F,W.hd,W.cI,W.aV,W.di,W.aY,W.aL,W.dk,W.jA,W.da,P.fJ,P.bW])
s(W.F,[W.X,W.bD,W.db])
s(W.X,[W.y,P.r])
s(W.y,[W.dx,W.fD,W.cq,W.bC,W.bZ,W.aI,W.hh,W.cD,W.cE,W.io,W.bd,W.eg,W.iK,W.iL,W.cX])
s(W.b3,[W.cw,W.fX,W.fY])
t(W.fV,W.b4)
t(W.cx,W.eD)
t(W.eG,W.eF)
t(W.dH,W.eG)
t(W.eI,W.eH)
t(W.h2,W.eI)
t(W.aJ,W.bX)
t(W.eL,W.eK)
t(W.cA,W.eL)
t(W.eN,W.eM)
t(W.c3,W.eN)
t(W.bQ,W.p)
s(W.bQ,[W.b7,W.ah,W.b_])
t(W.hQ,W.eS)
t(W.hS,W.eT)
t(W.eV,W.eU)
t(W.hU,W.eV)
t(W.eY,W.eX)
t(W.cN,W.eY)
t(W.f1,W.f0)
t(W.i9,W.f1)
t(W.ik,W.f2)
t(W.dj,W.di)
t(W.iz,W.dj)
t(W.f5,W.f4)
t(W.iA,W.f5)
t(W.iD,W.f9)
t(W.fd,W.fc)
t(W.iN,W.fd)
t(W.dl,W.dk)
t(W.iO,W.dl)
t(W.fg,W.ff)
t(W.iX,W.fg)
t(W.bi,W.ah)
t(W.fo,W.fn)
t(W.jJ,W.fo)
t(W.eE,W.dI)
t(W.fq,W.fp)
t(W.jY,W.fq)
t(W.fs,W.fr)
t(W.eW,W.fs)
t(W.fu,W.ft)
t(W.kb,W.fu)
t(W.fw,W.fv)
t(W.kf,W.fw)
t(W.jL,W.jH)
t(W.jM,P.iF)
t(W.lA,W.jM)
t(W.jN,P.cU)
t(W.kh,W.f3)
t(P.kd,P.kc)
t(P.am,P.k1)
t(P.eP,P.eO)
t(P.hw,P.eP)
t(P.f_,P.eZ)
t(P.i4,P.f_)
t(P.cR,P.r)
t(P.fb,P.fa)
t(P.iJ,P.fb)
t(P.fi,P.fh)
t(P.iZ,P.fi)
t(P.fH,P.eC)
t(P.i5,P.bW)
t(P.f7,P.f6)
t(P.iB,P.f7)
s(E.fN,[Z.dB,A.cS,T.cY])
s(D.A,[D.bK,D.bL,D.I,X.ia])
s(X.ia,[X.dV,X.bs,X.cJ,X.ep])
s(O.a5,[D.dS,U.cC,M.dD])
s(D.fQ,[U.fR,U.ai])
s(U.ai,[U.dE,U.e9])
s(A.cS,[A.dX,A.ed])
s(A.eq,[A.R,A.j5,A.j6,A.j8,A.j3,A.a3,A.j4,A.Q,A.j7,A.ja,A.d1,A.az,A.ar,A.an])
t(F.iy,F.hc)
t(F.j2,F.hx)
t(F.ju,F.jv)
t(F.i2,F.jw)
s(O.bP,[O.dY,O.ec])
s(O.cG,[O.hK,O.hL,O.b9])
s(O.b9,[O.hN,O.hO])
s(T.cY,[T.ei,T.ej])
t(T.iP,T.ei)
s(V.dW,[V.aw,V.d_])
s(X.cW,[X.fK,X.hj])
s(V.bE,[V.h_,V.hk,V.hl,V.i8])
u(H.es,H.d7)
u(H.de,P.z)
u(H.df,H.c2)
u(H.dg,P.z)
u(H.dh,H.c2)
u(P.eR,P.z)
u(P.fk,P.kl)
u(W.eD,W.fW)
u(W.eF,P.z)
u(W.eG,W.G)
u(W.eH,P.z)
u(W.eI,W.G)
u(W.eK,P.z)
u(W.eL,W.G)
u(W.eM,P.z)
u(W.eN,W.G)
u(W.eS,P.ag)
u(W.eT,P.ag)
u(W.eU,P.z)
u(W.eV,W.G)
u(W.eX,P.z)
u(W.eY,W.G)
u(W.f0,P.z)
u(W.f1,W.G)
u(W.f2,P.ag)
u(W.di,P.z)
u(W.dj,W.G)
u(W.f4,P.z)
u(W.f5,W.G)
u(W.f9,P.ag)
u(W.fc,P.z)
u(W.fd,W.G)
u(W.dk,P.z)
u(W.dl,W.G)
u(W.ff,P.z)
u(W.fg,W.G)
u(W.fn,P.z)
u(W.fo,W.G)
u(W.fp,P.z)
u(W.fq,W.G)
u(W.fr,P.z)
u(W.fs,W.G)
u(W.ft,P.z)
u(W.fu,W.G)
u(W.fv,P.z)
u(W.fw,W.G)
u(P.eO,P.z)
u(P.eP,W.G)
u(P.eZ,P.z)
u(P.f_,W.G)
u(P.fa,P.z)
u(P.fb,W.G)
u(P.fh,P.z)
u(P.fi,W.G)
u(P.eC,P.ag)
u(P.f6,P.z)
u(P.f7,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bC.prototype
C.m=W.bZ.prototype
C.S=W.aI.prototype
C.V=J.a.prototype
C.a=J.aR.prototype
C.W=J.dN.prototype
C.f=J.dO.prototype
C.n=J.dP.prototype
C.e=J.bM.prototype
C.b=J.bp.prototype
C.X=J.bq.prototype
C.a2=W.cN.prototype
C.F=J.i7.prototype
C.c=P.ca.prototype
C.a3=W.bd.prototype
C.G=W.eg.prototype
C.w=J.bR.prototype
C.H=W.bi.prototype
C.I=W.da.prototype
C.a4=new P.fM()
C.J=new P.fL()
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

C.Q=new P.i6()
C.l=new P.jl()
C.R=new P.jn()
C.k=new P.k2()
C.d=new A.c0(0,"ColorSourceType.None")
C.j=new A.c0(1,"ColorSourceType.Solid")
C.h=new A.c0(2,"ColorSourceType.Texture2D")
C.i=new A.c0(3,"ColorSourceType.TextureCube")
C.t=new P.b5(0)
C.T=new P.b5(5e6)
C.U=new P.ho("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.o])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.B=H.d(u([]),[P.f])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.fU(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{o:"int",q:"double",ac:"num",f:"String",U:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.P,args:[F.ae,P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.i,E.aq]]},{func:1,ret:P.P,args:[D.A]},{func:1,ret:P.P,args:[F.aa]},{func:1,ret:P.P,args:[W.p]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.o,[P.i,V.av]]},{func:1,ret:V.a0,args:[P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.o,[P.i,M.aF]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,U.ai]]},{func:1,ret:P.q},{func:1,ret:P.U,args:[W.F]},{func:1,ret:-1,args:[P.o,[P.i,D.a9]]},{func:1,ret:P.U,args:[W.aE]},{func:1,ret:P.U,args:[P.f]},{func:1,ret:P.U,args:[W.X,P.f,P.f,W.bS]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[P.ac]},{func:1,ret:P.P,args:[P.f,,]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:P.U,args:[[P.i,D.a9]]},{func:1,args:[W.p]},{func:1,ret:P.V,args:[,,]},{func:1,ret:P.V,args:[P.o]},{func:1,args:[,P.f]},{func:1,ret:P.P,args:[P.f]},{func:1,args:[P.f]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.P,args:[P.be]},{func:1,ret:P.U,args:[V.bE]},{func:1,ret:P.P,args:[,],opt:[P.ay]},{func:1,ret:W.X,args:[W.F]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cs=null
$.m0=null
$.lE=!1
$.nc=null
$.n3=null
$.ni=null
$.kK=null
$.kP=null
$.lN=null
$.cf=null
$.dq=null
$.dr=null
$.lF=!1
$.a4=C.k
$.aA=[]
$.bn=null
$.lj=null
$.m5=null
$.m4=null
$.dd=P.lq(P.f,P.bI)
$.mi=null
$.mm=null
$.cO=null
$.mr=null
$.mE=null
$.mI=null
$.mG=null
$.mH=null
$.jo=null
$.mF=null
$.ml=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pS","no",function(){return H.nb("_$dart_dartClosure")})
u($,"pT","lS",function(){return H.nb("_$dart_js")})
u($,"pY","np",function(){return H.bg(H.j0({
toString:function(){return"$receiver$"}}))})
u($,"pZ","nq",function(){return H.bg(H.j0({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q_","nr",function(){return H.bg(H.j0(null))})
u($,"q0","ns",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q3","nv",function(){return H.bg(H.j0(void 0))})
u($,"q4","nw",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q2","nu",function(){return H.bg(H.mz(null))})
u($,"q1","nt",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q6","ny",function(){return H.bg(H.mz(void 0))})
u($,"q5","nx",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qn","lT",function(){return P.oI()})
u($,"q9","nz",function(){return P.oF()})
u($,"qo","nD",function(){return H.of(H.ce(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qq","nF",function(){return P.ot("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qr","nG",function(){return P.p6()})
u($,"qp","nE",function(){return P.ma(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qg","nC",function(){return Z.aM(0)})
u($,"qa","nA",function(){return Z.aM(511)})
u($,"qi","b1",function(){return Z.aM(1)})
u($,"qh","by",function(){return Z.aM(2)})
u($,"qc","bx",function(){return Z.aM(4)})
u($,"qj","bz",function(){return Z.aM(8)})
u($,"qk","bA",function(){return Z.aM(16)})
u($,"qd","du",function(){return Z.aM(32)})
u($,"qe","dv",function(){return Z.aM(64)})
u($,"qf","nB",function(){return Z.aM(96)})
u($,"ql","cp",function(){return Z.aM(128)})
u($,"qb","bw",function(){return Z.aM(256)})
u($,"pR","nn",function(){return new V.h9(1e-9)})
u($,"pQ","M",function(){return $.nn()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hW,Int32Array:H.hX,Int8Array:H.hY,Uint16Array:H.hZ,Uint32Array:H.i_,Uint8ClampedArray:H.e1,CanvasPixelArray:H.e1,Uint8Array:H.cM,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fC,HTMLAnchorElement:W.dx,HTMLAreaElement:W.fD,HTMLBaseElement:W.cq,Blob:W.bX,HTMLBodyElement:W.bC,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.cu,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cw,CSSUnitValue:W.cw,CSSPerspective:W.fV,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cx,MSStyleCSSProperties:W.cx,CSS2Properties:W.cx,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fX,CSSUnparsedValue:W.fY,DataTransferItemList:W.h0,HTMLDivElement:W.aI,DOMException:W.h1,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h2,DOMTokenList:W.h3,Element:W.X,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cA,FileWriter:W.hd,HTMLFormElement:W.hh,Gamepad:W.aQ,History:W.hm,HTMLCollection:W.c3,HTMLFormControlsCollection:W.c3,HTMLOptionsCollection:W.c3,ImageData:W.bo,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,Location:W.dU,MediaList:W.hP,MessagePort:W.cI,MIDIInputMap:W.hQ,MIDIOutputMap:W.hS,MimeType:W.aT,MimeTypeArray:W.hU,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.i9,RTCStatsReport:W.ik,HTMLSelectElement:W.io,SourceBuffer:W.aV,SourceBufferList:W.iz,SpeechGrammar:W.aW,SpeechGrammarList:W.iA,SpeechRecognitionResult:W.aX,Storage:W.iD,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.eg,HTMLTableRowElement:W.iK,HTMLTableSectionElement:W.iL,HTMLTemplateElement:W.cX,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iN,TextTrackList:W.iO,TimeRanges:W.iT,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iX,TrackDefaultList:W.iY,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jk,VideoTrackList:W.jA,WheelEvent:W.bi,Window:W.da,DOMWindow:W.da,Attr:W.db,CSSRuleList:W.jJ,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.jY,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kf,SVGLength:P.b8,SVGLengthList:P.hw,SVGNumber:P.bc,SVGNumberList:P.i4,SVGPointList:P.ib,SVGScriptElement:P.cR,SVGStringList:P.iJ,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.bf,SVGTransformList:P.iZ,AudioBuffer:P.fG,AudioParamMap:P.fH,AudioTrackList:P.fJ,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.i5,WebGLBuffer:P.dA,WebGLFramebuffer:P.dM,WebGLProgram:P.e6,WebGLRenderbuffer:P.e8,WebGL2RenderingContext:P.ca,WebGLShader:P.ea,WebGLTexture:P.eh,WebGLUniformLocation:P.er,SQLResultSetRowList:P.iB})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.nf,[])
else V.nf([])})})()
//# sourceMappingURL=test.dart.js.map
