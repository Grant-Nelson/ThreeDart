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
a[c]=function(){a[c]=function(){H.pA(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lh:function lh(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hq:function(){return new P.cf("No element")},
nR:function(){return new P.cf("Too many elements")},
nQ:function(){return new P.cf("Too few elements")},
w:function w(a){this.a=a},
h5:function h5(){},
c8:function c8(){},
cK:function cK(a,b,c){var _=this
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
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
jy:function jy(a,b,c){this.a=a
this.b=b
this.$ti=c},
c6:function c6(){},
db:function db(){},
et:function et(){},
nI:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cu:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pg:function(a){return v.types[H.al(a)]},
pn:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iL},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.aI(a))
return u},
cU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oa:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.I(s,q)|32)>t)return}return parseInt(a,b)},
cb:function(a){return H.o1(a)+H.lz(H.bY(a),0,null)},
o1:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibU){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cu(t.length>1&&C.b.I(t,0)===36?C.b.aw(t,1):t)},
o2:function(){if(!!self.location)return self.location.href
return},
mb:function(a){var u,t,s,r,q
H.kO(a)
u=J.aJ(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ob:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aI(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.b_(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aI(s))}return H.mb(r)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aI(s))
if(s<0)throw H.c(H.aI(s))
if(s>65535)return H.ob(a)}return H.mb(a)},
oc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b_(u,10))>>>0,56320|u&1023)}}throw H.c(P.aj(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var u=H.ca(a).getFullYear()+0
return u},
o7:function(a){var u=H.ca(a).getMonth()+1
return u},
o3:function(a){var u=H.ca(a).getDate()+0
return u},
o4:function(a){var u=H.ca(a).getHours()+0
return u},
o6:function(a){var u=H.ca(a).getMinutes()+0
return u},
o8:function(a){var u=H.ca(a).getSeconds()+0
return u},
o5:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
D:function(a){throw H.c(H.aI(a))},
h:function(a,b){if(a==null)J.aJ(a)
throw H.c(H.co(a,b))},
co:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,s,null)
u=H.al(J.aJ(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.ea(b,s)},
p8:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aR(!0,b,"end",null)},
aI:function(a){return new P.aR(!0,a,null,null)},
p3:function(a){if(typeof a!=="number")throw H.c(H.aI(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n7})
u.name=""}else u.toString=H.n7
return u},
n7:function(){return J.av(this.dartException)},
u:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bq(a))},
bk:function(a){var u,t,s,r,q,p
a=H.n5(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ml:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.i2(a,b==null?null:b.method)},
li:function(a,b){var u=b==null,t=u?null:b.method
return new H.ht(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.li(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.na()
q=$.nb()
p=$.nc()
o=$.nd()
n=$.ng()
m=$.nh()
l=$.nf()
$.ne()
k=$.nj()
j=$.ni()
i=r.ao(u)
if(i!=null)return f.$1(H.li(H.K(u),i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.li(H.K(u),i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.K(u),i))}}return f.$1(new H.ja(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ei()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aR(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ei()
return a},
cs:function(a){var u
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
pc:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pm:function(a,b,c,d,e,f){H.e(a,"$ibL")
switch(H.al(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
cn:function(a,b){var u
H.al(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pm)
a.$identity=u
return u},
nH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iA().constructor.prototype):Object.create(new H.cx(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b5
if(typeof t!=="number")return t.p()
$.b5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lW(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pg,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lV:H.l8
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lW(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nE:function(a,b,c,d){var u=H.l8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nE(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cy
return new Function(r+H.m(q==null?$.cy=H.fN("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.p()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cy
return new Function(r+H.m(q==null?$.cy=H.fN("self"):q)+"."+H.m(u)+"("+o+");}")()},
nF:function(a,b,c,d){var u=H.l8,t=H.lV
switch(b?-1:a){case 0:throw H.c(H.og("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nG:function(a,b){var u,t,s,r,q,p,o,n=$.cy
if(n==null)n=$.cy=H.fN("self")
u=$.lU
if(u==null)u=$.lU=H.fN("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nF(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.b5
if(typeof u!=="number")return u.p()
$.b5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.b5
if(typeof u!=="number")return u.p()
$.b5=u+1
return new Function(n+u+"}")()},
lD:function(a,b,c,d,e,f,g){return H.nH(a,b,H.al(c),d,!!e,!!f,g)},
l8:function(a){return a.a},
lV:function(a){return a.c},
fN:function(a){var u,t,s,r=new H.cx("self","target","receiver","name"),q=J.lf(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.p_("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b2(a,"String"))},
p9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"double"))},
pt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"num"))},
lA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b2(a,"bool"))},
al:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b2(a,"int"))},
n3:function(a,b){throw H.c(H.b2(a,H.cu(H.K(b).substring(2))))},
pv:function(a,b){throw H.c(H.nD(a,H.cu(H.K(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.n3(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pv(a,b)},
kO:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.b2(a,"List<dynamic>"))},
n0:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.n3(a,b)},
mX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.al(u)]
else return a.$S()}return},
fx:function(a,b){var u
if(typeof a=="function")return!0
u=H.mX(J.X(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lw)return a
$.lw=!0
try{if(H.fx(a,b))return a
u=H.l_(b)
t=H.b2(a,u)
throw H.c(t)}finally{$.lw=!1}},
lF:function(a,b){if(a!=null&&!H.lC(a,b))H.u(H.b2(a,H.l_(b)))
return a},
b2:function(a,b){return new H.iZ("TypeError: "+P.dO(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
nD:function(a,b){return new H.fO("CastError: "+P.dO(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.X(a)
if(!!t.$icB){u=H.mX(t)
if(u!=null)return H.l_(u)
return"Closure"}return H.cb(a)},
p_:function(a){throw H.c(new H.jz(a))},
pA:function(a){throw H.c(new P.fY(H.K(a)))},
og:function(a){return new H.il(a)},
mY:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bY:function(a){if(a==null)return
return a.$ti},
qj:function(a,b,c){return H.ct(a["$a"+H.m(c)],H.bY(b))},
bX:function(a,b,c,d){var u
H.K(c)
H.al(d)
u=H.ct(a["$a"+H.m(c)],H.bY(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.K(b)
H.al(c)
u=H.ct(a["$a"+H.m(b)],H.bY(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.al(b)
u=H.bY(a)
return u==null?null:u[b]},
l_:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.lz(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.al(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oT:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.T)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pb(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lz:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
ct:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lB:function(a,b,c,d){var u,t
H.K(b)
H.kO(c)
H.K(d)
if(a==null)return!1
u=H.bY(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mS(H.ct(t[d],u),null,c,null)},
k:function(a,b,c,d){H.K(b)
H.kO(c)
H.K(d)
if(a==null)return a
if(H.lB(a,b,c,d))return a
throw H.c(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cu(b.substring(2))+H.lz(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qh:function(a,b,c){return a.apply(b,H.ct(J.X(b)["$a"+H.m(c)],H.bY(b)))},
n_:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="M"||a===-1||a===-2||H.n_(u)}return!1},
lC:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="M"||b===-1||b===-2||H.n_(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fx(a,b)}u=J.X(a).constructor
t=H.bY(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lC(a,b))throw H.c(H.b2(a,H.l_(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bL"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aQ("type" in a?a.type:l,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cG" in t.prototype))return!1
r=t.prototype["$a"+"cG"]
q=H.ct(r,u?a.slice(1):l)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.ct(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aQ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aQ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aQ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aQ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ps(h,b,g,d)},
ps:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aQ(c[s],d,a[s],b))return!1}return!0},
qi:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
pq:function(a){var u,t,s,r,q=H.K($.mZ.$1(a)),p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.mR.$2(a,q))
if(q!=null){p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kZ(u)
$.kG[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n2(a,u)
if(s==="*")throw H.c(P.j9(q))
if(v.leafTags[q]===true){r=H.kZ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n2(a,u)},
n2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lH(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kZ:function(a){return J.lH(a,!1,null,!!a.$iL)},
pr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kZ(u)
else return J.lH(u,c,null,null)},
pk:function(){if(!0===$.lG)return
$.lG=!0
H.pl()},
pl:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kL=Object.create(null)
H.pj()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n4.$1(q)
if(p!=null){o=H.pr(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pj:function(){var u,t,s,r,q,p,o=C.K()
o=H.cm(C.L,H.cm(C.M,H.cm(C.z,H.cm(C.z,H.cm(C.N,H.cm(C.O,H.cm(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mZ=new H.kI(r)
$.mR=new H.kJ(q)
$.n4=new H.kK(p)},
cm:function(a,b){return a(b)||b},
nT:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a9("Illegal RegExp pattern ("+String(r)+")",a,null))},
py:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lK:function(a,b,c){var u=H.pz(a,b,c)
return u},
pz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n5(b),'g'),H.pa(c))},
fS:function fS(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i2:function i2(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a){this.a=a},
l5:function l5(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cB:function cB(){},
iK:function iK(){},
iA:function iA(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a){this.a=a},
fO:function fO(a){this.a=a},
il:function il(a){this.a=a},
jz:function jz(a){this.a=a},
aU:function aU(a){var _=this
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
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ck:function(a){return a},
o0:function(a){return new Int8Array(a)},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.co(b,a))},
oR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p8(a,b,c))
return b},
cP:function cP(){},
bQ:function bQ(){},
e2:function e2(){},
cQ:function cQ(){},
e3:function e3(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e4:function e4(){},
cR:function cR(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
pb:function(a){return J.m1(a?Object.keys(a):[],null)},
pu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lG==null){H.pk()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j9("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lL()]
if(r!=null)return r
r=H.pq(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lL(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.m1(new Array(a),b)},
m1:function(a,b){return J.lf(H.d(a,[b]))},
lf:function(a){H.kO(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.dQ.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.hr.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
pd:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
cq:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
fy:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
pe:function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bU.prototype
return a},
pf:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bU.prototype
return a},
dx:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bU.prototype
return a},
cr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.T)return a
return J.fz(a)},
ns:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pd(a).p(a,b)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).A(a,b)},
lN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pf(a).w(a,b)},
nt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pe(a).u(a,b)},
lO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cq(a).j(a,b)},
l6:function(a,b,c){return J.fy(a).n(a,b,c)},
nu:function(a,b){return J.dx(a).I(a,b)},
nv:function(a,b,c){return J.cr(a).im(a,b,c)},
nw:function(a,b,c,d){return J.cr(a).jj(a,b,c,d)},
nx:function(a,b){return J.dx(a).a4(a,b)},
fB:function(a,b){return J.fy(a).M(a,b)},
ny:function(a,b,c,d){return J.cr(a).jE(a,b,c,d)},
lP:function(a,b){return J.fy(a).N(a,b)},
nz:function(a){return J.cr(a).gjq(a)},
lQ:function(a){return J.cr(a).gcK(a)},
dA:function(a){return J.X(a).gK(a)},
bE:function(a){return J.fy(a).gW(a)},
aJ:function(a){return J.cq(a).gl(a)},
lR:function(a){return J.fy(a).kc(a)},
nA:function(a,b){return J.cr(a).kf(a,b)},
nB:function(a,b,c){return J.dx(a).E(a,b,c)},
nC:function(a){return J.dx(a).ko(a)},
av:function(a){return J.X(a).i(a)},
a:function a(){},
hr:function hr(){},
dS:function dS(){},
dT:function dT(){},
i6:function i6(){},
bU:function bU(){},
bu:function bu(){},
aT:function aT(a){this.$ti=a},
lg:function lg(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bP:function bP(){},
dR:function dR(){},
dQ:function dQ(){},
bt:function bt(){}},P={
ot:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.p0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cn(new P.jB(s),1)).observe(u,{childList:true})
return new P.jA(s,u,t)}else if(self.setImmediate!=null)return P.p1()
return P.p2()},
ou:function(a){self.scheduleImmediate(H.cn(new P.jC(H.n(a,{func:1,ret:-1})),0))},
ov:function(a){self.setImmediate(H.cn(new P.jD(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){P.ln(C.t,H.n(a,{func:1,ret:-1}))},
ln:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a9(a.a,1000)
return P.oC(u<0?0:u,b)},
mk:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bi]})
u=C.f.a9(a.a,1000)
return P.oD(u<0?0:u,b)},
oC:function(a,b){var u=new P.fe()
u.fK(a,b)
return u},
oD:function(a,b){var u=new P.fe()
u.fL(a,b)
return u},
ox:function(a,b){var u,t,s
b.a=1
try{a.f7(new P.jN(b),new P.jO(b),null)}catch(s){u=H.am(s)
t=H.cs(s)
P.pw(new P.jP(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaP")
if(u>=4){t=b.cs()
b.a=a.a
b.c=a.c
P.dh(b,t)}else{t=H.e(b.c,"$ibn")
b.a=2
b.c=a
a.dX(t)}},
dh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iaq")
g=g.b
r=s.a
q=s.b
g.toString
P.kx(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dh(h.a,b)}g=h.a
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
P.kx(i,i,g,r,q)
return}l=$.a5
if(l!=n)$.a5=n
else l=i
g=b.c
if(g===8)new P.jT(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jS(u,b,o).$0()}else if((g&2)!==0)new P.jR(h,u,b).$0()
if(l!=null)$.a5=l
g=u.b
if(!!J.X(g).$icG){if(g.a>=4){k=H.e(q.c,"$ibn")
q.c=null
b=q.bw(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.my(g,q)
return}}j=b.b
k=H.e(j.c,"$ibn")
j.c=null
b=j.bw(k)
g=u.a
r=u.b
if(!g){H.C(r,H.v(j,0))
j.a=4
j.c=r}else{H.e(r,"$iaq")
j.a=8
j.c=r}h.a=j
g=j}},
oW:function(a,b){if(H.fx(a,{func:1,args:[P.T,P.aA]}))return H.n(a,{func:1,ret:null,args:[P.T,P.aA]})
if(H.fx(a,{func:1,args:[P.T]}))return H.n(a,{func:1,ret:null,args:[P.T]})
throw H.c(P.l7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oV:function(){var u,t
for(;u=$.cl,u!=null;){$.dw=null
t=u.b
$.cl=t
if(t==null)$.dv=null
u.a.$0()}},
oZ:function(){$.lx=!0
try{P.oV()}finally{$.dw=null
$.lx=!1
if($.cl!=null)$.lM().$1(P.mT())}},
mO:function(a){var u=new P.eB(H.n(a,{func:1,ret:-1}))
if($.cl==null){$.cl=$.dv=u
if(!$.lx)$.lM().$1(P.mT())}else $.dv=$.dv.b=u},
oY:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cl
if(u==null){P.mO(a)
$.dw=$.dv
return}t=new P.eB(a)
s=$.dw
if(s==null){t.b=u
$.cl=$.dw=t}else{t.b=s.b
$.dw=s.b=t
if(t.b==null)$.dv=t}},
pw:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a5
if(C.k===u){P.kz(t,t,C.k,a)
return}u.toString
P.kz(t,t,u,H.n(u.cF(a),s))},
mj:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a5
if(u===C.k){u.toString
return P.ln(a,b)}return P.ln(a,H.n(u.cF(b),t))},
ok:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bi]}
H.n(b,s)
u=$.a5
if(u===C.k){u.toString
return P.mk(a,b)}t=u.ec(b,P.bi)
$.a5.toString
return P.mk(a,H.n(t,s))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.oY(new P.ky(u,e))},
mK:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a5
if(t===c)return d.$0()
$.a5=c
u=t
try{t=d.$0()
return t}finally{$.a5=u}},
mL:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a5
if(t===c)return d.$1(e)
$.a5=c
u=t
try{t=d.$1(e)
return t}finally{$.a5=u}},
oX:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a5
if(t===c)return d.$2(e,f)
$.a5=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a5=u}},
kz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cF(d):c.jr(d,-1)
P.mO(d)},
jB:function jB(a){this.a=a},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
fe:function fe(){this.c=0},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d){var _=this
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
aP:function aP(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jM:function jM(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
cY:function cY(){},
iE:function iE(){},
bi:function bi(){},
aq:function aq(a,b){this.a=a
this.b=b},
kq:function kq(){},
ky:function ky(a,b){this.a=a
this.b=b},
k_:function k_(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function(a,b){return new H.aU([a,b])},
lj:function(a,b){return new H.aU([a,b])},
nX:function(a){return H.pc(a,new H.aU([null,null]))},
dW:function(a){return new P.jY([a])},
lt:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oB:function(a,b,c){var u=new P.eQ(a,b,[c])
u.c=a.e
return u},
nP:function(a,b,c){var u,t
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aC,a)
try{P.oU(a,u)}finally{if(0>=$.aC.length)return H.h($.aC,-1)
$.aC.pop()}t=P.mh(b,H.n0(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
le:function(a,b,c){var u,t
if(P.ly(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.aC,a)
try{t=u
t.a=P.mh(t.a,a,", ")}finally{if(0>=$.aC.length)return H.h($.aC,-1)
$.aC.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ly:function(a){var u,t
for(u=$.aC.length,t=0;t<u;++t)if(a===$.aC[t])return!0
return!1},
oU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.f],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.m(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.F();o=n,n=m){m=u.gL(u);++s
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
nW:function(a,b,c){var u=P.nV(b,c)
a.N(0,new P.hA(u,b,c))
return u},
m2:function(a,b){var u,t,s=P.dW(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t)s.h(0,H.C(a[t],b))
return s},
lk:function(a){var u,t={}
if(P.ly(a))return"{...}"
u=new P.ak("")
try{C.a.h($.aC,a)
u.a+="{"
t.a=!0
J.lP(a,new P.hE(t,u))
u.a+="}"}finally{if(0>=$.aC.length)return H.h($.aC,-1)
$.aC.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jY:function jY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ci:function ci(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
z:function z(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
ag:function ag(){},
ki:function ki(){},
hF:function hF(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
k4:function k4(){},
eR:function eR(){},
fk:function fk(){},
oo:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.op(!1,b,c,d)
return},
op:function(a,b,c,d){var u,t,s=$.nk()
if(s==null)return
u=0===c
if(u&&!0)return P.lq(s,b)
t=b.length
d=P.bx(c,d,t)
if(u&&d===t)return P.lq(s,b)
return P.lq(s,b.subarray(c,d))},
lq:function(a,b){if(P.or(b))return
return P.os(a,b)},
os:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
or:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
mN:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.cq(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c2()
if((s&127)!==s)return t-b}return c-b},
lT:function(a,b,c,d,e,f){if(C.f.bq(f,4)!==0)throw H.c(P.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a9("Invalid base64 padding, more than two '=' characters",a,b))},
fK:function fK(){},
fL:function fL(){},
c2:function c2(){},
bI:function bI(){},
h7:function h7(){},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a){this.a=a},
ji:function ji(){},
jk:function jk(){},
ko:function ko(a){this.b=0
this.c=a},
jj:function jj(a){this.a=a},
kn:function kn(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fA:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.f]})
u=H.oa(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a9(a,null,null))},
nN:function(a){if(a instanceof H.cB)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
nY:function(a,b,c){var u,t
H.C(b,c)
u=J.nS(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
m3:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bE(a);u.F();)C.a.h(s,H.C(u.gL(u),c))
if(b)return s
return H.k(J.lf(s),"$ib",t,"$ab")},
cZ:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaT",[t],"$aaT")
u=a.length
c=P.bx(b,c,u)
return H.mc(b>0||c<u?C.a.fk(a,b,c):a)}if(!!J.X(a).$icR)return H.oc(a,b,P.bx(b,c,a.length))
return P.oi(a,b,c)},
oi:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.aj(b,0,J.aJ(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.aj(c,b,J.aJ(a),q,q))
t=J.bE(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.F();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.aj(c,b,s,q,q))
r.push(t.gL(t))}return H.mc(r)},
oe:function(a){return new H.hs(a,H.nT(a,!1,!0,!1))},
mh:function(a,b,c){var u=J.bE(b)
if(!u.F())return a
if(c.length===0){do a+=H.m(u.gL(u))
while(u.F())}else{a+=H.m(u.gL(u))
for(;u.F();)a=a+c+H.m(u.gL(u))}return a},
mn:function(){var u=H.o2()
if(u!=null)return P.on(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fl:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nq().b
if(typeof b!=="string")H.u(H.aI(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.ap(c,"c2",0))
t=c.gjD().cL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dK:function(a){if(a>=10)return""+a
return"0"+a},
lY:function(a,b){return new P.b8(1e6*b+1000*a)},
dO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nN(a)},
dC:function(a){return new P.aR(!1,null,null,a)},
l7:function(a,b,c){return new P.aR(!0,a,b,c)},
ea:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bx:function(a,b,c){if(0>a||a>c)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
lm:function(a,b){if(typeof a!=="number")return a.a_()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.al(e==null?J.aJ(b):e)
return new P.hp(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jb(a)},
j9:function(a){return new P.j8(a)},
mg:function(a){return new P.cf(a)},
bq:function(a){return new P.fR(a)},
r:function(a){return new P.eJ(a)},
a9:function(a,b,c){return new P.hh(a,b,c)},
nZ:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lJ:function(a){H.pu(a)},
on:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.I(a,4)^58)*3|C.b.I(a,0)^100|C.b.I(a,1)^97|C.b.I(a,2)^116|C.b.I(a,3)^97)>>>0
if(u===0)return P.mm(e<e?C.b.E(a,0,e):a,5,f).gfc()
else if(u===32)return P.mm(C.b.E(a,5,e),0,f).gfc()}t=new Array(8)
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
if(P.mM(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ku()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.a_()
if(typeof n!=="number")return H.D(n)
if(m<n)n=m
if(typeof o!=="number")return o.a_()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.a_()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.a_()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aj(a,"..",o)))j=n>o+2&&C.b.aj(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aj(a,"file",0)){if(q<=0){if(!C.b.aj(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.E(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b4(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aj(a,"http",0)){if(t&&p+3===o&&C.b.aj(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b4(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aj(a,"https",0)){if(t&&p+4===o&&C.b.aj(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b4(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.E(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k7(a,r,q,p,o,n,m,k)}return P.oE(a,0,e,r,q,p,o,n,m,k)},
mp:function(a){var u=P.f
return C.a.jJ(H.d(a.split("&"),[u]),P.lj(u,u),new P.jg(C.l),[P.I,P.f,P.f])},
om:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jd(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a4(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fA(C.b.E(a,s,t),n,n)
if(typeof p!=="number")return p.fh()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fA(C.b.E(a,s,c),n,n)
if(typeof p!=="number")return p.fh()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.je(a)
t=new P.jf(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a4(a,r)
if(n===58){if(r===b){++r
if(C.b.a4(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.om(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.b_(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
oE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oL(a,b,d)
else{if(d===b)P.ds(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oM(a,u,e-1):""
s=P.oI(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oK(P.fA(C.b.E(a,r,g),new P.kj(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oJ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.lu(a,h+1,i,n):n
return new P.cj(j,t,s,q,p,o,i<c?P.oH(a,i+1,c):n)},
mC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ds:function(a,b,c){throw H.c(P.a9(c,a,b))},
oK:function(a,b){if(a!=null&&a===P.mC(b))return
return a},
oI:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a4(a,b)===91){if(typeof c!=="number")return c.u()
u=c-1
if(C.b.a4(a,u)!==93)P.ds(a,b,"Missing end `]` to match `[` in host")
P.mo(a,b+1,u)
return C.b.E(a,b,c).toLowerCase()}if(typeof c!=="number")return H.D(c)
t=b
for(;t<c;++t)if(C.b.a4(a,t)===58){P.mo(a,b,c)
return"["+a+"]"}return P.oO(a,b,c)},
oO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a4(a,u)
if(q===37){p=P.mI(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
n=C.b.E(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.E(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.E(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.ds(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a4(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.E(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mD(q)
u+=l
t=u}}}}if(s==null)return C.b.E(a,b,c)
if(t<c){n=C.b.E(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oL:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.I(a,b)))P.ds(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.ds(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.E(a,b,c)
return P.oF(t?a.toLowerCase():a)},
oF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oM:function(a,b,c){return P.dt(a,b,c,C.a_,!1)},
oJ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dt(a,b,c,C.E,!0):C.n.kz(d,new P.kk(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a8(u,"/"))u="/"+u
return P.oN(u,e,f)},
oN:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a8(a,"/"))return P.oP(a,!u||c)
return P.oQ(a)},
lu:function(a,b,c,d){var u,t={}
H.k(d,"$iI",[P.f,null],"$aI")
if(a!=null){if(d!=null)throw H.c(P.dC("Both query and queryParameters specified"))
return P.dt(a,b,c,C.p,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.N(0,new P.kl(new P.km(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oH:function(a,b,c){return P.dt(a,b,c,C.p,!0)},
mI:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a4(a,b+1)
t=C.b.a4(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.b_(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.E(a,b,b+3).toUpperCase()
return},
mD:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.I(o,a>>>4))
C.a.n(t,2,C.b.I(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.iF(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.I(o,p>>>4))
C.a.n(t,q+2,C.b.I(o,p&15))
q+=3}}return P.cZ(t,0,null)},
dt:function(a,b,c,d,e){var u=P.mH(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.E(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.D(c)
if(!(t<c))break
c$0:{q=C.b.a4(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mI(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.ds(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a4(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mD(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.E(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.D(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.b.E(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mG:function(a){if(C.b.a8(a,"."))return!0
return C.b.eO(a,"/.")!==-1},
oQ:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.O(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oP:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nu(a,0)))for(u=1;u<r;++u){t=C.b.I(a,u)
if(t===58)return C.b.E(a,0,u)+"%3A"+C.b.aw(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oG:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dC("Invalid URL encoding"))}}return u},
lv:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.I(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.E(a,b,c)
else r=new H.w(C.b.E(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.I(a,q)
if(t>127)throw H.c(P.dC("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dC("Truncated URI"))
C.a.h(r,P.oG(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.jj(!1).cL(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.I(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a9(m,a,t))}}if(s<0&&t>b)throw H.c(P.a9(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.I(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaD(l)
if(r!==44||t!==p+7||!C.b.aj(a,"base64",p+1))throw H.c(P.a9("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jU(0,a,o,u)
else{n=P.mH(a,o,u,C.p,!0)
if(n!=null)a=C.b.b4(a,o,u,n)}return new P.jc(a,l,c)},
oS:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nZ(22,new P.ku(),P.V),n=new P.kt(o),m=new P.kv(),l=new P.kw(),k=H.e(n.$2(0,225),"$iV")
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
mM:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.nr()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
U:function U(){},
aD:function aD(a,b){this.a=a
this.b=b},
t:function t(){},
b8:function b8(a){this.a=a},
h3:function h3(){},
h4:function h4(){},
bK:function bK(){},
fE:function fE(){},
e6:function e6(){},
aR:function aR(a,b,c,d){var _=this
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
hp:function hp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jb:function jb(a){this.a=a},
j8:function j8(a){this.a=a},
cf:function cf(a){this.a=a},
fR:function fR(a){this.a=a},
i5:function i5(){},
ei:function ei(){},
fY:function fY(a){this.a=a},
eJ:function eJ(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(){},
p:function p(){},
i:function i(){},
b9:function b9(){},
b:function b(){},
I:function I(){},
M:function M(){},
ae:function ae(){},
T:function T(){},
aA:function aA(){},
f:function f(){},
ak:function ak(a){this.a=a},
jg:function jg(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b){this.a=a
this.b=b},
cj:function cj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(){},
kt:function kt(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
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
jH:function jH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
p6:function(a){var u,t=J.X(a)
if(!!t.$ibs){u=t.geh(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
p5:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
by:function(a){var u,t,s,r,q
if(a==null)return
u=P.lj(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.K(t[r])
u.n(0,q,a[q])}return u},
p4:function(a){var u={}
a.N(0,new P.kA(u))
return u},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
jX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jZ:function jZ(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hv:function hv(){},
bf:function bf(){},
i3:function i3(){},
ia:function ia(){},
cV:function cV(){},
iH:function iH(){},
q:function q(){},
bj:function bj(){},
iW:function iW(){},
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
bZ:function bZ(){},
i4:function i4(){},
eC:function eC(){},
dE:function dE(){},
e9:function e9(){},
ce:function ce(){},
ec:function ec(){},
ek:function ek(){},
es:function es(){},
iz:function iz(){},
f6:function f6(){},
f7:function f7(){}},W={
lS:function(){var u=document.createElement("a")
return u},
l9:function(){var u=document.createElement("canvas")
return u},
nL:function(a,b,c){var u=document.body,t=(u&&C.x).an(u,a,b,c)
t.toString
u=W.G
u=new H.de(new W.at(t),H.n(new W.h6(),{func:1,ret:P.U,args:[u]}),[u])
return H.e(u.gaR(u),"$iY")},
nM:function(a){H.e(a,"$ij")
return"wheel"},
cE:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cr(a)
t=u.gf6(a)
if(typeof t==="string")r=u.gf6(a)}catch(s){H.am(s)}return r},
nO:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icJ")
try{s.type=a}catch(u){H.am(u)}return s},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var u=W.jW(W.jW(W.jW(W.jW(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.mQ(new W.jL(c),W.o)
if(u!=null&&!0)J.nw(a,b,u,!1)
return new W.jK(a,b,u,!1,[e])},
mz:function(a){var u=W.lS(),t=window.location
u=new W.bV(new W.k3(u,t))
u.fz(a)
return u},
oy:function(a,b,c,d){H.e(a,"$iY")
H.K(b)
H.K(c)
H.e(d,"$ibV")
return!0},
oz:function(a,b,c,d){var u,t,s
H.e(a,"$iY")
H.K(b)
H.K(c)
u=H.e(d,"$ibV").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mB:function(){var u=P.f,t=P.m2(C.u,u),s=H.v(C.u,0),r=H.n(new W.kf(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ke(t,P.dW(u),P.dW(u),P.dW(u),null)
t.fJ(null,new H.hI(C.u,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a5
if(u===C.k)return a
return u.ec(a,b)},
y:function y(){},
fC:function fC(){},
dB:function dB(){},
fD:function fD(){},
cw:function cw(){},
c_:function c_(){},
bF:function bF(){},
c1:function c1(){},
cA:function cA(){},
bG:function bG(){},
cC:function cC(){},
fU:function fU(){},
a0:function a0(){},
cD:function cD(){},
fV:function fV(){},
b6:function b6(){},
b7:function b7(){},
fW:function fW(){},
fX:function fX(){},
h_:function h_(){},
aK:function aK(){},
h0:function h0(){},
dL:function dL(){},
dM:function dM(){},
h1:function h1(){},
h2:function h2(){},
jF:function jF(a,b){this.a=a
this.b=b},
Y:function Y(){},
h6:function h6(){},
o:function o(){},
j:function j(){},
aL:function aL(){},
cF:function cF(){},
hc:function hc(){},
hg:function hg(){},
aS:function aS(){},
hl:function hl(){},
c7:function c7(){},
bs:function bs(){},
cI:function cI(){},
cJ:function cJ(){},
ba:function ba(){},
dX:function dX(){},
hO:function hO(){},
cN:function cN(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aV:function aV(){},
hT:function hT(){},
ah:function ah(){},
at:function at(a){this.a=a},
G:function G(){},
cS:function cS(){},
aW:function aW(){},
i8:function i8(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aX:function aX(){},
ix:function ix(){},
aY:function aY(){},
iy:function iy(){},
aZ:function aZ(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
aM:function aM(){},
bh:function bh(){},
ej:function ej(){},
iI:function iI(){},
iJ:function iJ(){},
d0:function d0(){},
b_:function b_(){},
aN:function aN(){},
iL:function iL(){},
iM:function iM(){},
iQ:function iQ(){},
b0:function b0(){},
b1:function b1(){},
iU:function iU(){},
iV:function iV(){},
bT:function bT(){},
jh:function jh(){},
jx:function jx(){},
bm:function bm(){},
df:function df(){},
dg:function dg(){},
jG:function jG(){},
eE:function eE(){},
jV:function jV(){},
eW:function eW(){},
k8:function k8(){},
kc:function kc(){},
jE:function jE(){},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ls:function ls(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jK:function jK(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jL:function jL(a){this.a=a},
bV:function bV(a){this.a=a},
H:function H(){},
e5:function e5(a){this.a=a},
i0:function i0(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(){},
k5:function k5(){},
k6:function k6(){},
ke:function ke(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kf:function kf(){},
kd:function kd(){},
dP:function dP(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aG:function aG(){},
k3:function k3(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
kp:function kp(a){this.a=a},
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
dn:function dn(){},
dp:function dp(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
dq:function dq(){},
dr:function dr(){},
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
la:function(a){var u=new O.a7([a])
u.bt(a)
return u},
a7:function a7(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cM:function cM(){this.b=this.a=null},
e_:function e_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cL:function cL(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
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
bS:function bS(){}},E={
m0:function(){var u=new E.ar()
u.a=""
u.b=!0
u.sfw(0,O.la(E.ar))
u.y.b6(u.gjV(),u.gjY())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sab(0,null)
return u},
of:function(a,b){var u=new E.ie(a)
u.ft(a,b)
return u},
oj:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ic1)return E.mi(a,!0,!0,!0,!1)
u=W.l9()
t=u.style
t.width="100%"
t.height="100%"
s.gcK(a).h(0,u)
return E.mi(u,!0,!0,!0,!1)},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eo(),j=H.e(C.m.di(a,"webgl2",P.nX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.u(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.of(j,a)
u=new T.iN(j)
H.al(j.getParameter(3379))
u.c=H.al(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ev(a)
t=new X.hu()
t.c=new X.aF(!1,!1,!1)
t.sig(P.dW(P.p))
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.bg()
t.x=V.bg()
t.ch=t.Q=1
u.c=t
t=new X.hC(u)
t.r=0
t.x=V.bg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iT(u)
t.f=V.bg()
t.r=V.bg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sh2(H.d([],[[P.cY,P.T]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.n(u.ghA(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.n(u.ghG(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.n(u.ghs(),o),!1,p))
t=u.z
n=W.ba
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.n(u.ghK(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.n(u.ghI(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.n(u.ghO(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.n(u.ghS(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.n(u.ghQ(),q),!1,r))
n=u.z
m=W.bm;(n&&C.a).h(n,W.ad(a,H.K(W.nM(a)),H.n(u.ghU(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.n(u.ghC(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.n(u.ghE(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.n(u.ghW(),o),!1,p))
p=u.z
o=W.b1
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.n(u.gib(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.n(u.gi7(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.n(u.gi9(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aD(Date.now(),!1)
k.cy=0
k.dZ()
return k},
fM:function fM(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iP:function iP(a){this.a=a}},Z={
lr:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ck(c)),35044)
a.bindBuffer(b,null)
return new Z.ez(b,u)},
aO:function(a){return new Z.bl(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eA:function eA(a){this.a=a},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a){this.a=a}},D={
R:function(){var u=new D.c4()
u.sak(null)
u.saY(null)
u.c=null
u.d=0
return u},
fP:function fP(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
A:function A(){this.b=null},
bN:function bN(a){this.b=null
this.$ti=a},
bO:function bO(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
dV:function dV(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
en:function en(){}},X={dG:function dG(a,b){this.a=a
this.b=b},dU:function dU(a,b){this.a=a
this.b=b},hu:function hu(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},bw:function bw(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cO:function cO(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i9:function i9(){},eq:function eq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iT:function iT(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ld:function(a){var u=new X.hi(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.me
if(t==null){t=V.md(0,0,1,1)
$.me=t}u.r=t
return u},
m8:function(a){var u,t,s=new X.e7()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gv().h(0,s.ghu())
t=new D.N("mover",u,s.b,[U.ai])
t.b=!0
s.ay(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.Q().a)){s.c=1.0471975511965976
t=new D.N("fov",t,1.0471975511965976,[P.t])
t.b=!0
s.ay(t)}t=s.d
if(!(Math.abs(t-0.1)<$.Q().a)){s.d=0.1
t=new D.N("near",t,0.1,[P.t])
t.b=!0
s.ay(t)}t=s.e
if(!(Math.abs(t-2000)<$.Q().a)){s.e=2000
t=new D.N("far",t,2000,[P.t])
t.b=!0
s.ay(t)}return s},
c0:function c0(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){}},V={
pC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bq(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ap("null",c)
return C.b.ap(C.e.f8(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
cp:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.t],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ap(u[p],s))}return u},
lI:function(a){return C.e.km(Math.pow(2,C.W.cV(Math.log(H.p3(a))/Math.log(2))))},
c9:function(){var u=$.m5
return u==null?$.m5=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aJ(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aJ(s),q=new V.B(a.a,a.b,a.c),p=s.U(0).C(q),o=r.U(0).C(q),n=u.U(0).C(q)
return V.bd(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.ma
return u==null?$.ma=new V.a2(0,0):u},
ll:function(){var u=$.cT
return u==null?$.cT=new V.Z(0,0,0):u},
md:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)},
dc:function(){var u=$.mu
return u==null?$.mu=new V.B(0,0,0):u},
mv:function(){var u=$.mt
return u==null?$.mt=new V.B(0,1,0):u},
mw:function(){var u=$.jl
return u==null?$.jl=new V.B(0,0,1):u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.id()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.io()
u.fu(a)
return u},
iS:function(){var u=new V.iR(),t=P.f
u.siH(new H.aU([t,V.cX]))
u.siK(new H.aU([t,V.d2]))
u.c=null
return u},
bp:function bp(){},
aE:function aE(){},
dZ:function dZ(){},
ay:function ay(){this.a=null},
id:function id(){this.b=this.a=null},
io:function io(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
iR:function iR(){this.c=this.b=this.a=null},
d3:function d3(a){this.b=a
this.a=this.c=null},
px:function(a){P.ok(C.T,new V.l0(a))},
oh:function(a){var u=new V.is()
u.fv(a,!0)
return u},
bH:function bH(){},
l0:function l0(a){this.a=a},
fZ:function fZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i7:function i7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ib:function ib(a){this.a=a
this.c=null},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(){this.b=this.a=null},
iu:function iu(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a}},U={
lb:function(){var u=new U.fQ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lX:function(a){var u=new U.dI()
u.a=a
return u},
fQ:function fQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){this.b=this.a=null},
cH:function cH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dH:function dH(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dJ:function dJ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dN:function dN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aH:function aH(){}},A={
o_:function(a,b){var u=a.as,t=new A.e0(b,u)
t.dr(b,u)
t.fs(a,b)
return t},
lo:function(a,b,c,d,e){var u=new A.j0(a,c,e)
u.f=d
u.siV(P.nY(d,0,P.p))
return u},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
e0:function e0(a,b){var _=this
_.bE=_.em=_.bD=_.as=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eD=_.cP=_.eC=_.bR=_.eB=_.eA=_.bQ=_.bP=_.ez=_.ey=_.bO=_.bN=_.bM=_.ex=_.ew=_.bL=_.ev=_.eu=_.bK=_.es=_.er=_.bJ=_.bI=_.eq=_.ep=_.bH=_.bG=_.eo=_.en=_.bF=null
_.cU=_.eH=_.cT=_.eG=_.cS=_.eF=_.cR=_.eE=_.cQ=null
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
_.aC=b3
_.as=b4
_.bD=b5},
d4:function d4(a,b){this.b=a
this.c=b},
d8:function d8(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
d6:function d6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
da:function da(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
c3:function c3(a,b){this.a=a
this.b=b},
eg:function eg(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(){},
j6:function j6(a){this.a=a},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
as:function as(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lE:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ab,P.t,P.t]})
u=F.ee()
F.du(u,b,c,d,a,1,0,0,1)
F.du(u,b,c,d,a,0,1,0,3)
F.du(u,b,c,d,a,0,0,1,2)
F.du(u,b,c,d,a,-1,0,0,0)
F.du(u,b,c,d,a,0,-1,0,0)
F.du(u,b,c,d,a,0,0,-1,3)
u.am()
return u},
ks:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
du:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ab,P.t,P.t]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.B(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.B(p+a3,o+a1,n+a2)
l=new V.B(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.B(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.ks(u)
g=F.ks(e.b)
f=F.l3(d,a0,new F.kr(e,F.ks(e.c),F.ks(e.d),g,h,c),b)
if(f!=null)a.b3(f)},
mW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.t,args:[P.t]})
if(e<3)return
u=F.ee()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ab])
q=u.a
p=new V.B(0,0,t)
p=p.t(0,Math.sqrt(p.C(p)))
C.a.h(r,q.jl(new V.az(a,-1,-1,-1),new V.af(1,1,1,1),new V.Z(0,0,c),new V.B(0,0,t),new V.a2(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.B(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ch(new V.az(a,-1,-1,-1),null,new V.af(i,g,h,1),new V.Z(m*k,l*k,c),new V.B(0,0,t),new V.a2(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.e6(r)
return u},
mU:function(a,b,c){return F.p7(!0,a,1,new F.kB(1,c),b)},
p7:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
u=F.l3(c,e,new F.kD(d),null)
if(u==null)return
u.am()
u.bA()
if(b)u.b3(F.mW(3,!1,1,new F.kE(d),e))
u.b3(F.mW(1,!0,-1,new F.kF(d),e))
return u},
pp:function(a,b){var u=F.l3(a,b,new F.kN(),null)
u.d.bY()
u.am()
u.bA()
return u},
au:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.t(0,Math.sqrt(b.C(b)))
u=b.a
t=b.b
s=b.c
r=F.ch(j,j,j,new V.Z(u,t,s),b,j,j,j,0)
q=a.jF(r,new F.dd())
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
r.saf(0,new V.af(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sdd(new V.a2(l,k<0?-k:k))
a.a.h(0,r)
return r},
a6:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.by(0,b,d,c)
else{u=F.au(a,b.r.p(0,c.r).w(0,0.5))
t=F.au(a,c.r.p(0,d.r).w(0,0.5))
s=F.au(a,d.r.p(0,b.r).w(0,0.5))
r=e-1
F.a6(a,b,u,s,r)
F.a6(a,u,c,t,r)
F.a6(a,t,s,u,r)
F.a6(a,s,t,d,r)}},
n6:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.l1()
t=F.lE(a,null,new F.l2(s,1),b)
t.bA()
return t},
pB:function(){return F.mV(15,30,0.5,1,new F.l4())},
po:function(){return F.mV(12,120,0.3,1,new F.kM(3,2))},
mV:function(a,b,c,d,e){var u=F.l3(a,b,new F.kC(H.n(e,{func:1,ret:V.Z,args:[P.t]}),d,b,c),null)
if(u==null)return
u.am()
u.bA()
return u},
l3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ab,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.ee()
t=H.d([],[F.ab])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ch(g,g,new V.af(p,0,0,1),g,g,new V.a2(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ch(g,g,new V.af(j,i,h,1),g,g,new V.a2(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cM(d))}}u.d.jk(a+1,b+1,t)
return u},
c5:function(a,b,c){var u=new F.ac(),t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.cA(a)
u.cB(b)
u.iA(c)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
nU:function(a,b){var u=new F.bv(),t=a.a
if(t==null)H.u(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.r("May not create a line with vertices attached to different shapes."))
u.cA(a)
u.cB(b)
C.a.h(u.a.a.c.b,u)
u.a.a.X()
return u},
ee:function(){var u=new F.ed(),t=new F.jm(u)
t.b=!1
t.siW(H.d([],[F.ab]))
u.a=t
t=new F.ir(u)
t.scq(H.d([],[F.bR]))
u.b=t
t=new F.iq(u)
t.sh9(H.d([],[F.bv]))
u.c=t
t=new F.ip(u)
t.sh3(H.d([],[F.ac]))
u.d=t
u.e=null
return u},
ch:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ab(),r=new F.ju()
r.scq(H.d([],[F.bR]))
s.b=r
r=new F.jr()
u=[F.bv]
r.sha(H.d([],u))
r.shb(H.d([],u))
s.c=r
r=new F.jn()
u=[F.ac]
r.sh4(H.d([],u))
r.sh5(H.d([],u))
r.sh6(H.d([],u))
s.d=r
h=$.nl()
s.e=0
r=$.b4()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bB().a)!==0?e:t
s.x=(u&$.bA().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bD().a)!==0?g:t
s.Q=(u&$.nm().a)!==0?c:t
s.ch=(u&$.cv().a)!==0?i:0
s.cx=(u&$.bz().a)!==0?a:t
return s},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kB:function kB(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kN:function kN(){},
l1:function l1(){},
l2:function l2(a,b){this.a=a
this.b=b},
l4:function l4(){},
kM:function kM(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(){},
iw:function iw(){},
bv:function bv(){this.b=this.a=null},
hw:function hw(){},
j_:function j_(){},
bR:function bR(){this.a=null},
ed:function ed(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a
this.b=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
ab:function ab(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jw:function jw(a){this.a=a},
jv:function jv(a){this.a=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
jn:function jn(){this.d=this.c=this.b=null},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jr:function jr(){this.c=this.b=null},
js:function js(){},
dd:function dd(){},
jt:function jt(){},
jq:function jq(){},
i1:function i1(){},
ju:function ju(){this.b=null}},T={d1:function d1(){},cg:function cg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iN:function iN(a){var _=this
_.a=a
_.e=_.d=_.c=null},iO:function iO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.oh("Test 017"),b0=W.l9()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.f]
a9.e8(H.d(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.ji(H.d(["shapes"],u))
a9.e8(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.oj(t,!0,!0,!0,!1)
r=E.m0()
r.sab(0,F.n6(8,8))
q=X.ld(a7)
if(q.b){q.b=!1
p=new D.N("clearColor",!0,!1,[P.U])
p.b=!0
q.ay(p)}o=s.f.eT("../resources/maskonaive",".jpg")
n=s.f.eS("../resources/earthSpecular")
m=s.f.eS("../resources/earthColor")
l=new O.e_()
l.sfR(O.la(V.ax))
l.e.b6(l.gho(),l.ghq())
p=new O.bc(l,"emission")
p.c=C.d
p.f=new V.a8(0,0,0)
l.f=p
p=new O.bc(l,"ambient")
p.c=C.d
p.f=new V.a8(0,0,0)
l.r=p
p=new O.bc(l,"diffuse")
p.c=C.d
p.f=new V.a8(0,0,0)
l.x=p
p=new O.bc(l,"invDiffuse")
p.c=C.d
p.f=new V.a8(0,0,0)
l.y=p
p=new O.hN(l,"specular")
p.c=C.d
p.f=new V.a8(0,0,0)
p.ch=100
l.z=p
p=new O.hK(l,"bump")
p.c=C.d
l.Q=p
l.ch=null
p=new O.bc(l,"reflect")
p.c=C.d
p.f=new V.a8(0,0,0)
l.cx=p
p=new O.hM(l,"refract")
p.c=C.d
p.f=new V.a8(0,0,0)
p.ch=1
l.cy=p
p=new O.hJ(l,"alpha")
p.c=C.d
p.f=1
l.db=p
p=new D.dV()
p.bt(D.aa)
p.sh_(H.d([],[D.bJ]))
p.sie(H.d([],[D.e8]))
p.siG(H.d([],[D.eh]))
p.siS(H.d([],[D.el]))
p.siT(H.d([],[D.em]))
p.siU(H.d([],[D.en]))
p.ch=p.Q=null
p.dk(p.ghm(),p.ghY(),p.gi1())
l.dx=p
k=p.Q
p=k==null?p.Q=D.R():k
p.h(0,l.giq())
p=l.dx
k=p.ch
p=k==null?p.ch=D.R():k
k=l.gaU()
p.h(0,k)
l.dy=null
p=l.dx
j=V.mv()
i=U.lX(V.m4(V.ll(),j,new V.B(-1,-1,-1)))
h=new V.a8(1,1,1)
g=new D.bJ()
g.c=new V.a8(1,1,1)
g.a=V.mw()
f=g.b
g.b=i
i.gv().h(0,g.gfB())
i=new D.N("mover",f,g.b,[U.ai])
i.b=!0
g.aF(i)
if(!g.c.A(0,h)){f=g.c
g.c=h
i=new D.N("color",f,h,[V.a8])
i.b=!0
g.aF(i)}p.h(0,g)
p=l.r
p.saf(0,new V.a8(0.5,0.5,0.5))
p=l.x
p.saf(0,new V.a8(0.5,0.5,0.5))
l.r.sau(m)
l.x.sau(m)
l.z.sau(n)
p=l.ch
if(p!==o){if(p!=null)p.gv().G(0,k)
f=l.ch
l.ch=o
o.gv().h(0,k)
p=new D.N("environment",f,l.ch,[T.cg])
p.b=!0
l.V(p)}l.cx.sau(n)
p=l.cx
p.saf(0,new V.a8(0.5,0.5,0.5))
p=l.z
if(p.c===C.d){p.c=C.j
p.c6()
p.cv(100)
k=p.a
k.a=null
k.V(a7)}p.cv(10)
e=new U.cH()
e.bt(U.ai)
e.b6(e.ghk(),e.gi_())
e.e=null
e.f=V.c9()
e.r=0
p=s.r
k=new U.ex()
i=U.lb()
i.sdh(0,!0)
i.sd0(6.283185307179586)
i.sd2(0)
i.sa1(0,0)
i.sd1(100)
i.sY(0)
i.scN(0.5)
k.b=i
g=k.gaT()
i.gv().h(0,g)
i=U.lb()
i.sdh(0,!0)
i.sd0(6.283185307179586)
i.sd2(0)
i.sa1(0,0)
i.sd1(100)
i.sY(0)
i.scN(0.5)
k.c=i
i.gv().h(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.aF(!1,!1,!1)
f=k.d
k.d=d
i=[X.aF]
g=new D.N(a8,f,d,i)
g.b=!0
k.T(g)
g=k.f
if(g!==!1){k.f=!1
g=new D.N("invertX",g,!1,[P.U])
g.b=!0
k.T(g)}g=k.r
if(g!==!1){k.r=!1
g=new D.N("invertY",g,!1,[P.U])
g.b=!0
k.T(g)}k.bd(p)
e.h(0,k)
p=s.r
k=new U.ew()
g=U.lb()
g.sdh(0,!0)
g.sd0(6.283185307179586)
g.sd2(0)
g.sa1(0,0)
g.sd1(100)
g.sY(0)
g.scN(0.2)
k.b=g
g.gv().h(0,k.gaT())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.aF(!0,!1,!1)
f=k.c
k.c=d
g=new D.N(a8,f,d,i)
g.b=!0
k.T(g)
k.bd(p)
e.h(0,k)
p=s.r
k=new U.ey()
k.c=0.01
k.e=k.d=0
d=new X.aF(!1,!1,!1)
k.b=d
i=new D.N(a8,a7,d,i)
i.b=!0
k.T(i)
k.bd(p)
e.h(0,k)
e.h(0,U.lX(V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.m8(e)
b=new M.dJ()
b.a=!0
p=E.m0()
a=F.ee()
k=a.a
i=new V.B(-1,-1,1)
i=i.t(0,Math.sqrt(i.C(i)))
a0=k.bz(new V.az(1,2,4,6),new V.af(1,0,0,1),new V.Z(-1,-1,0),new V.a2(0,1),i,a7)
k=a.a
i=new V.B(1,-1,1)
i=i.t(0,Math.sqrt(i.C(i)))
a1=k.bz(new V.az(0,3,4,6),new V.af(0,0,1,1),new V.Z(1,-1,0),new V.a2(1,1),i,a7)
k=a.a
i=new V.B(1,1,1)
i=i.t(0,Math.sqrt(i.C(i)))
a2=k.bz(new V.az(0,2,5,6),new V.af(0,1,0,1),new V.Z(1,1,0),new V.a2(1,0),i,a7)
k=a.a
i=V.bg()
g=new V.B(-1,1,1)
g=g.t(0,Math.sqrt(g.C(g)))
a3=k.bz(new V.az(0,2,4,7),new V.af(1,1,0,1),new V.Z(-1,1,0),i,g,a7)
a.d.e6(H.d([a0,a1,a2,a3],[F.ab]))
a.am()
p.sab(0,a)
b.e=p
b.sbe(a7)
b.sbl(0,a7)
b.sbm(a7)
p=new O.ef()
p.b=1.0471975511965976
p.d=new V.a8(1,1,1)
f=p.c
p.c=o
o.gv().h(0,p.gaU())
k=new D.N("boxTexture",f,p.c,[T.cg])
k.b=!0
p.V(k)
b.sbm(p)
b.sbl(0,q)
b.sbe(c)
a4=new M.dN()
a4.a=!0
a4.sfU(0,O.la(E.ar))
a4.e.b6(a4.ghw(),a4.ghy())
a4.y=a4.x=a4.r=a4.f=null
a5=X.ld(a7)
a4.sbe(a7)
a4.sbl(0,a5)
a4.sbm(a7)
a4.sbe(c)
a4.sbm(l)
a4.sbl(0,q)
a4.e.h(0,r)
p=M.aH
k=H.d([b,a4],[p])
i=new M.dH()
i.bt(p)
i.e=!0
i.f=!1
i.r=null
i.b6(i.gi3(),i.gi5())
i.ae(0,k)
p=s.d
if(p!==i){if(p!=null)p.gv().G(0,s.gdt())
s.d=i
i.gv().h(0,s.gdt())
s.du()}p=new V.ib("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
p.aA(0,"Cube",new T.kP(r))
p.aA(0,"Cuboid",new T.kQ(r))
p.aA(0,"Cylinder",new T.kR(r))
p.aA(0,"Cone",new T.kS(r))
p.aA(0,"LatLonSphere",new T.kT(r))
p.aA(0,"IsoSphere",new T.kU(r))
p.by(0,"Sphere",new T.kV(r),!0)
p.aA(0,"Toroid",new T.kW(r))
p.aA(0,"Knot",new T.kX(r))
u=s.z
if(u==null)u=s.z=D.R()
p={func:1,ret:-1,args:[D.A]}
k=H.n(new T.kY(a9,l),p)
if(u.b==null)u.saY(H.d([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.px(s)},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lh.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gK:function(a){return H.cU(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.hr.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iU:1}
J.dS.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dT.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.i6.prototype={}
J.bU.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.n9()]
if(u==null)return this.fn(a)
return"JavaScript function for "+H.m(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibL:1}
J.aT.prototype={
h:function(a,b){H.C(b,H.v(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
f1:function(a,b){if(!!a.fixed$length)H.u(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ea(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.u(P.J("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.k(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.u(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.F)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bq(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.m(a[u]))
return t.join(b)},
jR:function(a){return this.m(a,"")},
jJ:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bq(a))}return t},
jI:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.U,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.E(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bq(a))}throw H.c(H.hq())},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fk:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gjH:function(a){if(a.length>0)return a[0]
throw H.c(H.hq())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hq())},
br:function(a,b,c,d){var u,t,s=H.v(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.J("setRange"))
P.bx(b,c,a.length)
u=c-b
if(u===0)return
P.lm(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cq(d)
if(u>s.gl(d))throw H.c(H.nQ())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
ea:function(a,b){var u,t
H.n(b,{func:1,ret:P.U,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bq(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.le(a,"[","]")},
gW:function(a){return new J.aw(a,a.length,[H.v(a,0)])},
gK:function(a){return H.cU(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(b<0)throw H.c(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.co(a,b))
return a[b]},
n:function(a,b,c){H.C(c,H.v(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.co(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.v(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.p(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.br(t,0,a.length,a)
this.br(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.lg.prototype={}
J.aw.prototype={
gL:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.F(s))
u=t.c
if(u>=r){t.sdL(null)
return!1}t.sdL(s[u]);++t.c
return!0},
sdL:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
J.bP.prototype={
km:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
f8:function(a,b){var u,t
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bo:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a4(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.w("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aI(b))
return a+b},
u:function(a,b){if(typeof b!=="number")throw H.c(H.aI(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.c(H.aI(b))
return a*b},
bq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e1(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.e1(a,b)},
e1:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.e0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iF:function(a,b){if(b<0)throw H.c(H.aI(b))
return this.e0(a,b)},
e0:function(a,b){return b>31?0:a>>>b},
$it:1,
$iae:1}
J.dR.prototype={$ip:1}
J.dQ.prototype={}
J.bt.prototype={
a4:function(a,b){if(b<0)throw H.c(H.co(a,b))
if(b>=a.length)H.u(H.co(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.co(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l7(b,null,null))
return a+b},
b4:function(a,b,c,d){var u,t
c=P.bx(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aj:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.aj(a,b,0)},
E:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aI(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.ea(b,null))
if(b>c)throw H.c(P.ea(b,null))
if(c>a.length)throw H.c(P.ea(c,null))
return a.substring(b,c)},
aw:function(a,b){return this.E(a,b,null)},
ko:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
eP:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eO:function(a,b){return this.eP(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im7:1,
$if:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a4(this.a,b)},
$adb:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h5.prototype={}
H.c8.prototype={
gW:function(a){var u=this
return new H.cK(u,u.gl(u),[H.ap(u,"c8",0)])},
c1:function(a,b){return this.fm(0,H.n(b,{func:1,ret:P.U,args:[H.ap(this,"c8",0)]}))}}
H.cK.prototype={
gL:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=J.cq(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bq(s))
u=t.c
if(u>=q){t.sb9(null)
return!1}t.sb9(r.M(s,u));++t.c
return!0},
sb9:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.hG.prototype={
gW:function(a){return new H.hH(J.bE(this.a),this.b,this.$ti)},
gl:function(a){return J.aJ(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ai:function(a,b){return[b]}}
H.hH.prototype={
F:function(){var u=this,t=u.b
if(t.F()){u.sb9(u.c.$1(t.gL(t)))
return!0}u.sb9(null)
return!1},
gL:function(a){return this.a},
sb9:function(a){this.a=H.C(a,H.v(this,1))},
$ab9:function(a,b){return[b]}}
H.hI.prototype={
gl:function(a){return J.aJ(this.a)},
M:function(a,b){return this.b.$1(J.fB(this.a,b))},
$ac8:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.de.prototype={
gW:function(a){return new H.jy(J.bE(this.a),this.b,this.$ti)}}
H.jy.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(H.E(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c6.prototype={}
H.db.prototype={
n:function(a,b,c){H.C(c,H.ap(this,"db",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fS.prototype={
i:function(a){return P.lk(this)},
n:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
return H.nI()},
$iI:1}
H.fT.prototype={
gl:function(a){return this.a},
bB:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bB(0,b))return
return this.dM(b)},
dM:function(a){return this.b[H.K(a)]},
N:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.n(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.dM(r),p))}}}
H.iX.prototype={
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
H.i2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ht.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.ja.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l5.prototype={
$1:function(a){if(!!J.X(a).$ibK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaA:1}
H.cB.prototype={
i:function(a){return"Closure '"+H.cb(this).trim()+"'"},
$ibL:1,
gkt:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iK.prototype={}
H.iA.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.cx.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cU(this.a)
else u=typeof t!=="object"?J.dA(t):H.cU(t)
return(u^H.cU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.cb(u)+"'")}}
H.iZ.prototype={
i:function(a){return this.a}}
H.fO.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jz.prototype={
i:function(a){return"Assertion failed: "+P.dO(this.a)}}
H.aU.prototype={
gl:function(a){return this.a},
gjQ:function(a){return this.a===0},
gaa:function(a){return new H.hy(this,[H.v(this,0)])},
bB:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dI(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dI(t,b)}else return s.jN(b)},
jN:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cY(u.cd(t,u.cX(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bu(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bu(r,b)
s=t==null?null:t.b
return s}else return q.jO(b)},
jO:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cd(r,s.cX(a))
t=s.cY(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.C(b,H.v(s,0))
H.C(c,H.v(s,1))
if(typeof b==="string"){u=s.b
s.dz(u==null?s.b=s.co():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dz(t==null?s.c=s.co():t,b,c)}else s.jP(b,c)},
jP:function(a,b){var u,t,s,r,q=this
H.C(a,H.v(q,0))
H.C(b,H.v(q,1))
u=q.d
if(u==null)u=q.d=q.co()
t=q.cX(a)
s=q.cd(u,t)
if(s==null)q.cw(u,t,[q.cp(a,b)])
else{r=q.cY(s,a)
if(r>=0)s[r].b=b
else s.push(q.cp(a,b))}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bq(s))
u=u.c}},
dz:function(a,b,c){var u,t=this
H.C(b,H.v(t,0))
H.C(c,H.v(t,1))
u=t.bu(a,b)
if(u==null)t.cw(a,b,t.cp(b,c))
else u.b=c},
hh:function(){this.r=this.r+1&67108863},
cp:function(a,b){var u,t=this,s=new H.hx(H.C(a,H.v(t,0)),H.C(b,H.v(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.hh()
return s},
cX:function(a){return J.dA(a)&0x3ffffff},
cY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.lk(this)},
bu:function(a,b){return a[b]},
cd:function(a,b){return a[b]},
cw:function(a,b,c){a[b]=c},
fZ:function(a,b){delete a[b]},
dI:function(a,b){return this.bu(a,b)!=null},
co:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cw(t,u,t)
this.fZ(t,u)
return t}}
H.hx.prototype={}
H.hy.prototype={
gl:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gL:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bq(t))
else{t=u.c
if(t==null){u.sdw(null)
return!1}else{u.sdw(t.a)
u.c=u.c.c
return!0}}},
sdw:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.kK.prototype={
$1:function(a){return this.a(H.K(a))},
$S:47}
H.hs.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im7:1,
$iod:1}
H.cP.prototype={$icP:1}
H.bQ.prototype={$ibQ:1,$iol:1}
H.e2.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cQ.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p9(c)
H.bo(b,a,a.length)
a[b]=c},
$ac6:function(){return[P.t]},
$az:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.e3.prototype={
n:function(a,b,c){H.al(c)
H.bo(b,a,a.length)
a[b]=c},
$ac6:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hV.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hY.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.e4.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
$ipX:1}
H.cR.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bo(b,a,a.length)
return a[b]},
$icR:1,
$iV:1}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
P.jB.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:33}
P.jA.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:43}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jD.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fe.prototype={
fK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cn(new P.kh(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cn(new P.kg(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibi:1}
P.kh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kg.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.fq(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bn.prototype={
jT:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.n(this.d,{func:1,ret:P.U,args:[P.T]}),a.a,P.U,P.T)},
jL:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fx(u,{func:1,args:[P.T,P.aA]}))return H.lF(r.kh(u,a.a,a.b,null,t,P.aA),s)
else return H.lF(r.dc(H.n(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aP.prototype={
f7:function(a,b,c){var u,t,s,r=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a5
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oW(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aP($.a5,[c])
s=b==null?1:3
this.dA(new P.bn(t,s,a,b,[r,c]))
return t},
kl:function(a,b){return this.f7(a,null,b)},
dA:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibn")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaP")
s=u.a
if(s<4){u.dA(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kz(null,null,s,H.n(new P.jM(t,a),{func:1,ret:-1}))}},
dX:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibn")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaP")
u=q.a
if(u<4){q.dX(a)
return}p.a=u
p.c=q.c}o.a=p.bw(a)
u=p.b
u.toString
P.kz(null,null,u,H.n(new P.jQ(o,p),{func:1,ret:-1}))}},
cs:function(){var u=H.e(this.c,"$ibn")
this.c=null
return this.bw(u)},
bw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dE:function(a){var u,t,s=this,r=H.v(s,0)
H.lF(a,{futureOr:1,type:r})
u=s.$ti
if(H.lB(a,"$icG",u,"$acG"))if(H.lB(a,"$iaP",u,null))P.my(a,s)
else P.ox(a,s)
else{t=s.cs()
H.C(a,r)
s.a=4
s.c=a
P.dh(s,t)}},
dF:function(a,b){var u,t=this
H.e(b,"$iaA")
u=t.cs()
t.a=8
t.c=new P.aq(a,b)
P.dh(t,u)},
$icG:1}
P.jM.prototype={
$0:function(){P.dh(this.a,this.b)},
$S:0}
P.jQ.prototype={
$0:function(){P.dh(this.b,this.a.a)},
$S:0}
P.jN.prototype={
$1:function(a){var u=this.a
u.a=0
u.dE(a)},
$S:33}
P.jO.prototype={
$2:function(a,b){H.e(b,"$iaA")
this.a.dF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.jP.prototype={
$0:function(){this.a.dF(this.b,this.c)},
$S:0}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.f5(H.n(s.d,{func:1}),null)}catch(r){u=H.am(r)
t=H.cs(r)
if(o.d){s=H.e(o.a.a.c,"$iaq").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iaq")
else q.b=new P.aq(u,t)
q.a=!0
return}if(!!J.X(n).$icG){if(n instanceof P.aP&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iaq")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.kl(new P.jU(p),null)
s.a=!1}},
$S:3}
P.jU.prototype={
$1:function(a){return this.a},
$S:34}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.C(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.dc(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.am(o)
t=H.cs(o)
s=n.a
s.b=new P.aq(u,t)
s.a=!0}},
$S:3}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iaq")
r=m.c
if(H.E(r.jT(u))&&r.e!=null){q=m.b
q.b=r.jL(u)
q.a=!1}}catch(p){t=H.am(p)
s=H.cs(p)
r=H.e(m.a.a.c,"$iaq")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aq(t,s)
n.a=!0}},
$S:3}
P.eB.prototype={}
P.iD.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aP($.a5,[P.p])
r.a=0
u=H.v(s,0)
t=H.n(new P.iF(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iG(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.iF.prototype={
$1:function(a){H.C(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.v(this.b,0)]}}}
P.iG.prototype={
$0:function(){this.b.dE(this.a.a)},
$S:0}
P.cY.prototype={}
P.iE.prototype={}
P.bi.prototype={}
P.aq.prototype={
i:function(a){return H.m(this.a)},
$ibK:1}
P.kq.prototype={$iqb:1}
P.ky.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e6():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k_.prototype={
ki:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a5){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.am(s)
t=H.cs(s)
P.kx(r,r,this,u,H.e(t,"$iaA"))}},
kj:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.k===$.a5){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.am(s)
t=H.cs(s)
P.kx(r,r,this,u,H.e(t,"$iaA"))}},
jr:function(a,b){return new P.k1(this,H.n(a,{func:1,ret:b}),b)},
cF:function(a){return new P.k0(this,H.n(a,{func:1,ret:-1}))},
ec:function(a,b){return new P.k2(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f5:function(a,b){H.n(a,{func:1,ret:b})
if($.a5===C.k)return a.$0()
return P.mK(null,null,this,a,b)},
dc:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a5===C.k)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
kh:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a5===C.k)return a.$2(b,c)
return P.oX(null,null,this,a,b,c,d,e,f)}}
P.k1.prototype={
$0:function(){return this.a.f5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k0.prototype={
$0:function(){return this.a.ki(this.b)},
$S:3}
P.k2.prototype={
$1:function(a){var u=this.c
return this.a.kj(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jY.prototype={
gW:function(a){var u=this,t=new P.eQ(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ici")!=null}else{t=this.fV(b)
return t}},
fV:function(a){var u=this.d
if(u==null)return!1
return this.cb(this.dN(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dB(u==null?s.b=P.lt():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dB(t==null?s.c=P.lt():t,b)}else return s.fM(0,b)},
fM:function(a,b){var u,t,s,r=this
H.C(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.lt()
t=r.dG(b)
s=u[t]
if(s==null)u[t]=[r.c8(b)]
else{if(r.cb(s,b)>=0)return!1
s.push(r.c8(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ij(this.c,b)
else return this.ii(0,b)},
ii:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dN(r,b)
t=s.cb(u,b)
if(t<0)return!1
s.e2(u.splice(t,1)[0])
return!0},
dB:function(a,b){H.C(b,H.v(this,0))
if(H.e(a[b],"$ici")!=null)return!1
a[b]=this.c8(b)
return!0},
ij:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ici")
if(u==null)return!1
this.e2(u)
delete a[b]
return!0},
dD:function(){this.r=1073741823&this.r+1},
c8:function(a){var u,t=this,s=new P.ci(H.C(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dD()
return s},
e2:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dD()},
dG:function(a){return J.dA(a)&1073741823},
dN:function(a,b){return a[this.dG(b)]},
cb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.ci.prototype={}
P.eQ.prototype={
gL:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bq(t))
else{t=u.c
if(t==null){u.sdC(null)
return!1}else{u.sdC(H.C(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sdC:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
P.hA.prototype={
$2:function(a,b){this.a.n(0,H.C(a,this.b),H.C(b,this.c))},
$S:6}
P.hB.prototype={$ii:1,$ib:1}
P.z.prototype={
gW:function(a){return new H.cK(a,this.gl(a),[H.bX(this,a,"z",0)])},
M:function(a,b){return this.j(a,b)},
kn:function(a,b){var u,t=this,s=H.d([],[H.bX(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
de:function(a){return this.kn(a,!0)},
p:function(a,b){var u,t=this,s=[H.bX(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.p(t.gl(a),b.gl(b)))
C.a.br(u,0,t.gl(a),a)
C.a.br(u,t.gl(a),u.length,b)
return u},
jE:function(a,b,c,d){var u
H.C(d,H.bX(this,a,"z",0))
P.bx(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.le(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:6}
P.ag.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bX(s,a,"ag",0),H.bX(s,a,"ag",1)]})
for(u=J.bE(s.gaa(a));u.F();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aJ(this.gaa(a))},
i:function(a){return P.lk(a)},
$iI:1}
P.ki.prototype={
n:function(a,b,c){H.C(b,H.v(this,0))
H.C(c,H.v(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hF.prototype={
j:function(a,b){return J.lO(this.a,b)},
n:function(a,b,c){J.l6(this.a,H.C(b,H.v(this,0)),H.C(c,H.v(this,1)))},
N:function(a,b){J.lP(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aJ(this.a)},
i:function(a){return J.av(this.a)},
$iI:1}
P.eu.prototype={}
P.k4.prototype={
ae:function(a,b){var u
for(u=J.bE(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gL(u))},
i:function(a){return P.le(this,"{","}")},
M:function(a,b){var u,t,s,r=this
P.lm(b,"index")
for(u=P.oB(r,r.r,H.v(r,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$ii:1,
$imf:1}
P.eR.prototype={}
P.fk.prototype={}
P.fK.prototype={
jU:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bx(a0,a1,b.length)
u=$.no()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.I(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kH(C.b.I(b,n))
j=H.kH(C.b.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.E(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.c(P.a9("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.E(b,s,a1)
f=g.length
if(q>=0)P.lT(b,p,a1,q,o,f)
else{e=C.f.bq(f-1,4)+1
if(e===1)throw H.c(P.a9(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b4(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lT(b,p,a1,q,o,d)
else{e=C.f.bq(d,4)
if(e===1)throw H.c(P.a9(c,b,a1))
if(e>1)b=C.b.b4(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.p],P.f]}}
P.fL.prototype={
$abI:function(){return[[P.b,P.p],P.f]}}
P.c2.prototype={}
P.bI.prototype={}
P.h7.prototype={
$ac2:function(){return[P.f,[P.b,P.p]]}}
P.hn.prototype={
i:function(a){return this.a}}
P.hm.prototype={
fW:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.E(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nB(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abI:function(){return[P.f,P.f]}}
P.ji.prototype={
gjD:function(){return C.R}}
P.jk.prototype={
cL:function(a){var u,t,s=P.bx(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ko(u)
if(t.h7(a,0,s)!==s)t.e4(J.nx(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oR(0,t.b,u.length)))},
$abI:function(){return[P.f,[P.b,P.p]]}}
P.ko.prototype={
e4:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h7:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a4(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.e4(r,C.b.I(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jj.prototype={
cL:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.oo(!1,a,0,null)
if(u!=null)return u
t=P.bx(0,null,J.aJ(a))
s=P.mN(a,0,t)
if(s>0){r=P.cZ(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.kn(!1,q)
n.c=o
n.ju(a,p,t)
if(n.e>0){H.u(P.a9("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abI:function(){return[[P.b,P.p],P.f]}}
P.kn.prototype={
ju:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cq(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.c2()
if((o&192)!==128){n=P.a9(h+C.f.bo(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a9("Overlong encoding of 0x"+C.f.bo(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a9("Character outside valid Unicode range: 0x"+C.f.bo(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cZ(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.a_()
if(o<0){j=P.a9("Negative UTF-8 code unit: -0x"+C.f.bo(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a9(h+C.f.bo(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.U.prototype={}
P.aD.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aD&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.nJ(H.o9(u)),s=P.dK(H.o7(u)),r=P.dK(H.o3(u)),q=P.dK(H.o4(u)),p=P.dK(H.o6(u)),o=P.dK(H.o8(u)),n=P.nK(H.o5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.b8.prototype={
p:function(a,b){return new P.b8(C.f.p(this.a,b.gh0()))},
u:function(a,b){return new P.b8(C.f.u(this.a,b.gh0()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.h4(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.f.a9(q,6e7)%60)
t=r.$1(C.f.a9(q,1e6)%60)
s=new P.h3().$1(q%1e6)
return""+C.f.a9(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.h3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:28}
P.h4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:28}
P.bK.prototype={}
P.fE.prototype={
i:function(a){return"Assertion failed"}}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aR.prototype={
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gca()+o+u
if(!q.a)return t
s=q.gc9()
r=P.dO(q.b)
return t+s+": "+r}}
P.cd.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.hp.prototype={
gca:function(){return"RangeError"},
gc9:function(){var u,t=H.al(this.b)
if(typeof t!=="number")return t.a_()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gl:function(a){return this.f}}
P.jb.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j8.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cf.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fR.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dO(u)+"."}}
P.i5.prototype={
i:function(a){return"Out of Memory"},
$ibK:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibK:1}
P.fY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.E(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.I(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a4(f,q)
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
k=""}j=C.b.E(f,m,n)
return h+l+j+k+"\n"+C.b.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.bL.prototype={}
P.p.prototype={}
P.i.prototype={
c1:function(a,b){var u=H.ap(this,"i",0)
return new H.de(this,H.n(b,{func:1,ret:P.U,args:[u]}),[u])},
gl:function(a){var u,t=this.gW(this)
for(u=0;t.F();)++u
return u},
gaR:function(a){var u,t=this.gW(this)
if(!t.F())throw H.c(H.hq())
u=t.gL(t)
if(t.F())throw H.c(H.nR())
return u},
M:function(a,b){var u,t,s
P.lm(b,"index")
for(u=this.gW(this),t=0;u.F();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
i:function(a){return P.nP(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ii:1}
P.I.prototype={}
P.M.prototype={
gK:function(a){return P.T.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
A:function(a,b){return this===b},
gK:function(a){return H.cU(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.aA.prototype={}
P.f.prototype={$im7:1}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipL:1}
P.jg.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.k(a,"$iI",[r,r],"$aI")
H.K(b)
u=J.dx(b).eO(b,"=")
if(u===-1){if(b!=="")J.l6(a,P.lv(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.E(b,0,u)
s=C.b.aw(b,u+1)
r=this.a
J.l6(a,P.lv(t,0,t.length,r,!0),P.lv(s,0,s.length,r,!0))}return a},
$S:40}
P.jd.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.je.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:44}
P.jf.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fA(C.b.E(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:48}
P.cj.prototype={
gfd:function(){return this.b},
gcW:function(a){var u=this.c
if(u==null)return""
if(C.b.a8(u,"["))return C.b.E(u,1,u.length-1)
return u},
gbV:function(a){var u=this.d
if(u==null)return P.mC(this.a)
return u},
gd7:function(a){var u=this.f
return u==null?"":u},
geJ:function(){var u=this.r
return u==null?"":u},
f3:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iI",[P.f,null],"$aI")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a8(p,"/"))p="/"+p
n=P.lu(null,0,0,b)
return new P.cj(u,s,q,r,p,n,m.r)},
gd8:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.sih(new P.eu(P.mp(u==null?"":u),[t,t]))}return s.Q},
geK:function(){return this.c!=null},
geN:function(){return this.f!=null},
geL:function(){return this.r!=null},
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
if(!!J.X(b).$ilp)if(s.a==b.gc4())if(s.c!=null===b.geK())if(s.b==b.gfd())if(s.gcW(s)==b.gcW(b))if(s.gbV(s)==b.gbV(b))if(s.e===b.gf0(b)){u=s.f
t=u==null
if(!t===b.geN()){if(t)u=""
if(u===b.gd7(b)){u=s.r
t=u==null
if(!t===b.geL()){if(t)u=""
u=u===b.geJ()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.b.gK(this.i(0)):u},
sih:function(a){var u=P.f
this.Q=H.k(a,"$iI",[u,u],"$aI")},
$ilp:1,
gc4:function(){return this.a},
gf0:function(a){return this.e}}
P.kj.prototype={
$1:function(a){throw H.c(P.a9("Invalid port",this.a,this.b+1))},
$S:50}
P.kk.prototype={
$1:function(a){return P.fl(C.a0,a,C.l,!1)},
$S:26}
P.km.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fl(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fl(C.r,b,C.l,!0))}},
$S:23}
P.kl.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bE(H.n0(b,"$ii")),t=this.a;u.F();)t.$2(a,H.K(u.gL(u)))},
$S:39}
P.jc.prototype={
gfc:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.eP(u,"?",o)
s=u.length
if(t>=0){r=P.dt(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jH("data",p,p,p,P.dt(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ku.prototype={
$1:function(a){return new Uint8Array(96)},
$S:49}
P.kt.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.ny(u,0,96,b)
return u},
$S:46}
P.kv.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.I(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kw.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.I(b,0),t=C.b.I(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k7.prototype={
geK:function(){return this.c>0},
geM:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
geN:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
geL:function(){return this.r<this.a.length},
gdP:function(){return this.b===4&&C.b.a8(this.a,"http")},
gdQ:function(){return this.b===5&&C.b.a8(this.a,"https")},
gc4:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdP())q=t.x="http"
else if(t.gdQ()){t.x="https"
q="https"}else if(q===4&&C.b.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a8(t.a,r)){t.x=r
q=r}else{q=C.b.E(t.a,0,q)
t.x=q}return q},
gfd:function(){var u=this.c,t=this.b+3
return u>t?C.b.E(this.a,t,u-1):""},
gcW:function(a){var u=this.c
return u>0?C.b.E(this.a,u,this.d):""},
gbV:function(a){var u,t=this
if(t.geM()){u=t.d
if(typeof u!=="number")return u.p()
return P.fA(C.b.E(t.a,u+1,t.e),null,null)}if(t.gdP())return 80
if(t.gdQ())return 443
return 0},
gf0:function(a){return C.b.E(this.a,this.e,this.f)},
gd7:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.b.E(this.a,u+1,t):""},
geJ:function(){var u=this.r,t=this.a
return u<t.length?C.b.aw(t,u+1):""},
gd8:function(){var u=this,t=u.f
if(typeof t!=="number")return t.a_()
if(t>=u.r)return C.a1
t=P.f
return new P.eu(P.mp(u.gd7(u)),[t,t])},
f3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iI",[P.f,null],"$aI")
u=k.gc4()
t=u==="file"
s=k.c
r=s>0?C.b.E(k.a,k.b+3,s):""
q=k.geM()?k.gbV(k):j
s=k.c
if(s>0)p=C.b.E(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.E(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a8(o,"/"))o="/"+o
m=P.lu(j,0,0,b)
n=k.r
l=n<s.length?C.b.aw(s,n+1):j
return new P.cj(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ilp&&this.a===b.i(0)},
i:function(a){return this.a},
$ilp:1}
P.jH.prototype={}
W.y.prototype={}
W.fC.prototype={
gl:function(a){return a.length}}
W.dB.prototype={
i:function(a){return String(a)},
$idB:1}
W.fD.prototype={
i:function(a){return String(a)}}
W.cw.prototype={$icw:1}
W.c_.prototype={$ic_:1}
W.bF.prototype={$ibF:1}
W.c1.prototype={
di:function(a,b,c){if(c!=null)return a.getContext(b,P.p4(c))
return a.getContext(b)},
fg:function(a,b){return this.di(a,b,null)},
$ic1:1}
W.cA.prototype={$icA:1}
W.bG.prototype={
gl:function(a){return a.length}}
W.cC.prototype={$icC:1}
W.fU.prototype={
gl:function(a){return a.length}}
W.a0.prototype={$ia0:1}
W.cD.prototype={
gl:function(a){return a.length}}
W.fV.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.fW.prototype={
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length}}
W.h_.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.h0.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$ian",[P.ae],"$aan")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.an,P.ae]]},
$az:function(){return[[P.an,P.ae]]},
$ii:1,
$ai:function(){return[[P.an,P.ae]]},
$ib:1,
$ab:function(){return[[P.an,P.ae]]},
$aH:function(){return[[P.an,P.ae]]}}
W.dM.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaQ(a))+" x "+H.m(this.gaL(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gbS(b)&&a.top===u.gc_(b)&&this.gaQ(a)===u.gaQ(b)&&this.gaL(a)===u.gaL(b)},
gK:function(a){return W.mA(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gaQ(a)),C.e.gK(this.gaL(a)))},
gee:function(a){return a.bottom},
gaL:function(a){return a.height},
gbS:function(a){return a.left},
gbZ:function(a){return a.right},
gc_:function(a){return a.top},
gaQ:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ae]}}
W.h1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$az:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.h2.prototype={
gl:function(a){return a.length}}
W.jF.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iY")},
n:function(a,b,c){var u
H.e(c,"$iY")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var u=this.de(this)
return new J.aw(u,u.length,[H.v(u,0)])},
$az:function(){return[W.Y]},
$ai:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
W.Y.prototype={
gjq:function(a){return new W.jI(a)},
gcK:function(a){return new W.jF(a,a.children)},
geg:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m_
if(u==null){u=H.d([],[W.aG])
t=new W.e5(u)
C.a.h(u,W.mz(null))
C.a.h(u,W.mB())
$.m_=t
d=t}else d=u
u=$.lZ
if(u==null){u=new W.fm(d)
$.lZ=u
c=u}else{u.a=d
c=u}}if($.br==null){u=document
t=u.implementation.createHTMLDocument("")
$.br=t
$.lc=t.createRange()
t=$.br.createElement("base")
H.e(t,"$icw")
t.href=u.baseURI
$.br.head.appendChild(t)}u=$.br
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibF")}u=$.br
if(!!this.$ibF)s=u.body
else{s=u.createElement(a.tagName)
$.br.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.Z,a.tagName)){$.lc.selectNodeContents(s)
r=$.lc.createContextualFragment(b)}else{s.innerHTML=b
r=$.br.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.br.body
if(s==null?u!=null:s!==u)J.lR(s)
c.dj(r)
document.adoptNode(r)
return r},
jx:function(a,b,c){return this.an(a,b,c,null)},
fj:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iY:1,
gf6:function(a){return a.tagName}}
W.h6.prototype={
$1:function(a){return!!J.X(H.e(a,"$iG")).$iY},
$S:19}
W.o.prototype={$io:1}
W.j.prototype={
jj:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fN(a,b,c,!1)},
fN:function(a,b,c,d){return a.addEventListener(b,H.cn(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aL.prototype={$iaL:1}
W.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$icF:1,
$aH:function(){return[W.aL]}}
W.hc.prototype={
gl:function(a){return a.length}}
W.hg.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.hl.prototype={
gl:function(a){return a.length}}
W.c7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$az:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic7:1,
$aH:function(){return[W.G]}}
W.bs.prototype={$ibs:1,
geh:function(a){return a.data}}
W.cI.prototype={$icI:1}
W.cJ.prototype={$icJ:1}
W.ba.prototype={$iba:1}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.hO.prototype={
gl:function(a){return a.length}}
W.cN.prototype={$icN:1}
W.hP.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.N(a,new W.hQ(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hR.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.N(a,new W.hS(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aV.prototype={$iaV:1}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.ah.prototype={$iah:1}
W.at.prototype={
gaR:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mg("No elements"))
if(t>1)throw H.c(P.mg("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dP(u,u.length,[H.bX(C.a2,u,"H",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
kc:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
kf:function(a,b){var u,t
try{u=a.parentNode
J.nv(u,b,a)}catch(t){H.am(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fl(a):u},
jo:function(a,b){return a.appendChild(H.e(b,"$iG"))},
im:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$az:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aW.prototype={$iaW:1,
gl:function(a){return a.length}}
W.i8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.ij.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.N(a,new W.ik(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.ik.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.im.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.ix.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.iB.prototype={
j:function(a,b){return a.getItem(H.K(b))},
n:function(a,b,c){a.setItem(b,c)},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.d([],[P.f])
this.N(a,new W.iC(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.f,P.f]},
$iI:1,
$aI:function(){return[P.f,P.f]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aM.prototype={$iaM:1}
W.bh.prototype={$ibh:1}
W.ej.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
u=W.nL("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ae(0,new W.at(u))
return t}}
W.iI.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.an(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaR(u)
s.toString
u=new W.at(s)
r=u.gaR(u)
t.toString
r.toString
new W.at(t).ae(0,new W.at(r))
return t}}
W.iJ.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c5(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.an(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaR(u)
t.toString
s.toString
new W.at(t).ae(0,new W.at(s))
return t}}
W.d0.prototype={$id0:1}
W.b_.prototype={$ib_:1}
W.aN.prototype={$iaN:1}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b_]},
$az:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.iQ.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.iU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b0]},
$az:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aH:function(){return[W.b0]}}
W.iV.prototype={
gl:function(a){return a.length}}
W.bT.prototype={}
W.jh.prototype={
i:function(a){return String(a)}}
W.jx.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
gjA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibm:1}
W.df.prototype={
ip:function(a,b){return a.requestAnimationFrame(H.cn(H.n(b,{func:1,ret:-1,args:[P.ae]}),1))},
h1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dg.prototype={$idg:1}
W.jG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$ia0")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.a0]},
$az:function(){return[W.a0]},
$ii:1,
$ai:function(){return[W.a0]},
$ib:1,
$ab:function(){return[W.a0]},
$aH:function(){return[W.a0]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ian)return!1
return a.left===u.gbS(b)&&a.top===u.gc_(b)&&a.width===u.gaQ(b)&&a.height===u.gaL(b)},
gK:function(a){return W.mA(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gaL:function(a){return a.height},
gaQ:function(a){return a.width}}
W.jV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aH:function(){return[W.aS]}}
W.eW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.G]},
$az:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.kc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaM")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aM]},
$az:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aH:function(){return[W.aM]}}
W.jE.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaa(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gaa:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$idg")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.f,P.f]},
$aI:function(){return[P.f,P.f]}}
W.jI.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gaa(this).length}}
W.jJ.prototype={}
W.ls.prototype={}
W.jK.prototype={}
W.jL.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:53}
W.bV.prototype={
fz:function(a){var u
if($.di.gjQ($.di)){for(u=0;u<262;++u)$.di.n(0,C.Y[u],W.ph())
for(u=0;u<12;++u)$.di.n(0,C.v[u],W.pi())}},
b0:function(a){return $.np().Z(0,W.cE(a))},
aB:function(a,b,c){var u=$.di.j(0,H.m(W.cE(a))+"::"+b)
if(u==null)u=$.di.j(0,"*::"+b)
if(u==null)return!1
return H.lA(u.$4(a,b,c,this))},
$iaG:1}
W.H.prototype={
gW:function(a){return new W.dP(a,this.gl(a),[H.bX(this,a,"H",0)])}}
W.e5.prototype={
b0:function(a){return C.a.ea(this.a,new W.i0(a))},
aB:function(a,b,c){return C.a.ea(this.a,new W.i_(a,b,c))},
$iaG:1}
W.i0.prototype={
$1:function(a){return H.e(a,"$iaG").b0(this.a)},
$S:21}
W.i_.prototype={
$1:function(a){return H.e(a,"$iaG").aB(this.a,this.b,this.c)},
$S:21}
W.f3.prototype={
fJ:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.c1(0,new W.k5())
t=b.c1(0,new W.k6())
this.b.ae(0,u)
s=this.c
s.ae(0,C.B)
s.ae(0,t)},
b0:function(a){return this.a.Z(0,W.cE(a))},
aB:function(a,b,c){var u=this,t=W.cE(a),s=u.c
if(s.Z(0,H.m(t)+"::"+b))return u.d.jm(c)
else if(s.Z(0,"*::"+b))return u.d.jm(c)
else{s=u.b
if(s.Z(0,H.m(t)+"::"+b))return!0
else if(s.Z(0,"*::"+b))return!0
else if(s.Z(0,H.m(t)+"::*"))return!0
else if(s.Z(0,"*::*"))return!0}return!1},
$iaG:1}
W.k5.prototype={
$1:function(a){return!C.a.Z(C.v,H.K(a))},
$S:22}
W.k6.prototype={
$1:function(a){return C.a.Z(C.v,H.K(a))},
$S:22}
W.ke.prototype={
aB:function(a,b,c){if(this.fp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Z(0,b)
return!1}}
W.kf.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.K(a))},
$S:26}
W.kd.prototype={
b0:function(a){var u=J.X(a)
if(!!u.$icV)return!1
u=!!u.$iq
if(u&&W.cE(a)==="foreignObject")return!1
if(u)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.b.a8(b,"on"))return!1
return this.b0(a)},
$iaG:1}
W.dP.prototype={
F:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdO(J.lO(u.a,t))
u.c=t
return!0}u.sdO(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdO:function(a){this.d=H.C(a,H.v(this,0))},
$ib9:1}
W.aG.prototype={}
W.k3.prototype={$ipY:1}
W.fm.prototype={
dj:function(a){new W.kp(this).$2(a,null)},
bc:function(a,b){if(b==null)J.lR(a)
else b.removeChild(a)},
iu:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nz(a)
n=o.a.getAttribute("is")
H.e(a,"$iY")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.am(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.am(r)}try{s=W.cE(a)
this.it(H.e(a,"$iY"),b,p,t,s,H.e(o,"$iI"),H.K(n))}catch(r){if(H.am(r) instanceof P.aR)throw r
else{this.bc(a,b)
window
q="Removing corrupted element "+H.m(t)
if(typeof console!="undefined")window.console.warn(q)}}},
it:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.bc(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.b0(a)){o.bc(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aB(a,"is",g)){o.bc(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.gaa(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nC(r)
H.K(r)
if(!q.aB(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.m(e)+" "+r+'="'+H.m(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$id0)o.dj(a.content)},
$ipJ:1}
W.kp.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.iu(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.bc(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.am(s)
r=H.e(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iG")}},
$S:41}
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
W.dn.prototype={}
W.dp.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dq.prototype={}
W.dr.prototype={}
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
P.k9.prototype={
eI:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
dg:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.X(a)
if(!!u.$iaD)return new Date(a.a)
if(!!u.$iod)throw H.c(P.j9("structured clone of RegExp"))
if(!!u.$iaL)return a
if(!!u.$ic_)return a
if(!!u.$icF)return a
if(!!u.$ibs)return a
if(!!u.$icP||!!u.$ibQ||!!u.$icN)return a
if(!!u.$iI){t=q.eI(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.N(a,new P.kb(p,q))
return p.a}if(!!u.$ib){t=q.eI(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jw(a,t)}throw H.c(P.j9("structured clone of other type"))},
jw:function(a,b){var u,t=J.cq(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.dg(t.j(a,u)))
return r}}
P.kb.prototype={
$2:function(a,b){this.a.a[a]=this.b.dg(b)},
$S:6}
P.fj.prototype={$ibs:1,
geh:function(a){return this.a}}
P.kA.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.ka.prototype={}
P.hd.prototype={
gbv:function(){var u=this.b,t=H.ap(u,"z",0),s=W.Y
return new H.hG(new H.de(u,H.n(new P.he(),{func:1,ret:P.U,args:[t]}),[t]),H.n(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iY")
u=this.gbv()
J.nA(u.b.$1(J.fB(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aJ(this.gbv().a)},
j:function(a,b){var u=this.gbv()
return u.b.$1(J.fB(u.a,b))},
gW:function(a){var u=P.m3(this.gbv(),!1,W.Y)
return new J.aw(u,u.length,[H.v(u,0)])},
$az:function(){return[W.Y]},
$ai:function(){return[W.Y]},
$ab:function(){return[W.Y]}}
P.he.prototype={
$1:function(a){return!!J.X(H.e(a,"$iG")).$iY},
$S:19}
P.hf.prototype={
$1:function(a){return H.l(H.e(a,"$iG"),"$iY")},
$S:54}
P.jZ.prototype={
gbZ:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return H.C(u+t,H.v(this,0))},
gee:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return H.C(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
A:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ian){t=p.a
if(t==u.gbS(b)){s=p.b
if(s==u.gc_(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.D(r)
q=H.v(p,0)
if(H.C(t+r,q)===u.gbZ(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.D(t)
u=H.C(s+t,q)===u.gee(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.dA(s),q=t.b,p=J.dA(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.D(o)
u=H.v(t,0)
o=C.f.gK(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.D(s)
u=C.f.gK(H.C(q+s,u))
return P.oA(P.jX(P.jX(P.jX(P.jX(0,r),p),o),u))}}
P.an.prototype={
gbS:function(a){return this.a},
gc_:function(a){return this.b},
gaQ:function(a){return this.c},
gaL:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibb")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.bf.prototype={$ibf:1}
P.i3.prototype={
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
$aH:function(){return[P.bf]}}
P.ia.prototype={
gl:function(a){return a.length}}
P.cV.prototype={$icV:1}
P.iH.prototype={
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
$aH:function(){return[P.f]}}
P.q.prototype={
gcK:function(a){return new P.hd(a,new W.at(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aG])
C.a.h(p,W.mz(null))
C.a.h(p,W.mB())
C.a.h(p,new W.kd())
c=new W.fm(new W.e5(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jx(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaR(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bj.prototype={$ibj:1}
P.iW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibj")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[P.bj]},
$ii:1,
$ai:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aH:function(){return[P.bj]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.V.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$iol:1}
P.fG.prototype={
gl:function(a){return a.length}}
P.fH.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.f])
this.N(a,new P.fI(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
P.fI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fJ.prototype={
gl:function(a){return a.length}}
P.bZ.prototype={}
P.i4.prototype={
gl:function(a){return a.length}}
P.eC.prototype={}
P.dE.prototype={$idE:1}
P.e9.prototype={$ie9:1}
P.ce.prototype={
kk:function(a,b,c,d,e,f,g){var u,t=J.X(g)
if(!!t.$ibs)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.p5(g))
return}if(!!t.$icI)t=!0
else t=!1
if(t){this.iJ(a,b,c,d,e,f,g)
return}throw H.c(P.dC("Incorrect number or type of arguments"))},
iJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
O:function(a,b,c){return a.uniform1f(b,c)},
a7:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fa:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fb:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.ec.prototype={$iec:1}
P.ek.prototype={$iek:1}
P.es.prototype={$ies:1}
P.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.by(a.item(b))},
n:function(a,b,c){H.e(c,"$iI")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$az:function(){return[[P.I,,,]]},
$ii:1,
$ai:function(){return[[P.I,,,]]},
$ib:1,
$ab:function(){return[[P.I,,,]]},
$aH:function(){return[[P.I,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a7.prototype={
bt:function(a){var u=this
u.shc(H.d([],[a]))
u.sdV(null)
u.sdR(null)
u.sdW(null)},
dk:function(a,b,c){var u=this,t=H.ap(u,"a7",0)
H.n(b,{func:1,ret:P.U,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdV(b)
u.sdR(a)
u.sdW(c)},
b6:function(a,b){return this.dk(a,null,b)},
dU:function(a){var u
H.k(a,"$ii",[H.ap(this,"a7",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ds:function(a,b){var u
H.k(b,"$ii",[H.ap(this,"a7",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.aw(u,u.length,[H.v(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ap(s,"a7",0)
H.C(b,r)
r=[r]
if(H.E(s.dU(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.ds(t,H.d([b],r))}},
ae:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.ap(s,"a7",0)],"$ai")
if(H.E(s.dU(b))){u=s.a
t=u.length
C.a.ae(u,b)
s.ds(t,b)}},
shc:function(a){this.a=H.k(a,"$ib",[H.ap(this,"a7",0)],"$ab")},
sdV:function(a){this.b=H.n(a,{func:1,ret:P.U,args:[[P.i,H.ap(this,"a7",0)]]})},
sdR:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.ap(this,"a7",0)]]})},
sdW:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.ap(this,"a7",0)]]})},
$ii:1}
O.cM.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.R():u},
aS:function(){var u=this.b
if(u!=null)u.H(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.c9()},
bX:function(a){var u=this.a
if(a==null)C.a.h(u,V.c9())
else C.a.h(u,a)
this.aS()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aS()}},
scf:function(a){this.a=H.k(a,"$ib",[V.ax],"$ab")}}
E.fM.prototype={}
E.ar.prototype={
sab:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().G(0,s.geY())
u=s.c
if(u!=null)u.gv().h(0,s.geY())
t=new D.N("shape",r,s.c,[F.ed])
t.b=!0
s.bU(t)}},
av:function(a,b){var u
for(u=this.y.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.F();)u.d.av(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga6(s))
s.aS()
a.d6(t.f)
s=a.dy
u=(s&&C.a).gaD(s)
if(u!=null&&t.d!=null)u.f2(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.v(s,0)]);s.F();)s.d.ah(a)
a.d5()
a.dx.aN()},
gv:function(){var u=this.z
return u==null?this.z=D.R():u},
bU:function(a){var u=this.z
if(u!=null)u.H(a)},
X:function(){return this.bU(null)},
eZ:function(a){H.e(a,"$iA")
this.e=null
this.bU(a)},
k_:function(){return this.eZ(null)},
eX:function(a){this.bU(H.e(a,"$iA"))},
jX:function(){return this.eX(null)},
jW:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.geW(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sak(null)
o.saY(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
jZ:function(a,b){var u,t
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.gW(b),t=this.geW();u.F();)u.gL(u).gv().G(0,t)
this.X()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfw:function(a,b){this.y=H.k(b,"$ia7",[E.ar],"$aa7")},
$ibe:1}
E.ie.prototype={
ft:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aD(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cM()
t=[V.ax]
u.scf(H.d([],t))
u.b=null
u.gv().h(0,new E.ig(s))
s.cy=u
u=new O.cM()
u.scf(H.d([],t))
u.b=null
u.gv().h(0,new E.ih(s))
s.db=u
u=new O.cM()
u.scf(H.d([],t))
u.b=null
u.gv().h(0,new E.ii(s))
s.dx=u
s.siI(H.d([],[O.bS]))
u=s.dy;(u&&C.a).h(u,null)
s.siE(new H.aU([P.f,A.cW]))},
gkb:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.w(0,u.ga6(u))
s=u}return s},
d6:function(a){var u=this.dy,t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
d5:function(){var u=this.dy
if(u.length>1)u.pop()},
e9:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.bB(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
siI:function(a){this.dy=H.k(a,"$ib",[O.bS],"$ab")},
siE:function(a){this.fr=H.k(a,"$iI",[P.f,A.cW],"$aI")}}
E.ig.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:9}
E.ih.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.ii.prototype={
$1:function(a){var u
H.e(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:9}
E.eo.prototype={
dv:function(a){H.e(a,"$iA")
this.f4()},
du:function(){return this.dv(null)},
gjK:function(){var u,t=this,s=Date.now(),r=C.f.a9(P.lY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aD(s,!1)
return u/r},
dZ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.D(r)
u=C.e.cV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.e.cV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mj(C.t,s.gkg())}},
f4:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iP(this),{func:1,ret:-1,args:[P.ae]})
C.I.h1(u)
C.I.ip(u,W.mQ(t,P.ae))}},
ke:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dZ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aD(r,!1)
s.y=P.lY(r-s.r.a,0).a*0.000001
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
o.ah(p.e)}s=p.z
if(s!=null)s.H(null)}catch(q){u=H.am(q)
t=H.cs(q)
P.lJ("Error: "+H.m(u))
P.lJ("Stack: "+H.m(t))
throw H.c(u)}}}
E.iP.prototype={
$1:function(a){var u
H.pt(a)
u=this.a
if(u.ch){u.ch=!1
u.ke()}},
$S:35}
Z.ez.prototype={$ipD:1}
Z.dF.prototype={
a5:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.am(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.eA.prototype={$ipE:1}
Z.cz.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a5:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a5(a)},
aP:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sh8:function(a){this.b=H.k(a,"$ib",[Z.bM],"$ab")},
$ipM:1}
Z.bM.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cb(this.c)+"'")+"]"}}
Z.bl.prototype={
gdm:function(a){var u=this.a,t=(u&$.b4().a)!==0?3:0
if((u&$.bB().a)!==0)t+=3
if((u&$.bA().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bD().a)!==0)t+=3
if((u&$.dy().a)!==0)t+=3
if((u&$.dz().a)!==0)t+=4
if((u&$.cv().a)!==0)++t
return(u&$.bz().a)!==0?t+4:t},
jp:function(a){var u,t=$.b4(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0)if(u===a)return t
return $.nn()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.b4().a)!==0)C.a.h(u,"Pos")
if((t&$.bB().a)!==0)C.a.h(u,"Norm")
if((t&$.bA().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dy().a)!==0)C.a.h(u,"Clr3")
if((t&$.dz().a)!==0)C.a.h(u,"Clr4")
if((t&$.cv().a)!==0)C.a.h(u,"Weight")
if((t&$.bz().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fP.prototype={}
D.c4.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=s.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=s.b
t=(u&&C.a).G(u,b)||t}return t},
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
return!0}if(!t)C.a.N(P.m3(u,!0,{func:1,ret:-1,args:[D.A]}),new D.h9(q))
u=r.b
if(u!=null){r.saY(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.N(u,new D.ha(q))}return!0},
jB:function(){return this.H(null)},
aE:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
sak:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saY:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.A.prototype={}
D.bN.prototype={}
D.bO.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dG.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dU.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hu.prototype={
k8:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k0:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
sig:function(a){this.d=H.k(a,"$imf",[P.p],"$amf")}}
X.dY.prototype={}
X.hC.prototype={
ba:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=o.p(0,new V.a2(n*m,u*t))
t=q.a.gb1()
r=new X.bw(a,V.bg(),q.x,t,s)
r.b=!0
q.z=new P.aD(p,!1)
q.x=s
return r},
d4:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fi()
if(typeof u!=="number")return u.c2()
this.r=(u&~t)>>>0
return!1},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.ba(a,b))
return!0},
k9:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb1()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cO(new V.a_(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
hN:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dY(c,r.a.gb1(),b)
s.b=!0
t.H(s)
r.y=new P.aD(u,!1)
r.x=V.bg()}}
X.aF.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aF))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bw.prototype={}
X.hU.prototype={
cc:function(a,b,c){var u=this,t=new P.aD(Date.now(),!1),s=u.a.gb1(),r=new X.bw(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
d4:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.cc(a,b,!0))
return!0},
bj:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fi()
if(typeof t!=="number")return t.c2()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.cc(a,b,!0))
return!0},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.cc(a,b,!1))
return!0},
ka:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb1()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cO(new V.a_(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gej:function(){var u=this.b
return u==null?this.b=D.R():u},
gc0:function(){var u=this.c
return u==null?this.c=D.R():u},
geV:function(){var u=this.d
return u==null?this.d=D.R():u}}
X.cO.prototype={}
X.i9.prototype={}
X.eq.prototype={}
X.iT.prototype={
ba:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a2],"$ab")
u=new P.aD(Date.now(),!1)
t=a.length>0?a[0]:V.bg()
s=q.a.gb1()
r=new X.eq(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
k7:function(a){var u
H.k(a,"$ib",[V.a2],"$ab")
u=this.b
if(u==null)return!1
u.H(this.ba(a,!0))
return!0},
k5:function(a){var u
H.k(a,"$ib",[V.a2],"$ab")
u=this.c
if(u==null)return!1
u.H(this.ba(a,!0))
return!0},
k6:function(a){var u
H.k(a,"$ib",[V.a2],"$ab")
u=this.d
if(u==null)return!1
u.H(this.ba(a,!1))
return!0}}
X.ev.prototype={
gb1:function(){var u=this.a,t=C.m.geg(u).c
t.toString
u=C.m.geg(u).d
u.toString
return V.md(0,0,t,u)},
dJ:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dU(u,new X.aF(t,a.altKey,a.shiftKey))},
aZ:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aF(t,a.altKey,a.shiftKey)},
cz:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aF(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.u()
u=t.top
if(typeof r!=="number")return r.u()
return new V.a2(s-q,r-u)},
bb:function(a){return new V.a_(a.movementX,a.movementY)},
cr:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a2])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.e.at(r.pageX)
C.e.at(r.pageY)
p=o.left
C.e.at(r.pageX)
C.a.h(n,new V.a2(q-p,C.e.at(r.pageY)-o.top))}return n},
aG:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dG(u,new X.aF(t,a.altKey,a.shiftKey))},
cg:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.u()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.u()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hH:function(a){this.f=!0},
ht:function(a){this.f=!1},
hB:function(a){H.e(a,"$iah")
if(H.E(this.f)&&this.cg(a))a.preventDefault()},
hL:function(a){var u
H.e(a,"$iba")
if(!H.E(this.f))return
u=this.dJ(a)
this.b.k8(u)},
hJ:function(a){var u
H.e(a,"$iba")
if(!H.E(this.f))return
u=this.dJ(a)
this.b.k0(u)},
hP:function(a){var u,t,s,r,q=this
H.e(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aZ(a)
if(H.E(q.x)){t=q.aG(a)
s=q.bb(a)
if(q.d.d4(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aG(a)
r=q.aI(a)
if(q.c.d4(t,r))a.preventDefault()},
hT:function(a){var u,t,s,r=this
H.e(a,"$iah")
r.aZ(a)
u=r.aG(a)
if(H.E(r.x)){t=r.bb(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bj(u,s))a.preventDefault()},
hF:function(a){var u,t,s,r=this
H.e(a,"$iah")
if(!r.cg(a)){r.aZ(a)
u=r.aG(a)
if(H.E(r.x)){t=r.bb(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bj(u,s))a.preventDefault()}},
hR:function(a){var u,t,s,r=this
H.e(a,"$iah")
r.aZ(a)
u=r.aG(a)
if(H.E(r.x)){t=r.bb(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bi(u,s))a.preventDefault()},
hD:function(a){var u,t,s,r=this
H.e(a,"$iah")
if(!r.cg(a)){r.aZ(a)
u=r.aG(a)
if(H.E(r.x)){t=r.bb(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aI(a)
if(r.c.bi(u,s))a.preventDefault()}},
hV:function(a){var u,t,s=this
H.e(a,"$ibm")
s.aZ(a)
u=new V.a_((a&&C.H).gjz(a),C.H.gjA(a)).t(0,180)
if(H.E(s.x)){if(s.d.k9(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aI(a)
if(s.c.ka(u,t))a.preventDefault()},
hX:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aG(s.y)
t=s.aI(s.y)
s.d.hN(u,t,r)}},
ic:function(a){var u,t=this
H.e(a,"$ib1")
t.a.focus()
t.f=!0
t.cz(a)
u=t.cr(a)
if(t.e.k7(u))a.preventDefault()},
i8:function(a){var u
H.e(a,"$ib1")
this.cz(a)
u=this.cr(a)
if(this.e.k5(u))a.preventDefault()},
ia:function(a){var u
H.e(a,"$ib1")
this.cz(a)
u=this.cr(a)
if(this.e.k6(u))a.preventDefault()},
sh2:function(a){this.z=H.k(a,"$ib",[[P.cY,P.T]],"$ab")}}
D.bJ.prototype={
gv:function(){var u=this.d
return u==null?this.d=D.R():u},
aF:function(a){var u
H.e(a,"$iA")
u=this.d
if(u!=null)u.H(a)},
fC:function(){return this.aF(null)},
$iaa:1,
$ibe:1}
D.aa.prototype={$ibe:1}
D.dV.prototype={
gv:function(){var u=this.Q
return u==null?this.Q=D.R():u},
aF:function(a){var u=this.Q
if(u!=null)u.H(a)},
dT:function(a){var u
H.e(a,"$iA")
u=this.ch
if(u!=null)u.H(a)},
hM:function(){return this.dT(null)},
hZ:function(a){var u,t,s
H.k(a,"$ii",[D.aa],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.fA(s))return!1}return!0},
hn:function(a,b){var u,t,s,r,q,p,o,n=D.aa
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdS(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=H.e(b[q],"$iaa")
if(p instanceof D.bJ)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.c4()
o.sak(null)
o.saY(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bN([n])
n.b=!0
this.aF(n)},
i2:function(a,b){var u,t,s,r=D.aa
H.k(b,"$ii",[r],"$ai")
for(u=b.gW(b),t=this.gdS();u.F();){s=u.gL(u)
C.a.G(this.e,s)
s.gv().G(0,t)}r=new D.bO([r])
r.b=!0
this.aF(r)},
fA:function(a){var u=C.a.Z(this.e,a)
return u},
sh_:function(a){this.e=H.k(a,"$ib",[D.bJ],"$ab")},
sie:function(a){this.f=H.k(a,"$ib",[D.e8],"$ab")},
siG:function(a){this.r=H.k(a,"$ib",[D.eh],"$ab")},
siS:function(a){this.x=H.k(a,"$ib",[D.el],"$ab")},
siT:function(a){this.y=H.k(a,"$ib",[D.em],"$ab")},
siU:function(a){this.z=H.k(a,"$ib",[D.en],"$ab")},
$ai:function(){return[D.aa]},
$aa7:function(){return[D.aa]}}
D.e8.prototype={$iaa:1,$ibe:1}
D.eh.prototype={$iaa:1,$ibe:1}
D.el.prototype={$iaa:1,$ibe:1}
D.em.prototype={$iaa:1,$ibe:1}
D.en.prototype={$iaa:1,$ibe:1}
V.a8.prototype={
p:function(a,b){var u=C.e.p(this.a,b.gd9()),t=C.e.p(this.b,b.gc3()),s=C.e.p(this.c,b.gcG())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a8(u,t,s)},
u:function(a,b){var u=C.e.u(this.a,b.gd9()),t=C.e.u(this.b,b.gc3()),s=C.e.u(this.c,b.gcG())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a8(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.af.prototype={
de:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.t])},
p:function(a,b){var u=this,t=C.e.p(u.a,b.gd9()),s=C.e.p(u.b,b.gc3()),r=C.e.p(u.c,b.gcG()),q=C.e.p(u.d,b.gjn(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.af(t,s,r,q)},
u:function(a,b){var u=this,t=C.e.u(u.a,b.gd9()),s=C.e.u(u.b,b.gc3()),r=C.e.u(u.c,b.gcG()),q=C.e.u(u.d,b.gjn(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.af(t,s,r,q)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.h8.prototype={}
V.e1.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.Q().a
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
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.cp(H.d([q.a,q.d,q.r],p),3,0),n=V.cp(H.d([q.b,q.e,q.x],p),3,0),m=V.cp(H.d([q.c,q.f,q.y],p),3,0)
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
V.ax.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
cZ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.c9()
u=1/b1
t=-n
s=-a0
return V.bd((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bd(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
df:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bp:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.Q().a
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
J:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.cp(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cp(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cp(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cp(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.a2.prototype={
p:function(a,b){return new V.a2(this.a+b.a,this.b+b.b)},
u:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
t:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.bg()
return new V.a2(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.ll()
return new V.Z(this.a/b,this.b/b,this.c/b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.az.prototype={
p:function(a,b){var u=this
return new V.az(C.e.p(u.a,b.gkq(b)),C.e.p(u.b,b.gkr(b)),C.e.p(u.c,b.gks(b)),C.e.p(u.d,b.gkp(b)))},
u:function(a,b){var u=this
return new V.az(C.e.u(u.a,b.gkq(b)),C.e.u(u.b,b.gkr(b)),C.e.u(u.c,b.gks(b)),C.e.u(u.d,b.gkp(b)))},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.eb.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.eb))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.a_.prototype={
bh:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gek(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.gel(b)
if(typeof t!=="number")return t.p()
return new V.a_(s,C.e.p(t,u))},
u:function(a,b){var u,t=this.a,s=b.gek(b)
if(typeof t!=="number")return t.u()
s=C.e.u(t,s)
t=this.b
u=b.gel(b)
if(typeof t!=="number")return t.u()
return new V.a_(s,C.e.u(t,u))},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.a_(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.mq
return u==null?$.mq=new V.a_(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.a_(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.B.prototype={
bh:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d_:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aJ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.B(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.B(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.dc()
return new V.B(this.a/b,this.b/b,this.c/b)},
eR:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.b3.prototype={
bh:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.b3(u.a+b.a,u.b+b.b,u.c+b.c,u.d+b.d)},
u:function(a,b){var u=this
return new V.b3(C.e.u(u.a,b.gek(b)),C.e.u(u.b,b.gel(b)),C.e.u(u.c,b.gky()),C.e.u(u.d,b.gkx()))},
t:function(a,b){var u,t=this
if(Math.abs(b-0)<$.Q().a){u=$.mx
return u==null?$.mx=new V.b3(0,0,0,0):u}return new V.b3(t.a/b,t.b/b,t.c/b,t.d/b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
U.fQ.prototype={
c7:function(a){var u=V.pC(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.R():u},
T:function(a){var u=this.y
if(u!=null)u.H(a)},
sdh:function(a,b){},
sd0:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c7(u)}s=new D.N("maximumLocation",s,t.b,[P.t])
s.b=!0
t.T(s)}},
sd2:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c7(u)}s=new D.N("minimumLocation",s,t.c,[P.t])
s.b=!0
t.T(s)}},
sa1:function(a,b){var u,t=this
b=t.c7(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.N("location",u,b,[P.t])
u.b=!0
t.T(u)}},
sd1:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.t])
r.b=!0
s.T(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.N("velocity",t,a,[P.t])
t.b=!0
u.T(t)}},
scN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.N("dampening",u,a,[P.t])
u.b=!0
this.T(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dI.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.R():u},
b5:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cH.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.R():u},
T:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.H(a)},
ac:function(){return this.T(null)},
hl:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaT(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.T(n)},
i0:function(a,b){var u,t,s=U.ai
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.gaT();u.F();)u.gL(u).gv().G(0,t)
s=new D.bO([s])
s.b=!0
this.T(s)},
b5:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a_()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.v(r,0)]),u=null;r.F();){q=r.d
if(q!=null){t=q.b5(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.c9():u
r=s.e
if(r!=null)r.aE(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aa7:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.ew.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.R():u},
T:function(a){var u
H.e(a,"$iA")
u=this.cy
if(u!=null)u.H(a)},
ac:function(){return this.T(null)},
bd:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gej().h(0,u.gci())
u.a.c.geV().h(0,u.gck())
u.a.c.gc0().h(0,u.gcm())
return!0},
cj:function(a){var u=this
H.e(a,"$iA")
if(!J.O(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cl:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibw")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.u(0,a.y)
u=new V.a_(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.u(0,a.y)
u=new V.a_(t.a,t.b).w(0,2).t(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=new V.a_(s.a,s.b).w(0,2).t(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
n.b.sY(0)
t=t.u(0,a.z)
n.Q=new V.a_(t.a,t.b).w(0,2).t(0,u.gag())}n.ac()},
cn:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sY(t*10*s)
r.ac()}},
b5:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a_()
if(q<p){r.ch=p
u=b.y
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bd(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.ex.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.R():u},
T:function(a){var u
H.e(a,"$iA")
u=this.fx
if(u!=null)u.H(a)},
ac:function(){return this.T(null)},
bd:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gej().h(0,s.gci())
s.a.c.geV().h(0,s.gck())
s.a.c.gc0().h(0,s.gcm())
u=s.a.d
t=u.f
u=t==null?u.f=D.R():t
u.h(0,s.ghd())
u=s.a.d
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.ghf())
u=s.a.e
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.giP())
u=s.a.e
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.giN())
u=s.a.e
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.giL())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.a_(u,t)},
cj:function(a){var u=this
a=H.l(H.e(a,"$iA"),"$ibw")
if(!J.O(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cl:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibw")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.u(0,a.y)
u=new V.a_(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.ax(new V.a_(t.a,t.b).w(0,2).t(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ax(new V.a_(s.a,s.b).w(0,2).t(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.u(0,a.z)
n.dx=n.ax(new V.a_(t.a,t.b).w(0,2).t(0,u.gag()))}n.ac()},
cn:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sY(-t*10*u)
r.ac()}},
he:function(a){var u=this
if(H.l(H.e(a,"$iA"),"$idY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hg:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ibw")
if(!J.O(n.d,a.x.b))return
u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ax(new V.a_(s.a,s.b).w(0,2).t(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.u(0,a.z)
n.dx=n.ax(new V.a_(t.a,t.b).w(0,2).t(0,u.gag()))
n.ac()},
iQ:function(a){var u=this
H.e(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iO:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iA"),"$ieq")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.u(0,a.y)
u=new V.a_(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.u(0,a.y)
u=n.ax(new V.a_(t.a,t.b).w(0,2).t(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.u(0,a.y)
r=n.ax(new V.a_(s.a,s.b).w(0,2).t(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.u(0,a.z)
n.dx=n.ax(new V.a_(t.a,t.b).w(0,2).t(0,u.gag()))}n.ac()},
iM:function(a){var u,t,s,r=this
H.e(a,"$iA")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sY(-t*10*u)
r.ac()}},
b5:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a_()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bd(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.bd(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.ey.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.R():u},
T:function(a){var u=this.r
if(u!=null)u.H(a)},
bd:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.R():t
t=r.ghi()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.R():s).h(0,t)
return!0},
hj:function(a){var u,t,s,r,q=this
H.e(a,"$iA")
if(!J.O(q.b,q.a.b.c))return
H.l(a,"$icO")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.N("zoom",u,r,[P.t])
u.b=!0
q.T(u)}},
b5:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bd(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dH.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.R():u},
a3:function(a){var u
H.e(a,"$iA")
u=this.r
if(u!=null)u.H(a)},
b7:function(){return this.a3(null)},
i4:function(a,b){var u,t,s,r,q,p,o,n=M.aH
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga2(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.a3(n)},
i6:function(a,b){var u,t,s=M.aH
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.ga2();u.F();)u.gL(u).gv().G(0,t)
s=new D.bO([s])
s.b=!0
this.a3(s)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.F();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.aH]},
$aa7:function(){return[M.aH]},
$iaH:1}
M.dJ.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.R():u},
a3:function(a){var u
H.e(a,"$iA")
u=this.r
if(u!=null)u.H(a)},
b7:function(){return this.a3(null)},
sbe:function(a){var u,t,s=this
if(a==null)a=new X.ho()
u=s.b
if(u!==a){if(u!=null)u.gv().G(0,s.ga2())
t=s.b
s.b=a
a.gv().h(0,s.ga2())
u=new D.N("camera",t,s.b,[X.c0])
u.b=!0
s.a3(u)}},
sbl:function(a,b){var u,t,s=this
if(b==null)b=X.ld(null)
u=s.c
if(u!==b){if(u!=null)u.gv().G(0,s.ga2())
t=s.c
s.c=b
b.gv().h(0,s.ga2())
u=new D.N("target",t,s.c,[X.d_])
u.b=!0
s.a3(u)}},
sbm:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().G(0,t.ga2())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.ga2())
s=new D.N("technique",u,t.d,[O.bS])
s.b=!0
t.a3(s)}},
ah:function(a){var u=this
a.d6(u.d)
u.c.a5(a)
u.b.a5(a)
u.e.av(0,a)
u.e.ah(a)
u.b.aP(a)
u.c.toString
a.d5()},
$iaH:1}
M.dN.prototype={
a3:function(a){var u
H.e(a,"$iA")
u=this.y
if(u!=null)u.H(a)},
b7:function(){return this.a3(null)},
hx:function(a,b){var u,t,s,r,q,p,o,n=E.ar
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga2(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sak(null)
o.saY(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bN([n])
n.b=!0
this.a3(n)},
hz:function(a,b){var u,t,s=E.ar
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.ga2();u.F();)u.gL(u).gv().G(0,t)
s=new D.bO([s])
s.b=!0
this.a3(s)},
sbe:function(a){var u,t,s=this
if(a==null)a=X.m8(null)
u=s.b
if(u!==a){if(u!=null)u.gv().G(0,s.ga2())
t=s.b
s.b=a
a.gv().h(0,s.ga2())
u=new D.N("camera",t,s.b,[X.c0])
u.b=!0
s.a3(u)}},
sbl:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gv().G(0,t.ga2())
u=t.c
t.c=b
b.gv().h(0,t.ga2())
s=new D.N("target",u,t.c,[X.d_])
s.b=!0
t.a3(s)}},
sbm:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().G(0,t.ga2())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.ga2())
s=new D.N("technique",u,t.d,[O.bS])
s.b=!0
t.a3(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.R():u},
ah:function(a){var u,t=this
a.d6(t.d)
t.c.a5(a)
t.b.a5(a)
u=t.d
if(u!=null)u.av(0,a)
for(u=t.e.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.F();)u.d.av(0,a)
for(u=t.e.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.F();)u.d.ah(a)
t.b.toString
a.cy.aN()
a.db.aN()
t.c.toString
a.d5()},
sfU:function(a,b){this.e=H.k(b,"$ia7",[E.ar],"$aa7")},
$iaH:1}
M.aH.prototype={}
A.dD.prototype={}
A.fF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ei:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.e0.prototype={
fs:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
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
d1.iY(u)
d1.j4(u)
d1.iZ(u)
d1.jc(u)
d1.jd(u)
d1.j6(u)
d1.jh(u)
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
q.j1(u)
q.iX(u)
q.j_(u)
q.j2(u)
q.ja(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.j8(u)
q.j9(u)}q.j5(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
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
case C.i:m+=c7
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.j0(u)
q.j7(u)
q.jb(u)
q.je(u)
q.jf(u)
q.jg(u)
q.j3(u)}m=u.a+="// === Main ===\n"
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
a6.eQ(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.l(a6.y.q(0,"invViewMat"),"$iaB")
if(t)a6.dy=H.l(a6.y.q(0,"objMat"),"$iaB")
if(r)a6.fr=H.l(a6.y.q(0,"viewObjMat"),"$iaB")
a6.fy=H.l(a6.y.q(0,"projViewObjMat"),"$iaB")
if(d1.x2)a6.k1=H.l(a6.y.q(0,"txt2DMat"),"$id5")
if(d1.y1)a6.k2=H.l(a6.y.q(0,"txtCubeMat"),"$iaB")
if(d1.y2)a6.k3=H.l(a6.y.q(0,"colorMat"),"$iaB")
a6.sfQ(H.d([],[A.aB]))
t=d1.aC
if(t>0){a6.k4=H.e(a6.y.q(0,"bendMatCount"),"$iS")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.r(a7+q+a8));(s&&C.a).h(s,H.l(g,"$iaB"))}}t=d1.a
if(t!==C.d){a6.r2=H.l(a6.y.q(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.rx=H.l(a6.y.q(0,a9),"$ias")
a6.x1=H.l(a6.y.q(0,b0),"$iS")
break
case C.h:a6.ry=H.l(a6.y.q(0,a9),"$iao")
a6.x1=H.l(a6.y.q(0,b0),"$iS")
break}}t=d1.b
if(t!==C.d){a6.x2=H.l(a6.y.q(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.y1=H.l(a6.y.q(0,b1),"$ias")
a6.aC=H.l(a6.y.q(0,b2),"$iS")
break
case C.h:a6.y2=H.l(a6.y.q(0,b1),"$iao")
a6.aC=H.l(a6.y.q(0,b2),"$iS")
break}}t=d1.c
if(t!==C.d){a6.as=H.l(a6.y.q(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.bD=H.l(a6.y.q(0,b3),"$ias")
a6.bE=H.l(a6.y.q(0,b4),"$iS")
break
case C.h:a6.em=H.l(a6.y.q(0,b3),"$iao")
a6.bE=H.l(a6.y.q(0,b4),"$iS")
break}}t=d1.d
if(t!==C.d){a6.bF=H.l(a6.y.q(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.en=H.l(a6.y.q(0,b5),"$ias")
a6.bG=H.l(a6.y.q(0,b6),"$iS")
break
case C.h:a6.eo=H.l(a6.y.q(0,b5),"$iao")
a6.bG=H.l(a6.y.q(0,b6),"$iS")
break}}t=d1.e
if(t!==C.d){a6.bJ=H.l(a6.y.q(0,"shininess"),"$ia4")
a6.bH=H.l(a6.y.q(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.ep=H.l(a6.y.q(0,b7),"$ias")
a6.bI=H.l(a6.y.q(0,b8),"$iS")
break
case C.h:a6.eq=H.l(a6.y.q(0,b7),"$iao")
a6.bI=H.l(a6.y.q(0,b8),"$iS")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.i:a6.er=H.l(a6.y.q(0,"bumpTxt"),"$ias")
a6.bK=H.l(a6.y.q(0,b9),"$iS")
break
case C.h:a6.es=H.l(a6.y.q(0,"bumpTxt"),"$iao")
a6.bK=H.l(a6.y.q(0,b9),"$iS")
break}if(d1.dy){a6.eu=H.l(a6.y.q(0,"envSampler"),"$iao")
a6.ev=H.l(a6.y.q(0,"nullEnvTxt"),"$iS")
t=d1.r
if(t!==C.d){a6.bL=H.l(a6.y.q(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.ew=H.l(a6.y.q(0,c0),"$ias")
a6.bM=H.l(a6.y.q(0,c1),"$iS")
break
case C.h:a6.ex=H.l(a6.y.q(0,c0),"$iao")
a6.bM=H.l(a6.y.q(0,c1),"$iS")
break}}t=d1.x
if(t!==C.d){a6.bN=H.l(a6.y.q(0,"refraction"),"$ia4")
a6.bO=H.l(a6.y.q(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.i:a6.ey=H.l(a6.y.q(0,c2),"$ias")
a6.bP=H.l(a6.y.q(0,c3),"$iS")
break
case C.h:a6.ez=H.l(a6.y.q(0,c2),"$iao")
a6.bP=H.l(a6.y.q(0,c3),"$iS")
break}}}t=d1.y
if(t!==C.d){a6.bQ=H.l(a6.y.q(0,"alpha"),"$ia4")
switch(t){case C.d:break
case C.j:break
case C.i:a6.eA=H.l(a6.y.q(0,c4),"$ias")
a6.bR=H.l(a6.y.q(0,c5),"$iS")
break
case C.h:a6.eB=H.l(a6.y.q(0,c4),"$iao")
a6.bR=H.l(a6.y.q(0,c5),"$iS")
break}}a6.sfD(H.d([],[A.d4]))
a6.sfE(H.d([],[A.d6]))
a6.sfF(H.d([],[A.d7]))
a6.sfG(H.d([],[A.d8]))
a6.sfH(H.d([],[A.d9]))
a6.sfI(H.d([],[A.da]))
if(d1.k2){t=d1.z
if(t>0){a6.eC=H.e(a6.y.q(0,"dirLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.cP;(s&&C.a).h(s,new A.d4(g,f))}}t=d1.Q
if(t>0){a6.eD=H.e(a6.y.q(0,"pntLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.l(e,"$iP")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.l(d,"$ia4")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.l(c,"$ia4")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.l(b,"$ia4")
s=a6.cQ;(s&&C.a).h(s,new A.d6(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eE=H.e(a6.y.q(0,"spotLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.l(e,"$iP")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.l(d,"$iP")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.l(c,"$ia4")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.l(b,"$ia4")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.l(a,"$ia4")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.l(a1,"$ia4")
s=a6.cR;(s&&C.a).h(s,new A.d7(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eF=H.e(a6.y.q(0,"txtDirLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.l(e,"$iP")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.l(d,"$iP")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.l(c,"$iP")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.l(b,"$iS")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.l(a,"$ias")
s=a6.cS;(s&&C.a).h(s,new A.d8(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.eG=H.e(a6.y.q(0,"txtPntLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.l(e,"$id5")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.l(d,"$iP")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.l(c,"$iS")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.l(b,"$ia4")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.l(a,"$ia4")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.l(a1,"$iao")
s=a6.cT;(s&&C.a).h(s,new A.d9(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eH=H.e(a6.y.q(0,"txtSpotLightCount"),"$iS")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.l(g,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.l(f,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.l(e,"$iP")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.l(d,"$iP")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.l(c,"$iP")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.l(b,"$iS")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.l(a,"$iP")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.l(a1,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.r(a7+r+a8))
H.l(a2,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.r(a7+r+a8))
H.l(a3,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.r(a7+r+a8))
H.l(a4,"$ia4")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.r(a7+r+a8))
H.l(a5,"$ias")
s=a6.cU;(s&&C.a).h(s,new A.da(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){C.c.a7(b.a,b.d,1)},
al:function(a,b,c){if(c==null||c.d<6)C.c.a7(b.a,b.d,1)
else{a.dl(c)
C.c.a7(b.a,b.d,0)}},
sfQ:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfD:function(a){this.cP=H.k(a,"$ib",[A.d4],"$ab")},
sfE:function(a){this.cQ=H.k(a,"$ib",[A.d6],"$ab")},
sfF:function(a){this.cR=H.k(a,"$ib",[A.d7],"$ab")},
sfG:function(a){this.cS=H.k(a,"$ib",[A.d8],"$ab")},
sfH:function(a){this.cT=H.k(a,"$ib",[A.d9],"$ab")},
sfI:function(a){this.cU=H.k(a,"$ib",[A.da],"$ab")}}
A.hL.prototype={
iY:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aC+"];\n"
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
j4:function(a){var u
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
iZ:function(a){var u
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
jc:function(a){var u,t
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
jd:function(a){var u,t
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
j6:function(a){var u
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
jh:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aw(c,1))+"Txt;\n")
if(b===C.i)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j1:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aH(a,s,"emission")
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
iX:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aH(a,s,"ambient")
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
j_:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aH(a,s,"diffuse")
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
j2:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aH(a,s,"invDiffuse")
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
ja:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aH(a,s,"specular")
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
j5:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
j8:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aH(a,s,"reflect")
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
j9:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aH(a,s,"refract")
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
j0:function(a){var u,t=this.z
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
j7:function(a){var u,t=this.Q
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
jb:function(a){var u,t=this.ch
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
je:function(a){var u,t,s=this.cx
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
jf:function(a){var u,t,s=this.cy
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
jg:function(a){var u,t,s=this.db
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
j3:function(a){var u
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
i:function(a){return this.as}}
A.d4.prototype={}
A.d8.prototype={}
A.d6.prototype={}
A.d9.prototype={}
A.d7.prototype={}
A.da.prototype={}
A.cW.prototype={
dr:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eQ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dK(b,35633)
r.f=r.dK(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.E(H.lA(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.r("Failed to link shader: "+H.m(s)))}r.iB()
r.iD()},
a5:function(a){a.a.useProgram(this.r)
this.x.jC()},
dK:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.lA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
iB:function(){var u,t,s,r=this,q=H.d([],[A.dD]),p=r.a,o=H.al(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dD(p,t.name,s))}r.x=new A.fF(q)},
iD:function(){var u,t,s,r=this,q=H.d([],[A.er]),p=r.a,o=H.al(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jy(t.type,t.size,t.name,s))}r.y=new A.j6(q)},
aW:function(a,b,c){var u=this.a
if(a===1)return new A.S(u,b,c)
else return A.lo(u,this.r,b,a,c)},
fX:function(a,b,c){var u=this.a
if(a===1)return new A.as(u,b,c)
else return A.lo(u,this.r,b,a,c)},
fY:function(a,b,c){var u=this.a
if(a===1)return new A.ao(u,b,c)
else return A.lo(u,this.r,b,a,c)},
bx:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jy:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aW(b,c,d)
case 5121:return u.aW(b,c,d)
case 5122:return u.aW(b,c,d)
case 5123:return u.aW(b,c,d)
case 5124:return u.aW(b,c,d)
case 5125:return u.aW(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.j1(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.j4(u.a,c,d)
case 35667:return new A.j2(u.a,c,d)
case 35668:return new A.j3(u.a,c,d)
case 35669:return new A.j5(u.a,c,d)
case 35674:return new A.j7(u.a,c,d)
case 35675:return new A.d5(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.fX(b,c,d)
case 35680:return u.fY(b,c,d)
case 35670:throw H.c(u.bx("BOOL",c))
case 35671:throw H.c(u.bx("BOOL_VEC2",c))
case 35672:throw H.c(u.bx("BOOL_VEC3",c))
case 35673:throw H.c(u.bx("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c3.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.er.prototype={}
A.j6.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.S.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siV:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d5.prototype={
aq:function(a){var u=new Float32Array(H.ck(H.k(a,"$ib",[P.t],"$ab")))
C.c.fa(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aB.prototype={
aq:function(a){var u=new Float32Array(H.ck(H.k(a,"$ib",[P.t],"$ab")))
C.c.fb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.as.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ao.prototype={
dl:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kr.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.d_(s.b,b).d_(s.d.d_(s.c,b),c)
a.sa1(0,new V.Z(r.a,r.b,r.c))
a.sau(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.seb(new V.az(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kB.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:16}
F.kD.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sa1(0,new V.Z(s,u,q))
u=new V.B(s,u,q)
a.sau(u.t(0,Math.sqrt(u.C(u))))
a.seb(new V.az(1-c,2+c,-1,-1))},
$S:5}
F.kE.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:29}
F.kF.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:29}
F.kN.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.B(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.t(0,Math.sqrt(r.C(r)))
a.sa1(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.l1.prototype={
$2:function(a,b){return 0},
$S:16}
F.l2.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.B(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).w(0,this.b+s)
a.sa1(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.l4.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kM.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lN(n.$1(o),m)
m=J.nt(J.lN(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.B(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.C(m)))
n=$.ms
if(n==null){n=new V.B(1,0,0)
$.ms=n
t=n}else t=n
n=u.aJ(!J.O(u,t)?V.mw():t)
s=n.t(0,Math.sqrt(n.C(n)))
n=s.aJ(u)
t=n.t(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.sa1(0,J.ns(l,new V.Z(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.ac.prototype={
bf:function(){var u=this
if(!u.gbg()){C.a.G(u.a.a.d.b,u)
u.a.a.X()}u.ct()
u.cu()
u.ik()},
cA:function(a){this.a=a
C.a.h(a.d.b,this)},
cB:function(a){this.b=a
C.a.h(a.d.c,this)},
iA:function(a){this.c=a
C.a.h(a.d.d,this)},
ct:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
cu:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
ik:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gbg:function(){return this.a==null||this.b==null||this.c==null},
fP:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dc()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eR())return
return s.t(0,Math.sqrt(s.C(s)))},
fT:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.u(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.u(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.aJ(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
cJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.fP()
if(u==null){u=t.fT()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
fO:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dc()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eR())return
return s.t(0,Math.sqrt(s.C(s)))},
fS:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.u(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.u(0,g).w(0,p).p(0,g).u(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aJ(q)
l=l.t(0,Math.sqrt(l.C(l))).aJ(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
cH:function(){var u,t=this
if(t.e!=null)return!0
u=t.fO()
if(u==null){u=t.fS()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
aV:function(a,b){var u=b.a
if(u==null)throw H.c(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gjt:function(a){var u=this
if(J.O(u.a,u.b))return!0
if(J.O(u.b,u.c))return!0
if(J.O(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gbg())return a+"disposed"
u=a+C.b.ap(J.av(s.a.e),0)+", "+C.b.ap(J.av(s.b.e),0)+", "+C.b.ap(J.av(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.hb.prototype={}
F.iw.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bv.prototype={
bf:function(){var u=this
if(!u.gbg()){C.a.G(u.a.a.c.b,u)
u.a.a.X()}u.ct()
u.cu()},
cA:function(a){this.a=a
C.a.h(a.c.b,this)},
cB:function(a){this.b=a
C.a.h(a.c.c,this)},
ct:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
cu:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gbg:function(){return this.a==null||this.b==null},
aV:function(a,b){var u=b.a
if(u==null)throw H.c(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){if(this.gbg())return a+"disposed"
return a+C.b.ap(J.av(this.a.e),0)+", "+C.b.ap(J.av(this.b.e),0)},
R:function(){return this.J("")}}
F.hw.prototype={}
F.j_.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
return t==u.e}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
return t==u.e}else return!1}}}
F.bR.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ap(J.av(u.e),0)},
R:function(){return this.J("")}}
F.ed.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.R():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.D()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.jv())}h.a.D()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bR()
if(n.a==null)H.u(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.H(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.D()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nU(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.D()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.D()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.D()
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
F.c5(l,k,i)}g=h.e
if(g!=null)g.aE(0)},
am:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.am()||!1
if(!t.a.am())u=!1
s=t.e
if(s!=null)s.aE(0)
return u},
jF:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.h(t,u)
s=t[u]
if(b.b2(0,a,s))return s}return},
io:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.ab],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.F)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.u(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.O(q,s)){r.aV(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.O(r.b,s)){r.aV(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.O(r.c,s)){r.aV(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.H(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.u(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.O(q,s)){r.aV(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.O(r.b,s)){r.aV(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.H(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.u(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.O(q,s)){if(a.a==null)H.u(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.H(null)}}this.a.G(0,s)}},
eU:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.v(n,0)])
for(n=[F.ab];u.length!==0;){t=C.a.gjH(u)
C.a.f1(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.f1(u,r)}}if(s.length>1){p=b.b3(s)
if(p!=null){o.io(p,s)
C.a.h(u,p)}}}}o.a.D()
o.c.bY()
o.d.bY()
o.b.kd()
o.c.da(new F.j_())
o.d.da(new F.iw())
n=o.e
if(n!=null)n.aE(0)},
bA:function(){this.eU(new F.dd(),new F.i1())},
ef:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b4()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bB().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.dy().a)!==0)++s
if((t&$.dz().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.bz().a)!==0)++s
r=a3.gdm(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dF])
for(n=0,m=0;m<s;++m){l=a3.jp(m)
k=l.gdm(l)
C.a.n(o,m,new Z.dF(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jS(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ck(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cz(new Z.ez(a0,f),o,a3)
e.sh8(H.d([],[Z.bM]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bM(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bM(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.D()
C.a.h(d,c.e)}b=Z.lr(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bM(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.J(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.J(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.J(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.J(t))}return C.a.m(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.H(null)},
$ipK:1}
F.ip.prototype={
by:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c5(b,c,d)},
e6:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ab],"$ab")
u=H.d([],[F.ac])
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
C.a.h(u,F.c5(s,p,o))}}return u},
jk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ab],"$ab")
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
C.a.h(u,F.c5(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c5(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c5(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c5(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
da:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.bf()
break}}}}},
bY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjt(s)
if(t)s.bf()}},
am:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cJ())s=!1
return s},
cI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cH())s=!1
return s},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
R:function(){return this.J("")},
sh3:function(a){this.b=H.k(a,"$ib",[F.ac],"$ab")}}
F.iq.prototype={
gl:function(a){return this.b.length},
da:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.bf()
break}}}}},
bY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.O(s.a,s.b)
if(t)s.bf()}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].J(a+(""+u+". ")))}return C.a.m(s,"\n")},
R:function(){return this.J("")},
sh9:function(a){this.b=H.k(a,"$ib",[F.bv],"$ab")}}
F.ir.prototype={
gl:function(a){return this.b.length},
kd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
R:function(){return this.J("")},
scq:function(a){this.b=H.k(a,"$ib",[F.bR],"$ab")}}
F.ab.prototype={
cM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ch(u.cx,r,o,t,s,q,p,a,n)},
jv:function(){return this.cM(null)},
sa1:function(a,b){var u
if(!J.O(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sd3:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.C(a)))
if(!J.O(this.r,a)){this.r=a
u=this.a
if(u!=null)u.X()}},
sed:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.C(a)))
if(!J.O(this.x,a)){this.x=a
u=this.a
if(u!=null)u.X()}},
sdd:function(a){var u
if(!J.O(this.y,a)){this.y=a
u=this.a
if(u!=null)u.X()}},
sau:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
saf:function(a,b){var u
if(!J.O(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.X()}},
sfe:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.X()}},
seb:function(a){var u
if(!J.O(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.X()}},
jS:function(a){var u,t,s=this
if(a.A(0,$.b4())){u=s.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bB())){u=s.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bA())){u=s.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bC())){u=s.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bD())){u=s.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dy())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.dz())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.t])
else return u.de(0)}else if(a.A(0,$.cv()))return H.d([s.ch],[P.t])
else if(a.A(0,$.bz())){u=s.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
cJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dc()
t.d.N(0,new F.jw(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
cH:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dc()
t.d.N(0,new F.jv(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ap(J.av(s.e),0))
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
C.a.h(q,V.W(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
R:function(){return this.J("")}}
F.jw.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jv.prototype={
$1:function(a){var u,t
H.e(a,"$iac")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jm.prototype={
D:function(){var u,t,s,r
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
u.X()
return!0},
e7:function(a,b,c,d,e,f,g){var u=F.ch(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bz:function(a,b,c,d,e,f){return this.e7(a,b,c,null,d,e,f)},
jl:function(a,b,c,d,e,f){return this.e7(a,b,c,d,e,f,null)},
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
u.X()
return this.b=!0},
am:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cJ()
return!0},
cI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cH()
return!0},
js:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.R()},
J:function(a){var u,t,s,r
this.D()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
R:function(){return this.J("")},
siW:function(a){this.c=H.k(a,"$ib",[F.ab],"$ab")}}
F.jn.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.ac]})
C.a.N(u.b,b)
C.a.N(u.c,new F.jo(u,b))
C.a.N(u.d,new F.jp(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sh4:function(a){this.b=H.k(a,"$ib",[F.ac],"$ab")},
sh5:function(a){this.c=H.k(a,"$ib",[F.ac],"$ab")},
sh6:function(a){this.d=H.k(a,"$ib",[F.ac],"$ab")}}
F.jo.prototype={
$1:function(a){H.e(a,"$iac")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:10}
F.jp.prototype={
$1:function(a){var u
H.e(a,"$iac")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:10}
F.jr.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sha:function(a){this.b=H.k(a,"$ib",[F.bv],"$ab")},
shb:function(a){this.c=H.k(a,"$ib",[F.bv],"$ab")}}
F.js.prototype={}
F.dd.prototype={
b2:function(a,b,c){return J.O(b.f,c.f)}}
F.jt.prototype={}
F.jq.prototype={
b3:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.k(a5,"$ib",[F.ab],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.Z(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.B(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.B(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a2(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.B(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b3(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b3(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.D(a)
i+=a;++j}a3=F.ch(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa1(0,a4)
else a3.sa1(0,o.t(0,n))
if(p==null)a3.sd3(a4)
else a3.sd3(p.t(0,Math.sqrt(p.C(p))))
if(q==null)a3.sed(a4)
else a3.sed(q.t(0,Math.sqrt(q.C(q))))
if(l<=0||s==null)a3.sdd(a4)
else a3.sdd(s.t(0,l))
if(k<=0||t==null)a3.sau(a4)
else a3.sau(t.t(0,k))
if(m<=0||r==null)a3.saf(0,a4)
else{u=r.t(0,m)
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
a3.saf(0,new V.af(a,a0,a1,u))}if(j<=0)a3.sfe(0,0)
else a3.sfe(0,i/j)
return a3}}
F.i1.prototype={
b3:function(a){var u,t,s,r
H.k(a,"$ib",[F.ab],"$ab")
u=V.dc()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.B(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.C(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.F)(a),++s)a[s].sd3(u)
return}}
F.ju.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
scq:function(a){this.b=H.k(a,"$ib",[F.bR],"$ab")}}
O.e_.prototype={
gv:function(){var u=this.dy
return u==null?this.dy=D.R():u},
V:function(a){var u
H.e(a,"$iA")
u=this.dy
if(u!=null)u.H(a)},
b8:function(){return this.V(null)},
dY:function(a){H.e(a,"$iA")
this.a=null
this.V(a)},
ir:function(){return this.dY(null)},
hp:function(a,b){var u=V.ax
H.k(b,"$ii",[u],"$ai")
u=new D.bN([u])
u.b=!0
this.V(u)},
hr:function(a,b){var u=V.ax
H.k(b,"$ii",[u],"$ai")
u=new D.bO([u])
u.b=!0
this.V(u)},
dH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a9(a1.e.length+3,4)*4,a3=C.f.a9(a1.f.length+3,4)*4,a4=C.f.a9(a1.r.length+3,4)*4,a5=C.f.a9(a1.x.length+3,4)*4,a6=C.f.a9(a1.y.length+3,4)*4,a7=C.f.a9(a1.z.length+3,4)*4,a8=C.f.a9(a0.e.a.length+3,4)*4
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
a=$.b4()
if(h){j=$.bB()
a=new Z.bl(a.a|j.a)}if(g){j=$.bA()
a=new Z.bl(a.a|j.a)}if(f){j=$.bC()
a=new Z.bl(a.a|j.a)}if(e){j=$.bD()
a=new Z.bl(a.a|j.a)}if(c){j=$.bz()
a=new Z.bl(a.a|j.a)}return new A.hL(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
a0:function(a,b){H.k(a,"$ib",[T.d1],"$ab")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.F();){t=u.d
t.toString
s=$.jl
if(s==null)s=$.jl=new V.B(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.df(s)}}},
f2:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dH()
u=H.e(a3.fr.j(0,a2.as),"$ie0")
if(u==null){u=A.o_(a2,a3.a)
a3.e9(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bD
a2=a4.e
if(!(a2 instanceof Z.cz))a2=a4.e=null
if(a2==null||!a2.d.A(0,s)){a2=t.r1
if(a2)a4.d.am()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cI()
q.a.cI()
q=q.e
if(q!=null)q.aE(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.js()
p=p.e
if(p!=null)p.aE(0)}n=a4.d.ef(new Z.eA(a3.a),s)
n.aK($.b4()).e=a1.a.Q.c
if(a2)n.aK($.bB()).e=a1.a.cx.c
if(r)n.aK($.bA()).e=a1.a.ch.c
if(t.rx)n.aK($.bC()).e=a1.a.cy.c
if(q)n.aK($.bD()).e=a1.a.db.c
if(t.x1)n.aK($.bz()).e=a1.a.dx.c
a4.e=n}a2=T.d1
m=H.d([],[a2])
a1.a.a5(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga6(q)
r=r.dy
r.toString
r.aq(q.ai(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga6(q)
p=a3.dx
p=a3.cx=q.w(0,p.ga6(p))
q=p}r=r.fr
r.toString
r.aq(q.ai(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gkb()
p=a3.dx
p=a3.ch=q.w(0,p.ga6(p))
q=p}r=r.fy
r.toString
r.aq(q.ai(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.aq(C.n.ai(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.aq(C.n.ai(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.aq(C.n.ai(q,!0))}if(t.aC>0){l=a1.e.a.length
r=a1.a.k4
C.c.a7(r.a,r.d,l)
for(r=[P.t],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iax")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.ck(H.k(p.ai(0,!0),"$ib",r,"$ab")))
C.c.fb(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.i:a1.a0(m,a1.f.d)
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
case C.h:a1.a0(m,a1.f.e)
r=a1.a
q=a1.f.e
r.al(r.ry,r.x1,q)
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
case C.i:a1.a0(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ar(r.y1,r.aC,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.h:a1.a0(m,a1.r.e)
r=a1.a
q=a1.r.e
r.al(r.y2,r.aC,q)
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
r=r.as
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.i:a1.a0(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ar(r.bD,r.bE,q)
q=a1.a
r=a1.x.f
q=q.as
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.h:a1.a0(m,a1.x.e)
r=a1.a
q=a1.x.e
r.al(r.em,r.bE,q)
q=a1.a
r=a1.x.f
q=q.as
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bF
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.i:a1.a0(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ar(r.en,r.bG,q)
q=a1.a
r=a1.y.f
q=q.bF
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.h:a1.a0(m,a1.y.e)
r=a1.a
q=a1.y.e
r.al(r.eo,r.bG,q)
q=a1.a
r=a1.y.f
q=q.bF
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bH
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bJ
C.c.O(q.a,q.d,o)
break
case C.i:a1.a0(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ar(r.ep,r.bI,q)
q=a1.a
r=a1.z.f
q=q.bH
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bJ
C.c.O(r.a,r.d,o)
break
case C.h:a1.a0(m,a1.z.e)
r=a1.a
q=a1.z.e
r.al(r.eq,r.bI,q)
q=a1.a
r=a1.z.f
q=q.bH
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bJ
C.c.O(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.eC
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cP
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.df(f.a)
o=p.a
d=p.b
c=p.c
c=p.t(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.B(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.c.B(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.eD
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cQ
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbk(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bp(f.gbk(f))
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gaf(f)
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcC()
o=e.e
C.c.O(o.a,o.d,p)
p=f.gcD()
o=e.f
C.c.O(o.a,o.d,p)
p=f.gcE()
o=e.r
C.c.O(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eE
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cR
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbk(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcO(f).kA()
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bp(f.gbk(f))
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gaf(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkw()
o=e.f
C.c.O(o.a,o.d,p)
p=f.gkv()
o=e.r
C.c.O(o.a,o.d,p)
p=f.gcC()
o=e.x
C.c.O(o.a,o.d,p)
p=f.gcD()
o=e.y
C.c.O(o.a,o.d,p)
p=f.gcE()
o=e.z
C.c.O(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eF
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
o=a1.a.cS
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbn()
H.k(m,"$ib",p,"$ab")
if(!C.a.Z(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcO(f)
d=e.d
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gc0()
d=e.b
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gbZ(f)
d=e.c
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=i.df(f.gcO(f))
d=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.B(c.a,c.d,d,o,b)
b=f.gaf(f)
o=e.f
C.c.B(o.a,o.d,b.a,b.b,b.c)
b=f.gbn()
o=b.gbT(b)
if(!o){o=e.x
C.c.a7(o.a,o.d,1)}else{o=e.r
d=b.gbT(b)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.gjM(b))
o=e.x
C.c.a7(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.eG
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.y,q=r.length,p=[P.t],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
d=a1.a.cT
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbn()
H.k(m,"$ib",o,"$ab")
if(!C.a.Z(m,d)){d.a=m.length
C.a.h(m,d)}a=i.w(0,f.ga6(f))
d=f.ga6(f)
c=$.cT
d=d.bp(c==null?$.cT=new V.Z(0,0,0):c)
c=e.b
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=$.cT
d=a.bp(d==null?$.cT=new V.Z(0,0,0):d)
c=e.c
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=a.cZ(0)
c=e.d
j=new Float32Array(H.ck(H.k(new V.e1(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ai(0,!0),"$ib",p,"$ab")))
C.c.fa(c.a,c.d,!1,j)
c=f.gaf(f)
d=e.e
C.c.B(d.a,d.d,c.a,c.b,c.c)
c=f.gbn()
d=c.gbT(c)
if(!d){d=e.r
C.c.a7(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a7(d.a,d.d,0)}d=f.gcC()
c=e.x
C.c.O(c.a,c.d,d)
d=f.gcD()
c=e.y
C.c.O(c.a,c.d,d)
d=f.gcE()
c=e.z
C.c.O(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.eH
C.c.a7(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cU
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbn()
H.k(m,"$ib",a2,"$ab")
if(!C.a.Z(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gbk(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcO(f)
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gc0()
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbZ(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bp(f.gbk(f))
o=e.f
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbn()
o=p.gbT(p)
if(!o){p=e.x
C.c.a7(p.a,p.d,1)}else{o=e.r
d=p.gbT(p)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.gjM(p))
p=e.x
C.c.a7(p.a,p.d,0)}p=f.gaf(f)
o=e.y
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkB()
o=e.z
C.c.O(o.a,o.d,p)
p=f.gkC()
o=e.Q
C.c.O(o.a,o.d,p)
p=f.gcC()
o=e.ch
C.c.O(o.a,o.d,p)
p=f.gcD()
o=e.cx
C.c.O(o.a,o.d,p)
p=f.gcE()
o=e.cy
C.c.O(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.i:a1.a0(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ar(a2.er,a2.bK,r)
break
case C.h:a1.a0(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.al(a2.es,a2.bK,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga6(r).cZ(0)}a2=a2.id
a2.toString
a2.aq(r.ai(0,!0))}if(t.dy){a1.a0(m,a1.ch)
a2=a1.a
r=a1.ch
a2.al(a2.eu,a2.ev,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bL
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
break
case C.i:a1.a0(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ar(a2.ew,a2.bM,r)
r=a1.a
a2=a1.cx.f
r=r.bL
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break
case C.h:a1.a0(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.al(a2.ex,a2.bM,r)
r=a1.a
a2=a1.cx.f
r=r.bL
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bO
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bN
C.c.O(r.a,r.d,p)
break
case C.i:a1.a0(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ar(a2.ey,a2.bP,r)
r=a1.a
a2=a1.cy.f
r=r.bO
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bN
C.c.O(a2.a,a2.d,p)
break
case C.h:a1.a0(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.al(a2.ez,a2.bP,r)
r=a1.a
a2=a1.cy.f
r=r.bO
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bN
C.c.O(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bQ
C.c.O(a2.a,a2.d,q)
break
case C.i:a1.a0(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ar(a2.eA,a2.bR,q)
q=a1.a
a2=a1.db.f
q=q.bQ
C.c.O(q.a,q.d,a2)
break
case C.h:a1.a0(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.al(a2.eB,a2.bR,q)
q=a1.a
a2=a1.db.f
q=q.bQ
C.c.O(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a5(a3)
a2=a4.e
a2.a5(a3)
a2.ah(a3)
a2.aP(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.ei()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dH().as},
sfR:function(a){this.e=H.k(a,"$ia7",[V.ax],"$aa7")}}
O.hJ.prototype={
iw:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.N(u.b,t,a,[P.t])
t.b=!0
u.a.V(t)}},
az:function(){this.dq()
this.iw(1)}}
O.cL.prototype={
V:function(a){this.a.V(H.e(a,"$iA"))},
b8:function(){return this.V(null)},
az:function(){},
iy:function(a){},
iz:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gv().G(0,t.gaU())
u=t.e
t.e=a
if(a!=null)a.gv().h(0,t.gaU())
s=new D.N(t.b+".textureCube",u,t.e,[T.cg])
s.b=!0
t.a.V(s)}},
sau:function(a){var u=this,t=u.c
if(t!==C.h){if(t===C.d)u.az()
u.c=C.h
u.iy(null)
t=u.a
t.a=null
t.V(null)}u.iz(a)}}
O.hK.prototype={}
O.bc.prototype={
e_:function(a){var u,t,s=this
if(!J.O(s.f,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.a8])
t.b=!0
s.a.V(t)}},
az:function(){this.dq()
this.e_(new V.a8(1,1,1))},
saf:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.az()
u=t.a
u.a=null
u.V(null)}t.e_(b)}}
O.hM.prototype={
ix:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.N(u.b+".refraction",t,a,[P.t])
t.b=!0
u.a.V(t)}},
az:function(){this.c6()
this.ix(1)}}
O.hN.prototype={
cv:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.V(t)}},
az:function(){this.c6()
this.cv(100)}}
O.ef.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.R():u},
V:function(a){var u
H.e(a,"$iA")
u=this.e
if(u!=null)u.H(a)},
b8:function(){return this.V(null)},
f2:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,n)
u.dr(t,n)
u.eQ(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia4")
u.ch=H.l(u.y.j(0,"ratio"),"$ia4")
u.cx=H.l(u.y.j(0,"boxClr"),"$iP")
u.cy=H.l(u.y.j(0,"boxTxt"),"$iao")
u.db=H.l(u.y.j(0,"viewMat"),"$iaB")
a.e9(u)}o.a=u}if(b.e==null){t=b.d.ef(new Z.eA(a.a),$.b4())
t.aK($.b4()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a5(a)}t=a.d
s=a.c
r=o.a
r.a5(a)
q=o.b
p=r.Q
C.c.O(p.a,p.d,q)
q=r.ch
C.c.O(q.a,q.d,t/s)
s=o.c
r.cy.dl(s)
s=o.d
t=r.cx
C.c.B(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cZ(0)
r=r.db
r.toString
r.aq(s.ai(0,!0))
t=b.e
if(t instanceof Z.cz){t.a5(a)
t.ah(a)
t.aP(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.ei()
t=o.c
if(t!=null)t.aP(a)}}
O.bS.prototype={}
T.d1.prototype={}
T.cg.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.R():u},
a5:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aP:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iN.prototype={
eT:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cg()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aX(u,k,r,34069,!1,!1)
t.aX(u,k,o,34070,!1,!1)
t.aX(u,k,q,34071,!1,!1)
t.aX(u,k,n,34072,!1,!1)
t.aX(u,k,p,34073,!1,!1)
t.aX(u,k,m,34074,!1,!1)
return u},
eS:function(a){return this.eT(a,".png")},
aX:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ad(t,"load",H.n(new T.iO(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
is:function(a,b,c){var u,t,s,r
b=V.lI(b)
u=V.lI(a.width)
t=V.lI(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l9()
s.width=u
s.height=t
r=H.e(C.m.fg(s,"2d"),"$icA")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.p6(r.getImageData(0,0,s.width,s.height))}}}
T.iO.prototype={
$1:function(a){var u=this,t=u.a,s=t.is(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.kk(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.jB()}++t.e},
$S:15}
V.bp.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$iaE:1}
V.aE.prototype={}
V.dZ.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.k(a,"$ib",[V.aE],"$ab")},
$iaE:1}
V.ay.prototype={
aM:function(a,b){return!this.fo(0,b)},
i:function(a){return"!["+this.dn(0)+"]"}}
V.id.prototype={
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaE:1}
V.io.prototype={
fu:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.aU([P.p,P.U])
for(t=new H.cK(a,a.gl(a),[H.ap(a,"z",0)]);t.F();)u.n(0,t.d,!0)
this.siv(u)},
aM:function(a,b){return this.a.bB(0,b)},
i:function(a){var u=this.a
return P.cZ(u.gaa(u),0,null)},
siv:function(a){this.a=H.k(a,"$iI",[P.p,P.U],"$aI")},
$iaE:1}
V.cX.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d3(this.a.k(0,b))
r.sad(H.d([],[V.aE]))
r.c=!1
C.a.h(this.c,r)
return r},
jG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
siR:function(a){this.c=H.k(a,"$ib",[V.d3],"$ab")}}
V.ep.prototype={
i:function(a){var u=H.lK(this.b,"\n","\\n"),t=H.lK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d2.prototype={
aO:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.F)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sil:function(a){var u=P.f
this.c=H.k(a,"$iI",[u,u],"$aI")}}
V.iR.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.siR(H.d([],[V.d3]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d2(a)
u=P.f
t.sil(new H.aU([u,u]))
this.b.n(0,a,t)}return t},
f9:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ep]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.I(a,s)
q=k.jG(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cZ(i,0,m)
throw H.c(P.r("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cZ(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ep(n==null?o.b:n,p,s)}++s}}},
siH:function(a){this.a=H.k(a,"$iI",[P.f,V.cX],"$aI")},
siK:function(a){this.b=H.k(a,"$iI",[P.f,V.d2],"$aI")}}
V.d3.prototype={
i:function(a){return this.b.b+": "+this.dn(0)}}
X.c0.prototype={$ibe:1}
X.hi.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.R():u},
ay:function(a){var u=this.x
if(u!=null)u.H(a)},
a5:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.D(u)
q=C.e.at(r*u)
r=s.b
if(typeof t!=="number")return H.D(t)
p=C.e.at(r*t)
r=C.e.at(s.c*u)
a.c=r
s=C.e.at(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.ho.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.R():u},
a5:function(a){var u
a.cy.bX(V.c9())
u=V.c9()
a.db.bX(u)},
aP:function(a){a.cy.aN()
a.db.aN()},
$ibe:1,
$ic0:1}
X.e7.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.R():u},
ay:function(a){var u
H.e(a,"$iA")
u=this.f
if(u!=null)u.H(a)},
hv:function(){return this.ay(null)},
a5:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bd(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bX(k)
r=$.m9
if(r==null){r=V.ll()
q=V.mv()
p=$.mr
r=V.m4(r,q,p==null?$.mr=new V.B(0,0,-1):p)
$.m9=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b5(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bX(u)},
aP:function(a){a.cy.aN()
a.db.aN()},
$ibe:1,
$ic0:1}
X.d_.prototype={}
V.bH.prototype={
bs:function(a){this.b=new P.hm(C.U)
this.c=null
this.sce(H.d([],[[P.b,W.aK]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aK]))
u=a.split("\n")
for(l=u.length,t=[W.aK],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fW(q,0,q.length)
n=o==null?q:o
C.S.fj(p,H.lK(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaD(m.d),p)}},
f_:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.f],"$ab")
q.sce(H.d([],[[P.b,W.aK]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bC():t).f9(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)q.bW(t[r])},
sce:function(a){this.d=H.k(a,"$ib",[[P.b,W.aK]],"$ab")}}
V.l0.prototype={
$1:function(a){var u
H.e(a,"$ibi")
u=C.e.f8(this.a.gjK(),2)
if(u!=="0.00")P.lJ(u+" fps")},
$S:51}
V.fZ.prototype={
bW:function(a){var u=this
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
bC:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iS()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a3("0","9")
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a3("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a3("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.x(new H.w("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a3("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a3("0","9")
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
C.a.h(a1.k(0,k).m(0,k).a,new V.bp())
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
C.a.h(a1.k(0,h).m(0,h).a,new V.bp())
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
t=new V.ay()
s=[V.aE]
t.sad(H.d([],s))
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
t=new V.ay()
t.sad(H.d([],s))
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
u=[P.f]
t.aO(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aO(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aO(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hj.prototype={
bW:function(a){var u=this
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
bC:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iS()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a3("0","9")
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a3("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a3("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.x(new H.w("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a3("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a3("0","9")
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
C.a.h(e.k(0,k).m(0,m).a,new V.bp())
t=e.k(0,j).m(0,i)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.ay()
s=[V.aE]
t.sad(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.w("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.ay()
u.sad(H.d([],s))
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
t=[P.f]
u.aO(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aO(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aO(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hk.prototype={
bW:function(a){var u=this,t="#111"
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
bC:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iS()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.w("_"))
C.a.h(t.a,u)
u=V.a3("0","9")
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
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
C.a.h(l.k(0,o).m(0,o).a,new V.bp())
C.a.h(l.k(0,s).m(0,m).a,new V.bp())
u=l.k(0,m).m(0,m)
t=new V.ay()
t.sad(H.d([],[V.aE]))
C.a.h(u.a,t)
u=V.x(new H.w('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.S("Symbol")
u=l.k(0,n)
u.d=u.a.S("String")
u=l.k(0,r)
t=u.a.S(r)
u.d=t
t.aO(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.i7.prototype={
f_:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.sce(H.d([],[[P.b,W.aK]]))
this.P(C.a.m(b,"\n"),"#111")},
bW:function(a){},
bC:function(){return}}
V.ib.prototype={
by:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mn().gd8().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.e3(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lQ(m.c).h(0,q)
o=W.nO("radio")
o.checked=s
o.name=u
u=W.o
W.ad(o,"change",H.n(new V.ic(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lQ(m.c).h(0,r.createElement("br"))},
aA:function(a,b,c){return this.by(a,b,c,!1)},
e3:function(a){var u,t,s=P.mn(),r=P.f,q=P.nW(s.gd8(),r,r)
q.n(0,this.a,a)
u=s.f3(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ka([],[]).dg(""),"",t)}}
V.ic.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.e3(u.d)}},
$S:15}
V.is.prototype={
fv:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ad(q,"scroll",H.n(new V.iu(o),{func:1,ret:-1,args:[r]}),!1,r)},
e8:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.iC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f9(C.a.jR(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.py(n,"|",0)){m=n.split("|")
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
ff:function(a){var u,t,s,r=new V.fZ("dart")
r.bs("dart")
u=new V.hj("glsl")
u.bs("glsl")
t=new V.hk("html")
t.bs("html")
s=C.a.jI(H.d([r,u,t],[V.bH]),new V.iv(a))
if(s!=null)return s
r=new V.i7("plain")
r.bs("plain")
return r},
e5:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dx(r).a8(r,"+")){C.a.n(b0,s,C.b.aw(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a8(r,"-")){C.a.n(b0,s,C.b.aw(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ff(a8)
q.f_(0,b0)
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
i=W.lS()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.F)(r),++a0)C.a3.jo(a,r[a0])
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
for(a3=C.a.gW(r);a3.F();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ji:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.e(r.insertCell(-1),"$ibh").style
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
o=H.e(r.insertCell(-1),"$ibh")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
iC:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iS()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.ay()
r=[V.aE]
s.sad(H.d([],r))
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
s=new V.ay()
s.sad(H.d([],r))
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
s=new V.ay()
s.sad(H.d([],r))
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
t=new V.ay()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.ay()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bp())
s=u.k(0,i).m(0,i)
t=new V.ay()
t.sad(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.w("*_`["))
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
V.iu.prototype={
$1:function(a){P.mj(C.t,new V.it(this.a))},
$S:15}
V.it.prototype={
$0:function(){var u=C.e.at(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iv.prototype={
$1:function(a){return H.e(a,"$ibH").a===this.a},
$S:52}
T.kP.prototype={
$0:function(){this.a.sab(0,F.lE(1,null,null,1))},
$S:0}
T.kQ.prototype={
$0:function(){this.a.sab(0,F.lE(8,null,null,8))},
$S:0}
T.kR.prototype={
$0:function(){this.a.sab(0,F.mU(!0,40,1))},
$S:0}
T.kS.prototype={
$0:function(){this.a.sab(0,F.mU(!1,40,0))},
$S:0}
T.kT.prototype={
$0:function(){this.a.sab(0,F.pp(10,20))},
$S:0}
T.kU.prototype={
$0:function(){var u=F.ee(),t=Math.sqrt(5)/2+0.5,s=F.au(u,new V.B(-1,t,0)),r=F.au(u,new V.B(1,t,0)),q=-t,p=F.au(u,new V.B(-1,q,0)),o=F.au(u,new V.B(1,q,0)),n=F.au(u,new V.B(0,-1,q)),m=F.au(u,new V.B(0,1,q)),l=F.au(u,new V.B(0,-1,t)),k=F.au(u,new V.B(0,1,t)),j=F.au(u,new V.B(t,0,1)),i=F.au(u,new V.B(t,0,-1)),h=F.au(u,new V.B(q,0,1)),g=F.au(u,new V.B(q,0,-1))
F.a6(u,s,g,m,2)
F.a6(u,s,m,r,2)
F.a6(u,s,r,k,2)
F.a6(u,s,k,h,2)
F.a6(u,s,h,g,2)
F.a6(u,r,m,i,2)
F.a6(u,m,g,n,2)
F.a6(u,g,h,p,2)
F.a6(u,h,k,l,2)
F.a6(u,k,r,j,2)
F.a6(u,o,i,n,2)
F.a6(u,o,n,p,2)
F.a6(u,o,p,l,2)
F.a6(u,o,l,j,2)
F.a6(u,o,j,i,2)
F.a6(u,n,i,m,2)
F.a6(u,p,n,g,2)
F.a6(u,l,p,h,2)
F.a6(u,j,l,k,2)
F.a6(u,i,j,r,2)
u.eU(new F.dd(),new F.jq())
this.a.sab(0,u)},
$S:0}
T.kV.prototype={
$0:function(){this.a.sab(0,F.n6(6,6))},
$S:0}
T.kW.prototype={
$0:function(){this.a.sab(0,F.pB())},
$S:0}
T.kX.prototype={
$0:function(){this.a.sab(0,F.po())},
$S:0}
T.kY.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.e5("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.e5("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.fl=u.i
u=J.dT.prototype
u.fn=u.i
u=P.i.prototype
u.fm=u.c1
u=W.Y.prototype
u.c5=u.an
u=W.f3.prototype
u.fp=u.aB
u=O.cL.prototype
u.dq=u.az
u=O.bc.prototype
u.c6=u.az
u=V.dZ.prototype
u.fo=u.aM
u.dn=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p0","ou",11)
u(P,"p1","ov",11)
u(P,"p2","ow",11)
t(P,"mT","oZ",3)
s(W,"ph",4,null,["$4"],["oy"],30,0)
s(W,"pi",4,null,["$4"],["oz"],30,0)
var m
r(m=E.ar.prototype,"geY",0,0,null,["$1","$0"],["eZ","k_"],1,0)
r(m,"geW",0,0,null,["$1","$0"],["eX","jX"],1,0)
q(m,"gjV","jW",8)
q(m,"gjY","jZ",8)
r(m=E.eo.prototype,"gdt",0,0,null,["$1","$0"],["dv","du"],1,0)
p(m,"gkg","f4",3)
o(m=X.ev.prototype,"ghG","hH",12)
o(m,"ghs","ht",12)
o(m,"ghA","hB",4)
o(m,"ghK","hL",20)
o(m,"ghI","hJ",20)
o(m,"ghO","hP",4)
o(m,"ghS","hT",4)
o(m,"ghE","hF",4)
o(m,"ghQ","hR",4)
o(m,"ghC","hD",4)
o(m,"ghU","hV",45)
o(m,"ghW","hX",12)
o(m,"gib","ic",13)
o(m,"gi7","i8",13)
o(m,"gi9","ia",13)
r(D.bJ.prototype,"gfB",0,0,null,["$1","$0"],["aF","fC"],1,0)
r(m=D.dV.prototype,"gdS",0,0,null,["$1","$0"],["dT","hM"],1,0)
o(m,"ghY","hZ",38)
q(m,"ghm","hn",27)
q(m,"gi1","i2",27)
n(V.a_.prototype,"gl","bh",14)
n(V.B.prototype,"gl","bh",14)
n(V.b3.prototype,"gl","bh",14)
r(m=U.cH.prototype,"gaT",0,0,null,["$1","$0"],["T","ac"],1,0)
q(m,"ghk","hl",31)
q(m,"gi_","i0",31)
r(m=U.ew.prototype,"gaT",0,0,null,["$1","$0"],["T","ac"],1,0)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
o(m,"gcm","cn",2)
r(m=U.ex.prototype,"gaT",0,0,null,["$1","$0"],["T","ac"],1,0)
o(m,"gci","cj",2)
o(m,"gck","cl",2)
o(m,"gcm","cn",2)
o(m,"ghd","he",2)
o(m,"ghf","hg",2)
o(m,"giP","iQ",2)
o(m,"giN","iO",2)
o(m,"giL","iM",2)
o(U.ey.prototype,"ghi","hj",2)
r(m=M.dH.prototype,"ga2",0,0,null,["$1","$0"],["a3","b7"],1,0)
q(m,"gi3","i4",25)
q(m,"gi5","i6",25)
r(M.dJ.prototype,"ga2",0,0,null,["$1","$0"],["a3","b7"],1,0)
r(m=M.dN.prototype,"ga2",0,0,null,["$1","$0"],["a3","b7"],1,0)
q(m,"ghw","hx",8)
q(m,"ghy","hz",8)
r(m=O.e_.prototype,"gaU",0,0,null,["$1","$0"],["V","b8"],1,0)
r(m,"giq",0,0,null,["$1","$0"],["dY","ir"],1,0)
q(m,"gho","hp",32)
q(m,"ghq","hr",32)
r(O.cL.prototype,"gaU",0,0,null,["$1","$0"],["V","b8"],1,0)
r(O.ef.prototype,"gaU",0,0,null,["$1","$0"],["V","b8"],1,0)
r(X.e7.prototype,"ghu",0,0,null,["$1","$0"],["ay","hv"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.lh,J.a,J.aw,P.eR,P.i,H.cK,P.b9,H.c6,H.db,H.fS,H.iX,P.bK,H.cB,H.f8,P.ag,H.hx,H.hz,H.hs,P.fe,P.bn,P.aP,P.eB,P.iD,P.cY,P.iE,P.bi,P.aq,P.kq,P.k4,P.ci,P.eQ,P.z,P.ki,P.hF,P.c2,P.hn,P.ko,P.kn,P.U,P.aD,P.ae,P.b8,P.i5,P.ei,P.eJ,P.hh,P.bL,P.b,P.I,P.M,P.aA,P.f,P.ak,P.cj,P.jc,P.k7,W.fV,W.bV,W.H,W.e5,W.f3,W.kd,W.dP,W.aG,W.k3,W.fm,P.k9,P.fj,P.jZ,P.V,O.a7,O.cM,E.fM,E.ar,E.ie,E.eo,Z.ez,Z.eA,Z.cz,Z.bM,Z.bl,D.fP,D.c4,D.A,X.dG,X.dU,X.hu,X.hC,X.aF,X.hU,X.iT,X.ev,D.bJ,D.aa,D.e8,D.eh,D.el,D.em,D.en,V.a8,V.af,V.h8,V.e1,V.ax,V.a2,V.Z,V.az,V.eb,V.a_,V.B,V.b3,U.ew,U.ex,U.ey,M.dJ,M.dN,M.aH,A.dD,A.fF,A.hL,A.d4,A.d8,A.d6,A.d9,A.d7,A.da,A.c3,A.er,A.j6,F.ac,F.hb,F.bv,F.hw,F.bR,F.ed,F.ip,F.iq,F.ir,F.ab,F.jm,F.jn,F.jr,F.js,F.jt,F.ju,O.bS,O.cL,T.iN,V.bp,V.aE,V.dZ,V.id,V.io,V.cX,V.ep,V.d2,V.iR,X.c0,X.d_,X.ho,X.e7,V.bH,V.ib,V.is])
s(J.a,[J.hr,J.dS,J.dT,J.aT,J.bP,J.bt,H.cP,H.bQ,W.j,W.fC,W.c_,W.cA,W.b6,W.b7,W.a0,W.eD,W.h_,W.h0,W.eF,W.dM,W.eH,W.h2,W.o,W.eK,W.aS,W.hl,W.eM,W.bs,W.dX,W.hO,W.eS,W.eT,W.aV,W.eU,W.eX,W.aW,W.f0,W.f2,W.aY,W.f4,W.aZ,W.f9,W.aM,W.fc,W.iQ,W.b0,W.ff,W.iV,W.jh,W.fn,W.fp,W.fr,W.ft,W.fv,P.bb,P.eO,P.bf,P.eZ,P.ia,P.fa,P.bj,P.fh,P.fG,P.eC,P.dE,P.e9,P.ce,P.ec,P.ek,P.es,P.f6])
s(J.dT,[J.i6,J.bU,J.bu])
t(J.lg,J.aT)
s(J.bP,[J.dR,J.dQ])
t(P.hB,P.eR)
s(P.hB,[H.et,W.jF,W.at,P.hd])
t(H.w,H.et)
s(P.i,[H.h5,H.hG,H.de])
s(H.h5,[H.c8,H.hy])
s(P.b9,[H.hH,H.jy])
t(H.hI,H.c8)
t(H.fT,H.fS)
s(P.bK,[H.i2,H.ht,H.ja,H.iZ,H.fO,H.il,P.fE,P.e6,P.aR,P.jb,P.j8,P.cf,P.fR,P.fY])
s(H.cB,[H.l5,H.iK,H.kI,H.kJ,H.kK,P.jB,P.jA,P.jC,P.jD,P.kh,P.kg,P.jM,P.jQ,P.jN,P.jO,P.jP,P.jT,P.jU,P.jS,P.jR,P.iF,P.iG,P.ky,P.k1,P.k0,P.k2,P.hA,P.hE,P.h3,P.h4,P.jg,P.jd,P.je,P.jf,P.kj,P.kk,P.km,P.kl,P.ku,P.kt,P.kv,P.kw,W.h6,W.hQ,W.hS,W.ik,W.iC,W.jL,W.i0,W.i_,W.k5,W.k6,W.kf,W.kp,P.kb,P.kA,P.he,P.hf,P.fI,E.ig,E.ih,E.ii,E.iP,D.h9,D.ha,F.kr,F.kB,F.kD,F.kE,F.kF,F.kN,F.l1,F.l2,F.l4,F.kM,F.kC,F.jw,F.jv,F.jo,F.jp,T.iO,V.l0,V.ic,V.iu,V.it,V.iv,T.kP,T.kQ,T.kR,T.kS,T.kT,T.kU,T.kV,T.kW,T.kX,T.kY])
s(H.iK,[H.iA,H.cx])
t(H.jz,P.fE)
t(P.hD,P.ag)
s(P.hD,[H.aU,W.jE])
t(H.e2,H.bQ)
s(H.e2,[H.dj,H.dl])
t(H.dk,H.dj)
t(H.cQ,H.dk)
t(H.dm,H.dl)
t(H.e3,H.dm)
s(H.e3,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e4,H.cR])
t(P.k_,P.kq)
t(P.jY,P.k4)
t(P.fk,P.hF)
t(P.eu,P.fk)
s(P.c2,[P.fK,P.h7])
t(P.bI,P.iE)
s(P.bI,[P.fL,P.hm,P.jk,P.jj])
t(P.ji,P.h7)
s(P.ae,[P.t,P.p])
s(P.aR,[P.cd,P.hp])
t(P.jH,P.cj)
s(W.j,[W.G,W.hc,W.cN,W.aX,W.dn,W.b_,W.aN,W.dq,W.jx,W.df,P.fJ,P.bZ])
s(W.G,[W.Y,W.bG,W.dg])
s(W.Y,[W.y,P.q])
s(W.y,[W.dB,W.fD,W.cw,W.bF,W.c1,W.aK,W.hg,W.cI,W.cJ,W.im,W.bh,W.ej,W.iI,W.iJ,W.d0])
s(W.b6,[W.cC,W.fW,W.fX])
t(W.fU,W.b7)
t(W.cD,W.eD)
t(W.eG,W.eF)
t(W.dL,W.eG)
t(W.eI,W.eH)
t(W.h1,W.eI)
t(W.aL,W.c_)
t(W.eL,W.eK)
t(W.cF,W.eL)
t(W.eN,W.eM)
t(W.c7,W.eN)
t(W.bT,W.o)
s(W.bT,[W.ba,W.ah,W.b1])
t(W.hP,W.eS)
t(W.hR,W.eT)
t(W.eV,W.eU)
t(W.hT,W.eV)
t(W.eY,W.eX)
t(W.cS,W.eY)
t(W.f1,W.f0)
t(W.i8,W.f1)
t(W.ij,W.f2)
t(W.dp,W.dn)
t(W.ix,W.dp)
t(W.f5,W.f4)
t(W.iy,W.f5)
t(W.iB,W.f9)
t(W.fd,W.fc)
t(W.iL,W.fd)
t(W.dr,W.dq)
t(W.iM,W.dr)
t(W.fg,W.ff)
t(W.iU,W.fg)
t(W.bm,W.ah)
t(W.fo,W.fn)
t(W.jG,W.fo)
t(W.eE,W.dM)
t(W.fq,W.fp)
t(W.jV,W.fq)
t(W.fs,W.fr)
t(W.eW,W.fs)
t(W.fu,W.ft)
t(W.k8,W.fu)
t(W.fw,W.fv)
t(W.kc,W.fw)
t(W.jI,W.jE)
t(W.jJ,P.iD)
t(W.ls,W.jJ)
t(W.jK,P.cY)
t(W.ke,W.f3)
t(P.ka,P.k9)
t(P.an,P.jZ)
t(P.eP,P.eO)
t(P.hv,P.eP)
t(P.f_,P.eZ)
t(P.i3,P.f_)
t(P.cV,P.q)
t(P.fb,P.fa)
t(P.iH,P.fb)
t(P.fi,P.fh)
t(P.iW,P.fi)
t(P.fH,P.eC)
t(P.i4,P.bZ)
t(P.f7,P.f6)
t(P.iz,P.f7)
s(E.fM,[Z.dF,A.cW,T.d1])
s(D.A,[D.bN,D.bO,D.N,X.i9])
s(X.i9,[X.dY,X.bw,X.cO,X.eq])
s(O.a7,[D.dV,U.cH,M.dH])
s(D.fP,[U.fQ,U.ai])
t(U.dI,U.ai)
s(A.cW,[A.e0,A.eg])
s(A.er,[A.S,A.j2,A.j3,A.j5,A.j0,A.a4,A.j1,A.P,A.j4,A.j7,A.d5,A.aB,A.as,A.ao])
t(F.iw,F.hb)
t(F.j_,F.hw)
t(F.dd,F.js)
s(F.jt,[F.jq,F.i1])
s(O.bS,[O.e_,O.ef])
s(O.cL,[O.hJ,O.hK,O.bc])
s(O.bc,[O.hM,O.hN])
t(T.cg,T.d1)
s(V.dZ,[V.ay,V.d3])
t(X.hi,X.d_)
s(V.bH,[V.fZ,V.hj,V.hk,V.i7])
u(H.et,H.db)
u(H.dj,P.z)
u(H.dk,H.c6)
u(H.dl,P.z)
u(H.dm,H.c6)
u(P.eR,P.z)
u(P.fk,P.ki)
u(W.eD,W.fV)
u(W.eF,P.z)
u(W.eG,W.H)
u(W.eH,P.z)
u(W.eI,W.H)
u(W.eK,P.z)
u(W.eL,W.H)
u(W.eM,P.z)
u(W.eN,W.H)
u(W.eS,P.ag)
u(W.eT,P.ag)
u(W.eU,P.z)
u(W.eV,W.H)
u(W.eX,P.z)
u(W.eY,W.H)
u(W.f0,P.z)
u(W.f1,W.H)
u(W.f2,P.ag)
u(W.dn,P.z)
u(W.dp,W.H)
u(W.f4,P.z)
u(W.f5,W.H)
u(W.f9,P.ag)
u(W.fc,P.z)
u(W.fd,W.H)
u(W.dq,P.z)
u(W.dr,W.H)
u(W.ff,P.z)
u(W.fg,W.H)
u(W.fn,P.z)
u(W.fo,W.H)
u(W.fp,P.z)
u(W.fq,W.H)
u(W.fr,P.z)
u(W.fs,W.H)
u(W.ft,P.z)
u(W.fu,W.H)
u(W.fv,P.z)
u(W.fw,W.H)
u(P.eO,P.z)
u(P.eP,W.H)
u(P.eZ,P.z)
u(P.f_,W.H)
u(P.fa,P.z)
u(P.fb,W.H)
u(P.fh,P.z)
u(P.fi,W.H)
u(P.eC,P.ag)
u(P.f6,P.z)
u(P.f7,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bF.prototype
C.m=W.c1.prototype
C.S=W.aK.prototype
C.V=J.a.prototype
C.a=J.aT.prototype
C.W=J.dQ.prototype
C.f=J.dR.prototype
C.n=J.dS.prototype
C.e=J.bP.prototype
C.b=J.bt.prototype
C.X=J.bu.prototype
C.a2=W.cS.prototype
C.F=J.i6.prototype
C.c=P.ce.prototype
C.a3=W.bh.prototype
C.G=W.ej.prototype
C.w=J.bU.prototype
C.H=W.bm.prototype
C.I=W.df.prototype
C.a4=new P.fL()
C.J=new P.fK()
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

C.Q=new P.i5()
C.l=new P.ji()
C.R=new P.jk()
C.k=new P.k_()
C.d=new A.c3(0,"ColorSourceType.None")
C.j=new A.c3(1,"ColorSourceType.Solid")
C.i=new A.c3(2,"ColorSourceType.Texture2D")
C.h=new A.c3(3,"ColorSourceType.TextureCube")
C.t=new P.b8(0)
C.T=new P.b8(5e6)
C.U=new P.hn("element",!0,!1,!1,!1)
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
C.a1=new H.fT(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",t:"double",ae:"num",f:"String",U:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.M,args:[F.ab,P.t,P.t]},{func:1,ret:P.M,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ar]]},{func:1,ret:P.M,args:[D.A]},{func:1,ret:P.M,args:[F.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.t},{func:1,ret:P.M,args:[W.o]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:V.Z,args:[P.t]},{func:1,args:[,]},{func:1,ret:P.U,args:[W.G]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.U,args:[W.aG]},{func:1,ret:P.U,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[P.p,[P.i,M.aH]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.p,[P.i,D.aa]]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.U,args:[W.Y,P.f,P.f,W.bV]},{func:1,ret:-1,args:[P.p,[P.i,U.ai]]},{func:1,ret:-1,args:[P.p,[P.i,V.ax]]},{func:1,ret:P.M,args:[,]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.M,args:[P.ae]},{func:1,ret:P.M,args:[,],opt:[P.aA]},{func:1,args:[,P.f]},{func:1,ret:P.U,args:[[P.i,D.aa]]},{func:1,ret:P.M,args:[P.f,,]},{func:1,ret:[P.I,P.f,P.f],args:[[P.I,P.f,P.f],P.f]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.V,args:[,,]},{func:1,args:[P.f]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.V,args:[P.p]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.M,args:[P.bi]},{func:1,ret:P.U,args:[V.bH]},{func:1,args:[W.o]},{func:1,ret:W.Y,args:[W.G]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b5=0
$.cy=null
$.lU=null
$.lw=!1
$.mZ=null
$.mR=null
$.n4=null
$.kG=null
$.kL=null
$.lG=null
$.cl=null
$.dv=null
$.dw=null
$.lx=!1
$.a5=C.k
$.aC=[]
$.br=null
$.lc=null
$.m_=null
$.lZ=null
$.di=P.lj(P.f,P.bL)
$.m5=null
$.ma=null
$.cT=null
$.me=null
$.mq=null
$.mu=null
$.ms=null
$.mt=null
$.jl=null
$.mr=null
$.mx=null
$.m9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pH","n9",function(){return H.mY("_$dart_dartClosure")})
u($,"pI","lL",function(){return H.mY("_$dart_js")})
u($,"pN","na",function(){return H.bk(H.iY({
toString:function(){return"$receiver$"}}))})
u($,"pO","nb",function(){return H.bk(H.iY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pP","nc",function(){return H.bk(H.iY(null))})
u($,"pQ","nd",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pT","ng",function(){return H.bk(H.iY(void 0))})
u($,"pU","nh",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pS","nf",function(){return H.bk(H.ml(null))})
u($,"pR","ne",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pW","nj",function(){return H.bk(H.ml(void 0))})
u($,"pV","ni",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qc","lM",function(){return P.ot()})
u($,"pZ","nk",function(){return P.oq()})
u($,"qd","no",function(){return H.o0(H.ck(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"qf","nq",function(){return P.oe("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qg","nr",function(){return P.oS()})
u($,"qe","np",function(){return P.m2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"q5","nn",function(){return Z.aO(0)})
u($,"q_","nl",function(){return Z.aO(511)})
u($,"q7","b4",function(){return Z.aO(1)})
u($,"q6","bB",function(){return Z.aO(2)})
u($,"q1","bA",function(){return Z.aO(4)})
u($,"q8","bC",function(){return Z.aO(8)})
u($,"q9","bD",function(){return Z.aO(16)})
u($,"q2","dy",function(){return Z.aO(32)})
u($,"q3","dz",function(){return Z.aO(64)})
u($,"q4","nm",function(){return Z.aO(96)})
u($,"qa","cv",function(){return Z.aO(128)})
u($,"q0","bz",function(){return Z.aO(256)})
u($,"pG","n8",function(){return new V.h8(1e-9)})
u($,"pF","Q",function(){return $.n8()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cP,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.cQ,Float64Array:H.cQ,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cR,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fC,HTMLAnchorElement:W.dB,HTMLAreaElement:W.fD,HTMLBaseElement:W.cw,Blob:W.c_,HTMLBodyElement:W.bF,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cA,CDATASection:W.bG,CharacterData:W.bG,Comment:W.bG,ProcessingInstruction:W.bG,Text:W.bG,CSSNumericValue:W.cC,CSSUnitValue:W.cC,CSSPerspective:W.fU,CSSCharsetRule:W.a0,CSSConditionRule:W.a0,CSSFontFaceRule:W.a0,CSSGroupingRule:W.a0,CSSImportRule:W.a0,CSSKeyframeRule:W.a0,MozCSSKeyframeRule:W.a0,WebKitCSSKeyframeRule:W.a0,CSSKeyframesRule:W.a0,MozCSSKeyframesRule:W.a0,WebKitCSSKeyframesRule:W.a0,CSSMediaRule:W.a0,CSSNamespaceRule:W.a0,CSSPageRule:W.a0,CSSRule:W.a0,CSSStyleRule:W.a0,CSSSupportsRule:W.a0,CSSViewportRule:W.a0,CSSStyleDeclaration:W.cD,MSStyleCSSProperties:W.cD,CSS2Properties:W.cD,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fW,CSSUnparsedValue:W.fX,DataTransferItemList:W.h_,HTMLDivElement:W.aK,DOMException:W.h0,ClientRectList:W.dL,DOMRectList:W.dL,DOMRectReadOnly:W.dM,DOMStringList:W.h1,DOMTokenList:W.h2,Element:W.Y,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aL,FileList:W.cF,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aS,History:W.hl,HTMLCollection:W.c7,HTMLFormControlsCollection:W.c7,HTMLOptionsCollection:W.c7,ImageData:W.bs,HTMLImageElement:W.cI,HTMLInputElement:W.cJ,KeyboardEvent:W.ba,Location:W.dX,MediaList:W.hO,MessagePort:W.cN,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aV,MimeTypeArray:W.hT,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.aW,PluginArray:W.i8,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aX,SourceBufferList:W.ix,SpeechGrammar:W.aY,SpeechGrammarList:W.iy,SpeechRecognitionResult:W.aZ,Storage:W.iB,CSSStyleSheet:W.aM,StyleSheet:W.aM,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.ej,HTMLTableRowElement:W.iI,HTMLTableSectionElement:W.iJ,HTMLTemplateElement:W.d0,TextTrack:W.b_,TextTrackCue:W.aN,VTTCue:W.aN,TextTrackCueList:W.iL,TextTrackList:W.iM,TimeRanges:W.iQ,Touch:W.b0,TouchEvent:W.b1,TouchList:W.iU,TrackDefaultList:W.iV,CompositionEvent:W.bT,FocusEvent:W.bT,TextEvent:W.bT,UIEvent:W.bT,URL:W.jh,VideoTrackList:W.jx,WheelEvent:W.bm,Window:W.df,DOMWindow:W.df,Attr:W.dg,CSSRuleList:W.jG,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.jV,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.k8,StyleSheetList:W.kc,SVGLength:P.bb,SVGLengthList:P.hv,SVGNumber:P.bf,SVGNumberList:P.i3,SVGPointList:P.ia,SVGScriptElement:P.cV,SVGStringList:P.iH,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bj,SVGTransformList:P.iW,AudioBuffer:P.fG,AudioParamMap:P.fH,AudioTrackList:P.fJ,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.i4,WebGLBuffer:P.dE,WebGLProgram:P.e9,WebGL2RenderingContext:P.ce,WebGLShader:P.ec,WebGLTexture:P.ek,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iz})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.n1,[])
else T.n1([])})})()
//# sourceMappingURL=test.dart.js.map
