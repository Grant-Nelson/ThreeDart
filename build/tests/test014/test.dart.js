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
a[c]=function(){a[c]=function(){H.pH(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lI(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ln:function ln(){},
kD:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hl:function(){return new P.cb("No element")},
o_:function(){return new P.cb("Too many elements")},
nZ:function(){return new P.cb("Too few elements")},
w:function w(a){this.a=a},
h0:function h0(){},
c4:function c4(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hC:function hC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(){},
d6:function d6(){},
en:function en(){},
nR:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
co:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
po:function(a){return v.types[H.aj(a)]},
pv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
cO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oj:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.I(s,q)|32)>t)return}return parseInt(a,b)},
c7:function(a){return H.oa(a)+H.lE(H.bV(a),0,null)},
oa:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibR){r=C.y(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.I(t,0)===36?C.b.aw(t,1):t)},
ob:function(){if(!!self.location)return self.location.href
return},
mi:function(a){var u,t,s,r,q
H.kJ(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ok:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aZ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aG(s))}return H.mi(r)},
mj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.ok(a)}return H.mi(a)},
ol:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c8:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oi:function(a){var u=H.c6(a).getFullYear()+0
return u},
og:function(a){var u=H.c6(a).getMonth()+1
return u},
oc:function(a){var u=H.c6(a).getDate()+0
return u},
od:function(a){var u=H.c6(a).getHours()+0
return u},
of:function(a){var u=H.c6(a).getMinutes()+0
return u},
oh:function(a){var u=H.c6(a).getSeconds()+0
return u},
oe:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
D:function(a){throw H.c(H.aG(a))},
h:function(a,b){if(a==null)J.aH(a)
throw H.c(H.ci(a,b))},
ci:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.aj(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.a2(b,a,s,null,u)
return P.e5(b,s)},
pg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c9(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
aG:function(a){return new P.aP(!0,a,null,null)},
pc:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.e1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nf})
u.name=""}else u.toString=H.nf
return u},
nf:function(){return J.at(this.dartException)},
v:function(a){throw H.c(a)},
F:function(a){throw H.c(P.bm(a))},
bg:function(a){var u,t,s,r,q,p
a=H.nd(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mt:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mc:function(a,b){return new H.hY(a,b==null?null:b.method)},
lo:function(a,b){var u=b==null,t=u?null:b.method
return new H.ho(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aZ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lo(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mc(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nj()
q=$.nk()
p=$.nl()
o=$.nm()
n=$.np()
m=$.nq()
l=$.no()
$.nn()
k=$.ns()
j=$.nr()
i=r.ao(u)
if(i!=null)return f.$1(H.lo(H.K(u),i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.lo(H.K(u),i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mc(H.K(u),i))}}return f.$1(new H.j6(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ec()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ec()
return a},
cm:function(a){var u
if(a==null)return new H.f3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f3(a)},
pk:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pu:function(a,b,c,d,e,f){H.e(a,"$ibI")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.x("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pu)
a.$identity=u
return u},
nQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iw().constructor.prototype):Object.create(new H.cr(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m1(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.po,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m0:H.le
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m1(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nN:function(a,b,c,d){var u=H.le
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nN(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
return new Function(r+H.m(q==null?$.cs=H.fI("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
return new Function(r+H.m(q==null?$.cs=H.fI("self"):q)+"."+H.m(u)+"("+o+");}")()},
nO:function(a,b,c,d){var u=H.le,t=H.m0
switch(b?-1:a){case 0:throw H.c(H.op("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nP:function(a,b){var u,t,s,r,q,p,o,n=$.cs
if(n==null)n=$.cs=H.fI("self")
u=$.m_
if(u==null)u=$.m_=H.fI("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nO(s,!q,t,b)
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
lI:function(a,b,c,d,e,f,g){return H.nQ(a,b,H.aj(c),d,!!e,!!f,g)},
le:function(a){return a.a},
m0:function(a){return a.c},
fI:function(a){var u,t,s,r=new H.cr("self","target","receiver","name"),q=J.ll(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.p8("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
ph:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
nb:function(a,b){throw H.c(H.b0(a,H.co(H.K(b).substring(2))))},
pC:function(a,b){throw H.c(H.nM(a,H.co(H.K(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.nb(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pC(a,b)},
kJ:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
n8:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.nb(a,b)},
n4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fs:function(a,b){var u
if(typeof a=="function")return!0
u=H.n4(J.V(a))
if(u==null)return!1
return H.mQ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lB)return a
$.lB=!0
try{if(H.fs(a,b))return a
u=H.l6(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lB=!1}},
lK:function(a,b){if(a!=null&&!H.lH(a,b))H.v(H.b0(a,H.l6(b)))
return a},
b0:function(a,b){return new H.iV("TypeError: "+P.dI(a)+": type '"+H.mW(a)+"' is not a subtype of type '"+b+"'")},
nM:function(a,b){return new H.fJ("CastError: "+P.dI(a)+": type '"+H.mW(a)+"' is not a subtype of type '"+b+"'")},
mW:function(a){var u,t=J.V(a)
if(!!t.$icv){u=H.n4(t)
if(u!=null)return H.l6(u)
return"Closure"}return H.c7(a)},
p8:function(a){throw H.c(new H.jv(a))},
pH:function(a){throw H.c(new P.fT(H.K(a)))},
op:function(a){return new H.ig(a)},
n5:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
qp:function(a,b,c){return H.cn(a["$a"+H.m(c)],H.bV(b))},
bU:function(a,b,c,d){var u
H.K(c)
H.aj(d)
u=H.cn(a["$a"+H.m(c)],H.bV(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.K(b)
H.aj(c)
u=H.cn(a["$a"+H.m(b)],H.bV(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.aj(b)
u=H.bV(a)
return u==null?null:u[b]},
l6:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.k(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lE(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.p1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.S)p+=" extends "+H.bT(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bT(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bT(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pj(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bT(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lE:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ai("")
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
lG:function(a,b,c,d){var u,t
H.K(b)
H.kJ(c)
H.K(d)
if(a==null)return!1
u=H.bV(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mZ(H.cn(t[d],u),null,c,null)},
k:function(a,b,c,d){H.K(b)
H.kJ(c)
H.K(d)
if(a==null)return a
if(H.lG(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lE(c,0,null),v.mangledGlobalNames)))},
mZ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qn:function(a,b,c){return a.apply(b,H.cn(J.V(b)["$a"+H.m(c)],H.bV(b)))},
n7:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="N"||a===-1||a===-2||H.n7(u)}return!1},
lH:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="N"||b===-1||b===-2||H.n7(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lH(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fs(a,b)}u=J.V(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lH(a,b))throw H.c(H.b0(a,H.l6(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mQ(a,b,c,d)
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
return H.mZ(H.cn(m,u),b,p,d)},
mQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pz(h,b,g,d)},
pz:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qo:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
px:function(a){var u,t,s,r,q=H.K($.n6.$1(a)),p=$.kC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.mY.$2(a,q))
if(q!=null){p=$.kC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l5(u)
$.kC[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kH[q]=u
return u}if(s==="-"){r=H.l5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.na(a,u)
if(s==="*")throw H.c(P.j5(q))
if(v.leafTags[q]===true){r=H.l5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.na(a,u)},
na:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l5:function(a){return J.lM(a,!1,null,!!a.$iM)},
py:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l5(u)
else return J.lM(u,c,null,null)},
ps:function(){if(!0===$.lL)return
$.lL=!0
H.pt()},
pt:function(){var u,t,s,r,q,p,o,n
$.kC=Object.create(null)
$.kH=Object.create(null)
H.pr()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nc.$1(q)
if(p!=null){o=H.py(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pr:function(){var u,t,s,r,q,p,o=C.K()
o=H.cg(C.L,H.cg(C.M,H.cg(C.z,H.cg(C.z,H.cg(C.N,H.cg(C.O,H.cg(C.P(C.y),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n6=new H.kE(r)
$.mY=new H.kF(q)
$.nc=new H.kG(p)},
cg:function(a,b){return a(b)||b},
o1:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pi:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nd:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lP:function(a,b,c){var u=H.pG(a,b,c)
return u},
pG:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nd(b),'g'),H.pi(c))},
fN:function fN(){},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
lb:function lb(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cv:function cv(){},
iG:function iG(){},
iw:function iw(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
fJ:function fJ(a){this.a=a},
ig:function ig(a){this.a=a},
jv:function jv(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ht:function ht(a,b){this.a=a
this.$ti=b},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
o9:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ci(b,a))},
p_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pg(a,b,c))
return b},
cJ:function cJ(){},
bN:function bN(){},
dY:function dY(){},
cK:function cK(){},
dZ:function dZ(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
e_:function e_(){},
cL:function cL(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
pj:function(a){return J.m7(a?Object.keys(a):[],null)},
pB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fu:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lL==null){H.ps()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j5("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lR()]
if(r!=null)return r
r=H.px(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.lR(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
o0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ld(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.m7(new Array(a),b)},
m7:function(a,b){return J.ll(H.d(a,[b]))},
ll:function(a){H.kJ(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dL.prototype
return J.dK.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dM.prototype
if(typeof a=="boolean")return J.hm.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fu(a)},
pl:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fu(a)},
ck:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fu(a)},
ft:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fu(a)},
pm:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
pn:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
dr:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bR.prototype
return a},
cl:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.S)return a
return J.fu(a)},
nB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pl(a).p(a,b)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).C(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pn(a).A(a,b)},
nC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pm(a).v(a,b)},
lU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ck(a).j(a,b)},
lc:function(a,b,c){return J.ft(a).n(a,b,c)},
nD:function(a,b){return J.dr(a).I(a,b)},
nE:function(a,b,c){return J.cl(a).ih(a,b,c)},
nF:function(a,b,c,d){return J.cl(a).j9(a,b,c,d)},
nG:function(a,b){return J.dr(a).a3(a,b)},
fw:function(a,b){return J.ft(a).M(a,b)},
nH:function(a,b,c,d){return J.cl(a).jx(a,b,c,d)},
lV:function(a,b){return J.ft(a).O(a,b)},
nI:function(a){return J.cl(a).gjg(a)},
lW:function(a){return J.cl(a).gcK(a)},
du:function(a){return J.V(a).gK(a)},
bB:function(a){return J.ft(a).gW(a)},
aH:function(a){return J.ck(a).gl(a)},
lX:function(a){return J.ft(a).k5(a)},
nJ:function(a,b){return J.cl(a).k8(a,b)},
nK:function(a,b,c){return J.dr(a).E(a,b,c)},
nL:function(a){return J.dr(a).ki(a)},
at:function(a){return J.V(a).i(a)},
a:function a(){},
hm:function hm(){},
dM:function dM(){},
dN:function dN(){},
i1:function i1(){},
bR:function bR(){},
bq:function bq(){},
aR:function aR(a){this.$ti=a},
lm:function lm(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bM:function bM(){},
dL:function dL(){},
dK:function dK(){},
bp:function bp(){}},P={
oC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.p9()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ch(new P.jx(s),1)).observe(u,{childList:true})
return new P.jw(s,u,t)}else if(self.setImmediate!=null)return P.pa()
return P.pb()},
oD:function(a){self.scheduleImmediate(H.ch(new P.jy(H.n(a,{func:1,ret:-1})),0))},
oE:function(a){self.setImmediate(H.ch(new P.jz(H.n(a,{func:1,ret:-1})),0))},
oF:function(a){P.ls(C.t,H.n(a,{func:1,ret:-1}))},
ls:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.ab(a.a,1000)
return P.oL(u<0?0:u,b)},
ms:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.f.ab(a.a,1000)
return P.oM(u<0?0:u,b)},
oL:function(a,b){var u=new P.f9()
u.fF(a,b)
return u},
oM:function(a,b){var u=new P.f9()
u.fG(a,b)
return u},
oG:function(a,b){var u,t,s
b.a=1
try{a.f2(new P.jJ(b),new P.jK(b),null)}catch(s){u=H.ak(s)
t=H.cm(s)
P.pD(new P.jL(b,u,t))}},
mF:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaN")
if(u>=4){t=b.cq()
b.a=a.a
b.c=a.c
P.db(b,t)}else{t=H.e(b.c,"$ibj")
b.a=2
b.c=a
a.dX(t)}},
db:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iao")
g=g.b
r=s.a
q=s.b
g.toString
P.kt(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
if(m){H.e(o,"$iao")
g=g.b
r=o.a
q=o.b
g.toString
P.kt(i,i,g,r,q)
return}l=$.a5
if(l!=n)$.a5=n
else l=i
g=b.c
if(g===8)new P.jP(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jO(u,b,o).$0()}else if((g&2)!==0)new P.jN(h,u,b).$0()
if(l!=null)$.a5=l
g=u.b
if(!!J.V(g).$icB){if(g.a>=4){k=H.e(q.c,"$ibj")
q.c=null
b=q.bu(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mF(g,q)
return}}j=b.b
k=H.e(j.c,"$ibj")
j.c=null
b=j.bu(k)
g=u.a
r=u.b
if(!g){H.C(r,H.t(j,0))
j.a=4
j.c=r}else{H.e(r,"$iao")
j.a=8
j.c=r}h.a=j
g=j}},
p4:function(a,b){if(H.fs(a,{func:1,args:[P.S,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.S,P.ay]})
if(H.fs(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.ld(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p3:function(){var u,t
for(;u=$.cf,u!=null;){$.dq=null
t=u.b
$.cf=t
if(t==null)$.dp=null
u.a.$0()}},
p7:function(){$.lC=!0
try{P.p3()}finally{$.dq=null
$.lC=!1
if($.cf!=null)$.lS().$1(P.n_())}},
mV:function(a){var u=new P.ew(H.n(a,{func:1,ret:-1}))
if($.cf==null){$.cf=$.dp=u
if(!$.lC)$.lS().$1(P.n_())}else $.dp=$.dp.b=u},
p6:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cf
if(u==null){P.mV(a)
$.dq=$.dp
return}t=new P.ew(a)
s=$.dq
if(s==null){t.b=u
$.cf=$.dq=t}else{t.b=s.b
$.dq=s.b=t
if(t.b==null)$.dp=t}},
pD:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a5
if(C.k===u){P.kv(t,t,C.k,a)
return}u.toString
P.kv(t,t,u,H.n(u.cF(a),s))},
mr:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a5
if(u===C.k){u.toString
return P.ls(a,b)}return P.ls(a,H.n(u.cF(b),t))},
ot:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a5
if(u===C.k){u.toString
return P.ms(a,b)}t=u.eb(b,P.be)
$.a5.toString
return P.ms(a,H.n(t,s))},
kt:function(a,b,c,d,e){var u={}
u.a=d
P.p6(new P.ku(u,e))},
mR:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a5
if(t===c)return d.$0()
$.a5=c
u=t
try{t=d.$0()
return t}finally{$.a5=u}},
mS:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a5
if(t===c)return d.$1(e)
$.a5=c
u=t
try{t=d.$1(e)
return t}finally{$.a5=u}},
p5:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a5
if(t===c)return d.$2(e,f)
$.a5=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a5=u}},
kv:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cF(d):c.jh(d,-1)
P.mV(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
f9:function f9(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
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
ew:function ew(a){this.a=a
this.b=null},
iz:function iz(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
cS:function cS(){},
iA:function iA(){},
be:function be(){},
ao:function ao(a,b){this.a=a
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
o3:function(a,b){return new H.aS([a,b])},
lp:function(a,b){return new H.aS([a,b])},
o5:function(a){return H.pk(a,new H.aS([null,null]))},
dQ:function(a){return new P.jU([a])},
ly:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oK:function(a,b,c){var u=new P.eL(a,b,[c])
u.c=a.e
return u},
nY:function(a,b,c){var u,t
if(P.lD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aA,a)
try{P.p2(a,u)}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=P.mp(b,H.n8(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lk:function(a,b,c){var u,t
if(P.lD(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.aA,a)
try{t=u
t.a=P.mp(t.a,a,", ")}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lD:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
p2:function(a,b){var u,t,s,r,q,p,o,n,m,l
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
o4:function(a,b,c){var u=P.o3(b,c)
a.O(0,new P.hv(u,b,c))
return u},
m8:function(a,b){var u,t,s=P.dQ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t)s.h(0,H.C(a[t],b))
return s},
lq:function(a){var u,t={}
if(P.lD(a))return"{...}"
u=new P.ai("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.lV(a,new P.hz(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.h($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jU:function jU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cc:function cc(a){this.a=a
this.c=this.b=null},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(){},
A:function A(){},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
ae:function ae(){},
ke:function ke(){},
hA:function hA(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
k0:function k0(){},
eM:function eM(){},
ff:function ff(){},
ox:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oy(!1,b,c,d)
return},
oy:function(a,b,c,d){var u,t,s=$.nt()
if(s==null)return
u=0===c
if(u&&!0)return P.lv(s,b)
t=b.length
d=P.bu(c,d,t)
if(u&&d===t)return P.lv(s,b)
return P.lv(s,b.subarray(c,d))},
lv:function(a,b){if(P.oA(b))return
return P.oB(a,b)},
oB:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oA:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oz:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mU:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.ck(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c_()
if((s&127)!==s)return t-b}return c-b},
lZ:function(a,b,c,d,e,f){if(C.f.bn(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fF:function fF(){},
fG:function fG(){},
c_:function c_(){},
bF:function bF(){},
h2:function h2(){},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hh:function hh(a){this.a=a},
je:function je(){},
jg:function jg(){},
kk:function kk(a){this.b=0
this.c=a},
jf:function jf(a){this.a=a},
kj:function kj(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fv:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.f]})
u=H.oj(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
nW:function(a){if(a instanceof H.cv)return a.i(0)
return"Instance of '"+H.c7(a)+"'"},
o6:function(a,b,c){var u,t
H.C(b,c)
u=J.o0(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
m9:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bB(a);u.F();)C.a.h(s,H.C(u.gL(u),c))
if(b)return s
return H.k(J.ll(s),"$ib",t,"$ab")},
cT:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bu(b,c,u)
return H.mj(b>0||c<u?C.a.fe(a,b,c):a)}if(!!J.V(a).$icL)return H.ol(a,b,P.bu(b,c,a.length))
return P.or(a,b,c)},
or:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.ah(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aH(a),q,q))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.F();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gL(t))}return H.mj(r)},
on:function(a){return new H.hn(a,H.o1(a,!1,!0,!1))},
mp:function(a,b,c){var u=J.bB(b)
if(!u.F())return a
if(c.length===0){do a+=H.m(u.gL(u))
while(u.F())}else{a+=H.m(u.gL(u))
for(;u.F();)a=a+c+H.m(u.gL(u))}return a},
mv:function(){var u=H.ob()
if(u!=null)return P.ow(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nz().b
if(typeof b!=="string")H.v(H.aG(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.an(c,"c_",0))
t=c.gjw().cL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c8(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nS:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
m3:function(a,b){return new P.b5(1e6*b+1000*a)},
dI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nW(a)},
dw:function(a){return new P.aP(!1,null,null,a)},
ld:function(a,b,c){return new P.aP(!0,a,b,c)},
e5:function(a,b){return new P.c9(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
lr:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
a2:function(a,b,c,d,e){var u=H.aj(e==null?J.aH(b):e)
return new P.hk(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j7(a)},
j5:function(a){return new P.j4(a)},
mo:function(a){return new P.cb(a)},
bm:function(a){return new P.fM(a)},
x:function(a){return new P.eE(a)},
a8:function(a,b,c){return new P.hc(a,b,c)},
o7:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lO:function(a){H.pB(a)},
ow:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.I(a,4)^58)*3|C.b.I(a,0)^100|C.b.I(a,1)^97|C.b.I(a,2)^116|C.b.I(a,3)^97)>>>0
if(u===0)return P.mu(e<e?C.b.E(a,0,e):a,5,f).gf7()
else if(u===32)return P.mu(C.b.E(a,5,e),0,f).gf7()}t=new Array(8)
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
if(P.mT(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ko()
if(r>=0)if(P.mT(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Z()
if(typeof n!=="number")return H.D(n)
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
u=2}a=i+C.b.E(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ak(a,"http",0)){if(t&&p+3===o&&C.b.ak(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ak(a,"https",0)){if(t&&p+4===o&&C.b.ak(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.E(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k3(a,r,q,p,o,n,m,k)}return P.oN(a,0,e,r,q,p,o,n,m,k)},
mx:function(a){var u=P.f
return C.a.jB(H.d(a.split("&"),[u]),P.lp(u,u),new P.jc(C.l),[P.I,P.f,P.f])},
ov:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j9(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a3(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fv(C.b.E(a,s,t),n,n)
if(typeof p!=="number")return p.fb()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fv(C.b.E(a,s,c),n,n)
if(typeof p!=="number")return p.fb()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ja(a)
t=new P.jb(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a3(a,r)
if(n===58){if(r===b){++r
if(C.b.a3(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaB(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ov(a,q,c)
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
oN:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oU(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oV(a,u,e-1):""
s=P.oR(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oT(P.fv(C.b.E(a,r,g),new P.kf(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lz(a,h+1,i,n):n
return new P.cd(j,t,s,q,p,o,i<c?P.oQ(a,i+1,c):n)},
mJ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a8(c,a,b))},
oT:function(a,b){if(a!=null&&a===P.mJ(b))return
return a},
oR:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a3(a,b)===91){if(typeof c!=="number")return c.v()
u=c-1
if(C.b.a3(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.mw(a,b+1,u)
return C.b.E(a,b,c).toLowerCase()}if(typeof c!=="number")return H.D(c)
t=b
for(;t<c;++t)if(C.b.a3(a,t)===58){P.mw(a,b,c)
return"["+a+"]"}return P.oX(a,b,c)},
oX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a3(a,u)
if(q===37){p=P.mP(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.E(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a3(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.E(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mK(q)
u+=l
t=u}}}}if(s==null)return C.b.E(a,b,c)
if(t<c){n=C.b.E(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mM(C.b.I(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.E(a,b,c)
return P.oO(t?a.toLowerCase():a)},
oO:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oV:function(a,b,c){return P.dm(a,b,c,C.a_,!1)},
oS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.E,!0):C.n.kr(d,new P.kg(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.aa(u,"/"))u="/"+u
return P.oW(u,e,f)},
oW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.aa(a,"/"))return P.oY(a,!u||c)
return P.oZ(a)},
lz:function(a,b,c,d){var u,t={}
H.k(d,"$iI",[P.f,null],"$aI")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dm(a,b,c,C.p,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.O(0,new P.kh(new P.ki(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oQ:function(a,b,c){return P.dm(a,b,c,C.p,!0)},
mP:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a3(a,b+1)
t=C.b.a3(a,p)
s=H.kD(u)
r=H.kD(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aZ(q,4)
if(p>=8)return H.h(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c8(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.E(a,b,b+3).toUpperCase()
return},
mK:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.f.iv(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.I(o,p>>>4))
C.a.n(t,q+2,C.b.I(o,p&15))
q+=3}}return P.cT(t,0,null)},
dm:function(a,b,c,d,e){var u=P.mO(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.E(a,b,c):u},
mO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.D(c)
if(!(t<c))break
c$0:{q=C.b.a3(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mP(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a3(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mK(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.E(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.D(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.b.E(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mN:function(a){if(C.b.aa(a,"."))return!0
return C.b.eL(a,"/.")!==-1},
oZ:function(a){var u,t,s,r,q,p,o
if(!P.mN(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a1(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oY:function(a,b){var u,t,s,r,q,p
if(!P.mN(a))return!b?P.mL(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaB(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaB(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mL(u[0]))}return C.a.m(u,"/")},
mL:function(a){var u,t,s,r=a.length
if(r>=2&&P.mM(J.nD(a,0)))for(u=1;u<r;++u){t=C.b.I(a,u)
if(t===58)return C.b.E(a,0,u)+"%3A"+C.b.aw(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lA:function(a,b,c,d,e){var u,t,s,r,q=b
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
if(t>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dw("Truncated URI"))
C.a.h(r,P.oP(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.jf(!1).cL(r)},
mM:function(a){var u=a|32
return 97<=u&&u<=122},
mu:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.I(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a8(m,a,t))}}if(s<0&&t>b)throw H.c(P.a8(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.I(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaB(l)
if(r!==44||t!==p+7||!C.b.ak(a,"base64",p+1))throw H.c(P.a8("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jN(0,a,o,u)
else{n=P.mO(a,o,u,C.p,!0)
if(n!=null)a=C.b.b1(a,o,u,n)}return new P.j8(a,l,c)},
p0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o7(22,new P.kq(),P.U),n=new P.kp(o),m=new P.kr(),l=new P.ks(),k=H.e(n.$2(0,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iU")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iU")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iU")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iU")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iU")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iU"),"]",5)
k=H.e(n.$2(9,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iU")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iU")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iU"),"az",21)
k=H.e(n.$2(21,245),"$iU")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mT:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.nA()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
T:function T(){},
aB:function aB(a,b){this.a=a
this.b=b},
r:function r(){},
b5:function b5(a){this.a=a},
fZ:function fZ(){},
h_:function h_(){},
bH:function bH(){},
fz:function fz(){},
e1:function e1(){},
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
hk:function hk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
cb:function cb(a){this.a=a},
fM:function fM(a){this.a=a},
i0:function i0(){},
ec:function ec(){},
fT:function fT(a){this.a=a},
eE:function eE(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
p:function p(){},
i:function i(){},
b6:function b6(){},
b:function b(){},
I:function I(){},
N:function N(){},
ac:function ac(){},
S:function S(){},
ay:function ay(){},
f:function f(){},
ai:function ai(a){this.a=a},
jc:function jc(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
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
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
j8:function j8(a,b,c){this.a=a
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
pf:function(a){var u,t=J.V(a)
if(!!t.$ibo){u=t.geg(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fe(a.data,a.height,a.width)},
pe:function(a){if(a instanceof P.fe)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.lp(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=H.K(t[r])
u.n(0,q,a[q])}return u},
pd:function(a){var u={}
a.O(0,new P.kw(u))
return u},
k5:function k5(){},
k7:function k7(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(){},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jV:function jV(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hq:function hq(){},
bc:function bc(){},
hZ:function hZ(){},
i5:function i5(){},
cP:function cP(){},
iD:function iD(){},
q:function q(){},
bf:function bf(){},
iS:function iS(){},
eJ:function eJ(){},
eK:function eK(){},
eU:function eU(){},
eV:function eV(){},
f5:function f5(){},
f6:function f6(){},
fc:function fc(){},
fd:function fd(){},
U:function U(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(a){this.a=a},
fE:function fE(){},
bW:function bW(){},
i_:function i_(){},
ex:function ex(){},
dy:function dy(){},
e4:function e4(){},
ca:function ca(){},
e7:function e7(){},
ee:function ee(){},
em:function em(){},
iv:function iv(){},
f1:function f1(){},
f2:function f2(){}},W={
lY:function(){var u=document.createElement("a")
return u},
lf:function(){var u=document.createElement("canvas")
return u},
nU:function(a,b,c){var u=document.body,t=(u&&C.x).an(u,a,b,c)
t.toString
u=W.G
u=new H.d8(new W.as(t),H.n(new W.h1(),{func:1,ret:P.T,args:[u]}),[u])
return H.e(u.gaR(u),"$iX")},
nV:function(a){H.e(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cl(a)
t=u.gf0(a)
if(typeof t==="string")r=u.gf0(a)}catch(s){H.ak(s)}return r},
nX:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icE")
try{s.type=a}catch(u){H.ak(u)}return s},
jS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mH:function(a,b,c,d){var u=W.jS(W.jS(W.jS(W.jS(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mX(new W.jH(c),W.o)
if(u!=null&&!0)J.nF(a,b,u,!1)
return new W.jG(a,b,u,!1,[e])},
mG:function(a){var u=W.lY(),t=window.location
u=new W.bS(new W.k_(u,t))
u.fs(a)
return u},
oH:function(a,b,c,d){H.e(a,"$iX")
H.K(b)
H.K(c)
H.e(d,"$ibS")
return!0},
oI:function(a,b,c,d){var u,t,s
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
mI:function(){var u=P.f,t=P.m8(C.u,u),s=H.t(C.u,0),r=H.n(new W.kb(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ka(t,P.dQ(u),P.dQ(u),P.dQ(u),null)
t.fE(null,new H.hD(C.u,r,[s,u]),q,null)
return t},
mX:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a5
if(u===C.k)return a
return u.eb(a,b)},
z:function z(){},
fx:function fx(){},
dv:function dv(){},
fy:function fy(){},
cq:function cq(){},
bX:function bX(){},
bC:function bC(){},
bZ:function bZ(){},
cu:function cu(){},
bD:function bD(){},
cw:function cw(){},
fP:function fP(){},
Z:function Z(){},
cx:function cx(){},
fQ:function fQ(){},
b3:function b3(){},
b4:function b4(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
aI:function aI(){},
fW:function fW(){},
dF:function dF(){},
dG:function dG(){},
fX:function fX(){},
fY:function fY(){},
jB:function jB(a,b){this.a=a
this.b=b},
X:function X(){},
h1:function h1(){},
o:function o(){},
j:function j(){},
aJ:function aJ(){},
cA:function cA(){},
h7:function h7(){},
hb:function hb(){},
aQ:function aQ(){},
hg:function hg(){},
c3:function c3(){},
bo:function bo(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dR:function dR(){},
hJ:function hJ(){},
cH:function cH(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
aT:function aT(){},
hO:function hO(){},
af:function af(){},
as:function as(a){this.a=a},
G:function G(){},
cM:function cM(){},
aU:function aU(){},
i3:function i3(){},
id:function id(){},
ie:function ie(a){this.a=a},
ih:function ih(){},
aV:function aV(){},
it:function it(){},
aW:function aW(){},
iu:function iu(){},
aX:function aX(){},
ix:function ix(){},
iy:function iy(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
ed:function ed(){},
iE:function iE(){},
iF:function iF(){},
cV:function cV(){},
aY:function aY(){},
aL:function aL(){},
iH:function iH(){},
iI:function iI(){},
iM:function iM(){},
aZ:function aZ(){},
b_:function b_(){},
iQ:function iQ(){},
iR:function iR(){},
bQ:function bQ(){},
jd:function jd(){},
jt:function jt(){},
bi:function bi(){},
d9:function d9(){},
da:function da(){},
jC:function jC(){},
ez:function ez(){},
jR:function jR(){},
eR:function eR(){},
k4:function k4(){},
k8:function k8(){},
jA:function jA(){},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lx:function lx(a,b,c,d){var _=this
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
bS:function bS(a){this.a=a},
H:function H(){},
e0:function e0(a){this.a=a},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(){},
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
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
k_:function k_(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
kl:function kl(a){this.a=a},
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
dh:function dh(){},
di:function di(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
dj:function dj(){},
dk:function dk(){},
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
lg:function(a){var u=new O.a6([a])
u.br(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
dU:function dU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dW:function dW(){},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hI:function hI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
m6:function(){var u=new E.aq()
u.a=""
u.b=!0
u.sfq(0,O.lg(E.aq))
u.y.b3(u.gjO(),u.gjR())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sad(0,null)
return u},
oo:function(a,b){var u=new E.i9(a)
u.fn(a,b)
return u},
os:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibZ)return E.mq(a,!0,!0,!0,!1)
u=W.lf()
t=u.style
t.width="100%"
t.height="100%"
s.gcK(a).h(0,u)
return E.mq(u,!0,!0,!0,!1)},
mq:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.e(C.m.dh(a,"webgl2",P.o5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ica")
if(j==null)H.v(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oo(j,a)
u=new T.iJ(j)
H.aj(j.getParameter(3379))
u.c=H.aj(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.hp()
t.c=new X.aD(!1,!1,!1)
t.si9(P.dQ(P.p))
u.b=t
t=new X.hP(u)
t.f=0
t.r=V.bt()
t.x=V.bt()
t.ch=t.Q=1
u.c=t
t=new X.hx(u)
t.r=0
t.x=V.bt()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iP(u)
t.f=V.bt()
t.r=V.bt()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sh0(H.d([],[[P.cS,P.S]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghv(),q),!1,r))
t=u.z
p=W.o
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
m=W.bi;(n&&C.a).h(n,W.ab(a,H.K(W.nV(a)),H.n(u.ghP(),{func:1,ret:-1,args:[m]}),!1,m))
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
k.dZ()
return k},
fH:function fH(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iL:function iL(a){this.a=a}},Z={
lw:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,u)},
aM:function(a){return new Z.bh(a)},
eu:function eu(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ev:function ev(a){this.a=a},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
Q:function(){var u=new D.c1()
u.sal(null)
u.saX(null)
u.c=null
u.d=0
return u},
fK:function fK(){},
c1:function c1(){var _=this
_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
B:function B(){this.b=null},
bK:function bK(a){this.b=null
this.$ti=a},
bL:function bL(a){this.b=null
this.$ti=a},
P:function P(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dP:function dP(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e3:function e3(){},
eb:function eb(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
n9:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.oq("Test 014"),a9=W.lf()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.f]
a8.e7(H.d(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],u))
a8.j8(H.d(["controls","shapes"],u))
a8.e7(H.d(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.v(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.os(t,!0,!0,!0,!1)
r=X.lj(a5)
r.see(0,!1)
q=E.m6()
q.sad(0,F.ng())
u=s.f
p=u.a
o=p.createTexture()
p.bindTexture(a6,o)
p.texParameteri(a6,10242,10497)
p.texParameteri(a6,10243,10497)
p.texParameteri(a6,10241,9729)
p.texParameteri(a6,10240,9729)
p.bindTexture(a6,a5)
n=new T.cX()
n.a=0
n.b=o
n.c=!1
n.d=0
u.aV(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aV(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aV(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aV(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aV(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aV(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.dU()
m.sfP(O.lg(V.av))
m.e.b3(m.ghl(),m.ghn())
u=new O.b9(m,"emission")
u.c=C.d
u.f=new V.u(0,0,0)
m.f=u
u=new O.b9(m,"ambient")
u.c=C.d
u.f=new V.u(0,0,0)
m.r=u
u=new O.b9(m,"diffuse")
u.c=C.d
u.f=new V.u(0,0,0)
m.x=u
u=new O.b9(m,"invDiffuse")
u.c=C.d
u.f=new V.u(0,0,0)
m.y=u
u=new O.hI(m,"specular")
u.c=C.d
u.f=new V.u(0,0,0)
u.ch=100
m.z=u
u=new O.hF(m,"bump")
u.c=C.d
m.Q=u
m.ch=null
u=new O.b9(m,"reflect")
u.c=C.d
u.f=new V.u(0,0,0)
m.cx=u
u=new O.hH(m,"refract")
u.c=C.d
u.f=new V.u(0,0,0)
u.ch=1
m.cy=u
u=new O.hE(m,"alpha")
u.c=C.d
u.f=1
m.db=u
u=new D.dP()
u.br(D.a9)
u.sfY(H.d([],[D.bG]))
u.si8(H.d([],[D.e3]))
u.siw(H.d([],[D.eb]))
u.siI(H.d([],[D.ef]))
u.siJ(H.d([],[D.eg]))
u.siK(H.d([],[D.eh]))
u.ch=u.Q=null
u.dj(u.ghj(),u.ghT(),u.ghX())
m.dx=u
p=u.Q
u=p==null?u.Q=D.Q():p
u.h(0,m.gij())
u=m.dx
p=u.ch
u=p==null?u.ch=D.Q():p
p=m.gcm()
u.h(0,p)
m.dy=null
u=m.dx
l=V.mD()
k=U.m2(V.ma(V.mh(),l,new V.L(-1,-1,-1)))
j=new V.u(1,1,1)
i=new D.bG()
i.c=new V.u(1,1,1)
i.a=V.mE()
h=i.b
i.b=k
k.gu().h(0,i.gfu())
k=new D.P("mover",h,i.b,[U.ag])
k.b=!0
i.aD(k)
if(!i.c.C(0,j)){h=i.c
i.c=j
k=new D.P("color",h,j,[V.u])
k.b=!0
i.aD(k)}u.h(0,i)
u=m.r
u.st(0,new V.u(0.1,0.1,0.1))
u=m.x
u.st(0,new V.u(0.1,0.1,0.1))
u=m.z
u.st(0,new V.u(1,1,1))
u=m.z
if(u.c===C.d){u.c=C.j
u.bp()
u.bw(100)
k=u.a
k.a=null
k.a0(a5)}u.bw(10)
u=m.ch
if(u!==n){if(u!=null)u.gu().N(0,p)
h=m.ch
m.ch=n
n.gu().h(0,p)
u=new D.P("environment",h,m.ch,[T.cX])
u.b=!0
m.a0(u)}m.cy.saJ(0.6)
u=m.cy
u.st(0,new V.u(0.2,0.3,1))
u=m.cx
u.st(0,new V.u(0.6,0.6,0.6))
g=new U.cC()
g.br(U.ag)
g.b3(g.ghh(),g.ghV())
g.e=null
g.f=V.c5()
g.r=0
u=s.r
p=new U.er()
k=U.lh()
k.sdg(0,!0)
k.sd1(6.283185307179586)
k.sd3(0)
k.sa5(0,0)
k.sd2(100)
k.sX(0)
k.scN(0.5)
p.b=k
i=p.gaT()
k.gu().h(0,i)
k=U.lh()
k.sdg(0,!0)
k.sd1(6.283185307179586)
k.sd3(0)
k.sa5(0,0)
k.sd2(100)
k.sX(0)
k.scN(0.5)
p.c=k
k.gu().h(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.aD(!1,!1,!1)
h=p.d
p.d=f
k=[X.aD]
i=new D.P(a7,h,f,k)
i.b=!0
p.U(i)
i=p.f
if(i!==!1){p.f=!1
i=new D.P("invertX",i,!1,[P.T])
i.b=!0
p.U(i)}i=p.r
if(i!==!1){p.r=!1
i=new D.P("invertY",i,!1,[P.T])
i.b=!0
p.U(i)}p.b9(u)
g.h(0,p)
u=s.r
p=new U.eq()
i=U.lh()
i.sdg(0,!0)
i.sd1(6.283185307179586)
i.sd3(0)
i.sa5(0,0)
i.sd2(100)
i.sX(0)
i.scN(0.2)
p.b=i
i.gu().h(0,p.gaT())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.aD(!0,!1,!1)
h=p.c
p.c=f
i=new D.P(a7,h,f,k)
i.b=!0
p.U(i)
p.b9(u)
g.h(0,p)
u=s.r
p=new U.es()
p.c=0.01
p.e=p.d=0
f=new X.aD(!1,!1,!1)
p.b=f
k=new D.P(a7,a5,f,k)
k.b=!0
p.U(k)
p.b9(u)
g.h(0,p)
g.h(0,U.m2(V.ba(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.me(g)
d=new M.dD()
d.a=!0
u=E.m6()
c=F.ij()
p=c.a
k=new V.L(-1,-1,1)
k=k.w(0,Math.sqrt(k.G(k)))
b=p.by(new V.ax(1,2,4,6),new V.ap(1,0,0,1),new V.a_(-1,-1,0),new V.a7(0,1),k,a5)
p=c.a
k=new V.L(1,-1,1)
k=k.w(0,Math.sqrt(k.G(k)))
a=p.by(new V.ax(0,3,4,6),new V.ap(0,0,1,1),new V.a_(1,-1,0),new V.a7(1,1),k,a5)
p=c.a
k=new V.L(1,1,1)
k=k.w(0,Math.sqrt(k.G(k)))
a0=p.by(new V.ax(0,2,5,6),new V.ap(0,1,0,1),new V.a_(1,1,0),new V.a7(1,0),k,a5)
p=c.a
k=V.bt()
i=new V.L(-1,1,1)
i=i.w(0,Math.sqrt(i.G(i)))
a1=p.by(new V.ax(0,2,4,7),new V.ap(1,1,0,1),new V.a_(-1,1,0),k,i,a5)
c.d.e5(H.d([b,a,a0,a1],[F.ad]))
c.as()
u.sad(0,c)
d.e=u
d.sba(a5)
d.sbi(0,a5)
d.sbj(a5)
u=new O.e9()
u.b=1.0471975511965976
u.d=new V.u(1,1,1)
h=u.c
u.c=n
n.gu().h(0,u.gcm())
p=new D.P("boxTexture",h,u.c,[T.cX])
p.b=!0
u.a0(p)
d.sbj(u)
d.sbi(0,r)
d.sba(e)
a2=new M.dH()
a2.a=!0
a2.sfS(0,O.lg(E.aq))
a2.e.b3(a2.ghr(),a2.ght())
a2.y=a2.x=a2.r=a2.f=null
a3=X.lj(a5)
a2.sba(a5)
a2.sbi(0,a3)
a2.sbj(a5)
a2.sba(e)
a2.sbj(m)
a2.sbi(0,r)
a2.e.h(0,q)
a2.c.see(0,!1)
u=M.aF
p=H.d([d,a2],[u])
k=new M.dB()
k.br(u)
k.e=!0
k.f=!1
k.r=null
k.b3(k.ghZ(),k.gi0())
k.ag(0,p)
u=s.d
if(u!==k){if(u!=null)u.gu().N(0,s.gdt())
s.d=k
k.gu().h(0,s.gdt())
s.du()}u=V.mk("controls")
u.cA(0,"Silver",new D.kN(m),!0)
u.a7(0,"Gold",new D.kO(m))
u.a7(0,"Glass",new D.kP(m))
u.a7(0,"Blue Glass",new D.kY(m))
u.a7(0,"Water Bubble",new D.kZ(m))
u.a7(0,"No Reflection",new D.l_(m))
u.a7(0,"Pink Distort",new D.l0(m))
u.a7(0,"Cloak",new D.l1(m))
u.a7(0,"White and Shiny",new D.l2(m))
u=V.mk("shapes")
u.a7(0,"Cube",new D.l3(q))
u.a7(0,"Cuboid",new D.l4(q))
u.a7(0,"Cylinder",new D.kQ(q))
u.a7(0,"Cone",new D.kR(q))
u.a7(0,"Cylindrical",new D.kS(q))
u.a7(0,"Sphere",new D.kT(q))
u.a7(0,"Spherical",new D.kU(q))
u.cA(0,"Toroid",new D.kV(q),!0)
u.a7(0,"Knot",new D.kW(q))
u=s.z
if(u==null)u=s.z=D.Q()
p={func:1,ret:-1,args:[D.B]}
k=H.n(new D.kX(a8,m),p)
if(u.b==null)u.saX(H.d([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.pE(s)},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
kM:function kM(){},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kL:function kL(){},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kK:function kK(){},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a,b){this.a=a
this.b=b}},X={dA:function dA(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},hp:function hp(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hx:function hx(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i4:function i4(){},ek:function ek(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iP:function iP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lj:function(a){var u=new X.hd(),t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mm
if(t==null){t=V.ml(0,0,1,1)
$.mm=t}u.r=t
return u},
me:function(a){var u,t,s=new X.e2()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gfH())
t=new D.P("mover",u,s.b,[U.ag])
t.b=!0
s.ax(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.W().a)){s.c=1.0471975511965976
t=new D.P("fov",t,1.0471975511965976,[P.r])
t.b=!0
s.ax(t)}t=s.d
if(!(Math.abs(t-0.1)<$.W().a)){s.d=0.1
t=new D.P("near",t,0.1,[P.r])
t.b=!0
s.ax(t)}t=s.e
if(!(Math.abs(t-2000)<$.W().a)){s.e=2000
t=new D.P("far",t,2000,[P.r])
t.b=!0
s.ax(t)}return s},
bY:function bY(){},
hd:function hd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(){this.b=this.a=null},
e2:function e2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){}},V={
pI:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bn(a-b,u)
return(a<0?a+u:a)+b},
a0:function(a,b,c){if(a==null)return C.b.ap("null",c)
return C.b.ap(C.e.f3(Math.abs(a-0)<$.W().a?0:a,b),c+b+1)},
cj:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=V.a0(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.ap(u[p],s))}return u},
lN:function(a){return C.e.kf(Math.pow(2,C.W.cV(Math.log(H.pc(a))/Math.log(2))))},
c5:function(){var u=$.mb
return u==null?$.mb=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ma:function(a,b,c){var u=c.w(0,Math.sqrt(c.G(c))),t=b.aI(u),s=t.w(0,Math.sqrt(t.G(t))),r=u.aI(s),q=new V.L(a.a,a.b,a.c),p=s.V(0).G(q),o=r.V(0).G(q),n=u.V(0).G(q)
return V.ba(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.mg
return u==null?$.mg=new V.a7(0,0):u},
mh:function(){var u=$.cN
return u==null?$.cN=new V.a_(0,0,0):u},
ml:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
d7:function(){var u=$.mC
return u==null?$.mC=new V.L(0,0,0):u},
mD:function(){var u=$.mB
return u==null?$.mB=new V.L(0,1,0):u},
mE:function(){var u=$.jh
return u==null?$.jh=new V.L(0,0,1):u},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h3:function h3(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
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
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.x("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.I(a,0)
t=C.b.I(b,0)
s=new V.i8()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
y:function(a){var u=new V.ii()
u.fo(a)
return u},
iO:function(){var u=new V.iN(),t=P.f
u.six(new H.aS([t,V.cR]))
u.siA(new H.aS([t,V.cY]))
u.c=null
return u},
bl:function bl(){},
aC:function aC(){},
dT:function dT(){},
aw:function aw(){this.a=null},
i8:function i8(){this.b=this.a=null},
ii:function ii(){this.a=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
iN:function iN(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
pE:function(a){P.ot(C.T,new V.l7(a))},
mk:function(a){var u=new V.i6(a),t=document.getElementById(a)
u.c=t
if(t==null)H.v("Failed to find "+a+" for RadioGroup")
return u},
oq:function(a){var u=new V.io()
u.fp(a,!0)
return u},
bE:function bE(){},
l7:function l7(a){this.a=a},
fU:function fU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hf:function hf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){this.a=a
this.c=null},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(){this.b=this.a=null},
iq:function iq(a){this.a=a},
ip:function ip(a){this.a=a},
ir:function ir(a){this.a=a}},U={
lh:function(){var u=new U.fL()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
m2:function(a){var u=new U.dC()
u.a=a
return u},
fL:function fL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ag:function ag(){},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dB:function dB(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dD:function dD(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dH:function dH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aF:function aF(){}},A={
o8:function(a,b){var u=a.at,t=new A.dV(b,u)
t.dr(b,u)
t.fm(a,b)
return t},
lt:function(a,b,c,d,e){var u=new A.iX(a,c,e)
u.f=d
u.siL(P.o6(d,0,P.p))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){this.a=a},
dV:function dV(a,b){var _=this
_.bC=_.ej=_.bB=_.at=_.aA=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eA=_.cP=_.ez=_.bP=_.ey=_.ex=_.bO=_.bN=_.ew=_.ev=_.bM=_.bL=_.bK=_.eu=_.es=_.bJ=_.er=_.eq=_.bI=_.ep=_.eo=_.bH=_.bG=_.en=_.em=_.bF=_.bE=_.el=_.ek=_.bD=null
_.cU=_.eE=_.cT=_.eD=_.cS=_.eC=_.cR=_.eB=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aA=b3
_.at=b4
_.bB=b5},
d_:function d_(a,b){this.b=a
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
cQ:function cQ(){},
c0:function c0(a,b){this.a=a
this.b=b},
ea:function ea(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
el:function el(){},
j2:function j2(a){this.a=a},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
az:function az(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lJ:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
u=F.ij()
F.dn(u,b,c,d,a,1,0,0,1)
F.dn(u,b,c,d,a,0,1,0,3)
F.dn(u,b,c,d,a,0,0,1,2)
F.dn(u,b,c,d,a,-1,0,0,0)
F.dn(u,b,c,d,a,0,-1,0,0)
F.dn(u,b,c,d,a,0,0,-1,3)
u.as()
return u},
ko:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
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
e.d=u}h=F.ko(u)
g=F.ko(e.b)
f=F.lQ(d,a0,new F.kn(e,F.ko(e.c),F.ko(e.d),g,h,c),b)
if(f!=null)a.be(f)},
n3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
u=F.ij()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ad])
q=u.a
p=new V.L(0,0,t)
p=p.w(0,Math.sqrt(p.G(p)))
C.a.h(r,q.jb(new V.ax(a,-1,-1,-1),new V.ap(1,1,1,1),new V.a_(0,0,c),new V.L(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.L(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.et(new V.ax(a,-1,-1,-1),null,new V.ap(i,g,h,1),new V.a_(m*k,l*k,c),new V.L(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.e5(r)
return u},
n0:function(a,b,c){return F.n1(!0,a,1,new F.kx(1,c),b)},
n1:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lQ(c,e,new F.kz(d),null)
if(u==null)return
u.as()
u.cB()
if(b)u.be(F.n3(3,!1,1,new F.kA(d),e))
u.be(F.n3(1,!0,-1,new F.kB(d),e))
return u},
ne:function(a,b,c){var u,t={}
t.a=b
if(H.n(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)t.a=new F.l8()
u=F.lJ(a,null,new F.l9(t,1),c)
u.cB()
return u},
ng:function(){return F.n2(15,30,0.5,1,new F.la())},
pw:function(){return F.n2(12,120,0.3,1,new F.kI(3,2))},
n2:function(a,b,c,d,e){var u=F.lQ(a,b,new F.ky(H.n(e,{func:1,ret:V.a_,args:[P.r]}),d,b,c),null)
if(u==null)return
u.as()
u.cB()
return u},
lQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ad,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.ij()
t=H.d([],[F.ad])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.et(g,g,new V.ap(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
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
o=F.et(g,g,new V.ap(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cM(d))}}u.d.ja(a+1,b+1,t)
return u},
cz:function(a,b,c){var u=new F.aa(),t=a.a
if(t==null)H.v(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.x("May not create a face with vertices attached to different shapes."))
u.cw(a)
u.cz(b)
u.iq(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
o2:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.v(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.v(P.x("May not create a line with vertices attached to different shapes."))
u.cw(a)
u.cz(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a9()
return u},
ij:function(){var u=new F.e8(),t=new F.ji(u)
t.b=!1
t.siM(H.d([],[F.ad]))
u.a=t
t=new F.im(u)
t.sco(H.d([],[F.bO]))
u.b=t
t=new F.il(u)
t.sh7(H.d([],[F.br]))
u.c=t
t=new F.ik(u)
t.sh1(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
et:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ad(),r=new F.jq()
r.sco(H.d([],[F.bO]))
s.b=r
r=new F.jm()
u=[F.br]
r.sh8(H.d([],u))
r.sh9(H.d([],u))
s.c=r
r=new F.jj()
u=[F.aa]
r.sh2(H.d([],u))
r.sh3(H.d([],u))
r.sh4(H.d([],u))
s.d=r
h=$.nu()
s.e=0
r=$.b1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.by().a)!==0?e:t
s.x=(u&$.bx().a)!==0?b:t
s.y=(u&$.bz().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.nv().a)!==0?c:t
s.ch=(u&$.cp().a)!==0?i:0
s.cx=(u&$.bw().a)!==0?a:t
return s},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kx:function kx(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
l8:function l8(){},
l9:function l9(a,b){this.a=a
this.b=b},
la:function la(){},
kI:function kI(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){},
is:function is(){},
br:function br(){this.b=this.a=null},
hr:function hr(){},
iW:function iW(){},
bO:function bO(){this.a=null},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
im:function im(a){this.a=a
this.b=null},
ad:function ad(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(){this.d=this.c=this.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){this.c=this.b=null},
jo:function jo(){},
jn:function jn(){},
jp:function jp(){},
hX:function hX(){},
jq:function jq(){this.b=null}},T={cW:function cW(){},cX:function cX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iJ:function iJ(a){var _=this
_.a=a
_.e=_.d=_.c=null},iK:function iK(a,b,c,d,e,f,g){var _=this
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
H.ln.prototype={}
J.a.prototype={
C:function(a,b){return a===b},
gK:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.c7(a)+"'"}}
J.hm.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iT:1}
J.dM.prototype={
C:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dN.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.i1.prototype={}
J.bR.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.ni()]
if(u==null)return this.fh(a)
return"JavaScript function for "+H.m(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.C(b,H.t(a,0))
if(!!a.fixed$length)H.v(P.J("add"))
a.push(b)},
eW:function(a,b){if(!!a.fixed$length)H.v(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e5(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.v(P.J("remove"))
for(u=0;u<a.length;++u)if(J.a1(a[u],b)){a.splice(u,1)
return!0}return!1},
ag:function(a,b){var u,t
H.k(b,"$ii",[H.t(a,0)],"$ai")
if(!!a.fixed$length)H.v(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.F)(b),++t)a.push(b[t])},
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
jB:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
jA:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.E(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.hl())},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fe:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gjz:function(a){if(a.length>0)return a[0]
throw H.c(H.hl())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hl())},
bo:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.v(P.J("setRange"))
P.bu(b,c,a.length)
u=c-b
if(u===0)return
P.lr(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ck(d)
if(u>s.gl(d))throw H.c(H.nZ())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
e9:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a1(a[u],b))return!0
return!1},
i:function(a){return P.lk(a,"[","]")},
gW:function(a){return new J.au(a,a.length,[H.t(a,0)])},
gK:function(a){return H.cO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.J("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ci(a,b))
return a[b]},
n:function(a,b,c){H.C(c,H.t(a,0))
if(!!a.immutable$list)H.v(P.J("indexed set"))
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
J.lm.prototype={}
J.au.prototype={
gL:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.F(s))
u=t.c
if(u>=r){t.sdK(null)
return!1}t.sdK(s[u]);++t.c
return!0},
sdK:function(a){this.d=H.C(a,H.t(this,0))},
$ib6:1}
J.bM.prototype={
kf:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
f3:function(a,b){var u,t
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a3(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.J("Unexpected toString result: "+u))
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
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a+b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a-b},
A:function(a,b){if(typeof b!=="number")throw H.c(H.aG(b))
return a*b},
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fl:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e0(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.e0(a,b)},
e0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.e_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iv:function(a,b){if(b<0)throw H.c(H.aG(b))
return this.e_(a,b)},
e_:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iac:1}
J.dL.prototype={$ip:1}
J.dK.prototype={}
J.bp.prototype={
a3:function(a,b){if(b<0)throw H.c(H.ci(a,b))
if(b>=a.length)H.v(H.ci(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.ci(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.ld(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.bu(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.ak(a,b,0)},
E:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.aG(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e5(b,null))
if(b>c)throw H.c(P.e5(b,null))
if(c>a.length)throw H.c(P.e5(c,null))
return a.substring(b,c)},
aw:function(a,b){return this.E(a,b,null)},
ki:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
eM:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eL:function(a,b){return this.eM(a,b,0)},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imd:1,
$if:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a3(this.a,b)},
$ad6:function(){return[P.p]},
$aA:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h0.prototype={}
H.c4.prototype={
gW:function(a){var u=this
return new H.cF(u,u.gl(u),[H.an(u,"c4",0)])},
bZ:function(a,b){return this.fg(0,H.n(b,{func:1,ret:P.T,args:[H.an(this,"c4",0)]}))}}
H.cF.prototype={
gL:function(a){return this.d},
F:function(){var u,t=this,s=t.a,r=J.ck(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bm(s))
u=t.c
if(u>=q){t.sb5(null)
return!1}t.sb5(r.M(s,u));++t.c
return!0},
sb5:function(a){this.d=H.C(a,H.t(this,0))},
$ib6:1}
H.hB.prototype={
gW:function(a){return new H.hC(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.aH(this.a)},
M:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ai:function(a,b){return[b]}}
H.hC.prototype={
F:function(){var u=this,t=u.b
if(t.F()){u.sb5(u.c.$1(t.gL(t)))
return!0}u.sb5(null)
return!1},
gL:function(a){return this.a},
sb5:function(a){this.a=H.C(a,H.t(this,1))},
$ab6:function(a,b){return[b]}}
H.hD.prototype={
gl:function(a){return J.aH(this.a)},
M:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ac4:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d8.prototype={
gW:function(a){return new H.ju(J.bB(this.a),this.b,this.$ti)}}
H.ju.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(H.E(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c2.prototype={}
H.d6.prototype={
n:function(a,b,c){H.C(c,H.an(this,"d6",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.en.prototype={}
H.fN.prototype={
i:function(a){return P.lq(this)},
n:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
return H.nR()},
$iI:1}
H.fO.prototype={
gl:function(a){return this.a},
bz:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bz(0,b))return
return this.dL(b)},
dL:function(a){return this.b[H.K(a)]},
O:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.dL(r),p))}}}
H.iT.prototype={
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
H.hY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ho.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.j6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lb.prototype={
$1:function(a){if(!!J.V(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.f3.prototype={
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
H.iG.prototype={}
H.iw.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
C:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cr))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cO(this.a)
else u=typeof t!=="object"?J.du(t):H.cO(t)
return(u^H.cO(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c7(u)+"'")}}
H.iV.prototype={
i:function(a){return this.a}}
H.fJ.prototype={
i:function(a){return this.a}}
H.ig.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.jv.prototype={
i:function(a){return"Assertion failed: "+P.dI(this.a)}}
H.aS.prototype={
gl:function(a){return this.a},
gjI:function(a){return this.a===0},
gac:function(a){return new H.ht(this,[H.t(this,0)])},
bz:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dH(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dH(t,b)}else return s.jF(b)},
jF:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cY(u.c9(t,u.cX(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bs(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bs(r,b)
s=t==null?null:t.b
return s}else return q.jG(b)},
jG:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c9(r,s.cX(a))
t=s.cY(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.C(b,H.t(s,0))
H.C(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.dw(u==null?s.b=s.ck():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.dw(t==null?s.c=s.ck():t,b,c)}else s.jH(b,c)},
jH:function(a,b){var u,t,s,r,q=this
H.C(a,H.t(q,0))
H.C(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.ck()
t=q.cX(a)
s=q.c9(u,t)
if(s==null)q.cu(u,t,[q.c3(a,b)])
else{r=q.cY(s,a)
if(r>=0)s[r].b=b
else s.push(q.c3(a,b))}},
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bm(s))
u=u.c}},
dw:function(a,b,c){var u,t=this
H.C(b,H.t(t,0))
H.C(c,H.t(t,1))
u=t.bs(a,b)
if(u==null)t.cu(a,b,t.c3(b,c))
else u.b=c},
fJ:function(){this.r=this.r+1&67108863},
c3:function(a,b){var u,t=this,s=new H.hs(H.C(a,H.t(t,0)),H.C(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fJ()
return s},
cX:function(a){return J.du(a)&0x3ffffff},
cY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1},
i:function(a){return P.lq(this)},
bs:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
fX:function(a,b){delete a[b]},
dH:function(a,b){return this.bs(a,b)!=null},
ck:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cu(t,u,t)
this.fX(t,u)
return t}}
H.hs.prototype={}
H.ht.prototype={
gl:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.hu(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hu.prototype={
gL:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdz(null)
return!1}else{u.sdz(t.a)
u.c=u.c.c
return!0}}},
sdz:function(a){this.d=H.C(a,H.t(this,0))},
$ib6:1}
H.kE.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.kF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kG.prototype={
$1:function(a){return this.a(H.K(a))},
$S:44}
H.hn.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imd:1,
$iom:1}
H.cJ.prototype={$icJ:1}
H.bN.prototype={$ibN:1,$iou:1}
H.dY.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cK.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
n:function(a,b,c){H.ph(c)
H.bk(b,a,a.length)
a[b]=c},
$ac2:function(){return[P.r]},
$aA:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dZ.prototype={
n:function(a,b,c){H.aj(c)
H.bk(b,a,a.length)
a[b]=c},
$ac2:function(){return[P.p]},
$aA:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hQ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e_.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iq2:1}
H.cL.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icL:1,
$iU:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jw.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jy.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f9.prototype={
fF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.kd(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fG:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.kc(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibe:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kc.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.fl(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bj.prototype={
jL:function(a){if(this.c!==6)return!0
return this.b.b.dd(H.n(this.d,{func:1,ret:P.T,args:[P.S]}),a.a,P.T,P.S)},
jD:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fs(u,{func:1,args:[P.S,P.ay]}))return H.lK(r.ka(u,a.a,a.b,null,t,P.ay),s)
else return H.lK(r.dd(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aN.prototype={
f2:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a5
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.p4(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a5,[c])
s=b==null?1:3
this.dB(new P.bj(t,s,a,b,[r,c]))
return t},
ke:function(a,b){return this.f2(a,null,b)},
dB:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibj")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaN")
s=u.a
if(s<4){u.dB(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kv(null,null,s,H.n(new P.jI(t,a),{func:1,ret:-1}))}},
dX:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibj")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaN")
u=q.a
if(u<4){q.dX(a)
return}p.a=u
p.c=q.c}o.a=p.bu(a)
u=p.b
u.toString
P.kv(null,null,u,H.n(new P.jM(o,p),{func:1,ret:-1}))}},
cq:function(){var u=H.e(this.c,"$ibj")
this.c=null
return this.bu(u)},
bu:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dD:function(a){var u,t,s=this,r=H.t(s,0)
H.lK(a,{futureOr:1,type:r})
u=s.$ti
if(H.lG(a,"$icB",u,"$acB"))if(H.lG(a,"$iaN",u,null))P.mF(a,s)
else P.oG(a,s)
else{t=s.cq()
H.C(a,r)
s.a=4
s.c=a
P.db(s,t)}},
dE:function(a,b){var u,t=this
H.e(b,"$iay")
u=t.cq()
t.a=8
t.c=new P.ao(a,b)
P.db(t,u)},
$icB:1}
P.jI.prototype={
$0:function(){P.db(this.a,this.b)},
$S:0}
P.jM.prototype={
$0:function(){P.db(this.b,this.a.a)},
$S:0}
P.jJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.dD(a)},
$S:30}
P.jK.prototype={
$2:function(a,b){H.e(b,"$iay")
this.a.dE(a,b)},
$1:function(a){return this.$2(a,null)},
$S:53}
P.jL.prototype={
$0:function(){this.a.dE(this.b,this.c)},
$S:0}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.f_(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cm(r)
if(o.d){s=H.e(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.V(n).$icB){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ke(new P.jQ(p),null)
s.a=!1}},
$S:3}
P.jQ.prototype={
$1:function(a){return this.a},
$S:50}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.C(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.dd(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cm(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iao")
r=m.c
if(H.E(r.jL(u))&&r.e!=null){q=m.b
q.b=r.jD(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cm(p)
r=H.e(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.ew.prototype={}
P.iz.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aN($.a5,[P.p])
r.a=0
u=H.t(s,0)
t=H.n(new P.iB(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iC(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iB.prototype={
$1:function(a){H.C(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.t(this.b,0)]}}}
P.iC.prototype={
$0:function(){this.b.dD(this.a.a)},
$S:0}
P.cS.prototype={}
P.iA.prototype={}
P.be.prototype={}
P.ao.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.km.prototype={$iqh:1}
P.ku.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e1():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jW.prototype={
kb:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a5){a.$0()
return}P.mR(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kt(r,r,this,u,H.e(t,"$iay"))}},
kc:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.k===$.a5){a.$1(b)
return}P.mS(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kt(r,r,this,u,H.e(t,"$iay"))}},
jh:function(a,b){return new P.jY(this,H.n(a,{func:1,ret:b}),b)},
cF:function(a){return new P.jX(this,H.n(a,{func:1,ret:-1}))},
eb:function(a,b){return new P.jZ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f_:function(a,b){H.n(a,{func:1,ret:b})
if($.a5===C.k)return a.$0()
return P.mR(null,null,this,a,b)},
dd:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a5===C.k)return a.$1(b)
return P.mS(null,null,this,a,b,c,d)},
ka:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a5===C.k)return a.$2(b,c)
return P.p5(null,null,this,a,b,c,d,e,f)}}
P.jY.prototype={
$0:function(){return this.a.f_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jX.prototype={
$0:function(){return this.a.kb(this.b)},
$S:3}
P.jZ.prototype={
$1:function(a){var u=this.c
return this.a.kc(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jU.prototype={
gW:function(a){var u=this,t=new P.eL(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icc")!=null}else{t=this.fT(b)
return t}},
fT:function(a){var u=this.d
if(u==null)return!1
return this.c7(this.dM(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dA(u==null?s.b=P.ly():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dA(t==null?s.c=P.ly():t,b)}else return s.fK(0,b)},
fK:function(a,b){var u,t,s,r=this
H.C(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.ly()
t=r.dF(b)
s=u[t]
if(s==null)u[t]=[r.cl(b)]
else{if(r.c7(s,b)>=0)return!1
s.push(r.cl(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ic(this.c,b)
else return this.ib(0,b)},
ib:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dM(r,b)
t=s.c7(u,b)
if(t<0)return!1
s.e1(u.splice(t,1)[0])
return!0},
dA:function(a,b){H.C(b,H.t(this,0))
if(H.e(a[b],"$icc")!=null)return!1
a[b]=this.cl(b)
return!0},
ic:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icc")
if(u==null)return!1
this.e1(u)
delete a[b]
return!0},
dQ:function(){this.r=1073741823&this.r+1},
cl:function(a){var u,t=this,s=new P.cc(H.C(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dQ()
return s},
e1:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dQ()},
dF:function(a){return J.du(a)&1073741823},
dM:function(a,b){return a[this.dF(b)]},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1}}
P.cc.prototype={}
P.eL.prototype={
gL:function(a){return this.d},
F:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bm(t))
else{t=u.c
if(t==null){u.sdC(null)
return!1}else{u.sdC(H.C(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sdC:function(a){this.d=H.C(a,H.t(this,0))},
$ib6:1}
P.hv.prototype={
$2:function(a,b){this.a.n(0,H.C(a,this.b),H.C(b,this.c))},
$S:7}
P.hw.prototype={$ii:1,$ib:1}
P.A.prototype={
gW:function(a){return new H.cF(a,this.gl(a),[H.bU(this,a,"A",0)])},
M:function(a,b){return this.j(a,b)},
kh:function(a,b){var u,t=this,s=H.d([],[H.bU(t,a,"A",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
kg:function(a){return this.kh(a,!0)},
p:function(a,b){var u,t=this,s=[H.bU(t,a,"A",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.p(t.gl(a),b.gl(b)))
C.a.bo(u,0,t.gl(a),a)
C.a.bo(u,t.gl(a),u.length,b)
return u},
jx:function(a,b,c,d){var u
H.C(d,H.bU(this,a,"A",0))
P.bu(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lk(a,"[","]")}}
P.hy.prototype={}
P.hz.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:7}
P.ae.prototype={
O:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bU(s,a,"ae",0),H.bU(s,a,"ae",1)]})
for(u=J.bB(s.gac(a));u.F();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aH(this.gac(a))},
i:function(a){return P.lq(a)},
$iI:1}
P.ke.prototype={
n:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hA.prototype={
j:function(a,b){return J.lU(this.a,b)},
n:function(a,b,c){J.lc(this.a,H.C(b,H.t(this,0)),H.C(c,H.t(this,1)))},
O:function(a,b){J.lV(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gl:function(a){return J.aH(this.a)},
i:function(a){return J.at(this.a)},
$iI:1}
P.eo.prototype={}
P.k0.prototype={
ag:function(a,b){var u
for(u=J.bB(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gL(u))},
i:function(a){return P.lk(this,"{","}")},
M:function(a,b){var u,t,s,r=this
P.lr(b,"index")
for(u=P.oK(r,r.r,H.t(r,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a2(b,r,"index",null,t))},
$ii:1,
$imn:1}
P.eM.prototype={}
P.ff.prototype={}
P.fF.prototype={
jN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bu(a0,a1,b.length)
u=$.nx()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.I(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kD(C.b.I(b,n))
j=H.kD(C.b.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.E(b,s,t)
r.a=g+H.c8(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.E(b,s,a1)
f=g.length
if(q>=0)P.lZ(b,p,a1,q,o,f)
else{e=C.f.bn(f-1,4)+1
if(e===1)throw H.c(P.a8(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lZ(b,p,a1,q,o,d)
else{e=C.f.bn(d,4)
if(e===1)throw H.c(P.a8(c,b,a1))
if(e>1)b=C.b.b1(b,a1,a1,e===2?"==":"=")}return b},
$ac_:function(){return[[P.b,P.p],P.f]}}
P.fG.prototype={
$abF:function(){return[[P.b,P.p],P.f]}}
P.c_.prototype={}
P.bF.prototype={}
P.h2.prototype={
$ac_:function(){return[P.f,[P.b,P.p]]}}
P.hi.prototype={
i:function(a){return this.a}}
P.hh.prototype={
fU:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.E(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nK(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.f,P.f]}}
P.je.prototype={
gjw:function(){return C.R}}
P.jg.prototype={
cL:function(a){var u,t,s=P.bu(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kk(u)
if(t.h5(a,0,s)!==s)t.e3(J.nG(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p_(0,t.b,u.length)))},
$abF:function(){return[P.f,[P.b,P.p]]}}
P.kk.prototype={
e3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a3(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.e3(r,C.b.I(a,p)))s=p}else if(r<=2047){q=n.b
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
cL:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.ox(!1,a,0,null)
if(u!=null)return u
t=P.bu(0,null,J.aH(a))
s=P.mU(a,0,t)
if(s>0){r=P.cT(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.kj(!1,q)
n.c=o
n.jl(a,p,t)
if(n.e>0){H.v(P.a8("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c8(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abF:function(){return[[P.b,P.p],P.f]}}
P.kj.prototype={
jl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ck(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.c_()
if((o&192)!==128){n=P.a8(h+C.f.bl(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a8("Overlong encoding of 0x"+C.f.bl(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a8("Character outside valid Unicode range: 0x"+C.f.bl(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c8(u)
i.c=!1}for(n=p<c;n;){m=P.mU(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cT(a,p,l)
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
P.T.prototype={}
P.aB.prototype={
C:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.f.aZ(u,30))&1073741823},
i:function(a){var u=this,t=P.nS(H.oi(u)),s=P.dE(H.og(u)),r=P.dE(H.oc(u)),q=P.dE(H.od(u)),p=P.dE(H.of(u)),o=P.dE(H.oh(u)),n=P.nT(H.oe(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.f.p(this.a,b.gfZ()))},
v:function(a,b){return new P.b5(C.f.v(this.a,b.gfZ()))},
C:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gK:function(a){return C.f.gK(this.a)},
i:function(a){var u,t,s,r=new P.h_(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.f.ab(q,6e7)%60)
t=r.$1(C.f.ab(q,1e6)%60)
s=new P.fZ().$1(q%1e6)
return""+C.f.ab(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:31}
P.h_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:31}
P.bH.prototype={}
P.fz.prototype={
i:function(a){return"Assertion failed"}}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc6()+o+u
if(!q.a)return t
s=q.gc5()
r=P.dI(q.b)
return t+s+": "+r}}
P.c9.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.hk.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t=H.aj(this.b)
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gl:function(a){return this.f}}
P.j7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j4.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fM.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dI(u)+"."}}
P.i0.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ec.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.fT.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
i:function(a){return"Exception: "+this.a}}
P.hc.prototype={
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
for(q=g;q<o;++q){p=C.b.a3(f,q)
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
return h+l+j+k+"\n"+C.b.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.bI.prototype={}
P.p.prototype={}
P.i.prototype={
bZ:function(a,b){var u=H.an(this,"i",0)
return new H.d8(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gl:function(a){var u,t=this.gW(this)
for(u=0;t.F();)++u
return u},
gaR:function(a){var u,t=this.gW(this)
if(!t.F())throw H.c(H.hl())
u=t.gL(t)
if(t.F())throw H.c(H.o_())
return u},
M:function(a,b){var u,t,s
P.lr(b,"index")
for(u=this.gW(this),t=0;u.F();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a2(b,this,"index",null,t))},
i:function(a){return P.nY(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ii:1}
P.I.prototype={}
P.N.prototype={
gK:function(a){return P.S.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
C:function(a,b){return this===b},
gK:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.c7(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.f.prototype={$imd:1}
P.ai.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipR:1}
P.jc.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.k(a,"$iI",[r,r],"$aI")
H.K(b)
u=J.dr(b).eL(b,"=")
if(u===-1){if(b!=="")J.lc(a,P.lA(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.E(b,0,u)
s=C.b.aw(b,u+1)
r=this.a
J.lc(a,P.lA(t,0,t.length,r,!0),P.lA(s,0,s.length,r,!0))}return a},
$S:49}
P.j9.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.ja.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jb.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fv(C.b.E(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cd.prototype={
gf8:function(){return this.b},
gcW:function(a){var u=this.c
if(u==null)return""
if(C.b.aa(u,"["))return C.b.E(u,1,u.length-1)
return u},
gbT:function(a){var u=this.d
if(u==null)return P.mJ(this.a)
return u},
gd7:function(a){var u=this.f
return u==null?"":u},
geG:function(){var u=this.r
return u==null?"":u},
eY:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
if(o&&!C.b.aa(p,"/"))p="/"+p
n=P.lz(null,0,0,b)
return new P.cd(u,s,q,r,p,n,m.r)},
gd8:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.sia(new P.eo(P.mx(u==null?"":u),[t,t]))}return s.Q},
geH:function(){return this.c!=null},
geK:function(){return this.f!=null},
geI:function(){return this.r!=null},
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
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.V(b).$ilu)if(s.a==b.gc1())if(s.c!=null===b.geH())if(s.b==b.gf8())if(s.gcW(s)==b.gcW(b))if(s.gbT(s)==b.gbT(b))if(s.e===b.geV(b)){u=s.f
t=u==null
if(!t===b.geK()){if(t)u=""
if(u===b.gd7(b)){u=s.r
t=u==null
if(!t===b.geI()){if(t)u=""
u=u===b.geG()}else u=!1}else u=!1}else u=!1}else u=!1
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
this.Q=H.k(a,"$iI",[u,u],"$aI")},
$ilu:1,
gc1:function(){return this.a},
geV:function(a){return this.e}}
P.kf.prototype={
$1:function(a){throw H.c(P.a8("Invalid port",this.a,this.b+1))},
$S:43}
P.kg.prototype={
$1:function(a){return P.fg(C.a0,a,C.l,!1)},
$S:20}
P.ki.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fg(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fg(C.r,b,C.l,!0))}},
$S:21}
P.kh.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bB(H.n8(b,"$ii")),t=this.a;u.F();)t.$2(a,H.K(u.gL(u)))},
$S:36}
P.j8.prototype={
gf7:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.eM(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.jD("data",p,p,p,P.dm(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kq.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kp.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nH(u,0,96,b)
return u},
$S:40}
P.kr.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.I(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.I(b,0),t=C.b.I(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.k3.prototype={
geH:function(){return this.c>0},
geJ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
geK:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
geI:function(){return this.r<this.a.length},
gdO:function(){return this.b===4&&C.b.aa(this.a,"http")},
gdP:function(){return this.b===5&&C.b.aa(this.a,"https")},
gc1:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdO())q=t.x="http"
else if(t.gdP()){t.x="https"
q="https"}else if(q===4&&C.b.aa(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.aa(t.a,r)){t.x=r
q=r}else{q=C.b.E(t.a,0,q)
t.x=q}return q},
gf8:function(){var u=this.c,t=this.b+3
return u>t?C.b.E(this.a,t,u-1):""},
gcW:function(a){var u=this.c
return u>0?C.b.E(this.a,u,this.d):""},
gbT:function(a){var u,t=this
if(t.geJ()){u=t.d
if(typeof u!=="number")return u.p()
return P.fv(C.b.E(t.a,u+1,t.e),null,null)}if(t.gdO())return 80
if(t.gdP())return 443
return 0},
geV:function(a){return C.b.E(this.a,this.e,this.f)},
gd7:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.b.E(this.a,u+1,t):""},
geG:function(){var u=this.r,t=this.a
return u<t.length?C.b.aw(t,u+1):""},
gd8:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Z()
if(t>=u.r)return C.a1
t=P.f
return new P.eo(P.mx(u.gd7(u)),[t,t])},
eY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iI",[P.f,null],"$aI")
u=k.gc1()
t=u==="file"
s=k.c
r=s>0?C.b.E(k.a,k.b+3,s):""
q=k.geJ()?k.gbT(k):j
s=k.c
if(s>0)p=C.b.E(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.E(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.aa(o,"/"))o="/"+o
m=P.lz(j,0,0,b)
n=k.r
l=n<s.length?C.b.aw(s,n+1):j
return new P.cd(u,r,p,q,o,m,l)},
gK:function(a){var u=this.y
return u==null?this.y=C.b.gK(this.a):u},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ilu&&this.a===b.i(0)},
i:function(a){return this.a},
$ilu:1}
P.jD.prototype={}
W.z.prototype={}
W.fx.prototype={
gl:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bX.prototype={$ibX:1}
W.bC.prototype={$ibC:1}
W.bZ.prototype={
dh:function(a,b,c){if(c!=null)return a.getContext(b,P.pd(c))
return a.getContext(b)},
fa:function(a,b){return this.dh(a,b,null)},
$ibZ:1}
W.cu.prototype={$icu:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.cw.prototype={$icw:1}
W.fP.prototype={
gl:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cx.prototype={
gl:function(a){return a.length}}
W.fQ.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fR.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
gl:function(a){return a.length}}
W.fV.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fW.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$ial",[P.ac],"$aal")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.ac]]},
$aA:function(){return[[P.al,P.ac]]},
$ii:1,
$ai:function(){return[[P.al,P.ac]]},
$ib:1,
$ab:function(){return[[P.al,P.ac]]},
$aH:function(){return[[P.al,P.ac]]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaQ(a))+" x "+H.m(this.gaL(a))},
C:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbQ(b)&&a.top===u.gbX(b)&&this.gaQ(a)===u.gaQ(b)&&this.gaL(a)===u.gaL(b)},
gK:function(a){return W.mH(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(this.gaQ(a)),C.e.gK(this.gaL(a)))},
gec:function(a){return a.bottom},
gaL:function(a){return a.height},
gbQ:function(a){return a.left},
gbW:function(a){return a.right},
gbX:function(a){return a.top},
gaQ:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ac]}}
W.fX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$aA:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.fY.prototype={
gl:function(a){return a.length}}
W.jB.prototype={
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
gW:function(a){var u=this.kg(this)
return new J.au(u,u.length,[H.t(u,0)])},
$aA:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gjg:function(a){return new W.jE(a)},
gcK:function(a){return new W.jB(a,a.children)},
gef:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.m5
if(u==null){u=H.d([],[W.aE])
t=new W.e0(u)
C.a.h(u,W.mG(null))
C.a.h(u,W.mI())
$.m5=t
d=t}else d=u
u=$.m4
if(u==null){u=new W.fh(d)
$.m4=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.li=t.createRange()
t=$.bn.createElement("base")
H.e(t,"$icq")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibC")}u=$.bn
if(!!this.$ibC)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.Z,a.tagName)){$.li.selectNodeContents(s)
r=$.li.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lX(s)
c.di(r)
document.adoptNode(r)
return r},
jo:function(a,b,c){return this.an(a,b,c,null)},
fd:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iX:1,
gf0:function(a){return a.tagName}}
W.h1.prototype={
$1:function(a){return!!J.V(H.e(a,"$iG")).$iX},
$S:25}
W.o.prototype={$io:1}
W.j.prototype={
j9:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fL(a,b,c,!1)},
fL:function(a,b,c,d){return a.addEventListener(b,H.ch(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$aA:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icA:1,
$aH:function(){return[W.aJ]}}
W.h7.prototype={
gl:function(a){return a.length}}
W.hb.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.hg.prototype={
gl:function(a){return a.length}}
W.c3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$aA:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic3:1,
$aH:function(){return[W.G]}}
W.bo.prototype={$ibo:1,
geg:function(a){return a.data}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dR.prototype={
i:function(a){return String(a)},
$idR:1}
W.hJ.prototype={
gl:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.hK.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.O(a,new W.hL(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hM.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.O(a,new W.hN(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aT.prototype={$iaT:1}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$aA:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.af.prototype={$iaf:1}
W.as.prototype={
gaR:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mo("No elements"))
if(t>1)throw H.c(P.mo("More than one element"))
return u.firstChild},
ag:function(a,b){var u,t,s,r
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
return new W.dJ(u,u.length,[H.bU(C.a2,u,"H",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aA:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
k5:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k8:function(a,b){var u,t
try{u=a.parentNode
J.nE(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ff(a):u},
je:function(a,b){return a.appendChild(H.e(b,"$iG"))},
ih:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$aA:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.i3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$aA:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.id.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.O(a,new W.ie(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ih.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$aA:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$aA:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.ix.prototype={
j:function(a,b){return a.getItem(H.K(b))},
n:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gac:function(a){var u=H.d([],[P.f])
this.O(a,new W.iy(u))
return u},
gl:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iI:1,
$aI:function(){return[P.f,P.f]}}
W.iy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.ed.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
u=W.nU("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ag(0,new W.as(u))
return t}}
W.iE.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
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
W.iF.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
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
W.cV.prototype={$icV:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaL")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aL]},
$aA:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$aA:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iM.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$aA:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iR.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.jd.prototype={
i:function(a){return String(a)}}
W.jt.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gjr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibi:1}
W.d9.prototype={
ii:function(a,b){return a.requestAnimationFrame(H.ch(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
h_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.da.prototype={$ida:1}
W.jC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Z]},
$aA:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aH:function(){return[W.Z]}}
W.ez.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
C:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbQ(b)&&a.top===u.gbX(b)&&a.width===u.gaQ(b)&&a.height===u.gaL(b)},
gK:function(a){return W.mH(C.e.gK(a.left),C.e.gK(a.top),C.e.gK(a.width),C.e.gK(a.height))},
gaL:function(a){return a.height},
gaQ:function(a){return a.width}}
W.jR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$aA:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.eR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$aA:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$aA:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.k8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$aA:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.jA.prototype={
O:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gac(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gac:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$ida")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$aI:function(){return[P.f,P.f]}}
W.jE.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gac(this).length}}
W.jF.prototype={}
W.lx.prototype={}
W.jG.prototype={}
W.jH.prototype={
$1:function(a){return this.a.$1(H.e(a,"$io"))},
$S:39}
W.bS.prototype={
fs:function(a){var u
if($.dc.gjI($.dc)){for(u=0;u<262;++u)$.dc.n(0,C.Y[u],W.pp())
for(u=0;u<12;++u)$.dc.n(0,C.v[u],W.pq())}},
b_:function(a){return $.ny().Y(0,W.cy(a))},
az:function(a,b,c){var u=$.dc.j(0,H.m(W.cy(a))+"::"+b)
if(u==null)u=$.dc.j(0,"*::"+b)
if(u==null)return!1
return H.lF(u.$4(a,b,c,this))},
$iaE:1}
W.H.prototype={
gW:function(a){return new W.dJ(a,this.gl(a),[H.bU(this,a,"H",0)])}}
W.e0.prototype={
b_:function(a){return C.a.e9(this.a,new W.hW(a))},
az:function(a,b,c){return C.a.e9(this.a,new W.hV(a,b,c))},
$iaE:1}
W.hW.prototype={
$1:function(a){return H.e(a,"$iaE").b_(this.a)},
$S:27}
W.hV.prototype={
$1:function(a){return H.e(a,"$iaE").az(this.a,this.b,this.c)},
$S:27}
W.eZ.prototype={
fE:function(a,b,c,d){var u,t,s
this.a.ag(0,c)
u=b.bZ(0,new W.k1())
t=b.bZ(0,new W.k2())
this.b.ag(0,u)
s=this.c
s.ag(0,C.B)
s.ag(0,t)},
b_:function(a){return this.a.Y(0,W.cy(a))},
az:function(a,b,c){var u=this,t=W.cy(a),s=u.c
if(s.Y(0,H.m(t)+"::"+b))return u.d.jc(c)
else if(s.Y(0,"*::"+b))return u.d.jc(c)
else{s=u.b
if(s.Y(0,H.m(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.m(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
$iaE:1}
W.k1.prototype={
$1:function(a){return!C.a.Y(C.v,H.K(a))},
$S:28}
W.k2.prototype={
$1:function(a){return C.a.Y(C.v,H.K(a))},
$S:28}
W.ka.prototype={
az:function(a,b,c){if(this.fk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.K(a))},
$S:20}
W.k9.prototype={
b_:function(a){var u=J.V(a)
if(!!u.$icP)return!1
u=!!u.$iq
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.b.aa(b,"on"))return!1
return this.b_(a)},
$iaE:1}
W.dJ.prototype={
F:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdN(J.lU(u.a,t))
u.c=t
return!0}u.sdN(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdN:function(a){this.d=H.C(a,H.t(this,0))},
$ib6:1}
W.aE.prototype={}
W.k_.prototype={$iq3:1}
W.fh.prototype={
di:function(a){new W.kl(this).$2(a,null)},
b8:function(a,b){if(b==null)J.lX(a)
else b.removeChild(a)},
io:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nI(a)
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
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.ak(r)}try{s=W.cy(a)
this.im(H.e(a,"$iX"),b,p,t,s,H.e(o,"$iI"),H.K(n))}catch(r){if(H.ak(r) instanceof P.aP)throw r
else{this.b8(a,b)
window
q="Removing corrupted element "+H.m(t)
if(typeof console!="undefined")window.console.warn(q)}}},
im:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b8(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.b_(a)){o.b8(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.az(a,"is",g)){o.b8(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gac(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.gac(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nL(r)
H.K(r)
if(!q.az(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.m(e)+" "+r+'="'+H.m(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icV)o.di(a.content)},
$ipP:1}
W.kl.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.io(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b8(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.e(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iG")}},
$S:37}
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
W.dh.prototype={}
W.di.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.dj.prototype={}
W.dk.prototype={}
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
P.k5.prototype={
eF:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
df:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$iom)throw H.c(P.j5("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ibX)return a
if(!!u.$icA)return a
if(!!u.$ibo)return a
if(!!u.$icJ||!!u.$ibN||!!u.$icH)return a
if(!!u.$iI){t=q.eF(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.O(a,new P.k7(p,q))
return p.a}if(!!u.$ib){t=q.eF(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.jn(a,t)}throw H.c(P.j5("structured clone of other type"))},
jn:function(a,b){var u,t=J.ck(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.df(t.j(a,u)))
return r}}
P.k7.prototype={
$2:function(a,b){this.a.a[a]=this.b.df(b)},
$S:7}
P.fe.prototype={$ibo:1,
geg:function(a){return this.a}}
P.kw.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k6.prototype={}
P.h8.prototype={
gbt:function(){var u=this.b,t=H.an(u,"A",0),s=W.X
return new H.hB(new H.d8(u,H.n(new P.h9(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.ha(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.e(c,"$iX")
u=this.gbt()
J.nJ(u.b.$1(J.fw(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aH(this.gbt().a)},
j:function(a,b){var u=this.gbt()
return u.b.$1(J.fw(u.a,b))},
gW:function(a){var u=P.m9(this.gbt(),!1,W.X)
return new J.au(u,u.length,[H.t(u,0)])},
$aA:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.h9.prototype={
$1:function(a){return!!J.V(H.e(a,"$iG")).$iX},
$S:25}
P.ha.prototype={
$1:function(a){return H.l(H.e(a,"$iG"),"$iX")},
$S:54}
P.jV.prototype={
gbW:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return H.C(u+t,H.t(this,0))},
gec:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return H.C(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
C:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ial){t=p.a
if(t==u.gbQ(b)){s=p.b
if(s==u.gbX(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.D(r)
q=H.t(p,0)
if(H.C(t+r,q)===u.gbW(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.D(t)
u=H.C(s+t,q)===u.gec(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t=this,s=t.a,r=J.du(s),q=t.b,p=J.du(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.D(o)
u=H.t(t,0)
o=C.f.gK(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.D(s)
u=C.f.gK(H.C(q+s,u))
return P.oJ(P.jT(P.jT(P.jT(P.jT(0,r),p),o),u))}}
P.al.prototype={
gbQ:function(a){return this.a},
gbX:function(a){return this.b},
gaQ:function(a){return this.c},
gaL:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ib8")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$aA:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aH:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$aA:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.i5.prototype={
gl:function(a){return a.length}}
P.cP.prototype={$icP:1}
P.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$aA:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gcK:function(a){return new P.h8(a,new W.as(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.mG(null))
C.a.h(p,W.mI())
C.a.h(p,new W.k9())
c=new W.fh(new W.e0(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.x).jo(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaR(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bf.prototype={$ibf:1}
P.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.e(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$aA:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.eJ.prototype={}
P.eK.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$iou:1}
P.fB.prototype={
gl:function(a){return a.length}}
P.fC.prototype={
j:function(a,b){return P.bv(a.get(H.K(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gac:function(a){var u=H.d([],[P.f])
this.O(a,new P.fD(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iI:1,
$aI:function(){return[P.f,null]}}
P.fD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fE.prototype={
gl:function(a){return a.length}}
P.bW.prototype={}
P.i_.prototype={
gl:function(a){return a.length}}
P.ex.prototype={}
P.dy.prototype={$idy:1}
P.e4.prototype={$ie4:1}
P.ca.prototype={
kd:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibo)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pe(g))
return}if(!!t.$icD)t=!0
else t=!1
if(t){this.iz(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
iz:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
P:function(a,b,c){return a.uniform1f(b,c)},
a8:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ica:1}
P.e7.prototype={$ie7:1}
P.ee.prototype={$iee:1}
P.em.prototype={$iem:1}
P.iv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a2(b,a,null,null,null))
return P.bv(a.item(b))},
n:function(a,b,c){H.e(c,"$iI")
throw H.c(P.J("Cannot assign element of immutable List."))},
M:function(a,b){return this.j(a,b)},
$aA:function(){return[[P.I,,,]]},
$ii:1,
$ai:function(){return[[P.I,,,]]},
$ib:1,
$ab:function(){return[[P.I,,,]]},
$aH:function(){return[[P.I,,,]]}}
P.f1.prototype={}
P.f2.prototype={}
O.a6.prototype={
br:function(a){var u=this
u.sha(H.d([],[a]))
u.sdV(null)
u.sdR(null)
u.sdW(null)},
dj:function(a,b,c){var u=this,t=H.an(u,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdV(b)
u.sdR(a)
u.sdW(c)},
b3:function(a,b){return this.dj(a,null,b)},
dU:function(a){var u
H.k(a,"$ii",[H.an(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ds:function(a,b){var u
H.k(b,"$ii",[H.an(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.au(u,u.length,[H.t(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.an(s,"a6",0)
H.C(b,r)
r=[r]
if(H.E(s.dU(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.ds(t,H.d([b],r))}},
ag:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.an(s,"a6",0)],"$ai")
if(H.E(s.dU(b))){u=s.a
t=u.length
C.a.ag(u,b)
s.ds(t,b)}},
sha:function(a){this.a=H.k(a,"$ib",[H.an(this,"a6",0)],"$ab")},
sdV:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.i,H.an(this,"a6",0)]]})},
sdR:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.an(this,"a6",0)]]})},
sdW:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.an(this,"a6",0)]]})},
$ii:1}
O.cG.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
aS:function(){var u=this.b
if(u!=null)u.H(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.c5()},
bV:function(a){var u=this.a
if(a==null)C.a.h(u,V.c5())
else C.a.h(u,a)
this.aS()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aS()}},
scb:function(a){this.a=H.k(a,"$ib",[V.av],"$ab")}}
E.fH.prototype={}
E.aq.prototype={
sad:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().N(0,s.geS())
u=s.c
if(u!=null)u.gu().h(0,s.geS())
t=new D.P("shape",r,s.c,[F.e8])
t.b=!0
s.bS(t)}},
av:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.t(u,0)]);u.F();)u.d.av(0,b)},
ai:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga6(s))
s.aS()
a.d6(t.f)
s=a.dy
u=(s&&C.a).gaB(s)
if(u!=null&&t.d!=null)u.eX(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.t(s,0)]);s.F();)s.d.ai(a)
a.d5()
a.dx.aN()},
gu:function(){var u=this.z
return u==null?this.z=D.Q():u},
bS:function(a){var u=this.z
if(u!=null)u.H(a)},
a9:function(){return this.bS(null)},
eT:function(a){H.e(a,"$iB")
this.e=null
this.bS(a)},
jT:function(){return this.eT(null)},
eR:function(a){this.bS(H.e(a,"$iB"))},
jQ:function(){return this.eR(null)},
jP:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.aq],"$ai")
for(u=b.length,t=this.geQ(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c1()
o.sal(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
jS:function(a,b){var u,t
H.k(b,"$ii",[E.aq],"$ai")
for(u=b.gW(b),t=this.geQ();u.F();)u.gL(u).gu().N(0,t)
this.a9()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfq:function(a,b){this.y=H.k(b,"$ia6",[E.aq],"$aa6")},
$ibb:1}
E.i9.prototype={
fn:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cG()
t=[V.av]
u.scb(H.d([],t))
u.b=null
u.gu().h(0,new E.ia(s))
s.cy=u
u=new O.cG()
u.scb(H.d([],t))
u.b=null
u.gu().h(0,new E.ib(s))
s.db=u
u=new O.cG()
u.scb(H.d([],t))
u.b=null
u.gu().h(0,new E.ic(s))
s.dx=u
s.siy(H.d([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.siu(new H.aS([P.f,A.cQ]))},
gk0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.A(0,u.ga6(u))
s=u}return s},
d6:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
d5:function(){var u=this.dy
if(u.length>1)u.pop()},
e8:function(a){var u=a.b
if(u.length===0)throw H.c(P.x("May not cache a shader with no name."))
if(this.fr.bz(0,u))throw H.c(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
siy:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
siu:function(a){this.fr=H.k(a,"$iI",[P.f,A.cQ],"$aI")}}
E.ia.prototype={
$1:function(a){var u
H.e(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.ib.prototype={
$1:function(a){var u
H.e(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ic.prototype={
$1:function(a){var u
H.e(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ei.prototype={
dv:function(a){H.e(a,"$iB")
this.eZ()},
du:function(){return this.dv(null)},
gjC:function(){var u,t=this,s=Date.now(),r=C.f.ab(P.m3(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dZ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.D(r)
u=C.e.cV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.e.cV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mr(C.t,s.gk9())}},
eZ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iL(this),{func:1,ret:-1,args:[P.ac]})
C.I.h_(u)
C.I.ii(u,W.mX(t,P.ac))}},
k7:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dZ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
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
o.ai(p.e)}s=p.z
if(s!=null)s.H(null)}catch(q){u=H.ak(q)
t=H.cm(q)
P.lO("Error: "+H.m(u))
P.lO("Stack: "+H.m(t))
throw H.c(u)}}}
E.iL.prototype={
$1:function(a){var u
H.pA(a)
u=this.a
if(u.ch){u.ch=!1
u.k7()}},
$S:35}
Z.eu.prototype={$ipJ:1}
Z.dz.prototype={
a4:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.ev.prototype={$ipK:1}
Z.ct.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a4:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a4(a)},
aP:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sh6:function(a){this.b=H.k(a,"$ib",[Z.bJ],"$ab")},
$ipS:1}
Z.bJ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c7(this.c)+"'")+"]"}}
Z.bh.prototype={
gdl:function(a){var u=this.a,t=(u&$.b1().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.bz().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
jf:function(a){var u,t=$.b1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0)if(u===a)return t
return $.nw()},
C:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.bz().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ds().a)!==0)C.a.h(u,"Clr3")
if((t&$.dt().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fK.prototype={}
D.c1.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sal(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.Y(u,b)
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
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.O(P.m9(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h4(q))
u=r.b
if(u!=null){r.saX(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.O(u,new D.h5(q))}return!0},
ju:function(){return this.H(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
sal:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saX:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h4.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.B.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dA.prototype={
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.C(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dO.prototype={
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.C(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hp.prototype={
jY:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jU:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
si9:function(a){this.d=H.k(a,"$imn",[P.p],"$amn")}}
X.dS.prototype={}
X.hx.prototype={
b6:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gb0()
r=new X.bs(a,V.bt(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
d4:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.fc()
if(typeof u!=="number")return u.c_()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.b6(a,b))
return!0},
jZ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb0()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.cI(new V.Y(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
hI:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dS(c,r.a.gb0(),b)
s.b=!0
t.H(s)
r.y=new P.aB(u,!1)
r.x=V.bt()}}
X.aD.prototype={
C:function(a,b){var u=this
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
X.hP.prototype={
c8:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gb0(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
d4:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.c8(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.fc()
if(typeof t!=="number")return t.c_()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.c8(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.c8(a,b,!1))
return!0},
k_:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb0()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.cI(new V.Y(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gei:function(){var u=this.b
return u==null?this.b=D.Q():u},
gbY:function(){var u=this.c
return u==null?this.c=D.Q():u},
geP:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.cI.prototype={}
X.i4.prototype={}
X.ek.prototype={}
X.iP.prototype={
b6:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a7],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=q.a.gb0()
r=new X.ek(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jX:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.H(this.b6(a,!0))
return!0},
jV:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.H(this.b6(a,!0))
return!0},
jW:function(a){var u
H.k(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.H(this.b6(a,!1))
return!0}}
X.ep.prototype={
gb0:function(){var u=this.a,t=C.m.gef(u).c
t.toString
u=C.m.gef(u).d
u.toString
return V.ml(0,0,t,u)},
dI:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dO(u,new X.aD(t,a.altKey,a.shiftKey))},
aY:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
cv:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.v()
u=t.top
if(typeof r!=="number")return r.v()
return new V.a7(s-q,r-u)},
b7:function(a){return new V.Y(a.movementX,a.movementY)},
cp:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
q=C.e.au(r.pageX)
C.e.au(r.pageY)
p=o.left
C.e.au(r.pageX)
C.a.h(n,new V.a7(q-p,C.e.au(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dA(u,new X.aD(t,a.altKey,a.shiftKey))},
cc:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.v()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.v()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hC:function(a){this.f=!0},
hq:function(a){this.f=!1},
hw:function(a){H.e(a,"$iaf")
if(H.E(this.f)&&this.cc(a))a.preventDefault()},
hG:function(a){var u
H.e(a,"$ib7")
if(!H.E(this.f))return
u=this.dI(a)
this.b.jY(u)},
hE:function(a){var u
H.e(a,"$ib7")
if(!H.E(this.f))return
u=this.dI(a)
this.b.jU(u)},
hK:function(a){var u,t,s,r,q=this
H.e(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aY(a)
if(H.E(q.x)){t=q.aE(a)
s=q.b7(a)
if(q.d.d4(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aH(a)
if(q.c.d4(t,r))a.preventDefault()},
hO:function(a){var u,t,s,r=this
H.e(a,"$iaf")
r.aY(a)
u=r.aE(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aH(a)
if(r.c.bg(u,s))a.preventDefault()},
hA:function(a){var u,t,s,r=this
H.e(a,"$iaf")
if(!r.cc(a)){r.aY(a)
u=r.aE(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aH(a)
if(r.c.bg(u,s))a.preventDefault()}},
hM:function(a){var u,t,s,r=this
H.e(a,"$iaf")
r.aY(a)
u=r.aE(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aH(a)
if(r.c.bf(u,s))a.preventDefault()},
hy:function(a){var u,t,s,r=this
H.e(a,"$iaf")
if(!r.cc(a)){r.aY(a)
u=r.aE(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aH(a)
if(r.c.bf(u,s))a.preventDefault()}},
hQ:function(a){var u,t,s=this
H.e(a,"$ibi")
s.aY(a)
u=new V.Y((a&&C.H).gjq(a),C.H.gjr(a)).w(0,180)
if(H.E(s.x)){if(s.d.jZ(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aH(a)
if(s.c.k_(u,t))a.preventDefault()},
hS:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aH(s.y)
s.d.hI(u,t,r)}},
i7:function(a){var u,t=this
H.e(a,"$ib_")
t.a.focus()
t.f=!0
t.cv(a)
u=t.cp(a)
if(t.e.jX(u))a.preventDefault()},
i3:function(a){var u
H.e(a,"$ib_")
this.cv(a)
u=this.cp(a)
if(this.e.jV(u))a.preventDefault()},
i5:function(a){var u
H.e(a,"$ib_")
this.cv(a)
u=this.cp(a)
if(this.e.jW(u))a.preventDefault()},
sh0:function(a){this.z=H.k(a,"$ib",[[P.cS,P.S]],"$ab")}}
D.bG.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.Q():u},
aD:function(a){var u
H.e(a,"$iB")
u=this.d
if(u!=null)u.H(a)},
fv:function(){return this.aD(null)},
$ia9:1,
$ibb:1}
D.a9.prototype={$ibb:1}
D.dP.prototype={
gu:function(){var u=this.Q
return u==null?this.Q=D.Q():u},
aD:function(a){var u=this.Q
if(u!=null)u.H(a)},
dT:function(a){var u
H.e(a,"$iB")
u=this.ch
if(u!=null)u.H(a)},
hH:function(){return this.dT(null)},
hU:function(a){var u,t,s
H.k(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.F)(a),++t){s=a[t]
if(s==null||this.ft(s))return!1}return!0},
hk:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdS(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=H.e(b[q],"$ia9")
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
this.aD(n)},
hY:function(a,b){var u,t,s,r=D.a9
H.k(b,"$ii",[r],"$ai")
for(u=b.gW(b),t=this.gdS();u.F();){s=u.gL(u)
C.a.N(this.e,s)
s.gu().N(0,t)}r=new D.bL([r])
r.b=!0
this.aD(r)},
ft:function(a){var u=C.a.Y(this.e,a)
return u},
sfY:function(a){this.e=H.k(a,"$ib",[D.bG],"$ab")},
si8:function(a){this.f=H.k(a,"$ib",[D.e3],"$ab")},
siw:function(a){this.r=H.k(a,"$ib",[D.eb],"$ab")},
siI:function(a){this.x=H.k(a,"$ib",[D.ef],"$ab")},
siJ:function(a){this.y=H.k(a,"$ib",[D.eg],"$ab")},
siK:function(a){this.z=H.k(a,"$ib",[D.eh],"$ab")},
$ai:function(){return[D.a9]},
$aa6:function(){return[D.a9]}}
D.e3.prototype={$ia9:1,$ibb:1}
D.eb.prototype={$ia9:1,$ibb:1}
D.ef.prototype={$ia9:1,$ibb:1}
D.eg.prototype={$ia9:1,$ibb:1}
D.eh.prototype={$ia9:1,$ibb:1}
V.u.prototype={
p:function(a,b){var u=C.e.p(this.a,b.gd9()),t=C.e.p(this.b,b.gc0()),s=C.e.p(this.c,b.gcG())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.u(u,t,s)},
v:function(a,b){var u=C.e.v(this.a,b.gd9()),t=C.e.v(this.b,b.gc0()),s=C.e.v(this.c,b.gcG())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.u(u,t,s)},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a0(this.a,3,0)+", "+V.a0(this.b,3,0)+", "+V.a0(this.c,3,0)+"]"}}
V.ap.prototype={
p:function(a,b){var u=this,t=C.e.p(u.a,b.gd9()),s=C.e.p(u.b,b.gc0()),r=C.e.p(u.c,b.gcG()),q=C.e.p(u.d,b.gjd(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ap(t,s,r,q)},
v:function(a,b){var u=this,t=C.e.v(u.a,b.gd9()),s=C.e.v(u.b,b.gc0()),r=C.e.v(u.c,b.gcG()),q=C.e.v(u.d,b.gjd(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ap(t,s,r,q)},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a0(u.a,3,0)+", "+V.a0(u.b,3,0)+", "+V.a0(u.c,3,0)+", "+V.a0(u.d,3,0)+"]"}}
V.h3.prototype={}
V.dX.prototype={
aj:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.W().a
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cj(H.d([q.a,q.d,q.r],p),3,0),n=V.cj(H.d([q.b,q.e,q.x],p),3,0),m=V.cj(H.d([q.c,q.f,q.y],p),3,0)
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
aj:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
cZ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.W().a)return V.c5()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
de:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a_(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.W().a
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
J:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cj(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cj(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cj(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cj(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
S:function(){return this.J("")}}
V.a7.prototype={
p:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
v:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
C:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a0(this.a,3,0)+", "+V.a0(this.b,3,0)+"]"}}
V.a_.prototype={
p:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a0(this.a,3,0)+", "+V.a0(this.b,3,0)+", "+V.a0(this.c,3,0)+"]"}}
V.ax.prototype={
p:function(a,b){var u=this
return new V.ax(C.e.p(u.a,b.gkk(b)),C.e.p(u.b,b.gkl(b)),C.e.p(u.c,b.gkm(b)),C.e.p(u.d,b.gkj(b)))},
v:function(a,b){var u=this
return new V.ax(C.e.v(u.a,b.gkk(b)),C.e.v(u.b,b.gkl(b)),C.e.v(u.c,b.gkm(b)),C.e.v(u.d,b.gkj(b)))},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a0(u.a,3,0)+", "+V.a0(u.b,3,0)+", "+V.a0(u.c,3,0)+", "+V.a0(u.d,3,0)+"]"}}
V.e6.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a0(u.a,3,0)+", "+V.a0(u.b,3,0)+", "+V.a0(u.c,3,0)+", "+V.a0(u.d,3,0)+"]"}}
V.Y.prototype={
d_:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gjs(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.gjt(b)
if(typeof t!=="number")return t.p()
return new V.Y(s,C.e.p(t,u))},
v:function(a,b){var u,t=this.a,s=b.gjs(b)
if(typeof t!=="number")return t.v()
s=C.e.v(t,s)
t=this.b
u=b.gjt(b)
if(typeof t!=="number")return t.v()
return new V.Y(s,C.e.v(t,u))},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.Y(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.W().a){u=$.my
return u==null?$.my=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Y(u/b,t/b)},
C:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.W()
s.toString
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a0(this.a,3,0)+", "+V.a0(this.b,3,0)+"]"}}
V.L.prototype={
d_:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d0:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
V:function(a){return new V.L(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.W().a)return V.d7()
return new V.L(this.a/b,this.b/b,this.c/b)},
eO:function(){var u=$.W().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
C:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.W().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a0(this.a,3,0)+", "+V.a0(this.b,3,0)+", "+V.a0(this.c,3,0)+"]"}}
U.fL.prototype={
c4:function(a){var u=V.pI(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.Q():u},
U:function(a){var u=this.y
if(u!=null)u.H(a)},
sdg:function(a,b){},
sd1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.W().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c4(u)}s=new D.P("maximumLocation",s,t.b,[P.r])
s.b=!0
t.U(s)}},
sd3:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.W().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c4(u)}s=new D.P("minimumLocation",s,t.c,[P.r])
s.b=!0
t.U(s)}},
sa5:function(a,b){var u,t=this
b=t.c4(b)
u=t.d
if(!(Math.abs(u-b)<$.W().a)){t.d=b
u=new D.P("location",u,b,[P.r])
u.b=!0
t.U(u)}},
sd2:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.W().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.P("maximumVelocity",r,a,[P.r])
r.b=!0
s.U(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.W().a)){u.f=a
t=new D.P("velocity",t,a,[P.r])
t.b=!0
u.U(t)}},
scN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.W().a)){this.x=a
u=new D.P("dampening",u,a,[P.r])
u.b=!0
this.U(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.W().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.W().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dC.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
b2:function(a,b,c){return this.a},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.cC.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
U:function(a){var u
H.e(a,"$iB")
u=this.e
if(u!=null)u.H(a)},
ae:function(){return this.U(null)},
hi:function(a,b){var u,t,s,r,q,p,o,n=U.ag
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaT(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bK([n])
n.b=!0
this.U(n)},
hW:function(a,b){var u,t,s=U.ag
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.gaT();u.F();)u.gL(u).gu().N(0,t)
s=new D.bL([s])
s.b=!0
this.U(s)},
b2:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.t(r,0)]),u=null;r.F();){q=r.d
if(q!=null){t=q.b2(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.c5():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
C:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a1(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ag]},
$aa6:function(){return[U.ag]},
$iag:1}
U.ag.prototype={}
U.eq.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
U:function(a){var u
H.e(a,"$iB")
u=this.cy
if(u!=null)u.H(a)},
ae:function(){return this.U(null)},
b9:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gei().h(0,u.gcd())
u.a.c.geP().h(0,u.gcf())
u.a.c.gbY().h(0,u.gci())
return!0},
ce:function(a){var u=this
H.e(a,"$iB")
if(!J.a1(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
cg:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iB"),"$ibs")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.v(0,a.y)
u=new V.Y(u.a,u.b)
u=u.G(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.v(0,a.y)
u=new V.Y(t.a,t.b).A(0,2).w(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=new V.Y(s.a,s.b).A(0,2).w(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
n.b.sX(0)
t=t.v(0,a.z)
n.Q=new V.Y(t.a,t.b).A(0,2).w(0,u.gah())}n.ae()},
cj:function(a){var u,t,s,r=this
H.e(a,"$iB")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.G(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sX(t*10*s)
r.ae()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ba(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iag:1}
U.er.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
U:function(a){var u
H.e(a,"$iB")
u=this.fx
if(u!=null)u.H(a)},
ae:function(){return this.U(null)},
b9:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gei().h(0,s.gcd())
s.a.c.geP().h(0,s.gcf())
s.a.c.gbY().h(0,s.gci())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.ghb())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.ghd())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.giF())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.giD())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.giB())
return!0},
ay:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.V()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.V()
t=-t}return new V.Y(u,t)},
ce:function(a){var u=this
a=H.l(H.e(a,"$iB"),"$ibs")
if(!J.a1(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
cg:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iB"),"$ibs")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.v(0,a.y)
u=new V.Y(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.v(0,a.y)
u=n.ay(new V.Y(t.a,t.b).A(0,2).w(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=n.ay(new V.Y(s.a,s.b).A(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.v(0,a.z)
n.dx=n.ay(new V.Y(t.a,t.b).A(0,2).w(0,u.gah()))}n.ae()},
cj:function(a){var u,t,s,r=this
H.e(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.ae()}},
hc:function(a){var u=this
if(H.l(H.e(a,"$iB"),"$idS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
he:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iB"),"$ibs")
if(!J.a1(n.d,a.x.b))return
u=a.c
t=a.d
s=t.v(0,a.y)
r=n.ay(new V.Y(s.a,s.b).A(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.v(0,a.z)
n.dx=n.ay(new V.Y(t.a,t.b).A(0,2).w(0,u.gah()))
n.ae()},
iG:function(a){var u=this
H.e(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iE:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.e(a,"$iB"),"$iek")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.v(0,a.y)
u=new V.Y(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.v(0,a.y)
u=n.ay(new V.Y(t.a,t.b).A(0,2).w(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=n.ay(new V.Y(s.a,s.b).A(0,2).w(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sa5(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.v(0,a.z)
n.dx=n.ay(new V.Y(t.a,t.b).A(0,2).w(0,u.gah()))}n.ae()},
iC:function(a){var u,t,s,r=this
H.e(a,"$iB")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.ae()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ba(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.ba(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iag:1}
U.es.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
U:function(a){var u=this.r
if(u!=null)u.H(a)},
b9:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.ghf()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
hg:function(a){var u,t,s,r,q=this
H.e(a,"$iB")
if(!J.a1(q.b,q.a.b.c))return
H.l(a,"$icI")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.P("zoom",u,r,[P.r])
u.b=!0
q.U(u)}},
b2:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ba(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iag:1}
M.dB.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
a2:function(a){var u
H.e(a,"$iB")
u=this.r
if(u!=null)u.H(a)},
b4:function(){return this.a2(null)},
i_:function(a,b){var u,t,s,r,q,p,o,n=M.aF
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bK([n])
n.b=!0
this.a2(n)},
i1:function(a,b){var u,t,s=M.aF
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.ga1();u.F();)u.gL(u).gu().N(0,t)
s=new D.bL([s])
s.b=!0
this.a2(s)},
ai:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.t(u,0)]);u.F();){t=u.d
if(t!=null)t.ai(a)}s.f=!1},
$ai:function(){return[M.aF]},
$aa6:function(){return[M.aF]},
$iaF:1}
M.dD.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
a2:function(a){var u
H.e(a,"$iB")
u=this.r
if(u!=null)u.H(a)},
b4:function(){return this.a2(null)},
sba:function(a){var u,t,s=this
if(a==null)a=new X.hj()
u=s.b
if(u!==a){if(u!=null)u.gu().N(0,s.ga1())
t=s.b
s.b=a
a.gu().h(0,s.ga1())
u=new D.P("camera",t,s.b,[X.bY])
u.b=!0
s.a2(u)}},
sbi:function(a,b){var u,t,s=this
if(b==null)b=X.lj(null)
u=s.c
if(u!==b){if(u!=null)u.gu().N(0,s.ga1())
t=s.c
s.c=b
b.gu().h(0,s.ga1())
u=new D.P("target",t,s.c,[X.cU])
u.b=!0
s.a2(u)}},
sbj:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().N(0,t.ga1())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga1())
s=new D.P("technique",u,t.d,[O.bP])
s.b=!0
t.a2(s)}},
ai:function(a){var u=this
a.d6(u.d)
u.c.a4(a)
u.b.a4(a)
u.e.av(0,a)
u.e.ai(a)
u.b.aP(a)
u.c.toString
a.d5()},
$iaF:1}
M.dH.prototype={
a2:function(a){var u
H.e(a,"$iB")
u=this.y
if(u!=null)u.H(a)},
b4:function(){return this.a2(null)},
hs:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.F)(b),++q){p=b[q]
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
this.a2(n)},
hu:function(a,b){var u,t,s=E.aq
H.k(b,"$ii",[s],"$ai")
for(u=b.gW(b),t=this.ga1();u.F();)u.gL(u).gu().N(0,t)
s=new D.bL([s])
s.b=!0
this.a2(s)},
sba:function(a){var u,t,s=this
if(a==null)a=X.me(null)
u=s.b
if(u!==a){if(u!=null)u.gu().N(0,s.ga1())
t=s.b
s.b=a
a.gu().h(0,s.ga1())
u=new D.P("camera",t,s.b,[X.bY])
u.b=!0
s.a2(u)}},
sbi:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gu().N(0,t.ga1())
u=t.c
t.c=b
b.gu().h(0,t.ga1())
s=new D.P("target",u,t.c,[X.cU])
s.b=!0
t.a2(s)}},
sbj:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().N(0,t.ga1())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga1())
s=new D.P("technique",u,t.d,[O.bP])
s.b=!0
t.a2(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.Q():u},
ai:function(a){var u,t=this
a.d6(t.d)
t.c.a4(a)
t.b.a4(a)
u=t.d
if(u!=null)u.av(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.t(u,0)]);u.F();)u.d.av(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.t(u,0)]);u.F();)u.d.ai(a)
t.b.toString
a.cy.aN()
a.db.aN()
t.c.toString
a.d5()},
sfS:function(a,b){this.e=H.k(b,"$ia6",[E.aq],"$aa6")},
$iaF:1}
M.aF.prototype={}
A.dx.prototype={}
A.fA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dV.prototype={
fm:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
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
d1.iO(u)
d1.iV(u)
d1.iP(u)
d1.j2(u)
d1.j3(u)
d1.iX(u)
d1.j7(u)
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
q.iS(u)
q.iN(u)
q.iQ(u)
q.iT(u)
q.j0(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iZ(u)
q.j_(u)}q.iW(u)
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
q.iR(u)
q.iY(u)
q.j1(u)
q.j4(u)
q.j5(u)
q.j6(u)
q.iU(u)}m=u.a+="// === Main ===\n"
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
a6.eN(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
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
if(d1.x2)a6.k1=H.l(a6.y.q(0,"txt2DMat"),"$id0")
if(d1.y1)a6.k2=H.l(a6.y.q(0,"txtCubeMat"),"$iaz")
if(d1.y2)a6.k3=H.l(a6.y.q(0,"colorMat"),"$iaz")
a6.sfO(H.d([],[A.az]))
t=d1.aA
if(t>0){a6.k4=H.e(a6.y.q(0,"bendMatCount"),"$iR")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.v(P.x(a7+q+a8));(s&&C.a).h(s,H.l(g,"$iaz"))}}t=d1.a
if(t!==C.d){a6.r2=H.l(a6.y.q(0,"emissionClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.rx=H.l(a6.y.q(0,a9),"$iar")
a6.x1=H.l(a6.y.q(0,b0),"$iR")
break
case C.i:a6.ry=H.l(a6.y.q(0,a9),"$iam")
a6.x1=H.l(a6.y.q(0,b0),"$iR")
break}}t=d1.b
if(t!==C.d){a6.x2=H.l(a6.y.q(0,"ambientClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.y1=H.l(a6.y.q(0,b1),"$iar")
a6.aA=H.l(a6.y.q(0,b2),"$iR")
break
case C.i:a6.y2=H.l(a6.y.q(0,b1),"$iam")
a6.aA=H.l(a6.y.q(0,b2),"$iR")
break}}t=d1.c
if(t!==C.d){a6.at=H.l(a6.y.q(0,"diffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.bB=H.l(a6.y.q(0,b3),"$iar")
a6.bC=H.l(a6.y.q(0,b4),"$iR")
break
case C.i:a6.ej=H.l(a6.y.q(0,b3),"$iam")
a6.bC=H.l(a6.y.q(0,b4),"$iR")
break}}t=d1.d
if(t!==C.d){a6.bD=H.l(a6.y.q(0,"invDiffuseClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ek=H.l(a6.y.q(0,b5),"$iar")
a6.bE=H.l(a6.y.q(0,b6),"$iR")
break
case C.i:a6.el=H.l(a6.y.q(0,b5),"$iam")
a6.bE=H.l(a6.y.q(0,b6),"$iR")
break}}t=d1.e
if(t!==C.d){a6.bH=H.l(a6.y.q(0,"shininess"),"$ia4")
a6.bF=H.l(a6.y.q(0,"specularClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.em=H.l(a6.y.q(0,b7),"$iar")
a6.bG=H.l(a6.y.q(0,b8),"$iR")
break
case C.i:a6.en=H.l(a6.y.q(0,b7),"$iam")
a6.bG=H.l(a6.y.q(0,b8),"$iR")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.h:a6.eo=H.l(a6.y.q(0,"bumpTxt"),"$iar")
a6.bI=H.l(a6.y.q(0,b9),"$iR")
break
case C.i:a6.ep=H.l(a6.y.q(0,"bumpTxt"),"$iam")
a6.bI=H.l(a6.y.q(0,b9),"$iR")
break}if(d1.dy){a6.eq=H.l(a6.y.q(0,"envSampler"),"$iam")
a6.er=H.l(a6.y.q(0,"nullEnvTxt"),"$iR")
t=d1.r
if(t!==C.d){a6.bJ=H.l(a6.y.q(0,"reflectClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.es=H.l(a6.y.q(0,c0),"$iar")
a6.bK=H.l(a6.y.q(0,c1),"$iR")
break
case C.i:a6.eu=H.l(a6.y.q(0,c0),"$iam")
a6.bK=H.l(a6.y.q(0,c1),"$iR")
break}}t=d1.x
if(t!==C.d){a6.bL=H.l(a6.y.q(0,"refraction"),"$ia4")
a6.bM=H.l(a6.y.q(0,"refractClr"),"$iO")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ev=H.l(a6.y.q(0,c2),"$iar")
a6.bN=H.l(a6.y.q(0,c3),"$iR")
break
case C.i:a6.ew=H.l(a6.y.q(0,c2),"$iam")
a6.bN=H.l(a6.y.q(0,c3),"$iR")
break}}}t=d1.y
if(t!==C.d){a6.bO=H.l(a6.y.q(0,"alpha"),"$ia4")
switch(t){case C.d:break
case C.j:break
case C.h:a6.ex=H.l(a6.y.q(0,c4),"$iar")
a6.bP=H.l(a6.y.q(0,c5),"$iR")
break
case C.i:a6.ey=H.l(a6.y.q(0,c4),"$iam")
a6.bP=H.l(a6.y.q(0,c5),"$iR")
break}}a6.sfw(H.d([],[A.d_]))
a6.sfz(H.d([],[A.d1]))
a6.sfA(H.d([],[A.d2]))
a6.sfB(H.d([],[A.d3]))
a6.sfC(H.d([],[A.d4]))
a6.sfD(H.d([],[A.d5]))
if(d1.k2){t=d1.z
if(t>0){a6.ez=H.e(a6.y.q(0,"dirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.cP;(s&&C.a).h(s,new A.d_(g,f))}}t=d1.Q
if(t>0){a6.eA=H.e(a6.y.q(0,"pntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.v(P.x(a7+r+a8))
H.l(e,"$iO")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.v(P.x(a7+r+a8))
H.l(d,"$ia4")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.v(P.x(a7+r+a8))
H.l(c,"$ia4")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.v(P.x(a7+r+a8))
H.l(b,"$ia4")
s=a6.cQ;(s&&C.a).h(s,new A.d1(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.eB=H.e(a6.y.q(0,"spotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.x(a7+r+a8))
H.l(e,"$iO")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.x(a7+r+a8))
H.l(d,"$iO")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.v(P.x(a7+r+a8))
H.l(c,"$ia4")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.v(P.x(a7+r+a8))
H.l(b,"$ia4")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.x(a7+r+a8))
H.l(a,"$ia4")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.x(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.x(a7+r+a8))
H.l(a1,"$ia4")
s=a6.cR;(s&&C.a).h(s,new A.d2(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.eC=H.e(a6.y.q(0,"txtDirLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.x(a7+r+a8))
H.l(e,"$iO")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.v(P.x(a7+r+a8))
H.l(d,"$iO")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.v(P.x(a7+r+a8))
H.l(c,"$iO")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.x(a7+r+a8))
H.l(b,"$iR")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.v(P.x(a7+r+a8))
H.l(a,"$iar")
s=a6.cS;(s&&C.a).h(s,new A.d3(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.eD=H.e(a6.y.q(0,"txtPntLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.v(P.x(a7+r+a8))
H.l(e,"$id0")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.v(P.x(a7+r+a8))
H.l(d,"$iO")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.v(P.x(a7+r+a8))
H.l(c,"$iR")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.v(P.x(a7+r+a8))
H.l(b,"$ia4")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.v(P.x(a7+r+a8))
H.l(a,"$ia4")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.v(P.x(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.v(P.x(a7+r+a8))
H.l(a1,"$iam")
s=a6.cT;(s&&C.a).h(s,new A.d4(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.eE=H.e(a6.y.q(0,"txtSpotLightCount"),"$iR")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.v(P.x(a7+r+a8))
H.l(g,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.v(P.x(a7+r+a8))
H.l(f,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.v(P.x(a7+r+a8))
H.l(e,"$iO")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.v(P.x(a7+r+a8))
H.l(d,"$iO")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.v(P.x(a7+r+a8))
H.l(c,"$iO")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.x(a7+r+a8))
H.l(b,"$iR")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.v(P.x(a7+r+a8))
H.l(a,"$iO")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.v(P.x(a7+r+a8))
H.l(a0,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.x(a7+r+a8))
H.l(a1,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.v(P.x(a7+r+a8))
H.l(a2,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.v(P.x(a7+r+a8))
H.l(a3,"$ia4")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.v(P.x(a7+r+a8))
H.l(a4,"$ia4")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.v(P.x(a7+r+a8))
H.l(a5,"$iar")
s=a6.cU;(s&&C.a).h(s,new A.d5(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){C.c.a8(b.a,b.d,1)},
am:function(a,b,c){if(c==null||c.d<6)C.c.a8(b.a,b.d,1)
else{a.dk(c)
C.c.a8(b.a,b.d,0)}},
sfO:function(a){this.r1=H.k(a,"$ib",[A.az],"$ab")},
sfw:function(a){this.cP=H.k(a,"$ib",[A.d_],"$ab")},
sfz:function(a){this.cQ=H.k(a,"$ib",[A.d1],"$ab")},
sfA:function(a){this.cR=H.k(a,"$ib",[A.d2],"$ab")},
sfB:function(a){this.cS=H.k(a,"$ib",[A.d3],"$ab")},
sfC:function(a){this.cT=H.k(a,"$ib",[A.d4],"$ab")},
sfD:function(a){this.cU=H.k(a,"$ib",[A.d5],"$ab")}}
A.hG.prototype={
iO:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aA+"];\n"
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
iV:function(a){var u
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
iP:function(a){var u
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
j2:function(a){var u,t
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
j3:function(a){var u,t
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
iX:function(a){var u
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
j7:function(a){var u
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
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aw(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iS:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
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
iN:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
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
iQ:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
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
iT:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
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
j0:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
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
iW:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iZ:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
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
j_:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
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
iR:function(a){var u,t=this.z
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
iY:function(a){var u,t=this.Q
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
j1:function(a){var u,t=this.ch
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
j4:function(a){var u,t,s=this.cx
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
j5:function(a){var u,t,s=this.cy
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
j6:function(a){var u,t,s=this.db
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
iU:function(a){var u
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
A.d_.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.d2.prototype={}
A.d5.prototype={}
A.cQ.prototype={
dr:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eN:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dJ(b,35633)
r.f=r.dJ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.E(H.lF(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.x("Failed to link shader: "+H.m(s)))}r.ir()
r.it()},
a4:function(a){a.a.useProgram(this.r)
this.x.jv()},
dJ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.lF(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.x("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
ir:function(){var u,t,s,r=this,q=H.d([],[A.dx]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dx(p,t.name,s))}r.x=new A.fA(q)},
it:function(){var u,t,s,r=this,q=H.d([],[A.el]),p=r.a,o=H.aj(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jp(t.type,t.size,t.name,s))}r.y=new A.j2(q)},
aU:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.lt(u,this.r,b,a,c)},
fV:function(a,b,c){var u=this.a
if(a===1)return new A.ar(u,b,c)
else return A.lt(u,this.r,b,a,c)},
fW:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.lt(u,this.r,b,a,c)},
bx:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jp:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aU(b,c,d)
case 5121:return u.aU(b,c,d)
case 5122:return u.aU(b,c,d)
case 5123:return u.aU(b,c,d)
case 5124:return u.aU(b,c,d)
case 5125:return u.aU(b,c,d)
case 5126:return new A.a4(u.a,c,d)
case 35664:return new A.iY(u.a,c,d)
case 35665:return new A.O(u.a,c,d)
case 35666:return new A.j0(u.a,c,d)
case 35667:return new A.iZ(u.a,c,d)
case 35668:return new A.j_(u.a,c,d)
case 35669:return new A.j1(u.a,c,d)
case 35674:return new A.j3(u.a,c,d)
case 35675:return new A.d0(u.a,c,d)
case 35676:return new A.az(u.a,c,d)
case 35678:return u.fV(b,c,d)
case 35680:return u.fW(b,c,d)
case 35670:throw H.c(u.bx("BOOL",c))
case 35671:throw H.c(u.bx("BOOL_VEC2",c))
case 35672:throw H.c(u.bx("BOOL_VEC3",c))
case 35673:throw H.c(u.bx("BOOL_VEC4",c))
default:throw H.c(P.x("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c0.prototype={
i:function(a){return this.b}}
A.ea.prototype={}
A.el.prototype={}
A.j2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
S:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.R.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siL:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a4.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.O.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d0.prototype={
aq:function(a){var u=new Float32Array(H.ce(H.k(a,"$ib",[P.r],"$ab")))
C.c.f5(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.az.prototype={
aq:function(a){var u=new Float32Array(H.ce(H.k(a,"$ib",[P.r],"$ab")))
C.c.f6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ar.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.am.prototype={
dk:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kn.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.d0(s.b,b).d0(s.d.d0(s.c,b),c)
a.sa5(0,new V.a_(r.a,r.b,r.c))
a.sf1(r.w(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
a.sea(new V.ax(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kx.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.kz.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sa5(0,new V.a_(s,u,q))
u=new V.L(s,u,q)
a.sf1(u.w(0,Math.sqrt(u.G(u))))
a.sea(new V.ax(1-c,2+c,-1,-1))},
$S:5}
F.kA.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.kB.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.l8.prototype={
$2:function(a,b){return 0},
$S:6}
F.l9.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.G(t))).A(0,this.b+s)
a.sa5(0,new V.a_(s.a,s.b,s.c))},
$S:5}
F.la.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kI.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a_(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.ky.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lT(n.$1(o),m)
m=J.nC(J.lT(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.L(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.G(m)))
n=$.mA
if(n==null){n=new V.L(1,0,0)
$.mA=n
t=n}else t=n
n=u.aI(!J.a1(u,t)?V.mE():t)
s=n.w(0,Math.sqrt(n.G(n)))
n=s.aI(u)
t=n.w(0,Math.sqrt(n.G(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa5(0,J.nB(l,new V.a_(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.aa.prototype={
bb:function(){var u=this
if(!u.gbc()){C.a.N(u.a.a.d.b,u)
u.a.a.a9()}u.cr()
u.cs()
u.ie()},
cw:function(a){this.a=a
C.a.h(a.d.b,this)},
cz:function(a){this.b=a
C.a.h(a.d.c,this)},
iq:function(a){this.c=a
C.a.h(a.d.d,this)},
cr:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
ie:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gbc:function(){return this.a==null||this.b==null||this.c==null},
fN:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eO())return
return s.w(0,Math.sqrt(s.G(s)))},
fR:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.v(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.G(r)))
r=t.v(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aI(r.w(0,Math.sqrt(r.G(r))))
return r.w(0,Math.sqrt(r.G(r)))},
cJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.fN()
if(u==null){u=t.fR()
if(u==null)return!1}t.d=u
t.a.a.a9()
return!0},
fM:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d7()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.eO())return
return s.w(0,Math.sqrt(s.G(s)))},
fQ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.W().a){l=d.v(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.v(0,g).A(0,p).p(0,g).v(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.G(l)))
l=o.aI(q)
l=l.w(0,Math.sqrt(l.G(l))).aI(o)
q=l.w(0,Math.sqrt(l.G(l)))}return q},
cH:function(){var u,t=this
if(t.e!=null)return!0
u=t.fM()
if(u==null){u=t.fQ()
if(u==null)return!1}t.e=u
t.a.a.a9()
return!0},
gjk:function(a){var u=this
if(J.a1(u.a,u.b))return!0
if(J.a1(u.b,u.c))return!0
if(J.a1(u.c,u.a))return!0
return!1},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u,t,s=this
if(s.gbc())return a+"disposed"
u=a+C.b.ap(J.at(s.a.e),0)+", "+C.b.ap(J.at(s.b.e),0)+", "+C.b.ap(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.J("")}}
F.h6.prototype={}
F.is.prototype={
bd:function(a,b,c){var u,t=b.a
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
F.br.prototype={
bb:function(){var u=this
if(!u.gbc()){C.a.N(u.a.a.c.b,u)
u.a.a.a9()}u.cr()
u.cs()},
cw:function(a){this.a=a
C.a.h(a.c.b,this)},
cz:function(a){this.b=a
C.a.h(a.c.c,this)},
cr:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cs:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gbc:function(){return this.a==null||this.b==null},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){if(this.gbc())return a+"disposed"
return a+C.b.ap(J.at(this.a.e),0)+", "+C.b.ap(J.at(this.b.e),0)},
S:function(){return this.J("")}}
F.hr.prototype={}
F.iW.prototype={
bd:function(a,b,c){var u,t=b.a
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
F.bO.prototype={
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ap(J.at(u.e),0)},
S:function(){return this.J("")}}
F.e8.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.D()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){r=g[s]
h.a.h(0,r.jm())}h.a.D()
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
o=new F.bO()
if(n.a==null)H.v(P.x("May not create a point with a vertex which is not attached to a shape."))
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
F.o2(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.F)(g),++s){j=g[s]
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
F.cz(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
jM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ad];u.length!==0;){t=C.a.gjz(u)
C.a.eW(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.bd(0,t,q)){C.a.h(s,q)
C.a.eW(u,r)}}if(s.length>1)b.be(s)}}p.a.D()
p.c.da()
p.d.da()
p.b.k6()
p.c.dc(new F.iW())
p.d.dc(new F.is())
o=p.e
if(o!=null)o.aC(0)},
cB:function(){this.jM(new F.jn(),new F.hX())},
ed:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b1()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.by().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.bw().a)!==0)++s
r=a3.gdl(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dz])
for(n=0,m=0;m<s;++m){l=a3.jf(m)
k=l.gdl(l)
C.a.n(o,m,new Z.dz(l,k,n*4,q))
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
e=new Z.ct(new Z.eu(a0,f),o,a3)
e.sh6(H.d([],[Z.bJ]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)}b=Z.lw(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.D()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.D()
C.a.h(d,c.e)}b=Z.lw(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(1,d.length,b))}if(a.d.b.length!==0){t=P.p
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
C.a.h(d,c.e)}b=Z.lw(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bJ(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.J(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.J(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.J(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.J(t))}return C.a.m(s,"\n")},
a9:function(){var u=this.e
if(u!=null)u.H(null)},
$ipQ:1}
F.ik.prototype={
e5:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ad],"$ab")
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
ja:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ad],"$ab")
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
dc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bd(0,p,n)){p.bb()
break}}}}},
da:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gjk(s)
if(t)s.bb()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cJ())s=!1
return s},
cI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.F)(u),++r)if(!u[r].cH())s=!1
return s},
i:function(a){return this.S()},
J:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
S:function(){return this.J("")},
sh1:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")}}
F.il.prototype={
gl:function(a){return this.b.length},
dc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bd(0,p,n)){p.bb()
break}}}}},
da:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.a1(s.a,s.b)
if(t)s.bb()}},
i:function(a){return this.S()},
J:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].J(a+(""+u+". ")))}return C.a.m(s,"\n")},
S:function(){return this.J("")},
sh7:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.im.prototype={
gl:function(a){return this.b.length},
k6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
J:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(a))
return C.a.m(r,"\n")},
S:function(){return this.J("")},
sco:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
F.ad.prototype={
cM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.et(u.cx,r,o,t,s,q,p,a,n)},
jm:function(){return this.cM(null)},
sa5:function(a,b){var u
if(!J.a1(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a9()}},
sf1:function(a){var u
if(!J.a1(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a9()}},
sea:function(a){var u
if(!J.a1(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a9()}},
jK:function(a){var u,t,s=this
if(a.C(0,$.b1())){u=s.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.C(0,$.by())){u=s.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.C(0,$.bx())){u=s.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.C(0,$.bz())){u=s.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.C(0,$.bA())){u=s.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.C(0,$.ds())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.C(0,$.dt())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.C(0,$.cp()))return H.d([s.ch],[P.r])
else if(a.C(0,$.bw())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
cJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.O(0,new F.js(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
cH:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d7()
t.d.O(0,new F.jr(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a9()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
C:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
J:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
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
C.a.h(q,V.a0(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
S:function(){return this.J("")}}
F.js.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:11}
F.jr.prototype={
$1:function(a){var u,t
H.e(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:11}
F.ji.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a9()
return!0},
e6:function(a,b,c,d,e,f,g){var u=F.et(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
by:function(a,b,c,d,e,f){return this.e6(a,b,c,null,d,e,f)},
jb:function(a,b,c,d,e,f){return this.e6(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cJ()
return!0},
cI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)u[s].cH()
return!0},
ji:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a1(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.S()},
J:function(a){var u,t,s,r
this.D()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)C.a.h(u,t[r].J(a))
return C.a.m(u,"\n")},
S:function(){return this.J("")},
siM:function(a){this.c=H.k(a,"$ib",[F.ad],"$ab")}}
F.jj.prototype={
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
C.a.O(u.c,new F.jk(u,b))
C.a.O(u.d,new F.jl(u,b))},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sh2:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")},
sh3:function(a){this.c=H.k(a,"$ib",[F.aa],"$ab")},
sh4:function(a){this.d=H.k(a,"$ib",[F.aa],"$ab")}}
F.jk.prototype={
$1:function(a){H.e(a,"$iaa")
if(!J.a1(a.a,this.a))this.b.$1(a)},
$S:11}
F.jl.prototype={
$1:function(a){var u
H.e(a,"$iaa")
u=this.a
if(!J.a1(a.a,u)&&!J.a1(a.b,u))this.b.$1(a)},
$S:11}
F.jm.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sh8:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
sh9:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jo.prototype={}
F.jn.prototype={
bd:function(a,b,c){return J.a1(b.f,c.f)}}
F.jp.prototype={}
F.hX.prototype={
be:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[F.ad],"$ab")
u=V.d7()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.G(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.F)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a1(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}return}}
F.jq.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)C.a.h(r,u[s].J(""))
return C.a.m(r,"\n")},
sco:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
O.dU.prototype={
gu:function(){var u=this.dy
return u==null?this.dy=D.Q():u},
a0:function(a){var u
H.e(a,"$iB")
u=this.dy
if(u!=null)u.H(a)},
cn:function(){return this.a0(null)},
dY:function(a){H.e(a,"$iB")
this.a=null
this.a0(a)},
ik:function(){return this.dY(null)},
hm:function(a,b){var u=V.av
H.k(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.a0(u)},
ho:function(a,b){var u=V.av
H.k(b,"$ii",[u],"$ai")
u=new D.bL([u])
u.b=!0
this.a0(u)},
dG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.ab(a1.e.length+3,4)*4,a3=C.f.ab(a1.f.length+3,4)*4,a4=C.f.ab(a1.r.length+3,4)*4,a5=C.f.ab(a1.x.length+3,4)*4,a6=C.f.ab(a1.y.length+3,4)*4,a7=C.f.ab(a1.z.length+3,4)*4,a8=C.f.ab(a0.e.a.length+3,4)*4
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
a=new Z.bh(a.a|j.a)}return new A.hG(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
a_:function(a,b){H.k(a,"$ib",[T.cW],"$ab")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.au(u,u.length,[H.t(u,0)]);u.F();){t=u.d
t.toString
s=$.jh
if(s==null)s=$.jh=new V.L(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.de(s)}}},
eX:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.dG()
u=H.e(a3.fr.j(0,a2.at),"$idV")
if(u==null){u=A.o8(a2,a3.a)
a3.e8(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bB
a2=a4.e
if(!(a2 instanceof Z.ct))a2=a4.e=null
if(a2==null||!a2.d.C(0,s)){a2=t.r1
if(a2)a4.d.as()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cI()
q.a.cI()
q=q.e
if(q!=null)q.aC(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.ji()
p=p.e
if(p!=null)p.aC(0)}n=a4.d.ed(new Z.ev(a3.a),s)
n.aK($.b1()).e=a1.a.Q.c
if(a2)n.aK($.by()).e=a1.a.cx.c
if(r)n.aK($.bx()).e=a1.a.ch.c
if(t.rx)n.aK($.bz()).e=a1.a.cy.c
if(q)n.aK($.bA()).e=a1.a.db.c
if(t.x1)n.aK($.bw()).e=a1.a.dx.c
a4.e=n}a2=T.cW
m=H.d([],[a2])
a1.a.a4(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga6(q)
r=r.dy
r.toString
r.aq(q.aj(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga6(q)
p=a3.dx
p=a3.cx=q.A(0,p.ga6(p))
q=p}r=r.fr
r.toString
r.aq(q.aj(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gk0()
p=a3.dx
p=a3.ch=q.A(0,p.ga6(p))
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
r.aq(C.n.aj(q,!0))}if(t.aA>0){l=a1.e.a.length
r=a1.a.k4
C.c.a8(r.a,r.d,l)
for(r=[P.r],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$iav")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.ce(H.k(p.aj(0,!0),"$ib",r,"$ab")))
C.c.f6(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
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
r.ar(r.y1,r.aA,q)
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
r.am(r.y2,r.aA,q)
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
r.ar(r.bB,r.bC,q)
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
r.am(r.ej,r.bC,q)
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
r=r.bD
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
break
case C.h:a1.a_(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ar(r.ek,r.bE,q)
q=a1.a
r=a1.y.f
q=q.bD
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break
case C.i:a1.a_(m,a1.y.e)
r=a1.a
q=a1.y.e
r.am(r.el,r.bE,q)
q=a1.a
r=a1.y.f
q=q.bD
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bF
r.toString
p=q.a
o=q.b
q=q.c
C.c.B(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bH
C.c.P(q.a,q.d,o)
break
case C.h:a1.a_(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ar(r.em,r.bG,q)
q=a1.a
r=a1.z.f
q=q.bF
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bH
C.c.P(r.a,r.d,o)
break
case C.i:a1.a_(m,a1.z.e)
r=a1.a
q=a1.z.e
r.am(r.en,r.bG,q)
q=a1.a
r=a1.z.f
q=q.bF
q.toString
p=r.a
o=r.b
r=r.c
C.c.B(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bH
C.c.P(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.ez
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cP
if(h>=p.length)return H.h(p,h)
e=p[h]
p=i.de(f.a)
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
r=a1.a.eA
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cQ
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbh(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbh(f))
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcC()
o=e.e
C.c.P(o.a,o.d,p)
p=f.gcD()
o=e.f
C.c.P(o.a,o.d,p)
p=f.gcE()
o=e.r
C.c.P(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.eB
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cR
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbh(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcO(f).ks()
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbh(f))
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkq()
o=e.f
C.c.P(o.a,o.d,p)
p=f.gkp()
o=e.r
C.c.P(o.a,o.d,p)
p=f.gcC()
o=e.x
C.c.P(o.a,o.d,p)
p=f.gcD()
o=e.y
C.c.P(o.a,o.d,p)
p=f.gcE()
o=e.z
C.c.P(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.eC
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
o=a1.a.cS
if(h>=o.length)return H.h(o,h)
e=o[h]
o=f.gbk()
H.k(m,"$ib",p,"$ab")
if(!C.a.Y(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcO(f)
d=e.d
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gbY()
d=e.b
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=f.gbW(f)
d=e.c
C.c.B(d.a,d.d,o.a,o.b,o.c)
o=i.de(f.gcO(f))
d=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.B(c.a,c.d,d,o,b)
b=f.gt(f)
o=e.f
C.c.B(o.a,o.d,b.a,b.b,b.c)
b=f.gbk()
o=b.gbR(b)
if(!o){o=e.x
C.c.a8(o.a,o.d,1)}else{o=e.r
d=b.gbR(b)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.gjE(b))
o=e.x
C.c.a8(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.eD
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.y,q=r.length,p=[P.r],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
d=a1.a.cT
if(h>=d.length)return H.h(d,h)
e=d[h]
d=f.gbk()
H.k(m,"$ib",o,"$ab")
if(!C.a.Y(m,d)){d.a=m.length
C.a.h(m,d)}a=i.A(0,f.ga6(f))
d=f.ga6(f)
c=$.cN
d=d.bm(c==null?$.cN=new V.a_(0,0,0):c)
c=e.b
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=$.cN
d=a.bm(d==null?$.cN=new V.a_(0,0,0):d)
c=e.c
C.c.B(c.a,c.d,d.a,d.b,d.c)
d=a.cZ(0)
c=e.d
j=new Float32Array(H.ce(H.k(new V.dX(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).aj(0,!0),"$ib",p,"$ab")))
C.c.f5(c.a,c.d,!1,j)
c=f.gt(f)
d=e.e
C.c.B(d.a,d.d,c.a,c.b,c.c)
c=f.gbk()
d=c.gbR(c)
if(!d){d=e.r
C.c.a8(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.c.a8(d.a,d.d,0)}d=f.gcC()
c=e.x
C.c.P(c.a,c.d,d)
d=f.gcD()
c=e.y
C.c.P(c.a,c.d,d)
d=f.gcE()
c=e.z
C.c.P(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.eE
C.c.a8(r.a,r.d,l)
r=a3.db
i=r.ga6(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.F)(r),++g){f=r[g]
p=a1.a.cU
if(h>=p.length)return H.h(p,h)
e=p[h]
p=f.gbk()
H.k(m,"$ib",a2,"$ab")
if(!C.a.Y(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gbh(f)
o=e.b
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gcO(f)
o=e.c
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbY()
o=e.d
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbW(f)
o=e.e
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=i.bm(f.gbh(f))
o=e.f
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gbk()
o=p.gbR(p)
if(!o){p=e.x
C.c.a8(p.a,p.d,1)}else{o=e.r
d=p.gbR(p)
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.gjE(p))
p=e.x
C.c.a8(p.a,p.d,0)}p=f.gt(f)
o=e.y
C.c.B(o.a,o.d,p.a,p.b,p.c)
p=f.gkt()
o=e.z
C.c.P(o.a,o.d,p)
p=f.gku()
o=e.Q
C.c.P(o.a,o.d,p)
p=f.gcC()
o=e.ch
C.c.P(o.a,o.d,p)
p=f.gcD()
o=e.cx
C.c.P(o.a,o.d,p)
p=f.gcE()
o=e.cy
C.c.P(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.h:a1.a_(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ar(a2.eo,a2.bI,r)
break
case C.i:a1.a_(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.am(a2.ep,a2.bI,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga6(r).cZ(0)}a2=a2.id
a2.toString
a2.aq(r.aj(0,!0))}if(t.dy){a1.a_(m,a1.ch)
a2=a1.a
r=a1.ch
a2.am(a2.eq,a2.er,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.bJ
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
break
case C.h:a1.a_(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ar(a2.es,a2.bK,r)
r=a1.a
a2=a1.cx.f
r=r.bJ
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break
case C.i:a1.a_(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.am(a2.eu,a2.bK,r)
r=a1.a
a2=a1.cx.f
r=r.bJ
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bM
a2.toString
q=r.a
p=r.b
r=r.c
C.c.B(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bL
C.c.P(r.a,r.d,p)
break
case C.h:a1.a_(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ar(a2.ev,a2.bN,r)
r=a1.a
a2=a1.cy.f
r=r.bM
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bL
C.c.P(a2.a,a2.d,p)
break
case C.i:a1.a_(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.am(a2.ew,a2.bN,r)
r=a1.a
a2=a1.cy.f
r=r.bM
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.B(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bL
C.c.P(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bO
C.c.P(a2.a,a2.d,q)
break
case C.h:a1.a_(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ar(a2.ex,a2.bP,q)
q=a1.a
a2=a1.db.f
q=q.bO
C.c.P(q.a,q.d,a2)
break
case C.i:a1.a_(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.am(a2.ey,a2.bP,q)
q=a1.a
a2=a1.db.f
q=q.bO
C.c.P(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a4(a3)
a2=a4.e
a2.a4(a3)
a2.ai(a3)
a2.aP(a3)
if(r)a3.a.disable(3042)
for(a2=a3.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.eh()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dG().at},
sfP:function(a){this.e=H.k(a,"$ia6",[V.av],"$aa6")}}
O.hE.prototype={
aG:function(){var u,t=this
t.dn()
u=t.f
if(!(Math.abs(u-1)<$.W().a)){t.f=1
u=new D.P(t.b,u,1,[P.r])
u.b=!0
t.a.a0(u)}}}
O.dW.prototype={
aG:function(){},
aW:function(){},
jj:function(a){var u,t=this
if(t.c!==C.d){t.c=C.d
u=t.a
u.a=null
u.a0(null)}t.aG()
t.a.a0(null)}}
O.hF.prototype={}
O.b9.prototype={
ct:function(a){var u,t,s=this
if(!J.a1(s.f,a)){u=s.f
s.f=a
t=new D.P(s.b+".color",u,a,[V.u])
t.b=!0
s.a.a0(t)}},
aG:function(){this.dn()
this.ct(new V.u(0,0,0))},
aW:function(){this.fj()
this.ct(new V.u(1,1,1))},
st:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aW()
u=t.a
u.a=null
u.a0(null)}t.ct(b)}}
O.hH.prototype={
bv:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.W().a)){u.ch=a
t=new D.P(u.b+".refraction",t,a,[P.r])
t.b=!0
u.a.a0(t)}},
aG:function(){this.dq()
this.bv(1)},
aW:function(){this.bp()
this.bv(1)},
saJ:function(a){var u,t=this
if(a<=0)t.jj(0)
else if(t.c===C.d){t.c=C.j
t.bp()
t.bv(1)
u=t.a
u.a=null
u.a0(null)}t.bv(a)}}
O.hI.prototype={
bw:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.W().a)){u.ch=a
t=new D.P(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.a0(t)}},
aG:function(){this.dq()
this.bw(100)},
aW:function(){this.bp()
this.bw(100)}}
O.e9.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
a0:function(a){var u
H.e(a,"$iB")
u=this.e
if(u!=null)u.H(a)},
cn:function(){return this.a0(null)},
eX:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$iea")
if(u==null){t=a.a
u=new A.ea(t,n)
u.dr(t,n)
u.eN(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia4")
u.ch=H.l(u.y.j(0,"ratio"),"$ia4")
u.cx=H.l(u.y.j(0,"boxClr"),"$iO")
u.cy=H.l(u.y.j(0,"boxTxt"),"$iam")
u.db=H.l(u.y.j(0,"viewMat"),"$iaz")
a.e8(u)}o.a=u}if(b.e==null){t=b.d.ed(new Z.ev(a.a),$.b1())
t.aK($.b1()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a4(a)}t=a.d
s=a.c
r=o.a
r.a4(a)
q=o.b
p=r.Q
C.c.P(p.a,p.d,q)
q=r.ch
C.c.P(q.a,q.d,t/s)
s=o.c
r.cy.dk(s)
s=o.d
t=r.cx
C.c.B(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cZ(0)
r=r.db
r.toString
r.aq(s.aj(0,!0))
t=b.e
if(t instanceof Z.ct){t.a4(a)
t.ai(a)
t.aP(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.eh()
t=o.c
if(t!=null)t.aP(a)}}
O.bP.prototype={}
T.cW.prototype={}
T.cX.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
a4:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aP:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iJ.prototype={
aV:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ab(t,"load",H.n(new T.iK(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
il:function(a,b,c){var u,t,s,r
b=V.lN(b)
u=V.lN(a.width)
t=V.lN(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lf()
s.width=u
s.height=t
r=H.e(C.m.fa(s,"2d"),"$icu")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pf(r.getImageData(0,0,s.width,s.height))}}}
T.iK.prototype={
$1:function(a){var u=this,t=u.a,s=t.il(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.kd(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ju()}++t.e},
$S:12}
V.bl.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dT.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.F)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saf:function(a){this.a=H.k(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.aw.prototype={
aM:function(a,b){return!this.fi(0,b)},
i:function(a){return"!["+this.dm(0)+"]"}}
V.i8.prototype={
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c8(this.a),t=H.c8(this.b)
return u+".."+t},
$iaC:1}
V.ii.prototype={
fo:function(a){var u,t
if(a.a.length<=0)throw H.c(P.x("May not create a SetMatcher with zero characters."))
u=new H.aS([P.p,P.T])
for(t=new H.cF(a,a.gl(a),[H.an(a,"A",0)]);t.F();)u.n(0,t.d,!0)
this.sip(u)},
aM:function(a,b){return this.a.bz(0,b)},
i:function(a){var u=this.a
return P.cT(u.gac(u),0,null)},
sip:function(a){this.a=H.k(a,"$iI",[P.p,P.T],"$aI")},
$iaC:1}
V.cR.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.k(0,b))
r.saf(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
jy:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.F)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
siH:function(a){this.c=H.k(a,"$ib",[V.cZ],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.lP(this.b,"\n","\\n"),t=H.lP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
aO:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.F)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sig:function(a){var u=P.f
this.c=H.k(a,"$iI",[u,u],"$aI")}}
V.iN.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cR(this,b)
u.siH(H.d([],[V.cZ]))
u.d=null
this.a.n(0,b,u)}return u},
T:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cY(a)
u=P.f
t.sig(new H.aS([u,u]))
this.b.n(0,a,t)}return t},
f4:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ej]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.I(a,s)
q=k.jy(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cT(i,0,m)
throw H.c(P.x("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cT(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
six:function(a){this.a=H.k(a,"$iI",[P.f,V.cR],"$aI")},
siA:function(a){this.b=H.k(a,"$iI",[P.f,V.cY],"$aI")}}
V.cZ.prototype={
i:function(a){return this.b.b+": "+this.dm(0)}}
X.bY.prototype={$ibb:1}
X.hd.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.Q():u},
ax:function(a){var u=this.x
if(u!=null)u.H(a)},
see:function(a,b){var u
if(this.b){this.b=!1
u=new D.P("clearColor",!0,!1,[P.T])
u.b=!0
this.ax(u)}},
a4:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.D(u)
q=C.e.au(r*u)
r=s.b
if(typeof t!=="number")return H.D(t)
p=C.e.au(r*t)
r=C.e.au(s.c*u)
a.c=r
s=C.e.au(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hj.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
a4:function(a){var u
a.cy.bV(V.c5())
u=V.c5()
a.db.bV(u)},
aP:function(a){a.cy.aN()
a.db.aN()},
$ibb:1,
$ibY:1}
X.e2.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.Q():u},
ax:function(a){var u
H.e(a,"$iB")
u=this.f
if(u!=null)u.H(a)},
fI:function(){return this.ax(null)},
a4:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ba(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bV(k)
r=$.mf
if(r==null){r=V.mh()
q=V.mD()
p=$.mz
r=V.ma(r,q,p==null?$.mz=new V.L(0,0,-1):p)
$.mf=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b2(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.bV(u)},
aP:function(a){a.cy.aN()
a.db.aN()},
$ibb:1,
$ibY:1}
X.cU.prototype={}
V.bE.prototype={
bq:function(a){this.b=new P.hh(C.U)
this.c=null
this.sca(H.d([],[[P.b,W.aI]]))},
R:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fU(q,0,q.length)
n=o==null?q:o
C.S.fd(p,H.lP(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
eU:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.f],"$ab")
q.sca(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bA():t).f4(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r)q.bU(t[r])},
sca:function(a){this.d=H.k(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.l7.prototype={
$1:function(a){var u
H.e(a,"$ibe")
u=C.e.f3(this.a.gjC(),2)
if(u!=="0.00")P.lO(u+" fps")},
$S:51}
V.fU.prototype={
bU:function(a){var u=this
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
bA:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iO()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.y(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.y(new H.w("_"))
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
t=V.y(new H.w("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.a3("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.a3("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.y(new H.w(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.y(new H.w(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.y(new H.w('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.y(new H.w('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.y(new H.w("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.y(new H.w('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.bl())
t=a1.k(0,r).m(0,h)
u=V.y(new H.w("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.y(new H.w("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.y(new H.w("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.y(new H.w("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.bl())
t=a1.k(0,r).m(0,e)
u=V.y(new H.w("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.y(new H.w("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.y(new H.w("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.aw()
s=[V.aC]
t.saf(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.w("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.y(new H.w("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.y(new H.w("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.aw()
t.saf(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.w("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.y(new H.w("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.y(new H.w(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.y(new H.w(" \n\t"))
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
t.aO(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aO(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aO(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.he.prototype={
bU:function(a){var u=this
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
bA:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iO()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.y(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.y(new H.w("_"))
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
t=V.y(new H.w("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.a3("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.a3("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.y(new H.w(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.y(new H.w(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.y(new H.w("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.y(new H.w("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.bl())
t=e.k(0,j).m(0,i)
u=V.y(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.aw()
s=[V.aC]
t.saf(H.d([],s))
C.a.h(u.a,t)
u=V.y(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.y(new H.w("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.aw()
u.saf(H.d([],s))
C.a.h(t.a,u)
t=V.y(new H.w("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.y(new H.w("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.y(new H.w(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.y(new H.w(" \n\t"))
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
u.aO(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aO(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aO(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hf.prototype={
bU:function(a){var u=this,t="#111"
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
bA:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iO()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.y(new H.w("_"))
C.a.h(u.a,t)
t=V.a3("a","z")
C.a.h(u.a,t)
t=V.a3("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.y(new H.w("_"))
C.a.h(t.a,u)
u=V.a3("0","9")
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.y(new H.w("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.y(new H.w("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.y(new H.w("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.y(new H.w('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.y(new H.w('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.y(new H.w("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.y(new H.w('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.bl())
C.a.h(l.k(0,s).m(0,m).a,new V.bl())
u=l.k(0,m).m(0,m)
t=new V.aw()
t.saf(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.y(new H.w('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a3("a","z")
C.a.h(t.a,u)
u=V.a3("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aO(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.i2.prototype={
eU:function(a,b){H.k(b,"$ib",[P.f],"$ab")
this.sca(H.d([],[[P.b,W.aI]]))
this.R(C.a.m(b,"\n"),"#111")},
bU:function(a){},
bA:function(){return}}
V.i6.prototype={
cA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mv().gd8().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.e2(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lW(m.c).h(0,q)
o=W.nX("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.i7(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lW(m.c).h(0,r.createElement("br"))},
a7:function(a,b,c){return this.cA(a,b,c,!1)},
e2:function(a){var u,t,s=P.mv(),r=P.f,q=P.o4(s.gd8(),r,r)
q.n(0,this.a,a)
u=s.eY(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k6([],[]).df(""),"",t)}}
V.i7.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.e2(u.d)}},
$S:12}
V.io.prototype={
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
r=W.o
W.ab(q,"scroll",H.n(new V.iq(o),{func:1,ret:-1,args:[r]}),!1,r)},
e7:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.f],"$ab")
this.is()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f4(C.a.jJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
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
if(H.pF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fg(C.C,n,C.l,!1)
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
f9:function(a){var u,t,s,r=new V.fU("dart")
r.bq("dart")
u=new V.he("glsl")
u.bq("glsl")
t=new V.hf("html")
t.bq("html")
s=C.a.jA(H.d([r,u,t],[V.bE]),new V.ir(a))
if(s!=null)return s
r=new V.i2("plain")
r.bq("plain")
return r},
e4:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dr(r).aa(r,"+")){C.a.n(b0,s,C.b.aw(r,1))
C.a.h(u,1)
t=!0}else if(C.b.aa(r,"-")){C.a.n(b0,s,C.b.aw(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f9(a8)
q.eU(0,b0)
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
i=W.lY()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.F)(r),++a0)C.a3.je(a,r[a0])
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
j8:function(a){var u,t,s,r,q,p,o,n="auto"
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
for(q=0;q<2;++q){p=u.createElement("div")
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
is:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iO()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.y(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.aw()
r=[V.aC]
s.saf(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.y(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.y(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.aw()
s.saf(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.y(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.y(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.aw()
s.saf(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.y(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.y(new H.w("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.y(new H.w("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.y(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.aw()
t.saf(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.y(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.aw()
t.saf(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bl())
s=u.k(0,i).m(0,i)
t=new V.aw()
t.saf(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("*_`["))
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
V.iq.prototype={
$1:function(a){P.mr(C.t,new V.ip(this.a))},
$S:12}
V.ip.prototype={
$0:function(){var u=C.e.au(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.ir.prototype={
$1:function(a){return H.e(a,"$ibE").a===this.a},
$S:52}
D.kN.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.2,0.2,0.2))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.st(0,new V.u(0,0,0))
u=u.cx
u.st(0,new V.u(1,1,1))},
$S:0}
D.kO.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.11,0.11,0.1))
t=u.x
t.st(0,new V.u(0.21,0.21,0.2))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.st(0,new V.u(0,0,0))
u=u.cx
u.st(0,new V.u(1,0.9,0.5))},
$S:0}
D.kP.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.saJ(0.4)
t=u.cy
t.st(0,new V.u(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.u(0.4,0.4,0.4))},
$S:0}
D.kY.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.saJ(0.4)
t=u.cy
t.st(0,new V.u(0.2,0.3,1))
u=u.cx
u.st(0,new V.u(0.3,0.3,0.3))},
$S:0}
D.kZ.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.saJ(0.6)
t=u.cy
t.st(0,new V.u(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.u(0.2,0.2,0.2))},
$S:0}
D.l_.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.saJ(0.6)
t=u.cy
t.st(0,new V.u(1,1,1))
u.cx.st(0,new V.u(0,0,0))},
$S:0}
D.l0.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.1,0.1,0.1))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.saJ(0.9)
t=u.cy
t.st(0,new V.u(1,0.8,0.8))
u.cx.st(0,new V.u(0,0,0))},
$S:0}
D.l1.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0,0,0))
t=u.x
t.st(0,new V.u(0.1,0.1,0.1))
t=u.z
t.st(0,new V.u(0.1,0.1,0.1))
u.cy.saJ(0.99)
t=u.cy
t.st(0,new V.u(0.95,0.95,0.95))
u.cx.st(0,new V.u(0,0,0))},
$S:0}
D.l2.prototype={
$0:function(){var u=this.a,t=u.r
t.st(0,new V.u(0.3,0.3,0.3))
t=u.x
t.st(0,new V.u(0.5,0.5,0.5))
t=u.z
t.st(0,new V.u(1,1,1))
u.cy.st(0,new V.u(0,0,0))
u=u.cx
u.st(0,new V.u(0.3,0.3,0.3))},
$S:0}
D.l3.prototype={
$0:function(){this.a.sad(0,F.lJ(1,null,null,1))},
$S:0}
D.l4.prototype={
$0:function(){this.a.sad(0,F.lJ(15,null,new D.kM(),15))},
$S:0}
D.kM.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.L(r.a,r.b,r.c)
u=r.w(0,Math.sqrt(r.G(r)))
r=a.f
s=u.A(0,t*0.1+s*0.1)
a.sa5(0,r.p(0,new V.a_(s.a,s.b,s.c)))},
$S:5}
D.kQ.prototype={
$0:function(){this.a.sad(0,F.n0(!0,30,1))},
$S:0}
D.kR.prototype={
$0:function(){this.a.sad(0,F.n0(!1,30,0))},
$S:0}
D.kS.prototype={
$0:function(){this.a.sad(0,F.n1(!0,!0,25,new D.kL(),50))},
$S:0}
D.kL.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
D.kT.prototype={
$0:function(){this.a.sad(0,F.ne(6,null,6))},
$S:0}
D.kU.prototype={
$0:function(){this.a.sad(0,F.ne(10,new D.kK(),10))},
$S:0}
D.kK.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
D.kV.prototype={
$0:function(){this.a.sad(0,F.ng())},
$S:0}
D.kW.prototype={
$0:function(){this.a.sad(0,F.pw())},
$S:0}
D.kX.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.e4("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.e4("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.ff=u.i
u=J.dN.prototype
u.fh=u.i
u=P.i.prototype
u.fg=u.bZ
u=W.X.prototype
u.c2=u.an
u=W.eZ.prototype
u.fk=u.az
u=O.dW.prototype
u.dn=u.aG
u.fj=u.aW
u=O.b9.prototype
u.dq=u.aG
u.bp=u.aW
u=V.dT.prototype
u.fi=u.aM
u.dm=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p9","oD",14)
u(P,"pa","oE",14)
u(P,"pb","oF",14)
t(P,"n_","p7",3)
s(W,"pp",4,null,["$4"],["oH"],29,0)
s(W,"pq",4,null,["$4"],["oI"],29,0)
var m
r(m=E.aq.prototype,"geS",0,0,null,["$1","$0"],["eT","jT"],1,0)
r(m,"geQ",0,0,null,["$1","$0"],["eR","jQ"],1,0)
q(m,"gjO","jP",9)
q(m,"gjR","jS",9)
r(m=E.ei.prototype,"gdt",0,0,null,["$1","$0"],["dv","du"],1,0)
p(m,"gk9","eZ",3)
o(m=X.ep.prototype,"ghB","hC",15)
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
r(D.bG.prototype,"gfu",0,0,null,["$1","$0"],["aD","fv"],1,0)
r(m=D.dP.prototype,"gdS",0,0,null,["$1","$0"],["dT","hH"],1,0)
o(m,"ghT","hU",38)
q(m,"ghj","hk",26)
q(m,"ghX","hY",26)
n(V.Y.prototype,"gl","d_",24)
n(V.L.prototype,"gl","d_",24)
r(m=U.cC.prototype,"gaT",0,0,null,["$1","$0"],["U","ae"],1,0)
q(m,"ghh","hi",23)
q(m,"ghV","hW",23)
r(m=U.eq.prototype,"gaT",0,0,null,["$1","$0"],["U","ae"],1,0)
o(m,"gcd","ce",2)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
r(m=U.er.prototype,"gaT",0,0,null,["$1","$0"],["U","ae"],1,0)
o(m,"gcd","ce",2)
o(m,"gcf","cg",2)
o(m,"gci","cj",2)
o(m,"ghb","hc",2)
o(m,"ghd","he",2)
o(m,"giF","iG",2)
o(m,"giD","iE",2)
o(m,"giB","iC",2)
o(U.es.prototype,"ghf","hg",2)
r(m=M.dB.prototype,"ga1",0,0,null,["$1","$0"],["a2","b4"],1,0)
q(m,"ghZ","i_",19)
q(m,"gi0","i1",19)
r(M.dD.prototype,"ga1",0,0,null,["$1","$0"],["a2","b4"],1,0)
r(m=M.dH.prototype,"ga1",0,0,null,["$1","$0"],["a2","b4"],1,0)
q(m,"ghr","hs",9)
q(m,"ght","hu",9)
r(m=O.dU.prototype,"gcm",0,0,null,["$1","$0"],["a0","cn"],1,0)
r(m,"gij",0,0,null,["$1","$0"],["dY","ik"],1,0)
q(m,"ghl","hm",16)
q(m,"ghn","ho",16)
r(O.e9.prototype,"gcm",0,0,null,["$1","$0"],["a0","cn"],1,0)
r(X.e2.prototype,"gfH",0,0,null,["$1","$0"],["ax","fI"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.ln,J.a,J.au,P.eM,P.i,H.cF,P.b6,H.c2,H.d6,H.fN,H.iT,P.bH,H.cv,H.f3,P.ae,H.hs,H.hu,H.hn,P.f9,P.bj,P.aN,P.ew,P.iz,P.cS,P.iA,P.be,P.ao,P.km,P.k0,P.cc,P.eL,P.A,P.ke,P.hA,P.c_,P.hi,P.kk,P.kj,P.T,P.aB,P.ac,P.b5,P.i0,P.ec,P.eE,P.hc,P.bI,P.b,P.I,P.N,P.ay,P.f,P.ai,P.cd,P.j8,P.k3,W.fQ,W.bS,W.H,W.e0,W.eZ,W.k9,W.dJ,W.aE,W.k_,W.fh,P.k5,P.fe,P.jV,P.U,O.a6,O.cG,E.fH,E.aq,E.i9,E.ei,Z.eu,Z.ev,Z.ct,Z.bJ,Z.bh,D.fK,D.c1,D.B,X.dA,X.dO,X.hp,X.hx,X.aD,X.hP,X.iP,X.ep,D.bG,D.a9,D.e3,D.eb,D.ef,D.eg,D.eh,V.u,V.ap,V.h3,V.dX,V.av,V.a7,V.a_,V.ax,V.e6,V.Y,V.L,U.eq,U.er,U.es,M.dD,M.dH,M.aF,A.dx,A.fA,A.hG,A.d_,A.d3,A.d1,A.d4,A.d2,A.d5,A.c0,A.el,A.j2,F.aa,F.h6,F.br,F.hr,F.bO,F.e8,F.ik,F.il,F.im,F.ad,F.ji,F.jj,F.jm,F.jo,F.jp,F.jq,O.bP,O.dW,T.iJ,V.bl,V.aC,V.dT,V.i8,V.ii,V.cR,V.ej,V.cY,V.iN,X.bY,X.cU,X.hj,X.e2,V.bE,V.i6,V.io])
s(J.a,[J.hm,J.dM,J.dN,J.aR,J.bM,J.bp,H.cJ,H.bN,W.j,W.fx,W.bX,W.cu,W.b3,W.b4,W.Z,W.ey,W.fV,W.fW,W.eA,W.dG,W.eC,W.fY,W.o,W.eF,W.aQ,W.hg,W.eH,W.bo,W.dR,W.hJ,W.eN,W.eO,W.aT,W.eP,W.eS,W.aU,W.eW,W.eY,W.aW,W.f_,W.aX,W.f4,W.aK,W.f7,W.iM,W.aZ,W.fa,W.iR,W.jd,W.fi,W.fk,W.fm,W.fo,W.fq,P.b8,P.eJ,P.bc,P.eU,P.i5,P.f5,P.bf,P.fc,P.fB,P.ex,P.dy,P.e4,P.ca,P.e7,P.ee,P.em,P.f1])
s(J.dN,[J.i1,J.bR,J.bq])
t(J.lm,J.aR)
s(J.bM,[J.dL,J.dK])
t(P.hw,P.eM)
s(P.hw,[H.en,W.jB,W.as,P.h8])
t(H.w,H.en)
s(P.i,[H.h0,H.hB,H.d8])
s(H.h0,[H.c4,H.ht])
s(P.b6,[H.hC,H.ju])
t(H.hD,H.c4)
t(H.fO,H.fN)
s(P.bH,[H.hY,H.ho,H.j6,H.iV,H.fJ,H.ig,P.fz,P.e1,P.aP,P.j7,P.j4,P.cb,P.fM,P.fT])
s(H.cv,[H.lb,H.iG,H.kE,H.kF,H.kG,P.jx,P.jw,P.jy,P.jz,P.kd,P.kc,P.jI,P.jM,P.jJ,P.jK,P.jL,P.jP,P.jQ,P.jO,P.jN,P.iB,P.iC,P.ku,P.jY,P.jX,P.jZ,P.hv,P.hz,P.fZ,P.h_,P.jc,P.j9,P.ja,P.jb,P.kf,P.kg,P.ki,P.kh,P.kq,P.kp,P.kr,P.ks,W.h1,W.hL,W.hN,W.ie,W.iy,W.jH,W.hW,W.hV,W.k1,W.k2,W.kb,W.kl,P.k7,P.kw,P.h9,P.ha,P.fD,E.ia,E.ib,E.ic,E.iL,D.h4,D.h5,F.kn,F.kx,F.kz,F.kA,F.kB,F.l8,F.l9,F.la,F.kI,F.ky,F.js,F.jr,F.jk,F.jl,T.iK,V.l7,V.i7,V.iq,V.ip,V.ir,D.kN,D.kO,D.kP,D.kY,D.kZ,D.l_,D.l0,D.l1,D.l2,D.l3,D.l4,D.kM,D.kQ,D.kR,D.kS,D.kL,D.kT,D.kU,D.kK,D.kV,D.kW,D.kX])
s(H.iG,[H.iw,H.cr])
t(H.jv,P.fz)
t(P.hy,P.ae)
s(P.hy,[H.aS,W.jA])
t(H.dY,H.bN)
s(H.dY,[H.dd,H.df])
t(H.de,H.dd)
t(H.cK,H.de)
t(H.dg,H.df)
t(H.dZ,H.dg)
s(H.dZ,[H.hQ,H.hR,H.hS,H.hT,H.hU,H.e_,H.cL])
t(P.jW,P.km)
t(P.jU,P.k0)
t(P.ff,P.hA)
t(P.eo,P.ff)
s(P.c_,[P.fF,P.h2])
t(P.bF,P.iA)
s(P.bF,[P.fG,P.hh,P.jg,P.jf])
t(P.je,P.h2)
s(P.ac,[P.r,P.p])
s(P.aP,[P.c9,P.hk])
t(P.jD,P.cd)
s(W.j,[W.G,W.h7,W.cH,W.aV,W.dh,W.aY,W.aL,W.dj,W.jt,W.d9,P.fE,P.bW])
s(W.G,[W.X,W.bD,W.da])
s(W.X,[W.z,P.q])
s(W.z,[W.dv,W.fy,W.cq,W.bC,W.bZ,W.aI,W.hb,W.cD,W.cE,W.ih,W.bd,W.ed,W.iE,W.iF,W.cV])
s(W.b3,[W.cw,W.fR,W.fS])
t(W.fP,W.b4)
t(W.cx,W.ey)
t(W.eB,W.eA)
t(W.dF,W.eB)
t(W.eD,W.eC)
t(W.fX,W.eD)
t(W.aJ,W.bX)
t(W.eG,W.eF)
t(W.cA,W.eG)
t(W.eI,W.eH)
t(W.c3,W.eI)
t(W.bQ,W.o)
s(W.bQ,[W.b7,W.af,W.b_])
t(W.hK,W.eN)
t(W.hM,W.eO)
t(W.eQ,W.eP)
t(W.hO,W.eQ)
t(W.eT,W.eS)
t(W.cM,W.eT)
t(W.eX,W.eW)
t(W.i3,W.eX)
t(W.id,W.eY)
t(W.di,W.dh)
t(W.it,W.di)
t(W.f0,W.f_)
t(W.iu,W.f0)
t(W.ix,W.f4)
t(W.f8,W.f7)
t(W.iH,W.f8)
t(W.dk,W.dj)
t(W.iI,W.dk)
t(W.fb,W.fa)
t(W.iQ,W.fb)
t(W.bi,W.af)
t(W.fj,W.fi)
t(W.jC,W.fj)
t(W.ez,W.dG)
t(W.fl,W.fk)
t(W.jR,W.fl)
t(W.fn,W.fm)
t(W.eR,W.fn)
t(W.fp,W.fo)
t(W.k4,W.fp)
t(W.fr,W.fq)
t(W.k8,W.fr)
t(W.jE,W.jA)
t(W.jF,P.iz)
t(W.lx,W.jF)
t(W.jG,P.cS)
t(W.ka,W.eZ)
t(P.k6,P.k5)
t(P.al,P.jV)
t(P.eK,P.eJ)
t(P.hq,P.eK)
t(P.eV,P.eU)
t(P.hZ,P.eV)
t(P.cP,P.q)
t(P.f6,P.f5)
t(P.iD,P.f6)
t(P.fd,P.fc)
t(P.iS,P.fd)
t(P.fC,P.ex)
t(P.i_,P.bW)
t(P.f2,P.f1)
t(P.iv,P.f2)
s(E.fH,[Z.dz,A.cQ,T.cW])
s(D.B,[D.bK,D.bL,D.P,X.i4])
s(X.i4,[X.dS,X.bs,X.cI,X.ek])
s(O.a6,[D.dP,U.cC,M.dB])
s(D.fK,[U.fL,U.ag])
t(U.dC,U.ag)
s(A.cQ,[A.dV,A.ea])
s(A.el,[A.R,A.iZ,A.j_,A.j1,A.iX,A.a4,A.iY,A.O,A.j0,A.j3,A.d0,A.az,A.ar,A.am])
t(F.is,F.h6)
t(F.iW,F.hr)
t(F.jn,F.jo)
t(F.hX,F.jp)
s(O.bP,[O.dU,O.e9])
s(O.dW,[O.hE,O.hF,O.b9])
s(O.b9,[O.hH,O.hI])
t(T.cX,T.cW)
s(V.dT,[V.aw,V.cZ])
t(X.hd,X.cU)
s(V.bE,[V.fU,V.he,V.hf,V.i2])
u(H.en,H.d6)
u(H.dd,P.A)
u(H.de,H.c2)
u(H.df,P.A)
u(H.dg,H.c2)
u(P.eM,P.A)
u(P.ff,P.ke)
u(W.ey,W.fQ)
u(W.eA,P.A)
u(W.eB,W.H)
u(W.eC,P.A)
u(W.eD,W.H)
u(W.eF,P.A)
u(W.eG,W.H)
u(W.eH,P.A)
u(W.eI,W.H)
u(W.eN,P.ae)
u(W.eO,P.ae)
u(W.eP,P.A)
u(W.eQ,W.H)
u(W.eS,P.A)
u(W.eT,W.H)
u(W.eW,P.A)
u(W.eX,W.H)
u(W.eY,P.ae)
u(W.dh,P.A)
u(W.di,W.H)
u(W.f_,P.A)
u(W.f0,W.H)
u(W.f4,P.ae)
u(W.f7,P.A)
u(W.f8,W.H)
u(W.dj,P.A)
u(W.dk,W.H)
u(W.fa,P.A)
u(W.fb,W.H)
u(W.fi,P.A)
u(W.fj,W.H)
u(W.fk,P.A)
u(W.fl,W.H)
u(W.fm,P.A)
u(W.fn,W.H)
u(W.fo,P.A)
u(W.fp,W.H)
u(W.fq,P.A)
u(W.fr,W.H)
u(P.eJ,P.A)
u(P.eK,W.H)
u(P.eU,P.A)
u(P.eV,W.H)
u(P.f5,P.A)
u(P.f6,W.H)
u(P.fc,P.A)
u(P.fd,W.H)
u(P.ex,P.ae)
u(P.f1,P.A)
u(P.f2,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.bC.prototype
C.m=W.bZ.prototype
C.S=W.aI.prototype
C.V=J.a.prototype
C.a=J.aR.prototype
C.W=J.dK.prototype
C.f=J.dL.prototype
C.n=J.dM.prototype
C.e=J.bM.prototype
C.b=J.bp.prototype
C.X=J.bq.prototype
C.a2=W.cM.prototype
C.F=J.i1.prototype
C.c=P.ca.prototype
C.a3=W.bd.prototype
C.G=W.ed.prototype
C.w=J.bR.prototype
C.H=W.bi.prototype
C.I=W.d9.prototype
C.a4=new P.fG()
C.J=new P.fF()
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

C.Q=new P.i0()
C.l=new P.je()
C.R=new P.jg()
C.k=new P.jW()
C.d=new A.c0(0,"ColorSourceType.None")
C.j=new A.c0(1,"ColorSourceType.Solid")
C.h=new A.c0(2,"ColorSourceType.Texture2D")
C.i=new A.c0(3,"ColorSourceType.TextureCube")
C.t=new P.b5(0)
C.T=new P.b5(5e6)
C.U=new P.hi("element",!0,!1,!1,!1)
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
C.a1=new H.fO(0,{},C.B,[P.f,P.f])})()
var v={mangledGlobalNames:{p:"int",r:"double",ac:"num",f:"String",T:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.N,args:[F.ad,P.r,P.r]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.aq]]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:P.N,args:[F.aa]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.p,[P.i,V.av]]},{func:1,ret:V.a_,args:[P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:-1,args:[P.p,[P.i,M.aF]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,U.ag]]},{func:1,ret:P.r},{func:1,ret:P.T,args:[W.G]},{func:1,ret:-1,args:[P.p,[P.i,D.a9]]},{func:1,ret:P.T,args:[W.aE]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:P.T,args:[W.X,P.f,P.f,W.bS]},{func:1,ret:P.N,args:[,]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.ac]},{func:1,ret:P.N,args:[P.f,,]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.T,args:[[P.i,D.a9]]},{func:1,args:[W.o]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.U,args:[P.p]},{func:1,args:[,P.f]},{func:1,ret:P.N,args:[P.f]},{func:1,args:[P.f]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.p]},{func:1,ret:[P.I,P.f,P.f],args:[[P.I,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.N,args:[P.be]},{func:1,ret:P.T,args:[V.bE]},{func:1,ret:P.N,args:[,],opt:[P.ay]},{func:1,ret:W.X,args:[W.G]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cs=null
$.m_=null
$.lB=!1
$.n6=null
$.mY=null
$.nc=null
$.kC=null
$.kH=null
$.lL=null
$.cf=null
$.dp=null
$.dq=null
$.lC=!1
$.a5=C.k
$.aA=[]
$.bn=null
$.li=null
$.m5=null
$.m4=null
$.dc=P.lp(P.f,P.bI)
$.mb=null
$.mg=null
$.cN=null
$.mm=null
$.my=null
$.mC=null
$.mA=null
$.mB=null
$.jh=null
$.mz=null
$.mf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pN","ni",function(){return H.n5("_$dart_dartClosure")})
u($,"pO","lR",function(){return H.n5("_$dart_js")})
u($,"pT","nj",function(){return H.bg(H.iU({
toString:function(){return"$receiver$"}}))})
u($,"pU","nk",function(){return H.bg(H.iU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pV","nl",function(){return H.bg(H.iU(null))})
u($,"pW","nm",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pZ","np",function(){return H.bg(H.iU(void 0))})
u($,"q_","nq",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pY","no",function(){return H.bg(H.mt(null))})
u($,"pX","nn",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q1","ns",function(){return H.bg(H.mt(void 0))})
u($,"q0","nr",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qi","lS",function(){return P.oC()})
u($,"q4","nt",function(){return P.oz()})
u($,"qj","nx",function(){return H.o9(H.ce(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"ql","nz",function(){return P.on("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qm","nA",function(){return P.p0()})
u($,"qk","ny",function(){return P.m8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qb","nw",function(){return Z.aM(0)})
u($,"q5","nu",function(){return Z.aM(511)})
u($,"qd","b1",function(){return Z.aM(1)})
u($,"qc","by",function(){return Z.aM(2)})
u($,"q7","bx",function(){return Z.aM(4)})
u($,"qe","bz",function(){return Z.aM(8)})
u($,"qf","bA",function(){return Z.aM(16)})
u($,"q8","ds",function(){return Z.aM(32)})
u($,"q9","dt",function(){return Z.aM(64)})
u($,"qa","nv",function(){return Z.aM(96)})
u($,"qg","cp",function(){return Z.aM(128)})
u($,"q6","bw",function(){return Z.aM(256)})
u($,"pM","nh",function(){return new V.h3(1e-9)})
u($,"pL","W",function(){return $.nh()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cJ,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cK,Float64Array:H.cK,Int16Array:H.hQ,Int32Array:H.hR,Int8Array:H.hS,Uint16Array:H.hT,Uint32Array:H.hU,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.cL,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLabelElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fx,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fy,HTMLBaseElement:W.cq,Blob:W.bX,HTMLBodyElement:W.bC,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.cu,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cw,CSSUnitValue:W.cw,CSSPerspective:W.fP,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cx,MSStyleCSSProperties:W.cx,CSS2Properties:W.cx,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fR,CSSUnparsedValue:W.fS,DataTransferItemList:W.fV,HTMLDivElement:W.aI,DOMException:W.fW,ClientRectList:W.dF,DOMRectList:W.dF,DOMRectReadOnly:W.dG,DOMStringList:W.fX,DOMTokenList:W.fY,Element:W.X,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cA,FileWriter:W.h7,HTMLFormElement:W.hb,Gamepad:W.aQ,History:W.hg,HTMLCollection:W.c3,HTMLFormControlsCollection:W.c3,HTMLOptionsCollection:W.c3,ImageData:W.bo,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,Location:W.dR,MediaList:W.hJ,MessagePort:W.cH,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.aT,MimeTypeArray:W.hO,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aU,PluginArray:W.i3,RTCStatsReport:W.id,HTMLSelectElement:W.ih,SourceBuffer:W.aV,SourceBufferList:W.it,SpeechGrammar:W.aW,SpeechGrammarList:W.iu,SpeechRecognitionResult:W.aX,Storage:W.ix,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ed,HTMLTableRowElement:W.iE,HTMLTableSectionElement:W.iF,HTMLTemplateElement:W.cV,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iH,TextTrackList:W.iI,TimeRanges:W.iM,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iQ,TrackDefaultList:W.iR,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jd,VideoTrackList:W.jt,WheelEvent:W.bi,Window:W.d9,DOMWindow:W.d9,Attr:W.da,CSSRuleList:W.jC,ClientRect:W.ez,DOMRect:W.ez,GamepadList:W.jR,NamedNodeMap:W.eR,MozNamedAttrMap:W.eR,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k8,SVGLength:P.b8,SVGLengthList:P.hq,SVGNumber:P.bc,SVGNumberList:P.hZ,SVGPointList:P.i5,SVGScriptElement:P.cP,SVGStringList:P.iD,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iS,AudioBuffer:P.fB,AudioParamMap:P.fC,AudioTrackList:P.fE,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.i_,WebGLBuffer:P.dy,WebGLProgram:P.e4,WebGL2RenderingContext:P.ca,WebGLShader:P.e7,WebGLTexture:P.ee,WebGLUniformLocation:P.em,SQLResultSetRowList:P.iv})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(D.n9,[])
else D.n9([])})})()
//# sourceMappingURL=test.dart.js.map
