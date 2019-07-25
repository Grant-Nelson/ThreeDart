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
a[c]=function(){a[c]=function(){H.oK(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ly(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l1:function l1(){},
nq:function(){return new P.cY("No element")},
nr:function(){return new P.cY("Too few elements")},
ab:function ab(a){this.a=a},
h8:function h8(){},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hL:function hL(a,b,c){this.a=a
this.b=b
this.$ti=c},
hM:function hM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jD:function jD(a,b,c){this.a=a
this.b=b
this.$ti=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(){},
ev:function ev(){},
eu:function eu(){},
cv:function(a){var u,t=H.T(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ot:function(a){return v.types[H.ad(a)]},
oy:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iJ},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aK(a)
if(typeof u!=="string")throw H.h(H.aH(a))
return u},
cU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nN:function(a,b){var u,t
if(typeof a!=="string")H.t(H.aH(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.T(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
nM:function(a){var u,t
if(typeof a!=="string")H.t(H.aH(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kN(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ci:function(a){return H.nE(a)+H.lw(H.c2(a),0,null)},
nE:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$icl){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cv(t.length>1&&C.j.b1(t,0)===36?C.j.cc(t,1):t)},
md:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nP:function(a){var u,t,s,r=H.c([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aH(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bI(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.aH(s))}return H.md(r)},
me:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aH(s))
if(s<0)throw H.h(H.aH(s))
if(s>65535)return H.nP(a)}return H.md(a)},
nO:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bI(u,10))>>>0,56320|u&1023)}throw H.h(P.bi(a,0,1114111,null,null))},
ch:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nL:function(a){var u=H.ch(a).getFullYear()+0
return u},
nJ:function(a){var u=H.ch(a).getMonth()+1
return u},
nF:function(a){var u=H.ch(a).getDate()+0
return u},
nG:function(a){var u=H.ch(a).getHours()+0
return u},
nI:function(a){var u=H.ch(a).getMinutes()+0
return u},
nK:function(a){var u=H.ch(a).getSeconds()+0
return u},
nH:function(a){var u=H.ch(a).getMilliseconds()+0
return u},
d:function(a){throw H.h(H.aH(a))},
e:function(a,b){if(a==null)J.b3(a)
throw H.h(H.c1(a,b))},
c1:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b4(!0,b,s,null)
u=H.ad(J.b3(a))
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.il(b,s)},
ol:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cj(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cj(a,c,!0,b,"end",u)
return new P.b4(!0,b,"end",null)},
aH:function(a){return new P.b4(!0,a,null,null)},
oh:function(a){if(typeof a!=="number")throw H.h(H.aH(a))
return a},
h:function(a){var u
if(a==null)a=new P.cR()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mU})
u.name=""}else u.toString=H.mU
return u},
mU:function(){return J.aK(this.dartException)},
t:function(a){throw H.h(a)},
D:function(a){throw H.h(P.cF(a))},
bp:function(a){var u,t,s,r,q,p
a=H.mS(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.jd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
je:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m7:function(a,b){return new H.i5(a,b==null?null:b.method)},
l2:function(a,b){var u=b==null,t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
ax:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kK(a)
if(a==null)return
if(a instanceof H.cI)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l2(H.n(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m7(H.n(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mX()
q=$.mY()
p=$.mZ()
o=$.n_()
n=$.n2()
m=$.n3()
l=$.n1()
$.n0()
k=$.n5()
j=$.n4()
i=r.as(u)
if(i!=null)return f.$1(H.l2(H.T(u),i))
else{i=q.as(u)
if(i!=null){i.method="call"
return f.$1(H.l2(H.T(u),i))}else{i=p.as(u)
if(i==null){i=o.as(u)
if(i==null){i=n.as(u)
if(i==null){i=m.as(u)
if(i==null){i=l.as(u)
if(i==null){i=o.as(u)
if(i==null){i=k.as(u)
if(i==null){i=j.as(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m7(H.T(u),i))}}return f.$1(new H.jo(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ek()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b4(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ek()
return a},
c3:function(a){var u
if(a instanceof H.cI)return a.b
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
oq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.W(0,a[u],a[t])}return b},
ox:function(a,b,c,d,e,f){H.l(a,"$ikX")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
cq:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ox)
a.$identity=u
return u},
ni:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iP().constructor.prototype):Object.create(new H.cA(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b5
if(typeof t!=="number")return t.t()
$.b5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lS(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ot,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lR:H.kQ
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lS(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nf:function(a,b,c,d){var u=H.kQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nf(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.t()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cB
return new Function(r+H.n(q==null?$.cB=H.fP("self"):q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.t()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cB
return new Function(r+H.n(q==null?$.cB=H.fP("self"):q)+"."+H.n(u)+"("+o+");}")()},
ng:function(a,b,c,d){var u=H.kQ,t=H.lR
switch(b?-1:a){case 0:throw H.h(H.nR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nh:function(a,b){var u,t,s,r,q,p,o,n=$.cB
if(n==null)n=$.cB=H.fP("self")
u=$.lQ
if(u==null)u=$.lQ=H.fP("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ng(s,!q,t,b)
if(s===1){n="return function(){return this."+H.n(n)+"."+H.n(t)+"(this."+H.n(u)+");"
u=$.b5
if(typeof u!=="number")return u.t()
$.b5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.n(n)+"."+H.n(t)+"(this."+H.n(u)+", "+o+");"
u=$.b5
if(typeof u!=="number")return u.t()
$.b5=u+1
return new Function(n+u+"}")()},
ly:function(a,b,c,d,e,f,g){return H.ni(a,b,H.ad(c),d,!!e,!!f,g)},
kQ:function(a){return a.a},
lR:function(a){return a.c},
fP:function(a){var u,t,s,r=new H.cA("self","target","receiver","name"),q=J.kZ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.od("boolean expression must not be null")
return a},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.b0(a,"String"))},
pD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b0(a,"double"))},
oD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b0(a,"num"))},
mI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.b0(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.b0(a,"int"))},
lF:function(a,b){throw H.h(H.b0(a,H.cv(H.T(b).substring(2))))},
oF:function(a,b){throw H.h(H.ne(a,H.cv(H.T(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.lF(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.oF(a,b)},
pF:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.Z(a)[b])return a
H.lF(a,b)},
lD:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.h(H.b0(a,"List<dynamic>"))},
oz:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.lF(a,b)},
mJ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fv:function(a,b){var u
if(typeof a=="function")return!0
u=H.mJ(J.Z(a))
if(u==null)return!1
return H.mx(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.lt)return a
$.lt=!0
try{if(H.fv(a,b))return a
u=H.kG(b)
t=H.b0(a,u)
throw H.h(t)}finally{$.lt=!1}},
cs:function(a,b){if(a!=null&&!H.lx(a,b))H.t(H.b0(a,H.kG(b)))
return a},
b0:function(a,b){return new H.jf("TypeError: "+P.dQ(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
ne:function(a,b){return new H.fQ("CastError: "+P.dQ(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
mD:function(a){var u,t=J.Z(a)
if(!!t.$icD){u=H.mJ(t)
if(u!=null)return H.kG(u)
return"Closure"}return H.ci(a)},
od:function(a){throw H.h(new H.jG(a))},
oK:function(a){throw H.h(new P.fY(H.T(a)))},
nR:function(a){return new H.ix(a)},
mL:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c2:function(a){if(a==null)return
return a.$ti},
pE:function(a,b,c){return H.cu(a["$a"+H.n(c)],H.c2(b))},
ct:function(a,b,c,d){var u
H.T(c)
H.ad(d)
u=H.cu(a["$a"+H.n(c)],H.c2(b))
return u==null?null:u[d]},
aI:function(a,b,c){var u
H.T(b)
H.ad(c)
u=H.cu(a["$a"+H.n(b)],H.c2(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ad(b)
u=H.c2(a)
return u==null?null:u[b]},
kG:function(a){return H.c0(a,null)},
c0:function(a,b){var u,t
H.i(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cv(a[0].name)+H.lw(a,1,b)
if(typeof a=="function")return H.cv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.n(b[t])}if('func' in a)return H.o6(a,b)
if('futureOr' in a)return"FutureOr<"+H.c0("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.j.t(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.c0(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.c0(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.c0(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.c0(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.op(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.T(b[h])
j=j+i+H.c0(e[d],a0)+(" "+H.n(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lw:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bX("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.c0(p,c)}return"<"+u.i(0)+">"},
cu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c,d){var u,t
H.T(b)
H.lD(c)
H.T(d)
if(a==null)return!1
u=H.c2(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.mG(H.cu(t[d],u),null,c,null)},
i:function(a,b,c,d){H.T(b)
H.lD(c)
H.T(d)
if(a==null)return a
if(H.dv(a,b,c,d))return a
throw H.h(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cv(b.substring(2))+H.lw(c,0,null),v.mangledGlobalNames)))},
mG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aV(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aV(a[t],b,c[t],d))return!1
return!0},
pB:function(a,b,c){return a.apply(b,H.cu(J.Z(b)["$a"+H.n(c)],H.c2(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="I"||a===-1||a===-2||H.mO(u)}return!1},
lx:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="I"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fv(a,b)}u=J.Z(a).constructor
t=H.c2(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aV(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.lx(a,b))throw H.h(H.b0(a,H.kG(b)))
return a},
aV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aV(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.mx(a,b,c,d)
if('func' in a)return c.name==="kX"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aV("type" in a?a.type:l,b,s,d)
else if(H.aV(a,b,s,d))return!0
else{if(!('$i'+"aL" in t.prototype))return!1
r=t.prototype["$a"+"aL"]
q=H.cu(r,u?a.slice(1):l)
return H.aV(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mG(H.cu(m,u),b,p,d)},
mx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aV(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aV(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aV(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aV(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oC(h,b,g,d)},
oC:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aV(c[s],d,a[s],b))return!1}return!0},
pC:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
oA:function(a){var u,t,s,r,q=H.T($.mN.$1(a)),p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.T($.mF.$2(a,q))
if(q!=null){p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kF(u)
$.ky[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kD[q]=u
return u}if(s==="-"){r=H.kF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mQ(a,u)
if(s==="*")throw H.h(P.mo(q))
if(v.leafTags[q]===true){r=H.kF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mQ(a,u)},
mQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kF:function(a){return J.lE(a,!1,null,!!a.$iJ)},
oB:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kF(u)
else return J.lE(u,c,null,null)},
ov:function(){if(!0===$.lB)return
$.lB=!0
H.ow()},
ow:function(){var u,t,s,r,q,p,o,n
$.ky=Object.create(null)
$.kD=Object.create(null)
H.ou()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mR.$1(q)
if(p!=null){o=H.oB(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ou:function(){var u,t,s,r,q,p,o=C.y()
o=H.cp(C.z,H.cp(C.A,H.cp(C.t,H.cp(C.t,H.cp(C.B,H.cp(C.C,H.cp(C.D(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mN=new H.kA(r)
$.mF=new H.kB(q)
$.mR=new H.kC(p)},
cp:function(a,b){return a(b)||b},
m0:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(P.kV("Illegal RegExp pattern ("+String(r)+")",a))},
oI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oo:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mT:function(a,b,c){var u=H.oJ(a,b,c)
return u},
oJ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mS(b),'g'),H.oo(c))},
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i5:function i5(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a){this.a=a},
cI:function cI(a,b){this.a=a
this.b=b},
kK:function kK(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cD:function cD(){},
iX:function iX(){},
iP:function iP(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a){this.a=a},
fQ:function fQ(a){this.a=a},
ix:function ix(a){this.a=a},
jG:function jG(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ht:function ht(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b
this.c=null},
dZ:function dZ(a,b){this.a=a
this.$ti=b},
hF:function hF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eS:function eS(a){this.b=a},
jF:function jF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dr:function(a){return a},
c_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c1(b,a))},
o5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.ol(a,b,c))
return b},
cP:function cP(){},
e7:function e7(){},
cO:function cO(){},
e8:function e8(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
e9:function e9(){},
i4:function i4(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
op:function(a){return J.lZ(a?Object.keys(a):[],null)},
oE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fw:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lB==null){H.ov()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.mo("Return interceptor for "+H.n(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lH()]
if(r!=null)return r
r=H.oA(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.lH(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ns:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.kO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.bi(a,0,4294967295,"length",null))
return J.lZ(new Array(a),b)},
lZ:function(a,b){return J.kZ(H.c(a,[b]))},
kZ:function(a){H.lD(a)
a.fixed$length=Array
return a},
m_:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nt:function(a,b){var u,t
for(u=a.length;b<u;){t=C.j.b1(a,b)
if(t!==32&&t!==13&&!J.m_(t))break;++b}return b},
l_:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.j.b9(a,u)
if(t!==32&&t!==13&&!J.m_(t))break}return b},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dU.prototype
return J.dT.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.dV.prototype
if(typeof a=="boolean")return J.hr.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.L)return a
return J.fw(a)},
or:function(a){if(typeof a=="number")return J.cg.prototype
if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.L)return a
return J.fw(a)},
kz:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.L)return a
return J.fw(a)},
lz:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.L)return a
return J.fw(a)},
mK:function(a){if(typeof a=="number")return J.cg.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cl.prototype
return a},
lA:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cl.prototype
return a},
os:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.L)return a
return J.fw(a)},
fy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.or(a).t(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).m(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.mK(a).bf(a,b)},
lL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mK(a).a1(a,b)},
Y:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oy(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kz(a).j(a,b)},
na:function(a,b,c,d){return J.os(a).jR(a,b,c,d)},
lM:function(a,b){return J.lz(a).I(a,b)},
lN:function(a,b){return J.lz(a).T(a,b)},
c6:function(a){return J.Z(a).gJ(a)},
cz:function(a){return J.lz(a).gY(a)},
b3:function(a){return J.kz(a).gk(a)},
lO:function(a,b){return J.lA(a).kj(a,b)},
lP:function(a,b,c){return J.lA(a).bw(a,b,c)},
aK:function(a){return J.Z(a).i(a)},
kN:function(a){return J.lA(a).fe(a)},
a:function a(){},
hr:function hr(){},
dV:function dV(){},
dW:function dW(){},
ic:function ic(){},
cl:function cl(){},
bw:function bw(){},
aR:function aR(a){this.$ti=a},
l0:function l0(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cg:function cg(){},
dU:function dU(){},
dT:function dT(){},
bV:function bV(){}},P={
nY:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oe()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cq(new P.jL(s),1)).observe(u,{childList:true})
return new P.jK(s,u,t)}else if(self.setImmediate!=null)return P.of()
return P.og()},
nZ:function(a){self.scheduleImmediate(H.cq(new P.jM(H.m(a,{func:1,ret:-1})),0))},
o_:function(a){self.setImmediate(H.cq(new P.jN(H.m(a,{func:1,ret:-1})),0))},
o0:function(a){P.lm(C.m,H.m(a,{func:1,ret:-1}))},
lm:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.d.ac(a.a,1000)
return P.o2(u<0?0:u,b)},
mm:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.bn]})
u=C.d.ac(a.a,1000)
return P.o3(u<0?0:u,b)},
o2:function(a,b){var u=new P.ff()
u.h4(a,b)
return u},
o3:function(a,b){var u=new P.ff()
u.h5(a,b)
return u},
aE:function(a){return new P.eA(new P.fc(new P.ak($.S,[a]),[a]),[a])},
aD:function(a,b){H.m(a,{func:1,ret:-1,args:[P.A,,]})
H.l(b,"$ieA")
a.$2(0,null)
b.b=!0
return b.a.a},
ar:function(a,b){P.o4(a,H.m(b,{func:1,ret:-1,args:[P.A,,]}))},
aC:function(a,b){H.l(b,"$ikU").aJ(0,a)},
aB:function(a,b){H.l(b,"$ikU").ba(H.ax(a),H.c3(a))},
o4:function(a,b){var u,t,s,r,q=null
H.m(b,{func:1,ret:-1,args:[P.A,,]})
u=new P.ko(b)
t=new P.kp(b)
s=J.Z(a)
if(!!s.$iak)a.cG(u,t,q)
else if(!!s.$iaL)a.c7(u,t,q)
else{r=new P.ak($.S,[null])
H.F(a,null)
r.a=4
r.c=a
r.cG(u,q,q)}},
aG:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.S.f7(new P.kv(u),P.I,P.A,null)},
mt:function(a,b){var u,t,s
b.a=1
try{a.c7(new P.jY(b),new P.jZ(b),null)}catch(s){u=H.ax(s)
t=H.c3(s)
P.lG(new P.k_(b,u,t))}},
jX:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iak")
if(u>=4){t=b.bE()
b.a=a.a
b.c=a.c
P.cm(b,t)}else{t=H.l(b.c,"$ibs")
b.a=2
b.c=a
a.e3(t)}},
cm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.l(g.c,"$iat")
g=g.b
r=s.a
q=s.b
g.toString
P.ks(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cm(h.a,b)}g=h.a
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
if(m){H.l(o,"$iat")
g=g.b
r=o.a
q=o.b
g.toString
P.ks(i,i,g,r,q)
return}l=$.S
if(l!=n)$.S=n
else l=i
g=b.c
if(g===8)new P.k4(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k3(u,b,o).$0()}else if((g&2)!==0)new P.k2(h,u,b).$0()
if(l!=null)$.S=l
g=u.b
if(!!J.Z(g).$iaL){if(g.a>=4){k=H.l(q.c,"$ibs")
q.c=null
b=q.bF(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.jX(g,q)
return}}j=b.b
k=H.l(j.c,"$ibs")
j.c=null
b=j.bF(k)
g=u.a
r=u.b
if(!g){H.F(r,H.x(j,0))
j.a=4
j.c=r}else{H.l(r,"$iat")
j.a=8
j.c=r}h.a=j
g=j}},
o9:function(a,b){if(H.fv(a,{func:1,args:[P.L,P.a9]}))return b.f7(a,null,P.L,P.a9)
if(H.fv(a,{func:1,args:[P.L]}))return H.m(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.kO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o8:function(){var u,t
for(;u=$.cn,u!=null;){$.dt=null
t=u.b
$.cn=t
if(t==null)$.ds=null
u.a.$0()}},
oc:function(){$.lu=!0
try{P.o8()}finally{$.dt=null
$.lu=!1
if($.cn!=null)$.lJ().$1(P.mH())}},
mA:function(a){var u=new P.eB(H.m(a,{func:1,ret:-1}))
if($.cn==null){$.cn=$.ds=u
if(!$.lu)$.lJ().$1(P.mH())}else $.ds=$.ds.b=u},
ob:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.cn
if(u==null){P.mA(a)
$.dt=$.ds
return}t=new P.eB(a)
s=$.dt
if(s==null){t.b=u
$.cn=$.dt=t}else{t.b=s.b
$.dt=s.b=t
if(t.b==null)$.ds=t}},
lG:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.S
if(C.k===u){P.co(t,t,C.k,a)
return}u.toString
P.co(t,t,u,H.m(u.cN(a),s))},
oT:function(a,b){return new P.ki(H.i(a,"$icZ",[b],"$acZ"),[b])},
ll:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.S
if(u===C.k){u.toString
return P.lm(a,b)}return P.lm(a,H.m(u.cN(b),t))},
nW:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bn]}
H.m(b,s)
u=$.S
if(u===C.k){u.toString
return P.mm(a,b)}t=u.ei(b,P.bn)
$.S.toString
return P.mm(a,H.m(t,s))},
ks:function(a,b,c,d,e){var u={}
u.a=d
P.ob(new P.kt(u,e))},
my:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.S
if(t===c)return d.$0()
$.S=c
u=t
try{t=d.$0()
return t}finally{$.S=u}},
mz:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.S
if(t===c)return d.$1(e)
$.S=c
u=t
try{t=d.$1(e)
return t}finally{$.S=u}},
oa:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.S
if(t===c)return d.$2(e,f)
$.S=c
u=t
try{t=d.$2(e,f)
return t}finally{$.S=u}},
co:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cN(d):c.jW(d,-1)
P.mA(d)},
jL:function jL(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
ff:function ff(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a,b){this.a=a
this.b=!1
this.$ti=b},
jI:function jI(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kv:function kv(a){this.a=a},
eD:function eD(){},
jJ:function jJ(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b){this.a=a
this.$ti=b},
bs:function bs(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ak:function ak(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jU:function jU(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(a){this.a=a},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
cZ:function cZ(){},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
d_:function d_(){},
iS:function iS(){},
ki:function ki(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bn:function bn(){},
at:function at(a,b){this.a=a
this.b=b},
kn:function kn(){},
kt:function kt(a,b){this.a=a
this.b=b},
kc:function kc(){},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function(a,b){return new H.aS([a,b])},
nw:function(a){return H.oq(a,new H.aS([null,null]))},
nx:function(a){return new P.k9([a])},
ls:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mv:function(a,b,c){var u=new P.ka(a,b,[c])
u.c=a.e
return u},
np:function(a,b,c){var u,t
if(P.lv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.aF,a)
try{P.o7(a,u)}finally{if(0>=$.aF.length)return H.e($.aF,-1)
$.aF.pop()}t=P.mk(b,H.oz(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
kY:function(a,b,c){var u,t
if(P.lv(a))return b+"..."+c
u=new P.bX(b)
C.a.h($.aF,a)
try{t=u
t.a=P.mk(t.a,a,", ")}finally{if(0>=$.aF.length)return H.e($.aF,-1)
$.aF.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lv:function(a){var u,t
for(u=$.aF.length,t=0;t<u;++t)if(a===$.aF[t])return!0
return!1},
o7:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.o],"$ab")
u=a.gY(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.n(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.A();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
m4:function(a){var u,t={}
if(P.lv(a))return"{...}"
u=new P.bX("")
try{C.a.h($.aF,a)
u.a+="{"
t.a=!0
J.lN(a,new P.hK(t,u))
u.a+="}"}finally{if(0>=$.aF.length)return H.e($.aF,-1)
$.aF.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k9:function k9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dh:function dh(a){this.a=a
this.c=this.b=null},
ka:function ka(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hG:function hG(){},
B:function B(){},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
al:function al(){},
kg:function kg(){},
eR:function eR(){},
cE:function cE(){},
dJ:function dJ(){},
h9:function h9(){},
jr:function jr(){},
js:function js(){},
km:function km(a){this.b=0
this.c=a},
lC:function(a){var u=H.nN(a,null)
if(u!=null)return u
throw H.h(P.kV(a,null))},
on:function(a){var u=H.nM(a)
if(u!=null)return u
throw H.h(P.kV("Invalid double",a))},
nn:function(a){if(a instanceof H.cD)return a.i(0)
return"Instance of '"+H.ci(a)+"'"},
ny:function(a,b,c){var u,t
H.F(b,c)
u=J.ns(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
m2:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.cz(a);u.A();)C.a.h(s,H.F(u.gM(u),c))
if(b)return s
return H.i(J.kZ(s),"$ib",t,"$ab")},
li:function(a){var u,t,s=P.A
H.i(a,"$if",[s],"$af")
if(a.constructor===Array){H.i(a,"$iaR",[s],"$aaR")
u=a.length
t=P.lc(0,null,u)
return H.me(t<u?C.a.fp(a,0,t):a)}return P.nT(a,0,null)},
nT:function(a,b,c){var u,t,s
H.i(a,"$if",[P.A],"$af")
u=J.cz(a)
for(t=0;t<b;++t)if(!u.A())throw H.h(P.bi(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gM(u))
return H.me(s)},
ld:function(a){return new H.hs(a,H.m0(a,!1,!0,!1))},
mk:function(a,b,c){var u=J.cz(b)
if(!u.A())return a
if(c.length===0){do a+=H.n(u.gM(u))
while(u.A())}else{a+=H.n(u.gM(u))
for(;u.A();)a=a+c+H.n(u.gM(u))}return a},
mw:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.A],"$ab")
if(c===C.n){u=$.n9().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.k7(H.F(b,H.aI(c,"cE",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.nO(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nk:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dL:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a,b){return new P.bv(1e6*b+1000*a)},
dQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nn(a)},
nc:function(a){return new P.b4(!1,null,null,a)},
kO:function(a,b,c){return new P.b4(!0,a,b,c)},
il:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
bi:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
lc:function(a,b,c){if(0>a||a>c)throw H.h(P.bi(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.bi(b,a,c,"end",null))
return b}return c},
lb:function(a,b){if(typeof a!=="number")return a.a1()
if(a<0)throw H.h(P.bi(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ad(e==null?J.b3(b):e)
return new P.hq(u,!0,a,c,"Index out of range")},
aA:function(a){return new P.jp(a)},
mo:function(a){return new P.jn(a)},
lh:function(a){return new P.cY(a)},
cF:function(a){return new P.fT(a)},
q:function(a){return new P.eK(a)},
kV:function(a,b){return new P.hj(a,b)},
nz:function(a,b,c,d){var u,t,s
H.m(b,{func:1,ret:d,args:[P.A]})
u=new Array(a)
u.fixed$length=Array
t=H.c(u,[d])
for(s=0;s<a;++s)C.a.W(t,s,b.$1(s))
return t},
fx:function(a){H.oE(a)},
a7:function a7(){},
aP:function aP(a,b){this.a=a
this.b=b},
E:function E(){},
bv:function bv(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bQ:function bQ(){},
fD:function fD(){},
cR:function cR(){},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
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
jp:function jp(a){this.a=a},
jn:function jn(a){this.a=a},
cY:function cY(a){this.a=a},
fT:function fT(a){this.a=a},
i8:function i8(){},
ek:function ek(){},
fY:function fY(a){this.a=a},
eK:function eK(a){this.a=a},
hj:function hj(a,b){this.a=a
this.b=b},
A:function A(){},
f:function f(){},
aQ:function aQ(){},
b:function b(){},
O:function O(){},
I:function I(){},
ai:function ai(){},
L:function L(){},
e1:function e1(){},
a9:function a9(){},
o:function o(){},
bX:function bX(a){this.a=a},
ok:function(a){var u,t=J.Z(a)
if(!!t.$ibR){u=t.gev(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fk(a.data,a.height,a.width)},
oj:function(a){if(a instanceof P.fk)return{data:a.a,height:a.b,width:a.c}
return a},
bH:function(a){var u,t,s,r,q
if(a==null)return
u=P.nv(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.T(t[r])
u.W(0,q,a[q])}return u},
oi:function(a){var u={}
a.T(0,new P.kw(u))
return u},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(){},
k8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kb:function kb(){},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bx:function bx(){},
hD:function hD(){},
bC:function bC(){},
i6:function i6(){},
ig:function ig(){},
iW:function iW(){},
v:function v(){},
bF:function bF(){},
jc:function jc(){},
eP:function eP(){},
eQ:function eQ(){},
f_:function f_(){},
f0:function f0(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
c7:function c7(){},
i7:function i7(){},
eC:function eC(){},
dC:function dC(){},
dS:function dS(){},
ec:function ec(){},
ed:function ed(){},
ck:function ck(){},
ee:function ee(){},
el:function el(){},
et:function et(){},
iJ:function iJ(){},
f6:function f6(){},
f7:function f7(){}},W={
nb:function(){var u=document.createElement("a")
return u},
kR:function(){var u=document.createElement("canvas")
return u},
nm:function(a){H.l(a,"$ik")
return"wheel"},
lX:function(a){return W.no(a,null,null).au(new W.hn(),P.o)},
no:function(a,b,c){var u,t=W.ba,s=new P.ak($.S,[t]),r=new P.jJ(s,[t]),q=new XMLHttpRequest()
C.H.kA(q,"GET",a,!0)
t=W.bh
u={func:1,ret:-1,args:[t]}
W.a6(q,"load",H.m(new W.ho(q,r),u),!1,t)
W.a6(q,"error",H.m(r.gep(),u),!1,t)
q.send()
return s},
lY:function(a){var u=document.createElement("img")
u.src=a
return u},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mu:function(a,b,c,d){var u=W.k7(W.k7(W.k7(W.k7(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.mE(new W.jT(c),W.p)
u=new W.jS(a,b,u,!1,[e])
u.jo()
return u},
mE:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.S
if(u===C.k)return a
return u.ei(a,b)},
w:function w(){},
fz:function fz(){},
fB:function fB(){},
fC:function fC(){},
dA:function dA(){},
ca:function ca(){},
cC:function cC(){},
bO:function bO(){},
cG:function cG(){},
fU:function fU(){},
W:function W(){},
cH:function cH(){},
fV:function fV(){},
b6:function b6(){},
b7:function b7(){},
fW:function fW(){},
fX:function fX(){},
fZ:function fZ(){},
dM:function dM(){},
h_:function h_(){},
dN:function dN(){},
dO:function dO(){},
h0:function h0(){},
h1:function h1(){},
jP:function jP(a,b){this.a=a
this.b=b},
ac:function ac(){},
p:function p(){},
k:function k(){},
b8:function b8(){},
hd:function hd(){},
he:function he(){},
hi:function hi(){},
b9:function b9(){},
hm:function hm(){},
cf:function cf(){},
ba:function ba(){},
hn:function hn(){},
ho:function ho(a,b){this.a=a
this.b=b},
cK:function cK(){},
bR:function bR(){},
cL:function cL(){},
bb:function bb(){},
hH:function hH(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
hW:function hW(){},
hX:function hX(a){this.a=a},
be:function be(){},
hY:function hY(){},
aj:function aj(){},
jO:function jO(a){this.a=a},
K:function K(){},
cQ:function cQ(){},
bg:function bg(){},
id:function id(){},
bh:function bh(){},
iv:function iv(){},
iw:function iw(a){this.a=a},
iy:function iy(){},
bj:function bj(){},
iH:function iH(){},
bk:function bk(){},
iI:function iI(){},
bl:function bl(){},
iQ:function iQ(){},
iR:function iR(a){this.a=a},
aY:function aY(){},
bm:function bm(){},
aZ:function aZ(){},
iY:function iY(){},
iZ:function iZ(){},
j7:function j7(){},
bo:function bo(){},
b_:function b_(){},
ja:function ja(){},
jb:function jb(){},
bZ:function bZ(){},
jq:function jq(){},
jC:function jC(){},
br:function br(){},
dg:function dg(){},
jQ:function jQ(){},
eF:function eF(){},
k6:function k6(){},
eX:function eX(){},
kh:function kh(){},
kj:function kj(){},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jS:function jS(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jT:function jT(a){this.a=a},
G:function G(){},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
dm:function dm(){},
dn:function dn(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fd:function fd(){},
fe:function fe(){},
dp:function dp(){},
dq:function dq(){},
fg:function fg(){},
fh:function fh(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){}},O={
kS:function(a){var u=new O.a_([a])
u.bx(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cN:function cN(){this.b=this.a=null},
mM:function(a){var u=C.j.ko(a,"/")
if(u<=0)return a
return C.j.bw(a,0,u)},
mC:function(a){var u,t,s=P.ld("([^\\s]+)")
$.mB=s
u=s.ke(a)
if(u==null)return H.c([],[P.o])
s=u.b
if(1>=s.length)return H.e(s,1)
t=s[1]
return H.c([t,C.j.fe(C.j.cc(a,t.length))],[P.o])},
ku:function(a){var u,t=H.c([],[P.o]),s=P.ld("([^\\s]+)")
$.mB=s
s=new H.jF(s,a,0)
for(;s.A();){u=s.d.b
if(1>=u.length)return H.e(u,1)
C.a.h(t,u[1])}return t},
bG:function(a){var u,t=O.ku(a),s=H.c([],[P.E]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,P.on(t[u]))}return s},
e6:function(a,b,c){return O.nC(a,b,!1)},
nC:function(a,b,c){var u=0,t=P.aE([P.O,P.o,O.aM]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e6=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.mM(a)
k=new O.kq(b)
k.scs(new H.aS([P.o,O.aM]))
k.c=null
n=k
u=7
return P.ar(W.lX(a),$async$e6)
case 7:m=e
u=8
return P.ar(n.aC(m,o,!1),$async$e6)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ax(h)
P.fx(a+": "+H.n(l))
j=P.q(a+": "+H.n(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$e6,t)},
aT:function(a,b){var u=null,t=null,s=!1
return O.nD(a,b)},
nD:function(a,b){var u=0,t=P.aE(E.V),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$aT=P.aG(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.mM(a)
k=f
j=new O.kr(b)
j.siT(H.c([],[O.du]))
j.sje(H.c([],[V.a5]))
j.shU(H.c([],[V.R]))
j.scs(new H.aS([P.o,O.aM]))
j.f=e
j.r=""
i=O.am()
h=i.r
h.sn(0,new V.u(0.35,0.35,0.35))
h=i.x
h.sn(0,new V.u(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.a4(null,!0,null,"",null,null)
if(k!=null)j.e.aI(0,k)
j.bJ()
n=j
u=7
return P.ar(W.lX(a),$async$aT)
case 7:m=a1
u=8
return P.ar(n.aC(m,o,d),$async$aT)
case 8:k=e
if(k!=null){i=new O.ih()
i.b=!0
k.C(i)}k=n.gkc()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.ax(c)
P.fx(a+": "+H.n(l))
k=P.q(a+": "+H.n(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$aT,t)},
kq:function kq(a){this.a=a
this.c=this.b=null},
du:function du(a){this.a=a
this.b=null},
kr:function kr(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ih:function ih(){this.b=null},
am:function(){var u,t,s=new O.aM()
s.she(O.kS(V.an))
s.e.bg(s.ghZ(),s.gi0())
u=new O.bd(s,"emission")
u.c=C.c
u.f=new V.u(0,0,0)
s.f=u
u=new O.bd(s,"ambient")
u.c=C.c
u.f=new V.u(0,0,0)
s.r=u
u=new O.bd(s,"diffuse")
u.c=C.c
u.f=new V.u(0,0,0)
s.x=u
u=new O.bd(s,"invDiffuse")
u.c=C.c
u.f=new V.u(0,0,0)
s.y=u
u=new O.hR(s,"specular")
u.c=C.c
u.f=new V.u(0,0,0)
u.ch=100
s.z=u
u=new O.hO(s,"bump")
u.c=C.c
s.Q=u
s.ch=null
u=new O.bd(s,"reflect")
u.c=C.c
u.f=new V.u(0,0,0)
s.cx=u
u=new O.hQ(s,"refract")
u.c=C.c
u.f=new V.u(0,0,0)
u.ch=1
s.cy=u
u=new O.hN(s,"alpha")
u.c=C.c
u.f=1
s.db=u
u=new D.dY()
u.bx(D.a8)
u.sfM(H.c([],[D.cc]))
u.sfN(H.c([],[D.eb]))
u.sfO(H.c([],[D.ej]))
u.sfP(H.c([],[D.em]))
u.sfQ(H.c([],[D.en]))
u.sfR(H.c([],[D.eo]))
u.ch=u.Q=null
u.dm(u.ghX(),u.giB(),u.giF())
s.dx=u
t=u.Q
u=t==null?u.Q=D.N():t
u.h(0,s.gj1())
u=s.dx
t=u.ch
u=t==null?u.ch=D.N():t
u.h(0,s.gaE())
s.dy=null
return s},
aM:function aM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){},
hO:function hO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bd:function bd(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hQ:function hQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hR:function hR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(){this.c=this.b=this.a=null},
bY:function bY(){}},E={
a4:function(a,b,c,d,e,f){var u=new E.V()
u.an(a,b,c,d,e,f)
return u},
nQ:function(a,b){var u=new E.im(a)
u.fF(a,b)
return u},
nU:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ica)return E.ml(a,!0,!0,!0,!1)
u=W.kR()
t=u.style
t.width="100%"
t.height="100%"
s.gek(a).h(0,u)
return E.ml(u,!0,!0,!0,!1)},
ml:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ep(),j=H.l(C.l.dj(a,"webgl2",P.nw(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ick")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nQ(j,a)
u=new T.j0(j)
u.b=H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ew(a)
t=new X.hv()
t.siU(P.nx(P.A))
u.b=t
t=new X.hZ(u)
t.f=0
t.r=V.bE()
t.x=V.bE()
t.ch=t.Q=1
u.c=t
t=new X.hI(u)
t.r=0
t.x=V.bE()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j9(u)
t.f=V.bE()
t.r=V.bE()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sht(H.c([],[[P.d_,P.L]]))
t=u.z
s=document
r=W.aj
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a6(s,"contextmenu",H.m(u.gi8(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a6(a,"focus",H.m(u.gig(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a6(a,"blur",H.m(u.gi2(),o),!1,p))
t=u.z
n=W.bb
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a6(s,"keyup",H.m(u.gim(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a6(s,"keydown",H.m(u.gik(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a6(a,"mousedown",H.m(u.gir(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,"mouseup",H.m(u.giv(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a6(a,l,H.m(u.git(),q),!1,r))
n=u.z
m=W.br;(n&&C.a).h(n,W.a6(a,H.T(W.nm(a)),H.m(u.gix(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a6(s,l,H.m(u.gia(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a6(s,"mouseup",H.m(u.gic(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a6(s,"pointerlockchange",H.m(u.giz(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a6(a,"touchstart",H.m(u.giP(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchend",H.m(u.giL(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a6(a,"touchmove",H.m(u.giN(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aP(Date.now(),!1)
k.cy=0
k.e5()
return k},
fK:function fK(){},
V:function V(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j4:function j4(a){this.a=a}},Z={
lq:function(a,b,c){var u
H.i(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.dr(c)),35044)
a.bindBuffer(b,null)
return new Z.ez(b,u)},
aU:function(a){return new Z.bq(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
df:function df(a){this.a=a},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a){this.a=a}},D={
N:function(){var u=new D.cd()
u.sao(null)
u.sbl(null)
u.c=null
u.d=0
return u},
fR:function fR(){},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
y:function y(){this.b=null},
bT:function bT(a){this.b=null
this.$ti=a},
bU:function bU(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
lU:function(){var u=new D.cc()
u.c=new V.u(1,1,1)
u.a=V.nX()
u.sn(0,null)
return u},
cc:function cc(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dY:function dY(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
eb:function eb(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
eo:function eo(){}},X={dE:function dE(a,b){this.a=a
this.b=b},dX:function dX(a,b){this.a=a
this.b=b},hv:function hv(){this.d=this.b=this.a=null},e0:function e0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hI:function hI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hZ:function hZ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ie:function ie(){},d6:function d6(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j9:function j9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ew:function ew(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kW:function(a){var u=new X.hk(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.le()
u.r=t
return u},
ma:function(a){var u,t,s=new X.ea()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gh6())
t=new D.H("mover",u,s.b,[U.au])
t.b=!0
s.a4(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.M().a)){s.c=1.0471975511965976
t=new D.H("fov",t,1.0471975511965976,[P.E])
t.b=!0
s.a4(t)}t=s.d
if(!(Math.abs(t-0.1)<$.M().a)){s.d=0.1
t=new D.H("near",t,0.1,[P.E])
t.b=!0
s.a4(t)}t=s.e
if(!(Math.abs(t-2000)<$.M().a)){s.e=2000
t=new D.H("far",t,2000,[P.E])
t.b=!0
s.a4(t)}return s},
fJ:function fJ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c9:function c9(){},
hk:function hk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){this.b=this.a=null},
ea:function ea(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){}},V={
kT:function(a){var u,t,s
H.i(a,"$ib",[P.E],"$ab")
u=a.length
if(0>=u)return H.e(a,0)
t=a[0]
if(1>=u)return H.e(a,1)
s=a[1]
if(2>=u)return H.e(a,2)
u=a[2]
if(typeof t!=="number")return t.a1()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.a1()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.a1()
if(u<0)u=0
else if(u>1)u=1
return new V.u(t,s,u)},
nj:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.f.bb(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.u(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.u(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.u(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.u(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.u(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.u(p,o,n)}},
oL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.dk(a-b,u)
return(a<0?a+u:a)+b},
X:function(a,b,c){if(a==null)return C.j.at("null",c)
return C.j.at(C.f.fd(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.E],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.X(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.W(u,p,C.j.at(u[p],s))}return u},
dw:function(a){return C.f.kW(Math.pow(2,C.o.bb(Math.log(H.oh(a))/Math.log(2))))},
bW:function(){var u=$.m6
return u==null?$.m6=V.bz(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bz:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e5:function(a,b,c){return V.bz(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l7:function(a,b,c,d){return V.bz(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m5:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bz(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bz(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l5:function(a,b,c){var u=c.w(0,Math.sqrt(c.G(c))),t=b.bn(u),s=t.w(0,Math.sqrt(t.G(t))),r=u.bn(s),q=new V.R(a.a,a.b,a.c),p=s.P(0).G(q),o=r.P(0).G(q),n=u.P(0).G(q)
return V.bz(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bE:function(){var u=$.mc
return u==null?$.mc=new V.a5(0,0):u},
l9:function(){var u=$.cT
return u==null?$.cT=new V.ah(0,0,0):u},
le:function(){var u=$.mh
return u==null?$.mh=V.mg(0,0,1,1):u},
mg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
ey:function(){var u=$.ms
return u==null?$.ms=new V.R(0,0,0):u},
lo:function(){var u=$.mr
return u==null?$.mr=new V.R(0,1,0):u},
nX:function(){var u=$.jt
return u==null?$.jt=new V.R(0,0,1):u},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
e4:function e4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
an:function an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function(a){var u=new V.iz()
u.fH(a)
return u},
fA:function fA(){},
by:function by(){},
e2:function e2(){},
bB:function bB(){this.a=null},
iz:function iz(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.b=a
this.c=null},
j8:function j8(){this.c=this.b=this.a=null},
d7:function d7(a){this.b=a
this.a=this.c=null},
oG:function(a){P.nW(C.G,new V.kH(a))},
nS:function(a){var u=new V.iD()
u.fI(a,!0)
return u},
kH:function kH(a){this.a=a},
iD:function iD(){this.b=this.a=null},
iF:function iF(a){this.a=a},
iE:function iE(a){this.a=a}},U={
lT:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bP:function(a){var u=new U.dI()
u.sV(0,a)
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){this.b=this.a=null},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
au:function au(){},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lW:function(){var u,t=new M.dP()
t.a=!0
t.shi(0,O.kS(E.V))
t.e.bg(t.gi4(),t.gi6())
t.y=t.x=t.r=t.f=null
u=X.kW(null)
t.sb8(null)
t.sbe(0,u)
return t},
dH:function dH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dK:function dK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aN:function aN(){}},A={
nA:function(a,b){var u=a.ax,t=new A.e3(b,u)
t.cf(b,u)
t.fB(a,b)
return t},
ln:function(a,b,c,d,e){var u=new A.jg(a,c,e)
u.f=d
u.sjs(P.ny(d,0,P.A))
return u},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
e3:function e3(a,b){var _=this
_.bO=_.ey=_.bN=_.ax=_.aK=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eO=_.cW=_.eN=_.c0=_.eM=_.eL=_.c_=_.bZ=_.eK=_.eJ=_.bY=_.bX=_.bW=_.eI=_.eH=_.bV=_.eG=_.eF=_.bU=_.eE=_.eD=_.bT=_.bS=_.eC=_.eB=_.bR=_.bQ=_.eA=_.ez=_.bP=null
_.d0=_.eS=_.d_=_.eR=_.cZ=_.eQ=_.cY=_.eP=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hP:function hP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aK=b3
_.ax=b4
_.bN=b5},
d8:function d8(a,b){this.b=a
this.c=b},
dc:function dc(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
da:function da(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dd:function dd(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
db:function db(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
de:function de(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cW:function cW(){},
cb:function cb(a,b){this.a=a
this.b=b},
eh:function eh(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ei:function ei(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(){},
jl:function jl(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
es:function es(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c}},F={
om:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.kx()
if(a<3)return
u=F.lg()
t=-6.283185307179586/a
s=H.c([],[F.aq])
r=u.a
q=new V.R(0,0,1)
q=q.w(0,Math.sqrt(q.G(q)))
C.a.h(s,r.jU(new V.aX(-1,-1,-1,-1),new V.af(1,1,1,1),new V.ah(0,0,0),new V.R(0,0,1),new V.a5(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.d(l)
q=new V.R(n,m,1).w(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.lp(new V.aX(-1,-1,-1,-1),null,new V.af(k,i,j,1),new V.ah(n*l,m*l,0),new V.R(0,0,1),new V.a5(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.cH(s)
return u},
nu:function(a,b){var u=new F.bc(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ai()
return u},
lg:function(){var u=new F.ef(),t=new F.ju(u)
t.b=!1
t.sjt(H.c([],[F.aq]))
u.a=t
t=new F.iC(u)
t.scv(H.c([],[F.bD]))
u.b=t
t=new F.iB(u)
t.shE(H.c([],[F.bc]))
u.c=t
t=new F.iA(u)
t.shv(H.c([],[F.ag]))
u.d=t
u.e=null
return u},
lp:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.jz()
r.scv(H.c([],[F.bD]))
s.b=r
r=new F.jy()
u=[F.bc]
r.shF(H.c([],u))
r.shG(H.c([],u))
s.c=r
r=new F.jv()
u=[F.ag]
r.shw(H.c([],u))
r.shx(H.c([],u))
r.shy(H.c([],u))
s.d=r
h=$.n6()
s.e=0
r=$.aO()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bL().a)!==0?e:t
s.x=(u&$.bK().a)!==0?b:t
s.y=(u&$.bM().a)!==0?f:t
s.z=(u&$.bN().a)!==0?g:t
s.Q=(u&$.n7().a)!==0?c:t
s.ch=(u&$.cy().a)!==0?i:0
s.cx=(u&$.bJ().a)!==0?a:t
return s},
kx:function kx(){},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(){this.b=this.a=null},
bD:function bD(){this.a=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){this.a=a
this.b=null},
iB:function iB(a){this.a=a
this.b=null},
iC:function iC(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jB:function jB(a){this.a=a},
jA:function jA(a){this.a=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
jv:function jv(){this.d=this.c=this.b=null},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){this.c=this.b=null},
jz:function jz(){this.b=null}},T={
lj:function(a){var u=new T.j_()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dF:function dF(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(a,b){this.c=a
this.d=b
this.b=null},
d1:function d1(){},
d2:function d2(){},
j_:function j_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
j2:function j2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j1:function j1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
m3:function(a){if(a>=64)return new Q.r(0,0)
return new Q.r(C.d.ac(a,8)+1,C.d.dk(a,8)+1)},
mj:function(){var u=new Q.iK()
u.fJ()
return u},
az:function(a){return new Q.z(a)},
hl:function hl(){this.d=this.c=this.a=null},
r:function r(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iK:function iK(){this.c=this.a=null},
iL:function iL(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(){this.d=this.c=null},
z:function z(a){this.a=a}},S={
fM:function(a,b,c,d,e,f){var u=null,t=new S.fL(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fu(a,b,c,d,e,f)
return t},
nd:function(a,b){var u=null,t=new S.dB(b)
t.an(u,!0,u,"",u,u)
t.fv(a,b)
return t},
h5:function(a,b,c,d,e,f){var u=null,t=new S.h4()
t.an(u,!0,u,"",u,u)
t.fw(a,b,c,d,e,f)
return t},
oH:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="modifiers",a4=document.getElementById("targetCanvas")
if(a4==null)H.t(P.q("Failed to find an element with the identifier, targetCanvas."))
u=E.nU(a4,!0,!0,!0,!1)
t=u.r
s=new U.ex()
r=U.lT()
r.sdi(0,!0)
r.sd8(6.283185307179586)
r.sd9(0)
r.sar(0,0)
r.seX(100)
r.sa8(0)
r.seu(0.5)
s.b=r
q=s.gbB()
r.gu().h(0,q)
r=U.lT()
r.sdi(0,!0)
r.sd8(6.283185307179586)
r.sd9(0)
r.sar(0,0)
r.seX(100)
r.sa8(0)
r.seu(0.5)
s.c=r
r.gu().h(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bA(!1,!1,!1)
o=s.d
s.d=p
r=[X.bA]
q=new D.H(a3,o,p,r)
q.b=!0
s.a_(q)
q=s.f
if(q!==!1){s.f=!1
q=new D.H("invertX",q,!1,[P.a7])
q.b=!0
s.a_(q)}q=s.r
if(q!==!1){s.r=!1
q=new D.H("invertY",q,!1,[P.a7])
q.b=!0
s.a_(q)}s.cJ(t)
s.b.sd9(-1.5707963267948966)
s.b.sd8(0)
s.b.sar(0,-0.5)
s.b.sdi(0,!1)
t=U.au
s=H.c([s,U.bP(V.l7(1.75,1.75,1.75,1)),U.bP(V.e5(0,0,15))],[t])
q=new U.cJ()
q.bx(t)
q.bg(q.ghV(),q.giD())
q.aI(0,s)
q.e=null
q.f=V.bW()
q.r=0
n=X.ma(q)
m=X.kW(a2)
if(m.b){m.b=!1
t=new D.H("clearColor",!0,!1,[P.a7])
t.b=!0
m.a4(t)}l=S.nd(u,a5)
t=l.k4.a
k=new M.dK()
k.a=!0
s=E.a4(a2,!0,a2,"",a2,a2)
j=F.lg()
q=j.a
i=new V.R(-1,-1,1)
i=i.w(0,Math.sqrt(i.G(i)))
h=q.bL(new V.aX(1,2,4,6),new V.af(1,0,0,1),new V.ah(-1,-1,0),new V.a5(0,1),i,a2)
q=j.a
i=new V.R(1,-1,1)
i=i.w(0,Math.sqrt(i.G(i)))
g=q.bL(new V.aX(0,3,4,6),new V.af(0,0,1,1),new V.ah(1,-1,0),new V.a5(1,1),i,a2)
q=j.a
i=new V.R(1,1,1)
i=i.w(0,Math.sqrt(i.G(i)))
f=q.bL(new V.aX(0,2,5,6),new V.af(0,1,0,1),new V.ah(1,1,0),new V.a5(1,0),i,a2)
q=j.a
i=V.bE()
e=new V.R(-1,1,1)
e=e.w(0,Math.sqrt(e.G(e)))
d=q.bL(new V.aX(0,2,4,7),new V.af(1,1,0,1),new V.ah(-1,1,0),i,e,a2)
j.d.cH(H.c([h,g,f,d],[F.aq]))
j.b7()
s.sa2(0,j)
k.e=s
k.sb8(a2)
k.sbe(0,a2)
k.sa0(a2)
s=new O.eg()
s.b=1.0471975511965976
s.d=new V.u(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gu().h(0,s.gaE())
t=new D.H("boxTexture",o,s.c,[T.d3])
t.b=!0
s.N(t)}k.sa0(s)
k.sbe(0,m)
k.sb8(n)
c=M.lW()
c.sbe(0,m)
c.sb8(n)
c.e.h(0,l)
b=new X.fJ()
b.d=b.c=b.b=b.a=512
b.e=!0
b.f=!1
b.x=b.r=1
b.ch=T.lj(a2)
b.cx=new V.af(0,0,0,1)
b.cy=!0
b.db=2000
b.dx=!0
b.dy=V.le()
b.sav(0,512)
b.saq(0,512)
a=new V.af(0,0,0,1)
if(!b.cx.m(0,a)){o=b.cx
b.cx=a
t=new D.H("color",o,a,[V.af])
t.b=!0
b.a4(t)}t=b.db
if(!(Math.abs(t-2000)<$.M().a)){b.db=2000
t=new D.H("depth",t,2000,[P.E])
t.b=!0
b.a4(t)}if(!b.f){b.f=!0
t=new D.H("autoResize",!1,!0,[P.a7])
t.b=!0
b.a4(t)}t=b.r
if(!(Math.abs(t-0.5)<$.M().a)){b.r=0.5
t=new D.H("autoResizeScalarX",t,0.5,[P.E])
t.b=!0
b.a4(t)}t=b.x
if(!(Math.abs(t-0.5)<$.M().a)){b.x=0.5
t=new D.H("autoResizeScalarY",t,0.5,[P.E])
t.b=!0
b.a4(t)}a0=V.le()
if(!J.U(b.dy,a0)){o=b.dy
b.dy=a0
t=new D.H("region",o,a0,[V.cV])
t.b=!0
b.a4(t)}a1=M.lW()
a1.sbe(0,b)
a1.sb8(n)
a1.e.h(0,l)
t=u.f
s=u.r
q=b.ch
i=new T.dF()
i.a=t
i.z=4
i.ch=i.Q=!1
p=new X.bA(!1,!1,!1)
i.c=p
t=new D.H(a3,a2,p,r)
t.b=!0
i.bz(t)
t=i.d
if(t!==q){if(t!=null)t.gu().S(0,i.gdE())
o=i.d
i.d=q
q.gu().h(0,i.gdE())
t=new D.H("texture",o,i.d,[T.d2])
t.b=!0
i.bz(t)}i.cJ(s)
t=i.f
if(t==null)t=i.f=D.N()
t.h(0,new S.kI(l,u,a1))
t=i.x
if(t==null)t=i.x=D.N()
t.h(0,new S.kJ(l))
t=M.aN
s=H.c([k,c],[t])
r=new M.dH()
r.bx(t)
r.e=!0
r.f=!1
r.r=null
r.bg(r.giH(),r.giJ())
r.aI(0,s)
t=u.d
if(t!==r){if(t!=null)t.gu().S(0,u.gdB())
u.d=r
r.gu().h(0,u.gdB())
u.dC()}V.oG(u)},
m1:function(a,b,c,d,e){var u=null,t=new S.hw(d,e,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,d,e)
t.fz(a,b,c,d,e)
return t},
hA:function(a,b,c,d,e,f){var u=null,t=new S.hz(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fA(a,b,c,d,e,f)
return t},
nB:function(a){var u=new S.hS()
u.fC(a)
return u},
m9:function(a,b,c,d,e,f){var u=null,t=new S.i9(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fD(a,b,c,d,e,f)
return t},
mf:function(a,b,c,d,e,f){var u=null,t=new S.ii(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fE(a,b,c,d,e,f)
return t},
is:function(a,b,c,d,e,f){var u=null,t=new S.ir(e,f,b,c)
t.an(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fG(a,b,c,d,e,f)
return t},
nV:function(a,b,c,d){var u=null,t=new S.d4(d,b,c)
t.an(u,!0,u,"",u,u)
t.fK(a,b,c,d)
return t},
fL:function fL(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fO:function fO(){},
dB:function dB(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
h4:function h4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(){},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a){this.a=a},
hw:function hw(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hy:function hy(){},
hz:function hz(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hC:function hC(){},
hS:function hS(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ib:function ib(){},
cS:function cS(){},
ii:function ii(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ik:function ik(){},
ir:function ir(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iu:function iu(){},
d4:function d4(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
j6:function j6(){}},L={
mP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=V.nS("3Dart Chess"),d=[P.o]
e.b6(H.c(["This example is in development and may still have a few issues and glitches."],d))
u=W.kR()
u.className="pageLargeCanvas"
u.id="targetCanvas"
e.a.appendChild(u)
e.ef(1,"About")
e.b6(H.c(["Click and drag to see the board from different angles.","Click without dragging to select a piece, unselect a piece, or pick which movement should be made.","The game will start with white's turn."],d))
e.b6(H.c(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],d))
e.b6(H.c(["\xab[Back to Examples List|../../]"],d))
e.ef(1,"Help wanted")
e.b6(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],d))
e.b6(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],d))
t=new Q.hl()
t.a=!0
s=Q.mj()
d=$.b2()
e=$.bu()
d=d.a
e=e.a
if(typeof d!=="number")return d.Z()
if(typeof e!=="number")return H.d(e)
r=d|e
q=$.b1().a
if(typeof q!=="number")return H.d(q)
p=1&q
s.B(new Q.r(1,1),new Q.z((r|p)>>>0))
o=$.cw()
o=o.a
if(typeof o!=="number")return o.Z()
n=o|e
s.B(new Q.r(1,2),new Q.z((n|p)>>>0))
m=$.bt()
m=m.a
if(typeof m!=="number")return m.Z()
l=m|e
s.B(new Q.r(1,3),new Q.z((l|p)>>>0))
k=$.bI()
k=k.a
if(typeof k!=="number")return k.Z()
s.B(new Q.r(1,4),new Q.z((k|e|p)>>>0))
j=$.aJ()
j=j.a
if(typeof j!=="number")return j.Z()
s.B(new Q.r(1,5),new Q.z((j|e|p)>>>0))
i=2&q
s.B(new Q.r(1,6),new Q.z((l|i)>>>0))
s.B(new Q.r(1,7),new Q.z((n|i)>>>0))
s.B(new Q.r(1,8),new Q.z((r|i)>>>0))
r=$.cx()
r=r.a
if(typeof r!=="number")return r.Z()
e=r|e
s.B(new Q.r(2,1),new Q.z((e|p)>>>0))
s.B(new Q.r(2,2),new Q.z((e|i)>>>0))
n=3&q
s.B(new Q.r(2,3),new Q.z((e|n)>>>0))
l=4&q
s.B(new Q.r(2,4),new Q.z((e|l)>>>0))
h=5&q
s.B(new Q.r(2,5),new Q.z((e|h)>>>0))
g=6&q
s.B(new Q.r(2,6),new Q.z((e|g)>>>0))
f=7&q
s.B(new Q.r(2,7),new Q.z((e|f)>>>0))
q=8&q
s.B(new Q.r(2,8),new Q.z((e|q)>>>0))
e=$.ae()
e=e.a
if(typeof e!=="number")return H.d(e)
r|=e
s.B(new Q.r(7,1),new Q.z((r|p)>>>0))
s.B(new Q.r(7,2),new Q.z((r|i)>>>0))
s.B(new Q.r(7,3),new Q.z((r|n)>>>0))
s.B(new Q.r(7,4),new Q.z((r|l)>>>0))
s.B(new Q.r(7,5),new Q.z((r|h)>>>0))
s.B(new Q.r(7,6),new Q.z((r|g)>>>0))
s.B(new Q.r(7,7),new Q.z((r|f)>>>0))
s.B(new Q.r(7,8),new Q.z((r|q)>>>0))
d|=e
s.B(new Q.r(8,1),new Q.z((d|p)>>>0))
r=o|e
s.B(new Q.r(8,2),new Q.z((r|p)>>>0))
q=m|e
s.B(new Q.r(8,3),new Q.z((q|p)>>>0))
s.B(new Q.r(8,4),new Q.z((k|e|p)>>>0))
s.B(new Q.r(8,5),new Q.z((j|e|p)>>>0))
s.B(new Q.r(8,6),new Q.z((q|i)>>>0))
s.B(new Q.r(8,7),new Q.z((r|i)>>>0))
s.B(new Q.r(8,8),new Q.z((d|i)>>>0))
t.c=s
P.ll(C.m,new L.kE(t))},
kE:function kE(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q,S,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l1.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gJ:function(a){return H.cU(a)},
i:function(a){return"Instance of '"+H.ci(a)+"'"}}
J.hr.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia7:1}
J.dV.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iI:1}
J.dW.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ic.prototype={}
J.cl.prototype={}
J.bw.prototype={
i:function(a){var u=a[$.mW()]
if(u==null)return this.fs(a)
return"JavaScript function for "+H.n(J.aK(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikX:1}
J.aR.prototype={
h:function(a,b){H.F(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.aA("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.aA("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
aI:function(a,b){var u,t
H.i(b,"$if",[H.x(a,0)],"$af")
if(!!a.fixed$length)H.t(P.aA("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cF(a))}},
E:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.W(t,u,H.n(a[u]))
return t.join(b)},
kn:function(a){return this.E(a,"")},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fp:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.bi(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.bi(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gd6:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.nq())},
bv:function(a,b,c,d){var u,t,s=H.x(a,0)
H.i(d,"$if",[s],"$af")
if(!!a.immutable$list)H.t(P.aA("setRange"))
P.lc(b,c,a.length)
u=c-b
if(u===0)return
P.lb(0,"skipCount")
H.i(d,"$ib",[s],"$ab")
s=J.kz(d)
if(u>s.gk(d))throw H.h(H.nr())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
aW:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.kY(a,"[","]")},
gY:function(a){return new J.as(a,a.length,[H.x(a,0)])},
gJ:function(a){return H.cU(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.aA("set length"))
if(b<0)throw H.h(P.bi(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c1(a,b))
return a[b]},
W:function(a,b,c){H.F(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.aA("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c1(a,b))
a[b]=c},
t:function(a,b){var u,t=[H.x(a,0)]
H.i(b,"$ib",t,"$ab")
u=C.d.t(a.length,b.gk(b))
t=H.c([],t)
this.sk(t,u)
this.bv(t,0,a.length,a)
this.bv(t,a.length,u,b)
return t},
$if:1,
$ib:1}
J.l0.prototype={}
J.as.prototype={
gM:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.D(s))
u=t.c
if(u>=r){t.sdQ(null)
return!1}t.sdQ(s[u]);++t.c
return!0},
sdQ:function(a){this.d=H.F(a,H.x(this,0))},
$iaQ:1}
J.cg.prototype={
cS:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gc1(b)
if(this.gc1(a)===u)return 0
if(this.gc1(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc1:function(a){return a===0?1/a<0:a<0},
kW:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.aA(""+a+".toInt()"))},
bb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.aA(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aA(""+a+".round()"))},
jZ:function(a,b,c){if(C.d.cS(b,c)>0)throw H.h(H.aH(b))
if(this.cS(a,b)<0)return b
if(this.cS(a,c)>0)return c
return a},
fd:function(a,b){var u
if(b>20)throw H.h(P.bi(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gc1(a))return"-"+u
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
t:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a+b},
dk:function(a,b){var u
if(typeof b!=="number")throw H.h(H.aH(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eb(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.eb(a,b)},
eb:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.aA("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
bI:function(a,b){var u
if(a>0)u=this.j9(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j9:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a<b},
bf:function(a,b){if(typeof b!=="number")throw H.h(H.aH(b))
return a>=b},
$iE:1,
$iai:1}
J.dU.prototype={$iA:1}
J.dT.prototype={}
J.bV.prototype={
b9:function(a,b){if(b<0)throw H.h(H.c1(a,b))
if(b>=a.length)H.t(H.c1(a,b))
return a.charCodeAt(b)},
b1:function(a,b){if(b>=a.length)throw H.h(H.c1(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.h(P.kO(b,null,null))
return a+b},
bw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.il(b,null))
if(b>c)throw H.h(P.il(b,null))
if(c>a.length)throw H.h(P.il(c,null))
return a.substring(b,c)},
cc:function(a,b){return this.bw(a,b,null)},
fe:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.b1(r,0)===133){u=J.nt(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.b9(r,t)===133?J.l_(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l_:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.b9(u,s)===133)t=J.l_(u,s)}else{t=J.l_(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
at:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
c4:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.l(" ",u)},
kj:function(a,b){var u=a.indexOf(b,0)
return u},
ko:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.h(H.c1(a,b))
return a[b]},
$im8:1,
$io:1}
H.ab.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.b9(this.a,b)},
$aev:function(){return[P.A]},
$aB:function(){return[P.A]},
$af:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.h8.prototype={}
H.e_.prototype={
gM:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.kz(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.cF(s))
u=t.c
if(u>=q){t.sbj(null)
return!1}t.sbj(r.I(s,u));++t.c
return!0},
sbj:function(a){this.d=H.F(a,H.x(this,0))},
$iaQ:1}
H.hL.prototype={
gY:function(a){return new H.hM(J.cz(this.a),this.b,this.$ti)},
gk:function(a){return J.b3(this.a)},
I:function(a,b){return this.b.$1(J.lM(this.a,b))},
$af:function(a,b){return[b]}}
H.hM.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sbj(u.c.$1(t.gM(t)))
return!0}u.sbj(null)
return!1},
gM:function(a){return this.a},
sbj:function(a){this.a=H.F(a,H.x(this,1))},
$aaQ:function(a,b){return[b]}}
H.jD.prototype={
gY:function(a){return new H.jE(J.cz(this.a),this.b,this.$ti)}}
H.jE.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.ce.prototype={}
H.ev.prototype={}
H.eu.prototype={}
H.jd.prototype={
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
H.i5.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.n(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.n(t.a)+")"
return s+r+"' on '"+u+"' ("+H.n(t.a)+")"}}
H.jo.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cI.prototype={}
H.kK.prototype={
$1:function(a){if(!!J.Z(a).$ibQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.f8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia9:1}
H.cD.prototype={
i:function(a){return"Closure '"+H.ci(this).trim()+"'"},
$ikX:1,
gl2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iX.prototype={}
H.iP.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cv(u)+"'"}}
H.cA.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cU(this.a)
else u=typeof t!=="object"?J.c6(t):H.cU(t)
return(u^H.cU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.ci(u)+"'")}}
H.jf.prototype={
i:function(a){return this.a}}
H.fQ.prototype={
i:function(a){return this.a}}
H.ix.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.jG.prototype={
i:function(a){return"Assertion failed: "+P.dQ(this.a)}}
H.aS.prototype={
gk:function(a){return this.a},
gaX:function(a){return new H.dZ(this,[H.x(this,0)])},
er:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dN(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dN(t,b)}else return s.kk(b)},
kk:function(a){var u=this.d
if(u==null)return!1
return this.d4(this.co(u,J.c6(a)&0x3ffffff),a)>=0},
aI:function(a,b){J.lN(H.i(b,"$iO",this.$ti,"$aO"),new H.ht(this))},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bA(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bA(r,b)
s=t==null?null:t.b
return s}else return q.kl(b)},
kl:function(a){var u,t,s=this.d
if(s==null)return
u=this.co(s,J.c6(a)&0x3ffffff)
t=this.d4(u,a)
if(t<0)return
return u[t].b},
W:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.x(o,0))
H.F(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.dG(u==null?o.b=o.ct():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.dG(t==null?o.c=o.ct():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ct()
r=J.c6(b)&0x3ffffff
q=o.co(s,r)
if(q==null)o.cE(s,r,[o.cu(b,c)])
else{p=o.d4(q,b)
if(p>=0)q[p].b=c
else q.push(o.cu(b,c))}}},
T:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cF(s))
u=u.c}},
dG:function(a,b,c){var u,t=this
H.F(b,H.x(t,0))
H.F(c,H.x(t,1))
u=t.bA(a,b)
if(u==null)t.cE(a,b,t.cu(b,c))
else u.b=c},
cu:function(a,b){var u=this,t=new H.hE(H.F(a,H.x(u,0)),H.F(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.m4(this)},
bA:function(a,b){return a[b]},
co:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
hp:function(a,b){delete a[b]},
dN:function(a,b){return this.bA(a,b)!=null},
ct:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cE(t,u,t)
this.hp(t,u)
return t}}
H.ht.prototype={
$2:function(a,b){var u=this.a
u.W(0,H.F(a,H.x(u,0)),H.F(b,H.x(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.I,args:[H.x(u,0),H.x(u,1)]}}}
H.hE.prototype={}
H.dZ.prototype={
gk:function(a){return this.a.a},
gY:function(a){var u=this.a,t=new H.hF(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hF.prototype={
gM:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cF(t))
else{t=u.c
if(t==null){u.sdF(null)
return!1}else{u.sdF(t.a)
u.c=u.c.c
return!0}}},
sdF:function(a){this.d=H.F(a,H.x(this,0))},
$iaQ:1}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.kC.prototype={
$1:function(a){return this.a(H.T(a))},
$S:37}
H.hs.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
ghT:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.m0(u.a,t.multiline,!t.ignoreCase,!0)},
ke:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eS(u)},
hu:function(a,b){var u,t=this.ghT()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eS(u)},
$im8:1}
H.eS.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$ie1:1}
H.jF.prototype={
gM:function(a){return this.d},
A:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.hu(q,u)
if(t!=null){r.d=t
q=t.b
u=q.index
s=u+q[0].length
r.c=u===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iaQ:1,
$aaQ:function(){return[P.e1]}}
H.cP.prototype={$ipj:1}
H.e7.prototype={
gk:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cO.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]},
$ace:function(){return[P.E]},
$aB:function(){return[P.E]},
$if:1,
$af:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.e8.prototype={
$ace:function(){return[P.A]},
$aB:function(){return[P.A]},
$if:1,
$af:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.i_.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.c_(b,a,a.length)
return a[b]}}
H.e9.prototype={
gk:function(a){return a.length},
j:function(a,b){H.c_(b,a,a.length)
return a[b]},
$ipk:1}
H.i4.prototype={
gk:function(a){return a.length},
j:function(a,b){H.c_(b,a,a.length)
return a[b]},
$ipl:1}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
P.jL.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.jK.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jN.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ff.prototype={
h4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cq(new P.kl(this,b),0),a)
else throw H.h(P.aA("`setTimeout()` not found."))},
h5:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cq(new P.kk(this,a,Date.now(),b),0),a)
else throw H.h(P.aA("Periodic timer."))},
$ibn:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:4}
P.kk.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dz(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.eA.prototype={
aJ:function(a,b){var u,t=this
H.cs(b,{futureOr:1,type:H.x(t,0)})
if(t.b)t.a.aJ(0,b)
else if(H.dv(b,"$iaL",t.$ti,"$aaL")){u=t.a
b.c7(u.gk0(u),u.gep(),-1)}else P.lG(new P.jI(t,b))},
ba:function(a,b){if(this.b)this.a.ba(a,b)
else P.lG(new P.jH(this,a,b))},
$ikU:1}
P.jI.prototype={
$0:function(){this.a.a.aJ(0,this.b)},
$S:2}
P.jH.prototype={
$0:function(){this.a.a.ba(this.b,this.c)},
$S:2}
P.ko.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:33}
P.kp.prototype={
$2:function(a,b){this.a.$2(1,new H.cI(a,H.l(b,"$ia9")))},
$S:38}
P.kv.prototype={
$2:function(a,b){this.a(H.ad(a),b)},
$S:39}
P.eD.prototype={
ba:function(a,b){H.l(b,"$ia9")
if(a==null)a=new P.cR()
if(this.a.a!==0)throw H.h(P.lh("Future already completed"))
$.S.toString
this.aO(a,b)},
eq:function(a){return this.ba(a,null)},
$ikU:1}
P.jJ.prototype={
aJ:function(a,b){var u
H.cs(b,{futureOr:1,type:H.x(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.lh("Future already completed"))
u.h9(b)},
aO:function(a,b){this.a.ha(a,b)}}
P.fc.prototype={
aJ:function(a,b){var u
H.cs(b,{futureOr:1,type:H.x(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.lh("Future already completed"))
u.ck(b)},
k5:function(a){return this.aJ(a,null)},
aO:function(a,b){this.a.aO(a,b)}}
P.bs.prototype={
kq:function(a){if(this.c!==6)return!0
return this.b.b.dg(H.m(this.d,{func:1,ret:P.a7,args:[P.L]}),a.a,P.a7,P.L)},
kg:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.fv(u,{func:1,args:[P.L,P.a9]}))return H.cs(r.kT(u,a.a,a.b,null,t,P.a9),s)
else return H.cs(r.dg(H.m(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.ak.prototype={
c7:function(a,b,c){var u,t=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.S
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.o9(b,u)}return this.cG(a,b,c)},
au:function(a,b){return this.c7(a,null,b)},
cG:function(a,b,c){var u,t,s=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.ak($.S,[c])
t=b==null?1:3
this.dH(new P.bs(u,t,a,b,[s,c]))
return u},
dH:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.l(t.c,"$ibs")
t.c=a}else{if(s===2){u=H.l(t.c,"$iak")
s=u.a
if(s<4){u.dH(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.co(null,null,s,H.m(new P.jU(t,a),{func:1,ret:-1}))}},
e3:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.l(p.c,"$ibs")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.l(p.c,"$iak")
u=q.a
if(u<4){q.e3(a)
return}p.a=u
p.c=q.c}o.a=p.bF(a)
u=p.b
u.toString
P.co(null,null,u,H.m(new P.k1(o,p),{func:1,ret:-1}))}},
bE:function(){var u=H.l(this.c,"$ibs")
this.c=null
return this.bF(u)},
bF:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ck:function(a){var u,t,s=this,r=H.x(s,0)
H.cs(a,{futureOr:1,type:r})
u=s.$ti
if(H.dv(a,"$iaL",u,"$aaL"))if(H.dv(a,"$iak",u,null))P.jX(a,s)
else P.mt(a,s)
else{t=s.bE()
H.F(a,r)
s.a=4
s.c=a
P.cm(s,t)}},
aO:function(a,b){var u,t=this
H.l(b,"$ia9")
u=t.bE()
t.a=8
t.c=new P.at(a,b)
P.cm(t,u)},
h9:function(a){var u,t=this
H.cs(a,{futureOr:1,type:H.x(t,0)})
if(H.dv(a,"$iaL",t.$ti,"$aaL")){t.hh(a)
return}t.a=1
u=t.b
u.toString
P.co(null,null,u,H.m(new P.jW(t,a),{func:1,ret:-1}))},
hh:function(a){var u=this,t=u.$ti
H.i(a,"$iaL",t,"$aaL")
if(H.dv(a,"$iak",t,null)){if(a.a===8){u.a=1
t=u.b
t.toString
P.co(null,null,t,H.m(new P.k0(u,a),{func:1,ret:-1}))}else P.jX(a,u)
return}P.mt(a,u)},
ha:function(a,b){var u
this.a=1
u=this.b
u.toString
P.co(null,null,u,H.m(new P.jV(this,a,b),{func:1,ret:-1}))},
$iaL:1}
P.jU.prototype={
$0:function(){P.cm(this.a,this.b)},
$S:2}
P.k1.prototype={
$0:function(){P.cm(this.b,this.a.a)},
$S:2}
P.jY.prototype={
$1:function(a){var u=this.a
u.a=0
u.ck(a)},
$S:16}
P.jZ.prototype={
$2:function(a,b){H.l(b,"$ia9")
this.a.aO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.k_.prototype={
$0:function(){this.a.aO(this.b,this.c)},
$S:2}
P.jW.prototype={
$0:function(){var u=this.a,t=H.F(this.b,H.x(u,0)),s=u.bE()
u.a=4
u.c=t
P.cm(u,s)},
$S:2}
P.k0.prototype={
$0:function(){P.jX(this.b,this.a)},
$S:2}
P.jV.prototype={
$0:function(){this.a.aO(this.b,this.c)},
$S:2}
P.k4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.f8(H.m(s.d,{func:1}),null)}catch(r){u=H.ax(r)
t=H.c3(r)
if(o.d){s=H.l(o.a.a.c,"$iat").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.l(o.a.a.c,"$iat")
else q.b=new P.at(u,t)
q.a=!0
return}if(!!J.Z(n).$iaL){if(n instanceof P.ak&&n.a>=4){if(n.a===8){s=o.b
s.b=H.l(n.c,"$iat")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.au(new P.k5(p),null)
s.a=!1}},
$S:4}
P.k5.prototype={
$1:function(a){return this.a},
$S:47}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.F(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.dg(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ax(o)
t=H.c3(o)
s=n.a
s.b=new P.at(u,t)
s.a=!0}},
$S:4}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.l(m.a.a.c,"$iat")
r=m.c
if(H.C(r.kq(u))&&r.e!=null){q=m.b
q.b=r.kg(u)
q.a=!1}}catch(p){t=H.ax(p)
s=H.c3(p)
r=H.l(m.a.a.c,"$iat")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.at(t,s)
n.a=!0}},
$S:4}
P.eB.prototype={}
P.cZ.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ak($.S,[P.A])
r.a=0
u=H.x(s,0)
t=H.m(new P.iT(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.iU(r,q),{func:1,ret:-1})
W.a6(s.a,s.b,t,!1,u)
return q}}
P.iT.prototype={
$1:function(a){H.F(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.x(this.b,0)]}}}
P.iU.prototype={
$0:function(){this.b.ck(this.a.a)},
$S:2}
P.d_.prototype={}
P.iS.prototype={}
P.ki.prototype={}
P.bn.prototype={}
P.at.prototype={
i:function(a){return H.n(this.a)},
$ibQ:1}
P.kn.prototype={$ipy:1}
P.kt.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cR():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.kc.prototype={
kU:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.S){a.$0()
return}P.my(r,r,this,a,-1)}catch(s){u=H.ax(s)
t=H.c3(s)
P.ks(r,r,this,u,H.l(t,"$ia9"))}},
kV:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.k===$.S){a.$1(b)
return}P.mz(r,r,this,a,b,-1,c)}catch(s){u=H.ax(s)
t=H.c3(s)
P.ks(r,r,this,u,H.l(t,"$ia9"))}},
jW:function(a,b){return new P.ke(this,H.m(a,{func:1,ret:b}),b)},
cN:function(a){return new P.kd(this,H.m(a,{func:1,ret:-1}))},
ei:function(a,b){return new P.kf(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
f8:function(a,b){H.m(a,{func:1,ret:b})
if($.S===C.k)return a.$0()
return P.my(null,null,this,a,b)},
dg:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.S===C.k)return a.$1(b)
return P.mz(null,null,this,a,b,c,d)},
kT:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.S===C.k)return a.$2(b,c)
return P.oa(null,null,this,a,b,c,d,e,f)},
f7:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}}
P.ke.prototype={
$0:function(){return this.a.f8(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kd.prototype={
$0:function(){return this.a.kU(this.b)},
$S:4}
P.kf.prototype={
$1:function(a){var u=this.c
return this.a.kV(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k9.prototype={
gY:function(a){return P.mv(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.F(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dJ(u==null?s.b=P.ls():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dJ(t==null?s.c=P.ls():t,b)}else return s.hj(0,b)},
hj:function(a,b){var u,t,s,r=this
H.F(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.ls()
t=r.dL(b)
s=u[t]
if(s==null)u[t]=[r.cj(b)]
else{if(r.dS(s,b)>=0)return!1
s.push(r.cj(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iZ(this.c,b)
else return this.iY(0,b)},
iY:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.hB(r,b)
t=s.dS(u,b)
if(t<0)return!1
s.ec(u.splice(t,1)[0])
return!0},
dJ:function(a,b){H.F(b,H.x(this,0))
if(H.l(a[b],"$idh")!=null)return!1
a[b]=this.cj(b)
return!0},
iZ:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$idh")
if(u==null)return!1
this.ec(u)
delete a[b]
return!0},
dV:function(){this.r=1073741823&this.r+1},
cj:function(a){var u,t=this,s=new P.dh(H.F(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dV()
return s},
ec:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dV()},
dL:function(a){return J.c6(a)&1073741823},
hB:function(a,b){return a[this.dL(b)]},
dS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.dh.prototype={}
P.ka.prototype={
gM:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cF(t))
else{t=u.c
if(t==null){u.sdK(null)
return!1}else{u.sdK(H.F(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sdK:function(a){this.d=H.F(a,H.x(this,0))},
$iaQ:1}
P.hG.prototype={$if:1,$ib:1}
P.B.prototype={
gY:function(a){return new H.e_(a,this.gk(a),[H.ct(this,a,"B",0)])},
I:function(a,b){return this.j(a,b)},
kY:function(a,b){var u,t=this,s=H.c([],[H.ct(t,a,"B",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.W(s,u,t.j(a,u))
return s},
kX:function(a){return this.kY(a,!0)},
t:function(a,b){var u,t=this,s=[H.ct(t,a,"B",0)]
H.i(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sk(u,C.d.t(t.gk(a),b.gk(b)))
C.a.bv(u,0,t.gk(a),a)
C.a.bv(u,t.gk(a),u.length,b)
return u},
i:function(a){return P.kY(a,"[","]")}}
P.hJ.prototype={}
P.hK.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.n(a)
t.a=u+": "
t.a+=H.n(b)},
$S:25}
P.al.prototype={
T:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.ct(s,a,"al",0),H.ct(s,a,"al",1)]})
for(u=J.cz(s.gaX(a));u.A();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.b3(this.gaX(a))},
i:function(a){return P.m4(a)},
$iO:1}
P.kg.prototype={
i:function(a){return P.kY(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.lb(b,"index")
for(u=P.mv(r,r.r,H.x(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.a0(b,r,"index",null,t))},
$if:1,
$imi:1}
P.eR.prototype={}
P.cE.prototype={}
P.dJ.prototype={}
P.h9.prototype={
$acE:function(){return[P.o,[P.b,P.A]]}}
P.jr.prototype={}
P.js.prototype={
k7:function(a){var u,t,s=P.lc(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.km(u)
if(t.hz(a,0,s)!==s)t.ee(C.j.b9(a,s-1),0)
return new Uint8Array(u.subarray(0,H.o5(0,t.b,u.length)))},
$adJ:function(){return[P.o,[P.b,P.A]]}}
P.km.prototype={
ee:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
hz:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.b9(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.b1(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ee(r,C.j.b1(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.a7.prototype={}
P.aP.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.bI(u,30))&1073741823},
i:function(a){var u=this,t=P.nk(H.nL(u)),s=P.dL(H.nJ(u)),r=P.dL(H.nF(u)),q=P.dL(H.nG(u)),p=P.dL(H.nI(u)),o=P.dL(H.nK(u)),n=P.nl(H.nH(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bv.prototype={
t:function(a,b){return new P.bv(C.d.t(this.a,b.gdR()))},
a1:function(a,b){return C.d.a1(this.a,b.gdR())},
bf:function(a,b){return C.d.bf(this.a,b.gdR())},
m:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h3(),q=this.a
if(q<0)return"-"+new P.bv(0-q).i(0)
u=r.$1(C.d.ac(q,6e7)%60)
t=r.$1(C.d.ac(q,1e6)%60)
s=new P.h2().$1(q%1e6)
return""+C.d.ac(q,36e8)+":"+H.n(u)+":"+H.n(t)+"."+H.n(s)}}
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
P.bQ.prototype={}
P.fD.prototype={
i:function(a){return"Assertion failed"}}
P.cR.prototype={
i:function(a){return"Throw of null."}}
P.b4.prototype={
gcm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gcm()+o+u
if(!q.a)return t
s=q.gcl()
r=P.dQ(q.b)
return t+s+": "+r}}
P.cj.prototype={
gcm:function(){return"RangeError"},
gcl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.n(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.n(s)
else if(t>s)u=": Not in range "+H.n(s)+".."+H.n(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.n(s)}return u}}
P.hq.prototype={
gcm:function(){return"RangeError"},
gcl:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.n(u)},
gk:function(a){return this.f}}
P.jp.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jn.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dQ(u)+"."}}
P.i8.prototype={
i:function(a){return"Out of Memory"},
$ibQ:1}
P.ek.prototype={
i:function(a){return"Stack Overflow"},
$ibQ:1}
P.fY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eK.prototype={
i:function(a){return"Exception: "+this.a}}
P.hj.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.n(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.j.bw(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.A.prototype={}
P.f.prototype={
gk:function(a){var u,t=this.gY(this)
for(u=0;t.A();)++u
return u},
I:function(a,b){var u,t,s
P.lb(b,"index")
for(u=this.gY(this),t=0;u.A();){s=u.gM(u)
if(b===t)return s;++t}throw H.h(P.a0(b,this,"index",null,t))},
i:function(a){return P.np(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$if:1}
P.O.prototype={}
P.I.prototype={
gJ:function(a){return P.L.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ai.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
m:function(a,b){return this===b},
gJ:function(a){return H.cU(this)},
i:function(a){return"Instance of '"+H.ci(this)+"'"},
toString:function(){return this.i(this)}}
P.e1.prototype={}
P.a9.prototype={}
P.o.prototype={$im8:1}
P.bX.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.fz.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
i:function(a){return String(a)}}
W.fC.prototype={
i:function(a){return String(a)}}
W.dA.prototype={}
W.ca.prototype={
dj:function(a,b,c){if(c!=null)return a.getContext(b,P.oi(c))
return a.getContext(b)},
fj:function(a,b){return this.dj(a,b,null)},
$ica:1}
W.cC.prototype={$icC:1}
W.bO.prototype={
gk:function(a){return a.length}}
W.cG.prototype={$icG:1}
W.fU.prototype={
gk:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cH.prototype={
gk:function(a){return a.length}}
W.fV.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.fW.prototype={
gk:function(a){return a.length}}
W.fX.prototype={
gk:function(a){return a.length}}
W.fZ.prototype={
j:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dM.prototype={$idM:1}
W.h_.prototype={
i:function(a){return String(a)}}
W.dN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ay,P.ai]]},
$aB:function(){return[[P.ay,P.ai]]},
$if:1,
$af:function(){return[[P.ay,P.ai]]},
$ib:1,
$ab:function(){return[[P.ay,P.ai]]},
$aG:function(){return[[P.ay,P.ai]]}}
W.dO.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gav(a))+" x "+H.n(this.gaq(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iay)return!1
return a.left===u.gc2(b)&&a.top===u.gc8(b)&&this.gav(a)===u.gav(b)&&this.gaq(a)===u.gaq(b)},
gJ:function(a){return W.mu(C.f.gJ(a.left),C.f.gJ(a.top),C.f.gJ(this.gav(a)),C.f.gJ(this.gaq(a)))},
gej:function(a){return a.bottom},
gaq:function(a){return a.height},
gc2:function(a){return a.left},
gc6:function(a){return a.right},
gc8:function(a){return a.top},
gav:function(a){return a.width},
$iay:1,
$aay:function(){return[P.ai]}}
W.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.o]},
$aB:function(){return[P.o]},
$if:1,
$af:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aG:function(){return[P.o]}}
W.h1.prototype={
gk:function(a){return a.length}}
W.jP.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.l(u[b],"$iac")},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var u=this.kX(this)
return new J.as(u,u.length,[H.x(u,0)])},
$aB:function(){return[W.ac]},
$af:function(){return[W.ac]},
$ab:function(){return[W.ac]}}
W.ac.prototype={
gek:function(a){return new W.jP(a,a.children)},
geo:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.ay(u,t,s,r,[P.ai])},
i:function(a){return a.localName},
$iac:1}
W.p.prototype={$ip:1}
W.k.prototype={
jR:function(a,b,c,d){H.m(c,{func:1,args:[W.p]})
if(c!=null)this.h8(a,b,c,!1)},
h8:function(a,b,c,d){return a.addEventListener(b,H.cq(H.m(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.b8.prototype={$ib8:1}
W.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b8]},
$aB:function(){return[W.b8]},
$if:1,
$af:function(){return[W.b8]},
$ib:1,
$ab:function(){return[W.b8]},
$aG:function(){return[W.b8]}}
W.he.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
gk:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.hm.prototype={
gk:function(a){return a.length}}
W.cf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$aB:function(){return[W.K]},
$if:1,
$af:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$icf:1,
$aG:function(){return[W.K]}}
W.ba.prototype={
kA:function(a,b,c,d){return a.open(b,c,!0)},
$iba:1}
W.hn.prototype={
$1:function(a){return H.l(a,"$iba").responseText},
$S:27}
W.ho.prototype={
$1:function(a){var u,t,s,r,q
H.l(a,"$ibh")
u=this.a
t=u.status
if(typeof t!=="number")return t.bf()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.aJ(0,u)
else q.eq(a)},
$S:28}
W.cK.prototype={}
W.bR.prototype={$ibR:1,
gev:function(a){return a.data}}
W.cL.prototype={$icL:1}
W.bb.prototype={$ibb:1}
W.hH.prototype={
i:function(a){return String(a)}}
W.hT.prototype={
gk:function(a){return a.length}}
W.hU.prototype={
j:function(a,b){return P.bH(a.get(H.T(b)))},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.o])
this.T(a,new W.hV(u))
return u},
gk:function(a){return a.size},
$aal:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hW.prototype={
j:function(a,b){return P.bH(a.get(H.T(b)))},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.o])
this.T(a,new W.hX(u))
return u},
gk:function(a){return a.size},
$aal:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.be.prototype={$ibe:1}
W.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.be]},
$aB:function(){return[W.be]},
$if:1,
$af:function(){return[W.be]},
$ib:1,
$ab:function(){return[W.be]},
$aG:function(){return[W.be]}}
W.aj.prototype={$iaj:1}
W.jO.prototype={
gY:function(a){var u=this.a.childNodes
return new W.dR(u,u.length,[H.ct(C.K,u,"G",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aB:function(){return[W.K]},
$af:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.fq(a):u},
$iK:1}
W.cQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$aB:function(){return[W.K]},
$if:1,
$af:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aG:function(){return[W.K]}}
W.bg.prototype={$ibg:1,
gk:function(a){return a.length}}
W.id.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bg]},
$aB:function(){return[W.bg]},
$if:1,
$af:function(){return[W.bg]},
$ib:1,
$ab:function(){return[W.bg]},
$aG:function(){return[W.bg]}}
W.bh.prototype={$ibh:1}
W.iv.prototype={
j:function(a,b){return P.bH(a.get(H.T(b)))},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.o])
this.T(a,new W.iw(u))
return u},
gk:function(a){return a.size},
$aal:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.iw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.iy.prototype={
gk:function(a){return a.length}}
W.bj.prototype={$ibj:1}
W.iH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bj]},
$aB:function(){return[W.bj]},
$if:1,
$af:function(){return[W.bj]},
$ib:1,
$ab:function(){return[W.bj]},
$aG:function(){return[W.bj]}}
W.bk.prototype={$ibk:1}
W.iI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bk]},
$aB:function(){return[W.bk]},
$if:1,
$af:function(){return[W.bk]},
$ib:1,
$ab:function(){return[W.bk]},
$aG:function(){return[W.bk]}}
W.bl.prototype={$ibl:1,
gk:function(a){return a.length}}
W.iQ.prototype={
j:function(a,b){return a.getItem(H.T(b))},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaX:function(a){var u=H.c([],[P.o])
this.T(a,new W.iR(u))
return u},
gk:function(a){return a.length},
$aal:function(){return[P.o,P.o]},
$iO:1,
$aO:function(){return[P.o,P.o]}}
W.iR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:29}
W.aY.prototype={$iaY:1}
W.bm.prototype={$ibm:1}
W.aZ.prototype={$iaZ:1}
W.iY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aZ]},
$aB:function(){return[W.aZ]},
$if:1,
$af:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aG:function(){return[W.aZ]}}
W.iZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bm]},
$aB:function(){return[W.bm]},
$if:1,
$af:function(){return[W.bm]},
$ib:1,
$ab:function(){return[W.bm]},
$aG:function(){return[W.bm]}}
W.j7.prototype={
gk:function(a){return a.length}}
W.bo.prototype={$ibo:1}
W.b_.prototype={$ib_:1}
W.ja.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bo]},
$aB:function(){return[W.bo]},
$if:1,
$af:function(){return[W.bo]},
$ib:1,
$ab:function(){return[W.bo]},
$aG:function(){return[W.bo]}}
W.jb.prototype={
gk:function(a){return a.length}}
W.bZ.prototype={}
W.jq.prototype={
i:function(a){return String(a)}}
W.jC.prototype={
gk:function(a){return a.length}}
W.br.prototype={
gka:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aA("deltaY is not supported"))},
gk9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aA("deltaX is not supported"))},
$ibr:1}
W.dg.prototype={
j0:function(a,b){return a.requestAnimationFrame(H.cq(H.m(b,{func:1,ret:-1,args:[P.ai]}),1))},
hs:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.W]},
$aB:function(){return[W.W]},
$if:1,
$af:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aG:function(){return[W.W]}}
W.eF.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iay)return!1
return a.left===u.gc2(b)&&a.top===u.gc8(b)&&a.width===u.gav(b)&&a.height===u.gaq(b)},
gJ:function(a){return W.mu(C.f.gJ(a.left),C.f.gJ(a.top),C.f.gJ(a.width),C.f.gJ(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.k6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b9]},
$aB:function(){return[W.b9]},
$if:1,
$af:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aG:function(){return[W.b9]}}
W.eX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$aB:function(){return[W.K]},
$if:1,
$af:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aG:function(){return[W.K]}}
W.kh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.bl]},
$aB:function(){return[W.bl]},
$if:1,
$af:function(){return[W.bl]},
$ib:1,
$ab:function(){return[W.bl]},
$aG:function(){return[W.bl]}}
W.kj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aY]},
$aB:function(){return[W.aY]},
$if:1,
$af:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aG:function(){return[W.aY]}}
W.jR.prototype={}
W.lr.prototype={}
W.jS.prototype={
jo:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.na(u.b,u.c,t,!1)}}
W.jT.prototype={
$1:function(a){return this.a.$1(H.l(a,"$ip"))},
$S:30}
W.G.prototype={
gY:function(a){return new W.dR(a,this.gk(a),[H.ct(this,a,"G",0)])}}
W.dR.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdT(J.Y(u.a,t))
u.c=t
return!0}u.sdT(null)
u.c=s
return!1},
gM:function(a){return this.d},
sdT:function(a){this.d=H.F(a,H.x(this,0))},
$iaQ:1}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
P.fk.prototype={$ibR:1,
gev:function(a){return this.a}}
P.kw.prototype={
$2:function(a,b){this.a[a]=b},
$S:25}
P.hf.prototype={
gcp:function(){var u=this.b,t=H.aI(u,"B",0),s=W.ac
return new H.hL(new H.jD(u,H.m(new P.hg(),{func:1,ret:P.a7,args:[t]}),[t]),H.m(new P.hh(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b3(this.gcp().a)},
j:function(a,b){var u=this.gcp()
return u.b.$1(J.lM(u.a,b))},
gY:function(a){var u=P.m2(this.gcp(),!1,W.ac)
return new J.as(u,u.length,[H.x(u,0)])},
$aB:function(){return[W.ac]},
$af:function(){return[W.ac]},
$ab:function(){return[W.ac]}}
P.hg.prototype={
$1:function(a){return!!J.Z(H.l(a,"$iK")).$iac},
$S:31}
P.hh.prototype={
$1:function(a){return H.j(H.l(a,"$iK"),"$iac")},
$S:32}
P.kb.prototype={
gc6:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.d(t)
return H.F(u+t,H.x(this,0))},
gej:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.d(t)
return H.F(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.n(u.a)+", "+H.n(u.b)+") "+H.n(u.c)+" x "+H.n(u.d)},
m:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$iay){t=p.a
if(t==u.gc2(b)){s=p.b
if(s==u.gc8(b)){r=p.c
if(typeof t!=="number")return t.t()
if(typeof r!=="number")return H.d(r)
q=H.x(p,0)
if(H.F(t+r,q)===u.gc6(b)){t=p.d
if(typeof s!=="number")return s.t()
if(typeof t!=="number")return H.d(t)
u=H.F(s+t,q)===u.gej(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.c6(s),q=t.b,p=J.c6(q),o=t.c
if(typeof s!=="number")return s.t()
if(typeof o!=="number")return H.d(o)
u=H.x(t,0)
o=C.d.gJ(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return H.d(s)
u=C.d.gJ(H.F(q+s,u))
return P.o1(P.k8(P.k8(P.k8(P.k8(0,r),p),o),u))}}
P.ay.prototype={
gc2:function(a){return this.a},
gc8:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.bx.prototype={$ibx:1}
P.hD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a.getItem(b)},
I:function(a,b){return this.j(a,b)},
$aB:function(){return[P.bx]},
$if:1,
$af:function(){return[P.bx]},
$ib:1,
$ab:function(){return[P.bx]},
$aG:function(){return[P.bx]}}
P.bC.prototype={$ibC:1}
P.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a.getItem(b)},
I:function(a,b){return this.j(a,b)},
$aB:function(){return[P.bC]},
$if:1,
$af:function(){return[P.bC]},
$ib:1,
$ab:function(){return[P.bC]},
$aG:function(){return[P.bC]}}
P.ig.prototype={
gk:function(a){return a.length}}
P.iW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a.getItem(b)},
I:function(a,b){return this.j(a,b)},
$aB:function(){return[P.o]},
$if:1,
$af:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aG:function(){return[P.o]}}
P.v.prototype={
gek:function(a){return new P.hf(a,new W.jO(a))}}
P.bF.prototype={$ibF:1}
P.jc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return a.getItem(b)},
I:function(a,b){return this.j(a,b)},
$aB:function(){return[P.bF]},
$if:1,
$af:function(){return[P.bF]},
$ib:1,
$ab:function(){return[P.bF]},
$aG:function(){return[P.bF]}}
P.eP.prototype={}
P.eQ.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.fF.prototype={
gk:function(a){return a.length}}
P.fG.prototype={
j:function(a,b){return P.bH(a.get(H.T(b)))},
T:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bH(t.value[1]))}},
gaX:function(a){var u=H.c([],[P.o])
this.T(a,new P.fH(u))
return u},
gk:function(a){return a.size},
$aal:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fI.prototype={
gk:function(a){return a.length}}
P.c7.prototype={}
P.i7.prototype={
gk:function(a){return a.length}}
P.eC.prototype={}
P.dC.prototype={$idC:1}
P.dS.prototype={$idS:1}
P.ec.prototype={$iec:1}
P.ed.prototype={$ied:1}
P.ck.prototype={
fa:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Z(g)
if(!!u.$ibR&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oj(g))
return}if(!!u.$icL&&h==null&&t&&!0){this.jd(a,b,c,d,e,f,g)
return}throw H.h(P.nc("Incorrect number or type of arguments"))},
f9:function(a,b,c,d,e,f,g){return this.fa(a,b,c,d,e,f,g,null,null,null)},
jd:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
K:function(a,b,c){return a.uniform1f(b,c)},
a7:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
l0:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fh:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ick:1}
P.ee.prototype={$iee:1}
P.el.prototype={$iel:1}
P.et.prototype={$iet:1}
P.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a0(b,a,null,null,null))
return P.bH(a.item(b))},
I:function(a,b){return this.j(a,b)},
$aB:function(){return[[P.O,,,]]},
$if:1,
$af:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$aG:function(){return[[P.O,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a_.prototype={
bx:function(a){var u=this
u.shH(H.c([],[a]))
u.se_(null)
u.sdX(null)
u.se0(null)},
dm:function(a,b,c){var u=this,t=H.aI(u,"a_",0)
H.m(b,{func:1,ret:P.a7,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.A,[P.f,t]]}
H.m(a,t)
H.m(c,t)
u.se_(b)
u.sdX(a)
u.se0(c)},
bg:function(a,b){return this.dm(a,null,b)},
aT:function(a){var u
H.i(a,"$if",[H.aI(this,"a_",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dA:function(a,b){var u
H.i(b,"$if",[H.aI(this,"a_",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gY:function(a){var u=this.a
return new J.as(u,u.length,[H.x(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aI(s,"a_",0)
H.F(b,r)
r=[r]
if(H.C(s.aT(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dA(t,H.c([b],r))}},
aI:function(a,b){var u,t,s=this
H.i(b,"$if",[H.aI(s,"a_",0)],"$af")
if(H.C(s.aT(b))){u=s.a
t=u.length
C.a.aI(u,b)
s.dA(t,b)}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.e(u,b)
return u[b]},
shH:function(a){this.a=H.i(a,"$ib",[H.aI(this,"a_",0)],"$ab")},
se_:function(a){this.b=H.m(a,{func:1,ret:P.a7,args:[[P.f,H.aI(this,"a_",0)]]})},
sdX:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.A,[P.f,H.aI(this,"a_",0)]]})},
se0:function(a){H.m(a,{func:1,ret:-1,args:[P.A,[P.f,H.aI(this,"a_",0)]]})},
$if:1}
O.cN.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.N():u},
b0:function(){var u=this.b
if(u!=null)u.C(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gd6(u)
else return V.bW()},
c5:function(a){var u=this.a
if(a==null)C.a.h(u,V.bW())
else C.a.h(u,a)
this.b0()},
aZ:function(){var u=this.a
if(u.length>0){u.pop()
this.b0()}},
scq:function(a){this.a=H.i(a,"$ib",[V.an],"$ab")}}
E.fK.prototype={}
E.V.prototype={
an:function(a,b,c,d,e,f){var u=this
u.a=d
u.b=b
u.x=u.r=u.f=u.e=u.d=u.c=null
u.sfL(0,O.kS(E.V))
u.y.bg(u.gks(),u.gkv())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa2(0,e)
u.sa0(f)
u.sc3(c)
if(a!=null)u.y.aI(0,a)},
dI:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();){t=u.d
if(t.f==null)t.dI()}},
sa2:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().S(0,s.gf2())
u=s.c
if(u!=null)u.gu().h(0,s.gf2())
t=new D.H("shape",r,s.c,[F.ef])
t.b=!0
s.aA(t)}},
sa0:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().S(0,s.gf4())
u=s.f
s.f=a
if(a!=null)a.gu().h(0,s.gf4())
s.dI()
t=new D.H("technique",u,s.f,[O.bY])
t.b=!0
s.aA(t)}},
sc3:function(a){var u,t,s=this
if(!J.U(s.r,a)){u=s.r
if(u!=null)u.gu().S(0,s.gf0())
if(a!=null)a.gu().h(0,s.gf0())
s.r=a
t=new D.H("mover",u,a,[U.au])
t.b=!0
s.aA(t)}},
aD:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.U(q,s.x)){u=s.x
s.x=q
t=new D.H("matrix",u,q,[V.an])
t.b=!0
s.aA(t)}r=s.f
if(r!=null)r.aD(0,b)
for(r=s.y.a,r=new J.as(r,r.length,[H.x(r,0)]);r.A();)r.d.aD(0,b)},
ae:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.gV(u))
else C.a.h(u.a,t.l(0,u.gV(u)))
u.b0()
a.dd(r.f)
u=a.dy
s=(u&&C.a).gd6(u)
if(s!=null&&r.d!=null)s.de(a,r)
for(u=r.y.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();)u.d.ae(a)
a.dc()
a.dx.aZ()},
gu:function(){var u=this.z
return u==null?this.z=D.N():u},
aA:function(a){var u=this.z
if(u!=null)u.C(a)},
ai:function(){return this.aA(null)},
f3:function(a){H.l(a,"$iy")
this.e=null
this.aA(a)},
ky:function(){return this.f3(null)},
f5:function(a){this.aA(H.l(a,"$iy"))},
kz:function(){return this.f5(null)},
f1:function(a){this.aA(H.l(a,"$iy"))},
kx:function(){return this.f1(null)},
f_:function(a){this.aA(H.l(a,"$iy"))},
ku:function(){return this.f_(null)},
kt:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$if",[E.V],"$af")
for(u=b.length,t=this.geZ(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sao(null)
o.sbl(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ai()},
kw:function(a,b){var u,t
H.i(b,"$if",[E.V],"$af")
for(u=b.gY(b),t=this.geZ();u.A();)u.gM(u).gu().S(0,t)
this.ai()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfL:function(a,b){this.y=H.i(b,"$ia_",[E.V],"$aa_")},
$ibf:1}
E.im.prototype={
fF:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aP(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cN()
t=[V.an]
u.scq(H.c([],t))
u.b=null
u.gu().h(0,new E.io(s))
s.cy=u
u=new O.cN()
u.scq(H.c([],t))
u.b=null
u.gu().h(0,new E.ip(s))
s.db=u
u=new O.cN()
u.scq(H.c([],t))
u.b=null
u.gu().h(0,new E.iq(s))
s.dx=u
s.sjc(H.c([],[O.bY]))
u=s.dy;(u&&C.a).h(u,null)
s.sj8(new H.aS([P.o,A.cW]))},
gkP:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.l(0,u.gV(u))
s=u}return s},
gf6:function(){var u,t=this,s=t.ch
if(s==null){s=t.gkP()
u=t.dx
u=t.ch=s.l(0,u.gV(u))
s=u}return s},
dd:function(a){var u=this.dy,t=a==null?(u&&C.a).gd6(u):a;(u&&C.a).h(u,t)},
dc:function(){var u=this.dy
if(u.length>1)u.pop()},
cI:function(a){var u=a.b
if(u.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.er(0,u))throw H.h(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.W(0,u,a)},
sjc:function(a){this.dy=H.i(a,"$ib",[O.bY],"$ab")},
sj8:function(a){this.fr=H.i(a,"$iO",[P.o,A.cW],"$aO")}}
E.io.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:6}
E.ip.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.iq.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:6}
E.ep.prototype={
dD:function(a){H.l(a,"$iy")
this.df()},
dC:function(){return this.dD(null)},
gkf:function(){var u,t=this,s=Date.now(),r=C.d.ac(P.lV(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aP(s,!1)
return u/r},
e5:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.d(r)
u=C.f.bb(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.f.bb(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ll(C.m,s.gkS())}},
df:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.j4(this),{func:1,ret:-1,args:[P.ai]})
C.x.hs(u)
C.x.j0(u,W.mE(t,P.ai))}},
ae:function(a){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.e5()
if(a==null)a=p.d
if(a!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aP(r,!1)
s.y=P.lV(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.b0()
r=s.db
C.a.sk(r.a,0)
r.b0()
r=s.dx
C.a.sk(r.a,0)
r.b0()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
a.ae(p.e)}}catch(q){u=H.ax(q)
t=H.c3(q)
P.fx("Error: "+H.n(u))
P.fx("Stack: "+H.n(t))
throw H.h(u)}},
kR:function(){return this.ae(null)}}
E.j4.prototype={
$1:function(a){var u
H.oD(a)
u=this.a
if(u.ch){u.ch=!1
u.kR()}},
$S:35}
Z.ez.prototype={$ioM:1}
Z.dD.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ax(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.n(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.n(u.e)+"]"}}
Z.df.prototype={$ioN:1}
Z.c8.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
ah:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aK(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(p,", ")+"\nAttrs:   "+C.a.E(r,", ")},
shC:function(a){this.b=H.i(a,"$ib",[Z.bS],"$ab")},
$ioU:1}
Z.bS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ci(this.c)+"'")+"]"}}
Z.bq.prototype={
gds:function(a){var u=this.a,t=(u&$.aO().a)!==0?3:0
if((u&$.bL().a)!==0)t+=3
if((u&$.bK().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=2
if((u&$.bN().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=3
if((u&$.dy().a)!==0)t+=4
if((u&$.cy().a)!==0)++t
return(u&$.bJ().a)!==0?t+4:t},
jV:function(a){var u,t=$.aO(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0)if(u===a)return t
return $.n8()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bq))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.aO().a)!==0)C.a.h(u,"Pos")
if((t&$.bL().a)!==0)C.a.h(u,"Norm")
if((t&$.bK().a)!==0)C.a.h(u,"Binm")
if((t&$.bM().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dx().a)!==0)C.a.h(u,"Clr3")
if((t&$.dy().a)!==0)C.a.h(u,"Clr4")
if((t&$.cy().a)!==0)C.a.h(u,"Weight")
if((t&$.bJ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.E(u,"|")}}
D.fR.prototype={}
D.cd.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.m(b,u)
if(this.a==null)this.sao(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.aW(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aW(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.T(P.m2(u,!0,{func:1,ret:-1,args:[D.y]}),new D.hb(q))
u=r.b
if(u!=null){r.sbl(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.T(u,new D.hc(q))}return!0},
cV:function(){return this.C(null)},
bd:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
sao:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
sbl:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.hb.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.hc.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.y.prototype={}
D.bT.prototype={}
D.bU.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
O.kq.prototype={
aC:function(a,b,c){var u=0,t=P.aE(null),s=this
var $async$aC=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.ar(s.aB(H.c(a.split("\n"),[P.o]),b,!1),$async$aC)
case 2:return P.aC(null,t)}})
return P.aD($async$aC,t)},
aB:function(a,b,c){H.i(a,"$ib",[P.o],"$ab")
return this.kN(a,b,!1)},
kN:function(a,b,c){var u=0,t=P.aE(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aB=P.aG(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.lL(o,a.length)){u=4
break}s=6
u=9
return P.ar(p.ag(C.a.j(a,o),b,!1),$async$aB)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ax(k)
l=P.q("Line "+H.n(J.fy(o,1))+": "+H.n(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fy(o,1)
u=2
break
case 4:return P.aC(null,t)
case 1:return P.aB(r,t)}})
return P.aD($async$aB,t)},
ag:function(a,b,c){return this.kL(a,b,!1)},
kL:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$ag=P.aG(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lO(a,"#")
if(J.lK(n,0))a=J.lP(a,0,n)
a=J.kN(a)
if(J.b3(a)<=0){u=1
break}m=O.mC(a)
if(J.b3(m)<1){u=1
break}case 7:switch(J.Y(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.Y(m,1)
j=O.am()
o.c=j
o.b.W(0,k,j)
u=1
break
case 10:i=O.bG(J.Y(m,1))
o.c.r.sn(0,V.kT(i))
u=1
break
case 11:i=O.bG(J.Y(m,1))
o.c.x.sn(0,V.kT(i))
u=1
break
case 12:i=O.bG(J.Y(m,1))
o.c.z.sn(0,V.kT(i))
u=1
break
case 13:i=O.bG(J.Y(m,1))
k=i.length
if(k!==1)H.t(P.q("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.e(i,0)
u=1
break}j.sad(i[0])
u=1
break
case 14:i=O.bG(J.Y(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}j.sfi(0,i[0])
u=1
break
case 15:i=O.bG(J.Y(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.d(k)
u=1
break}j.sfi(0,1-k)
u=1
break
case 16:u=23
return P.ar(o.cz(J.Y(m,1),b),$async$ag)
case 23:u=1
break
case 17:u=24
return P.ar(o.cA(J.Y(m,1),b),$async$ag)
case 24:u=1
break
case 18:u=25
return P.ar(o.cB(J.Y(m,1),b),$async$ag)
case 25:u=1
break
case 19:u=26
return P.ar(o.cw(J.Y(m,1),b),$async$ag)
case 26:u=1
break
case 20:u=27
return P.ar(o.bC(J.Y(m,1),b),$async$ag)
case 27:u=1
break
case 21:u=28
return P.ar(o.bC(J.Y(m,1),b),$async$ag)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.ax(g)
k=P.q('Line: "'+H.n(a)+'": '+H.n(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$ag,t)},
cz:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cz=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.saj(s.a.ay(r))
return P.aC(null,t)}})
return P.aD($async$cz,t)},
cA:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cA=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.saj(s.a.ay(r))
return P.aC(null,t)}})
return P.aD($async$cA,t)},
cB:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cB=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.saj(s.a.ay(r))
return P.aC(null,t)}})
return P.aD($async$cB,t)},
cw:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$cw=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.saj(s.a.ay(r))
return P.aC(null,t)}})
return P.aD($async$cw,t)},
bC:function(a,b){var u=0,t=P.aE(null),s=this,r
var $async$bC=P.aG(function(c,d){if(c===1)return P.aB(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.saj(s.a.ay(r))
return P.aC(null,t)}})
return P.aD($async$bC,t)},
scs:function(a){this.b=H.i(a,"$iO",[P.o,O.aM],"$aO")}}
O.du.prototype={
sl1:function(a){this.b=H.i(a,"$ib",[F.aq],"$ab")}}
O.kr.prototype={
gkc:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.e(t,0)
return t[0]}return u},
aC:function(a,b,c){var u=0,t=P.aE(null),s=this
var $async$aC=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.ar(s.aB(H.c(a.split("\n"),[P.o]),b,!1),$async$aC)
case 2:return P.aC(null,t)}})
return P.aD($async$aC,t)},
aB:function(a,b,c){H.i(a,"$ib",[P.o],"$ab")
return this.kO(a,b,!1)},
kO:function(a,b,c){var u=0,t=P.aE(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aB=P.aG(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.lL(o,a.length)){u=4
break}s=6
u=9
return P.ar(p.ag(C.a.j(a,o),b,!1),$async$aB)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ax(k)
l=P.q("Line "+H.n(J.fy(o,1))+": "+H.n(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fy(o,1)
u=2
break
case 4:return P.aC(null,t)
case 1:return P.aB(r,t)}})
return P.aD($async$aB,t)},
ag:function(a,b,c){return this.kM(a,b,!1)},
kM:function(a,b,c){var u=0,t=P.aE(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ag=P.aG(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lO(a,"#")
if(J.lK(n,0))a=J.lP(a,0,n)
a=J.kN(a)
if(J.b3(a)<=0){u=1
break}m=O.mC(a)
if(J.b3(m)<1){u=1
break}case 7:switch(J.Y(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:k=O.bG(J.Y(m,1))
j=k.length
if(j<3)H.t(P.q("Positions must have at least 3 numbers."))
if(j>4)H.t(P.q("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.e(k,3)
u=1
break}i=k[3]
h=$.M()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.t(P.q("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.du(new V.ah(g[0],g[1],g[2]))
g.sl1(H.c([],[F.aq]))
C.a.h(i,g)
u=1
break
case 10:k=O.bG(J.Y(m,1))
j=k.length
if(j<2)H.t(P.q("Textures must have at least 2 numbers."))
if(j>3)H.t(P.q("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.e(k,2)
u=1
break}i=k[2]
h=$.M()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.t(P.q("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.a5(h[0],h[1]))
u=1
break
case 11:k=O.bG(J.Y(m,1))
j=k.length
if(j!==3)H.t(P.q("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}C.a.h(i,new V.R(h,g,k[2]))
u=1
break
case 12:o.iX(J.Y(m,1))
u=1
break
case 13:o.iW(J.Y(m,1))
u=1
break
case 14:o.iV(J.Y(m,1))
u=1
break
case 15:u=20
return P.ar(o.bD(J.Y(m,1),b,!1),$async$ag)
case 20:u=1
break
case 16:j=J.Y(m,1)
o.x=H.l(o.e.j(0,j),"$iaM")
o.bJ()
u=1
break
case 17:o.r=H.T(J.Y(m,1))
o.bJ()
u=1
break
case 18:o.r=H.T(J.Y(m,1))
o.bJ()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ax(e)
j=P.q('Line: "'+H.n(a)+'": '+H.n(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aC(s,t)
case 2:return P.aB(q,t)}})
return P.aD($async$ag,t)},
bJ:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.lg()
r.y=u
u=E.a4(null,!0,null,"",u,null)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.sk(u[s].b,0)}r.z.sa0(r.x)
r.z.a=r.r},
cg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.e(f,0)
u=P.lC(f[0])
t=i.b.length
if(typeof u!=="number")return u.a1()
if(u<-t||u>t||u===0)throw H.h(P.q("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.lC(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.a1()
if(r<-t||r>t||r===0)throw H.h(P.q("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.e(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.lC(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.a1()
if(n<-t||n>t||n===0)throw H.h(P.q("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.e(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.e(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.D)(e),++k){j=e[k]
if(J.U(j.y,o)&&J.U(j.r,m))return j}j=F.lp(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.U(j.f,e)){j.f=e
e=j.a
if(e!=null)e.ai()}if(!J.U(j.y,o)){j.y=o
e=j.a
if(e!=null)e.ai()}m=m==null?g:m.w(0,Math.sqrt(m.G(m)))
if(!J.U(j.r,m)){j.r=m
e=j.a
if(e!=null)e.ai()}i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
iX:function(a){var u,t=O.ku(a),s=H.c([],[F.aq]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.cg(t[u]))}this.y.b.jT(s)},
iW:function(a){var u,t=O.ku(a),s=H.c([],[F.aq]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.cg(t[u]))}this.y.c.jS(s)},
iV:function(a){var u,t=O.ku(a),s=H.c([],[F.aq]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.e(t,u)
C.a.h(s,this.cg(t[u]))}this.y.d.cH(s)},
bD:function(a,b,c){var u=0,t=P.aE(null),s=this,r
var $async$bD=P.aG(function(d,e){if(d===1)return P.aB(e,t)
while(true)switch(u){case 0:u=2
return P.ar(O.e6(b+"/"+a,s.a,!1),$async$bD)
case 2:r=e
s.e.aI(0,r)
return P.aC(null,t)}})
return P.aD($async$bD,t)},
siT:function(a){this.b=H.i(a,"$ib",[O.du],"$ab")},
sje:function(a){this.c=H.i(a,"$ib",[V.a5],"$ab")},
shU:function(a){this.d=H.i(a,"$ib",[V.R],"$ab")},
scs:function(a){this.e=H.i(a,"$iO",[P.o,O.aM],"$aO")}}
O.ih.prototype={}
X.dE.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dX.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.hv.prototype={
kF:function(a){this.d.h(0,a.a)
return!1},
kB:function(a){this.d.S(0,a.a)
return!1},
siU:function(a){this.d=H.i(a,"$imi",[P.A],"$ami")}}
X.e0.prototype={}
X.hI.prototype={
bk:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.t()
n=n.b
if(typeof n!=="number")return n.t()
r=new V.a5(s+m*l,n+u*t)
t=p.a.gbM()
q=new X.aW(a,V.bE(),p.x,t,r)
q.b=!0
p.z=new P.aP(o,!1)
p.x=r
return q},
da:function(a,b){this.r=a.a
return!1},
bq:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fl()
if(typeof u!=="number")return u.D()
this.r=(u&~t)>>>0
return!1},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bk(a,b))
return!0},
kG:function(a){return!1},
iq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e0(c,r.a.gbM(),b)
s.b=!0
t.C(s)
r.y=new P.aP(u,!1)
r.x=V.bE()}}
X.bA.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.aW.prototype={}
X.hZ.prototype={
cn:function(a,b,c){var u=this,t=new P.aP(Date.now(),!1),s=u.a.gbM(),r=new X.aW(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
da:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.cn(a,b,!0))
return!0},
bq:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fl()
if(typeof t!=="number")return t.D()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.cn(a,b,!0))
return!0},
bp:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.cn(a,b,!1))
return!0},
kH:function(a,b){return!1},
gew:function(){var u=this.b
return u==null?this.b=D.N():u},
gc9:function(){var u=this.c
return u==null?this.c=D.N():u},
gbo:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.ie.prototype={}
X.d6.prototype={}
X.j9.prototype={
bk:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a5],"$ab")
u=new P.aP(Date.now(),!1)
t=a.length>0?a[0]:V.bE()
s=q.a.gbM()
r=new X.d6(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
kE:function(a){var u
H.i(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.C(this.bk(a,!0))
return!0},
kC:function(a){var u
H.i(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.C(this.bk(a,!0))
return!0},
kD:function(a){var u
H.i(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.C(this.bk(a,!1))
return!0},
gdt:function(a){var u=this.b
return u==null?this.b=D.N():u},
gex:function(a){var u=this.c
return u==null?this.c=D.N():u},
gbo:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.ew.prototype={
gbM:function(){var u=this.a,t=C.l.geo(u).c
t.toString
u=C.l.geo(u).d
u.toString
return V.mg(0,0,t,u)},
dO:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dX(u,new X.bA(t,a.altKey,a.shiftKey))},
b5:function(a){if(!H.C(a.ctrlKey))H.C(a.metaKey)
a.shiftKey},
cF:function(a){if(!H.C(a.ctrlKey))H.C(a.metaKey)
a.shiftKey},
aU:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a5(s-q,r-u)},
bm:function(a){return new V.a3(a.movementX,a.movementY)},
cC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.f.a6(r.pageX)
C.f.a6(r.pageY)
p=o.left
C.f.a6(r.pageX)
C.a.h(n,new V.a5(q-p,C.f.a6(r.pageY)-o.top))}return n},
aP:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dE(u,new X.bA(t,a.altKey,a.shiftKey))},
cr:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ih:function(a){this.f=!0},
i3:function(a){this.f=!1},
i9:function(a){H.l(a,"$iaj")
if(H.C(this.f)&&this.cr(a))a.preventDefault()},
io:function(a){var u
H.l(a,"$ibb")
if(!H.C(this.f))return
u=this.dO(a)
this.b.kF(u)},
il:function(a){var u
H.l(a,"$ibb")
if(!H.C(this.f))return
u=this.dO(a)
this.b.kB(u)},
is:function(a){var u,t,s,r,q=this
H.l(a,"$iaj")
u=q.a
u.focus()
q.f=!0
q.b5(a)
if(H.C(q.x)){t=q.aP(a)
s=q.bm(a)
if(q.d.da(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aP(a)
r=q.aU(a)
if(q.c.da(t,r))a.preventDefault()},
iw:function(a){var u,t,s,r=this
H.l(a,"$iaj")
r.b5(a)
u=r.aP(a)
if(H.C(r.x)){t=r.bm(a)
if(r.d.bq(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aU(a)
if(r.c.bq(u,s))a.preventDefault()},
ie:function(a){var u,t,s,r=this
H.l(a,"$iaj")
if(!r.cr(a)){r.b5(a)
u=r.aP(a)
if(H.C(r.x)){t=r.bm(a)
if(r.d.bq(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aU(a)
if(r.c.bq(u,s))a.preventDefault()}},
iu:function(a){var u,t,s,r=this
H.l(a,"$iaj")
r.b5(a)
u=r.aP(a)
if(H.C(r.x)){t=r.bm(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aU(a)
if(r.c.bp(u,s))a.preventDefault()},
ib:function(a){var u,t,s,r=this
H.l(a,"$iaj")
if(!r.cr(a)){r.b5(a)
u=r.aP(a)
if(H.C(r.x)){t=r.bm(a)
if(r.d.bp(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aU(a)
if(r.c.bp(u,s))a.preventDefault()}},
iy:function(a){var u,t,s=this
H.l(a,"$ibr")
s.b5(a)
u=new V.a3((a&&C.w).gk9(a),C.w.gka(a)).w(0,180)
if(H.C(s.x)){if(s.d.kG(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aU(a)
if(s.c.kH(u,t))a.preventDefault()},
iA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aP(s.y)
t=s.aU(s.y)
s.d.iq(u,t,r)}},
iQ:function(a){var u,t=this
H.l(a,"$ib_")
t.a.focus()
t.f=!0
t.cF(a)
u=t.cC(a)
if(t.e.kE(u))a.preventDefault()},
iM:function(a){var u
H.l(a,"$ib_")
this.cF(a)
u=this.cC(a)
if(this.e.kC(u))a.preventDefault()},
iO:function(a){var u
H.l(a,"$ib_")
this.cF(a)
u=this.cC(a)
if(this.e.kD(u))a.preventDefault()},
sht:function(a){this.z=H.i(a,"$ib",[[P.d_,P.L]],"$ab")}}
D.cc.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.N():u},
by:function(a){var u
H.l(a,"$iy")
u=this.d
if(u!=null)u.C(a)},
sn:function(a,b){var u,t,s=this
if(b==null)b=new V.u(1,1,1)
if(!s.c.m(0,b)){u=s.c
s.c=b
t=new D.H("color",u,b,[V.u])
t.b=!0
s.by(t)}},
$ia8:1,
$ibf:1}
D.a8.prototype={$ibf:1}
D.dY.prototype={
gu:function(){var u=this.Q
return u==null?this.Q=D.N():u},
by:function(a){var u=this.Q
if(u!=null)u.C(a)},
dZ:function(a){var u
H.l(a,"$iy")
u=this.ch
if(u!=null)u.C(a)},
ip:function(){return this.dZ(null)},
iC:function(a){var u,t,s
H.i(a,"$if",[D.a8],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.hk(s))return!1}return!0},
hY:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.gdY(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=H.l(b[q],"$ia8")
if(p instanceof D.cc)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.cd()
o.sao(null)
o.sbl(null)
o.c=null
o.d=0
p.d=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bT([n])
n.b=!0
this.by(n)},
iG:function(a,b){var u,t,s,r=D.a8
H.i(b,"$if",[r],"$af")
for(u=b.gY(b),t=this.gdY();u.A();){s=u.gM(u)
C.a.S(this.e,s)
s.gu().S(0,t)}r=new D.bU([r])
r.b=!0
this.by(r)},
hk:function(a){var u=C.a.aW(this.e,a)
return u},
sfM:function(a){this.e=H.i(a,"$ib",[D.cc],"$ab")},
sfN:function(a){this.f=H.i(a,"$ib",[D.eb],"$ab")},
sfO:function(a){this.r=H.i(a,"$ib",[D.ej],"$ab")},
sfP:function(a){this.x=H.i(a,"$ib",[D.em],"$ab")},
sfQ:function(a){this.y=H.i(a,"$ib",[D.en],"$ab")},
sfR:function(a){this.z=H.i(a,"$ib",[D.eo],"$ab")},
$af:function(){return[D.a8]},
$aa_:function(){return[D.a8]}}
D.eb.prototype={$ia8:1,$ibf:1}
D.ej.prototype={$ia8:1,$ibf:1}
D.em.prototype={$ia8:1,$ibf:1}
D.en.prototype={$ia8:1,$ibf:1}
D.eo.prototype={$ia8:1,$ibf:1}
V.u.prototype={
t:function(a,b){var u=C.f.t(this.a,b.gkQ()),t=C.f.t(this.b,b.gfk()),s=C.f.t(this.c,b.gjX())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.u(u,t,s)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.af.prototype={
ff:function(){var u=this
return new V.af(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
t:function(a,b){var u=this,t=C.f.t(u.a,b.gkQ()),s=C.f.t(u.b,b.gfk()),r=C.f.t(u.c,b.gjX()),q=C.f.t(u.d,b.gl3(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.af(t,s,r,q)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.X(u.a,3,0)+", "+V.X(u.b,3,0)+", "+V.X(u.c,3,0)+", "+V.X(u.d,3,0)+"]"}}
V.ha.prototype={}
V.e4.prototype={
ak:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e4))return!1
u=b.a
t=r.a
s=$.M()
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
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.cr(H.c([q.a,q.d,q.r],p),3,0),n=V.cr(H.c([q.b,q.e,q.x],p),3,0),m=V.cr(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.an.prototype={
ak:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
d5:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.d(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.M().a)return V.bW()
a6=1/a5
a7=-t
a8=-f
return V.bz((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.d(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
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
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bz(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
dh:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.R(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bu:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.d(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.ah(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=r.a
s=$.M()
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
i:function(a){return this.O()},
H:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.cr(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
O:function(){return this.H("")}}
V.a5.prototype={
t:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.d(t)
return new V.a5(s+r,u+t)},
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
return new V.a5(s-r,u-t)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.ah.prototype={
t:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.d(r)
return new V.ah(q+p,u+t,s+r)},
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
return new V.ah(q-p,u-t,s-r)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=r.a
s=$.M()
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.aX.prototype={
t:function(a,b){var u=this
return new V.aX(C.d.t(u.a,b.glc(b)),C.d.t(u.b,b.gld(b)),C.d.t(u.c,b.gle(b)),C.d.t(u.d,b.glb(b)))},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aX))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.X(u.a,3,0)+", "+V.X(u.b,3,0)+", "+V.X(u.c,3,0)+", "+V.X(u.d,3,0)+"]"}}
V.cV.prototype={
gaN:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.X(u.a,3,0)+", "+V.X(u.b,3,0)+", "+V.X(u.c,3,0)+", "+V.X(u.d,3,0)+"]"}}
V.a3.prototype={
d7:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a,s=b.gl6(b)
if(typeof t!=="number")return t.t()
s=C.f.t(t,s)
t=this.b
u=b.gl7(b)
if(typeof t!=="number")return t.t()
return new V.a3(s,C.f.t(t,u))},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.a3(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mp
return u==null?$.mp=new V.a3(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a3(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.R.prototype={
d7:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
return q*p+u*t+s*r},
bn:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=a.a
if(typeof s!=="number")return H.d(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.R(q*p-u*t,u*s-r*p,r*t-q*s)},
t:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.d(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.d(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.d(r)
return new V.R(q+p,u+t,s+r)},
P:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.P()
u=this.b
if(typeof u!=="number")return u.P()
t=this.c
if(typeof t!=="number")return t.P()
return new V.R(-s,-u,-t)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.M().a)return V.ey()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.R(u/b,t/b,s/b)},
eV:function(){var u=this.a,t=$.M()
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
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=r.a
s=$.M()
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
U.fS.prototype={
ci:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.oL(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gu:function(){var u=this.y
return u==null?this.y=D.N():u},
a_:function(a){var u=this.y
if(u!=null)u.C(a)},
sdi:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.H("wrap",u,b,[P.a7])
u.b=!0
this.a_(u)}},
sd8:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.ci(u)}s=new D.H("maximumLocation",s,t.b,[P.E])
s.b=!0
t.a_(s)}},
sd9:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.ci(u)}s=new D.H("minimumLocation",s,t.c,[P.E])
s.b=!0
t.a_(s)}},
sar:function(a,b){var u,t=this
b=t.ci(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.H("location",u,b,[P.E])
u.b=!0
t.a_(u)}},
seX:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.E])
r.b=!0
s.a_(r)}},
sa8:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.H("velocity",t,a,[P.E])
t.b=!0
u.a_(t)}},
seu:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.H("dampening",u,a,[P.E])
u.b=!0
this.a_(u)}},
aD:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sar(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa8(u)}}}
U.dI.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.N():u},
sV:function(a,b){var u,t,s,r=this
if(b==null)b=V.bW()
if(!J.U(r.a,b)){u=r.a
r.a=b
t=new D.H("matrix",u,b,[V.an])
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
ca:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cJ.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.N():u},
a_:function(a){var u
H.l(a,"$iy")
u=this.e
if(u!=null)u.C(a)},
aG:function(){return this.a_(null)},
hW:function(a,b){var u,t,s,r,q,p,o,n=U.au
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.gbB(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.a_(n)},
iE:function(a,b){var u,t,s=U.au
H.i(b,"$if",[s],"$af")
for(u=b.gY(b),t=this.gbB();u.A();)u.gM(u).gu().S(0,t)
s=new D.bU([s])
s.b=!0
this.a_(s)},
ca:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a1()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.x(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.ca(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.bW():u
r=s.e
if(r!=null)r.bd(0)}return s.f},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.au]},
$aa_:function(){return[U.au]},
$iau:1}
U.au.prototype={}
U.ex.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.N():u},
a_:function(a){var u
H.l(a,"$iy")
u=this.fx
if(u!=null)u.C(a)},
aG:function(){return this.a_(null)},
cJ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gew().h(0,s.gfS())
s.a.c.gbo().h(0,s.gfU())
s.a.c.gc9().h(0,s.gfW())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.h(0,s.ghI())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.ghK())
u=s.a.e
u.gdt(u).h(0,s.gh1())
s.a.e.gbo().h(0,s.gh_())
u=s.a.e
u.gex(u).h(0,s.gfY())
return!0},
aF:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.P()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.P()
t=-t}return new V.a3(u,t)},
fT:function(a){var u=this
a=H.j(H.l(a,"$iy"),"$iaW")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fV:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.l(a,"$iy"),"$iaW")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aF(new V.a3(t.a,t.b).l(0,2).w(0,u.gaN()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sa8(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sa8(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aF(new V.a3(s.a,s.b).l(0,2).w(0,u.gaN()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sar(0,-p*q+s)
n.b.sa8(0)
n.c.sa8(0)
t=t.p(0,a.z)
n.dx=n.aF(new V.a3(t.a,t.b).l(0,2).w(0,u.gaN()))}n.aG()},
fX:function(a){var u,t,s,r=this
H.l(a,"$iy")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sa8(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sa8(-t*10*u)
r.aG()}},
hJ:function(a){var u=this
if(H.j(H.l(a,"$iy"),"$ie0").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hL:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.l(a,"$iy"),"$iaW")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aF(new V.a3(s.a,s.b).l(0,2).w(0,u.gaN()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sar(0,-p*q+s)
n.b.sa8(0)
n.c.sa8(0)
t=t.p(0,a.z)
n.dx=n.aF(new V.a3(t.a,t.b).l(0,2).w(0,u.gaN()))
n.aG()},
h2:function(a){var u=this
H.l(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h0:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.l(a,"$iy"),"$id6")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.aF(new V.a3(t.a,t.b).l(0,2).w(0,u.gaN()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.d(s)
t.sa8(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.d(t)
s.sa8(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aF(new V.a3(s.a,s.b).l(0,2).w(0,u.gaN()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.d(p)
o=n.cy
if(typeof o!=="number")return H.d(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.d(q)
s=n.db
if(typeof s!=="number")return H.d(s)
o.sar(0,-p*q+s)
n.b.sa8(0)
n.c.sa8(0)
t=t.p(0,a.z)
n.dx=n.aF(new V.a3(t.a,t.b).l(0,2).w(0,u.gaN()))}n.aG()},
fZ:function(a){var u,t,s,r=this
H.l(a,"$iy")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.d(s)
u.sa8(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.d(u)
s.sa8(-t*10*u)
r.aG()}},
ca:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a1()
if(s<r){t.dy=r
u=b.y
t.c.aD(0,u)
t.b.aD(0,u)
t.fr=V.m5(t.b.d).l(0,V.l6(t.c.d))}return t.fr},
$iau:1}
M.dH.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.N():u},
a3:function(a){var u
H.l(a,"$iy")
u=this.r
if(u!=null)u.C(a)},
bh:function(){return this.a3(null)},
iI:function(a,b){var u,t,s,r,q,p,o,n=M.aN
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.ga9(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.a3(n)},
iK:function(a,b){var u,t,s=M.aN
H.i(b,"$if",[s],"$af")
for(u=b.gY(b),t=this.ga9();u.A();)u.gM(u).gu().S(0,t)
s=new D.bU([s])
s.b=!0
this.a3(s)},
ae:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();){t=u.d
if(t!=null)t.ae(a)}s.f=!1},
$af:function(){return[M.aN]},
$aa_:function(){return[M.aN]},
$iaN:1}
M.dK.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.N():u},
a3:function(a){var u
H.l(a,"$iy")
u=this.r
if(u!=null)u.C(a)},
bh:function(){return this.a3(null)},
sb8:function(a){var u,t,s=this
if(a==null)a=new X.hp()
u=s.b
if(u!==a){if(u!=null)u.gu().S(0,s.ga9())
t=s.b
s.b=a
a.gu().h(0,s.ga9())
u=new D.H("camera",t,s.b,[X.c9])
u.b=!0
s.a3(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.kW(null)
u=s.c
if(u!==b){if(u!=null)u.gu().S(0,s.ga9())
t=s.c
s.c=b
b.gu().h(0,s.ga9())
u=new D.H("target",t,s.c,[X.d0])
u.b=!0
s.a3(u)}},
sa0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().S(0,t.ga9())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga9())
s=new D.H("technique",u,t.d,[O.bY])
s.b=!0
t.a3(s)}},
ae:function(a){var u=this
a.dd(u.d)
u.c.U(a)
u.b.U(a)
u.e.aD(0,a)
u.e.ae(a)
u.b.ah(a)
u.c.toString
a.dc()},
$iaN:1}
M.dP.prototype={
a3:function(a){var u
H.l(a,"$iy")
u=this.y
if(u!=null)u.C(a)},
bh:function(){return this.a3(null)},
i5:function(a,b){var u,t,s,r,q,p,o,n=E.V
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.ga9(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sao(null)
o.sbl(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bT([n])
n.b=!0
this.a3(n)},
i7:function(a,b){var u,t,s=E.V
H.i(b,"$if",[s],"$af")
for(u=b.gY(b),t=this.ga9();u.A();)u.gM(u).gu().S(0,t)
s=new D.bU([s])
s.b=!0
this.a3(s)},
sb8:function(a){var u,t,s=this
if(a==null)a=X.ma(null)
u=s.b
if(u!==a){if(u!=null)u.gu().S(0,s.ga9())
t=s.b
s.b=a
a.gu().h(0,s.ga9())
u=new D.H("camera",t,s.b,[X.c9])
u.b=!0
s.a3(u)}},
sbe:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gu().S(0,t.ga9())
u=t.c
t.c=b
b.gu().h(0,t.ga9())
s=new D.H("target",u,t.c,[X.d0])
s.b=!0
t.a3(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.N():u},
ae:function(a){var u,t=this
a.dd(t.d)
t.c.U(a)
t.b.U(a)
for(u=t.e.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();)u.d.aD(0,a)
for(u=t.e.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();)u.d.ae(a)
t.b.toString
a.cy.aZ()
a.db.aZ()
t.c.ah(a)
a.dc()},
shi:function(a,b){this.e=H.i(b,"$ia_",[E.V],"$aa_")},
$iaN:1}
M.aN.prototype={}
A.dz.prototype={}
A.fE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.e3.prototype={
fB:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bX("")
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
d1.jv(u)
d1.jC(u)
d1.jw(u)
d1.jK(u)
d1.jL(u)
d1.jE(u)
d1.jP(u)
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
u=new P.bX("")
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
q.jz(u)
q.ju(u)
q.jx(u)
q.jA(u)
q.jI(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jG(u)
q.jH(u)}q.jD(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.i:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.h:m+=c7
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
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.E(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jy(u)
q.jF(u)
q.jJ(u)
q.jM(u)
q.jN(u)
q.jO(u)
q.jB(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.o])
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
i="vec4("+C.a.E(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.d3(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.j(a6.y.q(0,"invViewMat"),"$iav")
if(t)a6.dy=H.j(a6.y.q(0,"objMat"),"$iav")
if(r)a6.fr=H.j(a6.y.q(0,"viewObjMat"),"$iav")
a6.fy=H.j(a6.y.q(0,"projViewObjMat"),"$iav")
if(d1.x2)a6.k1=H.j(a6.y.q(0,"txt2DMat"),"$id9")
if(d1.y1)a6.k2=H.j(a6.y.q(0,"txtCubeMat"),"$iav")
if(d1.y2)a6.k3=H.j(a6.y.q(0,"colorMat"),"$iav")
a6.shd(H.c([],[A.av]))
t=d1.aK
if(t>0){a6.k4=H.l(a6.y.q(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.q(a7+q+a8));(s&&C.a).h(s,H.j(g,"$iav"))}}t=d1.a
if(t!==C.c){a6.r2=H.j(a6.y.q(0,"emissionClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.rx=H.j(a6.y.q(0,a9),"$iaw")
a6.x1=H.j(a6.y.q(0,b0),"$iQ")
break
case C.h:a6.ry=H.j(a6.y.q(0,a9),"$iap")
a6.x1=H.j(a6.y.q(0,b0),"$iQ")
break}}t=d1.b
if(t!==C.c){a6.x2=H.j(a6.y.q(0,"ambientClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.y1=H.j(a6.y.q(0,b1),"$iaw")
a6.aK=H.j(a6.y.q(0,b2),"$iQ")
break
case C.h:a6.y2=H.j(a6.y.q(0,b1),"$iap")
a6.aK=H.j(a6.y.q(0,b2),"$iQ")
break}}t=d1.c
if(t!==C.c){a6.ax=H.j(a6.y.q(0,"diffuseClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.bN=H.j(a6.y.q(0,b3),"$iaw")
a6.bO=H.j(a6.y.q(0,b4),"$iQ")
break
case C.h:a6.ey=H.j(a6.y.q(0,b3),"$iap")
a6.bO=H.j(a6.y.q(0,b4),"$iQ")
break}}t=d1.d
if(t!==C.c){a6.bP=H.j(a6.y.q(0,"invDiffuseClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.ez=H.j(a6.y.q(0,b5),"$iaw")
a6.bQ=H.j(a6.y.q(0,b6),"$iQ")
break
case C.h:a6.eA=H.j(a6.y.q(0,b5),"$iap")
a6.bQ=H.j(a6.y.q(0,b6),"$iQ")
break}}t=d1.e
if(t!==C.c){a6.bT=H.j(a6.y.q(0,"shininess"),"$ia2")
a6.bR=H.j(a6.y.q(0,"specularClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.eB=H.j(a6.y.q(0,b7),"$iaw")
a6.bS=H.j(a6.y.q(0,b8),"$iQ")
break
case C.h:a6.eC=H.j(a6.y.q(0,b7),"$iap")
a6.bS=H.j(a6.y.q(0,b8),"$iQ")
break}}switch(d1.f){case C.c:break
case C.i:break
case C.e:a6.eD=H.j(a6.y.q(0,"bumpTxt"),"$iaw")
a6.bU=H.j(a6.y.q(0,b9),"$iQ")
break
case C.h:a6.eE=H.j(a6.y.q(0,"bumpTxt"),"$iap")
a6.bU=H.j(a6.y.q(0,b9),"$iQ")
break}if(d1.dy){a6.eF=H.j(a6.y.q(0,"envSampler"),"$iap")
a6.eG=H.j(a6.y.q(0,"nullEnvTxt"),"$iQ")
t=d1.r
if(t!==C.c){a6.bV=H.j(a6.y.q(0,"reflectClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.eH=H.j(a6.y.q(0,c0),"$iaw")
a6.bW=H.j(a6.y.q(0,c1),"$iQ")
break
case C.h:a6.eI=H.j(a6.y.q(0,c0),"$iap")
a6.bW=H.j(a6.y.q(0,c1),"$iQ")
break}}t=d1.x
if(t!==C.c){a6.bX=H.j(a6.y.q(0,"refraction"),"$ia2")
a6.bY=H.j(a6.y.q(0,"refractClr"),"$iP")
switch(t){case C.c:break
case C.i:break
case C.e:a6.eJ=H.j(a6.y.q(0,c2),"$iaw")
a6.bZ=H.j(a6.y.q(0,c3),"$iQ")
break
case C.h:a6.eK=H.j(a6.y.q(0,c2),"$iap")
a6.bZ=H.j(a6.y.q(0,c3),"$iQ")
break}}}t=d1.y
if(t!==C.c){a6.c_=H.j(a6.y.q(0,"alpha"),"$ia2")
switch(t){case C.c:break
case C.i:break
case C.e:a6.eL=H.j(a6.y.q(0,c4),"$iaw")
a6.c0=H.j(a6.y.q(0,c5),"$iQ")
break
case C.h:a6.eM=H.j(a6.y.q(0,c4),"$iap")
a6.c0=H.j(a6.y.q(0,c5),"$iQ")
break}}a6.shq(H.c([],[A.d8]))
a6.siS(H.c([],[A.da]))
a6.sja(H.c([],[A.db]))
a6.sjp(H.c([],[A.dc]))
a6.sjq(H.c([],[A.dd]))
a6.sjr(H.c([],[A.de]))
if(d1.k2){t=d1.z
if(t>0){a6.eN=H.l(a6.y.q(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.cW;(s&&C.a).h(s,new A.d8(g,f))}}t=d1.Q
if(t>0){a6.eO=H.l(a6.y.q(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.j(d,"$ia2")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.j(c,"$ia2")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.j(b,"$ia2")
s=a6.cX;(s&&C.a).h(s,new A.da(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eP=H.l(a6.y.q(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.j(c,"$ia2")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.j(b,"$ia2")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.j(a,"$ia2")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.j(a1,"$ia2")
s=a6.cY;(s&&C.a).h(s,new A.db(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eQ=H.l(a6.y.q(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.j(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.j(b,"$iQ")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.j(a,"$iaw")
s=a6.cZ;(s&&C.a).h(s,new A.dc(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.eR=H.l(a6.y.q(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.j(e,"$id9")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.j(c,"$iQ")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.j(b,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.j(a,"$ia2")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.j(a1,"$iap")
s=a6.d_;(s&&C.a).h(s,new A.dd(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eS=H.l(a6.y.q(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.j(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.j(b,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.j(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.j(a0,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.j(a1,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.q(a7+r+a8))
H.j(a2,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.q(a7+r+a8))
H.j(a3,"$ia2")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.q(a7+r+a8))
H.j(a4,"$ia2")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.q(a7+r+a8))
H.j(a5,"$iaw")
s=a6.d0;(s&&C.a).h(s,new A.de(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aw:function(a,b,c){if(c==null||!c.d)C.b.a7(b.a,b.d,1)
else{a.fo(c)
C.b.a7(b.a,b.d,0)}},
ap:function(a,b,c){if(c==null||c.d<6)C.b.a7(b.a,b.d,1)
else{a.dq(c)
C.b.a7(b.a,b.d,0)}},
shd:function(a){this.r1=H.i(a,"$ib",[A.av],"$ab")},
shq:function(a){this.cW=H.i(a,"$ib",[A.d8],"$ab")},
siS:function(a){this.cX=H.i(a,"$ib",[A.da],"$ab")},
sja:function(a){this.cY=H.i(a,"$ib",[A.db],"$ab")},
sjp:function(a){this.cZ=H.i(a,"$ib",[A.dc],"$ab")},
sjq:function(a){this.d_=H.i(a,"$ib",[A.dd],"$ab")},
sjr:function(a){this.d0=H.i(a,"$ib",[A.de],"$ab")}}
A.hP.prototype={
jv:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aK+"];\n"
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
jC:function(a){var u
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
jw:function(a){var u
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
jK:function(a){var u,t
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
jL:function(a){var u,t
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
jE:function(a){var u
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
jP:function(a){var u
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
aQ:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cc(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jz:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aQ(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
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
ju:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aQ(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
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
jx:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aQ(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.e:s=u+t
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
jA:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aQ(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.e:s=u+t
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
jI:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aQ(a,s,"specular")
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
case C.i:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.e:s=u+t
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
jD:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
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
switch(t){case C.c:u=a.a=u+r
break
case C.i:u=a.a=u+r
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
jG:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aQ(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.e:s=u+t
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
jH:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aQ(a,s,"refract")
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
case C.i:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.e:s=u+t
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
jy:function(a){var u,t=this.z
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
jF:function(a){var u,t=this.Q
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
jJ:function(a){var u,t=this.ch
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
jM:function(a){var u,t,s=this.cx
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
jN:function(a){var u,t,s=this.cy
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
jO:function(a){var u,t,s=this.db
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
jB:function(a){var u
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
A.d8.prototype={}
A.dc.prototype={}
A.da.prototype={}
A.dd.prototype={}
A.db.prototype={}
A.de.prototype={}
A.cW.prototype={
cf:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dP(b,35633)
r.f=r.dP(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.mI(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.n(s)))}r.j5()
r.j7()},
U:function(a){a.a.useProgram(this.r)
this.x.kb()},
dP:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.mI(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.q("Error compiling shader '"+H.n(s)+"': "+H.n(u)))}return s},
j5:function(){var u,t,s,r=this,q=H.c([],[A.dz]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dz(p,t.name,s))}r.x=new A.fE(q)},
j7:function(){var u,t,s,r=this,q=H.c([],[A.er]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.d(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.k8(t.type,t.size,t.name,s))}r.y=new A.jl(q)},
b2:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.ln(u,this.r,b,a,c)},
hm:function(a,b,c){var u=this.a
if(a===1)return new A.aw(u,b,c)
else return A.ln(u,this.r,b,a,c)},
hn:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.ln(u,this.r,b,a,c)},
bK:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
k8:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b2(b,c,d)
case 5121:return u.b2(b,c,d)
case 5122:return u.b2(b,c,d)
case 5123:return u.b2(b,c,d)
case 5124:return u.b2(b,c,d)
case 5125:return u.b2(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.jh(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.es(u.a,c,d)
case 35667:return new A.ji(u.a,c,d)
case 35668:return new A.jj(u.a,c,d)
case 35669:return new A.jk(u.a,c,d)
case 35674:return new A.jm(u.a,c,d)
case 35675:return new A.d9(u.a,c,d)
case 35676:return new A.av(u.a,c,d)
case 35678:return u.hm(b,c,d)
case 35680:return u.hn(b,c,d)
case 35670:throw H.h(u.bK("BOOL",c))
case 35671:throw H.h(u.bK("BOOL_VEC2",c))
case 35672:throw H.h(u.bK("BOOL_VEC3",c))
case 35673:throw H.h(u.bK("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.cb.prototype={
i:function(a){return this.b}}
A.eh.prototype={}
A.ei.prototype={}
A.er.prototype={}
A.jl.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.jk.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
sjs:function(a){H.i(a,"$ib",[P.A],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.es.prototype={
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.d9.prototype={
am:function(a){var u=new Float32Array(H.dr(H.i(a,"$ib",[P.E],"$ab")))
C.b.fg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.av.prototype={
am:function(a){var u=new Float32Array(H.dr(H.i(a,"$ib",[P.E],"$ab")))
C.b.fh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.aw.prototype={
fo:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.ap.prototype={
dq:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.kx.prototype={
$1:function(a){return 1},
$S:42}
F.ag.prototype={
hc:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ey()
if(q!=null)s=s.t(0,q)
if(u!=null)s=s.t(0,u)
if(t!=null)s=s.t(0,t)
if(s.eV())return
return s.w(0,Math.sqrt(s.G(s)))},
hg:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.G(r)))
r=t.p(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.bn(r.w(0,Math.sqrt(r.G(r))))
return r.w(0,Math.sqrt(r.G(r)))},
cR:function(){var u,t=this
if(t.d!=null)return!0
u=t.hc()
if(u==null){u=t.hg()
if(u==null)return!1}t.d=u
t.a.a.ai()
return!0},
hb:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ey()
if(q!=null)s=s.t(0,q)
if(u!=null)s=s.t(0,u)
if(t!=null)s=s.t(0,t)
if(s.eV())return
return s.w(0,Math.sqrt(s.G(s)))},
hf:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
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
if(Math.abs(r-0)<$.M().a){l=d.p(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.d(t)
if(l-t<0)q=q.P(0)}else{k=u.b
if(typeof k!=="number")return H.d(k)
p=(l-k)/r
k=d.p(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
h=g.a
if(typeof h!=="number")return H.d(h)
f=g.b
if(typeof f!=="number")return H.d(f)
e=g.c
if(typeof e!=="number")return H.d(e)
e=new V.ah(l*p+h,i*p+f,k*p+e).p(0,j)
e=new V.R(e.a,e.b,e.c)
q=e.w(0,Math.sqrt(e.G(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.d(t)
u=u.a
if(typeof u!=="number")return H.d(u)
if((s-t)*p+t-u<0)q=q.P(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.G(l)))
l=o.bn(q)
l=l.w(0,Math.sqrt(l.G(l))).bn(o)
q=l.w(0,Math.sqrt(l.G(l)))}return q},
cP:function(){var u,t=this
if(t.e!=null)return!0
u=t.hb()
if(u==null){u=t.hf()
if(u==null)return!1}t.e=u
t.a.a.ai()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.at(J.aK(s.e),0)+", "+C.j.at(J.aK(t.b.e),0)+", "+C.j.at(J.aK(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.bc.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.at(J.aK(u.e),0)+", "+C.j.at(J.aK(this.b.e),0)},
O:function(){return this.H("")}}
F.bD.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.at(J.aK(u.e),0)},
O:function(){return this.H("")}}
F.ef.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.N():u},
b7:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.b7()||!1
if(!t.a.b7())u=!1
s=t.e
if(s!=null)s.bd(0)
return u},
cO:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aO()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bL().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.bN().a)!==0)++s
if((t&$.dx().a)!==0)++s
if((t&$.dy().a)!==0)++s
if((t&$.cy().a)!==0)++s
if((t&$.bJ().a)!==0)++s
r=a3.gds(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dD])
for(n=0,m=0;m<s;++m){l=a3.jV(m)
k=l.gds(l)
C.a.W(o,m,new Z.dD(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].kp(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.W(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.dr(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c8(new Z.ez(a0,f),o,a3)
e.shC(H.c([],[Z.bS]))
if(a.b.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.aV()
C.a.h(d,c.e)}b=Z.lq(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bS(0,d.length,b))}if(a.c.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.aV()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.aV()
C.a.h(d,c.e)}b=Z.lq(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bS(1,d.length,b))}if(a.d.b.length!==0){t=P.A
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.aV()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.aV()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.aV()
C.a.h(d,c.e)}b=Z.lq(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bS(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.E(s,"\n")},
ai:function(){var u=this.e
if(u!=null)u.C(null)},
$ioS:1}
F.iA.prototype={
cH:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ib",[F.aq],"$ab")
u=H.c([],[F.ag])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
n=new F.ag()
m=s.a
if(m==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
n.a=s
C.a.h(s.d.b,n)
n.b=p
C.a.h(p.d.c,n)
n.c=o
C.a.h(o.d.d,n)
C.a.h(n.a.a.d.b,n)
p=n.a.a.e
if(p!=null)p.C(null)
C.a.h(u,n)}}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
b7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cR())s=!1
return s},
cQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cP())s=!1
return s},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.E(r,"\n")},
O:function(){return this.H("")},
shv:function(a){this.b=H.i(a,"$ib",[F.ag],"$ab")}}
F.iB.prototype={
jS:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.aq],"$ab")
u=H.c([],[F.bc])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.nu(q,p))}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.E(s,"\n")},
O:function(){return this.H("")},
shE:function(a){this.b=H.i(a,"$ib",[F.bc],"$ab")}}
F.iC.prototype={
jT:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.aq],"$ab")
u=H.c([],[F.bD])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.h(0,q)
p=new F.bD()
if(q.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.C(null)
C.a.h(u,p)}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.E(r,"\n")},
O:function(){return this.H("")},
scv:function(a){this.b=H.i(a,"$ib",[F.bD],"$ab")}}
F.aq.prototype={
kp:function(a){var u,t,s=this
if(a.m(0,$.aO())){u=s.f
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bL())){u=s.r
t=[P.E]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bK())){u=s.x
t=[P.E]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bM())){u=s.y
t=[P.E]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.m(0,$.bN())){u=s.z
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.dx())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.dy())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.cy()))return H.c([s.ch],[P.E])
else if(a.m(0,$.bJ())){u=s.cx
t=[P.E]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.E])},
cR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ey()
t.d.T(0,new F.jB(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.bd(0)}return!0},
cP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ey()
t.d.T(0,new F.jA(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.bd(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.j.at(J.aK(s.e),0))
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
C.a.h(q,V.X(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.E(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.jB.prototype={
$1:function(a){var u,t
H.l(a,"$iag")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.t(0,u)}},
$S:9}
F.jA.prototype={
$1:function(a){var u,t
H.l(a,"$iag")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.t(0,u)}},
$S:9}
F.ju.prototype={
aV:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.ai()
return!0},
eg:function(a,b,c,d,e,f,g){var u=F.lp(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bL:function(a,b,c,d,e,f){return this.eg(a,b,c,null,d,e,f)},
jU:function(a,b,c,d,e,f){return this.eg(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
j:function(a,b){var u=this.c
if(b>=u.length)return H.e(u,b)
return u[b]},
b7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cR()
return!0},
cQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cP()
return!0},
jY:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.aV()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.E(u,"\n")},
O:function(){return this.H("")},
sjt:function(a){this.c=H.i(a,"$ib",[F.aq],"$ab")}}
F.jv.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this,s=t.b.length
if(b.a1(0,s))return C.a.j(t.b,b)
b=b.p(0,s)
u=t.c.length
if(b.a1(0,u))return C.a.j(t.c,b)
b=b.p(0,u)
return C.a.j(t.d,b)},
T:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.ag]})
C.a.T(u.b,b)
C.a.T(u.c,new F.jw(u,b))
C.a.T(u.d,new F.jx(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.E(r,"\n")},
shw:function(a){this.b=H.i(a,"$ib",[F.ag],"$ab")},
shx:function(a){this.c=H.i(a,"$ib",[F.ag],"$ab")},
shy:function(a){this.d=H.i(a,"$ib",[F.ag],"$ab")}}
F.jw.prototype={
$1:function(a){H.l(a,"$iag")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:9}
F.jx.prototype={
$1:function(a){var u
H.l(a,"$iag")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:9}
F.jy.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.bf(0,u))return C.a.j(this.c,b.p(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.E(r,"\n")},
shF:function(a){this.b=H.i(a,"$ib",[F.bc],"$ab")},
shG:function(a){this.c=H.i(a,"$ib",[F.bc],"$ab")}}
F.jz.prototype={
gk:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.E(r,"\n")},
scv:function(a){this.b=H.i(a,"$ib",[F.bD],"$ab")}}
O.aM.prototype={
gu:function(){var u=this.dy
return u==null?this.dy=D.N():u},
N:function(a){var u
H.l(a,"$iy")
u=this.dy
if(u!=null)u.C(a)},
bi:function(){return this.N(null)},
e4:function(a){H.l(a,"$iy")
this.a=null
this.N(a)},
j2:function(){return this.e4(null)},
i_:function(a,b){var u=V.an
H.i(b,"$if",[u],"$af")
u=new D.bT([u])
u.b=!0
this.N(u)},
i1:function(a,b){var u=V.an
H.i(b,"$if",[u],"$af")
u=new D.bU([u])
u.b=!0
this.N(u)},
saf:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gu().S(0,t.gaE())
u=t.ch
t.ch=a
if(a!=null)a.gu().h(0,t.gaE())
s=new D.H("environment",u,t.ch,[T.d3])
s.b=!0
t.N(s)}},
dM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.d.ac(a1.e.length+3,4)*4,a3=C.d.ac(a1.f.length+3,4)*4,a4=C.d.ac(a1.r.length+3,4)*4,a5=C.d.ac(a1.x.length+3,4)*4,a6=C.d.ac(a1.y.length+3,4)*4,a7=C.d.ac(a1.z.length+3,4)*4,a8=C.d.ac(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.d.i(a1.a)+C.d.i(u.a)+C.d.i(t.a)+C.d.i(s.a)+C.d.i(r.a)+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)
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
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.aO()
if(h){j=$.bL()
a=new Z.bq(a.a|j.a)}if(g){j=$.bK()
a=new Z.bq(a.a|j.a)}if(f){j=$.bM()
a=new Z.bq(a.a|j.a)}if(e){j=$.bN()
a=new Z.bq(a.a|j.a)}if(c){j=$.bJ()
a=new Z.bq(a.a|j.a)}return new A.hP(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
X:function(a,b){H.i(a,"$ib",[T.d1],"$ab")
if(b!=null)if(!C.a.aW(a,b)){b.saM(0,a.length)
C.a.h(a,b)}},
aD:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.as(u,u.length,[H.x(u,0)]);u.A();){t=u.d
t.toString
s=$.jt
if(s==null)s=$.jt=new V.R(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dh(s)}}},
de:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dM()
u=H.l(a3.fr.j(0,a2.ax),"$ie3")
if(u==null){u=A.nA(a2,a3.a)
a3.cI(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bN
a2=a4.e
if(!(a2 instanceof Z.c8))a2=a4.e=null
if(a2==null||!a2.d.m(0,s)){a2=t.r1
if(a2)a4.d.b7()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cQ()
q.a.cQ()
q=q.e
if(q!=null)q.bd(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.jY()
p=p.e
if(p!=null)p.bd(0)}n=a4.d.cO(new Z.df(a3.a),s)
n.aL($.aO()).e=a1.a.Q.c
if(a2)n.aL($.bL()).e=a1.a.cx.c
if(r)n.aL($.bK()).e=a1.a.ch.c
if(t.rx)n.aL($.bM()).e=a1.a.cy.c
if(q)n.aL($.bN()).e=a1.a.db.c
if(t.x1)n.aL($.bJ()).e=a1.a.dx.c
a4.e=n}a2=T.d1
m=H.c([],[a2])
a1.a.U(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gV(q)
r=r.dy
r.toString
r.am(q.ak(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gV(q)
p=a3.dx
p=a3.cx=q.l(0,p.gV(p))
q=p}r=r.fr
r.toString
r.am(q.ak(0,!0))}r=a1.a
q=a3.gf6()
r=r.fy
r.toString
r.am(q.ak(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.am(C.p.ak(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.am(C.p.ak(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.am(C.p.ak(q,!0))}if(t.aK>0){l=a1.e.a.length
r=a1.a.k4
C.b.a7(r.a,r.d,l)
for(r=[P.E],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.l(p,"$ian")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.dr(H.i(p.ak(0,!0),"$ib",r,"$ab")))
C.b.fh(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.v(r.a,r.d,p,o,q)
break
case C.e:a1.X(m,a1.f.d)
r=a1.a
q=a1.f.d
r.aw(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break
case C.h:a1.X(m,a1.f.e)
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
C.b.v(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.v(r.a,r.d,p,o,q)
break
case C.e:a1.X(m,a1.r.d)
r=a1.a
q=a1.r.d
r.aw(r.y1,r.aK,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break
case C.h:a1.X(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ap(r.y2,r.aK,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.i:r=a1.a
q=a1.x.f
r=r.ax
r.toString
p=q.a
o=q.b
q=q.c
C.b.v(r.a,r.d,p,o,q)
break
case C.e:a1.X(m,a1.x.d)
r=a1.a
q=a1.x.d
r.aw(r.bN,r.bO,q)
q=a1.a
r=a1.x.f
q=q.ax
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break
case C.h:a1.X(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ap(r.ey,r.bO,q)
q=a1.a
r=a1.x.f
q=q.ax
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.i:r=a1.a
q=a1.y.f
r=r.bP
r.toString
p=q.a
o=q.b
q=q.c
C.b.v(r.a,r.d,p,o,q)
break
case C.e:a1.X(m,a1.y.d)
r=a1.a
q=a1.y.d
r.aw(r.ez,r.bQ,q)
q=a1.a
r=a1.y.f
q=q.bP
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break
case C.h:a1.X(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ap(r.eA,r.bQ,q)
q=a1.a
r=a1.y.f
q=q.bP
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.i:r=a1.a
q=a1.z.f
r=r.bR
r.toString
p=q.a
o=q.b
q=q.c
C.b.v(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bT
C.b.K(q.a,q.d,o)
break
case C.e:a1.X(m,a1.z.d)
r=a1.a
q=a1.z.d
r.aw(r.eB,r.bS,q)
q=a1.a
r=a1.z.f
q=q.bR
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bT
C.b.K(r.a,r.d,o)
break
case C.h:a1.X(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ap(r.eC,r.bS,q)
q=a1.a
r=a1.z.f
q=q.bR
q.toString
p=r.a
o=r.b
r=r.c
C.b.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bT
C.b.K(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.eN
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
p=a1.a.cW
if(h>=p.length)return H.e(p,h)
e=p[h]
p=i.dh(f.a)
o=p.a
if(typeof o!=="number")return o.l()
d=p.b
if(typeof d!=="number")return d.l()
c=p.c
if(typeof c!=="number")return c.l()
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.v(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.v(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.eO
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
p=a1.a.cX
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gbr(f)
o=e.b
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=i.bu(f.gbr(f))
o=e.c
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gn(f)
o=e.d
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcK()
o=e.e
C.b.K(o.a,o.d,p)
p=f.gcL()
o=e.f
C.b.K(o.a,o.d,p)
p=f.gcM()
o=e.r
C.b.K(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eP
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
p=a1.a.cY
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gbr(f)
o=e.b
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcT(f).l8()
o=e.c
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=i.bu(f.gbr(f))
o=e.d
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gn(f)
o=e.e
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gl5()
o=e.f
C.b.K(o.a,o.d,p)
p=f.gl4()
o=e.r
C.b.K(o.a,o.d,p)
p=f.gcK()
o=e.x
C.b.K(o.a,o.d,p)
p=f.gcL()
o=e.y
C.b.K(o.a,o.d,p)
p=f.gcM()
o=e.z
C.b.K(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eQ
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
o=a1.a.cZ
if(h>=o.length)return H.e(o,h)
e=o[h]
o=f.gbs()
H.i(m,"$ib",p,"$ab")
if(!C.a.aW(m,o)){o.saM(0,m.length)
C.a.h(m,o)}o=f.gcT(f)
d=e.d
C.b.v(d.a,d.d,o.a,o.b,o.c)
o=f.gc9()
d=e.b
C.b.v(d.a,d.d,o.a,o.b,o.c)
o=f.gc6(f)
d=e.c
C.b.v(d.a,d.d,o.a,o.b,o.c)
o=i.dh(f.gcT(f))
d=o.a
if(typeof d!=="number")return d.l()
c=o.b
if(typeof c!=="number")return c.l()
b=o.c
if(typeof b!=="number")return b.l()
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.v(c.a,c.d,d,o,b)
b=f.gn(f)
o=e.f
C.b.v(o.a,o.d,b.a,b.b,b.c)
b=f.gbs()
o=b.geW(b)
if(!o){o=e.x
C.b.a7(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.a7(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.eR
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.y,q=r.length,p=[P.E],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
d=a1.a.d_
if(h>=d.length)return H.e(d,h)
e=d[h]
d=f.gbs()
H.i(m,"$ib",o,"$ab")
if(!C.a.aW(m,d)){d.saM(0,m.length)
C.a.h(m,d)}a=i.l(0,f.gV(f))
d=f.gV(f)
c=$.cT
d=d.bu(c==null?$.cT=new V.ah(0,0,0):c)
c=e.b
C.b.v(c.a,c.d,d.a,d.b,d.c)
d=$.cT
d=a.bu(d==null?$.cT=new V.ah(0,0,0):d)
c=e.c
C.b.v(c.a,c.d,d.a,d.b,d.c)
d=a.d5(0)
c=e.d
j=new Float32Array(H.dr(H.i(new V.e4(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ak(0,!0),"$ib",p,"$ab")))
C.b.fg(c.a,c.d,!1,j)
c=f.gn(f)
d=e.e
C.b.v(d.a,d.d,c.a,c.b,c.c)
c=f.gbs()
d=c.geW(c)
if(!d){d=e.r
C.b.a7(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.a7(d.a,d.d,0)}d=f.gcK()
c=e.x
C.b.K(c.a,c.d,d)
d=f.gcL()
c=e.y
C.b.K(c.a,c.d,d)
d=f.gcM()
c=e.z
C.b.K(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.eS
C.b.a7(r.a,r.d,l)
r=a3.db
i=r.gV(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.D)(r),++g){f=r[g]
p=a1.a.d0
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gbs()
H.i(m,"$ib",a2,"$ab")
if(!C.a.aW(m,p)){p.saM(0,m.length)
C.a.h(m,p)}p=f.gbr(f)
o=e.b
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcT(f)
o=e.c
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gc9()
o=e.d
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gc6(f)
o=e.e
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=i.bu(f.gbr(f))
o=e.f
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbs()
o=p.geW(p)
if(!o){p=e.x
C.b.a7(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.a7(p.a,p.d,0)}p=f.gn(f)
o=e.y
C.b.v(o.a,o.d,p.a,p.b,p.c)
p=f.gl9()
o=e.z
C.b.K(o.a,o.d,p)
p=f.gla()
o=e.Q
C.b.K(o.a,o.d,p)
p=f.gcK()
o=e.ch
C.b.K(o.a,o.d,p)
p=f.gcL()
o=e.cx
C.b.K(o.a,o.d,p)
p=f.gcM()
o=e.cy
C.b.K(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.i:break
case C.e:a1.X(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.aw(a2.eD,a2.bU,r)
break
case C.h:a1.X(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ap(a2.eE,a2.bU,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gV(r).d5(0)}a2=a2.id
a2.toString
a2.am(r.ak(0,!0))}if(t.dy){a1.X(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ap(a2.eF,a2.eG,r)
switch(t.r){case C.c:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.bV
a2.toString
q=r.a
p=r.b
r=r.c
C.b.v(a2.a,a2.d,q,p,r)
break
case C.e:a1.X(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.aw(a2.eH,a2.bW,r)
r=a1.a
a2=a1.cx.f
r=r.bV
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.v(r.a,r.d,q,p,a2)
break
case C.h:a1.X(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ap(a2.eI,a2.bW,r)
r=a1.a
a2=a1.cx.f
r=r.bV
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.v(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bY
a2.toString
q=r.a
p=r.b
r=r.c
C.b.v(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bX
C.b.K(r.a,r.d,p)
break
case C.e:a1.X(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.aw(a2.eJ,a2.bZ,r)
r=a1.a
a2=a1.cy.f
r=r.bY
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bX
C.b.K(a2.a,a2.d,p)
break
case C.h:a1.X(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ap(a2.eK,a2.bZ,r)
r=a1.a
a2=a1.cy.f
r=r.bY
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bX
C.b.K(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.c_
C.b.K(a2.a,a2.d,q)
break
case C.e:a1.X(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.aw(a2.eL,a2.c0,q)
q=a1.a
a2=a1.db.f
q=q.c_
C.b.K(q.a,q.d,a2)
break
case C.h:a1.X(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ap(a2.eM,a2.c0,q)
q=a1.a
a2=a1.db.f
q=q.c_
C.b.K(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(a3)
a2=a4.e
a2.U(a3)
a2.ae(a3)
a2.ah(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ah(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.cU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dM().ax},
she:function(a){this.e=H.i(a,"$ia_",[V.an],"$aa_")}}
O.hN.prototype={
bG:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.H(u.b,t,a,[P.E])
t.b=!0
u.a.N(t)}},
aS:function(){this.dv()
this.bG(1)},
aH:function(){this.cd()
this.bG(1)},
sfi:function(a,b){var u,t=this
if(b==null)b=1
if(b<=0)t.el(0)
else if(t.c===C.c){t.c=C.i
t.cd()
t.bG(1)
u=t.a
u.a=null
u.N(null)}t.bG(b)}}
O.cM.prototype={
N:function(a){this.a.N(H.l(a,"$iy"))},
bi:function(){return this.N(null)},
aS:function(){},
aH:function(){},
e9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().S(0,t.gaE())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.gaE())
s=new D.H(t.b+".texture2D",u,t.d,[T.d2])
s.b=!0
t.a.N(s)}},
ea:function(a){},
el:function(a){var u,t=this,s=null
if(t.c!==C.c){t.c=C.c
u=t.a
u.a=null
u.N(s)}t.aS()
t.e9(s)
t.ea(s)
t.a.N(s)},
saj:function(a){var u=this,t=u.c
if(t!==C.e){if(t===C.c)u.aH()
u.c=C.e
u.ea(null)
t=u.a
t.a=null
t.N(null)}u.e9(a)}}
O.hO.prototype={}
O.bd.prototype={
cD:function(a){var u,t,s=this
if(!J.U(s.f,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.u])
t.b=!0
s.a.N(t)}},
aS:function(){this.dv()
this.cD(new V.u(0,0,0))},
aH:function(){this.cd()
this.cD(new V.u(1,1,1))},
sn:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.i
t.aH()
u=t.a
u.a=null
u.N(null)}t.cD(b)}}
O.hQ.prototype={
e8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.H(u.b+".refraction",t,a,[P.E])
t.b=!0
u.a.N(t)}},
aS:function(){this.dw()
this.e8(1)},
aH:function(){this.ce()
this.e8(1)}}
O.hR.prototype={
bH:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.H(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.N(t)}},
aS:function(){this.dw()
this.bH(100)},
aH:function(){this.ce()
this.bH(100)},
sad:function(a){var u,t=this
if(a==null)a=100
if(a<=0)t.el(0)
else if(t.c===C.c){t.c=C.i
t.ce()
t.bH(100)
u=t.a
u.a=null
u.N(null)}t.bH(a)}}
O.eg.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.N():u},
N:function(a){var u
H.l(a,"$iy")
u=this.e
if(u!=null)u.C(a)},
bi:function(){return this.N(null)},
de:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.l(a.fr.j(0,n),"$ieh")
if(u==null){t=a.a
u=new A.eh(t,n)
u.cf(t,n)
u.d3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"fov"),"$ia2")
u.ch=H.j(u.y.j(0,"ratio"),"$ia2")
u.cx=H.j(u.y.j(0,"boxClr"),"$iP")
u.cy=H.j(u.y.j(0,"boxTxt"),"$iap")
u.db=H.j(u.y.j(0,"viewMat"),"$iav")
a.cI(u)}o.a=u}if(b.e==null){t=b.d.cO(new Z.df(a.a),$.aO())
t.aL($.aO()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
C.b.K(p.a,p.d,q)
q=r.ch
C.b.K(q.a,q.d,t/s)
s=o.c
r.cy.dq(s)
s=o.d
t=r.cx
C.b.v(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).d5(0)
r=r.db
r.toString
r.am(s.ak(0,!0))
t=b.e
if(t instanceof Z.c8){t.U(a)
t.ae(a)
t.ah(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cU()
t=o.c
if(t!=null)t.ah(a)}}
O.iG.prototype={
gu:function(){var u=this.c
return u==null?this.c=D.N():u},
aD:function(a,b){},
de:function(a,b){var u,t,s,r,q,p,o=this,n="SolidColor",m=o.a
if(m==null){u=H.l(a.fr.j(0,n),"$iei")
if(u==null){m=a.a
u=new A.ei(m,n)
u.cf(m,n)
u.d3(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"color"),"$ies")
u.ch=H.j(u.y.j(0,"projViewObjMat"),"$iav")
a.cI(u)}o.a=u
m=u}t=b.e
if((!(t instanceof Z.c8)?b.e=null:t)==null){m=b.d.cO(new Z.df(a.a),$.aO())
t=m.aL($.aO())
s=o.a
t.e=s.z.c
b.e=m
m=s}m.U(a)
t=o.b
s=m.Q
s.toString
r=t.a
q=t.b
p=t.c
t=t.d
C.b.l0(s.a,s.d,r,q,p,t)
t=a.gf6()
m=m.ch
m.toString
m.am(t.ak(0,!0))
t=b.e
t.U(a)
t.ae(a)
t.ah(a)
t=o.a
t.toString
a.a.useProgram(null)
t.x.cU()}}
O.bY.prototype={}
T.dF.prototype={
bz:function(a){H.l(a,"$iy")},
h3:function(){return this.bz(null)},
cJ:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gew().h(0,t.ghN())
t.b.c.gbo().h(0,t.ghP())
t.b.c.gc9().h(0,t.ghR())
u=t.b.e
u.gdt(u).h(0,t.gjl())
t.b.e.gbo().h(0,t.gjj())
u=t.b.e
u.gex(u).h(0,t.gjh())
return!0},
hO:function(a){if(!H.j(H.l(a,"$iy"),"$iaW").x.b.m(0,this.c))return
this.ch=this.Q=!0},
hQ:function(a){var u,t=this
H.l(a,"$iy")
if(!t.Q)return
if(t.ch){H.j(a,"$iaW")
u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
if(u.G(u)<t.z)return
t.ch=!1}},
hS:function(a){var u=this
H.l(a,"$iy")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.e1(a)},
jm:function(a){H.l(a,"$iy")
this.ch=this.Q=!0},
jk:function(a){var u,t=this
H.l(a,"$iy")
if(!t.Q)return
if(t.ch){H.j(a,"$id6")
u=a.d.p(0,a.y)
u=new V.a3(u.a,u.b)
if(u.G(u)<t.z)return
t.ch=!1}},
ji:function(a){var u=this
H.l(a,"$iy")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.e1(a)},
e1:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.j(a,"$iaW")
u=new D.y()
u.b=!0
t=k.f
if(t!=null)t.C(u)
u=a.d
t=u.a
s=a.c
if(typeof t!=="number")return t.w()
r=t/s.c
u=u.b
if(typeof u!=="number")return u.w()
q=u/s.d
s=k.a
u=k.d
t=u.r
if(typeof t!=="number")return t.p()
p=C.o.bb(r*(t-1))
t=u.x
if(typeof t!=="number")return t.p()
o=C.o.bb(q*(t-1))
s=s.a
t=u.x
if(typeof t!=="number")return t.p()
n=t-1-o
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
m=new Uint8Array(4)
s.readPixels(p,n,1,1,6408,5121,m)
s.bindFramebuffer(36160,null)
new T.j3(m,1,1).hA()
u=m.length
if(0>=u)return H.e(m,0)
t=m[0]/255
if(1>=u)return H.e(m,1)
s=m[1]/255
if(2>=u)return H.e(m,2)
l=m[2]/255
if(3>=u)return H.e(m,3)
u=m[3]/255
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(l<0)l=0
else if(l>1)l=1
if(u<0)u=0
else if(u>1)u=1
u=new T.dG(new V.a3(r,q),new V.af(t,s,l,u))
u.b=!0
l=k.x
if(l!=null)l.C(u)}}
T.dG.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.d1.prototype={}
T.d2.prototype={}
T.j_.prototype={
e7:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cV()}},
saM:function(a,b){this.a=b},
gu:function(){var u=this.y
return u==null?this.y=D.N():u},
U:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
ah:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.d3.prototype={
saM:function(a,b){this.a=b},
gu:function(){var u=this.e
return u==null?this.e=D.N():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ah:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.j0.prototype={
ay:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lY(a)
t=T.lj(q)
r=W.p
W.a6(u,"load",H.m(new T.j2(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
b4:function(a,b,c,d,e,f){var u,t=W.lY(c);++this.d
u=W.p
W.a6(t,"load",H.m(new T.j1(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
e6:function(a,b,c){var u,t,s,r
b=V.dw(b)
u=V.dw(a.width)
t=V.dw(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kR()
s.width=u
s.height=t
r=H.l(C.l.fj(s,"2d"),"$icC")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ok(r.getImageData(0,0,s.width,s.height))}}}
T.j2.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.e6(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.b.f9(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.e7();++u.e},
$S:13}
T.j1.prototype={
$1:function(a){var u=this,t=u.a,s=t.e6(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.f9(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cV()}++t.e},
$S:13}
T.j3.prototype={
hA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.dz()
u=C.d.ac(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.e(s,i)
g=s[i]
if(h<0||h>=r)return H.e(s,h)
s[i]=s[h]
s[h]=g}}}}}
V.fA.prototype={
bc:function(a,b){return!0},
i:function(a){return"all"},
$iby:1}
V.by.prototype={}
V.e2.prototype={
bc:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].bc(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saR:function(a){this.a=H.i(a,"$ib",[V.by],"$ab")},
$iby:1}
V.bB.prototype={
bc:function(a,b){return!this.ft(0,b)},
i:function(a){return"!["+this.du(0)+"]"}}
V.iz.prototype={
fH:function(a){var u,t
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
u=new H.aS([P.A,P.a7])
for(t=new H.e_(a,a.gk(a),[H.aI(a,"B",0)]);t.A();)u.W(0,t.d,!0)
this.sj4(u)},
bc:function(a,b){return this.a.er(0,b)},
i:function(a){var u=this.a
return P.li(new H.dZ(u,[H.x(u,0)]))},
sj4:function(a){this.a=H.i(a,"$iO",[P.A,P.a7],"$aO")},
$iby:1}
V.cX.prototype={
E:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d7(this.a.R(0,b))
r.saR(H.c([],[V.by]))
r.c=!1
C.a.h(this.c,r)
return r},
kd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.bc(0,a))return r}return},
i:function(a){return this.b},
sjn:function(a){this.c=H.i(a,"$ib",[V.d7],"$ab")}}
V.eq.prototype={
i:function(a){var u=H.mT(this.b,"\n","\\n"),t=H.mT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d5.prototype={
i:function(a){return this.b},
sj_:function(a){var u=P.o
this.c=H.i(a,"$iO",[u,u],"$aO")}}
V.j8.prototype={
R:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.sjn(H.c([],[V.d7]))
u.d=null
this.a.W(0,b,u)}return u},
bt:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d5(a)
u=P.o
t.sj_(new H.aS([u,u]))
this.b.W(0,a,t)}return t},
kZ:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.eq]),l=this.c,k=[P.A],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.b1(a,s)
q=l.kd(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.li(j)
throw H.h(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.li(j)
o=l.d
n=o.c.j(0,p)
t=new V.eq(n==null?o.b:n,p,s)}++s}}},
sjb:function(a){this.a=H.i(a,"$iO",[P.o,V.cX],"$aO")},
sjg:function(a){this.b=H.i(a,"$iO",[P.o,V.d5],"$aO")}}
V.d7.prototype={
i:function(a){return this.b.b+": "+this.du(0)}}
X.fJ.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a4:function(a){var u=this.fr
if(u!=null)u.C(a)},
sav:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.H("width",u,b,[P.A])
u.b=!0
t.a4(u)}},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.H("height",u,b,[P.A])
u.b=!0
t.a4(u)}},
U:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.l()
i.sav(0,C.f.a6(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.l()
i.saq(0,C.f.a6(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.ad(u.getParameter(3379))
p=V.dw(s)
o=V.dw(r)
q=V.dw(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.fa(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lj(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.e7()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cV()
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
a.c=C.f.a6(s*i.a)
r=t.d
a.d=C.f.a6(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.d(k)
j=C.f.a6(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.d(l)
u.viewport(j,C.f.a6(t*l),C.f.a6(s*k),C.f.a6(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ah:function(a){a.a.bindFramebuffer(36160,null)}}
X.c9.prototype={$ibf:1}
X.hk.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.N():u},
a4:function(a){var u=this.x
if(u!=null)u.C(a)},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.d(u)
q=C.f.a6(r*u)
r=s.b
if(typeof t!=="number")return H.d(t)
p=C.f.a6(r*t)
r=C.f.a6(s.c*u)
a.c=r
s=C.f.a6(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ah:function(a){}}
X.hp.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.N():u},
U:function(a){var u
a.cy.c5(V.bW())
u=V.bW()
a.db.c5(u)},
ah:function(a){a.cy.aZ()
a.db.aZ()},
$ibf:1,
$ic9:1}
X.ea.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.N():u},
a4:function(a){var u
H.l(a,"$iy")
u=this.f
if(u!=null)u.C(a)},
h7:function(){return this.a4(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bz(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.c5(k)
r=$.mb
if(r==null){r=V.l9()
q=V.lo()
p=$.mq
r=V.l5(r,q,p==null?$.mq=new V.R(0,0,-1):p)
$.mb=r
u=r}else u=r
r=s.b
if(r!=null){t=r.ca(0,a,s)
if(t!=null)u=t.l(0,u)}a.db.c5(u)},
ah:function(a){a.cy.aZ()
a.db.aZ()},
$ibf:1,
$ic9:1}
X.d0.prototype={}
V.kH.prototype={
$1:function(a){var u
H.l(a,"$ibn")
u=C.f.fd(this.a.gkf(),2)
if(u!=="0.00")P.fx(u+" fps")},
$S:45}
V.iD.prototype={
fI:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a6(q,"scroll",H.m(new V.iF(o),{func:1,ret:-1,args:[r]}),!1,r)},
ef:function(a,b){var u,t,s,r,q
a=H.ad(C.d.jZ(a,0,4))
u=P.mw(C.u,b,C.n,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nb()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.o],"$ab")
this.j6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kZ(C.a.kn(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.oI(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.T(m[1])
l.textContent=H.T(m[0])
t.appendChild(l)}else{k=P.mw(C.u,n,C.n,!1)
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
j6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j8()
t=P.o
u.sjb(new H.aS([t,V.cX]))
u.sjg(new H.aS([t,V.d5]))
u.c=null
u.c=u.R(0,q)
t=u.R(0,q).E(0,p)
s=V.ao(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,p).E(0,p)
s=new V.bB()
r=[V.by]
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.ab("*"))
C.a.h(s.a,t)
t=u.R(0,p).E(0,"BoldEnd")
s=V.ao(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,q).E(0,o)
s=V.ao(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,o).E(0,o)
s=new V.bB()
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.ab("_"))
C.a.h(s.a,t)
t=u.R(0,o).E(0,n)
s=V.ao(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,q).E(0,m)
s=V.ao(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,m).E(0,m)
s=new V.bB()
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ao(new H.ab("`"))
C.a.h(s.a,t)
t=u.R(0,m).E(0,"CodeEnd")
s=V.ao(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,q).E(0,l)
s=V.ao(new H.ab("["))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,l).E(0,k)
s=V.ao(new H.ab("|"))
C.a.h(t.a,s)
s=u.R(0,l).E(0,j)
t=V.ao(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,l).E(0,l)
t=new V.bB()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.ab("|]"))
C.a.h(t.a,s)
s=u.R(0,k).E(0,j)
t=V.ao(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,k).E(0,k)
t=new V.bB()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.ab("|]"))
C.a.h(t.a,s)
C.a.h(u.R(0,q).E(0,i).a,new V.fA())
s=u.R(0,i).E(0,i)
t=new V.bB()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ao(new H.ab("*_`["))
C.a.h(t.a,s)
s=u.R(0,"BoldEnd")
s.d=s.a.bt(p)
s=u.R(0,n)
s.d=s.a.bt(o)
s=u.R(0,"CodeEnd")
s.d=s.a.bt(m)
s=u.R(0,j)
s.d=s.a.bt("Link")
s=u.R(0,i)
s.d=s.a.bt(i)
this.b=u}}
V.iF.prototype={
$1:function(a){P.ll(C.m,new V.iE(this.a))},
$S:13}
V.iE.prototype={
$0:function(){var u=C.f.a6(document.documentElement.scrollTop),t=this.a.style,s=H.n(-0.01*u)+"px"
t.top=s},
$S:2}
Q.hl.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.N():u}}
Q.r.prototype={
gaz:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gaM:function(a){return this.gaz()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.r))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.a1.prototype={
i:function(a){var u=this,t=u.d,s=t!=null?", "+t.i(0)+" => "+H.n(u.e):""
return u.a+", "+u.b.i(0)+" => "+u.c.i(0)+s}}
Q.iK.prototype={
fJ:function(){this.sho(P.nz(64,new Q.iL($.aa().a),!1,P.A))
this.c=null},
es:function(){var u,t,s,r=Q.mj()
for(u=0;u<64;++u){t=r.a
s=this.a
if(u>=s.length)return H.e(s,u);(t&&C.a).W(t,u,s[u])}return r},
F:function(a){var u,t
if(!a.gaz())return $.kM()
u=a.gaM(a)
t=this.a
if(u<0||u>=t.length)return H.e(t,u)
return new Q.z(t[u])},
B:function(a,b){var u
if(!a.gaz())return!1
u=this.a;(u&&C.a).W(u,a.gaM(a),b.a)
return!0},
d1:function(a){var u,t,s=a.a,r=$.kL(),q=r.a
if(typeof s!=="number")return s.D()
if(typeof q!=="number")return H.d(q)
u=new Q.z((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.D()
if(typeof q!=="number")return H.d(q)
if(new Q.z((s&q)>>>0).m(0,u))return Q.m3(t)}return new Q.r(0,0)},
eh:function(a){var u=this,t=a.b,s=u.F(t),r=a.d,q=r!=null?u.F(r):null,p=$.aa()
u.B(t,p)
t=q!=null
if(t)u.B(r,p)
r=$.c4()
p=s.a
r=r.a
if(typeof p!=="number")return p.Z()
if(typeof r!=="number")return H.d(r)
u.B(a.c,new Q.z((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.Z()
u.B(a.e,new Q.z((t|r)>>>0))}},
k6:function(a){if(this.eU(a)){if(!this.kh(a))return 2
return 1}return 0},
eU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bI(),f=a?$.ae():$.bu()
g=g.a
f=f.a
if(typeof g!=="number")return g.Z()
if(typeof f!=="number")return H.d(f)
u=$.b1().a
if(typeof u!=="number")return H.d(u)
t=h.d1(new Q.z((g|f|1&u)>>>0))
if(!t.gaz())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.cx()
o=[Q.z]
if(h.L(new Q.r(f,r),q,H.c([p],o)))return!0
n=u+-1
if(h.L(new Q.r(f,n),q,H.c([p],o)))return!0
f=g+2
p=$.cw()
if(h.L(new Q.r(f,r),q,H.c([p],o)))return!0
if(h.L(new Q.r(f,n),q,H.c([p],o)))return!0
f=g+1
m=u+2
if(h.L(new Q.r(f,m),q,H.c([p],o)))return!0
l=g+-1
if(h.L(new Q.r(l,m),q,H.c([p],o)))return!0
m=g+-2
if(h.L(new Q.r(m,r),q,H.c([p],o)))return!0
if(h.L(new Q.r(m,n),q,H.c([p],o)))return!0
m=u+-2
if(h.L(new Q.r(f,m),q,H.c([p],o)))return!0
if(h.L(new Q.r(l,m),q,H.c([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.r(g,j)
if(h.L(i,q,H.c([$.b2(),$.aJ()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.r(g,j)
if(h.L(i,q,H.c([$.b2(),$.aJ()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.F(i).a==$.aa().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.r(j,u)
if(h.L(i,q,H.c([$.b2(),$.aJ()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.r(j,u)
if(h.L(i,q,H.c([$.b2(),$.aJ()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.r(p,m)
if(h.L(i,q,H.c([$.bt(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.r(p,m)
if(h.L(i,q,H.c([$.bt(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.r(p,m)
if(h.L(i,q,H.c([$.bt(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.F(i).a==$.aa().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.r(m,p)
if(h.L(i,q,H.c([$.bt(),$.aJ()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.F(i).a==$.aa().a))break}p=$.bI()
if(h.L(new Q.r(f,r),q,H.c([p],o)))return!0
if(h.L(new Q.r(f,u),q,H.c([p],o)))return!0
if(h.L(new Q.r(f,n),q,H.c([p],o)))return!0
if(h.L(new Q.r(g,n),q,H.c([p],o)))return!0
if(h.L(new Q.r(l,n),q,H.c([p],o)))return!0
if(h.L(new Q.r(l,u),q,H.c([p],o)))return!0
if(h.L(new Q.r(l,r),q,H.c([p],o)))return!0
if(h.L(new Q.r(g,r),q,H.c([p],o)))return!0
return!1},
L:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[Q.z],"$ab")
if(a.gaz()){u=this.F(a)
u.toString
t=$.ae()
s=u.a
t=t.a
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.d(t)
if((s&t)>>>0===t===b){t=$.c5()
r=t.a
if(typeof r!=="number")return H.d(r)
q=new Q.z((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.e(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.d(r)
if(q.m(0,new Q.z((s&r)>>>0)))return!0}}}return!1},
kh:function(a){var u,t,s
for(u=0;u<64;++u){t=this.a
if(u>=t.length)return H.e(t,u)
t=t[u]
if(t!=$.aa().a){s=$.ae().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
s=(t&s)>>>0===s===a
t=s}else t=!1
if(t)if(this.ki(Q.m3(u)))return!0}return!1},
ki:function(a){var u={}
u.a=!1
this.d2(new Q.iN(u),a)
return u.a},
km:function(a){var u={}
u.a=!1
this.d2(new Q.iO(u,a),a.b)
return u.a},
d2:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="Pawn en passent ",a={func:1,ret:-1,args:[Q.a1]}
H.m(a0,a)
if(!a1.gaz())return
u=d.F(a1)
t=new Q.iM(d,u,a0)
s=u.a
r=$.c5().a
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.d(r)
q=new Q.z((s&r)>>>0)
if(q.m(0,$.cx())){H.m(t,a)
u=d.F(a1)
u.toString
a=$.ae()
s=u.a
a=a.a
if(typeof s!=="number")return s.D()
if(typeof a!=="number")return H.d(a)
p=(s&a)>>>0===a
r=$.c4().a
if(typeof r!=="number")return H.d(r)
o=p?-1:1
n=a1.a
m=n+o
l=a1.b
k=new Q.r(m,l)
j=d.F(k).a
i=$.aa().a
if(j==i){t.$1(new Q.a1("Pawn move to "+k.i(0),a1,k,c,c))
if((s&r)>>>0!==r){k=new Q.r(n+(o+o),l)
if(d.F(k).a==i)t.$1(new Q.a1("Pawn move to "+k.i(0),a1,k,c,c))}}s=l+-1
k=new Q.r(m,s)
h=d.F(k)
j=h.a
g=$.kM().a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.D()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a1("Pawn take "+h.gaY()+" at "+k.i(0),a1,k,k,c));++l
k=new Q.r(m,l)
h=d.F(k)
j=h.a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.D()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a1("Pawn take "+h.gaY()+" at "+k.i(0),a1,k,k,c))
if(d.c!=null)j=n===(p?4:5)
else j=!1
if(j){k=new Q.r(m,s)
if(k.gaz()&&d.F(k).a==i){f=new Q.r(n,s)
h=d.F(f)
j=h.a
if(j!=i){if(typeof j!=="number")return j.D()
j=(j&a)>>>0===a!==p}else j=!1
if(j){e=d.c.F(new Q.r(n+(o+o),s))
s=e.a
if(typeof s!=="number")return s.D()
if((s&r)>>>0!==r&&e.dl(h))t.$1(new Q.a1(b+h.gaY()+" at "+k.i(0),a1,k,f,c))}}k=new Q.r(m,l)
if(k.gaz()&&d.F(k).a==i){f=new Q.r(n,l)
h=d.F(f)
s=h.a
if(s!=i){if(typeof s!=="number")return s.D()
a=(s&a)>>>0===a!==p}else a=!1
if(a){e=d.c.F(new Q.r(n+(o+o),l))
a=e.a
if(typeof a!=="number")return a.D()
if((a&r)>>>0!==r&&e.dl(h))t.$1(new Q.a1(b+h.gaY()+" at "+k.i(0),a1,k,f,c))}}}}else if(q.m(0,$.b2()))d.j3(t,a1)
else if(q.m(0,$.cw())){H.m(t,a)
d.a5(t,a1,2,1)
d.a5(t,a1,2,-1)
d.a5(t,a1,1,2)
d.a5(t,a1,-1,2)
d.a5(t,a1,-2,1)
d.a5(t,a1,-2,-1)
d.a5(t,a1,1,-2)
d.a5(t,a1,-1,-2)}else if(q.m(0,$.bt())){H.m(t,a)
d.ab(t,a1,1,1)
d.ab(t,a1,1,-1)
d.ab(t,a1,-1,-1)
d.ab(t,a1,-1,1)}else if(q.m(0,$.aJ())){H.m(t,a)
d.ab(t,a1,1,1)
d.ab(t,a1,1,0)
d.ab(t,a1,1,-1)
d.ab(t,a1,0,-1)
d.ab(t,a1,-1,-1)
d.ab(t,a1,-1,0)
d.ab(t,a1,-1,1)
d.ab(t,a1,0,1)}else if(q.m(0,$.bI()))d.hD(t,a1)},
a5:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,{func:1,ret:-1,args:[Q.a1]})
u=new Q.r(b.a+c,b.b+d)
if(!u.gaz())return!0
t=this.F(b)
s=this.F(u)
r=s.a
if(r==$.aa().a){a.$1(new Q.a1(t.gaY()+" move to "+u.i(0),b,u,null,null))
return!1}t.toString
q=$.ae()
p=t.a
q=q.a
if(typeof p!=="number")return p.D()
if(typeof q!=="number")return H.d(q)
if(typeof r!=="number")return r.D()
r=(r&q)>>>0===q!==((p&q)>>>0===q)
if(r)a.$1(new Q.a1(t.gaY()+" take "+s.gaY()+" at "+u.i(0),b,u,u,null))
return!0},
ab:function(a,b,c,d){var u
H.m(a,{func:1,ret:-1,args:[Q.a1]})
for(u=1;u<8;++u)if(this.a5(a,b,c*u,d*u))return},
j3:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(a,{func:1,ret:-1,args:[Q.a1]})
u=m.F(b)
u.toString
t=$.ae()
s=u.a
t=t.a
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.d(t)
r=$.c4().a
if(typeof r!=="number")return H.d(r)
m.ab(a,b,0,1)
m.ab(a,b,0,-1)
m.ab(a,b,1,0)
m.ab(a,b,-1,0)
if((s&r)>>>0!==r){q=new Q.r((s&t)>>>0===t?8:1,4)
t=m.F(q).a
s=$.c5().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
if(new Q.z((t&s)>>>0).m(0,$.bI())&&(t&r)>>>0!==r){t=b.b
p=t>4?-1:1
n=t+p
t=b.a
while(!0){if(!(n!==4)){o=!0
break}if(m.F(new Q.r(t,n)).a!=$.aa().a){o=!1
break}n+=p}if(o){t=q.a
s=4-p-p
a.$1(new Q.a1("Rook castles with King",b,new Q.r(t,s+p),q,new Q.r(t,s)))}}}},
hD:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.m(a,{func:1,ret:-1,args:[Q.a1]})
u=j.F(b)
u.toString
t=$.c4()
s=u.a
t=t.a
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.d(t)
j.a5(a,b,1,1)
j.a5(a,b,1,0)
j.a5(a,b,1,-1)
j.a5(a,b,0,-1)
j.a5(a,b,-1,-1)
j.a5(a,b,-1,0)
j.a5(a,b,-1,1)
j.a5(a,b,0,1)
if((s&t)>>>0!==t)for(t=b.a,s=b.b,r=1;r<=8;r+=7){q=new Q.r(t,r)
p=j.F(q).a
o=$.c5().a
if(typeof p!=="number")return p.D()
if(typeof o!=="number")return H.d(o)
if(new Q.z((p&o)>>>0).m(0,$.b2())){o=$.c4().a
if(typeof o!=="number")return H.d(o)
o=(p&o)>>>0!==o
p=o}else p=!1
if(p){n=s>r?-1:1
l=s+n
k=l
while(!0){if(!(k!==r)){m=!0
break}if(j.F(new Q.r(t,k)).a!=$.aa().a){m=!1
break}k+=n}if(m){p=l+n
a.$1(new Q.a1("King castles with Rook",b,new Q.r(t,p),q,new Q.r(t,p-n)))}}}},
i:function(a){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.e(t,m)
t=t[m]
s=$.c4().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
if((t&s)>>>0===s){u=!0
break}++m}r=new Q.iV()
r.d=!1
t=new Array(64)
t.fixed$length=Array
r.shl(0,H.c(t,[P.o]))
r.d=!0
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.e(s,m)
r.fm(q,o,new Q.z(s[m]).fc(0,!1,u))}return r.i(0)},
sho:function(a){this.a=H.i(a,"$ib",[P.A],"$ab")}}
Q.iL.prototype={
$1:function(a){return this.a},
$S:46}
Q.iN.prototype={
$1:function(a){this.a.a=!0},
$S:14}
Q.iO.prototype={
$1:function(a){var u,t=this.a
if(t.a)return
u=this.b
if(a.b.m(0,u.b)&&a.c.m(0,u.c)&&J.U(a.d,u.d)&&J.U(a.e,u.e))t.a=!0},
$S:14}
Q.iM.prototype={
$1:function(a){var u,t,s=this.a.es()
s.eh(a)
u=this.b
u.toString
t=$.ae()
u=u.a
t=t.a
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.d(t)
if(!s.eU((u&t)>>>0===t))this.c.$1(a)},
$S:14}
Q.iV.prototype={
dU:function(a,b){var u=a*8+b
if(u>=64)return-1
return u},
fm:function(a,b,c){var u=this.dU(a,b)
if(u<0)return
C.a.W(this.c,u,c)},
hM:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
i:function(a){var u,t,s,r,q,p,o,n=this,m=H.c([],[P.o]),l=n.hM()
if(n.d){u=C.j.c4("",2+C.d.ac(l-1,2))
for(t=l+1,s=0;s<8;){++s
u+=C.j.c4(" "+s,t)}C.a.h(m,C.j.l_(u))
r=2}else r=0
for(q=0;q<8;++q){u=n.d?C.j.c4(""+(q+1),r):""
for(s=0;s<8;++s){if(n.d||s!==0)u+="|"
p=n.dU(q,s)
t=n.c
if(p<0||p>=t.length)return H.e(t,p)
o=t[p]
u+=C.j.c4(o==null?"":o,l)}C.a.h(m,n.d?u+"|":u)}return C.a.E(m,"\n")},
shl:function(a,b){this.c=H.i(b,"$ib",[P.o],"$ab")}}
Q.z.prototype={
Z:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.Z()
if(typeof t!=="number")return H.d(t)
return new Q.z((u|t)>>>0)},
dl:function(a){var u,t=this.a,s=$.kL().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
u=a.a
if(typeof u!=="number")return u.D()
return(t&s)>>>0===(u&s)>>>0},
m:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.z))return!1
u=b.a
return this.a==u},
gk_:function(){var u,t=this.a,s=$.lI().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
u=new Q.z((t&s)>>>0)
if(u.m(0,$.bu()))return"B"
if(u.m(0,$.ae()))return"W"
return" "},
gkK:function(){var u,t=this.a,s=$.c5().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
u=new Q.z((t&s)>>>0)
if(u.m(0,$.cx()))return"P"
if(u.m(0,$.b2()))return"R"
if(u.m(0,$.cw()))return"H"
if(u.m(0,$.bt()))return"B"
if(u.m(0,$.aJ()))return"Q"
if(u.m(0,$.bI()))return"K"
return" "},
gkr:function(){var u=this.a,t=$.b1().a
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.d(t)
t=(u&t)>>>0
if(t===$.aa().a)return" "
return""+t},
gaY:function(){var u,t=this.a,s=$.c5().a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.d(s)
u=new Q.z((t&s)>>>0)
if(u.m(0,$.cx()))return"Pawn"
if(u.m(0,$.b2()))return"Rook"
if(u.m(0,$.cw()))return"Knight"
if(u.m(0,$.bt()))return"Bishop"
if(u.m(0,$.aJ()))return"Queen"
if(u.m(0,$.bI()))return"King"
return"Empty"},
fc:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.aa().a)return""
if(c){u=$.c4().a
if(typeof r!=="number")return r.D()
if(typeof u!=="number")return H.d(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.gk_()+s.gkK()
return b?t+s.gkr():t},
i:function(a){return this.fc(a,!0,!0)}}
S.fL.prototype={
fu:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.fN==null){$.fN=E.a4(q,!0,q,"color bishop shape",q,q)
$.kP=E.a4(q,!0,q,"pick bishop shape",q,q)
O.aT("./resources/bishop.obj",a.f).au(new S.fO(),q)}u=this.k3
t=u?"white":"black"
s=t+(" bishop "+d)
t=$.bt()
u=u?$.ae():$.bu()
t=t.a
u=u.a
if(typeof t!=="number")return t.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(s,new Q.z((t|u|d&r)>>>0),$.fN,$.kP)}}
S.fO.prototype={
$1:function(a){H.l(a,"$iV")
$.fN.sa2(0,a.c)
$.kP.sa2(0,a.c)},
$S:3}
S.dB.prototype={
fv:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=null
l.siR(H.c([],[S.cS]))
l.sjf(H.c([],[S.d4]))
l.sdW(H.c([],[Q.a1]))
l.k4=S.nB(a)
l.a="board"
l.r1=!1
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=S.nV(a,l,(u+t)%2===0,new Q.r(u,t))
r=l.id;(r&&C.a).h(r,s)
r=l.y
q=H.x(r,0)
H.F(s,q)
p=[q]
if(H.C(r.aT(H.c([s],p)))){o=r.a
n=o.length
C.a.h(o,s)
q=H.i(H.c([s],p),"$if",[q],"$af")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=S.m9(a,l,!0,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.x(q,0)
H.F(r,p)
o=[p]
if(H.C(q.aT(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}r=S.m9(a,l,!1,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.x(q,0)
H.F(r,p)
o=[p]
if(H.C(q.aT(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}}l.aa(0,S.is(a,l,!0,1,0,0.7))
l.aa(0,S.is(a,l,!0,2,0,0.7))
l.aa(0,S.is(a,l,!1,1,0,0.7))
l.aa(0,S.is(a,l,!1,2,0,0.7))
l.aa(0,S.hA(a,l,!0,1,0,0.7))
l.aa(0,S.hA(a,l,!0,2,3.141592653589793,0.7))
l.aa(0,S.hA(a,l,!1,1,0,0.7))
l.aa(0,S.hA(a,l,!1,2,3.141592653589793,0.7))
l.aa(0,S.fM(a,l,!0,1,-1.5707963267948966,0.8))
l.aa(0,S.fM(a,l,!0,2,1.5707963267948966,0.8))
l.aa(0,S.fM(a,l,!1,1,-1.5707963267948966,0.8))
l.aa(0,S.fM(a,l,!1,2,1.5707963267948966,0.8))
l.aa(0,S.mf(a,l,!0,1,0,1))
l.aa(0,S.mf(a,l,!1,1,0,1))
l.aa(0,S.m1(a,l,!0,1.5707963267948966,0.9))
l.aa(0,S.m1(a,l,!1,1.5707963267948966,0.9))
r=E.a4(k,!0,k,"",k,k)
l.k3=r
l.y.h(0,r)
l.k3.y.h(0,S.h5(a,l,0,0,0,0))
l.k3.y.h(0,S.h5(a,l,8,0,1.5707963267948966,1))
l.k3.y.h(0,S.h5(a,l,8,8,3.141592653589793,2))
l.k3.y.h(0,S.h5(a,l,0,8,4.71238898038469,3))
r=F.om(30)
q=l.k4.db
q=E.a4(k,!0,U.bP(V.e5(0,-0.5,0).l(0,V.m5(-1.5707963267948966)).l(0,V.l7(12,12,12,1))),"",r,q)
l.k2=q
l.y.h(0,q)
q=l.fy
r=q.d
if(r==null)r=q.d=D.N()
r.h(0,l.gii())
l.dn(q.c)},
aa:function(a,b){var u=this.go;(u&&C.a).h(u,b)
this.y.h(0,b)},
kI:function(a){var u,t,s,r,q,p=this
for(u=p.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(J.U(r.ry.b,a)){p.e2(r.fy)
return}}for(u=p.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){q=u[s]
if(J.U(q.r1.b,a)){p.e2(q.fy)
return}}},
e2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
for(u=j.k1,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.c.m(0,a)||J.U(r.d,a)){u=j.fy
H.l(r,"$ia1")
q=u.c.F(r.b)
q.toString
t=$.ae()
p=q.a
t=t.a
if(typeof p!=="number")return p.D()
if(typeof t!=="number")return H.d(t)
if((p&t)>>>0===t!==u.a)H.t(P.q("may not make a move movement out-of-turn"))
if(!u.c.km(r))H.t(P.q("not a valid move: "+J.aK(r)))
t=u.c
o=t.es()
o.c=t
u.c=o
o.eh(r)
t=!u.a
u.a=t
u.c.k6(t)
u=u.d
if(u!=null)u.C(null)
u=j.k1;(u&&C.a).sk(u,0)
return}}u=j.fy
n=u.c.F(a)
t=n.a
if(t!=$.aa().a){p=$.ae().a
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.d(p)
p=(t&p)>>>0===p!==u.a}else p=!0
if(p)return
q=j.eT(n)
m=q!=null&&H.C(q.r1)
j.em()
j.en()
if(!m){q=j.eT(n)
if(q!=null){q.scb(0,!0)
l=j.fb(q.fy)
if(l!=null)l.scb(0,!0)}if(t==$.kM().a)H.t(P.q("may not get movements for an out-of-bounds piece"))
p=$.ae().a
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.d(p)
if((t&p)>>>0===p!==u.a)H.t(P.q("may not get movements out-of-turn"))
u=u.c
t=u.d1(n)
k=H.c([],[Q.a1])
u.d2(C.a.gjQ(k),t)
j.sdW(k)
j.fn(j.k1)}},
ij:function(a){var u=this
H.l(a,"$iy")
u.em()
u.en()
u.dn(u.fy.c)},
eT:function(a){var u,t,s,r,q,p=a.a,o=$.kL(),n=o.a
if(typeof p!=="number")return p.D()
if(typeof n!=="number")return H.d(n)
u=new Q.z((p&n)>>>0)
for(p=this.go,n=p.length,t=0;t<p.length;p.length===n||(0,H.D)(p),++t){s=p[t]
r=s.k4.a
q=o.a
if(typeof r!=="number")return r.D()
if(typeof q!=="number")return H.d(q)
if(new Q.z((r&q)>>>0).m(0,u))return s}return},
kJ:function(a){var u,t,s,r
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(J.U(r.fy,a))return r}return},
fb:function(a){var u,t,s,r
for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.fy.m(0,a))return r}return},
em:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(!1!==r.r2){r.r1=r.r2=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){q=u[s]
if(!1!==q.k3){q.k2=q.k3=!1
q.al()}}},
en:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(!1!==r.r1){r.r2=r.r1=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){q=u[s]
if(!1!==q.k2){q.k3=q.k2=!1
q.al()}}},
sdr:function(a){var u,t,s,r,q,p,o=this
if(a!==o.r1){o.r1=a
u=o.k2.b=!a
o.k3.b=u
for(t=o.go,s=t.length,r=0;r<s;++r){q=t[r]
if(a!==q.rx){q.rx=a
q.x1.b=u
q.x2.b=a}}for(t=o.id,s=t.length,r=0;r<s;++r){p=t[r]
if(a!==p.k4){p.k4=a
p.r2.b=u
p.rx.b=a}}}},
dn:function(a){var u,t,s,r,q,p
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=a.d1(r.k4)
if(!J.U(r.fy,q)){r.fy=q
r.ed()}p=q.a
if(p>=1)if(p<=8){p=q.b
p=p>=1&&p<=8}else p=!1
else p=!1
r.b=p}},
fn:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[Q.a1],"$ab")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
r=this.fb(s.c)
if(!0!==r.k3){r.k3=!0
r.k2=!1
r.al()}q=s.d
if(q!=null){p=this.kJ(q)
if(!0!==p.r2){p.r2=!0
p.r1=!1
p.al()}}}},
siR:function(a){this.go=H.i(a,"$ib",[S.cS],"$ab")},
sjf:function(a){this.id=H.i(a,"$ib",[S.d4],"$ab")},
sdW:function(a){this.k1=H.i(a,"$ib",[Q.a1],"$ab")}}
S.h4.prototype={
fw:function(a,b,c,d,e,f){var u,t=this,s=null
if($.h6==null){$.h6=E.a4(s,!0,s,"edge shape",s,s)
O.aT("./resources/edge.obj",a.f).au(new S.h7(),s)}t.sc3(U.bP(V.e5(c-4,0,d-4).l(0,V.l6(e))))
t.a="edge"
t.y.h(0,$.h6)
u=b.k4.cy
if(f>=u.length)return H.e(u,f)
t.sa0(u[f])}}
S.h7.prototype={
$1:function(a){H.l(a,"$iV")
$.h6.sa2(0,a.c)},
$S:3}
S.kI.prototype={
$1:function(a){var u,t
H.l(a,"$iy")
u=this.a
u.sdr(!0)
t=this.b
t.ae(this.c)
u.sdr(!1)
t.df()},
$S:6}
S.kJ.prototype={
$1:function(a){this.a.kI(H.j(H.l(a,"$iy"),"$idG").d.ff())},
$S:6}
S.hw.prototype={
fz:function(a,b,c,d,e){var u,t,s,r,q=null
if($.hx==null){$.hx=E.a4(q,!0,q,"color king shape",q,q)
$.l3=E.a4(q,!0,q,"pick king shape",q,q)
O.aT("./resources/king.obj",a.f).au(new S.hy(),q)}u=this.k3
t=(u?"white":"black")+" king"
s=$.bI()
u=u?$.ae():$.bu()
s=s.a
u=u.a
if(typeof s!=="number")return s.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(t,new Q.z((s|u|1&r)>>>0),$.hx,$.l3)}}
S.hy.prototype={
$1:function(a){H.l(a,"$iV")
$.hx.sa2(0,a.c)
$.l3.sa2(0,a.c)},
$S:3}
S.hz.prototype={
fA:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hB==null){$.hB=E.a4(q,!0,q,"color knight shape",q,q)
$.l4=E.a4(q,!0,q,"pick knight shape",q,q)
O.aT("./resources/knight.obj",a.f).au(new S.hC(),q)}u=this.k3
t=u?"white":"black"
s=t+(" knight "+d)
t=$.cw()
u=u?$.ae():$.bu()
t=t.a
u=u.a
if(typeof t!=="number")return t.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(s,new Q.z((t|u|d&r)>>>0),$.hB,$.l4)}}
S.hC.prototype={
$1:function(a){H.l(a,"$iV")
$.hB.sa2(0,a.c)
$.l4.sa2(0,a.c)},
$S:3}
S.hS.prototype={
fC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=34067,e=a.f,d=e.a,c=d.createTexture()
d.bindTexture(f,c)
d.texParameteri(f,10242,10497)
d.texParameteri(f,10243,10497)
d.texParameteri(f,10241,9729)
d.texParameteri(f,10240,9729)
d.bindTexture(f,null)
u=new T.d3()
u.a=0
u.b=c
u.c=!1
u.d=0
e.b4(u,c,"resources/posx.png",34069,!1,!1)
e.b4(u,c,"resources/negx.png",34070,!1,!1)
e.b4(u,c,"resources/posy.png",34071,!1,!1)
e.b4(u,c,"resources/negy.png",34072,!1,!1)
e.b4(u,c,"resources/posz.png",34073,!1,!1)
e.b4(u,c,"resources/negz.png",34074,!1,!1)
g.a=u
t=D.lU()
t.sn(0,new V.u(1,0.9,0.8))
t.b=U.bP(V.l5(V.l9(),V.lo(),new V.R(0,-1,-0.25)))
s=D.lU()
s.sn(0,new V.u(0,0.1,0.3))
s.b=U.bP(V.l5(V.l9(),V.lo(),new V.R(0,1,0.25)))
r=new V.u(0.15,0.15,0.15)
e=O.am()
d=e.x
d.sn(0,new V.u(0.6,0.6,0.6))
d=e.r
d.sn(0,new V.u(0.4,0.4,0.4))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(60)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.b=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.2,0.2,0.2))
d=e.r
d.sn(0,new V.u(0.1,0.1,0.1))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(60)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.c=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.6,0,0))
d=e.r
d.sn(0,new V.u(0.8,0,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.d=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.2,0,0))
d=e.r
d.sn(0,new V.u(0.6,0,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.e=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.5,0.5,0))
d=e.r
d.sn(0,new V.u(0.7,0.7,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.f=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.1,0.1,0))
d=e.r
d.sn(0,new V.u(0.5,0.5,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.r=e
q=new V.u(0.075,0.075,0.075)
e=O.am()
d=e.x
d.sn(0,new V.u(0.6,0.6,0.6))
d=e.r
d.sn(0,new V.u(0.4,0.4,0.4))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(60)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.x=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.2,0.2,0.2))
d=e.r
d.sn(0,new V.u(0.1,0.1,0.1))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(60)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.y=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.6,0,0))
d=e.r
d.sn(0,new V.u(0.8,0,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.z=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.2,0,0))
d=e.r
d.sn(0,new V.u(0.6,0,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.Q=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.5,0.5,0))
d=e.r
d.sn(0,new V.u(0.7,0.7,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.ch=e
e=O.am()
d=e.x
d.sn(0,new V.u(0.1,0.1,0))
d=e.r
d.sn(0,new V.u(0.5,0.5,0))
e.z.sn(0,new V.u(1,1,1))
e.z.sad(100)
e.saf(g.a)
e.cx.sn(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.cx=e
g.shr(H.c([],[O.aM]))
for(p=0;p<4;++p){o=a.f.ay("resources/edge"+p+".png")
e=g.cy
d=O.am()
n=d.x
n.sn(0,new V.u(0.6,0.6,0.6))
d.x.saj(o)
n=d.r
n.sn(0,new V.u(0.4,0.4,0.4))
d.r.saj(o)
d.z.sn(0,new V.u(1,1,1))
d.z.sad(80)
d.saf(g.a)
n=d.cx
n.sn(0,new V.u(0.1,0.1,0.1))
n=d.dx
n.toString
m=H.aI(n,"a_",0)
H.F(t,m)
l=[m]
if(H.C(n.aT(H.c([t],l)))){k=n.a
j=k.length
C.a.h(k,t)
m=H.i(H.c([t],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}n=d.dx
n.toString
m=H.aI(n,"a_",0)
H.F(s,m)
l=[m]
if(H.C(n.aT(H.c([s],l)))){k=n.a
j=k.length
C.a.h(k,s)
m=H.i(H.c([s],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}(e&&C.a).h(e,d)}i=a.f.ay("resources/tableColor.png")
h=a.f.ay("resources/tableSpec.png")
e=O.am()
d=e.x
d.sn(0,new V.u(0.6,0.6,0.6))
e.x.saj(i)
d=e.r
d.sn(0,new V.u(0.4,0.4,0.4))
e.r.saj(i)
e.z.sn(0,new V.u(1,1,1))
e.z.sad(80)
e.z.saj(h)
e.saf(g.a)
e.cx.saj(h)
e.Q.saj(a.f.ay("resources/tableNormal.png"))
e.dx.h(0,t)
e.dx.h(0,s)
g.db=e},
eY:function(a){var u=V.nj(a/96,1,1),t=new V.af(u.a,u.b,u.c,1).ff()
u=new O.iG()
u.b=t
return u},
shr:function(a){this.cy=H.i(a,"$ib",[O.aM],"$ab")}}
S.i9.prototype={
fD:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.ia==null){$.ia=E.a4(q,!0,q,"color pawn shape",q,q)
$.l8=E.a4(q,!0,q,"pick pawn shape",q,q)
O.aT("./resources/pawn.obj",a.f).au(new S.ib(),q)}u=this.k3
t=u?"white":"black"
s=t+(" pawn "+d)
t=$.cx()
u=u?$.ae():$.bu()
t=t.a
u=u.a
if(typeof t!=="number")return t.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(s,new Q.z((t|u|d&r)>>>0),$.ia,$.l8)}}
S.ib.prototype={
$1:function(a){H.l(a,"$iV")
$.ia.sa2(0,a.c)
$.l8.sa2(0,a.c)},
$S:3}
S.cS.prototype={
b_:function(a,b,c,d){var u=this
u.fy=new Q.r(0,0)
u.k1=U.bP(null)
u.k4=$.aa()
u.rx=u.r2=u.r1=!1},
b3:function(a,b,c,d){var u=this,t=null,s=u.k2
u.ry=s.k4.eY(s.y.a.length)
u.k4=b
s=[E.V]
u.x1=E.a4(H.c([c],s),!0,t,"color "+a,t,t)
u.x2=E.a4(H.c([d],s),!1,t,"pick "+a,t,u.ry)
u.sc3(u.k1)
u.a=a
u.y.h(0,u.x1)
u.y.h(0,u.x2)
u.ed()
u.al()},
scb:function(a,b){var u=this
if(b!==u.r1){u.r1=b
u.r2=!1
u.al()}},
ed:function(){var u=this,t=u.k1,s=u.fy,r=u.id
r=V.e5(s.a-4.5,0,s.b-4.5).l(0,V.l6(u.go)).l(0,V.l7(r,r,r,1))
t.sV(0,r)
return r},
al:function(){var u,t,s=this
if(s.k3)if(H.C(s.r1))s.sa0(s.k2.k4.d)
else{u=H.C(s.r2)
t=s.k2.k4
if(u)s.sa0(t.f)
else s.sa0(t.b)}else if(H.C(s.r1))s.sa0(s.k2.k4.e)
else{u=H.C(s.r2)
t=s.k2.k4
if(u)s.sa0(t.r)
else s.sa0(t.c)}}}
S.ii.prototype={
fE:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.ij==null){$.ij=E.a4(q,!0,q,"color queen shape",q,q)
$.la=E.a4(q,!0,q,"pick queen shape",q,q)
O.aT("./resources/queen.obj",a.f).au(new S.ik(),q)}u=this.k3
t=u?"white":"black"
s=t+(" queen "+d)
t=$.aJ()
u=u?$.ae():$.bu()
t=t.a
u=u.a
if(typeof t!=="number")return t.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(s,new Q.z((t|u|d&r)>>>0),$.ij,$.la)}}
S.ik.prototype={
$1:function(a){H.l(a,"$iV")
$.ij.sa2(0,a.c)
$.la.sa2(0,a.c)},
$S:3}
S.ir.prototype={
fG:function(a,b,c,d,e,f){var u,t,s,r,q=null,p="rook shape"
if($.it==null){$.it=E.a4(q,!0,q,p,q,q)
$.lf=E.a4(q,!0,q,p,q,q)
O.aT("./resources/rook.obj",a.f).au(new S.iu(),q)}u=this.k3
t=u?"white":"black"
s=t+(" rook "+d)
t=$.b2()
u=u?$.ae():$.bu()
t=t.a
u=u.a
if(typeof t!=="number")return t.Z()
if(typeof u!=="number")return H.d(u)
r=$.b1().a
if(typeof r!=="number")return H.d(r)
this.b3(s,new Q.z((t|u|d&r)>>>0),$.it,$.lf)}}
S.iu.prototype={
$1:function(a){H.l(a,"$iV")
$.it.sa2(0,a.c)
$.lf.sa2(0,a.c)},
$S:3}
S.d4.prototype={
fK:function(a,b,c,d){var u,t,s,r,q=this,p=null
if($.j5==null){$.j5=E.a4(p,!0,p,"color tile shape",p,p)
$.lk=E.a4(p,!0,p,"pick tile shape",p,p)
O.aT("./resources/tile.obj",a.f).au(new S.j6(),p)}q.k4=q.k3=q.k2=!1
u=q.k1?"white":"black"
t=q.fy
s=t.a
t=t.b
r=u+(" tile "+s+" "+t)
u=q.id
q.r1=u.k4.eY(u.y.a.length)
u=[E.V]
q.r2=E.a4(H.c([$.j5],u),!0,p,"color "+r,p,p)
q.rx=E.a4(H.c([$.lk],u),!1,p,"pick "+r,p,q.r1)
q.sc3(U.bP(V.e5(s-4.5,0,t-4.5)))
q.a=r
q.y.h(0,q.r2)
q.y.h(0,q.rx)
q.al()},
scb:function(a,b){var u=this
if(b!==u.k2){u.k2=b
u.k3=!1
u.al()}},
al:function(){var u,t,s=this
if(s.k1)if(H.C(s.k2))s.sa0(s.id.k4.z)
else{u=H.C(s.k3)
t=s.id.k4
if(u)s.sa0(t.ch)
else s.sa0(t.x)}else if(H.C(s.k2))s.sa0(s.id.k4.Q)
else{u=H.C(s.k3)
t=s.id.k4
if(u)s.sa0(t.cx)
else s.sa0(t.y)}}}
S.j6.prototype={
$1:function(a){H.l(a,"$iV")
$.j5.sa2(0,a.c)
$.lk.sa2(0,a.c)},
$S:3}
L.kE.prototype={
$0:function(){return S.oH(this.a)},
$S:4};(function aliases(){var u=J.a.prototype
u.fq=u.i
u=J.dW.prototype
u.fs=u.i
u=O.cM.prototype
u.dv=u.aS
u.cd=u.aH
u=O.bd.prototype
u.dw=u.aS
u.ce=u.aH
u=V.e2.prototype
u.ft=u.bc
u.du=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1i,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J.aR.prototype,"gjQ","h",26)
t(P,"oe","nZ",11)
t(P,"of","o_",11)
t(P,"og","o0",11)
s(P,"mH","oc",4)
r(P.eD.prototype,"gep",0,1,null,["$2","$1"],["ba","eq"],41,0)
r(P.fc.prototype,"gk0",1,0,null,["$1","$0"],["aJ","k5"],43,0)
var m
r(m=E.V.prototype,"gf2",0,0,null,["$1","$0"],["f3","ky"],0,0)
r(m,"gf4",0,0,null,["$1","$0"],["f5","kz"],0,0)
r(m,"gf0",0,0,null,["$1","$0"],["f1","kx"],0,0)
r(m,"geZ",0,0,null,["$1","$0"],["f_","ku"],0,0)
q(m,"gks","kt",8)
q(m,"gkv","kw",8)
r(m=E.ep.prototype,"gdB",0,0,null,["$1","$0"],["dD","dC"],0,0)
p(m,"gkS","df",4)
o(m=X.ew.prototype,"gig","ih",10)
o(m,"gi2","i3",10)
o(m,"gi8","i9",5)
o(m,"gim","io",19)
o(m,"gik","il",19)
o(m,"gir","is",5)
o(m,"giv","iw",5)
o(m,"gic","ie",5)
o(m,"git","iu",5)
o(m,"gia","ib",5)
o(m,"gix","iy",48)
o(m,"giz","iA",10)
o(m,"giP","iQ",12)
o(m,"giL","iM",12)
o(m,"giN","iO",12)
r(m=D.dY.prototype,"gdY",0,0,null,["$1","$0"],["dZ","ip"],0,0)
o(m,"giB","iC",40)
q(m,"ghX","hY",20)
q(m,"giF","iG",20)
n(V.a3.prototype,"gk","d7",21)
n(V.R.prototype,"gk","d7",21)
r(m=U.cJ.prototype,"gbB",0,0,null,["$1","$0"],["a_","aG"],0,0)
q(m,"ghV","hW",22)
q(m,"giD","iE",22)
r(m=U.ex.prototype,"gbB",0,0,null,["$1","$0"],["a_","aG"],0,0)
o(m,"gfS","fT",1)
o(m,"gfU","fV",1)
o(m,"gfW","fX",1)
o(m,"ghI","hJ",1)
o(m,"ghK","hL",1)
o(m,"gh1","h2",1)
o(m,"gh_","h0",1)
o(m,"gfY","fZ",1)
r(m=M.dH.prototype,"ga9",0,0,null,["$1","$0"],["a3","bh"],0,0)
q(m,"giH","iI",23)
q(m,"giJ","iK",23)
r(M.dK.prototype,"ga9",0,0,null,["$1","$0"],["a3","bh"],0,0)
r(m=M.dP.prototype,"ga9",0,0,null,["$1","$0"],["a3","bh"],0,0)
q(m,"gi4","i5",8)
q(m,"gi6","i7",8)
r(m=O.aM.prototype,"gaE",0,0,null,["$1","$0"],["N","bi"],0,0)
r(m,"gj1",0,0,null,["$1","$0"],["e4","j2"],0,0)
q(m,"ghZ","i_",24)
q(m,"gi0","i1",24)
r(O.cM.prototype,"gaE",0,0,null,["$1","$0"],["N","bi"],0,0)
r(O.eg.prototype,"gaE",0,0,null,["$1","$0"],["N","bi"],0,0)
r(m=T.dF.prototype,"gdE",0,0,null,["$1","$0"],["bz","h3"],0,0)
o(m,"ghN","hO",1)
o(m,"ghP","hQ",1)
o(m,"ghR","hS",1)
o(m,"gjl","jm",1)
o(m,"gjj","jk",1)
o(m,"gjh","ji",1)
r(X.ea.prototype,"gh6",0,0,null,["$1","$0"],["a4","h7"],0,0)
o(S.dB.prototype,"gii","ij",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.l1,J.a,J.as,P.eR,P.f,H.e_,P.aQ,H.ce,H.ev,H.jd,P.bQ,H.cI,H.cD,H.f8,P.al,H.hE,H.hF,H.hs,H.eS,H.jF,P.ff,P.eA,P.eD,P.bs,P.ak,P.eB,P.cZ,P.d_,P.iS,P.ki,P.bn,P.at,P.kn,P.kg,P.dh,P.ka,P.B,P.cE,P.km,P.a7,P.aP,P.ai,P.bv,P.i8,P.ek,P.eK,P.hj,P.b,P.O,P.I,P.e1,P.a9,P.o,P.bX,W.fV,W.G,W.dR,P.fk,P.kb,O.a_,O.cN,E.fK,E.V,E.im,E.ep,Z.ez,Z.df,Z.c8,Z.bS,Z.bq,D.fR,D.cd,D.y,O.kq,O.du,O.kr,X.dE,X.dX,X.hv,X.hI,X.bA,X.hZ,X.j9,X.ew,D.cc,D.a8,D.eb,D.ej,D.em,D.en,D.eo,V.u,V.af,V.ha,V.e4,V.an,V.a5,V.ah,V.aX,V.cV,V.a3,V.R,U.ex,M.dK,M.dP,M.aN,A.dz,A.fE,A.hP,A.d8,A.dc,A.da,A.dd,A.db,A.de,A.cb,A.er,A.jl,F.ag,F.bc,F.bD,F.ef,F.iA,F.iB,F.iC,F.aq,F.ju,F.jv,F.jy,F.jz,O.bY,O.cM,T.dF,T.j0,T.j3,V.fA,V.by,V.e2,V.iz,V.cX,V.eq,V.d5,V.j8,X.d0,X.c9,X.hp,X.ea,V.iD,Q.hl,Q.r,Q.a1,Q.iK,Q.iV,Q.z,S.hS])
s(J.a,[J.hr,J.dV,J.dW,J.aR,J.cg,J.bV,H.cP,W.k,W.fz,W.dA,W.cC,W.b6,W.b7,W.W,W.eE,W.fZ,W.h_,W.eG,W.dO,W.eI,W.h1,W.p,W.eL,W.b9,W.hm,W.eN,W.bR,W.hH,W.hT,W.eT,W.eU,W.be,W.eV,W.eY,W.bg,W.f1,W.f3,W.bk,W.f4,W.bl,W.f9,W.aY,W.fd,W.j7,W.bo,W.fg,W.jb,W.jq,W.fl,W.fn,W.fp,W.fr,W.ft,P.bx,P.eP,P.bC,P.f_,P.ig,P.fa,P.bF,P.fi,P.fF,P.eC,P.dC,P.dS,P.ec,P.ed,P.ck,P.ee,P.el,P.et,P.f6])
s(J.dW,[J.ic,J.cl,J.bw])
t(J.l0,J.aR)
s(J.cg,[J.dU,J.dT])
t(P.hG,P.eR)
s(P.hG,[H.eu,W.jP,W.jO,P.hf])
t(H.ab,H.eu)
s(P.f,[H.h8,H.hL,H.jD])
s(P.aQ,[H.hM,H.jE])
s(P.bQ,[H.i5,H.hu,H.jo,H.jf,H.fQ,H.ix,P.fD,P.cR,P.b4,P.jp,P.jn,P.cY,P.fT,P.fY])
s(H.cD,[H.kK,H.iX,H.ht,H.kA,H.kB,H.kC,P.jL,P.jK,P.jM,P.jN,P.kl,P.kk,P.jI,P.jH,P.ko,P.kp,P.kv,P.jU,P.k1,P.jY,P.jZ,P.k_,P.jW,P.k0,P.jV,P.k4,P.k5,P.k3,P.k2,P.iT,P.iU,P.kt,P.ke,P.kd,P.kf,P.hK,P.h2,P.h3,W.hn,W.ho,W.hV,W.hX,W.iw,W.iR,W.jT,P.kw,P.hg,P.hh,P.fH,E.io,E.ip,E.iq,E.j4,D.hb,D.hc,F.kx,F.jB,F.jA,F.jw,F.jx,T.j2,T.j1,V.kH,V.iF,V.iE,Q.iL,Q.iN,Q.iO,Q.iM,S.fO,S.h7,S.kI,S.kJ,S.hy,S.hC,S.ib,S.ik,S.iu,S.j6,L.kE])
s(H.iX,[H.iP,H.cA])
t(H.jG,P.fD)
t(P.hJ,P.al)
t(H.aS,P.hJ)
t(H.dZ,H.h8)
t(H.e7,H.cP)
s(H.e7,[H.di,H.dk])
t(H.dj,H.di)
t(H.cO,H.dj)
t(H.dl,H.dk)
t(H.e8,H.dl)
s(H.e8,[H.i_,H.i0,H.i1,H.i2,H.i3,H.e9,H.i4])
s(P.eD,[P.jJ,P.fc])
t(P.kc,P.kn)
t(P.k9,P.kg)
t(P.dJ,P.iS)
t(P.h9,P.cE)
t(P.jr,P.h9)
t(P.js,P.dJ)
s(P.ai,[P.E,P.A])
s(P.b4,[P.cj,P.hq])
s(W.k,[W.K,W.he,W.cK,W.bj,W.dm,W.bm,W.aZ,W.dp,W.jC,W.dg,P.fI,P.c7])
s(W.K,[W.ac,W.bO])
s(W.ac,[W.w,P.v])
s(W.w,[W.fB,W.fC,W.ca,W.dM,W.hi,W.cL,W.iy])
s(W.b6,[W.cG,W.fW,W.fX])
t(W.fU,W.b7)
t(W.cH,W.eE)
t(W.eH,W.eG)
t(W.dN,W.eH)
t(W.eJ,W.eI)
t(W.h0,W.eJ)
t(W.b8,W.dA)
t(W.eM,W.eL)
t(W.hd,W.eM)
t(W.eO,W.eN)
t(W.cf,W.eO)
t(W.ba,W.cK)
s(W.p,[W.bZ,W.bh])
s(W.bZ,[W.bb,W.aj,W.b_])
t(W.hU,W.eT)
t(W.hW,W.eU)
t(W.eW,W.eV)
t(W.hY,W.eW)
t(W.eZ,W.eY)
t(W.cQ,W.eZ)
t(W.f2,W.f1)
t(W.id,W.f2)
t(W.iv,W.f3)
t(W.dn,W.dm)
t(W.iH,W.dn)
t(W.f5,W.f4)
t(W.iI,W.f5)
t(W.iQ,W.f9)
t(W.fe,W.fd)
t(W.iY,W.fe)
t(W.dq,W.dp)
t(W.iZ,W.dq)
t(W.fh,W.fg)
t(W.ja,W.fh)
t(W.br,W.aj)
t(W.fm,W.fl)
t(W.jQ,W.fm)
t(W.eF,W.dO)
t(W.fo,W.fn)
t(W.k6,W.fo)
t(W.fq,W.fp)
t(W.eX,W.fq)
t(W.fs,W.fr)
t(W.kh,W.fs)
t(W.fu,W.ft)
t(W.kj,W.fu)
t(W.jR,P.cZ)
t(W.lr,W.jR)
t(W.jS,P.d_)
t(P.ay,P.kb)
t(P.eQ,P.eP)
t(P.hD,P.eQ)
t(P.f0,P.f_)
t(P.i6,P.f0)
t(P.fb,P.fa)
t(P.iW,P.fb)
t(P.fj,P.fi)
t(P.jc,P.fj)
t(P.fG,P.eC)
t(P.i7,P.c7)
t(P.f7,P.f6)
t(P.iJ,P.f7)
s(E.fK,[Z.dD,A.cW,T.d1])
s(D.y,[D.bT,D.bU,D.H,O.ih,X.ie,T.dG])
s(X.ie,[X.e0,X.aW,X.d6])
s(O.a_,[D.dY,U.cJ,M.dH])
s(D.fR,[U.fS,U.au])
t(U.dI,U.au)
s(A.cW,[A.e3,A.eh,A.ei])
s(A.er,[A.Q,A.ji,A.jj,A.jk,A.jg,A.a2,A.jh,A.P,A.es,A.jm,A.d9,A.av,A.aw,A.ap])
s(O.bY,[O.aM,O.eg,O.iG])
s(O.cM,[O.hN,O.hO,O.bd])
s(O.bd,[O.hQ,O.hR])
s(T.d1,[T.d2,T.d3])
t(T.j_,T.d2)
s(V.e2,[V.bB,V.d7])
s(X.d0,[X.fJ,X.hk])
s(E.V,[S.cS,S.dB,S.h4,S.d4])
s(S.cS,[S.fL,S.hw,S.hz,S.i9,S.ii,S.ir])
u(H.eu,H.ev)
u(H.di,P.B)
u(H.dj,H.ce)
u(H.dk,P.B)
u(H.dl,H.ce)
u(P.eR,P.B)
u(W.eE,W.fV)
u(W.eG,P.B)
u(W.eH,W.G)
u(W.eI,P.B)
u(W.eJ,W.G)
u(W.eL,P.B)
u(W.eM,W.G)
u(W.eN,P.B)
u(W.eO,W.G)
u(W.eT,P.al)
u(W.eU,P.al)
u(W.eV,P.B)
u(W.eW,W.G)
u(W.eY,P.B)
u(W.eZ,W.G)
u(W.f1,P.B)
u(W.f2,W.G)
u(W.f3,P.al)
u(W.dm,P.B)
u(W.dn,W.G)
u(W.f4,P.B)
u(W.f5,W.G)
u(W.f9,P.al)
u(W.fd,P.B)
u(W.fe,W.G)
u(W.dp,P.B)
u(W.dq,W.G)
u(W.fg,P.B)
u(W.fh,W.G)
u(W.fl,P.B)
u(W.fm,W.G)
u(W.fn,P.B)
u(W.fo,W.G)
u(W.fp,P.B)
u(W.fq,W.G)
u(W.fr,P.B)
u(W.fs,W.G)
u(W.ft,P.B)
u(W.fu,W.G)
u(P.eP,P.B)
u(P.eQ,W.G)
u(P.f_,P.B)
u(P.f0,W.G)
u(P.fa,P.B)
u(P.fb,W.G)
u(P.fi,P.B)
u(P.fj,W.G)
u(P.eC,P.al)
u(P.f6,P.B)
u(P.f7,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.ca.prototype
C.H=W.ba.prototype
C.I=J.a.prototype
C.a=J.aR.prototype
C.o=J.dT.prototype
C.d=J.dU.prototype
C.p=J.dV.prototype
C.f=J.cg.prototype
C.j=J.bV.prototype
C.J=J.bw.prototype
C.K=W.cQ.prototype
C.v=J.ic.prototype
C.b=P.ck.prototype
C.q=J.cl.prototype
C.w=W.br.prototype
C.x=W.dg.prototype
C.r=function getTagFallback(o) {
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
C.t=function(hooks) { return hooks; }

C.E=new P.i8()
C.n=new P.jr()
C.F=new P.js()
C.k=new P.kc()
C.c=new A.cb(0,"ColorSourceType.None")
C.i=new A.cb(1,"ColorSourceType.Solid")
C.e=new A.cb(2,"ColorSourceType.Texture2D")
C.h=new A.cb(3,"ColorSourceType.TextureCube")
C.m=new P.bv(0)
C.G=new P.bv(5e6)
C.u=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])})()
var v={mangledGlobalNames:{A:"int",E:"double",ai:"num",o:"String",a7:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.I},{func:1,ret:P.I,args:[E.V]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aj]},{func:1,ret:P.I,args:[D.y]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.f,E.V]]},{func:1,ret:P.I,args:[F.ag]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.I,args:[W.p]},{func:1,ret:P.I,args:[Q.a1]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:-1,args:[P.A,[P.f,D.a8]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.A,[P.f,U.au]]},{func:1,ret:-1,args:[P.A,[P.f,M.aN]]},{func:1,ret:-1,args:[P.A,[P.f,V.an]]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.L]},{func:1,ret:P.o,args:[W.ba]},{func:1,ret:P.I,args:[W.bh]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[W.p]},{func:1,ret:P.a7,args:[W.K]},{func:1,ret:W.ac,args:[W.K]},{func:1,ret:-1,args:[,]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[P.ai]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[,P.a9]},{func:1,ret:P.I,args:[P.A,,]},{func:1,ret:P.a7,args:[[P.f,D.a8]]},{func:1,ret:-1,args:[P.L],opt:[P.a9]},{func:1,ret:P.E,args:[P.E]},{func:1,ret:-1,opt:[P.L]},{func:1,ret:P.I,args:[,],opt:[P.a9]},{func:1,ret:P.I,args:[P.bn]},{func:1,ret:P.A,args:[P.A]},{func:1,ret:[P.ak,,],args:[,]},{func:1,ret:-1,args:[W.br]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b5=0
$.cB=null
$.lQ=null
$.lt=!1
$.mN=null
$.mF=null
$.mR=null
$.ky=null
$.kD=null
$.lB=null
$.cn=null
$.ds=null
$.dt=null
$.lu=!1
$.S=C.k
$.aF=[]
$.mB=null
$.m6=null
$.mc=null
$.cT=null
$.mh=null
$.mp=null
$.ms=null
$.mr=null
$.jt=null
$.mq=null
$.mb=null
$.fN=null
$.kP=null
$.h6=null
$.hx=null
$.l3=null
$.hB=null
$.l4=null
$.ia=null
$.l8=null
$.ij=null
$.la=null
$.it=null
$.lf=null
$.j5=null
$.lk=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oQ","mW",function(){return H.mL("_$dart_dartClosure")})
u($,"oR","lH",function(){return H.mL("_$dart_js")})
u($,"p9","mX",function(){return H.bp(H.je({
toString:function(){return"$receiver$"}}))})
u($,"pa","mY",function(){return H.bp(H.je({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pb","mZ",function(){return H.bp(H.je(null))})
u($,"pc","n_",function(){return H.bp(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pf","n2",function(){return H.bp(H.je(void 0))})
u($,"pg","n3",function(){return H.bp(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pe","n1",function(){return H.bp(H.mn(null))})
u($,"pd","n0",function(){return H.bp(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pi","n5",function(){return H.bp(H.mn(void 0))})
u($,"ph","n4",function(){return H.bp(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pz","lJ",function(){return P.nY()})
u($,"pA","n9",function(){return P.ld("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ps","n8",function(){return Z.aU(0)})
u($,"pm","n6",function(){return Z.aU(511)})
u($,"pu","aO",function(){return Z.aU(1)})
u($,"pt","bL",function(){return Z.aU(2)})
u($,"po","bK",function(){return Z.aU(4)})
u($,"pv","bM",function(){return Z.aU(8)})
u($,"pw","bN",function(){return Z.aU(16)})
u($,"pp","dx",function(){return Z.aU(32)})
u($,"pq","dy",function(){return Z.aU(64)})
u($,"pr","n7",function(){return Z.aU(96)})
u($,"px","cy",function(){return Z.aU(128)})
u($,"pn","bJ",function(){return Z.aU(256)})
u($,"oP","mV",function(){return new V.ha(1e-9)})
u($,"oO","M",function(){return $.mV()})
u($,"p3","kM",function(){return Q.az(-1)})
u($,"oZ","aa",function(){return Q.az(0)})
u($,"p2","c4",function(){return Q.az(4096)})
u($,"oY","b1",function(){return Q.az(15)})
u($,"p_","kL",function(){return $.lI().Z(0,$.c5()).Z(0,$.b1())})
u($,"oW","bu",function(){return Q.az(256)})
u($,"p8","ae",function(){return Q.az(512)})
u($,"oX","lI",function(){return Q.az(768)})
u($,"p4","cx",function(){return Q.az(16)})
u($,"p7","b2",function(){return Q.az(32)})
u($,"p1","cw",function(){return Q.az(48)})
u($,"oV","bt",function(){return Q.az(64)})
u($,"p6","aJ",function(){return Q.az(80)})
u($,"p0","bI",function(){return Q.az(96)})
u($,"p5","c5",function(){return Q.az(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cP,ArrayBufferView:H.cP,Float32Array:H.cO,Float64Array:H.cO,Int16Array:H.i_,Int32Array:H.i0,Int8Array:H.i1,Uint16Array:H.i2,Uint32Array:H.i3,Uint8ClampedArray:H.e9,CanvasPixelArray:H.e9,Uint8Array:H.i4,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableCellElement:W.w,HTMLTableDataCellElement:W.w,HTMLTableHeaderCellElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fz,HTMLAnchorElement:W.fB,HTMLAreaElement:W.fC,Blob:W.dA,HTMLCanvasElement:W.ca,CanvasRenderingContext2D:W.cC,CDATASection:W.bO,CharacterData:W.bO,Comment:W.bO,ProcessingInstruction:W.bO,Text:W.bO,CSSNumericValue:W.cG,CSSUnitValue:W.cG,CSSPerspective:W.fU,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cH,MSStyleCSSProperties:W.cH,CSS2Properties:W.cH,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fW,CSSUnparsedValue:W.fX,DataTransferItemList:W.fZ,HTMLDivElement:W.dM,DOMException:W.h_,ClientRectList:W.dN,DOMRectList:W.dN,DOMRectReadOnly:W.dO,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.ac,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MessagePort:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.b8,FileList:W.hd,FileWriter:W.he,HTMLFormElement:W.hi,Gamepad:W.b9,History:W.hm,HTMLCollection:W.cf,HTMLFormControlsCollection:W.cf,HTMLOptionsCollection:W.cf,XMLHttpRequest:W.ba,XMLHttpRequestUpload:W.cK,XMLHttpRequestEventTarget:W.cK,ImageData:W.bR,HTMLImageElement:W.cL,KeyboardEvent:W.bb,Location:W.hH,MediaList:W.hT,MIDIInputMap:W.hU,MIDIOutputMap:W.hW,MimeType:W.be,MimeTypeArray:W.hY,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.cQ,RadioNodeList:W.cQ,Plugin:W.bg,PluginArray:W.id,ProgressEvent:W.bh,ResourceProgressEvent:W.bh,RTCStatsReport:W.iv,HTMLSelectElement:W.iy,SourceBuffer:W.bj,SourceBufferList:W.iH,SpeechGrammar:W.bk,SpeechGrammarList:W.iI,SpeechRecognitionResult:W.bl,Storage:W.iQ,CSSStyleSheet:W.aY,StyleSheet:W.aY,TextTrack:W.bm,TextTrackCue:W.aZ,VTTCue:W.aZ,TextTrackCueList:W.iY,TextTrackList:W.iZ,TimeRanges:W.j7,Touch:W.bo,TouchEvent:W.b_,TouchList:W.ja,TrackDefaultList:W.jb,CompositionEvent:W.bZ,FocusEvent:W.bZ,TextEvent:W.bZ,UIEvent:W.bZ,URL:W.jq,VideoTrackList:W.jC,WheelEvent:W.br,Window:W.dg,DOMWindow:W.dg,CSSRuleList:W.jQ,ClientRect:W.eF,DOMRect:W.eF,GamepadList:W.k6,NamedNodeMap:W.eX,MozNamedAttrMap:W.eX,SpeechRecognitionResultList:W.kh,StyleSheetList:W.kj,SVGLength:P.bx,SVGLengthList:P.hD,SVGNumber:P.bC,SVGNumberList:P.i6,SVGPointList:P.ig,SVGStringList:P.iW,SVGAElement:P.v,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGCircleElement:P.v,SVGClipPathElement:P.v,SVGDefsElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGEllipseElement:P.v,SVGFEBlendElement:P.v,SVGFEColorMatrixElement:P.v,SVGFEComponentTransferElement:P.v,SVGFECompositeElement:P.v,SVGFEConvolveMatrixElement:P.v,SVGFEDiffuseLightingElement:P.v,SVGFEDisplacementMapElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFloodElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEGaussianBlurElement:P.v,SVGFEImageElement:P.v,SVGFEMergeElement:P.v,SVGFEMergeNodeElement:P.v,SVGFEMorphologyElement:P.v,SVGFEOffsetElement:P.v,SVGFEPointLightElement:P.v,SVGFESpecularLightingElement:P.v,SVGFESpotLightElement:P.v,SVGFETileElement:P.v,SVGFETurbulenceElement:P.v,SVGFilterElement:P.v,SVGForeignObjectElement:P.v,SVGGElement:P.v,SVGGeometryElement:P.v,SVGGraphicsElement:P.v,SVGImageElement:P.v,SVGLineElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMaskElement:P.v,SVGMetadataElement:P.v,SVGPathElement:P.v,SVGPatternElement:P.v,SVGPolygonElement:P.v,SVGPolylineElement:P.v,SVGRadialGradientElement:P.v,SVGRectElement:P.v,SVGScriptElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGElement:P.v,SVGSVGElement:P.v,SVGSwitchElement:P.v,SVGSymbolElement:P.v,SVGTSpanElement:P.v,SVGTextContentElement:P.v,SVGTextElement:P.v,SVGTextPathElement:P.v,SVGTextPositioningElement:P.v,SVGTitleElement:P.v,SVGUseElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGTransform:P.bF,SVGTransformList:P.jc,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.c7,webkitAudioContext:P.c7,BaseAudioContext:P.c7,OfflineAudioContext:P.i7,WebGLBuffer:P.dC,WebGLFramebuffer:P.dS,WebGLProgram:P.ec,WebGLRenderbuffer:P.ed,WebGL2RenderingContext:P.ck,WebGLShader:P.ee,WebGLTexture:P.el,WebGLUniformLocation:P.et,SQLResultSetRowList:P.iJ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e7.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.e8.$nativeSuperclassTag="ArrayBufferView"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mP,[])
else L.mP([])})})()
//# sourceMappingURL=main.dart.js.map
