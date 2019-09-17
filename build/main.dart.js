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
a[c]=function(){a[c]=function(){H.dC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bV(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={bN:function bN(){},i:function i(a){this.a=a},aB:function aB(){},a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},aD:function aD(){},be:function be(){},af:function af(){},
bG:function(a){var u,t=H.dE(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ds:function(a){return v.types[a]},
dV:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.I(a).$ibO},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.am(a)
if(typeof u!=="string")throw H.e(H.H(a))
return u},
P:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
aY:function(a){return H.cW(a)+H.ch(H.bA(a),0,null)},
cW:function(a){var u,t,s,r,q,p,o,n=J.I(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.u||!!n.$iae){r=C.f(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bG(t.length>1&&C.b.C(t,0)===36?C.b.Z(t,1):t)},
ca:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
cY:function(a){var u,t,s,r=H.f([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.Y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.H(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.a.M(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.H(s))}return H.ca(r)},
cb:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.H(s))
if(s<0)throw H.e(H.H(s))
if(s>65535)return H.cY(a)}return H.ca(a)},
cX:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.a.M(u,10))>>>0,56320|u&1023)}throw H.e(P.Q(a,0,1114111,null,null))},
dt:function(a){throw H.e(H.H(a))},
h:function(a,b){if(a==null)J.bJ(a)
throw H.e(H.al(a,b))},
al:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.u(!0,b,s,null)
u=J.bJ(a)
if(!(b<0)){if(typeof u!=="number")return H.dt(u)
t=b>=u}else t=!0
if(t)return P.cS(b,a,s,null,u)
return P.aZ(b,s)},
dm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.D(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.D(a,c,!0,b,"end",u)
return new P.u(!0,b,"end",null)},
H:function(a){return new P.u(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.a8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cv})
u.name=""}else u.toString=H.cv
return u},
cv:function(){return J.am(this.dartException)},
dD:function(a){throw H.e(a)},
Y:function(a){throw H.e(P.au(a))},
r:function(a){var u,t,s,r,q,p
a=H.cs(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ba(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ce:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
c9:function(a,b){return new H.aW(a,b==null?null:b.method)},
bP:function(a,b){var u=b==null,t=u?null:b.method
return new H.aM(a,t,u?null:b.receiver)},
cw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.a.M(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bP(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.c9(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cy()
q=$.cz()
p=$.cA()
o=$.cB()
n=$.cE()
m=$.cF()
l=$.cD()
$.cC()
k=$.cH()
j=$.cG()
i=r.q(u)
if(i!=null)return f.$1(H.bP(u,i))
else{i=q.q(u)
if(i!=null){i.method="call"
return f.$1(H.bP(u,i))}else{i=p.q(u)
if(i==null){i=o.q(u)
if(i==null){i=n.q(u)
if(i==null){i=m.q(u)
if(i==null){i=l.q(u)
if(i==null){i=o.q(u)
if(i==null){i=k.q(u)
if(i==null){i=j.q(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.c9(u,i))}}return f.$1(new H.bd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.a9()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.u(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.a9()
return a},
co:function(a){var u
if(a==null)return new H.aj(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aj(a)},
dx:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.bL("Unsupported number of arguments for wrapped closure"))},
ak:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dx)
a.$identity=u
return u},
cQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.b5().constructor.prototype):Object.create(new H.J(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.q
if(typeof t!=="number")return t.t()
$.q=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.c4(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cM(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.c4(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cM:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ds,a)
if(typeof a=="function")if(b)return a
else{u=c?H.c3:H.bK
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
cN:function(a,b,c,d){var u=H.bK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
c4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cN(t,!r,u,b)
if(t===0){r=$.q
if(typeof r!=="number")return r.t()
$.q=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.K
return new Function(r+H.d(q==null?$.K=H.ar("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.q
if(typeof r!=="number")return r.t()
$.q=r+1
o+=r
r="return function("+o+"){return this."
q=$.K
return new Function(r+H.d(q==null?$.K=H.ar("self"):q)+"."+H.d(u)+"("+o+");}")()},
cO:function(a,b,c,d){var u=H.bK,t=H.c3
switch(b?-1:a){case 0:throw H.e(new H.b_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cP:function(a,b){var u,t,s,r,q,p,o,n=$.K
if(n==null)n=$.K=H.ar("self")
u=$.c2
if(u==null)u=$.c2=H.ar("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.cO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.q
if(typeof u!=="number")return u.t()
$.q=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.q
if(typeof u!=="number")return u.t()
$.q=u+1
return new Function(n+u+"}")()},
bV:function(a,b,c,d,e,f,g){return H.cQ(a,b,c,d,!!e,!!f,g)},
bK:function(a){return a.a},
c3:function(a){return a.c},
ar:function(a){var u,t,s,r=new H.J("self","target","receiver","name"),q=J.c7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dC:function(a){throw H.e(new P.ax(a))},
cm:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
dU:function(a,b,c){return H.cu(a["$a"+H.d(c)],H.bA(b))},
bW:function(a,b){var u=H.bA(a)
return u==null?null:u[b]},
F:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bG(a[0].name)+H.ch(a,1,b)
if(typeof a=="function")return H.bG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.d(b[t])}if('func' in a)return H.da(a,b)
if('futureOr' in a)return"FutureOr<"+H.F("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
da:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.f([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.h(a0,m)
p=C.b.t(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.F(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.F(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.F(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.F(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.dp(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.F(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ch:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.F(p,c)}return"<"+u.h(0)+">"},
cu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dT:function(a,b,c){return a.apply(b,H.cu(J.I(b)["$a"+H.d(c)],H.bA(b)))},
dy:function(a){var u,t,s,r,q=$.cn.$1(a),p=$.bx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.cj.$2(a,q)
if(q!=null){p=$.bx[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bE[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bF(u)
$.bx[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bE[q]=u
return u}if(s==="-"){r=H.bF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cq(a,u)
if(s==="*")throw H.e(P.cf(q))
if(v.leafTags[q]===true){r=H.bF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cq(a,u)},
cq:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bY(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bF:function(a){return J.bY(a,!1,null,!!a.$ibO)},
dz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bF(u)
else return J.bY(u,c,null,null)},
dv:function(){if(!0===$.bX)return
$.bX=!0
H.dw()},
dw:function(){var u,t,s,r,q,p,o,n
$.bx=Object.create(null)
$.bE=Object.create(null)
H.du()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cr.$1(q)
if(p!=null){o=H.dz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
du:function(){var u,t,s,r,q,p,o=C.m()
o=H.G(C.n,H.G(C.o,H.G(C.h,H.G(C.h,H.G(C.p,H.G(C.q,H.G(C.r(C.f),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cn=new H.bB(r)
$.cj=new H.bC(q)
$.cr=new H.bD(p)},
G:function(a,b){return a(b)||b},
cV:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(new P.aF("Illegal RegExp pattern ("+String(p)+")",a))},
dA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
dn:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
cs:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ct:function(a,b,c){var u=H.dB(a,b,c)
return u},
dB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.cs(b),'g'),H.dn(c))},
ba:function ba(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aW:function aW(a,b){this.a=a
this.b=b},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a},
bH:function bH(a){this.a=a},
aj:function aj(a){this.a=a
this.b=null},
Z:function Z(){},
b8:function b8(){},
b5:function b5(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aN:function aN(a,b){this.a=a
this.b=b
this.c=null},
aO:function aO(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function bB(a){this.a=a},
bC:function bC(a){this.a=a},
bD:function bD(a){this.a=a},
aL:function aL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.al(b,a))},
d9:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.dm(a,b,c))
return b},
a7:function a7(){},
a5:function a5(){},
a6:function a6(){},
aV:function aV(){},
S:function S(){},
T:function T(){},
dp:function(a){return J.cU(a?Object.keys(a):[],null)},
dE:function(a){return v.mangledGlobalNames[a]}},J={
bY:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bX==null){H.dv()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.cf("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bZ()]
if(r!=null)return r
r=H.dy(a)
if(r!=null)return r
if(typeof a=="function")return C.w
u=Object.getPrototypeOf(a)
if(u==null)return C.l
if(u===Object.prototype)return C.l
if(typeof s=="function"){Object.defineProperty(s,$.bZ(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
cU:function(a,b){return J.c7(H.f(a,[b]))},
c7:function(a){a.fixed$length=Array
return a},
I:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a0.prototype
return J.aJ.prototype}if(typeof a=="string")return J.O.prototype
if(a==null)return J.aK.prototype
if(typeof a=="boolean")return J.aI.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.n)return a
return J.bz(a)},
cl:function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.n)return a
return J.bz(a)},
dq:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.n)return a
return J.bz(a)},
dr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.n)return a
return J.bz(a)},
cJ:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).w(a,b)},
cK:function(a,b,c,d){return J.dr(a).a5(a,b,c,d)},
bI:function(a){return J.I(a).gl(a)},
c0:function(a){return J.dq(a).gA(a)},
bJ:function(a){return J.cl(a).gj(a)},
am:function(a){return J.I(a).h(a)},
k:function k(){},
aI:function aI(){},
aK:function aK(){},
a2:function a2(){},
aX:function aX(){},
ae:function ae(){},
y:function y(){},
x:function x(a){this.$ti=a},
bM:function bM(a){this.$ti=a},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
a1:function a1(){},
a0:function a0(){},
aJ:function aJ(){},
O:function O(){}},P={
d2:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.dj()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ak(new P.bj(s),1)).observe(u,{childList:true})
return new P.bi(s,u,t)}else if(self.setImmediate!=null)return P.dk()
return P.dl()},
d3:function(a){self.scheduleImmediate(H.ak(new P.bk(a),0))},
d4:function(a){self.setImmediate(H.ak(new P.bl(a),0))},
d5:function(a){P.bR(C.i,a)},
bR:function(a,b){var u=C.a.E(a.a,1000)
return P.d7(u<0?0:u,b)},
d7:function(a,b){var u=new P.bs()
u.a4(a,b)
return u},
dc:function(){var u,t
for(;u=$.E,u!=null;){$.V=null
t=u.b
$.E=t
if(t==null)$.U=null
u.a.$0()}},
dh:function(){$.bT=!0
try{P.dc()}finally{$.V=null
$.bT=!1
if($.E!=null)$.c_().$1(P.ck())}},
df:function(a){var u=new P.ag(a)
if($.E==null){$.E=$.U=u
if(!$.bT)$.c_().$1(P.ck())}else $.U=$.U.b=u},
dg:function(a){var u,t,s=$.E
if(s==null){P.df(a)
$.V=$.U
return}u=new P.ag(a)
t=$.V
if(t==null){u.b=s
$.E=$.V=u}else{u.b=t.b
$.V=t.b=u
if(u.b==null)$.U=u}},
d1:function(a,b){var u=$.t
if(u===C.c)return P.bR(a,b)
return P.bR(a,u.ac(b))},
ci:function(a,b,c,d,e){var u={}
u.a=d
P.dg(new P.bw(u,e))},
dd:function(a,b,c,d){var u,t=$.t
if(t===c)return d.$0()
$.t=c
u=t
try{t=d.$0()
return t}finally{$.t=u}},
de:function(a,b,c,d,e){var u,t=$.t
if(t===c)return d.$1(e)
$.t=c
u=t
try{t=d.$1(e)
return t}finally{$.t=u}},
bj:function bj(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a){this.a=a},
bl:function bl(a){this.a=a},
bs:function bs(){},
bt:function bt(a,b){this.a=a
this.b=b},
ag:function ag(a){this.a=a
this.b=null},
b6:function b6(){},
b7:function b7(){},
bv:function bv(){},
bw:function bw(a,b){this.a=a
this.b=b},
bp:function bp(){},
bq:function bq(a,b){this.a=a
this.b=b},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function(a,b,c){var u,t
if(P.bU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.o])
$.l.push(a)
try{P.db(a,u)}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}t=P.cd(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
c6:function(a,b,c){var u,t
if(P.bU(a))return b+"..."+c
u=new P.R(b)
$.l.push(a)
try{t=u
t.a=P.cd(t.a,a,", ")}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
bU:function(a){var u,t
for(u=$.l.length,t=0;t<u;++t)if(a===$.l[t])return!0
return!1},
db:function(a,b){var u,t,s,r,q,p,o,n=a.gA(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.m())return
u=H.d(n.gp())
b.push(u)
m+=u.length+2;++l}if(!n.m()){if(l<=5)return
if(0>=b.length)return H.h(b,-1)
t=b.pop()
if(0>=b.length)return H.h(b,-1)
s=b.pop()}else{r=n.gp();++l
if(!n.m()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.h(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gp();++l
for(;n.m();r=q,q=p){p=n.gp();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
c8:function(a){var u,t={}
if(P.bU(a))return"{...}"
u=new P.R("")
try{$.l.push(a)
u.a+="{"
t.a=!0
a.aj(0,new P.aT(t,u))
u.a+="}"}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
aR:function aR(){},
C:function C(){},
aS:function aS(){},
aT:function aT(a,b){this.a=a
this.b=b},
aU:function aU(){},
ai:function ai(){},
as:function as(){},
av:function av(){},
aC:function aC(){},
bg:function bg(){},
bh:function bh(){},
bu:function bu(a){this.b=0
this.c=a},
cR:function(a){if(a instanceof H.Z)return a.h(0)
return"Instance of '"+H.d(H.aY(a))+"'"},
bQ:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.cc(0,null,u)
return H.cb(t<u?C.j.Y(a,0,t):a)}return P.d0(a,0,null)},
d0:function(a,b,c){var u,t,s=J.c0(a)
for(u=0;u<b;++u)if(!s.m())throw H.e(P.Q(b,0,u,null,null))
t=[]
for(;s.m();)t.push(s.gp())
return H.cb(t)},
cZ:function(a){return new H.aL(a,H.cV(a,!1,!0,!1,!1,!1))},
cd:function(a,b,c){var u=J.c0(b)
if(!u.m())return a
if(c.length===0){do a+=H.d(u.gp())
while(u.m())}else{a+=H.d(u.gp())
for(;u.m();)a=a+c+H.d(u.gp())}return a},
cg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.d){u=$.cI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.t.ag(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cX(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cR(a)},
cL:function(a,b,c){return new P.u(!0,a,b,c)},
aZ:function(a,b){return new P.D(null,null,!0,a,b,"Value not in range")},
Q:function(a,b,c,d,e){return new P.D(b,c,!0,a,d,"Invalid value")},
cc:function(a,b,c){if(0>a||a>c)throw H.e(P.Q(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.Q(b,a,c,"end",null))
return b}return c},
cS:function(a,b,c,d,e){var u=e==null?J.bJ(b):e
return new P.aG(u,!0,a,c,"Index out of range")},
bS:function(a){return new P.bf(a)},
cf:function(a){return new P.bc(a)},
au:function(a){return new P.at(a)},
bL:function(a){return new P.bo(a)},
W:function W(){},
by:function by(){},
M:function M(a){this.a=a},
az:function az(){},
aA:function aA(){},
N:function N(){},
a8:function a8(){},
u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aG:function aG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bf:function bf(a){this.a=a},
bc:function bc(a){this.a=a},
at:function at(a){this.a=a},
a9:function a9(){},
ax:function ax(a){this.a=a},
bo:function bo(a){this.a=a},
aF:function aF(a,b){this.a=a
this.b=b},
p:function p(){},
aH:function aH(){},
aQ:function aQ(){},
z:function z(){},
X:function X(){},
n:function n(){},
o:function o(){},
R:function R(a){this.a=a}},W={
c1:function(){var u=document.createElement("a")
return u},
d6:function(a,b,c,d){var u=W.di(new W.bn(c),W.a),t=u!=null
if(t&&!0)if(t)J.cK(a,b,u,!1)
return new W.bm(a,b,u,!1)},
di:function(a,b){var u=$.t
if(u===C.c)return a
return u.ad(a,b)},
c:function c(){},
ao:function ao(){},
ap:function ap(){},
w:function w(){},
L:function L(){},
aw:function aw(){},
ay:function ay(){},
b:function b(){},
a:function a(){},
A:function A(){},
aE:function aE(){},
m:function m(){},
b0:function b0(){},
bm:function bm(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bn:function bn(a){this.a=a},
ah:function ah(){}},T={
j:function(a){var u=new T.b1()
u.a2(a)
return u},
an:function an(){},
a_:function a_(){},
a4:function a4(){},
v:function v(){this.a=null},
b1:function b1(){this.a=null}},R={aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},ac:function ac(a){this.b=a
this.c=null},b9:function b9(){this.c=this.b=this.a=null},ad:function ad(a){this.b=a
this.a=this.c=null}},V={
d_:function(a,b){var u=new V.b2()
u.a3(a,!1)
return u},
b2:function b2(){this.b=this.a=null},
b4:function b4(a){this.a=a},
b3:function b3(a){this.a=a}},F={
cp:function(){var u,t,s=V.d_("3Dart",!1),r=document,q=r.createElement("div")
q.className="pageImage"
q.id="3Dart"
u=W.c1()
u.href="#3Dart"
t=r.createElement("img")
t.src="resources/ThreeDart.png"
u.appendChild(t)
q.appendChild(u)
s.a.appendChild(q)
r=[P.o]
s.n(H.f(["Currently 3Dart is still in beta."],r))
s.n(H.f(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."],r))
s.N(2,"Examples")
s.n(H.f(["[3Dart Craft|./examples/craft/]"],r))
s.n(H.f(["[3Dart Chess|./examples/chess/]"],r))
s.n(H.f(["[Hypersphere|./examples/hypersphere/]"],r))
s.N(2,"Tutorials")
s.n(H.f(["[Getting Started|./tutorials/tutorial1/]"],r))
s.X(6,"Tutorials still need to be written","")
s.n(H.f(["Material Lighting"],r))
s.n(H.f(["Advanced Movers"],r))
s.n(H.f(["Advanced Shapes"],r))
s.n(H.f(["Advanced Techniques"],r))
s.n(H.f(["Scene Compositing"],r))
s.N(2,"Tests")
s.n(H.f(["[Tests|./tests/]"],r))}}
var w=[C,H,J,P,W,T,R,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bN.prototype={}
J.k.prototype={
w:function(a,b){return a===b},
gl:function(a){return H.P(a)},
h:function(a){return"Instance of '"+H.d(H.aY(a))+"'"}}
J.aI.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$iW:1}
J.aK.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0}}
J.a2.prototype={
gl:function(a){return 0},
h:function(a){return String(a)}}
J.aX.prototype={}
J.ae.prototype={}
J.y.prototype={
h:function(a){var u=a[$.cx()]
if(u==null)return this.a1(a)
return"JavaScript function for "+H.d(J.am(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.x.prototype={
am:function(a){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.h(r,u)
r[u]=t}return r.join("")},
Y:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.Q(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.Q(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.bW(a,0)])
return H.f(a.slice(b,c),[H.bW(a,0)])},
h:function(a){return P.c6(a,"[","]")},
gA:function(a){return new J.aq(a,a.length)},
gl:function(a){return H.P(a)},
gj:function(a){return a.length}}
J.bM.prototype={}
J.aq.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.Y(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.a1.prototype={
P:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.a.gS(b)
if(this.gS(a)===u)return 0
if(this.gS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gS:function(a){return a===0?1/a<0:a<0},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.bS(""+a+".round()"))},
ae:function(a,b,c){if(C.a.P(b,c)>0)throw H.e(H.H(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
E:function(a,b){return(a|0)===a?a/b|0:this.ab(a,b)},
ab:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.bS("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
M:function(a,b){var u
if(a>0)u=this.aa(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
aa:function(a,b){return b>31?0:a>>>b},
$iX:1}
J.a0.prototype={$ip:1}
J.aJ.prototype={}
J.O.prototype={
O:function(a,b){if(b<0)throw H.e(H.al(a,b))
if(b>=a.length)H.dD(H.al(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.e(H.al(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!=="string")throw H.e(P.cL(b,null,null))
return a+b},
T:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.aZ(b,null))
if(b>c)throw H.e(P.aZ(b,null))
if(c>a.length)throw H.e(P.aZ(c,null))
return a.substring(b,c)},
Z:function(a,b){return this.T(a,b,null)},
h:function(a){return a},
gl:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$io:1}
H.i.prototype={
gj:function(a){return this.a.length},
u:function(a,b){return C.b.O(this.a,b)},
$aC:function(){return[P.p]}}
H.aB.prototype={}
H.a3.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.cl(s),q=r.gj(s)
if(t.b!==q)throw H.e(P.au(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.ah(s,u);++t.c
return!0}}
H.aD.prototype={}
H.be.prototype={}
H.af.prototype={}
H.ba.prototype={
q:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.aW.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aM.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.bd.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bH.prototype={
$1:function(a){if(!!J.I(a).$iN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.aj.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.Z.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gas:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.b8.prototype={}
H.b5.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bG(u)+"'"}}
H.J.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.J))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gl:function(a){var u,t=this.c
if(t==null)u=H.P(this.a)
else u=typeof t!=="object"?J.bI(t):H.P(t)
return(u^H.P(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.aY(u))+"'")}}
H.b_.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gj:function(a){return this.a},
af:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.a6(u,a)}else return this.ak(a)},
ak:function(a){var u=this.d
if(u==null)return!1
return this.R(this.I(u,C.a.gl(a)&0x3ffffff),a)>=0},
u:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.D(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.D(r,b)
s=t==null?null:t.b
return s}else return q.al(b)},
al:function(a){var u,t,s=this.d
if(s==null)return
u=this.I(s,J.bI(a)&0x3ffffff)
t=this.R(u,a)
if(t<0)return
return u[t].b},
F:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.V(u==null?o.b=o.J():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.V(t==null?o.c=o.J():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.J()
r=J.bI(b)&0x3ffffff
q=o.I(s,r)
if(q==null)o.L(s,r,[o.K(b,c)])
else{p=o.R(q,b)
if(p>=0)q[p].b=c
else q.push(o.K(b,c))}}},
aj:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.au(u))
t=t.c}},
V:function(a,b,c){var u=this.D(a,b)
if(u==null)this.L(a,b,this.K(b,c))
else u.b=c},
K:function(a,b){var u=this,t=new H.aN(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
R:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cJ(a[t].a,b))return t
return-1},
h:function(a){return P.c8(this)},
D:function(a,b){return a[b]},
I:function(a,b){return a[b]},
L:function(a,b,c){a[b]=c},
a7:function(a,b){delete a[b]},
a6:function(a,b){return this.D(a,b)!=null},
J:function(){var u="<non-identifier-key>",t=Object.create(null)
this.L(t,u,t)
this.a7(t,u)
return t}}
H.aN.prototype={}
H.aO.prototype={
gj:function(a){return this.a.a},
gA:function(a){var u=this.a,t=new H.aP(u,u.r)
t.c=u.e
return t}}
H.aP.prototype={
gp:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.bB.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.bC.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bD.prototype={
$1:function(a){return this.a(a)}}
H.aL.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.a7.prototype={}
H.a5.prototype={
gj:function(a){return a.length},
$ibO:1,
$abO:function(){}}
H.a6.prototype={
$aC:function(){return[P.p]}}
H.aV.prototype={
gj:function(a){return a.length},
u:function(a,b){H.d8(b,a,a.length)
return a[b]}}
H.S.prototype={}
H.T.prototype={}
P.bj.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.bi.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.bk.prototype={
$0:function(){this.a.$0()}}
P.bl.prototype={
$0:function(){this.a.$0()}}
P.bs.prototype={
a4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ak(new P.bt(this,b),0),a)
else throw H.e(P.bS("`setTimeout()` not found."))}}
P.bt.prototype={
$0:function(){this.b.$0()}}
P.ag.prototype={}
P.b6.prototype={}
P.b7.prototype={}
P.bv.prototype={}
P.bw.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.a8():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.bp.prototype={
ao:function(a){var u,t,s,r=null
try{if(C.c===$.t){a.$0()
return}P.dd(r,r,this,a)}catch(s){u=H.cw(s)
t=H.co(s)
P.ci(r,r,this,u,t)}},
ap:function(a,b){var u,t,s,r=null
try{if(C.c===$.t){a.$1(b)
return}P.de(r,r,this,a,b)}catch(s){u=H.cw(s)
t=H.co(s)
P.ci(r,r,this,u,t)}},
aq:function(a,b){return this.ap(a,b,null)},
ac:function(a){return new P.bq(this,a)},
ad:function(a,b){return new P.br(this,a,b)}}
P.bq.prototype={
$0:function(){return this.a.ao(this.b)}}
P.br.prototype={
$1:function(a){return this.a.aq(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.aR.prototype={}
P.C.prototype={
gA:function(a){return new H.a3(a,this.gj(a))},
ah:function(a,b){return this.u(a,b)},
h:function(a){return P.c6(a,"[","]")}}
P.aS.prototype={}
P.aT.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:3}
P.aU.prototype={
gj:function(a){return this.a},
h:function(a){return P.c8(this)}}
P.ai.prototype={}
P.as.prototype={}
P.av.prototype={}
P.aC.prototype={}
P.bg.prototype={}
P.bh.prototype={
ag:function(a){var u,t,s=P.cc(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.bu(u)
if(t.a8(a,0,s)!==s)t.W(C.b.O(a,s-1),0)
return new Uint8Array(u.subarray(0,H.d9(0,t.b,u.length)))}}
P.bu.prototype={
W:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
a8:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.O(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.W(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.W.prototype={}
P.by.prototype={}
P.M.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.M&&this.a===b.a},
gl:function(a){return C.a.gl(this.a)},
h:function(a){var u,t,s,r=new P.aA(),q=this.a
if(q<0)return"-"+new P.M(0-q).h(0)
u=r.$1(C.a.E(q,6e7)%60)
t=r.$1(C.a.E(q,1e6)%60)
s=new P.az().$1(q%1e6)
return""+C.a.E(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.az.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.aA.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.N.prototype={}
P.a8.prototype={
h:function(a){return"Throw of null."}}
P.u.prototype={
gH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gG:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gH()+o+u
if(!q.a)return t
s=q.gG()
r=P.c5(q.b)
return t+s+": "+r}}
P.D.prototype={
gH:function(){return"RangeError"},
gG:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.aG.prototype={
gH:function(){return"RangeError"},
gG:function(){var u,t=this.b
if(typeof t!=="number")return t.at()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.bf.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bc.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.at.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.c5(u)+"."}}
P.a9.prototype={
h:function(a){return"Stack Overflow"},
$iN:1}
P.ax.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bo.prototype={
h:function(a){return"Exception: "+this.a}}
P.aF.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.T(s,0,75)+"...":s
return t+"\n"+r}}
P.p.prototype={}
P.aH.prototype={
gj:function(a){var u,t=this.gA(this)
for(u=0;t.m();)++u
return u},
h:function(a){return P.cT(this,"(",")")}}
P.aQ.prototype={}
P.z.prototype={
gl:function(a){return P.n.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.X.prototype={}
P.n.prototype={constructor:P.n,$in:1,
w:function(a,b){return this===b},
gl:function(a){return H.P(this)},
h:function(a){return"Instance of '"+H.d(H.aY(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.R.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.ao.prototype={
h:function(a){return String(a)}}
W.ap.prototype={
h:function(a){return String(a)}}
W.w.prototype={
gj:function(a){return a.length}}
W.L.prototype={
gj:function(a){return a.length}}
W.aw.prototype={}
W.ay.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.A.prototype={
a5:function(a,b,c,d){return a.addEventListener(b,H.ak(c,1),!1)}}
W.aE.prototype={
gj:function(a){return a.length}}
W.m.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.a0(a):u}}
W.b0.prototype={
gj:function(a){return a.length}}
W.bm.prototype={}
W.bn.prototype={
$1:function(a){return this.a.$1(a)}}
W.ah.prototype={}
T.an.prototype={
v:function(a){return!0},
h:function(a){return"all"}}
T.a_.prototype={
v:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.Y)(u),++s)if(u[s].v(a))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.Y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.a4.prototype={}
T.v.prototype={
v:function(a){return!this.a_(a)},
h:function(a){return"!["+this.U(0)+"]"}}
T.b1.prototype={
a2:function(a){var u,t
if(a.a.length<=0)throw H.e(P.bL("May not create a Set with zero characters."))
u=new H.B([P.p,P.W])
for(t=new H.a3(a,a.gj(a));t.m();)u.F(0,t.d,!0)
this.a=u},
v:function(a){return this.a.af(a)},
h:function(a){var u=this.a
return P.bQ(new H.aO(u,[H.bW(u,0)]))}}
R.aa.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.ad(this.a.i(0,b))
r.a=H.f([],[T.a4])
r.c=!1
this.c.push(r)
return r},
ai:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.Y)(u),++s){r=u[s]
if(r.v(a))return r}return},
h:function(a){return this.b}}
R.ab.prototype={
h:function(a){var u=H.ct(this.b,"\n","\\n"),t=H.ct(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.ac.prototype={
h:function(a){return this.b}}
R.b9.prototype={
i:function(a,b){var u=this.a.u(0,b)
if(u==null){u=new R.aa(this,b)
u.c=H.f([],[R.ad])
this.a.F(0,b,u)}return u},
B:function(a){var u,t=this.b.u(0,a)
if(t==null){t=new R.ac(a)
u=P.o
t.c=new H.B([u,u])
this.b.F(0,a,t)}return t},
ar:function(a){var u,t,s,r,q,p,o,n,m=H.f([],[R.ab]),l=this.c,k=[P.p],j=H.f([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.C(a,s)
q=l.ai(r)
if(q==null){if(t==null){j.push(r)
p=P.bQ(j)
throw H.e(P.bL("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.f([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.bQ(j)
o=l.d
n=o.c.u(0,p)
t=new R.ab(n==null?o.b:n,p,s)}++s}}}}
R.ad.prototype={
h:function(a){return this.b.b+": "+this.U(0)}}
V.b2.prototype={
a3:function(a,b){var u,t,s,r=document,q=r.body,p=r.createElement("div")
p.className="scrollTop"
q.appendChild(p)
u=r.createElement("div")
u.className="scrollPage"
q.appendChild(u)
t=r.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0)r.title=a
s=r.createElement("div")
this.a=s
t.appendChild(s)
this.b=null
W.d6(r,"scroll",new V.b4(p),!1)},
X:function(a,b,c){var u,t,s,r
a=C.a.ae(a,0,4)
if(c.length===0)c=P.cg(C.k,b,C.d,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.c1()
r.href="#"+c
r.textContent=b
u.appendChild(r)
this.a.appendChild(u)},
N:function(a,b){return this.X(a,b,"")},
n:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.a9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ar(C.j.am(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.Y)(s),++q){p=s[q]
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
if(H.dA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.cg(C.k,n,C.d,!1)
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
a9:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.b9()
t=P.o
u.a=new H.B([t,R.aa])
u.b=new H.B([t,R.ac])
u.c=u.i(0,q)
t=u.i(0,q).k(0,p)
s=T.j(new H.i("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).k(0,p)
s=new T.v()
r=[T.a4]
s.a=H.f([],r)
t.a.push(s)
t=T.j(new H.i("*"))
s.a.push(t)
t=u.i(0,p).k(0,"BoldEnd")
s=T.j(new H.i("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,o)
s=T.j(new H.i("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).k(0,o)
s=new T.v()
s.a=H.f([],r)
t.a.push(s)
t=T.j(new H.i("_"))
s.a.push(t)
t=u.i(0,o).k(0,n)
s=T.j(new H.i("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,m)
s=T.j(new H.i("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).k(0,m)
s=new T.v()
s.a=H.f([],r)
t.a.push(s)
t=T.j(new H.i("`"))
s.a.push(t)
t=u.i(0,m).k(0,"CodeEnd")
s=T.j(new H.i("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).k(0,l)
s=T.j(new H.i("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).k(0,k)
s=T.j(new H.i("|"))
t.a.push(s)
s=u.i(0,l).k(0,j)
t=T.j(new H.i("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).k(0,l)
t=new T.v()
t.a=H.f([],r)
s.a.push(t)
s=T.j(new H.i("|]"))
t.a.push(s)
s=u.i(0,k).k(0,j)
t=T.j(new H.i("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).k(0,k)
t=new T.v()
t.a=H.f([],r)
s.a.push(t)
s=T.j(new H.i("|]"))
t.a.push(s)
u.i(0,q).k(0,i).a.push(new T.an())
s=u.i(0,i).k(0,i)
t=new T.v()
t.a=H.f([],r)
s.a.push(t)
s=T.j(new H.i("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.B(p)
s=u.i(0,n)
s.d=s.a.B(o)
s=u.i(0,"CodeEnd")
s.d=s.a.B(m)
s=u.i(0,j)
s.d=s.a.B("Link")
s=u.i(0,i)
s.d=s.a.B(i)
this.b=u}}
V.b4.prototype={
$1:function(a){P.d1(C.i,new V.b3(this.a))}}
V.b3.prototype={
$0:function(){var u=C.v.an(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.k.prototype
u.a0=u.h
u=J.a2.prototype
u.a1=u.h
u=T.a_.prototype
u.a_=u.v
u.U=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"dj","d3",0)
u(P,"dk","d4",0)
u(P,"dl","d5",0)
t(P,"ck","dh",4)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.bN,J.k,J.aq,P.ai,P.aH,H.a3,H.aD,H.be,H.ba,P.N,H.Z,H.aj,P.aU,H.aN,H.aP,H.aL,P.bs,P.ag,P.b6,P.b7,P.bv,P.C,P.as,P.bu,P.W,P.X,P.M,P.a9,P.bo,P.aF,P.aQ,P.z,P.o,P.R,W.aw,T.an,T.a_,T.a4,T.b1,R.aa,R.ab,R.ac,R.b9,V.b2])
s(J.k,[J.aI,J.aK,J.a2,J.x,J.a1,J.O,H.a7,W.A,W.ah,W.ay,W.a])
s(J.a2,[J.aX,J.ae,J.y])
t(J.bM,J.x)
s(J.a1,[J.a0,J.aJ])
t(P.aR,P.ai)
t(H.af,P.aR)
t(H.i,H.af)
t(H.aB,P.aH)
s(P.N,[H.aW,H.aM,H.bd,H.b_,P.a8,P.u,P.bf,P.bc,P.at,P.ax])
s(H.Z,[H.bH,H.b8,H.bB,H.bC,H.bD,P.bj,P.bi,P.bk,P.bl,P.bt,P.bw,P.bq,P.br,P.aT,P.az,P.aA,W.bn,V.b4,V.b3])
s(H.b8,[H.b5,H.J])
t(P.aS,P.aU)
t(H.B,P.aS)
t(H.aO,H.aB)
t(H.a5,H.a7)
t(H.S,H.a5)
t(H.T,H.S)
t(H.a6,H.T)
t(H.aV,H.a6)
t(P.bp,P.bv)
t(P.av,P.b7)
t(P.aC,P.as)
t(P.bg,P.aC)
t(P.bh,P.av)
s(P.X,[P.by,P.p])
s(P.u,[P.D,P.aG])
t(W.m,W.A)
s(W.m,[W.b,W.w])
t(W.c,W.b)
s(W.c,[W.ao,W.ap,W.aE,W.b0])
t(W.L,W.ah)
t(W.bm,P.b6)
s(T.a_,[T.v,R.ad])
u(H.af,H.be)
u(H.S,P.C)
u(H.T,H.aD)
u(P.ai,P.C)
u(W.ah,W.aw)})()
var v={mangledGlobalNames:{p:"int",by:"double",X:"num",o:"String",W:"bool",z:"Null",aQ:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.u=J.k.prototype
C.j=J.x.prototype
C.a=J.a0.prototype
C.v=J.a1.prototype
C.b=J.O.prototype
C.w=J.y.prototype
C.l=J.aX.prototype
C.e=J.ae.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
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
C.r=function(getTagFallback) {
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
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
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
C.q=function(hooks) {
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
C.p=function(hooks) {
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
C.h=function(hooks) { return hooks; }

C.d=new P.bg()
C.t=new P.bh()
C.c=new P.bp()
C.i=new P.M(0)
C.k=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])})();(function staticFields(){$.q=0
$.K=null
$.c2=null
$.cn=null
$.cj=null
$.cr=null
$.bx=null
$.bE=null
$.bX=null
$.E=null
$.U=null
$.V=null
$.bT=!1
$.t=C.c
$.l=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dF","cx",function(){return H.cm("_$dart_dartClosure")})
u($,"dG","bZ",function(){return H.cm("_$dart_js")})
u($,"dH","cy",function(){return H.r(H.bb({
toString:function(){return"$receiver$"}}))})
u($,"dI","cz",function(){return H.r(H.bb({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dJ","cA",function(){return H.r(H.bb(null))})
u($,"dK","cB",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dN","cE",function(){return H.r(H.bb(void 0))})
u($,"dO","cF",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dM","cD",function(){return H.r(H.ce(null))})
u($,"dL","cC",function(){return H.r(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dQ","cH",function(){return H.r(H.ce(void 0))})
u($,"dP","cG",function(){return H.r(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dR","c_",function(){return P.d2()})
u($,"dS","cI",function(){return P.cZ("^[\\-\\.0-9A-Z_a-z~]*$")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.k,MediaError:J.k,Navigator:J.k,NavigatorConcurrentHardware:J.k,NavigatorUserMediaError:J.k,OverconstrainedError:J.k,PositionError:J.k,SQLError:J.k,ArrayBufferView:H.a7,Uint8Array:H.aV,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.ao,HTMLAreaElement:W.ap,CDATASection:W.w,CharacterData:W.w,Comment:W.w,ProcessingInstruction:W.w,Text:W.w,CSSStyleDeclaration:W.L,MSStyleCSSProperties:W.L,CSS2Properties:W.L,DOMException:W.ay,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.A,DOMWindow:W.A,EventTarget:W.A,HTMLFormElement:W.aE,Document:W.m,DocumentFragment:W.m,HTMLDocument:W.m,ShadowRoot:W.m,XMLDocument:W.m,Attr:W.m,DocumentType:W.m,Node:W.m,HTMLSelectElement:W.b0})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.a5.$nativeSuperclassTag="ArrayBufferView"
H.S.$nativeSuperclassTag="ArrayBufferView"
H.T.$nativeSuperclassTag="ArrayBufferView"
H.a6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cp,[])
else F.cp([])})})()
//# sourceMappingURL=main.dart.js.map
