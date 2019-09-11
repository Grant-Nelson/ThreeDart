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
a[c]=function(){a[c]=function(){H.ez(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.cG(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={cu:function cu(){},r:function r(a){this.a=a},b4:function b4(){},ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},au:function au(){},aJ:function aJ(){},aI:function aI(){},
aq:function(a){var u,t=H.eA(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
em:function(a){return v.types[H.W(a)]},
eV:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.w(a).$icv},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aR(a)
if(typeof u!=="string")throw H.e(H.a1(a))
return u},
ab:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
aE:function(a){return H.dO(a)+H.cD(H.V(a),0,null)},
dO:function(a){var u,t,s,r,q,p,o,n=J.w(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.u||!!n.$iaH){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aq(t.length>1&&C.d.F(t,0)===36?C.d.ad(t,1):t)},
cX:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
dQ:function(a){var u,t,s,r=H.h([],[P.k])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.ap)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.a1(s))
if(s<=65535)C.a.i(r,s)
else if(s<=1114111){C.a.i(r,55296+(C.c.R(s-65536,10)&1023))
C.a.i(r,56320+(s&1023))}else throw H.e(H.a1(s))}return H.cX(r)},
cY:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.a1(s))
if(s<0)throw H.e(H.a1(s))
if(s>65535)return H.dQ(a)}return H.cX(a)},
dP:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.R(u,10))>>>0,56320|u&1023)}throw H.e(P.ac(a,0,1114111,null,null))},
en:function(a){throw H.e(H.a1(a))},
o:function(a,b){if(a==null)J.cp(a)
throw H.e(H.am(a,b))},
am:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.J(!0,b,s,null)
u=H.W(J.cp(a))
if(!(b<0)){if(typeof u!=="number")return H.en(u)
t=b>=u}else t=!0
if(t)return P.dK(b,a,s,null,u)
return P.bp(b,s)},
eg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.Z(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.Z(a,c,!0,b,"end",u)
return new P.J(!0,b,"end",null)},
a1:function(a){return new P.J(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.aD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.dp})
u.name=""}else u.toString=H.dp
return u},
dp:function(){return J.aR(this.dartException)},
cm:function(a){throw H.e(a)},
ap:function(a){throw H.e(P.aZ(a))},
G:function(a){var u,t,s,r,q,p
a=H.dm(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.h([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
bF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
d0:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cV:function(a,b){return new H.bn(a,b==null?null:b.method)},
cw:function(a,b){var u=b==null,t=u?null:b.method
return new H.be(a,t,u?null:b.receiver)},
ar:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.cn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.R(t,16)&8191)===10)switch(s){case 438:return f.$1(H.cw(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.cV(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.dr()
q=$.ds()
p=$.dt()
o=$.du()
n=$.dx()
m=$.dy()
l=$.dw()
$.dv()
k=$.dA()
j=$.dz()
i=r.t(u)
if(i!=null)return f.$1(H.cw(H.I(u),i))
else{i=q.t(u)
if(i!=null){i.method="call"
return f.$1(H.cw(H.I(u),i))}else{i=p.t(u)
if(i==null){i=o.t(u)
if(i==null){i=n.t(u)
if(i==null){i=m.t(u)
if(i==null){i=l.t(u)
if(i==null){i=o.t(u)
if(i==null){i=k.t(u)
if(i==null){i=j.t(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.cV(H.I(u),i))}}return f.$1(new H.bI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.aF()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.J(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.aF()
return a},
an:function(a){var u
if(a==null)return new H.aO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aO(a)},
er:function(a,b,c,d,e,f){H.n(a,"$ics")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.cr("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.er)
a.$identity=u
return u},
dI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.bw().constructor.prototype):Object.create(new H.a3(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.E
if(typeof t!=="number")return t.v()
$.E=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.cR(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.dE(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cR(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
dE:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.em,a)
if(typeof a=="function")if(b)return a
else{u=c?H.cQ:H.cq
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
dF:function(a,b,c,d){var u=H.cq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.dH(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.dF(t,!r,u,b)
if(t===0){r=$.E
if(typeof r!=="number")return r.v()
$.E=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.a4
return new Function(r+H.d(q==null?$.a4=H.aX("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.E
if(typeof r!=="number")return r.v()
$.E=r+1
o+=r
r="return function("+o+"){return this."
q=$.a4
return new Function(r+H.d(q==null?$.a4=H.aX("self"):q)+"."+H.d(u)+"("+o+");}")()},
dG:function(a,b,c,d){var u=H.cq,t=H.cQ
switch(b?-1:a){case 0:throw H.e(new H.bq("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
dH:function(a,b){var u,t,s,r,q,p,o,n=$.a4
if(n==null)n=$.a4=H.aX("self")
u=$.cP
if(u==null)u=$.cP=H.aX("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dG(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.E
if(typeof u!=="number")return u.v()
$.E=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.E
if(typeof u!=="number")return u.v()
$.E=u+1
return new Function(n+u+"}")()},
cG:function(a,b,c,d,e,f,g){return H.dI(a,b,c,d,!!e,!!f,g)},
cq:function(a){return a.a},
cQ:function(a){return a.c},
aX:function(a){var u,t,s,r=new H.a3("self","target","receiver","name"),q=J.cT(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ef:function(a){if(a==null)H.eb("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.N(a,"String"))},
eW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.N(a,"num"))},
eR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.N(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.N(a,"int"))},
dk:function(a,b){throw H.e(H.N(a,H.aq(H.I(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.dk(a,b)},
es:function(a,b){var u
if(a==null)return a
u=J.w(a)
if(!!u.$it)return a
if(u[b])return a
H.dk(a,b)},
dc:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.W(u)]
else return a.$S()}return},
aQ:function(a,b){var u
if(typeof a=="function")return!0
u=H.dc(J.w(a))
if(u==null)return!1
return H.d5(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.cA)return a
$.cA=!0
try{if(H.aQ(a,b))return a
u=H.cl(b)
t=H.N(a,u)
throw H.e(t)}finally{$.cA=!1}},
cH:function(a,b){if(a!=null&&!H.cF(a,b))H.cm(H.N(a,H.cl(b)))
return a},
N:function(a,b){return new H.bG("TypeError: "+P.b6(a)+": type '"+H.d(H.e9(a))+"' is not a subtype of type '"+b+"'")},
e9:function(a){var u,t=J.w(a)
if(!!t.$ia5){u=H.dc(t)
if(u!=null)return H.cl(u)
return"Closure"}return H.aE(a)},
eb:function(a){throw H.e(new H.bM(a))},
ez:function(a){throw H.e(new P.b0(a))},
de:function(a){return v.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
V:function(a){if(a==null)return
return a.$ti},
eU:function(a,b,c){return H.a2(a["$a"+H.d(c)],H.V(b))},
el:function(a,b,c,d){var u=H.a2(a["$a"+H.d(c)],H.V(b))
return u==null?null:u[d]},
df:function(a,b,c){var u=H.a2(a["$a"+H.d(b)],H.V(a))
return u==null?null:u[c]},
j:function(a,b){var u=H.V(a)
return u==null?null:u[b]},
cl:function(a){return H.T(a,null)},
T:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aq(a[0].name)+H.cD(a,1,b)
if(typeof a=="function")return H.aq(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.o(b,t)
return H.d(b[t])}if('func' in a)return H.e2(a,b)
if('futureOr' in a)return"FutureOr<"+H.T("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
e2:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.h([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.i(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.o(a0,m)
p=C.d.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.i)p+=" extends "+H.T(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.T(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.T(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.T(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ei(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.I(n[g])
i=i+h+H.T(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
cD:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.T(p,c)}return"<"+u.h(0)+">"},
a2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cE:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.V(a)
t=J.w(a)
if(t[b]==null)return!1
return H.da(H.a2(t[d],u),null,c,null)},
U:function(a,b,c,d){if(a==null)return a
if(H.cE(a,b,c,d))return a
throw H.e(H.N(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aq(b.substring(2))+H.cD(c,0,null),v.mangledGlobalNames)))},
da:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.C(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.C(a[t],b,c[t],d))return!1
return!0},
eS:function(a,b,c){return a.apply(b,H.a2(J.w(b)["$a"+H.d(c)],H.V(b)))},
dh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="i"||a.name==="q"||a===-1||a===-2||H.dh(u)}return!1},
cF:function(a,b){var u,t
if(a==null)return b==null||b.name==="i"||b.name==="q"||b===-1||b===-2||H.dh(b)
if(b==null||b===-1||b.name==="i"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cF(a,"type" in b?b.type:null))return!0
if('func' in b)return H.aQ(a,b)}u=J.w(a).constructor
t=H.V(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.C(u,null,b,null)},
p:function(a,b){if(a!=null&&!H.cF(a,b))throw H.e(H.N(a,H.cl(b)))
return a},
C:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="i"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="i"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.C(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="q")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.C("type" in a?a.type:l,b,s,d)
else if(H.C(a,b,s,d))return!0
else{if(!('$i'+"a9" in t.prototype))return!1
r=t.prototype["$a"+"a9"]
q=H.a2(r,u?a.slice(1):l)
return H.C(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.d5(a,b,c,d)
if('func' in a)return c.name==="cs"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.da(H.a2(m,u),b,p,d)},
d5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.C(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.C(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.C(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.C(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ev(h,b,g,d)},
ev:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.C(c[s],d,a[s],b))return!1}return!0},
eT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
et:function(a){var u,t,s,r,q=H.I($.dg.$1(a)),p=$.cd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.cj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.d9.$2(a,q))
if(q!=null){p=$.cd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.cj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ck(u)
$.cd[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.cj[q]=u
return u}if(s==="-"){r=H.ck(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.dj(a,u)
if(s==="*")throw H.e(P.d1(q))
if(v.leafTags[q]===true){r=H.ck(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.dj(a,u)},
dj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cJ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.cJ(a,!1,null,!!a.$icv)},
eu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ck(u)
else return J.cJ(u,c,null,null)},
ep:function(){if(!0===$.cI)return
$.cI=!0
H.eq()},
eq:function(){var u,t,s,r,q,p,o,n
$.cd=Object.create(null)
$.cj=Object.create(null)
H.eo()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.dl.$1(q)
if(p!=null){o=H.eu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
eo:function(){var u,t,s,r,q,p,o=C.m()
o=H.a0(C.n,H.a0(C.o,H.a0(C.i,H.a0(C.i,H.a0(C.p,H.a0(C.q,H.a0(C.r(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.dg=new H.cg(r)
$.d9=new H.ch(q)
$.dl=new H.ci(p)},
a0:function(a,b){return a(b)||b},
dN:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(new P.b8("Illegal RegExp pattern ("+String(p)+")",a))},
ex:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
eh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dn:function(a,b,c){var u=H.ey(a,b,c)
return u},
ey:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.dm(b),'g'),H.eh(c))},
bE:function bE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bn:function bn(a,b){this.a=a
this.b=b},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a){this.a=a},
cn:function cn(a){this.a=a},
aO:function aO(a){this.a=a
this.b=null},
a5:function a5(){},
bC:function bC(){},
bw:function bw(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a){this.a=a},
bq:function bq(a){this.a=a},
bM:function bM(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bf:function bf(a,b){this.a=a
this.b=b
this.c=null},
bg:function bg(a,b){this.a=a
this.$ti=b},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
ci:function ci(a){this.a=a},
bd:function bd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.am(b,a))},
e1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.eg(a,b,c))
return b},
aC:function aC(){},
aA:function aA(){},
aB:function aB(){},
bm:function bm(){},
ai:function ai(){},
aj:function aj(){},
ei:function(a){return J.dM(a?Object.keys(a):[],null)},
eA:function(a){return v.mangledGlobalNames[a]}},J={
cJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.cI==null){H.ep()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.d1("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.cK()]
if(r!=null)return r
r=H.et(a)
if(r!=null)return r
if(typeof a=="function")return C.w
u=Object.getPrototypeOf(a)
if(u==null)return C.l
if(u===Object.prototype)return C.l
if(typeof s=="function"){Object.defineProperty(s,$.cK(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
dM:function(a,b){return J.cT(H.h(a,[b]))},
cT:function(a){a.fixed$length=Array
return a},
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.av.prototype
return J.bb.prototype}if(typeof a=="string")return J.aa.prototype
if(a==null)return J.bc.prototype
if(typeof a=="boolean")return J.ba.prototype
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.i)return a
return J.cf(a)},
dd:function(a){if(typeof a=="string")return J.aa.prototype
if(a==null)return a
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.i)return a
return J.cf(a)},
ej:function(a){if(a==null)return a
if(a.constructor==Array)return J.F.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.i)return a
return J.cf(a)},
ek:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
return a}if(a instanceof P.i)return a
return J.cf(a)},
dC:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).B(a,b)},
dD:function(a,b,c,d){return J.ek(a).ak(a,b,c,d)},
co:function(a){return J.w(a).gm(a)},
cM:function(a){return J.ej(a).gD(a)},
cp:function(a){return J.dd(a).gk(a)},
aR:function(a){return J.w(a).h(a)},
x:function x(){},
ba:function ba(){},
bc:function bc(){},
ax:function ax(){},
bo:function bo(){},
aH:function aH(){},
R:function R(){},
F:function F(a){this.$ti=a},
ct:function ct(a){this.$ti=a},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aw:function aw(){},
av:function av(){},
bb:function bb(){},
aa:function aa(){}},P={
dV:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ec()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aP(new P.bO(s),1)).observe(u,{childList:true})
return new P.bN(s,u,t)}else if(self.setImmediate!=null)return P.ed()
return P.ee()},
dW:function(a){self.scheduleImmediate(H.aP(new P.bP(H.f(a,{func:1,ret:-1})),0))},
dX:function(a){self.setImmediate(H.aP(new P.bQ(H.f(a,{func:1,ret:-1})),0))},
dY:function(a){P.cy(C.j,H.f(a,{func:1,ret:-1}))},
cy:function(a,b){var u=C.c.I(a.a,1000)
return P.e_(u<0?0:u,b)},
e_:function(a,b){var u=new P.c6()
u.aj(a,b)
return u},
dZ:function(a,b){var u,t,s
b.a=1
try{a.ab(new P.bV(b),new P.bW(b),null)}catch(s){u=H.ar(s)
t=H.an(s)
P.ew(new P.bX(b,u,t))}},
d3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iB")
if(u>=4){t=b.O()
b.a=a.a
b.c=a.c
P.ah(b,t)}else{t=H.n(b.c,"$iH")
b.a=2
b.c=a
a.a7(t)}},
ah:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.n(g.c,"$iv")
P.ca(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.ah(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.n(q,"$iv")
P.ca(i,i,g.b,q.a,q.b)
return}l=$.m
if(l!==n)$.m=n
else l=i
g=b.c
if((g&15)===8)new P.c0(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.c_(u,b,q).$0()}else if((g&2)!==0)new P.bZ(h,u,b).$0()
if(l!=null)$.m=l
g=u.b
if(!!J.w(g).$ia9){if(g.a>=4){k=H.n(o.c,"$iH")
o.c=null
b=o.H(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.d3(g,o)
return}}j=b.b
k=H.n(j.c,"$iH")
j.c=null
b=j.H(k)
g=u.a
p=u.b
if(!g){H.p(p,H.j(j,0))
j.a=4
j.c=p}else{H.n(p,"$iv")
j.a=8
j.c=p}h.a=j
g=j}},
e5:function(a,b){if(H.aQ(a,{func:1,args:[P.i,P.y]}))return H.f(a,{func:1,ret:null,args:[P.i,P.y]})
if(H.aQ(a,{func:1,args:[P.i]}))return H.f(a,{func:1,ret:null,args:[P.i]})
throw H.e(P.cO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
e4:function(){var u,t
for(;u=$.a_,u!=null;){$.al=null
t=u.b
$.a_=t
if(t==null)$.ak=null
u.a.$0()}},
e8:function(){$.cB=!0
try{P.e4()}finally{$.al=null
$.cB=!1
if($.a_!=null)$.cL().$1(P.db())}},
d8:function(a){var u=new P.aL(a)
if($.a_==null){$.a_=$.ak=u
if(!$.cB)$.cL().$1(P.db())}else $.ak=$.ak.b=u},
e7:function(a){var u,t,s=$.a_
if(s==null){P.d8(a)
$.al=$.ak
return}u=new P.aL(a)
t=$.al
if(t==null){u.b=s
$.a_=$.al=u}else{u.b=t.b
$.al=t.b=u
if(u.b==null)$.ak=u}},
ew:function(a){var u=null,t=$.m
if(C.b===t){P.cc(u,u,C.b,a)
return}P.cc(u,u,t,H.f(t.T(a),{func:1,ret:-1}))},
dU:function(a,b){var u=$.m
if(u===C.b)return P.cy(a,H.f(b,{func:1,ret:-1}))
return P.cy(a,H.f(u.T(b),{func:1,ret:-1}))},
ca:function(a,b,c,d,e){var u={}
u.a=d
P.e7(new P.cb(u,e))},
d6:function(a,b,c,d,e){var u,t=$.m
if(t===c)return d.$0()
$.m=c
u=t
try{t=d.$0()
return t}finally{$.m=u}},
d7:function(a,b,c,d,e,f,g){var u,t=$.m
if(t===c)return d.$1(e)
$.m=c
u=t
try{t=d.$1(e)
return t}finally{$.m=u}},
e6:function(a,b,c,d,e,f,g,h,i){var u,t=$.m
if(t===c)return d.$2(e,f)
$.m=c
u=t
try{t=d.$2(e,f)
return t}finally{$.m=u}},
cc:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.T(d):c.aw(d,-1)
P.d8(d)},
bO:function bO(a){this.a=a},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a){this.a=a},
bQ:function bQ(a){this.a=a},
c6:function c6(){},
c7:function c7(a,b){this.a=a
this.b=b},
H:function H(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bU:function bU(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
bV:function bV(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a
this.b=null},
bx:function bx(){},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a,b){this.a=a
this.b=b},
by:function by(){},
bz:function bz(){},
v:function v(a,b){this.a=a
this.b=b},
c9:function c9(){},
cb:function cb(a,b){this.a=a
this.b=b},
c2:function c2(){},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function(a,b,c){var u,t
if(P.cC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.h([],[P.l])
C.a.i($.z,a)
try{P.e3(a,u)}finally{if(0>=$.z.length)return H.o($.z,-1)
$.z.pop()}t=P.d_(b,H.es(u,"$iD"),", ")+c
return t.charCodeAt(0)==0?t:t},
cS:function(a,b,c){var u,t
if(P.cC(a))return b+"..."+c
u=new P.ae(b)
C.a.i($.z,a)
try{t=u
t.a=P.d_(t.a,a,", ")}finally{if(0>=$.z.length)return H.o($.z,-1)
$.z.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cC:function(a){var u,t
for(u=$.z.length,t=0;t<u;++t)if(a===$.z[t])return!0
return!1},
e3:function(a,b){var u,t,s,r,q,p,o,n=a.gD(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.n())return
u=H.d(n.gq())
C.a.i(b,u)
m+=u.length+2;++l}if(!n.n()){if(l<=5)return
if(0>=b.length)return H.o(b,-1)
t=b.pop()
if(0>=b.length)return H.o(b,-1)
s=b.pop()}else{r=n.gq();++l
if(!n.n()){if(l<=4){C.a.i(b,H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.o(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gq();++l
for(;n.n();r=q,q=p){p=n.gq();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.o(b,-1)
m-=b.pop().length+2;--l}C.a.i(b,"...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.i(b,o)
C.a.i(b,s)
C.a.i(b,t)},
cU:function(a){var u,t={}
if(P.cC(a))return"{...}"
u=new P.ae("")
try{C.a.i($.z,a)
u.a+="{"
t.a=!0
a.aD(0,new P.bk(t,u))
u.a+="}"}finally{if(0>=$.z.length)return H.o($.z,-1)
$.z.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
bi:function bi(){},
K:function K(){},
bj:function bj(){},
bk:function bk(a,b){this.a=a
this.b=b},
bl:function bl(){},
aN:function aN(){},
a6:function a6(){},
as:function as(){},
b5:function b5(){},
bK:function bK(){},
bL:function bL(){},
c8:function c8(a){this.b=0
this.c=a},
dJ:function(a){if(a instanceof H.a5)return a.h(0)
return"Instance of '"+H.d(H.aE(a))+"'"},
cx:function(a){var u,t
if(a.constructor===Array){H.U(a,"$iF",[P.k],"$aF")
u=a.length
t=P.cZ(0,null,u)
return H.cY(t<u?C.a.ac(a,0,t):a)}return P.dT(a,0,null)},
dT:function(a,b,c){var u,t,s=J.cM(a)
for(u=0;u<b;++u)if(!s.n())throw H.e(P.ac(b,0,u,null,null))
t=[]
for(;s.n();)t.push(s.gq())
return H.cY(t)},
dR:function(a){return new H.bd(a,H.dN(a,!1,!0,!1,!1,!1))},
d_:function(a,b,c){var u=J.cM(b)
if(!u.n())return a
if(c.length===0){do a+=H.d(u.gq())
while(u.n())}else{a+=H.d(u.gq())
for(;u.n();)a=a+c+H.d(u.gq())}return a},
d4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.dB().b
u=u.test(b)}else u=!1
if(u)return b
t=C.t.aA(H.p(b,H.df(c,"a6",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.o(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dP(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
b6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aR(a)
if(typeof a==="string")return JSON.stringify(a)
return P.dJ(a)},
cO:function(a,b,c){return new P.J(!0,a,b,c)},
bp:function(a,b){return new P.Z(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.Z(b,c,!0,a,d,"Invalid value")},
cZ:function(a,b,c){if(0>a||a>c)throw H.e(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ac(b,a,c,"end",null))
return b}return c},
dK:function(a,b,c,d,e){var u=H.W(e==null?J.cp(b):e)
return new P.b9(u,!0,a,c,"Index out of range")},
aK:function(a){return new P.bJ(a)},
d1:function(a){return new P.bH(a)},
aZ:function(a){return new P.aY(a)},
cr:function(a){return new P.bT(a)},
O:function O(){},
ce:function ce(){},
a8:function a8(a){this.a=a},
b2:function b2(){},
b3:function b3(){},
X:function X(){},
aW:function aW(){},
aD:function aD(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b9:function b9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bJ:function bJ(a){this.a=a},
bH:function bH(a){this.a=a},
aY:function aY(a){this.a=a},
aF:function aF(){},
b0:function b0(a){this.a=a},
bT:function bT(a){this.a=a},
b8:function b8(a,b){this.a=a
this.b=b},
k:function k(){},
D:function D(){},
t:function t(){},
q:function q(){},
ao:function ao(){},
i:function i(){},
y:function y(){},
l:function l(){},
ae:function ae(a){this.a=a}},W={
cN:function(){var u=document.createElement("a")
return u},
d2:function(a,b,c,d,e){var u=W.ea(new W.bS(c),W.a),t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.a]})
if(t)J.dD(a,b,u,!1)}return new W.bR(a,b,u,!1,[e])},
ea:function(a,b){var u=$.m
if(u===C.b)return a
return u.ax(a,b)},
c:function c(){},
aT:function aT(){},
aU:function aU(){},
P:function P(){},
a7:function a7(){},
b_:function b_(){},
at:function at(){},
b1:function b1(){},
b:function b(){},
a:function a(){},
Q:function Q(){},
b7:function b7(){},
A:function A(){},
br:function br(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bR:function bR(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bS:function bS(a){this.a=a},
aM:function aM(){}},V={
u:function(a){var u=new V.bs()
u.ah(a)
return u},
aS:function aS(){},
L:function L(){},
az:function az(){},
M:function M(){this.a=null},
bs:function bs(){this.a=null},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a){this.b=a
this.c=null},
bD:function bD(){this.c=this.b=this.a=null},
ag:function ag(a){this.b=a
this.a=this.c=null},
dS:function(a,b){var u=new V.bt()
u.ai(a,!1)
return u},
bt:function bt(){this.b=this.a=null},
bv:function bv(a){this.a=a},
bu:function bu(a){this.a=a}},F={
di:function(){var u,t,s=V.dS("3Dart",!1),r=document,q=r.createElement("div")
q.className="pageImage"
q.id="3Dart"
u=W.cN()
u.href="#3Dart"
t=r.createElement("img")
t.src="resources/ThreeDart.png"
u.appendChild(t)
q.appendChild(u)
s.a.appendChild(q)
r=[P.l]
s.p(H.h(["Currently 3Dart is still in beta."],r))
s.p(H.h(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."],r))
s.S(2,"Examples")
s.p(H.h(["[3Dart Craft|./examples/craft/]"],r))
s.p(H.h(["[3Dart Chess|./examples/chess/]"],r))
s.p(H.h(["[Hypersphere|./examples/hypersphere/]"],r))
s.S(2,"Tutorials")
s.p(H.h(["[Getting Started|./tutorials/tutorial1/]"],r))
s.a9(6,"Tutorials still need to be written","")
s.p(H.h(["Material Lighting"],r))
s.p(H.h(["Advanced Movers"],r))
s.p(H.h(["Advanced Shapes"],r))
s.p(H.h(["Advanced Techniques"],r))
s.p(H.h(["Scene Compositing"],r))
s.S(2,"Tests")
s.p(H.h(["[Tests|./tests/]"],r))}}
var w=[C,H,J,P,W,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cu.prototype={}
J.x.prototype={
B:function(a,b){return a===b},
gm:function(a){return H.ab(a)},
h:function(a){return"Instance of '"+H.d(H.aE(a))+"'"}}
J.ba.prototype={
h:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$iO:1}
J.bc.prototype={
B:function(a,b){return null==b},
h:function(a){return"null"},
gm:function(a){return 0}}
J.ax.prototype={
gm:function(a){return 0},
h:function(a){return String(a)}}
J.bo.prototype={}
J.aH.prototype={}
J.R.prototype={
h:function(a){var u=a[$.dq()]
if(u==null)return this.af(a)
return"JavaScript function for "+H.d(J.aR(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ics:1}
J.F.prototype={
i:function(a,b){H.p(b,H.j(a,0))
if(!!a.fixed$length)H.cm(P.aK("add"))
a.push(b)},
aH:function(a){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.C(t,u,H.d(a[u]))
return t.join("")},
ac:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ac(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.j(a,0)])
return H.h(a.slice(b,c),[H.j(a,0)])},
h:function(a){return P.cS(a,"[","]")},
gD:function(a){return new J.aV(a,a.length,[H.j(a,0)])},
gm:function(a){return H.ab(a)},
gk:function(a){return a.length},
C:function(a,b,c){H.p(c,H.j(a,0))
if(!!a.immutable$list)H.cm(P.aK("indexed set"))
if(b>=a.length||!1)throw H.e(H.am(a,b))
a[b]=c},
$iD:1,
$it:1}
J.ct.prototype={}
J.aV.prototype={
gq:function(){return this.d},
n:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.ap(s))
u=t.c
if(u>=r){t.sa6(null)
return!1}t.sa6(s[u]);++t.c
return!0},
sa6:function(a){this.d=H.p(a,H.j(this,0))}}
J.aw.prototype={
V:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.c.gX(b)
if(this.gX(a)===u)return 0
if(this.gX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gX:function(a){return a===0?1/a<0:a<0},
aJ:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.aK(""+a+".round()"))},
ay:function(a,b,c){if(C.c.V(b,c)>0)throw H.e(H.a1(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
I:function(a,b){return(a|0)===a?a/b|0:this.at(a,b)},
at:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.aK("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
R:function(a,b){var u
if(a>0)u=this.ar(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ar:function(a,b){return b>31?0:a>>>b},
$iao:1}
J.av.prototype={$ik:1}
J.bb.prototype={}
J.aa.prototype={
U:function(a,b){if(b<0)throw H.e(H.am(a,b))
if(b>=a.length)H.cm(H.am(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.e(H.am(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.e(P.cO(b,null,null))
return a+b},
Z:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bp(b,null))
if(b>c)throw H.e(P.bp(b,null))
if(c>a.length)throw H.e(P.bp(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.Z(a,b,null)},
h:function(a){return a},
gm:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$icW:1,
$il:1}
H.r.prototype={
gk:function(a){return this.a.length},
w:function(a,b){return C.d.U(this.a,b)},
$aaJ:function(){return[P.k]},
$aK:function(){return[P.k]},
$aD:function(){return[P.k]},
$at:function(){return[P.k]}}
H.b4.prototype={}
H.ay.prototype={
gq:function(){return this.d},
n:function(){var u,t=this,s=t.a,r=J.dd(s),q=r.gk(s)
if(t.b!==q)throw H.e(P.aZ(s))
u=t.c
if(u>=q){t.sa0(null)
return!1}t.sa0(r.aB(s,u));++t.c
return!0},
sa0:function(a){this.d=H.p(a,H.j(this,0))}}
H.au.prototype={}
H.aJ.prototype={}
H.aI.prototype={}
H.bE.prototype={
t:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.bn.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.be.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.bI.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cn.prototype={
$1:function(a){if(!!J.w(a).$iX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.aO.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iy:1}
H.a5.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ics:1,
gaP:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bC.prototype={}
H.bw.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aq(u)+"'"}}
H.a3.prototype={
B:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.a3))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gm:function(a){var u,t=this.c
if(t==null)u=H.ab(this.a)
else u=typeof t!=="object"?J.co(t):H.ab(t)
return(u^H.ab(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.aE(u))+"'")}}
H.bG.prototype={
h:function(a){return this.a}}
H.bq.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.bM.prototype={
h:function(a){return"Assertion failed: "+P.b6(this.a)}}
H.Y.prototype={
gk:function(a){return this.a},
az:function(a){var u
if((a&0x3ffffff)===a){u=this.c
if(u==null)return!1
return this.al(u,a)}else return this.aF(a)},
aF:function(a){var u=this.d
if(u==null)return!1
return this.W(this.L(u,C.c.gm(a)&0x3ffffff),a)>=0},
w:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.G(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.G(r,b)
s=t==null?null:t.b
return s}else return q.aG(b)},
aG:function(a){var u,t,s=this.d
if(s==null)return
u=this.L(s,J.co(a)&0x3ffffff)
t=this.W(u,a)
if(t<0)return
return u[t].b},
C:function(a,b,c){var u,t,s,r,q,p,o=this
H.p(b,H.j(o,0))
H.p(c,H.j(o,1))
if(typeof b==="string"){u=o.b
o.a2(u==null?o.b=o.M():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.a2(t==null?o.c=o.M():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.M()
r=J.co(b)&0x3ffffff
q=o.L(s,r)
if(q==null)o.P(s,r,[o.N(b,c)])
else{p=o.W(q,b)
if(p>=0)q[p].b=c
else q.push(o.N(b,c))}}},
aD:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.j(s,0),H.j(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.aZ(s))
u=u.c}},
a2:function(a,b,c){var u,t=this
H.p(b,H.j(t,0))
H.p(c,H.j(t,1))
u=t.G(a,b)
if(u==null)t.P(a,b,t.N(b,c))
else u.b=c},
N:function(a,b){var u=this,t=new H.bf(H.p(a,H.j(u,0)),H.p(b,H.j(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
W:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.dC(a[t].a,b))return t
return-1},
h:function(a){return P.cU(this)},
G:function(a,b){return a[b]},
L:function(a,b){return a[b]},
P:function(a,b,c){a[b]=c},
am:function(a,b){delete a[b]},
al:function(a,b){return this.G(a,b)!=null},
M:function(){var u="<non-identifier-key>",t=Object.create(null)
this.P(t,u,t)
this.am(t,u)
return t}}
H.bf.prototype={}
H.bg.prototype={
gk:function(a){return this.a.a},
gD:function(a){var u=this.a,t=new H.bh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.bh.prototype={
gq:function(){return this.d},
n:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.aZ(t))
else{t=u.c
if(t==null){u.sa1(null)
return!1}else{u.sa1(t.a)
u.c=u.c.c
return!0}}},
sa1:function(a){this.d=H.p(a,H.j(this,0))}}
H.cg.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.ch.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.ci.prototype={
$1:function(a){return this.a(H.I(a))},
$S:7}
H.bd.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$icW:1}
H.aC.prototype={}
H.aA.prototype={
gk:function(a){return a.length},
$icv:1,
$acv:function(){}}
H.aB.prototype={
$aau:function(){return[P.k]},
$aK:function(){return[P.k]},
$iD:1,
$aD:function(){return[P.k]},
$it:1,
$at:function(){return[P.k]}}
H.bm.prototype={
gk:function(a){return a.length},
w:function(a,b){H.e0(b,a,a.length)
return a[b]},
$ieN:1}
H.ai.prototype={}
H.aj.prototype={}
P.bO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.bN.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:8}
P.bP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bQ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.c6.prototype={
aj:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aP(new P.c7(this,b),0),a)
else throw H.e(P.aK("`setTimeout()` not found."))}}
P.c7.prototype={
$0:function(){this.b.$0()},
$S:1}
P.H.prototype={
aI:function(a){if((this.c&15)!==6)return!0
return this.b.b.Y(H.f(this.d,{func:1,ret:P.O,args:[P.i]}),a.a,P.O,P.i)},
aE:function(a){var u=this.e,t=P.i,s={futureOr:1,type:H.j(this,1)},r=this.b.b
if(H.aQ(u,{func:1,args:[P.i,P.y]}))return H.cH(r.aK(u,a.a,a.b,null,t,P.y),s)
else return H.cH(r.Y(H.f(u,{func:1,args:[P.i]}),a.a,null,t),s)}}
P.B.prototype={
ab:function(a,b,c){var u,t,s,r=H.j(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.m
if(u!==C.b){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.e5(b,u)}t=new P.B($.m,[c])
s=b==null?1:3
this.a3(new P.H(t,s,a,b,[r,c]))
return t},
aN:function(a,b){return this.ab(a,null,b)},
a3:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.n(t.c,"$iH")
t.c=a}else{if(s===2){u=H.n(t.c,"$iB")
s=u.a
if(s<4){u.a3(a)
return}t.a=s
t.c=u.c}P.cc(null,null,t.b,H.f(new P.bU(t,a),{func:1,ret:-1}))}},
a7:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.n(p.c,"$iH")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.n(p.c,"$iB")
u=q.a
if(u<4){q.a7(a)
return}p.a=u
p.c=q.c}o.a=p.H(a)
P.cc(null,null,p.b,H.f(new P.bY(o,p),{func:1,ret:-1}))}},
O:function(){var u=H.n(this.c,"$iH")
this.c=null
return this.H(u)},
H:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a4:function(a){var u,t,s=this,r=H.j(s,0)
H.cH(a,{futureOr:1,type:r})
u=s.$ti
if(H.cE(a,"$ia9",u,"$aa9"))if(H.cE(a,"$iB",u,null))P.d3(a,s)
else P.dZ(a,s)
else{t=s.O()
H.p(a,r)
s.a=4
s.c=a
P.ah(s,t)}},
a5:function(a,b){var u,t=this
H.n(b,"$iy")
u=t.O()
t.a=8
t.c=new P.v(a,b)
P.ah(t,u)},
$ia9:1}
P.bU.prototype={
$0:function(){P.ah(this.a,this.b)},
$S:0}
P.bY.prototype={
$0:function(){P.ah(this.b,this.a.a)},
$S:0}
P.bV.prototype={
$1:function(a){var u=this.a
u.a=0
u.a4(a)},
$S:4}
P.bW.prototype={
$2:function(a,b){H.n(b,"$iy")
this.a.a5(a,b)},
$1:function(a){return this.$2(a,null)},
$S:9}
P.bX.prototype={
$0:function(){this.a.a5(this.b,this.c)},
$S:0}
P.c0.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aa(H.f(s.d,{func:1}),null)}catch(r){u=H.ar(r)
t=H.an(r)
if(o.d){s=H.n(o.a.a.c,"$iv").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.n(o.a.a.c,"$iv")
else q.b=new P.v(u,t)
q.a=!0
return}if(!!J.w(n).$ia9){if(n instanceof P.B&&n.a>=4){if(n.a===8){s=o.b
s.b=H.n(n.c,"$iv")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.aN(new P.c1(p),null)
s.a=!1}},
$S:1}
P.c1.prototype={
$1:function(a){return this.a},
$S:10}
P.c_.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.j(s,0)
q=H.p(n.c,r)
p=H.j(s,1)
n.a.b=s.b.b.Y(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ar(o)
t=H.an(o)
s=n.a
s.b=new P.v(u,t)
s.a=!0}},
$S:1}
P.bZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.n(m.a.a.c,"$iv")
r=m.c
if(H.ef(r.aI(u))&&r.e!=null){q=m.b
q.b=r.aE(u)
q.a=!1}}catch(p){t=H.ar(p)
s=H.an(p)
r=H.n(m.a.a.c,"$iv")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.v(t,s)
n.a=!0}},
$S:1}
P.aL.prototype={}
P.bx.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.B($.m,[P.k])
r.a=0
u=H.j(s,0)
t=H.f(new P.bA(r,s),{func:1,ret:-1,args:[u]})
H.f(new P.bB(r,q),{func:1,ret:-1})
W.d2(s.a,s.b,t,!1,u)
return q}}
P.bA.prototype={
$1:function(a){H.p(a,H.j(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.q,args:[H.j(this.b,0)]}}}
P.bB.prototype={
$0:function(){this.b.a4(this.a.a)},
$S:0}
P.by.prototype={}
P.bz.prototype={}
P.v.prototype={
h:function(a){return H.d(this.a)},
$iX:1}
P.c9.prototype={$ieO:1}
P.cb.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.aD():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u},
$S:0}
P.c2.prototype={
aL:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.b===$.m){a.$0()
return}P.d6(r,r,this,a,-1)}catch(s){u=H.ar(s)
t=H.an(s)
P.ca(r,r,this,u,H.n(t,"$iy"))}},
aM:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.b===$.m){a.$1(b)
return}P.d7(r,r,this,a,b,-1,c)}catch(s){u=H.ar(s)
t=H.an(s)
P.ca(r,r,this,u,H.n(t,"$iy"))}},
aw:function(a,b){return new P.c4(this,H.f(a,{func:1,ret:b}),b)},
T:function(a){return new P.c3(this,H.f(a,{func:1,ret:-1}))},
ax:function(a,b){return new P.c5(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
aa:function(a,b){H.f(a,{func:1,ret:b})
if($.m===C.b)return a.$0()
return P.d6(null,null,this,a,b)},
Y:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.p(b,d)
if($.m===C.b)return a.$1(b)
return P.d7(null,null,this,a,b,c,d)},
aK:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.p(b,e)
H.p(c,f)
if($.m===C.b)return a.$2(b,c)
return P.e6(null,null,this,a,b,c,d,e,f)}}
P.c4.prototype={
$0:function(){return this.a.aa(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.c3.prototype={
$0:function(){return this.a.aL(this.b)},
$S:1}
P.c5.prototype={
$1:function(a){var u=this.c
return this.a.aM(this.b,H.p(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.bi.prototype={$iD:1,$it:1}
P.K.prototype={
gD:function(a){return new H.ay(a,this.gk(a),[H.el(this,a,"K",0)])},
aB:function(a,b){return this.w(a,b)},
h:function(a){return P.cS(a,"[","]")}}
P.bj.prototype={}
P.bk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:11}
P.bl.prototype={
gk:function(a){return this.a},
h:function(a){return P.cU(this)},
$iS:1}
P.aN.prototype={}
P.a6.prototype={}
P.as.prototype={}
P.b5.prototype={
$aa6:function(){return[P.l,[P.t,P.k]]}}
P.bK.prototype={}
P.bL.prototype={
aA:function(a){var u,t,s=P.cZ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.c8(u)
if(t.an(a,0,s)!==s)t.a8(C.d.U(a,s-1),0)
return new Uint8Array(u.subarray(0,H.e1(0,t.b,u.length)))},
$aas:function(){return[P.l,[P.t,P.k]]}}
P.c8.prototype={
a8:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.o(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.o(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.o(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.o(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.o(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.o(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.o(s,r)
s[r]=128|a&63
return!1}},
an:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.a8(r,C.d.F(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.o(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.o(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.o(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.o(u,q)
u[q]=128|r&63}}return s}}
P.O.prototype={}
P.ce.prototype={}
P.a8.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a},
gm:function(a){return C.c.gm(this.a)},
h:function(a){var u,t,s,r=new P.b3(),q=this.a
if(q<0)return"-"+new P.a8(0-q).h(0)
u=r.$1(C.c.I(q,6e7)%60)
t=r.$1(C.c.I(q,1e6)%60)
s=new P.b2().$1(q%1e6)
return""+C.c.I(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.b2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:5}
P.b3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:5}
P.X.prototype={}
P.aW.prototype={
h:function(a){return"Assertion failed"}}
P.aD.prototype={
h:function(a){return"Throw of null."}}
P.J.prototype={
gK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gK()+o+u
if(!q.a)return t
s=q.gJ()
r=P.b6(q.b)
return t+s+": "+r}}
P.Z.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.b9.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t=H.W(this.b)
if(typeof t!=="number")return t.aQ()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gk:function(a){return this.f}}
P.bJ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bH.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aY.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.b6(u)+"."}}
P.aF.prototype={
h:function(a){return"Stack Overflow"},
$iX:1}
P.b0.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bT.prototype={
h:function(a){return"Exception: "+this.a}}
P.b8.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.Z(s,0,75)+"...":s
return t+"\n"+r}}
P.k.prototype={}
P.D.prototype={
gk:function(a){var u,t=this.gD(this)
for(u=0;t.n();)++u
return u},
h:function(a){return P.dL(this,"(",")")}}
P.t.prototype={$iD:1}
P.q.prototype={
gm:function(a){return P.i.prototype.gm.call(this,this)},
h:function(a){return"null"}}
P.ao.prototype={}
P.i.prototype={constructor:P.i,$ii:1,
B:function(a,b){return this===b},
gm:function(a){return H.ab(this)},
h:function(a){return"Instance of '"+H.d(H.aE(this))+"'"},
toString:function(){return this.h(this)}}
P.y.prototype={}
P.l.prototype={$icW:1}
P.ae.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aT.prototype={
h:function(a){return String(a)}}
W.aU.prototype={
h:function(a){return String(a)}}
W.P.prototype={
gk:function(a){return a.length}}
W.a7.prototype={
gk:function(a){return a.length}}
W.b_.prototype={}
W.at.prototype={$iat:1}
W.b1.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.Q.prototype={
ak:function(a,b,c,d){return a.addEventListener(b,H.aP(H.f(c,{func:1,args:[W.a]}),1),!1)},
$iQ:1}
W.b7.prototype={
gk:function(a){return a.length}}
W.A.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.ae(a):u}}
W.br.prototype={
gk:function(a){return a.length}}
W.cz.prototype={}
W.bR.prototype={}
W.bS.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ia"))},
$S:12}
W.aM.prototype={}
V.aS.prototype={
A:function(a){return!0},
h:function(a){return"all"},
$iL:1}
V.L.prototype={}
V.az.prototype={
A:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.ap)(u),++s)if(u[s].A(a))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.ap)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s},
su:function(a){this.a=H.U(a,"$it",[V.L],"$at")},
$iL:1}
V.M.prototype={
A:function(a){return!this.ag(a)},
h:function(a){return"!["+this.a_(0)+"]"}}
V.bs.prototype={
ah:function(a){var u,t
if(a.a.length<=0)throw H.e(P.cr("May not create a SetMatcher with zero characters."))
u=new H.Y([P.k,P.O])
for(t=new H.ay(a,a.gk(a),[H.df(a,"K",0)]);t.n();)u.C(0,t.d,!0)
this.sap(u)},
A:function(a){return this.a.az(a)},
h:function(a){var u=this.a
return P.cx(new H.bg(u,[H.j(u,0)]))},
sap:function(a){this.a=H.U(a,"$iS",[P.k,P.O],"$aS")},
$iL:1}
V.ad.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.ag(this.a.j(0,b))
r.su(H.h([],[V.L]))
r.c=!1
C.a.i(this.c,r)
return r},
aC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.ap)(u),++s){r=u[s]
if(r.A(a))return r}return},
h:function(a){return this.b},
sav:function(a){this.c=H.U(a,"$it",[V.ag],"$at")}}
V.aG.prototype={
h:function(a){var u=H.dn(this.b,"\n","\\n"),t=H.dn(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.af.prototype={
h:function(a){return this.b},
sao:function(a){var u=P.l
this.c=H.U(a,"$iS",[u,u],"$aS")}}
V.bD.prototype={
j:function(a,b){var u=this.a.w(0,b)
if(u==null){u=new V.ad(this,b)
u.sav(H.h([],[V.ag]))
u.d=null
this.a.C(0,b,u)}return u},
E:function(a){var u,t=this.b.w(0,a)
if(t==null){t=new V.af(a)
u=P.l
t.sao(new H.Y([u,u]))
this.b.C(0,a,t)}return t},
aO:function(a){var u,t,s,r,q,p,o,n,m=H.h([],[V.aG]),l=this.c,k=[P.k],j=H.h([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.i(m,t)
return m}r=C.d.F(a,s)
q=l.aC(r)
if(q==null){if(t==null){C.a.i(j,r)
p=P.cx(j)
throw H.e(P.cr("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.i(m,t)
s=t.c+1
j=H.h([],k)
l=this.c
t=null}else{if(!q.c)C.a.i(j,r)
l=q.b
if(l.d!=null){p=P.cx(j)
o=l.d
n=o.c.w(0,p)
t=new V.aG(n==null?o.b:n,p,s)}++s}}},
sas:function(a){this.a=H.U(a,"$iS",[P.l,V.ad],"$aS")},
sau:function(a){this.b=H.U(a,"$iS",[P.l,V.af],"$aS")}}
V.ag.prototype={
h:function(a){return this.b.b+": "+this.a_(0)}}
V.bt.prototype={
ai:function(a,b){var u,t,s,r=document,q=r.body,p=r.createElement("div")
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
s=W.a
W.d2(r,"scroll",H.f(new V.bv(p),{func:1,ret:-1,args:[s]}),!1,s)},
a9:function(a,b,c){var u,t,s,r
a=H.W(C.c.ay(a,0,4))
if(c.length===0)c=P.d4(C.k,b,C.e,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.cN()
r.href="#"+c
r.textContent=b
u.appendChild(r)
this.a.appendChild(u)},
S:function(a,b){return this.a9(a,b,"")},
p:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.U(a,"$it",[P.l],"$at")
this.aq()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.aO(C.a.aH(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.ap)(s),++q){p=s[q]
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
if(H.ex(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.o(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.d4(C.k,n,C.e,!1)
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
aq:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.bD()
t=P.l
u.sas(new H.Y([t,V.ad]))
u.sau(new H.Y([t,V.af]))
u.c=null
u.c=u.j(0,q)
t=u.j(0,q).l(0,p)
s=V.u(new H.r("*"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new V.M()
r=[V.L]
s.su(H.h([],r))
C.a.i(t.a,s)
t=V.u(new H.r("*"))
C.a.i(s.a,t)
t=u.j(0,p).l(0,"BoldEnd")
s=V.u(new H.r("*"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,q).l(0,o)
s=V.u(new H.r("_"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new V.M()
s.su(H.h([],r))
C.a.i(t.a,s)
t=V.u(new H.r("_"))
C.a.i(s.a,t)
t=u.j(0,o).l(0,n)
s=V.u(new H.r("_"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,q).l(0,m)
s=V.u(new H.r("`"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new V.M()
s.su(H.h([],r))
C.a.i(t.a,s)
t=V.u(new H.r("`"))
C.a.i(s.a,t)
t=u.j(0,m).l(0,"CodeEnd")
s=V.u(new H.r("`"))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,q).l(0,l)
s=V.u(new H.r("["))
C.a.i(t.a,s)
t.c=!0
t=u.j(0,l).l(0,k)
s=V.u(new H.r("|"))
C.a.i(t.a,s)
s=u.j(0,l).l(0,j)
t=V.u(new H.r("]"))
C.a.i(s.a,t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new V.M()
t.su(H.h([],r))
C.a.i(s.a,t)
s=V.u(new H.r("|]"))
C.a.i(t.a,s)
s=u.j(0,k).l(0,j)
t=V.u(new H.r("]"))
C.a.i(s.a,t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new V.M()
t.su(H.h([],r))
C.a.i(s.a,t)
s=V.u(new H.r("|]"))
C.a.i(t.a,s)
C.a.i(u.j(0,q).l(0,i).a,new V.aS())
s=u.j(0,i).l(0,i)
t=new V.M()
t.su(H.h([],r))
C.a.i(s.a,t)
s=V.u(new H.r("*_`["))
C.a.i(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.E(p)
s=u.j(0,n)
s.d=s.a.E(o)
s=u.j(0,"CodeEnd")
s.d=s.a.E(m)
s=u.j(0,j)
s.d=s.a.E("Link")
s=u.j(0,i)
s.d=s.a.E(i)
this.b=u}}
V.bv.prototype={
$1:function(a){P.dU(C.j,new V.bu(this.a))},
$S:13}
V.bu.prototype={
$0:function(){var u=C.v.aJ(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s},
$S:0};(function aliases(){var u=J.x.prototype
u.ae=u.h
u=J.ax.prototype
u.af=u.h
u=V.az.prototype
u.ag=u.A
u.a_=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"ec","dW",2)
u(P,"ed","dX",2)
u(P,"ee","dY",2)
t(P,"db","e8",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.i,null)
s(P.i,[H.cu,J.x,J.aV,P.aN,P.D,H.ay,H.au,H.aJ,H.bE,P.X,H.a5,H.aO,P.bl,H.bf,H.bh,H.bd,P.c6,P.H,P.B,P.aL,P.bx,P.by,P.bz,P.v,P.c9,P.K,P.a6,P.c8,P.O,P.ao,P.a8,P.aF,P.bT,P.b8,P.t,P.q,P.y,P.l,P.ae,W.b_,V.aS,V.L,V.az,V.bs,V.ad,V.aG,V.af,V.bD,V.bt])
s(J.x,[J.ba,J.bc,J.ax,J.F,J.aw,J.aa,H.aC,W.Q,W.aM,W.b1,W.a])
s(J.ax,[J.bo,J.aH,J.R])
t(J.ct,J.F)
s(J.aw,[J.av,J.bb])
t(P.bi,P.aN)
t(H.aI,P.bi)
t(H.r,H.aI)
t(H.b4,P.D)
s(P.X,[H.bn,H.be,H.bI,H.bG,H.bq,P.aW,P.aD,P.J,P.bJ,P.bH,P.aY,P.b0])
s(H.a5,[H.cn,H.bC,H.cg,H.ch,H.ci,P.bO,P.bN,P.bP,P.bQ,P.c7,P.bU,P.bY,P.bV,P.bW,P.bX,P.c0,P.c1,P.c_,P.bZ,P.bA,P.bB,P.cb,P.c4,P.c3,P.c5,P.bk,P.b2,P.b3,W.bS,V.bv,V.bu])
s(H.bC,[H.bw,H.a3])
t(H.bM,P.aW)
t(P.bj,P.bl)
t(H.Y,P.bj)
t(H.bg,H.b4)
t(H.aA,H.aC)
t(H.ai,H.aA)
t(H.aj,H.ai)
t(H.aB,H.aj)
t(H.bm,H.aB)
t(P.c2,P.c9)
t(P.as,P.bz)
t(P.b5,P.a6)
t(P.bK,P.b5)
t(P.bL,P.as)
s(P.ao,[P.ce,P.k])
s(P.J,[P.Z,P.b9])
t(W.A,W.Q)
s(W.A,[W.b,W.P])
t(W.c,W.b)
s(W.c,[W.aT,W.aU,W.at,W.b7,W.br])
t(W.a7,W.aM)
t(W.cz,P.bx)
t(W.bR,P.by)
s(V.az,[V.M,V.ag])
u(H.aI,H.aJ)
u(H.ai,P.K)
u(H.aj,H.au)
u(P.aN,P.K)
u(W.aM,W.b_)})()
var v={mangledGlobalNames:{k:"int",ce:"double",ao:"num",l:"String",O:"bool",q:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.q},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.q,args:[,]},{func:1,ret:P.l,args:[P.k]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.q,args:[{func:1,ret:-1}]},{func:1,ret:P.q,args:[,],opt:[P.y]},{func:1,ret:[P.B,,],args:[,]},{func:1,ret:P.q,args:[,,]},{func:1,args:[W.a]},{func:1,ret:P.q,args:[W.a]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.u=J.x.prototype
C.a=J.F.prototype
C.c=J.av.prototype
C.v=J.aw.prototype
C.d=J.aa.prototype
C.w=J.R.prototype
C.l=J.bo.prototype
C.f=J.aH.prototype
C.h=function getTagFallback(o) {
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
C.i=function(hooks) { return hooks; }

C.e=new P.bK()
C.t=new P.bL()
C.b=new P.c2()
C.j=new P.a8(0)
C.k=H.h(u([0,0,65498,45055,65535,34815,65534,18431]),[P.k])})();(function staticFields(){$.E=0
$.a4=null
$.cP=null
$.cA=!1
$.dg=null
$.d9=null
$.dl=null
$.cd=null
$.cj=null
$.cI=null
$.a_=null
$.ak=null
$.al=null
$.cB=!1
$.m=C.b
$.z=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"eB","dq",function(){return H.de("_$dart_dartClosure")})
u($,"eC","cK",function(){return H.de("_$dart_js")})
u($,"eD","dr",function(){return H.G(H.bF({
toString:function(){return"$receiver$"}}))})
u($,"eE","ds",function(){return H.G(H.bF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"eF","dt",function(){return H.G(H.bF(null))})
u($,"eG","du",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eJ","dx",function(){return H.G(H.bF(void 0))})
u($,"eK","dy",function(){return H.G(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eI","dw",function(){return H.G(H.d0(null))})
u($,"eH","dv",function(){return H.G(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"eM","dA",function(){return H.G(H.d0(void 0))})
u($,"eL","dz",function(){return H.G(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"eP","cL",function(){return P.dV()})
u($,"eQ","dB",function(){return P.dR("^[\\-\\.0-9A-Z_a-z~]*$")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.x,MediaError:J.x,Navigator:J.x,NavigatorConcurrentHardware:J.x,NavigatorUserMediaError:J.x,OverconstrainedError:J.x,PositionError:J.x,SQLError:J.x,ArrayBufferView:H.aC,Uint8Array:H.bm,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aT,HTMLAreaElement:W.aU,CDATASection:W.P,CharacterData:W.P,Comment:W.P,ProcessingInstruction:W.P,Text:W.P,CSSStyleDeclaration:W.a7,MSStyleCSSProperties:W.a7,CSS2Properties:W.a7,HTMLDivElement:W.at,DOMException:W.b1,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.Q,DOMWindow:W.Q,EventTarget:W.Q,HTMLFormElement:W.b7,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,HTMLSelectElement:W.br})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.aA.$nativeSuperclassTag="ArrayBufferView"
H.ai.$nativeSuperclassTag="ArrayBufferView"
H.aj.$nativeSuperclassTag="ArrayBufferView"
H.aB.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.di,[])
else F.di([])})})()
//# sourceMappingURL=main.dart.js.map
