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
a[c]=function(){a[c]=function(){H.p9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ld"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ld"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ld(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kS:function kS(){},
kn:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h5:function(){return new P.c8("No element")},
nu:function(){return new P.c8("Too many elements")},
nt:function(){return new P.c8("Too few elements")},
v:function v(a){this.a=a},
fM:function fM(){},
c2:function c2(){},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
cX:function cX(){},
eb:function eb(){},
nk:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cl:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
oQ:function(a){return v.types[H.ai(a)]},
oX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aK(a))
return u},
cH:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nO:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.f(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
c4:function(a){return H.nF(a)+H.l9(H.bS(a),0,null)},
nF:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibO){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.F(t,0)===36?C.b.ap(t,1):t)},
nG:function(){if(!!self.location)return self.location.href
return},
lQ:function(a){var u,t,s,r,q
H.kt(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nP:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aK(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aK(s))}return H.lQ(r)},
lR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aK(s))
if(s<0)throw H.c(H.aK(s))
if(s>65535)return H.nP(a)}return H.lQ(a)},
nQ:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aQ(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nN:function(a){var u=H.c3(a).getFullYear()+0
return u},
nL:function(a){var u=H.c3(a).getMonth()+1
return u},
nH:function(a){var u=H.c3(a).getDate()+0
return u},
nI:function(a){var u=H.c3(a).getHours()+0
return u},
nK:function(a){var u=H.c3(a).getMinutes()+0
return u},
nM:function(a){var u=H.c3(a).getSeconds()+0
return u},
nJ:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.aK(a))},
f:function(a,b){if(a==null)J.aC(a)
throw H.c(H.cf(a,b))},
cf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ai(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dW(b,s)},
oI:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
aK:function(a){return new P.aL(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dS()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mJ})
u.name=""}else u.toString=H.mJ
return u},
mJ:function(){return J.at(this.dartException)},
u:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bh(a))},
bb:function(a){var u,t,s,r,q,p
a=H.mI(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m_:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lL:function(a,b){return new H.hK(a,b==null?null:b.method)},
kT:function(a,b){var u=b==null,t=u?null:b.method
return new H.h9(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kT(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lL(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mN()
q=$.mO()
p=$.mP()
o=$.mQ()
n=$.mT()
m=$.mU()
l=$.mS()
$.mR()
k=$.mW()
j=$.mV()
i=r.af(u)
if(i!=null)return f.$1(H.kT(H.I(u),i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.kT(H.I(u),i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lL(H.I(u),i))}}return f.$1(new H.iQ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e_()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e_()
return a},
cj:function(a){var u
if(a==null)return new H.eP(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eP(a)},
oM:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
oW:function(a,b,c,d,e,f){H.h(a,"$ibC")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var u
H.ai(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oW)
a.$identity=u
return u},
nj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.co(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.q()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ly(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.oQ,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lw:H.kK
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ly(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ng:function(a,b,c,d){var u=H.kK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ly:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ni(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ng(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.ft("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cp
return new Function(r+H.l(q==null?$.cp=H.ft("self"):q)+"."+H.l(u)+"("+o+");}")()},
nh:function(a,b,c,d){var u=H.kK,t=H.lw
switch(b?-1:a){case 0:throw H.c(H.nU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ni:function(a,b){var u,t,s,r,q,p,o,n=$.cp
if(n==null)n=$.cp=H.ft("self")
u=$.lv
if(u==null)u=$.lv=H.ft("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aZ
if(typeof u!=="number")return u.q()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.q()
$.aZ=u+1
return new Function(n+u+"}")()},
ld:function(a,b,c,d,e,f,g){return H.nj(a,b,H.ai(c),d,!!e,!!f,g)},
kK:function(a){return a.a},
lw:function(a){return a.c},
ft:function(a){var u,t,s,r=new H.co("self","target","receiver","name"),q=J.kQ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.oC("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
oJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
p1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
la:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mG:function(a,b){throw H.c(H.aY(a,H.cl(H.I(b).substring(2))))},
p3:function(a,b){throw H.c(H.nf(a,H.cl(H.I(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mG(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.p3(a,b)},
kt:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mD:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mG(a,b)},
mz:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fc:function(a,b){var u
if(typeof a=="function")return!0
u=H.mz(J.V(a))
if(u==null)return!1
return H.mm(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.l6)return a
$.l6=!0
try{if(H.fc(a,b))return a
u=H.kC(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.l6=!1}},
lg:function(a,b){if(a!=null&&!H.lc(a,b))H.u(H.aY(a,H.kC(b)))
return a},
aY:function(a,b){return new H.iE("TypeError: "+P.dz(a)+": type '"+H.ms(a)+"' is not a subtype of type '"+b+"'")},
nf:function(a,b){return new H.fu("CastError: "+P.dz(a)+": type '"+H.ms(a)+"' is not a subtype of type '"+b+"'")},
ms:function(a){var u,t=J.V(a)
if(!!t.$icq){u=H.mz(t)
if(u!=null)return H.kC(u)
return"Closure"}return H.c4(a)},
oC:function(a){throw H.c(new H.jf(a))},
p9:function(a){throw H.c(new P.fE(H.I(a)))},
nU:function(a){return new H.i1(a)},
mA:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
pS:function(a,b,c){return H.ck(a["$a"+H.l(c)],H.bS(b))},
bR:function(a,b,c,d){var u
H.I(c)
H.ai(d)
u=H.ck(a["$a"+H.l(c)],H.bS(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.I(b)
H.ai(c)
u=H.ck(a["$a"+H.l(b)],H.bS(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.ai(b)
u=H.bS(a)
return u==null?null:u[b]},
kC:function(a){return H.bQ(a,null)},
bQ:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.l9(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.ov(a,b)
if('futureOr' in a)return"FutureOr<"+H.bQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ov:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.Q)p+=" extends "+H.bQ(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bQ(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bQ(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bQ(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oL(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bQ(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
l9:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ag("")
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
lb:function(a,b,c,d){var u,t
H.I(b)
H.kt(c)
H.I(d)
if(a==null)return!1
u=H.bS(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mv(H.ck(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kt(c)
H.I(d)
if(a==null)return a
if(H.lb(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cl(b.substring(2))+H.l9(c,0,null),v.mangledGlobalNames)))},
mv:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
pQ:function(a,b,c){return a.apply(b,H.ck(J.V(b)["$a"+H.l(c)],H.bS(b)))},
mC:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="M"||a===-1||a===-2||H.mC(u)}return!1},
lc:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="M"||b===-1||b===-2||H.mC(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fc(a,b)}u=J.V(a).constructor
t=H.bS(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lc(a,b))throw H.c(H.aY(a,H.kC(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.mm(a,b,c,d)
if('func' in a)return c.name==="bC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aJ("type" in a?a.type:l,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cw" in t.prototype))return!1
r=t.prototype["$a"+"cw"]
q=H.ck(r,u?a.slice(1):l)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mv(H.ck(m,u),b,p,d)},
mm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.p0(h,b,g,d)},
p0:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aJ(c[s],d,a[s],b))return!1}return!0},
pR:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
oZ:function(a){var u,t,s,r,q=H.I($.mB.$1(a)),p=$.km[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kr[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mu.$2(a,q))
if(q!=null){p=$.km[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kr[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kB(u)
$.km[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kr[q]=u
return u}if(s==="-"){r=H.kB(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mF(a,u)
if(s==="*")throw H.c(P.iP(q))
if(v.leafTags[q]===true){r=H.kB(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mF(a,u)},
mF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.li(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kB:function(a){return J.li(a,!1,null,!!a.$iL)},
p_:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kB(u)
else return J.li(u,c,null,null)},
oU:function(){if(!0===$.lh)return
$.lh=!0
H.oV()},
oV:function(){var u,t,s,r,q,p,o,n
$.km=Object.create(null)
$.kr=Object.create(null)
H.oT()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mH.$1(q)
if(p!=null){o=H.p_(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oT:function(){var u,t,s,r,q,p,o=C.K()
o=H.cd(C.L,H.cd(C.M,H.cd(C.z,H.cd(C.z,H.cd(C.N,H.cd(C.O,H.cd(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mB=new H.ko(r)
$.mu=new H.kp(q)
$.mH=new H.kq(p)},
cd:function(a,b){return a(b)||b},
nw:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mI:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lk:function(a,b,c){var u=H.p8(a,b,c)
return u},
p8:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mI(b),'g'),H.oK(c))},
fy:function fy(){},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iC:function iC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hK:function hK(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
kH:function kH(a){this.a=a},
eP:function eP(a){this.a=a
this.b=null},
cq:function cq(){},
ir:function ir(){},
ig:function ig(){},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a){this.a=a},
fu:function fu(a){this.a=a},
i1:function i1(a){this.a=a},
jf:function jf(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
he:function he(a,b){this.a=a
this.$ti=b},
hf:function hf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
nE:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cf(b,a))},
ot:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oI(a,b,c))
return b},
cD:function cD(){},
bH:function bH(){},
dO:function dO(){},
cE:function cE(){},
dP:function dP(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
dQ:function dQ(){},
cF:function cF(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
oL:function(a){return J.lD(a?Object.keys(a):[],null)},
p2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
li:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fe:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lh==null){H.oU()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iP("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lm()]
if(r!=null)return r
r=H.oZ(a)
if(r!=null)return r
if(typeof a=="function")return C.W
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lm(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nv:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lD(new Array(a),b)},
lD:function(a,b){return J.kQ(H.d(a,[b]))},
kQ:function(a){H.kt(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dB.prototype
return J.h7.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.dC.prototype
if(typeof a=="boolean")return J.h6.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.Q)return a
return J.fe(a)},
oN:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.Q)return a
return J.fe(a)},
ch:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.Q)return a
return J.fe(a)},
fd:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.Q)return a
return J.fe(a)},
oO:function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bO.prototype
return a},
oP:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bO.prototype
return a},
dg:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bO.prototype
return a},
ci:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.Q)return a
return J.fe(a)},
n4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oN(a).q(a,b)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).u(a,b)},
lo:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oP(a).E(a,b)},
n5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oO(a).t(a,b)},
lp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).j(a,b)},
kI:function(a,b,c){return J.fd(a).n(a,b,c)},
n6:function(a,b){return J.dg(a).F(a,b)},
n7:function(a,b,c){return J.ci(a).hV(a,b,c)},
n8:function(a,b,c,d){return J.ci(a).iO(a,b,c,d)},
n9:function(a,b){return J.dg(a).Y(a,b)},
fg:function(a,b){return J.fd(a).J(a,b)},
na:function(a,b,c,d){return J.ci(a).jd(a,b,c,d)},
lq:function(a,b){return J.fd(a).L(a,b)},
nb:function(a){return J.ci(a).giX(a)},
lr:function(a){return J.ci(a).gcj(a)},
dj:function(a){return J.V(a).gI(a)},
bw:function(a){return J.fd(a).gU(a)},
aC:function(a){return J.ch(a).gl(a)},
ls:function(a){return J.fd(a).jJ(a)},
nc:function(a,b){return J.ci(a).jN(a,b)},
nd:function(a,b,c){return J.dg(a).B(a,b,c)},
ne:function(a){return J.dg(a).jV(a)},
at:function(a){return J.V(a).i(a)},
a:function a(){},
h6:function h6(){},
dC:function dC(){},
dD:function dD(){},
hO:function hO(){},
bO:function bO(){},
bk:function bk(){},
aO:function aO(a){this.$ti=a},
kR:function kR(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bE:function bE(){},
dB:function dB(){},
h7:function h7(){},
bj:function bj(){}},P={
o5:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oD()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ce(new P.jh(s),1)).observe(u,{childList:true})
return new P.jg(s,u,t)}else if(self.setImmediate!=null)return P.oE()
return P.oF()},
o6:function(a){self.scheduleImmediate(H.ce(new P.ji(H.n(a,{func:1,ret:-1})),0))},
o7:function(a){self.setImmediate(H.ce(new P.jj(H.n(a,{func:1,ret:-1})),0))},
o8:function(a){P.kY(C.t,H.n(a,{func:1,ret:-1}))},
kY:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a5(a.a,1000)
return P.oe(u<0?0:u,b)},
lZ:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.f.a5(a.a,1000)
return P.of(u<0?0:u,b)},
oe:function(a,b){var u=new P.eV()
u.fg(a,b)
return u},
of:function(a,b){var u=new P.eV()
u.fh(a,b)
return u},
o9:function(a,b){var u,t,s
b.a=1
try{a.eB(new P.jt(b),new P.ju(b),null)}catch(s){u=H.aj(s)
t=H.cj(s)
P.p4(new P.jv(b,u,t))}},
mb:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.c4()
b.a=a.a
b.c=a.c
P.d1(b,t)}else{t=H.h(b.c,"$ibe")
b.a=2
b.c=a
a.dj(t)}},
d1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kd(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d1(h.a,b)}g=h.a
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
if(m){H.h(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kd(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.jz(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jy(u,b,o).$0()}else if((g&2)!==0)new P.jx(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.V(g).$icw){if(g.a>=4){k=H.h(q.c,"$ibe")
q.c=null
b=q.bk(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mb(g,q)
return}}j=b.b
k=H.h(j.c,"$ibe")
j.c=null
b=j.bk(k)
g=u.a
r=u.b
if(!g){H.A(r,H.t(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
oy:function(a,b){if(H.fc(a,{func:1,args:[P.Q,P.aw]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.aw]})
if(H.fc(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.kJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ox:function(){var u,t
for(;u=$.cc,u!=null;){$.df=null
t=u.b
$.cc=t
if(t==null)$.de=null
u.a.$0()}},
oB:function(){$.l7=!0
try{P.ox()}finally{$.df=null
$.l7=!1
if($.cc!=null)$.ln().$1(P.mw())}},
mr:function(a){var u=new P.eh(H.n(a,{func:1,ret:-1}))
if($.cc==null){$.cc=$.de=u
if(!$.l7)$.ln().$1(P.mw())}else $.de=$.de.b=u},
oA:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cc
if(u==null){P.mr(a)
$.df=$.de
return}t=new P.eh(a)
s=$.df
if(s==null){t.b=u
$.cc=$.df=t}else{t.b=s.b
$.df=s.b=t
if(t.b==null)$.de=t}},
p4:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.k===u){P.kf(t,t,C.k,a)
return}u.toString
P.kf(t,t,u,H.n(u.cd(a),s))},
lY:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.k){u.toString
return P.kY(a,b)}return P.kY(a,H.n(u.cd(b),t))},
nY:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b9]}
H.n(b,s)
u=$.a0
if(u===C.k){u.toString
return P.lZ(a,b)}t=u.dE(b,P.b9)
$.a0.toString
return P.lZ(a,H.n(t,s))},
kd:function(a,b,c,d,e){var u={}
u.a=d
P.oA(new P.ke(u,e))},
mn:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mo:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
oz:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kf:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cd(d):c.iY(d,-1)
P.mr(d)},
jh:function jh(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
eV:function eV(){this.c=0},
jY:function jY(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
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
js:function js(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jA:function jA(a){this.a=a},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a
this.b=null},
ij:function ij(){},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b){this.a=a
this.b=b},
cL:function cL(){},
ik:function ik(){},
b9:function b9(){},
am:function am(a,b){this.a=a
this.b=b},
k6:function k6(){},
ke:function ke(a,b){this.a=a
this.b=b},
jG:function jG(){},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
ny:function(a,b){return new H.aP([a,b])},
kU:function(a,b){return new H.aP([a,b])},
nA:function(a){return H.oM(a,new H.aP([null,null]))},
dG:function(a){return new P.jE([a])},
l3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
od:function(a,b,c){var u=new P.ew(a,b,[c])
u.c=a.e
return u},
ns:function(a,b,c){var u,t
if(P.l8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.ax,a)
try{P.ow(a,u)}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=P.lW(b,H.mD(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kP:function(a,b,c){var u,t
if(P.l8(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.ax,a)
try{t=u
t.a=P.lW(t.a,a,", ")}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l8:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
ow:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.l(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.C();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nz:function(a,b,c){var u=P.ny(b,c)
a.L(0,new P.hg(u,b,c))
return u},
lE:function(a,b){var u,t,s=P.dG(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t)s.h(0,H.A(a[t],b))
return s},
kV:function(a){var u,t={}
if(P.l8(a))return"{...}"
u=new P.ag("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lq(a,new P.hk(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.f($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jE:function jE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c9:function c9(a){this.a=a
this.c=this.b=null},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(){},
z:function z(){},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
ad:function ad(){},
jZ:function jZ(){},
hl:function hl(){},
ec:function ec(a,b){this.a=a
this.$ti=b},
jL:function jL(){},
ex:function ex(){},
f_:function f_(){},
o0:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.o1(!1,b,c,d)
return},
o1:function(a,b,c,d){var u,t,s=$.mX()
if(s==null)return
u=0===c
if(u&&!0)return P.l0(s,b)
t=b.length
d=P.bo(c,d,t)
if(u&&d===t)return P.l0(s,b)
return P.l0(s,b.subarray(c,d))},
l0:function(a,b){if(P.o3(b))return
return P.o4(a,b)},
o4:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
o3:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o2:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mq:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.ch(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bL()
if((s&127)!==s)return t-b}return c-b},
lu:function(a,b,c,d,e,f){if(C.f.bd(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fq:function fq(){},
fr:function fr(){},
bW:function bW(){},
bA:function bA(){},
fO:function fO(){},
h3:function h3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h2:function h2(a){this.a=a},
iY:function iY(){},
j_:function j_(){},
k4:function k4(a){this.b=0
this.c=a},
iZ:function iZ(a){this.a=a},
k3:function k3(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ff:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.nO(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
np:function(a){if(a instanceof H.cq)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nB:function(a,b,c){var u,t
H.A(b,c)
u=J.nv(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lF:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bw(a);u.C();)C.a.h(s,H.A(u.gK(u),c))
if(b)return s
return H.k(J.kQ(s),"$ib",t,"$ab")},
cM:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[t],"$aaO")
u=a.length
c=P.bo(b,c,u)
return H.lR(b>0||c<u?C.a.eP(a,b,c):a)}if(!!J.V(a).$icF)return H.nQ(a,b,P.bo(b,c,a.length))
return P.nW(a,b,c)},
nW:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aC(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.af(c,b,s,q,q))
r.push(t.gK(t))}return H.lR(r)},
nS:function(a){return new H.h8(a,H.nw(a,!1,!0,!1))},
lW:function(a,b,c){var u=J.bw(b)
if(!u.C())return a
if(c.length===0){do a+=H.l(u.gK(u))
while(u.C())}else{a+=H.l(u.gK(u))
for(;u.C();)a=a+c+H.l(u.gK(u))}return a},
m1:function(){var u=H.nG()
if(u!=null)return P.o_(u)
throw H.c(P.J("'Uri.base' is not supported"))},
f0:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.n2().b
if(typeof b!=="string")H.u(H.aK(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bW",0))
t=c.gjc().ck(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nl:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
du:function(a){if(a>=10)return""+a
return"0"+a},
lA:function(a,b){return new P.b1(1e6*b+1000*a)},
dz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.np(a)},
fj:function(a){return new P.aL(!1,null,null,a)},
kJ:function(a,b,c){return new P.aL(!0,a,b,c)},
dW:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bo:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
kW:function(a,b){if(typeof a!=="number")return a.X()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ai(e==null?J.aC(b):e)
return new P.h4(u,!0,a,c,"Index out of range")},
J:function(a){return new P.iR(a)},
iP:function(a){return new P.iO(a)},
lV:function(a){return new P.c8(a)},
bh:function(a){return new P.fx(a)},
w:function(a){return new P.ep(a)},
a7:function(a,b,c){return new P.fY(a,b,c)},
nC:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lj:function(a){H.p2(a)},
o_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.m0(e<e?C.b.B(a,0,e):a,5,f).geH()
else if(u===32)return P.m0(C.b.B(a,5,e),0,f).geH()}t=new Array(8)
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
if(P.mp(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.k5()
if(r>=0)if(P.mp(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.X()
if(typeof n!=="number")return H.G(n)
if(m<n)n=m
if(typeof o!=="number")return o.X()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.X()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.X()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aa(a,"..",o)))j=n>o+2&&C.b.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aa(a,"file",0)){if(q<=0){if(!C.b.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.B(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aa(a,"http",0)){if(t&&p+3===o&&C.b.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aa(a,"https",0)){if(t&&p+4===o&&C.b.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jO(a,r,q,p,o,n,m,k)}return P.og(a,0,e,r,q,p,o,n,m,k)},
m3:function(a){var u=P.e
return C.a.jh(H.d(a.split("&"),[u]),P.kU(u,u),new P.iW(C.l),[P.F,P.e,P.e])},
nZ:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ff(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.eM()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.f(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ff(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.eM()
if(p>255)k.$2(l,s)
if(r>=u)return H.f(j,r)
j[r]=p
return j},
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iU(a)
t=new P.iV(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nZ(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aQ(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
og:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.on(a,b,d)
else{if(d===b)P.db(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oo(a,u,e-1):""
s=P.ok(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.om(P.ff(C.b.B(a,r,g),new P.k_(a,f),n),j):n}else{q=n
s=q
t=""}p=P.ol(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.X()
o=h<i?P.l4(a,h+1,i,n):n
return new P.ca(j,t,s,q,p,o,i<c?P.oj(a,i+1,c):n)},
mf:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
db:function(a,b,c){throw H.c(P.a7(c,a,b))},
om:function(a,b){if(a!=null&&a===P.mf(b))return
return a},
ok:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Y(a,u)!==93)P.db(a,b,"Missing end `]` to match `[` in host")
P.m2(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.m2(a,b,c)
return"["+a+"]"}return P.oq(a,b,c)},
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.ml(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.db(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mg(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
on:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mi(C.b.F(a,b)))P.db(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.db(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oh(t?a.toLowerCase():a)},
oh:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oo:function(a,b,c){return P.dc(a,b,c,C.Z,!1)},
ol:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dc(a,b,c,C.E,!0):C.m.k6(d,new P.k0(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a4(u,"/"))u="/"+u
return P.op(u,e,f)},
op:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a4(a,"/"))return P.or(a,!u||c)
return P.os(a)},
l4:function(a,b,c,d){var u,t={}
H.k(d,"$iF",[P.e,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.fj("Both query and queryParameters specified"))
return P.dc(a,b,c,C.o,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.L(0,new P.k1(new P.k2(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oj:function(a,b,c){return P.dc(a,b,c,C.o,!0)},
ml:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kn(u)
r=H.kn(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aQ(q,4)
if(p>=8)return H.f(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mg:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.p])
C.a.n(t,0,37)
C.a.n(t,1,C.b.F(o,a>>>4))
C.a.n(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.i7(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.F(o,p>>>4))
C.a.n(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cM(t,0,null)},
dc:function(a,b,c,d,e){var u=P.mk(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
mk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.X()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.ml(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.db(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mg(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.B(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.X()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mj:function(a){if(C.b.a4(a,"."))return!0
return C.b.e9(a,"/.")!==-1},
os:function(a){var u,t,s,r,q,p,o
if(!P.mj(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
or:function(a,b){var u,t,s,r,q,p
if(!P.mj(a))return!b?P.mh(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.n(u,0,P.mh(u[0]))}return C.a.m(u,"/")},
mh:function(a){var u,t,s,r=a.length
if(r>=2&&P.mi(J.n6(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.ap(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.f(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oi:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fj("Invalid URL encoding"))}}return u},
l5:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.v(C.b.B(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.fj("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.fj("Truncated URI"))
C.a.h(r,P.oi(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.iZ(!1).ck(r)},
mi:function(a){var u=a|32
return 97<=u&&u<=122},
m0:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.aa(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.js(0,a,o,u)
else{n=P.mk(a,o,u,C.o,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.iS(a,l,c)},
ou:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nC(22,new P.ka(),P.S),n=new P.k9(o),m=new P.kb(),l=new P.kc(),k=H.h(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iS"),"]",5)
k=H.h(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iS"),"az",21)
k=H.h(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mp:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.n3()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b1:function b1(a){this.a=a},
fK:function fK(){},
fL:function fL(){},
bB:function bB(){},
fk:function fk(){},
dS:function dS(){},
aL:function aL(a,b,c,d){var _=this
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
h4:function h4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
c8:function c8(a){this.a=a},
fx:function fx(a){this.a=a},
hN:function hN(){},
e_:function e_(){},
fE:function fE(a){this.a=a},
ep:function ep(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(){},
p:function p(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
F:function F(){},
M:function M(){},
ab:function ab(){},
Q:function Q(){},
aw:function aw(){},
e:function e(){},
ag:function ag(a){this.a=a},
iW:function iW(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
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
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(){},
k2:function k2(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(){},
k9:function k9(a){this.a=a},
kb:function kb(){},
kc:function kc(){},
jO:function jO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bp:function(a){var u,t,s,r,q
if(a==null)return
u=P.kU(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oG:function(a){var u={}
a.L(0,new P.kg(u))
return u},
jQ:function jQ(){},
jS:function jS(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
jR:function jR(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(){},
fW:function fW(){},
jD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oc:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jF:function jF(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hb:function hb(){},
b6:function b6(){},
hL:function hL(){},
hS:function hS(){},
cI:function cI(){},
io:function io(){},
q:function q(){},
ba:function ba(){},
iB:function iB(){},
eu:function eu(){},
ev:function ev(){},
eF:function eF(){},
eG:function eG(){},
eR:function eR(){},
eS:function eS(){},
eY:function eY(){},
eZ:function eZ(){},
S:function S(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(a){this.a=a},
fp:function fp(){},
bT:function bT(){},
hM:function hM(){},
ei:function ei(){},
dm:function dm(){},
dV:function dV(){},
c7:function c7(){},
dY:function dY(){},
ea:function ea(){},
ie:function ie(){},
eN:function eN(){},
eO:function eO(){}},W={
lt:function(){var u=document.createElement("a")
return u},
lx:function(){var u=document.createElement("canvas")
return u},
nn:function(a,b,c){var u=document.body,t=(u&&C.x).ae(u,a,b,c)
t.toString
u=W.C
u=new H.cZ(new W.ar(t),H.n(new W.fN(),{func:1,ret:P.T,args:[u]}),[u])
return H.h(u.gaJ(u),"$iU")},
no:function(a){H.h(a,"$ij")
return"wheel"},
ct:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ci(a)
t=u.gez(a)
if(typeof t==="string")r=u.gez(a)}catch(s){H.aj(s)}return r},
nr:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icz")
try{s.type=a}catch(u){H.aj(u)}return s},
jC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
md:function(a,b,c,d){var u=W.jC(W.jC(W.jC(W.jC(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mt(new W.jr(c),W.o)
if(u!=null&&!0)J.n8(a,b,u,!1)
return new W.jq(a,b,u,!1,[e])},
mc:function(a){var u=W.lt(),t=window.location
u=new W.bP(new W.jK(u,t))
u.f2(a)
return u},
oa:function(a,b,c,d){H.h(a,"$iU")
H.I(b)
H.I(c)
H.h(d,"$ibP")
return!0},
ob:function(a,b,c,d){var u,t,s
H.h(a,"$iU")
H.I(b)
H.I(c)
u=H.h(d,"$ibP").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
me:function(){var u=P.e,t=P.lE(C.u,u),s=H.t(C.u,0),r=H.n(new W.jW(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.jV(t,P.dG(u),P.dG(u),P.dG(u),null)
t.fd(null,new H.ho(C.u,r,[s,u]),q,null)
return t},
mt:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.k)return a
return u.dE(a,b)},
x:function x(){},
fh:function fh(){},
dk:function dk(){},
fi:function fi(){},
cn:function cn(){},
bU:function bU(){},
bx:function bx(){},
bV:function bV(){},
by:function by(){},
cr:function cr(){},
fA:function fA(){},
X:function X(){},
cs:function cs(){},
fB:function fB(){},
b_:function b_(){},
b0:function b0(){},
fC:function fC(){},
fD:function fD(){},
fG:function fG(){},
aD:function aD(){},
fH:function fH(){},
dw:function dw(){},
dx:function dx(){},
fI:function fI(){},
fJ:function fJ(){},
jl:function jl(a,b){this.a=a
this.b=b},
U:function U(){},
fN:function fN(){},
o:function o(){},
j:function j(){},
aE:function aE(){},
cv:function cv(){},
fT:function fT(){},
fX:function fX(){},
aN:function aN(){},
h1:function h1(){},
c_:function c_(){},
cy:function cy(){},
cz:function cz(){},
b3:function b3(){},
dH:function dH(){},
hv:function hv(){},
cC:function cC(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
hz:function hz(a){this.a=a},
aQ:function aQ(){},
hA:function hA(){},
ae:function ae(){},
ar:function ar(a){this.a=a},
C:function C(){},
cG:function cG(){},
aR:function aR(){},
hQ:function hQ(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
i2:function i2(){},
aS:function aS(){},
ic:function ic(){},
aT:function aT(){},
id:function id(){},
aU:function aU(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
aF:function aF(){},
b8:function b8(){},
e0:function e0(){},
ip:function ip(){},
iq:function iq(){},
cN:function cN(){},
aV:function aV(){},
aG:function aG(){},
is:function is(){},
it:function it(){},
iv:function iv(){},
aW:function aW(){},
aX:function aX(){},
iz:function iz(){},
iA:function iA(){},
bN:function bN(){},
iX:function iX(){},
jc:function jc(){},
bd:function bd(){},
d_:function d_(){},
d0:function d0(){},
jm:function jm(){},
ek:function ek(){},
jB:function jB(){},
eC:function eC(){},
jP:function jP(){},
jT:function jT(){},
jk:function jk(){},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l2:function l2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jq:function jq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jr:function jr(a){this.a=a},
bP:function bP(a){this.a=a},
E:function E(){},
dR:function dR(a){this.a=a},
hI:function hI(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(){},
jM:function jM(){},
jN:function jN(){},
jV:function jV(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jW:function jW(){},
jU:function jU(){},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jK:function jK(a,b){this.a=a
this.b=b},
f1:function f1(a){this.a=a},
k5:function k5(a){this.a=a},
ej:function ej(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
d7:function d7(){},
d8:function d8(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
d9:function d9(){},
da:function da(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){}},O={
kL:function(a){var u=new O.a6([a])
u.bQ(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cB:function cB(){this.b=this.a=null},
lG:function(){var u,t,s=new O.dK()
s.sfp(O.kL(V.ao))
s.e.be(s.gh1(),s.gh3())
u=new O.b5(s,"emission")
u.c=C.d
u.f=new V.a2(0,0,0)
s.f=u
u=new O.b5(s,"ambient")
u.c=C.d
u.f=new V.a2(0,0,0)
s.r=u
u=new O.b5(s,"diffuse")
u.c=C.d
u.f=new V.a2(0,0,0)
s.x=u
u=new O.b5(s,"invDiffuse")
u.c=C.d
u.f=new V.a2(0,0,0)
s.y=u
u=new O.hu(s,"specular")
u.c=C.d
u.f=new V.a2(0,0,0)
u.ch=100
s.z=u
u=new O.hr(s,"bump")
u.c=C.d
s.Q=u
s.ch=null
u=new O.b5(s,"reflect")
u.c=C.d
u.f=new V.a2(0,0,0)
s.cx=u
u=new O.ht(s,"refract")
u.c=C.d
u.f=new V.a2(0,0,0)
u.ch=1
s.cy=u
u=new O.hq(s,"alpha")
u.c=C.d
u.f=1
s.db=u
u=new D.dF()
u.bQ(D.a8)
u.sf4(H.d([],[D.dv]))
u.sf5(H.d([],[D.dU]))
u.sf6(H.d([],[D.bL]))
u.sf7(H.d([],[D.e3]))
u.sf8(H.d([],[D.e4]))
u.sf9(H.d([],[D.e5]))
u.ch=u.Q=null
u.cN(u.gh_(),u.ghC(),u.ghG())
s.dx=u
t=u.Q
u=t==null?u.Q=D.a1():t
u.h(0,s.ghX())
u=s.dx
t=u.ch
u=t==null?u.ch=D.a1():t
u.h(0,s.gfe())
s.dy=null
return s},
dK:function dK(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dL:function dL(){},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
kN:function(){var u=new E.an()
u.a=""
u.b=!0
u.sf1(0,O.kL(E.an))
u.y.be(u.gjt(),u.gjw())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa9(0,null)
u.sba(null)
u.saT(null)
return u},
nT:function(a,b){var u=new E.hW(a)
u.eY(a,b)
return u},
nX:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibV)return E.lX(a,!0,!0,!0,!1)
u=W.lx()
t=u.style
t.width="100%"
t.height="100%"
s.gcj(a).h(0,u)
return E.lX(u,!0,!0,!0,!1)},
lX:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e6(),j=H.h(C.r.eL(a,"webgl2",P.nA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.u(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nT(j,a)
H.ai(j.getParameter(3379))
H.ai(j.getParameter(34076))
u=new X.ed(a)
t=new X.ha()
t.shP(P.dG(P.p))
u.b=t
t=new X.hB(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.hi(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iy(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfE(H.d([],[[P.cL,P.Q]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.ghd(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.ghj(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gh5(),o),!1,p))
t=u.z
n=W.b3
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.ghn(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.ghl(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.ghr(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.ghv(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.ght(),q),!1,r))
n=u.z
m=W.bd;(n&&C.a).h(n,W.ac(a,H.I(W.no(a)),H.n(u.ghx(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.ghf(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.ghh(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.ghz(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.ghM(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.ghI(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.ghK(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dl()
return k},
fs:function fs(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iu:function iu(a){this.a=a}},Z={
l1:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cb(c)),35044)
a.bindBuffer(b,null)
return new Z.eg(b,u)},
aH:function(a){return new Z.bc(a)},
eg:function eg(a,b){this.a=a
this.b=b},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jd:function jd(a){this.a=a},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
a1:function(){var u=new D.bY()
u.sai(null)
u.saO(null)
u.c=null
u.d=0
return u},
fv:function fv(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
B:function B(){this.b=null},
c0:function c0(a){this.b=null
this.$ti=a},
c1:function c1(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dv:function dv(){},
a8:function a8(){},
dF:function dF(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dU:function dU(){},
bL:function bL(){var _=this
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){}},X={dq:function dq(a,b){this.a=a
this.b=b},dE:function dE(a,b){this.a=a
this.b=b},ha:function ha(){this.d=this.b=this.a=null},dI:function dI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hi:function hi(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hB:function hB(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hR:function hR(){},e8:function e8(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iy:function iy(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ed:function ed(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nq:function(a){var u=new X.fZ(),t=new V.aM(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lT
if(t==null){t=V.lS(0,0,1,1)
$.lT=t}u.r=t
return u},
dr:function dr(){},
fZ:function fZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){}},V={
pa:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bd(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.ag("null",c)
return C.b.ag(C.e.eC(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cg:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.b.ag(u[p],s))}return u},
dN:function(){var u=$.lK
return u==null?$.lK=V.bm(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bm:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lJ:function(a,b,c){return V.bm(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lI:function(a,b,c,d){return V.bm(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lH:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bm(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bJ:function(){var u=$.lO
return u==null?$.lO=new V.aa(0,0):u},
lP:function(){var u=$.bK
return u==null?$.bK=new V.a3(0,0,0):u},
lS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dX(a,b,c,d)},
cY:function(){var u=$.m9
return u==null?$.m9=new V.K(0,0,0):u},
ma:function(){var u=$.j0
return u==null?$.j0=new V.K(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a){this.a=a},
dM:function dM(a,b,c,d,e,f,g,h,i){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.hV()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
y:function(a){var u=new V.i3()
u.eZ(a)
return u},
ix:function(){var u=new V.iw(),t=P.e
u.si9(new H.aP([t,V.cK]))
u.sib(new H.aP([t,V.cO]))
u.c=null
return u},
bg:function bg(){},
az:function az(){},
dJ:function dJ(){},
av:function av(){this.a=null},
hV:function hV(){this.b=this.a=null},
i3:function i3(){this.a=null},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.b=a
this.c=null},
iw:function iw(){this.c=this.b=this.a=null},
cP:function cP(a){this.b=a
this.a=this.c=null},
p5:function(a){P.nY(C.T,new V.kD(a))},
nV:function(a){var u=new V.i7()
u.f0(a,!0)
return u},
bz:function bz(){},
kD:function kD(a){this.a=a},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h_:function h_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hP:function hP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hT:function hT(a){this.a=a
this.c=null},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(){this.b=this.a=null},
i9:function i9(a){this.a=a},
i8:function i8(a){this.a=a},
ia:function ia(a){this.a=a}},U={
lz:function(){var u=new U.fw()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dt:function(a){var u=new U.ds()
u.a=a
return u},
kO:function(){var u=new U.cx()
u.bQ(U.ak)
u.be(u.gfa(),u.ghE())
u.e=null
u.f=V.dN()
u.r=0
return u},
m4:function(a,b){var u,t,s,r=new U.ee(),q=U.lz()
q.seJ(0,!0)
q.sed(6.283185307179586)
q.sef(0)
q.sa3(0,0)
q.see(100)
q.sa0(0)
q.sdH(0.5)
r.b=q
u=r.gbh()
q.gD().h(0,u)
q=U.lz()
q.seJ(0,!0)
q.sed(6.283185307179586)
q.sef(0)
q.sa3(0,0)
q.see(100)
q.sa0(0)
q.sdH(0.5)
r.c=q
q.gD().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bF(a,!1,!1)
s=r.d
r.d=t
q=new D.R("modifiers",s,t,[X.bF])
q.b=!0
r.Z(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.R("invertX",q,!1,[P.T])
q.b=!0
r.Z(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.R("invertY",q,!1,[P.T])
q.b=!0
r.Z(q)}r.iW(b)
return r},
fw:function fw(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){this.b=this.a=null},
cx:function cx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
ee:function ee(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dy:function dy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nD:function(a,b){var u=a.ak,t=new A.hp(b,u)
t.f_(b,u)
t.eX(a,b)
return t},
kZ:function(a,b,c,d,e){var u=new A.iG(a,c,e)
u.f=d
u.sip(P.nB(d,0,P.p))
return u},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
hp:function hp(a,b){var _=this
_.br=_.dI=_.bq=_.ak=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dY=_.cn=_.dX=_.bE=_.dW=_.dV=_.bD=_.bC=_.dU=_.dT=_.bB=_.bA=_.bz=_.dS=_.dR=_.by=_.dQ=_.dP=_.bx=_.dO=_.dN=_.bw=_.bv=_.dM=_.dL=_.bu=_.bt=_.dK=_.dJ=_.bs=null
_.cs=_.e1=_.cr=_.e0=_.cq=_.e_=_.cp=_.dZ=_.co=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ak=b4
_.bq=b5},
cQ:function cQ(a,b){this.b=a
this.c=b},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cS:function cS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cV:function cV(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cT:function cT(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cW:function cW(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cJ:function cJ(){},
bX:function bX(a,b){this.a=a
this.b=b},
e9:function e9(){},
iM:function iM(a){this.a=a},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
le:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.kX()
F.dd(u,b,c,d,a,1,0,0,1)
F.dd(u,b,c,d,a,0,1,0,3)
F.dd(u,b,c,d,a,0,0,1,2)
F.dd(u,b,c,d,a,-1,0,0,0)
F.dd(u,b,c,d,a,0,-1,0,0)
F.dd(u,b,c,d,a,0,0,-1,3)
u.av()
return u},
k8:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dd:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.K(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.K(p+a3,o+a1,n+a2)
l=new V.K(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.K(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.k8(u)
g=F.k8(e.b)
f=F.ll(d,a0,new F.k7(e,F.k8(e.c),F.k8(e.d),g,h,c),b)
if(f!=null)a.b7(f)},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
u=F.kX()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ah])
q=u.a
p=new V.K(0,0,t)
p=p.A(0,Math.sqrt(p.G(p)))
C.a.h(r,q.iR(new V.b7(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a3(0,0,c),new V.K(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.K(m,l,t).A(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ef(new V.b7(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a3(m*k,l*k,c),new V.K(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iP(r)
return u},
lf:function(a,b,c,d,e){return F.oH(b,c,1,new F.kh(a,e),d)},
oH:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.ll(c,e,new F.kj(d),null)
if(u==null)return
u.av()
u.cc()
if(b)u.b7(F.my(3,!1,1,new F.kk(d),e))
if(a)u.b7(F.my(1,!0,-1,new F.kl(d),e))
return u},
p6:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kE()
t=F.le(a,null,new F.kF(s,1),b)
t.cc()
return t},
mK:function(){return F.mx(15,30,0.5,1,new F.kG())},
oY:function(){return F.mx(12,120,0.3,1,new F.ks(3,2))},
mx:function(a,b,c,d,e){var u=F.ll(a,b,new F.ki(H.n(e,{func:1,ret:V.a3,args:[P.r]}),d,b,c),null)
if(u==null)return
u.av()
u.cc()
return u},
ll:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.kX()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ef(g,g,new V.aM(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cl(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ef(g,g,new V.aM(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cl(d))}}u.d.iQ(a+1,b+1,t)
return u},
cu:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.u(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.w("May not create a face with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
u.i2(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
nx:function(a,b){var u=new F.bl(),t=a.a
if(t==null)H.u(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.w("May not create a line with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
kX:function(){var u=new F.dZ(),t=new F.j1(u)
t.b=!1
t.siq(H.d([],[F.ah]))
u.a=t
t=new F.i6(u)
t.sc2(H.d([],[F.bI]))
u.b=t
t=new F.i5(u)
t.sfL(H.d([],[F.bl]))
u.c=t
t=new F.i4(u)
t.sfF(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
ef:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ah(),r=new F.j9()
r.sc2(H.d([],[F.bI]))
s.b=r
r=new F.j5()
u=[F.bl]
r.sfM(H.d([],u))
r.sfN(H.d([],u))
s.c=r
r=new F.j2()
u=[F.a9]
r.sfG(H.d([],u))
r.sfH(H.d([],u))
r.sfI(H.d([],u))
s.d=r
h=$.mY()
s.e=0
r=$.bt()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bs().a)!==0?e:t
s.x=(u&$.br().a)!==0?b:t
s.y=(u&$.bu().a)!==0?f:t
s.z=(u&$.bv().a)!==0?g:t
s.Q=(u&$.mZ().a)!==0?c:t
s.ch=(u&$.cm().a)!==0?i:0
s.cx=(u&$.bq().a)!==0?a:t
return s},
k7:function k7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kh:function kh(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
kE:function kE(){},
kF:function kF(a,b){this.a=a
this.b=b},
kG:function kG(){},
ks:function ks(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){},
ib:function ib(){},
bl:function bl(){this.b=this.a=null},
hc:function hc(){},
iF:function iF(){},
bI:function bI(){this.a=null},
dZ:function dZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(a){this.a=a
this.b=null},
i5:function i5(a){this.a=a
this.b=null},
i6:function i6(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jb:function jb(a){this.a=a},
ja:function ja(a){this.a=a},
j1:function j1(a){this.a=a
this.c=this.b=null},
j2:function j2(){this.d=this.c=this.b=null},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(){this.c=this.b=null},
j7:function j7(){},
j6:function j6(){},
j8:function j8(){},
hJ:function hJ(){},
j9:function j9(){this.b=null}},T={e2:function e2(){}},N={
mE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.nV("Test 024"),b=W.lx()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
u=[P.e]
c.dw(H.d(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],u))
c.iN(H.d(["shapes"],u))
c.dw(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.u(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.nX(t,!0,!0,!0,!1)
r=U.kO()
r.h(0,U.dt(V.lJ(0,0,-2.5)))
r.h(0,U.m4(!0,s.r))
q=new V.a2(1,1,1)
p=new D.bL()
p.d=new V.a2(1,1,1)
p.f=p.e=3.141592653589793
p.r=1
p.y=p.x=0
p.a=V.lP()
p.b=V.ma()
o=p.c
p.c=r
r.gD().h(0,p.gh7())
n=new D.R("mover",o,p.c,[U.ak])
n.b=!0
p.a8(n)
if(!p.d.u(0,q)){o=p.d
p.d=q
n=new D.R("color",o,q,[V.a2])
n.b=!0
p.a8(n)}n=p.e
if(!(Math.abs(n-0.6)<$.O().a)){p.e=0.6
n=new D.R("cutoff",n,0.6,[P.r])
n.b=!0
p.a8(n)}n=p.f
if(!(Math.abs(n-0.5)<$.O().a)){p.f=0.5
n=new D.R("coneAngle",n,0.5,[P.r])
n.b=!0
p.a8(n)}n=p.r
if(!(Math.abs(n-0.5)<$.O().a)){p.r=0.5
n=new D.R("attenuation0",n,0.5,[P.r])
n.b=!0
p.a8(n)}n=p.x
if(!(Math.abs(n-0.05)<$.O().a)){p.x=0.05
n=new D.R("attenuation1",n,0.05,[P.r])
n.b=!0
p.a8(n)}m=O.lG()
m.dx.h(0,p)
m.f.sad(0,new V.a2(0,0,0))
n=m.r
n.sad(0,new V.a2(0,0,0))
n=m.x
n.sad(0,new V.a2(0.7,0.7,0.7))
n=m.z
n.sad(0,new V.a2(0.3,0.3,0.3))
n=m.z
if(n.c===C.d){n.c=C.j
n.bP()
n.c7(100)
l=n.a
l.a=null
l.ab(d)}n.c7(100)
k=E.kN()
k.sa9(0,F.mK())
j=E.kN()
j.saT(U.dt(V.lI(3,3,3,1)))
n=F.le(1,d,d,1)
n.ct()
j.sa9(0,n)
i=U.kO()
i.h(0,U.m4(!1,s.r))
i.h(0,U.dt(V.lH(3.141592653589793)))
i.h(0,U.dt(V.lJ(0,0,5)))
h=E.kN()
n=U.kO()
n.h(0,U.dt(V.lI(0.1,0.1,0.1,1)))
n.h(0,r)
h.saT(n)
h.sa9(0,F.lf(0,!1,!0,40,1))
n=O.lG()
n.f.sad(0,new V.a2(1,1,1))
h.sba(n)
n=new M.dy()
n.sft(0,O.kL(E.an))
n.d.be(n.gh9(),n.ghb())
n.x=n.r=n.f=n.e=null
g=X.nq(d)
f=new X.dT()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saT(d)
l=f.c
if(!(Math.abs(l-1.0471975511965976)<$.O().a)){f.c=1.0471975511965976
l=new D.R("fov",l,1.0471975511965976,[P.r])
l.b=!0
f.aL(l)}l=f.d
if(!(Math.abs(l-0.1)<$.O().a)){f.d=0.1
l=new D.R("near",l,0.1,[P.r])
l.b=!0
f.aL(l)}l=f.e
if(!(Math.abs(l-2000)<$.O().a)){f.e=2000
l=new D.R("far",l,2000,[P.r])
l.b=!0
f.aL(l)}l=n.a
if(l!==f){if(l!=null)l.gD().N(0,n.gar())
o=n.a
n.a=f
f.gD().h(0,n.gar())
l=new D.R("camera",o,n.a,[X.dr])
l.b=!0
n.aA(l)}l=n.b
if(l!==g){if(l!=null)l.gD().N(0,n.gar())
o=n.b
n.b=g
g.gD().h(0,n.gar())
l=new D.R("target",o,n.b,[X.e1])
l.b=!0
n.aA(l)}n.sba(d)
n.sba(m)
n.d.h(0,k)
n.d.h(0,j)
n.d.h(0,h)
n.a.saT(i)
l=s.d
if(l!==n){if(l!=null)l.gD().N(0,s.gcQ())
s.d=n
n.gD().h(0,s.gcQ())
s.cR()}n=new V.hT("shapes")
u=u.getElementById("shapes")
n.c=u
if(u==null)H.u("Failed to find shapes for RadioGroup")
n.b1(0,"Cube",new N.ku(k))
n.b1(0,"Cylinder",new N.kv(k))
n.b1(0,"Cone",new N.kw(k))
n.b1(0,"Sphere",new N.kx(k))
n.du(0,"Toroid",new N.ky(k),!0)
n.b1(0,"Knot",new N.kz(k))
u=s.z
if(u==null)u=s.z=D.a1()
n={func:1,ret:-1,args:[D.B]}
l=H.n(new N.kA(c,m),n)
if(u.b==null)u.saO(H.d([],[n]))
u=u.b;(u&&C.a).h(u,l)
V.p5(s)},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kS.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cH(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.h6.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iT:1}
J.dC.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dD.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hO.prototype={}
J.bO.prototype={}
J.bk.prototype={
i:function(a){var u=a[$.mM()]
if(u==null)return this.eS(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.t(a,0))
if(!!a.fixed$length)H.u(P.J("add"))
a.push(b)},
ev:function(a,b){if(!!a.fixed$length)H.u(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dW(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.u(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bh(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
jo:function(a){return this.m(a,"")},
jh:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bh(a))}return t},
jg:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bh(a))}throw H.c(H.h5())},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eP:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gjf:function(a){if(a.length>0)return a[0]
throw H.c(H.h5())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.h5())},
bf:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.u(P.J("setRange"))
P.bo(b,c,a.length)
u=c-b
if(u===0)return
P.kW(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ch(d)
if(u>s.gl(d))throw H.c(H.nt())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dz:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bh(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.kP(a,"[","]")},
gU:function(a){return new J.au(a,a.length,[H.t(a,0)])},
gI:function(a){return H.cH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.J("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cf(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.t(a,0))
if(!!a.immutable$list)H.u(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cf(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.t(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.f.q(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bf(t,0,a.length,a)
this.bf(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.kR.prototype={}
J.au.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.D(s))
u=t.c
if(u>=r){t.sd6(null)
return!1}t.sd6(s[u]);++t.c
return!0},
sd6:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
J.bE.prototype={
e3:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eC:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.E("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.c(H.aK(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.aK(b))
return a-b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.aK(b))
return a*b},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dq(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.dn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i7:function(a,b){if(b<0)throw H.c(H.aK(b))
return this.dn(a,b)},
dn:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iab:1}
J.dB.prototype={$ip:1}
J.h7.prototype={}
J.bj.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cf(a,b))
if(b>=a.length)H.u(H.cf(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cf(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kJ(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bo(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.aa(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.aK(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.X()
if(b<0)throw H.c(P.dW(b,null))
if(b>c)throw H.c(P.dW(b,null))
if(c>a.length)throw H.c(P.dW(c,null))
return a.substring(b,c)},
ap:function(a,b){return this.B(a,b,null)},
jV:function(a){return a.toLowerCase()},
E:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.E(" ",u)+a},
ea:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e9:function(a,b){return this.ea(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilM:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$acX:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fM.prototype={}
H.c2.prototype={
gU:function(a){var u=this
return new H.cA(u,u.gl(u),[H.as(u,"c2",0)])},
bK:function(a,b){return this.eR(0,H.n(b,{func:1,ret:P.T,args:[H.as(this,"c2",0)]}))}}
H.cA.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.ch(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bh(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.J(s,u));++t.c
return!0},
saY:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
H.hm.prototype={
gU:function(a){return new H.hn(J.bw(this.a),this.b,this.$ti)},
gl:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fg(this.a,b))},
$ai:function(a,b){return[b]}}
H.hn.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saY(u.c.$1(t.gK(t)))
return!0}u.saY(null)
return!1},
gK:function(a){return this.a},
saY:function(a){this.a=H.A(a,H.t(this,1))},
$ab2:function(a,b){return[b]}}
H.ho.prototype={
gl:function(a){return J.aC(this.a)},
J:function(a,b){return this.b.$1(J.fg(this.a,b))},
$ac2:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cZ.prototype={
gU:function(a){return new H.je(J.bw(this.a),this.b,this.$ti)}}
H.je.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.H(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bZ.prototype={}
H.cX.prototype={
n:function(a,b,c){H.A(c,H.as(this,"cX",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.eb.prototype={}
H.fy.prototype={
i:function(a){return P.kV(this)},
n:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
return H.nk()},
$iF:1}
H.fz.prototype={
gl:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.I(a)]},
L:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.d7(r),p))}}}
H.iC.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hK.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h9.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iQ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kH.prototype={
$1:function(a){if(!!J.V(a).$ibB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eP.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cq.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibC:1,
gk0:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ir.prototype={}
H.ig.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.co.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.co))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cH(this.a)
else u=typeof t!=="object"?J.dj(t):H.cH(t)
return(u^H.cH(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iE.prototype={
i:function(a){return this.a}}
H.fu.prototype={
i:function(a){return this.a}}
H.i1.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jf.prototype={
i:function(a){return"Assertion failed: "+P.dz(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gjn:function(a){return this.a===0},
ga6:function(a){return new H.he(this,[H.t(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d3(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d3(t,b)}else return s.jk(b)},
jk:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cw(u.bX(t,u.cv(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bi(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bi(r,b)
s=t==null?null:t.b
return s}else return q.jl(b)},
jl:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bX(r,s.cv(a))
t=s.cw(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.t(s,0))
H.A(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.cU(u==null?s.b=s.c0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cU(t==null?s.c=s.c0():t,b,c)}else s.jm(b,c)},
jm:function(a,b){var u,t,s,r,q=this
H.A(a,H.t(q,0))
H.A(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.c0()
t=q.cv(a)
s=q.bX(u,t)
if(s==null)q.c8(u,t,[q.bR(a,b)])
else{r=q.cw(s,a)
if(r>=0)s[r].b=b
else s.push(q.bR(a,b))}},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bh(s))
u=u.c}},
cU:function(a,b,c){var u,t=this
H.A(b,H.t(t,0))
H.A(c,H.t(t,1))
u=t.bi(a,b)
if(u==null)t.c8(a,b,t.bR(b,c))
else u.b=c},
fj:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t=this,s=new H.hd(H.A(a,H.t(t,0)),H.A(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fj()
return s},
cv:function(a){return J.dj(a)&0x3ffffff},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.kV(this)},
bi:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fA:function(a,b){delete a[b]},
d3:function(a,b){return this.bi(a,b)!=null},
c0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.fA(t,u)
return t}}
H.hd.prototype={}
H.he.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hf(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hf.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bh(t))
else{t=u.c
if(t==null){u.scV(null)
return!1}else{u.scV(t.a)
u.c=u.c.c
return!0}}},
scV:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
H.ko.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kp.prototype={
$2:function(a,b){return this.a(a,b)},
$S:52}
H.kq.prototype={
$1:function(a){return this.a(H.I(a))},
$S:50}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilM:1,
$inR:1}
H.cD.prototype={$icD:1}
H.bH.prototype={$ibH:1}
H.dO.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cE.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oJ(c)
H.bf(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.r]},
$az:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dP.prototype={
n:function(a,b,c){H.ai(c)
H.bf(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hC.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hD.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hE.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hF.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hG.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dQ.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icF:1,
$iS:1}
H.d3.prototype={}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
P.jh.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:28}
P.jg.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:48}
P.ji.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jj.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eV.prototype={
fg:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.jY(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fh:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.jX(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ib9:1}
P.jY.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jX.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.eW(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.be.prototype={
jq:function(a){if(this.c!==6)return!0
return this.b.b.cJ(H.n(this.d,{func:1,ret:P.T,args:[P.Q]}),a.a,P.T,P.Q)},
jj:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fc(u,{func:1,args:[P.Q,P.aw]}))return H.lg(r.jP(u,a.a,a.b,null,t,P.aw),s)
else return H.lg(r.cJ(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aI.prototype={
eB:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oy(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aI($.a0,[c])
s=b==null?1:3
this.cX(new P.be(t,s,a,b,[r,c]))
return t},
jS:function(a,b){return this.eB(a,null,b)},
cX:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaI")
s=u.a
if(s<4){u.cX(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kf(null,null,s,H.n(new P.js(t,a),{func:1,ret:-1}))}},
dj:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaI")
u=q.a
if(u<4){q.dj(a)
return}p.a=u
p.c=q.c}o.a=p.bk(a)
u=p.b
u.toString
P.kf(null,null,u,H.n(new P.jw(o,p),{func:1,ret:-1}))}},
c4:function(){var u=H.h(this.c,"$ibe")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d_:function(a){var u,t,s=this,r=H.t(s,0)
H.lg(a,{futureOr:1,type:r})
u=s.$ti
if(H.lb(a,"$icw",u,"$acw"))if(H.lb(a,"$iaI",u,null))P.mb(a,s)
else P.o9(a,s)
else{t=s.c4()
H.A(a,r)
s.a=4
s.c=a
P.d1(s,t)}},
d0:function(a,b){var u,t=this
H.h(b,"$iaw")
u=t.c4()
t.a=8
t.c=new P.am(a,b)
P.d1(t,u)},
$icw:1}
P.js.prototype={
$0:function(){P.d1(this.a,this.b)},
$S:0}
P.jw.prototype={
$0:function(){P.d1(this.b,this.a.a)},
$S:0}
P.jt.prototype={
$1:function(a){var u=this.a
u.a=0
u.d_(a)},
$S:28}
P.ju.prototype={
$2:function(a,b){H.h(b,"$iaw")
this.a.d0(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jv.prototype={
$0:function(){this.a.d0(this.b,this.c)},
$S:0}
P.jz.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ey(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cj(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.V(n).$icw){if(n instanceof P.aI&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jS(new P.jA(p),null)
s.a=!1}},
$S:3}
P.jA.prototype={
$1:function(a){return this.a},
$S:46}
P.jy.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.A(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cJ(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cj(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jx.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.H(r.jq(u))&&r.e!=null){q=m.b
q.b=r.jj(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cj(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.eh.prototype={}
P.ij.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aI($.a0,[P.p])
r.a=0
u=H.t(s,0)
t=H.n(new P.il(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.im(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.il.prototype={
$1:function(a){H.A(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.t(this.b,0)]}}}
P.im.prototype={
$0:function(){this.b.d_(this.a.a)},
$S:0}
P.cL.prototype={}
P.ik.prototype={}
P.b9.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibB:1}
P.k6.prototype={$ipK:1}
P.ke.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dS():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jG.prototype={
jQ:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a0){a.$0()
return}P.mn(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cj(s)
P.kd(r,r,this,u,H.h(t,"$iaw"))}},
jR:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a0){a.$1(b)
return}P.mo(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cj(s)
P.kd(r,r,this,u,H.h(t,"$iaw"))}},
iY:function(a,b){return new P.jI(this,H.n(a,{func:1,ret:b}),b)},
cd:function(a){return new P.jH(this,H.n(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.jJ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ey:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.k)return a.$0()
return P.mn(null,null,this,a,b)},
cJ:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a0===C.k)return a.$1(b)
return P.mo(null,null,this,a,b,c,d)},
jP:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a0===C.k)return a.$2(b,c)
return P.oz(null,null,this,a,b,c,d,e,f)}}
P.jI.prototype={
$0:function(){return this.a.ey(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jH.prototype={
$0:function(){return this.a.jQ(this.b)},
$S:3}
P.jJ.prototype={
$1:function(a){var u=this.c
return this.a.jR(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jE.prototype={
gU:function(a){var u=this,t=new P.ew(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ic9")!=null}else{t=this.fu(b)
return t}},
fu:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.d8(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cW(u==null?s.b=P.l3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cW(t==null?s.c=P.l3():t,b)}else return s.fk(0,b)},
fk:function(a,b){var u,t,s,r=this
H.A(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.l3()
t=r.d1(b)
s=u[t]
if(s==null)u[t]=[r.c1(b)]
else{if(r.bV(s,b)>=0)return!1
s.push(r.c1(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hS(this.c,b)
else return this.hR(0,b)},
hR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bV(u,b)
if(t<0)return!1
s.dr(u.splice(t,1)[0])
return!0},
cW:function(a,b){H.A(b,H.t(this,0))
if(H.h(a[b],"$ic9")!=null)return!1
a[b]=this.c1(b)
return!0},
hS:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ic9")
if(u==null)return!1
this.dr(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
c1:function(a){var u,t=this,s=new P.c9(H.A(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dd()
return s},
dr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dd()},
d1:function(a){return J.dj(a)&1073741823},
d8:function(a,b){return a[this.d1(b)]},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.c9.prototype={}
P.ew.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bh(t))
else{t=u.c
if(t==null){u.scZ(null)
return!1}else{u.scZ(H.A(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
scZ:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
P.hg.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hh.prototype={$ii:1,$ib:1}
P.z.prototype={
gU:function(a){return new H.cA(a,this.gl(a),[H.bR(this,a,"z",0)])},
J:function(a,b){return this.j(a,b)},
jU:function(a,b){var u,t=this,s=H.d([],[H.bR(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
jT:function(a){return this.jU(a,!0)},
q:function(a,b){var u,t=this,s=[H.bR(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.q(t.gl(a),b.gl(b)))
C.a.bf(u,0,t.gl(a),a)
C.a.bf(u,t.gl(a),u.length,b)
return u},
jd:function(a,b,c,d){var u
H.A(d,H.bR(this,a,"z",0))
P.bo(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.kP(a,"[","]")}}
P.hj.prototype={}
P.hk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:7}
P.ad.prototype={
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bR(s,a,"ad",0),H.bR(s,a,"ad",1)]})
for(u=J.bw(s.ga6(a));u.C();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aC(this.ga6(a))},
i:function(a){return P.kV(a)},
$iF:1}
P.jZ.prototype={
n:function(a,b,c){H.A(b,H.t(this,0))
H.A(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hl.prototype={
j:function(a,b){return J.lp(this.a,b)},
n:function(a,b,c){J.kI(this.a,H.A(b,H.t(this,0)),H.A(c,H.t(this,1)))},
L:function(a,b){J.lq(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aC(this.a)},
i:function(a){return J.at(this.a)},
$iF:1}
P.ec.prototype={}
P.jL.prototype={
at:function(a,b){var u
for(u=J.bw(H.k(b,"$ii",this.$ti,"$ai"));u.C();)this.h(0,u.gK(u))},
i:function(a){return P.kP(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.kW(b,"index")
for(u=P.od(r,r.r,H.t(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ii:1,
$ilU:1}
P.ex.prototype={}
P.f_.prototype={}
P.fq.prototype={
js:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bo(a0,a1,b.length)
u=$.n0()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kn(C.b.F(b,n))
j=H.kn(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.c5(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.lu(b,p,a1,q,o,f)
else{e=C.f.bd(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lu(b,p,a1,q,o,d)
else{e=C.f.bd(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.p],P.e]}}
P.fr.prototype={
$abA:function(){return[[P.b,P.p],P.e]}}
P.bW.prototype={}
P.bA.prototype={}
P.fO.prototype={
$abW:function(){return[P.e,[P.b,P.p]]}}
P.h3.prototype={
i:function(a){return this.a}}
P.h2.prototype={
fv:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.f(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nd(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.e,P.e]}}
P.iY.prototype={
gjc:function(){return C.R}}
P.j_.prototype={
ck:function(a){var u,t,s=P.bo(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.k4(u)
if(t.fJ(a,0,s)!==s)t.dt(J.n9(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ot(0,t.b,u.length)))},
$abA:function(){return[P.e,[P.b,P.p]]}}
P.k4.prototype={
dt:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fJ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dt(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iZ.prototype={
ck:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.o0(!1,a,0,null)
if(u!=null)return u
t=P.bo(0,null,J.aC(a))
s=P.mq(a,0,t)
if(s>0){r=P.cM(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.k3(!1,q)
n.c=o
n.j1(a,p,t)
if(n.e>0){H.u(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c5(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abA:function(){return[[P.b,P.p],P.e]}}
P.k3.prototype={
j1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ch(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bL()
if((o&192)!==128){n=P.a7(h+C.f.bc(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.f(C.A,n)
if(u<=C.A[n]){n=P.a7("Overlong encoding of 0x"+C.f.bc(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.f.bc(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c5(u)
i.c=!1}for(n=p<c;n;){m=P.mq(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cM(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.X()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.f.bc(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.f.bc(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.T.prototype={}
P.ay.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.nl(H.nN(u)),s=P.du(H.nL(u)),r=P.du(H.nH(u)),q=P.du(H.nI(u)),p=P.du(H.nK(u)),o=P.du(H.nM(u)),n=P.nm(H.nJ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.b1.prototype={
q:function(a,b){return new P.b1(C.f.q(this.a,b.gfC()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.gfC()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r=new P.fL(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.f.a5(q,6e7)%60)
t=r.$1(C.f.a5(q,1e6)%60)
s=new P.fK().$1(q%1e6)
return""+C.f.a5(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fK.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.fL.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bB.prototype={}
P.fk.prototype={
i:function(a){return"Assertion failed"}}
P.dS.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbT:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbU()+o+u
if(!q.a)return t
s=q.gbT()
r=P.dz(q.b)
return t+s+": "+r}}
P.c6.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.h4.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t=H.ai(this.b)
if(typeof t!=="number")return t.X()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.iR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iO.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fx.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dz(u)+"."}}
P.hN.prototype={
i:function(a){return"Out of Memory"},
$ibB:1}
P.e_.prototype={
i:function(a){return"Stack Overflow"},
$ibB:1}
P.fE.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ep.prototype={
i:function(a){return"Exception: "+this.a}}
P.fY.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.E(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bC.prototype={}
P.p.prototype={}
P.i.prototype={
bK:function(a,b){var u=H.as(this,"i",0)
return new H.cZ(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.C();)++u
return u},
gaJ:function(a){var u,t=this.gU(this)
if(!t.C())throw H.c(H.h5())
u=t.gK(t)
if(t.C())throw H.c(H.nu())
return u},
J:function(a,b){var u,t,s
P.kW(b,"index")
for(u=this.gU(this),t=0;u.C();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.ns(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.M.prototype={
gI:function(a){return P.Q.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
u:function(a,b){return this===b},
gI:function(a){return H.cH(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.aw.prototype={}
P.e.prototype={$ilM:1}
P.ag.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipk:1}
P.iW.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iF",[r,r],"$aF")
H.I(b)
u=J.dg(b).e9(b,"=")
if(u===-1){if(b!=="")J.kI(a,P.l5(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.ap(b,u+1)
r=this.a
J.kI(a,P.l5(t,0,t.length,r,!0),P.l5(s,0,s.length,r,!0))}return a},
$S:45}
P.iT.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.iU.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.iV.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ff(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.X()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.ca.prototype={
geI:function(){return this.b},
gcu:function(a){var u=this.c
if(u==null)return""
if(C.b.a4(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbG:function(a){var u=this.d
if(u==null)return P.mf(this.a)
return u},
gcE:function(a){var u=this.f
return u==null?"":u},
ge4:function(){var u=this.r
return u==null?"":u},
ew:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iF",[P.e,null],"$aF")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a4(p,"/"))p="/"+p
n=P.l4(null,0,0,b)
return new P.ca(u,s,q,r,p,n,m.r)},
gcF:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.shQ(new P.ec(P.m3(u==null?"":u),[t,t]))}return s.Q},
ge5:function(){return this.c!=null},
ge8:function(){return this.f!=null},
ge6:function(){return this.r!=null},
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
if(!!J.V(b).$il_)if(s.a==b.gbN())if(s.c!=null===b.ge5())if(s.b==b.geI())if(s.gcu(s)==b.gcu(b))if(s.gbG(s)==b.gbG(b))if(s.e===b.geq(b)){u=s.f
t=u==null
if(!t===b.ge8()){if(t)u=""
if(u===b.gcE(b)){u=s.r
t=u==null
if(!t===b.ge6()){if(t)u=""
u=u===b.ge4()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shQ:function(a){var u=P.e
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$il_:1,
gbN:function(){return this.a},
geq:function(a){return this.e}}
P.k_.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:40}
P.k0.prototype={
$1:function(a){return P.f0(C.a_,a,C.l,!1)},
$S:16}
P.k2.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f0(C.q,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f0(C.q,b,C.l,!0))}},
$S:14}
P.k1.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bw(H.mD(b,"$ii")),t=this.a;u.C();)t.$2(a,H.I(u.gK(u)))},
$S:39}
P.iS.prototype={
geH:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.f(o,0)
u=q.a
o=o[0]+1
t=C.b.ea(u,"?",o)
s=u.length
if(t>=0){r=P.dc(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.jn("data",p,p,p,P.dc(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.f(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ka.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.k9.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.na(u,0,96,b)
return u},
$S:35}
P.kb.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.f(a,r)
a[r]=c}}}
P.kc.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.f(a,r)
a[r]=c}}}
P.jO.prototype={
ge5:function(){return this.c>0},
ge7:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
ge8:function(){var u=this.f
if(typeof u!=="number")return u.X()
return u<this.r},
ge6:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.b.a4(this.a,"http")},
gdc:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbN:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.b.a4(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a4(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geI:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcu:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbG:function(a){var u,t=this
if(t.ge7()){u=t.d
if(typeof u!=="number")return u.q()
return P.ff(C.b.B(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
geq:function(a){return C.b.B(this.a,this.e,this.f)},
gcE:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.X()
return u<t?C.b.B(this.a,u+1,t):""},
ge4:function(){var u=this.r,t=this.a
return u<t.length?C.b.ap(t,u+1):""},
gcF:function(){var u=this,t=u.f
if(typeof t!=="number")return t.X()
if(t>=u.r)return C.a0
t=P.e
return new P.ec(P.m3(u.gcE(u)),[t,t])},
ew:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iF",[P.e,null],"$aF")
u=k.gbN()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.ge7()?k.gbG(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a4(o,"/"))o="/"+o
m=P.l4(j,0,0,b)
n=k.r
l=n<s.length?C.b.ap(s,n+1):j
return new P.ca(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$il_&&this.a===b.i(0)},
i:function(a){return this.a},
$il_:1}
P.jn.prototype={}
W.x.prototype={}
W.fh.prototype={
gl:function(a){return a.length}}
W.dk.prototype={
i:function(a){return String(a)},
$idk:1}
W.fi.prototype={
i:function(a){return String(a)}}
W.cn.prototype={$icn:1}
W.bU.prototype={$ibU:1}
W.bx.prototype={$ibx:1}
W.bV.prototype={
eL:function(a,b,c){var u=a.getContext(b,P.oG(c))
return u},
$ibV:1}
W.by.prototype={
gl:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cs.prototype={
gl:function(a){return a.length}}
W.fB.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fC.prototype={
gl:function(a){return a.length}}
W.fD.prototype={
gl:function(a){return a.length}}
W.fG.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fH.prototype={
i:function(a){return String(a)}}
W.dw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$ial",[P.ab],"$aal")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ab]]},
$az:function(){return[[P.al,P.ab]]},
$ii:1,
$ai:function(){return[[P.al,P.ab]]},
$ib:1,
$ab:function(){return[[P.al,P.ab]]},
$aE:function(){return[[P.al,P.ab]]}}
W.dx.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaI(a))+" x "+H.l(this.gaF(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbF(b)&&a.top===u.gbJ(b)&&this.gaI(a)===u.gaI(b)&&this.gaF(a)===u.gaF(b)},
gI:function(a){return W.md(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaI(a)),C.e.gI(this.gaF(a)))},
gdF:function(a){return a.bottom},
gaF:function(a){return a.height},
gbF:function(a){return a.left},
gbI:function(a){return a.right},
gbJ:function(a){return a.top},
gaI:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ab]}}
W.fI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.jl.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iU")},
n:function(a,b,c){var u
H.h(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jT(this)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.U]},
$ai:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
giX:function(a){return new W.jo(a)},
gcj:function(a){return new W.jl(a,a.children)},
gdG:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.X()
if(s<0)s=-s*0
if(typeof r!=="number")return r.X()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lC
if(u==null){u=H.d([],[W.aA])
t=new W.dR(u)
C.a.h(u,W.mc(null))
C.a.h(u,W.me())
$.lC=t
d=t}else d=u
u=$.lB
if(u==null){u=new W.f1(d)
$.lB=u
c=u}else{u.a=d
c=u}}if($.bi==null){u=document
t=u.implementation.createHTMLDocument("")
$.bi=t
$.kM=t.createRange()
t=$.bi.createElement("base")
H.h(t,"$icn")
t.href=u.baseURI
$.bi.head.appendChild(t)}u=$.bi
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibx")}u=$.bi
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bi.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.Y,a.tagName)){$.kM.selectNodeContents(s)
r=$.kM.createContextualFragment(b)}else{s.innerHTML=b
r=$.bi.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bi.body
if(s==null?u!=null:s!==u)J.ls(s)
c.cM(r)
document.adoptNode(r)
return r},
j4:function(a,b,c){return this.ae(a,b,c,null)},
eO:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iU:1,
gez:function(a){return a.tagName}}
W.fN.prototype={
$1:function(a){return!!J.V(H.h(a,"$iC")).$iU},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
iO:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fl(a,b,c,!1)},
fl:function(a,b,c,d){return a.addEventListener(b,H.ce(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aE.prototype={$iaE:1}
W.cv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaE")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aE]},
$az:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$icv:1,
$aE:function(){return[W.aE]}}
W.fT.prototype={
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h1.prototype={
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ic_:1,
$aE:function(){return[W.C]}}
W.cy.prototype={$icy:1}
W.cz.prototype={$icz:1}
W.b3.prototype={$ib3:1}
W.dH.prototype={
i:function(a){return String(a)},
$idH:1}
W.hv.prototype={
gl:function(a){return a.length}}
W.cC.prototype={$icC:1}
W.hw.prototype={
j:function(a,b){return P.bp(a.get(H.I(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.L(a,new W.hx(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hy.prototype={
j:function(a,b){return P.bp(a.get(H.I(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.L(a,new W.hz(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.ae.prototype={$iae:1}
W.ar.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lV("No elements"))
if(t>1)throw H.c(P.lV("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.C],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.h(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dA(u,u.length,[H.bR(C.a1,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$az:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jJ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jN:function(a,b){var u,t
try{u=a.parentNode
J.n7(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eQ(a):u},
iU:function(a,b){return a.appendChild(H.h(b,"$iC"))},
hV:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aE:function(){return[W.C]}}
W.aR.prototype={$iaR:1,
gl:function(a){return a.length}}
W.hQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.i_.prototype={
j:function(a,b){return P.bp(a.get(H.I(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.L(a,new W.i0(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i2.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$az:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.aT.prototype={$iaT:1}
W.id.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.ih.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga6:function(a){var u=H.d([],[P.e])
this.L(a,new W.ii(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.ii.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:14}
W.aF.prototype={$iaF:1}
W.b8.prototype={$ib8:1}
W.e0.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=W.nn("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).at(0,new W.ar(u))
return t}}
W.ip.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
s.toString
u=new W.ar(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ar(t).at(0,new W.ar(r))
return t}}
W.iq.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ar(t).at(0,new W.ar(s))
return t}}
W.cN.prototype={$icN:1}
W.aV.prototype={$iaV:1}
W.aG.prototype={$iaG:1}
W.is.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$az:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aE:function(){return[W.aG]}}
W.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.iv.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.iA.prototype={
gl:function(a){return a.length}}
W.bN.prototype={}
W.iX.prototype={
i:function(a){return String(a)}}
W.jc.prototype={
gl:function(a){return a.length}}
W.bd.prototype={
gj7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gj6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibd:1}
W.d_.prototype={
hW:function(a,b){return a.requestAnimationFrame(H.ce(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
fD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d0.prototype={$id0:1}
W.jm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iX")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.X]},
$az:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aE:function(){return[W.X]}}
W.ek.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbF(b)&&a.top===u.gbJ(b)&&a.width===u.gaI(b)&&a.height===u.gaF(b)},
gI:function(a){return W.md(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaF:function(a){return a.height},
gaI:function(a){return a.width}}
W.jB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.eC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aE:function(){return[W.C]}}
W.jP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.jT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aF]},
$az:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aE:function(){return[W.aF]}}
W.jk.prototype={
L:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga6(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga6:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=H.h(r[t],"$id0")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.jo.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga6(this).length}}
W.jp.prototype={}
W.l2.prototype={}
W.jq.prototype={}
W.jr.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:34}
W.bP.prototype={
f2:function(a){var u
if($.d2.gjn($.d2)){for(u=0;u<262;++u)$.d2.n(0,C.X[u],W.oR())
for(u=0;u<12;++u)$.d2.n(0,C.v[u],W.oS())}},
aR:function(a){return $.n1().W(0,W.ct(a))},
au:function(a,b,c){var u=$.d2.j(0,H.l(W.ct(a))+"::"+b)
if(u==null)u=$.d2.j(0,"*::"+b)
if(u==null)return!1
return H.la(u.$4(a,b,c,this))},
$iaA:1}
W.E.prototype={
gU:function(a){return new W.dA(a,this.gl(a),[H.bR(this,a,"E",0)])}}
W.dR.prototype={
aR:function(a){return C.a.dz(this.a,new W.hI(a))},
au:function(a,b,c){return C.a.dz(this.a,new W.hH(a,b,c))},
$iaA:1}
W.hI.prototype={
$1:function(a){return H.h(a,"$iaA").aR(this.a)},
$S:24}
W.hH.prototype={
$1:function(a){return H.h(a,"$iaA").au(this.a,this.b,this.c)},
$S:24}
W.eK.prototype={
fd:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bK(0,new W.jM())
t=b.bK(0,new W.jN())
this.b.at(0,u)
s=this.c
s.at(0,C.B)
s.at(0,t)},
aR:function(a){return this.a.W(0,W.ct(a))},
au:function(a,b,c){var u=this,t=W.ct(a),s=u.c
if(s.W(0,H.l(t)+"::"+b))return u.d.iS(c)
else if(s.W(0,"*::"+b))return u.d.iS(c)
else{s=u.b
if(s.W(0,H.l(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.l(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaA:1}
W.jM.prototype={
$1:function(a){return!C.a.W(C.v,H.I(a))},
$S:25}
W.jN.prototype={
$1:function(a){return C.a.W(C.v,H.I(a))},
$S:25}
W.jV.prototype={
au:function(a,b,c){if(this.eV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.jW.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:16}
W.jU.prototype={
aR:function(a){var u=J.V(a)
if(!!u.$icI)return!1
u=!!u.$iq
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a4(b,"on"))return!1
return this.aR(a)},
$iaA:1}
W.dA.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd9(J.lp(u.a,t))
u.c=t
return!0}u.sd9(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd9:function(a){this.d=H.A(a,H.t(this,0))},
$ib2:1}
W.aA.prototype={}
W.jK.prototype={$ipw:1}
W.f1.prototype={
cM:function(a){new W.k5(this).$2(a,null)},
b0:function(a,b){if(b==null)J.ls(a)
else b.removeChild(a)},
i_:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nb(a)
n=o.a.getAttribute("is")
H.h(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.aj(r)}try{s=W.ct(a)
this.hZ(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iF"),H.I(n))}catch(r){if(H.aj(r) instanceof P.aL)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aR(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.au(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga6(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.ga6(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
q=o.a
p=J.ne(r)
H.I(r)
if(!q.au(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icN)o.cM(a.content)},
$iph:1}
W.k5.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i_(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.h(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iC")}},
$S:44}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
P.jQ.prototype={
e2:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cL:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$inR)throw H.c(P.iP("structured clone of RegExp"))
if(!!u.$iaE)return a
if(!!u.$ibU)return a
if(!!u.$icv)return a
if(!!u.$icy)return a
if(!!u.$icD||!!u.$ibH||!!u.$icC)return a
if(!!u.$iF){t=q.e2(a)
s=q.b
if(t>=s.length)return H.f(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.L(a,new P.jS(p,q))
return p.a}if(!!u.$ib){t=q.e2(a)
p=q.b
if(t>=p.length)return H.f(p,t)
r=p[t]
if(r!=null)return r
return q.j3(a,t)}throw H.c(P.iP("structured clone of other type"))},
j3:function(a,b){var u,t=J.ch(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.cL(t.j(a,u)))
return r}}
P.jS.prototype={
$2:function(a,b){this.a.a[a]=this.b.cL(b)},
$S:7}
P.kg.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jR.prototype={}
P.fU.prototype={
gbj:function(){var u=this.b,t=H.as(u,"z",0),s=W.U
return new H.hm(new H.cZ(u,H.n(new P.fV(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.fW(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbj()
J.nc(u.b.$1(J.fg(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aC(this.gbj().a)},
j:function(a,b){var u=this.gbj()
return u.b.$1(J.fg(u.a,b))},
gU:function(a){var u=P.lF(this.gbj(),!1,W.U)
return new J.au(u,u.length,[H.t(u,0)])},
$az:function(){return[W.U]},
$ai:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fV.prototype={
$1:function(a){return!!J.V(H.h(a,"$iC")).$iU},
$S:21}
P.fW.prototype={
$1:function(a){return H.m(H.h(a,"$iC"),"$iU")},
$S:33}
P.jF.prototype={
gbI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.t(this,0))},
gdF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ial){t=p.a
if(t==u.gbF(b)){s=p.b
if(s==u.gbJ(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.G(r)
q=H.t(p,0)
if(H.A(t+r,q)===u.gbI(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.G(t)
u=H.A(s+t,q)===u.gdF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dj(s),q=t.b,p=J.dj(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.G(o)
u=H.t(t,0)
o=C.f.gI(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.G(s)
u=C.f.gI(H.A(q+s,u))
return P.oc(P.jD(P.jD(P.jD(P.jD(0,r),p),o),u))}}
P.al.prototype={
gbF:function(a){return this.a},
gbJ:function(a){return this.b},
gaI:function(a){return this.c},
gaF:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$ib4")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aE:function(){return[P.b4]}}
P.b6.prototype={$ib6:1}
P.hL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$ib6")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aE:function(){return[P.b6]}}
P.hS.prototype={
gl:function(a){return a.length}}
P.cI.prototype={$icI:1}
P.io.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
P.q.prototype={
gcj:function(a){return new P.fU(a,new W.ar(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mc(null))
C.a.h(p,W.me())
C.a.h(p,new W.jU())
c=new W.f1(new W.dR(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).j4(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.ba.prototype={$iba:1}
P.iB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.h(c,"$iba")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.ba]},
$ii:1,
$ai:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aE:function(){return[P.ba]}}
P.eu.prototype={}
P.ev.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.S.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
P.fm.prototype={
gl:function(a){return a.length}}
P.fn.prototype={
j:function(a,b){return P.bp(a.get(H.I(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga6:function(a){var u=H.d([],[P.e])
this.L(a,new P.fo(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.fo.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fp.prototype={
gl:function(a){return a.length}}
P.bT.prototype={}
P.hM.prototype={
gl:function(a){return a.length}}
P.ei.prototype={}
P.dm.prototype={$idm:1}
P.dV.prototype={$idV:1}
P.c7.prototype={
S:function(a,b,c){return a.uniform1f(b,c)},
a2:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.dY.prototype={$idY:1}
P.ea.prototype={$iea:1}
P.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bp(a.item(b))},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.eN.prototype={}
P.eO.prototype={}
O.a6.prototype={
bQ:function(a){var u=this
u.sfO(H.d([],[a]))
u.sdh(null)
u.sde(null)
u.sdi(null)},
cN:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdh(b)
u.sde(a)
u.sdi(c)},
be:function(a,b){return this.cN(a,null,b)},
hB:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fZ:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.au(u,u.length,[H.t(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.A(b,r)
r=[r]
if(H.H(s.hB(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fZ(t,H.d([b],r))}},
sfO:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdh:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.as(this,"a6",0)]]})},
sde:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
sdi:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cB.prototype={
gl:function(a){return this.a.length},
gD:function(){var u=this.b
return u==null?this.b=D.a1():u},
aK:function(){var u=this.b
if(u!=null)u.M(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.dN()},
es:function(a){var u=this.a
if(a==null)C.a.h(u,V.dN())
else C.a.h(u,a)
this.aK()},
cC:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbZ:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fs.prototype={}
E.an.prototype={
cY:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,[H.t(u,0)]);u.C();){t=u.d
if(t.f==null)t.cY()}},
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gD().N(0,s.gel())
u=s.c
if(u!=null)u.gD().h(0,s.gel())
t=new D.R("shape",r,s.c,[F.dZ])
t.b=!0
s.al(t)}},
sba:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gD().N(0,s.gen())
u=s.f
s.f=a
if(a!=null)a.gD().h(0,s.gen())
s.cY()
t=new D.R("technique",u,s.f,[O.bM])
t.b=!0
s.al(t)}},
saT:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gD().N(0,s.gej())
if(a!=null)a.gD().h(0,s.gej())
s.r=a
t=new D.R("mover",u,a,[U.ak])
t.b=!0
s.al(t)}},
az:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aX(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.R("matrix",u,q,[V.ao])
t.b=!0
s.al(t)}r=s.f
if(r!=null)r.az(0,b)
for(r=s.y.a,r=new J.au(r,r.length,[H.t(r,0)]);r.C();)r.d.az(0,b)},
aU:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga_(s))
else C.a.h(s.a,r.E(0,s.ga_(s)))
s.aK()
a.eu(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.jM(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.t(s,0)]);s.C();)s.d.aU(a)
a.er()
a.dx.cC()},
gD:function(){var u=this.z
return u==null?this.z=D.a1():u},
al:function(a){var u=this.z
if(u!=null)u.M(a)},
a1:function(){return this.al(null)},
em:function(a){H.h(a,"$iB")
this.e=null
this.al(a)},
jz:function(){return this.em(null)},
eo:function(a){this.al(H.h(a,"$iB"))},
jA:function(){return this.eo(null)},
ek:function(a){this.al(H.h(a,"$iB"))},
jy:function(){return this.ek(null)},
ei:function(a){this.al(H.h(a,"$iB"))},
jv:function(){return this.ei(null)},
ju:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.geh(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jx:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gU(b),t=this.geh();u.C();)u.gK(u).gD().N(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf1:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibn:1}
E.hW.prototype={
eY:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cB()
t=[V.ao]
u.sbZ(H.d([],t))
u.b=null
u.gD().h(0,new E.hX(s))
s.cy=u
u=new O.cB()
u.sbZ(H.d([],t))
u.b=null
u.gD().h(0,new E.hY(s))
s.db=u
u=new O.cB()
u.sbZ(H.d([],t))
u.b=null
u.gD().h(0,new E.hZ(s))
s.dx=u
s.sia(H.d([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.si6(new H.aP([P.e,A.cJ]))},
gjI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.E(0,u.ga_(u))
s=u}return s},
eu:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
er:function(){var u=this.dy
if(u.length>1)u.pop()},
sia:function(a){this.dy=H.k(a,"$ib",[O.bM],"$ab")},
si6:function(a){this.fr=H.k(a,"$iF",[P.e,A.cJ],"$aF")}}
E.hX.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:5}
E.hY.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.hZ.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:5}
E.e6.prototype={
cS:function(a){H.h(a,"$iB")
this.ex()},
cR:function(){return this.cS(null)},
gji:function(){var u,t=this,s=Date.now(),r=C.f.a5(P.lA(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dl:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.E()
if(typeof r!=="number")return H.G(r)
u=C.e.e3(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.E()
t=C.e.e3(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lY(C.t,s.gjO())}},
ex:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iu(this),{func:1,ret:-1,args:[P.ab]})
C.I.fD(u)
C.I.hW(u,W.mt(t,P.ab))}},
jL:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dl()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lA(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aK()
r=s.db
C.a.sl(r.a,0)
r.aK()
r=s.dx
C.a.sl(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aU(p.e)}s=p.z
if(s!=null)s.M(null)}catch(q){u=H.aj(q)
t=H.cj(q)
P.lj("Error: "+H.l(u))
P.lj("Stack: "+H.l(t))
throw H.c(u)}}}
E.iu.prototype={
$1:function(a){var u
H.p1(a)
u=this.a
if(u.ch){u.ch=!1
u.jL()}},
$S:53}
Z.eg.prototype={$ipb:1}
Z.dn.prototype={
bm:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jd.prototype={$ipc:1}
Z.dp.prototype={
aS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bm:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bm(a)},
eE:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aU:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.e],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfK:function(a){this.b=H.k(a,"$ib",[Z.bD],"$ab")},
$ipl:1}
Z.bD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.bc.prototype={
gcO:function(a){var u=this.a,t=(u&$.bt().a)!==0?3:0
if((u&$.bs().a)!==0)t+=3
if((u&$.br().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=2
if((u&$.bv().a)!==0)t+=3
if((u&$.dh().a)!==0)t+=3
if((u&$.di().a)!==0)t+=4
if((u&$.cm().a)!==0)++t
return(u&$.bq().a)!==0?t+4:t},
iV:function(a){var u,t=$.bt(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.di()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0)if(u===a)return t
return $.n_()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bt().a)!==0)C.a.h(u,"Pos")
if((t&$.bs().a)!==0)C.a.h(u,"Norm")
if((t&$.br().a)!==0)C.a.h(u,"Binm")
if((t&$.bu().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bv().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dh().a)!==0)C.a.h(u,"Clr3")
if((t&$.di().a)!==0)C.a.h(u,"Clr4")
if((t&$.cm().a)!==0)C.a.h(u,"Weight")
if((t&$.bq().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fv.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sai(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
M:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.lF(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fQ(q))
u=r.b
if(u!=null){r.saO(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.L(u,new D.fR(q))}return!0},
am:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.M(u)}}},
sai:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saO:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fQ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.fR.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.B.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dq.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dE.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.ha.prototype={
jF:function(a){this.d.h(0,a.a)
return!1},
jB:function(a){this.d.N(0,a.a)
return!1},
shP:function(a){this.d=H.k(a,"$ilU",[P.p],"$alU")}}
X.dI.prototype={}
X.hi.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.E()
u=b.b
t=q.ch
if(typeof u!=="number")return u.E()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gbn()
r=new X.bG(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cB:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eN()
if(typeof u!=="number")return u.bL()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.aZ(a,b))
return!0},
jG:function(a){return!1},
hq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dI(c,r.a.gbn(),b)
s.b=!0
t.M(s)
r.y=new P.ay(u,!1)
r.x=V.bJ()}}
X.bF.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bF))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bG.prototype={}
X.hB.prototype={
bW:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbn(),r=new X.bG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cB:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.M(this.bW(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eN()
if(typeof t!=="number")return t.bL()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.M(u.bW(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.M(this.bW(a,b,!1))
return!0},
jH:function(a,b){return!1}}
X.hR.prototype={}
X.e8.prototype={}
X.iy.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gbn()
r=new X.e8(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jE:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.M(this.aZ(a,!0))
return!0},
jC:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.M(this.aZ(a,!0))
return!0},
jD:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.M(this.aZ(a,!1))
return!0}}
X.ed.prototype={
gbn:function(){var u=this.a,t=C.r.gdG(u).c
t.toString
u=C.r.gdG(u).d
u.toString
return V.lS(0,0,t,u)},
d4:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dE(u,new X.bF(t,a.altKey,a.shiftKey))},
aP:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
c9:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.aa(s-q,r-u)},
b_:function(a){return new V.a5(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.e.an(r.pageX)
C.e.an(r.pageY)
p=o.left
C.e.an(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.an(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dq(u,new X.bF(t,a.altKey,a.shiftKey))},
c_:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hk:function(a){this.f=!0},
h6:function(a){this.f=!1},
he:function(a){H.h(a,"$iae")
if(H.H(this.f)&&this.c_(a))a.preventDefault()},
ho:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.d4(a)
this.b.jF(u)},
hm:function(a){var u
H.h(a,"$ib3")
if(!H.H(this.f))return
u=this.d4(a)
this.b.jB(u)},
hs:function(a){var u,t,s,r,q=this
H.h(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aP(a)
if(H.H(q.x)){t=q.aB(a)
s=q.b_(a)
if(q.d.cB(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cB(t,r))a.preventDefault()},
hw:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b9(u,s))a.preventDefault()},
hi:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.c_(a)){r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b9(u,s))a.preventDefault()}},
hu:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b8(u,s))a.preventDefault()},
hg:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.c_(a)){r.aP(a)
u=r.aB(a)
if(H.H(r.x)){t=r.b_(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aD(a)
if(r.c.b8(u,s))a.preventDefault()}},
hy:function(a){var u,t,s=this
H.h(a,"$ibd")
s.aP(a)
u=new V.a5((a&&C.H).gj6(a),C.H.gj7(a)).A(0,180)
if(H.H(s.x)){if(s.d.jG(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aD(a)
if(s.c.jH(u,t))a.preventDefault()},
hA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.hq(u,t,r)}},
hN:function(a){var u,t=this
H.h(a,"$iaX")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c3(a)
if(t.e.jE(u))a.preventDefault()},
hJ:function(a){var u
H.h(a,"$iaX")
this.c9(a)
u=this.c3(a)
if(this.e.jC(u))a.preventDefault()},
hL:function(a){var u
H.h(a,"$iaX")
this.c9(a)
u=this.c3(a)
if(this.e.jD(u))a.preventDefault()},
sfE:function(a){this.z=H.k(a,"$ib",[[P.cL,P.Q]],"$ab")}}
D.dv.prototype={$ia8:1,$ibn:1}
D.a8.prototype={$ibn:1}
D.dF.prototype={
gD:function(){var u=this.Q
return u==null?this.Q=D.a1():u},
a8:function(a){var u=this.Q
if(u!=null)u.M(a)},
dg:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.M(a)},
hp:function(){return this.dg(null)},
hD:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.f3(s))return!1}return!0},
h0:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdf(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=H.h(b[q],"$ia8")
if(p instanceof D.bL)C.a.h(this.r,p)
o=p.z
if(o==null){o=new D.bY()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c0([n])
n.b=!0
this.a8(n)},
hH:function(a,b){var u,t,s,r=D.a8
H.k(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdf();u.C();){s=u.gK(u)
C.a.N(this.e,s)
s.gD().N(0,t)}r=new D.c1([r])
r.b=!0
this.a8(r)},
f3:function(a){var u=C.a.W(this.r,a)
return u},
sf4:function(a){this.e=H.k(a,"$ib",[D.dv],"$ab")},
sf5:function(a){this.f=H.k(a,"$ib",[D.dU],"$ab")},
sf6:function(a){this.r=H.k(a,"$ib",[D.bL],"$ab")},
sf7:function(a){this.x=H.k(a,"$ib",[D.e3],"$ab")},
sf8:function(a){this.y=H.k(a,"$ib",[D.e4],"$ab")},
sf9:function(a){this.z=H.k(a,"$ib",[D.e5],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dU.prototype={$ia8:1,$ibn:1}
D.bL.prototype={
gD:function(){var u=this.z
return u==null?this.z=D.a1():u},
a8:function(a){var u
H.h(a,"$iB")
u=this.z
if(u!=null)u.M(a)},
h8:function(){return this.a8(null)},
$ia8:1,
$ibn:1}
D.e3.prototype={$ia8:1,$ibn:1}
D.e4.prototype={$ia8:1,$ibn:1}
D.e5.prototype={$ia8:1,$ibn:1}
V.a2.prototype={
q:function(a,b){var u=C.e.q(this.a,b.gcG()),t=C.e.q(this.b,b.gbM()),s=C.e.q(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gcG()),t=C.e.t(this.b,b.gbM()),s=C.e.t(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.aM.prototype={
q:function(a,b){var u=this,t=C.e.q(u.a,b.gcG()),s=C.e.q(u.b,b.gbM()),r=C.e.q(u.c,b.gce()),q=C.e.q(u.d,b.giT(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aM(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gcG()),s=C.e.t(u.b,b.gbM()),r=C.e.t(u.c,b.gce()),q=C.e.t(u.d,b.giT(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aM(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.fP.prototype={}
V.dM.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dM))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cg(H.d([q.a,q.d,q.r],p),3,0),n=V.cg(H.d([q.b,q.e,q.x],p),3,0),m=V.cg(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
eb:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.dN()
u=1/b1
t=-n
s=-a0
return V.bm((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
E:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bm(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cK:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aW:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a3(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
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
H:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cg(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cg(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cg(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cg(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.H("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.a3.prototype={
q:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
E:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.b7.prototype={
q:function(a,b){var u=this
return new V.b7(C.e.q(u.a,b.gjY(b)),C.e.q(u.b,b.gjZ(b)),C.e.q(u.c,b.gk_(b)),C.e.q(u.d,b.gjX(b)))},
t:function(a,b){var u=this
return new V.b7(C.e.t(u.a,b.gjY(b)),C.e.t(u.b,b.gjZ(b)),C.e.t(u.c,b.gk_(b)),C.e.t(u.d,b.gjX(b)))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.dX.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.a5.prototype={
cz:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gj9(b)
if(typeof t!=="number")return t.q()
s=C.e.q(t,s)
t=this.b
u=b.gja(b)
if(typeof t!=="number")return t.q()
return new V.a5(s,C.e.q(t,u))},
t:function(a,b){var u,t=this.a,s=b.gj9(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.gja(b)
if(typeof t!=="number")return t.t()
return new V.a5(s,C.e.t(t,u))},
E:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.E()
u=this.b
if(typeof u!=="number")return u.E()
return new V.a5(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.m5
return u==null?$.m5=new V.a5(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.a5(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.K.prototype={
cz:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cA:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.K(-this.a,-this.b,-this.c)},
E:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.O().a)return V.cY()
return new V.K(this.a/b,this.b/b,this.c/b)},
ec:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fw.prototype={
bS:function(a){var u=V.pa(a,this.c,this.b)
return u},
gD:function(){var u=this.y
return u==null?this.y=D.a1():u},
Z:function(a){var u=this.y
if(u!=null)u.M(a)},
seJ:function(a,b){},
sed:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bS(u)}s=new D.R("maximumLocation",s,t.b,[P.r])
s.b=!0
t.Z(s)}},
sef:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bS(u)}s=new D.R("minimumLocation",s,t.c,[P.r])
s.b=!0
t.Z(s)}},
sa3:function(a,b){var u,t=this
b=t.bS(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.R("location",u,b,[P.r])
u.b=!0
t.Z(u)}},
see:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.R("maximumVelocity",r,a,[P.r])
r.b=!0
s.Z(r)}},
sa0:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.R("velocity",t,a,[P.r])
t.b=!0
u.Z(t)}},
sdH:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.R("dampening",u,a,[P.r])
u.b=!0
this.Z(u)}},
az:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa0(u)}}}
U.ds.prototype={
gD:function(){var u=this.b
return u==null?this.b=D.a1():u},
aX:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ds))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cx.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.a1():u},
Z:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.M(a)},
aq:function(){return this.Z(null)},
fb:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gbh(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gD()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.Z(n)},
hF:function(a,b){var u,t,s=U.ak
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gbh();u.C();)u.gK(u).gD().N(0,t)
s=new D.c1([s])
s.b=!0
this.Z(s)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.X()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.t(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.E(0,u)}}s.f=u==null?V.dN():u
r=s.e
if(r!=null)r.am(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.ee.prototype={
gD:function(){var u=this.fx
return u==null?this.fx=D.a1():u},
Z:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.M(a)},
aq:function(){return this.Z(null)},
iW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.gfT())
u=s.a.c
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gfV())
u=s.a.c
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.gfX())
u=s.a.d
t=u.f
u=t==null?u.f=D.a1():t
u.h(0,s.gfP())
u=s.a.d
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gfR())
u=s.a.e
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.gii())
u=s.a.e
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gig())
u=s.a.e
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.gic())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.a5(u,t)},
fU:function(a){var u=this
a=H.m(H.h(a,"$iB"),"$ibG")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$ibG")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a5(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.a5(t.a,t.b).E(0,2).A(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa0(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa0(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a5(s.a,s.b).E(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a5(t.a,t.b).E(0,2).A(0,u.gay()))}n.aq()},
fY:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa0(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa0(-t*10*u)
r.aq()}},
fQ:function(a){var u=this
if(H.m(H.h(a,"$iB"),"$idI").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fS:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$ibG")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a5(s.a,s.b).E(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a5(t.a,t.b).E(0,2).A(0,u.gay()))
n.aq()},
ij:function(a){var u=this
H.h(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ih:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.h(a,"$iB"),"$ie8")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a5(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.a5(t.a,t.b).E(0,2).A(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa0(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa0(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.a5(s.a,s.b).E(0,2).A(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
n.b.sa0(0)
n.c.sa0(0)
t=t.t(0,a.z)
n.dx=n.as(new V.a5(t.a,t.b).E(0,2).A(0,u.gay()))}n.aq()},
ie:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa0(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa0(-t*10*u)
r.aq()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.X()
if(q<p){r.dy=p
u=b.y
r.c.az(0,u)
r.b.az(0,u)
q=V.lH(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.E(0,V.bm(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
M.dy.prototype={
aA:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.M(a)},
fc:function(){return this.aA(null)},
ha:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.aA(n)},
hc:function(a,b){var u,t,s=E.an
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gar();u.C();)u.gK(u).gD().N(0,t)
s=new D.c1([s])
s.b=!0
this.aA(s)},
sba:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gD().N(0,t.gar())
u=t.c
t.c=a
if(a!=null)a.gD().h(0,t.gar())
s=new D.R("technique",u,t.c,[O.bM])
s.b=!0
t.aA(s)}},
gD:function(){var u=this.x
return u==null?this.x=D.a1():u},
aU:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eu(a1.c)
u=a1.b
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
if(typeof s!=="number")return H.G(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a2.c=p
q=C.e.an(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.a
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bm(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.es(i)
t=$.lN
if(t==null){t=V.lP()
q=$.m8
if(q==null)q=$.m8=new V.K(0,1,0)
p=$.m6
if(p==null)p=$.m6=new V.K(0,0,-1)
h=p.A(0,Math.sqrt(p.G(p)))
q=q.aE(h)
g=q.A(0,Math.sqrt(q.G(q)))
f=h.aE(g)
e=new V.K(t.a,t.b,t.c)
d=g.T(0).G(e)
c=f.T(0).G(e)
b=h.T(0).G(e)
t=V.bm(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lN=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aX(0,a2,u)
if(a0!=null)a=a0.E(0,a)}a2.db.es(a)
u=a1.c
if(u!=null)u.az(0,a2)
for(u=a1.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.C();)u.d.az(0,a2)
for(u=a1.d.a,u=new J.au(u,u.length,[H.t(u,0)]);u.C();)u.d.aU(a2)
a1.a.toString
a2.cy.cC()
a2.db.cC()
a1.b.toString
a2.er()},
sft:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipi:1}
A.dl.prototype={}
A.fl.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
j8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hp.prototype={
eX:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ag("")
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
d2.is(u)
d2.iz(u)
d2.it(u)
d2.iH(u)
d2.iI(u)
d2.iB(u)
d2.iM(u)
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
u=new P.ag("")
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
s.iw(u)
s.ir(u)
s.iu(u)
s.ix(u)
s.iF(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iD(u)
s.iE(u)}s.iA(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
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
case C.h:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c8
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
s.iv(u)
s.iC(u)
s.iG(u)
s.iJ(u)
s.iK(u)
s.iL(u)
s.iy(u)}m=u.a+="// === Main ===\n"
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
a7.e=a7.d5(n,35633)
a7.f=a7.d5(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.H(H.la(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.u(P.w("Failed to link shader: "+H.l(h)))}a7.i3()
a7.i5()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.m(a7.y.p(0,"invViewMat"),"$iaB")
if(t)a7.dy=H.m(a7.y.p(0,"objMat"),"$iaB")
if(r)a7.fr=H.m(a7.y.p(0,"viewObjMat"),"$iaB")
a7.fy=H.m(a7.y.p(0,"projViewObjMat"),"$iaB")
if(d2.x2)a7.k1=H.m(a7.y.p(0,"txt2DMat"),"$icR")
if(d2.y1)a7.k2=H.m(a7.y.p(0,"txtCubeMat"),"$iaB")
if(d2.y2)a7.k3=H.m(a7.y.p(0,"colorMat"),"$iaB")
a7.sfo(H.d([],[A.aB]))
t=d2.aw
if(t>0){a7.k4=H.h(a7.y.p(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.u(P.w(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.p(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.m(a7.y.p(0,b0),"$iap")
a7.x1=H.m(a7.y.p(0,b1),"$iP")
break
case C.i:a7.ry=H.m(a7.y.p(0,b0),"$iaq")
a7.x1=H.m(a7.y.p(0,b1),"$iP")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.p(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.m(a7.y.p(0,b2),"$iap")
a7.aw=H.m(a7.y.p(0,b3),"$iP")
break
case C.i:a7.y2=H.m(a7.y.p(0,b2),"$iaq")
a7.aw=H.m(a7.y.p(0,b3),"$iP")
break}}t=d2.c
if(t!==C.d){a7.ak=H.m(a7.y.p(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.bq=H.m(a7.y.p(0,b4),"$iap")
a7.br=H.m(a7.y.p(0,b5),"$iP")
break
case C.i:a7.dI=H.m(a7.y.p(0,b4),"$iaq")
a7.br=H.m(a7.y.p(0,b5),"$iP")
break}}t=d2.d
if(t!==C.d){a7.bs=H.m(a7.y.p(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dJ=H.m(a7.y.p(0,b6),"$iap")
a7.bt=H.m(a7.y.p(0,b7),"$iP")
break
case C.i:a7.dK=H.m(a7.y.p(0,b6),"$iaq")
a7.bt=H.m(a7.y.p(0,b7),"$iP")
break}}t=d2.e
if(t!==C.d){a7.bw=H.m(a7.y.p(0,"shininess"),"$ia4")
a7.bu=H.m(a7.y.p(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dL=H.m(a7.y.p(0,b8),"$iap")
a7.bv=H.m(a7.y.p(0,b9),"$iP")
break
case C.i:a7.dM=H.m(a7.y.p(0,b8),"$iaq")
a7.bv=H.m(a7.y.p(0,b9),"$iP")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dN=H.m(a7.y.p(0,"bumpTxt"),"$iap")
a7.bx=H.m(a7.y.p(0,c0),"$iP")
break
case C.i:a7.dO=H.m(a7.y.p(0,"bumpTxt"),"$iaq")
a7.bx=H.m(a7.y.p(0,c0),"$iP")
break}if(d2.dy){a7.dP=H.m(a7.y.p(0,"envSampler"),"$iaq")
a7.dQ=H.m(a7.y.p(0,"nullEnvTxt"),"$iP")
t=d2.r
if(t!==C.d){a7.by=H.m(a7.y.p(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dR=H.m(a7.y.p(0,c1),"$iap")
a7.bz=H.m(a7.y.p(0,c2),"$iP")
break
case C.i:a7.dS=H.m(a7.y.p(0,c1),"$iaq")
a7.bz=H.m(a7.y.p(0,c2),"$iP")
break}}t=d2.x
if(t!==C.d){a7.bA=H.m(a7.y.p(0,"refraction"),"$ia4")
a7.bB=H.m(a7.y.p(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dT=H.m(a7.y.p(0,c3),"$iap")
a7.bC=H.m(a7.y.p(0,c4),"$iP")
break
case C.i:a7.dU=H.m(a7.y.p(0,c3),"$iaq")
a7.bC=H.m(a7.y.p(0,c4),"$iP")
break}}}t=d2.y
if(t!==C.d){a7.bD=H.m(a7.y.p(0,"alpha"),"$ia4")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dV=H.m(a7.y.p(0,c5),"$iap")
a7.bE=H.m(a7.y.p(0,c6),"$iP")
break
case C.i:a7.dW=H.m(a7.y.p(0,c5),"$iaq")
a7.bE=H.m(a7.y.p(0,c6),"$iP")
break}}a7.sfB(H.d([],[A.cQ]))
a7.shO(H.d([],[A.cS]))
a7.si8(H.d([],[A.cT]))
a7.sil(H.d([],[A.cU]))
a7.sim(H.d([],[A.cV]))
a7.sio(H.d([],[A.cW]))
if(d2.k2){t=d2.z
if(t>0){a7.dX=H.h(a7.y.p(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.cn;(s&&C.a).h(s,new A.cQ(f,e))}}t=d2.Q
if(t>0){a7.dY=H.h(a7.y.p(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iN")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$ia4")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia4")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.co;(s&&C.a).h(s,new A.cS(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dZ=H.h(a7.y.p(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iN")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iN")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$ia4")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia4")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia4")
s=a7.cp;(s&&C.a).h(s,new A.cT(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.e_=H.h(a7.y.p(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iN")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iN")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iN")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iP")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iap")
s=a7.cq;(s&&C.a).h(s,new A.cU(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.e0=H.h(a7.y.p(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$icR")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iN")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$ia4")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$ia4")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cr;(s&&C.a).h(s,new A.cV(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.e1=H.h(a7.y.p(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.u(P.w(a8+r+a9))
H.m(f,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.w(a8+r+a9))
H.m(e,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.u(P.w(a8+r+a9))
H.m(d,"$iN")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.u(P.w(a8+r+a9))
H.m(c,"$iN")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.u(P.w(a8+r+a9))
H.m(b,"$iN")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.u(P.w(a8+r+a9))
H.m(a,"$iP")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.u(P.w(a8+r+a9))
H.m(a0,"$iN")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.w(a8+r+a9))
H.m(a1,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.u(P.w(a8+r+a9))
H.m(a2,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.u(P.w(a8+r+a9))
H.m(a3,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.u(P.w(a8+r+a9))
H.m(a4,"$ia4")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.u(P.w(a8+r+a9))
H.m(a5,"$ia4")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.u(P.w(a8+r+a9))
H.m(a6,"$iap")
s=a7.cs;(s&&C.a).h(s,new A.cW(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
aj:function(a,b,c){C.c.a2(b.a,b.d,1)},
ac:function(a,b,c){C.c.a2(b.a,b.d,1)},
sfo:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfB:function(a){this.cn=H.k(a,"$ib",[A.cQ],"$ab")},
shO:function(a){this.co=H.k(a,"$ib",[A.cS],"$ab")},
si8:function(a){this.cp=H.k(a,"$ib",[A.cT],"$ab")},
sil:function(a){this.cq=H.k(a,"$ib",[A.cU],"$ab")},
sim:function(a){this.cr=H.k(a,"$ib",[A.cV],"$ab")},
sio:function(a){this.cs=H.k(a,"$ib",[A.cW],"$ab")}}
A.hs.prototype={
is:function(a){var u,t,s,r=this
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
iz:function(a){var u
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
it:function(a){var u
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
iH:function(a){var u,t
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
iI:function(a){var u,t
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
iB:function(a){var u
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
iM:function(a){var u
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
aC:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iw:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aC(a,s,"emission")
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
ir:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aC(a,s,"ambient")
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
iu:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"diffuse")
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
ix:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"invDiffuse")
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
iF:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aC(a,s,"specular")
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
iA:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iD:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aC(a,s,"reflect")
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
iE:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aC(a,s,"refract")
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
iv:function(a){var u,t=this.z
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
iC:function(a){var u,t=this.Q
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
iG:function(a){var u,t=this.ch
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
iJ:function(a){var u,t,s=this.cx
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
iK:function(a){var u,t,s=this.cy
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
iL:function(a){var u,t,s=this.db
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
iy:function(a){var u
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
i:function(a){return this.ak}}
A.cQ.prototype={}
A.cU.prototype={}
A.cS.prototype={}
A.cV.prototype={}
A.cT.prototype={}
A.cW.prototype={}
A.cJ.prototype={
f_:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d5:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.la(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
i3:function(){var u,t,s,r=this,q=H.d([],[A.dl]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dl(p,t.name,s))}r.x=new A.fl(q)},
i5:function(){var u,t,s,r=this,q=H.d([],[A.e9]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.j5(t.type,t.size,t.name,s))}r.y=new A.iM(q)},
aM:function(a,b,c){var u=this.a
if(a===1)return new A.P(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
fw:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
fz:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
bl:function(a,b){return new P.ep(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
j5:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aM(b,c,d)
case 5121:return u.aM(b,c,d)
case 5122:return u.aM(b,c,d)
case 5123:return u.aM(b,c,d)
case 5124:return u.aM(b,c,d)
case 5125:return u.aM(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.iH(u.a,c,d)
case 35665:return new A.N(u.a,c,d)
case 35666:return new A.iK(u.a,c,d)
case 35667:return new A.iI(u.a,c,d)
case 35668:return new A.iJ(u.a,c,d)
case 35669:return new A.iL(u.a,c,d)
case 35674:return new A.iN(u.a,c,d)
case 35675:return new A.cR(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.fw(b,c,d)
case 35680:return u.fz(b,c,d)
case 35670:throw H.c(u.bl("BOOL",c))
case 35671:throw H.c(u.bl("BOOL_VEC2",c))
case 35672:throw H.c(u.bl("BOOL_VEC3",c))
case 35673:throw H.c(u.bl("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.e9.prototype={}
A.iM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sip:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cR.prototype={
ao:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.r],"$ab")))
C.c.eF(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
ao:function(a){var u=new Float32Array(H.cb(H.k(a,"$ib",[P.r],"$ab")))
C.c.eG(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.k7.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cA(s.b,b).cA(s.d.cA(s.c,b),c)
a.sa3(0,new V.a3(r.a,r.b,r.c))
a.seA(r.A(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
a.sdD(new V.b7(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:8}
F.kh.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:32}
F.kj.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa3(0,new V.a3(s,u,q))
u=new V.K(s,u,q)
a.seA(u.A(0,Math.sqrt(u.G(u))))
a.sdD(new V.b7(1-c,2+c,-1,-1))},
$S:8}
F.kk.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:27}
F.kl.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:27}
F.kE.prototype={
$2:function(a,b){return 0},
$S:32}
F.kF.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.A(0,Math.sqrt(t.G(t))).E(0,this.b+s)
a.sa3(0,new V.a3(s.a,s.b,s.c))},
$S:8}
F.kG.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:19}
F.ks.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a3(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:19}
F.ki.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lo(n.$1(o),m)
m=J.n5(J.lo(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.A(0,Math.sqrt(m.G(m)))
n=$.m7
if(n==null){n=new V.K(1,0,0)
$.m7=n
t=n}else t=n
n=u.aE(!J.W(u,t)?V.ma():t)
s=n.A(0,Math.sqrt(n.G(n)))
n=s.aE(u)
t=n.A(0,Math.sqrt(n.G(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.E(0,n*m)
m=s.E(0,q*m)
a.sa3(0,J.n4(l,new V.a3(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a9.prototype={
b2:function(){var u=this
if(!u.gb3()){C.a.N(u.a.a.d.b,u)
u.a.a.a1()}u.c5()
u.c6()
u.hT()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
i2:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hT:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
fn:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cY()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ec())return
return s.A(0,Math.sqrt(s.G(s)))},
fs:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.G(r)))
r=t.t(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aE(r.A(0,Math.sqrt(r.G(r))))
return r.A(0,Math.sqrt(r.G(r)))},
ci:function(){var u,t=this
if(t.d!=null)return!0
u=t.fn()
if(u==null){u=t.fs()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
fm:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cY()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ec())return
return s.A(0,Math.sqrt(s.G(s)))},
fq:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.t(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.t(0,g).E(0,p).q(0,g).t(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.G(l)))
l=o.aE(q)
l=l.A(0,Math.sqrt(l.G(l))).aE(o)
q=l.A(0,Math.sqrt(l.G(l)))}return q},
cf:function(){var u,t=this
if(t.e!=null)return!0
u=t.fm()
if(u==null){u=t.fq()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
gj0:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this
if(s.gb3())return a+"disposed"
u=a+C.b.ag(J.at(s.a.e),0)+", "+C.b.ag(J.at(s.b.e),0)+", "+C.b.ag(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.fS.prototype={}
F.ib.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bl.prototype={
b2:function(){var u=this
if(!u.gb3()){C.a.N(u.a.a.c.b,u)
u.a.a.a1()}u.c5()
u.c6()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c5:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){if(this.gb3())return a+"disposed"
return a+C.b.ag(J.at(this.a.e),0)+", "+C.b.ag(J.at(this.b.e),0)},
P:function(){return this.H("")}}
F.hc.prototype={}
F.iF.prototype={
b6:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bI.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ag(J.at(u.e),0)},
P:function(){return this.H("")}}
F.dZ.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.a1():u},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.j2())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.u(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.M(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nx(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cu(l,k,i)}g=h.e
if(g!=null)g.am(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.am(0)
return u},
jr:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ah];u.length!==0;){t=C.a.gjf(u)
C.a.ev(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.b6(0,t,q)){C.a.h(s,q)
C.a.ev(u,r)}}if(s.length>1)b.b7(s)}}p.a.w()
p.c.cH()
p.d.cH()
p.b.jK()
p.c.cI(new F.iF())
p.d.cI(new F.ib())
o=p.e
if(o!=null)o.am(0)},
cc:function(){this.jr(new F.j6(),new F.hJ())},
ct:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ct()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.f(o,u)
t=o[u]
o=t.r
if(o!=null)t.seg(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).A(0,Math.sqrt(s*s+r*r+o*o))
if(!J.W(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.M(null)}}}}o=p.e
if(o!=null)o.am(0)},
iZ:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bt()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bs().a)!==0)++s
if((t&$.br().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.dh().a)!==0)++s
if((t&$.di().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.bq().a)!==0)++s
r=a3.gcO(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dn])
for(n=0,m=0;m<s;++m){l=a3.iV(m)
k=l.gcO(l)
C.a.n(o,m,new Z.dn(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.f(u,j)
i=u[j].jp(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cb(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dp(new Z.eg(a0,f),o,a3)
e.sfK(H.d([],[Z.bD]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.l1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.l1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.l1(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.M(null)},
$ipj:1}
F.i4.prototype={
iP:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.f(a,p)
p=a[p]
if(q>=o)return H.f(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cu(s,p,o))}}return u},
iQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ah],"$ab")
u=H.d([],[F.a9])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.f(c,r)
l=c[r];++r
if(r>=m)return H.f(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.f(c,j)
i=c[j]
if(s<0||s>=m)return H.f(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cu(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cu(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cI:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cH:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gj0(s)
if(t)s.b2()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].ci())s=!1
return s},
cg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cf())s=!1
return s},
ct:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.M(null)}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sfF:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.i5.prototype={
gl:function(a){return this.b.length},
cI:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cH:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.H("")},
sfL:function(a){this.b=H.k(a,"$ib",[F.bl],"$ab")}}
F.i6.prototype={
gl:function(a){return this.b.length},
jK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.M(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sc2:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
F.ah.prototype={
cl:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ef(u.cx,r,o,t,s,q,p,a,n)},
j2:function(){return this.cl(null)},
sa3:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
seg:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.G(a)))
if(!J.W(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a1()}},
seA:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
sdD:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a1()}},
jp:function(a){var u,t,s=this
if(a.u(0,$.bt())){u=s.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bs())){u=s.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.br())){u=s.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bu())){u=s.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bv())){u=s.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dh())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.di())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cm()))return H.d([s.ch],[P.r])
else if(a.u(0,$.bq())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
ci:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cY()
t.d.L(0,new F.jb(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
cf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cY()
t.d.L(0,new F.ja(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this,r="-",q=H.d([],[P.e])
C.a.h(q,C.b.ag(J.at(s.e),0))
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
C.a.h(q,V.Y(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.H("")}}
F.jb.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.ja.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.j1.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a1()
return!0},
iR:function(a,b,c,d,e,f){var u=F.ef(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].ci()
return!0},
cg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cf()
return!0},
j_:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.M(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.w()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
P:function(){return this.H("")},
siq:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.j2.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
L:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.L(u.b,b)
C.a.L(u.c,new F.j3(u,b))
C.a.L(u.d,new F.j4(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfG:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sfH:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sfI:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.j3.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:6}
F.j4.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:6}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfM:function(a){this.b=H.k(a,"$ib",[F.bl],"$ab")},
sfN:function(a){this.c=H.k(a,"$ib",[F.bl],"$ab")}}
F.j7.prototype={}
F.j6.prototype={
b6:function(a,b,c){return J.W(b.f,c.f)}}
F.j8.prototype={}
F.hJ.prototype={
b7:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.cY()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.G(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)a[s].seg(u)
return}}
F.j9.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sc2:function(a){this.b=H.k(a,"$ib",[F.bI],"$ab")}}
O.dK.prototype={
gD:function(){var u=this.dy
return u==null?this.dy=D.a1():u},
ab:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.M(a)},
ff:function(){return this.ab(null)},
dk:function(a){H.h(a,"$iB")
this.a=null
this.ab(a)},
hY:function(){return this.dk(null)},
h2:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c0([u])
u.b=!0
this.ab(u)},
h4:function(a,b){var u=V.ao
H.k(b,"$ii",[u],"$ai")
u=new D.c1([u])
u.b=!0
this.ab(u)},
d2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a5(a1.e.length+3,4)*4,a3=C.f.a5(a1.f.length+3,4)*4,a4=C.f.a5(a1.r.length+3,4)*4,a5=C.f.a5(a1.x.length+3,4)*4,a6=C.f.a5(a1.y.length+3,4)*4,a7=C.f.a5(a1.z.length+3,4)*4,a8=C.f.a5(a0.e.a.length+3,4)*4
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
a=$.bt()
if(h){j=$.bs()
a=new Z.bc(a.a|j.a)}if(g){j=$.br()
a=new Z.bc(a.a|j.a)}if(f){j=$.bu()
a=new Z.bc(a.a|j.a)}if(e){j=$.bv()
a=new Z.bc(a.a|j.a)}if(c){j=$.bq()
a=new Z.bc(a.a|j.a)}return new A.hs(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
V:function(a,b){H.k(a,"$ib",[T.e2],"$ab")},
az:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.au(u,u.length,[H.t(u,0)]);u.C();){t=u.d
t.toString
s=$.bK
t.a=s==null?$.bK=new V.a3(0,0,0):s
s=$.j0
t.b=s==null?$.j0=new V.K(0,0,1):s
s=t.c
if(s!=null){r=s.aX(0,b,t)
if(r!=null){t.a=r.aW(t.a)
t.b=r.cK(t.b)}}}},
jM:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.d2()
u=a5.fr.j(0,a4.ak)
if(u==null){u=A.nD(a4,a5.a)
t=u.b
if(t.length===0)H.u(P.w("May not cache a shader with no name."))
if(a5.fr.bo(0,t))H.u(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bq
a4=a6.e
if(!(a4 instanceof Z.dp))a4=a6.e=null
if(a4==null||!a4.d.u(0,r)){a4=s.r1
if(a4)a6.d.av()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cg()
p.a.cg()
p=p.e
if(p!=null)p.am(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.j_()
o=o.e
if(o!=null)o.am(0)}m=a6.d.iZ(new Z.jd(a5.a),r)
m.aS($.bt()).e=a3.a.Q.c
if(a4)m.aS($.bs()).e=a3.a.cx.c
if(q)m.aS($.br()).e=a3.a.ch.c
if(s.rx)m.aS($.bu()).e=a3.a.cy.c
if(p)m.aS($.bv()).e=a3.a.db.c
if(s.x1)m.aS($.bq()).e=a3.a.dx.c
a6.e=m}a4=T.e2
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.jb()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga_(o)
q=q.dy
q.toString
q.ao(o.ah(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga_(o)
n=a5.dx
n=a5.cx=o.E(0,n.ga_(n))
o=n}q=q.fr
q.toString
q.ao(o.ah(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjI()
n=a5.dx
n=a5.ch=o.E(0,n.ga_(n))
o=n}q=q.fy
q.toString
q.ao(o.ah(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ao(C.m.ah(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ao(C.m.ah(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ao(C.m.ah(o,!0))}if(s.aw>0){k=a3.e.a.length
q=a3.a.k4
C.c.a2(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.f(n,j)
n=n[j]
o.toString
H.h(n,"$iao")
o=o.r1
if(j>=o.length)return H.f(o,j)
o=o[j]
i=new Float32Array(H.cb(H.k(n.ah(0,!0),"$ib",q,"$ab")))
C.c.eG(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.f.d)
q=a3.a
o=a3.f.d
q.aj(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.f.e)
q=a3.a
o=a3.f.e
q.ac(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.r.d)
q=a3.a
o=a3.r.d
q.aj(q.y1,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ac(q.y2,q.aw,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.ak
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.x.d)
q=a3.a
o=a3.x.d
q.aj(q.bq,q.br,o)
o=a3.a
q=a3.x.f
o=o.ak
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ac(q.dI,q.br,o)
o=a3.a
q=a3.x.f
o=o.ak
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bs
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.y.d)
q=a3.a
o=a3.y.d
q.aj(q.dJ,q.bt,o)
o=a3.a
q=a3.y.f
o=o.bs
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ac(q.dK,q.bt,o)
o=a3.a
q=a3.y.f
o=o.bs
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bu
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bw
C.c.S(o.a,o.d,h)
break
case C.h:a3.V(l,a3.z.d)
q=a3.a
o=a3.z.d
q.aj(q.dL,q.bv,o)
o=a3.a
q=a3.z.f
o=o.bu
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bw
C.c.S(q.a,q.d,h)
break
case C.i:a3.V(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ac(q.dM,q.bv,o)
o=a3.a
q=a3.z.f
o=o.bu
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bw
C.c.S(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dX
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cn
if(f>=n.length)return H.f(n,f)
c=n[f]
n=g.cK(d.gcm(d))
h=n.a
b=n.b
a=n.c
a=n.A(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.v(b.a,b.d,h,n,a)
a=d.gad(d)
n=c.c
C.c.v(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dY
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.co
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gcD(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.aW(d.gcD(d))
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gad(d)
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gdA()
h=c.e
C.c.S(h.a,h.d,n)
n=d.gdB()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gdC()
h=c.r
C.c.S(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dZ
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cp
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.a
h=c.b
b=n.a
a=n.b
n=n.c
C.c.v(h.a,h.d,b,a,n)
n=d.b
a=n.a
b=n.b
h=n.c
h=n.A(0,Math.sqrt(a*a+b*b+h*h))
b=c.c
a=h.a
n=h.b
h=h.c
C.c.v(b.a,b.d,a,n,h)
h=g.aW(d.a)
n=c.d
C.c.v(n.a,n.d,h.a,h.b,h.c)
h=d.d
n=c.e
C.c.v(n.a,n.d,h.a,h.b,h.c)
h=d.e
n=c.f
C.c.S(n.a,n.d,h)
h=d.f
n=c.r
C.c.S(n.a,n.d,h)
h=d.r
n=c.x
C.c.S(n.a,n.d,h)
h=d.x
n=c.y
C.c.S(n.a,n.d,h)
h=d.y
n=c.z
C.c.S(n.a,n.d,h);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.e_
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
h=a3.a.cq
if(f>=h.length)return H.f(h,f)
c=h[f]
h=d.gbb()
H.k(l,"$ib",n,"$ab")
if(!C.a.W(l,h)){h.sb4(0,l.length)
C.a.h(l,h)}h=d.gcm(d)
b=c.d
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gjW()
b=c.b
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gbI(d)
b=c.c
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=g.cK(d.gcm(d))
b=h.a
a=h.b
a0=h.c
a0=h.A(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.v(a.a,a.d,b,h,a0)
a0=d.gad(d)
h=c.f
C.c.v(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gbb()
h=a0.gb5(a0)
if(!h){h=c.x
C.c.a2(h.a,h.d,1)}else{h=c.r
b=a0.gb5(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gb4(a0))
h=c.x
C.c.a2(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.e0
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.y,o=q.length,n=[P.r],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
b=a3.a.cr
if(f>=b.length)return H.f(b,f)
c=b[f]
b=d.gbb()
H.k(l,"$ib",h,"$ab")
if(!C.a.W(l,b)){b.sb4(0,l.length)
C.a.h(l,b)}a1=g.E(0,d.ga_(d))
b=d.ga_(d)
a=$.bK
b=b.aW(a==null?$.bK=new V.a3(0,0,0):a)
a=c.b
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=$.bK
b=a1.aW(b==null?$.bK=new V.a3(0,0,0):b)
a=c.c
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=a1.eb(0)
a=c.d
i=new Float32Array(H.cb(H.k(new V.dM(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ah(0,!0),"$ib",n,"$ab")))
C.c.eF(a.a,a.d,!1,i)
a=d.gad(d)
b=c.e
C.c.v(b.a,b.d,a.a,a.b,a.c)
a=d.gbb()
b=a.gb5(a)
if(!b){b=c.r
C.c.a2(b.a,b.d,1)}else{b=c.f
a0=a.gb5(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gb4(a))
b=c.r
C.c.a2(b.a,b.d,0)}b=d.gdA()
a=c.x
C.c.S(a.a,a.d,b)
b=d.gdB()
a=c.y
C.c.S(a.a,a.d,b)
b=d.gdC()
a=c.z
C.c.S(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.e1
C.c.a2(q.a,q.d,k)
q=a5.db
g=q.ga_(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cs
if(f>=n.length)return H.f(n,f)
c=n[f]
n=d.gbb()
H.k(l,"$ib",a4,"$ab")
if(!C.a.W(l,n)){n.sb4(0,l.length)
C.a.h(l,n)}n=d.gcD(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcm(d)
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gjW()
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gbI(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.aW(d.gcD(d))
h=c.f
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gbb()
h=n.gb5(n)
if(!h){n=c.x
C.c.a2(n.a,n.d,1)}else{h=c.r
b=n.gb5(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gb4(n))
n=c.x
C.c.a2(n.a,n.d,0)}n=d.gad(d)
h=c.y
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gk7()
h=c.z
C.c.S(h.a,h.d,n)
n=d.gk8()
h=c.Q
C.c.S(h.a,h.d,n)
n=d.gdA()
h=c.ch
C.c.S(h.a,h.d,n)
n=d.gdB()
h=c.cx
C.c.S(h.a,h.d,n)
n=d.gdC()
h=c.cy
C.c.S(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.V(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.aj(a4.dN,a4.bx,q)
break
case C.i:a3.V(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ac(a4.dO,a4.bx,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga_(q).eb(0)}a4=a4.id
a4.toString
a4.ao(q.ah(0,!0))}if(s.dy){a3.V(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ac(a4.dP,a4.dQ,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.by
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
break
case C.h:a3.V(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.aj(a4.dR,a4.bz,q)
q=a3.a
a4=a3.cx.f
q=q.by
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break
case C.i:a3.V(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ac(a4.dS,a4.bz,q)
q=a3.a
a4=a3.cx.f
q=q.by
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bB
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bA
C.c.S(q.a,q.d,n)
break
case C.h:a3.V(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.aj(a4.dT,a4.bC,q)
q=a3.a
a4=a3.cy.f
q=q.bB
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bA
C.c.S(a4.a,a4.d,n)
break
case C.i:a3.V(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ac(a4.dU,a4.bC,q)
q=a3.a
a4=a3.cy.f
q=q.bB
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bA
C.c.S(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bD
C.c.S(a4.a,a4.d,o)
break
case C.h:a3.V(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.aj(a4.dV,a4.bE,o)
o=a3.a
a4=a3.db.f
o=o.bD
C.c.S(o.a,o.d,a4)
break
case C.i:a3.V(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ac(a4.dW,a4.bE,o)
o=a3.a
a4=a3.db.f
o=o.bD
C.c.S(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bm(a5)
a4=a6.e
a4.bm(a5)
a4.aU(a5)
a4.eE(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].eE(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.j8()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d2().ak},
sfp:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hq.prototype={}
O.dL.prototype={
aN:function(){}}
O.hr.prototype={}
O.b5.prototype={
dm:function(a){var u,t,s=this
if(!J.W(s.f,a)){u=s.f
s.f=a
t=new D.R(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.ab(t)}},
aN:function(){this.eU()
this.dm(new V.a2(1,1,1))},
sad:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aN()
u=t.a
u.a=null
u.ab(null)}t.dm(b)}}
O.ht.prototype={
i1:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.R(u.b+".refraction",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aN:function(){this.bP()
this.i1(1)}}
O.hu.prototype={
c7:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.R(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.ab(t)}},
aN:function(){this.bP()
this.c7(100)}}
O.bM.prototype={}
T.e2.prototype={}
V.bg.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dJ.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.av.prototype={
aG:function(a,b){return!this.eT(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}}
V.hV.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c5(this.a),t=H.c5(this.b)
return u+".."+t},
$iaz:1}
V.i3.prototype={
eZ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.p,P.T])
for(t=new H.cA(a,a.gl(a),[H.as(a,"z",0)]);t.C();)u.n(0,t.d,!0)
this.si0(u)},
aG:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.cM(u.ga6(u),0,null)},
si0:function(a){this.a=H.k(a,"$iF",[P.p,P.T],"$aF")},
$iaz:1}
V.cK.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cP(this.a.k(0,b))
r.sa7(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
je:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
sik:function(a){this.c=H.k(a,"$ib",[V.cP],"$ab")}}
V.e7.prototype={
i:function(a){var u=H.lk(this.b,"\n","\\n"),t=H.lk(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cO.prototype={
aH:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
shU:function(a){var u=P.e
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.iw.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cK(this,b)
u.sik(H.d([],[V.cP]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cO(a)
u=P.e
t.shU(new H.aP([u,u]))
this.b.n(0,a,t)}return t},
eD:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e7]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.je(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cM(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cM(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e7(n==null?o.b:n,p,s)}++s}}},
si9:function(a){this.a=H.k(a,"$iF",[P.e,V.cK],"$aF")},
sib:function(a){this.b=H.k(a,"$iF",[P.e,V.cO],"$aF")}}
V.cP.prototype={
i:function(a){return this.b.b+": "+this.cP(0)}}
X.dr.prototype={$ibn:1}
X.fZ.prototype={
gD:function(){var u=this.x
return u==null?this.x=D.a1():u}}
X.dT.prototype={
gD:function(){var u=this.f
return u==null?this.f=D.a1():u},
aL:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.M(a)},
fi:function(){return this.aL(null)},
saT:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gD().N(0,s.gcT())
t=s.b
s.b=a
if(a!=null)a.gD().h(0,s.gcT())
u=new D.R("mover",t,s.b,[U.ak])
u.b=!0
s.aL(u)}},
$ibn:1,
$idr:1}
X.e1.prototype={}
V.bz.prototype={
bg:function(a){this.b=new P.h2(C.U)
this.c=null
this.sbY(H.d([],[[P.b,W.aD]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aD]))
u=a.split("\n")
for(l=u.length,t=[W.aD],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fv(q,0,q.length)
n=o==null?q:o
C.S.eO(p,H.lk(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gax(m.d),p)}},
ep:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sbY(H.d([],[[P.b,W.aD]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).eD(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)q.bH(t[r])},
sbY:function(a){this.d=H.k(a,"$ib",[[P.b,W.aD]],"$ab")}}
V.kD.prototype={
$1:function(a){H.h(a,"$ib9")
P.lj(C.e.eC(this.a.gji(),2)+" fps")},
$S:49}
V.fF.prototype={
bH:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ix()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.y(new H.v("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.y(new H.v("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.y(new H.v(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.y(new H.v(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.y(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bg())
t=a1.k(0,r).m(0,h)
u=V.y(new H.v("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.y(new H.v("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.y(new H.v("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.y(new H.v("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bg())
t=a1.k(0,r).m(0,e)
u=V.y(new H.v("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.av()
s=[V.az]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.y(new H.v("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.y(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.av()
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.y(new H.v(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.y(new H.v(" \n\t"))
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
t.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h_.prototype={
bH:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ix()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.y(new H.v("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.y(new H.v("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.y(new H.v(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.y(new H.v(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.y(new H.v("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.y(new H.v("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bg())
t=e.k(0,j).m(0,i)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.av()
s=[V.az]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.y(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.av()
u.sa7(H.d([],s))
C.a.h(t.a,u)
t=V.y(new H.v("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.y(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.y(new H.v(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.y(new H.v(" \n\t"))
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
u.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h0.prototype={
bH:function(a){var u=this,t="#111"
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
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ix()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.y(new H.v("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.y(new H.v("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.y(new H.v("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.y(new H.v("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.y(new H.v("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.y(new H.v('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.y(new H.v("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.y(new H.v('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bg())
C.a.h(l.k(0,s).m(0,m).a,new V.bg())
u=l.k(0,m).m(0,m)
t=new V.av()
t.sa7(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.y(new H.v('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hP.prototype={
ep:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sbY(H.d([],[[P.b,W.aD]]))
this.O(C.a.m(b,"\n"),"#111")},
bH:function(a){},
bp:function(){return}}
V.hT.prototype={
du:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.m1().gcF().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.ds(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lr(m.c).h(0,q)
o=W.nr("radio")
o.checked=s
o.name=u
u=W.o
W.ac(o,"change",H.n(new V.hU(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lr(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.du(a,b,c,!1)},
ds:function(a){var u,t,s=P.m1(),r=P.e,q=P.nz(s.gcF(),r,r)
q.n(0,this.a,a)
u=s.ew(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jR([],[]).cL(""),"",t)}}
V.hU.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.ds(u.d)}},
$S:22}
V.i7.prototype={
f0:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ac(q,"scroll",H.n(new V.i9(o),{func:1,ret:-1,args:[r]}),!1,r)},
dw:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.i4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eD(C.a.jo(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.p7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f0(C.C,n,C.l,!1)
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
eK:function(a){var u,t,s,r=new V.fF("dart")
r.bg("dart")
u=new V.h_("glsl")
u.bg("glsl")
t=new V.h0("html")
t.bg("html")
s=C.a.jg(H.d([r,u,t],[V.bz]),new V.ia(a))
if(s!=null)return s
r=new V.hP("plain")
r.bg("plain")
return r},
dv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dg(r).a4(r,"+")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a4(r,"-")){C.a.n(b0,s,C.b.ap(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eK(a8)
q.ep(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f0(C.C,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lt()
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
if(s>=u.length)return H.f(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.a2.iU(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gU(r);a3.C();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iN:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.h(r.insertCell(-1),"$ib8").style
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
o=H.h(r.insertCell(-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ix()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.y(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.av()
r=[V.az]
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.y(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.y(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.av()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.y(new H.v("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.y(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.av()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.v("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.y(new H.v("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.y(new H.v("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.y(new H.v("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.y(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.av()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.y(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.av()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bg())
s=u.k(0,i).m(0,i)
t=new V.av()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.v("*_`["))
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
V.i9.prototype={
$1:function(a){P.lY(C.t,new V.i8(this.a))},
$S:22}
V.i8.prototype={
$0:function(){var u=C.e.an(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ia.prototype={
$1:function(a){return H.h(a,"$ibz").a===this.a},
$S:51}
N.ku.prototype={
$0:function(){this.a.sa9(0,F.le(1,null,null,1))},
$S:0}
N.kv.prototype={
$0:function(){this.a.sa9(0,F.lf(1,!0,!0,40,1))},
$S:0}
N.kw.prototype={
$0:function(){this.a.sa9(0,F.lf(1,!0,!1,40,0))},
$S:0}
N.kx.prototype={
$0:function(){this.a.sa9(0,F.p6(6,6))},
$S:0}
N.ky.prototype={
$0:function(){this.a.sa9(0,F.mK())},
$S:0}
N.kz.prototype={
$0:function(){this.a.sa9(0,F.oY())},
$S:0}
N.kA.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dv("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dv("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.eQ=u.i
u=J.dD.prototype
u.eS=u.i
u=P.i.prototype
u.eR=u.bK
u=W.U.prototype
u.bO=u.ae
u=W.eK.prototype
u.eV=u.au
u=O.dL.prototype
u.eU=u.aN
u=O.b5.prototype
u.bP=u.aN
u=V.dJ.prototype
u.eT=u.aG
u.cP=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oD","o6",11)
u(P,"oE","o7",11)
u(P,"oF","o8",11)
t(P,"mw","oB",3)
s(W,"oR",4,null,["$4"],["oa"],20,0)
s(W,"oS",4,null,["$4"],["ob"],20,0)
var m
r(m=E.an.prototype,"gel",0,0,null,["$1","$0"],["em","jz"],1,0)
r(m,"gen",0,0,null,["$1","$0"],["eo","jA"],1,0)
r(m,"gej",0,0,null,["$1","$0"],["ek","jy"],1,0)
r(m,"geh",0,0,null,["$1","$0"],["ei","jv"],1,0)
q(m,"gjt","ju",10)
q(m,"gjw","jx",10)
r(m=E.e6.prototype,"gcQ",0,0,null,["$1","$0"],["cS","cR"],1,0)
p(m,"gjO","ex",3)
o(m=X.ed.prototype,"ghj","hk",13)
o(m,"gh5","h6",13)
o(m,"ghd","he",4)
o(m,"ghn","ho",26)
o(m,"ghl","hm",26)
o(m,"ghr","hs",4)
o(m,"ghv","hw",4)
o(m,"ghh","hi",4)
o(m,"ght","hu",4)
o(m,"ghf","hg",4)
o(m,"ghx","hy",36)
o(m,"ghz","hA",13)
o(m,"ghM","hN",12)
o(m,"ghI","hJ",12)
o(m,"ghK","hL",12)
r(m=D.dF.prototype,"gdf",0,0,null,["$1","$0"],["dg","hp"],1,0)
o(m,"ghC","hD",38)
q(m,"gh_","h0",18)
q(m,"ghG","hH",18)
r(D.bL.prototype,"gh7",0,0,null,["$1","$0"],["a8","h8"],1,0)
n(V.a5.prototype,"gl","cz",15)
n(V.K.prototype,"gl","cz",15)
r(m=U.cx.prototype,"gbh",0,0,null,["$1","$0"],["Z","aq"],1,0)
q(m,"gfa","fb",30)
q(m,"ghE","hF",30)
r(m=U.ee.prototype,"gbh",0,0,null,["$1","$0"],["Z","aq"],1,0)
o(m,"gfT","fU",2)
o(m,"gfV","fW",2)
o(m,"gfX","fY",2)
o(m,"gfP","fQ",2)
o(m,"gfR","fS",2)
o(m,"gii","ij",2)
o(m,"gig","ih",2)
o(m,"gic","ie",2)
r(m=M.dy.prototype,"gar",0,0,null,["$1","$0"],["aA","fc"],1,0)
q(m,"gh9","ha",10)
q(m,"ghb","hc",10)
r(m=O.dK.prototype,"gfe",0,0,null,["$1","$0"],["ab","ff"],1,0)
r(m,"ghX",0,0,null,["$1","$0"],["dk","hY"],1,0)
q(m,"gh1","h2",29)
q(m,"gh3","h4",29)
r(X.dT.prototype,"gcT",0,0,null,["$1","$0"],["aL","fi"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.kS,J.a,J.au,P.ex,P.i,H.cA,P.b2,H.bZ,H.cX,H.fy,H.iC,P.bB,H.cq,H.eP,P.ad,H.hd,H.hf,H.h8,P.eV,P.be,P.aI,P.eh,P.ij,P.cL,P.ik,P.b9,P.am,P.k6,P.jL,P.c9,P.ew,P.z,P.jZ,P.hl,P.bW,P.h3,P.k4,P.k3,P.T,P.ay,P.ab,P.b1,P.hN,P.e_,P.ep,P.fY,P.bC,P.b,P.F,P.M,P.aw,P.e,P.ag,P.ca,P.iS,P.jO,W.fB,W.bP,W.E,W.dR,W.eK,W.jU,W.dA,W.aA,W.jK,W.f1,P.jQ,P.jF,P.S,O.a6,O.cB,E.fs,E.an,E.hW,E.e6,Z.eg,Z.jd,Z.dp,Z.bD,Z.bc,D.fv,D.bY,D.B,X.dq,X.dE,X.ha,X.hi,X.bF,X.hB,X.iy,X.ed,D.dv,D.a8,D.dU,D.bL,D.e3,D.e4,D.e5,V.a2,V.aM,V.fP,V.dM,V.ao,V.aa,V.a3,V.b7,V.dX,V.a5,V.K,U.ee,M.dy,A.dl,A.fl,A.hs,A.cQ,A.cU,A.cS,A.cV,A.cT,A.cW,A.bX,A.e9,A.iM,F.a9,F.fS,F.bl,F.hc,F.bI,F.dZ,F.i4,F.i5,F.i6,F.ah,F.j1,F.j2,F.j5,F.j7,F.j8,F.j9,O.bM,O.dL,V.bg,V.az,V.dJ,V.hV,V.i3,V.cK,V.e7,V.cO,V.iw,X.dr,X.e1,X.dT,V.bz,V.hT,V.i7])
s(J.a,[J.h6,J.dC,J.dD,J.aO,J.bE,J.bj,H.cD,H.bH,W.j,W.fh,W.bU,W.b_,W.b0,W.X,W.ej,W.fG,W.fH,W.el,W.dx,W.en,W.fJ,W.o,W.eq,W.aN,W.h1,W.es,W.cy,W.dH,W.hv,W.ey,W.ez,W.aQ,W.eA,W.eD,W.aR,W.eH,W.eJ,W.aT,W.eL,W.aU,W.eQ,W.aF,W.eT,W.iv,W.aW,W.eW,W.iA,W.iX,W.f2,W.f4,W.f6,W.f8,W.fa,P.b4,P.eu,P.b6,P.eF,P.hS,P.eR,P.ba,P.eY,P.fm,P.ei,P.dm,P.dV,P.c7,P.dY,P.ea,P.eN])
s(J.dD,[J.hO,J.bO,J.bk])
t(J.kR,J.aO)
s(J.bE,[J.dB,J.h7])
t(P.hh,P.ex)
s(P.hh,[H.eb,W.jl,W.ar,P.fU])
t(H.v,H.eb)
s(P.i,[H.fM,H.hm,H.cZ])
s(H.fM,[H.c2,H.he])
s(P.b2,[H.hn,H.je])
t(H.ho,H.c2)
t(H.fz,H.fy)
s(P.bB,[H.hK,H.h9,H.iQ,H.iE,H.fu,H.i1,P.fk,P.dS,P.aL,P.iR,P.iO,P.c8,P.fx,P.fE])
s(H.cq,[H.kH,H.ir,H.ko,H.kp,H.kq,P.jh,P.jg,P.ji,P.jj,P.jY,P.jX,P.js,P.jw,P.jt,P.ju,P.jv,P.jz,P.jA,P.jy,P.jx,P.il,P.im,P.ke,P.jI,P.jH,P.jJ,P.hg,P.hk,P.fK,P.fL,P.iW,P.iT,P.iU,P.iV,P.k_,P.k0,P.k2,P.k1,P.ka,P.k9,P.kb,P.kc,W.fN,W.hx,W.hz,W.i0,W.ii,W.jr,W.hI,W.hH,W.jM,W.jN,W.jW,W.k5,P.jS,P.kg,P.fV,P.fW,P.fo,E.hX,E.hY,E.hZ,E.iu,D.fQ,D.fR,F.k7,F.kh,F.kj,F.kk,F.kl,F.kE,F.kF,F.kG,F.ks,F.ki,F.jb,F.ja,F.j3,F.j4,V.kD,V.hU,V.i9,V.i8,V.ia,N.ku,N.kv,N.kw,N.kx,N.ky,N.kz,N.kA])
s(H.ir,[H.ig,H.co])
t(H.jf,P.fk)
t(P.hj,P.ad)
s(P.hj,[H.aP,W.jk])
t(H.dO,H.bH)
s(H.dO,[H.d3,H.d5])
t(H.d4,H.d3)
t(H.cE,H.d4)
t(H.d6,H.d5)
t(H.dP,H.d6)
s(H.dP,[H.hC,H.hD,H.hE,H.hF,H.hG,H.dQ,H.cF])
t(P.jG,P.k6)
t(P.jE,P.jL)
t(P.f_,P.hl)
t(P.ec,P.f_)
s(P.bW,[P.fq,P.fO])
t(P.bA,P.ik)
s(P.bA,[P.fr,P.h2,P.j_,P.iZ])
t(P.iY,P.fO)
s(P.ab,[P.r,P.p])
s(P.aL,[P.c6,P.h4])
t(P.jn,P.ca)
s(W.j,[W.C,W.fT,W.cC,W.aS,W.d7,W.aV,W.aG,W.d9,W.jc,W.d_,P.fp,P.bT])
s(W.C,[W.U,W.by,W.d0])
s(W.U,[W.x,P.q])
s(W.x,[W.dk,W.fi,W.cn,W.bx,W.bV,W.aD,W.fX,W.cz,W.i2,W.b8,W.e0,W.ip,W.iq,W.cN])
s(W.b_,[W.cr,W.fC,W.fD])
t(W.fA,W.b0)
t(W.cs,W.ej)
t(W.em,W.el)
t(W.dw,W.em)
t(W.eo,W.en)
t(W.fI,W.eo)
t(W.aE,W.bU)
t(W.er,W.eq)
t(W.cv,W.er)
t(W.et,W.es)
t(W.c_,W.et)
t(W.bN,W.o)
s(W.bN,[W.b3,W.ae,W.aX])
t(W.hw,W.ey)
t(W.hy,W.ez)
t(W.eB,W.eA)
t(W.hA,W.eB)
t(W.eE,W.eD)
t(W.cG,W.eE)
t(W.eI,W.eH)
t(W.hQ,W.eI)
t(W.i_,W.eJ)
t(W.d8,W.d7)
t(W.ic,W.d8)
t(W.eM,W.eL)
t(W.id,W.eM)
t(W.ih,W.eQ)
t(W.eU,W.eT)
t(W.is,W.eU)
t(W.da,W.d9)
t(W.it,W.da)
t(W.eX,W.eW)
t(W.iz,W.eX)
t(W.bd,W.ae)
t(W.f3,W.f2)
t(W.jm,W.f3)
t(W.ek,W.dx)
t(W.f5,W.f4)
t(W.jB,W.f5)
t(W.f7,W.f6)
t(W.eC,W.f7)
t(W.f9,W.f8)
t(W.jP,W.f9)
t(W.fb,W.fa)
t(W.jT,W.fb)
t(W.jo,W.jk)
t(W.jp,P.ij)
t(W.l2,W.jp)
t(W.jq,P.cL)
t(W.jV,W.eK)
t(P.jR,P.jQ)
t(P.al,P.jF)
t(P.ev,P.eu)
t(P.hb,P.ev)
t(P.eG,P.eF)
t(P.hL,P.eG)
t(P.cI,P.q)
t(P.eS,P.eR)
t(P.io,P.eS)
t(P.eZ,P.eY)
t(P.iB,P.eZ)
t(P.fn,P.ei)
t(P.hM,P.bT)
t(P.eO,P.eN)
t(P.ie,P.eO)
s(E.fs,[Z.dn,A.cJ,T.e2])
s(D.B,[D.c0,D.c1,D.R,X.hR])
s(X.hR,[X.dI,X.bG,X.e8])
s(O.a6,[D.dF,U.cx])
s(D.fv,[U.fw,U.ak])
t(U.ds,U.ak)
t(A.hp,A.cJ)
s(A.e9,[A.P,A.iI,A.iJ,A.iL,A.iG,A.a4,A.iH,A.N,A.iK,A.iN,A.cR,A.aB,A.ap,A.aq])
t(F.ib,F.fS)
t(F.iF,F.hc)
t(F.j6,F.j7)
t(F.hJ,F.j8)
t(O.dK,O.bM)
s(O.dL,[O.hq,O.hr,O.b5])
s(O.b5,[O.ht,O.hu])
s(V.dJ,[V.av,V.cP])
t(X.fZ,X.e1)
s(V.bz,[V.fF,V.h_,V.h0,V.hP])
u(H.eb,H.cX)
u(H.d3,P.z)
u(H.d4,H.bZ)
u(H.d5,P.z)
u(H.d6,H.bZ)
u(P.ex,P.z)
u(P.f_,P.jZ)
u(W.ej,W.fB)
u(W.el,P.z)
u(W.em,W.E)
u(W.en,P.z)
u(W.eo,W.E)
u(W.eq,P.z)
u(W.er,W.E)
u(W.es,P.z)
u(W.et,W.E)
u(W.ey,P.ad)
u(W.ez,P.ad)
u(W.eA,P.z)
u(W.eB,W.E)
u(W.eD,P.z)
u(W.eE,W.E)
u(W.eH,P.z)
u(W.eI,W.E)
u(W.eJ,P.ad)
u(W.d7,P.z)
u(W.d8,W.E)
u(W.eL,P.z)
u(W.eM,W.E)
u(W.eQ,P.ad)
u(W.eT,P.z)
u(W.eU,W.E)
u(W.d9,P.z)
u(W.da,W.E)
u(W.eW,P.z)
u(W.eX,W.E)
u(W.f2,P.z)
u(W.f3,W.E)
u(W.f4,P.z)
u(W.f5,W.E)
u(W.f6,P.z)
u(W.f7,W.E)
u(W.f8,P.z)
u(W.f9,W.E)
u(W.fa,P.z)
u(W.fb,W.E)
u(P.eu,P.z)
u(P.ev,W.E)
u(P.eF,P.z)
u(P.eG,W.E)
u(P.eR,P.z)
u(P.eS,W.E)
u(P.eY,P.z)
u(P.eZ,W.E)
u(P.ei,P.ad)
u(P.eN,P.z)
u(P.eO,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bx.prototype
C.r=W.bV.prototype
C.S=W.aD.prototype
C.V=J.a.prototype
C.a=J.aO.prototype
C.f=J.dB.prototype
C.m=J.dC.prototype
C.e=J.bE.prototype
C.b=J.bj.prototype
C.W=J.bk.prototype
C.a1=W.cG.prototype
C.F=J.hO.prototype
C.c=P.c7.prototype
C.a2=W.b8.prototype
C.G=W.e0.prototype
C.w=J.bO.prototype
C.H=W.bd.prototype
C.I=W.d_.prototype
C.a3=new P.fr()
C.J=new P.fq()
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

C.Q=new P.hN()
C.l=new P.iY()
C.R=new P.j_()
C.k=new P.jG()
C.d=new A.bX(0,"ColorSourceType.None")
C.j=new A.bX(1,"ColorSourceType.Solid")
C.h=new A.bX(2,"ColorSourceType.Texture2D")
C.i=new A.bX(3,"ColorSourceType.TextureCube")
C.t=new P.b1(0)
C.T=new P.b1(5e6)
C.U=new P.h3("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.n=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.X=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.o=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.p=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Y=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.B=H.d(u([]),[P.e])
C.Z=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a_=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.u=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.v=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a0=new H.fz(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",r:"double",ab:"num",e:"String",T:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[D.B]},{func:1,ret:P.M,args:[F.a9]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.r},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:V.a3,args:[P.r]},{func:1,ret:P.T,args:[W.U,P.e,P.e,W.bP]},{func:1,ret:P.T,args:[W.C]},{func:1,ret:P.M,args:[W.o]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.T,args:[W.aA]},{func:1,ret:P.T,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.M,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,V.ao]]},{func:1,ret:-1,args:[P.p,[P.i,U.ak]]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:W.U,args:[W.C]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[,,]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.S,args:[P.p]},{func:1,ret:P.T,args:[[P.i,D.a8]]},{func:1,ret:P.M,args:[P.e,,]},{func:1,ret:P.M,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:[P.F,P.e,P.e],args:[[P.F,P.e,P.e],P.e]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.aw]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.M,args:[P.b9]},{func:1,args:[P.e]},{func:1,ret:P.T,args:[V.bz]},{func:1,args:[,P.e]},{func:1,ret:P.M,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aZ=0
$.cp=null
$.lv=null
$.l6=!1
$.mB=null
$.mu=null
$.mH=null
$.km=null
$.kr=null
$.lh=null
$.cc=null
$.de=null
$.df=null
$.l7=!1
$.a0=C.k
$.ax=[]
$.bi=null
$.kM=null
$.lC=null
$.lB=null
$.d2=P.kU(P.e,P.bC)
$.lK=null
$.lO=null
$.bK=null
$.lT=null
$.m5=null
$.m9=null
$.m7=null
$.m8=null
$.j0=null
$.m6=null
$.lN=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pf","mM",function(){return H.mA("_$dart_dartClosure")})
u($,"pg","lm",function(){return H.mA("_$dart_js")})
u($,"pm","mN",function(){return H.bb(H.iD({
toString:function(){return"$receiver$"}}))})
u($,"pn","mO",function(){return H.bb(H.iD({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"po","mP",function(){return H.bb(H.iD(null))})
u($,"pp","mQ",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ps","mT",function(){return H.bb(H.iD(void 0))})
u($,"pt","mU",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pr","mS",function(){return H.bb(H.m_(null))})
u($,"pq","mR",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pv","mW",function(){return H.bb(H.m_(void 0))})
u($,"pu","mV",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pL","ln",function(){return P.o5()})
u($,"px","mX",function(){return P.o2()})
u($,"pM","n0",function(){return H.nE(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pO","n2",function(){return P.nS("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pP","n3",function(){return P.ou()})
u($,"pN","n1",function(){return P.lE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pE","n_",function(){return Z.aH(0)})
u($,"py","mY",function(){return Z.aH(511)})
u($,"pG","bt",function(){return Z.aH(1)})
u($,"pF","bs",function(){return Z.aH(2)})
u($,"pA","br",function(){return Z.aH(4)})
u($,"pH","bu",function(){return Z.aH(8)})
u($,"pI","bv",function(){return Z.aH(16)})
u($,"pB","dh",function(){return Z.aH(32)})
u($,"pC","di",function(){return Z.aH(64)})
u($,"pD","mZ",function(){return Z.aH(96)})
u($,"pJ","cm",function(){return Z.aH(128)})
u($,"pz","bq",function(){return Z.aH(256)})
u($,"pe","mL",function(){return new V.fP(1e-9)})
u($,"pd","O",function(){return $.mL()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cD,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hC,Int32Array:H.hD,Int8Array:H.hE,Uint16Array:H.hF,Uint32Array:H.hG,Uint8ClampedArray:H.dQ,CanvasPixelArray:H.dQ,Uint8Array:H.cF,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLImageElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fh,HTMLAnchorElement:W.dk,HTMLAreaElement:W.fi,HTMLBaseElement:W.cn,Blob:W.bU,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bV,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cr,CSSUnitValue:W.cr,CSSPerspective:W.fA,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fC,CSSUnparsedValue:W.fD,DataTransferItemList:W.fG,HTMLDivElement:W.aD,DOMException:W.fH,ClientRectList:W.dw,DOMRectList:W.dw,DOMRectReadOnly:W.dx,DOMStringList:W.fI,DOMTokenList:W.fJ,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aE,FileList:W.cv,FileWriter:W.fT,HTMLFormElement:W.fX,Gamepad:W.aN,History:W.h1,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.cy,HTMLInputElement:W.cz,KeyboardEvent:W.b3,Location:W.dH,MediaList:W.hv,MessagePort:W.cC,MIDIInputMap:W.hw,MIDIOutputMap:W.hy,MimeType:W.aQ,MimeTypeArray:W.hA,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.aR,PluginArray:W.hQ,RTCStatsReport:W.i_,HTMLSelectElement:W.i2,SourceBuffer:W.aS,SourceBufferList:W.ic,SpeechGrammar:W.aT,SpeechGrammarList:W.id,SpeechRecognitionResult:W.aU,Storage:W.ih,CSSStyleSheet:W.aF,StyleSheet:W.aF,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.e0,HTMLTableRowElement:W.ip,HTMLTableSectionElement:W.iq,HTMLTemplateElement:W.cN,TextTrack:W.aV,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.is,TextTrackList:W.it,TimeRanges:W.iv,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iz,TrackDefaultList:W.iA,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.iX,VideoTrackList:W.jc,WheelEvent:W.bd,Window:W.d_,DOMWindow:W.d_,Attr:W.d0,CSSRuleList:W.jm,ClientRect:W.ek,DOMRect:W.ek,GamepadList:W.jB,NamedNodeMap:W.eC,MozNamedAttrMap:W.eC,SpeechRecognitionResultList:W.jP,StyleSheetList:W.jT,SVGLength:P.b4,SVGLengthList:P.hb,SVGNumber:P.b6,SVGNumberList:P.hL,SVGPointList:P.hS,SVGScriptElement:P.cI,SVGStringList:P.io,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.ba,SVGTransformList:P.iB,AudioBuffer:P.fm,AudioParamMap:P.fn,AudioTrackList:P.fp,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hM,WebGLBuffer:P.dm,WebGLProgram:P.dV,WebGL2RenderingContext:P.c7,WebGLShader:P.dY,WebGLUniformLocation:P.ea,SQLResultSetRowList:P.ie})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
W.d7.$nativeSuperclassTag="EventTarget"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mE,[])
else N.mE([])})})()
//# sourceMappingURL=test.dart.js.map
