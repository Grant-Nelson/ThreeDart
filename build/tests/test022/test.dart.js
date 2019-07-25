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
a[c]=function(){a[c]=function(){H.pq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ls"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ls"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ls(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l5:function l5(){},
ky:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hf:function(){return new P.c8("No element")},
nH:function(){return new P.c8("Too many elements")},
nG:function(){return new P.c8("Too few elements")},
v:function v(a){this.a=a},
fW:function fW(){},
c2:function c2(){},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
jp:function jp(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d3:function d3(){},
ei:function ei(){},
nx:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p7:function(a){return v.types[H.aj(a)]},
pe:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iN},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aD(a))
return u},
cM:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o1:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
c4:function(a){return H.nT(a)+H.lo(H.bS(a),0,null)},
nT:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibO){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.G(t,0)===36?C.b.as(t,1):t)},
nU:function(){if(!!self.location)return self.location.href
return},
m1:function(a){var u,t,s,r,q
H.kE(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o2:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aD(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aT(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aD(s))}return H.m1(r)},
m2:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aD(s))
if(s<0)throw H.c(H.aD(s))
if(s>65535)return H.o2(a)}return H.m1(a)},
o3:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o0:function(a){var u=H.c3(a).getFullYear()+0
return u},
nZ:function(a){var u=H.c3(a).getMonth()+1
return u},
nV:function(a){var u=H.c3(a).getDate()+0
return u},
nW:function(a){var u=H.c3(a).getHours()+0
return u},
nY:function(a){var u=H.c3(a).getMinutes()+0
return u},
o_:function(a){var u=H.c3(a).getSeconds()+0
return u},
nX:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
C:function(a){throw H.c(H.aD(a))},
h:function(a,b){if(a==null)J.aE(a)
throw H.c(H.cf(a,b))},
cf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,s,null)
u=H.aj(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.e1(b,s)},
p_:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aM(!0,b,"end",null)},
aD:function(a){return new P.aM(!0,a,null,null)},
oV:function(a){if(typeof a!=="number")throw H.c(H.aD(a))
return a},
c:function(a){var u
if(a==null)a=new P.dY()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mW})
u.name=""}else u.toString=H.mW
return u},
mW:function(){return J.at(this.dartException)},
u:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bj(a))},
bd:function(a){var u,t,s,r,q,p
a=H.mU(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lY:function(a,b){return new H.hU(a,b==null?null:b.method)},
l6:function(a,b){var u=b==null,t=u?null:b.method
return new H.hi(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l6(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lY(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n_()
q=$.n0()
p=$.n1()
o=$.n2()
n=$.n5()
m=$.n6()
l=$.n4()
$.n3()
k=$.n8()
j=$.n7()
i=r.ag(u)
if(i!=null)return f.$1(H.l6(H.I(u),i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.l6(H.I(u),i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lY(H.I(u),i))}}return f.$1(new H.j1(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e7()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aM(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e7()
return a},
cj:function(a){var u
if(a==null)return new H.eY(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eY(a)},
p3:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pd:function(a,b,c,d,e,f){H.f(a,"$ibF")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pd)
a.$identity=u
return u},
nw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ir().constructor.prototype):Object.create(new H.co(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b_
if(typeof t!=="number")return t.q()
$.b_=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lM(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p7,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lL:H.kW
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lM(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nt:function(a,b,c,d){var u=H.kW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nt(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.q()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.fC("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.q()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.fC("self"):q)+"."+H.l(u)+"("+o+");}")()},
nu:function(a,b,c,d){var u=H.kW,t=H.lL
switch(b?-1:a){case 0:throw H.c(H.o7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nv:function(a,b){var u,t,s,r,q,p,o,n=$.cp
if(n==null)n=$.cp=H.fC("self")
u=$.lK
if(u==null)u=$.lK=H.fC("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nu(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b_
if(typeof u!=="number")return u.q()
$.b_=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b_
if(typeof u!=="number")return u.q()
$.b_=u+1
return new Function(n+u+"}")()},
ls:function(a,b,c,d,e,f,g){return H.nw(a,b,H.aj(c),d,!!e,!!f,g)},
kW:function(a){return a.a},
lL:function(a){return a.c},
fC:function(a){var u,t,s,r=new H.co("self","target","receiver","name"),q=J.l3(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.oR("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
p0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
pj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mS:function(a,b){throw H.c(H.aZ(a,H.cl(H.I(b).substring(2))))},
pl:function(a,b){throw H.c(H.ns(a,H.cl(H.I(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mS(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pl(a,b)},
kE:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mP:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mS(a,b)},
mL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fm:function(a,b){var u
if(typeof a=="function")return!0
u=H.mL(J.V(a))
if(u==null)return!1
return H.mx(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ll)return a
$.ll=!0
try{if(H.fm(a,b))return a
u=H.kN(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.ll=!1}},
lu:function(a,b){if(a!=null&&!H.lr(a,b))H.u(H.aZ(a,H.kN(b)))
return a},
aZ:function(a,b){return new H.iQ("TypeError: "+P.dG(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
ns:function(a,b){return new H.fD("CastError: "+P.dG(a)+": type '"+H.mD(a)+"' is not a subtype of type '"+b+"'")},
mD:function(a){var u,t=J.V(a)
if(!!t.$icr){u=H.mL(t)
if(u!=null)return H.kN(u)
return"Closure"}return H.c4(a)},
oR:function(a){throw H.c(new H.jq(a))},
pq:function(a){throw H.c(new P.fO(H.I(a)))},
o7:function(a){return new H.ib(a)},
mM:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
q8:function(a,b,c){return H.ck(a["$a"+H.l(c)],H.bS(b))},
bR:function(a,b,c,d){var u
H.I(c)
H.aj(d)
u=H.ck(a["$a"+H.l(c)],H.bS(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.I(b)
H.aj(c)
u=H.ck(a["$a"+H.l(b)],H.bS(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.aj(b)
u=H.bS(a)
return u==null?null:u[b]},
kN:function(a){return H.bQ(a,null)},
bQ:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.lo(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oK(a,b)
if('futureOr' in a)return"FutureOr<"+H.bQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oK:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
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
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bQ(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bQ(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bQ(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bQ(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.p2(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bQ(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lo:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bQ(p,c)}return"<"+u.i(0)+">"},
ck:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lq:function(a,b,c,d){var u,t
H.I(b)
H.kE(c)
H.I(d)
if(a==null)return!1
u=H.bS(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mG(H.ck(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kE(c)
H.I(d)
if(a==null)return a
if(H.lq(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.lo(c,0,null),v.mangledGlobalNames)))},
mG:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
q6:function(a,b,c){return a.apply(b,H.ck(J.V(b)["$a"+H.l(c)],H.bS(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="O"||a===-1||a===-2||H.mO(u)}return!1},
lr:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="O"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fm(a,b)}u=J.V(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lr(a,b))throw H.c(H.aZ(a,H.kN(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.mx(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aL("type" in a?a.type:l,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cx" in t.prototype))return!1
r=t.prototype["$a"+"cx"]
q=H.ck(r,u?a.slice(1):l)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mG(H.ck(m,u),b,p,d)},
mx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pi(h,b,g,d)},
pi:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aL(c[s],d,a[s],b))return!1}return!0},
q7:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pg:function(a){var u,t,s,r,q=H.I($.mN.$1(a)),p=$.kx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mF.$2(a,q))
if(q!=null){p=$.kx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kM(u)
$.kx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kC[q]=u
return u}if(s==="-"){r=H.kM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mR(a,u)
if(s==="*")throw H.c(P.j0(q))
if(v.leafTags[q]===true){r=H.kM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mR(a,u)},
mR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lw(a,!1,null,!!a.$iN)},
ph:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kM(u)
else return J.lw(u,c,null,null)},
pb:function(){if(!0===$.lv)return
$.lv=!0
H.pc()},
pc:function(){var u,t,s,r,q,p,o,n
$.kx=Object.create(null)
$.kC=Object.create(null)
H.pa()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mT.$1(q)
if(p!=null){o=H.ph(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pa:function(){var u,t,s,r,q,p,o=C.K()
o=H.cd(C.L,H.cd(C.M,H.cd(C.z,H.cd(C.z,H.cd(C.N,H.cd(C.O,H.cd(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mN=new H.kz(r)
$.mF=new H.kA(q)
$.mT=new H.kB(p)},
cd:function(a,b){return a(b)||b},
nJ:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
po:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p1:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mU:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var u=H.pp(a,b,c)
return u},
pp:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mU(b),'g'),H.p1(c))},
fI:function fI(){},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iO:function iO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
kS:function kS(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null},
cr:function cr(){},
iB:function iB(){},
ir:function ir(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a){this.a=a},
fD:function fD(a){this.a=a},
ib:function ib(a){this.a=a},
jq:function jq(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hn:function hn(a,b){this.a=a
this.$ti=b},
ho:function ho(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
nR:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cf(b,a))},
oI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p_(a,b,c))
return b},
cH:function cH(){},
bI:function bI(){},
dU:function dU(){},
cI:function cI(){},
dV:function dV(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
dW:function dW(){},
cJ:function cJ(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
p2:function(a){return J.lQ(a?Object.keys(a):[],null)},
pk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fo:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lv==null){H.pb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j0("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lB()]
if(r!=null)return r
r=H.pg(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lB(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lQ:function(a,b){return J.l3(H.d(a,[b]))},
l3:function(a){H.kE(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.S)return a
return J.fo(a)},
p4:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.S)return a
return J.fo(a)},
ch:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.S)return a
return J.fo(a)},
fn:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.S)return a
return J.fo(a)},
p5:function(a){if(typeof a=="number")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bO.prototype
return a},
p6:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bO.prototype
return a},
dn:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bO.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.S)return a
return J.fo(a)},
nh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p4(a).q(a,b)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).w(a,b)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p6(a).t(a,b)},
ni:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p5(a).u(a,b)},
lE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pe(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).j(a,b)},
kU:function(a,b,c){return J.fn(a).n(a,b,c)},
nj:function(a,b){return J.dn(a).G(a,b)},
nk:function(a,b,c){return J.ci(a).i8(a,b,c)},
nl:function(a,b,c,d){return J.ci(a).j5(a,b,c,d)},
nm:function(a,b){return J.dn(a).a_(a,b)},
fq:function(a,b){return J.fn(a).L(a,b)},
nn:function(a,b,c,d){return J.ci(a).jt(a,b,c,d)},
lF:function(a,b){return J.fn(a).O(a,b)},
no:function(a){return J.ci(a).gjd(a)},
lG:function(a){return J.ci(a).gcw(a)},
dr:function(a){return J.V(a).gK(a)},
bz:function(a){return J.fn(a).gV(a)},
aE:function(a){return J.ch(a).gl(a)},
lH:function(a){return J.fn(a).k_(a)},
np:function(a,b){return J.ci(a).k7(a,b)},
nq:function(a,b,c){return J.dn(a).D(a,b,c)},
nr:function(a){return J.dn(a).kh(a)},
at:function(a){return J.V(a).i(a)},
a:function a(){},
hg:function hg(){},
dK:function dK(){},
dL:function dL(){},
hY:function hY(){},
bO:function bO(){},
bn:function bn(){},
aP:function aP(a){this.$ti=a},
l4:function l4(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bH:function bH(){},
dJ:function dJ(){},
dI:function dI(){},
bm:function bm(){}},P={
ok:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oS()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ce(new P.js(s),1)).observe(u,{childList:true})
return new P.jr(s,u,t)}else if(self.setImmediate!=null)return P.oT()
return P.oU()},
ol:function(a){self.scheduleImmediate(H.ce(new P.jt(H.n(a,{func:1,ret:-1})),0))},
om:function(a){self.setImmediate(H.ce(new P.ju(H.n(a,{func:1,ret:-1})),0))},
on:function(a){P.lc(C.t,H.n(a,{func:1,ret:-1}))},
lc:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.ot(u<0?0:u,b)},
ma:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bb]})
u=C.f.a6(a.a,1000)
return P.ou(u<0?0:u,b)},
ot:function(a,b){var u=new P.f3()
u.fD(a,b)
return u},
ou:function(a,b){var u=new P.f3()
u.fE(a,b)
return u},
oo:function(a,b){var u,t,s
b.a=1
try{a.eV(new P.jE(b),new P.jF(b),null)}catch(s){u=H.ak(s)
t=H.cj(s)
P.pm(new P.jG(b,u,t))}},
mm:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaK")
if(u>=4){t=b.cg()
b.a=a.a
b.c=a.c
P.d8(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.dG(t)}},
d8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.ko(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.f(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.ko(i,i,g,r,q)
return}l=$.a2
if(l!=n)$.a2=n
else l=i
g=b.c
if(g===8)new P.jK(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jJ(u,b,o).$0()}else if((g&2)!==0)new P.jI(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.V(g).$icx){if(g.a>=4){k=H.f(q.c,"$ibg")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mm(g,q)
return}}j=b.b
k=H.f(j.c,"$ibg")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.B(r,H.t(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
oN:function(a,b){if(H.fm(a,{func:1,args:[P.S,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.S,P.aw]})
if(H.fm(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.kV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oM:function(){var u,t
for(;u=$.cc,u!=null;){$.dm=null
t=u.b
$.cc=t
if(t==null)$.dl=null
u.a.$0()}},
oQ:function(){$.lm=!0
try{P.oM()}finally{$.dm=null
$.lm=!1
if($.cc!=null)$.lC().$1(P.mH())}},
mC:function(a){var u=new P.eq(H.n(a,{func:1,ret:-1}))
if($.cc==null){$.cc=$.dl=u
if(!$.lm)$.lC().$1(P.mH())}else $.dl=$.dl.b=u},
oP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.mC(a)
$.dm=$.dl
return}t=new P.eq(a)
s=$.dm
if(s==null){t.b=u
$.cc=$.dm=t}else{t.b=s.b
$.dm=s.b=t
if(t.b==null)$.dl=t}},
pm:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a2
if(C.k===u){P.kq(t,t,C.k,a)
return}u.toString
P.kq(t,t,u,H.n(u.cr(a),s))},
m9:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a2
if(u===C.k){u.toString
return P.lc(a,b)}return P.lc(a,H.n(u.cr(b),t))},
ob:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bb]}
H.n(b,s)
u=$.a2
if(u===C.k){u.toString
return P.ma(a,b)}t=u.dX(b,P.bb)
$.a2.toString
return P.ma(a,H.n(t,s))},
ko:function(a,b,c,d,e){var u={}
u.a=d
P.oP(new P.kp(u,e))},
my:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mz:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
oO:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kq:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cr(d):c.je(d,-1)
P.mC(d)},
js:function js(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
f3:function f3(){this.c=0},
k8:function k8(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aK:function aK(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jD:function jD(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a
this.b=null},
iu:function iu(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
iv:function iv(){},
bb:function bb(){},
an:function an(a,b){this.a=a
this.b=b},
kh:function kh(){},
kp:function kp(a,b){this.a=a
this.b=b},
jR:function jR(){},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function(a,b){return new H.aQ([a,b])},
l7:function(a,b){return new H.aQ([a,b])},
nN:function(a){return H.p3(a,new H.aQ([null,null]))},
dO:function(a){return new P.jP([a])},
li:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
os:function(a,b,c){var u=new P.eF(a,b,[c])
u.c=a.e
return u},
nF:function(a,b,c){var u,t
if(P.ln(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.ax,a)
try{P.oL(a,u)}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}t=P.m7(b,H.mP(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l2:function(a,b,c){var u,t
if(P.ln(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.ax,a)
try{t=u
t.a=P.m7(t.a,a,", ")}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ln:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
oL:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.l(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.E();o=n,n=m){m=u.gM(u);++s
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
nM:function(a,b,c){var u=P.nL(b,c)
a.O(0,new P.hp(u,b,c))
return u},
lR:function(a,b){var u,t,s=P.dO(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t)s.h(0,H.B(a[t],b))
return s},
l8:function(a){var u,t={}
if(P.ln(a))return"{...}"
u=new P.ah("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lF(a,new P.ht(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.h($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jP:function jP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
eF:function eF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(){},
z:function z(){},
hs:function hs(){},
ht:function ht(a,b){this.a=a
this.b=b},
ae:function ae(){},
k9:function k9(){},
hu:function hu(){},
ej:function ej(a,b){this.a=a
this.$ti=b},
jW:function jW(){},
eG:function eG(){},
f9:function f9(){},
of:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.og(!1,b,c,d)
return},
og:function(a,b,c,d){var u,t,s=$.n9()
if(s==null)return
u=0===c
if(u&&!0)return P.lf(s,b)
t=b.length
d=P.br(c,d,t)
if(u&&d===t)return P.lf(s,b)
return P.lf(s,b.subarray(c,d))},
lf:function(a,b){if(P.oi(b))return
return P.oj(a,b)},
oj:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oi:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oh:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mB:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.ch(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bP()
if((s&127)!==s)return t-b}return c-b},
lJ:function(a,b,c,d,e,f){if(C.f.bf(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fz:function fz(){},
fA:function fA(){},
bW:function bW(){},
bD:function bD(){},
fY:function fY(){},
hd:function hd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hc:function hc(a){this.a=a},
j9:function j9(){},
jb:function jb(){},
kf:function kf(a){this.b=0
this.c=a},
ja:function ja(a){this.a=a},
ke:function ke(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fp:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.o1(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nC:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nO:function(a,b,c){var u,t
H.B(b,c)
u=J.nI(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lS:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bz(a);u.E();)C.a.h(s,H.B(u.gM(u),c))
if(b)return s
return H.k(J.l3(s),"$ib",t,"$ab")},
cR:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaP",[t],"$aaP")
u=a.length
c=P.br(b,c,u)
return H.m2(b>0||c<u?C.a.f9(a,b,c):a)}if(!!J.V(a).$icJ)return H.o3(a,b,P.br(b,c,a.length))
return P.o9(a,b,c)},
o9:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.ag(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aE(a),q,q))
t=J.bz(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.E();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gM(t))}return H.m2(r)},
o5:function(a){return new H.hh(a,H.nJ(a,!1,!0,!1))},
m7:function(a,b,c){var u=J.bz(b)
if(!u.E())return a
if(c.length===0){do a+=H.l(u.gM(u))
while(u.E())}else{a+=H.l(u.gM(u))
for(;u.E();)a=a+c+H.l(u.gM(u))}return a},
md:function(){var u=H.nU()
if(u!=null)return P.oe(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fa:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nf().b
if(typeof b!=="string")H.u(H.aD(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.as(c,"bW",0))
t=c.gjs().cz(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ny:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a,b){return new P.b2(1e6*b+1000*a)},
dG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nC(a)},
dt:function(a){return new P.aM(!1,null,null,a)},
kV:function(a,b,c){return new P.aM(!0,a,b,c)},
e1:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
br:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
la:function(a,b){if(typeof a!=="number")return a.Y()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.aj(e==null?J.aE(b):e)
return new P.he(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j2(a)},
j0:function(a){return new P.j_(a)},
m6:function(a){return new P.c8(a)},
bj:function(a){return new P.fG(a)},
w:function(a){return new P.ey(a)},
a7:function(a,b,c){return new P.h7(a,b,c)},
nP:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
ly:function(a){H.pk(a)},
oe:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.mc(e<e?C.b.D(a,0,e):a,5,f).gf0()
else if(u===32)return P.mc(C.b.D(a,5,e),0,f).gf0()}t=new Array(8)
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
if(P.mA(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ko()
if(r>=0)if(P.mA(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Y()
if(typeof n!=="number")return H.C(n)
if(m<n)n=m
if(typeof o!=="number")return o.Y()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.Y()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.Y()
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
a=C.b.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ad(a,"http",0)){if(t&&p+3===o&&C.b.ad(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ad(a,"https",0)){if(t&&p+4===o&&C.b.ad(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.D(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jZ(a,r,q,p,o,n,m,k)}return P.ov(a,0,e,r,q,p,o,n,m,k)},
mf:function(a){var u=P.e
return C.a.jx(H.d(a.split("&"),[u]),P.l7(u,u),new P.j7(C.l),[P.H,P.e,P.e])},
od:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j4(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fp(C.b.D(a,s,t),n,n)
if(typeof p!=="number")return p.f5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fp(C.b.D(a,s,c),n,n)
if(typeof p!=="number")return p.f5()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
me:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j5(a)
t=new P.j6(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a_(a,r)
if(n===58){if(r===b){++r
if(C.b.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaA(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.od(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aT(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ov:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oC(a,b,d)
else{if(d===b)P.di(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oD(a,u,e-1):""
s=P.oz(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.C(g)
q=r<g?P.oB(P.fp(C.b.D(a,r,g),new P.ka(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oA(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.lj(a,h+1,i,n):n
return new P.ca(j,t,s,q,p,o,i<c?P.oy(a,i+1,c):n)},
mq:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
di:function(a,b,c){throw H.c(P.a7(c,a,b))},
oB:function(a,b){if(a!=null&&a===P.mq(b))return
return a},
oz:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a_(a,u)!==93)P.di(a,b,"Missing end `]` to match `[` in host")
P.me(a,b+1,u)
return C.b.D(a,b,c).toLowerCase()}if(typeof c!=="number")return H.C(c)
t=b
for(;t<c;++t)if(C.b.a_(a,t)===58){P.me(a,b,c)
return"["+a+"]"}return P.oF(a,b,c)},
oF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.C(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a_(a,u)
if(q===37){p=P.mw(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.D(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.di(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.D(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mr(q)
u+=l
t=u}}}}if(s==null)return C.b.D(a,b,c)
if(t<c){n=C.b.D(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oC:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mt(C.b.G(a,b)))P.di(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.di(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.D(a,b,c)
return P.ow(t?a.toLowerCase():a)},
ow:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oD:function(a,b,c){return P.dj(a,b,c,C.a_,!1)},
oA:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dj(a,b,c,C.E,!0):C.n.kr(d,new P.kb(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.oE(u,e,f)},
oE:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oG(a,!u||c)
return P.oH(a)},
lj:function(a,b,c,d){var u,t={}
H.k(d,"$iH",[P.e,null],"$aH")
if(a!=null){if(d!=null)throw H.c(P.dt("Both query and queryParameters specified"))
return P.dj(a,b,c,C.p,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.O(0,new P.kc(new P.kd(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oy:function(a,b,c){return P.dj(a,b,c,C.p,!0)},
mw:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a_(a,b+1)
t=C.b.a_(a,p)
s=H.ky(u)
r=H.ky(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aT(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.D(a,b,b+3).toUpperCase()
return},
mr:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.f.ir(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.G(o,p>>>4))
C.a.n(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cR(t,0,null)},
dj:function(a,b,c,d,e){var u=P.mv(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.D(a,b,c):u},
mv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.C(c)
if(!(t<c))break
c$0:{q=C.b.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mw(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.di(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mr(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.D(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.C(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.b.D(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mu:function(a){if(C.b.a5(a,"."))return!0
return C.b.eu(a,"/.")!==-1},
oH:function(a){var u,t,s,r,q,p,o
if(!P.mu(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oG:function(a,b){var u,t,s,r,q,p
if(!P.mu(a))return!b?P.ms(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaA(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaA(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.ms(u[0]))}return C.a.m(u,"/")},
ms:function(a){var u,t,s,r=a.length
if(r>=2&&P.mt(J.nj(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.D(a,0,u)+"%3A"+C.b.as(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ox:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dt("Invalid URL encoding"))}}return u},
lk:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.D(a,b,c)
else r=new H.v(C.b.D(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.dt("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dt("Truncated URI"))
C.a.h(r,P.ox(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.ja(!1).cz(r)},
mt:function(a){var u=a|32
return 97<=u&&u<=122},
mc:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaA(l)
if(r!==44||t!==p+7||!C.b.ad(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jJ(0,a,o,u)
else{n=P.mv(a,o,u,C.p,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.j3(a,l,c)},
oJ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nP(22,new P.kl(),P.T),n=new P.kk(o),m=new P.km(),l=new P.kn(),k=H.f(n.$2(0,225),"$iT")
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
mA:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.ng()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
U:function U(){},
ay:function ay(a,b){this.a=a
this.b=b},
q:function q(){},
b2:function b2(a){this.a=a},
fU:function fU(){},
fV:function fV(){},
bE:function bE(){},
ft:function ft(){},
dY:function dY(){},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
he:function he(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j2:function j2(a){this.a=a},
j_:function j_(a){this.a=a},
c8:function c8(a){this.a=a},
fG:function fG(a){this.a=a},
hX:function hX(){},
e7:function e7(){},
fO:function fO(a){this.a=a},
ey:function ey(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
p:function p(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
H:function H(){},
O:function O(){},
ac:function ac(){},
S:function S(){},
aw:function aw(){},
e:function e(){},
ah:function ah(a){this.a=a},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
kk:function kk(a){this.a=a},
km:function km(){},
kn:function kn(){},
jZ:function jZ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jy:function jy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oY:function(a){var u,t=J.V(a)
if(!!t.$ibl){u=t.ge_(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f8(a.data,a.height,a.width)},
oX:function(a){if(a instanceof P.f8)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.l7(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oW:function(a){var u={}
a.O(0,new P.kr(u))
return u},
k0:function k0(){},
k2:function k2(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a){this.a=a},
k1:function k1(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(){},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
or:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jQ:function jQ(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hk:function hk(){},
b8:function b8(){},
hV:function hV(){},
i1:function i1(){},
cN:function cN(){},
iy:function iy(){},
r:function r(){},
bc:function bc(){},
iN:function iN(){},
eD:function eD(){},
eE:function eE(){},
eO:function eO(){},
eP:function eP(){},
f_:function f_(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
T:function T(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
bT:function bT(){},
hW:function hW(){},
er:function er(){},
dv:function dv(){},
e0:function e0(){},
c7:function c7(){},
e4:function e4(){},
ea:function ea(){},
eh:function eh(){},
iq:function iq(){},
eW:function eW(){},
eX:function eX(){}},W={
lI:function(){var u=document.createElement("a")
return u},
kX:function(){var u=document.createElement("canvas")
return u},
nA:function(a,b,c){var u=document.body,t=(u&&C.x).af(u,a,b,c)
t.toString
u=W.E
u=new H.d5(new W.ar(t),H.n(new W.fX(),{func:1,ret:P.U,args:[u]}),[u])
return H.f(u.gaL(u),"$iX")},
nB:function(a){H.f(a,"$ij")
return"wheel"},
cu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ci(a)
t=u.geT(a)
if(typeof t==="string")r=u.geT(a)}catch(s){H.ak(s)}return r},
nE:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icA")
try{s.type=a}catch(u){H.ak(u)}return s},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mo:function(a,b,c,d){var u=W.jN(W.jN(W.jN(W.jN(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mE(new W.jC(c),W.o)
if(u!=null&&!0)J.nl(a,b,u,!1)
return new W.jB(a,b,u,!1,[e])},
mn:function(a){var u=W.lI(),t=window.location
u=new W.bP(new W.jV(u,t))
u.fn(a)
return u},
op:function(a,b,c,d){H.f(a,"$iX")
H.I(b)
H.I(c)
H.f(d,"$ibP")
return!0},
oq:function(a,b,c,d){var u,t,s
H.f(a,"$iX")
H.I(b)
H.I(c)
u=H.f(d,"$ibP").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mp:function(){var u=P.e,t=P.lR(C.u,u),s=H.t(C.u,0),r=H.n(new W.k6(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k5(t,P.dO(u),P.dO(u),P.dO(u),null)
t.fC(null,new H.hx(C.u,r,[s,u]),q,null)
return t},
mE:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.k)return a
return u.dX(a,b)},
y:function y(){},
fr:function fr(){},
ds:function ds(){},
fs:function fs(){},
cn:function cn(){},
bU:function bU(){},
bA:function bA(){},
bV:function bV(){},
cq:function cq(){},
bB:function bB(){},
cs:function cs(){},
fK:function fK(){},
a_:function a_(){},
ct:function ct(){},
fL:function fL(){},
b0:function b0(){},
b1:function b1(){},
fM:function fM(){},
fN:function fN(){},
fQ:function fQ(){},
aF:function aF(){},
fR:function fR(){},
dD:function dD(){},
dE:function dE(){},
fS:function fS(){},
fT:function fT(){},
jw:function jw(a,b){this.a=a
this.b=b},
X:function X(){},
fX:function fX(){},
o:function o(){},
j:function j(){},
aG:function aG(){},
cw:function cw(){},
h2:function h2(){},
h6:function h6(){},
aO:function aO(){},
hb:function hb(){},
c_:function c_(){},
bl:function bl(){},
cz:function cz(){},
cA:function cA(){},
b4:function b4(){},
dP:function dP(){},
hF:function hF(){},
cF:function cF(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
aR:function aR(){},
hK:function hK(){},
af:function af(){},
ar:function ar(a){this.a=a},
E:function E(){},
cK:function cK(){},
aS:function aS(){},
i_:function i_(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
ic:function ic(){},
aT:function aT(){},
io:function io(){},
aU:function aU(){},
ip:function ip(){},
aV:function aV(){},
is:function is(){},
it:function it(a){this.a=a},
aH:function aH(){},
ba:function ba(){},
e8:function e8(){},
iz:function iz(){},
iA:function iA(){},
cS:function cS(){},
aW:function aW(){},
aI:function aI(){},
iC:function iC(){},
iD:function iD(){},
iH:function iH(){},
aX:function aX(){},
aY:function aY(){},
iL:function iL(){},
iM:function iM(){},
bN:function bN(){},
j8:function j8(){},
jn:function jn(){},
bf:function bf(){},
d6:function d6(){},
d7:function d7(){},
jx:function jx(){},
et:function et(){},
jM:function jM(){},
eL:function eL(){},
k_:function k_(){},
k3:function k3(){},
jv:function jv(){},
jz:function jz(a){this.a=a},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lh:function lh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jB:function jB(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jC:function jC(a){this.a=a},
bP:function bP(a){this.a=a},
G:function G(){},
dX:function dX(a){this.a=a},
hS:function hS(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(){},
jX:function jX(){},
jY:function jY(){},
k5:function k5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k6:function k6(){},
k4:function k4(){},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
jV:function jV(a,b){this.a=a
this.b=b},
fb:function fb(a){this.a=a},
kg:function kg(a){this.a=a},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
de:function de(){},
df:function df(){},
eU:function eU(){},
eV:function eV(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
dg:function dg(){},
dh:function dh(){},
f4:function f4(){},
f5:function f5(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){}},O={
kY:function(a){var u=new O.a5([a])
u.bU(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
lT:function(){var u,t,s=new O.dS()
s.sfM(O.kY(V.al))
s.e.bg(s.ghh(),s.ghj())
u=new O.b6(s,"emission")
u.c=C.d
u.f=new V.a6(0,0,0)
s.f=u
u=new O.b6(s,"ambient")
u.c=C.d
u.f=new V.a6(0,0,0)
s.r=u
u=new O.b6(s,"diffuse")
u.c=C.d
u.f=new V.a6(0,0,0)
s.x=u
u=new O.b6(s,"invDiffuse")
u.c=C.d
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hD(s,"specular")
u.c=C.d
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hA(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.b6(s,"reflect")
u.c=C.d
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hC(s,"refract")
u.c=C.d
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hz(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dN()
u.bU(D.a8)
u.sfp(H.d([],[D.dC]))
u.sfs(H.d([],[D.e_]))
u.sft(H.d([],[D.e6]))
u.sfu(H.d([],[D.eb]))
u.sfv(H.d([],[D.bM]))
u.sfw(H.d([],[D.ec]))
u.ch=u.Q=null
u.d5(u.ghf(),u.ghQ(),u.ghU())
s.dx=u
t=u.Q
u=t==null?u.Q=D.Y():t
u.h(0,s.gia())
u=s.dx
t=u.ch
u=t==null?u.ch=D.Y():t
u.h(0,s.gbj())
s.dy=null
return s},
dS:function dS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cC:function cC(){},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bL:function bL(){}},E={
l0:function(){var u=new E.ao()
u.a=""
u.b=!0
u.sfm(0,O.kY(E.ao))
u.y.bg(u.gjK(),u.gjN())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sac(0,null)
u.sbc(null)
u.saX(null)
return u},
o6:function(a,b){var u=new E.i5(a)
u.fi(a,b)
return u},
oa:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibV)return E.m8(a,!0,!0,!0,!1)
u=W.kX()
t=u.style
t.width="100%"
t.height="100%"
s.gcw(a).h(0,u)
return E.m8(u,!0,!0,!0,!1)},
m8:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ed(),j=H.f(C.m.d3(a,"webgl2",P.nN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.u(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o6(j,a)
u=new T.iE(j)
H.aj(j.getParameter(3379))
u.c=H.aj(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ek(a)
t=new X.hj()
t.c=new X.aA(!1,!1,!1)
t.si2(P.dO(P.p))
u.b=t
t=new X.hL(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hr(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iK(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfY(H.d([],[[P.cQ,P.S]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghr(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghx(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.ghl(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.ghB(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghz(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghF(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghJ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghH(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.ab(a,H.I(W.nB(a)),H.n(u.ghL(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.ght(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghv(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghN(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.gi_(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghW(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghY(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dI()
return k},
fB:function fB(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
ed:function ed(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iG:function iG(a){this.a=a}},Z={
lg:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cb(c)),35044)
a.bindBuffer(b,null)
return new Z.ep(b,u)},
aJ:function(a){return new Z.be(a)},
ep:function ep(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jo:function jo(a){this.a=a},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
Y:function(){var u=new D.bY()
u.sak(null)
u.saR(null)
u.c=null
u.d=0
return u},
fE:function fE(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
A:function A(){this.b=null},
c0:function c0(a){this.b=null
this.$ti=a},
c1:function c1(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dC:function dC(){},
a8:function a8(){},
dN:function dN(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e_:function e_(){},
e6:function e6(){},
eb:function eb(){},
bM:function bM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){}},X={dy:function dy(a,b){this.a=a
this.b=b},dM:function dM(a,b){this.a=a
this.b=b},hj:function hj(){var _=this
_.d=_.c=_.b=_.a=null},dQ:function dQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hr:function hr(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hL:function hL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cG:function cG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i0:function i0(){},ef:function ef(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iK:function iK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ek:function ek(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nD:function(a){var u=new X.h8(),t=new V.aN(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m4
if(t==null){t=V.m3(0,0,1,1)
$.m4=t}u.r=t
return u},
dz:function dz(){},
h8:function h8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){}},V={
kT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bf(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.e.eW(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ah(u[p],s))}return u},
lx:function(a){return C.e.ke(Math.pow(2,C.W.cJ(Math.log(H.oV(a))/Math.log(2))))},
cE:function(){var u=$.hE
return u==null?$.hE=V.b7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b7:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lX:function(a,b,c){return V.b7(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l9:function(a,b,c,d){return V.b7(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lU:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lV:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lW:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b7(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bK:function(){var u=$.m0
return u==null?$.m0=new V.aa(0,0):u},
nS:function(){var u=$.cL
return u==null?$.cL=new V.a4(0,0,0):u},
m3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e2(a,b,c,d)},
d4:function(){var u=$.ml
return u==null?$.ml=new V.M(0,0,0):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a){this.a=a},
dT:function dT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.G(a,0)
t=C.b.G(b,0)
s=new V.i4()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.id()
u.fj(a)
return u},
iJ:function(){var u=new V.iI(),t=P.e
u.sit(new H.aQ([t,V.cP]))
u.siw(new H.aQ([t,V.cV]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dR:function dR(){},
av:function av(){this.a=null},
i4:function i4(){this.b=this.a=null},
id:function id(){this.a=null},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.b=a
this.c=null},
iI:function iI(){this.c=this.b=this.a=null},
cW:function cW(a){this.b=a
this.a=this.c=null},
pn:function(a){P.ob(C.T,new V.kO(a))},
o8:function(a){var u=new V.ii()
u.fl(a,!0)
return u},
bC:function bC(){},
kO:function kO(a){this.a=a},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h9:function h9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){this.a=a
this.c=null},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(){this.b=this.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
il:function il(a){this.a=a}},U={
kZ:function(){var u=new U.fF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fH:function(a){var u=new U.dA()
u.a=a
return u},
l1:function(){var u=new U.cy()
u.bU(U.ad)
u.bg(u.gfz(),u.ghS())
u.e=null
u.f=V.cE()
u.r=0
return u},
fF:function fF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){this.b=this.a=null},
cy:function cy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e3:function e3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nQ:function(a,b){var u=a.am,t=new A.hy(b,u)
t.fk(b,u)
t.fh(a,b)
return t},
ld:function(a,b,c,d,e){var u=new A.iS(a,c,e)
u.f=d
u.siH(P.nO(d,0,P.p))
return u},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
hy:function hy(a,b){var _=this
_.bu=_.e2=_.bt=_.am=_.az=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ei=_.cC=_.eh=_.bH=_.eg=_.ef=_.bG=_.bF=_.ee=_.ed=_.bE=_.bD=_.bC=_.ec=_.eb=_.bB=_.ea=_.e9=_.bA=_.e8=_.e7=_.bz=_.by=_.e6=_.e5=_.bx=_.bw=_.e4=_.e3=_.bv=null
_.cH=_.em=_.cG=_.el=_.cF=_.ek=_.cE=_.ej=_.cD=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.az=b3
_.am=b4
_.bt=b5},
cX:function cX(a,b){this.b=a
this.c=b},
d0:function d0(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cZ:function cZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
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
d_:function d_(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cO:function cO(){},
bX:function bX(a,b){this.a=a
this.b=b},
eg:function eg(){},
iY:function iY(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lt:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
u=F.lb()
F.dk(u,b,c,d,a,1,0,0,1)
F.dk(u,b,c,d,a,0,1,0,3)
F.dk(u,b,c,d,a,0,0,1,2)
F.dk(u,b,c,d,a,-1,0,0,0)
F.dk(u,b,c,d,a,0,-1,0,0)
F.dk(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
kj:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dk:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.M(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.M(p+a3,o+a1,n+a2)
l=new V.M(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.M(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kj(u)
g=F.kj(e.b)
f=F.lA(d,a0,new F.ki(e,F.kj(e.c),F.kj(e.d),g,h,c),b)
if(f!=null)a.b8(f)},
mK:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.lb()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ai])
q=u.a
p=new V.M(0,0,t)
p=p.B(0,Math.sqrt(p.F(p)))
C.a.h(r,q.j8(new V.b9(a,-1,-1,-1),new V.aN(1,1,1,1),new V.a4(0,0,c),new V.M(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.C(k)
j=new V.M(m,l,t).B(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eo(new V.b9(a,-1,-1,-1),null,new V.aN(i,g,h,1),new V.a4(m*k,l*k,c),new V.M(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.j6(r)
return u},
mI:function(a,b,c){return F.oZ(!0,a,1,new F.ks(1,c),b)},
oZ:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.lA(c,e,new F.ku(d),null)
if(u==null)return
u.ax()
u.cp()
if(b)u.b8(F.mK(3,!1,1,new F.kv(d),e))
u.b8(F.mK(1,!0,-1,new F.kw(d),e))
return u},
mV:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kP()
t=F.lt(a,null,new F.kQ(s,1),b)
t.cp()
return t},
mX:function(){return F.mJ(15,30,0.5,1,new F.kR())},
pf:function(){return F.mJ(12,120,0.3,1,new F.kD(3,2))},
mJ:function(a,b,c,d,e){var u=F.lA(a,b,new F.kt(H.n(e,{func:1,ret:V.a4,args:[P.q]}),d,b,c),null)
if(u==null)return
u.ax()
u.cp()
return u},
lA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.lb()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eo(g,g,new V.aN(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cA(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eo(g,g,new V.aN(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cA(d))}}u.d.j7(a+1,b+1,t)
return u},
cv:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.u(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.w("May not create a face with vertices attached to different shapes."))
u.cn(a)
u.co(b)
u.il(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
nK:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.u(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.w("May not create a line with vertices attached to different shapes."))
u.cn(a)
u.co(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
lb:function(){var u=new F.e5(),t=new F.jc(u)
t.b=!1
t.siI(H.d([],[F.ai]))
u.a=t
t=new F.ih(u)
t.sce(H.d([],[F.bJ]))
u.b=t
t=new F.ig(u)
t.sh4(H.d([],[F.bo]))
u.c=t
t=new F.ie(u)
t.sfZ(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
eo:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.jk()
r.sce(H.d([],[F.bJ]))
s.b=r
r=new F.jg()
u=[F.bo]
r.sh5(H.d([],u))
r.sh6(H.d([],u))
s.c=r
r=new F.jd()
u=[F.a9]
r.sh_(H.d([],u))
r.sh0(H.d([],u))
r.sh1(H.d([],u))
s.d=r
h=$.na()
s.e=0
r=$.bw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bv().a)!==0?e:t
s.x=(u&$.bu().a)!==0?b:t
s.y=(u&$.bx().a)!==0?f:t
s.z=(u&$.by().a)!==0?g:t
s.Q=(u&$.nb().a)!==0?c:t
s.ch=(u&$.cm().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ks:function ks(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kP:function kP(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(){},
kD:function kD(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){},
im:function im(){},
bo:function bo(){this.b=this.a=null},
hl:function hl(){},
iR:function iR(){},
bJ:function bJ(){this.a=null},
e5:function e5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
jd:function jd(){this.d=this.c=this.b=null},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(){this.c=this.b=null},
ji:function ji(){},
jh:function jh(){},
jj:function jj(){},
hT:function hT(){},
jk:function jk(){this.b=null}},T={cT:function cT(){},cU:function cU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iE:function iE(a){var _=this
_.a=a
_.e=_.d=_.c=null},iF:function iF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=null,a3=34067,a4="modifiers",a5=V.o8("Test 022"),a6=W.kX()
a6.className="pageLargeCanvas"
a6.id=a1
a5.a.appendChild(a6)
u=[P.e]
a5.dR(H.d(["Test of the Material Lighting shader with a textured point light."],u))
a5.j4(H.d(["shapes"],u))
a5.dR(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a1)
if(t==null)H.u(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.oa(t,!0,!0,!0,!1)
r=s.f
q=r.a
p=q.createTexture()
q.bindTexture(a3,p)
q.texParameteri(a3,10242,10497)
q.texParameteri(a3,10243,10497)
q.texParameteri(a3,10241,9729)
q.texParameteri(a3,10240,9729)
q.bindTexture(a3,a2)
o=new T.cU()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aP(o,p,"../resources/earthColor/posx.png",34069,!1,!1)
r.aP(o,p,"../resources/earthColor/negx.png",34070,!1,!1)
r.aP(o,p,"../resources/earthColor/posy.png",34071,!1,!1)
r.aP(o,p,"../resources/earthColor/negy.png",34072,!1,!1)
r.aP(o,p,"../resources/earthColor/posz.png",34073,!1,!1)
r.aP(o,p,"../resources/earthColor/negz.png",34074,!1,!1)
n=U.l1()
n.h(0,U.fH(V.lX(0,0,2)))
r=new U.e3()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sf2(0)
r.seK(0,0)
r.seR(0)
q=r.d
if(!(Math.abs(q-0.5)<$.L().a)){r.d=0.5
q=new D.K("deltaYaw",q,0.5,[P.q])
q.b=!0
r.J(q)}q=r.e
if(!(Math.abs(q-0.5)<$.L().a)){r.e=0.5
q=new D.K("deltaPitch",q,0.5,[P.q])
q.b=!0
r.J(q)}q=r.f
if(!(Math.abs(q-0)<$.L().a)){r.f=0
q=new D.K("deltaRoll",q,0,[P.q])
q.b=!0
r.J(q)}n.h(0,r)
m=E.l0()
r=U.l1()
r.h(0,U.fH(V.l9(0.2,0.2,0.2,1)))
r.h(0,n)
m.saX(r)
m.sac(0,F.mV(8,8))
r=O.lT()
q=r.f
l=q.c
if(l!==C.h){if(l===C.d)q.aE()
q.c=C.h
q.ij(a2)
l=q.a
l.a=null
l.a0(a2)}q.ik(o)
m.sbc(r)
k=new D.bM()
k.c=new V.a6(1,1,1)
k.e=1
k.r=k.f=0
k.a=V.cE()
j=k.b
k.b=n
n.gv().h(0,k.gbV())
r=new D.K("mover",j,k.b,[U.ad])
r.b=!0
k.aa(r)
i=new V.a6(1,1,1)
if(!k.c.w(0,i)){j=k.c
k.c=i
r=new D.K("color",j,i,[V.a6])
r.b=!0
k.aa(r)}r=k.d
if(r!==o){if(r!=null)r.gv().N(0,k.gbV())
j=k.d
k.d=o
o.gv().h(0,k.gbV())
r=new D.K("texture",j,k.d,[T.cU])
r.b=!0
k.aa(r)}r=k.e
if(!(Math.abs(r-1)<$.L().a)){k.e=1
r=new D.K("attenuation0",r,1,[P.q])
r.b=!0
k.aa(r)}r=k.f
if(!(Math.abs(r-0.15)<$.L().a)){k.f=0.15
r=new D.K("attenuation1",r,0.15,[P.q])
r.b=!0
k.aa(r)}r=k.r
if(!(Math.abs(r-0.05)<$.L().a)){k.r=0.05
r=new D.K("attenuation2",r,0.05,[P.q])
r.b=!0
k.aa(r)}h=O.lT()
h.dx.h(0,k)
r=h.r
r.say(0,new V.a6(0.2,0.2,0.2))
r=h.x
r.say(0,new V.a6(1,1,1))
r=h.z
r.say(0,new V.a6(1,1,1))
r=h.z
if(r.c===C.d){r.c=C.j
r.bT()
r.ck(100)
q=r.a
q.a=null
q.a0(a2)}r.ck(100)
g=E.l0()
g.saX(U.fH(V.l9(3,3,3,1)))
r=F.lt(1,a2,a2,1)
r.cI()
g.sac(0,r)
f=E.l0()
f.sac(0,F.mX())
e=U.l1()
r=s.r
q=new U.em()
l=U.kZ()
l.sd2(0,!0)
l.scQ(6.283185307179586)
l.scS(0)
l.sa1(0,0)
l.scR(100)
l.sW(0)
l.scB(0.5)
q.b=l
d=q.gaQ()
l.gv().h(0,d)
l=U.kZ()
l.sd2(0,!0)
l.scQ(6.283185307179586)
l.scS(0)
l.sa1(0,0)
l.scR(100)
l.sW(0)
l.scB(0.5)
q.c=l
l.gv().h(0,d)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
c=new X.aA(!1,!1,!1)
j=q.d
q.d=c
l=[X.aA]
d=new D.K(a4,j,c,l)
d.b=!0
q.J(d)
d=q.f
if(d!==!1){q.f=!1
d=new D.K("invertX",d,!1,[P.U])
d.b=!0
q.J(d)}d=q.r
if(d!==!1){q.r=!1
d=new D.K("invertY",d,!1,[P.U])
d.b=!0
q.J(d)}q.b4(r)
e.h(0,q)
r=s.r
q=new U.el()
d=U.kZ()
d.sd2(0,!0)
d.scQ(6.283185307179586)
d.scS(0)
d.sa1(0,0)
d.scR(100)
d.sW(0)
d.scB(0.2)
q.b=d
d.gv().h(0,q.gaQ())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
c=new X.aA(!0,!1,!1)
j=q.c
q.c=c
d=new D.K(a4,j,c,l)
d.b=!0
q.J(d)
q.b4(r)
e.h(0,q)
r=s.r
q=new U.en()
q.c=0.01
q.e=q.d=0
c=new X.aA(!1,!1,!1)
q.b=c
l=new D.K(a4,a2,c,l)
l.b=!0
q.J(l)
q.b4(r)
e.h(0,q)
e.h(0,U.fH(V.lX(0,0,5)))
b=new M.dF()
b.a=!0
b.sfP(0,O.kY(E.ao))
b.e.bg(b.ghn(),b.ghp())
b.y=b.x=b.r=b.f=null
a=X.nD(a2)
a0=new X.dZ()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.saX(a2)
r=a0.c
if(!(Math.abs(r-1.0471975511965976)<$.L().a)){a0.c=1.0471975511965976
r=new D.K("fov",r,1.0471975511965976,[P.q])
r.b=!0
a0.aN(r)}r=a0.d
if(!(Math.abs(r-0.1)<$.L().a)){a0.d=0.1
r=new D.K("near",r,0.1,[P.q])
r.b=!0
a0.aN(r)}r=a0.e
if(!(Math.abs(r-2000)<$.L().a)){a0.e=2000
r=new D.K("far",r,2000,[P.q])
r.b=!0
a0.aN(r)}r=b.b
if(r!==a0){if(r!=null)r.gv().N(0,b.gat())
j=b.b
b.b=a0
a0.gv().h(0,b.gat())
r=new D.K("camera",j,b.b,[X.dz])
r.b=!0
b.aB(r)}r=b.c
if(r!==a){if(r!=null)r.gv().N(0,b.gat())
j=b.c
b.c=a
a.gv().h(0,b.gat())
r=new D.K("target",j,b.c,[X.e9])
r.b=!0
b.aB(r)}b.sbc(a2)
b.sbc(h)
b.e.h(0,g)
b.e.h(0,f)
b.e.h(0,m)
b.b.saX(e)
r=s.d
if(r!==b){if(r!=null)r.gv().N(0,s.gd8())
s.d=b
b.gv().h(0,s.gd8())
s.d9()}r=new V.i2("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
r.b3(0,"Cube",new T.kF(f))
r.b3(0,"Cylinder",new T.kG(f))
r.b3(0,"Cone",new T.kH(f))
r.b3(0,"Sphere",new T.kI(f))
r.dP(0,"Toroid",new T.kJ(f),!0)
r.b3(0,"Knot",new T.kK(f))
u=s.z
if(u==null)u=s.z=D.Y()
r={func:1,ret:-1,args:[D.A]}
q=H.n(new T.kL(a5,h),r)
if(u.b==null)u.saR(H.d([],[r]))
u=u.b;(u&&C.a).h(u,q)
V.pn(s)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l5.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gK:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.hg.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iU:1}
J.dK.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dL.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hY.prototype={}
J.bO.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.mZ()]
if(u==null)return this.fc(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.aP.prototype={
h:function(a,b){H.B(b,H.t(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
eO:function(a,b){if(!!a.fixed$length)H.u(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e1(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.u(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jF:function(a){return this.m(a,"")},
jx:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
jw:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hf())},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f9:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gjv:function(a){if(a.length>0)return a[0]
throw H.c(H.hf())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hf())},
bh:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.J("setRange"))
P.br(b,c,a.length)
u=c-b
if(u===0)return
P.la(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ch(d)
if(u>s.gl(d))throw H.c(H.nG())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dS:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.l2(a,"[","]")},
gV:function(a){return new J.au(a,a.length,[H.t(a,0)])},
gK:function(a){return H.cM(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.t(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cf(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.t(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.q(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bh(t,0,a.length,a)
this.bh(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.l4.prototype={}
J.au.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.F(s))
u=t.c
if(u>=r){t.sds(null)
return!1}t.sds(s[u]);++t.c
return!0},
sds:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
J.bH.prototype={
ke:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cJ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eW:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.aD(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aD(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aD(b))
return a*b},
bf:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ir:function(a,b){if(b<0)throw H.c(H.aD(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
$iq:1,
$iac:1}
J.dJ.prototype={$ip:1}
J.dI.prototype={}
J.bm.prototype={
a_:function(a,b){if(b<0)throw H.c(H.cf(a,b))
if(b>=a.length)H.u(H.cf(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.cf(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kV(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.br(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ad:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ad(a,b,0)},
D:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aD(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.e1(b,null))
if(b>c)throw H.c(P.e1(b,null))
if(c>a.length)throw H.c(P.e1(c,null))
return a.substring(b,c)},
as:function(a,b){return this.D(a,b,null)},
kh:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
ev:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eu:function(a,b){return this.ev(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilZ:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ad3:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fW.prototype={}
H.c2.prototype={
gV:function(a){var u=this
return new H.cB(u,u.gl(u),[H.as(u,"c2",0)])},
bO:function(a,b){return this.fb(0,H.n(b,{func:1,ret:P.U,args:[H.as(this,"c2",0)]}))}}
H.cB.prototype={
gM:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=J.ch(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bj(s))
u=t.c
if(u>=q){t.sb_(null)
return!1}t.sb_(r.L(s,u));++t.c
return!0},
sb_:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
H.hv.prototype={
gV:function(a){return new H.hw(J.bz(this.a),this.b,this.$ti)},
gl:function(a){return J.aE(this.a)},
L:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ai:function(a,b){return[b]}}
H.hw.prototype={
E:function(){var u=this,t=u.b
if(t.E()){u.sb_(u.c.$1(t.gM(t)))
return!0}u.sb_(null)
return!1},
gM:function(a){return this.a},
sb_:function(a){this.a=H.B(a,H.t(this,1))},
$ab3:function(a,b){return[b]}}
H.hx.prototype={
gl:function(a){return J.aE(this.a)},
L:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d5.prototype={
gV:function(a){return new H.jp(J.bz(this.a),this.b,this.$ti)}}
H.jp.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(H.D(t.$1(u.gM(u))))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bZ.prototype={}
H.d3.prototype={
n:function(a,b,c){H.B(c,H.as(this,"d3",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.ei.prototype={}
H.fI.prototype={
i:function(a){return P.l8(this)},
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
return H.nx()},
$iH:1}
H.fJ.prototype={
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.dt(b)},
dt:function(a){return this.b[H.I(a)]},
O:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dt(r),p))}}}
H.iO.prototype={
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
H.hU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hi.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j1.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kS.prototype={
$1:function(a){if(!!J.V(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eY.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibF:1,
gkn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iB.prototype={}
H.ir.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.co.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.co))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cM(this.a)
else u=typeof t!=="object"?J.dr(t):H.cM(t)
return(u^H.cM(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iQ.prototype={
i:function(a){return this.a}}
H.fD.prototype={
i:function(a){return this.a}}
H.ib.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jq.prototype={
i:function(a){return"Assertion failed: "+P.dG(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
gjE:function(a){return this.a===0},
ga7:function(a){return new H.hn(this,[H.t(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dn(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dn(t,b)}else return s.jB(b)},
jB:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cM(u.c2(t,u.cL(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.jC(b)},
jC:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c2(r,s.cL(a))
t=s.cM(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.B(b,H.t(s,0))
H.B(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.dd(u==null?s.b=s.cc():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dd(t==null?s.c=s.cc():t,b,c)}else s.jD(b,c)},
jD:function(a,b){var u,t,s,r,q=this
H.B(a,H.t(q,0))
H.B(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.cc()
t=q.cL(a)
s=q.c2(u,t)
if(s==null)q.cl(u,t,[q.bX(a,b)])
else{r=q.cM(s,a)
if(r>=0)s[r].b=b
else s.push(q.bX(a,b))}},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bj(s))
u=u.c}},
dd:function(a,b,c){var u,t=this
H.B(b,H.t(t,0))
H.B(c,H.t(t,1))
u=t.bk(a,b)
if(u==null)t.cl(a,b,t.bX(b,c))
else u.b=c},
fG:function(){this.r=this.r+1&67108863},
bX:function(a,b){var u,t=this,s=new H.hm(H.B(a,H.t(t,0)),H.B(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fG()
return s},
cL:function(a){return J.dr(a)&0x3ffffff},
cM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.l8(this)},
bk:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
fU:function(a,b){delete a[b]},
dn:function(a,b){return this.bk(a,b)!=null},
cc:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cl(t,u,t)
this.fU(t,u)
return t}}
H.hm.prototype={}
H.hn.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.ho(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ho.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.sde(null)
return!1}else{u.sde(t.a)
u.c=u.c.c
return!0}}},
sde:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kB.prototype={
$1:function(a){return this.a(H.I(a))},
$S:49}
H.hh.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilZ:1,
$io4:1}
H.cH.prototype={$icH:1}
H.bI.prototype={$ibI:1,$ioc:1}
H.dU.prototype={
gl:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cI.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p0(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.q]},
$az:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dV.prototype={
n:function(a,b,c){H.aj(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hM.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dW.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$ipM:1}
H.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icJ:1,
$iT:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
P.js.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:27}
P.jr.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ju.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f3.prototype={
fD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.k8(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.k7(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibb:1}
P.k8.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k7.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.fg(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
jH:function(a){if(this.c!==6)return!0
return this.b.b.d_(H.n(this.d,{func:1,ret:P.U,args:[P.S]}),a.a,P.U,P.S)},
jz:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fm(u,{func:1,args:[P.S,P.aw]}))return H.lu(r.k9(u,a.a,a.b,null,t,P.aw),s)
else return H.lu(r.d_(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aK.prototype={
eV:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oN(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aK($.a2,[c])
s=b==null?1:3
this.dg(new P.bg(t,s,a,b,[r,c]))
return t},
kd:function(a,b){return this.eV(a,null,b)},
dg:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaK")
s=u.a
if(s<4){u.dg(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kq(null,null,s,H.n(new P.jD(t,a),{func:1,ret:-1}))}},
dG:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaK")
u=q.a
if(u<4){q.dG(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.kq(null,null,u,H.n(new P.jH(o,p),{func:1,ret:-1}))}},
cg:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dj:function(a){var u,t,s=this,r=H.t(s,0)
H.lu(a,{futureOr:1,type:r})
u=s.$ti
if(H.lq(a,"$icx",u,"$acx"))if(H.lq(a,"$iaK",u,null))P.mm(a,s)
else P.oo(a,s)
else{t=s.cg()
H.B(a,r)
s.a=4
s.c=a
P.d8(s,t)}},
dk:function(a,b){var u,t=this
H.f(b,"$iaw")
u=t.cg()
t.a=8
t.c=new P.an(a,b)
P.d8(t,u)},
$icx:1}
P.jD.prototype={
$0:function(){P.d8(this.a,this.b)},
$S:0}
P.jH.prototype={
$0:function(){P.d8(this.b,this.a.a)},
$S:0}
P.jE.prototype={
$1:function(a){var u=this.a
u.a=0
u.dj(a)},
$S:27}
P.jF.prototype={
$2:function(a,b){H.f(b,"$iaw")
this.a.dk(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jG.prototype={
$0:function(){this.a.dk(this.b,this.c)},
$S:0}
P.jK.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eS(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cj(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.V(n).$icx){if(n instanceof P.aK&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.kd(new P.jL(p),null)
s.a=!1}},
$S:3}
P.jL.prototype={
$1:function(a){return this.a},
$S:46}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.B(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.d_(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cj(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.D(r.jH(u))&&r.e!=null){q=m.b
q.b=r.jz(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cj(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.eq.prototype={}
P.iu.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aK($.a2,[P.p])
r.a=0
u=H.t(s,0)
t=H.n(new P.iw(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.ix(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iw.prototype={
$1:function(a){H.B(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.t(this.b,0)]}}}
P.ix.prototype={
$0:function(){this.b.dj(this.a.a)},
$S:0}
P.cQ.prototype={}
P.iv.prototype={}
P.bb.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.kh.prototype={$iq0:1}
P.kp.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dY():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jR.prototype={
ka:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a2){a.$0()
return}P.my(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cj(s)
P.ko(r,r,this,u,H.f(t,"$iaw"))}},
kb:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a2){a.$1(b)
return}P.mz(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cj(s)
P.ko(r,r,this,u,H.f(t,"$iaw"))}},
je:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:b}),b)},
cr:function(a){return new P.jS(this,H.n(a,{func:1,ret:-1}))},
dX:function(a,b){return new P.jU(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eS:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.k)return a.$0()
return P.my(null,null,this,a,b)},
d_:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a2===C.k)return a.$1(b)
return P.mz(null,null,this,a,b,c,d)},
k9:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a2===C.k)return a.$2(b,c)
return P.oO(null,null,this,a,b,c,d,e,f)}}
P.jT.prototype={
$0:function(){return this.a.eS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jS.prototype={
$0:function(){return this.a.ka(this.b)},
$S:3}
P.jU.prototype={
$1:function(a){var u=this.c
return this.a.kb(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jP.prototype={
gV:function(a){var u=this,t=new P.eF(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ic9")!=null}else{t=this.fQ(b)
return t}},
fQ:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.du(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.df(u==null?s.b=P.li():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.df(t==null?s.c=P.li():t,b)}else return s.fH(0,b)},
fH:function(a,b){var u,t,s,r=this
H.B(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.li()
t=r.dl(b)
s=u[t]
if(s==null)u[t]=[r.cd(b)]
else{if(r.c0(s,b)>=0)return!1
s.push(r.cd(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i5(this.c,b)
else return this.i4(0,b)},
i4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.du(r,b)
t=s.c0(u,b)
if(t<0)return!1
s.dM(u.splice(t,1)[0])
return!0},
df:function(a,b){H.B(b,H.t(this,0))
if(H.f(a[b],"$ic9")!=null)return!1
a[b]=this.cd(b)
return!0},
i5:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ic9")
if(u==null)return!1
this.dM(u)
delete a[b]
return!0},
dA:function(){this.r=1073741823&this.r+1},
cd:function(a){var u,t=this,s=new P.c9(H.B(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dA()
return s},
dM:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dA()},
dl:function(a){return J.dr(a)&1073741823},
du:function(a,b){return a[this.dl(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.eF.prototype={
gM:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.sdi(null)
return!1}else{u.sdi(H.B(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sdi:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
P.hp.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:7}
P.hq.prototype={$ii:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.cB(a,this.gl(a),[H.bR(this,a,"z",0)])},
L:function(a,b){return this.j(a,b)},
kg:function(a,b){var u,t=this,s=H.d([],[H.bR(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
kf:function(a){return this.kg(a,!0)},
q:function(a,b){var u,t=this,s=[H.bR(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.q(t.gl(a),b.gl(b)))
C.a.bh(u,0,t.gl(a),a)
C.a.bh(u,t.gl(a),u.length,b)
return u},
jt:function(a,b,c,d){var u
H.B(d,H.bR(this,a,"z",0))
P.br(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l2(a,"[","]")}}
P.hs.prototype={}
P.ht.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:7}
P.ae.prototype={
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bR(s,a,"ae",0),H.bR(s,a,"ae",1)]})
for(u=J.bz(s.ga7(a));u.E();){t=u.gM(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aE(this.ga7(a))},
i:function(a){return P.l8(a)},
$iH:1}
P.k9.prototype={
n:function(a,b,c){H.B(b,H.t(this,0))
H.B(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hu.prototype={
j:function(a,b){return J.lE(this.a,b)},
n:function(a,b,c){J.kU(this.a,H.B(b,H.t(this,0)),H.B(c,H.t(this,1)))},
O:function(a,b){J.lF(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aE(this.a)},
i:function(a){return J.at(this.a)},
$iH:1}
P.ej.prototype={}
P.jW.prototype={
av:function(a,b){var u
for(u=J.bz(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gM(u))},
i:function(a){return P.l2(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.la(b,"index")
for(u=P.os(r,r.r,H.t(r,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$im5:1}
P.eG.prototype={}
P.f9.prototype={}
P.fz.prototype={
jJ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.br(a0,a1,b.length)
u=$.nd()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.ky(C.b.G(b,n))
j=H.ky(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.D(b,s,t)
r.a=g+H.c5(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.D(b,s,a1)
f=g.length
if(q>=0)P.lJ(b,p,a1,q,o,f)
else{e=C.f.bf(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lJ(b,p,a1,q,o,d)
else{e=C.f.bf(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.p],P.e]}}
P.fA.prototype={
$abD:function(){return[[P.b,P.p],P.e]}}
P.bW.prototype={}
P.bD.prototype={}
P.fY.prototype={
$abW:function(){return[P.e,[P.b,P.p]]}}
P.hd.prototype={
i:function(a){return this.a}}
P.hc.prototype={
fR:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.D(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nq(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abD:function(){return[P.e,P.e]}}
P.j9.prototype={
gjs:function(){return C.R}}
P.jb.prototype={
cz:function(a){var u,t,s=P.br(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kf(u)
if(t.h2(a,0,s)!==s)t.dO(J.nm(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oI(0,t.b,u.length)))},
$abD:function(){return[P.e,[P.b,P.p]]}}
P.kf.prototype={
dO:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h2:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dO(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ja.prototype={
cz:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.of(!1,a,0,null)
if(u!=null)return u
t=P.br(0,null,J.aE(a))
s=P.mB(a,0,t)
if(s>0){r=P.cR(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.ke(!1,q)
n.c=o
n.ji(a,p,t)
if(n.e>0){H.u(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c5(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abD:function(){return[[P.b,P.p],P.e]}}
P.ke.prototype={
ji:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ch(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bP()
if((o&192)!==128){n=P.a7(h+C.f.bd(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a7("Overlong encoding of 0x"+C.f.bd(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.f.bd(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c5(u)
i.c=!1}for(n=p<c;n;){m=P.mB(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cR(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Y()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.f.bd(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.f.bd(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.U.prototype={}
P.ay.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.aT(u,30))&1073741823},
i:function(a){var u=this,t=P.ny(H.o0(u)),s=P.dB(H.nZ(u)),r=P.dB(H.nV(u)),q=P.dB(H.nW(u)),p=P.dB(H.nY(u)),o=P.dB(H.o_(u)),n=P.nz(H.nX(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.b2.prototype={
q:function(a,b){return new P.b2(C.f.q(this.a,b.gfW()))},
u:function(a,b){return new P.b2(C.f.u(this.a,b.gfW()))},
w:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.fV(),q=this.a
if(q<0)return"-"+new P.b2(0-q).i(0)
u=r.$1(C.f.a6(q,6e7)%60)
t=r.$1(C.f.a6(q,1e6)%60)
s=new P.fU().$1(q%1e6)
return""+C.f.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.bE.prototype={}
P.ft.prototype={
i:function(a){return"Assertion failed"}}
P.dY.prototype={
i:function(a){return"Throw of null."}}
P.aM.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc_()+o+u
if(!q.a)return t
s=q.gbZ()
r=P.dG(q.b)
return t+s+": "+r}}
P.c6.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.he.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t=H.aj(this.b)
if(typeof t!=="number")return t.Y()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.j2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dG(u)+"."}}
P.hX.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.e7.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ey.prototype={
i:function(a){return"Exception: "+this.a}}
P.h7.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.D(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a_(f,q)
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
return h+l+j+k+"\n"+C.b.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bF.prototype={}
P.p.prototype={}
P.i.prototype={
bO:function(a,b){var u=H.as(this,"i",0)
return new H.d5(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.E();)++u
return u},
gaL:function(a){var u,t=this.gV(this)
if(!t.E())throw H.c(H.hf())
u=t.gM(t)
if(t.E())throw H.c(H.nH())
return u},
L:function(a,b){var u,t,s
P.la(b,"index")
for(u=this.gV(this),t=0;u.E();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.nF(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.O.prototype={
gK:function(a){return P.S.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
w:function(a,b){return this===b},
gK:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$ilZ:1}
P.ah.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipA:1}
P.j7.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iH",[r,r],"$aH")
H.I(b)
u=J.dn(b).eu(b,"=")
if(u===-1){if(b!=="")J.kU(a,P.lk(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.D(b,0,u)
s=C.b.as(b,u+1)
r=this.a
J.kU(a,P.lk(t,0,t.length,r,!0),P.lk(s,0,s.length,r,!0))}return a},
$S:45}
P.j4.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j5.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j6.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fp(C.b.D(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ca.prototype={
gf1:function(){return this.b},
gcK:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.D(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.mq(this.a)
return u},
gcV:function(a){var u=this.f
return u==null?"":u},
geo:function(){var u=this.r
return u==null?"":u},
eP:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iH",[P.e,null],"$aH")
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
n=P.lj(null,0,0,b)
return new P.ca(u,s,q,r,p,n,m.r)},
gcW:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.si3(new P.ej(P.mf(u==null?"":u),[t,t]))}return s.Q},
gep:function(){return this.c!=null},
ges:function(){return this.f!=null},
geq:function(){return this.r!=null},
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
if(!!J.V(b).$ile)if(s.a==b.gbR())if(s.c!=null===b.gep())if(s.b==b.gf1())if(s.gcK(s)==b.gcK(b))if(s.gbJ(s)==b.gbJ(b))if(s.e===b.geJ(b)){u=s.f
t=u==null
if(!t===b.ges()){if(t)u=""
if(u===b.gcV(b)){u=s.r
t=u==null
if(!t===b.geq()){if(t)u=""
u=u===b.geo()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
si3:function(a){var u=P.e
this.Q=H.k(a,"$iH",[u,u],"$aH")},
$ile:1,
gbR:function(){return this.a},
geJ:function(a){return this.e}}
P.ka.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:40}
P.kb.prototype={
$1:function(a){return P.fa(C.a0,a,C.l,!1)},
$S:16}
P.kd.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fa(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fa(C.r,b,C.l,!0))}},
$S:15}
P.kc.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bz(H.mP(b,"$ii")),t=this.a;u.E();)t.$2(a,H.I(u.gM(u)))},
$S:39}
P.j3.prototype={
gf0:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.ev(u,"?",o)
s=u.length
if(t>=0){r=P.dj(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jy("data",p,p,p,P.dj(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kl.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kk.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nn(u,0,96,b)
return u},
$S:35}
P.km.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kn.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.jZ.prototype={
gep:function(){return this.c>0},
ger:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.C(t)
t=u+1<t
u=t}else u=!1
return u},
ges:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
geq:function(){return this.r<this.a.length},
gdw:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdz:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbR:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdw())q=t.x="http"
else if(t.gdz()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.D(t.a,0,q)
t.x=q}return q},
gf1:function(){var u=this.c,t=this.b+3
return u>t?C.b.D(this.a,t,u-1):""},
gcK:function(a){var u=this.c
return u>0?C.b.D(this.a,u,this.d):""},
gbJ:function(a){var u,t=this
if(t.ger()){u=t.d
if(typeof u!=="number")return u.q()
return P.fp(C.b.D(t.a,u+1,t.e),null,null)}if(t.gdw())return 80
if(t.gdz())return 443
return 0},
geJ:function(a){return C.b.D(this.a,this.e,this.f)},
gcV:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.b.D(this.a,u+1,t):""},
geo:function(){var u=this.r,t=this.a
return u<t.length?C.b.as(t,u+1):""},
gcW:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Y()
if(t>=u.r)return C.a1
t=P.e
return new P.ej(P.mf(u.gcV(u)),[t,t])},
eP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iH",[P.e,null],"$aH")
u=k.gbR()
t=u==="file"
s=k.c
r=s>0?C.b.D(k.a,k.b+3,s):""
q=k.ger()?k.gbJ(k):j
s=k.c
if(s>0)p=C.b.D(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.D(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.lj(j,0,0,b)
n=k.r
l=n<s.length?C.b.as(s,n+1):j
return new P.ca(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ile&&this.a===b.i(0)},
i:function(a){return this.a},
$ile:1}
P.jy.prototype={}
W.y.prototype={}
W.fr.prototype={
gl:function(a){return a.length}}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.cn.prototype={$icn:1}
W.bU.prototype={$ibU:1}
W.bA.prototype={$ibA:1}
W.bV.prototype={
d3:function(a,b,c){if(c!=null)return a.getContext(b,P.oW(c))
return a.getContext(b)},
f4:function(a,b){return this.d3(a,b,null)},
$ibV:1}
W.cq.prototype={$icq:1}
W.bB.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fK.prototype={
gl:function(a){return a.length}}
W.a_.prototype={$ia_:1}
W.ct.prototype={
gl:function(a){return a.length}}
W.fL.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fM.prototype={
gl:function(a){return a.length}}
W.fN.prototype={
gl:function(a){return a.length}}
W.fQ.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fR.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iam",[P.ac],"$aam")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.am,P.ac]]},
$az:function(){return[[P.am,P.ac]]},
$ii:1,
$ai:function(){return[[P.am,P.ac]]},
$ib:1,
$ab:function(){return[[P.am,P.ac]]},
$aG:function(){return[[P.am,P.ac]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaK(a))+" x "+H.l(this.gaH(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iam)return!1
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&this.gaK(a)===u.gaK(b)&&this.gaH(a)===u.gaH(b)},
gK:function(a){return W.mo(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gaK(a)),C.e.gK(this.gaH(a)))},
gdY:function(a){return a.bottom},
gaH:function(a){return a.height},
gbI:function(a){return a.left},
gbL:function(a){return a.right},
gbM:function(a){return a.top},
gaK:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ac]}}
W.fS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aG:function(){return[P.e]}}
W.fT.prototype={
gl:function(a){return a.length}}
W.jw.prototype={
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
gV:function(a){var u=this.kf(this)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gjd:function(a){return new W.jz(a)},
gcw:function(a){return new W.jw(a,a.children)},
gdZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lP
if(u==null){u=H.d([],[W.aB])
t=new W.dX(u)
C.a.h(u,W.mn(null))
C.a.h(u,W.mp())
$.lP=t
d=t}else d=u
u=$.lO
if(u==null){u=new W.fb(d)
$.lO=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.l_=t.createRange()
t=$.bk.createElement("base")
H.f(t,"$icn")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibA")}u=$.bk
if(!!this.$ibA)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.l_.selectNodeContents(s)
r=$.l_.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lH(s)
c.d4(r)
document.adoptNode(r)
return r},
jl:function(a,b,c){return this.af(a,b,c,null)},
f7:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iX:1,
geT:function(a){return a.tagName}}
W.fX.prototype={
$1:function(a){return!!J.V(H.f(a,"$iE")).$iX},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
j5:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fI(a,b,c,!1)},
fI:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aG.prototype={$iaG:1}
W.cw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aG]},
$az:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icw:1,
$aG:function(){return[W.aG]}}
W.h2.prototype={
gl:function(a){return a.length}}
W.h6.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hb.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic_:1,
$aG:function(){return[W.E]}}
W.bl.prototype={$ibl:1,
ge_:function(a){return a.data}}
W.cz.prototype={$icz:1}
W.cA.prototype={$icA:1}
W.b4.prototype={$ib4:1}
W.dP.prototype={
i:function(a){return String(a)},
$idP:1}
W.hF.prototype={
gl:function(a){return a.length}}
W.cF.prototype={$icF:1}
W.hG.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hH(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hI.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.hJ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aR.prototype={$iaR:1}
W.hK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.af.prototype={$iaf:1}
W.ar.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m6("No elements"))
if(t>1)throw H.c(P.m6("More than one element"))
return u.firstChild},
av:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.E],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dH(u,u.length,[H.bR(C.a2,u,"G",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
k_:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k7:function(a,b){var u,t
try{u=a.parentNode
J.nk(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fa(a):u},
jb:function(a,b){return a.appendChild(H.f(b,"$iE"))},
i8:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.i9.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.ia(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
W.ia.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ic.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.io.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.ip.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.is.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new W.it(u))
return u},
gl:function(a){return a.length},
$aae:function(){return[P.e,P.e]},
$iH:1,
$aH:function(){return[P.e,P.e]}}
W.it.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aH.prototype={$iaH:1}
W.ba.prototype={$iba:1}
W.e8.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=W.nA("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).av(0,new W.ar(u))
return t}}
W.iz.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
s.toString
u=new W.ar(s)
r=u.gaL(u)
t.toString
r.toString
new W.ar(t).av(0,new W.ar(r))
return t}}
W.iA.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaL(u)
t.toString
s.toString
new W.ar(t).av(0,new W.ar(s))
return t}}
W.cS.prototype={$icS:1}
W.aW.prototype={$iaW:1}
W.aI.prototype={$iaI:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aI]},
$az:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aG:function(){return[W.aI]}}
W.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.iH.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aG:function(){return[W.aX]}}
W.iM.prototype={
gl:function(a){return a.length}}
W.bN.prototype={}
W.j8.prototype={
i:function(a){return String(a)}}
W.jn.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
gjo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibf:1}
W.d6.prototype={
i9:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d7.prototype={$id7:1}
W.jx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$ia_")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.a_]},
$az:function(){return[W.a_]},
$ii:1,
$ai:function(){return[W.a_]},
$ib:1,
$ab:function(){return[W.a_]},
$aG:function(){return[W.a_]}}
W.et.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iam)return!1
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&a.width===u.gaK(b)&&a.height===u.gaH(b)},
gK:function(a){return W.mo(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gaH:function(a){return a.height},
gaK:function(a){return a.width}}
W.jM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.eL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iE")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.E]},
$az:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.k_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.k3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aG:function(){return[W.aH]}}
W.jv.prototype={
O:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.f(r[t],"$id7")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.e,P.e]},
$aH:function(){return[P.e,P.e]}}
W.jz.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.jA.prototype={}
W.lh.prototype={}
W.jB.prototype={}
W.jC.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:34}
W.bP.prototype={
fn:function(a){var u
if($.d9.gjE($.d9)){for(u=0;u<262;++u)$.d9.n(0,C.Y[u],W.p8())
for(u=0;u<12;++u)$.d9.n(0,C.v[u],W.p9())}},
aU:function(a){return $.ne().X(0,W.cu(a))},
aw:function(a,b,c){var u=$.d9.j(0,H.l(W.cu(a))+"::"+b)
if(u==null)u=$.d9.j(0,"*::"+b)
if(u==null)return!1
return H.lp(u.$4(a,b,c,this))},
$iaB:1}
W.G.prototype={
gV:function(a){return new W.dH(a,this.gl(a),[H.bR(this,a,"G",0)])}}
W.dX.prototype={
aU:function(a){return C.a.dS(this.a,new W.hS(a))},
aw:function(a,b,c){return C.a.dS(this.a,new W.hR(a,b,c))},
$iaB:1}
W.hS.prototype={
$1:function(a){return H.f(a,"$iaB").aU(this.a)},
$S:24}
W.hR.prototype={
$1:function(a){return H.f(a,"$iaB").aw(this.a,this.b,this.c)},
$S:24}
W.eT.prototype={
fC:function(a,b,c,d){var u,t,s
this.a.av(0,c)
u=b.bO(0,new W.jX())
t=b.bO(0,new W.jY())
this.b.av(0,u)
s=this.c
s.av(0,C.B)
s.av(0,t)},
aU:function(a){return this.a.X(0,W.cu(a))},
aw:function(a,b,c){var u=this,t=W.cu(a),s=u.c
if(s.X(0,H.l(t)+"::"+b))return u.d.j9(c)
else if(s.X(0,"*::"+b))return u.d.j9(c)
else{s=u.b
if(s.X(0,H.l(t)+"::"+b))return!0
else if(s.X(0,"*::"+b))return!0
else if(s.X(0,H.l(t)+"::*"))return!0
else if(s.X(0,"*::*"))return!0}return!1},
$iaB:1}
W.jX.prototype={
$1:function(a){return!C.a.X(C.v,H.I(a))},
$S:25}
W.jY.prototype={
$1:function(a){return C.a.X(C.v,H.I(a))},
$S:25}
W.k5.prototype={
aw:function(a,b,c){if(this.ff(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1}}
W.k6.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:16}
W.k4.prototype={
aU:function(a){var u=J.V(a)
if(!!u.$icN)return!1
u=!!u.$ir
if(u&&W.cu(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aU(a)},
$iaB:1}
W.dH.prototype={
E:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdv(J.lE(u.a,t))
u.c=t
return!0}u.sdv(null)
u.c=s
return!1},
gM:function(a){return this.d},
sdv:function(a){this.d=H.B(a,H.t(this,0))},
$ib3:1}
W.aB.prototype={}
W.jV.prototype={$ipN:1}
W.fb.prototype={
d4:function(a){new W.kg(this).$2(a,null)},
b2:function(a,b){if(b==null)J.lH(a)
else b.removeChild(a)},
ig:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.no(a)
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
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.ak(r)}try{s=W.cu(a)
this.ie(H.f(a,"$iX"),b,p,t,s,H.f(o,"$iH"),H.I(n))}catch(r){if(H.ak(r) instanceof P.aM)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ie:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aU(a)){o.b2(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aw(a,"is",g)){o.b2(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nr(r)
H.I(r)
if(!q.aw(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icS)o.d4(a.content)},
$ipx:1}
W.kg.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ig(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.f(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iE")}},
$S:44}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.de.prototype={}
W.df.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eZ.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
P.k0.prototype={
en:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d1:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io4)throw H.c(P.j0("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibU)return a
if(!!u.$icw)return a
if(!!u.$ibl)return a
if(!!u.$icH||!!u.$ibI||!!u.$icF)return a
if(!!u.$iH){t=q.en(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.O(a,new P.k2(p,q))
return p.a}if(!!u.$ib){t=q.en(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jk(a,t)}throw H.c(P.j0("structured clone of other type"))},
jk:function(a,b){var u,t=J.ch(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.d1(t.j(a,u)))
return r}}
P.k2.prototype={
$2:function(a,b){this.a.a[a]=this.b.d1(b)},
$S:7}
P.f8.prototype={$ibl:1,
ge_:function(a){return this.a}}
P.kr.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k1.prototype={}
P.h3.prototype={
gbl:function(){var u=this.b,t=H.as(u,"z",0),s=W.X
return new H.hv(new H.d5(u,H.n(new P.h4(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.h5(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iX")
u=this.gbl()
J.np(u.b.$1(J.fq(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aE(this.gbl().a)},
j:function(a,b){var u=this.gbl()
return u.b.$1(J.fq(u.a,b))},
gV:function(a){var u=P.lS(this.gbl(),!1,W.X)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.h4.prototype={
$1:function(a){return!!J.V(H.f(a,"$iE")).$iX},
$S:21}
P.h5.prototype={
$1:function(a){return H.m(H.f(a,"$iE"),"$iX")},
$S:33}
P.jQ.prototype={
gbL:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
gdY:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.C(t)
return H.B(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
w:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iam){t=p.a
if(t==u.gbI(b)){s=p.b
if(s==u.gbM(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.C(r)
q=H.t(p,0)
if(H.B(t+r,q)===u.gbL(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.C(t)
u=H.B(s+t,q)===u.gdY(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.dr(s),q=t.b,p=J.dr(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.C(o)
u=H.t(t,0)
o=C.f.gK(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.C(s)
u=C.f.gK(H.B(q+s,u))
return P.or(P.jO(P.jO(P.jO(P.jO(0,r),p),o),u))}}
P.am.prototype={
gbI:function(a){return this.a},
gbM:function(a){return this.b},
gaK:function(a){return this.c},
gaH:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hk.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aG:function(){return[P.b5]}}
P.b8.prototype={$ib8:1}
P.hV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aG:function(){return[P.b8]}}
P.i1.prototype={
gl:function(a){return a.length}}
P.cN.prototype={$icN:1}
P.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aG:function(){return[P.e]}}
P.r.prototype={
gcw:function(a){return new P.h3(a,new W.ar(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.mn(null))
C.a.h(p,W.mp())
C.a.h(p,new W.k4())
c=new W.fb(new W.dX(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jl(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ir:1}
P.bc.prototype={$ibc:1}
P.iN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aG:function(){return[P.bc]}}
P.eD.prototype={}
P.eE.prototype={}
P.eO.prototype={}
P.eP.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$ioc:1}
P.fv.prototype={
gl:function(a){return a.length}}
P.fw.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.O(a,new P.fx(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.e,null]},
$iH:1,
$aH:function(){return[P.e,null]}}
P.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fy.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.hW.prototype={
gl:function(a){return a.length}}
P.er.prototype={}
P.dv.prototype={$idv:1}
P.e0.prototype={$ie0:1}
P.c7.prototype={
kc:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibl)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oX(g))
return}if(!!t.$icz)t=!0
else t=!1
if(t){this.iv(a,b,c,d,e,f,g)
return}throw H.c(P.dt("Incorrect number or type of arguments"))},
iv:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
T:function(a,b,c){return a.uniform1f(b,c)},
a3:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eZ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.e4.prototype={$ie4:1}
P.ea.prototype={$iea:1}
P.eh.prototype={$ieh:1}
P.iq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bs(a.item(b))},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$az:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aG:function(){return[[P.H,,,]]}}
P.eW.prototype={}
P.eX.prototype={}
O.a5.prototype={
bU:function(a){var u=this
u.sh7(H.d([],[a]))
u.sdE(null)
u.sdB(null)
u.sdF(null)},
d5:function(a,b,c){var u=this,t=H.as(u,"a5",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdE(b)
u.sdB(a)
u.sdF(c)},
bg:function(a,b){return this.d5(a,null,b)},
hP:function(a){var u
H.k(a,"$ii",[H.as(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
he:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.au(u,u.length,[H.t(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a5",0)
H.B(b,r)
r=[r]
if(H.D(s.hP(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.he(t,H.d([b],r))}},
sh7:function(a){this.a=H.k(a,"$ib",[H.as(this,"a5",0)],"$ab")},
sdE:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.as(this,"a5",0)]]})},
sdB:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a5",0)]]})},
sdF:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a5",0)]]})},
$ii:1}
O.cD.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.Y():u},
aM:function(){var u=this.b
if(u!=null)u.H(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaA(u)
else return V.cE()},
eM:function(a){var u=this.a
if(a==null)C.a.h(u,V.cE())
else C.a.h(u,a)
this.aM()},
cU:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sc4:function(a){this.a=H.k(a,"$ib",[V.al],"$ab")}}
E.fB.prototype={}
E.ao.prototype={
dh:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();){t=u.d
if(t.f==null)t.dh()}},
sac:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().N(0,s.geE())
u=s.c
if(u!=null)u.gv().h(0,s.geE())
t=new D.K("shape",r,s.c,[F.e5])
t.b=!0
s.an(t)}},
sbc:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().N(0,s.geG())
u=s.f
s.f=a
if(a!=null)a.gv().h(0,s.geG())
s.dh()
t=new D.K("technique",u,s.f,[O.bL])
t.b=!0
s.an(t)}},
saX:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gv().N(0,s.geC())
if(a!=null)a.gv().h(0,s.geC())
s.r=a
t=new D.K("mover",u,a,[U.ad])
t.b=!0
s.an(t)}},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aq(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.al])
t.b=!0
s.an(t)}r=s.f
if(r!=null)r.ap(0,b)
for(r=s.y.a,r=new J.au(r,r.length,[H.t(r,0)]);r.E();)r.d.ap(0,b)},
aY:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga4(s))
else C.a.h(s.a,r.t(0,s.ga4(s)))
s.aM()
a.eN(t.f)
s=a.dy
u=(s&&C.a).gaA(s)
if(u!=null&&t.d!=null)u.k6(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.t(s,0)]);s.E();)s.d.aY(a)
a.eL()
a.dx.cU()},
gv:function(){var u=this.z
return u==null?this.z=D.Y():u},
an:function(a){var u=this.z
if(u!=null)u.H(a)},
a2:function(){return this.an(null)},
eF:function(a){H.f(a,"$iA")
this.e=null
this.an(a)},
jQ:function(){return this.eF(null)},
eH:function(a){this.an(H.f(a,"$iA"))},
jR:function(){return this.eH(null)},
eD:function(a){this.an(H.f(a,"$iA"))},
jP:function(){return this.eD(null)},
eB:function(a){this.an(H.f(a,"$iA"))},
jM:function(){return this.eB(null)},
jL:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.geA(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
jO:function(a,b){var u,t
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.gV(b),t=this.geA();u.E();)u.gM(u).gv().N(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfm:function(a,b){this.y=H.k(b,"$ia5",[E.ao],"$aa5")},
$ibq:1}
E.i5.prototype={
fi:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cD()
t=[V.al]
u.sc4(H.d([],t))
u.b=null
u.gv().h(0,new E.i6(s))
s.cy=u
u=new O.cD()
u.sc4(H.d([],t))
u.b=null
u.gv().h(0,new E.i7(s))
s.db=u
u=new O.cD()
u.sc4(H.d([],t))
u.b=null
u.gv().h(0,new E.i8(s))
s.dx=u
s.siu(H.d([],[O.bL]))
u=s.dy;(u&&C.a).h(u,null)
s.siq(new H.aQ([P.e,A.cO]))},
gjZ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.t(0,u.ga4(u))
s=u}return s},
eN:function(a){var u=this.dy,t=a==null?(u&&C.a).gaA(u):a;(u&&C.a).h(u,t)},
eL:function(){var u=this.dy
if(u.length>1)u.pop()},
siu:function(a){this.dy=H.k(a,"$ib",[O.bL],"$ab")},
siq:function(a){this.fr=H.k(a,"$iH",[P.e,A.cO],"$aH")}}
E.i6.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:5}
E.i7.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i8.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:5}
E.ed.prototype={
da:function(a){H.f(a,"$iA")
this.eQ()},
d9:function(){return this.da(null)},
gjy:function(){var u,t=this,s=Date.now(),r=C.f.a6(P.lN(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dI:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.C(r)
u=C.e.cJ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.e.cJ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m9(C.t,s.gk8())}},
eQ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iG(this),{func:1,ret:-1,args:[P.ac]})
C.I.fX(u)
C.I.i9(u,W.mE(t,P.ac))}},
k5:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dI()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lN(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aM()
r=s.db
C.a.sl(r.a,0)
r.aM()
r=s.dx
C.a.sl(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aY(p.e)}s=p.z
if(s!=null)s.H(null)}catch(q){u=H.ak(q)
t=H.cj(q)
P.ly("Error: "+H.l(u))
P.ly("Stack: "+H.l(t))
throw H.c(u)}}}
E.iG.prototype={
$1:function(a){var u
H.pj(a)
u=this.a
if(u.ch){u.ch=!1
u.k5()}},
$S:53}
Z.ep.prototype={$ipr:1}
Z.dw.prototype={
cq:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jo.prototype={$ips:1}
Z.dx.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cq:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cq(a)},
ki:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aY:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sh3:function(a){this.b=H.k(a,"$ib",[Z.bG],"$ab")},
$ipB:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.be.prototype={
gd6:function(a){var u=this.a,t=(u&$.bw().a)!==0?3:0
if((u&$.bv().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=2
if((u&$.by().a)!==0)t+=3
if((u&$.dp().a)!==0)t+=3
if((u&$.dq().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
jc:function(a){var u,t=$.bw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.nc()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bw().a)!==0)C.a.h(u,"Pos")
if((t&$.bv().a)!==0)C.a.h(u,"Norm")
if((t&$.bu().a)!==0)C.a.h(u,"Binm")
if((t&$.bx().a)!==0)C.a.h(u,"Txt2D")
if((t&$.by().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dp().a)!==0)C.a.h(u,"Clr3")
if((t&$.dq().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fE.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
H:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.O(P.lS(u,!0,{func:1,ret:-1,args:[D.A]}),new D.h_(q))
u=r.b
if(u!=null){r.saR(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.O(u,new D.h0(q))}return!0},
jq:function(){return this.H(null)},
ai:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h_.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h0.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.A.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dy.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dM.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hj.prototype={
jW:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jS:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
si2:function(a){this.d=H.k(a,"$im5",[P.p],"$am5")}}
X.dQ.prototype={}
X.hr.prototype={
b0:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaV()
r=new X.bp(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cT:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f6()
if(typeof u!=="number")return u.bP()
this.r=(u&~t)>>>0
return!1},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.b0(a,b))
return!0},
jX:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaV()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cG(new V.Z(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
hE:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dQ(c,r.a.gaV(),b)
s.b=!0
t.H(s)
r.y=new P.ay(u,!1)
r.x=V.bK()}}
X.aA.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bp.prototype={}
X.hL.prototype={
c1:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaV(),r=new X.bp(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cT:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.c1(a,b,!0))
return!0},
ba:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f6()
if(typeof t!=="number")return t.bP()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.c1(a,b,!0))
return!0},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.c1(a,b,!1))
return!0},
jY:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaV()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cG(new V.Z(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
ge0:function(){var u=this.b
return u==null?this.b=D.Y():u},
gbN:function(){var u=this.c
return u==null?this.c=D.Y():u},
gey:function(){var u=this.d
return u==null?this.d=D.Y():u}}
X.cG.prototype={}
X.i0.prototype={}
X.ef.prototype={}
X.iK.prototype={
b0:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gaV()
r=new X.ef(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jV:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.H(this.b0(a,!0))
return!0},
jT:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.H(this.b0(a,!0))
return!0},
jU:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.H(this.b0(a,!1))
return!0}}
X.ek.prototype={
gaV:function(){var u=this.a,t=C.m.gdZ(u).c
t.toString
u=C.m.gdZ(u).d
u.toString
return V.m3(0,0,t,u)},
dq:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dM(u,new X.aA(t,a.altKey,a.shiftKey))},
aS:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
cm:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aF:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.aa(s-q,r-u)},
b1:function(a){return new V.Z(a.movementX,a.movementY)},
cf:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.e.ao(r.pageX)
C.e.ao(r.pageY)
p=o.left
C.e.ao(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.ao(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dy(u,new X.aA(t,a.altKey,a.shiftKey))},
c5:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hy:function(a){this.f=!0},
hm:function(a){this.f=!1},
hs:function(a){H.f(a,"$iaf")
if(H.D(this.f)&&this.c5(a))a.preventDefault()},
hC:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.dq(a)
this.b.jW(u)},
hA:function(a){var u
H.f(a,"$ib4")
if(!H.D(this.f))return
u=this.dq(a)
this.b.jS(u)},
hG:function(a){var u,t,s,r,q=this
H.f(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aS(a)
if(H.D(q.x)){t=q.aC(a)
s=q.b1(a)
if(q.d.cT(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aC(a)
r=q.aF(a)
if(q.c.cT(t,r))a.preventDefault()},
hK:function(a){var u,t,s,r=this
H.f(a,"$iaf")
r.aS(a)
u=r.aC(a)
if(H.D(r.x)){t=r.b1(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aF(a)
if(r.c.ba(u,s))a.preventDefault()},
hw:function(a){var u,t,s,r=this
H.f(a,"$iaf")
if(!r.c5(a)){r.aS(a)
u=r.aC(a)
if(H.D(r.x)){t=r.b1(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aF(a)
if(r.c.ba(u,s))a.preventDefault()}},
hI:function(a){var u,t,s,r=this
H.f(a,"$iaf")
r.aS(a)
u=r.aC(a)
if(H.D(r.x)){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aF(a)
if(r.c.b9(u,s))a.preventDefault()},
hu:function(a){var u,t,s,r=this
H.f(a,"$iaf")
if(!r.c5(a)){r.aS(a)
u=r.aC(a)
if(H.D(r.x)){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aF(a)
if(r.c.b9(u,s))a.preventDefault()}},
hM:function(a){var u,t,s=this
H.f(a,"$ibf")
s.aS(a)
u=new V.Z((a&&C.H).gjn(a),C.H.gjo(a)).B(0,180)
if(H.D(s.x)){if(s.d.jX(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aF(a)
if(s.c.jY(u,t))a.preventDefault()},
hO:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aF(s.y)
s.d.hE(u,t,r)}},
i0:function(a){var u,t=this
H.f(a,"$iaY")
t.a.focus()
t.f=!0
t.cm(a)
u=t.cf(a)
if(t.e.jV(u))a.preventDefault()},
hX:function(a){var u
H.f(a,"$iaY")
this.cm(a)
u=this.cf(a)
if(this.e.jT(u))a.preventDefault()},
hZ:function(a){var u
H.f(a,"$iaY")
this.cm(a)
u=this.cf(a)
if(this.e.jU(u))a.preventDefault()},
sfY:function(a){this.z=H.k(a,"$ib",[[P.cQ,P.S]],"$ab")}}
D.dC.prototype={$ia8:1,$ibq:1}
D.a8.prototype={$ibq:1}
D.dN.prototype={
gv:function(){var u=this.Q
return u==null?this.Q=D.Y():u},
aa:function(a){var u=this.Q
if(u!=null)u.H(a)},
dD:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.H(a)},
hD:function(){return this.dD(null)},
hR:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.fo(s))return!1}return!0},
hg:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdC(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=H.f(b[q],"$ia8")
if(p instanceof D.bM)C.a.h(this.y,p)
o=p.x
if(o==null){o=new D.bY()
o.sak(null)
o.saR(null)
o.c=null
o.d=0
p.x=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c0([n])
n.b=!0
this.aa(n)},
hV:function(a,b){var u,t,s,r=D.a8
H.k(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdC();u.E();){s=u.gM(u)
C.a.N(this.e,s)
s.gv().N(0,t)}r=new D.c1([r])
r.b=!0
this.aa(r)},
fo:function(a){var u=C.a.X(this.y,a)
return u},
sfp:function(a){this.e=H.k(a,"$ib",[D.dC],"$ab")},
sfs:function(a){this.f=H.k(a,"$ib",[D.e_],"$ab")},
sft:function(a){this.r=H.k(a,"$ib",[D.e6],"$ab")},
sfu:function(a){this.x=H.k(a,"$ib",[D.eb],"$ab")},
sfv:function(a){this.y=H.k(a,"$ib",[D.bM],"$ab")},
sfw:function(a){this.z=H.k(a,"$ib",[D.ec],"$ab")},
$ai:function(){return[D.a8]},
$aa5:function(){return[D.a8]}}
D.e_.prototype={$ia8:1,$ibq:1}
D.e6.prototype={$ia8:1,$ibq:1}
D.eb.prototype={$ia8:1,$ibq:1}
D.bM.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.Y():u},
aa:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.H(a)},
fq:function(){return this.aa(null)},
$ia8:1,
$ibq:1}
D.ec.prototype={$ia8:1,$ibq:1}
V.a6.prototype={
q:function(a,b){var u=C.e.q(this.a,b.gcX()),t=C.e.q(this.b,b.gbQ()),s=C.e.q(this.c,b.gcs())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u=C.e.u(this.a,b.gcX()),t=C.e.u(this.b,b.gbQ()),s=C.e.u(this.c,b.gcs())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.aN.prototype={
q:function(a,b){var u=this,t=C.e.q(u.a,b.gcX()),s=C.e.q(u.b,b.gbQ()),r=C.e.q(u.c,b.gcs()),q=C.e.q(u.d,b.gja(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aN(t,s,r,q)},
u:function(a,b){var u=this,t=C.e.u(u.a,b.gcX()),s=C.e.u(u.b,b.gbQ()),r=C.e.u(u.c,b.gcs()),q=C.e.u(u.d,b.gja(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aN(t,s,r,q)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fZ.prototype={}
V.dT.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dT))return!1
u=b.a
t=$.L().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cg(H.d([q.a,q.d,q.r],p),3,0),n=V.cg(H.d([q.b,q.e,q.x],p),3,0),m=V.cg(H.d([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
ew:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.cE()
u=1/b1
t=-n
s=-a0
return V.b7((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b7(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
eY:function(a){var u=this
return new V.M(C.e.t(u.a,a.gbr(a))+C.e.t(u.b,a.gbs(a))+C.e.t(u.c,a.ge1()),C.e.t(u.e,a.gbr(a))+C.e.t(u.f,a.gbs(a))+C.e.t(u.r,a.ge1()),C.e.t(u.y,a.gbr(a))+C.e.t(u.z,a.gbs(a))+C.e.t(u.Q,a.ge1()))},
be:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.R()},
I:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cg(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cg(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cg(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cg(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.a4.prototype={
q:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.b9.prototype={
q:function(a,b){var u=this
return new V.b9(C.e.q(u.a,b.gkk(b)),C.e.q(u.b,b.gkl(b)),C.e.q(u.c,b.gkm(b)),C.e.q(u.d,b.gkj(b)))},
u:function(a,b){var u=this
return new V.b9(C.e.u(u.a,b.gkk(b)),C.e.u(u.b,b.gkl(b)),C.e.u(u.c,b.gkm(b)),C.e.u(u.d,b.gkj(b)))},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.e2.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e2))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.Z.prototype={
cN:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gbr(b)
if(typeof t!=="number")return t.q()
s=C.e.q(t,s)
t=this.b
u=b.gbs(b)
if(typeof t!=="number")return t.q()
return new V.Z(s,C.e.q(t,u))},
u:function(a,b){var u,t=this.a,s=b.gbr(b)
if(typeof t!=="number")return t.u()
s=C.e.u(t,s)
t=this.b
u=b.gbs(b)
if(typeof t!=="number")return t.u()
return new V.Z(s,C.e.u(t,u))},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.Z(t*b,u*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mg
return u==null?$.mg=new V.Z(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.Z(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.L()
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
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.M.prototype={
cN:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cO:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aG:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.M(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
B:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d4()
return new V.M(this.a/b,this.b/b,this.c/b)},
ex:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.fF.prototype={
bY:function(a){var u=V.kT(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.Y():u},
J:function(a){var u=this.y
if(u!=null)u.H(a)},
sd2:function(a,b){},
scQ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bY(u)}s=new D.K("maximumLocation",s,t.b,[P.q])
s.b=!0
t.J(s)}},
scS:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bY(u)}s=new D.K("minimumLocation",s,t.c,[P.q])
s.b=!0
t.J(s)}},
sa1:function(a,b){var u,t=this
b=t.bY(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.K("location",u,b,[P.q])
u.b=!0
t.J(u)}},
scR:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.q])
r.b=!0
s.J(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.K("velocity",t,a,[P.q])
t.b=!0
u.J(t)}},
scB:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.K("dampening",u,a,[P.q])
u.b=!0
this.J(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dA.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.Y():u},
aq:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cy.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.Y():u},
J:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.H(a)},
a9:function(){return this.J(null)},
fA:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaQ(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.J(n)},
hT:function(a,b){var u,t,s=U.ad
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaQ();u.E();)u.gM(u).gv().N(0,t)
s=new D.c1([s])
s.b=!0
this.J(s)},
aq:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Y()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.t(r,0)]),u=null;r.E();){q=r.d
if(q!=null){t=q.aq(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.cE():u
r=s.e
if(r!=null)r.ai(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$aa5:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e3.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.Y():u},
J:function(a){var u=this.y
if(u!=null)u.H(a)},
sf2:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.K("yaw",u,a,[P.q])
u.b=!0
this.J(u)}},
seK:function(a,b){var u
b=V.kT(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.K("pitch",u,b,[P.q])
u.b=!0
this.J(u)}},
seR:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.K("roll",u,a,[P.q])
u.b=!0
this.J(u)}},
aq:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sf2(u.a+u.d*b.y)
u.seK(0,u.b+u.e*b.y)
u.seR(u.c+u.f*b.y)
u.x=V.lW(u.c).t(0,V.lV(u.b)).t(0,V.lU(u.a))
t=u.y
if(t!=null)t.ai(0)}return u.x},
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e3))return!1
u=r.a
t=b.a
s=$.L().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+"], ["+V.R(u.d,3,0)+", "+V.R(u.e,3,0)+", "+V.R(u.f,3,0)+"]"}}
U.el.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.Y():u},
J:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.H(a)},
a9:function(){return this.J(null)},
b4:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge0().h(0,u.gc6())
u.a.c.gey().h(0,u.gc8())
u.a.c.gbN().h(0,u.gca())
return!0},
c7:function(a){var u=this
H.f(a,"$iA")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c9:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibp")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.u(0,a.y)
u=new V.Z(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.u(0,a.y)
u=new V.Z(t.a,t.b).t(0,2).B(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.Z(s.a,s.b).t(0,2).B(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.u(0,a.z)
n.Q=new V.Z(t.a,t.b).t(0,2).B(0,u.gab())}n.a9()},
cb:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sW(t*10*s)
r.a9()}},
aq:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.Y()
if(s<r){t.ch=r
u=b.y
t.b.ap(0,u)
t.cx=V.lW(t.b.d)}return t.cx},
$iad:1}
U.em.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.Y():u},
J:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.H(a)},
a9:function(){return this.J(null)},
b4:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge0().h(0,s.gc6())
s.a.c.gey().h(0,s.gc8())
s.a.c.gbN().h(0,s.gca())
u=s.a.d
t=u.f
u=t==null?u.f=D.Y():t
u.h(0,s.gh8())
u=s.a.d
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.gha())
u=s.a.e
t=u.b
u=t==null?u.b=D.Y():t
u.h(0,s.giB())
u=s.a.e
t=u.d
u=t==null?u.d=D.Y():t
u.h(0,s.giz())
u=s.a.e
t=u.c
u=t==null?u.c=D.Y():t
u.h(0,s.gix())
return!0},
au:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.Z(u,t)},
c7:function(a){var u=this
a=H.m(H.f(a,"$iA"),"$ibp")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c9:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibp")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.Z(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.au(new V.Z(t.a,t.b).t(0,2).B(0,u.gab()))
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
r=n.au(new V.Z(s.a,s.b).t(0,2).B(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.au(new V.Z(t.a,t.b).t(0,2).B(0,u.gab()))}n.a9()},
cb:function(a){var u,t,s,r=this
H.f(a,"$iA")
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
r.a9()}},
h9:function(a){var u=this
if(H.m(H.f(a,"$iA"),"$idQ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hb:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ibp")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.au(new V.Z(s.a,s.b).t(0,2).B(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.au(new V.Z(t.a,t.b).t(0,2).B(0,u.gab()))
n.a9()},
iC:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iA:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iA"),"$ief")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.u(0,a.y)
u=new V.Z(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.au(new V.Z(t.a,t.b).t(0,2).B(0,u.gab()))
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
r=n.au(new V.Z(s.a,s.b).t(0,2).B(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.u(0,a.z)
n.dx=n.au(new V.Z(t.a,t.b).t(0,2).B(0,u.gab()))}n.a9()},
iy:function(a){var u,t,s,r=this
H.f(a,"$iA")
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
r.a9()}},
aq:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.Y()
if(s<r){t.dy=r
u=b.y
t.c.ap(0,u)
t.b.ap(0,u)
t.fr=V.lU(t.b.d).t(0,V.lV(t.c.d))}return t.fr},
$iad:1}
U.en.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.Y():u},
J:function(a){var u=this.r
if(u!=null)u.H(a)},
b4:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Y():t
t=r.ghc()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Y():s).h(0,t)
return!0},
hd:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.W(q.b,q.a.b.c))return
H.m(a,"$icG")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.q])
u.b=!0
q.J(u)}},
aq:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.l9(u,u,u,1)}return t.f},
$iad:1}
M.dF.prototype={
aB:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.H(a)},
fB:function(){return this.aB(null)},
ho:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gat(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.aB(n)},
hq:function(a,b){var u,t,s=E.ao
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gat();u.E();)u.gM(u).gv().N(0,t)
s=new D.c1([s])
s.b=!0
this.aB(s)},
sbc:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().N(0,t.gat())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gat())
s=new D.K("technique",u,t.d,[O.bL])
s.b=!0
t.aB(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.Y():u},
aY:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eN(a1.d)
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
if(typeof s!=="number")return H.C(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.C(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a2.c=p
q=C.e.ao(q.d*r)
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
i=V.b7(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eM(i)
t=$.m_
if(t==null){t=V.nS()
q=$.mj
if(q==null)q=$.mj=new V.M(0,1,0)
p=$.mh
if(p==null)p=$.mh=new V.M(0,0,-1)
h=p.B(0,Math.sqrt(p.F(p)))
q=q.aG(h)
g=q.B(0,Math.sqrt(q.F(q)))
f=h.aG(g)
e=new V.M(t.a,t.b,t.c)
d=g.U(0).F(e)
c=f.U(0).F(e)
b=h.U(0).F(e)
t=V.b7(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m_=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aq(0,a2,u)
if(a0!=null)a=a0.t(0,a)}a2.db.eM(a)
u=a1.d
if(u!=null)u.ap(0,a2)
for(u=a1.e.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();)u.d.ap(0,a2)
for(u=a1.e.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();)u.d.aY(a2)
a1.b.toString
a2.cy.cU()
a2.db.cU()
a1.c.toString
a2.eL()},
sfP:function(a,b){this.e=H.k(b,"$ia5",[E.ao],"$aa5")},
$ipy:1}
A.du.prototype={}
A.fu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jr:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hy.prototype={
fh:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ah("")
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
d2.iK(u)
d2.iR(u)
d2.iL(u)
d2.iZ(u)
d2.j_(u)
d2.iT(u)
d2.j3(u)
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
u=new P.ah("")
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
s.iO(u)
s.iJ(u)
s.iM(u)
s.iP(u)
s.iX(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iV(u)
s.iW(u)}s.iS(u)
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
s.iN(u)
s.iU(u)
s.iY(u)
s.j0(u)
s.j1(u)
s.j2(u)
s.iQ(u)}m=u.a+="// === Main ===\n"
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
a7.e=a7.dr(n,35633)
a7.f=a7.dr(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.D(H.lp(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.u(P.w("Failed to link shader: "+H.l(h)))}a7.im()
a7.ip()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.m(a7.y.p(0,"invViewMat"),"$iaC")
if(t)a7.dy=H.m(a7.y.p(0,"objMat"),"$iaC")
if(r)a7.fr=H.m(a7.y.p(0,"viewObjMat"),"$iaC")
a7.fy=H.m(a7.y.p(0,"projViewObjMat"),"$iaC")
if(d2.x2)a7.k1=H.m(a7.y.p(0,"txt2DMat"),"$icY")
if(d2.y1)a7.k2=H.m(a7.y.p(0,"txtCubeMat"),"$iaC")
if(d2.y2)a7.k3=H.m(a7.y.p(0,"colorMat"),"$iaC")
a7.sfL(H.d([],[A.aC]))
t=d2.az
if(t>0){a7.k4=H.f(a7.y.p(0,"bendMatCount"),"$iQ")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.u(P.w(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaC"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.rx=H.m(a7.y.p(0,b0),"$iap")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break
case C.h:a7.ry=H.m(a7.y.p(0,b0),"$iaq")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.y1=H.m(a7.y.p(0,b2),"$iap")
a7.az=H.m(a7.y.p(0,b3),"$iQ")
break
case C.h:a7.y2=H.m(a7.y.p(0,b2),"$iaq")
a7.az=H.m(a7.y.p(0,b3),"$iQ")
break}}t=d2.c
if(t!==C.d){a7.am=H.m(a7.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.bt=H.m(a7.y.p(0,b4),"$iap")
a7.bu=H.m(a7.y.p(0,b5),"$iQ")
break
case C.h:a7.e2=H.m(a7.y.p(0,b4),"$iaq")
a7.bu=H.m(a7.y.p(0,b5),"$iQ")
break}}t=d2.d
if(t!==C.d){a7.bv=H.m(a7.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.e3=H.m(a7.y.p(0,b6),"$iap")
a7.bw=H.m(a7.y.p(0,b7),"$iQ")
break
case C.h:a7.e4=H.m(a7.y.p(0,b6),"$iaq")
a7.bw=H.m(a7.y.p(0,b7),"$iQ")
break}}t=d2.e
if(t!==C.d){a7.bz=H.m(a7.y.p(0,"shininess"),"$ia3")
a7.bx=H.m(a7.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.e5=H.m(a7.y.p(0,b8),"$iap")
a7.by=H.m(a7.y.p(0,b9),"$iQ")
break
case C.h:a7.e6=H.m(a7.y.p(0,b8),"$iaq")
a7.by=H.m(a7.y.p(0,b9),"$iQ")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.i:a7.e7=H.m(a7.y.p(0,"bumpTxt"),"$iap")
a7.bA=H.m(a7.y.p(0,c0),"$iQ")
break
case C.h:a7.e8=H.m(a7.y.p(0,"bumpTxt"),"$iaq")
a7.bA=H.m(a7.y.p(0,c0),"$iQ")
break}if(d2.dy){a7.e9=H.m(a7.y.p(0,"envSampler"),"$iaq")
a7.ea=H.m(a7.y.p(0,"nullEnvTxt"),"$iQ")
t=d2.r
if(t!==C.d){a7.bB=H.m(a7.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.eb=H.m(a7.y.p(0,c1),"$iap")
a7.bC=H.m(a7.y.p(0,c2),"$iQ")
break
case C.h:a7.ec=H.m(a7.y.p(0,c1),"$iaq")
a7.bC=H.m(a7.y.p(0,c2),"$iQ")
break}}t=d2.x
if(t!==C.d){a7.bD=H.m(a7.y.p(0,"refraction"),"$ia3")
a7.bE=H.m(a7.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a7.ed=H.m(a7.y.p(0,c3),"$iap")
a7.bF=H.m(a7.y.p(0,c4),"$iQ")
break
case C.h:a7.ee=H.m(a7.y.p(0,c3),"$iaq")
a7.bF=H.m(a7.y.p(0,c4),"$iQ")
break}}}t=d2.y
if(t!==C.d){a7.bG=H.m(a7.y.p(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.i:a7.ef=H.m(a7.y.p(0,c5),"$iap")
a7.bH=H.m(a7.y.p(0,c6),"$iQ")
break
case C.h:a7.eg=H.m(a7.y.p(0,c5),"$iaq")
a7.bH=H.m(a7.y.p(0,c6),"$iQ")
break}}a7.sfV(H.d([],[A.cX]))
a7.si1(H.d([],[A.cZ]))
a7.sis(H.d([],[A.d_]))
a7.siE(H.d([],[A.d0]))
a7.siF(H.d([],[A.d1]))
a7.siG(H.d([],[A.d2]))
if(d2.k2){t=d2.z
if(t>0){a7.eh=H.f(a7.y.p(0,"dirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.cC;(s&&C.a).h(s,new A.cX(f,e))}}t=d2.Q
if(t>0){a7.ei=H.f(a7.y.p(0,"pntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$ia3")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.cD;(s&&C.a).h(s,new A.cZ(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.ej=H.f(a7.y.p(0,"spotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.cE;(s&&C.a).h(s,new A.d_(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.ek=H.f(a7.y.p(0,"txtDirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iap")
s=a7.cF;(s&&C.a).h(s,new A.d0(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.el=H.f(a7.y.p(0,"txtPntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$icY")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iQ")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cG;(s&&C.a).h(s,new A.d1(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.em=H.f(a7.y.p(0,"txtSpotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iP")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.u(P.w(a8+r+a9))
H.m(a3,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.u(P.w(a8+r+a9))
H.m(a4,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.u(P.w(a8+r+a9))
H.m(a5,"$ia3")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.u(P.w(a8+r+a9))
H.m(a6,"$iap")
s=a7.cH;(s&&C.a).h(s,new A.d2(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
al:function(a,b,c){C.c.a3(b.a,b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)C.c.a3(b.a,b.d,1)
else{a.f8(c)
C.c.a3(b.a,b.d,0)}},
sfL:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sfV:function(a){this.cC=H.k(a,"$ib",[A.cX],"$ab")},
si1:function(a){this.cD=H.k(a,"$ib",[A.cZ],"$ab")},
sis:function(a){this.cE=H.k(a,"$ib",[A.d_],"$ab")},
siE:function(a){this.cF=H.k(a,"$ib",[A.d0],"$ab")},
siF:function(a){this.cG=H.k(a,"$ib",[A.d1],"$ab")},
siG:function(a){this.cH=H.k(a,"$ib",[A.d2],"$ab")}}
A.hB.prototype={
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
u=a.a+="uniform BendingValue bendValues["+r.az+"];\n"
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
aD:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.as(c,1))+"Txt;\n")
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iO:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aD(a,s,"emission")
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
iJ:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aD(a,s,"ambient")
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
iM:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aD(a,s,"diffuse")
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
iP:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aD(a,s,"invDiffuse")
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
iX:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aD(a,s,"specular")
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
iS:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iV:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aD(a,s,"reflect")
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
iW:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aD(a,s,"refract")
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
i:function(a){return this.am}}
A.cX.prototype={}
A.d0.prototype={}
A.cZ.prototype={}
A.d1.prototype={}
A.d_.prototype={}
A.d2.prototype={}
A.cO.prototype={
fk:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dr:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lp(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
im:function(){var u,t,s,r=this,q=H.d([],[A.du]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.du(p,t.name,s))}r.x=new A.fu(q)},
ip:function(){var u,t,s,r=this,q=H.d([],[A.eg]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jm(t.type,t.size,t.name,s))}r.y=new A.iY(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.ld(u,this.r,b,a,c)},
fS:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.ld(u,this.r,b,a,c)},
fT:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.ld(u,this.r,b,a,c)},
bn:function(a,b){return new P.ey(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jm:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.iT(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.iW(u.a,c,d)
case 35667:return new A.iU(u.a,c,d)
case 35668:return new A.iV(u.a,c,d)
case 35669:return new A.iX(u.a,c,d)
case 35674:return new A.iZ(u.a,c,d)
case 35675:return new A.cY(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fS(b,c,d)
case 35680:return u.fT(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.iY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siH:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cY.prototype={
ar:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.q],"$ab")))
C.c.eZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aC.prototype={
ar:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.q],"$ab")))
C.c.f_(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
f8:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.ki.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cO(s.b,b).cO(s.d.cO(s.c,b),c)
a.sa1(0,new V.a4(r.a,r.b,r.c))
a.seU(r.B(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
a.sdW(new V.b9(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:8}
F.ks.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:32}
F.ku.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.C(p)
s=-s*p
u=r*p
a.sa1(0,new V.a4(s,u,q))
u=new V.M(s,u,q)
a.seU(u.B(0,Math.sqrt(u.F(u))))
a.sdW(new V.b9(1-c,2+c,-1,-1))},
$S:8}
F.kv.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kw.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kP.prototype={
$2:function(a,b){return 0},
$S:32}
F.kQ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.C(s)
u=a.f
t=new V.M(u.a,u.b,u.c)
s=t.B(0,Math.sqrt(t.F(t))).t(0,this.b+s)
a.sa1(0,new V.a4(s.a,s.b,s.c))},
$S:8}
F.kR.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:28}
F.kD.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.kt.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lD(n.$1(o),m)
m=J.ni(J.lD(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.M(m.a,m.b,m.c)
u=m.B(0,Math.sqrt(m.F(m)))
n=$.mi
if(n==null){n=new V.M(1,0,0)
$.mi=n
t=n}else t=n
if(!J.W(u,t)){n=$.mk
if(n==null){n=new V.M(0,0,1)
$.mk=n
t=n}else t=n}n=u.aG(t)
s=n.B(0,Math.sqrt(n.F(n)))
n=s.aG(u)
t=n.B(0,Math.sqrt(n.F(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
a.sa1(0,J.nh(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a9.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.N(u.a.a.d.b,u)
u.a.a.a2()}u.ci()
u.cj()
u.i6()},
cn:function(a){this.a=a
C.a.h(a.d.b,this)},
co:function(a){this.b=a
C.a.h(a.d.c,this)},
il:function(a){this.c=a
C.a.h(a.d.d,this)},
ci:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cj:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
i6:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
fK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d4()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ex())return
return s.B(0,Math.sqrt(s.F(s)))},
fO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.F(r)))
r=t.u(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aG(r.B(0,Math.sqrt(r.F(r))))
return r.B(0,Math.sqrt(r.F(r)))},
cv:function(){var u,t=this
if(t.d!=null)return!0
u=t.fK()
if(u==null){u=t.fO()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
fJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d4()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ex())return
return s.B(0,Math.sqrt(s.F(s)))},
fN:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.u(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.u(0,g).t(0,p).q(0,g).u(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.F(l)))
l=o.aG(q)
l=l.B(0,Math.sqrt(l.F(l))).aG(o)
q=l.B(0,Math.sqrt(l.F(l)))}return q},
ct:function(){var u,t=this
if(t.e!=null)return!0
u=t.fJ()
if(u==null){u=t.fN()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
gjh:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gb6())return a+"disposed"
u=a+C.b.ah(J.at(s.a.e),0)+", "+C.b.ah(J.at(s.b.e),0)+", "+C.b.ah(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.h1.prototype={}
F.im.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bo.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.N(u.a.a.c.b,u)
u.a.a.a2()}u.ci()
u.cj()},
cn:function(a){this.a=a
C.a.h(a.c.b,this)},
co:function(a){this.b=a
C.a.h(a.c.c,this)},
ci:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cj:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gb6())return a+"disposed"
return a+C.b.ah(J.at(this.a.e),0)+", "+C.b.ah(J.at(this.b.e),0)},
R:function(){return this.I("")}}
F.hl.prototype={}
F.iR.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bJ.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ah(J.at(u.e),0)},
R:function(){return this.I("")}}
F.e5.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.Y():u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.C()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.jj())}h.a.C()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.u(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.H(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nK(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cv(l,k,i)}g=h.e
if(g!=null)g.ai(0)},
ax:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ax()||!1
if(!t.a.ax())u=!1
s=t.e
if(s!=null)s.ai(0)
return u},
jI:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.gjv(u)
C.a.eO(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){C.a.h(s,q)
C.a.eO(u,r)}}if(s.length>1)b.b8(s)}}p.a.C()
p.c.cY()
p.d.cY()
p.b.k0()
p.c.cZ(new F.iR())
p.d.cZ(new F.im())
o=p.e
if(o!=null)o.ai(0)},
cp:function(){this.jI(new F.jh(),new F.hT())},
cI:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cI()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.h(o,u)
t=o[u]
o=t.r
if(o!=null)t.sez(new V.M(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.M(s,r,o).B(0,Math.sqrt(s*s+r*r+o*o))
if(!J.W(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}}o=p.e
if(o!=null)o.ai(0)},
jf:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bw()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bv().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.dp().a)!==0)++s
if((t&$.dq().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gd6(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dw])
for(n=0,m=0;m<s;++m){l=a3.jc(m)
k=l.gd6(l)
C.a.n(o,m,new Z.dw(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jG(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cb(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dx(new Z.ep(a0,f),o,a3)
e.sh3(H.d([],[Z.bG]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)}b=Z.lg(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.C()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.C()
C.a.h(d,c.e)}b=Z.lg(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.p
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
C.a.h(d,c.e)}b=Z.lg(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.I(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.I(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.I(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.I(t))}return C.a.m(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.H(null)},
$ipz:1}
F.ie.prototype={
j6:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cv(s,p,o))}}return u},
j7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ai],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.cv(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cv(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cv(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cZ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjh(s)
if(t)s.b5()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cv())s=!1
return s},
cu:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].ct())s=!1
return s},
cI:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.M(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.M(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.H(null)}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
R:function(){return this.I("")},
sfZ:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ig.prototype={
gl:function(a){return this.b.length},
cZ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b7(0,p,n)){p.b5()
break}}}}},
cY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.m(s,"\n")},
R:function(){return this.I("")},
sh4:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")}}
F.ih.prototype={
gl:function(a){return this.b.length},
k0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
R:function(){return this.I("")},
sce:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
F.ai.prototype={
cA:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eo(u.cx,r,o,t,s,q,p,a,n)},
jj:function(){return this.cA(null)},
sa1:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sez:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.F(a)))
if(!J.W(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
seU:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdW:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
jG:function(a){var u,t,s=this
if(a.w(0,$.bw())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bv())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bu())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bx())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.by())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dp())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dq())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.cm()))return H.d([s.ch],[P.q])
else if(a.w(0,$.bt())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cv:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.O(0,new F.jm(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
ct:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d4()
t.d.O(0,new F.jl(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.d([],[P.e])
C.a.h(q,C.b.ah(J.at(s.e),0))
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
C.a.h(q,V.R(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.jm.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jl.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jc.prototype={
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
u.a2()
return!0},
j8:function(a,b,c,d,e,f){var u=F.eo(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cv()
return!0},
cu:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].ct()
return!0},
jg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.C()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
R:function(){return this.I("")},
siI:function(a){this.c=H.k(a,"$ib",[F.ai],"$ab")}}
F.jd.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.O(u.b,b)
C.a.O(u.c,new F.je(u,b))
C.a.O(u.d,new F.jf(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sh_:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sh0:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sh1:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.je.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:6}
F.jf.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:6}
F.jg.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sh5:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")},
sh6:function(a){this.c=H.k(a,"$ib",[F.bo],"$ab")}}
F.ji.prototype={}
F.jh.prototype={
b7:function(a,b,c){return J.W(b.f,c.f)}}
F.jj.prototype={}
F.hT.prototype={
b8:function(a){var u,t,s,r
H.k(a,"$ib",[F.ai],"$ab")
u=V.d4()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.F(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.F)(a),++s)a[s].sez(u)
return}}
F.jk.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sce:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
O.dS.prototype={
gv:function(){var u=this.dy
return u==null?this.dy=D.Y():u},
a0:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.H(a)},
bW:function(){return this.a0(null)},
dH:function(a){H.f(a,"$iA")
this.a=null
this.a0(a)},
ib:function(){return this.dH(null)},
hi:function(a,b){var u=V.al
H.k(b,"$ii",[u],"$ai")
u=new D.c0([u])
u.b=!0
this.a0(u)},
hk:function(a,b){var u=V.al
H.k(b,"$ii",[u],"$ai")
u=new D.c1([u])
u.b=!0
this.a0(u)},
dm:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a6(a1.e.length+3,4)*4,a3=C.f.a6(a1.f.length+3,4)*4,a4=C.f.a6(a1.r.length+3,4)*4,a5=C.f.a6(a1.x.length+3,4)*4,a6=C.f.a6(a1.y.length+3,4)*4,a7=C.f.a6(a1.z.length+3,4)*4,a8=C.f.a6(a0.e.a.length+3,4)*4
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
a=$.bw()
if(h){j=$.bv()
a=new Z.be(a.a|j.a)}if(g){j=$.bu()
a=new Z.be(a.a|j.a)}if(f){j=$.bx()
a=new Z.be(a.a|j.a)}if(e){j=$.by()
a=new Z.be(a.a|j.a)}if(c){j=$.bt()
a=new Z.be(a.a|j.a)}return new A.hB(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
Z:function(a,b){H.k(a,"$ib",[T.cT],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.au(u,u.length,[H.t(u,0)]);u.E();){t=u.d
t.toString
s=$.hE
t.a=s==null?$.hE=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aq(0,b,t)}},
k6:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.dm()
u=a5.fr.j(0,a4.am)
if(u==null){u=A.nQ(a4,a5.a)
t=u.b
if(t.length===0)H.u(P.w("May not cache a shader with no name."))
if(a5.fr.bo(0,t))H.u(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bt
a4=a6.e
if(!(a4 instanceof Z.dx))a4=a6.e=null
if(a4==null||!a4.d.w(0,r)){a4=s.r1
if(a4)a6.d.ax()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cu()
p.a.cu()
p=p.e
if(p!=null)p.ai(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.jg()
o=o.e
if(o!=null)o.ai(0)}m=a6.d.jf(new Z.jo(a5.a),r)
m.aW($.bw()).e=a3.a.Q.c
if(a4)m.aW($.bv()).e=a3.a.cx.c
if(q)m.aW($.bu()).e=a3.a.ch.c
if(s.rx)m.aW($.bx()).e=a3.a.cy.c
if(p)m.aW($.by()).e=a3.a.db.c
if(s.x1)m.aW($.bt()).e=a3.a.dx.c
a6.e=m}a4=T.cT
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.jr()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga4(o)
q=q.dy
q.toString
q.ar(o.aj(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga4(o)
n=a5.dx
n=a5.cx=o.t(0,n.ga4(n))
o=n}q=q.fr
q.toString
q.ar(o.aj(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjZ()
n=a5.dx
n=a5.ch=o.t(0,n.ga4(n))
o=n}q=q.fy
q.toString
q.ar(o.aj(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ar(C.n.aj(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ar(C.n.aj(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ar(C.n.aj(o,!0))}if(s.az>0){k=a3.e.a.length
q=a3.a.k4
C.c.a3(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.h(n,j)
n=n[j]
o.toString
H.f(n,"$ial")
o=o.r1
if(j>=o.length)return H.h(o,j)
o=o[j]
i=new Float32Array(H.cb(H.k(n.aj(0,!0),"$ib",q,"$ab")))
C.c.f_(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.Z(l,a3.f.d)
q=a3.a
o=a3.f.d
q.al(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.Z(l,a3.f.e)
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
case C.i:a3.Z(l,a3.r.d)
q=a3.a
o=a3.r.d
q.al(q.y1,q.az,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.Z(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ae(q.y2,q.az,o)
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
case C.i:a3.Z(l,a3.x.d)
q=a3.a
o=a3.x.d
q.al(q.bt,q.bu,o)
o=a3.a
q=a3.x.f
o=o.am
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.Z(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ae(q.e2,q.bu,o)
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
q=q.bv
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
break
case C.i:a3.Z(l,a3.y.d)
q=a3.a
o=a3.y.d
q.al(q.e3,q.bw,o)
o=a3.a
q=a3.y.f
o=o.bv
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break
case C.h:a3.Z(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ae(q.e4,q.bw,o)
o=a3.a
q=a3.y.f
o=o.bv
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bx
q.toString
n=o.a
h=o.b
o=o.c
C.c.A(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bz
C.c.T(o.a,o.d,h)
break
case C.i:a3.Z(l,a3.z.d)
q=a3.a
o=a3.z.d
q.al(q.e5,q.by,o)
o=a3.a
q=a3.z.f
o=o.bx
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bz
C.c.T(q.a,q.d,h)
break
case C.h:a3.Z(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ae(q.e6,q.by,o)
o=a3.a
q=a3.z.f
o=o.bx
o.toString
n=q.a
h=q.b
q=q.c
C.c.A(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bz
C.c.T(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.eh
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cC
if(f>=n.length)return H.h(n,f)
c=n[f]
n=g.eY(d.gbq(d))
h=n.a
b=n.b
a=n.c
a=n.B(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.A(b.a,b.d,h,n,a)
a=d.gay(d)
n=c.c
C.c.A(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.ei
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cD
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbb(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.be(d.gbb(d))
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gay(d)
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gdT()
h=c.e
C.c.T(h.a,h.d,n)
n=d.gdU()
h=c.f
C.c.T(h.a,h.d,n)
n=d.gdV()
h=c.r
C.c.T(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.ej
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cE
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gbb(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbq(d).ks()
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.be(d.gbb(d))
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gay(d)
h=c.e
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gkq()
h=c.f
C.c.T(h.a,h.d,n)
n=d.gkp()
h=c.r
C.c.T(h.a,h.d,n)
n=d.gdT()
h=c.x
C.c.T(h.a,h.d,n)
n=d.gdU()
h=c.y
C.c.T(h.a,h.d,n)
n=d.gdV()
h=c.z
C.c.T(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.ek
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
h=a3.a.cF
if(f>=h.length)return H.h(h,f)
c=h[f]
h=d.gd0()
H.k(l,"$ib",n,"$ab")
if(!C.a.X(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gbq(d)
b=c.d
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=d.gbN()
b=c.b
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=d.gbL(d)
b=c.c
C.c.A(b.a,b.d,h.a,h.b,h.c)
h=g.eY(d.gbq(d))
b=h.a
a=h.b
a0=h.c
a0=h.B(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.A(a.a,a.d,b,h,a0)
a0=d.gay(d)
h=c.f
C.c.A(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gd0()
h=a0.gcP(a0)
if(!h){h=c.x
C.c.a3(h.a,h.d,1)}else{h=c.r
b=a0.gcP(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gjA(a0))
h=c.x
C.c.a3(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.el
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.y,o=q.length,n=[P.q],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
b=a3.a.cG
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.d
H.k(l,"$ib",h,"$ab")
if(b!=null)if(!C.a.X(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.t(0,d.a)
b=d.a
a=$.cL
b=b.be(a==null?$.cL=new V.a4(0,0,0):a)
a=c.b
C.c.A(a.a,a.d,b.a,b.b,b.c)
b=$.cL
b=a1.be(b==null?$.cL=new V.a4(0,0,0):b)
a=c.c
C.c.A(a.a,a.d,b.a,b.b,b.c)
b=a1.ew(0)
a=c.d
i=new Float32Array(H.cb(H.k(new V.dT(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).aj(0,!0),"$ib",n,"$ab")))
C.c.eZ(a.a,a.d,!1,i)
a=d.c
b=c.e
C.c.A(b.a,b.d,a.a,a.b,a.c)
a=d.d
b=a!=null
if(!b||a.d<6){b=c.r
C.c.a3(b.a,b.d,1)}else{a0=c.f
b=!b||a.d<6
a2=a0.a
a0=a0.d
if(b)a2.uniform1i(a0,0)
else a2.uniform1i(a0,a.a)
b=c.r
C.c.a3(b.a,b.d,0)}b=d.e
a=c.x
C.c.T(a.a,a.d,b)
b=d.f
a=c.y
C.c.T(a.a,a.d,b)
b=d.r
a=c.z
C.c.T(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.em
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga4(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.F)(q),++e){d=q[e]
n=a3.a.cH
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gd0()
H.k(l,"$ib",a4,"$ab")
if(!C.a.X(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gbb(d)
h=c.b
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbq(d)
h=c.c
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbN()
h=c.d
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gbL(d)
h=c.e
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=g.be(d.gbb(d))
h=c.f
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gd0()
h=n.gcP(n)
if(!h){n=c.x
C.c.a3(n.a,n.d,1)}else{h=c.r
b=n.gcP(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gjA(n))
n=c.x
C.c.a3(n.a,n.d,0)}n=d.gay(d)
h=c.y
C.c.A(h.a,h.d,n.a,n.b,n.c)
n=d.gkt()
h=c.z
C.c.T(h.a,h.d,n)
n=d.gku()
h=c.Q
C.c.T(h.a,h.d,n)
n=d.gdT()
h=c.ch
C.c.T(h.a,h.d,n)
n=d.gdU()
h=c.cx
C.c.T(h.a,h.d,n)
n=d.gdV()
h=c.cy
C.c.T(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.i:a3.Z(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.al(a4.e7,a4.bA,q)
break
case C.h:a3.Z(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ae(a4.e8,a4.bA,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga4(q).ew(0)}a4=a4.id
a4.toString
a4.ar(q.aj(0,!0))}if(s.dy){a3.Z(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ae(a4.e9,a4.ea,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bB
a4.toString
o=q.a
n=q.b
q=q.c
C.c.A(a4.a,a4.d,o,n,q)
break
case C.i:a3.Z(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.al(a4.eb,a4.bC,q)
q=a3.a
a4=a3.cx.f
q=q.bB
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
break
case C.h:a3.Z(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ae(a4.ec,a4.bC,q)
q=a3.a
a4=a3.cx.f
q=q.bB
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bE
a4.toString
o=q.a
n=q.b
q=q.c
C.c.A(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bD
C.c.T(q.a,q.d,n)
break
case C.i:a3.Z(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.al(a4.ed,a4.bF,q)
q=a3.a
a4=a3.cy.f
q=q.bE
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bD
C.c.T(a4.a,a4.d,n)
break
case C.h:a3.Z(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ae(a4.ee,a4.bF,q)
q=a3.a
a4=a3.cy.f
q=q.bE
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.A(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bD
C.c.T(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bG
C.c.T(a4.a,a4.d,o)
break
case C.i:a3.Z(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.al(a4.ef,a4.bH,o)
o=a3.a
a4=a3.db.f
o=o.bG
C.c.T(o.a,o.d,a4)
break
case C.h:a3.Z(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ae(a4.eg,a4.bH,o)
o=a3.a
a4=a3.db.f
o=o.bG
C.c.T(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d>=6){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(34067,a4.b)}}a4=a6.e
a4.cq(a5)
a4.aY(a5)
a4.ki(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(34067,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.jp()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dm().am},
sfM:function(a){this.e=H.k(a,"$ia5",[V.al],"$aa5")}}
O.hz.prototype={}
O.cC.prototype={
a0:function(a){this.a.a0(H.f(a,"$iA"))},
bW:function(){return this.a0(null)},
aE:function(){},
ij:function(a){},
ik:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gv().N(0,t.gbj())
u=t.e
t.e=a
if(a!=null)a.gv().h(0,t.gbj())
s=new D.K(t.b+".textureCube",u,t.e,[T.cU])
s.b=!0
t.a.a0(s)}}}
O.hA.prototype={}
O.b6.prototype={
dJ:function(a){var u,t,s=this
if(!J.W(s.f,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.a0(t)}},
aE:function(){this.fe()
this.dJ(new V.a6(1,1,1))},
say:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aE()
u=t.a
u.a=null
u.a0(null)}t.dJ(b)}}
O.hC.prototype={
ii:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".refraction",t,a,[P.q])
t.b=!0
u.a.a0(t)}},
aE:function(){this.bT()
this.ii(1)}}
O.hD.prototype={
ck:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.a0(t)}},
aE:function(){this.bT()
this.ck(100)}}
O.bL.prototype={}
T.cT.prototype={}
T.cU.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.Y():u}}
T.iE.prototype={
aP:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ab(t,"load",H.n(new T.iF(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
ic:function(a,b,c){var u,t,s,r
b=V.lx(b)
u=V.lx(a.width)
t=V.lx(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kX()
s.width=u
s.height=t
r=H.f(C.m.f4(s,"2d"),"$icq")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oY(r.getImageData(0,0,s.width,s.height))}}}
T.iF.prototype={
$1:function(a){var u=this,t=u.a,s=t.ic(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.kc(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.jq()}++t.e},
$S:12}
V.bi.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dR.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aI:function(a,b){return!this.fd(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}}
V.i4.prototype={
aI:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c5(this.a),t=H.c5(this.b)
return u+".."+t},
$iaz:1}
V.id.prototype={
fj:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.p,P.U])
for(t=new H.cB(a,a.gl(a),[H.as(a,"z",0)]);t.E();)u.n(0,t.d,!0)
this.sih(u)},
aI:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.cR(u.ga7(u),0,null)},
sih:function(a){this.a=H.k(a,"$iH",[P.p,P.U],"$aH")},
$iaz:1}
V.cP.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cW(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
ju:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
siD:function(a){this.c=H.k(a,"$ib",[V.cW],"$ab")}}
V.ee.prototype={
i:function(a){var u=H.lz(this.b,"\n","\\n"),t=H.lz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cV.prototype={
aJ:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.F)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si7:function(a){var u=P.e
this.c=H.k(a,"$iH",[u,u],"$aH")}}
V.iI.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cP(this,b)
u.siD(H.d([],[V.cW]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cV(a)
u=P.e
t.si7(new H.aQ([u,u]))
this.b.n(0,a,t)}return t},
eX:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ee]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.ju(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cR(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cR(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ee(n==null?o.b:n,p,s)}++s}}},
sit:function(a){this.a=H.k(a,"$iH",[P.e,V.cP],"$aH")},
siw:function(a){this.b=H.k(a,"$iH",[P.e,V.cV],"$aH")}}
V.cW.prototype={
i:function(a){return this.b.b+": "+this.d7(0)}}
X.dz.prototype={$ibq:1}
X.h8.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.Y():u}}
X.dZ.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.Y():u},
aN:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.H(a)},
fF:function(){return this.aN(null)},
saX:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gv().N(0,s.gdc())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gdc())
u=new D.K("mover",t,s.b,[U.ad])
u.b=!0
s.aN(u)}},
$ibq:1,
$idz:1}
X.e9.prototype={}
V.bC.prototype={
bi:function(a){this.b=new P.hc(C.U)
this.c=null
this.sc3(H.d([],[[P.b,W.aF]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fR(q,0,q.length)
n=o==null?q:o
C.S.f7(p,H.lz(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaA(m.d),p)}},
eI:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sc3(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).eX(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)q.bK(t[r])},
sc3:function(a){this.d=H.k(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kO.prototype={
$1:function(a){var u
H.f(a,"$ibb")
u=C.e.eW(this.a.gjy(),2)
if(u!=="0.00")P.ly(u+" fps")},
$S:50}
V.fP.prototype={
bK:function(a){var u=this
switch(a.a){case"Class":u.P(a.b,"#551")
break
case"Comment":u.P(a.b,"#777")
break
case"Id":u.P(a.b,"#111")
break
case"Num":u.P(a.b,"#191")
break
case"Reserved":u.P(a.b,"#119")
break
case"String":u.P(a.b,"#171")
break
case"Symbol":u.P(a.b,"#616")
break
case"Type":u.P(a.b,"#B11")
break
case"Whitespace":u.P(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iJ()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a1("0","9")
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
C.a.h(a1.k(0,k).m(0,k).a,new V.bi())
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
C.a.h(a1.k(0,h).m(0,h).a,new V.bi())
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
t=new V.av()
s=[V.az]
t.sa8(H.d([],s))
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
t=new V.av()
t.sa8(H.d([],s))
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
t.d=t.a.S("Num")
t=a1.k(0,n)
t.d=t.a.S("Num")
t=a1.k(0,m)
t.d=t.a.S("Symbol")
t=a1.k(0,j)
t.d=t.a.S("String")
t=a1.k(0,g)
t.d=t.a.S("String")
t=a1.k(0,c)
t.d=t.a.S(d)
t=a1.k(0,a0)
t.d=t.a.S(a0)
t=a1.k(0,q)
t=t.d=t.a.S(q)
u=[P.e]
t.aJ(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aJ(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aJ(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h9.prototype={
bK:function(a){var u=this
switch(a.a){case"Builtin":u.P(a.b,"#411")
break
case"Comment":u.P(a.b,"#777")
break
case"Id":u.P(a.b,"#111")
break
case"Num":u.P(a.b,"#191")
break
case"Preprocess":u.P(a.b,"#737")
break
case"Reserved":u.P(a.b,"#119")
break
case"Symbol":u.P(a.b,"#611")
break
case"Type":u.P(a.b,"#171")
break
case"Whitespace":u.P(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iJ()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.x(new H.v("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a1("0","9")
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
C.a.h(e.k(0,k).m(0,m).a,new V.bi())
t=e.k(0,j).m(0,i)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.av()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.av()
u.sa8(H.d([],s))
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
u.d=u.a.S("Num")
u=e.k(0,n)
u.d=u.a.S("Num")
u=e.k(0,m)
u.d=u.a.S("Symbol")
u=e.k(0,i)
u.d=u.a.S(j)
u=e.k(0,g)
u.d=u.a.S(h)
u=e.k(0,f)
u.d=u.a.S(f)
u=e.k(0,q)
u=u.d=u.a.S(q)
t=[P.e]
u.aJ(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aJ(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aJ(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.ha.prototype={
bK:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.P(a.b,"#911")
u.P("=",t)
break
case"Id":u.P(a.b,t)
break
case"Other":u.P(a.b,t)
break
case"Reserved":u.P(a.b,"#119")
break
case"String":u.P(a.b,"#171")
break
case"Symbol":u.P(a.b,"#616")
break}},
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iJ()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.v("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.v("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
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
C.a.h(l.k(0,o).m(0,o).a,new V.bi())
C.a.h(l.k(0,s).m(0,m).a,new V.bi())
u=l.k(0,m).m(0,m)
t=new V.av()
t.sa8(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.x(new H.v('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.S("Symbol")
u=l.k(0,n)
u.d=u.a.S("String")
u=l.k(0,r)
t=u.a.S(r)
u.d=t
t.aJ(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hZ.prototype={
eI:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc3(H.d([],[[P.b,W.aF]]))
this.P(C.a.m(b,"\n"),"#111")},
bK:function(a){},
bp:function(){return}}
V.i2.prototype={
dP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.md().gcW().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dN(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lG(m.c).h(0,q)
o=W.nE("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.i3(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lG(m.c).h(0,r.createElement("br"))},
b3:function(a,b,c){return this.dP(a,b,c,!1)},
dN:function(a){var u,t,s=P.md(),r=P.e,q=P.nM(s.gcW(),r,r)
q.n(0,this.a,a)
u=s.eP(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k1([],[]).d1(""),"",t)}}
V.i3.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.dN(u.d)}},
$S:12}
V.ii.prototype={
fl:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ik(o),{func:1,ret:-1,args:[r]}),!1,r)},
dR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.io()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eX(C.a.jF(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.po(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.fa(C.C,n,C.l,!1)
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
f3:function(a){var u,t,s,r=new V.fP("dart")
r.bi("dart")
u=new V.h9("glsl")
u.bi("glsl")
t=new V.ha("html")
t.bi("html")
s=C.a.jw(H.d([r,u,t],[V.bC]),new V.il(a))
if(s!=null)return s
r=new V.hZ("plain")
r.bi("plain")
return r},
dQ:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dn(r).a5(r,"+")){C.a.n(b0,s,C.b.as(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(b0,s,C.b.as(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f3(a8)
q.eI(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fa(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lI()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.F)(r),++a0)C.a3.jb(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.F)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.E();)c.appendChild(a3.gM(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
j4:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$iba").style
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
o=H.f(r.insertCell(-1),"$iba")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
io:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iJ()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.av()
r=[V.az]
s.sa8(H.d([],r))
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
s=new V.av()
s.sa8(H.d([],r))
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
s=new V.av()
s.sa8(H.d([],r))
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
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bi())
s=u.k(0,i).m(0,i)
t=new V.av()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.S(p)
s=u.k(0,n)
s.d=s.a.S(o)
s=u.k(0,"CodeEnd")
s.d=s.a.S(m)
s=u.k(0,j)
s.d=s.a.S("Link")
s=u.k(0,i)
s.d=s.a.S(i)
this.b=u}}
V.ik.prototype={
$1:function(a){P.m9(C.t,new V.ij(this.a))},
$S:12}
V.ij.prototype={
$0:function(){var u=C.e.ao(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.il.prototype={
$1:function(a){return H.f(a,"$ibC").a===this.a},
$S:51}
T.kF.prototype={
$0:function(){this.a.sac(0,F.lt(1,null,null,1))},
$S:0}
T.kG.prototype={
$0:function(){this.a.sac(0,F.mI(!0,40,1))},
$S:0}
T.kH.prototype={
$0:function(){this.a.sac(0,F.mI(!1,40,0))},
$S:0}
T.kI.prototype={
$0:function(){this.a.sac(0,F.mV(6,6))},
$S:0}
T.kJ.prototype={
$0:function(){this.a.sac(0,F.mX())},
$S:0}
T.kK.prototype={
$0:function(){this.a.sac(0,F.pf())},
$S:0}
T.kL.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dQ("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dQ("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fa=u.i
u=J.dL.prototype
u.fc=u.i
u=P.i.prototype
u.fb=u.bO
u=W.X.prototype
u.bS=u.af
u=W.eT.prototype
u.ff=u.aw
u=O.cC.prototype
u.fe=u.aE
u=O.b6.prototype
u.bT=u.aE
u=V.dR.prototype
u.fd=u.aI
u.d7=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oS","ol",11)
u(P,"oT","om",11)
u(P,"oU","on",11)
t(P,"mH","oQ",3)
s(W,"p8",4,null,["$4"],["op"],20,0)
s(W,"p9",4,null,["$4"],["oq"],20,0)
var m
r(m=E.ao.prototype,"geE",0,0,null,["$1","$0"],["eF","jQ"],1,0)
r(m,"geG",0,0,null,["$1","$0"],["eH","jR"],1,0)
r(m,"geC",0,0,null,["$1","$0"],["eD","jP"],1,0)
r(m,"geA",0,0,null,["$1","$0"],["eB","jM"],1,0)
q(m,"gjK","jL",10)
q(m,"gjN","jO",10)
r(m=E.ed.prototype,"gd8",0,0,null,["$1","$0"],["da","d9"],1,0)
p(m,"gk8","eQ",3)
o(m=X.ek.prototype,"ghx","hy",14)
o(m,"ghl","hm",14)
o(m,"ghr","hs",4)
o(m,"ghB","hC",26)
o(m,"ghz","hA",26)
o(m,"ghF","hG",4)
o(m,"ghJ","hK",4)
o(m,"ghv","hw",4)
o(m,"ghH","hI",4)
o(m,"ght","hu",4)
o(m,"ghL","hM",36)
o(m,"ghN","hO",14)
o(m,"gi_","i0",13)
o(m,"ghW","hX",13)
o(m,"ghY","hZ",13)
r(m=D.dN.prototype,"gdC",0,0,null,["$1","$0"],["dD","hD"],1,0)
o(m,"ghQ","hR",38)
q(m,"ghf","hg",18)
q(m,"ghU","hV",18)
r(D.bM.prototype,"gbV",0,0,null,["$1","$0"],["aa","fq"],1,0)
n(V.Z.prototype,"gl","cN",30)
n(V.M.prototype,"gl","cN",30)
r(m=U.cy.prototype,"gaQ",0,0,null,["$1","$0"],["J","a9"],1,0)
q(m,"gfz","fA",29)
q(m,"ghS","hT",29)
r(m=U.el.prototype,"gaQ",0,0,null,["$1","$0"],["J","a9"],1,0)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
r(m=U.em.prototype,"gaQ",0,0,null,["$1","$0"],["J","a9"],1,0)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
o(m,"gh8","h9",2)
o(m,"gha","hb",2)
o(m,"giB","iC",2)
o(m,"giz","iA",2)
o(m,"gix","iy",2)
o(U.en.prototype,"ghc","hd",2)
r(m=M.dF.prototype,"gat",0,0,null,["$1","$0"],["aB","fB"],1,0)
q(m,"ghn","ho",10)
q(m,"ghp","hq",10)
r(m=O.dS.prototype,"gbj",0,0,null,["$1","$0"],["a0","bW"],1,0)
r(m,"gia",0,0,null,["$1","$0"],["dH","ib"],1,0)
q(m,"ghh","hi",19)
q(m,"ghj","hk",19)
r(O.cC.prototype,"gbj",0,0,null,["$1","$0"],["a0","bW"],1,0)
r(X.dZ.prototype,"gdc",0,0,null,["$1","$0"],["aN","fF"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.l5,J.a,J.au,P.eG,P.i,H.cB,P.b3,H.bZ,H.d3,H.fI,H.iO,P.bE,H.cr,H.eY,P.ae,H.hm,H.ho,H.hh,P.f3,P.bg,P.aK,P.eq,P.iu,P.cQ,P.iv,P.bb,P.an,P.kh,P.jW,P.c9,P.eF,P.z,P.k9,P.hu,P.bW,P.hd,P.kf,P.ke,P.U,P.ay,P.ac,P.b2,P.hX,P.e7,P.ey,P.h7,P.bF,P.b,P.H,P.O,P.aw,P.e,P.ah,P.ca,P.j3,P.jZ,W.fL,W.bP,W.G,W.dX,W.eT,W.k4,W.dH,W.aB,W.jV,W.fb,P.k0,P.f8,P.jQ,P.T,O.a5,O.cD,E.fB,E.ao,E.i5,E.ed,Z.ep,Z.jo,Z.dx,Z.bG,Z.be,D.fE,D.bY,D.A,X.dy,X.dM,X.hj,X.hr,X.aA,X.hL,X.iK,X.ek,D.dC,D.a8,D.e_,D.e6,D.eb,D.bM,D.ec,V.a6,V.aN,V.fZ,V.dT,V.al,V.aa,V.a4,V.b9,V.e2,V.Z,V.M,U.el,U.em,U.en,M.dF,A.du,A.fu,A.hB,A.cX,A.d0,A.cZ,A.d1,A.d_,A.d2,A.bX,A.eg,A.iY,F.a9,F.h1,F.bo,F.hl,F.bJ,F.e5,F.ie,F.ig,F.ih,F.ai,F.jc,F.jd,F.jg,F.ji,F.jj,F.jk,O.bL,O.cC,T.iE,V.bi,V.az,V.dR,V.i4,V.id,V.cP,V.ee,V.cV,V.iI,X.dz,X.e9,X.dZ,V.bC,V.i2,V.ii])
s(J.a,[J.hg,J.dK,J.dL,J.aP,J.bH,J.bm,H.cH,H.bI,W.j,W.fr,W.bU,W.cq,W.b0,W.b1,W.a_,W.es,W.fQ,W.fR,W.eu,W.dE,W.ew,W.fT,W.o,W.ez,W.aO,W.hb,W.eB,W.bl,W.dP,W.hF,W.eH,W.eI,W.aR,W.eJ,W.eM,W.aS,W.eQ,W.eS,W.aU,W.eU,W.aV,W.eZ,W.aH,W.f1,W.iH,W.aX,W.f4,W.iM,W.j8,W.fc,W.fe,W.fg,W.fi,W.fk,P.b5,P.eD,P.b8,P.eO,P.i1,P.f_,P.bc,P.f6,P.fv,P.er,P.dv,P.e0,P.c7,P.e4,P.ea,P.eh,P.eW])
s(J.dL,[J.hY,J.bO,J.bn])
t(J.l4,J.aP)
s(J.bH,[J.dJ,J.dI])
t(P.hq,P.eG)
s(P.hq,[H.ei,W.jw,W.ar,P.h3])
t(H.v,H.ei)
s(P.i,[H.fW,H.hv,H.d5])
s(H.fW,[H.c2,H.hn])
s(P.b3,[H.hw,H.jp])
t(H.hx,H.c2)
t(H.fJ,H.fI)
s(P.bE,[H.hU,H.hi,H.j1,H.iQ,H.fD,H.ib,P.ft,P.dY,P.aM,P.j2,P.j_,P.c8,P.fG,P.fO])
s(H.cr,[H.kS,H.iB,H.kz,H.kA,H.kB,P.js,P.jr,P.jt,P.ju,P.k8,P.k7,P.jD,P.jH,P.jE,P.jF,P.jG,P.jK,P.jL,P.jJ,P.jI,P.iw,P.ix,P.kp,P.jT,P.jS,P.jU,P.hp,P.ht,P.fU,P.fV,P.j7,P.j4,P.j5,P.j6,P.ka,P.kb,P.kd,P.kc,P.kl,P.kk,P.km,P.kn,W.fX,W.hH,W.hJ,W.ia,W.it,W.jC,W.hS,W.hR,W.jX,W.jY,W.k6,W.kg,P.k2,P.kr,P.h4,P.h5,P.fx,E.i6,E.i7,E.i8,E.iG,D.h_,D.h0,F.ki,F.ks,F.ku,F.kv,F.kw,F.kP,F.kQ,F.kR,F.kD,F.kt,F.jm,F.jl,F.je,F.jf,T.iF,V.kO,V.i3,V.ik,V.ij,V.il,T.kF,T.kG,T.kH,T.kI,T.kJ,T.kK,T.kL])
s(H.iB,[H.ir,H.co])
t(H.jq,P.ft)
t(P.hs,P.ae)
s(P.hs,[H.aQ,W.jv])
t(H.dU,H.bI)
s(H.dU,[H.da,H.dc])
t(H.db,H.da)
t(H.cI,H.db)
t(H.dd,H.dc)
t(H.dV,H.dd)
s(H.dV,[H.hM,H.hN,H.hO,H.hP,H.hQ,H.dW,H.cJ])
t(P.jR,P.kh)
t(P.jP,P.jW)
t(P.f9,P.hu)
t(P.ej,P.f9)
s(P.bW,[P.fz,P.fY])
t(P.bD,P.iv)
s(P.bD,[P.fA,P.hc,P.jb,P.ja])
t(P.j9,P.fY)
s(P.ac,[P.q,P.p])
s(P.aM,[P.c6,P.he])
t(P.jy,P.ca)
s(W.j,[W.E,W.h2,W.cF,W.aT,W.de,W.aW,W.aI,W.dg,W.jn,W.d6,P.fy,P.bT])
s(W.E,[W.X,W.bB,W.d7])
s(W.X,[W.y,P.r])
s(W.y,[W.ds,W.fs,W.cn,W.bA,W.bV,W.aF,W.h6,W.cz,W.cA,W.ic,W.ba,W.e8,W.iz,W.iA,W.cS])
s(W.b0,[W.cs,W.fM,W.fN])
t(W.fK,W.b1)
t(W.ct,W.es)
t(W.ev,W.eu)
t(W.dD,W.ev)
t(W.ex,W.ew)
t(W.fS,W.ex)
t(W.aG,W.bU)
t(W.eA,W.ez)
t(W.cw,W.eA)
t(W.eC,W.eB)
t(W.c_,W.eC)
t(W.bN,W.o)
s(W.bN,[W.b4,W.af,W.aY])
t(W.hG,W.eH)
t(W.hI,W.eI)
t(W.eK,W.eJ)
t(W.hK,W.eK)
t(W.eN,W.eM)
t(W.cK,W.eN)
t(W.eR,W.eQ)
t(W.i_,W.eR)
t(W.i9,W.eS)
t(W.df,W.de)
t(W.io,W.df)
t(W.eV,W.eU)
t(W.ip,W.eV)
t(W.is,W.eZ)
t(W.f2,W.f1)
t(W.iC,W.f2)
t(W.dh,W.dg)
t(W.iD,W.dh)
t(W.f5,W.f4)
t(W.iL,W.f5)
t(W.bf,W.af)
t(W.fd,W.fc)
t(W.jx,W.fd)
t(W.et,W.dE)
t(W.ff,W.fe)
t(W.jM,W.ff)
t(W.fh,W.fg)
t(W.eL,W.fh)
t(W.fj,W.fi)
t(W.k_,W.fj)
t(W.fl,W.fk)
t(W.k3,W.fl)
t(W.jz,W.jv)
t(W.jA,P.iu)
t(W.lh,W.jA)
t(W.jB,P.cQ)
t(W.k5,W.eT)
t(P.k1,P.k0)
t(P.am,P.jQ)
t(P.eE,P.eD)
t(P.hk,P.eE)
t(P.eP,P.eO)
t(P.hV,P.eP)
t(P.cN,P.r)
t(P.f0,P.f_)
t(P.iy,P.f0)
t(P.f7,P.f6)
t(P.iN,P.f7)
t(P.fw,P.er)
t(P.hW,P.bT)
t(P.eX,P.eW)
t(P.iq,P.eX)
s(E.fB,[Z.dw,A.cO,T.cT])
s(D.A,[D.c0,D.c1,D.K,X.i0])
s(X.i0,[X.dQ,X.bp,X.cG,X.ef])
s(O.a5,[D.dN,U.cy])
s(D.fE,[U.fF,U.ad])
s(U.ad,[U.dA,U.e3])
t(A.hy,A.cO)
s(A.eg,[A.Q,A.iU,A.iV,A.iX,A.iS,A.a3,A.iT,A.P,A.iW,A.iZ,A.cY,A.aC,A.ap,A.aq])
t(F.im,F.h1)
t(F.iR,F.hl)
t(F.jh,F.ji)
t(F.hT,F.jj)
t(O.dS,O.bL)
s(O.cC,[O.hz,O.hA,O.b6])
s(O.b6,[O.hC,O.hD])
t(T.cU,T.cT)
s(V.dR,[V.av,V.cW])
t(X.h8,X.e9)
s(V.bC,[V.fP,V.h9,V.ha,V.hZ])
u(H.ei,H.d3)
u(H.da,P.z)
u(H.db,H.bZ)
u(H.dc,P.z)
u(H.dd,H.bZ)
u(P.eG,P.z)
u(P.f9,P.k9)
u(W.es,W.fL)
u(W.eu,P.z)
u(W.ev,W.G)
u(W.ew,P.z)
u(W.ex,W.G)
u(W.ez,P.z)
u(W.eA,W.G)
u(W.eB,P.z)
u(W.eC,W.G)
u(W.eH,P.ae)
u(W.eI,P.ae)
u(W.eJ,P.z)
u(W.eK,W.G)
u(W.eM,P.z)
u(W.eN,W.G)
u(W.eQ,P.z)
u(W.eR,W.G)
u(W.eS,P.ae)
u(W.de,P.z)
u(W.df,W.G)
u(W.eU,P.z)
u(W.eV,W.G)
u(W.eZ,P.ae)
u(W.f1,P.z)
u(W.f2,W.G)
u(W.dg,P.z)
u(W.dh,W.G)
u(W.f4,P.z)
u(W.f5,W.G)
u(W.fc,P.z)
u(W.fd,W.G)
u(W.fe,P.z)
u(W.ff,W.G)
u(W.fg,P.z)
u(W.fh,W.G)
u(W.fi,P.z)
u(W.fj,W.G)
u(W.fk,P.z)
u(W.fl,W.G)
u(P.eD,P.z)
u(P.eE,W.G)
u(P.eO,P.z)
u(P.eP,W.G)
u(P.f_,P.z)
u(P.f0,W.G)
u(P.f6,P.z)
u(P.f7,W.G)
u(P.er,P.ae)
u(P.eW,P.z)
u(P.eX,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bA.prototype
C.m=W.bV.prototype
C.S=W.aF.prototype
C.V=J.a.prototype
C.a=J.aP.prototype
C.W=J.dI.prototype
C.f=J.dJ.prototype
C.n=J.dK.prototype
C.e=J.bH.prototype
C.b=J.bm.prototype
C.X=J.bn.prototype
C.a2=W.cK.prototype
C.F=J.hY.prototype
C.c=P.c7.prototype
C.a3=W.ba.prototype
C.G=W.e8.prototype
C.w=J.bO.prototype
C.H=W.bf.prototype
C.I=W.d6.prototype
C.a4=new P.fA()
C.J=new P.fz()
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

C.Q=new P.hX()
C.l=new P.j9()
C.R=new P.jb()
C.k=new P.jR()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.i=new A.bX(2,"ColorSourceType.Texture2D")
C.h=new A.bX(3,"ColorSourceType.TextureCube")
C.t=new P.b2(0)
C.T=new P.b2(5e6)
C.U=new P.hd("element",!0,!1,!1,!1)
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
C.a1=new H.fJ(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",q:"double",ac:"num",e:"String",U:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.O,args:[D.A]},{func:1,ret:P.O,args:[F.a9]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.ai,P.q,P.q]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:-1,args:[P.p,[P.i,V.al]]},{func:1,ret:P.U,args:[W.X,P.e,P.e,W.bP]},{func:1,ret:P.U,args:[W.E]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.U,args:[W.aB]},{func:1,ret:P.U,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.O,args:[,]},{func:1,ret:V.a4,args:[P.q]},{func:1,ret:-1,args:[P.p,[P.i,U.ad]]},{func:1,ret:P.q},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:W.X,args:[W.E]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[,,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:P.T,args:[P.p]},{func:1,ret:P.U,args:[[P.i,D.a8]]},{func:1,ret:P.O,args:[P.e,,]},{func:1,ret:P.O,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:[P.H,P.e,P.e],args:[[P.H,P.e,P.e],P.e]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.aw]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.O,args:[P.bb]},{func:1,ret:P.U,args:[V.bC]},{func:1,args:[,P.e]},{func:1,ret:P.O,args:[P.ac]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b_=0
$.cp=null
$.lK=null
$.ll=!1
$.mN=null
$.mF=null
$.mT=null
$.kx=null
$.kC=null
$.lv=null
$.cc=null
$.dl=null
$.dm=null
$.lm=!1
$.a2=C.k
$.ax=[]
$.bk=null
$.l_=null
$.lP=null
$.lO=null
$.d9=P.l7(P.e,P.bF)
$.hE=null
$.m0=null
$.cL=null
$.m4=null
$.mg=null
$.ml=null
$.mi=null
$.mj=null
$.mk=null
$.mh=null
$.m_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pv","mZ",function(){return H.mM("_$dart_dartClosure")})
u($,"pw","lB",function(){return H.mM("_$dart_js")})
u($,"pC","n_",function(){return H.bd(H.iP({
toString:function(){return"$receiver$"}}))})
u($,"pD","n0",function(){return H.bd(H.iP({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pE","n1",function(){return H.bd(H.iP(null))})
u($,"pF","n2",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pI","n5",function(){return H.bd(H.iP(void 0))})
u($,"pJ","n6",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pH","n4",function(){return H.bd(H.mb(null))})
u($,"pG","n3",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pL","n8",function(){return H.bd(H.mb(void 0))})
u($,"pK","n7",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q1","lC",function(){return P.ok()})
u($,"pO","n9",function(){return P.oh()})
u($,"q2","nd",function(){return H.nR(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"q4","nf",function(){return P.o5("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q5","ng",function(){return P.oJ()})
u($,"q3","ne",function(){return P.lR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pV","nc",function(){return Z.aJ(0)})
u($,"pP","na",function(){return Z.aJ(511)})
u($,"pX","bw",function(){return Z.aJ(1)})
u($,"pW","bv",function(){return Z.aJ(2)})
u($,"pR","bu",function(){return Z.aJ(4)})
u($,"pY","bx",function(){return Z.aJ(8)})
u($,"pZ","by",function(){return Z.aJ(16)})
u($,"pS","dp",function(){return Z.aJ(32)})
u($,"pT","dq",function(){return Z.aJ(64)})
u($,"pU","nb",function(){return Z.aJ(96)})
u($,"q_","cm",function(){return Z.aJ(128)})
u($,"pQ","bt",function(){return Z.aJ(256)})
u($,"pu","mY",function(){return new V.fZ(1e-9)})
u($,"pt","L",function(){return $.mY()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cH,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cI,Float64Array:H.cI,Int16Array:H.hM,Int32Array:H.hN,Int8Array:H.hO,Uint16Array:H.hP,Uint32Array:H.hQ,Uint8ClampedArray:H.dW,CanvasPixelArray:H.dW,Uint8Array:H.cJ,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fr,HTMLAnchorElement:W.ds,HTMLAreaElement:W.fs,HTMLBaseElement:W.cn,Blob:W.bU,HTMLBodyElement:W.bA,HTMLCanvasElement:W.bV,CanvasRenderingContext2D:W.cq,CDATASection:W.bB,CharacterData:W.bB,Comment:W.bB,ProcessingInstruction:W.bB,Text:W.bB,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fK,CSSCharsetRule:W.a_,CSSConditionRule:W.a_,CSSFontFaceRule:W.a_,CSSGroupingRule:W.a_,CSSImportRule:W.a_,CSSKeyframeRule:W.a_,MozCSSKeyframeRule:W.a_,WebKitCSSKeyframeRule:W.a_,CSSKeyframesRule:W.a_,MozCSSKeyframesRule:W.a_,WebKitCSSKeyframesRule:W.a_,CSSMediaRule:W.a_,CSSNamespaceRule:W.a_,CSSPageRule:W.a_,CSSRule:W.a_,CSSStyleRule:W.a_,CSSSupportsRule:W.a_,CSSViewportRule:W.a_,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fM,CSSUnparsedValue:W.fN,DataTransferItemList:W.fQ,HTMLDivElement:W.aF,DOMException:W.fR,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fS,DOMTokenList:W.fT,Element:W.X,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aG,FileList:W.cw,FileWriter:W.h2,HTMLFormElement:W.h6,Gamepad:W.aO,History:W.hb,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.bl,HTMLImageElement:W.cz,HTMLInputElement:W.cA,KeyboardEvent:W.b4,Location:W.dP,MediaList:W.hF,MessagePort:W.cF,MIDIInputMap:W.hG,MIDIOutputMap:W.hI,MimeType:W.aR,MimeTypeArray:W.hK,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aS,PluginArray:W.i_,RTCStatsReport:W.i9,HTMLSelectElement:W.ic,SourceBuffer:W.aT,SourceBufferList:W.io,SpeechGrammar:W.aU,SpeechGrammarList:W.ip,SpeechRecognitionResult:W.aV,Storage:W.is,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.ba,HTMLTableDataCellElement:W.ba,HTMLTableHeaderCellElement:W.ba,HTMLTableElement:W.e8,HTMLTableRowElement:W.iz,HTMLTableSectionElement:W.iA,HTMLTemplateElement:W.cS,TextTrack:W.aW,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.iC,TextTrackList:W.iD,TimeRanges:W.iH,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iL,TrackDefaultList:W.iM,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.j8,VideoTrackList:W.jn,WheelEvent:W.bf,Window:W.d6,DOMWindow:W.d6,Attr:W.d7,CSSRuleList:W.jx,ClientRect:W.et,DOMRect:W.et,GamepadList:W.jM,NamedNodeMap:W.eL,MozNamedAttrMap:W.eL,SpeechRecognitionResultList:W.k_,StyleSheetList:W.k3,SVGLength:P.b5,SVGLengthList:P.hk,SVGNumber:P.b8,SVGNumberList:P.hV,SVGPointList:P.i1,SVGScriptElement:P.cN,SVGStringList:P.iy,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGElement:P.r,SVGTransform:P.bc,SVGTransformList:P.iN,AudioBuffer:P.fv,AudioParamMap:P.fw,AudioTrackList:P.fy,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hW,WebGLBuffer:P.dv,WebGLProgram:P.e0,WebGL2RenderingContext:P.c7,WebGLShader:P.e4,WebGLTexture:P.ea,WebGLUniformLocation:P.eh,SQLResultSetRowList:P.iq})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mQ,[])
else T.mQ([])})})()
//# sourceMappingURL=test.dart.js.map
