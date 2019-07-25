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
a[c]=function(){a[c]=function(){H.p0(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kU:function kU(){},
kw:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kR:function(){return new P.cO("No element")},
nj:function(){return new P.cO("Too many elements")},
u:function u(a){this.a=a},
h_:function h_(){},
c4:function c4(){},
cy:function cy(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
hE:function hE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
jr:function jr(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d3:function d3(){},
eo:function eo(){},
nb:function(){throw H.c(P.K("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oI:function(a){return v.types[H.aj(a)]},
oP:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.bm(a))
return u},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nE:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.nv(a)+H.lb(H.bR(a),0,null)},
nv:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$id2){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.E(t,0)===36?C.b.aq(t,1):t)},
nw:function(){if(!!self.location)return self.location.href
return},
lK:function(a){var u,t,s,r,q
H.kB(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nF:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.bm(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aU(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.bm(s))}return H.lK(r)},
lL:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.bm(s))
if(s<0)throw H.c(H.bm(s))
if(s>65535)return H.nF(a)}return H.lK(a)},
nG:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aU(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nD:function(a){var u=H.c5(a).getFullYear()+0
return u},
nB:function(a){var u=H.c5(a).getMonth()+1
return u},
nx:function(a){var u=H.c5(a).getDate()+0
return u},
ny:function(a){var u=H.c5(a).getHours()+0
return u},
nA:function(a){var u=H.c5(a).getMinutes()+0
return u},
nC:function(a){var u=H.c5(a).getSeconds()+0
return u},
nz:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.bm(a))},
h:function(a,b){if(a==null)J.aG(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.aj(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.i7(b,s)},
oD:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c8(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
bm:function(a){return new P.aP(!0,a,null,null)},
oz:function(a){if(typeof a!=="number")throw H.c(H.bm(a))
return a},
c:function(a){var u
if(a==null)a=new P.e3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mD})
u.name=""}else u.toString=H.mD
return u},
mD:function(){return J.av(this.dartException)},
t:function(a){throw H.c(a)},
H:function(a){throw H.c(P.b4(a))},
bh:function(a){var u,t,s,r,q,p
a=H.mC(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lV:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lF:function(a,b){return new H.hZ(a,b==null?null:b.method)},
kV:function(a,b){var u=b==null,t=u?null:b.method
return new H.hr(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kV(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lF(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mG()
q=$.mH()
p=$.mI()
o=$.mJ()
n=$.mM()
m=$.mN()
l=$.mL()
$.mK()
k=$.mP()
j=$.mO()
i=r.ai(u)
if(i!=null)return f.$1(H.kV(H.I(u),i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.kV(H.I(u),i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lF(H.I(u),i))}}return f.$1(new H.j6(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.eb()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.eb()
return a},
cj:function(a){var u
if(a==null)return new H.f3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f3(a)},
oH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
oO:function(a,b,c,d,e,f){H.e(a,"$ibF")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oO)
a.$identity=u
return u},
na:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iu().constructor.prototype):Object.create(new H.co(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b3
if(typeof t!=="number")return t.D()
$.b3=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lv(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oI,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lu:H.kK
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lv(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
n7:function(a,b,c,d){var u=H.kK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lv:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n9(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.n7(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.D()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.fH("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.D()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.fH("self"):q)+"."+H.l(u)+"("+o+");}")()},
n8:function(a,b,c,d){var u=H.kK,t=H.lu
switch(b?-1:a){case 0:throw H.c(H.nK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n9:function(a,b){var u,t,s,r,q,p,o,n=$.cp
if(n==null)n=$.cp=H.fH("self")
u=$.lt
if(u==null)u=$.lt=H.fH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n8(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b3
if(typeof u!=="number")return u.D()
$.b3=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b3
if(typeof u!=="number")return u.D()
$.b3=u+1
return new Function(n+u+"}")()},
lf:function(a,b,c,d,e,f,g){return H.na(a,b,H.aj(c),d,!!e,!!f,g)},
kK:function(a){return a.a},
lu:function(a){return a.c},
fH:function(a){var u,t,s,r=new H.co("self","target","receiver","name"),q=J.kS(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.ov("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
oE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
oT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mA:function(a,b){throw H.c(H.aZ(a,H.cl(H.I(b).substring(2))))},
oV:function(a,b){throw H.c(H.n6(a,H.cl(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.mA(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.oV(a,b)},
kB:function(a){if(a==null)return a
if(!!J.R(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mx:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ib)return a
if(u[b])return a
H.mA(a,b)},
mt:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fs:function(a,b){var u
if(typeof a=="function")return!0
u=H.mt(J.R(a))
if(u==null)return!1
return H.mi(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.l8)return a
$.l8=!0
try{if(H.fs(a,b))return a
u=H.kF(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.l8=!1}},
lg:function(a,b){if(a!=null&&!H.le(a,b))H.t(H.aZ(a,H.kF(b)))
return a},
aZ:function(a,b){return new H.iX("TypeError: "+P.dG(a)+": type '"+H.mo(a)+"' is not a subtype of type '"+b+"'")},
n6:function(a,b){return new H.fI("CastError: "+P.dG(a)+": type '"+H.mo(a)+"' is not a subtype of type '"+b+"'")},
mo:function(a){var u,t=J.R(a)
if(!!t.$icr){u=H.mt(t)
if(u!=null)return H.kF(u)
return"Closure"}return H.c6(a)},
ov:function(a){throw H.c(new H.js(a))},
p0:function(a){throw H.c(new P.fS(H.I(a)))},
nK:function(a){return new H.ig(a)},
mu:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
pI:function(a,b,c){return H.ck(a["$a"+H.l(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.I(c)
H.aj(d)
u=H.ck(a["$a"+H.l(c)],H.bR(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.I(b)
H.aj(c)
u=H.ck(a["$a"+H.l(b)],H.bR(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.aj(b)
u=H.bR(a)
return u==null?null:u[b]},
kF:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.n(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.lb(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oo(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oo:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.n(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.D(p,a0[n])
m=u[q]
if(m!=null&&m!==P.V)p+=" extends "+H.bO(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bO(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bO(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bO(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oG(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bO(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lb:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
ck:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ld:function(a,b,c,d){var u,t
H.I(b)
H.kB(c)
H.I(d)
if(a==null)return!1
u=H.bR(a)
t=J.R(a)
if(t[b]==null)return!1
return H.mr(H.ck(t[d],u),null,c,null)},
n:function(a,b,c,d){H.I(b)
H.kB(c)
H.I(d)
if(a==null)return a
if(H.ld(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.lb(c,0,null),v.mangledGlobalNames)))},
mr:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
pG:function(a,b,c){return a.apply(b,H.ck(J.R(b)["$a"+H.l(c)],H.bR(b)))},
mw:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="J"||a===-1||a===-2||H.mw(u)}return!1},
le:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="J"||b===-1||b===-2||H.mw(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.le(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fs(a,b)}u=J.R(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.le(a,b))throw H.c(H.aZ(a,H.kF(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.mi(a,b,c,d)
if('func' in a)return c.name==="bF"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cw" in t.prototype))return!1
r=t.prototype["$a"+"cw"]
q=H.ck(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mr(H.ck(m,u),b,p,d)},
mi:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.oS(h,b,g,d)},
oS:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
pH:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
oQ:function(a){var u,t,s,r,q=H.I($.mv.$1(a)),p=$.ku[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mq.$2(a,q))
if(q!=null){p=$.ku[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kA[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kE(u)
$.ku[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kA[q]=u
return u}if(s==="-"){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mz(a,u)
if(s==="*")throw H.c(P.j5(q))
if(v.leafTags[q]===true){r=H.kE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mz(a,u)},
mz:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.li(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kE:function(a){return J.li(a,!1,null,!!a.$iL)},
oR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kE(u)
else return J.li(u,c,null,null)},
oM:function(){if(!0===$.lh)return
$.lh=!0
H.oN()},
oN:function(){var u,t,s,r,q,p,o,n
$.ku=Object.create(null)
$.kA=Object.create(null)
H.oL()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mB.$1(q)
if(p!=null){o=H.oR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oL:function(){var u,t,s,r,q,p,o=C.K()
o=H.cf(C.L,H.cf(C.M,H.cf(C.z,H.cf(C.z,H.cf(C.N,H.cf(C.O,H.cf(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mv=new H.kx(r)
$.mq=new H.ky(q)
$.mB=new H.kz(p)},
cf:function(a,b){return a(b)||b},
nl:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
oY:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oF:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ll:function(a,b,c){var u=H.oZ(a,b,c)
return u},
oZ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mC(b),'g'),H.oF(c))},
fM:function fM(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hZ:function hZ(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
kH:function kH(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cr:function cr(){},
iE:function iE(){},
iu:function iu(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a){this.a=a},
fI:function fI(a){this.a=a},
ig:function ig(a){this.a=a},
js:function js(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hv:function hv(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
nt:function(a){return new Int8Array(a)},
bl:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
om:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oD(a,b,c))
return b},
cD:function cD(){},
bI:function bI(){},
e_:function e_(){},
cE:function cE(){},
e0:function e0(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
e1:function e1(){},
cF:function cF(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
oG:function(a){return J.lB(a?Object.keys(a):[],null)},
oU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
li:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lh==null){H.oM()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j5("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lm()]
if(r!=null)return r
r=H.oQ(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lm(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nk:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lB(new Array(a),b)},
lB:function(a,b){return J.kS(H.d(a,[b]))},
kS:function(a){H.kB(a)
a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.c3.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.kv(a)},
dm:function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.kv(a)},
ft:function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.kv(a)},
dn:function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.d2.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.V)return a
return J.kv(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
lo:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dm(a).j(a,b)},
kI:function(a,b,c){return J.ft(a).n(a,b,c)},
mY:function(a,b){return J.dn(a).E(a,b)},
mZ:function(a,b,c){return J.ci(a).i7(a,b,c)},
n_:function(a,b,c,d){return J.ci(a).j5(a,b,c,d)},
n0:function(a,b){return J.dn(a).a_(a,b)},
fu:function(a,b){return J.ft(a).H(a,b)},
n1:function(a,b,c,d){return J.ci(a).jl(a,b,c,d)},
lp:function(a,b){return J.ft(a).B(a,b)},
n2:function(a){return J.ci(a).gja(a)},
fv:function(a){return J.ci(a).gcn(a)},
dr:function(a){return J.R(a).gG(a)},
bw:function(a){return J.ft(a).gV(a)},
aG:function(a){return J.dm(a).gl(a)},
lq:function(a){return J.ft(a).jS(a)},
n3:function(a,b){return J.ci(a).jU(a,b)},
n4:function(a,b,c){return J.dn(a).v(a,b,c)},
n5:function(a){return J.dn(a).k8(a)},
av:function(a){return J.R(a).i(a)},
a:function a(){},
hp:function hp(){},
dN:function dN(){},
dP:function dP(){},
i2:function i2(){},
d2:function d2(){},
bH:function bH(){},
b8:function b8(a){this.$ti=a},
kT:function kT(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dO:function dO(){},
dM:function dM(){},
dL:function dL(){},
c3:function c3(){}},P={
nZ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ow()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cg(new P.ju(s),1)).observe(u,{childList:true})
return new P.jt(s,u,t)}else if(self.setImmediate!=null)return P.ox()
return P.oy()},
o_:function(a){self.scheduleImmediate(H.cg(new P.jv(H.m(a,{func:1,ret:-1})),0))},
o0:function(a){self.setImmediate(H.cg(new P.jw(H.m(a,{func:1,ret:-1})),0))},
o1:function(a){P.kZ(C.t,H.m(a,{func:1,ret:-1}))},
kZ:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.o7(u<0?0:u,b)},
lU:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.bf]})
u=C.f.a6(a.a,1000)
return P.o8(u<0?0:u,b)},
o7:function(a,b){var u=new P.f9()
u.ft(a,b)
return u},
o8:function(a,b){var u=new P.f9()
u.fu(a,b)
return u},
o2:function(a,b){var u,t,s
b.a=1
try{a.eO(new P.jG(b),new P.jH(b),null)}catch(s){u=H.an(s)
t=H.cj(s)
P.oW(new P.jI(b,u,t))}},
m7:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaN")
if(u>=4){t=b.cc()
b.a=a.a
b.c=a.c
P.d7(b,t)}else{t=H.e(b.c,"$ibk")
b.a=2
b.c=a
a.dw(t)}},
d7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iao")
g=g.b
r=s.a
q=s.b
g.toString
P.kq(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d7(h.a,b)}g=h.a
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
if(m){H.e(o,"$iao")
g=g.b
r=o.a
q=o.b
g.toString
P.kq(i,i,g,r,q)
return}l=$.a2
if(l!=n)$.a2=n
else l=i
g=b.c
if(g===8)new P.jM(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jL(u,b,o).$0()}else if((g&2)!==0)new P.jK(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.R(g).$icw){if(g.a>=4){k=H.e(q.c,"$ibk")
q.c=null
b=q.bl(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.m7(g,q)
return}}j=b.b
k=H.e(j.c,"$ibk")
j.c=null
b=j.bl(k)
g=u.a
r=u.b
if(!g){H.A(r,H.v(j,0))
j.a=4
j.c=r}else{H.e(r,"$iao")
j.a=8
j.c=r}h.a=j
g=j}},
or:function(a,b){if(H.fs(a,{func:1,args:[P.V,P.az]}))return H.m(a,{func:1,ret:null,args:[P.V,P.az]})
if(H.fs(a,{func:1,args:[P.V]}))return H.m(a,{func:1,ret:null,args:[P.V]})
throw H.c(P.kJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oq:function(){var u,t
for(;u=$.ce,u!=null;){$.dl=null
t=u.b
$.ce=t
if(t==null)$.dk=null
u.a.$0()}},
ou:function(){$.l9=!0
try{P.oq()}finally{$.dl=null
$.l9=!1
if($.ce!=null)$.ln().$1(P.ms())}},
mn:function(a){var u=new P.ew(H.m(a,{func:1,ret:-1}))
if($.ce==null){$.ce=$.dk=u
if(!$.l9)$.ln().$1(P.ms())}else $.dk=$.dk.b=u},
ot:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.ce
if(u==null){P.mn(a)
$.dl=$.dk
return}t=new P.ew(a)
s=$.dl
if(s==null){t.b=u
$.ce=$.dl=t}else{t.b=s.b
$.dl=s.b=t
if(t.b==null)$.dk=t}},
oW:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.a2
if(C.k===u){P.ks(t,t,C.k,a)
return}u.toString
P.ks(t,t,u,H.m(u.ck(a),s))},
lT:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.a2
if(u===C.k){u.toString
return P.kZ(a,b)}return P.kZ(a,H.m(u.ck(b),t))},
nP:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bf]}
H.m(b,s)
u=$.a2
if(u===C.k){u.toString
return P.lU(a,b)}t=u.dO(b,P.bf)
$.a2.toString
return P.lU(a,H.m(t,s))},
kq:function(a,b,c,d,e){var u={}
u.a=d
P.ot(new P.kr(u,e))},
mj:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
mk:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
os:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
ks:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.ck(d):c.jb(d,-1)
P.mn(d)},
ju:function ju(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
f9:function f9(){this.c=0},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e){var _=this
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
jF:function jF(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jN:function jN(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a
this.b=null},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
cP:function cP(){},
iy:function iy(){},
bf:function bf(){},
ao:function ao(a,b){this.a=a
this.b=b},
kj:function kj(){},
kr:function kr(a,b){this.a=a
this.b=b},
jT:function jT(){},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
nn:function(a,b){return new H.aJ([a,b])},
kW:function(a,b){return new H.aJ([a,b])},
np:function(a){return H.oH(a,new H.aJ([null,null]))},
dS:function(a){return new P.jR([a])},
l5:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o6:function(a,b,c){var u=new P.eL(a,b,[c])
u.c=a.e
return u},
ni:function(a,b,c){var u,t
if(P.la(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aA,a)
try{P.op(a,u)}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=P.lR(b,H.mx(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kQ:function(a,b,c){var u,t
if(P.la(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.aA,a)
try{t=u
t.a=P.lR(t.a,a,", ")}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
la:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
op:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ib",[P.f],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.l(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.w();o=n,n=m){m=u.gI(u);++s
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
no:function(a,b,c){var u=P.nn(b,c)
a.B(0,new P.hx(u,b,c))
return u},
lC:function(a,b){var u,t,s=P.dS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t)s.h(0,H.A(a[t],b))
return s},
kY:function(a){var u,t={}
if(P.la(a))return"{...}"
u=new P.ai("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.lp(a,new P.hB(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jR:function jR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(){},
y:function y(){},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
af:function af(){},
kb:function kb(){},
hC:function hC(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
jY:function jY(){},
eM:function eM(){},
ff:function ff(){},
nT:function(a,b,c,d){H.n(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.nU(!1,b,c,d)
return},
nU:function(a,b,c,d){var u,t,s=$.mQ()
if(s==null)return
u=0===c
if(u&&!0)return P.l1(s,b)
t=b.length
d=P.bL(c,d,t)
if(u&&d===t)return P.l1(s,b)
return P.l1(s,b.subarray(c,d))},
l1:function(a,b){if(P.nW(b))return
return P.nX(a,b)},
nX:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.an(t)}return},
nW:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nV:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.an(t)}return},
mm:function(a,b,c){var u,t,s
H.n(a,"$ib",[P.p],"$ab")
for(u=J.dm(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bM()
if((s&127)!==s)return t-b}return c-b},
ls:function(a,b,c,d,e,f){if(C.f.be(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fE:function fE(){},
fF:function fF(){},
bW:function bW(){},
bB:function bB(){},
h1:function h1(){},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hf:function hf(a){this.a=a},
je:function je(){},
jg:function jg(){},
kh:function kh(a){this.b=0
this.c=a},
jf:function jf(a){this.a=a},
kg:function kg(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dp:function(a,b,c){var u
H.m(b,{func:1,ret:P.p,args:[P.f]})
u=H.nE(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
ng:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nq:function(a,b,c){var u,t
H.A(b,c)
u=J.nk(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.n(u,"$ib",[c],"$ab")},
kX:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bw(a);u.w();)C.a.h(s,H.A(u.gI(u),c))
if(b)return s
return H.n(J.kS(s),"$ib",t,"$ab")},
cQ:function(a,b,c){var u,t=P.p
H.n(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ib8",[t],"$ab8")
u=a.length
c=P.bL(b,c,u)
return H.lL(b>0||c<u?C.a.f2(a,b,c):a)}if(!!J.R(a).$icF)return H.nG(a,b,P.bL(b,c,a.length))
return P.nM(a,b,c)},
nM:function(a,b,c){var u,t,s,r,q=null
H.n(a,"$ij",[P.p],"$aj")
if(b<0)throw H.c(P.ag(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aG(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gI(t))}return H.lL(r)},
nI:function(a){return new H.hq(a,H.nl(a,!1,!0,!1))},
lR:function(a,b,c){var u=J.bw(b)
if(!u.w())return a
if(c.length===0){do a+=H.l(u.gI(u))
while(u.w())}else{a+=H.l(u.gI(u))
for(;u.w();)a=a+c+H.l(u.gI(u))}return a},
lX:function(){var u=H.nw()
if(u!=null)return P.nS(u)
throw H.c(P.K("'Uri.base' is not supported"))},
fg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.n(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.mW().b
if(typeof b!=="string")H.t(H.bm(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.au(c,"bW",0))
t=c.gjk().co(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nc:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nd:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dC:function(a){if(a>=10)return""+a
return"0"+a},
lx:function(a,b){return new P.bD(1e6*b+1000*a)},
dG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ng(a)},
dt:function(a){return new P.aP(!1,null,null,a)},
kJ:function(a,b,c){return new P.aP(!0,a,b,c)},
i7:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bL:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
lM:function(a,b){if(typeof a!=="number")return a.Y()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.aj(e==null?J.aG(b):e)
return new P.hh(u,!0,a,c,"Index out of range")},
K:function(a){return new P.j7(a)},
j5:function(a){return new P.j4(a)},
lQ:function(a){return new P.cO(a)},
b4:function(a){return new P.fL(a)},
r:function(a){return new P.eE(a)},
a6:function(a,b,c){return new P.ha(a,b,c)},
nr:function(a,b,c){var u,t
H.m(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lk:function(a){H.oU(a)},
nS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.lW(e<e?C.b.v(a,0,e):a,5,f).geU()
else if(u===32)return P.lW(C.b.v(a,5,e),0,f).geU()}t=new Array(8)
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
if(P.ml(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.kb()
if(r>=0)if(P.ml(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Y()
if(typeof n!=="number")return H.F(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ae(a,"..",o)))j=n>o+2&&C.b.ae(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ae(a,"file",0)){if(q<=0){if(!C.b.ae(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ae(a,"http",0)){if(t&&p+3===o&&C.b.ae(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ae(a,"https",0)){if(t&&p+4===o&&C.b.ae(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k0(a,r,q,p,o,n,m,k)}return P.o9(a,0,e,r,q,p,o,n,m,k)},
lZ:function(a){var u=P.f
return C.a.jp(H.d(a.split("&"),[u]),P.kW(u,u),new P.jc(C.l),[P.B,P.f,P.f])},
nR:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j9(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dp(C.b.v(a,s,t),n,n)
if(typeof p!=="number")return p.eZ()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dp(C.b.v(a,s,c),n,n)
if(typeof p!=="number")return p.eZ()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
lY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ja(a)
t=new P.jb(u,a)
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
l=C.a.gav(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nR(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aU(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
o9:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.og(a,b,d)
else{if(d===b)P.dh(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oh(a,u,e-1):""
s=P.od(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.of(P.dp(C.b.v(a,r,g),new P.kc(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oe(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.l6(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.oc(a,i+1,c):n)},
mb:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dh:function(a,b,c){throw H.c(P.a6(c,a,b))},
of:function(a,b){if(a!=null&&a===P.mb(b))return
return a},
od:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.b.a_(a,u)!==93)P.dh(a,b,"Missing end `]` to match `[` in host")
P.lY(a,b+1,u)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a_(a,t)===58){P.lY(a,b,c)
return"["+a+"]"}return P.oj(a,b,c)},
oj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a_(a,u)
if(q===37){p=P.mh(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
n=C.b.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dh(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mc(q)
u+=l
t=u}}}}if(s==null)return C.b.v(a,b,c)
if(t<c){n=C.b.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
og:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.me(C.b.E(a,b)))P.dh(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dh(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.v(a,b,c)
return P.oa(t?a.toLowerCase():a)},
oa:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oh:function(a,b,c){return P.di(a,b,c,C.a_,!1)},
oe:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.di(a,b,c,C.E,!0):C.n.kf(d,new P.kd(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.oi(u,e,f)},
oi:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.ok(a,!u||c)
return P.ol(a)},
l6:function(a,b,c,d){var u,t={}
H.n(d,"$iB",[P.f,null],"$aB")
if(a!=null){if(d!=null)throw H.c(P.dt("Both query and queryParameters specified"))
return P.di(a,b,c,C.p,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.B(0,new P.ke(new P.kf(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oc:function(a,b,c){return P.di(a,b,c,C.p,!0)},
mh:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a_(a,b+1)
t=C.b.a_(a,p)
s=H.kw(u)
r=H.kw(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aU(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
mc:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.E(o,a>>>4))
C.a.n(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.ip(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.E(o,p>>>4))
C.a.n(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cQ(t,0,null)},
di:function(a,b,c,d,e){var u=P.mg(a,b,c,H.n(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.v(a,b,c):u},
mg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.n(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mh(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dh(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mc(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.v(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.b.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mf:function(a){if(C.b.a5(a,"."))return!0
return C.b.em(a,"/.")!==-1},
ol:function(a){var u,t,s,r,q,p,o
if(!P.mf(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a_(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
ok:function(a,b){var u,t,s,r,q,p
if(!P.mf(a))return!b?P.md(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gav(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gav(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.md(u[0]))}return C.a.m(u,"/")},
md:function(a){var u,t,s,r=a.length
if(r>=2&&P.me(J.mY(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.v(a,0,u)+"%3A"+C.b.aq(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ob:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dt("Invalid URL encoding"))}}return u},
l7:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.v(a,b,c)
else r=new H.u(C.b.v(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.c(P.dt("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dt("Truncated URI"))
C.a.h(r,P.ob(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ib",[P.p],"$ab")
return new P.jf(!1).co(r)},
me:function(a){var u=a|32
return 97<=u&&u<=122},
lW:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a6(m,a,t))}}if(s<0&&t>b)throw H.c(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gav(l)
if(r!==44||t!==p+7||!C.b.ae(a,"base64",p+1))throw H.c(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jB(0,a,o,u)
else{n=P.mg(a,o,u,C.p,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.j8(a,l,c)},
on:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nr(22,new P.kn(),P.S),n=new P.km(o),m=new P.ko(),l=new P.kp(),k=H.e(n.$2(0,225),"$iS")
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
ml:function(a,b,c,d,e){var u,t,s,r,q
H.n(e,"$ib",[P.p],"$ab")
u=$.mX()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.E(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
P:function P(){},
aB:function aB(a,b){this.a=a
this.b=b},
E:function E(){},
bD:function bD(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
bE:function bE(){},
fy:function fy(){},
e3:function e3(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hh:function hh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
cO:function cO(a){this.a=a},
fL:function fL(a){this.a=a},
i1:function i1(){},
eb:function eb(){},
fS:function fS(a){this.a=a},
eE:function eE(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
p:function p(){},
j:function j(){},
b7:function b7(){},
b:function b(){},
B:function B(){},
J:function J(){},
ac:function ac(){},
V:function V(){},
az:function az(){},
f:function f(){},
ai:function ai(a){this.a=a},
jc:function jc(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
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
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(){},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(){},
km:function km(a){this.a=a},
ko:function ko(){},
kp:function kp(){},
k0:function k0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jA:function jA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oC:function(a){var u,t=J.R(a)
if(!!t.$ibp){u=t.gdS(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fe(a.data,a.height,a.width)},
oB:function(a){if(a instanceof P.fe)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.kW(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oA:function(a){var u={}
a.B(0,new P.kt(u))
return u},
k2:function k2(){},
k4:function k4(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
kt:function kt(a){this.a=a},
k3:function k3(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jS:function jS(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
ht:function ht(){},
bd:function bd(){},
i_:function i_(){},
i6:function i6(){},
cJ:function cJ(){},
iB:function iB(){},
q:function q(){},
bg:function bg(){},
iU:function iU(){},
eJ:function eJ(){},
eK:function eK(){},
eU:function eU(){},
eV:function eV(){},
f5:function f5(){},
f6:function f6(){},
fc:function fc(){},
fd:function fd(){},
S:function S(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
bT:function bT(){},
i0:function i0(){},
ex:function ex(){},
dv:function dv(){},
e7:function e7(){},
c9:function c9(){},
e9:function e9(){},
ee:function ee(){},
en:function en(){},
it:function it(){},
f1:function f1(){},
f2:function f2(){}},W={
lr:function(){var u=document.createElement("a")
return u},
kL:function(){var u=document.createElement("canvas")
return u},
ne:function(a,b,c){var u=document.body,t=(u&&C.x).ag(u,a,b,c)
t.toString
u=W.C
u=new H.d4(new W.at(t),H.m(new W.h0(),{func:1,ret:P.P,args:[u]}),[u])
return H.e(u.gaL(u),"$iN")},
nf:function(a){H.e(a,"$ii")
return"wheel"},
cu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ci(a)
t=u.geN(a)
if(typeof t==="string")r=u.geN(a)}catch(s){H.an(s)}return r},
lA:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var u=W.jP(W.jP(W.jP(W.jP(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mp(new W.jE(c),W.o)
if(u!=null&&!0)J.n_(a,b,u,!1)
return new W.jD(a,b,u,!1,[e])},
m8:function(a){var u=W.lr(),t=window.location
u=new W.bN(new W.jX(u,t))
u.fg(a)
return u},
o3:function(a,b,c,d){H.e(a,"$iN")
H.I(b)
H.I(c)
H.e(d,"$ibN")
return!0},
o4:function(a,b,c,d){var u,t,s
H.e(a,"$iN")
H.I(b)
H.I(c)
u=H.e(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ma:function(){var u=P.f,t=P.lC(C.u,u),s=H.v(C.u,0),r=H.m(new W.k8(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k7(t,P.dS(u),P.dS(u),P.dS(u),null)
t.fs(null,new H.hF(C.u,r,[s,u]),q,null)
return t},
mp:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.k)return a
return u.dO(a,b)},
w:function w(){},
fw:function fw(){},
ds:function ds(){},
fx:function fx(){},
cn:function cn(){},
bU:function bU(){},
bx:function bx(){},
bV:function bV(){},
cq:function cq(){},
bz:function bz(){},
cs:function cs(){},
fO:function fO(){},
W:function W(){},
ct:function ct(){},
fP:function fP(){},
b5:function b5(){},
b6:function b6(){},
fQ:function fQ(){},
fR:function fR(){},
fU:function fU(){},
aH:function aH(){},
fV:function fV(){},
dD:function dD(){},
dE:function dE(){},
fW:function fW(){},
fX:function fX(){},
jy:function jy(a,b){this.a=a
this.b=b},
N:function N(){},
h0:function h0(){},
o:function o(){},
i:function i(){},
aI:function aI(){},
cv:function cv(){},
h5:function h5(){},
h9:function h9(){},
aQ:function aQ(){},
he:function he(){},
c_:function c_(){},
bp:function bp(){},
c0:function c0(){},
b9:function b9(){},
dT:function dT(){},
hL:function hL(){},
cB:function cB(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
hO:function hO(){},
hP:function hP(a){this.a=a},
aR:function aR(){},
hQ:function hQ(){},
a7:function a7(){},
at:function at(a){this.a=a},
C:function C(){},
cG:function cG(){},
aS:function aS(){},
i4:function i4(){},
id:function id(){},
ie:function ie(a){this.a=a},
ih:function ih(){},
aT:function aT(){},
ir:function ir(){},
aU:function aU(){},
is:function is(){},
aV:function aV(){},
iv:function iv(){},
iw:function iw(a){this.a=a},
aK:function aK(){},
be:function be(){},
ec:function ec(){},
iC:function iC(){},
iD:function iD(){},
cR:function cR(){},
aW:function aW(){},
aL:function aL(){},
iF:function iF(){},
iG:function iG(){},
iO:function iO(){},
aX:function aX(){},
aY:function aY(){},
iS:function iS(){},
iT:function iT(){},
bM:function bM(){},
jd:function jd(){},
jq:function jq(){},
bj:function bj(){},
d5:function d5(){},
d6:function d6(){},
jz:function jz(){},
ez:function ez(){},
jO:function jO(){},
eR:function eR(){},
k1:function k1(){},
k5:function k5(){},
jx:function jx(){},
jB:function jB(a){this.a=a},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l4:function l4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jD:function jD(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jE:function jE(a){this.a=a},
bN:function bN(a){this.a=a},
G:function G(){},
e2:function e2(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(){},
jZ:function jZ(){},
k_:function k_(){},
k7:function k7(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k8:function k8(){},
k6:function k6(){},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
jX:function jX(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
ki:function ki(a){this.a=a},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
dd:function dd(){},
de:function de(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
df:function df(){},
dg:function dg(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){}},O={
kM:function(a){var u=new O.a5([a])
u.bR(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cA:function cA(){this.b=this.a=null},
dJ:function dJ(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a},
dW:function dW(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cz:function cz(){},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bb:function bb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hJ:function hJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ca:function ca(){}},E={
kP:function(){var u=new E.ap()
u.a=""
u.b=!0
u.sff(0,O.kM(E.ap))
u.y.bg(u.gjC(),u.gjF())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbO(0,null)
u.scP(null)
u.sb7(null)
return u},
nJ:function(a,b){var u=new E.i9(a)
u.fb(a,b)
return u},
nO:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibV)return E.lS(a,!0,!0,!0,!1)
u=W.kL()
t=u.style
t.width="100%"
t.height="100%"
s.gcn(a).h(0,u)
return E.lS(u,!0,!0,!0,!1)},
lS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.e(C.m.cT(a,"webgl2",P.np(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(j==null)H.t(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nJ(j,a)
u=new T.iL(j)
u.b=H.aj(j.getParameter(3379))
H.aj(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hs()
t.c=new X.aD(!1,!1,!1)
t.si1(P.dS(P.p))
u.b=t
t=new X.hR(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hz(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iR(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfS(H.d([],[[P.cP,P.V]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.m(u.ghq(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.m(u.ghw(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.m(u.ghk(),o),!1,p))
t=u.z
n=W.b9
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.m(u.ghA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.m(u.ghy(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.m(u.ghE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.m(u.ghI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.m(u.ghG(),q),!1,r))
n=u.z
m=W.bj;(n&&C.a).h(n,W.ab(a,H.I(W.nf(a)),H.m(u.ghK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.m(u.ghs(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.m(u.ghu(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.m(u.ghM(),o),!1,p))
p=u.z
o=W.aY
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.m(u.ghZ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.m(u.ghV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.m(u.ghX(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aB(Date.now(),!1)
k.cy=0
k.dA()
return k},
fG:function fG(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iN:function iN(a){this.a=a}},Z={
l3:function(a,b,c){var u
H.n(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,u)},
aM:function(a){return new Z.b_(a)},
eu:function eu(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ev:function ev(a){this.a=a},
by:function by(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dx:function dx(){this.a=null},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
U:function(){var u=new D.bY()
u.sak(null)
u.saS(null)
u.c=null
u.d=0
return u},
fJ:function fJ(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
z:function z(){this.b=null},
c1:function c1(a){this.b=null
this.$ti=a},
c2:function c2(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dR:function dR(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e5:function e5(){},
ea:function ea(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},X={dy:function dy(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},hs:function hs(){var _=this
_.d=_.c=_.b=_.a=null},dU:function dU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hz:function hz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hR:function hR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i5:function i5(){},el:function el(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iR:function iR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nh:function(a){var u=new X.hb(),t=new V.ae(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lO
if(t==null){t=V.lN(0,0,1,1)
$.lO=t}u.r=t
return u},
dz:function dz(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){}},V={
dA:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.ae(a,a,a,1)},
p1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.be(a-b,u)
return(a<0?a+u:a)+b},
Z:function(a,b,c){if(a==null)return C.b.aj("null",c)
return C.b.aj(C.j.eP(Math.abs(a-0)<$.T().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ib",[P.E],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=V.Z(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.aj(u[p],s))}return u},
lj:function(a){return C.j.k5(Math.pow(2,C.W.cA(Math.log(H.oz(a))/Math.log(2))))},
dZ:function(){var u=$.lE
return u==null?$.lE=V.bc(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lD:function(a,b,c){var u=c.C(0,Math.sqrt(c.J(c))),t=b.b6(u),s=t.C(0,Math.sqrt(t.J(t))),r=u.b6(s),q=new V.Y(a.a,a.b,a.c),p=s.S(0).J(q),o=r.S(0).J(q),n=u.S(0).J(q)
return V.bc(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bK:function(){var u=$.lI
return u==null?$.lI=new V.ak(0,0):u},
lJ:function(){var u=$.cH
return u==null?$.cH=new V.aF(0,0,0):u},
lN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e8(a,b,c,d)},
bi:function(){var u=$.m3
return u==null?$.m3=new V.Y(0,0,0):u},
m5:function(){var u=$.m1
return u==null?$.m1=new V.Y(1,0,0):u},
m6:function(){var u=$.m2
return u==null?$.m2=new V.Y(0,1,0):u},
nY:function(){var u=$.jh
return u==null?$.jh=new V.Y(0,0,1):u},
m4:function(){var u=$.m0
return u==null?$.m0=new V.Y(0,0,-1):u},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
dY:function dY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.i8()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ii()
u.fc(a)
return u},
iQ:function(){var u=new V.iP(),t=P.f
u.sir(new H.aJ([t,V.cN]))
u.siu(new H.aJ([t,V.cT]))
u.c=null
return u},
bn:function bn(){},
aC:function aC(){},
dV:function dV(){},
ay:function ay(){this.a=null},
i8:function i8(){this.b=this.a=null},
ii:function ii(){this.a=null},
cN:function cN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.b=a
this.c=null},
iP:function iP(){this.c=this.b=this.a=null},
cU:function cU(a){this.b=a
this.a=this.c=null},
oX:function(a){P.nP(C.T,new V.kG(a))},
nL:function(a){var u=new V.im()
u.fd(a,!0)
return u},
bA:function bA(){},
kG:function kG(a){this.a=a},
fT:function fT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i3:function i3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
im:function im(){this.b=this.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
iq:function iq(a){this.a=a},
iH:function iH(a,b){this.a=a
this.c=null
this.d=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(){}},U={
kN:function(){var u=new U.fK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lw:function(a){var u=new U.dB()
u.a=a
return u},
fK:function fK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){this.b=this.a=null},
cx:function cx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
er:function er(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ns:function(a,b){var u=a.am,t=new A.dX(b,u)
t.cY(b,u)
t.fa(a,b)
return t},
l_:function(a,b,c,d,e){var u=new A.iY(a,c,e)
u.f=d
u.siF(P.nq(d,0,P.p))
return u},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a){this.a=a},
dK:function dK(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dX:function dX(a,b){var _=this
_.br=_.dV=_.bq=_.am=_.au=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ea=_.cs=_.e9=_.bE=_.e8=_.e7=_.bD=_.bC=_.e6=_.e5=_.bB=_.bA=_.bz=_.e4=_.e3=_.by=_.e2=_.e1=_.bx=_.e0=_.e_=_.bw=_.bv=_.dZ=_.dY=_.bu=_.bt=_.dX=_.dW=_.bs=null
_.cz=_.ee=_.cw=_.ed=_.cv=_.ec=_.cu=_.eb=_.ct=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hI:function hI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.au=b3
_.am=b4
_.bq=b5},
cW:function cW(a,b){this.b=a
this.c=b},
d_:function d_(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cY:function cY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d0:function d0(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cZ:function cZ(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
d1:function d1(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cK:function cK(){},
bX:function bX(a,b){this.a=a
this.b=b},
em:function em(){},
j2:function j2(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
cV:function cV(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
as:function as(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kl:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dj:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.Y(u+a3,t+a1,s+a2)
q=new V.Y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.Y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kl(i)
l=F.kl(j.b)
k=F.p_(d,a0,new F.kk(j,F.kl(j.c),F.kl(j.d),l,m,c),b)
if(k!=null)a.jA(k)},
p_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.a4,P.E,P.E]})
if(a<1)return
if(b<1)return
u=F.cL()
t=H.d([],[F.a4])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.dJ(new V.ae(p,0,0,1),new V.ak(r,1))
c.$3(o,r,0)
C.a.h(t,o.cp(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.dJ(new V.ae(j,i,h,1),new V.ak(r,m))
c.$3(o,r,n)
C.a.h(t,o.cp(d))}}u.d.j6(a+1,b+1,t)
return u},
dH:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
nm:function(a,b){var u,t=new F.ax()
if(a==null)H.t(P.r("May not create a line with a null start vertex."))
if(b==null)H.t(P.r("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
t.a=a
C.a.h(a.c.b,t)
t.b=b
C.a.h(b.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.a1()
return t},
nu:function(a){var u=new F.bJ()
if(a.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a1()
return u},
cL:function(){var u=new F.ah(),t=new F.ji(u)
t.b=!1
t.siG(H.d([],[F.a4]))
u.a=t
t=new F.il(u)
t.sca(H.d([],[F.bJ]))
u.b=t
t=new F.ik(u)
t.sfZ(H.d([],[F.ax]))
u.c=t
t=new F.ij(u)
t.sfT(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
l2:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.a4(),r=new F.jn()
r.sca(H.d([],[F.bJ]))
s.b=r
r=new F.jm()
u=[F.ax]
r.sh_(H.d([],u))
r.sh0(H.d([],u))
s.c=r
r=new F.jj()
u=[F.a8]
r.sfU(H.d([],u))
r.sfV(H.d([],u))
r.sfW(H.d([],u))
s.d=r
h=$.mR()
s.e=0
r=$.b2()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b1().a)!==0?e:t
s.x=(u&$.b0().a)!==0?b:t
s.y=(u&$.bu().a)!==0?f:t
s.z=(u&$.bv().a)!==0?g:t
s.Q=(u&$.mS().a)!==0?c:t
s.ch=(u&$.cm().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
kk:function kk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){this.b=this.a=null},
bJ:function bJ(){this.a=null},
ah:function ah(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
a4:function a4(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jp:function jp(a){this.a=a},
jo:function jo(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(){this.d=this.c=this.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){this.c=this.b=null},
jn:function jn(){this.b=null}},T={cS:function cS(){},ef:function ef(){},iK:function iK(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iL:function iL(a){var _=this
_.a=a
_.e=_.d=_.b=null},iM:function iM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
my:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="bumpMaps",a1="modifiers",a2=V.nL("Test 006"),a3=W.kL()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.f]
a2.dL(H.d(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],u))
a2.j4(H.d(["bumpMaps"],u))
a2.dL(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.nO(t,!0,!0,!0,!1)
r=F.cL()
F.dj(r,a,a,1,1,1,0,0,1)
F.dj(r,a,a,1,1,0,1,0,3)
F.dj(r,a,a,1,1,0,0,1,2)
F.dj(r,a,a,1,1,-1,0,0,0)
F.dj(r,a,a,1,1,0,-1,0,0)
F.dj(r,a,a,1,1,0,0,-1,3)
r.aE()
q=new O.dW()
q.sfF(O.kM(V.aq))
q.e.bg(q.ghg(),q.ghi())
p=new O.bb(q,"emission")
p.c=C.d
p.f=new V.aa(0,0,0)
q.f=p
p=new O.bb(q,"ambient")
p.c=C.d
p.f=new V.aa(0,0,0)
q.r=p
p=new O.bb(q,"diffuse")
p.c=C.d
p.f=new V.aa(0,0,0)
q.x=p
p=new O.bb(q,"invDiffuse")
p.c=C.d
p.f=new V.aa(0,0,0)
q.y=p
p=new O.hK(q,"specular")
p.c=C.d
p.f=new V.aa(0,0,0)
p.ch=100
q.z=p
p=new O.hH(q,"bump")
p.c=C.d
q.Q=p
q.ch=null
p=new O.bb(q,"reflect")
p.c=C.d
p.f=new V.aa(0,0,0)
q.cx=p
p=new O.hJ(q,"refract")
p.c=C.d
p.f=new V.aa(0,0,0)
p.ch=1
q.cy=p
p=new O.hG(q,"alpha")
p.c=C.d
p.f=1
q.db=p
p=new D.dR()
p.bR(D.a9)
p.sfQ(H.d([],[D.bC]))
p.si0(H.d([],[D.e5]))
p.siq(H.d([],[D.ea]))
p.siC(H.d([],[D.eg]))
p.siD(H.d([],[D.eh]))
p.siE(H.d([],[D.ei]))
p.ch=p.Q=null
p.cV(p.ghe(),p.ghP(),p.ghT())
q.dx=p
o=p.Q
p=o==null?p.Q=D.U():o
p.h(0,q.gi9())
p=q.dx
o=p.ch
p=o==null?p.ch=D.U():o
p.h(0,q.gbj())
q.dy=null
p=q.dx
n=V.m6()
o=U.lw(V.lD(V.lJ(),n,new V.Y(0,0,-1)))
m=new V.aa(1,1,1)
l=new D.bC()
l.c=new V.aa(1,1,1)
l.a=V.nY()
k=l.b
l.b=o
o.gu().h(0,l.gfi())
o=new D.M("mover",k,l.b,[U.ad])
o.b=!0
l.aw(o)
if(!l.c.t(0,m)){k=l.c
l.c=m
o=new D.M("color",k,m,[V.aa])
o.b=!0
l.aw(o)}p.h(0,l)
p=q.r
p.sa4(0,new V.aa(0,0,1))
p=q.x
p.sa4(0,new V.aa(0,1,0))
p=q.z
p.sa4(0,new V.aa(1,0,0))
p=q.z
if(p.c===C.d){p.c=C.i
p.bQ()
p.cd(100)
o=p.a
o.a=null
o.T(a)}p.cd(10)
j=E.kP()
j.sbO(0,r)
j.scP(q)
i=E.kP()
i.sbO(0,r)
p=new O.dJ()
p.b=V.m4()
p.c=new V.ae(0.2,0.3,0.4,1)
p.d=new V.ae(0.1,0.2,0.3,1)
p.e=V.dA(0.7)
p.f=V.dA(0.3)
p.r=V.dA(0.5)
p.x=V.dA(0.5)
p.y=new V.ae(1,1,1,1)
p.z=V.dA(0.8)
p.r1=p.k4=p.k3=p.k2=p.k1=p.id=p.go=p.fy=p.fx=p.fr=p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=!1
p.r2=1
if(!(Math.abs(0.6)<$.T().a)){p.r2=0.4
o=new D.M("vectorScale",1,0.4,[P.E])
o.b=!0
p.T(o)}if(!p.ch){p.ch=!0
o=new D.M("showWireFrame",!1,!0,[P.P])
o.b=!0
p.T(o)}if(!p.k3){p.k3=!0
o=new D.M("showAxis",!1,!0,[P.P])
o.b=!0
p.T(o)}if(!p.cy){p.cy=!0
o=new D.M("showNormals",!1,!0,[P.P])
o.b=!0
p.T(o)}if(!p.db){p.db=!0
o=new D.M("showBinormals",!1,!0,[P.P])
o.b=!0
p.T(o)}i.scP(p)
h=E.kP()
h.y.h(0,i)
h.y.h(0,j)
p=new U.cx()
p.bR(U.ad)
p.bg(p.ghc(),p.ghR())
p.e=null
p.f=V.dZ()
p.r=0
o=s.r
l=new U.es()
g=U.kN()
g.scS(0,!0)
g.scH(6.283185307179586)
g.scJ(0)
g.sac(0,0)
g.scI(100)
g.sW(0)
g.scq(0.5)
l.b=g
f=l.gaN()
g.gu().h(0,f)
g=U.kN()
g.scS(0,!0)
g.scH(6.283185307179586)
g.scJ(0)
g.sac(0,0)
g.scI(100)
g.sW(0)
g.scq(0.5)
l.c=g
g.gu().h(0,f)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.aD(!1,!1,!1)
k=l.d
l.d=e
g=[X.aD]
f=new D.M(a1,k,e,g)
f.b=!0
l.R(f)
f=l.f
if(f!==!1){l.f=!1
f=new D.M("invertX",f,!1,[P.P])
f.b=!0
l.R(f)}f=l.r
if(f!==!0){l.r=!0
f=new D.M("invertY",f,!0,[P.P])
f.b=!0
l.R(f)}l.b5(o)
p.h(0,l)
o=s.r
l=new U.er()
f=U.kN()
f.scS(0,!0)
f.scH(6.283185307179586)
f.scJ(0)
f.sac(0,0)
f.scI(100)
f.sW(0)
f.scq(0.2)
l.b=f
f.gu().h(0,l.gaN())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.aD(!0,!1,!1)
k=l.c
l.c=e
f=new D.M(a1,k,e,g)
f.b=!0
l.R(f)
l.b5(o)
p.h(0,l)
o=s.r
l=new U.et()
l.c=0.01
l.e=l.d=0
e=new X.aD(!1,!1,!1)
l.b=e
g=new D.M(a1,a,e,g)
g.b=!0
l.R(g)
l.b5(o)
p.h(0,l)
h.sb7(p)
p=new M.dF()
p.a=!0
p.sfK(0,O.kM(E.ap))
p.e.bg(p.ghm(),p.gho())
p.y=p.x=p.r=p.f=null
d=X.nh(a)
c=new X.e4()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb7(a)
o=c.c
if(!(Math.abs(o-1.0471975511965976)<$.T().a)){c.c=1.0471975511965976
o=new D.M("fov",o,1.0471975511965976,[P.E])
o.b=!0
c.aQ(o)}o=c.d
if(!(Math.abs(o-0.1)<$.T().a)){c.d=0.1
o=new D.M("near",o,0.1,[P.E])
o.b=!0
c.aQ(o)}o=c.e
if(!(Math.abs(o-2000)<$.T().a)){c.e=2000
o=new D.M("far",o,2000,[P.E])
o.b=!0
c.aQ(o)}o=p.b
if(o!==c){if(o!=null)o.gu().a2(0,p.gaO())
k=p.b
p.b=c
c.gu().h(0,p.gaO())
o=new D.M("camera",k,p.b,[X.dz])
o.b=!0
p.aP(o)}o=p.c
if(o!==d){if(o!=null)o.gu().a2(0,p.gaO())
k=p.c
p.c=d
d.gu().h(0,p.gaO())
o=new D.M("target",k,p.c,[X.ed])
o.b=!0
p.aP(o)}p.e.h(0,h)
p.b.sb7(U.lw(V.bc(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=s.d
if(o!==p){if(o!=null)o.gu().a2(0,s.gcZ())
s.d=p
p.gu().h(0,s.gcZ())
s.d_()}p=new V.iH(a0,new N.kC(q,s))
u=u.getElementById(a0)
p.c=u
if(u==null)H.t("Failed to find bumpMaps for Texture2DGroup")
p.aB(0,"../resources/BumpMap1.png",!0)
p.h(0,"../resources/BumpMap2.png")
p.h(0,"../resources/BumpMap3.png")
p.h(0,"../resources/BumpMap4.png")
p.h(0,"../resources/BumpMap5.png")
p.h(0,"../resources/ScrewBumpMap.png")
p.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.U()
p={func:1,ret:-1,args:[D.z]}
o=H.m(new N.kD(a2,q),p)
if(u.b==null)u.saS(H.d([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.oX(s)},
kC:function kC(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kU.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cI(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hp.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iP:1}
J.dN.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dP.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.i2.prototype={}
J.d2.prototype={}
J.bH.prototype={
i:function(a){var u=a[$.mF()]
if(u==null)return this.f5(a)
return"JavaScript function for "+H.l(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibF:1}
J.b8.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.t(P.K("add"))
a.push(b)},
a2:function(a,b){var u
if(!!a.fixed$length)H.t(P.K("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b4(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jw:function(a){return this.m(a,"")},
jp:function(a,b,c,d){var u,t,s
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b4(a))}return t},
jo:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.P,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.D(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b4(a))}throw H.c(H.kR())},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
f2:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kR())},
dN:function(a,b){var u,t
H.m(b,{func:1,ret:P.P,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.D(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b4(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.kQ(a,"[","]")},
gV:function(a){return new J.aw(a,a.length,[H.v(a,0)])},
gG:function(a){return H.cI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.K("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bP(a,b))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.t(P.K("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.kT.prototype={}
J.aw.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.H(s))
u=t.c
if(u>=r){t.sdj(null)
return!1}t.sdj(s[u]);++t.c
return!0},
sdj:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
J.dO.prototype={
k5:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.K(""+a+".toInt()"))},
cA:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.K(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.K(""+a+".round()"))},
eP:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.K("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f9:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.K("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ip:function(a,b){if(b<0)throw H.c(H.bm(b))
return this.dC(a,b)},
dC:function(a,b){return b>31?0:a>>>b},
$iE:1,
$iac:1}
J.dM.prototype={$ip:1}
J.dL.prototype={}
J.c3.prototype={
a_:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.t(H.bP(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.kJ(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bL(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ae:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ae(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.bm(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.i7(b,null))
if(b>c)throw H.c(P.i7(b,null))
if(c>a.length)throw H.c(P.i7(c,null))
return a.substring(b,c)},
aq:function(a,b){return this.v(a,b,null)},
k8:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
en:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
em:function(a,b){return this.en(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilG:1,
$if:1}
H.u.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ad3:function(){return[P.p]},
$ay:function(){return[P.p]},
$aj:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h_.prototype={}
H.c4.prototype={
gV:function(a){var u=this
return new H.cy(u,u.gl(u),[H.au(u,"c4",0)])},
bL:function(a,b){return this.f4(0,H.m(b,{func:1,ret:P.P,args:[H.au(this,"c4",0)]}))}}
H.cy.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.dm(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.b4(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.H(s,u));++t.c
return!0},
sb0:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
H.hD.prototype={
gV:function(a){return new H.hE(J.bw(this.a),this.b,this.$ti)},
gl:function(a){return J.aG(this.a)},
H:function(a,b){return this.b.$1(J.fu(this.a,b))},
$aj:function(a,b){return[b]}}
H.hE.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.sb0(u.c.$1(t.gI(t)))
return!0}u.sb0(null)
return!1},
gI:function(a){return this.a},
sb0:function(a){this.a=H.A(a,H.v(this,1))},
$ab7:function(a,b){return[b]}}
H.hF.prototype={
gl:function(a){return J.aG(this.a)},
H:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ac4:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d4.prototype={
gV:function(a){return new H.jr(J.bw(this.a),this.b,this.$ti)}}
H.jr.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.D(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bZ.prototype={}
H.d3.prototype={
n:function(a,b,c){H.A(c,H.au(this,"d3",0))
throw H.c(P.K("Cannot modify an unmodifiable list"))}}
H.eo.prototype={}
H.fM.prototype={
i:function(a){return P.kY(this)},
n:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
return H.nb()},
$iB:1}
H.fN.prototype={
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.dk(b)},
dk:function(a){return this.b[H.I(a)]},
B:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.m(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.dk(r),p))}}}
H.iV.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hZ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kH.prototype={
$1:function(a){if(!!J.R(a).$ibE)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.f3.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaz:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibF:1,
gka:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iE.prototype={}
H.iu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.co.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.co))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cI(this.a)
else u=typeof t!=="object"?J.dr(t):H.cI(t)
return(u^H.cI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.iX.prototype={
i:function(a){return this.a}}
H.fI.prototype={
i:function(a){return this.a}}
H.ig.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.js.prototype={
i:function(a){return"Assertion failed: "+P.dG(this.a)}}
H.aJ.prototype={
gl:function(a){return this.a},
gjv:function(a){return this.a===0},
ga7:function(a){return new H.hv(this,[H.v(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dg(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dg(t,b)}else return s.js(b)},
js:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cD(u.bY(t,u.cC(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bi(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bi(r,b)
s=t==null?null:t.b
return s}else return q.jt(b)},
jt:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bY(r,s.cC(a))
t=s.cD(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.v(s,0))
H.A(c,H.v(s,1))
if(typeof b==="string"){u=s.b
s.d3(u==null?s.b=s.c7():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d3(t==null?s.c=s.c7():t,b,c)}else s.ju(b,c)},
ju:function(a,b){var u,t,s,r,q=this
H.A(a,H.v(q,0))
H.A(b,H.v(q,1))
u=q.d
if(u==null)u=q.d=q.c7()
t=q.cC(a)
s=q.bY(u,t)
if(s==null)q.ce(u,t,[q.c8(a,b)])
else{r=q.cD(s,a)
if(r>=0)s[r].b=b
else s.push(q.c8(a,b))}},
B:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b4(s))
u=u.c}},
d3:function(a,b,c){var u,t=this
H.A(b,H.v(t,0))
H.A(c,H.v(t,1))
u=t.bi(a,b)
if(u==null)t.ce(a,b,t.c8(b,c))
else u.b=c},
h7:function(){this.r=this.r+1&67108863},
c8:function(a,b){var u,t=this,s=new H.hu(H.A(a,H.v(t,0)),H.A(b,H.v(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.h7()
return s},
cC:function(a){return J.dr(a)&0x3ffffff},
cD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.kY(this)},
bi:function(a,b){return a[b]},
bY:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fP:function(a,b){delete a[b]},
dg:function(a,b){return this.bi(a,b)!=null},
c7:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ce(t,u,t)
this.fP(t,u)
return t}}
H.hu.prototype={}
H.hv.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hw.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b4(t))
else{t=u.c
if(t==null){u.sd2(null)
return!1}else{u.sd2(t.a)
u.c=u.c.c
return!0}}},
sd2:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
H.kx.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.ky.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kz.prototype={
$1:function(a){return this.a(H.I(a))},
$S:44}
H.hq.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilG:1,
$inH:1}
H.cD.prototype={$icD:1}
H.bI.prototype={$ibI:1,$inQ:1}
H.e_.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cE.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oE(c)
H.bl(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.E]},
$ay:function(){return[P.E]},
$ij:1,
$aj:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.e0.prototype={
n:function(a,b,c){H.aj(c)
H.bl(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.p]},
$ay:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hS.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.e1.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$ipl:1}
H.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$icF:1,
$iS:1}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
P.ju.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jt.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jv.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jw.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f9.prototype={
ft:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.ka(this,b),0),a)
else throw H.c(P.K("`setTimeout()` not found."))},
fu:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.k9(this,a,Date.now(),b),0),a)
else throw H.c(P.K("Periodic timer."))},
$ibf:1}
P.ka.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k9.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.f9(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bk.prototype={
jz:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.m(this.d,{func:1,ret:P.P,args:[P.V]}),a.a,P.P,P.V)},
jr:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.fs(u,{func:1,args:[P.V,P.az]}))return H.lg(r.jW(u,a.a,a.b,null,t,P.az),s)
else return H.lg(r.cO(H.m(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aN.prototype={
eO:function(a,b,c){var u,t,s,r=H.v(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.or(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a2,[c])
s=b==null?1:3
this.d4(new P.bk(t,s,a,b,[r,c]))
return t},
k0:function(a,b){return this.eO(a,null,b)},
d4:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibk")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaN")
s=u.a
if(s<4){u.d4(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.ks(null,null,s,H.m(new P.jF(t,a),{func:1,ret:-1}))}},
dw:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibk")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaN")
u=q.a
if(u<4){q.dw(a)
return}p.a=u
p.c=q.c}o.a=p.bl(a)
u=p.b
u.toString
P.ks(null,null,u,H.m(new P.jJ(o,p),{func:1,ret:-1}))}},
cc:function(){var u=H.e(this.c,"$ibk")
this.c=null
return this.bl(u)},
bl:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dc:function(a){var u,t,s=this,r=H.v(s,0)
H.lg(a,{futureOr:1,type:r})
u=s.$ti
if(H.ld(a,"$icw",u,"$acw"))if(H.ld(a,"$iaN",u,null))P.m7(a,s)
else P.o2(a,s)
else{t=s.cc()
H.A(a,r)
s.a=4
s.c=a
P.d7(s,t)}},
dd:function(a,b){var u,t=this
H.e(b,"$iaz")
u=t.cc()
t.a=8
t.c=new P.ao(a,b)
P.d7(t,u)},
$icw:1}
P.jF.prototype={
$0:function(){P.d7(this.a,this.b)},
$S:2}
P.jJ.prototype={
$0:function(){P.d7(this.b,this.a.a)},
$S:2}
P.jG.prototype={
$1:function(a){var u=this.a
u.a=0
u.dc(a)},
$S:30}
P.jH.prototype={
$2:function(a,b){H.e(b,"$iaz")
this.a.dd(a,b)},
$1:function(a){return this.$2(a,null)},
$S:56}
P.jI.prototype={
$0:function(){this.a.dd(this.b,this.c)},
$S:2}
P.jM.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eM(H.m(s.d,{func:1}),null)}catch(r){u=H.an(r)
t=H.cj(r)
if(o.d){s=H.e(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.R(n).$icw){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.k0(new P.jN(p),null)
s.a=!1}},
$S:3}
P.jN.prototype={
$1:function(a){return this.a},
$S:51}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.A(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cO(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.cj(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jK.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iao")
r=m.c
if(H.D(r.jz(u))&&r.e!=null){q=m.b
q.b=r.jr(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.cj(p)
r=H.e(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.ew.prototype={}
P.ix.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aN($.a2,[P.p])
r.a=0
u=H.v(s,0)
t=H.m(new P.iz(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.iA(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iz.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.v(this.b,0)]}}}
P.iA.prototype={
$0:function(){this.b.dc(this.a.a)},
$S:2}
P.cP.prototype={}
P.iy.prototype={}
P.bf.prototype={}
P.ao.prototype={
i:function(a){return H.l(this.a)},
$ibE:1}
P.kj.prototype={$ipA:1}
P.kr.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e3():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jT.prototype={
jX:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.a2){a.$0()
return}P.mj(r,r,this,a,-1)}catch(s){u=H.an(s)
t=H.cj(s)
P.kq(r,r,this,u,H.e(t,"$iaz"))}},
jY:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a2){a.$1(b)
return}P.mk(r,r,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.cj(s)
P.kq(r,r,this,u,H.e(t,"$iaz"))}},
jb:function(a,b){return new P.jV(this,H.m(a,{func:1,ret:b}),b)},
ck:function(a){return new P.jU(this,H.m(a,{func:1,ret:-1}))},
dO:function(a,b){return new P.jW(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eM:function(a,b){H.m(a,{func:1,ret:b})
if($.a2===C.k)return a.$0()
return P.mj(null,null,this,a,b)},
cO:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a2===C.k)return a.$1(b)
return P.mk(null,null,this,a,b,c,d)},
jW:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a2===C.k)return a.$2(b,c)
return P.os(null,null,this,a,b,c,d,e,f)}}
P.jV.prototype={
$0:function(){return this.a.eM(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jU.prototype={
$0:function(){return this.a.jX(this.b)},
$S:3}
P.jW.prototype={
$1:function(a){var u=this.c
return this.a.jY(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jR.prototype={
gV:function(a){var u=this,t=new P.eL(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icb")!=null}else{t=this.fL(b)
return t}},
fL:function(a){var u=this.d
if(u==null)return!1
return this.bW(this.dl(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d8(u==null?s.b=P.l5():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d8(t==null?s.c=P.l5():t,b)}else return s.fw(0,b)},
fw:function(a,b){var u,t,s,r=this
H.A(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.l5()
t=r.de(b)
s=u[t]
if(s==null)u[t]=[r.bT(b)]
else{if(r.bW(s,b)>=0)return!1
s.push(r.bT(b))}return!0},
a2:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i4(this.c,b)
else return this.i3(0,b)},
i3:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dl(r,b)
t=s.bW(u,b)
if(t<0)return!1
s.dE(u.splice(t,1)[0])
return!0},
d8:function(a,b){H.A(b,H.v(this,0))
if(H.e(a[b],"$icb")!=null)return!1
a[b]=this.bT(b)
return!0},
i4:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icb")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
da:function(){this.r=1073741823&this.r+1},
bT:function(a){var u,t=this,s=new P.cb(H.A(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.da()
return s},
dE:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.da()},
de:function(a){return J.dr(a)&1073741823},
dl:function(a,b){return a[this.de(b)]},
bW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eL.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b4(t))
else{t=u.c
if(t==null){u.sd9(null)
return!1}else{u.sd9(H.A(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sd9:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
P.hx.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:6}
P.hy.prototype={$ij:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cy(a,this.gl(a),[H.bQ(this,a,"y",0)])},
H:function(a,b){return this.j(a,b)},
B:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.bQ(s,a,"y",0)]})
u=s.gl(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gl(a))throw H.c(P.b4(a))}},
k7:function(a,b){var u,t=this,s=H.d([],[H.bQ(t,a,"y",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
k6:function(a){return this.k7(a,!0)},
jl:function(a,b,c,d){var u
H.A(d,H.bQ(this,a,"y",0))
P.bL(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.kQ(a,"[","]")}}
P.hA.prototype={}
P.hB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:6}
P.af.prototype={
B:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.bQ(s,a,"af",0),H.bQ(s,a,"af",1)]})
for(u=J.bw(s.ga7(a));u.w();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aG(this.ga7(a))},
i:function(a){return P.kY(a)},
$iB:1}
P.kb.prototype={
n:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
throw H.c(P.K("Cannot modify unmodifiable map"))}}
P.hC.prototype={
j:function(a,b){return J.lo(this.a,b)},
n:function(a,b,c){J.kI(this.a,H.A(b,H.v(this,0)),H.A(c,H.v(this,1)))},
B:function(a,b){J.lp(this.a,H.m(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aG(this.a)},
i:function(a){return J.av(this.a)},
$iB:1}
P.ep.prototype={}
P.jY.prototype={
as:function(a,b){var u
for(u=J.bw(H.n(b,"$ij",this.$ti,"$aj"));u.w();)this.h(0,u.gI(u))},
i:function(a){return P.kQ(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.lM(b,"index")
for(u=P.o6(r,r.r,H.v(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ij:1,
$ilP:1}
P.eM.prototype={}
P.ff.prototype={}
P.fE.prototype={
jB:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bL(a0,a1,b.length)
u=$.mU()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kw(C.b.E(b,n))
j=H.kw(C.b.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.v(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.v(b,s,a1)
f=g.length
if(q>=0)P.ls(b,p,a1,q,o,f)
else{e=C.f.be(f-1,4)+1
if(e===1)throw H.c(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ls(b,p,a1,q,o,d)
else{e=C.f.be(d,4)
if(e===1)throw H.c(P.a6(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.p],P.f]}}
P.fF.prototype={
$abB:function(){return[[P.b,P.p],P.f]}}
P.bW.prototype={}
P.bB.prototype={}
P.h1.prototype={
$abW:function(){return[P.f,[P.b,P.p]]}}
P.hg.prototype={
i:function(a){return this.a}}
P.hf.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.ai("")
if(r>b)q.a+=C.b.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.n4(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.f,P.f]}}
P.je.prototype={
gjk:function(){return C.R}}
P.jg.prototype={
co:function(a){var u,t,s=P.bL(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kh(u)
if(t.fX(a,0,s)!==s)t.dH(J.n0(a,s-1),0)
return new Uint8Array(u.subarray(0,H.om(0,t.b,u.length)))},
$abB:function(){return[P.f,[P.b,P.p]]}}
P.kh.prototype={
dH:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fX:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dH(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jf.prototype={
co:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[P.p],"$ab")
u=P.nT(!1,a,0,null)
if(u!=null)return u
t=P.bL(0,null,J.aG(a))
s=P.mm(a,0,t)
if(s>0){r=P.cQ(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.kg(!1,q)
n.c=o
n.jc(a,p,t)
if(n.e>0){H.t(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.p],P.f]}}
P.kg.prototype={
jc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dm(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bM()
if((o&192)!==128){n=P.a6(h+C.f.bc(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a6("Overlong encoding of 0x"+C.f.bc(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.f.bc(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c7(u)
i.c=!1}for(n=p<c;n;){m=P.mm(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cQ(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Y()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.f.bc(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.f.bc(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.P.prototype={}
P.aB.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.f.aU(u,30))&1073741823},
i:function(a){var u=this,t=P.nc(H.nD(u)),s=P.dC(H.nB(u)),r=P.dC(H.nx(u)),q=P.dC(H.ny(u)),p=P.dC(H.nA(u)),o=P.dC(H.nC(u)),n=P.nd(H.nz(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bD.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bD&&this.a===b.a},
gG:function(a){return C.f.gG(this.a)},
i:function(a){var u,t,s,r=new P.fZ(),q=this.a
if(q<0)return"-"+new P.bD(0-q).i(0)
u=r.$1(C.f.a6(q,6e7)%60)
t=r.$1(C.f.a6(q,1e6)%60)
s=new P.fY().$1(q%1e6)
return""+C.f.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bE.prototype={}
P.fy.prototype={
i:function(a){return"Assertion failed"}}
P.e3.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbV()+o+u
if(!q.a)return t
s=q.gbU()
r=P.dG(q.b)
return t+s+": "+r}}
P.c8.prototype={
gbV:function(){return"RangeError"},
gbU:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hh.prototype={
gbV:function(){return"RangeError"},
gbU:function(){var u,t=H.aj(this.b)
if(typeof t!=="number")return t.Y()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.j7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j4.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dG(u)+"."}}
P.i1.prototype={
i:function(a){return"Out of Memory"},
$ibE:1}
P.eb.prototype={
i:function(a){return"Stack Overflow"},
$ibE:1}
P.fS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
i:function(a){return"Exception: "+this.a}}
P.ha.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.v(f,m,n)
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bF.prototype={}
P.p.prototype={}
P.j.prototype={
bL:function(a,b){var u=H.au(this,"j",0)
return new H.d4(this,H.m(b,{func:1,ret:P.P,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.w();)++u
return u},
gaL:function(a){var u,t=this.gV(this)
if(!t.w())throw H.c(H.kR())
u=t.gI(t)
if(t.w())throw H.c(H.nj())
return u},
H:function(a,b){var u,t,s
P.lM(b,"index")
for(u=this.gV(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.ni(this,"(",")")}}
P.b7.prototype={}
P.b.prototype={$ij:1}
P.B.prototype={}
P.J.prototype={
gG:function(a){return P.V.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
t:function(a,b){return this===b},
gG:function(a){return H.cI(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.f.prototype={$ilG:1}
P.ai.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipa:1}
P.jc.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.n(a,"$iB",[r,r],"$aB")
H.I(b)
u=J.dn(b).em(b,"=")
if(u===-1){if(b!=="")J.kI(a,P.l7(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.v(b,0,u)
s=C.b.aq(b,u+1)
r=this.a
J.kI(a,P.l7(t,0,t.length,r,!0),P.l7(s,0,s.length,r,!0))}return a},
$S:50}
P.j9.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.ja.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.jb.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dp(C.b.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cc.prototype={
geV:function(){return this.b},
gcB:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.v(u,1,u.length-1)
return u},
gbG:function(a){var u=this.d
if(u==null)return P.mb(this.a)
return u},
gcM:function(a){var u=this.f
return u==null?"":u},
geh:function(){var u=this.r
return u==null?"":u},
eK:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iB",[P.f,null],"$aB")
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
n=P.l6(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gcN:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.si2(new P.ep(P.lZ(u==null?"":u),[t,t]))}return s.Q},
gei:function(){return this.c!=null},
gel:function(){return this.f!=null},
gej:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$il0)if(s.a==b.gbN())if(s.c!=null===b.gei())if(s.b==b.geV())if(s.gcB(s)==b.gcB(b))if(s.gbG(s)==b.gbG(b))if(s.e===b.geE(b)){u=s.f
t=u==null
if(!t===b.gel()){if(t)u=""
if(u===b.gcM(b)){u=s.r
t=u==null
if(!t===b.gej()){if(t)u=""
u=u===b.geh()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
si2:function(a){var u=P.f
this.Q=H.n(a,"$iB",[u,u],"$aB")},
$il0:1,
gbN:function(){return this.a},
geE:function(a){return this.e}}
P.kc.prototype={
$1:function(a){throw H.c(P.a6("Invalid port",this.a,this.b+1))},
$S:18}
P.kd.prototype={
$1:function(a){return P.fg(C.a0,a,C.l,!1)},
$S:19}
P.kf.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.fg(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.fg(C.r,b,C.l,!0))}},
$S:20}
P.ke.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bw(H.mx(b,"$ij")),t=this.a;u.w();)t.$2(a,H.I(u.gI(u)))},
$S:40}
P.j8.prototype={
geU:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.en(u,"?",o)
s=u.length
if(t>=0){r=P.di(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jA("data",p,p,p,P.di(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kn.prototype={
$1:function(a){return new Uint8Array(96)},
$S:57}
P.km.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.n1(u,0,96,b)
return u},
$S:39}
P.ko.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.kp.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k0.prototype={
gei:function(){return this.c>0},
gek:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gel:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
gej:function(){return this.r<this.a.length},
gdn:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdq:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbN:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdn())q=t.x="http"
else if(t.gdq()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.v(t.a,0,q)
t.x=q}return q},
geV:function(){var u=this.c,t=this.b+3
return u>t?C.b.v(this.a,t,u-1):""},
gcB:function(a){var u=this.c
return u>0?C.b.v(this.a,u,this.d):""},
gbG:function(a){var u,t=this
if(t.gek()){u=t.d
if(typeof u!=="number")return u.D()
return P.dp(C.b.v(t.a,u+1,t.e),null,null)}if(t.gdn())return 80
if(t.gdq())return 443
return 0},
geE:function(a){return C.b.v(this.a,this.e,this.f)},
gcM:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.b.v(this.a,u+1,t):""},
geh:function(){var u=this.r,t=this.a
return u<t.length?C.b.aq(t,u+1):""},
gcN:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Y()
if(t>=u.r)return C.a1
t=P.f
return new P.ep(P.lZ(u.gcM(u)),[t,t])},
eK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iB",[P.f,null],"$aB")
u=k.gbN()
t=u==="file"
s=k.c
r=s>0?C.b.v(k.a,k.b+3,s):""
q=k.gek()?k.gbG(k):j
s=k.c
if(s>0)p=C.b.v(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.v(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.l6(j,0,0,b)
n=k.r
l=n<s.length?C.b.aq(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$il0&&this.a===b.i(0)},
i:function(a){return this.a},
$il0:1}
P.jA.prototype={}
W.w.prototype={}
W.fw.prototype={
gl:function(a){return a.length}}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.fx.prototype={
i:function(a){return String(a)}}
W.cn.prototype={$icn:1}
W.bU.prototype={$ibU:1}
W.bx.prototype={$ibx:1}
W.bV.prototype={
cT:function(a,b,c){if(c!=null)return a.getContext(b,P.oA(c))
return a.getContext(b)},
eY:function(a,b){return this.cT(a,b,null)},
$ibV:1}
W.cq.prototype={$icq:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fO.prototype={
gl:function(a){return a.length}}
W.W.prototype={$iW:1}
W.ct.prototype={
gl:function(a){return a.length}}
W.fP.prototype={}
W.b5.prototype={}
W.b6.prototype={}
W.fQ.prototype={
gl:function(a){return a.length}}
W.fR.prototype={
gl:function(a){return a.length}}
W.fU.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fV.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.n(c,"$ial",[P.ac],"$aal")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ac]]},
$ay:function(){return[[P.al,P.ac]]},
$ij:1,
$aj:function(){return[[P.al,P.ac]]},
$ib:1,
$ab:function(){return[[P.al,P.ac]]},
$aG:function(){return[[P.al,P.ac]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaK(a))+" x "+H.l(this.gaF(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ial)return!1
return a.left===u.gbF(b)&&a.top===u.gbJ(b)&&this.gaK(a)===u.gaK(b)&&this.gaF(a)===u.gaF(b)},
gG:function(a){return W.m9(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(this.gaK(a)),C.j.gG(this.gaF(a)))},
gdP:function(a){return a.bottom},
gaF:function(a){return a.height},
gbF:function(a){return a.left},
gbI:function(a){return a.right},
gbJ:function(a){return a.top},
gaK:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ac]}}
W.fW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ay:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.fX.prototype={
gl:function(a){return a.length}}
W.jy.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iN")},
n:function(a,b,c){var u
H.e(c,"$iN")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.k6(this)
return new J.aw(u,u.length,[H.v(u,0)])},
$ay:function(){return[W.N]},
$aj:function(){return[W.N]},
$ab:function(){return[W.N]}}
W.N.prototype={
gja:function(a){return new W.jB(a)},
gcn:function(a){return new W.jy(a,a.children)},
gdR:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lz
if(u==null){u=H.d([],[W.aE])
t=new W.e2(u)
C.a.h(u,W.m8(null))
C.a.h(u,W.ma())
$.lz=t
d=t}else d=u
u=$.ly
if(u==null){u=new W.fh(d)
$.ly=u
c=u}else{u.a=d
c=u}}if($.bo==null){u=document
t=u.implementation.createHTMLDocument("")
$.bo=t
$.kO=t.createRange()
t=$.bo.createElement("base")
H.e(t,"$icn")
t.href=u.baseURI
$.bo.head.appendChild(t)}u=$.bo
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibx")}u=$.bo
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bo.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.kO.selectNodeContents(s)
r=$.kO.createContextualFragment(b)}else{s.innerHTML=b
r=$.bo.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bo.body
if(s==null?u!=null:s!==u)J.lq(s)
c.cU(r)
document.adoptNode(r)
return r},
je:function(a,b,c){return this.ag(a,b,c,null)},
f0:function(a,b){a.textContent=null
a.appendChild(this.ag(a,b,null,null))},
$iN:1,
geN:function(a){return a.tagName}}
W.h0.prototype={
$1:function(a){return!!J.R(H.e(a,"$iC")).$iN},
$S:24}
W.o.prototype={$io:1}
W.i.prototype={
j5:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.fz(a,b,c,!1)},
fz:function(a,b,c,d){return a.addEventListener(b,H.cg(H.m(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.aI.prototype={$iaI:1}
W.cv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaI")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icv:1,
$aG:function(){return[W.aI]}}
W.h5.prototype={
gl:function(a){return a.length}}
W.h9.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.he.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iC")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$ay:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ic_:1,
$aG:function(){return[W.C]}}
W.bp.prototype={$ibp:1,
gdS:function(a){return a.data}}
W.c0.prototype={$ic0:1}
W.b9.prototype={$ib9:1}
W.dT.prototype={
i:function(a){return String(a)},
$idT:1}
W.hL.prototype={
gl:function(a){return a.length}}
W.cB.prototype={$icB:1}
W.hM.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.B(a,new W.hN(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hO.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.B(a,new W.hP(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.hP.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aR.prototype={$iaR:1}
W.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaR")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.a7.prototype={$ia7:1}
W.at.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lQ("No elements"))
if(t>1)throw H.c(P.lQ("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.n(b,"$ij",[W.C],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dI(u,u.length,[H.bQ(C.a2,u,"G",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ay:function(){return[W.C]},
$aj:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jS:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jU:function(a,b){var u,t
try{u=a.parentNode
J.mZ(u,b,a)}catch(t){H.an(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f3(a):u},
j8:function(a,b){return a.appendChild(H.e(b,"$iC"))},
i7:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iC")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$ay:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aG:function(){return[W.C]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.id.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.B(a,new W.ie(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.ih.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.ir.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aG:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.iv.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.f])
this.B(a,new W.iw(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.f,P.f]},
$iB:1,
$aB:function(){return[P.f,P.f]}}
W.iw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:20}
W.aK.prototype={$iaK:1}
W.be.prototype={$ibe:1}
W.ec.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bP(a,b,c,d)
u=W.ne("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).as(0,new W.at(u))
return t}}
W.iC.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bP(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaL(u)
s.toString
u=new W.at(s)
r=u.gaL(u)
t.toString
r.toString
new W.at(t).as(0,new W.at(r))
return t}}
W.iD.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bP(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaL(u)
t.toString
s.toString
new W.at(t).as(0,new W.at(s))
return t}}
W.cR.prototype={$icR:1}
W.aW.prototype={$iaW:1}
W.aL.prototype={$iaL:1}
W.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aG:function(){return[W.aL]}}
W.iG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aG:function(){return[W.aW]}}
W.iO.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aG:function(){return[W.aX]}}
W.iT.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.jd.prototype={
i:function(a){return String(a)}}
W.jq.prototype={
gl:function(a){return a.length}}
W.bj.prototype={
gjh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.K("deltaY is not supported"))},
gjg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.K("deltaX is not supported"))},
$ibj:1}
W.d5.prototype={
i8:function(a,b){return a.requestAnimationFrame(H.cg(H.m(b,{func:1,ret:-1,args:[P.ac]}),1))},
fR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d6.prototype={$id6:1}
W.jz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iW")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.W]},
$ay:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aG:function(){return[W.W]}}
W.ez.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
if(!u.$ial)return!1
return a.left===u.gbF(b)&&a.top===u.gbJ(b)&&a.width===u.gaK(b)&&a.height===u.gaF(b)},
gG:function(a){return W.m9(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gaF:function(a){return a.height},
gaK:function(a){return a.width}}
W.jO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aG:function(){return[W.aQ]}}
W.eR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iC")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$ay:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aG:function(){return[W.C]}}
W.k1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.k5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aG:function(){return[W.aK]}}
W.jx.prototype={
B:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$id6")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.f,P.f]},
$aB:function(){return[P.f,P.f]}}
W.jB.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.jC.prototype={}
W.l4.prototype={}
W.jD.prototype={}
W.jE.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:37}
W.bN.prototype={
fg:function(a){var u
if($.d8.gjv($.d8)){for(u=0;u<262;++u)$.d8.n(0,C.Y[u],W.oJ())
for(u=0;u<12;++u)$.d8.n(0,C.v[u],W.oK())}},
aV:function(a){return $.mV().X(0,W.cu(a))},
at:function(a,b,c){var u=$.d8.j(0,H.l(W.cu(a))+"::"+b)
if(u==null)u=$.d8.j(0,"*::"+b)
if(u==null)return!1
return H.lc(u.$4(a,b,c,this))},
$iaE:1}
W.G.prototype={
gV:function(a){return new W.dI(a,this.gl(a),[H.bQ(this,a,"G",0)])}}
W.e2.prototype={
aV:function(a){return C.a.dN(this.a,new W.hY(a))},
at:function(a,b,c){return C.a.dN(this.a,new W.hX(a,b,c))},
$iaE:1}
W.hY.prototype={
$1:function(a){return H.e(a,"$iaE").aV(this.a)},
$S:26}
W.hX.prototype={
$1:function(a){return H.e(a,"$iaE").at(this.a,this.b,this.c)},
$S:26}
W.eZ.prototype={
fs:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bL(0,new W.jZ())
t=b.bL(0,new W.k_())
this.b.as(0,u)
s=this.c
s.as(0,C.B)
s.as(0,t)},
aV:function(a){return this.a.X(0,W.cu(a))},
at:function(a,b,c){var u=this,t=W.cu(a),s=u.c
if(s.X(0,H.l(t)+"::"+b))return u.d.j7(c)
else if(s.X(0,"*::"+b))return u.d.j7(c)
else{s=u.b
if(s.X(0,H.l(t)+"::"+b))return!0
else if(s.X(0,"*::"+b))return!0
else if(s.X(0,H.l(t)+"::*"))return!0
else if(s.X(0,"*::*"))return!0}return!1},
$iaE:1}
W.jZ.prototype={
$1:function(a){return!C.a.X(C.v,H.I(a))},
$S:27}
W.k_.prototype={
$1:function(a){return C.a.X(C.v,H.I(a))},
$S:27}
W.k7.prototype={
at:function(a,b,c){if(this.f8(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1}}
W.k8.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:19}
W.k6.prototype={
aV:function(a){var u=J.R(a)
if(!!u.$icJ)return!1
u=!!u.$iq
if(u&&W.cu(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aV(a)},
$iaE:1}
W.dI.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdm(J.lo(u.a,t))
u.c=t
return!0}u.sdm(null)
u.c=s
return!1},
gI:function(a){return this.d},
sdm:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
W.aE.prototype={}
W.jX.prototype={$ipm:1}
W.fh.prototype={
cU:function(a){new W.ki(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lq(a)
else b.removeChild(a)},
ie:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.n2(a)
n=o.a.getAttribute("is")
H.e(a,"$iN")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.D(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.an(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.an(r)}try{s=W.cu(a)
this.ic(H.e(a,"$iN"),b,p,t,s,H.e(o,"$iB"),H.I(n))}catch(r){if(H.an(r) instanceof P.aP)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ic:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aV(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.n5(r)
H.I(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$icR)o.cU(a.content)},
$ip8:1}
W.ki.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ie(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.an(s)
r=H.e(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iC")}},
$S:35}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
P.k2.prototype={
ef:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cR:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$inH)throw H.c(P.j5("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ibU)return a
if(!!u.$icv)return a
if(!!u.$ibp)return a
if(!!u.$icD||!!u.$ibI||!!u.$icB)return a
if(!!u.$iB){t=q.ef(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.B(a,new P.k4(p,q))
return p.a}if(!!u.$ib){t=q.ef(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jd(a,t)}throw H.c(P.j5("structured clone of other type"))},
jd:function(a,b){var u,t=J.dm(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.cR(t.j(a,u)))
return r}}
P.k4.prototype={
$2:function(a,b){this.a.a[a]=this.b.cR(b)},
$S:6}
P.fe.prototype={$ibp:1,
gdS:function(a){return this.a}}
P.kt.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.k3.prototype={}
P.h6.prototype={
gb2:function(){var u=this.b,t=H.au(u,"y",0),s=W.N
return new H.hD(new H.d4(u,H.m(new P.h7(),{func:1,ret:P.P,args:[t]}),[t]),H.m(new P.h8(),{func:1,ret:s,args:[t]}),[t,s])},
B:function(a,b){H.m(b,{func:1,ret:-1,args:[W.N]})
C.a.B(P.kX(this.gb2(),!1,W.N),b)},
n:function(a,b,c){var u
H.e(c,"$iN")
u=this.gb2()
J.n3(u.b.$1(J.fu(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aG(this.gb2().a)},
j:function(a,b){var u=this.gb2()
return u.b.$1(J.fu(u.a,b))},
gV:function(a){var u=P.kX(this.gb2(),!1,W.N)
return new J.aw(u,u.length,[H.v(u,0)])},
$ay:function(){return[W.N]},
$aj:function(){return[W.N]},
$ab:function(){return[W.N]}}
P.h7.prototype={
$1:function(a){return!!J.R(H.e(a,"$iC")).$iN},
$S:24}
P.h8.prototype={
$1:function(a){return H.k(H.e(a,"$iC"),"$iN")},
$S:33}
P.jS.prototype={
gbI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.A(u+t,H.v(this,0))},
gdP:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.A(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ial){t=p.a
if(t==u.gbF(b)){s=p.b
if(s==u.gbJ(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.F(r)
q=H.v(p,0)
if(H.A(t+r,q)===u.gbI(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.F(t)
u=H.A(s+t,q)===u.gdP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dr(s),q=t.b,p=J.dr(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.F(o)
u=H.v(t,0)
o=C.f.gG(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.F(s)
u=C.f.gG(H.A(q+s,u))
return P.o5(P.jQ(P.jQ(P.jQ(P.jQ(0,r),p),o),u))}}
P.al.prototype={
gbF:function(a){return this.a},
gbJ:function(a){return this.b},
gaK:function(a){return this.c},
gaF:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.ht.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aG:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibd")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aG:function(){return[P.bd]}}
P.i6.prototype={
gl:function(a){return a.length}}
P.cJ.prototype={$icJ:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.q.prototype={
gcn:function(a){return new P.h6(a,new W.at(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.m8(null))
C.a.h(p,W.ma())
C.a.h(p,new W.k6())
c=new W.fh(new W.e2(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).je(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bg.prototype={$ibg:1}
P.iU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibg")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aG:function(){return[P.bg]}}
P.eJ.prototype={}
P.eK.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$inQ:1}
P.fA.prototype={
gl:function(a){return a.length}}
P.fB.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
B:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.f])
this.B(a,new P.fC(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.K("Not supported"))},
$aaf:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
P.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fD.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.i0.prototype={
gl:function(a){return a.length}}
P.ex.prototype={}
P.dv.prototype={$idv:1}
P.e7.prototype={$ie7:1}
P.c9.prototype={
jZ:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$ibp)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oB(g))
return}if(!!t.$ic0)t=!0
else t=!1
if(t){this.it(a,b,c,d,e,f,g)
return}throw H.c(P.dt("Incorrect number or type of arguments"))},
it:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
N:function(a,b,c){return a.uniform1f(b,c)},
a3:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic9:1}
P.e9.prototype={$ie9:1}
P.ee.prototype={$iee:1}
P.en.prototype={$ien:1}
P.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bs(a.item(b))},
n:function(a,b,c){H.e(c,"$iB")
throw H.c(P.K("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.B,,,]]},
$ij:1,
$aj:function(){return[[P.B,,,]]},
$ib:1,
$ab:function(){return[[P.B,,,]]},
$aG:function(){return[[P.B,,,]]}}
P.f1.prototype={}
P.f2.prototype={}
O.a5.prototype={
bR:function(a){var u=this
u.sh1(H.d([],[a]))
u.sdu(null)
u.sdr(null)
u.sdv(null)},
cV:function(a,b,c){var u=this,t=H.au(u,"a5",0)
H.m(b,{func:1,ret:P.P,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.p,[P.j,t]]}
H.m(a,t)
H.m(c,t)
u.sdu(b)
u.sdr(a)
u.sdv(c)},
bg:function(a,b){return this.cV(a,null,b)},
hO:function(a){var u
H.n(a,"$ij",[H.au(this,"a5",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fe:function(a,b){var u
H.n(b,"$ij",[H.au(this,"a5",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.aw(u,u.length,[H.v(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.au(s,"a5",0)
H.A(b,r)
r=[r]
if(H.D(s.hO(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fe(t,H.d([b],r))}},
sh1:function(a){this.a=H.n(a,"$ib",[H.au(this,"a5",0)],"$ab")},
sdu:function(a){this.b=H.m(a,{func:1,ret:P.P,args:[[P.j,H.au(this,"a5",0)]]})},
sdr:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.au(this,"a5",0)]]})},
sdv:function(a){H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.au(this,"a5",0)]]})},
$ij:1}
O.cA.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.U():u},
aM:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gav(u)
else return V.dZ()},
eH:function(a){var u=this.a
if(a==null)C.a.h(u,V.dZ())
else C.a.h(u,a)
this.aM()},
cL:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sc_:function(a){this.a=H.n(a,"$ib",[V.aq],"$ab")}}
E.fG.prototype={}
E.ap.prototype={
d7:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.w();){t=u.d
if(t.f==null)t.d7()}},
sbO:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().a2(0,s.gey())
u=s.c
if(u!=null)u.gu().h(0,s.gey())
t=new D.M("shape",r,s.c,[F.ah])
t.b=!0
s.an(t)}},
scP:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().a2(0,s.geA())
u=s.f
s.f=a
if(a!=null)a.gu().h(0,s.geA())
s.d7()
t=new D.M("technique",u,s.f,[O.ca])
t.b=!0
s.an(t)}},
sb7:function(a){var u,t,s=this
if(!J.a_(s.r,a)){u=s.r
if(u!=null)u.gu().a2(0,s.gew())
if(a!=null)a.gu().h(0,s.gew())
s.r=a
t=new D.M("mover",u,a,[U.ad])
t.b=!0
s.an(t)}},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b_(0,b,s):null
if(!J.a_(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.aq])
t.b=!0
s.an(t)}r=s.f
if(r!=null)r.ap(0,b)
for(r=s.y.a,r=new J.aw(r,r.length,[H.v(r,0)]);r.w();)r.d.ap(0,b)},
aH:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.A(0,s.ga0(s)))
s.aM()
a.eI(t.f)
s=a.dy
u=(s&&C.a).gav(s)
if(u!=null&&t.d!=null)u.eJ(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.v(s,0)]);s.w();)s.d.aH(a)
a.eF()
a.dx.cL()},
gu:function(){var u=this.z
return u==null?this.z=D.U():u},
an:function(a){var u=this.z
if(u!=null)u.K(a)},
a1:function(){return this.an(null)},
ez:function(a){H.e(a,"$iz")
this.e=null
this.an(a)},
jI:function(){return this.ez(null)},
eB:function(a){this.an(H.e(a,"$iz"))},
jJ:function(){return this.eB(null)},
ex:function(a){this.an(H.e(a,"$iz"))},
jH:function(){return this.ex(null)},
ev:function(a){this.an(H.e(a,"$iz"))},
jE:function(){return this.ev(null)},
jD:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ij",[E.ap],"$aj")
for(u=b.length,t=this.geu(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jG:function(a,b){var u,t
H.n(b,"$ij",[E.ap],"$aj")
for(u=b.gV(b),t=this.geu();u.w();)u.gI(u).gu().a2(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sff:function(a,b){this.y=H.n(b,"$ia5",[E.ap],"$aa5")},
$ibr:1}
E.i9.prototype={
fb:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cA()
t=[V.aq]
u.sc_(H.d([],t))
u.b=null
u.gu().h(0,new E.ia(s))
s.cy=u
u=new O.cA()
u.sc_(H.d([],t))
u.b=null
u.gu().h(0,new E.ib(s))
s.db=u
u=new O.cA()
u.sc_(H.d([],t))
u.b=null
u.gu().h(0,new E.ic(s))
s.dx=u
s.sis(H.d([],[O.ca]))
u=s.dy;(u&&C.a).h(u,null)
s.sio(new H.aJ([P.f,A.cK]))},
gjR:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.A(0,u.ga0(u))
s=u}return s},
geG:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjR()
u=t.dx
u=t.ch=s.A(0,u.ga0(u))
s=u}return s},
geW:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.A(0,u.ga0(u))
s=u}return s},
eI:function(a){var u=this.dy,t=a==null?(u&&C.a).gav(u):a;(u&&C.a).h(u,t)},
eF:function(){var u=this.dy
if(u.length>1)u.pop()},
dM:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.bo(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sis:function(a){this.dy=H.n(a,"$ib",[O.ca],"$ab")},
sio:function(a){this.fr=H.n(a,"$iB",[P.f,A.cK],"$aB")}}
E.ia.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:9}
E.ib.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.ic.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:9}
E.ej.prototype={
d0:function(a){H.e(a,"$iz")
this.eL()},
d_:function(){return this.d0(null)},
gjq:function(){var u,t=this,s=Date.now(),r=C.f.a6(P.lx(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dA:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.F(r)
u=C.j.cA(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.j.cA(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lT(C.t,s.gjV())}},
eL:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.iN(this),{func:1,ret:-1,args:[P.ac]})
C.I.fR(u)
C.I.i8(u,W.mp(t,P.ac))}},
jT:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dA()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.lx(r-s.r.a,0).a*0.000001
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
o.aH(p.e)}s=p.z
if(s!=null)s.K(null)}catch(q){u=H.an(q)
t=H.cj(q)
P.lk("Error: "+H.l(u))
P.lk("Stack: "+H.l(t))
throw H.c(u)}}}
E.iN.prototype={
$1:function(a){var u
H.oT(a)
u=this.a
if(u.ch){u.ch=!1
u.jT()}},
$S:32}
Z.eu.prototype={$ip2:1}
Z.dw.prototype={
aC:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.an(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.ev.prototype={$ip3:1}
Z.by.prototype={
ah:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aC:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aC(a)},
eR:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aH:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
eC:function(a){this.aC(a)
this.aH(a)
this.eR(a)},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfY:function(a){this.b=H.n(a,"$ib",[Z.bG],"$ab")},
$inN:1}
Z.dx.prototype={
sh6:function(a){this.a=H.n(a,"$iB",[P.f,Z.by],"$aB")},
$inN:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.b_.prototype={
gcW:function(a){var u=this.a,t=(u&$.b2().a)!==0?3:0
if((u&$.b1().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=2
if((u&$.bv().a)!==0)t+=3
if((u&$.bS().a)!==0)t+=3
if((u&$.dq().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
j9:function(a){var u,t=$.b2(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.mT()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.b2().a)!==0)C.a.h(u,"Pos")
if((t&$.b1().a)!==0)C.a.h(u,"Norm")
if((t&$.b0().a)!==0)C.a.h(u,"Binm")
if((t&$.bu().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bv().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bS().a)!==0)C.a.h(u,"Clr3")
if((t&$.dq().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fJ.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.m(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a2:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.a
t=(u&&C.a).a2(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=s.b
t=(u&&C.a).a2(u,b)||t}return t},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.B(P.kX(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h3(q))
u=r.b
if(u!=null){r.saS(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.B(u,new D.h4(q))}return!0},
ji:function(){return this.K(null)},
aJ:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
sak:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saS:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h3.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h4.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.z.prototype={}
D.c1.prototype={}
D.c2.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dy.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dQ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hs.prototype={
jO:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jK:function(a){this.c=a.b
this.d.a2(0,a.a)
return!1},
si1:function(a){this.d=H.n(a,"$ilP",[P.p],"$alP")}}
X.dU.prototype={}
X.hz.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.ak(o.a+n*m,o.b+u*t)
t=q.a.gaX()
r=new X.bq(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
cK:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.bM()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.b1(a,b))
return!0},
jP:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.cC(new V.X(s*r,q*p),u,t)
t.b=!0
n.K(t)
return!0},
hD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dU(c,r.a.gaX(),b)
s.b=!0
t.K(s)
r.y=new P.aB(u,!1)
r.x=V.bK()}}
X.aD.prototype={
t:function(a,b){var u=this
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
X.bq.prototype={}
X.hR.prototype={
bX:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gaX(),r=new X.bq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cK:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bX(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f_()
if(typeof t!=="number")return t.bM()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bX(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bX(a,b,!1))
return!0},
jQ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.cC(new V.X(t*s,r*q),u,b)
u.b=!0
o.K(u)
return!0},
gdU:function(){var u=this.b
return u==null?this.b=D.U():u},
gbK:function(){var u=this.c
return u==null?this.c=D.U():u},
ger:function(){var u=this.d
return u==null?this.d=D.U():u}}
X.cC.prototype={}
X.i5.prototype={}
X.el.prototype={}
X.iR.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.ak],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gaX()
r=new X.el(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jN:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.b
if(u==null)return!1
u.K(this.b1(a,!0))
return!0},
jL:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.c
if(u==null)return!1
u.K(this.b1(a,!0))
return!0},
jM:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.d
if(u==null)return!1
u.K(this.b1(a,!1))
return!0}}
X.eq.prototype={
gaX:function(){var u=this.a,t=C.m.gdR(u).c
t.toString
u=C.m.gdR(u).d
u.toString
return V.lN(0,0,t,u)},
dh:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dQ(u,new X.aD(t,a.altKey,a.shiftKey))},
aT:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
cf:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.ak(s-q,r-u)},
b3:function(a){return new V.X(a.movementX,a.movementY)},
cb:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ak])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
q=C.j.ao(r.pageX)
C.j.ao(r.pageY)
p=o.left
C.j.ao(r.pageX)
C.a.h(n,new V.ak(q-p,C.j.ao(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dy(u,new X.aD(t,a.altKey,a.shiftKey))},
c0:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hx:function(a){this.f=!0},
hl:function(a){this.f=!1},
hr:function(a){H.e(a,"$ia7")
if(H.D(this.f)&&this.c0(a))a.preventDefault()},
hB:function(a){var u
H.e(a,"$ib9")
if(!H.D(this.f))return
u=this.dh(a)
this.b.jO(u)},
hz:function(a){var u
H.e(a,"$ib9")
if(!H.D(this.f))return
u=this.dh(a)
this.b.jK(u)},
hF:function(a){var u,t,s,r,q=this
H.e(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aT(a)
if(H.D(q.x)){t=q.ax(a)
s=q.b3(a)
if(q.d.cK(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ax(a)
r=q.aA(a)
if(q.c.cK(t,r))a.preventDefault()},
hJ:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aT(a)
u=r.ax(a)
if(H.D(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aA(a)
if(r.c.b9(u,s))a.preventDefault()},
hv:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c0(a)){r.aT(a)
u=r.ax(a)
if(H.D(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aA(a)
if(r.c.b9(u,s))a.preventDefault()}},
hH:function(a){var u,t,s,r=this
H.e(a,"$ia7")
r.aT(a)
u=r.ax(a)
if(H.D(r.x)){t=r.b3(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()},
ht:function(a){var u,t,s,r=this
H.e(a,"$ia7")
if(!r.c0(a)){r.aT(a)
u=r.ax(a)
if(H.D(r.x)){t=r.b3(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()}},
hL:function(a){var u,t,s=this
H.e(a,"$ibj")
s.aT(a)
u=new V.X((a&&C.H).gjg(a),C.H.gjh(a)).C(0,180)
if(H.D(s.x)){if(s.d.jP(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aA(a)
if(s.c.jQ(u,t))a.preventDefault()},
hN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.aA(s.y)
s.d.hD(u,t,r)}},
i_:function(a){var u,t=this
H.e(a,"$iaY")
t.a.focus()
t.f=!0
t.cf(a)
u=t.cb(a)
if(t.e.jN(u))a.preventDefault()},
hW:function(a){var u
H.e(a,"$iaY")
this.cf(a)
u=this.cb(a)
if(this.e.jL(u))a.preventDefault()},
hY:function(a){var u
H.e(a,"$iaY")
this.cf(a)
u=this.cb(a)
if(this.e.jM(u))a.preventDefault()},
sfS:function(a){this.z=H.n(a,"$ib",[[P.cP,P.V]],"$ab")}}
D.bC.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.U():u},
aw:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.K(a)},
fj:function(){return this.aw(null)},
$ia9:1,
$ibr:1}
D.a9.prototype={$ibr:1}
D.dR.prototype={
gu:function(){var u=this.Q
return u==null?this.Q=D.U():u},
aw:function(a){var u=this.Q
if(u!=null)u.K(a)},
dt:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.K(a)},
hC:function(){return this.dt(null)},
hQ:function(a){var u,t,s
H.n(a,"$ij",[D.a9],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(s==null||this.fh(s))return!1}return!0},
hf:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gds(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=H.e(b[q],"$ia9")
if(p instanceof D.bC)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.d=o}H.m(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c1([n])
n.b=!0
this.aw(n)},
hU:function(a,b){var u,t,s,r=D.a9
H.n(b,"$ij",[r],"$aj")
for(u=b.gV(b),t=this.gds();u.w();){s=u.gI(u)
C.a.a2(this.e,s)
s.gu().a2(0,t)}r=new D.c2([r])
r.b=!0
this.aw(r)},
fh:function(a){var u=C.a.X(this.e,a)
return u},
sfQ:function(a){this.e=H.n(a,"$ib",[D.bC],"$ab")},
si0:function(a){this.f=H.n(a,"$ib",[D.e5],"$ab")},
siq:function(a){this.r=H.n(a,"$ib",[D.ea],"$ab")},
siC:function(a){this.x=H.n(a,"$ib",[D.eg],"$ab")},
siD:function(a){this.y=H.n(a,"$ib",[D.eh],"$ab")},
siE:function(a){this.z=H.n(a,"$ib",[D.ei],"$ab")},
$aj:function(){return[D.a9]},
$aa5:function(){return[D.a9]}}
D.e5.prototype={$ia9:1,$ibr:1}
D.ea.prototype={$ia9:1,$ibr:1}
D.eg.prototype={$ia9:1,$ibr:1}
D.eh.prototype={$ia9:1,$ibr:1}
D.ei.prototype={$ia9:1,$ibr:1}
V.aa.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.ae.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.h2.prototype={}
V.dY.prototype={
a8:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dY))return!1
u=b.a
t=$.T().a
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
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.ch(H.d([q.a,q.d,q.r],p),3,0),n=V.ch(H.d([q.b,q.e,q.x],p),3,0),m=V.ch(H.d([q.c,q.f,q.y],p),3,0)
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
V.aq.prototype={
a8:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
ep:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.T().a)return V.dZ()
u=1/b1
t=-n
s=-a0
return V.bc((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bc(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bd:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aF(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.T().a
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
i:function(a){return this.O()},
F:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.ch(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ch(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ch(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ch(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.F("")}}
V.ak.prototype={
L:function(a,b){return new V.ak(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.aF.prototype={
D:function(a,b){return new V.aF(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.aF(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
V.e6.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.e8.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Z(u.a,3,0)+", "+V.Z(u.b,3,0)+", "+V.Z(u.c,3,0)+", "+V.Z(u.d,3,0)+"]"}}
V.X.prototype={
cE:function(a){return Math.sqrt(this.J(this))},
J:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.X(t*b,u*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.T().a){u=$.m_
return u==null?$.m_=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.X(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.T()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+"]"}}
V.Y.prototype={
cE:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.Y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b6:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Y(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.Y(-this.a,-this.b,-this.c)},
C:function(a,b){if(Math.abs(b-0)<$.T().a)return V.bi()
return new V.Y(this.a/b,this.b/b,this.c/b)},
eq:function(){var u=$.T().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.T().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Z(this.a,3,0)+", "+V.Z(this.b,3,0)+", "+V.Z(this.c,3,0)+"]"}}
U.fK.prototype={
bS:function(a){var u=V.p1(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.U():u},
R:function(a){var u=this.y
if(u!=null)u.K(a)},
scS:function(a,b){},
scH:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.T().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bS(u)}s=new D.M("maximumLocation",s,t.b,[P.E])
s.b=!0
t.R(s)}},
scJ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.T().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bS(u)}s=new D.M("minimumLocation",s,t.c,[P.E])
s.b=!0
t.R(s)}},
sac:function(a,b){var u,t=this
b=t.bS(b)
u=t.d
if(!(Math.abs(u-b)<$.T().a)){t.d=b
u=new D.M("location",u,b,[P.E])
u.b=!0
t.R(u)}},
scI:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.T().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.E])
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.T().a)){u.f=a
t=new D.M("velocity",t,a,[P.E])
t.b=!0
u.R(t)}},
scq:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.T().a)){this.x=a
u=new D.M("dampening",u,a,[P.E])
u.b=!0
this.R(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.T().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sac(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.T().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dB.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.U():u},
b_:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cx.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.U():u},
R:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.K(a)},
a9:function(){return this.R(null)},
hd:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaN(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.m(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c1([n])
n.b=!0
this.R(n)},
hS:function(a,b){var u,t,s=U.ad
H.n(b,"$ij",[s],"$aj")
for(u=b.gV(b),t=this.gaN();u.w();)u.gI(u).gu().a2(0,t)
s=new D.c2([s])
s.b=!0
this.R(s)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Y()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.v(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.dZ():u
r=s.e
if(r!=null)r.aJ(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ad]},
$aa5:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.er.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.U():u},
R:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.K(a)},
a9:function(){return this.R(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdU().h(0,u.gc1())
u.a.c.ger().h(0,u.gc3())
u.a.c.gbK().h(0,u.gc5())
return!0},
c2:function(a){var u=this
H.e(a,"$iz")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c4:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iz"),"$ibq")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.J(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.L(0,a.y)
u=new V.X(t.a,t.b).A(0,2).C(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.X(s.a,s.b).A(0,2).C(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
n.b.sW(0)
t=t.L(0,a.z)
n.Q=new V.X(t.a,t.b).A(0,2).C(0,u.gad())}n.a9()},
c6:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.J(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sW(t*10*s)
r.a9()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Y()
if(q<p){r.ch=p
u=b.y
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bc(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iad:1}
U.es.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.U():u},
R:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.K(a)},
a9:function(){return this.R(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdU().h(0,s.gc1())
s.a.c.ger().h(0,s.gc3())
s.a.c.gbK().h(0,s.gc5())
u=s.a.d
t=u.f
u=t==null?u.f=D.U():t
u.h(0,s.gh2())
u=s.a.d
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.gh4())
u=s.a.e
t=u.b
u=t==null?u.b=D.U():t
u.h(0,s.giz())
u=s.a.e
t=u.d
u=t==null?u.d=D.U():t
u.h(0,s.gix())
u=s.a.e
t=u.c
u=t==null?u.c=D.U():t
u.h(0,s.giv())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.X(u,t)},
c2:function(a){var u=this
a=H.k(H.e(a,"$iz"),"$ibq")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c4:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iz"),"$ibq")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.J(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ar(new V.X(t.a,t.b).A(0,2).C(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ar(new V.X(s.a,s.b).A(0,2).C(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).A(0,2).C(0,u.gad()))}n.a9()},
c6:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.J(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.a9()}},
h3:function(a){var u=this
if(H.k(H.e(a,"$iz"),"$idU").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h5:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iz"),"$ibq")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ar(new V.X(s.a,s.b).A(0,2).C(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).A(0,2).C(0,u.gad()))
n.a9()},
iA:function(a){var u=this
H.e(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iy:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.e(a,"$iz"),"$iel")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.L(0,a.y)
u=new V.X(u.a,u.b)
u=u.J(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.L(0,a.y)
u=n.ar(new V.X(t.a,t.b).A(0,2).C(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ar(new V.X(s.a,s.b).A(0,2).C(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sac(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).A(0,2).C(0,u.gad()))}n.a9()},
iw:function(a){var u,t,s,r=this
H.e(a,"$iz")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.J(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sW(-t*10*u)
r.a9()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Y()
if(q<p){r.dy=p
u=b.y
r.c.ap(0,u)
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bc(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.bc(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.et.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.U():u},
R:function(a){var u=this.r
if(u!=null)u.K(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.U():t
t=r.gh8()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.U():s).h(0,t)
return!0},
h9:function(a){var u,t,s,r,q=this
H.e(a,"$iz")
if(!J.a_(q.b,q.a.b.c))return
H.k(a,"$icC")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.E])
u.b=!0
q.R(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bc(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iad:1}
M.dF.prototype={
aP:function(a){var u
H.e(a,"$iz")
u=this.y
if(u!=null)u.K(a)},
fk:function(){return this.aP(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.n(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaO(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c1([n])
n.b=!0
this.aP(n)},
hp:function(a,b){var u,t,s=E.ap
H.n(b,"$ij",[s],"$aj")
for(u=b.gV(b),t=this.gaO();u.w();)u.gI(u).gu().a2(0,t)
s=new D.c2([s])
s.b=!0
this.aP(s)},
gu:function(){var u=this.y
return u==null?this.y=D.U():u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.eI(f.d)
u=f.c
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
if(typeof s!=="number")return H.F(s)
o=C.j.ao(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.j.ao(p*r)
p=C.j.ao(q.c*s)
a.c=p
q=C.j.ao(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.b
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bc(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eH(i)
t=$.lH
if(t==null){t=V.lD(V.lJ(),V.m6(),V.m4())
$.lH=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.A(0,h)}a.db.eH(h)
for(u=f.e.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.w();)u.d.ap(0,a)
for(u=f.e.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.w();)u.d.aH(a)
f.b.toString
a.cy.cL()
a.db.cL()
f.c.toString
a.eF()},
sfK:function(a,b){this.e=H.n(b,"$ia5",[E.ap],"$aa5")},
$ip9:1}
A.du.prototype={}
A.fz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dK.prototype={}
A.dX.prototype={
fa:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.ai("")
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
d1.iK(u)
d1.iR(u)
d1.iL(u)
d1.iZ(u)
d1.j_(u)
d1.iT(u)
d1.j3(u)
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
u=new P.ai("")
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
q.iO(u)
q.iJ(u)
q.iM(u)
q.iP(u)
q.iX(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iV(u)
q.iW(u)}q.iS(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
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
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iN(u)
q.iU(u)
q.iY(u)
q.j0(u)
q.j1(u)
q.j2(u)
q.iQ(u)}m=u.a+="// === Main ===\n"
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
a6.eo(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.k(a6.y.p(0,"invViewMat"),"$iam")
if(t)a6.dy=H.k(a6.y.p(0,"objMat"),"$iam")
if(r)a6.fr=H.k(a6.y.p(0,"viewObjMat"),"$iam")
a6.fy=H.k(a6.y.p(0,"projViewObjMat"),"$iam")
if(d1.x2)a6.k1=H.k(a6.y.p(0,"txt2DMat"),"$icX")
if(d1.y1)a6.k2=H.k(a6.y.p(0,"txtCubeMat"),"$iam")
if(d1.y2)a6.k3=H.k(a6.y.p(0,"colorMat"),"$iam")
a6.sfE(H.d([],[A.am]))
t=d1.au
if(t>0){a6.k4=H.e(a6.y.p(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r(a7+q+a8));(s&&C.a).h(s,H.k(g,"$iam"))}}t=d1.a
if(t!==C.d){a6.r2=H.k(a6.y.p(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.rx=H.k(a6.y.p(0,a9),"$iar")
a6.x1=H.k(a6.y.p(0,b0),"$iQ")
break
case C.h:a6.ry=H.k(a6.y.p(0,a9),"$ias")
a6.x1=H.k(a6.y.p(0,b0),"$iQ")
break}}t=d1.b
if(t!==C.d){a6.x2=H.k(a6.y.p(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.y1=H.k(a6.y.p(0,b1),"$iar")
a6.au=H.k(a6.y.p(0,b2),"$iQ")
break
case C.h:a6.y2=H.k(a6.y.p(0,b1),"$ias")
a6.au=H.k(a6.y.p(0,b2),"$iQ")
break}}t=d1.c
if(t!==C.d){a6.am=H.k(a6.y.p(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.bq=H.k(a6.y.p(0,b3),"$iar")
a6.br=H.k(a6.y.p(0,b4),"$iQ")
break
case C.h:a6.dV=H.k(a6.y.p(0,b3),"$ias")
a6.br=H.k(a6.y.p(0,b4),"$iQ")
break}}t=d1.d
if(t!==C.d){a6.bs=H.k(a6.y.p(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.dW=H.k(a6.y.p(0,b5),"$iar")
a6.bt=H.k(a6.y.p(0,b6),"$iQ")
break
case C.h:a6.dX=H.k(a6.y.p(0,b5),"$ias")
a6.bt=H.k(a6.y.p(0,b6),"$iQ")
break}}t=d1.e
if(t!==C.d){a6.bw=H.k(a6.y.p(0,"shininess"),"$ia3")
a6.bu=H.k(a6.y.p(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.dY=H.k(a6.y.p(0,b7),"$iar")
a6.bv=H.k(a6.y.p(0,b8),"$iQ")
break
case C.h:a6.dZ=H.k(a6.y.p(0,b7),"$ias")
a6.bv=H.k(a6.y.p(0,b8),"$iQ")
break}}switch(d1.f){case C.d:break
case C.i:break
case C.e:a6.e_=H.k(a6.y.p(0,"bumpTxt"),"$iar")
a6.bx=H.k(a6.y.p(0,b9),"$iQ")
break
case C.h:a6.e0=H.k(a6.y.p(0,"bumpTxt"),"$ias")
a6.bx=H.k(a6.y.p(0,b9),"$iQ")
break}if(d1.dy){a6.e1=H.k(a6.y.p(0,"envSampler"),"$ias")
a6.e2=H.k(a6.y.p(0,"nullEnvTxt"),"$iQ")
t=d1.r
if(t!==C.d){a6.by=H.k(a6.y.p(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.e3=H.k(a6.y.p(0,c0),"$iar")
a6.bz=H.k(a6.y.p(0,c1),"$iQ")
break
case C.h:a6.e4=H.k(a6.y.p(0,c0),"$ias")
a6.bz=H.k(a6.y.p(0,c1),"$iQ")
break}}t=d1.x
if(t!==C.d){a6.bA=H.k(a6.y.p(0,"refraction"),"$ia3")
a6.bB=H.k(a6.y.p(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.i:break
case C.e:a6.e5=H.k(a6.y.p(0,c2),"$iar")
a6.bC=H.k(a6.y.p(0,c3),"$iQ")
break
case C.h:a6.e6=H.k(a6.y.p(0,c2),"$ias")
a6.bC=H.k(a6.y.p(0,c3),"$iQ")
break}}}t=d1.y
if(t!==C.d){a6.bD=H.k(a6.y.p(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.i:break
case C.e:a6.e7=H.k(a6.y.p(0,c4),"$iar")
a6.bE=H.k(a6.y.p(0,c5),"$iQ")
break
case C.h:a6.e8=H.k(a6.y.p(0,c4),"$ias")
a6.bE=H.k(a6.y.p(0,c5),"$iQ")
break}}a6.sfl(H.d([],[A.cW]))
a6.sfm(H.d([],[A.cY]))
a6.sfn(H.d([],[A.cZ]))
a6.sfo(H.d([],[A.d_]))
a6.sfp(H.d([],[A.d0]))
a6.sfq(H.d([],[A.d1]))
if(d1.k2){t=d1.z
if(t>0){a6.e9=H.e(a6.y.p(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.cs;(s&&C.a).h(s,new A.cW(g,f))}}t=d1.Q
if(t>0){a6.ea=H.e(a6.y.p(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.k(e,"$iO")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.k(d,"$ia3")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.k(c,"$ia3")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.k(b,"$ia3")
s=a6.ct;(s&&C.a).h(s,new A.cY(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eb=H.e(a6.y.p(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.k(e,"$iO")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.k(d,"$iO")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.k(c,"$ia3")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.k(b,"$ia3")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.k(a,"$ia3")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.k(a0,"$ia3")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.k(a1,"$ia3")
s=a6.cu;(s&&C.a).h(s,new A.cZ(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.ec=H.e(a6.y.p(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.k(e,"$iO")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.k(d,"$iO")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.k(c,"$iO")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.k(b,"$iQ")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.k(a,"$iar")
s=a6.cv;(s&&C.a).h(s,new A.d_(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.ed=H.e(a6.y.p(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.k(e,"$icX")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.k(d,"$iO")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.k(c,"$iQ")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.k(b,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.k(a,"$ia3")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.k(a0,"$ia3")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.k(a1,"$ias")
s=a6.cw;(s&&C.a).h(s,new A.d0(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ee=H.e(a6.y.p(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r(a7+r+a8))
H.k(g,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r(a7+r+a8))
H.k(f,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r(a7+r+a8))
H.k(e,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r(a7+r+a8))
H.k(d,"$iO")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r(a7+r+a8))
H.k(c,"$iO")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r(a7+r+a8))
H.k(b,"$iQ")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r(a7+r+a8))
H.k(a,"$iO")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r(a7+r+a8))
H.k(a0,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r(a7+r+a8))
H.k(a1,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r(a7+r+a8))
H.k(a2,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r(a7+r+a8))
H.k(a3,"$ia3")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r(a7+r+a8))
H.k(a4,"$ia3")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r(a7+r+a8))
H.k(a5,"$iar")
s=a6.cz;(s&&C.a).h(s,new A.d1(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
al:function(a,b,c){if(c==null||!c.d)C.c.a3(b.a,b.d,1)
else{a.f1(c)
C.c.a3(b.a,b.d,0)}},
af:function(a,b,c){C.c.a3(b.a,b.d,1)},
sfE:function(a){this.r1=H.n(a,"$ib",[A.am],"$ab")},
sfl:function(a){this.cs=H.n(a,"$ib",[A.cW],"$ab")},
sfm:function(a){this.ct=H.n(a,"$ib",[A.cY],"$ab")},
sfn:function(a){this.cu=H.n(a,"$ib",[A.cZ],"$ab")},
sfo:function(a){this.cv=H.n(a,"$ib",[A.d_],"$ab")},
sfp:function(a){this.cw=H.n(a,"$ib",[A.d0],"$ab")},
sfq:function(a){this.cz=H.n(a,"$ib",[A.d1],"$ab")}}
A.hI.prototype={
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
u=a.a+="uniform BendingValue bendValues["+r.au+"];\n"
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
ay:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aq(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iO:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.ay(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
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
iJ:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.ay(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
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
iM:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.ay(a,s,"diffuse")
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
iP:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.ay(a,s,"invDiffuse")
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
iX:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.ay(a,s,"specular")
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
iS:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
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
switch(t){case C.d:u=a.a=u+r
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
iV:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.ay(a,s,"reflect")
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
iW:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.ay(a,s,"refract")
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
A.cW.prototype={}
A.d_.prototype={}
A.cY.prototype={}
A.d0.prototype={}
A.cZ.prototype={}
A.d1.prototype={}
A.cK.prototype={
cY:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eo:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.di(b,35633)
r.f=r.di(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.lc(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.l(s)))}r.ik()
r.im()},
aC:function(a){a.a.useProgram(this.r)
this.x.jj()},
di:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.lc(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
ik:function(){var u,t,s,r=this,q=H.d([],[A.du]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.du(p,t.name,s))}r.x=new A.fz(q)},
im:function(){var u,t,s,r=this,q=H.d([],[A.em]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jf(t.type,t.size,t.name,s))}r.y=new A.j2(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.l_(u,this.r,b,a,c)},
fN:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.l_(u,this.r,b,a,c)},
fO:function(a,b,c){var u=this.a
if(a===1)return new A.as(u,b,c)
else return A.l_(u,this.r,b,a,c)},
bm:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jf:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.iZ(u.a,c,d)
case 35665:return new A.O(u.a,c,d)
case 35666:return new A.cV(u.a,c,d)
case 35667:return new A.j_(u.a,c,d)
case 35668:return new A.j0(u.a,c,d)
case 35669:return new A.j1(u.a,c,d)
case 35674:return new A.j3(u.a,c,d)
case 35675:return new A.cX(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.fN(b,c,d)
case 35680:return u.fO(b,c,d)
case 35670:throw H.c(u.bm("BOOL",c))
case 35671:throw H.c(u.bm("BOOL_VEC2",c))
case 35672:throw H.c(u.bm("BOOL_VEC3",c))
case 35673:throw H.c(u.bm("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.em.prototype={}
A.j2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siF:function(a){H.n(a,"$ib",[P.p],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cV.prototype={
bf:function(a){return C.c.k9(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cX.prototype={
ab:function(a){var u=new Float32Array(H.cd(H.n(a,"$ib",[P.E],"$ab")))
C.c.eS(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.am.prototype={
ab:function(a){var u=new Float32Array(H.cd(H.n(a,"$ib",[P.E],"$ab")))
C.c.eT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ar.prototype={
f1:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.as.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kk.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cF(s.b,b).cF(s.d.cF(s.c,b),c)
s=new V.aF(r.a,r.b,r.c)
if(!J.a_(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a1()}a.sk_(r.C(0,Math.sqrt(r.J(r))))
s=1-b
u=1-c
u=new V.e6(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a_(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a1()}},
$S:43}
F.a8.prototype={
fB:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bi()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.eq())return
return s.C(0,Math.sqrt(s.J(s)))},
fJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.Y(r.a,r.b,r.c)
s=r.C(0,Math.sqrt(r.J(r)))
r=t.L(0,q)
r=new V.Y(r.a,r.b,r.c)
r=s.b6(r.C(0,Math.sqrt(r.J(r))))
return r.C(0,Math.sqrt(r.J(r)))},
cm:function(){var u,t=this
if(t.d!=null)return!0
u=t.fB()
if(u==null){u=t.fJ()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
fA:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bi()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.eq())return
return s.C(0,Math.sqrt(s.J(s)))},
fI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.T().a){l=d.L(0,g)
l=new V.Y(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.J(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g)
l=new V.aF(l.a*p,l.b*p,l.c*p).D(0,g).L(0,j)
l=new V.Y(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.J(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.C(0,Math.sqrt(l.J(l)))
l=o.b6(q)
l=l.C(0,Math.sqrt(l.J(l))).b6(o)
q=l.C(0,Math.sqrt(l.J(l)))}return q},
cl:function(){var u,t=this
if(t.e!=null)return!0
u=t.fA()
if(u==null){u=t.fI()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.aj(J.av(s.e),0)+", "+C.b.aj(J.av(t.b.e),0)+", "+C.b.aj(J.av(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.ax.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.aj(J.av(u.e),0)+", "+C.b.aj(J.av(this.b.e),0)},
O:function(){return this.F("")}}
F.bJ.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aj(J.av(u.e),0)},
O:function(){return this.F("")}}
F.ah.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.U():u},
jA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.H)(g),++s){r=g[s]
h.a.h(0,r.aY())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.H)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
F.nu(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.H)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nm(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.H)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dH(l,k,i)}g=h.e
if(g!=null)g.aJ(0)},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.aJ(0)
return u},
aW:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aW()||!1
if(!t.a.aW())u=!1
s=t.e
if(s!=null)s.aJ(0)
return u},
bn:function(){var u=this.e
if(u!=null)++u.d
this.a.bn()
u=this.e
if(u!=null)u.aJ(0)
return!0},
dQ:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b2()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b1().a)!==0)++s
if((t&$.b0().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.dq().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gcW(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dw])
for(n=0,m=0;m<s;++m){l=a3.j9(m)
k=l.gcW(l)
C.a.n(o,m,new Z.dw(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jx(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a0,null)
e=new Z.by(new Z.eu(a0,f),o,a3)
e.sfY(H.d([],[Z.bG]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)}b=Z.l3(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)}b=Z.l3(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.U()
C.a.h(d,c.e)}b=Z.l3(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.K(null)},
$icM:1}
F.cM.prototype={}
F.ij.prototype={
j6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.a4],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.dH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dH(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].cm())s=!1
return s},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].cl())s=!1
return s},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sfT:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")}}
F.ik.prototype={
aB:function(a,b,c){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t=new F.ax()
if(b==null)H.t(P.r("May not create a line with a null start vertex."))
if(c==null)H.t(P.r("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
t.a=b
C.a.h(b.c.b,t)
t.b=c
C.a.h(c.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.a1()
return t},
gl:function(a){return this.b.length},
i:function(a){return this.O()},
F:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.F("")},
sfZ:function(a){this.b=H.n(a,"$ib",[F.ax],"$ab")}}
F.il.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
O:function(){return this.F("")},
sca:function(a){this.b=H.n(a,"$ib",[F.bJ],"$ab")}}
F.a4.prototype={
cp:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l2(u.cx,r,o,t,s,q,p,a,n)},
aY:function(){return this.cp(null)},
ses:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.J(a)))
if(!J.a_(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a1()}},
saD:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.J(a)))
if(!J.a_(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a1()}},
sk_:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
sa4:function(a,b){var u
if(!J.a_(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a1()}},
jx:function(a){var u,t,s=this
if(a.t(0,$.b2())){u=s.f
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.b1())){u=s.r
t=[P.E]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.b0())){u=s.x
t=[P.E]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bu())){u=s.y
t=[P.E]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bv())){u=s.z
t=[P.E]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bS())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.dq())){u=s.Q
t=[P.E]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cm()))return H.d([s.ch],[P.E])
else if(a.t(0,$.bt())){u=s.cx
t=[P.E]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.E])},
cm:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bi()
t.d.B(0,new F.jp(s))
s=s.a
t.r=s.C(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
cl:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bi()
t.d.B(0,new F.jo(s))
s=s.a
t.x=s.C(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
eg:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.b
t.a.a.U()
t=t.e
a.a.a.U()
if(t==a.e)return s}return},
jn:function(a){var u=this.eg(a)
if(u!=null)return u
return a.eg(this)},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.aj(J.av(s.e),0))
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
C.a.h(q,V.Z(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.F("")}}
F.jp.prototype={
$1:function(a){var u,t
H.e(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.jo.prototype={
$1:function(a){var u,t
H.e(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.ji.prototype={
U:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a1()
return!0},
dJ:function(a,b){var u=null,t=F.l2(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
dK:function(a,b,c){var u=null,t=F.l2(u,u,u,new V.aF(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].cm()
return!0},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].cl()
return!0},
bn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
F:function(a){var u,t,s,r
this.U()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
O:function(){return this.F("")},
siG:function(a){this.c=H.n(a,"$ib",[F.a4],"$ab")}}
F.jj.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a8]})
C.a.B(u.b,b)
C.a.B(u.c,new F.jk(u,b))
C.a.B(u.d,new F.jl(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfU:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")},
sfV:function(a){this.c=H.n(a,"$ib",[F.a8],"$ab")},
sfW:function(a){this.d=H.n(a,"$ib",[F.a8],"$ab")}}
F.jk.prototype={
$1:function(a){H.e(a,"$ia8")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:5}
F.jl.prototype={
$1:function(a){var u
H.e(a,"$ia8")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:5}
F.jm.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sh_:function(a){this.b=H.n(a,"$ib",[F.ax],"$ab")},
sh0:function(a){this.c=H.n(a,"$ib",[F.ax],"$ab")}}
F.jn.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sca:function(a){this.b=H.n(a,"$ib",[F.bJ],"$ab")}}
O.dJ.prototype={
gu:function(){var u=this.rx
return u==null?this.rx=D.U():u},
T:function(a){var u=this.rx
if(u!=null)u.K(a)},
ap:function(a,b){},
eJ:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.e(a.fr.j(0,n),"$idK")
if(u==null){t=a.a
u=new A.dK(t,n)
u.cY(t,n)
u.eo(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.k(u.y.j(0,"lightVec"),"$iO")
u.db=H.k(u.y.j(0,"ambientClr"),"$icV")
u.dx=H.k(u.y.j(0,"diffuseClr"),"$icV")
u.dy=H.k(u.y.j(0,"weightScalar"),"$ia3")
u.fr=H.k(u.y.j(0,"viewMat"),"$iam")
u.fx=H.k(u.y.j(0,"viewObjMatrix"),"$iam")
u.fy=H.k(u.y.j(0,"projViewObjMatrix"),"$iam")
a.dM(u)}o.a=u}if(b.e==null){b.d.aE()
b.d.aW()
b.d.bn()
t=new Z.dx()
t.sh6(new H.aJ([P.f,Z.by]))
b.e=t}t=o.a
t.aC(a)
s=o.r2
r=t.dy
C.c.N(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.c.q(r.a,r.d,q,p,s)
s=a.db
s=s.ga0(s)
p=t.fr
p.toString
p.ab(s.a8(0,!0))
s=a.geW()
p=t.fx
p.toString
p.ab(s.a8(0,!0))
s=a.geG()
t=t.fy
t.toString
t.ab(s.a8(0,!0))
t=b.e
if(t instanceof Z.dx){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.i5(a,t,b.d,"Axis",H.m(o.gd5(),{func:1,ret:F.ah,args:[F.cM]}),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.bk(a,t,b.c,"wireFrame",o.giH(),o.f,o.e)
if(o.cy)o.bk(a,t,b.c,"normals",o.gha(),o.f,o.e)
if(o.db)o.bk(a,t,b.c,"binormals",o.gfG(),o.f,o.e)
if(o.k3)o.bk(a,t,b.c,"Axis",o.gd5(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dT()},
bk:function(a,b,c,d,e,f,g){var u,t
H.m(e,{func:1,ret:F.ah,args:[F.ah]})
u=b.a.j(0,d)
if(u==null){u=this.d6(a,e.$1(c))
b.a.n(0,d,u)}t=this.a
t.db.bf(f)
t.dx.bf(g)
u.eC(a)},
i5:function(a,b,c,d,e,f,g){var u,t
H.m(e,{func:1,ret:F.ah,args:[F.cM]})
u=b.a.j(0,d)
if(u==null){u=this.d6(a,e.$1(c))
b.a.n(0,d,u)}t=this.a
t.db.bf(f)
t.dx.bf(g)
u.eC(a)},
d6:function(a,b){var u=this,t=$.b2(),s=$.b1(),r=b.dQ(new Z.ev(a.a),new Z.b_(t.a|s.a|$.b0().a|$.bS().a))
r.ah($.b2()).e=u.a.z.c
r.ah($.b1()).e=u.a.Q.c
r.ah($.bS()).e=u.a.ch.c
r.ah($.b0()).e=u.a.cx.c
return r},
dG:function(a,b){var u,t,s,r={}
r.a=b
u=F.cL()
r.a=new V.ae(0,0.7,1,1)
t=a.a
t.toString
r=H.m(new O.hm(r,u),{func:1,ret:-1,args:[F.a4]})
C.a.B(t.c,r)
r=new O.hl(u)
t=a.c
t.toString
s=H.m(new O.hn(u,r),{func:1,ret:-1,args:[F.ax]})
C.a.B(t.b,s)
s=a.d
s.toString
r=H.m(new O.ho(u,r),{func:1,ret:-1,args:[F.a8]})
C.a.B(s.b,r)
return u},
iI:function(a){return this.dG(a,null)},
hb:function(a){var u,t=F.cL(),s=a.a
s.toString
u=H.m(new O.hk(new V.ae(1,1,0.3,1),t),{func:1,ret:-1,args:[F.a4]})
C.a.B(s.c,u)
return t},
fH:function(a){var u,t=F.cL(),s=a.a
s.toString
u=H.m(new O.hj(new V.ae(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.a4]})
C.a.B(s.c,u)
return t},
fC:function(a){return this.fD(a)},
fD:function(a){var u=F.cL(),t=new O.hi(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.hm.prototype={
$1:function(a){var u,t
H.e(a,"$ia4")
u=this.b.a
t=a.aY()
t.sa4(0,this.a.a)
t.saD(V.bi())
u.h(0,t)},
$S:10}
O.hl.prototype={
$2:function(a,b){if(a.jn(b)==null)this.a.c.aB(0,a,b)},
$S:48}
O.hn.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iax")
u=this.a
t=u.a
s=a.a
s.a.a.U()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.U()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:49}
O.ho.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$ia8")
u=this.a
t=u.a
s=a.a
s.a.a.U()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.U()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.U()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.hk.prototype={
$1:function(a){var u,t,s=H.e(a,"$ia4").aY()
s.sa4(0,this.a)
s.saD(V.bi())
u=s.aY()
u.saD(s.r)
t=this.b
t.a.h(0,s)
t.a.h(0,u)
t.c.aB(0,s,u)},
$S:10}
O.hj.prototype={
$1:function(a){var u,t,s
H.e(a,"$ia4")
u=a.aY()
u.sa4(0,this.a)
u.saD(V.bi())
t=u.aY()
t.saD(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.aB(0,u,t)},
$S:10}
O.hi.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.ae(s,r,q,1)
s=this.a
u=s.a.dK(0,0,0)
u.saD(V.bi())
u.ses(V.m5())
u.sa4(0,p)
t=s.a.dK(a,b,c)
t.saD(V.bi())
t.ses(V.m5())
t.sa4(0,p)
s.c.aB(0,u,t)}}
O.dW.prototype={
gu:function(){var u=this.dy
return u==null?this.dy=D.U():u},
T:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.K(a)},
c9:function(){return this.T(null)},
dz:function(a){H.e(a,"$iz")
this.a=null
this.T(a)},
ia:function(){return this.dz(null)},
hh:function(a,b){var u=V.aq
H.n(b,"$ij",[u],"$aj")
u=new D.c1([u])
u.b=!0
this.T(u)},
hj:function(a,b){var u=V.aq
H.n(b,"$ij",[u],"$aj")
u=new D.c2([u])
u.b=!0
this.T(u)},
df:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a6(a1.e.length+3,4)*4,a3=C.f.a6(a1.f.length+3,4)*4,a4=C.f.a6(a1.r.length+3,4)*4,a5=C.f.a6(a1.x.length+3,4)*4,a6=C.f.a6(a1.y.length+3,4)*4,a7=C.f.a6(a1.z.length+3,4)*4,a8=C.f.a6(a0.e.a.length+3,4)*4
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
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.b2()
if(h){j=$.b1()
a=new Z.b_(a.a|j.a)}if(g){j=$.b0()
a=new Z.b_(a.a|j.a)}if(f){j=$.bu()
a=new Z.b_(a.a|j.a)}if(e){j=$.bv()
a=new Z.b_(a.a|j.a)}if(c){j=$.bt()
a=new Z.b_(a.a|j.a)}return new A.hI(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
Z:function(a,b){H.n(a,"$ib",[T.cS],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
ap:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aw(u,u.length,[H.v(u,0)]);u.w();){t=u.d
t.toString
s=$.jh
if(s==null)s=$.jh=new V.Y(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
eJ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.df()
u=H.e(a3.fr.j(0,a2.am),"$idX")
if(u==null){u=A.ns(a2,a3.a)
a3.dM(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bq
a2=a4.e
if(!(a2 instanceof Z.by))a2=a4.e=null
if(a2==null||!a2.d.t(0,s)){a2=t.r1
if(a2)a4.d.aE()
r=t.r2
if(r)a4.d.aW()
q=t.ry
if(q)a4.d.bn()
p=a4.d.dQ(new Z.ev(a3.a),s)
p.ah($.b2()).e=a1.a.Q.c
if(a2)p.ah($.b1()).e=a1.a.cx.c
if(r)p.ah($.b0()).e=a1.a.ch.c
if(t.rx)p.ah($.bu()).e=a1.a.cy.c
if(q)p.ah($.bv()).e=a1.a.db.c
if(t.x1)p.ah($.bt()).e=a1.a.dx.c
a4.e=p}a2=T.cS
o=H.d([],[a2])
a1.a.aC(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga0(q)
r=r.dy
r.toString
r.ab(q.a8(0,!0))}if(t.fy){r=a1.a
q=a3.geW()
r=r.fr
r.toString
r.ab(q.a8(0,!0))}r=a1.a
q=a3.geG()
r=r.fy
r.toString
r.ab(q.a8(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ab(C.n.a8(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ab(C.n.a8(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ab(C.n.a8(q,!0))}if(t.au>0){n=a1.e.a.length
r=a1.a.k4
C.c.a3(r.a,r.d,n)
for(r=[P.E],m=0;m<n;++m){q=a1.a
l=a1.e.a
if(m>=l.length)return H.h(l,m)
l=l[m]
q.toString
H.e(l,"$iaq")
q=q.r1
if(m>=q.length)return H.h(q,m)
q=q[m]
k=new Float32Array(H.cd(H.n(l.a8(0,!0),"$ib",r,"$ab")))
C.c.eT(q.a,q.d,!1,k)}}switch(t.a){case C.d:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
l=q.a
j=q.b
q=q.c
C.c.q(r.a,r.d,l,j,q)
break
case C.e:a1.Z(o,a1.f.d)
r=a1.a
q=a1.f.d
r.al(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.f.e)
r=a1.a
q=a1.f.e
r.af(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
l=q.a
j=q.b
q=q.c
C.c.q(r.a,r.d,l,j,q)
break
case C.e:a1.Z(o,a1.r.d)
r=a1.a
q=a1.r.d
r.al(r.y1,r.au,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.r.e)
r=a1.a
q=a1.r.e
r.af(r.y2,r.au,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break}switch(t.c){case C.d:break
case C.i:r=a1.a
q=a1.x.f
r=r.am
r.toString
l=q.a
j=q.b
q=q.c
C.c.q(r.a,r.d,l,j,q)
break
case C.e:a1.Z(o,a1.x.d)
r=a1.a
q=a1.x.d
r.al(r.bq,r.br,q)
q=a1.a
r=a1.x.f
q=q.am
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.x.e)
r=a1.a
q=a1.x.e
r.af(r.dV,r.br,q)
q=a1.a
r=a1.x.f
q=q.am
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break}switch(t.d){case C.d:break
case C.i:r=a1.a
q=a1.y.f
r=r.bs
r.toString
l=q.a
j=q.b
q=q.c
C.c.q(r.a,r.d,l,j,q)
break
case C.e:a1.Z(o,a1.y.d)
r=a1.a
q=a1.y.d
r.al(r.dW,r.bt,q)
q=a1.a
r=a1.y.f
q=q.bs
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break
case C.h:a1.Z(o,a1.y.e)
r=a1.a
q=a1.y.e
r.af(r.dX,r.bt,q)
q=a1.a
r=a1.y.f
q=q.bs
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
break}switch(t.e){case C.d:break
case C.i:r=a1.a
q=a1.z.f
r=r.bu
r.toString
l=q.a
j=q.b
q=q.c
C.c.q(r.a,r.d,l,j,q)
q=a1.a
j=a1.z.ch
q=q.bw
C.c.N(q.a,q.d,j)
break
case C.e:a1.Z(o,a1.z.d)
r=a1.a
q=a1.z.d
r.al(r.dY,r.bv,q)
q=a1.a
r=a1.z.f
q=q.bu
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bw
C.c.N(r.a,r.d,j)
break
case C.h:a1.Z(o,a1.z.e)
r=a1.a
q=a1.z.e
r.af(r.dZ,r.bv,q)
q=a1.a
r=a1.z.f
q=q.bu
q.toString
l=r.a
j=r.b
r=r.c
C.c.q(q.a,q.d,l,j,r)
r=a1.a
j=a1.z.ch
r=r.bw
C.c.N(r.a,r.d,j)
break}if(t.z>0){n=a1.dx.e.length
r=a1.a.e9
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cs
if(h>=l.length)return H.h(l,h)
e=l[h]
l=i.cQ(f.a)
j=l.a
d=l.b
c=l.c
c=l.C(0,Math.sqrt(j*j+d*d+c*c))
d=e.b
j=c.a
l=c.b
c=c.c
C.c.q(d.a,d.d,j,l,c)
c=f.c
l=e.c
C.c.q(l.a,l.d,c.a,c.b,c.c);++h}}if(t.Q>0){n=a1.dx.f.length
r=a1.a.ea
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.ct
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gba(f)
j=e.b
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=i.bd(f.gba(f))
j=e.c
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.ga4(f)
j=e.d
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gcg()
j=e.e
C.c.N(j.a,j.d,l)
l=f.gci()
j=e.f
C.c.N(j.a,j.d,l)
l=f.gcj()
j=e.r
C.c.N(j.a,j.d,l);++h}}if(t.ch>0){n=a1.dx.r.length
r=a1.a.eb
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cu
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gba(f)
j=e.b
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gcr(f).kg()
j=e.c
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=i.bd(f.gba(f))
j=e.d
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.ga4(f)
j=e.e
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gkd()
j=e.f
C.c.N(j.a,j.d,l)
l=f.gkc()
j=e.r
C.c.N(j.a,j.d,l)
l=f.gcg()
j=e.x
C.c.N(j.a,j.d,l)
l=f.gci()
j=e.y
C.c.N(j.a,j.d,l)
l=f.gcj()
j=e.z
C.c.N(j.a,j.d,l);++h}}if(t.cx>0){n=a1.dx.x.length
r=a1.a.ec
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.x,q=r.length,l=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
j=a1.a.cv
if(h>=j.length)return H.h(j,h)
e=j[h]
j=f.gbb()
H.n(o,"$ib",l,"$ab")
if(!C.a.X(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gcr(f)
d=e.d
C.c.q(d.a,d.d,j.a,j.b,j.c)
j=f.gbK()
d=e.b
C.c.q(d.a,d.d,j.a,j.b,j.c)
j=f.gbI(f)
d=e.c
C.c.q(d.a,d.d,j.a,j.b,j.c)
j=i.cQ(f.gcr(f))
d=j.a
c=j.b
b=j.c
b=j.C(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
j=b.b
b=b.c
C.c.q(c.a,c.d,d,j,b)
b=f.ga4(f)
j=e.f
C.c.q(j.a,j.d,b.a,b.b,b.c)
b=f.gbb()
j=b.gcG(b)
if(!j){j=e.x
C.c.a3(j.a,j.d,1)}else{j=e.r
d=b.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,b.a)
j=e.x
C.c.a3(j.a,j.d,0)}++h}}if(t.cy>0){n=a1.dx.y.length
r=a1.a.ed
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.y,q=r.length,l=[P.E],j=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
d=a1.a.cw
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbb()
H.n(o,"$ib",j,"$ab")
if(!C.a.X(o,d)){d.a=o.length
C.a.h(o,d)}a=i.A(0,f.ga0(f))
d=f.ga0(f)
c=$.cH
d=d.bd(c==null?$.cH=new V.aF(0,0,0):c)
c=e.b
C.c.q(c.a,c.d,d.a,d.b,d.c)
d=$.cH
d=a.bd(d==null?$.cH=new V.aF(0,0,0):d)
c=e.c
C.c.q(c.a,c.d,d.a,d.b,d.c)
d=a.ep(0)
c=e.d
k=new Float32Array(H.cd(H.n(new V.dY(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a8(0,!0),"$ib",l,"$ab")))
C.c.eS(c.a,c.d,!1,k)
c=f.ga4(f)
d=e.e
C.c.q(d.a,d.d,c.a,c.b,c.c)
c=f.gbb()
d=c.gcG(c)
if(!d){d=e.r
C.c.a3(d.a,d.d,1)}else{d=e.f
b=c.gcG(c)
a0=d.a
d=d.d
if(!b)a0.uniform1i(d,0)
else a0.uniform1i(d,c.gke(c))
d=e.r
C.c.a3(d.a,d.d,0)}d=f.gcg()
c=e.x
C.c.N(c.a,c.d,d)
d=f.gci()
c=e.y
C.c.N(c.a,c.d,d)
d=f.gcj()
c=e.z
C.c.N(c.a,c.d,d);++h}}if(t.db>0){n=a1.dx.z.length
r=a1.a.ee
C.c.a3(r.a,r.d,n)
r=a3.db
i=r.ga0(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
l=a1.a.cz
if(h>=l.length)return H.h(l,h)
e=l[h]
l=f.gbb()
H.n(o,"$ib",a2,"$ab")
if(!C.a.X(o,l)){l.a=o.length
C.a.h(o,l)}l=f.gba(f)
j=e.b
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gcr(f)
j=e.c
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gbK()
j=e.d
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gbI(f)
j=e.e
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=i.bd(f.gba(f))
j=e.f
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gbb()
j=l.gcG(l)
if(!j){l=e.x
C.c.a3(l.a,l.d,1)}else{j=e.r
d=l.d
c=j.a
j=j.d
if(!d)c.uniform1i(j,0)
else c.uniform1i(j,l.a)
l=e.x
C.c.a3(l.a,l.d,0)}l=f.ga4(f)
j=e.y
C.c.q(j.a,j.d,l.a,l.b,l.c)
l=f.gkh()
j=e.z
C.c.N(j.a,j.d,l)
l=f.gki()
j=e.Q
C.c.N(j.a,j.d,l)
l=f.gcg()
j=e.ch
C.c.N(j.a,j.d,l)
l=f.gci()
j=e.cx
C.c.N(j.a,j.d,l)
l=f.gcj()
j=e.cy
C.c.N(j.a,j.d,l);++h}}}switch(t.f){case C.d:break
case C.i:break
case C.e:a1.Z(o,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.al(a2.e_,a2.bx,r)
break
case C.h:a1.Z(o,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.af(a2.e0,a2.bx,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga0(r).ep(0)}a2=a2.id
a2.toString
a2.ab(r.a8(0,!0))}if(t.dy){a1.Z(o,a1.ch)
a2=a1.a
r=a1.ch
a2.af(a2.e1,a2.e2,r)
switch(t.r){case C.d:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.by
a2.toString
q=r.a
l=r.b
r=r.c
C.c.q(a2.a,a2.d,q,l,r)
break
case C.e:a1.Z(o,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.al(a2.e3,a2.bz,r)
r=a1.a
a2=a1.cx.f
r=r.by
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.q(r.a,r.d,q,l,a2)
break
case C.h:a1.Z(o,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.af(a2.e4,a2.bz,r)
r=a1.a
a2=a1.cx.f
r=r.by
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.q(r.a,r.d,q,l,a2)
break}switch(t.x){case C.d:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.bB
a2.toString
q=r.a
l=r.b
r=r.c
C.c.q(a2.a,a2.d,q,l,r)
r=a1.a
l=a1.cy.ch
r=r.bA
C.c.N(r.a,r.d,l)
break
case C.e:a1.Z(o,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.al(a2.e5,a2.bC,r)
r=a1.a
a2=a1.cy.f
r=r.bB
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.q(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bA
C.c.N(a2.a,a2.d,l)
break
case C.h:a1.Z(o,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.af(a2.e6,a2.bC,r)
r=a1.a
a2=a1.cy.f
r=r.bB
r.toString
q=a2.a
l=a2.b
a2=a2.c
C.c.q(r.a,r.d,q,l,a2)
a2=a1.a
l=a1.cy.ch
a2=a2.bA
C.c.N(a2.a,a2.d,l)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bD
C.c.N(a2.a,a2.d,q)
break
case C.e:a1.Z(o,a1.db.d)
a2=a1.a
q=a1.db.d
a2.al(a2.e7,a2.bE,q)
q=a1.a
a2=a1.db.f
q=q.bD
C.c.N(q.a,q.d,a2)
break
case C.h:a1.Z(o,a1.db.e)
a2=a1.a
q=a1.db.e
a2.af(a2.e8,a2.bE,q)
q=a1.a
a2=a1.db.f
q=q.bD
C.c.N(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,m=0;m<o.length;++m){q=o[m]
if(!q.c&&q.d){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(3553,q.b)}}q=H.k(a4.e,"$iby")
q.aC(a3)
q.aH(a3)
q.eR(a3)
if(r)a2.disable(3042)
for(m=0;m<o.length;++m){r=o[m]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(3553,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.dT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.df().am},
sfF:function(a){this.e=H.n(a,"$ia5",[V.aq],"$aa5")}}
O.hG.prototype={}
O.cz.prototype={
T:function(a){this.a.T(H.e(a,"$iz"))},
c9:function(){return this.T(null)},
az:function(){},
ii:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().a2(0,t.gbj())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.gbj())
s=new D.M(t.b+".texture2D",u,t.d,[T.ef])
s.b=!0
t.a.T(s)}},
ij:function(a){}}
O.hH.prototype={}
O.bb.prototype={
dB:function(a){var u,t,s=this
if(!J.a_(s.f,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.aa])
t.b=!0
s.a.T(t)}},
az:function(){this.f7()
this.dB(new V.aa(1,1,1))},
sa4:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.i
t.az()
u=t.a
u.a=null
u.T(null)}t.dB(b)}}
O.hJ.prototype={
ih:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.T().a)){u.ch=a
t=new D.M(u.b+".refraction",t,a,[P.E])
t.b=!0
u.a.T(t)}},
az:function(){this.bQ()
this.ih(1)}}
O.hK.prototype={
cd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.T().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.T(t)}},
az:function(){this.bQ()
this.cd(100)}}
O.ca.prototype={}
T.cS.prototype={}
T.ef.prototype={}
T.iK.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.U():u}}
T.iL.prototype={
jy:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lA(a)
t=new T.iK()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.ab(u,"load",H.m(new T.iM(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ib:function(a,b,c){var u,t,s,r
b=V.lj(b)
u=V.lj(a.width)
t=V.lj(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kL()
s.width=u
s.height=t
r=H.e(C.m.eY(s,"2d"),"$icq")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oC(r.getImageData(0,0,s.width,s.height))}}}
T.iM.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ib(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jZ(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ji()}++s.e},
$S:29}
V.bn.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dV.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saa:function(a){this.a=H.n(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.ay.prototype={
aG:function(a,b){return!this.f6(0,b)},
i:function(a){return"!["+this.cX(0)+"]"}}
V.i8.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c7(this.a),t=H.c7(this.b)
return u+".."+t},
$iaC:1}
V.ii.prototype={
fc:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.p,P.P])
for(t=new H.cy(a,a.gl(a),[H.au(a,"y",0)]);t.w();)u.n(0,t.d,!0)
this.sig(u)},
aG:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.cQ(u.ga7(u),0,null)},
sig:function(a){this.a=H.n(a,"$iB",[P.p,P.P],"$aB")},
$iaC:1}
V.cN.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cU(this.a.k(0,b))
r.saa(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
jm:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
siB:function(a){this.c=H.n(a,"$ib",[V.cU],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.ll(this.b,"\n","\\n"),t=H.ll(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cT.prototype={
aI:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.H)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
si6:function(a){var u=P.f
this.c=H.n(a,"$iB",[u,u],"$aB")}}
V.iP.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cN(this,b)
u.siB(H.d([],[V.cU]))
u.d=null
this.a.n(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cT(a)
u=P.f
t.si6(new H.aJ([u,u]))
this.b.n(0,a,t)}return t},
eQ:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ek]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.jm(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cQ(i,0,m)
throw H.c(P.r("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cQ(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
sir:function(a){this.a=H.n(a,"$iB",[P.f,V.cN],"$aB")},
siu:function(a){this.b=H.n(a,"$iB",[P.f,V.cT],"$aB")}}
V.cU.prototype={
i:function(a){return this.b.b+": "+this.cX(0)}}
X.dz.prototype={$ibr:1}
X.hb.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.U():u}}
X.e4.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.U():u},
aQ:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.K(a)},
fv:function(){return this.aQ(null)},
sb7:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gu().a2(0,s.gd1())
t=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gd1())
u=new D.M("mover",t,s.b,[U.ad])
u.b=!0
s.aQ(u)}},
$ibr:1,
$idz:1}
X.ed.prototype={}
V.bA.prototype={
bh:function(a){this.b=new P.hf(C.U)
this.c=null
this.sbZ(H.d([],[[P.b,W.aH]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
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
C.S.f0(p,H.ll(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gav(m.d),p)}},
eD:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.f],"$ab")
q.sbZ(H.d([],[[P.b,W.aH]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).eQ(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.bH(t[r])},
sbZ:function(a){this.d=H.n(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.kG.prototype={
$1:function(a){var u
H.e(a,"$ibf")
u=C.j.eP(this.a.gjq(),2)
if(u!=="0.00")P.lk(u+" fps")},
$S:52}
V.fT.prototype={
bH:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iQ()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.x(new H.u("_"))
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
t=V.x(new H.u("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.x(new H.u(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.x(new H.u(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.x(new H.u("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bn())
t=a1.k(0,r).m(0,h)
u=V.x(new H.u("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.x(new H.u("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.x(new H.u("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.x(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bn())
t=a1.k(0,r).m(0,e)
u=V.x(new H.u("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.ay()
s=[V.aC]
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.x(new H.u("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.x(new H.u("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.ay()
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.x(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.x(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.P("Num")
t=a1.k(0,n)
t.d=t.a.P("Num")
t=a1.k(0,m)
t.d=t.a.P("Symbol")
t=a1.k(0,j)
t.d=t.a.P("String")
t=a1.k(0,g)
t.d=t.a.P("String")
t=a1.k(0,c)
t.d=t.a.P(d)
t=a1.k(0,a0)
t.d=t.a.P(a0)
t=a1.k(0,q)
t=t.d=t.a.P(q)
u=[P.f]
t.aI(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hc.prototype={
bH:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iQ()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.x(new H.u("_"))
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
t=V.x(new H.u("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.x(new H.u(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.x(new H.u(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.x(new H.u("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.x(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bn())
t=e.k(0,j).m(0,i)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.ay()
s=[V.aC]
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.u("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.ay()
u.saa(H.d([],s))
C.a.h(t.a,u)
t=V.x(new H.u("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.x(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.x(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.P("Num")
u=e.k(0,n)
u.d=u.a.P("Num")
u=e.k(0,m)
u.d=u.a.P("Symbol")
u=e.k(0,i)
u.d=u.a.P(j)
u=e.k(0,g)
u.d=u.a.P(h)
u=e.k(0,f)
u.d=u.a.P(f)
u=e.k(0,q)
u=u.d=u.a.P(q)
t=[P.f]
u.aI(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hd.prototype={
bH:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iQ()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.x(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.x(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.x(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.x(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.x(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.x(new H.u('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.x(new H.u("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.x(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bn())
C.a.h(l.k(0,s).m(0,m).a,new V.bn())
u=l.k(0,m).m(0,m)
t=new V.ay()
t.saa(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.x(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.P("Symbol")
u=l.k(0,n)
u.d=u.a.P("String")
u=l.k(0,r)
t=u.a.P(r)
u.d=t
t.aI(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.i3.prototype={
eD:function(a,b){H.n(b,"$ib",[P.f],"$ab")
this.sbZ(H.d([],[[P.b,W.aH]]))
this.M(C.a.m(b,"\n"),"#111")},
bH:function(a){},
bp:function(){return}}
V.im.prototype={
fd:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.m(new V.ip(o),{func:1,ret:-1,args:[r]}),!1,r)},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.f],"$ab")
this.il()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eQ(C.a.jw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
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
if(H.oY(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.fg(C.C,n,C.l,!1)
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
eX:function(a){var u,t,s,r=new V.fT("dart")
r.bh("dart")
u=new V.hc("glsl")
u.bh("glsl")
t=new V.hd("html")
t.bh("html")
s=C.a.jo(H.d([r,u,t],[V.bA]),new V.iq(a))
if(s!=null)return s
r=new V.i3("plain")
r.bh("plain")
return r},
dI:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dn(r).a5(r,"+")){C.a.n(b0,s,C.b.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(b0,s,C.b.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eX(a8)
q.eD(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fg(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lr()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.H)(r),++a0)C.a3.j8(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.H)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.w();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
j4:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ib",[P.f],"$ab")
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
s=H.e(r.insertCell(-1),"$ibe").style
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
o=H.e(r.insertCell(-1),"$ibe")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
il:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iQ()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.ay()
r=[V.aC]
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.ay()
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.x(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.ay()
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.u("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.x(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.x(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.x(new H.u("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.ay()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.ay()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bn())
s=u.k(0,i).m(0,i)
t=new V.ay()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.P(p)
s=u.k(0,n)
s.d=s.a.P(o)
s=u.k(0,"CodeEnd")
s.d=s.a.P(m)
s=u.k(0,j)
s.d=s.a.P("Link")
s=u.k(0,i)
s.d=s.a.P(i)
this.b=u}}
V.ip.prototype={
$1:function(a){P.lT(C.t,new V.io(this.a))},
$S:29}
V.io.prototype={
$0:function(){var u=C.j.ao(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.iq.prototype={
$1:function(a){return H.e(a,"$ibA").a===this.a},
$S:53}
V.iH.prototype={
aB:function(a,b,c){var u,t,s,r,q=this,p=W.lA(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.fv(q.c)
t=u.gl(u)
u=W.a7
W.ab(p,"click",H.m(new V.iJ(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.fv(q.c).h(0,p)
J.fv(q.c).h(0,document.createElement("br"))
s=P.lX().gcN().j(0,H.l(q.a))
if(s==null){q.dF(t)
r=c}else r=P.dp(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.aB(a,b,!1)},
dF:function(a){var u,t,s=P.lX(),r=P.f,q=P.no(s.gcN(),r,r)
q.n(0,this.a,""+a)
u=s.eK(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k3([],[]).cR(""),"",t)}}
V.iJ.prototype={
$1:function(a){var u,t,s=this
H.e(a,"$ia7")
u=s.a
t=J.fv(u.c)
t.B(t,new V.iI())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.dF(s.d)},
$S:54}
V.iI.prototype={
$1:function(a){var u
H.e(a,"$iN")
if(!!J.R(a).$ic0){u=a.style
u.border="solid 2px white"}},
$S:55}
N.kC.prototype={
$1:function(a){var u=this.a.Q,t=this.b.f.jy(a),s=u.c
if(s!==C.e){if(s===C.d)u.az()
u.c=C.e
u.ij(null)
s=u.a
s.a=null
s.T(null)}u.ii(t)},
$S:18}
N.kD.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dI("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dI("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.f3=u.i
u=J.dP.prototype
u.f5=u.i
u=P.j.prototype
u.f4=u.bL
u=W.N.prototype
u.bP=u.ag
u=W.eZ.prototype
u.f8=u.at
u=O.cz.prototype
u.f7=u.az
u=O.bb.prototype
u.bQ=u.az
u=V.dV.prototype
u.f6=u.aG
u.cX=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ow","o_",12)
u(P,"ox","o0",12)
u(P,"oy","o1",12)
t(P,"ms","ou",3)
s(W,"oJ",4,null,["$4"],["o3"],25,0)
s(W,"oK",4,null,["$4"],["o4"],25,0)
var m
r(m=E.ap.prototype,"gey",0,0,null,["$1","$0"],["ez","jI"],0,0)
r(m,"geA",0,0,null,["$1","$0"],["eB","jJ"],0,0)
r(m,"gew",0,0,null,["$1","$0"],["ex","jH"],0,0)
r(m,"geu",0,0,null,["$1","$0"],["ev","jE"],0,0)
q(m,"gjC","jD",8)
q(m,"gjF","jG",8)
r(m=E.ej.prototype,"gcZ",0,0,null,["$1","$0"],["d0","d_"],0,0)
p(m,"gjV","eL",3)
o(m=X.eq.prototype,"ghw","hx",13)
o(m,"ghk","hl",13)
o(m,"ghq","hr",4)
o(m,"ghA","hB",28)
o(m,"ghy","hz",28)
o(m,"ghE","hF",4)
o(m,"ghI","hJ",4)
o(m,"ghu","hv",4)
o(m,"ghG","hH",4)
o(m,"ghs","ht",4)
o(m,"ghK","hL",36)
o(m,"ghM","hN",13)
o(m,"ghZ","i_",14)
o(m,"ghV","hW",14)
o(m,"ghX","hY",14)
r(D.bC.prototype,"gfi",0,0,null,["$1","$0"],["aw","fj"],0,0)
r(m=D.dR.prototype,"gds",0,0,null,["$1","$0"],["dt","hC"],0,0)
o(m,"ghP","hQ",38)
q(m,"ghe","hf",23)
q(m,"ghT","hU",23)
n(V.X.prototype,"gl","cE",21)
n(V.Y.prototype,"gl","cE",21)
r(m=U.cx.prototype,"gaN",0,0,null,["$1","$0"],["R","a9"],0,0)
q(m,"ghc","hd",17)
q(m,"ghR","hS",17)
r(m=U.er.prototype,"gaN",0,0,null,["$1","$0"],["R","a9"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
r(m=U.es.prototype,"gaN",0,0,null,["$1","$0"],["R","a9"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gh2","h3",1)
o(m,"gh4","h5",1)
o(m,"giz","iA",1)
o(m,"gix","iy",1)
o(m,"giv","iw",1)
o(U.et.prototype,"gh8","h9",1)
r(m=M.dF.prototype,"gaO",0,0,null,["$1","$0"],["aP","fk"],0,0)
q(m,"ghm","hn",8)
q(m,"gho","hp",8)
r(m=O.dJ.prototype,"giH",0,1,null,["$2$color","$1"],["dG","iI"],45,0)
o(m,"gha","hb",11)
o(m,"gfG","fH",11)
o(m,"gd5","fC",11)
r(m=O.dW.prototype,"gbj",0,0,null,["$1","$0"],["T","c9"],0,0)
r(m,"gi9",0,0,null,["$1","$0"],["dz","ia"],0,0)
q(m,"ghg","hh",16)
q(m,"ghi","hj",16)
r(O.cz.prototype,"gbj",0,0,null,["$1","$0"],["T","c9"],0,0)
r(X.e4.prototype,"gd1",0,0,null,["$1","$0"],["aQ","fv"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.kU,J.a,J.aw,P.eM,P.j,H.cy,P.b7,H.bZ,H.d3,H.fM,H.iV,P.bE,H.cr,H.f3,P.af,H.hu,H.hw,H.hq,P.f9,P.bk,P.aN,P.ew,P.ix,P.cP,P.iy,P.bf,P.ao,P.kj,P.jY,P.cb,P.eL,P.y,P.kb,P.hC,P.bW,P.hg,P.kh,P.kg,P.P,P.aB,P.ac,P.bD,P.i1,P.eb,P.eE,P.ha,P.bF,P.b,P.B,P.J,P.az,P.f,P.ai,P.cc,P.j8,P.k0,W.fP,W.bN,W.G,W.e2,W.eZ,W.k6,W.dI,W.aE,W.jX,W.fh,P.k2,P.fe,P.jS,P.S,O.a5,O.cA,E.fG,E.ap,E.i9,E.ej,Z.eu,Z.ev,Z.by,Z.dx,Z.bG,Z.b_,D.fJ,D.bY,D.z,X.dy,X.dQ,X.hs,X.hz,X.aD,X.hR,X.iR,X.eq,D.bC,D.a9,D.e5,D.ea,D.eg,D.eh,D.ei,V.aa,V.ae,V.h2,V.dY,V.aq,V.ak,V.aF,V.e6,V.e8,V.X,V.Y,U.er,U.es,U.et,M.dF,A.du,A.fz,A.hI,A.cW,A.d_,A.cY,A.d0,A.cZ,A.d1,A.bX,A.em,A.j2,F.a8,F.ax,F.bJ,F.ah,F.ij,F.ik,F.il,F.a4,F.ji,F.jj,F.jm,F.jn,O.ca,O.cz,T.iL,V.bn,V.aC,V.dV,V.i8,V.ii,V.cN,V.ek,V.cT,V.iP,X.dz,X.ed,X.e4,V.bA,V.im,V.iH])
s(J.a,[J.hp,J.dN,J.dP,J.b8,J.dO,J.c3,H.cD,H.bI,W.i,W.fw,W.bU,W.cq,W.b5,W.b6,W.W,W.ey,W.fU,W.fV,W.eA,W.dE,W.eC,W.fX,W.o,W.eF,W.aQ,W.he,W.eH,W.bp,W.dT,W.hL,W.eN,W.eO,W.aR,W.eP,W.eS,W.aS,W.eW,W.eY,W.aU,W.f_,W.aV,W.f4,W.aK,W.f7,W.iO,W.aX,W.fa,W.iT,W.jd,W.fi,W.fk,W.fm,W.fo,W.fq,P.ba,P.eJ,P.bd,P.eU,P.i6,P.f5,P.bg,P.fc,P.fA,P.ex,P.dv,P.e7,P.c9,P.e9,P.ee,P.en,P.f1])
s(J.dP,[J.i2,J.d2,J.bH])
t(J.kT,J.b8)
s(J.dO,[J.dM,J.dL])
t(P.hy,P.eM)
s(P.hy,[H.eo,W.jy,W.at,P.h6])
t(H.u,H.eo)
s(P.j,[H.h_,H.hD,H.d4])
s(H.h_,[H.c4,H.hv])
s(P.b7,[H.hE,H.jr])
t(H.hF,H.c4)
t(H.fN,H.fM)
s(P.bE,[H.hZ,H.hr,H.j6,H.iX,H.fI,H.ig,P.fy,P.e3,P.aP,P.j7,P.j4,P.cO,P.fL,P.fS])
s(H.cr,[H.kH,H.iE,H.kx,H.ky,H.kz,P.ju,P.jt,P.jv,P.jw,P.ka,P.k9,P.jF,P.jJ,P.jG,P.jH,P.jI,P.jM,P.jN,P.jL,P.jK,P.iz,P.iA,P.kr,P.jV,P.jU,P.jW,P.hx,P.hB,P.fY,P.fZ,P.jc,P.j9,P.ja,P.jb,P.kc,P.kd,P.kf,P.ke,P.kn,P.km,P.ko,P.kp,W.h0,W.hN,W.hP,W.ie,W.iw,W.jE,W.hY,W.hX,W.jZ,W.k_,W.k8,W.ki,P.k4,P.kt,P.h7,P.h8,P.fC,E.ia,E.ib,E.ic,E.iN,D.h3,D.h4,F.kk,F.jp,F.jo,F.jk,F.jl,O.hm,O.hl,O.hn,O.ho,O.hk,O.hj,O.hi,T.iM,V.kG,V.ip,V.io,V.iq,V.iJ,V.iI,N.kC,N.kD])
s(H.iE,[H.iu,H.co])
t(H.js,P.fy)
t(P.hA,P.af)
s(P.hA,[H.aJ,W.jx])
t(H.e_,H.bI)
s(H.e_,[H.d9,H.db])
t(H.da,H.d9)
t(H.cE,H.da)
t(H.dc,H.db)
t(H.e0,H.dc)
s(H.e0,[H.hS,H.hT,H.hU,H.hV,H.hW,H.e1,H.cF])
t(P.jT,P.kj)
t(P.jR,P.jY)
t(P.ff,P.hC)
t(P.ep,P.ff)
s(P.bW,[P.fE,P.h1])
t(P.bB,P.iy)
s(P.bB,[P.fF,P.hf,P.jg,P.jf])
t(P.je,P.h1)
s(P.ac,[P.E,P.p])
s(P.aP,[P.c8,P.hh])
t(P.jA,P.cc)
s(W.i,[W.C,W.h5,W.cB,W.aT,W.dd,W.aW,W.aL,W.df,W.jq,W.d5,P.fD,P.bT])
s(W.C,[W.N,W.bz,W.d6])
s(W.N,[W.w,P.q])
s(W.w,[W.ds,W.fx,W.cn,W.bx,W.bV,W.aH,W.h9,W.c0,W.ih,W.be,W.ec,W.iC,W.iD,W.cR])
s(W.b5,[W.cs,W.fQ,W.fR])
t(W.fO,W.b6)
t(W.ct,W.ey)
t(W.eB,W.eA)
t(W.dD,W.eB)
t(W.eD,W.eC)
t(W.fW,W.eD)
t(W.aI,W.bU)
t(W.eG,W.eF)
t(W.cv,W.eG)
t(W.eI,W.eH)
t(W.c_,W.eI)
t(W.bM,W.o)
s(W.bM,[W.b9,W.a7,W.aY])
t(W.hM,W.eN)
t(W.hO,W.eO)
t(W.eQ,W.eP)
t(W.hQ,W.eQ)
t(W.eT,W.eS)
t(W.cG,W.eT)
t(W.eX,W.eW)
t(W.i4,W.eX)
t(W.id,W.eY)
t(W.de,W.dd)
t(W.ir,W.de)
t(W.f0,W.f_)
t(W.is,W.f0)
t(W.iv,W.f4)
t(W.f8,W.f7)
t(W.iF,W.f8)
t(W.dg,W.df)
t(W.iG,W.dg)
t(W.fb,W.fa)
t(W.iS,W.fb)
t(W.bj,W.a7)
t(W.fj,W.fi)
t(W.jz,W.fj)
t(W.ez,W.dE)
t(W.fl,W.fk)
t(W.jO,W.fl)
t(W.fn,W.fm)
t(W.eR,W.fn)
t(W.fp,W.fo)
t(W.k1,W.fp)
t(W.fr,W.fq)
t(W.k5,W.fr)
t(W.jB,W.jx)
t(W.jC,P.ix)
t(W.l4,W.jC)
t(W.jD,P.cP)
t(W.k7,W.eZ)
t(P.k3,P.k2)
t(P.al,P.jS)
t(P.eK,P.eJ)
t(P.ht,P.eK)
t(P.eV,P.eU)
t(P.i_,P.eV)
t(P.cJ,P.q)
t(P.f6,P.f5)
t(P.iB,P.f6)
t(P.fd,P.fc)
t(P.iU,P.fd)
t(P.fB,P.ex)
t(P.i0,P.bT)
t(P.f2,P.f1)
t(P.it,P.f2)
s(E.fG,[Z.dw,A.cK,T.cS])
s(D.z,[D.c1,D.c2,D.M,X.i5])
s(X.i5,[X.dU,X.bq,X.cC,X.el])
s(O.a5,[D.dR,U.cx])
s(D.fJ,[U.fK,U.ad,F.cM])
t(U.dB,U.ad)
s(A.cK,[A.dK,A.dX])
s(A.em,[A.Q,A.j_,A.j0,A.j1,A.iY,A.a3,A.iZ,A.O,A.cV,A.j3,A.cX,A.am,A.ar,A.as])
s(O.ca,[O.dJ,O.dW])
s(O.cz,[O.hG,O.hH,O.bb])
s(O.bb,[O.hJ,O.hK])
t(T.ef,T.cS)
t(T.iK,T.ef)
s(V.dV,[V.ay,V.cU])
t(X.hb,X.ed)
s(V.bA,[V.fT,V.hc,V.hd,V.i3])
u(H.eo,H.d3)
u(H.d9,P.y)
u(H.da,H.bZ)
u(H.db,P.y)
u(H.dc,H.bZ)
u(P.eM,P.y)
u(P.ff,P.kb)
u(W.ey,W.fP)
u(W.eA,P.y)
u(W.eB,W.G)
u(W.eC,P.y)
u(W.eD,W.G)
u(W.eF,P.y)
u(W.eG,W.G)
u(W.eH,P.y)
u(W.eI,W.G)
u(W.eN,P.af)
u(W.eO,P.af)
u(W.eP,P.y)
u(W.eQ,W.G)
u(W.eS,P.y)
u(W.eT,W.G)
u(W.eW,P.y)
u(W.eX,W.G)
u(W.eY,P.af)
u(W.dd,P.y)
u(W.de,W.G)
u(W.f_,P.y)
u(W.f0,W.G)
u(W.f4,P.af)
u(W.f7,P.y)
u(W.f8,W.G)
u(W.df,P.y)
u(W.dg,W.G)
u(W.fa,P.y)
u(W.fb,W.G)
u(W.fi,P.y)
u(W.fj,W.G)
u(W.fk,P.y)
u(W.fl,W.G)
u(W.fm,P.y)
u(W.fn,W.G)
u(W.fo,P.y)
u(W.fp,W.G)
u(W.fq,P.y)
u(W.fr,W.G)
u(P.eJ,P.y)
u(P.eK,W.G)
u(P.eU,P.y)
u(P.eV,W.G)
u(P.f5,P.y)
u(P.f6,W.G)
u(P.fc,P.y)
u(P.fd,W.G)
u(P.ex,P.af)
u(P.f1,P.y)
u(P.f2,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bx.prototype
C.m=W.bV.prototype
C.S=W.aH.prototype
C.V=J.a.prototype
C.a=J.b8.prototype
C.W=J.dL.prototype
C.f=J.dM.prototype
C.n=J.dN.prototype
C.j=J.dO.prototype
C.b=J.c3.prototype
C.X=J.bH.prototype
C.a2=W.cG.prototype
C.F=J.i2.prototype
C.c=P.c9.prototype
C.a3=W.be.prototype
C.G=W.ec.prototype
C.w=J.d2.prototype
C.H=W.bj.prototype
C.I=W.d5.prototype
C.a4=new P.fF()
C.J=new P.fE()
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

C.Q=new P.i1()
C.l=new P.je()
C.R=new P.jg()
C.k=new P.jT()
C.d=new A.bX(0,"ColorSourceType.None")
C.i=new A.bX(1,"ColorSourceType.Solid")
C.e=new A.bX(2,"ColorSourceType.Texture2D")
C.h=new A.bX(3,"ColorSourceType.TextureCube")
C.t=new P.bD(0)
C.T=new P.bD(5e6)
C.U=new P.hg("element",!0,!1,!1,!1)
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
C.a1=new H.fN(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",E:"double",ac:"num",f:"String",P:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.J,args:[F.a8]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.j,E.ap]]},{func:1,ret:P.J,args:[D.z]},{func:1,ret:P.J,args:[F.a4]},{func:1,ret:F.ah,args:[F.ah]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:-1,args:[P.p,[P.j,V.aq]]},{func:1,ret:-1,args:[P.p,[P.j,U.ad]]},{func:1,ret:P.J,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.E},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.j,D.a9]]},{func:1,ret:P.P,args:[W.C]},{func:1,ret:P.P,args:[W.N,P.f,P.f,W.bN]},{func:1,ret:P.P,args:[W.aE]},{func:1,ret:P.P,args:[P.f]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.J,args:[P.ac]},{func:1,ret:W.N,args:[W.C]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:-1,args:[W.bj]},{func:1,args:[W.o]},{func:1,ret:P.P,args:[[P.j,D.a9]]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.J,args:[P.f,,]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,args:[,P.f]},{func:1,ret:P.J,args:[F.a4,P.E,P.E]},{func:1,args:[P.f]},{func:1,ret:F.ah,args:[F.ah],named:{color:V.ae}},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:-1,args:[F.a4,F.a4]},{func:1,ret:P.J,args:[F.ax]},{func:1,ret:[P.B,P.f,P.f],args:[[P.B,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.J,args:[P.bf]},{func:1,ret:P.P,args:[V.bA]},{func:1,ret:P.J,args:[W.a7]},{func:1,ret:P.J,args:[W.N]},{func:1,ret:P.J,args:[,],opt:[P.az]},{func:1,ret:P.S,args:[P.p]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b3=0
$.cp=null
$.lt=null
$.l8=!1
$.mv=null
$.mq=null
$.mB=null
$.ku=null
$.kA=null
$.lh=null
$.ce=null
$.dk=null
$.dl=null
$.l9=!1
$.a2=C.k
$.aA=[]
$.bo=null
$.kO=null
$.lz=null
$.ly=null
$.d8=P.kW(P.f,P.bF)
$.lE=null
$.lI=null
$.cH=null
$.lO=null
$.m_=null
$.m3=null
$.m1=null
$.m2=null
$.jh=null
$.m0=null
$.lH=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p6","mF",function(){return H.mu("_$dart_dartClosure")})
u($,"p7","lm",function(){return H.mu("_$dart_js")})
u($,"pb","mG",function(){return H.bh(H.iW({
toString:function(){return"$receiver$"}}))})
u($,"pc","mH",function(){return H.bh(H.iW({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pd","mI",function(){return H.bh(H.iW(null))})
u($,"pe","mJ",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ph","mM",function(){return H.bh(H.iW(void 0))})
u($,"pi","mN",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pg","mL",function(){return H.bh(H.lV(null))})
u($,"pf","mK",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pk","mP",function(){return H.bh(H.lV(void 0))})
u($,"pj","mO",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pB","ln",function(){return P.nZ()})
u($,"pn","mQ",function(){return P.nV()})
u($,"pC","mU",function(){return H.nt(H.cd(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pE","mW",function(){return P.nI("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pF","mX",function(){return P.on()})
u($,"pD","mV",function(){return P.lC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pu","mT",function(){return Z.aM(0)})
u($,"po","mR",function(){return Z.aM(511)})
u($,"pw","b2",function(){return Z.aM(1)})
u($,"pv","b1",function(){return Z.aM(2)})
u($,"pq","b0",function(){return Z.aM(4)})
u($,"px","bu",function(){return Z.aM(8)})
u($,"py","bv",function(){return Z.aM(16)})
u($,"pr","bS",function(){return Z.aM(32)})
u($,"ps","dq",function(){return Z.aM(64)})
u($,"pt","mS",function(){return Z.aM(96)})
u($,"pz","cm",function(){return Z.aM(128)})
u($,"pp","bt",function(){return Z.aM(256)})
u($,"p5","mE",function(){return new V.h2(1e-9)})
u($,"p4","T",function(){return $.mE()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cD,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hS,Int32Array:H.hT,Int8Array:H.hU,Uint16Array:H.hV,Uint32Array:H.hW,Uint8ClampedArray:H.e1,CanvasPixelArray:H.e1,Uint8Array:H.cF,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fw,HTMLAnchorElement:W.ds,HTMLAreaElement:W.fx,HTMLBaseElement:W.cn,Blob:W.bU,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bV,CanvasRenderingContext2D:W.cq,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fO,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b5,CSSKeywordValue:W.b5,CSSPositionValue:W.b5,CSSResourceValue:W.b5,CSSURLImageValue:W.b5,CSSStyleValue:W.b5,CSSMatrixComponent:W.b6,CSSRotation:W.b6,CSSScale:W.b6,CSSSkew:W.b6,CSSTranslation:W.b6,CSSTransformComponent:W.b6,CSSTransformValue:W.fQ,CSSUnparsedValue:W.fR,DataTransferItemList:W.fU,HTMLDivElement:W.aH,DOMException:W.fV,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fW,DOMTokenList:W.fX,Element:W.N,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.aI,FileList:W.cv,FileWriter:W.h5,HTMLFormElement:W.h9,Gamepad:W.aQ,History:W.he,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.bp,HTMLImageElement:W.c0,KeyboardEvent:W.b9,Location:W.dT,MediaList:W.hL,MessagePort:W.cB,MIDIInputMap:W.hM,MIDIOutputMap:W.hO,MimeType:W.aR,MimeTypeArray:W.hQ,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.aS,PluginArray:W.i4,RTCStatsReport:W.id,HTMLSelectElement:W.ih,SourceBuffer:W.aT,SourceBufferList:W.ir,SpeechGrammar:W.aU,SpeechGrammarList:W.is,SpeechRecognitionResult:W.aV,Storage:W.iv,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.ec,HTMLTableRowElement:W.iC,HTMLTableSectionElement:W.iD,HTMLTemplateElement:W.cR,TextTrack:W.aW,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iF,TextTrackList:W.iG,TimeRanges:W.iO,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iS,TrackDefaultList:W.iT,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.jd,VideoTrackList:W.jq,WheelEvent:W.bj,Window:W.d5,DOMWindow:W.d5,Attr:W.d6,CSSRuleList:W.jz,ClientRect:W.ez,DOMRect:W.ez,GamepadList:W.jO,NamedNodeMap:W.eR,MozNamedAttrMap:W.eR,SpeechRecognitionResultList:W.k1,StyleSheetList:W.k5,SVGLength:P.ba,SVGLengthList:P.ht,SVGNumber:P.bd,SVGNumberList:P.i_,SVGPointList:P.i6,SVGScriptElement:P.cJ,SVGStringList:P.iB,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bg,SVGTransformList:P.iU,AudioBuffer:P.fA,AudioParamMap:P.fB,AudioTrackList:P.fD,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.i0,WebGLBuffer:P.dv,WebGLProgram:P.e7,WebGL2RenderingContext:P.c9,WebGLShader:P.e9,WebGLTexture:P.ee,WebGLUniformLocation:P.en,SQLResultSetRowList:P.it})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.my,[])
else N.my([])})})()
//# sourceMappingURL=test.dart.js.map
