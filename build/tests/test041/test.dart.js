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
a[c]=function(){a[c]=function(){H.pg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lu(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l7:function l7(){},
kz:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l4:function(){return new P.cT("No element")},
nB:function(){return new P.cT("Too many elements")},
t:function t(a){this.a=a},
h7:function h7(){},
c1:function c1(){},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hG:function hG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d7:function d7(){},
ev:function ev(){},
nt:function(){throw H.d(P.K("Cannot modify unmodifiable Map"))},
cn:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oY:function(a){return v.types[H.ac(a)]},
p4:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iM},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.d(H.b0(a))
return u},
cO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nW:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
c5:function(a){return H.nN(a)+H.lq(H.bS(a),0,null)},
nN:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$id6){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cn(t.length>1&&C.b.D(t,0)===36?C.b.ay(t,1):t)},
nO:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q
H.kE(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nX:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b0(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.b0(s))}return H.m2(r)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.b0(s))
if(s<0)throw H.d(H.b0(s))
if(s>65535)return H.nX(a)}return H.m2(a)},
nY:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c6:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aX(u,10))>>>0,56320|u&1023)}}throw H.d(P.af(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nV:function(a){var u=H.c4(a).getFullYear()+0
return u},
nT:function(a){var u=H.c4(a).getMonth()+1
return u},
nP:function(a){var u=H.c4(a).getDate()+0
return u},
nQ:function(a){var u=H.c4(a).getHours()+0
return u},
nS:function(a){var u=H.c4(a).getMinutes()+0
return u},
nU:function(a){var u=H.c4(a).getSeconds()+0
return u},
nR:function(a){var u=H.c4(a).getMilliseconds()+0
return u},
D:function(a){throw H.d(H.b0(a))},
h:function(a,b){if(a==null)J.aG(a)
throw H.d(H.ch(a,b))},
ch:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aO(!0,b,s,null)
u=H.ac(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.ic(b,s)},
oT:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c7(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end",u)
return new P.aO(!0,b,"end",null)},
b0:function(a){return new P.aO(!0,a,null,null)},
oP:function(a){if(typeof a!=="number")throw H.d(H.b0(a))
return a},
d:function(a){var u
if(a==null)a=new P.e8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mV})
u.name=""}else u.toString=H.mV
return u},
mV:function(){return J.as(this.dartException)},
u:function(a){throw H.d(a)},
F:function(a){throw H.d(P.bl(a))},
bg:function(a){var u,t,s,r,q,p
a=H.mU(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
md:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lY:function(a,b){return new H.i1(a,b==null?null:b.method)},
l8:function(a,b){var u=b==null,t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
ag:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l8(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lY(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mY()
q=$.mZ()
p=$.n_()
o=$.n0()
n=$.n3()
m=$.n4()
l=$.n2()
$.n1()
k=$.n6()
j=$.n5()
i=r.ar(u)
if(i!=null)return f.$1(H.l8(H.I(u),i))
else{i=q.ar(u)
if(i!=null){i.method="call"
return f.$1(H.l8(H.I(u),i))}else{i=p.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=n.ar(u)
if(i==null){i=m.ar(u)
if(i==null){i=l.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=k.ar(u)
if(i==null){i=j.ar(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lY(H.I(u),i))}}return f.$1(new H.j9(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ei()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aO(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ei()
return a},
cl:function(a){var u
if(a==null)return new H.fa(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fa(a)},
oX:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
p3:function(a,b,c,d,e,f){H.e(a,"$ibF")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.v("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
H.ac(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p3)
a.$identity=u
return u},
ns:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cq(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.F()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lL(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oY,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lK:H.kY
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lL(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
np:function(a,b,c,d){var u=H.kY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.np(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.F()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cr
return new Function(r+H.l(q==null?$.cr=H.fP("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.F()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cr
return new Function(r+H.l(q==null?$.cr=H.fP("self"):q)+"."+H.l(u)+"("+o+");}")()},
nq:function(a,b,c,d){var u=H.kY,t=H.lK
switch(b?-1:a){case 0:throw H.d(H.o1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nr:function(a,b){var u,t,s,r,q,p,o,n=$.cr
if(n==null)n=$.cr=H.fP("self")
u=$.lJ
if(u==null)u=$.lJ=H.fP("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nq(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b2
if(typeof u!=="number")return u.F()
$.b2=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b2
if(typeof u!=="number")return u.F()
$.b2=u+1
return new Function(n+u+"}")()},
lu:function(a,b,c,d,e,f,g){return H.ns(a,b,H.ac(c),d,!!e,!!f,g)},
kY:function(a){return a.a},
lK:function(a){return a.c},
fP:function(a){var u,t,s,r=new H.cq("self","target","receiver","name"),q=J.l5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.oL("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aZ(a,"String"))},
oU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aZ(a,"double"))},
p8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aZ(a,"num"))},
lr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aZ(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aZ(a,"int"))},
mS:function(a,b){throw H.d(H.aZ(a,H.cn(H.I(b).substring(2))))},
pa:function(a,b){throw H.d(H.no(a,H.cn(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mS(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pa(a,b)},
kE:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.d(H.aZ(a,"List<dynamic>"))},
mP:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mS(a,b)},
mL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fz:function(a,b){var u
if(typeof a=="function")return!0
u=H.mL(J.U(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ln)return a
$.ln=!0
try{if(H.fz(a,b))return a
u=H.kT(b)
t=H.aZ(a,u)
throw H.d(t)}finally{$.ln=!1}},
lv:function(a,b){if(a!=null&&!H.lt(a,b))H.u(H.aZ(a,H.kT(b)))
return a},
aZ:function(a,b){return new H.j_("TypeError: "+P.dM(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
no:function(a,b){return new H.fQ("CastError: "+P.dM(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t=J.U(a)
if(!!t.$ict){u=H.mL(t)
if(u!=null)return H.kT(u)
return"Closure"}return H.c5(a)},
oL:function(a){throw H.d(new H.jv(a))},
pg:function(a){throw H.d(new P.h_(H.I(a)))},
o1:function(a){return new H.il(a)},
mM:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
pZ:function(a,b,c){return H.cm(a["$a"+H.l(c)],H.bS(b))},
ck:function(a,b,c,d){var u
H.I(c)
H.ac(d)
u=H.cm(a["$a"+H.l(c)],H.bS(b))
return u==null?null:u[d]},
am:function(a,b,c){var u
H.I(b)
H.ac(c)
u=H.cm(a["$a"+H.l(b)],H.bS(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.ac(b)
u=H.bS(a)
return u==null?null:u[b]},
kT:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cn(a[0].name)+H.lq(a,1,b)
if(typeof a=="function")return H.cn(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.F(p,a0[n])
m=u[q]
if(m!=null&&m!==P.X)p+=" extends "+H.bR(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bR(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bR(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oW(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bR(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lq:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ab("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
cm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ls:function(a,b,c,d){var u,t
H.I(b)
H.kE(c)
H.I(d)
if(a==null)return!1
u=H.bS(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mJ(H.cm(t[d],u),null,c,null)},
m:function(a,b,c,d){H.I(b)
H.kE(c)
H.I(d)
if(a==null)return a
if(H.ls(a,b,c,d))return a
throw H.d(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cn(b.substring(2))+H.lq(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
pX:function(a,b,c){return a.apply(b,H.cm(J.U(b)["$a"+H.l(c)],H.bS(b)))},
mO:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="X"||a.name==="L"||a===-1||a===-2||H.mO(u)}return!1},
lt:function(a,b){var u,t
if(a==null)return b==null||b.name==="X"||b.name==="L"||b===-1||b===-2||H.mO(b)
if(b==null||b===-1||b.name==="X"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fz(a,b)}u=J.U(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lt(a,b))throw H.d(H.aZ(a,H.kT(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="X"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="X"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aN("type" in a?a.type:l,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cA" in t.prototype))return!1
r=t.prototype["$a"+"cA"]
q=H.cm(r,u?a.slice(1):l)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mJ(H.cm(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.p7(h,b,g,d)},
p7:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aN(c[s],d,a[s],b))return!1}return!0},
pY:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
p5:function(a){var u,t,s,r,q=H.I($.mN.$1(a)),p=$.kx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mI.$2(a,q))
if(q!=null){p=$.kx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kS(u)
$.kx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kD[q]=u
return u}if(s==="-"){r=H.kS(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mR(a,u)
if(s==="*")throw H.d(P.j8(q))
if(v.leafTags[q]===true){r=H.kS(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mR(a,u)},
mR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lx(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kS:function(a){return J.lx(a,!1,null,!!a.$iM)},
p6:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kS(u)
else return J.lx(u,c,null,null)},
p1:function(){if(!0===$.lw)return
$.lw=!0
H.p2()},
p2:function(){var u,t,s,r,q,p,o,n
$.kx=Object.create(null)
$.kD=Object.create(null)
H.p0()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mT.$1(q)
if(p!=null){o=H.p6(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p0:function(){var u,t,s,r,q,p,o=C.K()
o=H.cf(C.L,H.cf(C.M,H.cf(C.z,H.cf(C.z,H.cf(C.N,H.cf(C.O,H.cf(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mN=new H.kA(r)
$.mI=new H.kB(q)
$.mT=new H.kC(p)},
cf:function(a,b){return a(b)||b},
nD:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a5("Illegal RegExp pattern ("+String(r)+")",a,null))},
pd:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mU:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var u=H.pe(a,b,c)
return u},
pe:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mU(b),'g'),H.oV(c))},
fU:function fU(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i1:function i1(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
kV:function kV(a){this.a=a},
fa:function fa(a){this.a=a
this.b=null},
ct:function ct(){},
iJ:function iJ(){},
iz:function iz(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a){this.a=a},
fQ:function fQ(a){this.a=a},
il:function il(a){this.a=a},
jv:function jv(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hy:function hy(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
nL:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ch(b,a))},
oC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.oT(a,b,c))
return b},
cJ:function cJ(){},
bK:function bK(){},
e4:function e4(){},
cK:function cK(){},
e5:function e5(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e6:function e6(){},
cL:function cL(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
oW:function(a){return J.lT(a?Object.keys(a):[],null)},
p9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ky:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lw==null){H.p1()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.j8("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lA()]
if(r!=null)return r
r=H.p5(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lA(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nC:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.af(a,0,4294967295,"length",null))
return J.lT(new Array(a),b)},
lT:function(a,b){return J.l5(H.c(a,[b]))},
l5:function(a){H.kE(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.dS.prototype}if(typeof a=="string")return J.c0.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.ky(a)},
ds:function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.ky(a)},
fA:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.ky(a)},
dt:function(a){if(typeof a=="string")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.d6.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bJ.prototype
return a}if(a instanceof P.X)return a
return J.ky(a)},
a3:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).u(a,b)},
lC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ds(a).j(a,b)},
kW:function(a,b,c){return J.fA(a).n(a,b,c)},
nf:function(a,b){return J.dt(a).D(a,b)},
ng:function(a,b,c){return J.cj(a).i1(a,b,c)},
nh:function(a,b,c,d){return J.cj(a).iY(a,b,c,d)},
ni:function(a,b){return J.dt(a).a2(a,b)},
fC:function(a,b){return J.fA(a).J(a,b)},
nj:function(a,b,c,d){return J.cj(a).jf(a,b,c,d)},
lD:function(a,b){return J.fA(a).K(a,b)},
nk:function(a){return J.cj(a).gj3(a)},
lE:function(a){return J.cj(a).gcv(a)},
dx:function(a){return J.U(a).gH(a)},
bx:function(a){return J.fA(a).gV(a)},
aG:function(a){return J.ds(a).gl(a)},
lF:function(a){return J.fA(a).jJ(a)},
nl:function(a,b){return J.cj(a).jL(a,b)},
nm:function(a,b,c){return J.dt(a).w(a,b,c)},
nn:function(a){return J.dt(a).jV(a)},
as:function(a){return J.U(a).i(a)},
a:function a(){},
hs:function hs(){},
dU:function dU(){},
dW:function dW(){},
i5:function i5(){},
d6:function d6(){},
bJ:function bJ(){},
b6:function b6(a){this.$ti=a},
l6:function l6(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dV:function dV(){},
dT:function dT(){},
dS:function dS(){},
c0:function c0(){}},P={
oe:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oM()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cg(new P.jx(s),1)).observe(u,{childList:true})
return new P.jw(s,u,t)}else if(self.setImmediate!=null)return P.oN()
return P.oO()},
of:function(a){self.scheduleImmediate(H.cg(new P.jy(H.n(a,{func:1,ret:-1})),0))},
og:function(a){self.setImmediate(H.cg(new P.jz(H.n(a,{func:1,ret:-1})),0))},
oh:function(a){P.le(C.t,H.n(a,{func:1,ret:-1}))},
le:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.aa(a.a,1000)
return P.on(u<0?0:u,b)},
mc:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.e.aa(a.a,1000)
return P.oo(u<0?0:u,b)},
on:function(a,b){var u=new P.fg()
u.fq(a,b)
return u},
oo:function(a,b){var u=new P.fg()
u.fs(a,b)
return u},
oi:function(a,b){var u,t,s
b.a=1
try{a.eS(new P.jJ(b),new P.jK(b),null)}catch(s){u=H.ag(s)
t=H.cl(s)
P.pb(new P.jL(b,u,t))}},
mp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaM")
if(u>=4){t=b.cg()
b.a=a.a
b.c=a.c
P.dc(b,t)}else{t=H.e(b.c,"$ibi")
b.a=2
b.c=a
a.dL(t)}},
dc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.kt(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.e(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.kt(i,i,g,r,q)
return}l=$.a2
if(l!=n)$.a2=n
else l=i
g=b.c
if(g===8)new P.jP(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jO(u,b,o).$0()}else if((g&2)!==0)new P.jN(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.U(g).$icA){if(g.a>=4){k=H.e(q.c,"$ibi")
q.c=null
b=q.bp(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mp(g,q)
return}}j=b.b
k=H.e(j.c,"$ibi")
j.c=null
b=j.bp(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.e(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
oH:function(a,b){if(H.fz(a,{func:1,args:[P.X,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.X,P.ay]})
if(H.fz(a,{func:1,args:[P.X]}))return H.n(a,{func:1,ret:null,args:[P.X]})
throw H.d(P.kX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oG:function(){var u,t
for(;u=$.ce,u!=null;){$.dr=null
t=u.b
$.ce=t
if(t==null)$.dq=null
u.a.$0()}},
oK:function(){$.lo=!0
try{P.oG()}finally{$.dr=null
$.lo=!1
if($.ce!=null)$.lB().$1(P.mK())}},
mF:function(a){var u=new P.eD(H.n(a,{func:1,ret:-1}))
if($.ce==null){$.ce=$.dq=u
if(!$.lo)$.lB().$1(P.mK())}else $.dq=$.dq.b=u},
oJ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ce
if(u==null){P.mF(a)
$.dr=$.dq
return}t=new P.eD(a)
s=$.dr
if(s==null){t.b=u
$.ce=$.dr=t}else{t.b=s.b
$.dr=s.b=t
if(t.b==null)$.dq=t}},
pb:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a2
if(C.k===u){P.kv(t,t,C.k,a)
return}u.toString
P.kv(t,t,u,H.n(u.co(a),s))},
mb:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a2
if(u===C.k){u.toString
return P.le(a,b)}return P.le(a,H.n(u.co(b),t))},
o5:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a2
if(u===C.k){u.toString
return P.mc(a,b)}t=u.e_(b,P.be)
$.a2.toString
return P.mc(a,H.n(t,s))},
kt:function(a,b,c,d,e){var u={}
u.a=d
P.oJ(new P.ku(u,e))},
mB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
oI:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kv:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.co(d):c.j4(d,-1)
P.mF(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
fg:function fg(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
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
jI:function jI(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jQ:function jQ(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a
this.b=null},
iC:function iC(){},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
cU:function cU(){},
iD:function iD(){},
be:function be(){},
an:function an(a,b){this.a=a
this.b=b},
km:function km(){},
ku:function ku(a,b){this.a=a
this.b=b},
jW:function jW(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function(a,b){return new H.aQ([a,b])},
l9:function(a,b){return new H.aQ([a,b])},
nH:function(a){return H.oX(a,new H.aQ([null,null]))},
dZ:function(a){return new P.jU([a])},
lk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
om:function(a,b,c){var u=new P.eS(a,b,[c])
u.c=a.e
return u},
nA:function(a,b,c){var u,t
if(P.lp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.az,a)
try{P.oF(a,u)}finally{if(0>=$.az.length)return H.h($.az,-1)
$.az.pop()}t=P.m9(b,H.mP(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l3:function(a,b,c){var u,t
if(P.lp(a))return b+"..."+c
u=new P.ab(b)
C.a.h($.az,a)
try{t=u
t.a=P.m9(t.a,a,", ")}finally{if(0>=$.az.length)return H.h($.az,-1)
$.az.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lp:function(a){var u,t
for(u=$.az.length,t=0;t<u;++t)if(a===$.az[t])return!0
return!1},
oF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.l(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.A();o=n,n=m){m=u.gI(u);++s
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
nG:function(a,b,c){var u=P.nF(b,c)
a.K(0,new P.hA(u,b,c))
return u},
lU:function(a,b){var u,t,s=P.dZ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t)s.h(0,H.B(a[t],b))
return s},
la:function(a){var u,t={}
if(P.lp(a))return"{...}"
u=new P.ab("")
try{C.a.h($.az,a)
u.a+="{"
t.a=!0
J.lD(a,new P.hE(t,u))
u.a+="}"}finally{if(0>=$.az.length)return H.h($.az,-1)
$.az.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jU:function jU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eS:function eS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
y:function y(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
ad:function ad(){},
ke:function ke(){},
hF:function hF(){},
ew:function ew(a,b){this.a=a
this.$ti=b},
k0:function k0(){},
eT:function eT(){},
fm:function fm(){},
o9:function(a,b,c,d){H.m(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oa(!1,b,c,d)
return},
oa:function(a,b,c,d){var u,t,s=$.n7()
if(s==null)return
u=0===c
if(u&&!0)return P.lh(s,b)
t=b.length
d=P.bM(c,d,t)
if(u&&d===t)return P.lh(s,b)
return P.lh(s,b.subarray(c,d))},
lh:function(a,b){if(P.oc(b))return
return P.od(a,b)},
od:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ag(t)}return},
oc:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ob:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ag(t)}return},
mE:function(a,b,c){var u,t,s
H.m(a,"$ib",[P.p],"$ab")
for(u=J.ds(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bT()
if((s&127)!==s)return t-b}return c-b},
lI:function(a,b,c,d,e,f){if(C.e.bk(f,4)!==0)throw H.d(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fM:function fM(){},
fN:function fN(){},
bX:function bX(){},
bC:function bC(){},
h9:function h9(){},
hp:function hp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(a){this.a=a},
jh:function jh(){},
jj:function jj(){},
kk:function kk(a){this.b=0
this.c=a},
ji:function ji(a){this.a=a},
kj:function kj(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fB:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.f]})
u=H.nW(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a5(a,null,null))},
ny:function(a){if(a instanceof H.ct)return a.i(0)
return"Instance of '"+H.c5(a)+"'"},
nI:function(a,b,c){var u,t
H.B(b,c)
u=J.nC(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
lV:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bx(a);u.A();)C.a.h(s,H.B(u.gI(u),c))
if(b)return s
return H.m(J.l5(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u,t=P.p
H.m(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib6",[t],"$ab6")
u=a.length
c=P.bM(b,c,u)
return H.m3(b>0||c<u?C.a.d9(a,b,c):a)}if(!!J.U(a).$icL)return H.nY(a,b,P.bM(b,c,a.length))
return P.o3(a,b,c)},
o3:function(a,b,c){var u,t,s,r,q=null
H.m(a,"$ii",[P.p],"$ai")
if(b<0)throw H.d(P.af(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.af(c,b,J.aG(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.af(c,b,s,q,q))
r.push(t.gI(t))}return H.m3(r)},
o_:function(a){return new H.ht(a,H.nD(a,!1,!0,!1))},
m9:function(a,b,c){var u=J.bx(b)
if(!u.A())return a
if(c.length===0){do a+=H.l(u.gI(u))
while(u.A())}else{a+=H.l(u.gI(u))
for(;u.A();)a=a+c+H.l(u.gI(u))}return a},
mf:function(){var u=H.nO()
if(u!=null)return P.o8(u)
throw H.d(P.K("'Uri.base' is not supported"))},
fn:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nd().b
if(typeof b!=="string")H.u(H.b0(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.am(c,"bX",0))
t=c.gje().cw(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c6(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nu:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dH:function(a){if(a>=10)return""+a
return"0"+a},
lM:function(a,b){return new P.bD(1e6*b+1000*a)},
dM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ny(a)},
dz:function(a){return new P.aO(!1,null,null,a)},
kX:function(a,b,c){return new P.aO(!0,a,b,c)},
ic:function(a,b){return new P.c7(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
bM:function(a,b,c){if(0>a||a>c)throw H.d(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.af(b,a,c,"end",null))
return b}return c},
m4:function(a,b){if(typeof a!=="number")return a.a1()
if(a<0)throw H.d(P.af(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.ac(e==null?J.aG(b):e)
return new P.hr(u,!0,a,c,"Index out of range")},
K:function(a){return new P.ja(a)},
j8:function(a){return new P.j7(a)},
m8:function(a){return new P.cT(a)},
bl:function(a){return new P.fT(a)},
v:function(a){return new P.eL(a)},
a5:function(a,b,c){return new P.hi(a,b,c)},
nJ:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.c([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
ly:function(a){H.p9(a)},
o8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.me(e<e?C.b.w(a,0,e):a,5,f).geY()
else if(u===32)return P.me(C.b.w(a,5,e),0,f).geY()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.p])
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
if(typeof r!=="number")return r.jZ()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.F()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.a1()
if(typeof n!=="number")return H.D(n)
if(m<n)n=m
if(typeof o!=="number")return o.a1()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.a1()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.a1()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.am(a,"..",o)))j=n>o+2&&C.b.am(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.am(a,"file",0)){if(q<=0){if(!C.b.am(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.w(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b_(a,o,n,"/");++e
n=h}k="file"}else if(C.b.am(a,"http",0)){if(t&&p+3===o&&C.b.am(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.am(a,"https",0)){if(t&&p+4===o&&C.b.am(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k3(a,r,q,p,o,n,m,k)}return P.op(a,0,e,r,q,p,o,n,m,k)},
mh:function(a){var u=P.f
return C.a.ji(H.c(a.split("&"),[u]),P.l9(u,u),new P.jf(C.l),[P.H,P.f,P.f])},
o7:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jc(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a2(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fB(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.f1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fB(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.f1()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jd(a)
t=new P.je(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a2(a,r)
if(n===58){if(r===b){++r
if(C.b.a2(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaE(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o7(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.e.aX(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
op:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ow(a,b,d)
else{if(d===b)P.dm(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ox(a,u,e-1):""
s=P.ot(a,e,f,!1)
if(typeof f!=="number")return f.F()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.ov(P.fB(C.b.w(a,r,g),new P.kf(a,f),n),j):n}else{q=n
s=q
t=""}p=P.ou(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.a1()
o=h<i?P.ll(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.os(a,i+1,c):n)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dm:function(a,b,c){throw H.d(P.a5(c,a,b))},
ov:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
ot:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a2(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.b.a2(a,u)!==93)P.dm(a,b,"Missing end `]` to match `[` in host")
P.mg(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.D(c)
t=b
for(;t<c;++t)if(C.b.a2(a,t)===58){P.mg(a,b,c)
return"["+a+"]"}return P.oz(a,b,c)},
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a2(a,u)
if(q===37){p=P.mz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ab("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ab("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dm(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a2(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ab("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mu(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ow:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.D(a,b)))P.dm(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dm(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.oq(t?a.toLowerCase():a)},
oq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ox:function(a,b,c){return P.dn(a,b,c,C.a_,!1)},
ou:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dn(a,b,c,C.E,!0):C.m.k5(d,new P.kg(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a9(u,"/"))u="/"+u
return P.oy(u,e,f)},
oy:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a9(a,"/"))return P.oA(a,!u||c)
return P.oB(a)},
ll:function(a,b,c,d){var u,t={}
H.m(d,"$iH",[P.f,null],"$aH")
if(a!=null){if(d!=null)throw H.d(P.dz("Both query and queryParameters specified"))
return P.dn(a,b,c,C.p,!0)}if(d==null)return
u=new P.ab("")
t.a=""
d.K(0,new P.kh(new P.ki(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
os:function(a,b,c){return P.dn(a,b,c,C.p,!0)},
mz:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a2(a,b+1)
t=C.b.a2(a,p)
s=H.kz(u)
r=H.kz(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aX(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c6(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
mu:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.D(o,a>>>4))
C.a.n(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.e.ii(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.D(o,p>>>4))
C.a.n(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cV(t,0,null)},
dn:function(a,b,c,d,e){var u=P.my(a,b,c,H.m(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.m(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a1()
if(typeof c!=="number")return H.D(c)
if(!(t<c))break
c$0:{q=C.b.a2(a,t)
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
if(p){P.dm(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a2(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mu(q)}}if(r==null)r=new P.ab("")
r.a+=C.b.w(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.D(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a1()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mx:function(a){if(C.b.a9(a,"."))return!0
return C.b.eA(a,"/.")!==-1},
oB:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.c([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a3(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oA:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
u=H.c([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaE(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaE(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r=a.length
if(r>=2&&P.mw(J.nf(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.ay(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
or:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dz("Invalid URL encoding"))}}return u},
lm:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.t(C.b.w(a,b,c))}else{r=H.c([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.d(P.dz("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.dz("Truncated URI"))
C.a.h(r,P.or(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.p],"$ab")
return new P.ji(!1).cw(r)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
me:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a5(m,a,t))}}if(s<0&&t>b)throw H.d(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaE(l)
if(r!==44||t!==p+7||!C.b.am(a,"base64",p+1))throw H.d(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.ju(0,a,o,u)
else{n=P.my(a,o,u,C.p,!0)
if(n!=null)a=C.b.b_(a,o,u,n)}return new P.jb(a,l,c)},
oD:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nJ(22,new P.kq(),P.S),n=new P.kp(o),m=new P.kr(),l=new P.ks(),k=H.e(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iS"),"]",5)
k=H.e(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iS"),"az",21)
k=H.e(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mD:function(a,b,c,d,e){var u,t,s,r,q
H.m(e,"$ib",[P.p],"$ab")
u=$.ne()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
R:function R(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
bD:function bD(a){this.a=a},
h5:function h5(){},
h6:function h6(){},
bE:function bE(){},
fF:function fF(){},
e8:function e8(){},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hr:function hr(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
cT:function cT(a){this.a=a},
fT:function fT(a){this.a=a},
i4:function i4(){},
ei:function ei(){},
h_:function h_(a){this.a=a},
eL:function eL(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
p:function p(){},
i:function i(){},
b5:function b5(){},
b:function b(){},
H:function H(){},
L:function L(){},
aa:function aa(){},
X:function X(){},
ay:function ay(){},
f:function f(){},
ab:function ab(a){this.a=a},
jf:function jf(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(){},
kp:function kp(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
k3:function k3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jD:function jD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oS:function(a){var u,t=J.U(a)
if(!!t.$ibn){u=t.ge3(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fl(a.data,a.height,a.width)},
oR:function(a){if(a instanceof P.fl)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.l9(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oQ:function(a){var u={}
a.K(0,new P.kw(u))
return u},
k5:function k5(){},
k7:function k7(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(){},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ol:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jV:function jV(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hw:function hw(){},
bc:function bc(){},
i2:function i2(){},
i9:function i9(){},
cQ:function cQ(){},
iG:function iG(){},
q:function q(){},
bf:function bf(){},
iX:function iX(){},
eQ:function eQ(){},
eR:function eR(){},
f0:function f0(){},
f1:function f1(){},
fc:function fc(){},
fd:function fd(){},
fj:function fj(){},
fk:function fk(){},
S:function S(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
bT:function bT(){},
i3:function i3(){},
eE:function eE(){},
dB:function dB(){},
dO:function dO(){},
eb:function eb(){},
ec:function ec(){},
c8:function c8(){},
ed:function ed(){},
ek:function ek(){},
eu:function eu(){},
iy:function iy(){},
f8:function f8(){},
f9:function f9(){}},W={
lG:function(){var u=document.createElement("a")
return u},
kZ:function(){var u=document.createElement("canvas")
return u},
nw:function(a,b,c){var u=document.body,t=(u&&C.x).ap(u,a,b,c)
t.toString
u=W.E
u=new H.d9(new W.ar(t),H.n(new W.h8(),{func:1,ret:P.R,args:[u]}),[u])
return H.e(u.gaQ(u),"$iV")},
nx:function(a){H.e(a,"$ik")
return"wheel"},
cw:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cj(a)
t=u.geP(a)
if(typeof t==="string")r=u.geP(a)}catch(s){H.ag(s)}return r},
lS:function(a){var u=document.createElement("img")
u.src=a
return u},
nz:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icD")
try{s.type=a}catch(u){H.ag(u)}return s},
jS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a,b,c,d){var u=W.jS(W.jS(W.jS(W.jS(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.mH(new W.jH(c),W.o)
if(u!=null&&!0)J.nh(a,b,u,!1)
return new W.jG(a,b,u,!1,[e])},
mq:function(a){var u=W.lG(),t=window.location
u=new W.bQ(new W.k_(u,t))
u.fh(a)
return u},
oj:function(a,b,c,d){H.e(a,"$iV")
H.I(b)
H.I(c)
H.e(d,"$ibQ")
return!0},
ok:function(a,b,c,d){var u,t,s
H.e(a,"$iV")
H.I(b)
H.I(c)
u=H.e(d,"$ibQ").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ms:function(){var u=P.f,t=P.lU(C.u,u),s=H.r(C.u,0),r=H.n(new W.kb(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.ka(t,P.dZ(u),P.dZ(u),P.dZ(u),null)
t.fp(null,new H.hI(C.u,r,[s,u]),q,null)
return t},
mH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.k)return a
return u.e_(a,b)},
x:function x(){},
fD:function fD(){},
dy:function dy(){},
fE:function fE(){},
cp:function cp(){},
bU:function bU(){},
by:function by(){},
bW:function bW(){},
cs:function cs(){},
bA:function bA(){},
cu:function cu(){},
fW:function fW(){},
Y:function Y(){},
cv:function cv(){},
fX:function fX(){},
b3:function b3(){},
b4:function b4(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
aH:function aH(){},
h2:function h2(){},
dJ:function dJ(){},
dK:function dK(){},
h3:function h3(){},
h4:function h4(){},
jB:function jB(a,b){this.a=a
this.b=b},
V:function V(){},
h8:function h8(){},
o:function o(){},
k:function k(){},
aI:function aI(){},
cz:function cz(){},
hd:function hd(){},
hh:function hh(){},
aP:function aP(){},
hn:function hn(){},
c_:function c_(){},
bn:function bn(){},
cC:function cC(){},
cD:function cD(){},
b7:function b7(){},
e_:function e_(){},
hO:function hO(){},
cH:function cH(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aR:function aR(){},
hT:function hT(){},
ae:function ae(){},
ar:function ar(a){this.a=a},
E:function E(){},
cM:function cM(){},
aS:function aS(){},
i7:function i7(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aT:function aT(){},
iw:function iw(){},
aU:function aU(){},
ix:function ix(){},
aV:function aV(){},
iA:function iA(){},
iB:function iB(a){this.a=a},
aJ:function aJ(){},
bd:function bd(){},
ej:function ej(){},
iH:function iH(){},
iI:function iI(){},
cX:function cX(){},
aW:function aW(){},
aK:function aK(){},
iK:function iK(){},
iL:function iL(){},
iR:function iR(){},
aX:function aX(){},
aY:function aY(){},
iV:function iV(){},
iW:function iW(){},
bP:function bP(){},
jg:function jg(){},
jt:function jt(){},
bh:function bh(){},
da:function da(){},
db:function db(){},
jC:function jC(){},
eG:function eG(){},
jR:function jR(){},
eY:function eY(){},
k4:function k4(){},
k8:function k8(){},
jA:function jA(){},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jH:function jH(a){this.a=a},
bQ:function bQ(a){this.a=a},
G:function G(){},
e7:function e7(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(){},
k1:function k1(){},
k2:function k2(){},
ka:function ka(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kb:function kb(){},
k9:function k9(){},
dN:function dN(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aD:function aD(){},
k_:function k_(a,b){this.a=a
this.b=b},
fo:function fo(a){this.a=a},
kl:function kl(a){this.a=a},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eZ:function eZ(){},
f_:function f_(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
di:function di(){},
dj:function dj(){},
f6:function f6(){},
f7:function f7(){},
fb:function fb(){},
fe:function fe(){},
ff:function ff(){},
dk:function dk(){},
dl:function dl(){},
fh:function fh(){},
fi:function fi(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){}},O={
l_:function(a){var u=new O.a4([a])
u.bm(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
lR:function(a,b){var u,t,s,r=new O.dR()
r.r=0
r.sd_(null)
r.scp(null)
if(a==null){u=$.mi
if(u==null){u=new V.W(1,0)
$.mi=u
t=u}else t=u}else t=a
if(!J.a3(r.d,t)){s=r.d
r.d=t
u=new D.J("blurDirection",s,t,[V.W])
u.b=!0
r.N(u)}r.se2(b)
r.scq(null)
r.sb9(0)
return r},
dR:function dR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cF:function cF(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(){}},E={
lP:function(a){var u=new E.ao()
u.a=""
u.b=!0
u.sfg(0,O.l_(E.ao))
u.y.b2(u.gjv(),u.gjy())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sd6(0,a)
return u},
o0:function(a,b){var u=new E.ie(a)
u.fd(a,b)
return u},
o4:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibW)return E.ma(a,!0,!0,!0,!1)
u=W.kZ()
t=u.style
t.width="100%"
t.height="100%"
s.gcv(a).h(0,u)
return E.ma(u,!0,!0,!0,!1)},
ma:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ep(),j=H.e(C.n.d2(a,"webgl2",P.nH(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(j==null)H.u(P.v("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o0(j,a)
u=new T.iN(j)
u.b=H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ex(a)
t=new X.hv()
t.c=new X.aC(!1,!1,!1)
t.shX(P.dZ(P.p))
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.bq()
t.x=V.bq()
t.ch=t.Q=1
u.c=t
t=new X.hC(u)
t.r=0
t.x=V.bq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iU(u)
t.f=V.bq()
t.r=V.bq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfO(H.c([],[[P.cU,P.X]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.ghi(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.gho(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.ghc(),o),!1,p))
t=u.z
n=W.b7
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.ghs(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.ghq(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.ghw(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.ghA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.ghy(),q),!1,r))
n=u.z
m=W.bh;(n&&C.a).h(n,W.a7(a,H.I(W.nx(a)),H.n(u.ghC(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.ghk(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.ghm(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.ghE(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.ghU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.ghQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.ghS(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dN()
return k},
fO:function fO(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iQ:function iQ(a){this.a=a}},Z={
li:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.eC(b,u)},
aL:function(a){return new Z.b_(a)},
eC:function eC(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d8:function d8(a){this.a=a},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
N:function(){var u=new D.cx()
u.saA(null)
u.sb5(null)
u.c=null
u.d=0
return u},
fR:function fR(){},
cx:function cx(){var _=this
_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
z:function z(){this.b=null},
bH:function bH(a){this.b=null
this.$ti=a},
bI:function bI(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dI:function dI(){},
a6:function a6(){},
dY:function dY(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
ea:function ea(){},
eh:function eh(){},
em:function em(){},
en:function en(){},
eo:function eo(){}},X={dD:function dD(a,b){this.a=a
this.b=b},dX:function dX(a,b){this.a=a
this.b=b},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},e0:function e0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i8:function i8(){},er:function er(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iU:function iU(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ex:function ex(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lH:function(a,b){var u,t,s,r,q=new X.fL()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.ld(null)
q.cx=new V.au(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.lb()
q.sau(0,512)
q.saq(0,512)
u=new V.au(0,0,0,1)
if(!q.cx.u(0,u)){t=q.cx
q.cx=u
s=new D.J("color",t,u,[V.au])
s.b=!0
q.a6(s)}if(q.cy){q.cy=!1
s=new D.J("clearColor",!0,!1,[P.R])
s.b=!0
q.a6(s)}s=q.db
if(!(Math.abs(s-2000)<$.O().a)){q.db=2000
s=new D.J("depth",s,2000,[P.A])
s.b=!0
q.a6(s)}if(!q.f){q.f=!0
s=new D.J("autoResize",!1,!0,[P.R])
s.b=!0
q.a6(s)}s=q.r
if(!(Math.abs(s-1)<$.O().a)){q.r=1
s=new D.J("autoResizeScalarX",s,1,[P.A])
s.b=!0
q.a6(s)}s=q.x
if(!(Math.abs(s-1)<$.O().a)){q.x=1
s=new D.J("autoResizeScalarY",s,1,[P.A])
s.b=!0
q.a6(s)}r=V.lb()
if(!J.a3(q.dy,r)){t=q.dy
q.dy=r
s=new D.J("region",t,r,[V.cP])
s.b=!0
q.a6(s)}return q},
lQ:function(a){var u=new X.hj(),t=new V.au(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lb()
u.r=t
return u},
m_:function(a){var u,t,s=new X.e9()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gft())
t=new D.J("mover",u,s.b,[U.ai])
t.b=!0
s.a6(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.J("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.a6(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.J("near",t,0.1,[P.A])
t.b=!0
s.a6(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.J("far",t,2000,[P.A])
t.b=!0
s.a6(t)}return s},
fL:function fL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bV:function bV(){},
hj:function hj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(){this.b=this.a=null},
e9:function e9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){}},V={
ph:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.bk(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.as("null",c)
return C.b.as(C.i.eT(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
ci:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.A],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.as(u[p],s))}return u},
du:function(a){return C.i.jS(Math.pow(2,C.W.cJ(Math.log(H.oP(a))/Math.log(2))))},
c3:function(){var u=$.lX
return u==null?$.lX=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bq:function(){var u=$.m1
return u==null?$.m1=new V.a9(0,0):u},
nM:function(){var u=$.cN
return u==null?$.cN=new V.ap(0,0,0):u},
lb:function(){var u=$.m6
return u==null?$.m6=V.m5(0,0,1,1):u},
m5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cP(a,b,c,d)},
eB:function(){var u=$.mn
return u==null?$.mn=new V.Z(0,0,0):u},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.io()
u.fe(a)
return u},
iT:function(){var u=new V.iS(),t=P.f
u.sik(new H.aQ([t,V.cS]))
u.sio(new H.aQ([t,V.cZ]))
u.c=null
return u},
bk:function bk(){},
aB:function aB(){},
e1:function e1(){},
aw:function aw(){this.a=null},
id:function id(){this.b=this.a=null},
io:function io(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a){this.b=a
this.c=null},
iS:function iS(){this.c=this.b=this.a=null},
d_:function d_(a){this.b=a
this.a=this.c=null},
pc:function(a){P.o5(C.T,new V.kU(a))},
o2:function(a){var u=new V.is()
u.ff(a,!0)
return u},
bB:function bB(){},
kU:function kU(a){this.a=a},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a){this.a=a
this.c=null},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(){this.b=this.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a}},U={
l0:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){this.b=this.a=null},
cB:function cB(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
ey:function ey(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ez:function ez(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=null,a3="blurValue",a4="modifiers",a5=34067,a6=V.o2("Test 041"),a7=W.kZ()
a7.className="pageLargeCanvas"
a7.id=a1
a6.a.appendChild(a7)
u=[P.f]
a6.dY(H.c(["Test of the Gaussian blur technique with a solid blur value for the whole image."],u))
a6.iX(H.c(["blurValue"],u))
a6.dY(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a1)
if(t==null)H.u(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.o4(t,!0,!0,!0,!1)
r=new U.cB()
r.bm(U.ai)
r.b2(r.gh4(),r.ghI())
r.e=null
r.f=V.c3()
r.r=0
q=s.r
p=new U.ez()
o=U.l0()
o.sd1(0,!0)
o.scQ(6.283185307179586)
o.scS(0)
o.sak(0,0)
o.scR(100)
o.sZ(0)
o.scA(0.5)
p.b=o
n=p.gaV()
o.gq().h(0,n)
o=U.l0()
o.sd1(0,!0)
o.scQ(6.283185307179586)
o.scS(0)
o.sak(0,0)
o.scR(100)
o.sZ(0)
o.scA(0.5)
p.c=o
o.gq().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aC(!1,!1,!1)
l=p.d
p.d=m
o=[X.aC]
n=new D.J(a4,l,m,o)
n.b=!0
p.S(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.J("invertX",n,!1,[P.R])
n.b=!0
p.S(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.J("invertY",n,!1,[P.R])
n.b=!0
p.S(n)}p.b8(q)
r.h(0,p)
q=s.r
p=new U.ey()
n=U.l0()
n.sd1(0,!0)
n.scQ(6.283185307179586)
n.scS(0)
n.sak(0,0)
n.scR(100)
n.sZ(0)
n.scA(0.2)
p.b=n
n.gq().h(0,p.gaV())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aC(!0,!1,!1)
l=p.c
p.c=m
n=new D.J(a4,l,m,o)
n.b=!0
p.S(n)
p.b8(q)
r.h(0,p)
q=s.r
p=new U.eA()
p.c=0.01
p.e=p.d=0
m=new X.aC(!1,!1,!1)
p.b=m
o=new D.J(a4,a2,m,o)
o.b=!0
p.S(o)
p.b8(q)
r.h(0,p)
k=V.ba(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.dF()
q.a=k
r.h(0,q)
j=X.m_(r)
i=new O.e2()
i.sfD(O.l_(V.av))
i.e.b2(i.gh8(),i.gha())
q=new O.b9(i,"emission")
q.c=C.d
q.f=new V.ah(0,0,0)
i.f=q
q=new O.b9(i,"ambient")
q.c=C.d
q.f=new V.ah(0,0,0)
i.r=q
q=new O.b9(i,"diffuse")
q.c=C.d
q.f=new V.ah(0,0,0)
i.x=q
q=new O.b9(i,"invDiffuse")
q.c=C.d
q.f=new V.ah(0,0,0)
i.y=q
q=new O.hN(i,"specular")
q.c=C.d
q.f=new V.ah(0,0,0)
q.ch=100
i.z=q
q=new O.hK(i,"bump")
q.c=C.d
i.Q=q
i.ch=null
q=new O.b9(i,"reflect")
q.c=C.d
q.f=new V.ah(0,0,0)
i.cx=q
q=new O.hM(i,"refract")
q.c=C.d
q.f=new V.ah(0,0,0)
q.ch=1
i.cy=q
q=new O.hJ(i,"alpha")
q.c=C.d
q.f=1
i.db=q
q=new D.dY()
q.bm(D.a6)
q.sfM(H.c([],[D.dI]))
q.shW(H.c([],[D.ea]))
q.sij(H.c([],[D.eh]))
q.siw(H.c([],[D.em]))
q.six(H.c([],[D.en]))
q.siy(H.c([],[D.eo]))
q.ch=q.Q=null
q.d4(q.gh6(),q.ghG(),q.ghK())
i.dx=q
p=q.Q
q=p==null?q.Q=D.N():p
q.h(0,i.gi3())
q=i.dx
p=q.ch
q=p==null?q.ch=D.N():p
q.h(0,i.gav())
i.dy=null
q=i.r
q.saC(0,new V.ah(0.3,0.3,0.3))
q=i.x
q.saC(0,new V.ah(0.8,0.8,0.8))
q=i.x
p=s.f.jr("../resources/Test.png")
o=q.c
if(o!==C.f){if(o===C.d)q.aJ()
q.c=C.f
q.ib(a2)
o=q.a
o.a=null
o.N(a2)}q.ia(p)
h=X.lH(!0,!1)
g=new M.dL()
g.sfG(0,O.l_(E.ao))
g.d.b2(g.ghe(),g.ghg())
g.x=g.r=g.f=g.e=null
f=X.lQ(a2)
g.sba(a2)
g.sb0(0,f)
g.sbg(a2)
q=g.d
e=F.lc()
F.dp(e,a2,a2,1,1,1,0,0,1)
F.dp(e,a2,a2,1,1,0,1,0,3)
F.dp(e,a2,a2,1,1,0,0,1,2)
F.dp(e,a2,a2,1,1,-1,0,0,0)
F.dp(e,a2,a2,1,1,0,-1,0,0)
F.dp(e,a2,a2,1,1,0,0,-1,3)
e.aL()
q.h(0,E.lP(e))
g.sbg(i)
g.sb0(0,h)
g.sba(j)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a5,d)
p.texParameteri(a5,10242,10497)
p.texParameteri(a5,10243,10497)
p.texParameteri(a5,10241,9729)
p.texParameteri(a5,10240,9729)
p.bindTexture(a5,a2)
c=new T.el()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aU(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aU(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aU(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aU(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aU(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aU(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.l1(a2,a2)
q=new O.ef()
q.b=1.0471975511965976
q.d=new V.ah(1,1,1)
l=q.c
q.c=c
c.gq().h(0,q.gav())
p=new D.J("boxTexture",l,q.c,[T.el])
p.b=!0
q.N(p)
b.sbg(q)
b.sb0(0,h)
b.sba(j)
q=h.ch
a=new M.dP()
a.b=X.lH(!0,!1)
p=O.lR(a2,a2)
o=a.ga_()
p.gq().h(0,o)
a.c=p
a.d=M.l1(a.b,p)
p=a.b.ch
n=$.mj
p=O.lR(n==null?$.mj=new V.W(0,1):n,p)
p.gq().h(0,o)
a.e=p
a.f=M.l1(a2,p)
a.c.sb9(0)
a.e.sb9(0)
a.c.se2(q)
a.c.scq(a2)
a.e.scq(a2)
a.c.sd_(a2)
a.e.sd_(a2)
a.c.scp(a2)
a.e.scp(a2)
a.f.sb0(0,a2)
q=M.ax
p=H.c([b,g,a],[q])
o=new M.dE()
o.bm(q)
o.e=!1
o.f=null
o.b2(o.ghM(),o.ghO())
o.ai(0,p)
q=s.d
if(q!==o){if(q!=null)q.gq().Y(0,s.gde())
s.d=o
o.gq().h(0,s.gde())
s.df()}a0=new U.kF(a)
q=new V.ia(a3)
u=u.getElementById(a3)
q.c=u
if(u==null)H.u("Failed to find blurValue for RadioGroup")
q.dW(0,"0.0",new U.kG(a0),!0)
q.ao(0,"0.1",new U.kH(a0))
q.ao(0,"0.2",new U.kK(a0))
q.ao(0,"0.3",new U.kL(a0))
q.ao(0,"0.4",new U.kM(a0))
q.ao(0,"0.5",new U.kN(a0))
q.ao(0,"0.6",new U.kO(a0))
q.ao(0,"0.7",new U.kP(a0))
q.ao(0,"0.8",new U.kQ(a0))
q.ao(0,"0.9",new U.kR(a0))
q.ao(0,"1.0",new U.kI(a0))
u=s.z
if(u==null)u=s.z=D.N()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new U.kJ(a6,a),q)
if(u.b==null)u.sb5(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pc(s)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b}},M={
l1:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dG()
k.sba(l)
k.sb0(0,a)
k.sbg(b)
u=E.lP(l)
t=F.lc()
s=t.a
r=new V.Z(-1,-1,1)
r=r.B(0,Math.sqrt(r.G(r)))
q=s.br(new V.br(1,2,4,6),new V.au(1,0,0,1),new V.ap(-1,-1,0),new V.a9(0,1),r,l)
s=t.a
r=new V.Z(1,-1,1)
r=r.B(0,Math.sqrt(r.G(r)))
p=s.br(new V.br(0,3,4,6),new V.au(0,0,1,1),new V.ap(1,-1,0),new V.a9(1,1),r,l)
s=t.a
r=new V.Z(1,1,1)
r=r.B(0,Math.sqrt(r.G(r)))
o=s.br(new V.br(0,2,5,6),new V.au(0,1,0,1),new V.ap(1,1,0),new V.a9(1,0),r,l)
s=t.a
r=V.bq()
n=new V.Z(-1,1,1)
n=n.B(0,Math.sqrt(n.G(n)))
m=s.br(new V.br(0,2,4,7),new V.au(1,1,0,1),new V.ap(-1,1,0),r,n,l)
t.d.iZ(H.c([q,p,o,m],[F.aE]))
t.aL()
u.sd6(0,t)
k.d=u
k.e=null
return k},
dE:function dE(){var _=this
_.c=_.b=_.a=_.f=_.e=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){}},A={
nK:function(a,b){var u=a.aw,t=new A.e3(b,u)
t.bW(b,u)
t.fc(a,b)
return t},
lf:function(a,b,c,d,e){var u=new A.j0(a,c,e)
u.f=d
u.siz(P.nI(d,0,P.p))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
dQ:function dQ(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hl:function hl(a,b){this.a=a
this.b=b},
e3:function e3(a,b){var _=this
_.bw=_.e8=_.bv=_.aw=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eo=_.cD=_.en=_.bJ=_.em=_.el=_.bI=_.bH=_.ek=_.ej=_.bG=_.bF=_.bE=_.ei=_.eh=_.bD=_.eg=_.ef=_.bC=_.ee=_.ed=_.bB=_.bA=_.ec=_.eb=_.bz=_.by=_.ea=_.e9=_.bx=null
_.cI=_.es=_.cH=_.er=_.cG=_.eq=_.cF=_.ep=_.cE=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aD=b3
_.aw=b4
_.bv=b5},
d0:function d0(a,b){this.b=a
this.c=b},
d3:function d3(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d1:function d1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bY:function bY(a,b){this.a=a
this.b=b},
eg:function eg(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
es:function es(){},
j5:function j5(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
et:function et(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ko:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dp:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.Z(u+a3,t+a1,s+a2)
q=new V.Z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.Z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ko(i)
l=F.ko(j.b)
k=F.pf(d,a0,new F.kn(j,F.ko(j.c),F.ko(j.d),l,m,c),b)
if(k!=null)a.jt(k)},
pf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aE,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.lc()
t=H.c([],[F.aE])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jk(g,g,new V.au(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cz(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jk(g,g,new V.au(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cz(d))}}u.d.j_(a+1,b+1,t)
return u},
cy:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.v("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.ac()
return u},
nE:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.u(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.v("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ac()
return u},
lc:function(){var u=new F.ee(),t=new F.jl(u)
t.b=!1
t.siA(H.c([],[F.aE]))
u.a=t
t=new F.ir(u)
t.sce(H.c([],[F.bL]))
u.b=t
t=new F.iq(u)
t.sfV(H.c([],[F.bo]))
u.c=t
t=new F.ip(u)
t.sfP(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
jk:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aE(),r=new F.jq()
r.sce(H.c([],[F.bL]))
s.b=r
r=new F.jp()
u=[F.bo]
r.sfW(H.c([],u))
r.sfX(H.c([],u))
s.c=r
r=new F.jm()
u=[F.a8]
r.sfQ(H.c([],u))
r.sfR(H.c([],u))
r.sfS(H.c([],u))
s.d=r
h=$.n8()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bv().a)!==0?e:t
s.x=(u&$.bu().a)!==0?b:t
s.y=(u&$.b1().a)!==0?f:t
s.z=(u&$.bw().a)!==0?g:t
s.Q=(u&$.n9().a)!==0?c:t
s.ch=(u&$.co().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(){this.b=this.a=null},
bL:function bL(){this.a=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
aE:function aE(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
jl:function jl(a){this.a=a
this.c=this.b=null},
jm:function jm(){this.d=this.c=this.b=null},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(){this.c=this.b=null},
jq:function jq(){this.b=null}},T={
ld:function(a){var u=new T.iM()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bO:function bO(){},
cY:function cY(){},
iM:function iM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
el:function el(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iN:function iN(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iP:function iP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iO:function iO(a,b,c,d,e,f,g){var _=this
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
H.l7.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gH:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.c5(a)+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iR:1}
J.dU.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dW.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i5.prototype={}
J.d6.prototype={}
J.bJ.prototype={
i:function(a){var u=a[$.mX()]
if(u==null)return this.f7(a)
return"JavaScript function for "+H.l(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.b6.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.u(P.K("add"))
a.push(b)},
Y:function(a,b){var u
if(!!a.fixed$length)H.u(P.K("remove"))
for(u=0;u<a.length;++u)if(J.a3(a[u],b)){a.splice(u,1)
return!0}return!1},
ai:function(a,b){var u,t
H.m(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.u(P.K("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.F)(b),++t)a.push(b[t])},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bl(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jp:function(a){return this.m(a,"")},
ji:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bl(a))}return t},
jh:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.C(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bl(a))}throw H.d(H.l4())},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
d9:function(a,b,c){if(b<0||b>a.length)throw H.d(P.af(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.af(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
d8:function(a,b){return this.d9(a,b,null)},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.l4())},
dZ:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.C(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bl(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a3(a[u],b))return!0
return!1},
i:function(a){return P.l3(a,"[","]")},
gV:function(a){return new J.at(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.K("set length"))
if(b<0)throw H.d(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.ch(a,b))
return a[b]},
n:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.u(P.K("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ch(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.l6.prototype={}
J.at.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.F(s))
u=t.c
if(u>=r){t.sdw(null)
return!1}t.sdw(s[u]);++t.c
return!0},
sdw:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
J.dV.prototype={
jS:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.K(""+a+".toInt()"))},
cJ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.K(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.K(""+a+".round()"))},
eT:function(a,b){var u,t
if(b>20)throw H.d(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bi:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a2(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.K("Unexpected toString result: "+u))
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
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
t:function(a,b){if(typeof b!=="number")throw H.d(H.b0(b))
return a*b},
bk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dS(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.K("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.dR(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ii:function(a,b){if(b<0)throw H.d(H.b0(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iaa:1}
J.dT.prototype={$ip:1}
J.dS.prototype={}
J.c0.prototype={
a2:function(a,b){if(b<0)throw H.d(H.ch(a,b))
if(b>=a.length)H.u(H.ch(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.ch(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.d(P.kX(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
c=P.bM(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
am:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.am(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.b0(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a1()
if(b<0)throw H.d(P.ic(b,null))
if(b>c)throw H.d(P.ic(b,null))
if(c>a.length)throw H.d(P.ic(c,null))
return a.substring(b,c)},
ay:function(a,b){return this.w(a,b,null)},
jV:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
as:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
eB:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eA:function(a,b){return this.eB(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilZ:1,
$if:1}
H.t.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a2(this.a,b)},
$ad7:function(){return[P.p]},
$ay:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h7.prototype={}
H.c1.prototype={
gV:function(a){var u=this
return new H.cE(u,u.gl(u),[H.am(u,"c1",0)])},
bS:function(a,b){return this.f6(0,H.n(b,{func:1,ret:P.R,args:[H.am(this,"c1",0)]}))}}
H.cE.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.ds(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.bl(s))
u=t.c
if(u>=q){t.sb3(null)
return!1}t.sb3(r.J(s,u));++t.c
return!0},
sb3:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.hG.prototype={
gV:function(a){return new H.hH(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aG(this.a)},
J:function(a,b){return this.b.$1(J.fC(this.a,b))},
$ai:function(a,b){return[b]}}
H.hH.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sb3(u.c.$1(t.gI(t)))
return!0}u.sb3(null)
return!1},
gI:function(a){return this.a},
sb3:function(a){this.a=H.B(a,H.r(this,1))},
$ab5:function(a,b){return[b]}}
H.hI.prototype={
gl:function(a){return J.aG(this.a)},
J:function(a,b){return this.b.$1(J.fC(this.a,b))},
$ac1:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d9.prototype={
gV:function(a){return new H.ju(J.bx(this.a),this.b,this.$ti)}}
H.ju.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bZ.prototype={}
H.d7.prototype={
n:function(a,b,c){H.B(c,H.am(this,"d7",0))
throw H.d(P.K("Cannot modify an unmodifiable list"))}}
H.ev.prototype={}
H.fU.prototype={
i:function(a){return P.la(this)},
n:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nt()},
$iH:1}
H.fV.prototype={
gl:function(a){return this.a},
bs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bs(0,b))return
return this.dz(b)},
dz:function(a){return this.b[H.I(a)]},
K:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.dz(r),p))}}}
H.iY.prototype={
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
H.i1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j9.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kV.prototype={
$1:function(a){if(!!J.U(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.fa.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.ct.prototype={
i:function(a){return"Closure '"+H.c5(this).trim()+"'"},
$ibF:1,
gjY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iJ.prototype={}
H.iz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cn(u)+"'"}}
H.cq.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cO(this.a)
else u=typeof t!=="object"?J.dx(t):H.cO(t)
return(u^H.cO(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c5(u)+"'")}}
H.j_.prototype={
i:function(a){return this.a}}
H.fQ.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jv.prototype={
i:function(a){return"Assertion failed: "+P.dM(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
gjo:function(a){return this.a===0},
gab:function(a){return new H.hy(this,[H.r(this,0)])},
bs:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dt(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dt(t,b)}else return s.jl(b)},
jl:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cN(u.c2(t,u.cM(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.jm(b)},
jm:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c2(r,s.cM(a))
t=s.cN(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.di(u==null?s.b=s.cc():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.di(t==null?s.c=s.cc():t,b,c)}else s.jn(b,c)},
jn:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.cc()
t=q.cM(a)
s=q.c2(u,t)
if(s==null)q.ci(u,t,[q.bX(a,b)])
else{r=q.cN(s,a)
if(r>=0)s[r].b=b
else s.push(q.bX(a,b))}},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bl(s))
u=u.c}},
di:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bn(a,b)
if(u==null)t.ci(a,b,t.bX(b,c))
else u.b=c},
fv:function(){this.r=this.r+1&67108863},
bX:function(a,b){var u,t=this,s=new H.hx(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fv()
return s},
cM:function(a){return J.dx(a)&0x3ffffff},
cN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a3(a[t].a,b))return t
return-1},
i:function(a){return P.la(this)},
bn:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
fL:function(a,b){delete a[b]},
dt:function(a,b){return this.bn(a,b)!=null},
cc:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ci(t,u,t)
this.fL(t,u)
return t}}
H.hx.prototype={}
H.hy.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.sdj(null)
return!1}else{u.sdj(t.a)
u.c=u.c.c
return!0}}},
sdj:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.kC.prototype={
$1:function(a){return this.a(H.I(a))},
$S:33}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilZ:1,
$inZ:1}
H.cJ.prototype={$icJ:1}
H.bK.prototype={$ibK:1,$io6:1}
H.e4.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cK.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oU(c)
H.bj(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.A]},
$ay:function(){return[P.A]},
$ii:1,
$ai:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e5.prototype={
n:function(a,b,c){H.ac(c)
H.bj(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.p]},
$ay:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hV.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.e6.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$ipC:1}
H.cL.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icL:1,
$iS:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
P.jx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.jw.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:32}
P.jy.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fg.prototype={
fq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.kd(this,b),0),a)
else throw H.d(P.K("`setTimeout()` not found."))},
fs:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.kc(this,a,Date.now(),b),0),a)
else throw H.d(P.K("Periodic timer."))},
$ibe:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kc.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.fb(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bi.prototype={
js:function(a){if(this.c!==6)return!0
return this.b.b.cZ(H.n(this.d,{func:1,ret:P.R,args:[P.X]}),a.a,P.R,P.X)},
jk:function(a){var u=this.e,t=P.X,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fz(u,{func:1,args:[P.X,P.ay]}))return H.lv(r.jN(u,a.a,a.b,null,t,P.ay),s)
else return H.lv(r.cZ(H.n(u,{func:1,args:[P.X]}),a.a,null,t),s)}}
P.aM.prototype={
eS:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oH(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aM($.a2,[c])
s=b==null?1:3
this.dl(new P.bi(t,s,a,b,[r,c]))
return t},
jR:function(a,b){return this.eS(a,null,b)},
dl:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaM")
s=u.a
if(s<4){u.dl(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kv(null,null,s,H.n(new P.jI(t,a),{func:1,ret:-1}))}},
dL:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaM")
u=q.a
if(u<4){q.dL(a)
return}p.a=u
p.c=q.c}o.a=p.bp(a)
u=p.b
u.toString
P.kv(null,null,u,H.n(new P.jM(o,p),{func:1,ret:-1}))}},
cg:function(){var u=H.e(this.c,"$ibi")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dn:function(a){var u,t,s=this,r=H.r(s,0)
H.lv(a,{futureOr:1,type:r})
u=s.$ti
if(H.ls(a,"$icA",u,"$acA"))if(H.ls(a,"$iaM",u,null))P.mp(a,s)
else P.oi(a,s)
else{t=s.cg()
H.B(a,r)
s.a=4
s.c=a
P.dc(s,t)}},
dq:function(a,b){var u,t=this
H.e(b,"$iay")
u=t.cg()
t.a=8
t.c=new P.an(a,b)
P.dc(t,u)},
$icA:1}
P.jI.prototype={
$0:function(){P.dc(this.a,this.b)},
$S:0}
P.jM.prototype={
$0:function(){P.dc(this.b,this.a.a)},
$S:0}
P.jJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.dn(a)},
$S:15}
P.jK.prototype={
$2:function(a,b){H.e(b,"$iay")
this.a.dq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:51}
P.jL.prototype={
$0:function(){this.a.dq(this.b,this.c)},
$S:0}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eO(H.n(s.d,{func:1}),null)}catch(r){u=H.ag(r)
t=H.cl(r)
if(o.d){s=H.e(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.U(n).$icA){if(n instanceof P.aM&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jR(new P.jQ(p),null)
s.a=!1}},
$S:3}
P.jQ.prototype={
$1:function(a){return this.a},
$S:52}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cZ(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ag(o)
t=H.cl(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$ian")
r=m.c
if(H.C(r.js(u))&&r.e!=null){q=m.b
q.b=r.jk(u)
q.a=!1}}catch(p){t=H.ag(p)
s=H.cl(p)
r=H.e(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.eD.prototype={}
P.iC.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aM($.a2,[P.p])
r.a=0
u=H.r(s,0)
t=H.n(new P.iE(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iF(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.iE.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.r(this.b,0)]}}}
P.iF.prototype={
$0:function(){this.b.dn(this.a.a)},
$S:0}
P.cU.prototype={}
P.iD.prototype={}
P.be.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.km.prototype={$ipR:1}
P.ku.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e8():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jW.prototype={
jO:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a2){a.$0()
return}P.mB(r,r,this,a,-1)}catch(s){u=H.ag(s)
t=H.cl(s)
P.kt(r,r,this,u,H.e(t,"$iay"))}},
jP:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.a2){a.$1(b)
return}P.mC(r,r,this,a,b,-1,c)}catch(s){u=H.ag(s)
t=H.cl(s)
P.kt(r,r,this,u,H.e(t,"$iay"))}},
j4:function(a,b){return new P.jY(this,H.n(a,{func:1,ret:b}),b)},
co:function(a){return new P.jX(this,H.n(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.jZ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eO:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.k)return a.$0()
return P.mB(null,null,this,a,b)},
cZ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a2===C.k)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
jN:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a2===C.k)return a.$2(b,c)
return P.oI(null,null,this,a,b,c,d,e,f)}}
P.jY.prototype={
$0:function(){return this.a.eO(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jX.prototype={
$0:function(){return this.a.jO(this.b)},
$S:3}
P.jZ.prototype={
$1:function(a){var u=this.c
return this.a.jP(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jU.prototype={
gV:function(a){var u=this,t=new P.eS(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icb")!=null}else{t=this.fH(b)
return t}},
fH:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dA(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dk(u==null?s.b=P.lk():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dk(t==null?s.c=P.lk():t,b)}else return s.fw(0,b)},
fw:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lk()
t=r.dr(b)
s=u[t]
if(s==null)u[t]=[r.cd(b)]
else{if(r.c0(s,b)>=0)return!1
s.push(r.cd(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i_(this.c,b)
else return this.hZ(0,b)},
hZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dA(r,b)
t=s.c0(u,b)
if(t<0)return!1
s.dT(u.splice(t,1)[0])
return!0},
dk:function(a,b){H.B(b,H.r(this,0))
if(H.e(a[b],"$icb")!=null)return!1
a[b]=this.cd(b)
return!0},
i_:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icb")
if(u==null)return!1
this.dT(u)
delete a[b]
return!0},
dE:function(){this.r=1073741823&this.r+1},
cd:function(a){var u,t=this,s=new P.cb(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dE()
return s},
dT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dE()},
dr:function(a){return J.dx(a)&1073741823},
dA:function(a,b){return a[this.dr(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a3(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eS.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.sdm(null)
return!1}else{u.sdm(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sdm:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
P.hA.prototype={
$2:function(a,b){this.a.n(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.hB.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cE(a,this.gl(a),[H.ck(this,a,"y",0)])},
J:function(a,b){return this.j(a,b)},
jU:function(a,b){var u,t=this,s=H.c([],[H.ck(t,a,"y",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
jT:function(a){return this.jU(a,!0)},
jf:function(a,b,c,d){var u
H.B(d,H.ck(this,a,"y",0))
P.bM(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l3(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:5}
P.ad.prototype={
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.ck(s,a,"ad",0),H.ck(s,a,"ad",1)]})
for(u=J.bx(s.gab(a));u.A();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aG(this.gab(a))},
i:function(a){return P.la(a)},
$iH:1}
P.ke.prototype={
n:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.d(P.K("Cannot modify unmodifiable map"))}}
P.hF.prototype={
j:function(a,b){return J.lC(this.a,b)},
n:function(a,b,c){J.kW(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
K:function(a,b){J.lD(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gl:function(a){return J.aG(this.a)},
i:function(a){return J.as(this.a)},
$iH:1}
P.ew.prototype={}
P.k0.prototype={
ai:function(a,b){var u
for(u=J.bx(H.m(b,"$ii",this.$ti,"$ai"));u.A();)this.h(0,u.gI(u))},
i:function(a){return P.l3(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.m4(b,"index")
for(u=P.om(r,r.r,H.r(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.a0(b,r,"index",null,t))},
$ii:1,
$im7:1}
P.eT.prototype={}
P.fm.prototype={}
P.fM.prototype={
ju:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bM(a0,a1,b.length)
u=$.nb()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kz(C.b.D(b,n))
j=H.kz(C.b.D(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ab("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.c6(m)
s=n
continue}}throw H.d(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.lI(b,p,a1,q,o,f)
else{e=C.e.bk(f-1,4)+1
if(e===1)throw H.d(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b_(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lI(b,p,a1,q,o,d)
else{e=C.e.bk(d,4)
if(e===1)throw H.d(P.a5(c,b,a1))
if(e>1)b=C.b.b_(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.p],P.f]}}
P.fN.prototype={
$abC:function(){return[[P.b,P.p],P.f]}}
P.bX.prototype={}
P.bC.prototype={}
P.h9.prototype={
$abX:function(){return[P.f,[P.b,P.p]]}}
P.hp.prototype={
i:function(a){return this.a}}
P.ho.prototype={
fI:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ab("")
if(r>b)q.a+=C.b.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nm(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.f,P.f]}}
P.jh.prototype={
gje:function(){return C.R}}
P.jj.prototype={
cw:function(a){var u,t,s=P.bM(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kk(u)
if(t.fT(a,0,s)!==s)t.dV(J.ni(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oC(0,t.b,u.length)))},
$abC:function(){return[P.f,[P.b,P.p]]}}
P.kk.prototype={
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
fT:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dV(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ji.prototype={
cw:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.p],"$ab")
u=P.o9(!1,a,0,null)
if(u!=null)return u
t=P.bM(0,null,J.aG(a))
s=P.mE(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.ab(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ab("")
n=new P.kj(!1,q)
n.c=o
n.j6(a,p,t)
if(n.e>0){H.u(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c6(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abC:function(){return[[P.b,P.p],P.f]}}
P.kj.prototype={
j6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ds(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bT()
if((o&192)!==128){n=P.a5(h+C.e.bi(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a5("Overlong encoding of 0x"+C.e.bi(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.e.bi(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c6(u)
i.c=!1}for(n=p<c;n;){m=P.mE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.a1()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.e.bi(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.e.bi(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.aA.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.nu(H.nV(u)),s=P.dH(H.nT(u)),r=P.dH(H.nP(u)),q=P.dH(H.nQ(u)),p=P.dH(H.nS(u)),o=P.dH(H.nU(u)),n=P.nv(H.nR(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bD.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.h6(),q=this.a
if(q<0)return"-"+new P.bD(0-q).i(0)
u=r.$1(C.e.aa(q,6e7)%60)
t=r.$1(C.e.aa(q,1e6)%60)
s=new P.h5().$1(q%1e6)
return""+C.e.aa(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.h5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.h6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bE.prototype={}
P.fF.prototype={
i:function(a){return"Assertion failed"}}
P.e8.prototype={
i:function(a){return"Throw of null."}}
P.aO.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc_()+o+u
if(!q.a)return t
s=q.gbZ()
r=P.dM(q.b)
return t+s+": "+r}}
P.c7.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hr.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.ja.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j7.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cT.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dM(u)+"."}}
P.i4.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.h_.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eL.prototype={
i:function(a){return"Exception: "+this.a}}
P.hi.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.w(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
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
k=""}j=C.b.w(f,m,n)
return h+l+j+k+"\n"+C.b.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bF.prototype={}
P.p.prototype={}
P.i.prototype={
bS:function(a,b){var u=H.am(this,"i",0)
return new H.d9(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
gaQ:function(a){var u,t=this.gV(this)
if(!t.A())throw H.d(H.l4())
u=t.gI(t)
if(t.A())throw H.d(H.nB())
return u},
J:function(a,b){var u,t,s
P.m4(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.a0(b,this,"index",null,t))},
i:function(a){return P.nA(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ii:1}
P.H.prototype={}
P.L.prototype={
gH:function(a){return P.X.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
u:function(a,b){return this===b},
gH:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.c5(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.f.prototype={$ilZ:1}
P.ab.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipq:1}
P.jf.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.m(a,"$iH",[r,r],"$aH")
H.I(b)
u=J.dt(b).eA(b,"=")
if(u===-1){if(b!=="")J.kW(a,P.lm(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.ay(b,u+1)
r=this.a
J.kW(a,P.lm(t,0,t.length,r,!0),P.lm(s,0,s.length,r,!0))}return a},
$S:39}
P.jc.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.jd.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.je.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fB(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.a1()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cc.prototype={
geZ:function(){return this.b},
gcK:function(a){var u=this.c
if(u==null)return""
if(C.b.a9(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbM:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcW:function(a){var u=this.f
return u==null?"":u},
gev:function(){var u=this.r
return u==null?"":u},
eM:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iH",[P.f,null],"$aH")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a9(p,"/"))p="/"+p
n=P.ll(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gcX:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shY(new P.ew(P.mh(u==null?"":u),[t,t]))}return s.Q},
gew:function(){return this.c!=null},
gez:function(){return this.f!=null},
gex:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilg)if(s.a==b.gbU())if(s.c!=null===b.gew())if(s.b==b.geZ())if(s.gcK(s)==b.gcK(b))if(s.gbM(s)==b.gbM(b))if(s.e===b.geK(b)){u=s.f
t=u==null
if(!t===b.gez()){if(t)u=""
if(u===b.gcW(b)){u=s.r
t=u==null
if(!t===b.gex()){if(t)u=""
u=u===b.gev()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shY:function(a){var u=P.f
this.Q=H.m(a,"$iH",[u,u],"$aH")},
$ilg:1,
gbU:function(){return this.a},
geK:function(a){return this.e}}
P.kf.prototype={
$1:function(a){throw H.d(P.a5("Invalid port",this.a,this.b+1))},
$S:47}
P.kg.prototype={
$1:function(a){return P.fn(C.a0,a,C.l,!1)},
$S:17}
P.ki.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fn(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fn(C.r,b,C.l,!0))}},
$S:18}
P.kh.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bx(H.mP(b,"$ii")),t=this.a;u.A();)t.$2(a,H.I(u.gI(u)))},
$S:30}
P.jb.prototype={
geY:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.eB(u,"?",o)
s=u.length
if(t>=0){r=P.dn(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jD("data",p,p,p,P.dn(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kq.prototype={
$1:function(a){return new Uint8Array(96)},
$S:34}
P.kp.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nj(u,0,96,b)
return u},
$S:35}
P.kr.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k3.prototype={
gew:function(){return this.c>0},
gey:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.F()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
gez:function(){var u=this.f
if(typeof u!=="number")return u.a1()
return u<this.r},
gex:function(){return this.r<this.a.length},
gdC:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdD:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbU:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdC())q=t.x="http"
else if(t.gdD()){t.x="https"
q="https"}else if(q===4&&C.b.a9(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a9(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
geZ:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gcK:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbM:function(a){var u,t=this
if(t.gey()){u=t.d
if(typeof u!=="number")return u.F()
return P.fB(C.b.w(t.a,u+1,t.e),null,null)}if(t.gdC())return 80
if(t.gdD())return 443
return 0},
geK:function(a){return C.b.w(this.a,this.e,this.f)},
gcW:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.a1()
return u<t?C.b.w(this.a,u+1,t):""},
gev:function(){var u=this.r,t=this.a
return u<t.length?C.b.ay(t,u+1):""},
gcX:function(){var u=this,t=u.f
if(typeof t!=="number")return t.a1()
if(t>=u.r)return C.a1
t=P.f
return new P.ew(P.mh(u.gcW(u)),[t,t])},
eM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iH",[P.f,null],"$aH")
u=k.gbU()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gey()?k.gbM(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a9(o,"/"))o="/"+o
m=P.ll(j,0,0,b)
n=k.r
l=n<s.length?C.b.ay(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilg&&this.a===b.i(0)},
i:function(a){return this.a},
$ilg:1}
P.jD.prototype={}
W.x.prototype={}
W.fD.prototype={
gl:function(a){return a.length}}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.fE.prototype={
i:function(a){return String(a)}}
W.cp.prototype={$icp:1}
W.bU.prototype={$ibU:1}
W.by.prototype={$iby:1}
W.bW.prototype={
d2:function(a,b,c){if(c!=null)return a.getContext(b,P.oQ(c))
return a.getContext(b)},
f0:function(a,b){return this.d2(a,b,null)},
$ibW:1}
W.cs.prototype={$ics:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.fW.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cv.prototype={
gl:function(a){return a.length}}
W.fX.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fY.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.h1.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.h2.prototype={
i:function(a){return String(a)}}
W.dJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.m(c,"$iaj",[P.aa],"$aaj")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.aj,P.aa]]},
$ay:function(){return[[P.aj,P.aa]]},
$ii:1,
$ai:function(){return[[P.aj,P.aa]]},
$ib:1,
$ab:function(){return[[P.aj,P.aa]]},
$aG:function(){return[[P.aj,P.aa]]}}
W.dK.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gau(a))+" x "+H.l(this.gaq(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gbK(b)&&a.top===u.gbQ(b)&&this.gau(a)===u.gau(b)&&this.gaq(a)===u.gaq(b)},
gH:function(a){return W.mr(C.i.gH(a.left),C.i.gH(a.top),C.i.gH(this.gau(a)),C.i.gH(this.gaq(a)))},
ge0:function(a){return a.bottom},
gaq:function(a){return a.height},
gbK:function(a){return a.left},
gbP:function(a){return a.right},
gbQ:function(a){return a.top},
gau:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.aa]}}
W.h3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.h4.prototype={
gl:function(a){return a.length}}
W.jB.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iV")},
n:function(a,b,c){var u
H.e(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jT(this)
return new J.at(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gj3:function(a){return new W.jE(a)},
gcv:function(a){return new W.jB(a,a.children)},
ge1:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ap:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lO
if(u==null){u=H.c([],[W.aD])
t=new W.e7(u)
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
$.lO=t
d=t}else d=u
u=$.lN
if(u==null){u=new W.fo(d)
$.lN=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.l2=t.createRange()
t=$.bm.createElement("base")
H.e(t,"$icp")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$iby")}u=$.bm
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.l2.selectNodeContents(s)
r=$.l2.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lF(s)
c.d3(r)
document.adoptNode(r)
return r},
j9:function(a,b,c){return this.ap(a,b,c,null)},
f3:function(a,b){a.textContent=null
a.appendChild(this.ap(a,b,null,null))},
$iV:1,
geP:function(a){return a.tagName}}
W.h8.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iV},
$S:20}
W.o.prototype={$io:1}
W.k.prototype={
iY:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fz(a,b,c,!1)},
fz:function(a,b,c,d){return a.addEventListener(b,H.cg(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaI")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icz:1,
$aG:function(){return[W.aI]}}
W.hd.prototype={
gl:function(a){return a.length}}
W.hh.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hn.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic_:1,
$aG:function(){return[W.E]}}
W.bn.prototype={$ibn:1,
ge3:function(a){return a.data}}
W.cC.prototype={$icC:1}
W.cD.prototype={$icD:1}
W.b7.prototype={$ib7:1}
W.e_.prototype={
i:function(a){return String(a)},
$ie_:1}
W.hO.prototype={
gl:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.hP.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gab:function(a){var u=H.c([],[P.f])
this.K(a,new W.hQ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hR.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gab:function(a){var u=H.c([],[P.f])
this.K(a,new W.hS(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aR.prototype={$iaR:1}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaR")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.ae.prototype={$iae:1}
W.ar.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.m8("No elements"))
if(t>1)throw H.d(P.m8("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r
H.m(b,"$ii",[W.E],"$ai")
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
return new W.dN(u,u.length,[H.ck(C.a2,u,"G",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.E]},
$ai:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
jJ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jL:function(a,b){var u,t
try{u=a.parentNode
J.ng(u,b,a)}catch(t){H.ag(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f5(a):u},
j1:function(a,b){return a.appendChild(H.e(b,"$iE"))},
i1:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.ij.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gab:function(a){var u=H.c([],[P.f])
this.K(a,new W.ik(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.im.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.iw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.iA.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gab:function(a){var u=H.c([],[P.f])
this.K(a,new W.iB(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.f,P.f]},
$iH:1,
$aH:function(){return[P.f,P.f]}}
W.iB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.aJ.prototype={$iaJ:1}
W.bd.prototype={$ibd:1}
W.ej.prototype={
ap:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=W.nw("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).ai(0,new W.ar(u))
return t}}
W.iH.prototype={
ap:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaQ(u)
s.toString
u=new W.ar(s)
r=u.gaQ(u)
t.toString
r.toString
new W.ar(t).ai(0,new W.ar(r))
return t}}
W.iI.prototype={
ap:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bV(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaQ(u)
t.toString
s.toString
new W.ar(t).ai(0,new W.ar(s))
return t}}
W.cX.prototype={$icX:1}
W.aW.prototype={$iaW:1}
W.aK.prototype={$iaK:1}
W.iK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aG:function(){return[W.aK]}}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.iR.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aG:function(){return[W.aX]}}
W.iW.prototype={
gl:function(a){return a.length}}
W.bP.prototype={}
W.jg.prototype={
i:function(a){return String(a)}}
W.jt.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
gjc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.K("deltaY is not supported"))},
gjb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.K("deltaX is not supported"))},
$ibh:1}
W.da.prototype={
i2:function(a,b){return a.requestAnimationFrame(H.cg(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
fN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.db.prototype={$idb:1}
W.jC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iY")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aG:function(){return[W.Y]}}
W.eG.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gbK(b)&&a.top===u.gbQ(b)&&a.width===u.gau(b)&&a.height===u.gaq(b)},
gH:function(a){return W.mr(C.i.gH(a.left),C.i.gH(a.top),C.i.gH(a.width),C.i.gH(a.height))},
gaq:function(a){return a.height},
gau:function(a){return a.width}}
W.jR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaP")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aG:function(){return[W.aP]}}
W.eY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iE")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.k4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.k8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aG:function(){return[W.aJ]}}
W.jA.prototype={
K:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gab(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gab:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$idb")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.f,P.f]},
$aH:function(){return[P.f,P.f]}}
W.jE.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gab(this).length}}
W.jF.prototype={}
W.lj.prototype={}
W.jG.prototype={}
W.jH.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:40}
W.bQ.prototype={
fh:function(a){var u
if($.dd.gjo($.dd)){for(u=0;u<262;++u)$.dd.n(0,C.Y[u],W.oZ())
for(u=0;u<12;++u)$.dd.n(0,C.v[u],W.p_())}},
aY:function(a){return $.nc().X(0,W.cw(a))},
aB:function(a,b,c){var u=$.dd.j(0,H.l(W.cw(a))+"::"+b)
if(u==null)u=$.dd.j(0,"*::"+b)
if(u==null)return!1
return H.lr(u.$4(a,b,c,this))},
$iaD:1}
W.G.prototype={
gV:function(a){return new W.dN(a,this.gl(a),[H.ck(this,a,"G",0)])}}
W.e7.prototype={
aY:function(a){return C.a.dZ(this.a,new W.i0(a))},
aB:function(a,b,c){return C.a.dZ(this.a,new W.i_(a,b,c))},
$iaD:1}
W.i0.prototype={
$1:function(a){return H.e(a,"$iaD").aY(this.a)},
$S:21}
W.i_.prototype={
$1:function(a){return H.e(a,"$iaD").aB(this.a,this.b,this.c)},
$S:21}
W.f5.prototype={
fp:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bS(0,new W.k1())
t=b.bS(0,new W.k2())
this.b.ai(0,u)
s=this.c
s.ai(0,C.B)
s.ai(0,t)},
aY:function(a){return this.a.X(0,W.cw(a))},
aB:function(a,b,c){var u=this,t=W.cw(a),s=u.c
if(s.X(0,H.l(t)+"::"+b))return u.d.j0(c)
else if(s.X(0,"*::"+b))return u.d.j0(c)
else{s=u.b
if(s.X(0,H.l(t)+"::"+b))return!0
else if(s.X(0,"*::"+b))return!0
else if(s.X(0,H.l(t)+"::*"))return!0
else if(s.X(0,"*::*"))return!0}return!1},
$iaD:1}
W.k1.prototype={
$1:function(a){return!C.a.X(C.v,H.I(a))},
$S:22}
W.k2.prototype={
$1:function(a){return C.a.X(C.v,H.I(a))},
$S:22}
W.ka.prototype={
aB:function(a,b,c){if(this.fa(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:17}
W.k9.prototype={
aY:function(a){var u=J.U(a)
if(!!u.$icQ)return!1
u=!!u.$iq
if(u&&W.cw(a)==="foreignObject")return!1
if(u)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aY(a)},
$iaD:1}
W.dN.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdB(J.lC(u.a,t))
u.c=t
return!0}u.sdB(null)
u.c=s
return!1},
gI:function(a){return this.d},
sdB:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
W.aD.prototype={}
W.k_.prototype={$ipD:1}
W.fo.prototype={
d3:function(a){new W.kl(this).$2(a,null)},
b7:function(a,b){if(b==null)J.lF(a)
else b.removeChild(a)},
i6:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nk(a)
n=o.a.getAttribute("is")
H.e(a,"$iV")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.C(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ag(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ag(r)}try{s=W.cw(a)
this.i5(H.e(a,"$iV"),b,p,t,s,H.e(o,"$iH"),H.I(n))}catch(r){if(H.ag(r) instanceof P.aO)throw r
else{this.b7(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b7(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aY(a)){o.b7(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aB(a,"is",g)){o.b7(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gab(f)
t=H.c(u.slice(0),[H.r(u,0)])
for(s=f.gab(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nn(r)
H.I(r)
if(!q.aB(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$icX)o.d3(a.content)},
$ipo:1}
W.kl.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i6(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b7(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ag(s)
r=H.e(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iE")}},
$S:43}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fb.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
P.k5.prototype={
eu:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d0:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$inZ)throw H.d(P.j8("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ibU)return a
if(!!u.$icz)return a
if(!!u.$ibn)return a
if(!!u.$icJ||!!u.$ibK||!!u.$icH)return a
if(!!u.$iH){t=q.eu(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.K(a,new P.k7(p,q))
return p.a}if(!!u.$ib){t=q.eu(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.j8(a,t)}throw H.d(P.j8("structured clone of other type"))},
j8:function(a,b){var u,t=J.ds(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.d0(t.j(a,u)))
return r}}
P.k7.prototype={
$2:function(a,b){this.a.a[a]=this.b.d0(b)},
$S:5}
P.fl.prototype={$ibn:1,
ge3:function(a){return this.a}}
P.kw.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k6.prototype={}
P.he.prototype={
gbo:function(){var u=this.b,t=H.am(u,"y",0),s=W.V
return new H.hG(new H.d9(u,H.n(new P.hf(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hg(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iV")
u=this.gbo()
J.nl(u.b.$1(J.fC(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aG(this.gbo().a)},
j:function(a,b){var u=this.gbo()
return u.b.$1(J.fC(u.a,b))},
gV:function(a){var u=P.lV(this.gbo(),!1,W.V)
return new J.at(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hf.prototype={
$1:function(a){return!!J.U(H.e(a,"$iE")).$iV},
$S:20}
P.hg.prototype={
$1:function(a){return H.j(H.e(a,"$iE"),"$iV")},
$S:45}
P.jV.prototype={
gbP:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.D(t)
return H.B(u+t,H.r(this,0))},
ge0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.D(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iaj){t=p.a
if(t==u.gbK(b)){s=p.b
if(s==u.gbQ(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.D(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gbP(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.D(t)
u=H.B(s+t,q)===u.ge0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dx(s),q=t.b,p=J.dx(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.D(o)
u=H.r(t,0)
o=C.e.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.D(s)
u=C.e.gH(H.B(q+s,u))
return P.ol(P.jT(P.jT(P.jT(P.jT(0,r),p),o),u))}}
P.aj.prototype={
gbK:function(a){return this.a},
gbQ:function(a){return this.b},
gau:function(a){return this.c},
gaq:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ib8")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aG:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibc")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aG:function(){return[P.bc]}}
P.i9.prototype={
gl:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.q.prototype={
gcv:function(a){return new P.he(a,new W.ar(a))},
ap:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aD])
C.a.h(p,W.mq(null))
C.a.h(p,W.ms())
C.a.h(p,new W.k9())
c=new W.fo(new W.e7(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).j9(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bf.prototype={$ibf:1}
P.iX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibf")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aG:function(){return[P.bf]}}
P.eQ.prototype={}
P.eR.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.fj.prototype={}
P.fk.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$io6:1}
P.fH.prototype={
gl:function(a){return a.length}}
P.fI.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gab:function(a){var u=H.c([],[P.f])
this.K(a,new P.fJ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.f,null]},
$iH:1,
$aH:function(){return[P.f,null]}}
P.fJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fK.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.i3.prototype={
gl:function(a){return a.length}}
P.eE.prototype={}
P.dB.prototype={$idB:1}
P.dO.prototype={$idO:1}
P.eb.prototype={$ieb:1}
P.ec.prototype={$iec:1}
P.c8.prototype={
eR:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$ibn&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oR(g))
return}if(!!u.$icC&&h==null&&t&&!0){this.im(a,b,c,d,e,f,g)
return}throw H.d(P.dz("Incorrect number or type of arguments"))},
eQ:function(a,b,c,d,e,f,g){return this.eR(a,b,c,d,e,f,g,null,null,null)},
im:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
L:function(a,b,c){return a.uniform1f(b,c)},
a3:function(a,b,c){return a.uniform1i(b,c)},
jW:function(a,b,c,d){return a.uniform2f(b,c,d)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jX:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eW:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eX:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic8:1}
P.ed.prototype={$ied:1}
P.ek.prototype={$iek:1}
P.eu.prototype={$ieu:1}
P.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a0(b,a,null,null,null))
return P.bs(a.item(b))},
n:function(a,b,c){H.e(c,"$iH")
throw H.d(P.K("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.H,,,]]},
$ii:1,
$ai:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aG:function(){return[[P.H,,,]]}}
P.f8.prototype={}
P.f9.prototype={}
O.a4.prototype={
bm:function(a){var u=this
u.sfY(H.c([],[a]))
u.sdJ(null)
u.sdF(null)
u.sdK(null)},
d4:function(a,b,c){var u=this,t=H.am(u,"a4",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdJ(b)
u.sdF(a)
u.sdK(c)},
b2:function(a,b){return this.d4(a,null,b)},
dI:function(a){var u
H.m(a,"$ii",[H.am(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dd:function(a,b){var u
H.m(b,"$ii",[H.am(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.at(u,u.length,[H.r(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.am(s,"a4",0)
H.B(b,r)
r=[r]
if(H.C(s.dI(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dd(t,H.c([b],r))}},
ai:function(a,b){var u,t,s=this
H.m(b,"$ii",[H.am(s,"a4",0)],"$ai")
if(H.C(s.dI(b))){u=s.a
t=u.length
C.a.ai(u,b)
s.dd(t,b)}},
sfY:function(a){this.a=H.m(a,"$ib",[H.am(this,"a4",0)],"$ab")},
sdJ:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.am(this,"a4",0)]]})},
sdF:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.am(this,"a4",0)]]})},
sdK:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.am(this,"a4",0)]]})},
$ii:1}
O.cG.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
aR:function(){var u=this.b
if(u!=null)u.C(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gaE(u)
else return V.c3()},
bO:function(a){var u=this.a
if(a==null)C.a.h(u,V.c3())
else C.a.h(u,a)
this.aR()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sc4:function(a){this.a=H.m(a,"$ib",[V.av],"$ab")}}
E.fO.prototype={}
E.ao.prototype={
sd6:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().Y(0,s.geH())
u=s.c
if(u!=null)u.gq().h(0,s.geH())
t=new D.J("shape",r,s.c,[F.ee])
t.b=!0
s.bL(t)}},
ae:function(a,b){var u
for(u=this.y.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)u.d.ae(0,b)},
a8:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga4(s))
s.aR()
a.cV(t.f)
s=a.dy
u=(s&&C.a).gaE(s)
if(u!=null&&t.d!=null)u.cY(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.r(s,0)]);s.A();)s.d.a8(a)
a.cU()
a.dx.aN()},
gq:function(){var u=this.z
return u==null?this.z=D.N():u},
bL:function(a){var u=this.z
if(u!=null)u.C(a)},
ac:function(){return this.bL(null)},
eI:function(a){H.e(a,"$iz")
this.e=null
this.bL(a)},
jA:function(){return this.eI(null)},
eG:function(a){this.bL(H.e(a,"$iz"))},
jx:function(){return this.eG(null)},
jw:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.geF(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cx()
o.saA(null)
o.sb5(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saA(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ac()},
jz:function(a,b){var u,t
H.m(b,"$ii",[E.ao],"$ai")
for(u=b.gV(b),t=this.geF();u.A();)u.gI(u).gq().Y(0,t)
this.ac()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfg:function(a,b){this.y=H.m(b,"$ia4",[E.ao],"$aa4")},
$ibb:1}
E.ie.prototype={
fd:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cG()
t=[V.av]
u.sc4(H.c([],t))
u.b=null
u.gq().h(0,new E.ig(s))
s.cy=u
u=new O.cG()
u.sc4(H.c([],t))
u.b=null
u.gq().h(0,new E.ih(s))
s.db=u
u=new O.cG()
u.sc4(H.c([],t))
u.b=null
u.gq().h(0,new E.ii(s))
s.dx=u
s.sil(H.c([],[O.bN]))
u=s.dy;(u&&C.a).h(u,null)
s.sih(new H.aQ([P.f,A.cR]))},
gjI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.t(0,u.ga4(u))
s=u}return s},
geL:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjI()
u=t.dx
u=t.ch=s.t(0,u.ga4(u))
s=u}return s},
cV:function(a){var u=this.dy,t=a==null?(u&&C.a).gaE(u):a;(u&&C.a).h(u,t)},
cU:function(){var u=this.dy
if(u.length>1)u.pop()},
ck:function(a){var u=a.b
if(u.length===0)throw H.d(P.v("May not cache a shader with no name."))
if(this.fr.bs(0,u))throw H.d(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sil:function(a){this.dy=H.m(a,"$ib",[O.bN],"$ab")},
sih:function(a){this.fr=H.m(a,"$iH",[P.f,A.cR],"$aH")}}
E.ig.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.ih.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ii.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.ep.prototype={
dg:function(a){H.e(a,"$iz")
this.eN()},
df:function(){return this.dg(null)},
gjj:function(){var u,t=this,s=Date.now(),r=C.e.aa(P.lM(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dN:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.D(r)
u=C.i.cJ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.i.cJ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mb(C.t,s.gjM())}},
eN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iQ(this),{func:1,ret:-1,args:[P.aa]})
C.I.fN(u)
C.I.i2(u,W.mH(t,P.aa))}},
jK:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dN()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.lM(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aR()
r=s.db
C.a.sl(r.a,0)
r.aR()
r=s.dx
C.a.sl(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.a8(p.e)}s=p.z
if(s!=null)s.C(null)}catch(q){u=H.ag(q)
t=H.cl(q)
P.ly("Error: "+H.l(u))
P.ly("Stack: "+H.l(t))
throw H.d(u)}}}
E.iQ.prototype={
$1:function(a){var u
H.p8(a)
u=this.a
if(u.ch){u.ch=!1
u.jK()}},
$S:31}
Z.eC.prototype={$ipi:1}
Z.dC.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ag(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.d8.prototype={$ipj:1}
Z.bz.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
at:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a8:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfU:function(a){this.b=H.m(a,"$ib",[Z.bG],"$ab")},
$ipr:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c5(this.c)+"'")+"]"}}
Z.b_.prototype={
gd7:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.bv().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.b1().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=4
if((u&$.co().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
j2:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.co()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.na()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.aF().a)!==0)C.a.h(u,"Pos")
if((t&$.bv().a)!==0)C.a.h(u,"Norm")
if((t&$.bu().a)!==0)C.a.h(u,"Binm")
if((t&$.b1().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dv().a)!==0)C.a.h(u,"Clr3")
if((t&$.dw().a)!==0)C.a.h(u,"Clr4")
if((t&$.co().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fR.prototype={}
D.cx.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.saA(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Y:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.a
t=(u&&C.a).Y(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.b
t=(u&&C.a).Y(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.K(P.lV(u,!0,{func:1,ret:-1,args:[D.z]}),new D.hb(q))
u=r.b
if(u!=null){r.sb5(H.c([],[{func:1,ret:-1,args:[D.z]}]))
C.a.K(u,new D.hc(q))}return!0},
cC:function(){return this.C(null)},
aP:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
saA:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sb5:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hb.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.hc.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.z.prototype={}
D.bH.prototype={}
D.bI.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dD.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dX.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hv.prototype={
jF:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jB:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1},
shX:function(a){this.d=H.m(a,"$im7",[P.p],"$am7")}}
X.e0.prototype={}
X.hC.prototype={
b4:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaZ()
r=new X.bp(a,V.bq(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cT:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f2()
if(typeof u!=="number")return u.bT()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.b4(a,b))
return!0},
jG:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaZ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cI(new V.W(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
hv:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e0(c,r.a.gaZ(),b)
s.b=!0
t.C(s)
r.y=new P.aA(u,!1)
r.x=V.bq()}}
X.aC.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aC))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bp.prototype={}
X.hU.prototype={
c1:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaZ(),r=new X.bp(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cT:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.c1(a,b,!0))
return!0},
be:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f2()
if(typeof t!=="number")return t.bT()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.c1(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.c1(a,b,!1))
return!0},
jH:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaZ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cI(new V.W(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
ge4:function(){var u=this.b
return u==null?this.b=D.N():u},
gbR:function(){var u=this.c
return u==null?this.c=D.N():u},
geE:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.cI.prototype={}
X.i8.prototype={}
X.er.prototype={}
X.iU.prototype={
b4:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.a9],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bq()
s=q.a.gaZ()
r=new X.er(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jE:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.C(this.b4(a,!0))
return!0},
jC:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.C(this.b4(a,!0))
return!0},
jD:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.C(this.b4(a,!1))
return!0}}
X.ex.prototype={
gaZ:function(){var u=this.a,t=C.n.ge1(u).c
t.toString
u=C.n.ge1(u).d
u.toString
return V.m5(0,0,t,u)},
du:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dX(u,new X.aC(t,a.altKey,a.shiftKey))},
aW:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
cj:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a9(s-q,r-u)},
b6:function(a){return new V.W(a.movementX,a.movementY)},
cf:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.i.a5(r.pageX)
C.i.a5(r.pageY)
p=o.left
C.i.a5(r.pageX)
C.a.h(n,new V.a9(q-p,C.i.a5(r.pageY)-o.top))}return n},
aH:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dD(u,new X.aC(t,a.altKey,a.shiftKey))},
c5:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hp:function(a){this.f=!0},
hd:function(a){this.f=!1},
hj:function(a){H.e(a,"$iae")
if(H.C(this.f)&&this.c5(a))a.preventDefault()},
ht:function(a){var u
H.e(a,"$ib7")
if(!H.C(this.f))return
u=this.du(a)
this.b.jF(u)},
hr:function(a){var u
H.e(a,"$ib7")
if(!H.C(this.f))return
u=this.du(a)
this.b.jB(u)},
hx:function(a){var u,t,s,r,q=this
H.e(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aW(a)
if(H.C(q.x)){t=q.aH(a)
s=q.b6(a)
if(q.d.cT(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aH(a)
r=q.aK(a)
if(q.c.cT(t,r))a.preventDefault()},
hB:function(a){var u,t,s,r=this
H.e(a,"$iae")
r.aW(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b6(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.be(u,s))a.preventDefault()},
hn:function(a){var u,t,s,r=this
H.e(a,"$iae")
if(!r.c5(a)){r.aW(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b6(a)
if(r.d.be(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.be(u,s))a.preventDefault()}},
hz:function(a){var u,t,s,r=this
H.e(a,"$iae")
r.aW(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.bd(u,s))a.preventDefault()},
hl:function(a){var u,t,s,r=this
H.e(a,"$iae")
if(!r.c5(a)){r.aW(a)
u=r.aH(a)
if(H.C(r.x)){t=r.b6(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.aK(a)
if(r.c.bd(u,s))a.preventDefault()}},
hD:function(a){var u,t,s=this
H.e(a,"$ibh")
s.aW(a)
u=new V.W((a&&C.H).gjb(a),C.H.gjc(a)).B(0,180)
if(H.C(s.x)){if(s.d.jG(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.aK(a)
if(s.c.jH(u,t))a.preventDefault()},
hF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aH(s.y)
t=s.aK(s.y)
s.d.hv(u,t,r)}},
hV:function(a){var u,t=this
H.e(a,"$iaY")
t.a.focus()
t.f=!0
t.cj(a)
u=t.cf(a)
if(t.e.jE(u))a.preventDefault()},
hR:function(a){var u
H.e(a,"$iaY")
this.cj(a)
u=this.cf(a)
if(this.e.jC(u))a.preventDefault()},
hT:function(a){var u
H.e(a,"$iaY")
this.cj(a)
u=this.cf(a)
if(this.e.jD(u))a.preventDefault()},
sfO:function(a){this.z=H.m(a,"$ib",[[P.cU,P.X]],"$ab")}}
D.dI.prototype={$ia6:1,$ibb:1}
D.a6.prototype={$ibb:1}
D.dY.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.N():u},
dh:function(a){var u=this.Q
if(u!=null)u.C(a)},
dH:function(a){var u=this.ch
if(u!=null)u.C(a)},
hu:function(){return this.dH(null)},
hH:function(a){var u,t,s
H.m(a,"$ii",[D.a6],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.fi(s))return!1}return!0},
h7:function(a,b){var u,t,s,r,q=D.a6
H.m(b,"$ii",[q],"$ai")
for(u=b.length,t=this.gdG(),s=0;s<b.length;b.length===u||(0,H.F)(b),++s){r=H.e(b[s],"$ia6")
r.gq().h(0,t)}q=new D.bH([q])
q.b=!0
this.dh(q)},
hL:function(a,b){var u,t,s,r=D.a6
H.m(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdG();u.A();){s=u.gI(u)
C.a.Y(this.e,s)
s.gq().Y(0,t)}r=new D.bI([r])
r.b=!0
this.dh(r)},
fi:function(a){var u=C.a.X(this.e,a)
return u},
sfM:function(a){this.e=H.m(a,"$ib",[D.dI],"$ab")},
shW:function(a){this.f=H.m(a,"$ib",[D.ea],"$ab")},
sij:function(a){this.r=H.m(a,"$ib",[D.eh],"$ab")},
siw:function(a){this.x=H.m(a,"$ib",[D.em],"$ab")},
six:function(a){this.y=H.m(a,"$ib",[D.en],"$ab")},
siy:function(a){this.z=H.m(a,"$ib",[D.eo],"$ab")},
$ai:function(){return[D.a6]},
$aa4:function(){return[D.a6]}}
D.ea.prototype={$ia6:1,$ibb:1}
D.eh.prototype={$ia6:1,$ibb:1}
D.em.prototype={$ia6:1,$ibb:1}
D.en.prototype={$ia6:1,$ibb:1}
D.eo.prototype={$ia6:1,$ibb:1}
V.ah.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.au.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.ha.prototype={}
V.c2.prototype={
ad:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c2))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.ci(H.c([q.a,q.d,q.r],p),3,0),n=V.ci(H.c([q.b,q.e,q.x],p),3,0),m=V.ci(H.c([q.c,q.f,q.y],p),3,0)
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
ad:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.c3()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
eV:function(a){var u=this
return new V.Z(C.i.t(u.a,a.ge5(a))+C.i.t(u.b,a.ge6(a))+C.i.t(u.c,a.ge7()),C.i.t(u.e,a.ge5(a))+C.i.t(u.f,a.ge6(a))+C.i.t(u.r,a.ge7()),C.i.t(u.y,a.ge5(a))+C.i.t(u.z,a.ge6(a))+C.i.t(u.Q,a.ge7()))},
bj:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ap(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
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
E:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.ci(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.ci(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.ci(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.ci(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.E("")}}
V.a9.prototype={
M:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.ap.prototype={
M:function(a,b){return new V.ap(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.br.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.cP.prototype={
gal:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cP))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.W.prototype={
bc:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.W(t*b,u*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mk
return u==null?$.mk=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.W(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.Z.prototype={
bc:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cP:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.Z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bb:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Z(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.Z(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.O().a)return V.eB()
return new V.Z(this.a/b,this.b/b,this.c/b)},
eC:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ca.prototype={
bc:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ca))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
U.fS.prototype={
bY:function(a){var u=V.ph(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.N():u},
S:function(a){var u=this.y
if(u!=null)u.C(a)},
sd1:function(a,b){},
scQ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bY(u)}s=new D.J("maximumLocation",s,t.b,[P.A])
s.b=!0
t.S(s)}},
scS:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bY(u)}s=new D.J("minimumLocation",s,t.c,[P.A])
s.b=!0
t.S(s)}},
sak:function(a,b){var u,t=this
b=t.bY(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.J("location",u,b,[P.A])
u.b=!0
t.S(u)}},
scR:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.A])
r.b=!0
s.S(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.J("velocity",t,a,[P.A])
t.b=!0
u.S(t)}},
scA:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.J("dampening",u,a,[P.A])
u.b=!0
this.S(u)}},
ae:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sak(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.dF.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
b1:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dF))return!1
return J.a3(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cB.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
S:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.C(a)},
ag:function(){return this.S(null)},
h5:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaV(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.saA(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.S(n)},
hJ:function(a,b){var u,t,s=U.ai
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaV();u.A();)u.gI(u).gq().Y(0,t)
s=new D.bI([s])
s.b=!0
this.S(s)},
b1:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a1()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.r(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.b1(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.c3():u
r=s.e
if(r!=null)r.aP(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a3(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aa4:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.ey.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.N():u},
S:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.C(a)},
ag:function(){return this.S(null)},
b8:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge4().h(0,u.gc6())
u.a.c.geE().h(0,u.gc8())
u.a.c.gbR().h(0,u.gca())
return!0},
c7:function(a){var u=this
H.e(a,"$iz")
if(!J.a3(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c9:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibp")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.M(0,a.y)
u=new V.W(t.a,t.b).t(0,2).B(0,u.gal())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.W(s.a,s.b).t(0,2).B(0,u.gal())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sak(0,-q*p+o)
n.b.sZ(0)
t=t.M(0,a.z)
n.Q=new V.W(t.a,t.b).t(0,2).B(0,u.gal())}n.ag()},
cb:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.G(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sZ(t*10*s)
r.ag()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.ch=p
u=b.y
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ba(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.ez.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.N():u},
S:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.C(a)},
ag:function(){return this.S(null)},
b8:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge4().h(0,s.gc6())
s.a.c.geE().h(0,s.gc8())
s.a.c.gbR().h(0,s.gca())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.h(0,s.gfZ())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.gh0())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.h(0,s.git())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.gir())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.h(0,s.gip())
return!0},
az:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.W(u,t)},
c7:function(a){var u=this
a=H.j(H.e(a,"$iz"),"$ibp")
if(!J.a3(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c9:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibp")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.az(new V.W(t.a,t.b).t(0,2).B(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.az(new V.W(s.a,s.b).t(0,2).B(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sak(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.M(0,a.z)
n.dx=n.az(new V.W(t.a,t.b).t(0,2).B(0,u.gal()))}n.ag()},
cb:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sZ(-t*10*u)
r.ag()}},
h_:function(a){var u=this
if(H.j(H.e(a,"$iz"),"$ie0").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h1:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ibp")
if(!J.a3(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.az(new V.W(s.a,s.b).t(0,2).B(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sak(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.M(0,a.z)
n.dx=n.az(new V.W(t.a,t.b).t(0,2).B(0,u.gal()))
n.ag()},
iu:function(a){var u=this
H.e(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
is:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.e(a,"$iz"),"$ier")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.az(new V.W(t.a,t.b).t(0,2).B(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.az(new V.W(s.a,s.b).t(0,2).B(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sak(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.M(0,a.z)
n.dx=n.az(new V.W(t.a,t.b).t(0,2).B(0,u.gal()))}n.ag()},
iq:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sZ(-t*10*u)
r.ag()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.dy=p
u=b.y
r.c.ae(0,u)
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ba(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.ba(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.eA.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
S:function(a){var u=this.r
if(u!=null)u.C(a)},
b8:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.N():t
t=r.gh2()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.N():s).h(0,t)
return!0},
h3:function(a){var u,t,s,r,q=this
H.e(a,"$iz")
if(!J.a3(q.b,q.a.b.c))return
H.j(a,"$icI")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.A])
u.b=!0
q.S(u)}},
b1:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ba(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dE.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.N():u},
W:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.C(a)},
aF:function(){return this.W(null)},
hN:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.saA(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.W(n)},
hP:function(a,b){var u,t,s=M.ax
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga_();u.A();)u.gI(u).gq().Y(0,t)
s=new D.bI([s])
s.b=!0
this.W(s)},
a8:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t!=null)t.a8(a)}s.e=!1},
$ai:function(){return[M.ax]},
$aa4:function(){return[M.ax]},
$iax:1}
M.dG.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.N():u},
W:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.C(a)},
aF:function(){return this.W(null)},
sba:function(a){var u,t,s=this
if(a==null)a=new X.hq()
u=s.a
if(u!==a){if(u!=null)u.gq().Y(0,s.ga_())
t=s.a
s.a=a
a.gq().h(0,s.ga_())
u=new D.J("camera",t,s.a,[X.bV])
u.b=!0
s.W(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.lQ(null)
u=s.b
if(u!==b){if(u!=null)u.gq().Y(0,s.ga_())
t=s.b
s.b=b
b.gq().h(0,s.ga_())
u=new D.J("target",t,s.b,[X.cW])
u.b=!0
s.W(u)}},
sbg:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().Y(0,t.ga_())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.ga_())
s=new D.J("technique",u,t.c,[O.bN])
s.b=!0
t.W(s)}},
a8:function(a){var u,t=this
a.cV(t.c)
t.b.a0(a)
t.a.a0(a)
u=t.c
if(u!=null)u.ae(0,a)
t.d.ae(0,a)
t.d.a8(a)
t.a.at(a)
t.b.at(a)
a.cU()},
$iax:1}
M.dL.prototype={
W:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.C(a)},
aF:function(){return this.W(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cx()
o.saA(null)
o.sb5(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saA(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.W(n)},
hh:function(a,b){var u,t,s=E.ao
H.m(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.ga_();u.A();)u.gI(u).gq().Y(0,t)
s=new D.bI([s])
s.b=!0
this.W(s)},
sba:function(a){var u,t,s=this
if(a==null)a=X.m_(null)
u=s.a
if(u!==a){if(u!=null)u.gq().Y(0,s.ga_())
t=s.a
s.a=a
a.gq().h(0,s.ga_())
u=new D.J("camera",t,s.a,[X.bV])
u.b=!0
s.W(u)}},
sb0:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gq().Y(0,t.ga_())
u=t.b
t.b=b
b.gq().h(0,t.ga_())
s=new D.J("target",u,t.b,[X.cW])
s.b=!0
t.W(s)}},
sbg:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().Y(0,t.ga_())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.ga_())
s=new D.J("technique",u,t.c,[O.bN])
s.b=!0
t.W(s)}},
gq:function(){var u=this.x
return u==null?this.x=D.N():u},
a8:function(a){var u,t=this
a.cV(t.c)
t.b.a0(a)
t.a.a0(a)
u=t.c
if(u!=null)u.ae(0,a)
for(u=t.d.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)u.d.ae(0,a)
for(u=t.d.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)u.d.a8(a)
t.a.toString
a.cy.aN()
a.db.aN()
t.b.at(a)
a.cU()},
sfG:function(a,b){this.d=H.m(b,"$ia4",[E.ao],"$aa4")},
$iax:1}
M.dP.prototype={
gq:function(){var u=this.a
return u==null?this.a=D.N():u},
W:function(a){var u
H.e(a,"$iz")
u=this.a
if(u!=null)u.C(a)},
aF:function(){return this.W(null)},
a8:function(a){var u=this.d
if(u!=null)u.a8(a)
u=this.f
if(u!=null)u.a8(a)},
$iax:1}
M.ax.prototype={}
A.dA.prototype={}
A.fG.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dQ.prototype={
ah:function(a,b,c){if(c==null||!c.d)C.c.a3(b.a,b.d,1)
else{a.d5(c)
C.c.a3(b.a,b.d,0)}}}
A.hl.prototype={
aS:function(a,b,c,d){var u,t,s,r,q=[P.A]
H.m(c,"$ib",q,"$ab")
H.m(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.h(c,0)
t=Math.abs(c[0]-0)<$.O().a
if(t){if(0>=d.length)return H.h(d,0)
s=d[0]
d=C.a.d8(d,1)
c=C.a.d8(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.l(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.h(c,r)
a.a+="  offset = blurScale * "+H.l(c[r])+";\n"
if(r>=d.length)return H.h(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.l(d[r])+";\n"
if(r>=d.length)return H.h(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.l(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.e3.prototype={
fc:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.ab("")
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
d1.iC(u)
d1.iJ(u)
d1.iD(u)
d1.iR(u)
d1.iS(u)
d1.iL(u)
d1.iW(u)
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
u=new P.ab("")
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
q.iG(u)
q.iB(u)
q.iE(u)
q.iH(u)
q.iP(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iN(u)
q.iO(u)}q.iK(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.f:m+=c7
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
k=H.c([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iF(u)
q.iM(u)
q.iQ(u)
q.iT(u)
q.iU(u)
q.iV(u)
q.iI(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.f])
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
a6.cL(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.j(a6.y.p(0,"invViewMat"),"$iaq")
if(t)a6.dy=H.j(a6.y.p(0,"objMat"),"$iaq")
if(r)a6.fr=H.j(a6.y.p(0,"viewObjMat"),"$iaq")
a6.fy=H.j(a6.y.p(0,"projViewObjMat"),"$iaq")
if(d1.x2)a6.k1=H.j(a6.y.p(0,"txt2DMat"),"$ic9")
if(d1.y1)a6.k2=H.j(a6.y.p(0,"txtCubeMat"),"$iaq")
if(d1.y2)a6.k3=H.j(a6.y.p(0,"colorMat"),"$iaq")
a6.sfC(H.c([],[A.aq]))
t=d1.aD
if(t>0){a6.k4=H.e(a6.y.p(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.v(a7+q+a8));(s&&C.a).h(s,H.j(g,"$iaq"))}}t=d1.a
if(t!==C.d){a6.r2=H.j(a6.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.rx=H.j(a6.y.p(0,a9),"$iak")
a6.x1=H.j(a6.y.p(0,b0),"$iQ")
break
case C.h:a6.ry=H.j(a6.y.p(0,a9),"$ial")
a6.x1=H.j(a6.y.p(0,b0),"$iQ")
break}}t=d1.b
if(t!==C.d){a6.x2=H.j(a6.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.y1=H.j(a6.y.p(0,b1),"$iak")
a6.aD=H.j(a6.y.p(0,b2),"$iQ")
break
case C.h:a6.y2=H.j(a6.y.p(0,b1),"$ial")
a6.aD=H.j(a6.y.p(0,b2),"$iQ")
break}}t=d1.c
if(t!==C.d){a6.aw=H.j(a6.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.bv=H.j(a6.y.p(0,b3),"$iak")
a6.bw=H.j(a6.y.p(0,b4),"$iQ")
break
case C.h:a6.e8=H.j(a6.y.p(0,b3),"$ial")
a6.bw=H.j(a6.y.p(0,b4),"$iQ")
break}}t=d1.d
if(t!==C.d){a6.bx=H.j(a6.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.e9=H.j(a6.y.p(0,b5),"$iak")
a6.by=H.j(a6.y.p(0,b6),"$iQ")
break
case C.h:a6.ea=H.j(a6.y.p(0,b5),"$ial")
a6.by=H.j(a6.y.p(0,b6),"$iQ")
break}}t=d1.e
if(t!==C.d){a6.bB=H.j(a6.y.p(0,"shininess"),"$ia_")
a6.bz=H.j(a6.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.eb=H.j(a6.y.p(0,b7),"$iak")
a6.bA=H.j(a6.y.p(0,b8),"$iQ")
break
case C.h:a6.ec=H.j(a6.y.p(0,b7),"$ial")
a6.bA=H.j(a6.y.p(0,b8),"$iQ")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.f:a6.ed=H.j(a6.y.p(0,"bumpTxt"),"$iak")
a6.bC=H.j(a6.y.p(0,b9),"$iQ")
break
case C.h:a6.ee=H.j(a6.y.p(0,"bumpTxt"),"$ial")
a6.bC=H.j(a6.y.p(0,b9),"$iQ")
break}if(d1.dy){a6.ef=H.j(a6.y.p(0,"envSampler"),"$ial")
a6.eg=H.j(a6.y.p(0,"nullEnvTxt"),"$iQ")
t=d1.r
if(t!==C.d){a6.bD=H.j(a6.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.eh=H.j(a6.y.p(0,c0),"$iak")
a6.bE=H.j(a6.y.p(0,c1),"$iQ")
break
case C.h:a6.ei=H.j(a6.y.p(0,c0),"$ial")
a6.bE=H.j(a6.y.p(0,c1),"$iQ")
break}}t=d1.x
if(t!==C.d){a6.bF=H.j(a6.y.p(0,"refraction"),"$ia_")
a6.bG=H.j(a6.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.f:a6.ej=H.j(a6.y.p(0,c2),"$iak")
a6.bH=H.j(a6.y.p(0,c3),"$iQ")
break
case C.h:a6.ek=H.j(a6.y.p(0,c2),"$ial")
a6.bH=H.j(a6.y.p(0,c3),"$iQ")
break}}}t=d1.y
if(t!==C.d){a6.bI=H.j(a6.y.p(0,"alpha"),"$ia_")
switch(t){case C.d:break
case C.j:break
case C.f:a6.el=H.j(a6.y.p(0,c4),"$iak")
a6.bJ=H.j(a6.y.p(0,c5),"$iQ")
break
case C.h:a6.em=H.j(a6.y.p(0,c4),"$ial")
a6.bJ=H.j(a6.y.p(0,c5),"$iQ")
break}}a6.sfj(H.c([],[A.d0]))
a6.sfk(H.c([],[A.d1]))
a6.sfl(H.c([],[A.d2]))
a6.sfm(H.c([],[A.d3]))
a6.sfn(H.c([],[A.d4]))
a6.sfo(H.c([],[A.d5]))
if(d1.k2){t=d1.z
if(t>0){a6.en=H.e(a6.y.p(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.cD;(s&&C.a).h(s,new A.d0(g,f))}}t=d1.Q
if(t>0){a6.eo=H.e(a6.y.p(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia_")
s=a6.cE;(s&&C.a).h(s,new A.d1(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.ep=H.e(a6.y.p(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ia_")
s=a6.cF;(s&&C.a).h(s,new A.d2(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eq=H.e(a6.y.p(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$iQ")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$iak")
s=a6.cG;(s&&C.a).h(s,new A.d3(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.er=H.e(a6.y.p(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$ic9")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iQ")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ial")
s=a6.cH;(s&&C.a).h(s,new A.d4(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.es=H.e(a6.y.p(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.v(a7+r+a8))
H.j(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.v(a7+r+a8))
H.j(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.v(a7+r+a8))
H.j(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.v(a7+r+a8))
H.j(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.v(a7+r+a8))
H.j(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.v(a7+r+a8))
H.j(b,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.v(a7+r+a8))
H.j(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.v(a7+r+a8))
H.j(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.v(a7+r+a8))
H.j(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.v(a7+r+a8))
H.j(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.v(a7+r+a8))
H.j(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.v(a7+r+a8))
H.j(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.v(a7+r+a8))
H.j(a5,"$iak")
s=a6.cI;(s&&C.a).h(s,new A.d5(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){if(c==null||!c.d)C.c.a3(b.a,b.d,1)
else{a.d5(c)
C.c.a3(b.a,b.d,0)}},
an:function(a,b,c){C.c.a3(b.a,b.d,1)},
sfC:function(a){this.r1=H.m(a,"$ib",[A.aq],"$ab")},
sfj:function(a){this.cD=H.m(a,"$ib",[A.d0],"$ab")},
sfk:function(a){this.cE=H.m(a,"$ib",[A.d1],"$ab")},
sfl:function(a){this.cF=H.m(a,"$ib",[A.d2],"$ab")},
sfm:function(a){this.cG=H.m(a,"$ib",[A.d3],"$ab")},
sfn:function(a){this.cH=H.m(a,"$ib",[A.d4],"$ab")},
sfo:function(a){this.cI=H.m(a,"$ib",[A.d5],"$ab")}}
A.hL.prototype={
iC:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aD+"];\n"
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
iJ:function(a){var u
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
iD:function(a){var u
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
iR:function(a){var u,t
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
iS:function(a){var u,t
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
iL:function(a){var u
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
iW:function(a){var u
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
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iG:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
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
iB:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
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
iE:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
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
iH:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
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
iP:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
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
iK:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
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
case C.j:u=a.a=u+r
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
iN:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
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
iO:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
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
iF:function(a){var u,t=this.z
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
iM:function(a){var u,t=this.Q
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
iQ:function(a){var u,t=this.ch
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
iT:function(a){var u,t,s=this.cx
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
iU:function(a){var u,t,s=this.cy
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
iV:function(a){var u,t,s=this.db
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
iI:function(a){var u
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
i:function(a){return this.aw}}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.d2.prototype={}
A.d5.prototype={}
A.cR.prototype={
bW:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cL:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dv(b,35633)
r.f=r.dv(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.C(H.lr(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.v("Failed to link shader: "+H.l(s)))}r.ic()
r.ig()},
a0:function(a){a.a.useProgram(this.r)
this.x.jd()},
dv:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.lr(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.v("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
ic:function(){var u,t,s,r=this,q=H.c([],[A.dA]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dA(p,t.name,s))}r.x=new A.fG(q)},
ig:function(){var u,t,s,r=this,q=H.c([],[A.es]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ja(t.type,t.size,t.name,s))}r.y=new A.j5(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.lf(u,this.r,b,a,c)},
fJ:function(a,b,c){var u=this.a
if(a===1)return new A.ak(u,b,c)
else return A.lf(u,this.r,b,a,c)},
fK:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.lf(u,this.r,b,a,c)},
bq:function(a,b){return new P.eL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ja:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.et(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.j3(u.a,c,d)
case 35667:return new A.j1(u.a,c,d)
case 35668:return new A.j2(u.a,c,d)
case 35669:return new A.j4(u.a,c,d)
case 35674:return new A.j6(u.a,c,d)
case 35675:return new A.c9(u.a,c,d)
case 35676:return new A.aq(u.a,c,d)
case 35678:return u.fJ(b,c,d)
case 35680:return u.fK(b,c,d)
case 35670:throw H.d(u.bq("BOOL",c))
case 35671:throw H.d(u.bq("BOOL_VEC2",c))
case 35672:throw H.d(u.bq("BOOL_VEC3",c))
case 35673:throw H.d(u.bq("BOOL_VEC4",c))
default:throw H.d(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bY.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.es.prototype={}
A.j5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siz:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.et.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.c9.prototype={
aj:function(a){var u=new Float32Array(H.cd(H.m(a,"$ib",[P.A],"$ab")))
C.c.eW(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aq.prototype={
aj:function(a){var u=new Float32Array(H.cd(H.m(a,"$ib",[P.A],"$ab")))
C.c.eX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ak.prototype={
d5:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.al.prototype={
f4:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kn.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cP(s.b,b).cP(s.d.cP(s.c,b),c)
s=new V.ap(r.a,r.b,r.c)
if(!J.a3(a.f,s)){a.f=s
s=a.a
if(s!=null)s.ac()}a.sjQ(r.B(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
u=new V.br(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a3(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.ac()}},
$S:44}
F.a8.prototype={
fB:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.eB()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.eC())return
return s.B(0,Math.sqrt(s.G(s)))},
fF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.Z(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.G(r)))
r=t.M(0,q)
r=new V.Z(r.a,r.b,r.c)
r=s.bb(r.B(0,Math.sqrt(r.G(r))))
return r.B(0,Math.sqrt(r.G(r)))},
cu:function(){var u,t=this
if(t.d!=null)return!0
u=t.fB()
if(u==null){u=t.fF()
if(u==null)return!1}t.d=u
t.a.a.ac()
return!0},
fA:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.eB()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.eC())return
return s.B(0,Math.sqrt(s.G(s)))},
fE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.M(0,g)
l=new V.Z(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g)
l=new V.ap(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).M(0,j)
l=new V.Z(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.G(l)))
l=o.bb(q)
l=l.B(0,Math.sqrt(l.G(l))).bb(o)
q=l.B(0,Math.sqrt(l.G(l)))}return q},
cs:function(){var u,t=this
if(t.e!=null)return!0
u=t.fA()
if(u==null){u=t.fE()
if(u==null)return!1}t.e=u
t.a.a.ac()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.as(J.as(s.e),0)+", "+C.b.as(J.as(t.b.e),0)+", "+C.b.as(J.as(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
P:function(){return this.E("")}}
F.bo.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.as(J.as(u.e),0)+", "+C.b.as(J.as(this.b.e),0)},
P:function(){return this.E("")}}
F.bL.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.as(J.as(u.e),0)},
P:function(){return this.E("")}}
F.ee.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
jt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a7()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.j7())}h.a.a7()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bL()
if(n.a==null)H.u(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a7()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nE(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a7()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a7()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cy(l,k,i)}g=h.e
if(g!=null)g.aP(0)},
aL:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aL()||!1
if(!t.a.aL())u=!1
s=t.e
if(s!=null)s.aP(0)
return u},
cr:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aF()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bv().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.b1().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.co().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gd7(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dC])
for(n=0,m=0;m<s;++m){l=a3.j2(m)
k=l.gd7(l)
C.a.n(o,m,new Z.dC(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jq(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bz(new Z.eC(a0,f),o,a3)
e.sfU(H.c([],[Z.bG]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a7()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a7()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a7()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a7()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a7()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.a7()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.m(s,"\n")},
ac:function(){var u=this.e
if(u!=null)u.C(null)},
$ipp:1}
F.ip.prototype={
iZ:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.aE],"$ab")
u=H.c([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cy(t,q,p))}return u},
j_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aE],"$ab")
u=H.c([],[F.a8])
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
C.a.h(u,F.cy(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cy(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cu())s=!1
return s},
ct:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cs())s=!1
return s},
i:function(a){return this.P()},
E:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
P:function(){return this.E("")},
sfP:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.iq.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
E:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.E("")},
sfV:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")}}
F.ir.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
E:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
P:function(){return this.E("")},
sce:function(a){this.b=H.m(a,"$ib",[F.bL],"$ab")}}
F.aE.prototype={
cz:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jk(u.cx,r,o,t,s,q,p,a,n)},
j7:function(){return this.cz(null)},
sjQ:function(a){var u
if(!J.a3(this.z,a)){this.z=a
u=this.a
if(u!=null)u.ac()}},
jq:function(a){var u,t,s=this
if(a.u(0,$.aF())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bv())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bu())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.b1())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.bw())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dv())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dw())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.co()))return H.c([s.ch],[P.A])
else if(a.u(0,$.bt())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cu:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eB()
t.d.K(0,new F.js(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.ac()
s=t.a.e
if(s!=null)s.aP(0)}return!0},
cs:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eB()
t.d.K(0,new F.jr(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.ac()
s=t.a.e
if(s!=null)s.aP(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.b.as(J.as(s.e),0))
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
C.a.h(q,V.T(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.E("")}}
F.js.prototype={
$1:function(a){var u,t
H.e(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:9}
F.jr.prototype={
$1:function(a){var u,t
H.e(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:9}
F.jl.prototype={
a7:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.ac()
return!0},
br:function(a,b,c,d,e,f){var u=F.jk(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
aL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cu()
return!0},
ct:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cs()
return!0},
j5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a3(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
this.a7()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
P:function(){return this.E("")},
siA:function(a){this.c=H.m(a,"$ib",[F.aE],"$ab")}}
F.jm.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.K(u.b,b)
C.a.K(u.c,new F.jn(u,b))
C.a.K(u.d,new F.jo(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sfQ:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sfR:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sfS:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jn.prototype={
$1:function(a){H.e(a,"$ia8")
if(!J.a3(a.a,this.a))this.b.$1(a)},
$S:9}
F.jo.prototype={
$1:function(a){var u
H.e(a,"$ia8")
u=this.a
if(!J.a3(a.a,u)&&!J.a3(a.b,u))this.b.$1(a)},
$S:9}
F.jp.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sfW:function(a){this.b=H.m(a,"$ib",[F.bo],"$ab")},
sfX:function(a){this.c=H.m(a,"$ib",[F.bo],"$ab")}}
F.jq.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sce:function(a){this.b=H.m(a,"$ib",[F.bL],"$ab")}}
O.dR.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.N():u},
N:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.C(a)},
aG:function(){return this.N(null)},
sb9:function(a){var u=this.r
if(!(Math.abs(u-a)<$.O().a)){this.r=a
u=new D.J("blurValue",u,a,[P.A])
u.b=!0
this.N(u)}},
se2:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gq().Y(0,t.gav())
u=t.e
t.e=a
if(a!=null)a.gq().h(0,t.gav())
s=new D.J("colorTexture",u,t.e,[T.cY])
s.b=!0
t.N(s)}},
scq:function(a){},
sd_:function(a){var u,t=this,s=$.lW
if(s==null){s=new V.c2(1,0,0,0,1,0,0,0,1)
$.lW=s
a=s}else a=s
if(!J.a3(t.b,a)){u=t.b
t.b=a
s=new D.J("textureMatrix",u,a,[V.c2])
s.b=!0
t.N(s)}},
scp:function(a){var u,t=this,s=$.mo
if(s==null){s=new V.ca(1,0,0,0)
$.mo=s
a=s}else a=s
if(!J.a3(t.c,a)){u=t.c
t.c=a
s=new D.J("blurAdjust",u,a,[V.ca])
s.b=!0
t.N(s)}},
ae:function(a,b){},
U:function(a,b){H.m(a,"$ib",[T.bO],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
cY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
if(h==null){u="GaussianBlur_0".charCodeAt(0)==0?"GaussianBlur_0":"GaussianBlur_0"
t=H.e(a.fr.j(0,u),"$idQ")
if(t==null){h=a.a
t=new A.dQ(h,u)
t.bW(h,u)
s=t.z=new A.hl(!1,u)
r=new P.ab("")
r.a="precision mediump float;\n"
r.a="precision mediump float;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n\n"
h=[P.A]
s.aS(r,3,H.c([0.75],h),H.c([0.5],h))
s.aS(r,6,H.c([0.42857,2.14286],h),H.c([0.41667,0.08333],h))
s.aS(r,9,H.c([0,1.8],h),H.c([0.5122,0.2439],h))
s.aS(r,12,H.c([0,1.38462,3.23077],h),H.c([0.22703,0.31622,0.07027],h))
s.aS(r,15,H.c([0.9375,2.8125],h),H.c([0.36184,0.13816],h))
s.aS(r,18,H.c([0.47368,2.36842,4.26316],h),H.c([0.29916,0.16318,0.03766],h))
h=r.a+="void main()\n"
h+="{\n"
r.a=h
h+="   if(nullColorTxt > 0)\n"
r.a=h
h+="   {\n"
r.a=h
h+="      gl_FragColor = vec4(1.0);\n"
r.a=h
h+="      return;\n"
r.a=h
h+="   }\n"
r.a=h
h+="\n"
r.a=h
h+="   float blurOffset = abs(blurValue);\n"
r.a=h
h+="\n"
r.a=h
h+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
r.a=h
h+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
r.a=h
h+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
r.a=h
h+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
r.a=h
h+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
r.a=h
h+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
r.a=h
h+="   else                       gl_FragColor = blur18();\n"
r.a=h
h=r.a=h+"}\n"
t.cL(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",h.charCodeAt(0)==0?h:h)
t.Q=t.x.j(0,"posAttr")
t.ch=t.x.j(0,"txtAttr")
t.cx=H.j(t.y.j(0,"projViewObjMat"),"$iaq")
t.cy=H.j(t.y.j(0,"txt2DMat"),"$ic9")
t.dy=H.j(t.y.j(0,"colorTxt"),"$iak")
t.fr=H.j(t.y.j(0,"nullColorTxt"),"$iQ")
t.dx=H.j(t.y.j(0,"blurScale"),"$iet")
t.go=H.j(t.y.j(0,"blurValue"),"$ia_")
a.ck(t)}h=i.a=t
b.e=null}s=h.z
h=b.e
if((!(h instanceof Z.bz)?b.e=null:h)==null){h=b.d
q=$.aF()
p=$.b1()
p=h.cr(new Z.d8(a.a),new Z.b_(q.a|p.a))
p.ax($.aF()).e=i.a.Q.c
p.ax($.b1()).e=i.a.ch.c
b.e=p}o=H.c([],[T.bO])
i.U(o,i.e)
h=s.a
if(h)i.U(o,i.f)
for(n=0;n<o.length;++n)o[n].a0(a)
q=i.a
q.a0(a)
p=i.e
q.ah(q.dy,q.fr,p)
p=i.b
m=q.cy
m.toString
m.aj(p.ad(0,!0))
p=i.d
m=p.a
l=a.c
if(typeof m!=="number")return m.B()
p=p.b
k=a.d
if(typeof p!=="number")return p.B()
j=q.dx
C.c.jW(j.a,j.d,m/l,p/k)
k=a.geL()
q=q.cx
q.toString
q.aj(k.ad(0,!0))
q=i.a
if(h){h=i.f
q.ah(q.fx,q.fy,h)
h=i.c
q=q.db
q.toString
p=h.a
m=h.b
l=h.c
h=h.d
C.c.jX(q.a,q.d,p,m,l,h)}else{h=i.r
q=q.go
C.c.L(q.a,q.d,h)}h=b.e
if(h instanceof Z.bz){h.a0(a)
h.a8(a)
h.at(a)}else b.e=null
h=i.a
h.toString
q=a.a
q.useProgram(null)
h.x.cB()
for(n=0;n<o.length;++n){h=o[n]
if(h.c){h.c=!1
q.activeTexture(33984+h.a)
q.bindTexture(3553,null)}}}}
O.e2.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.N():u},
N:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.C(a)},
aG:function(){return this.N(null)},
dM:function(a){H.e(a,"$iz")
this.a=null
this.N(a)},
i4:function(){return this.dM(null)},
h9:function(a,b){var u=V.av
H.m(b,"$ii",[u],"$ai")
u=new D.bH([u])
u.b=!0
this.N(u)},
hb:function(a,b){var u=V.av
H.m(b,"$ii",[u],"$ai")
u=new D.bI([u])
u.b=!0
this.N(u)},
ds:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.aa(a1.e.length+3,4)*4,a3=C.e.aa(a1.f.length+3,4)*4,a4=C.e.aa(a1.r.length+3,4)*4,a5=C.e.aa(a1.x.length+3,4)*4,a6=C.e.aa(a1.y.length+3,4)*4,a7=C.e.aa(a1.z.length+3,4)*4,a8=C.e.aa(a0.e.a.length+3,4)*4
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
a=$.aF()
if(h){j=$.bv()
a=new Z.b_(a.a|j.a)}if(g){j=$.bu()
a=new Z.b_(a.a|j.a)}if(f){j=$.b1()
a=new Z.b_(a.a|j.a)}if(e){j=$.bw()
a=new Z.b_(a.a|j.a)}if(c){j=$.bt()
a=new Z.b_(a.a|j.a)}return new A.hL(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.m(a,"$ib",[T.bO],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var u
for(u=this.dx.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)C.m.ae(u.d,b)},
cY:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.ds()
u=H.e(a3.fr.j(0,a2.aw),"$ie3")
if(u==null){u=A.nK(a2,a3.a)
a3.ck(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bv
a2=a4.e
if(!(a2 instanceof Z.bz))a2=a4.e=null
if(a2==null||!a2.d.u(0,s)){a2=t.r1
if(a2)a4.d.aL()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.ct()
q.a.ct()
q=q.e
if(q!=null)q.aP(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.j5()
p=p.e
if(p!=null)p.aP(0)}n=a4.d.cr(new Z.d8(a3.a),s)
n.ax($.aF()).e=a1.a.Q.c
if(a2)n.ax($.bv()).e=a1.a.cx.c
if(r)n.ax($.bu()).e=a1.a.ch.c
if(t.rx)n.ax($.b1()).e=a1.a.cy.c
if(q)n.ax($.bw()).e=a1.a.db.c
if(t.x1)n.ax($.bt()).e=a1.a.dx.c
a4.e=n}a2=T.bO
m=H.c([],[a2])
a1.a.a0(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga4(q)
r=r.dy
r.toString
r.aj(q.ad(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga4(q)
p=a3.dx
p=a3.cx=q.t(0,p.ga4(p))
q=p}r=r.fr
r.toString
r.aj(q.ad(0,!0))}r=a1.a
q=a3.geL()
r=r.fy
r.toString
r.aj(q.ad(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.aj(C.m.ad(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.aj(C.m.ad(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.aj(C.m.ad(q,!0))}if(t.aD>0){l=a1.e.a.length
r=a1.a.k4
C.c.a3(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iav")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.cd(H.m(p.ad(0,!0),"$ib",r,"$ab")))
C.c.eX(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ah(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.f.e)
r=a1.a
q=a1.f.e
r.an(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.j:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ah(r.y1,r.aD,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.r.e)
r=a1.a
q=a1.r.e
r.an(r.y2,r.aD,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.j:r=a1.a
q=a1.x.f
r=r.aw
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ah(r.bv,r.bw,q)
q=a1.a
r=a1.x.f
q=q.aw
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.x.e)
r=a1.a
q=a1.x.e
r.an(r.e8,r.bw,q)
q=a1.a
r=a1.x.f
q=q.aw
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bx
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.f:a1.U(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ah(r.e9,r.by,q)
q=a1.a
r=a1.y.f
q=q.bx
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.h:a1.U(m,a1.y.e)
r=a1.a
q=a1.y.e
r.an(r.ea,r.by,q)
q=a1.a
r=a1.y.f
q=q.bx
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bz
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bB
C.c.L(q.a,q.d,o)
break
case C.f:a1.U(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ah(r.eb,r.bA,q)
q=a1.a
r=a1.z.f
q=q.bz
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bB
C.c.L(r.a,r.d,o)
break
case C.h:a1.U(m,a1.z.e)
r=a1.a
q=a1.z.e
r.an(r.ec,r.bA,q)
q=a1.a
r=a1.z.f
q=q.bz
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bB
C.c.L(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.en
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cD
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.eV(f.gbu(f))
o=p.a
d=p.b
c=p.c
c=p.B(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.v(d.a,d.d,o,p,c)
c=f.gaC(f)
p=e.c
C.c.v(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.eo
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cE
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbf(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.bj(f.gbf(f))
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gaC(f)
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcl()
o=e.e
C.c.L(o.a,o.d,p)
p=f.gcm()
o=e.f
C.c.L(o.a,o.d,p)
p=f.gcn()
o=e.r
C.c.L(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.ep
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cF
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbf(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbu(f).k6()
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.bj(f.gbf(f))
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gaC(f)
o=e.e
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gk0()
o=e.f
C.c.L(o.a,o.d,p)
p=f.gk_()
o=e.r
C.c.L(o.a,o.d,p)
p=f.gcl()
o=e.x
C.c.L(o.a,o.d,p)
p=f.gcm()
o=e.y
C.c.L(o.a,o.d,p)
p=f.gcn()
o=e.z
C.c.L(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eq
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
o=a1.a.cG
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbh()
H.m(m,"$ib",p,"$ab")
if(!C.a.X(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gbu(f)
d=e.d
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=f.gbR()
d=e.b
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=f.gbP(f)
d=e.c
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=i.eV(f.gbu(f))
d=o.a
c=o.b
b=o.c
b=o.B(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.v(c.a,c.d,d,o,b)
b=f.gaC(f)
o=e.f
C.c.v(o.a,o.d,b.a,b.b,b.c)
b=f.gbh()
o=b.geD(b)
if(!o){o=e.x
C.c.a3(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.a3(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.er
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.y,q=r.length,p=[P.A],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
d=a1.a.cH
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbh()
H.m(m,"$ib",o,"$ab")
if(!C.a.X(m,d)){d.a=m.length
C.a.h(m,d)}a=i.t(0,f.ga4(f))
d=f.ga4(f)
c=$.cN
d=d.bj(c==null?$.cN=new V.ap(0,0,0):c)
c=e.b
C.c.v(c.a,c.d,d.a,d.b,d.c)
d=$.cN
d=a.bj(d==null?$.cN=new V.ap(0,0,0):d)
c=e.c
C.c.v(c.a,c.d,d.a,d.b,d.c)
d=a.cO(0)
c=e.d
j=new Float32Array(H.cd(H.m(new V.c2(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ad(0,!0),"$ib",p,"$ab")))
C.c.eW(c.a,c.d,!1,j)
c=f.gaC(f)
d=e.e
C.c.v(d.a,d.d,c.a,c.b,c.c)
c=f.gbh()
d=c.geD(c)
if(!d){d=e.r
C.c.a3(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a3(d.a,d.d,0)}d=f.gcl()
c=e.x
C.c.L(c.a,c.d,d)
d=f.gcm()
c=e.y
C.c.L(c.a,c.d,d)
d=f.gcn()
c=e.z
C.c.L(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.es
C.c.a3(r.a,r.d,l)
r=a3.db
i=r.ga4(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cI
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbh()
H.m(m,"$ib",a2,"$ab")
if(!C.a.X(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gbf(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbu(f)
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbR()
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbP(f)
o=e.e
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.bj(f.gbf(f))
o=e.f
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbh()
o=p.geD(p)
if(!o){p=e.x
C.c.a3(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.a3(p.a,p.d,0)}p=f.gaC(f)
o=e.y
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gk7()
o=e.z
C.c.L(o.a,o.d,p)
p=f.gk8()
o=e.Q
C.c.L(o.a,o.d,p)
p=f.gcl()
o=e.ch
C.c.L(o.a,o.d,p)
p=f.gcm()
o=e.cx
C.c.L(o.a,o.d,p)
p=f.gcn()
o=e.cy
C.c.L(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.f:a1.U(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ah(a2.ed,a2.bC,r)
break
case C.h:a1.U(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.an(a2.ee,a2.bC,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga4(r).cO(0)}a2=a2.id
a2.toString
a2.aj(r.ad(0,!0))}if(t.dy){a1.U(m,a1.ch)
a2=a1.a
r=a1.ch
a2.an(a2.ef,a2.eg,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bD
a2.toString
q=r.a
p=r.b
r=r.c
C.c.v(a2.a,a2.d,q,p,r)
break
case C.f:a1.U(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ah(a2.eh,a2.bE,r)
r=a1.a
a2=a1.cx.f
r=r.bD
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
break
case C.h:a1.U(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.an(a2.ei,a2.bE,r)
r=a1.a
a2=a1.cx.f
r=r.bD
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bG
a2.toString
q=r.a
p=r.b
r=r.c
C.c.v(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bF
C.c.L(r.a,r.d,p)
break
case C.f:a1.U(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ah(a2.ej,a2.bH,r)
r=a1.a
a2=a1.cy.f
r=r.bG
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bF
C.c.L(a2.a,a2.d,p)
break
case C.h:a1.U(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.an(a2.ek,a2.bH,r)
r=a1.a
a2=a1.cy.f
r=r.bG
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bF
C.c.L(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bI
C.c.L(a2.a,a2.d,q)
break
case C.f:a1.U(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ah(a2.el,a2.bJ,q)
q=a1.a
a2=a1.db.f
q=q.bI
C.c.L(q.a,q.d,a2)
break
case C.h:a1.U(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.an(a2.em,a2.bJ,q)
q=a1.a
a2=a1.db.f
q=q.bI
C.c.L(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(a3)
a2=a4.e
a2.a0(a3)
a2.a8(a3)
a2.at(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.cB()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ds().aw},
sfD:function(a){this.e=H.m(a,"$ia4",[V.av],"$aa4")}}
O.hJ.prototype={}
O.cF.prototype={
N:function(a){this.a.N(H.e(a,"$iz"))},
aG:function(){return this.N(null)},
aJ:function(){},
ia:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().Y(0,t.gav())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gav())
s=new D.J(t.b+".texture2D",u,t.d,[T.cY])
s.b=!0
t.a.N(s)}},
ib:function(a){}}
O.hK.prototype={}
O.b9.prototype={
dP:function(a){var u,t,s=this
if(!J.a3(s.f,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.ah])
t.b=!0
s.a.N(t)}},
aJ:function(){this.f9()
this.dP(new V.ah(1,1,1))},
saC:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aJ()
u=t.a
u.a=null
u.N(null)}t.dP(b)}}
O.hM.prototype={
i8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.J(u.b+".refraction",t,a,[P.A])
t.b=!0
u.a.N(t)}},
aJ:function(){this.dc()
this.i8(1)}}
O.hN.prototype={
i9:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.A])
t.b=!0
u.a.N(t)}},
aJ:function(){this.dc()
this.i9(100)}}
O.ef.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
N:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.C(a)},
aG:function(){return this.N(null)},
ae:function(a,b){},
cY:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,n)
u.bW(t,n)
u.cL(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.j(u.y.j(0,"fov"),"$ia_")
u.ch=H.j(u.y.j(0,"ratio"),"$ia_")
u.cx=H.j(u.y.j(0,"boxClr"),"$iP")
u.cy=H.j(u.y.j(0,"boxTxt"),"$ial")
u.db=H.j(u.y.j(0,"viewMat"),"$iaq")
a.ck(u)}o.a=u}if(b.e==null){t=b.d.cr(new Z.d8(a.a),$.aF())
t.ax($.aF()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
C.c.L(p.a,p.d,q)
q=r.ch
C.c.L(q.a,q.d,t/s)
s=o.c
r.cy.f4(s)
s=o.d
t=r.cx
C.c.v(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).cO(0)
r=r.db
r.toString
r.aj(s.ad(0,!0))
t=b.e
if(t instanceof Z.bz){t.a0(a)
t.a8(a)
t.at(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cB()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bN.prototype={}
T.bO.prototype={}
T.cY.prototype={}
T.iM.prototype={
dQ:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cC()}},
gq:function(){var u=this.y
return u==null?this.y=D.N():u},
a0:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.el.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u}}
T.iN.prototype={
jr:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lS(a)
t=T.ld(q)
r=W.o
W.a7(u,"load",H.n(new T.iP(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aU:function(a,b,c,d,e,f){var u,t=W.lS(c);++this.d
u=W.o
W.a7(t,"load",H.n(new T.iO(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dO:function(a,b,c){var u,t,s,r
b=V.du(b)
u=V.du(a.width)
t=V.du(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kZ()
s.width=u
s.height=t
r=H.e(C.n.f0(s,"2d"),"$ics")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oS(r.getImageData(0,0,s.width,s.height))}}}
T.iP.prototype={
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
C.c.eQ(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dQ();++u.e},
$S:10}
T.iO.prototype={
$1:function(a){var u=this,t=u.a,s=t.dO(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.eQ(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cC()}++t.e},
$S:10}
V.bk.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.e1.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saf:function(a){this.a=H.m(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.aw.prototype={
aM:function(a,b){return!this.f8(0,b)},
i:function(a){return"!["+this.da(0)+"]"}}
V.id.prototype={
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c6(this.a),t=H.c6(this.b)
return u+".."+t},
$iaB:1}
V.io.prototype={
fe:function(a){var u,t
if(a.a.length<=0)throw H.d(P.v("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.p,P.R])
for(t=new H.cE(a,a.gl(a),[H.am(a,"y",0)]);t.A();)u.n(0,t.d,!0)
this.si7(u)},
aM:function(a,b){return this.a.bs(0,b)},
i:function(a){var u=this.a
return P.cV(u.gab(u),0,null)},
si7:function(a){this.a=H.m(a,"$iH",[P.p,P.R],"$aH")},
$iaB:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d_(this.a.k(0,b))
r.saf(H.c([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
jg:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
siv:function(a){this.c=H.m(a,"$ib",[V.d_],"$ab")}}
V.eq.prototype={
i:function(a){var u=H.lz(this.b,"\n","\\n"),t=H.lz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cZ.prototype={
aO:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.F)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si0:function(a){var u=P.f
this.c=H.m(a,"$iH",[u,u],"$aH")}}
V.iS.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.siv(H.c([],[V.d_]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cZ(a)
u=P.f
t.si0(new H.aQ([u,u]))
this.b.n(0,a,t)}return t},
eU:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.eq]),k=this.c,j=[P.p],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.jg(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.d(P.v("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eq(n==null?o.b:n,p,s)}++s}}},
sik:function(a){this.a=H.m(a,"$iH",[P.f,V.cS],"$aH")},
sio:function(a){this.b=H.m(a,"$iH",[P.f,V.cZ],"$aH")}}
V.d_.prototype={
i:function(a){return this.b.b+": "+this.da(0)}}
X.fL.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a6:function(a){var u=this.fr
if(u!=null)u.C(a)},
sau:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.J("width",u,b,[P.p])
u.b=!0
t.a6(u)}},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.J("height",u,b,[P.p])
u.b=!0
t.a6(u)}},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.t()
h.sau(0,C.e.a5(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.t()
h.saq(0,C.e.a5(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.ac(u.getParameter(3379))
p=V.du(s)
o=V.du(r)
q=V.du(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.eR(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.ld(n)
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
if(t!=null)t.cC()
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
a.c=C.i.a5(s*h.a)
r=t.d
a.d=C.i.a5(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.D(k)
j=C.i.a5(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.D(l)
u.viewport(j,C.i.a5(t*l),C.i.a5(s*k),C.i.a5(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
at:function(a){a.a.bindFramebuffer(36160,null)}}
X.bV.prototype={$ibb:1}
X.hj.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.N():u},
a0:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.D(u)
q=C.i.a5(r*u)
r=s.b
if(typeof t!=="number")return H.D(t)
p=C.i.a5(r*t)
r=C.i.a5(s.c*u)
a.c=r
s=C.i.a5(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
at:function(a){}}
X.hq.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
a0:function(a){var u
a.cy.bO(V.c3())
u=V.c3()
a.db.bO(u)},
at:function(a){a.cy.aN()
a.db.aN()},
$ibb:1,
$ibV:1}
X.e9.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.N():u},
a6:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.C(a)},
fu:function(){return this.a6(null)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.ba(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bO(d)
k=$.m0
if(k==null){k=V.nM()
j=$.mm
if(j==null)j=$.mm=new V.Z(0,1,0)
i=$.ml
if(i==null)i=$.ml=new V.Z(0,0,-1)
u=i.B(0,Math.sqrt(i.G(i)))
j=j.bb(u)
t=j.B(0,Math.sqrt(j.G(j)))
s=u.bb(t)
r=new V.Z(k.a,k.b,k.c)
q=t.T(0).G(r)
p=s.T(0).G(r)
o=u.T(0).G(r)
k=V.ba(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.m0=k
n=k}else n=k
k=l.b
if(k!=null){m=k.b1(0,a,l)
if(m!=null)n=m.t(0,n)}a.db.bO(n)},
at:function(a){a.cy.aN()
a.db.aN()},
$ibb:1,
$ibV:1}
X.cW.prototype={}
V.bB.prototype={
bl:function(a){this.b=new P.ho(C.U)
this.c=null
this.sc3(H.c([],[[P.b,W.aH]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fI(q,0,q.length)
n=o==null?q:o
C.S.f3(p,H.lz(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaE(m.d),p)}},
eJ:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sc3(H.c([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bt():t).eU(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)q.bN(t[r])},
sc3:function(a){this.d=H.m(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.kU.prototype={
$1:function(a){H.e(a,"$ibe")
P.ly(C.i.eT(this.a.gjj(),2)+" fps")},
$S:48}
V.h0.prototype={
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
bt:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iT()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.w(new H.t("_"))
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
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bk())
t=a1.k(0,r).m(0,h)
u=V.w(new H.t("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bk())
t=a1.k(0,r).m(0,e)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.aw()
s=[V.aB]
t.saf(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.w(new H.t("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.aw()
t.saf(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.w(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.w(new H.t(" \n\t"))
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
u=[P.f]
t.aO(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aO(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aO(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hk.prototype={
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
bt:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iT()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.w(new H.t("_"))
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
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bk())
t=e.k(0,j).m(0,i)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.aw()
s=[V.aB]
t.saf(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.aw()
u.saf(H.c([],s))
C.a.h(t.a,u)
t=V.w(new H.t("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.w(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.w(new H.t(" \n\t"))
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
t=[P.f]
u.aO(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aO(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aO(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.hm.prototype={
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
bt:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iT()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.w(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.w(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.w(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.w(new H.t("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bk())
C.a.h(l.k(0,s).m(0,m).a,new V.bk())
u=l.k(0,m).m(0,m)
t=new V.aw()
t.saf(H.c([],[V.aB]))
C.a.h(u.a,t)
u=V.w(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aO(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.i6.prototype={
eJ:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sc3(H.c([],[[P.b,W.aH]]))
this.O(C.a.m(b,"\n"),"#111")},
bN:function(a){},
bt:function(){return}}
V.ia.prototype={
dW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mf().gcX().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dU(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lE(m.c).h(0,q)
o=W.nz("radio")
o.checked=s
o.name=u
u=W.o
W.a7(o,"change",H.n(new V.ib(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lE(m.c).h(0,r.createElement("br"))},
ao:function(a,b,c){return this.dW(a,b,c,!1)},
dU:function(a){var u,t,s=P.mf(),r=P.f,q=P.nG(s.gcX(),r,r)
q.n(0,this.a,a)
u=s.eM(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k6([],[]).d0(""),"",t)}}
V.ib.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.dU(u.d)}},
$S:10}
V.is.prototype={
ff:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.n(new V.iu(o),{func:1,ret:-1,args:[r]}),!1,r)},
dY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.ie()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eU(C.a.jp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.pd(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.fn(C.C,n,C.l,!1)
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
f_:function(a){var u,t,s,r=new V.h0("dart")
r.bl("dart")
u=new V.hk("glsl")
u.bl("glsl")
t=new V.hm("html")
t.bl("html")
s=C.a.jh(H.c([r,u,t],[V.bB]),new V.iv(a))
if(s!=null)return s
r=new V.i6("plain")
r.bl("plain")
return r},
dX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dt(r).a9(r,"+")){C.a.n(b0,s,C.b.ay(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a9(r,"-")){C.a.n(b0,s,C.b.ay(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f_(a8)
q.eJ(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fn(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lG()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.F)(r),++a0)C.a3.j1(a,r[a0])
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
for(a3=C.a.gV(r);a3.A();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iX:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.f],"$ab")
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
ie:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iT()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.aw()
r=[V.aB]
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.t("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.aw()
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.t("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.aw()
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.w(new H.t("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.w(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.w(new H.t("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.aw()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.aw()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bk())
s=u.k(0,i).m(0,i)
t=new V.aw()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("*_`["))
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
V.iu.prototype={
$1:function(a){P.mb(C.t,new V.it(this.a))},
$S:10}
V.it.prototype={
$0:function(){var u=C.i.a5(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.iv.prototype={
$1:function(a){return H.e(a,"$ibB").a===this.a},
$S:49}
U.kF.prototype={
$1:function(a){var u=this.a
u.c.sb9(a)
u.e.sb9(a)},
$S:50}
U.kG.prototype={
$0:function(){this.a.$1(0)},
$S:0}
U.kH.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
U.kK.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
U.kL.prototype={
$0:function(){this.a.$1(0.3)},
$S:0}
U.kM.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
U.kN.prototype={
$0:function(){this.a.$1(0.5)},
$S:0}
U.kO.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
U.kP.prototype={
$0:function(){this.a.$1(0.7)},
$S:0}
U.kQ.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
U.kR.prototype={
$0:function(){this.a.$1(0.9)},
$S:0}
U.kI.prototype={
$0:function(){this.a.$1(1)},
$S:0}
U.kJ.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iz")
u=this.a
t=this.b
s=t.c
if(s==null)s=q
else{s=s.a
s=s==null?q:s.c}r=[P.f]
u.dX("Vertex Shader","glsl",0,H.c(s.split("\n"),r))
t=t.c
if(t==null)t=q
else{t=t.a
t=t==null?q:t.d}u.dX("Fragment Shader","glsl",0,H.c(t.split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.f5=u.i
u=J.dW.prototype
u.f7=u.i
u=P.i.prototype
u.f6=u.bS
u=W.V.prototype
u.bV=u.ap
u=W.f5.prototype
u.fa=u.aB
u=O.cF.prototype
u.f9=u.aJ
u=O.b9.prototype
u.dc=u.aJ
u=V.e1.prototype
u.f8=u.aM
u.da=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oM","of",11)
u(P,"oN","og",11)
u(P,"oO","oh",11)
t(P,"mK","oK",3)
s(W,"oZ",4,null,["$4"],["oj"],24,0)
s(W,"p_",4,null,["$4"],["ok"],24,0)
var m
r(m=E.ao.prototype,"geH",0,0,null,["$1","$0"],["eI","jA"],1,0)
r(m,"geF",0,0,null,["$1","$0"],["eG","jx"],1,0)
q(m,"gjv","jw",7)
q(m,"gjy","jz",7)
r(m=E.ep.prototype,"gde",0,0,null,["$1","$0"],["dg","df"],1,0)
p(m,"gjM","eN",3)
o(m=X.ex.prototype,"gho","hp",12)
o(m,"ghc","hd",12)
o(m,"ghi","hj",4)
o(m,"ghs","ht",25)
o(m,"ghq","hr",25)
o(m,"ghw","hx",4)
o(m,"ghA","hB",4)
o(m,"ghm","hn",4)
o(m,"ghy","hz",4)
o(m,"ghk","hl",4)
o(m,"ghC","hD",36)
o(m,"ghE","hF",12)
o(m,"ghU","hV",13)
o(m,"ghQ","hR",13)
o(m,"ghS","hT",13)
r(m=D.dY.prototype,"gdG",0,0,null,["$1","$0"],["dH","hu"],1,0)
o(m,"ghG","hH",38)
q(m,"gh6","h7",26)
q(m,"ghK","hL",26)
n(V.W.prototype,"gl","bc",14)
n(V.Z.prototype,"gl","bc",14)
n(V.ca.prototype,"gl","bc",14)
r(m=U.cB.prototype,"gaV",0,0,null,["$1","$0"],["S","ag"],1,0)
q(m,"gh4","h5",27)
q(m,"ghI","hJ",27)
r(m=U.ey.prototype,"gaV",0,0,null,["$1","$0"],["S","ag"],1,0)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
r(m=U.ez.prototype,"gaV",0,0,null,["$1","$0"],["S","ag"],1,0)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
o(m,"gca","cb",2)
o(m,"gfZ","h_",2)
o(m,"gh0","h1",2)
o(m,"git","iu",2)
o(m,"gir","is",2)
o(m,"gip","iq",2)
o(U.eA.prototype,"gh2","h3",2)
r(m=M.dE.prototype,"ga_",0,0,null,["$1","$0"],["W","aF"],1,0)
q(m,"ghM","hN",28)
q(m,"ghO","hP",28)
r(M.dG.prototype,"ga_",0,0,null,["$1","$0"],["W","aF"],1,0)
r(m=M.dL.prototype,"ga_",0,0,null,["$1","$0"],["W","aF"],1,0)
q(m,"ghe","hf",7)
q(m,"ghg","hh",7)
r(M.dP.prototype,"ga_",0,0,null,["$1","$0"],["W","aF"],1,0)
r(O.dR.prototype,"gav",0,0,null,["$1","$0"],["N","aG"],1,0)
r(m=O.e2.prototype,"gav",0,0,null,["$1","$0"],["N","aG"],1,0)
r(m,"gi3",0,0,null,["$1","$0"],["dM","i4"],1,0)
q(m,"gh8","h9",29)
q(m,"gha","hb",29)
r(O.cF.prototype,"gav",0,0,null,["$1","$0"],["N","aG"],1,0)
r(O.ef.prototype,"gav",0,0,null,["$1","$0"],["N","aG"],1,0)
r(X.e9.prototype,"gft",0,0,null,["$1","$0"],["a6","fu"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.l7,J.a,J.at,P.eT,P.i,H.cE,P.b5,H.bZ,H.d7,H.fU,H.iY,P.bE,H.ct,H.fa,P.ad,H.hx,H.hz,H.ht,P.fg,P.bi,P.aM,P.eD,P.iC,P.cU,P.iD,P.be,P.an,P.km,P.k0,P.cb,P.eS,P.y,P.ke,P.hF,P.bX,P.hp,P.kk,P.kj,P.R,P.aA,P.aa,P.bD,P.i4,P.ei,P.eL,P.hi,P.bF,P.b,P.H,P.L,P.ay,P.f,P.ab,P.cc,P.jb,P.k3,W.fX,W.bQ,W.G,W.e7,W.f5,W.k9,W.dN,W.aD,W.k_,W.fo,P.k5,P.fl,P.jV,P.S,O.a4,O.cG,E.fO,E.ao,E.ie,E.ep,Z.eC,Z.d8,Z.bz,Z.bG,Z.b_,D.fR,D.cx,D.z,X.dD,X.dX,X.hv,X.hC,X.aC,X.hU,X.iU,X.ex,D.dI,D.a6,D.ea,D.eh,D.em,D.en,D.eo,V.ah,V.au,V.ha,V.c2,V.av,V.a9,V.ap,V.br,V.cP,V.W,V.Z,V.ca,U.ey,U.ez,U.eA,M.dG,M.dL,M.dP,M.ax,A.dA,A.fG,A.hl,A.hL,A.d0,A.d3,A.d1,A.d4,A.d2,A.d5,A.bY,A.es,A.j5,F.a8,F.bo,F.bL,F.ee,F.ip,F.iq,F.ir,F.aE,F.jl,F.jm,F.jp,F.jq,O.bN,O.cF,T.iN,V.bk,V.aB,V.e1,V.id,V.io,V.cS,V.eq,V.cZ,V.iS,X.cW,X.bV,X.hq,X.e9,V.bB,V.ia,V.is])
s(J.a,[J.hs,J.dU,J.dW,J.b6,J.dV,J.c0,H.cJ,H.bK,W.k,W.fD,W.bU,W.cs,W.b3,W.b4,W.Y,W.eF,W.h1,W.h2,W.eH,W.dK,W.eJ,W.h4,W.o,W.eM,W.aP,W.hn,W.eO,W.bn,W.e_,W.hO,W.eU,W.eV,W.aR,W.eW,W.eZ,W.aS,W.f2,W.f4,W.aU,W.f6,W.aV,W.fb,W.aJ,W.fe,W.iR,W.aX,W.fh,W.iW,W.jg,W.fp,W.fr,W.ft,W.fv,W.fx,P.b8,P.eQ,P.bc,P.f0,P.i9,P.fc,P.bf,P.fj,P.fH,P.eE,P.dB,P.dO,P.eb,P.ec,P.c8,P.ed,P.ek,P.eu,P.f8])
s(J.dW,[J.i5,J.d6,J.bJ])
t(J.l6,J.b6)
s(J.dV,[J.dT,J.dS])
t(P.hB,P.eT)
s(P.hB,[H.ev,W.jB,W.ar,P.he])
t(H.t,H.ev)
s(P.i,[H.h7,H.hG,H.d9])
s(H.h7,[H.c1,H.hy])
s(P.b5,[H.hH,H.ju])
t(H.hI,H.c1)
t(H.fV,H.fU)
s(P.bE,[H.i1,H.hu,H.j9,H.j_,H.fQ,H.il,P.fF,P.e8,P.aO,P.ja,P.j7,P.cT,P.fT,P.h_])
s(H.ct,[H.kV,H.iJ,H.kA,H.kB,H.kC,P.jx,P.jw,P.jy,P.jz,P.kd,P.kc,P.jI,P.jM,P.jJ,P.jK,P.jL,P.jP,P.jQ,P.jO,P.jN,P.iE,P.iF,P.ku,P.jY,P.jX,P.jZ,P.hA,P.hE,P.h5,P.h6,P.jf,P.jc,P.jd,P.je,P.kf,P.kg,P.ki,P.kh,P.kq,P.kp,P.kr,P.ks,W.h8,W.hQ,W.hS,W.ik,W.iB,W.jH,W.i0,W.i_,W.k1,W.k2,W.kb,W.kl,P.k7,P.kw,P.hf,P.hg,P.fJ,E.ig,E.ih,E.ii,E.iQ,D.hb,D.hc,F.kn,F.js,F.jr,F.jn,F.jo,T.iP,T.iO,V.kU,V.ib,V.iu,V.it,V.iv,U.kF,U.kG,U.kH,U.kK,U.kL,U.kM,U.kN,U.kO,U.kP,U.kQ,U.kR,U.kI,U.kJ])
s(H.iJ,[H.iz,H.cq])
t(H.jv,P.fF)
t(P.hD,P.ad)
s(P.hD,[H.aQ,W.jA])
t(H.e4,H.bK)
s(H.e4,[H.de,H.dg])
t(H.df,H.de)
t(H.cK,H.df)
t(H.dh,H.dg)
t(H.e5,H.dh)
s(H.e5,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e6,H.cL])
t(P.jW,P.km)
t(P.jU,P.k0)
t(P.fm,P.hF)
t(P.ew,P.fm)
s(P.bX,[P.fM,P.h9])
t(P.bC,P.iD)
s(P.bC,[P.fN,P.ho,P.jj,P.ji])
t(P.jh,P.h9)
s(P.aa,[P.A,P.p])
s(P.aO,[P.c7,P.hr])
t(P.jD,P.cc)
s(W.k,[W.E,W.hd,W.cH,W.aT,W.di,W.aW,W.aK,W.dk,W.jt,W.da,P.fK,P.bT])
s(W.E,[W.V,W.bA,W.db])
s(W.V,[W.x,P.q])
s(W.x,[W.dy,W.fE,W.cp,W.by,W.bW,W.aH,W.hh,W.cC,W.cD,W.im,W.bd,W.ej,W.iH,W.iI,W.cX])
s(W.b3,[W.cu,W.fY,W.fZ])
t(W.fW,W.b4)
t(W.cv,W.eF)
t(W.eI,W.eH)
t(W.dJ,W.eI)
t(W.eK,W.eJ)
t(W.h3,W.eK)
t(W.aI,W.bU)
t(W.eN,W.eM)
t(W.cz,W.eN)
t(W.eP,W.eO)
t(W.c_,W.eP)
t(W.bP,W.o)
s(W.bP,[W.b7,W.ae,W.aY])
t(W.hP,W.eU)
t(W.hR,W.eV)
t(W.eX,W.eW)
t(W.hT,W.eX)
t(W.f_,W.eZ)
t(W.cM,W.f_)
t(W.f3,W.f2)
t(W.i7,W.f3)
t(W.ij,W.f4)
t(W.dj,W.di)
t(W.iw,W.dj)
t(W.f7,W.f6)
t(W.ix,W.f7)
t(W.iA,W.fb)
t(W.ff,W.fe)
t(W.iK,W.ff)
t(W.dl,W.dk)
t(W.iL,W.dl)
t(W.fi,W.fh)
t(W.iV,W.fi)
t(W.bh,W.ae)
t(W.fq,W.fp)
t(W.jC,W.fq)
t(W.eG,W.dK)
t(W.fs,W.fr)
t(W.jR,W.fs)
t(W.fu,W.ft)
t(W.eY,W.fu)
t(W.fw,W.fv)
t(W.k4,W.fw)
t(W.fy,W.fx)
t(W.k8,W.fy)
t(W.jE,W.jA)
t(W.jF,P.iC)
t(W.lj,W.jF)
t(W.jG,P.cU)
t(W.ka,W.f5)
t(P.k6,P.k5)
t(P.aj,P.jV)
t(P.eR,P.eQ)
t(P.hw,P.eR)
t(P.f1,P.f0)
t(P.i2,P.f1)
t(P.cQ,P.q)
t(P.fd,P.fc)
t(P.iG,P.fd)
t(P.fk,P.fj)
t(P.iX,P.fk)
t(P.fI,P.eE)
t(P.i3,P.bT)
t(P.f9,P.f8)
t(P.iy,P.f9)
s(E.fO,[Z.dC,A.cR,T.bO])
s(D.z,[D.bH,D.bI,D.J,X.i8])
s(X.i8,[X.e0,X.bp,X.cI,X.er])
s(O.a4,[D.dY,U.cB,M.dE])
s(D.fR,[U.fS,U.ai])
t(U.dF,U.ai)
s(A.cR,[A.dQ,A.e3,A.eg])
s(A.es,[A.Q,A.j1,A.j2,A.j4,A.j0,A.a_,A.et,A.P,A.j3,A.j6,A.c9,A.aq,A.ak,A.al])
s(O.bN,[O.dR,O.e2,O.ef])
s(O.cF,[O.hJ,O.hK,O.b9])
s(O.b9,[O.hM,O.hN])
s(T.bO,[T.cY,T.el])
t(T.iM,T.cY)
s(V.e1,[V.aw,V.d_])
s(X.cW,[X.fL,X.hj])
s(V.bB,[V.h0,V.hk,V.hm,V.i6])
u(H.ev,H.d7)
u(H.de,P.y)
u(H.df,H.bZ)
u(H.dg,P.y)
u(H.dh,H.bZ)
u(P.eT,P.y)
u(P.fm,P.ke)
u(W.eF,W.fX)
u(W.eH,P.y)
u(W.eI,W.G)
u(W.eJ,P.y)
u(W.eK,W.G)
u(W.eM,P.y)
u(W.eN,W.G)
u(W.eO,P.y)
u(W.eP,W.G)
u(W.eU,P.ad)
u(W.eV,P.ad)
u(W.eW,P.y)
u(W.eX,W.G)
u(W.eZ,P.y)
u(W.f_,W.G)
u(W.f2,P.y)
u(W.f3,W.G)
u(W.f4,P.ad)
u(W.di,P.y)
u(W.dj,W.G)
u(W.f6,P.y)
u(W.f7,W.G)
u(W.fb,P.ad)
u(W.fe,P.y)
u(W.ff,W.G)
u(W.dk,P.y)
u(W.dl,W.G)
u(W.fh,P.y)
u(W.fi,W.G)
u(W.fp,P.y)
u(W.fq,W.G)
u(W.fr,P.y)
u(W.fs,W.G)
u(W.ft,P.y)
u(W.fu,W.G)
u(W.fv,P.y)
u(W.fw,W.G)
u(W.fx,P.y)
u(W.fy,W.G)
u(P.eQ,P.y)
u(P.eR,W.G)
u(P.f0,P.y)
u(P.f1,W.G)
u(P.fc,P.y)
u(P.fd,W.G)
u(P.fj,P.y)
u(P.fk,W.G)
u(P.eE,P.ad)
u(P.f8,P.y)
u(P.f9,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.by.prototype
C.n=W.bW.prototype
C.S=W.aH.prototype
C.V=J.a.prototype
C.a=J.b6.prototype
C.W=J.dS.prototype
C.e=J.dT.prototype
C.m=J.dU.prototype
C.i=J.dV.prototype
C.b=J.c0.prototype
C.X=J.bJ.prototype
C.a2=W.cM.prototype
C.F=J.i5.prototype
C.c=P.c8.prototype
C.a3=W.bd.prototype
C.G=W.ej.prototype
C.w=J.d6.prototype
C.H=W.bh.prototype
C.I=W.da.prototype
C.a4=new P.fN()
C.J=new P.fM()
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
C.l=new P.jh()
C.R=new P.jj()
C.k=new P.jW()
C.d=new A.bY(0,"ColorSourceType.None")
C.j=new A.bY(1,"ColorSourceType.Solid")
C.f=new A.bY(2,"ColorSourceType.Texture2D")
C.h=new A.bY(3,"ColorSourceType.TextureCube")
C.t=new P.bD(0)
C.T=new P.bD(5e6)
C.U=new P.hp("element",!0,!1,!1,!1)
C.A=H.c(u([127,2047,65535,1114111]),[P.p])
C.o=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.p=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.B=H.c(u([]),[P.f])
C.a_=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.v=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a1=new H.fV(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",A:"double",aa:"num",f:"String",R:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ao]]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:P.L,args:[F.a8]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.A},{func:1,ret:P.L,args:[,]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:P.R,args:[W.E]},{func:1,ret:P.R,args:[W.aD]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.R,args:[W.V,P.f,P.f,W.bQ]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[P.p,[P.i,D.a6]]},{func:1,ret:-1,args:[P.p,[P.i,U.ai]]},{func:1,ret:-1,args:[P.p,[P.i,M.ax]]},{func:1,ret:-1,args:[P.p,[P.i,V.av]]},{func:1,ret:P.L,args:[P.f,,]},{func:1,ret:P.L,args:[P.aa]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.f]},{func:1,ret:P.S,args:[P.p]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,args:[,P.f]},{func:1,ret:P.R,args:[[P.i,D.a6]]},{func:1,ret:[P.H,P.f,P.f],args:[[P.H,P.f,P.f],P.f]},{func:1,args:[W.o]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:P.L,args:[F.aE,P.A,P.A]},{func:1,ret:W.V,args:[W.E]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.L,args:[P.f]},{func:1,ret:P.L,args:[P.be]},{func:1,ret:P.R,args:[V.bB]},{func:1,ret:P.L,args:[P.A]},{func:1,ret:P.L,args:[,],opt:[P.ay]},{func:1,ret:[P.aM,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cr=null
$.lJ=null
$.ln=!1
$.mN=null
$.mI=null
$.mT=null
$.kx=null
$.kD=null
$.lw=null
$.ce=null
$.dq=null
$.dr=null
$.lo=!1
$.a2=C.k
$.az=[]
$.bm=null
$.l2=null
$.lO=null
$.lN=null
$.dd=P.l9(P.f,P.bF)
$.lW=null
$.lX=null
$.m1=null
$.cN=null
$.m6=null
$.mk=null
$.mi=null
$.mj=null
$.mn=null
$.mm=null
$.ml=null
$.mo=null
$.m0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pm","mX",function(){return H.mM("_$dart_dartClosure")})
u($,"pn","lA",function(){return H.mM("_$dart_js")})
u($,"ps","mY",function(){return H.bg(H.iZ({
toString:function(){return"$receiver$"}}))})
u($,"pt","mZ",function(){return H.bg(H.iZ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pu","n_",function(){return H.bg(H.iZ(null))})
u($,"pv","n0",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"py","n3",function(){return H.bg(H.iZ(void 0))})
u($,"pz","n4",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"px","n2",function(){return H.bg(H.md(null))})
u($,"pw","n1",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pB","n6",function(){return H.bg(H.md(void 0))})
u($,"pA","n5",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pS","lB",function(){return P.oe()})
u($,"pE","n7",function(){return P.ob()})
u($,"pT","nb",function(){return H.nL(H.cd(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pV","nd",function(){return P.o_("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pW","ne",function(){return P.oD()})
u($,"pU","nc",function(){return P.lU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pL","na",function(){return Z.aL(0)})
u($,"pF","n8",function(){return Z.aL(511)})
u($,"pN","aF",function(){return Z.aL(1)})
u($,"pM","bv",function(){return Z.aL(2)})
u($,"pH","bu",function(){return Z.aL(4)})
u($,"pO","b1",function(){return Z.aL(8)})
u($,"pP","bw",function(){return Z.aL(16)})
u($,"pI","dv",function(){return Z.aL(32)})
u($,"pJ","dw",function(){return Z.aL(64)})
u($,"pK","n9",function(){return Z.aL(96)})
u($,"pQ","co",function(){return Z.aL(128)})
u($,"pG","bt",function(){return Z.aL(256)})
u($,"pl","mW",function(){return new V.ha(1e-9)})
u($,"pk","O",function(){return $.mW()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cJ,DataView:H.bK,ArrayBufferView:H.bK,Float32Array:H.cK,Float64Array:H.cK,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e6,CanvasPixelArray:H.e6,Uint8Array:H.cL,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fD,HTMLAnchorElement:W.dy,HTMLAreaElement:W.fE,HTMLBaseElement:W.cp,Blob:W.bU,HTMLBodyElement:W.by,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cs,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cu,CSSUnitValue:W.cu,CSSPerspective:W.fW,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fY,CSSUnparsedValue:W.fZ,DataTransferItemList:W.h1,HTMLDivElement:W.aH,DOMException:W.h2,ClientRectList:W.dJ,DOMRectList:W.dJ,DOMRectReadOnly:W.dK,DOMStringList:W.h3,DOMTokenList:W.h4,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cz,FileWriter:W.hd,HTMLFormElement:W.hh,Gamepad:W.aP,History:W.hn,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.bn,HTMLImageElement:W.cC,HTMLInputElement:W.cD,KeyboardEvent:W.b7,Location:W.e_,MediaList:W.hO,MessagePort:W.cH,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aR,MimeTypeArray:W.hT,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aS,PluginArray:W.i7,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aT,SourceBufferList:W.iw,SpeechGrammar:W.aU,SpeechGrammarList:W.ix,SpeechRecognitionResult:W.aV,Storage:W.iA,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ej,HTMLTableRowElement:W.iH,HTMLTableSectionElement:W.iI,HTMLTemplateElement:W.cX,TextTrack:W.aW,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iK,TextTrackList:W.iL,TimeRanges:W.iR,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iV,TrackDefaultList:W.iW,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.jg,VideoTrackList:W.jt,WheelEvent:W.bh,Window:W.da,DOMWindow:W.da,Attr:W.db,CSSRuleList:W.jC,ClientRect:W.eG,DOMRect:W.eG,GamepadList:W.jR,NamedNodeMap:W.eY,MozNamedAttrMap:W.eY,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k8,SVGLength:P.b8,SVGLengthList:P.hw,SVGNumber:P.bc,SVGNumberList:P.i2,SVGPointList:P.i9,SVGScriptElement:P.cQ,SVGStringList:P.iG,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iX,AudioBuffer:P.fH,AudioParamMap:P.fI,AudioTrackList:P.fK,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.i3,WebGLBuffer:P.dB,WebGLFramebuffer:P.dO,WebGLProgram:P.eb,WebGLRenderbuffer:P.ec,WebGL2RenderingContext:P.c8,WebGLShader:P.ed,WebGLTexture:P.ek,WebGLUniformLocation:P.eu,SQLResultSetRowList:P.iy})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e4.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.e5.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(U.mQ,[])
else U.mQ([])})})()
//# sourceMappingURL=test.dart.js.map
