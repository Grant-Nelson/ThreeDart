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
a[c]=function(){a[c]=function(){H.l_(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.il"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.il"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.il(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={i7:function i7(){},
i4:function(){return new P.bp("No element")},
jX:function(){return new P.bp("Too many elements")},
l:function l(a){this.a=a},
e0:function e0(){},
c8:function c8(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
eC:function eC(a,b,c){this.a=a
this.b=b
this.$ti=c},
eD:function eD(a,b){this.a=null
this.b=a
this.c=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b){this.a=a
this.b=b},
c_:function c_(){},
fY:function fY(){},
cw:function cw(){},
dw:function(a){var u,t=H.l0(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
kK:function(a){return v.types[a]},
kR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.G(a).$ip},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.M(a)
if(typeof u!=="string")throw H.e(H.aY(a))
return u},
bm:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bn:function(a){return H.k1(a)+H.j9(H.bK(a),0,null)},
k1:function(a){var u,t,s,r,q,p,o,n=J.G(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ibt){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dw(t.length>1&&C.b.a8(t,0)===36?C.b.aB(t,1):t)},
iQ:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
k9:function(a){var u,t,s,r=H.b([],[P.B])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aq(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.aY(s))}return H.iQ(r)},
iR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<0)throw H.e(H.aY(s))
if(s>65535)return H.k9(a)}return H.iQ(a)},
i9:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aq(u,10))>>>0,56320|u&1023)}throw H.e(P.a_(a,0,1114111,null,null))},
aR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
k8:function(a){var u=H.aR(a).getFullYear()+0
return u},
k6:function(a){var u=H.aR(a).getMonth()+1
return u},
k2:function(a){var u=H.aR(a).getDate()+0
return u},
k3:function(a){var u=H.aR(a).getHours()+0
return u},
k5:function(a){var u=H.aR(a).getMinutes()+0
return u},
k7:function(a){var u=H.aR(a).getSeconds()+0
return u},
k4:function(a){var u=H.aR(a).getMilliseconds()+0
return u},
aB:function(a){throw H.e(H.aY(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.e(H.du(a,b))},
du:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.U(!0,b,s,null)
u=J.aD(a)
if(!(b<0)){if(typeof u!=="number")return H.aB(u)
t=b>=u}else t=!0
if(t)return P.v(b,a,s,null,u)
return P.f3(b,s)},
kE:function(a,b,c){var u="Invalid value"
if(a>c)return new P.aS(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.aS(a,c,!0,b,"end",u)
return new P.U(!0,b,"end",null)},
aY:function(a){return new P.U(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.cf()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jn})
u.name=""}else u.toString=H.jn
return u},
jn:function(){return J.M(this.dartException)},
N:function(a){throw H.e(a)},
q:function(a){throw H.e(P.ae(a))},
a1:function(a){var u,t,s,r,q,p
a=H.jm(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
j_:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iM:function(a,b){return new H.eV(a,b==null?null:b.method)},
i8:function(a,b){var u=b==null,t=u?null:b.method
return new H.es(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.hW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aq(t,16)&8191)===10)switch(s){case 438:return f.$1(H.i8(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.iM(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jq()
q=$.jr()
p=$.js()
o=$.jt()
n=$.jw()
m=$.jx()
l=$.jv()
$.ju()
k=$.jz()
j=$.jy()
i=r.R(u)
if(i!=null)return f.$1(H.i8(u,i))
else{i=q.R(u)
if(i!=null){i.method="call"
return f.$1(H.i8(u,i))}else{i=p.R(u)
if(i==null){i=o.R(u)
if(i==null){i=n.R(u)
if(i==null){i=m.R(u)
if(i==null){i=l.R(u)
if(i==null){i=o.R(u)
if(i==null){i=k.R(u)
if(i==null){i=j.R(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.iM(u,i))}}return f.$1(new H.fX(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.U(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cm()
return a},
ip:function(a){var u
if(a==null)return new H.d8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.d8(a)},
kI:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.U(0,a[u],a[t])}return b},
kQ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.E("Unsupported number of arguments for wrapped closure"))},
bJ:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kQ)
a.$identity=u
return u},
jQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fo().constructor.prototype):Object.create(new H.b5(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.V
if(typeof t!=="number")return t.F()
$.V=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iB(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.jM(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iB(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
jM:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kK,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iz:H.hZ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
jN:function(a,b,c,d){var u=H.hZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iB:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jN(t,!r,u,b)
if(t===0){r=$.V
if(typeof r!=="number")return r.F()
$.V=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.b6
return new Function(r+H.d(q==null?$.b6=H.dG("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.V
if(typeof r!=="number")return r.F()
$.V=r+1
o+=r
r="return function("+o+"){return this."
q=$.b6
return new Function(r+H.d(q==null?$.b6=H.dG("self"):q)+"."+H.d(u)+"("+o+");}")()},
jO:function(a,b,c,d){var u=H.hZ,t=H.iz
switch(b?-1:a){case 0:throw H.e(H.kd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jP:function(a,b){var u,t,s,r,q,p,o,n=$.b6
if(n==null)n=$.b6=H.dG("self")
u=$.iy
if(u==null)u=$.iy=H.dG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.jO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.V
if(typeof u!=="number")return u.F()
$.V=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.V
if(typeof u!=="number")return u.F()
$.V=u+1
return new Function(n+u+"}")()},
il:function(a,b,c,d,e,f,g){return H.jQ(a,b,c,d,!!e,!!f,g)},
hZ:function(a){return a.a},
iz:function(a){return a.c},
dG:function(a){var u,t,s,r=new H.b5("self","target","receiver","name"),q=J.i5(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
kV:function(a,b){throw H.e(H.jL(a,H.dw(b.substring(2))))},
dv:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else u=!0
if(u)return a
H.kV(a,b)},
kG:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
jL:function(a,b){return new H.dH("CastError: "+P.i2(a)+": type '"+H.d(H.ky(a))+"' is not a subtype of type '"+b+"'")},
ky:function(a){var u,t=J.G(a)
if(!!t.$ib7){u=H.kG(t)
if(u!=null)return H.kW(u)
return"Closure"}return H.bn(a)},
l_:function(a){throw H.e(new P.dR(a))},
kd:function(a){return new H.fa(a)},
jf:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bK:function(a){if(a==null)return
return a.$ti},
lw:function(a,b,c){return H.hV(a["$a"+H.d(c)],H.bK(b))},
kJ:function(a,b,c,d){var u=H.hV(a["$a"+H.d(c)],H.bK(b))
return u==null?null:u[d]},
jg:function(a,b,c){var u=H.hV(a["$a"+H.d(b)],H.bK(a))
return u==null?null:u[c]},
aZ:function(a,b){var u=H.bK(a)
return u==null?null:u[b]},
kW:function(a){return H.az(a,null)},
az:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dw(a[0].name)+H.j9(a,1,b)
if(typeof a=="function")return H.dw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.kq(a,b)
if('futureOr' in a)return"FutureOr<"+H.az("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kq:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.F(p,a0[m])
l=u[q]
if(l!=null&&l!==P.K)p+=" extends "+H.az(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.az(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.az(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.az(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.kH(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.az(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
j9:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aT("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.az(p,c)}return"<"+u.h(0)+">"},
hV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lu:function(a,b,c){return a.apply(b,H.hV(J.G(b)["$a"+H.d(c)],H.bK(b)))},
lv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kS:function(a){var u,t,s,r,q=$.jh.$1(a),p=$.hM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jc.$2(a,q)
if(q!=null){p=$.hM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.hU(u)
$.hM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hT[q]=u
return u}if(s==="-"){r=H.hU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jj(a,u)
if(s==="*")throw H.e(P.j0(q))
if(v.leafTags[q]===true){r=H.hU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jj(a,u)},
jj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ir(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hU:function(a){return J.ir(a,!1,null,!!a.$ip)},
kT:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hU(u)
else return J.ir(u,c,null,null)},
kO:function(){if(!0===$.iq)return
$.iq=!0
H.kP()},
kP:function(){var u,t,s,r,q,p,o,n
$.hM=Object.create(null)
$.hT=Object.create(null)
H.kN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jl.$1(q)
if(p!=null){o=H.kT(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kN:function(){var u,t,s,r,q,p,o=C.u()
o=H.aX(C.v,H.aX(C.w,H.aX(C.o,H.aX(C.o,H.aX(C.x,H.aX(C.y,H.aX(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jh=new H.hQ(r)
$.jc=new H.hR(q)
$.jl=new H.hS(p)},
aX:function(a,b){return a(b)||b},
jZ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(new P.ec("Illegal RegExp pattern ("+String(p)+")",a))},
kX:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kF:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
is:function(a,b,c){var u=H.kY(a,b,c)
return u},
kY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jm(b),'g'),H.kF(c))},
fH:function fH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eV:function eV(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
hW:function hW(a){this.a=a},
d8:function d8(a){this.a=a
this.b=null},
b7:function b7(){},
fw:function fw(){},
fo:function fo(){},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a){this.a=a},
fa:function fa(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ev:function ev(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function c6(a,b){this.a=a
this.$ti=b},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
er:function er(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ii:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.du(b,a))},
kp:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.kE(a,b,c))
return b},
bk:function bk(){},
ca:function ca(){},
bj:function bj(){},
cb:function cb(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
cc:function cc(){},
eS:function eS(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
kH:function(a){return J.iF(a?Object.keys(a):[],null)},
l0:function(a){return v.mangledGlobalNames[a]},
kU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ir:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iq==null){H.kO()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.j0("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iu()]
if(r!=null)return r
r=H.kS(a)
if(r!=null)return r
if(typeof a=="function")return C.G
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.iu(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
jY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ix(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a_(a,0,4294967295,"length",null))
return J.iF(new Array(a),b)},
iF:function(a,b){return J.i5(H.b(a,[b]))},
i5:function(a){a.fixed$length=Array
return a},
G:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c2.prototype
return J.ep.prototype}if(typeof a=="string")return J.aL.prototype
if(a==null)return J.eq.prototype
if(typeof a=="boolean")return J.eo.prototype
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.K)return a
return J.hP(a)},
im:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.K)return a
return J.hP(a)},
hO:function(a){if(a==null)return a
if(a.constructor==Array)return J.aj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.K)return a
return J.hP(a)},
je:function(a){if(typeof a=="string")return J.aL.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bt.prototype
return a},
io:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
return a}if(a instanceof P.K)return a
return J.hP(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).n(a,b)},
jF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.im(a).l(a,b)},
jG:function(a,b,c,d){return J.io(a).da(a,b,c,d)},
hX:function(a,b){return J.hO(a).t(a,b)},
jH:function(a,b){return J.hO(a).D(a,b)},
jI:function(a){return J.io(a).gdf(a)},
bN:function(a){return J.G(a).gC(a)},
aC:function(a){return J.hO(a).gE(a)},
aD:function(a){return J.im(a).gk(a)},
iw:function(a){return J.hO(a).dU(a)},
jJ:function(a,b,c){return J.je(a).an(a,b,c)},
jK:function(a){return J.je(a).e1(a)},
M:function(a){return J.G(a).h(a)},
a:function a(){},
eo:function eo(){},
eq:function eq(){},
c4:function c4(){},
eZ:function eZ(){},
bt:function bt(){},
ak:function ak(){},
aj:function aj(a){this.$ti=a},
i6:function i6(a){this.$ti=a},
O:function O(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(){},
c2:function c2(){},
ep:function ep(){},
aL:function aL(){}},P={
kh:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.kz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bJ(new P.hd(s),1)).observe(u,{childList:true})
return new P.hc(s,u,t)}else if(self.setImmediate!=null)return P.kA()
return P.kB()},
ki:function(a){self.scheduleImmediate(H.bJ(new P.he(a),0))},
kj:function(a){self.setImmediate(H.bJ(new P.hf(a),0))},
kk:function(a){P.ib(C.h,a)},
ib:function(a,b){var u=C.d.ar(a.a,1000)
return P.ko(u<0?0:u,b)},
ko:function(a,b){var u=new P.hD()
u.c9(a,b)
return u},
ks:function(){var u,t
for(;u=$.aW,u!=null;){$.bI=null
t=u.b
$.aW=t
if(t==null)$.bH=null
u.a.$0()}},
kx:function(){$.ij=!0
try{P.ks()}finally{$.bI=null
$.ij=!1
if($.aW!=null)$.iv().$1(P.jd())}},
kv:function(a){var u=new P.cA(a)
if($.aW==null){$.aW=$.bH=u
if(!$.ij)$.iv().$1(P.jd())}else $.bH=$.bH.b=u},
kw:function(a){var u,t,s=$.aW
if(s==null){P.kv(a)
$.bI=$.bH
return}u=new P.cA(a)
t=$.bI
if(t==null){u.b=s
$.aW=$.bI=u}else{u.b=t.b
$.bI=t.b=u
if(u.b==null)$.bH=u}},
iZ:function(a,b){var u=$.a2
if(u===C.e)return P.ib(a,b)
return P.ib(a,u.dg(b))},
ja:function(a,b,c,d,e){var u={}
u.a=d
P.kw(new P.hK(u,e))},
kt:function(a,b,c,d){var u,t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
ku:function(a,b,c,d,e){var u,t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
hd:function hd(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
cA:function cA(a){this.a=a
this.b=null},
co:function co(){},
fr:function fr(){},
hH:function hH(){},
hK:function hK(a,b){this.a=a
this.b=b},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function(a,b){return new H.X([a,b])},
k_:function(a){return H.kI(a,new H.X([null,null]))},
c7:function(a){return new P.ho([a])},
ig:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kn:function(a,b){var u=new P.cQ(a,b)
u.c=a.e
return u},
jW:function(a,b,c){var u,t
if(P.ik(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.L.push(a)
try{P.kr(a,u)}finally{if(0>=$.L.length)return H.f($.L,-1)
$.L.pop()}t=P.iX(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
i3:function(a,b,c){var u,t
if(P.ik(a))return b+"..."+c
u=new P.aT(b)
$.L.push(a)
try{t=u
t.a=P.iX(t.a,a,", ")}finally{if(0>=$.L.length)return H.f($.L,-1)
$.L.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ik:function(a){var u,t
for(u=$.L.length,t=0;t<u;++t)if(a===$.L[t])return!0
return!1},
kr:function(a,b){var u,t,s,r,q,p,o,n=a.gE(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.d(n.gw(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gw(n);++l
if(!n.p()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gw(n);++l
for(;n.p();r=q,q=p){p=n.gw(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
iH:function(a,b){var u,t,s=P.c7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.m(0,a[t])
return s},
iJ:function(a){var u,t={}
if(P.ik(a))return"{...}"
u=new P.aT("")
try{$.L.push(a)
u.a+="{"
t.a=!0
J.jH(a,new P.eB(t,u))
u.a+="}"}finally{if(0>=$.L.length)return H.f($.L,-1)
$.L.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ho:function ho(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hp:function hp(a){this.a=a
this.c=this.b=null},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ex:function ex(){},
n:function n(){},
eA:function eA(){},
eB:function eB(a,b){this.a=a
this.b=b},
a5:function a5(){},
hv:function hv(){},
cR:function cR(){},
dJ:function dJ(){},
dM:function dM(){},
e2:function e2(){},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ei:function ei(a){this.a=a},
h0:function h0(){},
h1:function h1(){},
hF:function hF(a){this.b=0
this.c=a},
jU:function(a){if(a instanceof H.b7)return a.h(0)
return"Instance of '"+H.d(H.bn(a))+"'"},
k0:function(a,b,c){var u,t,s=J.jY(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iI:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aC(a);u.p();)t.push(u.gw(u))
if(b)return t
return J.i5(t)},
ia:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.iT(0,null,u)
return H.iR(t<u?C.a.bX(a,0,t):a)}return P.kf(a,0,null)},
kf:function(a,b,c){var u,t,s=J.aC(a)
for(u=0;u<b;++u)if(!s.p())throw H.e(P.a_(b,0,u,null,null))
t=[]
for(;s.p();)t.push(s.gw(s))
return H.iR(t)},
ka:function(a){return new H.er(a,H.jZ(a,!1,!0,!1,!1,!1))},
iX:function(a,b,c){var u=J.aC(b)
if(!u.p())return a
if(c.length===0){do a+=H.d(u.gw(u))
while(u.p())}else{a+=H.d(u.gw(u))
for(;u.p();)a=a+c+H.d(u.gw(u))}return a},
ih:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.jE().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.dk(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.i9(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
jR:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bV:function(a){if(a>=10)return""+a
return"0"+a},
i2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.M(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jU(a)},
ix:function(a,b,c){return new P.U(!0,a,b,c)},
f3:function(a,b){return new P.aS(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.aS(b,c,!0,a,d,"Invalid value")},
iT:function(a,b,c){if(0>a||a>c)throw H.e(P.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.a_(b,a,c,"end",null))
return b}return c},
iS:function(a,b){if(typeof a!=="number")return a.bT()
if(a<0)throw H.e(P.a_(a,0,null,b,null))},
v:function(a,b,c,d,e){var u=e==null?J.aD(b):e
return new P.ek(u,!0,a,c,"Index out of range")},
aw:function(a){return new P.fZ(a)},
j0:function(a){return new P.fW(a)},
iW:function(a){return new P.bp(a)},
ae:function(a){return new P.dL(a)},
E:function(a){return new P.cI(a)},
jk:function(a){H.kU(a)},
aA:function aA(){},
b9:function b9(a,b){this.a=a
this.b=b},
A:function A(){},
ba:function ba(a){this.a=a},
dZ:function dZ(){},
e_:function e_(){},
aI:function aI(){},
cf:function cf(){},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ek:function ek(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fZ:function fZ(a){this.a=a},
fW:function fW(a){this.a=a},
bp:function bp(a){this.a=a},
dL:function dL(a){this.a=a},
eY:function eY(){},
cm:function cm(){},
dR:function dR(a){this.a=a},
cI:function cI(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
ee:function ee(){},
B:function B(){},
k:function k(){},
en:function en(){},
aO:function aO(){},
c9:function c9(){},
ao:function ao(){},
T:function T(){},
K:function K(){},
o:function o(){},
aT:function aT(a){this.a=a},
aa:function(a){var u,t,s,r,q
if(a==null)return
u=P.iG(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.U(0,q,a[q])}return u},
kD:function(a){var u={}
a.D(0,new P.hL(u))
return u},
hL:function hL(a){this.a=a},
e8:function e8(a,b){this.a=a
this.b=b},
e9:function e9(){},
ea:function ea(){},
hq:function hq(){},
a0:function a0(){},
aN:function aN(){},
eu:function eu(){},
aP:function aP(){},
eW:function eW(){},
f1:function f1(){},
bo:function bo(){},
fs:function fs(){},
i:function i(){},
aV:function aV(){},
fG:function fG(){},
cO:function cO(){},
cP:function cP(){},
cZ:function cZ(){},
d_:function d_(){},
da:function da(){},
db:function db(){},
dg:function dg(){},
dh:function dh(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(a){this.a=a},
dE:function dE(){},
aE:function aE(){},
eX:function eX(){},
cB:function cB(){},
fn:function fn(){},
d6:function d6(){},
d7:function d7(){}},W={
hY:function(){var u=document.createElement("a")
return u},
iA:function(){var u=document.createElement("canvas")
return u},
jT:function(a,b,c){var u=document.body,t=(u&&C.m).O(u,a,b,c)
t.toString
u=new H.bv(new W.H(t),new W.e1(),[W.w])
return u.ga3(u)},
i0:function(a){return"wheel"},
bb:function(a){var u,t,s,r="element tag unavailable"
try{u=J.io(a)
t=u.gbJ(a)
if(typeof t==="string")r=u.gbJ(a)}catch(s){H.ab(s)}return r},
hn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j7:function(a,b,c,d){var u=W.hn(W.hn(W.hn(W.hn(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
F:function(a,b,c,d){var u=W.jb(new W.hl(c),W.h)
if(u!=null&&!0)J.jG(a,b,u,!1)
return new W.hk(a,b,u,!1)},
j6:function(a){var u=W.hY(),t=window.location
u=new W.bx(new W.hu(u,t))
u.c6(a)
return u},
kl:function(a,b,c,d){return!0},
km:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
j8:function(){var u=P.o,t=P.iH(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.hB(t,P.c7(u),P.c7(u),P.c7(u),null)
t.c8(null,new H.eE(C.j,new W.hC(),[H.aZ(C.j,0),u]),s,null)
return t},
jb:function(a,b){var u=$.a2
if(u===C.e)return a
return u.dh(a,b)},
j:function j(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
bP:function bP(){},
aF:function aF(){},
aG:function aG(){},
ad:function ad(){},
dN:function dN(){},
t:function t(){},
b8:function b8(){},
dO:function dO(){},
P:function P(){},
W:function W(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
S:function S(){},
dW:function dW(){},
bW:function bW(){},
bX:function bX(){},
dX:function dX(){},
dY:function dY(){},
hh:function hh(a,b){this.a=a
this.b=b},
D:function D(){},
e1:function e1(){},
h:function h(){},
c:function c(){},
ah:function ah(){},
e6:function e6(){},
e7:function e7(){},
eb:function eb(){},
ai:function ai(){},
eh:function eh(){},
bd:function bd(){},
aM:function aM(){},
ey:function ey(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(a){this.a=a},
eI:function eI(){},
eJ:function eJ(a){this.a=a},
an:function an(){},
eK:function eK(){},
Y:function Y(){},
H:function H(a){this.a=a},
w:function w(){},
cd:function cd(){},
ap:function ap(){},
f0:function f0(){},
f8:function f8(){},
f9:function f9(a){this.a=a},
fb:function fb(){},
aq:function aq(){},
fl:function fl(){},
ar:function ar(){},
fm:function fm(){},
as:function as(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
a7:function a7(){},
cp:function cp(){},
ft:function ft(){},
fu:function fu(){},
bq:function bq(){},
at:function at(){},
a8:function a8(){},
fx:function fx(){},
fy:function fy(){},
fA:function fA(){},
au:function au(){},
aU:function aU(){},
fE:function fE(){},
fF:function fF(){},
av:function av(){},
h_:function h_(){},
h9:function h9(){},
ax:function ax(){},
bw:function bw(){},
hi:function hi(){},
cD:function cD(){},
hm:function hm(){},
cW:function cW(){},
hy:function hy(){},
hz:function hz(){},
hg:function hg(){},
hj:function hj(a){this.a=a},
hk:function hk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hl:function hl(a){this.a=a},
bx:function bx(a){this.a=a},
u:function u(){},
ce:function ce(a){this.a=a},
eU:function eU(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(){},
hw:function hw(){},
hx:function hx(){},
hB:function hB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hC:function hC(){},
hA:function hA(){},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a6:function a6(){},
hu:function hu(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
hG:function hG(a){this.a=a},
cC:function cC(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cJ:function cJ(){},
cK:function cK(){},
cM:function cM(){},
cN:function cN(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
bC:function bC(){},
bD:function bD(){},
d4:function d4(){},
d5:function d5(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
bE:function bE(){},
bF:function bF(){},
de:function de(){},
df:function df(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){}},T={
x:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.E("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.a8(a,0)
t=C.b.a8(b,0)
s=new T.f2()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
m:function(a){var u=new T.fc()
u.c3(a)
return u},
a3:function a3(){},
c1:function c1(){},
al:function al(){},
J:function J(){this.a=null},
f2:function f2(){this.b=this.a=null},
fc:function fc(){this.a=null}},R={
fC:function(){var u=new R.fB(),t=P.o
u.a=new H.X([t,R.cn])
u.b=new H.X([t,R.ct])
return u},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.b=a
this.c=null},
fB:function fB(){this.c=this.b=this.a=null},
cu:function cu(a){this.b=a
this.a=this.c=null}},O={
iC:function(a){var u=new O.dK([a])
u.a=H.b([],[a])
return u},
dK:function dK(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bh:function bh(){this.b=this.a=null},
dU:function dU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cq:function cq(){}},E={
kc:function(a,b){var u=new E.f4(a)
u.c2(a,b)
return u},
kg:function(a,b,c,d,e){var u,t,s=J.G(a)
if(!!s.$iaG)return E.iY(a,!0,!0,!0,!1)
u=W.iA()
t=u.style
t.width="100%"
t.height="100%"
s.gbq(a).m(0,u)
return E.iY(u,!0,!0,!0,!1)},
iY:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cr(),p=C.C.bS(a,"webgl2",P.k_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.N(P.E("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kc(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.cx(a)
t=new X.et()
t.d=P.c7(P.B)
u.b=t
t=new X.eL(u)
t.f=0
t.r=V.ch()
t.x=V.ch()
t.ch=t.Q=1
u.c=t
t=new X.ez(u)
t.r=0
t.x=V.ch()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fD(u)
t.f=V.ch()
t.r=V.ch()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.co,P.K]])
u.z=t
s=document
t.push(W.F(s,"contextmenu",u.gcv(),!1))
u.z.push(W.F(a,"focus",u.gcD(),!1))
u.z.push(W.F(a,"blur",u.gcp(),!1))
u.z.push(W.F(s,"keyup",u.gcH(),!1))
u.z.push(W.F(s,"keydown",u.gcF(),!1))
u.z.push(W.F(a,"mousedown",u.gcK(),!1))
u.z.push(W.F(a,"mouseup",u.gcO(),!1))
u.z.push(W.F(a,r,u.gcM(),!1))
t=u.z
W.i0(a)
W.i0(a)
t.push(W.F(a,W.i0(a),u.gcQ(),!1))
u.z.push(W.F(s,r,u.gcz(),!1))
u.z.push(W.F(s,"mouseup",u.gcB(),!1))
u.z.push(W.F(s,"pointerlockchange",u.gcS(),!1))
u.z.push(W.F(a,"touchstart",u.gcZ(),!1))
u.z.push(W.F(a,"touchend",u.gcV(),!1))
u.z.push(W.F(a,"touchmove",u.gcX(),!1))
q.Q=!0
q.ch=!1
Date.now()
q.cy=0
q.bk()
return q},
dF:function dF(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f4:function f4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
f7:function f7(a){this.a=a},
cr:function cr(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
fz:function fz(a){this.a=a}},Z={
ie:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ii(c)),35044)
a.bindBuffer(b,null)
return new Z.cz(b,u)},
R:function(a){return new Z.cy(a)},
cz:function cz(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ha:function ha(a){this.a=a},
bR:function bR(a,b){this.a=a
this.b=null
this.c=b},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.a=a}},D={
ag:function(){var u=new D.bc()
u.d=0
return u},
dI:function dI(){},
bc:function bc(){var _=this
_.d=_.c=_.b=_.a=null},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
Q:function Q(){this.b=null},
el:function el(){this.b=null},
em:function em(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={bS:function bS(a,b){this.a=a
this.b=b},c5:function c5(a,b){this.a=a
this.b=b},et:function et(){this.d=this.b=this.a=null},ez:function ez(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},eL:function eL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fD:function fD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cx:function cx(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jV:function(a){var u=new X.ed(),t=V.kC(1)
u.a=new V.aH(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.iU
if(t==null){t=V.kb(0,0,1,1)
$.iU=t}u.r=t
return u},
i_:function i_(){},
ed:function ed(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cg:function cg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(){}},V={
kC:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
it:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bU(a-b,u)
return(a<0?a+u:a)+b},
r:function(a,b,c){if(a==null)return C.b.T("null",c)
return C.b.T(C.c.e2(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
hN:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=0,t=0;t<4;++t){s=V.r(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.f(o,q)
r=C.b.T(o[q],u)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=r}return o},
iL:function(){var u=$.iK
return u==null?$.iK=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ch:function(){var u=$.iO
return u==null?$.iO=new V.Z(0,0):u},
kb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cj(a,b,c,d)},
id:function(){var u=$.j4
return u==null?$.j4=new V.C(0,0,0):u},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(a){this.a=a},
bg:function bg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function(a){var u=new V.fh()
u.c5(a,!0)
return u},
bT:function bT(){},
dS:function dS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ef:function ef(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eg:function eg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f_:function f_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fh:function fh(){this.b=this.a=null},
fj:function fj(a){this.a=a},
fi:function fi(a){this.a=a},
fk:function fk(a){this.a=a}},U={bU:function bU(){this.b=this.a=null},eM:function eM(){},ck:function ck(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={bY:function bY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ic:function(a,b,c,d,e){var u=new A.fK(a,c,e)
u.f=d
P.k0(d,0,P.B)
return u},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a},
dV:function dV(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cl:function cl(){},
cv:function cv(){},
fR:function fR(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.c=b
this.d=c},
fM:function fM(a,b,c){this.a=a
this.c=b
this.d=c},
fO:function fO(a,b,c){this.a=a
this.c=b
this.d=c},
fQ:function fQ(a,b,c){this.a=a
this.c=b
this.d=c},
fK:function fK(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.c=b
this.d=c},
fL:function fL(a,b,c){this.a=a
this.c=b
this.d=c},
fN:function fN(a,b,c){this.a=a
this.c=b
this.d=c},
fP:function fP(a,b,c){this.a=a
this.c=b
this.d=c},
fS:function fS(a,b,c){this.a=a
this.c=b
this.d=c},
fT:function fT(a,b,c){this.a=a
this.c=b
this.d=c},
bs:function bs(a,b,c){this.a=a
this.c=b
this.d=c},
fU:function fU(a,b,c){this.a=a
this.c=b
this.d=c},
fV:function fV(a,b,c){this.a=a
this.c=b
this.d=c}},F={
hJ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
bG:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.C(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.C(u+a3,t+a1,s+a2)
q=new V.C(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.C(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.hJ(i)
l=F.hJ(j.b)
k=F.kZ(d,a0,new F.hI(j,F.hJ(j.c),F.hJ(j.d),l,m,c),b)
if(k!=null)a.dE(k)},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.iV()
t=H.b([],[F.bu])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.bo(new V.aH(p,0,0,1),new V.Z(r,1))
c.$3(o,r,0)
t.push(o.aV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.bo(new V.aH(j,i,h,1),new V.Z(r,m))
c.$3(o,r,n)
t.push(o.aV(d))}}u.d.dc(a+1,b+1,t)
return u},
bZ:function(a,b,c){var u=new F.aJ(),t=a.a
if(t==null)H.N(P.E("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.N(P.E("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
iV:function(){var u=new F.fd(),t=new F.h2(u)
t.b=!1
t.c=H.b([],[F.bu])
u.a=t
t=new F.fg(u)
t.b=H.b([],[F.bl])
u.b=t
t=new F.ff(u)
t.b=H.b([],[F.be])
u.c=t
t=new F.fe(u)
t.b=H.b([],[F.aJ])
u.d=t
u.e=null
return u},
j5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bu(),r=new F.h7()
r.b=H.b([],[F.bl])
s.b=r
r=new F.h6()
u=[F.be]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.h3()
u=[F.aJ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.jA()
s.e=0
r=$.ac()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b1().a)!==0?e:t
s.x=(u&$.b0().a)!==0?b:t
s.y=(u&$.b2().a)!==0?f:t
s.z=(u&$.b3().a)!==0?g:t
s.Q=(u&$.jB().a)!==0?c:t
s.ch=(u&$.b4().a)!==0?i:0
s.cx=(u&$.b_().a)!==0?a:t
return s},
hI:function hI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aJ:function aJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
be:function be(){this.b=this.a=null},
bl:function bl(){this.a=null},
fd:function fd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.a=a
this.b=null},
ff:function ff(a){this.a=a
this.b=null},
fg:function fg(a){this.a=a
this.b=null},
bu:function bu(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a},
h2:function h2(a){this.a=a
this.c=this.b=null},
h3:function h3(){this.d=this.c=this.b=null},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){this.c=this.b=null},
h7:function h7(){this.b=null},
ji:function(){var u,t,s,r,q,p,o,n,m,l,k,j="tutorial1",i=null,h=V.ke("Tutorial 1"),g=[P.o]
h.K(H.b(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],g))
u=W.iA()
u.className="pageCanvas"
u.id=j
h.a.appendChild(u)
h.ai(0,"Getting Started")
h.K(H.b(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],g))
h.bn("index.html","html",0,H.b(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],g))
h.bn("main.dart","dart",0,H.b(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],g))
h.ai(4,"ThreeDart")
h.K(H.b(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],g))
h.ai(4,"Scene")
h.K(H.b(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],g))
h.K(H.b(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],g))
h.K(H.b(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],g))
h.ai(4,"Entity")
h.K(H.b(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],g))
h.K(H.b(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],g))
h.K(H.b(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],g))
h.K(H.b(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],g))
h.ai(4,"Summary")
h.K(H.b(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],g))
h.K(H.b(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],g))
t=new E.af()
t.a=""
t.b=!0
g=E.af
h=O.iC(g)
t.y=h
h.b2(t.gdF(),t.gdI())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb4(0,i)
t.sbK(i)
t.sak(i)
s=F.iV()
F.bG(s,i,i,1,1,1,0,0,1)
F.bG(s,i,i,1,1,0,1,0,3)
F.bG(s,i,i,1,1,0,0,1,2)
F.bG(s,i,i,1,1,-1,0,0,0)
F.bG(s,i,i,1,1,0,-1,0,0)
F.bG(s,i,i,1,1,0,0,-1,3)
h=s.e
if(h!=null)++h.d
s.d.aS()
s.a.aS()
h=s.e
if(h!=null)h.ax(0)
t.sb4(0,s)
h=new U.ck()
h.r=h.f=h.e=h.d=h.c=h.b=h.a=0
h.sbP(0)
h.sbD(0,0)
h.sbI(0)
r=h.d
if(!(Math.abs(r-0.1)<$.y().a)){h.d=0.1
r=new D.z("deltaYaw",r,0.1)
r.b=!0
h.aa(r)}r=h.e
if(!(Math.abs(r-0.21)<$.y().a)){h.e=0.21
r=new D.z("deltaPitch",r,0.21)
r.b=!0
h.aa(r)}r=h.f
if(!(Math.abs(r-0.32)<$.y().a)){h.f=0.32
r=new D.z("deltaRoll",r,0.32)
r.b=!0
h.aa(r)}t.sak(h)
h=new O.dU()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.y().a)){h.b=3
r=new D.z("start",1,3)
r.b=!0
h.aD(r)}r=h.c
if(!(Math.abs(r-6)<$.y().a)){h.c=6
r=new D.z("stop",r,6)
r.b=!0
h.aD(r)}if(!h.d){h.d=!0
h.a=null
r=new D.z("grey",!1,!0)
r.b=!0
h.aD(r)}t.sbK(h)
q=new M.bY()
q.a=!0
h=O.iC(g)
q.e=h
h.b2(q.gcr(),q.gct())
q.y=q.x=q.r=q.f=null
p=X.jV(i)
o=new X.cg()
o.c=1.0471975511965976
o.d=0.1
o.e=2000
o.sak(i)
h=o.c
if(!(Math.abs(h-1.0471975511965976)<$.y().a)){o.c=1.0471975511965976
h=new D.z("fov",h,1.0471975511965976)
h.b=!0
o.a7(h)}h=o.d
if(!(Math.abs(h-0.1)<$.y().a)){o.d=0.1
h=new D.z("near",h,0.1)
h.b=!0
o.a7(h)}h=o.e
if(!(Math.abs(h-2000)<$.y().a)){o.e=2000
h=new D.z("far",h,2000)
h.b=!0
o.a7(h)}h=q.b
if(h!==o){if(h!=null)h.gv().I(0,q.ga5())
n=q.b
q.b=o
o.gv().m(0,q.ga5())
h=new D.z("camera",n,q.b)
h.b=!0
q.a6(h)}h=q.c
if(h!==p){if(h!=null)h.gv().I(0,q.ga5())
n=q.c
q.c=p
p.gv().m(0,q.ga5())
h=new D.z("target",n,q.c)
h.b=!0
q.a6(h)}h=q.e
g=[H.aZ(h,0)]
if(h.cU(H.b([t],g))){r=h.a
m=r.length
r.push(t)
h.co(m,H.b([t],g))}h=q.b
l=V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
g=new U.bU()
g.a=l
h.sak(g)
k=document.getElementById(j)
if(k==null)H.N(P.E("Failed to find an element with the identifier, tutorial1."))
h=E.kg(k,!0,!0,!0,!1)
g=h.d
if(g!==q){if(g!=null)g.gv().I(0,h.gb7())
h.d=q
q.gv().m(0,h.gb7())
h.b8()}}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.i7.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.bm(a)},
h:function(a){return"Instance of '"+H.d(H.bn(a))+"'"}}
J.eo.prototype={
h:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iaA:1}
J.eq.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gC:function(a){return 0}}
J.c4.prototype={
gC:function(a){return 0},
h:function(a){return String(a)}}
J.eZ.prototype={}
J.bt.prototype={}
J.ak.prototype={
h:function(a){var u=a[$.jp()]
if(u==null)return this.c0(a)
return"JavaScript function for "+H.d(J.M(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aj.prototype={
I:function(a,b){var u
if(!!a.fixed$length)H.N(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.I(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.e(P.ae(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
dC:function(a){return this.j(a,"")},
dw:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.e(P.ae(a))}throw H.e(H.i4())},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
bX:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aZ(a,0)])
return H.b(a.slice(b,c),[H.aZ(a,0)])},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.i4())},
bp:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.e(P.ae(a))}return!1},
H:function(a,b){var u
for(u=0;u<a.length;++u)if(J.I(a[u],b))return!0
return!1},
h:function(a){return P.i3(a,"[","]")},
gE:function(a){return new J.O(a,a.length)},
gC:function(a){return H.bm(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.N(P.aw("set length"))
if(b<0)throw H.e(P.a_(b,0,null,"newLength",null))
a.length=b},
$ik:1}
J.i6.prototype={}
J.O.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c3.prototype={
aU:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gau(b)
if(this.gau(a)===u)return 0
if(this.gau(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gau:function(a){return a===0?1/a<0:a<0},
bs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.aw(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.aw(""+a+".round()"))},
dj:function(a,b,c){if(C.d.aU(b,c)>0)throw H.e(H.aY(b))
if(this.aU(a,b)<0)return b
if(this.aU(a,c)>0)return c
return a},
e2:function(a,b){var u
if(b>20)throw H.e(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gau(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bU:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ar:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.aw("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aq:function(a,b){var u
if(a>0)u=this.d8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
d8:function(a,b){return b>31?0:a>>>b},
$iA:1,
$iT:1}
J.c2.prototype={$iB:1}
J.ep.prototype={}
J.aL.prototype={
aT:function(a,b){if(b<0)throw H.e(H.du(a,b))
if(b>=a.length)H.N(H.du(a,b))
return a.charCodeAt(b)},
a8:function(a,b){if(b>=a.length)throw H.e(H.du(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.e(P.ix(b,null,null))
return a+b},
aA:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
an:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f3(b,null))
if(b>c)throw H.e(P.f3(b,null))
if(c>a.length)throw H.e(P.f3(c,null))
return a.substring(b,c)},
aB:function(a,b){return this.an(a,b,null)},
e1:function(a){return a.toLowerCase()},
N:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
T:function(a,b){var u=b-a.length
if(u<=0)return a
return this.N(" ",u)+a},
h:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.l.prototype={
gk:function(a){return this.a.length},
l:function(a,b){return C.b.aT(this.a,b)},
$an:function(){return[P.B]},
$ak:function(){return[P.B]}}
H.e0.prototype={}
H.c8.prototype={
gE:function(a){return new H.bf(this,this.gk(this))},
ay:function(a,b){return this.c_(0,b)}}
H.bf.prototype={
gw:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.im(s),q=r.gk(s)
if(t.b!==q)throw H.e(P.ae(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.t(s,u);++t.c
return!0}}
H.eC.prototype={
gE:function(a){return new H.eD(J.aC(this.a),this.b)},
gk:function(a){return J.aD(this.a)},
t:function(a,b){return this.b.$1(J.hX(this.a,b))},
$ak:function(a,b){return[b]}}
H.eD.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gw(t))
return!0}u.a=null
return!1},
gw:function(a){return this.a}}
H.eE.prototype={
gk:function(a){return J.aD(this.a)},
t:function(a,b){return this.b.$1(J.hX(this.a,b))},
$ac8:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.bv.prototype={
gE:function(a){return new H.hb(J.aC(this.a),this.b)}}
H.hb.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gw(u)))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.c_.prototype={}
H.fY.prototype={}
H.cw.prototype={}
H.fH.prototype={
R:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.eV.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.es.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.fX.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hW.prototype={
$1:function(a){if(!!J.G(a).$iaI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.d8.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.b7.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ge4:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fw.prototype={}
H.fo.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dw(u)+"'"}}
H.b5.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.b5))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.bm(this.a)
else u=typeof t!=="object"?J.bN(t):H.bm(t)
return(u^H.bm(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bn(u))+"'")}}
H.dH.prototype={
h:function(a){return this.a}}
H.fa.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.X.prototype={
gk:function(a){return this.a},
gM:function(a){return new H.c6(this,[H.aZ(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.bg(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.bg(t,b)}else return s.dz(b)},
dz:function(a){var u=this.d
if(u==null)return!1
return this.aX(this.aI(u,J.bN(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ap(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ap(r,b)
s=t==null?null:t.b
return s}else return q.dA(b)},
dA:function(a){var u,t,s=this.d
if(s==null)return
u=this.aI(s,J.bN(a)&0x3ffffff)
t=this.aX(u,a)
if(t<0)return
return u[t].b},
U:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bb(u==null?o.b=o.aL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bb(t==null?o.c=o.aL():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aL()
r=J.bN(b)&0x3ffffff
q=o.aI(s,r)
if(q==null)o.aO(s,r,[o.aM(b,c)])
else{p=o.aX(q,b)
if(p>=0)q[p].b=c
else q.push(o.aM(b,c))}}},
D:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.ae(u))
t=t.c}},
bb:function(a,b,c){var u=this.ap(a,b)
if(u==null)this.aO(a,b,this.aM(b,c))
else u.b=c},
cn:function(){this.r=this.r+1&67108863},
aM:function(a,b){var u,t=this,s=new H.ev(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.cn()
return s},
aX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1},
h:function(a){return P.iJ(this)},
ap:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
aO:function(a,b,c){a[b]=c},
ck:function(a,b){delete a[b]},
bg:function(a,b){return this.ap(a,b)!=null},
aL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aO(t,u,t)
this.ck(t,u)
return t}}
H.ev.prototype={}
H.c6.prototype={
gk:function(a){return this.a.a},
gE:function(a){var u=this.a,t=new H.ew(u,u.r)
t.c=u.e
return t}}
H.ew.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ae(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.hQ.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.hR.prototype={
$2:function(a,b){return this.a(a,b)}}
H.hS.prototype={
$1:function(a){return this.a(a)}}
H.er.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bk.prototype={}
H.ca.prototype={
gk:function(a){return a.length},
$ip:1,
$ap:function(){}}
H.bj.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]},
$an:function(){return[P.A]},
$ik:1,
$ak:function(){return[P.A]}}
H.cb.prototype={
$an:function(){return[P.B]},
$ik:1,
$ak:function(){return[P.B]}}
H.eN.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eO.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eP.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eQ.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eR.prototype={
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cc.prototype={
gk:function(a){return a.length},
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eS.prototype={
gk:function(a){return a.length},
l:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.by.prototype={}
H.bz.prototype={}
H.bA.prototype={}
H.bB.prototype={}
P.hd.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.hc.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.he.prototype={
$0:function(){this.a.$0()}}
P.hf.prototype={
$0:function(){this.a.$0()}}
P.hD.prototype={
c9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bJ(new P.hE(this,b),0),a)
else throw H.e(P.aw("`setTimeout()` not found."))}}
P.hE.prototype={
$0:function(){this.b.$0()}}
P.cA.prototype={}
P.co.prototype={}
P.fr.prototype={}
P.hH.prototype={}
P.hK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cf():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.hr.prototype={
dX:function(a){var u,t,s,r=null
try{if(C.e===$.a2){a.$0()
return}P.kt(r,r,this,a)}catch(s){u=H.ab(s)
t=H.ip(s)
P.ja(r,r,this,u,t)}},
dY:function(a,b){var u,t,s,r=null
try{if(C.e===$.a2){a.$1(b)
return}P.ku(r,r,this,a,b)}catch(s){u=H.ab(s)
t=H.ip(s)
P.ja(r,r,this,u,t)}},
dZ:function(a,b){return this.dY(a,b,null)},
dg:function(a){return new P.hs(this,a)},
dh:function(a,b){return new P.ht(this,a,b)}}
P.hs.prototype={
$0:function(){return this.a.dX(this.b)}}
P.ht.prototype={
$1:function(a){return this.a.dZ(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ho.prototype={
gE:function(a){var u=new P.cQ(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
H:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cf(b)
return t}},
cf:function(a){var u=this.d
if(u==null)return!1
return this.aH(this.bj(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bd(u==null?s.b=P.ig():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bd(t==null?s.c=P.ig():t,b)}else return s.cb(0,b)},
cb:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ig()
u=s.bf(b)
t=r[u]
if(t==null)r[u]=[s.aE(b)]
else{if(s.aH(t,b)>=0)return!1
t.push(s.aE(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.d1(this.c,b)
else return this.d0(0,b)},
d0:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bj(r,b)
t=s.aH(u,b)
if(t<0)return!1
s.bl(u.splice(t,1)[0])
return!0},
bd:function(a,b){if(a[b]!=null)return!1
a[b]=this.aE(b)
return!0},
d1:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bl(u)
delete a[b]
return!0},
be:function(){this.r=1073741823&this.r+1},
aE:function(a){var u,t=this,s=new P.hp(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.be()
return s},
bl:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.be()},
bf:function(a){return J.bN(a)&1073741823},
bj:function(a,b){return a[this.bf(b)]},
aH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1}}
P.hp.prototype={}
P.cQ.prototype={
gw:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ae(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ex.prototype={$ik:1}
P.n.prototype={
gE:function(a){return new H.bf(a,this.gk(a))},
t:function(a,b){return this.l(a,b)},
e0:function(a,b){var u,t,s=this,r=H.b([],[H.kJ(s,a,"n",0)])
C.a.sk(r,s.gk(a))
for(u=0;u<s.gk(a);++u){t=s.l(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t}return r},
e_:function(a){return this.e0(a,!0)},
h:function(a){return P.i3(a,"[","]")}}
P.eA.prototype={}
P.eB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.a5.prototype={
D:function(a,b){var u,t
for(u=J.aC(this.gM(a));u.p();){t=u.gw(u)
b.$2(t,this.l(a,t))}},
gk:function(a){return J.aD(this.gM(a))},
h:function(a){return P.iJ(a)}}
P.hv.prototype={
Y:function(a,b){var u
for(u=J.aC(b);u.p();)this.m(0,u.gw(u))},
h:function(a){return P.i3(this,"{","}")},
t:function(a,b){var u,t,s
P.iS(b,"index")
for(u=P.kn(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.e(P.v(b,this,"index",null,t))},
$ik:1}
P.cR.prototype={}
P.dJ.prototype={}
P.dM.prototype={}
P.e2.prototype={}
P.ej.prototype={
h:function(a){return this.a}}
P.ei.prototype={
cg:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aT("")
if(r>b)q.a+=C.b.an(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jJ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.h0.prototype={}
P.h1.prototype={
dk:function(a){var u,t,s=P.iT(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.hF(u)
if(t.cm(a,0,s)!==s)t.bm(C.b.aT(a,s-1),0)
return new Uint8Array(u.subarray(0,H.kp(0,t.b,u.length)))}}
P.hF.prototype={
bm:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
cm:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aT(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.a8(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bm(r,C.b.a8(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aA.prototype={}
P.b9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a&&!0},
gC:function(a){var u=this.a
return(u^C.d.aq(u,30))&1073741823},
h:function(a){var u=this,t=P.jR(H.k8(u)),s=P.bV(H.k6(u)),r=P.bV(H.k2(u)),q=P.bV(H.k3(u)),p=P.bV(H.k5(u)),o=P.bV(H.k7(u)),n=P.jS(H.k4(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.ba.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gC:function(a){return C.d.gC(this.a)},
h:function(a){var u,t,s,r=new P.e_(),q=this.a
if(q<0)return"-"+new P.ba(0-q).h(0)
u=r.$1(C.d.ar(q,6e7)%60)
t=r.$1(C.d.ar(q,1e6)%60)
s=new P.dZ().$1(q%1e6)
return""+C.d.ar(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.dZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.e_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aI.prototype={}
P.cf.prototype={
h:function(a){return"Throw of null."}}
P.U.prototype={
gaG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaG()+o+u
if(!q.a)return t
s=q.gaF()
r=P.i2(q.b)
return t+s+": "+r}}
P.aS.prototype={
gaG:function(){return"RangeError"},
gaF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.ek.prototype={
gaG:function(){return"RangeError"},
gaF:function(){var u,t=this.b
if(typeof t!=="number")return t.bT()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gk:function(a){return this.f}}
P.fZ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.fW.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bp.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dL.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i2(u)+"."}}
P.eY.prototype={
h:function(a){return"Out of Memory"},
$iaI:1}
P.cm.prototype={
h:function(a){return"Stack Overflow"},
$iaI:1}
P.dR.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cI.prototype={
h:function(a){return"Exception: "+this.a}}
P.ec.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.an(s,0,75)+"...":s
return t+"\n"+r}}
P.ee.prototype={}
P.B.prototype={}
P.k.prototype={
ay:function(a,b){return new H.bv(this,b,[H.jg(this,"k",0)])},
gk:function(a){var u,t=this.gE(this)
for(u=0;t.p();)++u
return u},
ga3:function(a){var u,t=this.gE(this)
if(!t.p())throw H.e(H.i4())
u=t.gw(t)
if(t.p())throw H.e(H.jX())
return u},
t:function(a,b){var u,t,s
P.iS(b,"index")
for(u=this.gE(this),t=0;u.p();){s=u.gw(u)
if(b===t)return s;++t}throw H.e(P.v(b,this,"index",null,t))},
h:function(a){return P.jW(this,"(",")")}}
P.en.prototype={}
P.aO.prototype={$ik:1}
P.c9.prototype={}
P.ao.prototype={
gC:function(a){return P.K.prototype.gC.call(this,this)},
h:function(a){return"null"}}
P.T.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
n:function(a,b){return this===b},
gC:function(a){return H.bm(this)},
h:function(a){return"Instance of '"+H.d(H.bn(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aT.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.j.prototype={}
W.dx.prototype={
gk:function(a){return a.length}}
W.dy.prototype={
h:function(a){return String(a)}}
W.dz.prototype={
h:function(a){return String(a)}}
W.bP.prototype={}
W.aF.prototype={$iaF:1}
W.aG.prototype={
bS:function(a,b,c){var u=a.getContext(b,P.kD(c))
return u},
$iaG:1}
W.ad.prototype={
gk:function(a){return a.length}}
W.dN.prototype={
gk:function(a){return a.length}}
W.t.prototype={$it:1}
W.b8.prototype={
gk:function(a){return a.length}}
W.dO.prototype={}
W.P.prototype={}
W.W.prototype={}
W.dP.prototype={
gk:function(a){return a.length}}
W.dQ.prototype={
gk:function(a){return a.length}}
W.dT.prototype={
gk:function(a){return a.length}}
W.S.prototype={$iS:1}
W.dW.prototype={
h:function(a){return String(a)}}
W.bW.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a0,P.T]]},
$an:function(){return[[P.a0,P.T]]},
$ik:1,
$ak:function(){return[[P.a0,P.T]]}}
W.bX.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaf(a))+" x "+H.d(this.gad(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia0)return!1
return a.left===u.gbt(b)&&a.top===u.gbN(b)&&this.gaf(a)===u.gaf(b)&&this.gad(a)===u.gad(b)},
gC:function(a){return W.j7(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(this.gaf(a)),C.c.gC(this.gad(a)))},
gad:function(a){return a.height},
gbt:function(a){return a.left},
gbN:function(a){return a.top},
gaf:function(a){return a.width},
$ia0:1,
$aa0:function(){return[P.T]}}
W.dX.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.o]},
$an:function(){return[P.o]},
$ik:1,
$ak:function(){return[P.o]}}
W.dY.prototype={
gk:function(a){return a.length}}
W.hh.prototype={
gk:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gE:function(a){var u=this.e_(this)
return new J.O(u,u.length)},
$an:function(){return[W.D]},
$ak:function(){return[W.D]}}
W.D.prototype={
gdf:function(a){return new W.hj(a)},
gbq:function(a){return new W.hh(a,a.children)},
h:function(a){return a.localName},
O:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.iE
if(u==null){u=H.b([],[W.a6])
t=new W.ce(u)
u.push(W.j6(null))
u.push(W.j8())
$.iE=t
d=t}else d=u
u=$.iD
if(u==null){u=new W.di(d)
$.iD=u
c=u}else{u.a=d
c=u}}if($.a4==null){u=document
t=u.implementation.createHTMLDocument("")
$.a4=t
$.i1=t.createRange()
s=$.a4.createElement("base")
s.href=u.baseURI
$.a4.head.appendChild(s)}u=$.a4
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.a4
if(!!this.$iaF)r=u.body
else{r=u.createElement(a.tagName)
$.a4.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.I,a.tagName)){$.i1.selectNodeContents(r)
q=$.i1.createContextualFragment(b)}else{r.innerHTML=b
q=$.a4.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.a4.body
if(r==null?u!=null:r!==u)J.iw(r)
c.b1(q)
document.adoptNode(q)
return q},
dm:function(a,b,c){return this.O(a,b,c,null)},
bW:function(a,b){a.textContent=null
a.appendChild(this.O(a,b,null,null))},
$iD:1,
gbJ:function(a){return a.tagName}}
W.e1.prototype={
$1:function(a){return!!J.G(a).$iD}}
W.h.prototype={$ih:1}
W.c.prototype={
da:function(a,b,c,d){if(c!=null)this.cc(a,b,c,!1)},
cc:function(a,b,c,d){return a.addEventListener(b,H.bJ(c,1),!1)}}
W.ah.prototype={$iah:1}
W.e6.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ah]},
$an:function(){return[W.ah]},
$ik:1,
$ak:function(){return[W.ah]}}
W.e7.prototype={
gk:function(a){return a.length}}
W.eb.prototype={
gk:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.eh.prototype={
gk:function(a){return a.length}}
W.bd.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ik:1,
$ak:function(){return[W.w]}}
W.aM.prototype={$iaM:1}
W.ey.prototype={
h:function(a){return String(a)}}
W.eF.prototype={
gk:function(a){return a.length}}
W.eG.prototype={
l:function(a,b){return P.aa(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aa(u.value[1]))}},
gM:function(a){var u=H.b([],[P.o])
this.D(a,new W.eH(u))
return u},
gk:function(a){return a.size}}
W.eH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eI.prototype={
l:function(a,b){return P.aa(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aa(u.value[1]))}},
gM:function(a){var u=H.b([],[P.o])
this.D(a,new W.eJ(u))
return u},
gk:function(a){return a.size}}
W.eJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.eK.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.an]},
$an:function(){return[W.an]},
$ik:1,
$ak:function(){return[W.an]}}
W.Y.prototype={$iY:1}
W.H.prototype={
ga3:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.iW("No elements"))
if(t>1)throw H.e(P.iW("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gE:function(a){var u=this.a.childNodes
return new W.c0(u,u.length)},
gk:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.w]},
$ak:function(){return[W.w]}}
W.w.prototype={
dU:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.bZ(a):u},
$iw:1}
W.cd.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ik:1,
$ak:function(){return[W.w]}}
W.ap.prototype={$iap:1,
gk:function(a){return a.length}}
W.f0.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ap]},
$an:function(){return[W.ap]},
$ik:1,
$ak:function(){return[W.ap]}}
W.f8.prototype={
l:function(a,b){return P.aa(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aa(u.value[1]))}},
gM:function(a){var u=H.b([],[P.o])
this.D(a,new W.f9(u))
return u},
gk:function(a){return a.size}}
W.f9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fb.prototype={
gk:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.fl.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aq]},
$an:function(){return[W.aq]},
$ik:1,
$ak:function(){return[W.aq]}}
W.ar.prototype={$iar:1}
W.fm.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ar]},
$an:function(){return[W.ar]},
$ik:1,
$ak:function(){return[W.ar]}}
W.as.prototype={$ias:1,
gk:function(a){return a.length}}
W.fp.prototype={
l:function(a,b){return a.getItem(b)},
D:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gM:function(a){var u=H.b([],[P.o])
this.D(a,new W.fq(u))
return u},
gk:function(a){return a.length}}
W.fq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a7.prototype={$ia7:1}
W.cp.prototype={
O:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=W.jT("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.H(t).Y(0,new W.H(u))
return t}}
W.ft.prototype={
O:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.O(u.createElement("table"),b,c,d)
u.toString
u=new W.H(u)
s=u.ga3(u)
s.toString
u=new W.H(s)
r=u.ga3(u)
t.toString
r.toString
new W.H(t).Y(0,new W.H(r))
return t}}
W.fu.prototype={
O:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aC(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.O(u.createElement("table"),b,c,d)
u.toString
u=new W.H(u)
s=u.ga3(u)
t.toString
s.toString
new W.H(t).Y(0,new W.H(s))
return t}}
W.bq.prototype={$ibq:1}
W.at.prototype={$iat:1}
W.a8.prototype={$ia8:1}
W.fx.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.a8]},
$an:function(){return[W.a8]},
$ik:1,
$ak:function(){return[W.a8]}}
W.fy.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.at]},
$an:function(){return[W.at]},
$ik:1,
$ak:function(){return[W.at]}}
W.fA.prototype={
gk:function(a){return a.length}}
W.au.prototype={$iau:1}
W.aU.prototype={$iaU:1}
W.fE.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.au]},
$an:function(){return[W.au]},
$ik:1,
$ak:function(){return[W.au]}}
W.fF.prototype={
gk:function(a){return a.length}}
W.av.prototype={}
W.h_.prototype={
h:function(a){return String(a)}}
W.h9.prototype={
gk:function(a){return a.length}}
W.ax.prototype={
gdr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.aw("deltaY is not supported"))},
gdq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.aw("deltaX is not supported"))},
$iax:1}
W.bw.prototype={
d2:function(a,b){return a.requestAnimationFrame(H.bJ(b,1))},
cl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hi.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.t]},
$an:function(){return[W.t]},
$ik:1,
$ak:function(){return[W.t]}}
W.cD.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.G(b)
if(!u.$ia0)return!1
return a.left===u.gbt(b)&&a.top===u.gbN(b)&&a.width===u.gaf(b)&&a.height===u.gad(b)},
gC:function(a){return W.j7(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gad:function(a){return a.height},
gaf:function(a){return a.width}}
W.hm.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ai]},
$an:function(){return[W.ai]},
$ik:1,
$ak:function(){return[W.ai]}}
W.cW.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.w]},
$an:function(){return[W.w]},
$ik:1,
$ak:function(){return[W.w]}}
W.hy.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.as]},
$an:function(){return[W.as]},
$ik:1,
$ak:function(){return[W.as]}}
W.hz.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a[b]},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.a7]},
$an:function(){return[W.a7]},
$ik:1,
$ak:function(){return[W.a7]}}
W.hg.prototype={
D:function(a,b){var u,t,s,r,q
for(u=this.gM(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gM:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.hj.prototype={
l:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gM(this).length}}
W.hk.prototype={}
W.hl.prototype={
$1:function(a){return this.a.$1(a)}}
W.bx.prototype={
c6:function(a){var u
if($.cL.a===0){for(u=0;u<262;++u)$.cL.U(0,C.H[u],W.kL())
for(u=0;u<12;++u)$.cL.U(0,C.k[u],W.kM())}},
ac:function(a){return $.jD().H(0,W.bb(a))},
Z:function(a,b,c){var u=$.cL.l(0,H.d(W.bb(a))+"::"+b)
if(u==null)u=$.cL.l(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$ia6:1}
W.u.prototype={
gE:function(a){return new W.c0(a,this.gk(a))}}
W.ce.prototype={
ac:function(a){return C.a.bp(this.a,new W.eU(a))},
Z:function(a,b,c){return C.a.bp(this.a,new W.eT(a,b,c))},
$ia6:1}
W.eU.prototype={
$1:function(a){return a.ac(this.a)}}
W.eT.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)}}
W.d3.prototype={
c8:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.ay(0,new W.hw())
t=b.ay(0,new W.hx())
this.b.Y(0,u)
s=this.c
s.Y(0,C.J)
s.Y(0,t)},
ac:function(a){return this.a.H(0,W.bb(a))},
Z:function(a,b,c){var u=this,t=W.bb(a),s=u.c
if(s.H(0,H.d(t)+"::"+b))return u.d.dd(c)
else if(s.H(0,"*::"+b))return u.d.dd(c)
else{s=u.b
if(s.H(0,H.d(t)+"::"+b))return!0
else if(s.H(0,"*::"+b))return!0
else if(s.H(0,H.d(t)+"::*"))return!0
else if(s.H(0,"*::*"))return!0}return!1},
$ia6:1}
W.hw.prototype={
$1:function(a){return!C.a.H(C.k,a)}}
W.hx.prototype={
$1:function(a){return C.a.H(C.k,a)}}
W.hB.prototype={
Z:function(a,b,c){if(this.c1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.H(0,b)
return!1}}
W.hC.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.hA.prototype={
ac:function(a){var u=J.G(a)
if(!!u.$ibo)return!1
u=!!u.$ii
if(u&&W.bb(a)==="foreignObject")return!1
if(u)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.b.aA(b,"on"))return!1
return this.ac(a)},
$ia6:1}
W.c0.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.jF(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gw:function(a){return this.d}}
W.a6.prototype={}
W.hu.prototype={}
W.di.prototype={
b1:function(a){new W.hG(this).$2(a,null)},
ah:function(a,b){if(b==null)J.iw(a)
else b.removeChild(a)},
d4:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.jI(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.M(a)}catch(r){H.ab(r)}try{s=W.bb(a)
this.d3(a,b,p,t,s,o,n)}catch(r){if(H.ab(r) instanceof P.U)throw r
else{this.ah(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
d3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ah(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.ac(a)){p.ah(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.Z(a,"is",g)){p.ah(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gM(f)
t=H.b(u.slice(0),[H.aZ(u,0)])
for(s=f.gM(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.Z(a,J.jK(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.G(a).$ibq)p.b1(a.content)}}
W.hG.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.d4(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ah(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cC.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.bC.prototype={}
W.bD.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bE.prototype={}
W.bF.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
P.hL.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.e8.prototype={
gaJ:function(){var u=this.b,t=H.jg(u,"n",0)
return new H.eC(new H.bv(u,new P.e9(),[t]),new P.ea(),[t,W.D])},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aD(this.gaJ().a)},
l:function(a,b){var u=this.gaJ()
return u.b.$1(J.hX(u.a,b))},
gE:function(a){var u=P.iI(this.gaJ(),!1,W.D)
return new J.O(u,u.length)},
$an:function(){return[W.D]},
$ak:function(){return[W.D]}}
P.e9.prototype={
$1:function(a){return!!J.G(a).$iD}}
P.ea.prototype={
$1:function(a){return H.dv(a,"$iD")}}
P.hq.prototype={}
P.a0.prototype={}
P.aN.prototype={$iaN:1}
P.eu.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.l(a,b)},
$an:function(){return[P.aN]},
$ik:1,
$ak:function(){return[P.aN]}}
P.aP.prototype={$iaP:1}
P.eW.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.l(a,b)},
$an:function(){return[P.aP]},
$ik:1,
$ak:function(){return[P.aP]}}
P.f1.prototype={
gk:function(a){return a.length}}
P.bo.prototype={$ibo:1}
P.fs.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.l(a,b)},
$an:function(){return[P.o]},
$ik:1,
$ak:function(){return[P.o]}}
P.i.prototype={
gbq:function(a){return new P.e8(a,new W.H(a))},
O:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.a6])
p.push(W.j6(null))
p.push(W.j8())
p.push(new W.hA())
c=new W.di(new W.ce(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).dm(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.H(s)
q=p.ga3(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aV.prototype={$iaV:1}
P.fG.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return a.getItem(b)},
t:function(a,b){return this.l(a,b)},
$an:function(){return[P.aV]},
$ik:1,
$ak:function(){return[P.aV]}}
P.cO.prototype={}
P.cP.prototype={}
P.cZ.prototype={}
P.d_.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dB.prototype={
gk:function(a){return a.length}}
P.dC.prototype={
l:function(a,b){return P.aa(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aa(u.value[1]))}},
gM:function(a){var u=H.b([],[P.o])
this.D(a,new P.dD(u))
return u},
gk:function(a){return a.size}}
P.dD.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dE.prototype={
gk:function(a){return a.length}}
P.aE.prototype={}
P.eX.prototype={
gk:function(a){return a.length}}
P.cB.prototype={}
P.fn.prototype={
gk:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.v(b,a,null,null,null))
return P.aa(a.item(b))},
t:function(a,b){return this.l(a,b)},
$an:function(){return[[P.c9,,,]]},
$ik:1,
$ak:function(){return[[P.c9,,,]]}}
P.d6.prototype={}
P.d7.prototype={}
T.a3.prototype={
a1:function(a,b){return!0},
h:function(a){return"all"}}
T.c1.prototype={
a1:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].a1(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.al.prototype={}
T.J.prototype={
a1:function(a,b){return!this.bY(0,b)},
h:function(a){return"!["+this.b6(0)+"]"}}
T.f2.prototype={
a1:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.i9(this.a),t=H.i9(this.b)
return u+".."+t}}
T.fc.prototype={
c3:function(a){var u,t
if(a.a.length<=0)throw H.e(P.E("May not create a Set with zero characters."))
u=new H.X([P.B,P.aA])
for(t=new H.bf(a,a.gk(a));t.p();)u.U(0,t.d,!0)
this.a=u},
a1:function(a,b){return this.a.br(0,b)},
h:function(a){var u=this.a
return P.ia(new H.c6(u,[H.aZ(u,0)]))}}
R.cn.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.cu(this.a.i(0,b))
r.a=H.b([],[T.al])
r.c=!1
this.c.push(r)
return r},
dv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.a1(0,a))return r}return},
h:function(a){return this.b}}
R.cs.prototype={
h:function(a){var u=H.is(this.b,"\n","\\n"),t=H.is(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.ct.prototype={
a2:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.U(0,s,b)}},
h:function(a){return this.b}}
R.fB.prototype={
i:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new R.cn(this,b)
u.c=H.b([],[R.cu])
this.a.U(0,b,u)}return u},
B:function(a){var u,t=this.b.l(0,a)
if(t==null){t=new R.ct(a)
u=P.o
t.c=new H.X([u,u])
this.b.U(0,a,t)}return t},
bM:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.cs]),l=this.c,k=[P.B],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.a8(a,s)
q=l.dv(r)
if(q==null){if(t==null){j.push(r)
p=P.ia(j)
throw H.e(P.E("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.ia(j)
o=l.d
n=o.c.l(0,p)
t=new R.cs(n==null?o.b:n,p,s)}++s}}}}
R.cu.prototype={
h:function(a){return this.b.b+": "+this.b6(0)}}
O.dK.prototype={
b2:function(a,b){this.b=null
this.c=a},
cU:function(a){return!0},
co:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gE:function(a){var u=this.a
return new J.O(u,u.length)},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ik:1}
O.bh.prototype={
gk:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.ag():u},
a4:function(){var u=this.b
if(u!=null)u.P(null)},
gaj:function(a){var u=this.a
if(u.length>0)return C.a.gav(u)
else return V.iL()},
bF:function(a){var u=this.a
if(a==null)u.push(V.iL())
else u.push(a)
this.a4()},
b0:function(){var u=this.a
if(u.length>0){u.pop()
this.a4()}}}
E.dF.prototype={}
E.af.prototype={
bc:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.O(u,u.length);u.p();){t=u.d
if(t.f==null)t.bc()}},
sb4:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().I(0,s.gby())
u=s.c
if(u!=null)u.gv().m(0,s.gby())
t=new D.z("shape",r,s.c)
t.b=!0
s.V(t)}},
sbK:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().I(0,s.gbA())
u=s.f
s.f=a
if(a!=null)a.gv().m(0,s.gbA())
s.bc()
t=new D.z("technique",u,s.f)
t.b=!0
s.V(t)}},
sak:function(a){var u,t,s=this
if(!J.I(s.r,a)){u=s.r
if(u!=null)u.gv().I(0,s.gbw())
if(a!=null)a.gv().m(0,s.gbw())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.V(t)}},
bO:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sbP(m.a+m.d*b.y)
m.sbD(0,m.b+m.e*b.y)
m.sbI(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.am(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.N(0,V.am(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.N(0,V.am(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ax(0)}q=m.x}else q=null
if(!J.I(q,n.x)){p=n.x
n.x=q
o=new D.z("matrix",p,q)
o.b=!0
n.V(o)}for(m=n.y.a,m=new J.O(m,m.length);m.p();)m.d.bO(0,b)},
ae:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gaj(n))
else n.a.push(m.N(0,n.gaj(n)))
n.a4()
a.bG(o.f)
n=a.dy
u=(n&&C.a).gav(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.l(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.dV(m,s)
t.c4(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bi(r,35633)
t.f=t.bi(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.N(P.E("Failed to link shader: "+H.d(p)))}t.d5()
t.d7()
t.z=t.x.l(0,"posAttr")
t.Q=H.dv(t.y.l(0,"width"),"$ibr")
t.ch=H.dv(t.y.l(0,"stop"),"$ibr")
t.cx=H.dv(t.y.l(0,"viewObjMat"),"$ibs")
t.cy=H.dv(t.y.l(0,"projMat"),"$ibs")
if(s.length===0)H.N(P.E("May not cache a shader with no name."))
if(a.fr.br(0,s))H.N(P.E('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.U(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.bR)?o.e=null:m)==null){n=o.d.di(new Z.ha(a.a),$.ac())
m=n.du($.ac())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.dt()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gaj(r)
s=n.cy
s.toString
s.b3(r.bL(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gaj(s)
r=a.dx
r=a.cx=s.N(0,r.gaj(r))
s=r}n=n.cx
n.toString
n.b3(s.bL(0,!0))
u.e
n=o.e
n.aQ(a)
n.ae(a)
n.e3(a)
n=u.a
n.toString
m.useProgram(null)
n.x.ds()}for(n=o.y.a,n=new J.O(n,n.length);n.p();)n.d.ae(a)
a.bE()
a.dx.b0()},
V:function(a){var u=this.z
if(u!=null)u.P(a)},
S:function(){return this.V(null)},
bz:function(a){this.e=null
this.V(a)},
dL:function(){return this.bz(null)},
bB:function(a){this.V(a)},
dM:function(){return this.bB(null)},
bx:function(a){this.V(a)},
dK:function(){return this.bx(null)},
bv:function(a){this.V(a)},
dH:function(){return this.bv(null)},
dG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbu(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bc()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.S()},
dJ:function(a,b){var u,t
for(u=b.gE(b),t=this.gbu();u.p();)u.gw(u).gv().I(0,t)
this.S()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.f4.prototype={
c2:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.b9(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bh()
t=[V.bg]
u.a=H.b([],t)
u.gv().m(0,new E.f5(s))
s.cy=u
u=new O.bh()
u.a=H.b([],t)
u.gv().m(0,new E.f6(s))
s.db=u
u=new O.bh()
u.a=H.b([],t)
u.gv().m(0,new E.f7(s))
s.dx=u
u=H.b([],[O.cq])
s.dy=u
u.push(null)
s.fr=new H.X([P.o,A.cl])},
bG:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gav(u):a)},
bE:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.f5.prototype={
$1:function(a){}}
E.f6.prototype={
$1:function(a){this.a.cx=null}}
E.f7.prototype={
$1:function(a){this.a.cx=null}}
E.cr.prototype={
b9:function(a){this.bH()},
b8:function(){return this.b9(null)},
bk:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.aB(r)
u=C.c.bs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.N()
t=C.c.bs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.iZ(C.h,s.gdW())}},
bH:function(){if(!this.ch){this.ch=!0
var u=window
C.t.cl(u)
C.t.d2(u,W.jb(new E.fz(this),P.T))}},
dV:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bk()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b9(r,!1)
s.y=1000*(r-s.r.a)*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a4()
r=s.db
C.a.sk(r.a,0)
r.a4()
r=s.dx
C.a.sk(r.a,0)
r.a4()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ae(p.e)}}catch(q){u=H.ab(q)
t=H.ip(q)
P.jk("Error: "+H.d(u))
P.jk("Stack: "+H.d(t))
throw H.e(u)}}}
E.fz.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.dV()}}}
Z.cz.prototype={}
Z.bQ.prototype={
aQ:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.E('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.d(u))
throw H.e(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.ha.prototype={}
Z.bR.prototype={
du:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aQ:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aQ(a)},
e3:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.M(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.j(p,", ")+"\nAttrs:   "+C.a.j(r,", ")}}
Z.aK.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bn(this.c))+"'")+"]"}}
Z.cy.prototype={
gb5:function(a){var u=this.a,t=(u&$.ac().a)!==0?3:0
if((u&$.b1().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.b3().a)!==0)t+=3
if((u&$.bL().a)!==0)t+=3
if((u&$.bM().a)!==0)t+=4
if((u&$.b4().a)!==0)++t
return(u&$.b_().a)!==0?t+4:t},
de:function(a){var u,t=$.ac(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0)if(u===a)return t
return $.jC()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cy))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.ac().a)!==0)u.push("Pos")
if((t&$.b1().a)!==0)u.push("Norm")
if((t&$.b0().a)!==0)u.push("Binm")
if((t&$.b2().a)!==0)u.push("Txt2D")
if((t&$.b3().a)!==0)u.push("TxtCube")
if((t&$.bL().a)!==0)u.push("Clr3")
if((t&$.bM().a)!==0)u.push("Clr4")
if((t&$.b4().a)!==0)u.push("Weight")
if((t&$.b_().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.j(u,"|")}}
D.dI.prototype={}
D.bc.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
I:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.H(s,b)
if(s===!0){s=t.a
u=(s&&C.a).I(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.H(s,b)
if(s===!0){s=t.b
u=(s&&C.a).I(s,b)||u}return u},
P:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.D(P.iI(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.e4(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.D(u,new D.e5(q))}return!0},
ax:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.P(u)}}}}
D.e4.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.e5.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.el.prototype={}
D.em.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.bS.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bS))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.c5.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c5))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.et.prototype={
dR:function(a){this.d.m(0,a.a)
return!1},
dN:function(a){this.d.I(0,a.a)
return!1}}
X.ez.prototype={
b_:function(a,b){this.r=a.a
return!1},
am:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.bV()
if(typeof u!=="number")return u.bQ()
this.r=(u&~t)>>>0
return!1},
al:function(a,b){return!1},
dS:function(a){return!1},
cJ:function(a,b,c){return}}
X.bi.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bi))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eL.prototype={
b_:function(a,b){this.f=a.a
return!1},
am:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.bV()
if(typeof u!=="number")return u.bQ()
this.f=(u&~t)>>>0
return!1},
al:function(a,b){return!1},
dT:function(a,b){return!1}}
X.fD.prototype={
dQ:function(a){return!1},
dO:function(a){return!1},
dP:function(a){return!1}}
X.cx.prototype={
bh:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.c5(u,new X.bi(t,a.altKey,a.shiftKey))},
ab:function(a){a.shiftKey},
aP:function(a){a.shiftKey},
a0:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.X()
u=t.top
if(typeof r!=="number")return r.X()
return new V.Z(s-q,r-u)},
ag:function(a){return new V.a9(a.movementX,a.movementY)},
aN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.c.W(r.pageX)
C.c.W(r.pageY)
p=o.left
C.c.W(r.pageX)
n.push(new V.Z(q-p,C.c.W(r.pageY)-o.top))}return n},
a_:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.bS(u,new X.bi(t,a.altKey,a.shiftKey))},
aK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.X()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.X()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
cE:function(a){this.f=!0},
cq:function(a){this.f=!1},
cw:function(a){if(this.f&&this.aK(a))a.preventDefault()},
cI:function(a){var u
if(!this.f)return
u=this.bh(a)
this.b.dR(u)},
cG:function(a){var u
if(!this.f)return
u=this.bh(a)
this.b.dN(u)},
cL:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ab(a)
if(r.x){u=r.a_(a)
t=r.ag(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a_(a)
s=r.a0(a)
if(r.c.b_(u,s))a.preventDefault()},
cP:function(a){var u,t,s,r=this
r.ab(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.am(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.am(u,s))a.preventDefault()},
cC:function(a){var u,t,s,r=this
if(!r.aK(a)){r.ab(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.am(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.am(u,s))a.preventDefault()}},
cN:function(a){var u,t,s,r=this
r.ab(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.al(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.al(u,s))a.preventDefault()},
cA:function(a){var u,t,s,r=this
if(!r.aK(a)){r.ab(a)
u=r.a_(a)
if(r.x){t=r.ag(a)
if(r.d.al(u,t))a.preventDefault()
return}if(r.r)return
s=r.a0(a)
if(r.c.al(u,s))a.preventDefault()}},
cR:function(a){var u,t,s=this
s.ab(a)
u=new V.a9((a&&C.r).gdq(a),C.r.gdr(a)).J(0,180)
if(s.x){if(s.d.dS(u))a.preventDefault()
return}if(s.r)return
t=s.a0(a)
if(s.c.dT(u,t))a.preventDefault()},
cT:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a_(s.y)
t=s.a0(s.y)
s.d.cJ(u,t,r)}},
d_:function(a){var u,t=this
t.a.focus()
t.f=!0
t.aP(a)
u=t.aN(a)
if(t.e.dQ(u))a.preventDefault()},
cW:function(a){var u
this.aP(a)
u=this.aN(a)
if(this.e.dO(u))a.preventDefault()},
cY:function(a){var u
this.aP(a)
u=this.aN(a)
if(this.e.dP(u))a.preventDefault()}}
V.aH.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+", "+V.r(u.d,3,0)+"]"}}
V.e3.prototype={}
V.bg.prototype={
bL:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
N:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.am(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bg))return!1
u=b.a
t=$.y().a
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
h:function(a){return this.A()},
q:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.hN(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.hN(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.hN(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.hN(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
A:function(){return this.q("")}}
V.Z.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.aQ.prototype={
X:function(a,b){return new V.aQ(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
V.ci.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ci))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+", "+V.r(u.d,3,0)+"]"}}
V.cj.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cj))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+", "+V.r(u.d,3,0)+"]"}}
V.a9.prototype={
aY:function(a){var u,t=this.a
if(typeof t!=="number")return t.N()
u=this.b
if(typeof u!=="number")return u.N()
return Math.sqrt(t*t+u*u)},
J:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.j1
return u==null?$.j1=new V.a9(0,0):u}u=this.a
if(typeof u!=="number")return u.J()
t=this.b
if(typeof t!=="number")return t.J()
return new V.a9(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.X()
if(typeof t!=="number")return H.aB(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.X()
if(typeof t!=="number")return H.aB(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.C.prototype={
aY:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aZ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
az:function(a){return new V.C(-this.a,-this.b,-this.c)},
J:function(a,b){if(Math.abs(b-0)<$.y().a)return V.id()
return new V.C(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
U.bU.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.ag():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
return J.I(this.a,b.a)},
h:function(a){return"Constant: "+this.a.q("          ")}}
U.eM.prototype={}
U.ck.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.ag():u},
aa:function(a){var u=this.y
if(u!=null)u.P(a)},
sbP:function(a){var u
a=V.it(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.aa(u)}},
sbD:function(a,b){var u
b=V.it(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.aa(u)}},
sbI:function(a){var u
a=V.it(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.aa(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.ck))return!1
u=r.a
t=b.a
s=$.y().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.r(u.a,3,0)+", "+V.r(u.b,3,0)+", "+V.r(u.c,3,0)+"], ["+V.r(u.d,3,0)+", "+V.r(u.e,3,0)+", "+V.r(u.f,3,0)+"]"}}
M.bY.prototype={
a6:function(a){var u=this.y
if(u!=null)u.P(a)},
c7:function(){return this.a6(null)},
cs:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bc()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.el()
u.b=!0
this.a6(u)},
cu:function(a,b){var u,t
for(u=b.gE(b),t=this.ga5();u.p();)u.gw(u).gv().I(0,t)
u=new D.em()
u.b=!0
this.a6(u)},
gv:function(){var u=this.y
return u==null?this.y=D.ag():u},
ae:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.bG(a1.d)
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
if(typeof s!=="number")return H.aB(s)
o=C.c.W(p*s)
p=q.b
if(typeof r!=="number")return H.aB(r)
n=C.c.W(p*r)
p=C.c.W(q.c*s)
a2.c=p
q=C.c.W(q.d*r)
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
i=V.am(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.bF(i)
t=$.iN
if(t==null){t=$.iP
if(t==null)t=$.iP=new V.aQ(0,0,0)
q=$.j3
if(q==null)q=$.j3=new V.C(0,1,0)
p=$.j2
if(p==null)p=$.j2=new V.C(0,0,-1)
h=p.J(0,Math.sqrt(p.L(p)))
q=q.aW(h)
g=q.J(0,Math.sqrt(q.L(q)))
f=h.aW(g)
e=new V.C(t.a,t.b,t.c)
d=g.az(0).L(e)
c=f.az(0).L(e)
b=h.az(0).L(e)
t=V.am(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.iN=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.N(0,a)}a2.db.bF(a)
for(u=a1.e.a,u=new J.O(u,u.length);u.p();)u.d.bO(0,a2)
for(u=a1.e.a,u=new J.O(u,u.length);u.p();)u.d.ae(a2)
a1.b.toString
a2.cy.b0()
a2.db.b0()
a1.c.toString
a2.bE()}}
A.bO.prototype={}
A.dA.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
dt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ds:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dV.prototype={}
A.cl.prototype={
c4:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bi:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.E("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
d5:function(){var u,t,s,r=this,q=H.b([],[A.bO]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.aB(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.bO(p,t.name,s))}r.x=new A.dA(q)},
d7:function(){var u,t,s,r=this,q=H.b([],[A.cv]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.aB(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.dn(t.type,t.size,t.name,s))}r.y=new A.fR(q)},
a9:function(a,b,c){var u=this.a
if(a===1)return new A.fJ(u,b,c)
else return A.ic(u,this.r,b,a,c)},
ci:function(a,b,c){var u=this.a
if(a===1)return new A.fU(u,b,c)
else return A.ic(u,this.r,b,a,c)},
cj:function(a,b,c){var u=this.a
if(a===1)return new A.fV(u,b,c)
else return A.ic(u,this.r,b,a,c)},
as:function(a,b){return new P.cI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
dn:function(a,b,c,d){var u=this
switch(a){case 5120:return u.a9(b,c,d)
case 5121:return u.a9(b,c,d)
case 5122:return u.a9(b,c,d)
case 5123:return u.a9(b,c,d)
case 5124:return u.a9(b,c,d)
case 5125:return u.a9(b,c,d)
case 5126:return new A.br(u.a,c,d)
case 35664:return new A.fL(u.a,c,d)
case 35665:return new A.fN(u.a,c,d)
case 35666:return new A.fP(u.a,c,d)
case 35667:return new A.fM(u.a,c,d)
case 35668:return new A.fO(u.a,c,d)
case 35669:return new A.fQ(u.a,c,d)
case 35674:return new A.fS(u.a,c,d)
case 35675:return new A.fT(u.a,c,d)
case 35676:return new A.bs(u.a,c,d)
case 35678:return u.ci(b,c,d)
case 35680:return u.cj(b,c,d)
case 35670:throw H.e(u.as("BOOL",c))
case 35671:throw H.e(u.as("BOOL_VEC2",c))
case 35672:throw H.e(u.as("BOOL_VEC3",c))
case 35673:throw H.e(u.as("BOOL_VEC4",c))
default:throw H.e(P.E("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.cv.prototype={}
A.fR.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.A()},
A:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.fJ.prototype={
h:function(a){return"Uniform1i: "+H.d(this.c)}}
A.fM.prototype={
h:function(a){return"Uniform2i: "+H.d(this.c)}}
A.fO.prototype={
h:function(a){return"Uniform3i: "+H.d(this.c)}}
A.fQ.prototype={
h:function(a){return"Uniform4i: "+H.d(this.c)}}
A.fK.prototype={
h:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.br.prototype={
h:function(a){return"Uniform1f: "+H.d(this.c)}}
A.fL.prototype={
h:function(a){return"Uniform2f: "+H.d(this.c)}}
A.fN.prototype={
h:function(a){return"Uniform3f: "+H.d(this.c)}}
A.fP.prototype={
h:function(a){return"Uniform4f: "+H.d(this.c)}}
A.fS.prototype={
h:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.fT.prototype={
h:function(a){return"UniformMat3: "+H.d(this.c)}}
A.bs.prototype={
b3:function(a){var u=new Float32Array(H.ii(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.d(this.c)}}
A.fU.prototype={
h:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.fV.prototype={
h:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.hI.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.aZ(s.b,b).aZ(s.d.aZ(s.c,b),c)
s=new V.aQ(r.a,r.b,r.c)
if(!J.I(a.f,s)){a.f=s
s=a.a
if(s!=null)s.S()}s=r.J(0,Math.sqrt(r.L(r)))
if(!J.I(a.z,s)){a.z=s
s=a.a
if(s!=null)s.S()}s=1-b
u=1-c
u=new V.ci(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.I(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.S()}}}
F.aJ.prototype={
cd:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.id()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dB())return
return s.J(0,Math.sqrt(s.L(s)))},
ce:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.X(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.J(0,Math.sqrt(r.L(r)))
r=t.X(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aW(r.J(0,Math.sqrt(r.L(r))))
return r.J(0,Math.sqrt(r.L(r)))},
aR:function(){var u,t=this
if(t.d!=null)return!0
u=t.cd()
if(u==null){u=t.ce()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
q:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.T(J.M(s.e),0)+", "+C.b.T(J.M(t.b.e),0)+", "+C.b.T(J.M(t.c.e),0)+" {"
s=t.d
u=(s!=null?u+(s.h(0)+", "):u+"-, ")+"-}"
return u},
A:function(){return this.q("")}}
F.be.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.T(J.M(u.e),0)+", "+C.b.T(J.M(this.b.e),0)},
A:function(){return this.q("")}}
F.bl.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.T(J.M(u.e),0)},
A:function(){return this.q("")}}
F.fd.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.ag():u},
dE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.G()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){r=g[s]
h.a.m(0,r.dl())}h.a.G()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.m(0,n)
o=new F.bl()
if(n.a==null)H.N(P.E("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.P(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.G()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.m(0,l)
p.a.m(0,k)
p=new F.be()
o=l.a
if(o==null)H.N(P.E("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.N(P.E("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.P(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.G()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.G()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.m(0,l)
o.a.m(0,k)
o.a.m(0,i)
F.bZ(l,k,i)}g=h.e
if(g!=null)g.ax(0)},
di:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ac()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b1().a)!==0)++s
if((t&$.b0().a)!==0)++s
if((t&$.b2().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.bL().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.b4().a)!==0)++s
if((t&$.b_().a)!==0)++s
r=a4.gb5(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.A])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.bQ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.de(m)
k=l.gb5(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.bQ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].dD(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ii(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bR(new Z.cz(a1,d),o)
c.b=H.b([],[Z.aK])
if(a0.b.b.length!==0){b=H.b([],[P.B])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)}a=Z.ie(u,34963,b)
c.b.push(new Z.aK(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.B])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.G()
b.push(t.e)}a=Z.ie(u,34963,b)
c.b.push(new Z.aK(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.B])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.G()
b.push(t.e)}a=Z.ie(u,34963,b)
c.b.push(new Z.aK(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.o])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.q(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.q(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.q(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.q(t))}return C.a.j(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.P(null)}}
F.fe.prototype={
dc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aJ])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.bZ(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.bZ(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.bZ(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.bZ(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
aS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].aR())s=!1
return s},
h:function(a){return this.A()},
q:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(a))
return C.a.j(r,"\n")},
A:function(){return this.q("")}}
F.ff.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.A()},
q:function(a){var u,t,s=H.b([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].q(a+(""+u+". ")))}return C.a.j(s,"\n")},
A:function(){return this.q("")}}
F.fg.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.A()},
q:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(a))
return C.a.j(r,"\n")},
A:function(){return this.q("")}}
F.bu.prototype={
aV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j5(u.cx,r,o,t,s,q,p,a,n)},
dl:function(){return this.aV(null)},
dD:function(a){var u,t,s=this
if(a.n(0,$.ac())){u=s.f
t=[P.A]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b1())){u=s.r
t=[P.A]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b0())){u=H.b([0,0,1],[P.A])
return u}else if(a.n(0,$.b2())){u=s.y
t=[P.A]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b3())){u=s.z
t=[P.A]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bL())){u=s.Q
t=[P.A]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bM())){u=s.Q
t=[P.A]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.b4()))return H.b([s.ch],[P.A])
else if(a.n(0,$.b_())){u=s.cx
t=[P.A]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.A])},
aR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.id()
t.d.D(0,new F.h8(s))
s=s.a
t.r=s.J(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.A()},
q:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.T(J.M(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.r(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.j(q,", ")
return a+"{"+t+"}"},
A:function(){return this.q("")}}
F.h8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.F(0,t)}}}
F.h2.prototype={
G:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.E("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.S()
return!0},
bo:function(a,b){var u=null,t=F.j5(u,u,a,u,u,b,u,u,0)
this.m(0,t)
return t},
gk:function(a){return this.c.length},
aS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].aR()
return!0},
h:function(a){return this.A()},
q:function(a){var u,t,s,r
this.G()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].q(a))
return C.a.j(u,"\n")},
A:function(){return this.q("")}}
F.h3.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var u=this
C.a.D(u.b,b)
C.a.D(u.c,new F.h4(u,b))
C.a.D(u.d,new F.h5(u,b))},
h:function(a){return this.A()},
A:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
return C.a.j(r,"\n")}}
F.h4.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.h5.prototype={
$1:function(a){var u=this.a
if(!J.I(a.a,u)&&!J.I(a.b,u))this.b.$1(a)}}
F.h6.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.A()},
A:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
return C.a.j(r,"\n")}}
F.h7.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.A()},
A:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].q(""))
return C.a.j(r,"\n")}}
O.dU.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.ag():u},
aD:function(a){var u=this.r
if(u!=null)u.P(a)}}
O.cq.prototype={}
X.i_.prototype={}
X.ed.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.ag():u}}
X.cg.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.ag():u},
a7:function(a){var u=this.f
if(u!=null)u.P(a)},
ca:function(){return this.a7(null)},
sak:function(a){var u,t,s=this
if(!J.I(s.b,a)){u=s.b
if(u!=null)u.gv().I(0,s.gba())
t=s.b
s.b=a
if(a!=null)a.gv().m(0,s.gba())
u=new D.z("mover",t,s.b)
u.b=!0
s.a7(u)}}}
X.fv.prototype={}
V.bT.prototype={
ao:function(a){this.b=new P.ei(C.E)
this.c=null
this.d=H.b([],[[P.aO,W.S]])},
u:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.S]))
u=a.split("\n")
for(l=u.length,t=[W.S],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.cg(q,0,q.length)
n=o==null?q:o
C.D.bW(p,H.is(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gav(m.d).push(p)}},
bC:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.aO,W.S]])
u=C.a.j(b,"\n")
t=q.c
for(t=(t==null?q.c=q.at():t).bM(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)q.aw(t[r])}}
V.dS.prototype={
aw:function(a){var u=this
switch(a.a){case"Class":u.u(a.b,"#551")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break
case"Type":u.u(a.b,"#B11")
break
case"Whitespace":u.u(a.b,"#111")
break}},
at:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.fC()
a1.c=a1.i(0,r)
u=a1.i(0,r).j(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=a1.i(0,q).j(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=a1.i(0,r).j(0,p)
t=T.x("0","9")
u.a.push(t)
t=a1.i(0,p).j(0,p)
u=T.x("0","9")
t.a.push(u)
u=a1.i(0,p).j(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=a1.i(0,o).j(0,n)
u=T.x("0","9")
t.a.push(u)
u=a1.i(0,n).j(0,n)
t=T.x("0","9")
u.a.push(t)
t=a1.i(0,r).j(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=a1.i(0,m).j(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=a1.i(0,r).j(0,k)
u=T.m(new H.l('"'))
t.a.push(u)
u=a1.i(0,k).j(0,j)
t=T.m(new H.l('"'))
u.a.push(t)
t=a1.i(0,k).j(0,i)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.i(0,i).j(0,k)
t=T.m(new H.l('"'))
u.a.push(t)
a1.i(0,k).j(0,k).a.push(new T.a3())
t=a1.i(0,r).j(0,h)
u=T.m(new H.l("'"))
t.a.push(u)
u=a1.i(0,h).j(0,g)
t=T.m(new H.l("'"))
u.a.push(t)
t=a1.i(0,h).j(0,f)
u=T.m(new H.l("\\"))
t.a.push(u)
u=a1.i(0,f).j(0,h)
t=T.m(new H.l("'"))
u.a.push(t)
a1.i(0,h).j(0,h).a.push(new T.a3())
t=a1.i(0,r).j(0,e)
u=T.m(new H.l("/"))
t.a.push(u)
u=a1.i(0,e).j(0,d)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.i(0,d).j(0,c)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.i(0,d).j(0,d)
t=new T.J()
s=[T.al]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=a1.i(0,e).j(0,b)
t=T.m(new H.l("*"))
u.a.push(t)
t=a1.i(0,b).j(0,a)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).j(0,b)
t=new T.J()
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("*"))
t.a.push(u)
u=a1.i(0,a).j(0,c)
t=T.m(new H.l("/"))
u.a.push(t)
t=a1.i(0,r).j(0,a0)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).j(0,a0)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.B("Num")
t=a1.i(0,n)
t.d=t.a.B("Num")
t=a1.i(0,m)
t.d=t.a.B("Symbol")
t=a1.i(0,j)
t.d=t.a.B("String")
t=a1.i(0,g)
t.d=t.a.B("String")
t=a1.i(0,c)
t.d=t.a.B(d)
t=a1.i(0,a0)
t.d=t.a.B(a0)
t=a1.i(0,q)
t=t.d=t.a.B(q)
u=[P.o]
t.a2(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a2(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a2(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ef.prototype={
aw:function(a){var u=this
switch(a.a){case"Builtin":u.u(a.b,"#411")
break
case"Comment":u.u(a.b,"#777")
break
case"Id":u.u(a.b,"#111")
break
case"Num":u.u(a.b,"#191")
break
case"Preprocess":u.u(a.b,"#737")
break
case"Reserved":u.u(a.b,"#119")
break
case"Symbol":u.u(a.b,"#611")
break
case"Type":u.u(a.b,"#171")
break
case"Whitespace":u.u(a.b,"#111")
break}},
at:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.fC()
e.c=e.i(0,r)
u=e.i(0,r).j(0,q)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=e.i(0,q).j(0,q)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=e.i(0,r).j(0,p)
t=T.x("0","9")
u.a.push(t)
t=e.i(0,p).j(0,p)
u=T.x("0","9")
t.a.push(u)
u=e.i(0,p).j(0,o)
t=T.m(new H.l("."))
u.a.push(t)
t=e.i(0,o).j(0,n)
u=T.x("0","9")
t.a.push(u)
u=e.i(0,n).j(0,n)
t=T.x("0","9")
u.a.push(t)
t=e.i(0,r).j(0,m)
u=T.m(new H.l(l))
t.a.push(u)
u=e.i(0,m).j(0,m)
t=T.m(new H.l(l))
u.a.push(t)
t=e.i(0,r).j(0,k)
u=T.m(new H.l("/"))
t.a.push(u)
u=e.i(0,k).j(0,j)
t=T.m(new H.l("/"))
u.a.push(t)
e.i(0,k).j(0,m).a.push(new T.a3())
t=e.i(0,j).j(0,i)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,j).j(0,j)
t=new T.J()
s=[T.al]
t.a=H.b([],s)
u.a.push(t)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).j(0,h)
t=T.m(new H.l("#"))
u.a.push(t)
t=e.i(0,h).j(0,h)
u=new T.J()
u.a=H.b([],s)
t.a.push(u)
t=T.m(new H.l("\n"))
u.a.push(t)
t=e.i(0,h).j(0,g)
u=T.m(new H.l("\n"))
t.a.push(u)
u=e.i(0,r).j(0,f)
t=T.m(new H.l(" \n\t"))
u.a.push(t)
t=e.i(0,f).j(0,f)
u=T.m(new H.l(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.B("Num")
u=e.i(0,n)
u.d=u.a.B("Num")
u=e.i(0,m)
u.d=u.a.B("Symbol")
u=e.i(0,i)
u.d=u.a.B(j)
u=e.i(0,g)
u.d=u.a.B(h)
u=e.i(0,f)
u.d=u.a.B(f)
u=e.i(0,q)
u=u.d=u.a.B(q)
t=[P.o]
u.a2(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a2(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a2(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.eg.prototype={
aw:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.u(a.b,"#911")
u.u("=",t)
break
case"Id":u.u(a.b,t)
break
case"Other":u.u(a.b,t)
break
case"Reserved":u.u(a.b,"#119")
break
case"String":u.u(a.b,"#171")
break
case"Symbol":u.u(a.b,"#616")
break}},
at:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.fC()
l.c=l.i(0,s)
u=l.i(0,s).j(0,r)
t=T.m(new H.l("_"))
u.a.push(t)
t=T.x("a","z")
u.a.push(t)
t=T.x("A","Z")
u.a.push(t)
t=l.i(0,r).j(0,r)
u=T.m(new H.l("_"))
t.a.push(u)
u=T.x("0","9")
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=l.i(0,r).j(0,q)
t=T.m(new H.l("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).j(0,p)
t=T.m(new H.l("</\\-!>="))
u.a.push(t)
t=l.i(0,p).j(0,p)
u=T.m(new H.l("</\\-!>="))
t.a.push(u)
u=l.i(0,s).j(0,o)
t=T.m(new H.l('"'))
u.a.push(t)
t=l.i(0,o).j(0,n)
u=T.m(new H.l('"'))
t.a.push(u)
u=l.i(0,o).j(0,"EscStr")
t=T.m(new H.l("\\"))
u.a.push(t)
t=l.i(0,"EscStr").j(0,o)
u=T.m(new H.l('"'))
t.a.push(u)
l.i(0,o).j(0,o).a.push(new T.a3())
l.i(0,s).j(0,m).a.push(new T.a3())
u=l.i(0,m).j(0,m)
t=new T.J()
t.a=H.b([],[T.al])
u.a.push(t)
u=T.m(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.x("a","z")
t.a.push(u)
u=T.x("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.B("Symbol")
u=l.i(0,n)
u.d=u.a.B("String")
u=l.i(0,r)
t=u.a.B(r)
u.d=t
t.a2(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.B(q)
t=l.i(0,m)
t.d=t.a.B(m)
return l}}
V.f_.prototype={
bC:function(a,b){this.d=H.b([],[[P.aO,W.S]])
this.u(C.a.j(b,"\n"),"#111")},
aw:function(a){},
at:function(){return}}
V.fh.prototype={
c5:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.F(q,"scroll",new V.fj(o),!1)},
ai:function(a,b){var u,t,s,r,q
a=C.d.dj(a,0,4)
u=P.ih(C.i,b,C.f,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.hY()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
K:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.d6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.bM(C.a.dC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.kX(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ih(C.i,n,C.f,!1)
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
bR:function(a){var u,t,s,r=new V.dS("dart")
r.ao("dart")
u=new V.ef("glsl")
u.ao("glsl")
t=new V.eg("html")
t.ao("html")
s=C.a.dw(H.b([r,u,t],[V.bT]),new V.fk(a))
if(s!=null)return s
r=new V.f_("plain")
r.ao("plain")
return r},
bn:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.B])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(C.b.aA(s,"+")){b0[t]=C.b.aB(s,1)
a6.push(1)
u=!0}else if(C.b.aA(s,"-")){b0[t]=C.b.aB(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.bR(a8)
r.bC(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ih(C.i,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.hY()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.f(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gE(s);a2.p();)d.appendChild(a2.gw(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
d6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.fC()
u.c=u.i(0,q)
t=u.i(0,q).j(0,p)
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).j(0,p)
s=new T.J()
r=[T.al]
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("*"))
s.a.push(t)
t=u.i(0,p).j(0,"BoldEnd")
s=T.m(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,o)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).j(0,o)
s=new T.J()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("_"))
s.a.push(t)
t=u.i(0,o).j(0,n)
s=T.m(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,m)
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).j(0,m)
s=new T.J()
s.a=H.b([],r)
t.a.push(s)
t=T.m(new H.l("`"))
s.a.push(t)
t=u.i(0,m).j(0,"CodeEnd")
s=T.m(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).j(0,l)
s=T.m(new H.l("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).j(0,k)
s=T.m(new H.l("|"))
t.a.push(s)
s=u.i(0,l).j(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).j(0,l)
t=new T.J()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
s=u.i(0,k).j(0,j)
t=T.m(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).j(0,k)
t=new T.J()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("|]"))
t.a.push(s)
u.i(0,q).j(0,i).a.push(new T.a3())
s=u.i(0,i).j(0,i)
t=new T.J()
t.a=H.b([],r)
s.a.push(t)
s=T.m(new H.l("*_`["))
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
V.fj.prototype={
$1:function(a){P.iZ(C.h,new V.fi(this.a))}}
V.fi.prototype={
$0:function(){var u=C.c.W(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.fk.prototype={
$1:function(a){return a.a===this.a}};(function aliases(){var u=J.a.prototype
u.bZ=u.h
u=J.c4.prototype
u.c0=u.h
u=P.k.prototype
u.c_=u.ay
u=W.D.prototype
u.aC=u.O
u=W.d3.prototype
u.c1=u.Z
u=T.c1.prototype
u.bY=u.a1
u.b6=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kz","ki",5)
u(P,"kA","kj",5)
u(P,"kB","kk",5)
t(P,"jd","kx",8)
s(W,"kL",4,null,["$4"],["kl"],11,0)
s(W,"kM",4,null,["$4"],["km"],11,0)
var m
r(m=E.af.prototype,"gby",0,0,null,["$1","$0"],["bz","dL"],0,0)
r(m,"gbA",0,0,null,["$1","$0"],["bB","dM"],0,0)
r(m,"gbw",0,0,null,["$1","$0"],["bx","dK"],0,0)
r(m,"gbu",0,0,null,["$1","$0"],["bv","dH"],0,0)
q(m,"gdF","dG",2)
q(m,"gdI","dJ",2)
r(m=E.cr.prototype,"gb7",0,0,null,["$1","$0"],["b9","b8"],0,0)
p(m,"gdW","bH",8)
o(m=X.cx.prototype,"gcD","cE",3)
o(m,"gcp","cq",3)
o(m,"gcv","cw",1)
o(m,"gcH","cI",9)
o(m,"gcF","cG",9)
o(m,"gcK","cL",1)
o(m,"gcO","cP",1)
o(m,"gcB","cC",1)
o(m,"gcM","cN",1)
o(m,"gcz","cA",1)
o(m,"gcQ","cR",13)
o(m,"gcS","cT",3)
o(m,"gcZ","d_",4)
o(m,"gcV","cW",4)
o(m,"gcX","cY",4)
n(V.a9.prototype,"gk","aY",10)
n(V.C.prototype,"gk","aY",10)
r(m=M.bY.prototype,"ga5",0,0,null,["$1","$0"],["a6","c7"],0,0)
q(m,"gcr","cs",2)
q(m,"gct","cu",2)
r(X.cg.prototype,"gba",0,0,null,["$1","$0"],["a7","ca"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.i7,J.a,J.O,P.cR,P.k,H.bf,P.en,H.c_,H.fY,H.fH,P.aI,H.b7,H.d8,P.a5,H.ev,H.ew,H.er,P.hD,P.cA,P.co,P.fr,P.hH,P.hv,P.hp,P.cQ,P.n,P.dJ,P.ej,P.hF,P.aA,P.b9,P.T,P.ba,P.eY,P.cm,P.cI,P.ec,P.ee,P.aO,P.c9,P.ao,P.o,P.aT,W.dO,W.bx,W.u,W.ce,W.d3,W.hA,W.c0,W.a6,W.hu,W.di,P.hq,T.a3,T.c1,T.al,T.f2,T.fc,R.cn,R.cs,R.ct,R.fB,O.dK,O.bh,E.dF,E.af,E.f4,E.cr,Z.cz,Z.ha,Z.bR,Z.aK,Z.cy,D.dI,D.bc,D.Q,X.bS,X.c5,X.et,X.ez,X.bi,X.eL,X.fD,X.cx,V.aH,V.e3,V.bg,V.Z,V.aQ,V.ci,V.cj,V.a9,V.C,M.bY,A.bO,A.dA,A.cv,A.fR,F.aJ,F.be,F.bl,F.fd,F.fe,F.ff,F.fg,F.bu,F.h2,F.h3,F.h6,F.h7,O.cq,X.i_,X.fv,X.cg,V.bT,V.fh])
s(J.a,[J.eo,J.eq,J.c4,J.aj,J.c3,J.aL,H.bk,W.c,W.dx,W.bP,W.W,W.t,W.cC,W.P,W.dT,W.dW,W.cE,W.bX,W.cG,W.dY,W.h,W.cJ,W.ai,W.eh,W.cM,W.ey,W.eF,W.cS,W.cT,W.an,W.cU,W.cX,W.ap,W.d0,W.d2,W.ar,W.d4,W.as,W.d9,W.a7,W.dc,W.fA,W.au,W.de,W.fF,W.h_,W.dj,W.dl,W.dn,W.dq,W.ds,P.aN,P.cO,P.aP,P.cZ,P.f1,P.da,P.aV,P.dg,P.dB,P.cB,P.d6])
s(J.c4,[J.eZ,J.bt,J.ak])
t(J.i6,J.aj)
s(J.c3,[J.c2,J.ep])
t(P.ex,P.cR)
s(P.ex,[H.cw,W.hh,W.H,P.e8])
t(H.l,H.cw)
s(P.k,[H.e0,H.eC,H.bv])
s(H.e0,[H.c8,H.c6])
s(P.en,[H.eD,H.hb])
t(H.eE,H.c8)
s(P.aI,[H.eV,H.es,H.fX,H.dH,H.fa,P.cf,P.U,P.fZ,P.fW,P.bp,P.dL,P.dR])
s(H.b7,[H.hW,H.fw,H.hQ,H.hR,H.hS,P.hd,P.hc,P.he,P.hf,P.hE,P.hK,P.hs,P.ht,P.eB,P.dZ,P.e_,W.e1,W.eH,W.eJ,W.f9,W.fq,W.hl,W.eU,W.eT,W.hw,W.hx,W.hC,W.hG,P.hL,P.e9,P.ea,P.dD,E.f5,E.f6,E.f7,E.fz,D.e4,D.e5,F.hI,F.h8,F.h4,F.h5,V.fj,V.fi,V.fk])
s(H.fw,[H.fo,H.b5])
t(P.eA,P.a5)
s(P.eA,[H.X,W.hg])
t(H.ca,H.bk)
s(H.ca,[H.by,H.bA])
t(H.bz,H.by)
t(H.bj,H.bz)
t(H.bB,H.bA)
t(H.cb,H.bB)
s(H.cb,[H.eN,H.eO,H.eP,H.eQ,H.eR,H.cc,H.eS])
t(P.hr,P.hH)
t(P.ho,P.hv)
t(P.dM,P.fr)
t(P.e2,P.dJ)
s(P.dM,[P.ei,P.h1])
t(P.h0,P.e2)
s(P.T,[P.A,P.B])
s(P.U,[P.aS,P.ek])
s(W.c,[W.w,W.e7,W.aq,W.bC,W.at,W.a8,W.bE,W.h9,W.bw,P.dE,P.aE])
s(W.w,[W.D,W.ad])
s(W.D,[W.j,P.i])
s(W.j,[W.dy,W.dz,W.aF,W.aG,W.S,W.eb,W.fb,W.cp,W.ft,W.fu,W.bq])
t(W.dN,W.W)
t(W.b8,W.cC)
s(W.P,[W.dP,W.dQ])
t(W.cF,W.cE)
t(W.bW,W.cF)
t(W.cH,W.cG)
t(W.dX,W.cH)
t(W.ah,W.bP)
t(W.cK,W.cJ)
t(W.e6,W.cK)
t(W.cN,W.cM)
t(W.bd,W.cN)
t(W.av,W.h)
s(W.av,[W.aM,W.Y,W.aU])
t(W.eG,W.cS)
t(W.eI,W.cT)
t(W.cV,W.cU)
t(W.eK,W.cV)
t(W.cY,W.cX)
t(W.cd,W.cY)
t(W.d1,W.d0)
t(W.f0,W.d1)
t(W.f8,W.d2)
t(W.bD,W.bC)
t(W.fl,W.bD)
t(W.d5,W.d4)
t(W.fm,W.d5)
t(W.fp,W.d9)
t(W.dd,W.dc)
t(W.fx,W.dd)
t(W.bF,W.bE)
t(W.fy,W.bF)
t(W.df,W.de)
t(W.fE,W.df)
t(W.ax,W.Y)
t(W.dk,W.dj)
t(W.hi,W.dk)
t(W.cD,W.bX)
t(W.dm,W.dl)
t(W.hm,W.dm)
t(W.dp,W.dn)
t(W.cW,W.dp)
t(W.dr,W.dq)
t(W.hy,W.dr)
t(W.dt,W.ds)
t(W.hz,W.dt)
t(W.hj,W.hg)
t(W.hk,P.co)
t(W.hB,W.d3)
t(P.a0,P.hq)
t(P.cP,P.cO)
t(P.eu,P.cP)
t(P.d_,P.cZ)
t(P.eW,P.d_)
t(P.bo,P.i)
t(P.db,P.da)
t(P.fs,P.db)
t(P.dh,P.dg)
t(P.fG,P.dh)
t(P.dC,P.cB)
t(P.eX,P.aE)
t(P.d7,P.d6)
t(P.fn,P.d7)
s(T.c1,[T.J,R.cu])
s(E.dF,[Z.bQ,A.cl])
s(D.Q,[D.el,D.em,D.z])
t(U.eM,D.dI)
s(U.eM,[U.bU,U.ck])
t(A.dV,A.cl)
s(A.cv,[A.fJ,A.fM,A.fO,A.fQ,A.fK,A.br,A.fL,A.fN,A.fP,A.fS,A.fT,A.bs,A.fU,A.fV])
t(O.dU,O.cq)
t(X.ed,X.fv)
s(V.bT,[V.dS,V.ef,V.eg,V.f_])
u(H.cw,H.fY)
u(H.by,P.n)
u(H.bz,H.c_)
u(H.bA,P.n)
u(H.bB,H.c_)
u(P.cR,P.n)
u(W.cC,W.dO)
u(W.cE,P.n)
u(W.cF,W.u)
u(W.cG,P.n)
u(W.cH,W.u)
u(W.cJ,P.n)
u(W.cK,W.u)
u(W.cM,P.n)
u(W.cN,W.u)
u(W.cS,P.a5)
u(W.cT,P.a5)
u(W.cU,P.n)
u(W.cV,W.u)
u(W.cX,P.n)
u(W.cY,W.u)
u(W.d0,P.n)
u(W.d1,W.u)
u(W.d2,P.a5)
u(W.bC,P.n)
u(W.bD,W.u)
u(W.d4,P.n)
u(W.d5,W.u)
u(W.d9,P.a5)
u(W.dc,P.n)
u(W.dd,W.u)
u(W.bE,P.n)
u(W.bF,W.u)
u(W.de,P.n)
u(W.df,W.u)
u(W.dj,P.n)
u(W.dk,W.u)
u(W.dl,P.n)
u(W.dm,W.u)
u(W.dn,P.n)
u(W.dp,W.u)
u(W.dq,P.n)
u(W.dr,W.u)
u(W.ds,P.n)
u(W.dt,W.u)
u(P.cO,P.n)
u(P.cP,W.u)
u(P.cZ,P.n)
u(P.d_,W.u)
u(P.da,P.n)
u(P.db,W.u)
u(P.dg,P.n)
u(P.dh,W.u)
u(P.cB,P.a5)
u(P.d6,P.n)
u(P.d7,W.u)})()
var v={mangledGlobalNames:{B:"int",A:"double",T:"num",o:"String",aA:"bool",ao:"Null",aO:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:-1,args:[P.B,[P.k,E.af]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.ao,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aM]},{func:1,ret:P.A},{func:1,ret:P.aA,args:[W.D,P.o,P.o,W.bx]},{func:1,ret:P.ao,args:[,]},{func:1,ret:-1,args:[W.ax]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.aF.prototype
C.C=W.aG.prototype
C.D=W.S.prototype
C.F=J.a.prototype
C.a=J.aj.prototype
C.d=J.c2.prototype
C.c=J.c3.prototype
C.b=J.aL.prototype
C.G=J.ak.prototype
C.p=J.eZ.prototype
C.q=W.cp.prototype
C.l=J.bt.prototype
C.r=W.ax.prototype
C.t=W.bw.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.A=new P.eY()
C.f=new P.h0()
C.B=new P.h1()
C.e=new P.hr()
C.h=new P.ba(0)
C.E=new P.ej("element",!1,!1,!1)
C.H=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.I=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.J=H.b(u([]),[P.o])
C.i=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])})();(function staticFields(){$.V=0
$.b6=null
$.iy=null
$.jh=null
$.jc=null
$.jl=null
$.hM=null
$.hT=null
$.iq=null
$.aW=null
$.bH=null
$.bI=null
$.ij=!1
$.a2=C.e
$.L=[]
$.a4=null
$.i1=null
$.iE=null
$.iD=null
$.cL=P.iG(P.o,P.ee)
$.iK=null
$.iO=null
$.iP=null
$.iU=null
$.j1=null
$.j4=null
$.j3=null
$.j2=null
$.iN=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"l3","jp",function(){return H.jf("_$dart_dartClosure")})
u($,"l4","iu",function(){return H.jf("_$dart_js")})
u($,"l5","jq",function(){return H.a1(H.fI({
toString:function(){return"$receiver$"}}))})
u($,"l6","jr",function(){return H.a1(H.fI({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"l7","js",function(){return H.a1(H.fI(null))})
u($,"l8","jt",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lb","jw",function(){return H.a1(H.fI(void 0))})
u($,"lc","jx",function(){return H.a1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"la","jv",function(){return H.a1(H.j_(null))})
u($,"l9","ju",function(){return H.a1(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"le","jz",function(){return H.a1(H.j_(void 0))})
u($,"ld","jy",function(){return H.a1(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lr","iv",function(){return P.kh()})
u($,"lt","jE",function(){return P.ka("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ls","jD",function(){return P.iH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"ll","jC",function(){return Z.R(0)})
u($,"lf","jA",function(){return Z.R(511)})
u($,"ln","ac",function(){return Z.R(1)})
u($,"lm","b1",function(){return Z.R(2)})
u($,"lh","b0",function(){return Z.R(4)})
u($,"lo","b2",function(){return Z.R(8)})
u($,"lp","b3",function(){return Z.R(16)})
u($,"li","bL",function(){return Z.R(32)})
u($,"lj","bM",function(){return Z.R(64)})
u($,"lk","jB",function(){return Z.R(96)})
u($,"lq","b4",function(){return Z.R(128)})
u($,"lg","b_",function(){return Z.R(256)})
u($,"l2","jo",function(){return new V.e3(1e-9)})
u($,"l1","y",function(){return $.jo()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bk,ArrayBufferView:H.bk,Float32Array:H.bj,Float64Array:H.bj,Int16Array:H.eN,Int32Array:H.eO,Int8Array:H.eP,Uint16Array:H.eQ,Uint32Array:H.eR,Uint8ClampedArray:H.cc,CanvasPixelArray:H.cc,Uint8Array:H.eS,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.dx,HTMLAnchorElement:W.dy,HTMLAreaElement:W.dz,Blob:W.bP,HTMLBodyElement:W.aF,HTMLCanvasElement:W.aG,CDATASection:W.ad,CharacterData:W.ad,Comment:W.ad,ProcessingInstruction:W.ad,Text:W.ad,CSSPerspective:W.dN,CSSCharsetRule:W.t,CSSConditionRule:W.t,CSSFontFaceRule:W.t,CSSGroupingRule:W.t,CSSImportRule:W.t,CSSKeyframeRule:W.t,MozCSSKeyframeRule:W.t,WebKitCSSKeyframeRule:W.t,CSSKeyframesRule:W.t,MozCSSKeyframesRule:W.t,WebKitCSSKeyframesRule:W.t,CSSMediaRule:W.t,CSSNamespaceRule:W.t,CSSPageRule:W.t,CSSRule:W.t,CSSStyleRule:W.t,CSSSupportsRule:W.t,CSSViewportRule:W.t,CSSStyleDeclaration:W.b8,MSStyleCSSProperties:W.b8,CSS2Properties:W.b8,CSSImageValue:W.P,CSSKeywordValue:W.P,CSSNumericValue:W.P,CSSPositionValue:W.P,CSSResourceValue:W.P,CSSUnitValue:W.P,CSSURLImageValue:W.P,CSSStyleValue:W.P,CSSMatrixComponent:W.W,CSSRotation:W.W,CSSScale:W.W,CSSSkew:W.W,CSSTranslation:W.W,CSSTransformComponent:W.W,CSSTransformValue:W.dP,CSSUnparsedValue:W.dQ,DataTransferItemList:W.dT,HTMLDivElement:W.S,DOMException:W.dW,ClientRectList:W.bW,DOMRectList:W.bW,DOMRectReadOnly:W.bX,DOMStringList:W.dX,DOMTokenList:W.dY,Element:W.D,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.ah,FileList:W.e6,FileWriter:W.e7,HTMLFormElement:W.eb,Gamepad:W.ai,History:W.eh,HTMLCollection:W.bd,HTMLFormControlsCollection:W.bd,HTMLOptionsCollection:W.bd,KeyboardEvent:W.aM,Location:W.ey,MediaList:W.eF,MIDIInputMap:W.eG,MIDIOutputMap:W.eI,MimeType:W.an,MimeTypeArray:W.eK,PointerEvent:W.Y,MouseEvent:W.Y,DragEvent:W.Y,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cd,RadioNodeList:W.cd,Plugin:W.ap,PluginArray:W.f0,RTCStatsReport:W.f8,HTMLSelectElement:W.fb,SourceBuffer:W.aq,SourceBufferList:W.fl,SpeechGrammar:W.ar,SpeechGrammarList:W.fm,SpeechRecognitionResult:W.as,Storage:W.fp,CSSStyleSheet:W.a7,StyleSheet:W.a7,HTMLTableElement:W.cp,HTMLTableRowElement:W.ft,HTMLTableSectionElement:W.fu,HTMLTemplateElement:W.bq,TextTrack:W.at,TextTrackCue:W.a8,VTTCue:W.a8,TextTrackCueList:W.fx,TextTrackList:W.fy,TimeRanges:W.fA,Touch:W.au,TouchEvent:W.aU,TouchList:W.fE,TrackDefaultList:W.fF,CompositionEvent:W.av,FocusEvent:W.av,TextEvent:W.av,UIEvent:W.av,URL:W.h_,VideoTrackList:W.h9,WheelEvent:W.ax,Window:W.bw,DOMWindow:W.bw,CSSRuleList:W.hi,ClientRect:W.cD,DOMRect:W.cD,GamepadList:W.hm,NamedNodeMap:W.cW,MozNamedAttrMap:W.cW,SpeechRecognitionResultList:W.hy,StyleSheetList:W.hz,SVGLength:P.aN,SVGLengthList:P.eu,SVGNumber:P.aP,SVGNumberList:P.eW,SVGPointList:P.f1,SVGScriptElement:P.bo,SVGStringList:P.fs,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aV,SVGTransformList:P.fG,AudioBuffer:P.dB,AudioParamMap:P.dC,AudioTrackList:P.dE,AudioContext:P.aE,webkitAudioContext:P.aE,BaseAudioContext:P.aE,OfflineAudioContext:P.eX,SQLResultSetRowList:P.fn})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ji,[])
else F.ji([])})})()
//# sourceMappingURL=main.dart.js.map
